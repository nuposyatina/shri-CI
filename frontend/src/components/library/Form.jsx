import React, { Component } from 'react';
import { getSettings, setSettings } from 'store/actions/settings';
import { connect } from 'react-redux';
import _ from 'lodash';
import Field from './Field';
import { localize } from 'lib';
import { declination } from './lib';

export class Form extends Component {
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
    this.onChangeMaskedInput = this.onChangeMaskedInput.bind(this)
  }
  

  componentDidMount() {
    this.props.dispatch(getSettings());
  }

  componentDidUpdate(prevProps, prevState) {
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

  getOnChangeInput(field) {
    return (e) => {
      const { value } = e.target;
      const result = field === 'period' ? +value : value;
      this.setState({ [field]: result });
    };
  }

  getSyncText(word) {
    const { period } = this.state;
    const currentText = declination(
      period,
      [
        localize('Settings_Sync_one'),
        localize('Settings_Sync_few'),
        localize('Settings_Sync_more')]
    );
    const [first, second] = currentText.split('#');
    return word === 'first' ? first : second;
  }

  onChangeMaskedInput(e) {
    const { value } = e.target;
    if (value === '') {
      return this.setState({ period: 0 })
    }
    if (!parseFloat(value)) return;
    this.setState({ period: parseFloat(value) })
  }

  getOnClearInput(field) {
    return (e) => {
      const result = field === 'period' ? 0 : '';
      this.setState({ [field]: result });
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
          <h2 className='Title Form__Title Text Text_size_m Text_view_primary'>
            { localize('Settings_FormTitle') }
          </h2>
          <p className='Form__Description Text Text_size_s Text_view_secondary'>
            { localize('Settings_FormDescription') }
          </p>
        </div>

        <div className='Form__Content'>
          <Field
            id='repository'
            placeholder={ localize('Settings_RepoName_placeholder') }
            labelText={ localize('Settings_RepoName') }
            inputValue={ repoName }
            required
            clearButton
            onChange={ this.getOnChangeInput('repoName') }
            onClear={ this.getOnClearInput('repoName') }
          />
          <Field
            id='command'
            placeholder={ localize('Settings_BuildCommand_default') }
            labelText={ localize('Settings_BuildCommand') }
            inputValue={ buildCommand }
            required
            clearButton
            onChange={ this.getOnChangeInput('buildCommand') }
            onClear={ this.getOnClearInput('buildCommand') }
          />
          <Field
            id='branch'
            placeholder={ localize('Settings_MainBranch_default') }
            labelText={ localize('Settings_MainBranch') }
            inputValue={ mainBranch }
            clearButton
            onChange={ this.getOnChangeInput('mainBranch') }
            onClear={ this.getOnClearInput('mainBranch') }
          />
          <Field
            mods='Field_align_line Settings__SyncTimeField'
            type='number'
            id='period'
            labelText={ this.getSyncText('first') }
            inputValue={ period }
            clearButton={ false }
            onChange={ this.onChangeMaskedInput }
            onClear={ this.onChangeMaskedInput }
          >
            <span className='Field__Measure Text Text_size_s'>
              { this.getSyncText('second') }
            </span>
          </Field>
        </div>

        <div className='Form__Action'>
          <button
            name='submit'
            className='Button Button_view_submit Button_size_m Form__SubmitButton Button_type_default'
            type='submit'
            disabled={ this.checkButtonDisabled() }
          >
            { localize('Settings_SaveButton') }
          </button>
          <button
            name='cancel'
            className='Button Button_view_default Button_size_m Button_type_default'
            type='button'
            onClick={ this.onCancelChanges }
          >
            { localize('Settings_CancelButton') }
          </button>
        </div>
        {
          this.props.settings.error && (
            <p className='Text Text_view_fail Text_size_s ErrorText'>
              { localize('Settings_ErrorText') }
            </p>
          )
        }
      </form>
    )
  }
}

export default connect((state) => {
  return {
    settings: state.settings,
    locales: state.locales
  };
})(Form);
