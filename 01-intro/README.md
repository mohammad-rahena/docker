# 01 - Introduction to Containerization and Docker Fundamentals

## 🧠 What is Containerization?
Containerization is the process of packaging an application along with its dependencies and configurations into a single lightweight unit called a **container**. This allows the application to run consistently across environments (e.g., development, testing, production).

---

## 📦 Key Docker Terminology

| Term             | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Image            | A read-only template used to create containers.                             |
| Container        | A runnable instance of an image.                                             |
| Dockerfile       | Script with instructions to build Docker images.                            |
| Docker Hub       | Public repository of Docker images.                                         |
| Docker Engine    | Core engine running and managing Docker containers.                          |

---

## ✅ Commands Executed

```bash
docker --version
docker info
docker run hello-world
docker ps -a
docker images
