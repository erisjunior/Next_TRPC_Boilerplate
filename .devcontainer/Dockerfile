FROM node:lts-alpine3.11

USER root

RUN apk add --no-cache zsh zsh-vcs git \
    && apk add curl wget --update

USER node

ENV HOME=/home/node
ENV APP=${HOME}/app
ENV ZSH_CUSTOM=${HOME}/.oh-my-zsh

RUN yarn config set cache-folder ${HOME}/.yarn-cache

WORKDIR ${HOME}

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" \
    && git clone https://github.com/denysdovhan/spaceship-prompt.git "${ZSH_CUSTOM}/themes/spaceship-prompt" \
    && ln -s "${ZSH_CUSTOM}/themes/spaceship-prompt/spaceship.zsh-theme" "${ZSH_CUSTOM}/themes/spaceship.zsh-theme" \
    && sh -c "$(curl -fsSL https://git.io/get-zi)" -- -i skip -b v1.0.0

COPY .devcontainer/terminal/.zshrc ${HOME}/.zshrc

WORKDIR ${APP}
