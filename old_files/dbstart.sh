#!/bin/bash
podman run -d --network=db --ip=192.168.0.12 -p 5432:5432 --name db my-postgres
