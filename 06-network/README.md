# 06 – Custom Docker Bridge Network

##  What is Docker Networking?

Docker allows containers to communicate via **networks**. Default is `bridge`, but you can create your own for better control and isolation.

---

##  Step-by-Step

### 1. Create Network

```bash
docker network create my-custom-net
docker network ls
````



### 2. Run Backend

```bash
docker run -dit --name backend --network my-custom-net alpine ash
# Inside the container
apk add --no-cache netcat-openbsd
nc -l -p 8000 -e echo "Hello from backend!"
```



### 3. Run Frontend

```bash
docker run -it --rm --network my-custom-net alpine ash
apk add --no-cache curl
curl backend:8000
```

 Output: `Hello from backend!`



##  Cleanup

```bash
docker rm -f backend
docker network rm my-custom-net
```



##  Summary

| Feature       | Description                          |
| ------------- | ------------------------------------ |
| Custom Bridge | Isolated network for specific tasks  |
| DNS in Docker | Containers can talk via their names  |
| Use Case      | Microservices / multi-container apps |


