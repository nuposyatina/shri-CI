import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'library/Form';

const setup = (props = {}) => {
  const defaultProps = {
    settings: {
      isLoad: true,
      saving: false,
      error: false
    },
    dispatch: jest.fn()
  }
  const currentProps = {
    ...defaultProps,
    settings: {
      ...defaultProps.settings,
      ...props.settings
    }
  }
  const form = shallow(<Form { ...currentProps }/>);
  return { form, props };
}

describe('Валидация формы', () => {
  test('Нельзя отправить форму, если не заполнено поле «Репозиторий»', () => {
    const { form } = setup();
    form.setState({buildCommand: 'test command'});
    const repoField = form.find('#repository');
    expect(form.find('button[name="submit"]').prop('disabled')).toBe(true);

    repoField.simulate('change', {
      target: {
        value: 'user/test-repo'
      }
    });
    expect(form.find('button[name="submit"]').prop('disabled')).toBe(false);
  });

  test('Нельзя отправить форму, если не заполнено поле «Команда сборки»', () => {
    const { form } = setup();
    form.setState({repoName: 'user/test-repo'});
    const commandField = form.find('#command');
    commandField.simulate('clear');
    expect(form.find('button[name="submit"]').prop('disabled')).toBe(true);

    commandField.simulate('change', {
      target: {
        value: 'test command'
      }
    });
    expect(form.find('button[name="submit"]').prop('disabled')).toBe(false);
  });

  test('По умолчанию выбрана ветка «master»', () => {
    const { form } = setup();
    expect(form.state('mainBranch')).toBe('master');
  });

  test('Команда сборки по умолчанию «npm run build»', () => {
    const { form } = setup();
    expect(form.state('buildCommand')).toBe('npm run build');
  });

  test('В поле период записывается только число', () => {
    const { form } = setup();
    const periodField = form.find('#period');
    expect(form.state('period')).toBe(100);

    form.find('#period').simulate('change', {
      target: {
        value: 'qwerty'
      }
    });
    expect(form.state('period')).toBe(100);

    form.find('#period').simulate('change', {
      target: {
        value: '123qwerty'
      }
    });
    expect(form.state('period')).toBe(123);

    form.find('#period').simulate('change', {
      target: {
        value: '80'
      }
    });
    expect(form.state('period')).toBe(80);
  });
});

describe('Поведение компонентов формы', () => {
  test('Пока идет сохранение, заблокированы кнопки «сохранить» и «отмена»', () => {
    const { form } = setup({
      settings: {
        saving: true
      }
    });
    form.setState({ repoName: 'user/test-repo' });

    expect(form.find('button[name="submit"]').prop('disabled')).toBe(true);
  });

  test('Если клонирование репозитория закончилось ошибкой, отображается сообщение об ошибке', () => {
    const { form } = setup({
      settings: {
        error: true,
      }
    });
    expect(form.find('.ErrorText')).toHaveLength(1);
  });

  test('Если клонирование репозитория закончилось ошибкой, кнопки разблокируются', () => {
    const { form } = setup({
      settings: {
        error: true,
      }
    });
    form.setState({ repoName: 'user/test-repo' });
    expect(form.find('button[name="submit"]').prop('disabled')).toBe(false);
  });

  test('При нажатии на кнопку очистки поле ввода очищается', () => {
    const { form } = setup();
    const repoField = form.find('#repository');
    expect(form.state('repoName')).toBe('');
    repoField.simulate('change', {
      target: {
        value: 'test-repo'
      }
    });
    expect(form.state('repoName')).toBe('test-repo');
    repoField.simulate('clear');
    expect(form.state('repoName')).toBe('');
  });
});
