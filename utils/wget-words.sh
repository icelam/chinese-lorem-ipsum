#!/bin/sh

FOLDER_NAME='scrap-text'
ID_LIST='id.txt'
TEXT_LIST='final.txt'

mkdir $FOLDER_NAME
cd ./$FOLDER_NAME

echo 'Fetching word id...'

# Fetch raw HTML from 小學中文科常用字研究 - HKBU
for i in {1..100}
do
  wget -qO- 'https://ephchinese.ephhk.com/lcprichi/search/show_table.php' --post-data 'class=999&order=class_id&sp=sp&page='$i |
  grep -oEi 'show_word\.php\?id=[0-9]+' | 
  cut -d '=' -f 2 >> $ID_LIST
done

echo 'All word ID saved to '$ID_LIST

# wget word details, convert to utf8 and search for title tag
while IFS= read -r id; do
  echo 'Getting word '$id

  wget -qO- 'https://ephchinese.ephhk.com/lcprichi/search/show_word.php?id='$id --remote-encoding=big5 |
  iconv -f Big5 -t UTF-8 |
  grep -oEi '字源考釋\s\-\s(.)' |
  cut -d '-' -f 2 >> $TEXT_LIST
done < $ID_LIST

echo 'All word ID saved to '$TEXT_LIST