# =========================
# Stage 1 — Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем только package.json и lock — для кэша
COPY package*.json ./

# Ставим зависимости (быстрее и стабильнее для CI/Docker)
RUN npm ci --legacy-peer-deps

# Копируем весь проект
COPY . .

# Ограничиваем память Node (критично для 1 GB RAM)
ENV NODE_OPTIONS="--max-old-space-size=384"

# Собираем Next.js без Turbopack
RUN npm run build -- --no-turbo


# =========================
# Stage 2 — Production
# =========================
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Копируем собранное приложение
COPY --from=builder /app ./

# Открываем порт
EXPOSE 3000

# Запуск
CMD ["npm", "start"]
