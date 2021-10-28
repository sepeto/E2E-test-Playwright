#To execute the automation playwright test just build de dockerfile
docker build -t autotest .
#After that run the image binding the folder ./test 
#If you run it with no arguments, it will run all the test.
docker run  -v $PWD/test:/e2e/test autotest  
#If you give an arguemt it just will run the specified folder of one of the devices
docker run -v $PWD/test:/e2e/test -e dev=desktop autotest  