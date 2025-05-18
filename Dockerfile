FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# ---- (Runner/Production) ----
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pm2

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static
COPY --from=builder --chown=appuser:appgroup /app/public ./public

COPY --chown=appuser:appgroup ecosystem.config.js ./

USER appuser

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]