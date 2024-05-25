SHELL := /bin/bash

.PHONY: all config shard1 shard2 mongos

all: config shard1 shard2 mongos

config:
	sleep 5 # Add a delay before config server setup
	docker exec -it configserver1 mongosh --port 27017 \
		--eval 'rs.initiate({ _id: "cfgrs", configsvr: true, members: [ { _id: 0, host: "configserver1:27017" }, { _id: 1, host: "configserver2:27017" }, { _id: 2, host: "configserver3:27017" } ] })'
	sleep 5 # Add a delay after config server setup

shard1:
	docker exec -it shard1server1 mongosh --port 27017 \
		--eval 'rs.initiate({ _id: "shard1rs", members: [ { _id: 0, host: "shard1server1:27017" }, { _id: 1, host: "shard1server2:27017" }, { _id: 2, host: "shard1server3:27017" } ] })'
	sleep 5 # Add a delay after shard1 setup

shard2:
	docker exec -it shard2server1 mongosh --port 27017 \
		--eval 'rs.initiate({ _id: "shard2rs", members: [ { _id: 0, host: "shard2server1:27017" }, { _id: 1, host: "shard2server2:27017" }, { _id: 2, host: "shard2server3:27017" } ] })'
	sleep 5 # Add a delay after shard2 setup

mongos:
	docker exec -it mongo-router mongosh --port 27017 \
		--eval 'sh.addShard("shard1rs/shard1server1:27017,shard1server2:27017,shard1server3:27017"); sh.addShard("shard2rs/shard2server1:27017,shard2server2:27017,shard2server3:27017"); db = db.getSiblingDB("jobservice"); sh.enableSharding("jobservice"); db.createCollection("company"); sh.shardCollection(db.getName() + ".company", { "name": "hashed" }); db.createCollection("job"); sh.shardCollection(db.getName() + ".job", { "title": "hashed" });'
