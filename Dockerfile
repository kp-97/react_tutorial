FROM node:22-alpine

WORKDIR /app

COPY my-react-app/package.json my-react-app/package-lock.json ./
RUN npm ci

COPY my-react-app/ ./

EXPOSE 5173

CMD ["npm", "run", "dev"]
