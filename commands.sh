docker build --platform linux/amd64 -t jomiy/translator:latest .

docker push jomiy/translator:latest

docker run -it --rm -p 3005:3000 jomiy/translator:latest