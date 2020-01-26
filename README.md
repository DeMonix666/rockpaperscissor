## Guide

##Update vendor

- composer update

##Setup

- rename .env.example to .env and update database connection

##Setup node modules

- npm install
- npm install --global cross-env
- npm run watch

##Test Api

- ./vendor/bin/phpunit tests/Feature/RockPaperScissorTest.php 

##Setup Laravel

- php artisan key:generate
- php artisan serve

##View site

- visit 127.0.0.1:8000 

##Extra

I created two versions (Vue and React). Default app is react. If you want to switch to vue then just copy and paste the content of app-vue.js to app.js. 
