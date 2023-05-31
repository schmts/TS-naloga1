#!/bin/bash
podman rmi ba -f&&podman build -t ba .&&podman run -d -p 3001:3001 --network=fe --network=db  --name app-ba ba
