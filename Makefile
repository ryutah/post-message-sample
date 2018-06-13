.PHONY: all

CURDIR := $(shell pwd)

help: ## Print this help
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

serve1: ## serve server1
	parcel build -d ./sample1/static --public-url /static ./sample1/index.html
	cd ./sample1 && go run main.go

serve2: ## serve server1
	parcel -d ./sample2/static --public-url /static ./sample2/index.html

