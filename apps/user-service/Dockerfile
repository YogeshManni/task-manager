FROM node:23
WORKDIR /app
COPY package.json nx.json tsconfig.base.json ./
COPY apps/user-service ./apps/user-service
COPY libs/shared-types ./libs/shared-types
RUN npm install
RUN npx nx build user-service
EXPOSE 3001
CMD ["node", "dist/apps/user-service/main.js"]