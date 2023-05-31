#!/bin/bash
cd ..&&podman-compose down&&podman network prune&&podman volume prune&&podman-compose up