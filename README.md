# Vertical Slice Architecture with React and Nest.js

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/arthurgubaidullin/vertical-slice-architecture-react-nestjs)

## What does the project do?

The application allows the user to fill out an order form and then submit it for processing in the order processing slice. The order processing slice notifies the notification processing slice. And that is it.

## Getting started

If you already have VS Code and Docker installed, you can click the badge above or [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/arthurgubaidullin/vertical-slice-architecture-react-nestjs) to get started. Clicking these links will cause VS Code to automatically install the Dev Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

## Run the project

To run servers, use the following command

```
npx nx run-many -t serve
```

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.

## License

[MIT](License)
