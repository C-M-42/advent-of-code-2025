#!/bin/bash

DAY=1

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
