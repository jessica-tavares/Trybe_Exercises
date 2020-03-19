#!/bin/bash

read -p "Digite um numero: " num1

read -p "Digite o segundo numero: " num2

echo "A soma é" $[$num1 + $num2]

echo "A subtração é" $[$num1 - $num2]

echo "A multiplicação é" $[$num1 * $num2]

printf "A divisão é "
echo  "scale=2; $num1 / $num2" | bc
