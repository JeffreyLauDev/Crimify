# Crimify 

## Requirements

For development, you will only need Node.js installed on your environement.


## Demo

[Video Demo](https://youtu.be/1wkbn0OYNhc)

[Demo Swagger API site](https://crimify-backend.herokuapp.com)

[Demo site](https://crimify-frontend.herokuapp.com/panel)

For development, you will only need Node.js installed on your environement.

## Doc
[Client-side doc](./ClientReport.pdf)

[Server-side doc](./ServerReport.pdf)
### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- backend api
- oauth like endpoint for auth
- development

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build
---
