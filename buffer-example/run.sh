#!/bin/bash

docker build -t buffer-example .

docker run --memory 1024m --interactive --tty --rm buffer-example