Gre za osnovno aplikacijo iz treh delov. Prvi del predstavlja frontend, ki je spisan v reactu. Ta pa preko backend(spisan v nodejs) dela komunicira z bazo podatkov (post-gres). Preko frontenda lahko vnašamo besede, ki se bodo shranile v tabelo z dvema stolpcema (id in word).

Za zagon aplikacije vpišemo "podman-compose up"

Aplikacija se bo sesula, če pred prvo uporabo ne uporabimo ukaza:

cat ./init.sql | podman exec -i [container ID db-ja] psql -U postgresUser -d naloga

Ki bo skreiral tabelo v katero se bodo zapisovali podatki iz frontenda.