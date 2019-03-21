## Installation using Docker

Development environment requirements :
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/install/)

Setting up your development environment on your local machine :
```
$ git clone https://github.com/modularsoftware/genealogy.git
$ cd genealogy
$ cp .env.docker .env
$ docker-compose build
$ docker-compose run --rm --no-deps genealogy-server composer install
$ docker-compose run --rm --no-deps genealogy-server php artisan key:generate
$ docker run --rm -it -v $(pwd):/app -w /app node npm install
$ docker-compose up -d
```

Now you can access the application via [http://localhost](http://localhost).

**There is no need to run ```php artisan serve```. PHP is already running in a dedicated container.**

## Before starting
You need to run the migrations with the seeds :

```
$ docker-compose run --rm genealogy-server php artisan migrate --seed
```

This will create a new user that you can use to sign in :
```
Email : admin@localhost
Password : password
```

And then, compile the assets :
```
$ docker run --rm -it -v $(pwd):/app -w /app node npm run dev
```

You may need to run these commands : 

```
$ docker-compose run --rm --no-deps genealogy-server php artisan cache:clear
$ docker-compose run --rm --no-deps genealogy-server chmod -R 777 storage/
$ docker-compose run --rm --no-deps genealogy-server composer dump-autoload
```
