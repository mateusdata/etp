FROM node:20

WORKDIR /app

# Limpar o cache do npm antes de instalar as dependências
RUN npm cache clean --force

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale todas as dependências
RUN npm install

# Limpar o cache do npm depois de instalar as dependências
RUN npm cache clean --force

# Copie o diretório prisma
COPY prisma ./prisma

# Gere o cliente Prisma
RUN npx prisma generate

# Copie todos os outros arquivos do projeto
COPY . .

# Execute o comando de build
RUN npm run build

# Exponha a porta que seu aplicativo usará
EXPOSE 3000

# Inicie o aplicativo
CMD [ "npm", "start" ]
