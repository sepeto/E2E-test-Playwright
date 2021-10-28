docker build -t autotest .
docker run -it -v $PWD/test:/test autotest