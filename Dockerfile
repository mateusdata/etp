# Use a imagem oficial do Node.js 21.6.2 (Current)
FROM node:21.6.2

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale todas as dependências
RUN npm install

# Copie o diretório prisma (se necessário)
COPY prisma ./prisma

# Gere o cliente Prisma (se necessário)
RUN npx prisma generate

# Copie todos os outros arquivos do projeto
COPY . .

# Execute o comando de build (se necessário)
RUN npm run build

# Exponha a porta que seu aplicativo usará
EXPOSE 3000

# Inicie o aplicativo
CMD [ "npm", "start" ]
