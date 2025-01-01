FROM denoland/deno:2.1.1

# install curl
RUN apt-get update \
    && apt-get install -y curl \
    && rm -rf /var/lib/apt/lists /var/cache/apt/archives

ARG SMALLWEB_VERSION=0.20.0-rc.2

# Combine RUN commands to reduce layers and use curl instead of apt-get for installation
RUN curl -fsSL "https://install.smallweb.run?v=${SMALLWEB_VERSION}&target_dir=/usr/local/bin" | sh \
    && chmod +x /usr/local/bin/smallweb

ENV SMALLWEB_DIR=/smallweb
COPY smallweb /smallweb

# Expose port
EXPOSE 8080 2222

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/smallweb", "up", "--cron", "--addr", "0.0.0.0:8080", "--ssh-addr", "0.0.0.0:2222"]
