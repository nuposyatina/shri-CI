const assert = require('chai').assert;

describe("Main Page", () => {
  it("Если нет настроек, должен осуществляться переход на главную страницу", async function () {
    return this.browser
      .url("/")
      .assertView("plain", "body", {
        allowViewportOverflow: true,
        compositeImage: true,
        screenshotDelay: 500
      });
  });

  it("Клик на кнопку в хэдере переводит на страницу настроек", async function () {
    return this.browser
      .url("/")
      .element('.Header')
      .click('.Button_role_settings')
      .getUrl()
      .then((url) => assert.equal(url, 'http://localhost:1234/settings'))
  });

  it("Клик на кнопку в основной части страницы переводит на страницу настроек", async function () {
    return this.browser
      .url("/")
      .element('.SettingsPreview')
      .click('.Button')
      .getUrl()
      .then((url) => assert.equal(url, 'http://localhost:1234/settings'))
  });
});
