# [Choice] Pick node version via image
# See https://aka.ms/vscode-remote/devcontainer.json for format details

FROM mcr.microsoft.com/devcontainers/javascript-node:0-20

# [Optional] Install OS packages
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     git \
#     openssh-client \
#     lsb-release \
#     ca-certificates \
#     && rm -rf /var/lib/apt/lists/*

# [Optional] Switch back to dialog for package installation, if needed
ENV DEBIAN_FRONTEND=noninteractive

# Create app directory
WORKDIR /workspace

# Default command will be provided by Codespaces/Dev Container host
