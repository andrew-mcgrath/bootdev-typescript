FROM mcr.microsoft.com/devcontainers/javascript-node:24

# Setup aliases
COPY .bash_aliases /home/node/.bash_aliases

# Install yamllint (YAML linter)
RUN apt update && apt install -y yamllint

# Install actionlint (GitHub Actions workflow linter) — not in apt, install from upstream release
ARG ACTIONLINT_VERSION=1.7.12
RUN ARCH=$(dpkg --print-architecture) && \
    curl -sSL "https://github.com/rhysd/actionlint/releases/download/v${ACTIONLINT_VERSION}/actionlint_${ACTIONLINT_VERSION}_linux_${ARCH}.tar.gz" \
    | tar -xz -C /usr/local/bin actionlint

USER node

RUN go install github.com/bootdotdev/bootdev@latest
RUN npm install -g typescript
