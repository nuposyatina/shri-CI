import React, { Component } from 'react';
import { getSettings } from '../../store/actions/settings';
import { connect } from 'react-redux';
import _ from 'lodash';
import Field from './Field';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      repoName: '',
      buildCommand: '',
      mainBranch: '',
      period: ''
    }
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
      const result = field === 'period' ? value : +value;
      this.setState({ [field]: result });
    };
  }

  getOnClearInput(field) {
    return (e) => {
      e.preventDefault();
      const result = field === 'period' ? 0 : '';
      this.setState({ [field]: result });
    }
  }

  render() {
    const {
      repoName,
      buildCommand,
      mainBranch,
      period
    } = this.state;
    return (
      <form action='' className='Form'>
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
            type='number'
            id='synctime'
            labelText='Synchronize every'
            inputValue={ period }
            clearButton={ false }
            onChange={ this.getOnChangeInput('period') }
            onClear={ this.getOnClearInput('period') }
          >
            <span className='Field__Measure Text Text_size_s'>minutes</span>
          </Field>
        </div>

        <div className='Form__Action'>
          <button className='Button Button_view_submit Button_size_m Form__SubmitButton Button_type_default' type='submit'>Save</button>
          <button className='Button Button_view_default Button_size_m Button_type_default'>Cancel</button>
        </div>
      </form>
    )
  }
}

export default connect((state) => {
  return {
    settings: state.settings
  };
})(Form);
