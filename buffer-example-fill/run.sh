#!/bin/bash

docker build -t buffer-example-fill .

docker run --memory 1024m --interactive --tty --rm buffer-example-fill