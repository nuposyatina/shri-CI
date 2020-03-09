# shri-CI
## Какие части макета являются одним и тем же блоком?
- Блок Header на каждой странице
- Кнопки на всех страницах, блок Button
- Footer на всех страницах
- Input в форме на странице settings
- Блок Field, включающий в себя инпут, лейбл и кнопку на странице settings
- BuildCard на странице build-history и build-details
- Блоки Text на всех страницах

## Какие стили относятся к блокам, а какие к элементам и модификаторам?
К блокам относятся стили, характеризующие внешний вид и поведение самого блока и позволяющие отличить разные блоки друг от друга. (Внутренние отступы, цвет фона, цвет текста, рамки и т.д).
К модификаторам относятся стили, которые присутствуют не у всех одинаковых блоков. Модификатор позволяет разделить блоки на типы, а также в зависимости от модификатора менять поведение вложеных элементов.
Стили элементов характерны только для элемента конкретного блока и не могут использоваться в отрыве от блока (например внешняя геометрия элемента).

## Где нужно использовать каскады и почему?
Каскады использовать не желательно, но можно в том случае, если при наличии какого-то модификатора меняется поведение элемента блока (например обнулить отступы в одном случае и оставить в другом, как в блоке .BuildCard);

## Какие видите базовые и семантические константы?
Я выделила следующие константы:
- Цвета рамок, фонов, текста
- Внутренние и внешние отступы
- Размер текста и межстрочный интервал
- Максимальная ширина контейнера и контента
- Радиус скругления рамок
- Тени
- Шрифт

## Где видите вариативность данных и как это обрабатываете?
- Различия во внешнем виде блока Header на страницах

Цвет текста у блока Header на страницах build-history и build-details немного отличается от страниц index и settings. Присвоила блоку Text модификатор Text_view_secondary. Разное отображение кнопок в Хэдере на страницах разрулила с помощью модификатора Button_textVisible и каскада.

- Различия во внешнем виде блока BuildCard на страницах build-history и build-details

У блока BuildCard на страницах по-разному расположены элементы в десктопной версии. Решила проблему с помощью модификатора BuilCard_status_list, который указывает на то, что элемент расположен в списке карточек и это не детализированное отображение. С помощью каскада с этим модификатором поменяла отображение вложенных элементов

## Какие видите особенности, связанные с размером экрана?
- В мобильной версии элементы в большинстве случаев растянуты на всю ширину экрана
- Кнопки в хэдере содержат только иконку
- Футер отображается в 2 строки
- У логов отсутствуют отступы и есть горизонтальный скролл

## Что еще повлияло на вашу вёрстку?
- Иконки добавляла с помощью тега svg, чтобы можно было легко менять текст и размер иконок.
- В большинстве случаев использовала явное задание цвета без opacity, так как это упростит замену цветовой темы в будущем. (Исключение элемент BuildDateTime блока BuildCard. Здесь свойство opacity применено ко всему элементу, не только к иконкам, возможно чтобы меньше акцентировать на нем внимание пользователя)
- Все переменные задала в теме и повесила класс темы на элемент body. В случае, если понадобятся другие цвета, достаточно будет просто заменить класс темы на другой.