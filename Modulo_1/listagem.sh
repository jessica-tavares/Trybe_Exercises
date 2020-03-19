#read -p "Digite o nome do arquivo ou diretório: " name

#name=$1

name=$*

for ARG in $name
do
    if [ -f .*/"$ARG" ]
    then 
        echo "$ARG é um arquivo comum"
    elif [ -d .*/"$ARG" ]
    then    
        echo "$ARG é um diretório"
    else 
        echo "$ARG é um outro tipo de arquivo"
    fi
    ls -l .*/$ARG
done

#ls -l .*/$name

