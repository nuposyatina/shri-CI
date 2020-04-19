module.exports = {
  baseUrl: 'http://localhost:1234',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',
  sets: {
      common: {
          files: 'tests/common'
      }
  },

  browsers: {
      chrome: {
          desiredCapabilities: {
              browserName: 'chrome' // this browser should be installed on your OS
          }
      }
  },
  plugins: {
      'html-reporter/hermione': {
          path: 'hermione-html-reporter'
      }
  }
};