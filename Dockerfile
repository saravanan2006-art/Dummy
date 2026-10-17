FROM node:24.11.1

WORKDIR /work 
COPY  . .
RUN npm install
EXPOSE 5000
CMD ["npm","run","dev"]
