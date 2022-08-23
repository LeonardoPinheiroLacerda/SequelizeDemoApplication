docker-compose down
rm -r postgres-data
docker-compose up -d
echo waiting to run the sequelize app ...
sleep 5
node index