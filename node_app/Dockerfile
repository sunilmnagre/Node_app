FROM node:8.6.0

# Install PM2 for development
RUN npm install --global pm2

# Create working directory
WORKDIR /usr/src/apps/

# Bundle app source
COPY . /usr/src/apps/

# Start applications
CMD chmod +x start.sh && ./start.sh
