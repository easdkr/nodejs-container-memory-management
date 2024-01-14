#!/bin/bash

docker build -t test-fatal-error .

docker run --memory 512m --interactive --tty --rm test-fatal-error
```