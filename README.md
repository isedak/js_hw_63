## Небольшое приложение с контентом страниц из firebase
Задание:

Создайте приложение, которое будет показывать разный контент на страницах, который будет получаться из firebase. Заранее задайте этот контент прямо через редактор firebase. Например:

```about: {

  title: 'About',

  content: 'Lorem ipsum…'

},

contacts: {

  title: 'Contacts',

  content: 'Another content here etc…'

}
```



Затем создайте один компонент, который будет получать эту информацию в зависимости от переданного роута.



Например:

/pages/about -> должен загрузить и показать страницу "About"

/pages/contacts -> должен загрузить и показать страницу "Contacts"

Должно быть пять страниц.

Важно! У вас должен быть всего ОДИН компонент, который загружает и отображает информацию. Нельзя создавать разные компоненты для каждого типа контента.

Создайте возможность редактирования контента каждой страницы с помощью формы.

У вас также должен быть один компонент-редактор, куда вы должны попасть переходя на страницу /pages/admin. 

На этой странице у вас должен быть <select> с выбором страницы. При выборе страницы в <select>, контент должен быть загружен и подставлен в форму редактирования. 

После редактирования и нажатия на кнопку "Save" ваш контент должен быть отправлен на Firebase и сохранен там.

После редактирования произведите переход на страницу, которую вы редактировали.


Скриншот:
[admin_page](https://prnt.sc/e2NSiz__biph)
