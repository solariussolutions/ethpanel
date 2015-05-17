# EthPanel

A friendly web interface to ethereum node.

EthPanel is designed to be a lightweight, full functional, and browser only app. Browser only means it runs completely in browser, requires nothing to be installed on your computer.

EthPanel communicates with your ethereum node through json rpc, so make sure your node enabled json rpc and allowed [cross-origin resource sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing):

    geth --rpc --rpccorsdomain "*"

'*' will allow ajax request from any domain. You can set it to a more specific domain, e.g. `http://localhost:8080`.

Check out the live version [here](http://janx.github.io/ethpanel/).

It's also deployed on [EthFans.org](http://ethfans.org) as a [utility](http://ethfans.org/ethpanel/).

## Build

You must have [npm](https://www.npmjs.org/) installed on your computer.

From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process. `build/` directory will be created and all output will be put there.

To build a production version, run:

    npm run release

To run the app, simply open `build/index.html`.
