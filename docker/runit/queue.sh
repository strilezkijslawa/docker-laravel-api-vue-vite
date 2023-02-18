#!/bin/sh

echo "QUEUE -> start"
exec /sbin/setuser www-data /usr/bin/php /www/artisan queue:work --daemon
