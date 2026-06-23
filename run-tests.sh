#!/usr/bin/env bash
set -euo pipefail

PORT=8000
ROOT_DIR=$(pwd)

# Start server in background
python3 -m http.server "$PORT" > /dev/null 2>&1 &
SERVER_PID=$!
echo "Started server (pid=$SERVER_PID) at http://localhost:$PORT"

# Give server a moment to start
sleep 1

# Open test page in default browser (Linux)
if command -v xdg-open > /dev/null; then
  xdg-open "http://localhost:$PORT/tests/test.html"
else
  echo "Open your browser to: http://localhost:$PORT/tests/test.html"
fi

echo "Press Enter to stop server..."
read -r _
kill $SERVER_PID
echo "Server stopped"
