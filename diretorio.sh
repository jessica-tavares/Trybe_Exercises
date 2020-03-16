name=$*
arq="~/$name"


if [ -e ~/"$name" ] && [ -d ~/"$name" ]
then 
    num_arq=`ls -lhXG ~/$name | wc -l`
    
    echo "O $name possui $[$num_arq - 1] arquivos"
else
    echo "O argumento $name não é um diretório!"
fi