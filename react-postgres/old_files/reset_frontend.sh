#!/bin/bash
podman rmi frontend -f&&podman build -t frontend .&&podman run -d -p 3000:3000 --network=fe --ip=192.168.1.2 --name frontend frontend