### or create a new repository on the command line
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/alessandronuunes/commandline.git
git push -u origin main
### to change branch 
git checkout main
### join branch current with brach informed
git merge build

### or push an existing repository from the command line
git remote add origin https://github.com/alessandronuunes/commandline.git
git branch -M main
git push -u origin main

### Forçar uma substituição de arquivos locais com a branch master
git fetch --all git reset --hard origin/master
## lista dos commits antes de executar um rebase
