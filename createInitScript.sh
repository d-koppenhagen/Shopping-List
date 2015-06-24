#!/bin/bash
 pwd
 cp shopping-list /etc/init.d/
 if [ ! -d "/var/run/" ]; then
     echo "Folder doesn't exist, created Folder: /var/log/"
     mkdir /var/run/
 fi
 if [ ! -d "/var/log/" ]; then
     echo "Folder doesn't exist, created Folder: /var/log/"
     mkdir /var/log/
 fi

 chmod +x /etc/init.d/shopping-list
 update-rc.d shopping-list defaults
 echo "finished"
