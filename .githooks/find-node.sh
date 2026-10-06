# Wird von den Hooks eingebunden: sorgt dafür, dass "node" gefunden wird.
# GitHub Desktop gibt den Hooks nicht immer den vollständigen PATH mit.
if ! command -v node >/dev/null 2>&1; then
  for dir in \
    "/c/Program Files/nodejs" \
    "/c/Program Files (x86)/nodejs" \
    "$HOME/AppData/Local/Programs/nodejs" \
    "/usr/local/bin" \
    "/opt/homebrew/bin"; do
    if [ -x "$dir/node" ] || [ -x "$dir/node.exe" ]; then
      PATH="$dir:$PATH"
      export PATH
      break
    fi
  done
fi

if ! command -v node >/dev/null 2>&1; then
  echo ""
  echo "=================================================================="
  echo " Node.js wurde nicht gefunden - die Pruefung kann nicht laufen."
  echo " Es ist nichts kaputt gegangen. Bitte Claude bitten:"
  echo " \"Node.js wird beim Commit/Push nicht gefunden, bitte beheben.\""
  echo "=================================================================="
  exit 1
fi
