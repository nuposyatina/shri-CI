import React, { Component } from 'react'
import Field from './Field'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      commitHash: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClearInput = this.onClearInput.bind(this);
  }

  onChangeInput() {

  }

  onClearInput() {

  }
  
  render() {
    const { commitHash } = this.state;
    return (
      <form action="" className='Modal'>
        <h2 className='Modal__Header Text Text_size_xl Text_view_primary'>
          New build
        </h2>
        <p className='Modal__Description Text Text_size_s Text_view_primary'>
          Enter the commit hash which you want to build
        </p>
        <Field
          mods='Modal__Field'
          id='hash'
          placeholder='Commit hash'
          inputValue={ commitHash }
          required
          clearButton
          onChange={ this.getOnChangeInput }
          onClear={ this.getOnClearInput }
        />
        <div className='Modal__Action'>
          <button className='Button Button_view_submit Button_size_m Button_type_default Modal__SubmitButton' type="submit">
            Run Build
          </button>
          <button className='Button Button_view_default Button_size_m Button_type_default'>
            Cancel
          </button>
        </div>

      </form>
    )
  }
}
