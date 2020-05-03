# Домашнее задание ШРИ

Версия ноды: v12.16.2

- [Типизация](#%d0%a2%d0%b8%d0%bf%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f)
- [Клиент](#%d0%9a%d0%bb%d0%b8%d0%b5%d0%bd%d1%82%d1%81%d0%ba%d0%b0%d1%8f-%d1%87%d0%b0%d1%81%d1%82%d1%8c)
- [Сервер](#%d0%a1%d0%b5%d1%80%d0%b2%d0%b5%d1%80%d0%bd%d0%b0%d1%8f-%d1%87%d0%b0%d1%81%d1%82%d1%8c)
- [Тесты](#%d0%a2%d0%b5%d1%81%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5)

## Типизация
Перед запуском сервера нужно его скомпилировать командой `make server-build`. Затем сервер можно запустить командой `make server-start`. Клиент запускаем командой `make client`.
- Трудоёмкость перевода проекта на TypeScript. Самые сложные моменты в работе.
Самое сложное на данный момент — повторно использовать типы, а не добавлять снова примитивные типы для одних и тех же данных. Так же иногда тяжело понять, какой тип от меня требует компилятор и что ему не нравится :) Сложно работать с типами сторонних библиотек. Они выглядят громоздко и не всегда у них есть адекватная расшифровка (redux-thunk тому отличный пример, очень долго с его типами промучилась и до сих пор не до конца поняла). То что проект работает не так как должен тоже осложняет задачу. А еще иногда ошибки возникают из-за какого-то «волшебства» — действия, которое ну никак не могло к этой ошибке привести. Исчезают они так же внезапно, как и появились. Достаточно удалить и снова добавить какой-нибудь символ.
- Какие в процессе перевода были найдены ошибки.
В процессе перевода пока ошибок не нашла (точнее слабые места моей реализации я знала еще до этого), но перевод заставил меня немного переписать код (экшены получения настроек например).
Нашла ошибку в редьюсере очереди билдов благодаря типам. Нашла неиспользуемые пропсы в компоненте Form. Не передавала параметр history в карточку билда, из-за чего клик по карточке приводил к ошибке.
- Решили ли вы вливать данный PR, или предпочитаете работать с JavaScript? Почему?
PR вливать не буду, так как это внесет еще большую сумятицу в итак недоделанный проект. Как только доведу js-часть до ума, возможно вернусь к типизации.


## Клиентская часть
Фронтенд приложения запускаем командой `make client`
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
- [ ] Исправить замечания проверяющего:
  - [x] /settings все валится при вводе чего либо в Synchronize every
  - [ ] нет валидация настроек, можно отправить пустое имя репозитория и сервер упадет
  - [ ] название экшенов лучше выносить в константы
  - [ ] захадкожен урл сервера в экшенах, обычно такие штуки выносят в конфиг
  - [ ] mapDispatchToProps
  - [ ] используй деструктуризацию вместо того, что бы повторять this.state или this.props
  - [x] svg в коде приложения это не ок. один раз настроить сборщик и хранить их в отдельных файлах
  - [ ] если в классе ты не используешь constructor, то просто вызывать super(props) не нужно. реакт сам это сделает
  - [ ] что бы не писать длинные className руками https://github.com/bem/bem-react/tree/master/packages/classname
  - [ ] есть классы у которые 1 метод render. в таком случае лучше отдать предпочтение функции
  - [ ] есть неиспользуемые импорты, нет eslint

## Серверная часть
Бэкенд запускается командой `make server` в папке backend. Токен авторизации нужно разместить в файле .env. Пример токена - в файле .env-example

## Тестирование
Пока что не успела доделать тесты до конца, постараюсь завершить и пофиксить баги, обнаруженные с помощью тестов в ближайшие дни. Очень много времени потратила на то, чтобы заставить гермиону работать. :(
### Какие сценарии проверяются интеграционными тестами?
Для интеграционного тестирования я выбрала сценарии взаимодействия нескольких компонентов. В основном они связаны с роутингом и взаимодействием с бэкендом. Сделать пока еще не успела, в процессе :(

- [x] Главная страница
  - [x] Если нет настроек, должен осуществляться переход на главную страницу (отображается компонент Main)
  - [x] Клик на кнопку в хэдере переводит на страницу настроек
  - [x] Клик на кнопку в основной части страницы переводит на страницу настроек
- [x] Страница настроек
  - [x] При переходе на страницу настроек с бэкенда получаем текущие настройки, если есть.
  - [x] Нажатие на кнопку «Отмена» переводит на главную страницу
  - [x] Нажатие на кнопку «Сохранить» передает настройки на сервер
  - [x] Нажатие на название в хэдере переводит на главную страницу
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
### Из каких логических блоков состоит приложение и какие их сценарии проверяются модульными тестами?
Для модульного тестирования я выбрала связку jest + enzyme, так как с их помощью удобно тестировать реакт компоненты. Можно симулировать события на компонентах и элементах, легко получать состояние, текст элемента.
#### Логические блоки приложения
- Страница настроек
- Страница истории билдов
- Карточка билда
- Модальное окно для ввода хэша коммита

#### Сценарии
- [x] Форма на странице настроек
  - [x] Нельзя отправить форму, если не заполнено поле «Репозиторий»
  - [x] Нельзя отправить форму, если не заполнено поле «Команда сборки»
  - [x] По умолчанию выбрана ветка «master»
  - [x] Команда сборки по умолчанию «npm run build»
  - [x] В поле период записывается только число
  - [x] Пока идет сохранение, нужно заблокировать кнопки «сохранить» и «отмена»
  - [x] Если клонирование репозитория закончилось ошибкой, отображается сообщение об ошибке и кнопки разблокируются
  - [x] При нажатии на кнопку поле ввода очищается
- [x] Страница истории билдов
  - [x] При нажатии на кнопку «Run Build» появляется модальное окно
  - [x] Кнопка «Show More» исчезает, если загружен первый билд
  - [x] Нажатие на «Show More» подгружает еще несколько билдов
- [x] Карточка билда
  - [x] Функция форматирования времени правильно форматирует время билда
  - [x] Иконка и цвет статуса определяются в зависимости от статуса
  - [x] Отображаются дата и время билда, если статус билда успешен
  - [ ] Кнопка «Rebuild» запускает тот же самый билд
  - [x] В карточке отображается верная информация

### Как запустить тесты?
Модульные тесты можно командой `make test-u` или командой `make watch`.
Интеграционные — командой `make test-i`.
