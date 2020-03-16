#!/bin/bash

read -p "Digiti um valor: " var1
read -p "Digite um segundo valor: " var2

if [ $var1 -gt $var2 ]
then 
	echo "$var1 é maior que $var2"
elif [ $var1 -lt $var2 ]
then 
	echo "$var1 é menor que $var2"
elif [ $var1 -eq $var2 ]
then
	echo "$var1 é igual $var2"
else

	echo "$var1 é diferente de $var2"

fi



read -p "digite uma palavra: " var3
read -p "digite outra palavra: " var4

if [ $var3 > $var4 ]
then 
	echo "$var3 é maior que $var4"
elif [ $var3 < $var4 ]
then
	echo "$var3 é menor que $var4"
else

	echo "$var3 é igual $var4"

fi
