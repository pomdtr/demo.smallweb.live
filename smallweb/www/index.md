---
title: Smallweb Playground
favicon: smallweb.svg
---

# Smallweb Playground

> [!WARNING]
> The content of this instance will be reset anytime I feel like it.
> Since this instance is shared, you should not under any circoomstance put credentials in there!

This is a public shared demo instance of [smallweb](https://smallweb.run) running on fly.io.

## Usage

Head to the editor at [vscode.demo.smallweb.live](https://vscode.demo.smallweb.live) to edit existing websites.

To create you own websites, just create a file at `/<your-name>/main.ts`, and paste the following code:

```ts
import { Hono } from 'npm:hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello from smallweb!'))

export default app
```

Then go to `https://<your-name>.demo.smallweb.live`, and see your website live!

The `www`, `smallblog`, `excalidraw` and `vscode` apps are readonly, but you can edit all the other apps.

## Example apps

- [excalidraw.smallweb.live](https://excalidraw.demo.smallweb.live) - sources in the `/smallblog` folder
- [smallblog.smallweb.live](https://smallblog.demo.smallweb.live) - sources in the `/excalidraw` folder

If you want to "fork" them, just copy paste the folder.

## Design

- Logos and icons created by [SlumberDemon](https://new.sofa.sh)
