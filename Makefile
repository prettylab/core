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
	npm run start



#DEVELOPMENT
dev:
	npm run dev



#MANAGEMENT
update:
	make build-app
	echo -e "\033[32mAktualizacja zakończona teraz uruchom aplikacje \033[33mmake up\033[0m"