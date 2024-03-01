# Use a imagem oficial do Node.js como base
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie todo o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para acessar a aplicação
EXPOSE 3000

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
