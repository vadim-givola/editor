#!/bin/bash

export CURRENT_JS_CHECKSUM=`md5sum dist/editor.min.js`
export CURRENT_CSS_CHECKSUM=`md5sum dist/editor.min.css`

echo "Current production artifacts:"
echo $CURRENT_JS_CHECKSUM
echo $CURRENT_CSS_CHECKSUM

echo "Build the production artifacts"
npm run build || { echo '"npm run build" failed' ; exit 1; }

export BUILT_JS_CHECKSUM=`md5sum dist/editor.min.js`
export BUILT_CSS_CHECKSUM=`md5sum dist/editor.min.css`

echo "Result production artifacts:"
echo $BUILT_JS_CHECKSUM
echo $BUILT_CSS_CHECKSUM

if [ "$CURRENT_JS_CHECKSUM" != "$BUILT_JS_CHECKSUM" ]; then
  echo ''
  echo 'dist/editor.min.js is not up-to-date. Please build the production artifact and try again.'
  echo ''
  exit 1
fi

if [ "$CURRENT_CSS_CHECKSUM" != "$BUILT_CSS_CHECKSUM" ]; then
  echo ''
  echo 'dist/editor.min.css is not up-to-date. Please build the production artifact and try again.'
  echo ''
  exit 1
fi
