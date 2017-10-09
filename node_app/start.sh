#!/bin/bash
file="./run.log"

if [ -f "$file" ]
then
  echo $(date) >> $file
  npm install
  pm2 restart setup.config.js --no-daemon
else
  touch $file
  echo $(date) > $file
  npm install
  pm2 start setup.config.js --no-daemon
fi
