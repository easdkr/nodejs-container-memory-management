#!/bin/bash

docker build -t buffer-example-fill-killed .

docker run --memory 1024m \
           --memory-swap=1024m \
           --memory-swappiness=0 \
           --interactive \
           --tty \
           --rm buffer-example-fill-killed