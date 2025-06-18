FROM node:23 AS build
WORKDIR /app
COPY package.json nx.json tsconfig.base.json ./
COPY apps/frontend ./apps/frontend
COPY libs/shared-types ./libs/shared-types
RUN npm install
RUN npx nx build frontend --prod

FROM nginx:alpine
COPY --from=build /app/dist/apps/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]