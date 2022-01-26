
#Bygger image lokalt // 
# TODO add address and app-name
docker build -t registry.heroku.com/examensprojekt-backend/web .

#Pushar image till Heroku // 
# TODO add address and app-name
heroku container:push web --app examensprojekt-backend

#Deployar image// 
# TODO add image / app name
heroku container:release web --app examensprojekt-backend