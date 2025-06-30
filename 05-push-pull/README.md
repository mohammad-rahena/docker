# 05 – Push & Pull Docker Images (Docker Hub + ACR)

## ✅ Goal

- Push a local image to Docker Hub
- Pull it back and verify
- Push image to Azure Container Registry

---

## 📦 DockerHub: Push & Pull

### 🛠 Tag the Image

```bash
docker tag multi-stage-demo mdrahena2004/multi-stage-demo:latest
````

### 🔐 Login & Push

```bash
docker login
docker push mdrahena2004/multi-stage-demo:latest
```

### 🔽 Pull & Run

```bash
docker pull mdrahena2004/multi-stage-demo:latest
docker run -p 8082:80 mdrahena2004/multi-stage-demo:latest
```

---

## ☁️ Azure Container Registry

```bash
az login
az acr login --name mdrahena2004

docker tag multi-stage-demo mdrahena2004.azurecr.io/multi-stage-demo:latest
docker push mdrahena2004.azurecr.io/multi-stage-demo:latest
```



## 📝 Summary

| Action      | Tool       | Notes                           |
| ----------- | ---------- | ------------------------------- |
| Push        | Docker Hub | Public or private images        |
| Pull        | Docker Hub | Useful for sharing environments |
| Push to ACR | Azure CLI  | Requires Azure account          |

