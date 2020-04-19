import React from 'react';
import { shallow } from 'enzyme';
import { BuildsHistory } from 'layouts/BuildsHistory';

const setup = (buildsQueue = [], allBuildsLoaded = false) => {
  const props = {
    buildsQueue,
    allBuildsLoaded,
    dispatch: jest.fn()
  }
  const historyComponent = shallow(<BuildsHistory { ...props }/>);
  return { historyComponent, props };
}

describe('Поведение компонента', () => {
  test('При нажатии на кнопку «Run Build» появляется модальное окно', () => {
    const { historyComponent } = setup();
    expect(historyComponent.find('Modal')).toHaveLength(0);
    const buildButton = historyComponent.find('#build');
    buildButton.simulate('click');
    expect(historyComponent.find('Modal')).toHaveLength(1);
  });

  test('Кнопка «Show More» исчезает, если загружены все билды', () => {
    const { historyComponent } = setup([], true);
    expect(historyComponent.find('#show-more')).toHaveLength(0);
  });

  test('При нажатии на «Show More» происходит запрос списка билдов на сервер', () => {
    const { historyComponent, props } = setup([], true);
    const showMoreButton = historyComponent.find('#show-more');
    showMoreButton.simulate('click');
    expect(props.dispatch).toHaveBeenCalledTimes(1);
  });
});