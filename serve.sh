#!/usr/bin/env bash
set -euo pipefail

PORT=8000
echo "Starting static server on http://localhost:$PORT"
python3 -m http.server "$PORT"
