import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'lib';
import { changeCurrentLanguage, getLocales } from 'store/actions/locales';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }
  

  onChangeLanguage(e) {
    e.preventDefault();
    const { locales, dispatch } = this.props;
    const { currentLanguage } = locales;
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    if (locales[newLanguage]) {
      return dispatch(changeCurrentLanguage(newLanguage));
    }

    dispatch(getLocales(newLanguage));
  }

  render() {
    return (
      <footer className='Footer'>
        <div className='Footer__Content'>
          <div className='Footer__Links'>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>{ localize('Footer_SupportLink') }</a>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>{ localize('Footer_LearningLink') }</a>
            <a
              href=''
              onClick={ this.onChangeLanguage }
              className='Footer__Link Text Text_size_s Text_view_secondary'
            >{ localize('Footer_LangLink') }</a>
          </div>
          <div className='Footer__Copyright Text Text_size_s Text_view_secondary'>{ localize('Footer_Copyright') }</div>
        </div>
      </footer>
    )
  }
}

export default connect((state) => {
  return {
    locales: state.locales
  };
})(Footer);
