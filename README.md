Создайте SPA с использованием фреймворка react.js. 

Приложение имеет 2 роута: 
страница приветствия (свободное оформление)
страница выводящая список пользователей

Приложение загружает данные в формате json с сервера (без разницы какой. Можно мок сделать, можно загрузить из общедоступных сервисов) и выводит данные.

Атрибуты пользователя:
Имя
Фамилия
Группа (например Руководство, Бухгалтерия, Отдел кадров и т.д.). Может быть пустым.

Карточек пользователей должно быть минимум 300, групп - минимум 4.

Реализовать 2 варианта отображения данных:
общая таблица со всеми пользователями
таблицы пользователей, аналогичные первому пункту, в которых пользователи сгруппированы по группе

Списки пользователей должны быть сортируемыми. Должна быть доступна сортировка по атрибуту фамилия и имя с возможностью выбора направления сортировки: от А до Я и от Я до А. Обратить внимание на производительность для операций сортировки.

Предусмотреть модальную всплывающую форму, с помощью которой можно добавить нового пользователя с перечисленными выше атрибутами.

Приложение должно быть адаптивно. Допускается использовать любой css-фреймворк или свои css-правила. 

Допускается использовать любой пакет npm и другие вспомогательные средства для разработки и оформления UI (приветствуется, http://www.material-ui.com/).

Обязательно наличие unit-тестов.
