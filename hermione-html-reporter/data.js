var data = {"skips":[],"suites":[{"name":"Main Page","suitePath":["Main Page"],"children":[{"name":"Если нет настроек, должен осуществляться переход на главную страницу","suitePath":["Main Page","Если нет настроек, должен осуществляться переход на главную страницу"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:1234/","name":"chrome","metaInfo":{"pid":43603,"url":"/","file":"tests/common/MainPage.js","sessionId":"8f5c76efad7fd905fae46a7453e78e84"},"imagesInfo":[{"stateName":"plain","refImg":{"path":"/Users/anya/Documents/Projects/shri-CI/hermione/screens/d41f454/chrome/plain.png","size":{"width":1200,"height":570}},"status":"success","expectedImg":{"path":"images/d41f454/plain/chrome~ref_0.png","size":{"width":1200,"height":570}}}],"screenshot":false,"multipleTabs":true,"status":"success","attempt":0},"retries":[]}],"status":"success"},{"name":"Клик на кнопку в основной части страницы переводит на страницу настроек","suitePath":["Main Page","Клик на кнопку в основной части страницы переводит на страницу настроек"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:1234/","name":"chrome","metaInfo":{"pid":43603,"url":"/","file":"tests/common/MainPage.js","sessionId":"8f5c76efad7fd905fae46a7453e78e84"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"status":"success","attempt":0},"retries":[]}],"status":"success"},{"name":"Клик на кнопку в хэдере переводит на страницу настроек","suitePath":["Main Page","Клик на кнопку в хэдере переводит на страницу настроек"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:1234/","name":"chrome","metaInfo":{"pid":43603,"url":"/","file":"tests/common/MainPage.js","sessionId":"8f5c76efad7fd905fae46a7453e78e84"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"status":"success","attempt":0},"retries":[]}],"status":"success"},{"name":"Нажатие на кнопку «Отмена» переводит на главную страницу","suitePath":["Main Page","Нажатие на кнопку «Отмена» переводит на главную страницу"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:1234/settings","name":"chrome","metaInfo":{"pid":43603,"url":"/settings","file":"tests/common/SettingsPage.js","sessionId":"8f5c76efad7fd905fae46a7453e78e84"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"status":"success","attempt":0},"retries":[]}],"status":"success"},{"name":"Нажатие на название в хэдере переводит на главную страницу","suitePath":["Main Page","Нажатие на название в хэдере переводит на главную страницу"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:1234/settings","name":"chrome","metaInfo":{"pid":43603,"url":"/settings","file":"tests/common/SettingsPage.js","sessionId":"8f5c76efad7fd905fae46a7453e78e84"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"status":"success","attempt":0},"retries":[]}],"status":"success"}],"status":"success"}],"config":{"defaultView":"all","baseHost":"","scaleImages":false,"lazyLoadOffset":800,"errorPatterns":[],"metaInfoBaseUrls":{},"customGui":{},"customScripts":[]},"apiValues":{"extraItems":{},"metaInfoExtenders":{},"imagesSaver":{"saveImg":"async (srcCurrPath, {destPath, reportDir}) => {\n        await utils.copyFileAsync(srcCurrPath, destPath, reportDir);\n\n        return destPath;\n    }"},"reportsSaver":null},"date":"Wed Apr 15 2020 19:57:22 GMT+0300 (GMT+03:00)","saveFormat":"js","total":5,"passed":5,"failed":0,"skipped":0,"retries":0,"perBrowser":{"chrome":{"total":5,"passed":5,"failed":0,"skipped":0,"retries":0}}};
try { module.exports = data; } catch(e) {}