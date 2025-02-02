# smalleb on fly.io

## Setup

Make sure that the fly cli is installed and you are logged in (`fly auth login`).

Copy the `templates/fly.toml` to the root of the project, and update the `app`, `primary_region`, and `domains` fields.

```sh
# create the app
fly launch --no-deploy

# create the smallweb volumes
fly volumes create smallweb_data

# create the required certificates
fly certs create '<your-domain>'
fly certs create '*.<your-domain>'
```

Then, setup you DNS records to point to the fly.io load balancer.

```sh

# deploy the app
fly deploy

# Connect to the app, then initialize the smallweb directory
fly ssh console
smallweb init
```
