import React, { Component } from 'react';
import { getSettings, setSettings } from 'store/actions/settings';
import { connect, RootStateOrAny } from 'react-redux';
import _ from 'lodash';
import Field from 'library/Field';
import { History } from 'history';

export interface FormProps {
  settings: {
    isLoad: boolean;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    period: number;
    saving: boolean;
    error: boolean;
  };
  dispatch;
  history: History;
};

export interface FormState {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;
}

export class Form extends Component<FormProps, FormState> {
  constructor(props) {
    super(props)
  
    this.state = {
      repoName: '',
      buildCommand: '',
      mainBranch: 'master',
      period: 100
    }

    this.onCancelChanges = this.onCancelChanges.bind(this);
    this.onSaveChanges = this.onSaveChanges.bind(this);
    this.onChangeMaskedInput = this.onChangeMaskedInput.bind(this);
  }
  

  componentDidMount() {
    this.props.dispatch(getSettings());
  }

  componentDidUpdate(prevProps: FormProps, prevState: FormState) {
    const { isLoad, repoName, buildCommand, mainBranch, period } = this.props.settings;
    const stateIsNotChanged = _.isEqual(prevState, this.state);
    if (isLoad === true && isLoad !== prevProps.settings.isLoad && stateIsNotChanged) {
      this.setState({
        repoName,
        buildCommand,
        mainBranch,
        period
      });
    }
  }

  getOnChangeInput(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const result = field === 'period' ? +value : value;
      //пришлось заменить на callback, так как TS выдавал ошибку
      this.setState((prevState) => ({
        ...prevState,
        [field]: result
      }));
    };
  }

  onChangeMaskedInput(e) {
    const { value } = e.target;
    if (value === '') {
      return this.setState({ period: 0 })
    }
    if (!parseFloat(value)) return;
    this.setState({ period: parseFloat(value) })
  }

  getOnClearInput(field: keyof FormState) {
    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const result = field === 'period' ? 0 : '';
      //пришлось заменить на callback, так как TS выдавал ошибку
      this.setState((prevState) => ({
        ...prevState,
        [field]: result
      }));
    }
  }

  checkButtonDisabled() {
    const { repoName, buildCommand } = this.state;
    const { saving } = this.props.settings;
    return !buildCommand || !repoName || saving;
  }
  
  onSaveChanges(e) {
    e.preventDefault();
    this.props.dispatch(setSettings(this.state));
  }

  onCancelChanges(e) {
    this.props.history.push('/');
  }

  render() {
    const {
      repoName,
      buildCommand,
      mainBranch,
      period
    } = this.state;
    return (
      <form action='' className='Form' onSubmit={ this.onSaveChanges }>
        <div className='Form__Header'>
          <h2 className='Title Form__Title Text Text_size_m Text_view_primary'>Settings</h2>
          <p className='Form__Description Text Text_size_s Text_view_secondary'>Configure repository connection and synchronization settings</p>
        </div>

        <div className='Form__Content'>
          <Field
            id='repository'
            placeholder='user-name/repo-name'
            labelText='GitHub repository'
            inputValue={ repoName }
            required
            clearButton
            onChange={ this.getOnChangeInput('repoName') }
            onClear={ this.getOnClearInput('repoName') }
          />
          <Field
            id='command'
            placeholder='npm run build'
            labelText='Build command'
            inputValue={ buildCommand }
            required
            clearButton
            onChange={ this.getOnChangeInput('buildCommand') }
            onClear={ this.getOnClearInput('buildCommand') }
          />
          <Field
            id='branch'
            placeholder='master'
            labelText='Main Branch'
            inputValue={ mainBranch }
            clearButton
            onChange={ this.getOnChangeInput('mainBranch') }
            onClear={ this.getOnClearInput('mainBranch') }
          />
          <Field
            mods='Field_align_line Settings__SyncTimeField'
            id='period'
            labelText='Synchronize every'
            inputValue={ period }
            clearButton={ false }
            onChange={ this.onChangeMaskedInput }
            onClear={ this.onChangeMaskedInput }
          >
            <span className='Field__Measure Text Text_size_s'>minutes</span>
          </Field>
        </div>

        <div className='Form__Action'>
          <button
            name='submit'
            className='Button Button_view_submit Button_size_m Form__SubmitButton Button_type_default'
            type='submit'
            disabled={ this.checkButtonDisabled() }
          >
            Save
          </button>
          <button
            name='cancel'
            className='Button Button_view_default Button_size_m Button_type_default'
            type='button'
            onClick={ this.onCancelChanges }
          >
            Cancel
          </button>
        </div>
        {this.props.settings.error && <p className='Text Text_view_fail Text_size_s ErrorText'>Во время сохранения настроек возникла ошибка. Проверьте правильность введенных данных.</p>}
      </form>
    )
  }
}

export default connect((state: RootStateOrAny) => {
  return {
    settings: state.settings
  };
})(Form);
