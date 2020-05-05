# Courses

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

This project is to help creat a list for our daily courses, Built using MEAN Stack (Angular, Node.js, MongoDB)


## Ajouter un produit page 

First you lunch the app you find yourself in the main page which helps to creat a new product to our main list, you can find fields such as product, comment and choose the importance of the product from the list of importance, once they are fullfilled the button 'Ajouter' validate the operation, send the data to the database and switch the page into the list of all courses.

In the navBar on the right to buttons to switch between the list view and the main page to create new products

Ps: the star '*' means that the field should be field or the validation will faill

##List page 
In this page we can find the products that we have added already or the once that exists in the database, it display in cards, in every card in the top there the product name, just under the importance of the product, next line the comment, in the bottom of every one of them we find two bottons in the right "modifier" that swith us the modifying page, the left one is to delete the product from the list and before that it makes a call for an alert to confirm the delete.

##Modifying page
This page is almost like the main page or the create a product page, but with a defferent fonctionalitty, first it fetch the existend data of the selected product, and give us the right to modify every one them.


##Global 
Every action on the data is directly connected to the database by applying Creat, Read , Update , Delete 





## Development server (Front)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Devlopement server (Back)

Run `backend>nodemon server` for a dev server. Navigate to `http://localhost:4000/api`





