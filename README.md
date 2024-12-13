# demo.smallweb.live

This repo contains the code of [demo.smallweb.live](https://demo.smallweb.live), the public smallweb instance.

## Using this instance

Make sure that the fly cli is installed and you are logged in.

```sh
fly launch --no-deploy
fly certs create '<your-domain>'
fly certs create '*.<your-domain>'
```

Setup you DNS records to point to the fly.io load balancer.

Then replace `demo.smallweb.live` by your domain in the [smallweb config](./smallweb/.smallweb/config.json).

Finally, deploy the app.

```sh
fly deploy
```
