import React from 'react';
import MaskedInput from 'react-text-mask'

export default (props) => {
  const {
    id,
    required,
    labelText,
    inputValue,
    children,
    mods,
    clearButton,
    type,
    placeholder,
    onChange,
    onClear
  } = props;
  return (
    <div className={ `Field Form__Field ${mods}`.trim() }>
      <label
        className='Field__Label Text Text_size_s Text_view_primary'
        htmlFor={ id }
      >
        { labelText }
        { required ? <span className='Field__Required'> *</span> : '' }
      </label>
      {
        type === 'number' ? (
          <MaskedInput
            mask={ [/\d/, /\d/] }
            placeholder={ placeholder }
            className='Input Field__Control'
            id={ id }
            value={ inputValue }
            onChange={ onChange }
          />
        ) : (
          <input
            className='Input Field__Control'
            placeholder={ placeholder }
            id={ id }
            type='text'
            value={ inputValue }
            onChange={ onChange }
          />
        )
      }

      {
        clearButton ? (
          <button
            className='Button Button_role_clear Field__Button'
            type='button'
            onClick={ onClear }
          >
            <svg className='Button__Icon Button__Icon_view_secondary' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"/>
            </svg>
          </button>
        ) : null
      }
      { children }
    </div>
  )
};
