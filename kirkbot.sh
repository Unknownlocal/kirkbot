#!/bin/sh
git fetch --all
git reset --hard origin/master
git pull
node bot.js
exit $?