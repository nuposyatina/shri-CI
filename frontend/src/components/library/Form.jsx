import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form action='' className='Form'>
        <div className='Form__Header'>
          <h2 className='Title Form__Title Text Text_size_m Text_view_primary'>Settings</h2>
          <p className='Form__Description Text Text_size_s Text_view_secondary'>Configure repository connection and synchronization settings</p>
        </div>

        <div className='Form__Content'>
          <div className='Field Form__Field'>
            <label for='repository' className='Field__Label Text Text_size_s Text_view_primary'>GitHub repository <span className='Field__Required'>*</span></label>
            <input className='Input Field__Control' id='repository' type='text' placeholder='user-name/repo-name' />
            <button className='Button Button_role_clear Field__Button'>
              <svg className='Button__Icon Button__Icon_view_secondary' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
              </svg>
            </button>
          </div>

          <div className='Field Form__Field'>
            <label for='command' className='Field__Label Text Text_size_s Text_view_primary'>Build command</label>
            <input className='Input Field__Control' id='command' type='text' value='npm ci && npm run build' />
            <button className='Button Button_role_clear Field__Button'>
              <svg className='Button__Icon Button__Icon_view_secondary' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
              </svg>
            </button>
          </div>

          <div className='Field Form__Field'>
            <label for='branch' className='Field__Label Text Text_size_s Text_view_primary'>Main Branch</label>
            <input className='Input Field__Control' id='branch' type='text' value='master' />
            <button className='Button Button_role_clear Field__Button'>
              <svg className='Button__Icon Button__Icon_view_secondary' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
              </svg>
            </button>
          </div>

          <div className='Field Form__Field Field_align_line Settings__SyncTimeField'>
            <label for='synctime' className='Field__Label Text Text_size_s Text_view_primary'>Synchronize every</label>
            <input className='Input Field__Control' id='synctime' type='text' value='10' />
            <span className='Field__Measure Text Text_size_s'>minutes</span>
          </div>
        </div>

        <div className='Form__Action'>
          <button className='Button Button_view_submit Button_size_m Form__SubmitButton Button_type_default' type='submit'>Save</button>
          <button className='Button Button_view_default Button_size_m Button_type_default'>Cancel</button>
        </div>
      </form>
    )
  }
}
