# Stage 1: Build stage (fake step here to simulate build)
FROM alpine:3.19 AS builder
RUN mkdir /app
COPY app/ /app/

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/ /usr/share/nginx/html
