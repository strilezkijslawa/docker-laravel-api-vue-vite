.PHONY: up stop bash logs down build nbash dbash
up:
	docker-compose -f docker-compose.yml up -d
stop:
	docker-compose -f docker-compose.yml stop
bash:
	docker-compose -f docker-compose.yml exec fpm bash
logs:
	docker-compose -f docker-compose.yml logs -f
down:
	docker-compose -f docker-compose.yml down
build:
	docker-compose -f docker-compose.yml build
nbash:
	docker-compose -f docker-compose.yml exec nginx bash
dbash:
	docker-compose -f docker-compose.yml exec db bash
