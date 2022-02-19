#!/bin/sh
set -e

cd server/

export FLASK_APP=index

export PYTHONPATH="$PYTHONPATH:/app/server/"

# DEV="DEV"
# if [ "$MODE" = "DEV" ]; then
#   sh migrate.sh
# fi

TEST="TEST"
if [ "$MODE" = "TEST" ]; then
  python test_all.py
fi

# gunicorn -c gunicorn.conf.py index:app

# For websocket
gunicorn -k geventwebsocket.gunicorn.workers.GeventWebSocketWorker -w 1 index:app
 