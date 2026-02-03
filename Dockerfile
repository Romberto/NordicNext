# =========================
# Stage 1 — Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

# Ограничиваем память Node
ENV NODE_OPTIONS="--max-old-space-size=384"

# 🔥 Отключаем Turbopack корректно
ENV NEXT_DISABLE_TURBOPACK=1

RUN npm run build


# =========================
# Stage 2 — Production
# =========================
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
