const assert = require('chai').assert;

describe('github', function() {
    it('should find hermione', async function() {
      const browser = this.browser;
      await browser.url('https://github.com/gemini-testing/hermione');
      const text = await browser.getText('#readme h1');
      return assert.equal(text[0], 'Hermione');
        // return this.browser
        //     .url('https://github.com/gemini-testing/hermione')
            // .getText('#readme h1')
            // .then(function(title) {
            //     console.log(title)
            //     // assert.equal(title, 'Hermione')
            // });
    });
});