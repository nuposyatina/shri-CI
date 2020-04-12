# Домашнее задание ШРИ
## Клиентская часть
К сожалению, не успела доделать задание до конца к дедлайну, но постаралась реализовать как можно больше функционала. В течение нескольких дней после дедлайна постараюсь доделать.

С Реактом до этого работала, но только поддерживала уже существующий проект. До этого с нуля проект не настраивала.

Решила не использовать create-react-app, а в качестве сборщика использую parcel потому что:
- Он быстрый
- Он легко настраивается
- У него отличная документация
- Смогу установить только то, что мне нужно на данный момент, ничего лишнего.

Фронтенд проекта вынесла в отдельную папку. Заимпортила стили в один файл и подключила в рутовый html-файл, с которого parcel и начинает собирать проект.

Верстку разбила на 2 вида компонентов. В папке layouts хранятся компоненты-страницы, в library - более мелкие компоненты, составные части страниц. Не все БЭМ-блоки стали компонентами, так как некоторые из них просто миксуются к другим.

Роутинг реализовала с помощью react-router.

Все, что относится к редаксу находится в папке store.

Для создания асинхронных redux-экшенов использовала библиотеку redux-thunk.
Компоненты, имеющие состояние реализовала с помощью классов, так как они для меня более понятны и работают более очевидно. Если останется время, перепишу на компоненты-функции с хуками.

Ввод текста в инпуты делала через локальный стейт компонента, а не через стор редакса, так как при вызове диспатча перебираются все редьюсеры, но просто возвращают неизменный стейт. Поэтому мне показалось более уместным в этом случае работать со стейтом.

Что сделано на данный момент:
- [x] Разбила верстку на компоненты
- [x] Роуты ведут на нужные страницы
- [x] Есть переход с главной страницы на страницу настроек
- [x] Работает получение настроек с сервера и их сохранение
- [x] Работает валидация формы настроек
- [x] Во время сохранения настроек кнопки «Сохранить» и «Отмена» заблокированы
- [x] Сверстала модальное окно, появляющееся при нажатии Run Build
- [x] Реализовала логику работы модального окна
- [x] Реализовала логику работы страницы с историей билдов
  - [x] Добавила получение списка билдов при отрисовке страницы BuildHistory
  - [x] Кнопка show more не показывается, если нет ни одного билда
  - [x] Заменила моковые данные билдов на данные, приходящие с сервера
  - [x] Нажатие на кнопку show more догружает часть билдов
  - [x] Иконки и номера билдов в карточках раскрашиваются в зависимости от статуса
  - [x] Отображаются дата и время билда
  - [x] Отформатировала код, чтобы от него не сильно вытекали глаза
  - [x] Клик по карточке билда со статусом Success или Fail переводит на страницу билда
  - [ ] Отображается правильная иконка в зависимости от статуса билда (сейчас только успешная)
  - [ ] Починить стили модального окна
  - [ ] Привязать отображение кнопки show more к первому билду
  - [ ] Починить баг с обратным переходом со страницы настроек (повторно загружаются билды из-за concat)
  - [ ] Открытие страницы сразу со страницы билда, если есть настройки и билд (сейчас не работает)
- [x] Реализовала логику работы страницы с инфой о билде
  - [x] Отображается карточка билда
  - [x] Отображаются логи
- [ ] Раскрасила логи
- [ ] Кнопка Rebuild работает
- [ ] Обработка ошибок
- [ ] Навести красоту в коде
- [ ] Оптимизации производительности

Фронтенд приложения запускаем командой `npm start` в папке frontend

## Серверная часть
Бэкенд запускается командой `node server.js` в папке backend. Токен авторизации нужно разместить в файле .env. Пример токена - в файле .env-example

## Тестирование
### Какие сценарии проверяются интеграционными тестами?
Для интеграционного тестирования я выбрала сценарии взаимодействия нескольких компонентов. В основном они связаны с роутингом и взаимодействием с бэкендом
- [ ] Главная страница
  - [ ] Если нет настроек, должен осуществляться переход на главную страницу (отображается компонент Main)
  - [ ] Клик на кнопку в хэдере переводит на страницу настроек
  - [ ] Клик на кнопку в основной части страницы переводит на страницу настроек
- [ ] Страница настроек
  - [ ] При переходе на страницу настроек с бэкенда получаем текущие настройки, если есть.
  - [ ] Нажатие на кнопку «Отмена» переводит на главную страницу
  - [ ] Нажатие на кнопку «Сохранить» передает настройки на бэкенд
  - [ ] Пока идет клонирование репозитория кнопки заблокированы
- [ ] Страница истории билдов
  - [ ] Если настройки уже есть, то осуществляется переход на страницу истории билдов
  - [ ] Загружается очередь билдов, если есть
  - [ ] Нажатие на кнопку «Show More» подгружает еще часть билдов
  - [ ] Нажатие на карточку билда переводит на страницу с детализацией билда
  - [ ] Нажатие на «Run Build» ставит билд в очередь и осуществляет переход на страницу с детализацией билда
- [ ] Страница детализации билда
  - [ ] Загружается карточка билда
  - [ ] Загружаются логи, если есть
  - [ ] Нажатие на кнопку «Rebuild» запускает билд с таким же хэшем коммита и осуществляет переход на страницу нового билда
  - [ ] Нажатие на кнопку настроек осуществляет переход на страницу настроек
  - [ ] 
### Из каких логических блоков состоит приложение и какие их сценарии проверяются модульными тестами?
#### Логические блоки приложения
- Страница настроек
- Страница истории билдов
- Карточка билда

#### Сценарии
- [ ] Форма на странице настроек
  - [ ] Нельзя отправить форму, если не заполнено поле «Репозиторий»
  - [ ] Нельзя отправить форму, если не заполнено поле «Команда сборки»
  - [ ] По умолчанию выбрана ветка «master»
  - [ ] В поле период записывается только число
  - [ ] Пока идет сохранение, нужно заблокировать кнопки «сохранить» и «отмена»
  - [ ] Если клонирование репозитория закончилось ошибкой, отображается сообщение об ошибке и кнопки разблокируются
  - [ ] При нажатии на кнопку поле ввода очищается
- [ ] Страница истории билдов
  - [ ] При нажатии на кнопку «Run Build» появляется модальное окно
  - [ ] Функция форматирования времени правильно форматирует время билда
  - [ ] При начальной отрисовке отображается до 5 билдов
  - [ ] Кнопка «Show More» исчезает, если загружен новый билд
  - [ ] Нажатие на «Show More» подгружает еще несколько билдов
- [ ] Карточка билда
  - [ ] Иконка и цвет статуса определяются в зависимости от статуса
  - [ ] Отображаются дата и время билда, если статус билда успешен
  - [ ] Кнопка «Rebuild» запускает тот же самый билд
  - [ ] В карточке отображается верная информация
### Как запустить тесты?
