FROM docker.io/postgres

ENV  POSTGRES_DB=naloga

ENV  POSTGRES_USER=postgresUser

ENV  POSTGRES_PASSWORD=postgresPW

COPY init.sql /docker-entrypoint-initdb.d/
