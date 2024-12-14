FROM ubuntu:24.04

SHELL ["/bin/bash", "-c"]

ENV DEBIAN_FRONTEND=noninteractive

RUN groupadd -g 1001 app && \
    useradd -u 1001 -g app -m -s /bin/bash app

RUN apt update
RUN apt install -y curl
RUN apt install -y wget
RUN apt install -y git
RUN apt clean && \
    rm -rf /var/lib/apt/lists/*

USER app
WORKDIR /app

RUN curl https://get.volta.sh | bash
ENV PATH="/home/app/.volta/bin:${PATH}"
RUN volta install node@22.12.0
RUN volta install npm@10.9.2
RUN volta install eslint@9.17.0
RUN volta install sort-package-json@2.12.0

RUN unset DEBIAN_FRONTEND
