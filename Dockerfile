# Stage 1 — Build
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json / yarn.lock
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем весь проект
COPY . .

ENV NEXT_PRIVATE_SKIP_TURBOPACK=true
# Собираем проект
RUN npm run build

# Stage 2 — Production
FROM node:20-alpine

WORKDIR /app

# Копируем только билд и node_modules
COPY --from=builder /app ./

# Устанавливаем NODE_ENV
ENV NODE_ENV=production

# Экспонируем порт для Next.js
EXPOSE 3000

# Запуск приложения
CMD ["npm","start"]
