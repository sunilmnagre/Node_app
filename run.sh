#!/bin/bash

service=$1

if [[ -n "$service" ]]; then
  docker-compose up $service
else
    echo "Error in App name or argument!!!"
fi
