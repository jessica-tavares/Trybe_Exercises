#!/bin/bash

for item in /home/jessica/*
do
	if [ -d $item ]
	then
		echo "O item $item é um Diretorio"
	elif [ -f $item ]
	then
		echo "O item $item é um Arquivo"
	fi
done
