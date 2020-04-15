const assert = require('chai').assert;

describe("Settings Page", () => {
  it("При переходе на страницу настроек с бэкенда получаем текущие настройки, если есть", async function () {
    return this.browser
      .url("/settings")
      .assertView("plain", "body", {
        allowViewportOverflow: true,
        compositeImage: true,
        screenshotDelay: 500
      });
  });

  it("Нажатие на кнопку «Отмена» переводит на главную страницу", async function () {
    return this.browser
      .url("/settings")
      .element('.Form')
      .click('button[name="cancel"')
      .getUrl()
      .then((url) => assert.equal(url, 'http://localhost:1234/'))
  });

  it("Нажатие на кнопку «Сохранить» отправляет настройки на сервер", async function () {
    return this.browser
      .url("/settings")
      .element('.Form')
      .setValue('#repository', 'nuposyatina/shri-simple-tes')
      .setValue('#command', 'npm run build')
      .submitForm('.Form')
  });

  it("Нажатие на название в хэдере переводит на главную страницу", async function () {
    return this.browser
      .url("/settings")
      .element('.Header')
      .click('.Header__Link')
      .getUrl()
      .then((url) => assert.equal(url, 'http://localhost:1234/'))
  });
});