#!/bin/bash

arquivo=/home/jessica/unixstuff/lista_nomes.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done
