#!/usr/bin/bash
set -x
while true
do
	HOST=172.27.124.60 PORT=5173 npm run preview -- --open --host 172.27.124.60 --port 5173
done
