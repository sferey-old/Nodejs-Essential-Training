# Nodejs-Essential-Training [![Build Status](https://travis-ci.org/marley-nodejs/Nodejs-Essential-Training.svg?branch=master)](https://travis-ci.org/marley-nodejs/Nodejs-Essential-Training)
[Lynda.com] Node.js Essential Training


====================



01-5. Установка Node.js с помощью NVM

curl https://raw.githubusercontent.com/creationix/nvm/v0.23.1/install.sh | bash  

$ nvm install 0.10  
$ nvm install 0.8  
$ nvm use 0.10  
$ nvm alias default 0.10  
$ node --version


# 04. Модули

04-1. Создание модулей с помощью Getters и Setters

$ node app.js


04-2. Кэширование модулей и области видимости  

$ node app.js  


04-3. Реализация шаблонов проектирования

$ node app.js


# 05. Работа с фреймворком Express

05-1. Запуск Express приложений

$ sudo npm install -g express@3.4.x
$ express airline
$ cd airline && npm install
$ node app

Почистили созданный проект.


05-2. Обработка GET запросов возвращающих JSON


$ node app

localhost/flight1  
localhost/flight2  


05-3. Управление большими блоками данных - запрос переменных в Routes  

$ node app

localhost/flight/33
http://localhost/flight/34


05-4. Обработка данных через PUT запросы  


postman

PUT Запрос на http://localhost/flight/33/arrived  
Добавился элемент http://localhost/flight/33


05-5. Поставляемое Middleware для изменения заголовков HTTP

Поменяли заголовок ответа сервера на "Flight Tracker"


05-6. Генерация HTML views в Jade

http://localhost/list


05-8. Решение. Вывести все данные в формате JSON  
http://localhost/list/json



# 06. Unit тестирование

06-2. Отделение частей кода для тестирования

(преобразовали проект для тестирования)


06-3. Helpers для тестирования данных


06-4. Пишем Unit тесты с Mocha | should | supertest

$ mocha


06-5. Симуляция HTTP запросов с помощью SuperTest

$ mocha



# 07. Сессии и базы данных

07-1. Подключение к MongoDB с помощью Mongoose

$ node server.js

07-2. Создание схемы для коллекций в Mongoose
(PUT http://localhost/flight/33/arrived)  
(PUT http://localhost/flight/18/arrived)  


$ node server.js
