```
docker-compose up -d
```

```
docker exec -it configserver1 mongosh --port 27017 --eval 'rs.initiate({ _id: "cfgrs", configsvr: true, members: [ { _id: 0, host: "configserver1:27017" }, { _id: 1, host: "configserver2:27017" }, { _id: 2, host: "configserver3:27017" } ] })'
rs.status()
```

```
docker exec -it shard1server1 mongosh --port 27017 --eval 'rs.initiate({ _id: "shard1rs", members: [ { _id: 0, host: "shard1server1:27017" }, { _id: 1, host: "shard1server2:27017" }, { _id: 2, host: "shard1server3:27017" } ] })'
rs.status()
```

```
docker exec -it shard2server1 mongosh --port 27017 --eval 'rs.initiate({ _id: "shard2rs", members: [ { _id: 0, host: "shard2server1:27017" }, { _id: 1, host: "shard2server2:27017" }, { _id: 2, host: "shard2server3:27017" } ] })'

rs.status()
```

```

docker exec -it mongo-router mongosh --port 27017 --eval 'sh.addShard("shard1rs/shard1server1:27017,shard1server2:27017,shard1server3:27017"); sh.addShard("shard2rs/shard2server1:27017,shard2server2:27017,shard2server3:27017")'

docker exec -it mongo-router mongosh --port 27017
use <database>
db.createCollection("<collection>")
sh.enableSharding("<database>")
sh.shardCollection("<database>.<collection>", {"<field>" : "hashed"})
```
