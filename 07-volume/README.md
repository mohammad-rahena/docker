# 07 – Docker Volumes & Persistent Storage

##  What Are Docker Volumes?

Volumes are used to **persist data** outside the container's lifecycle. Even if a container is deleted, the data in a volume remains.



##  Steps

### 1. Create a Volume

```bash
docker volume create mydata
docker volume ls
````



### 2. Mount Volume to Container

```bash
docker run -it --name voltest -v mydata:/data alpine sh
# Inside container
echo "persistent data" > /data/hello.txt
exit
```



### 3. Confirm Persistence

```bash
docker rm voltest
docker run -it --name voltest2 -v mydata:/data alpine sh
cat /data/hello.txt
```

 Output: `persistent data`



### 4. Inspect Volume

```bash
docker volume inspect mydata
```



### 5. Cleanup

```bash
docker rm -f voltest2
docker volume rm mydata
```

