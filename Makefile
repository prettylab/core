#CORE DATABASE
run-database:
	docker compose -f docker/compose.yml up -d

stop-database:
	cd docker
	docker compose -f docker/compose.yml down

#CORE APP
build-app:
	git pull
	npm i
	npm run build

run-app:
	npm run pm2

stop-app:
	npm run pm2:stop
	npm run pm2:delete



#DEVELOPMENT
dev:
	npm run dev



#MANAGEMENT
update:
	make build-app
	@echo "\033[32mAktualizacja zakończona teraz uruchom aplikacje \033[33mmake up\033[0m"

up:
	make run-database
	make stop-app
	make run-app
	@echo "\033[32mAplikacja uruchomiona\033[0m"

stop:
	make stop-database
	make stop-app
	@echo "\033[31mAplikacja zatrzymana\033[0m"

restart:
	make stop-database
	make stop-app
	make run-database
	make run-app
	@echo "\033[32mAplikacja została zrestartowana\033[0m"