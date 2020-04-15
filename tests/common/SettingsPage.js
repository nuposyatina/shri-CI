const assert = require('chai').assert;

describe("Main Page", () => {
  // it("При переходе на страницу настроек с бэкенда получаем текущие настройки, если есть", async function () {
  //   return this.browser
  //     .url("/settings")
  // });

  it("Нажатие на кнопку «Отмена» переводит на главную страницу", async function () {
    return this.browser
      .url("/settings")
      .element('.Form')
      .click('button[name="cancel')
      .assertView("plain", "body", {
        allowViewportOverflow: true,
        compositeImage: true,
        screenshotDelay: 500
      });
  });

  // it("Нажатие на кнопку «Сохранить» отправляет настройки на сервер", async function () {
  //   return this.browser
  //     .url("/settings")
  // });

  it("Нажатие на название в хэдере переводит на главную страницу", async function () {
    return this.browser
      .url("/settings")
      .element('.Header')
      .click('.Header__Link')
      .assertView("plain", "body", {
        allowViewportOverflow: true,
        compositeImage: true,
        screenshotDelay: 500
      });
  });
});