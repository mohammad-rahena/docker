# 04 – Create Docker Images via Multiple Methods

## 🎯 Objective

- Build images using Dockerfile (recommended)
- Create image from a running container (`docker commit`)
- Understand image creation strategies



## 🧪 Method 1: From Dockerfile

```Dockerfile
FROM node:18
WORKDIR /app
COPY app/ .
RUN npm install
CMD ["node", "index.js"]
````

Build:

```bash
docker build -t image-from-dockerfile .
docker run image-from-dockerfile
```



## 🧪 Method 2: From Running Container (docker commit)

```bash
docker run -it ubuntu bash
# install curl
docker commit <container_id> ubuntu-with-curl
docker run -it ubuntu-with-curl curl --version
```



## 🧪 Method 3: Manual Dockerfile from container changes

```Dockerfile
FROM ubuntu
RUN apt update && apt install -y curl
```



## 📝 Summary

| Method            | Reproducible | Fast for Prototyping | Version Control |
| ----------------- | ------------ | -------------------- | --------------- |
| Dockerfile        | ✅            | ❌                    | ✅               |
| docker commit     | ❌            | ✅                    | ❌               |
| Manual Dockerfile | ✅            | ⚠️                   | ✅               |

