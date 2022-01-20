# Learnings

# toRunSmoke
 - add keyword "smoke" to it block description an run with following command(eg: "login - smoke")
 - npx wdio run wdio.conf.js --mochaOpts.grep smoke
 # toRunSuite
 - add the test file's relative path with suite name and run using below command
 - npx wdio run wdio.conf.js --suite suiteName
 # toRunIndividualSpecFiles
- run the command -> npx wdio run wdio.conf.js --spec relativePathOfSpecFile
# pending tasks for framework
- adding pre commit hooks 
- configuring with cicd tool
- running scripts inside docker

