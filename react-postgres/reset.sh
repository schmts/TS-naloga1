#!/bin/bash
podman rmi testiranje -f && podman build -t testiranje . && podman run -d -p 3000:3000 --network=fe --name=fe testiranje