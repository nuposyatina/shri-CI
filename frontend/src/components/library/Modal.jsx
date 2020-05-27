import React, { Component } from 'react';
import Field from 'library/Field';
import { runBuild } from 'store/actions/build';
import { localize } from 'lib';

export default class Modal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      commitHash: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClearInput = this.onClearInput.bind(this);
    this.onRunBuild = this.onRunBuild.bind(this);
  }

  onChangeInput(e) {
    this.setState({ commitHash: e.target.value });
  }

  onClearInput() {
    this.setState({ commitHash: '' });
  }

  onRunBuild(e) {
    e.preventDefault();
    this.props.dispatch(runBuild(this.state.commitHash));
  }
  
  render() {
    const { commitHash } = this.state;
    return (
      <form
        action=""
        className='Modal'
        onSubmit={ this.onRunBuild }
      >
        <h2 className='Modal__Header Text Text_size_xl Text_view_primary'>
          { localize('Modal_Title') }
        </h2>
        <p className='Modal__Description Text Text_size_s Text_view_primary'>
          { localize('Modal_Description') }
        </p>
        <Field
          mods='Modal__Field'
          id='hash'
          placeholder={ localize('Modal_Placeholder') }
          inputValue={ commitHash }
          required
          clearButton
          onChange={ this.onChangeInput }
          onClear={ this.onClearInput }
        />
        <div className='Modal__Action'>
          <button
            className='Button Button_view_submit Button_size_m Button_type_default Modal__SubmitButton'
            type="submit"
          >
            { localize('Modal_RunButton') }
          </button>
          <button
            className='Button Button_view_default Button_size_m Button_type_default'
            type='button'
            onClick={ this.props.onClose }
          >
            { localize('Modal_CancelButton') }
          </button>
        </div>
      </form>
    )
  }
}
