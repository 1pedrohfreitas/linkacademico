#!/bin/bash
echo "Parando os serviços"
docker stop linkacademico-linkacademico-1

echo "Removendo os containers"
docker rm linkacademico-linkacademico-1

echo "Removendo as imagens"
docker rmi pedrohfreitas/linkacademico:1.0

echo "Construindo a imagem do front"
docker build -t pedrohfreitas/linkacademico:1.0 .

echo "Subindo a stack de serviços"
docker compose up -d