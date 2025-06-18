FROM node:23
WORKDIR /app
COPY package.json nx.json ./
COPY apps/task-service ./apps/task-service
COPY libs/shared-types ./libs/shared-types
RUN npm install
RUN npx nx build task-service
EXPOSE 3000
CMD ["node", "dist/apps/task-service/main.js"]