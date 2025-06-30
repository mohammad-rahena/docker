# 08 – Docker Compose & Security Best Practices

## 📦 What is Docker Compose?

Compose lets you define and manage **multi-container applications** using a simple YAML file.



## 🛠 App: Flask + Redis Counter

### Directory Structure
```

08-compose/
├── app/
│   ├── app.py
│   └── requirements.txt
├── Dockerfile
└── docker-compose.yml

````

### Start App
```bash
docker compose up --build
````

Visit [http://localhost:5000](http://localhost:5000)



## 🔐 Docker Security Best Practices

| Practice                    | Why it matters                    |
| --------------------------- | --------------------------------- |
| Use non-root user           | Limits privilege inside container |
| Minimal base image          | Reduces attack surface            |
| Docker scan                 | Finds vulnerabilities in image    |
| `.dockerignore`             | Avoid leaks, improve build speed  |
| Drop unnecessary privileges | Use `--cap-drop all`              |

