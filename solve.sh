#!/bin/bash

DAY=$1

clear

if [[ -z "$DAY" || "$DAY" -le 0 || "$DAY" -gt 24 ]]; then
  echo "<< PLEASE SPECIFY A DAY (1 - 24) >>"
  exit 1
fi

cd ./day-$DAY
clear

echo "SOLUTION @ DAY $DAY"
if [ $DAY -gt 9 ]; then
  echo "================="
else
  echo "================"
fi

node ./solution.js

cd ..
