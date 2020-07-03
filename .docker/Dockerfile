FROM node:14

WORKDIR /app

COPY . .

RUN echo "copy .env" && mv .env.example .env
RUN echo "install dependences" && npm install

CMD ["node", "ace", "serve", "--watch"]