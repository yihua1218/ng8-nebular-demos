#!/bin/bash

NODE_MODULES=node_modules
MQTT_READABLE_STREAM=$NODE_MODULES/mqtt/node_modules/readable-stream
READABLE_STREAM=../../readable-stream

PATCH=util.path
UTIL=node_modules/core-util-is/lib/util.js
PATCH_REGEX="global.Buffer = global.Buffer"

if [ ! -L $MQTT_READABLE_STREAM ]; then
    rm -rf $MQTT_READABLE_STREAM
    ln -sf $MQTT_READABLE_STREAM $READABLE_STREAM
else
    echo $MQTT_READABLE_STREAM already linked to $READABLE_STREAM
fi

PATCH_DONE=`grep "$PATCH_REGEX" $UTIL | wc -l`

if [ $PATCH_DONE -eq 0 ]; then
    patch -p0 < $PATCH
else
    echo $UTIL already patched.
fi

echo done