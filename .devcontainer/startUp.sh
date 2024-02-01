#! /bin/bash

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Save the current codespace name to the environment variable
export CODESPACE_NAME=$(gh codespace view | head -n 1 | sed 's/Name[[:space:]]*//')

# Create webpack config file
# fixme: coomenting out python script until it's fixed
# python webpack-config.py