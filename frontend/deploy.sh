
#Bygger image lokalt // 
# TODO add address and app-name
docker build -t registry.heroku.com/examensprojekt-frontend/web .

#Pushar image till Heroku // 
# TODO add address and app-name
heroku container:push web --app examensprojekt-frontend

#Deployar image// 
# TODO add image / app name
heroku container:release web --app examensprojekt-frontend