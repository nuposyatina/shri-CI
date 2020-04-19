import React from 'react';
import { shallow } from 'enzyme';
import { BuildCard } from 'library/BuildCard';

const defaultBuild = {
  "12345": {
    "id":"12345",
    "configurationId":"67890",
    "buildNumber":1,
    "commitMessage": "add hello world",
    "commitHash":"68205e873d35836121799758de9b58b36aea9c3d",
    "branchName":"master",
    "authorName":"Anna Tsukanova\n",
    "status":"Waiting"
}}
const defaultBuildId = "12345";

const setup = (buildDetails = defaultBuild, buildId = defaultBuildId, status = 'list') => {
  //FIXME: упростить стор
  const props = {
    buildId,
    status: "list",
    buildDetails,
    dispatch: jest.fn()
  };
  const cardComponent = shallow(<BuildCard { ...props }/>);
  return { cardComponent, props };
}

describe('Поведение компонента BuildCard', () => {
  test('Иконка и цвет номера билда определяются в зависимости от статуса билда', () => {
    //TODO: проверить статусы success и fail
    const { cardComponent } = setup();
    expect(cardComponent.find('.BuildCard__Status').hasClass('BuildCard__Status_status_progress')).toBe(true);
    expect(cardComponent.find('.BuildCard__Number').hasClass('BuildCard__Number_status_progress')).toBe(true);
  });

  test('Отображаются дата и время билда, если статус билда «success»', () => {
    const successBuildDetails = {
      "12345": {
        "id":"12345",
        "configurationId":"67890",
        "buildNumber":1,
        "commitMessage": "add hello world",
        "commitHash":"68205e873d35836121799758de9b58b36aea9c3d",
        "branchName":"master",
        "authorName":"Anna Tsukanova\n",
        "status":"Success",
        "start": "2020-04-15T08:14:38.149Z",
        "duration": 50
    }}
    const { cardComponent } = setup(successBuildDetails);
    const buildTimeContainer = cardComponent.find('.BuildCard__BuildDateTime');
    expect(buildTimeContainer).toHaveLength(1);
    const buildTimeElement = buildTimeContainer.find('.BuildCard__Date');
    expect(buildTimeElement.text()).toBe('15 апр. 11:14');
  });

  test('В карточке отображается верная информация', () => {    
    const successBuildDetails = {
      "12345": {
        "id":"12345",
        "configurationId":"67890",
        "buildNumber":1,
        "commitMessage": "add hello world",
        "commitHash":"68205e873d35836121799758de9b58b36aea9c3d",
        "branchName":"master",
        "authorName":"John Doe",
        "status":"Success",
        "start": "2020-04-15T08:14:38.149Z",
        "duration": 50
    }}
    const { cardComponent, props } = setup(successBuildDetails);
    const buildNumber = cardComponent.find('.BuildCard__Number');
    expect(buildNumber.text()).toBe('#1');

    const buildDescription = cardComponent.find('.BuildCard__Description');
    expect(buildDescription.text()).toBe('add hello world');

    const buildBranch = cardComponent.find('.BuildCard__Branch');
    expect(buildBranch.text()).toBe('master');

    const buildCommit = cardComponent.find('.BuildCard__Commit');
    expect(buildCommit.text()).toBe('68205e8');

    const buildAuthor = cardComponent.find('.BuildCard__Author');
    expect(buildAuthor.text()).toBe('John Doe');

    const buildDate = cardComponent.find('.BuildCard__Date');
    expect(buildDate.text()).toBe('15 апр. 11:14');

    const buildDuration = cardComponent.find('.BuildCard__TimeInfo');
    expect(buildDuration.text()).toBe('0 мин 50 сек');
  });
});
