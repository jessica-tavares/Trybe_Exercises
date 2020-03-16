#!/bin/bash

datadehoje=`date +a%d%m%y%H%M`


dia=`date +%d`
mes=`date +%m`
ano=`date +%y`
semana=`date +%a`

hora=`date +%H`
minutos=`date +%M`

echo $semana
echo "$dia \ $mes \ $ano"

echo "$hora : $minutos"
