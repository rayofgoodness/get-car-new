# server/Postgres.Dockerfile

FROM postgres

ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=root

COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

EXPOSE 5432
