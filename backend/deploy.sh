
#Bygger image lokalt // 
# TODO add address and app-name
docker build -t registry.heroku.com/<address>/app-name .

#Pushar image till Heroku // 
# TODO add address and app-name
docker push registry.heroku.com/<address>/app-name

#Deployar image// 
# TODO add image / app name
heroku container:release --app <image/appname>