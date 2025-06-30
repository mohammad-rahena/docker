# 02 – Docker Installation and Basic Container Operations

## ✅ Goal
- Install Docker (if needed)
- Run official containers like NGINX
- Create a basic Node.js app and Dockerize it

---

## 🛠 Commands Used

```bash
docker pull nginx
docker run -d -p 8080:80 --name web-server nginx
docker ps
docker stop web-server
docker start web-server
docker logs web-server
docker rm -f web-server
