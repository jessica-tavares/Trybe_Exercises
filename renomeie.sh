DAY=$(date +%F)

for FILE in `ls *.png`
do
    mv $FILE ${DAY}-${FILE}
done

echo "Making some modifications!"
echo "Jess is the most beautiful girl"
