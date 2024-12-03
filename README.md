# smallweb.live

This repo contains the code of [smallweb.live](https://smallweb.live), the public smallweb instance.

## Using this instance

Make sure that the fly cli is installed and you are logged in.

```sh
fly launch --no-deploy
fly certs create '<your-domain>'
fly certs create '*.<your-domain>'
```

Setup you DNS records to point to the fly.io load balancer.

Then replace `smallweb.live` by your domain in the [smallweb config](./smallweb/.smallweb/config.json).

Finally, deploy the app.

```sh
fly deploy
```

## TODO

- [ ] figure out why vscode is broken on fly.io
- [ ] create a github action that will reset this instance every hour or so
