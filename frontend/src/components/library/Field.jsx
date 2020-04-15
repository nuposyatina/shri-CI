import React from 'react';
import ClearIcon from 'img/clear.svg';

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
    <div className={ `Field ${mods}`.trim() }>
      {      
        labelText ? (<label
          className='Field__Label Text Text_size_s Text_view_primary'
          htmlFor={ id }
        >
          { labelText }
          { required ? <span className='Field__Required'> *</span> : '' }
        </label>) : null
      }
          <input
            className='Input Field__Control'
            placeholder={ placeholder }
            id={ id }
            type='text'
            value={ inputValue }
            onChange={ onChange }
          />

      {
        clearButton ? (
          <button
            className='Button Button_role_clear Field__Button'
            type='button'
            onClick={ onClear }
          >
            <ClearIcon className='Button__Icon Button__Icon_view_secondary' />
          </button>
        ) : null
      }
      { children }
    </div>
  )
};
