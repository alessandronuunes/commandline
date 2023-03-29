php artisan make:model Todo -mcr
ou
php artisan make:model -mc test --resource

# o Generate a migration, seeder, factory and resource controller for the model
php artisan make:model Todo -a ou -all

# Other Options
 -c, --controller Create a new controller for the model
 -f, --factory Create a new factory for the model
 --force Create the class even if the model already exists
 -m, --migration Create a new migration file for the model
 -s, --seed Create a new seeder file for the model
 -p, --pivot Indicates if the generated model should be a custom intermediate table model
 -r, --resource Indicates if the generated controller should be a resource controller

## resource

index -> O métod index exibe todos os items
show -> O método de show deve exibe um item
update -> O método de update (atualização) deve manipular o formulário e atualizar a entidade e redirecionar.
edit -> O método de edit (edição) deve retornar uma view com um formulário com os dados da entidade.
store -> O método store deve manipular o formulário e criar a entidade e redirecionar.
create -> O método create deve retornar uma view com um formulário.

#criar um link simbolico
php artisan storage:link
# criaru uma exception
php artisan make:exception NoFileException.php
php artisan make:exception NotParamInformedException
php artisan make:exception NoFileException.php
# criar uma migration 
php artisan make:migration create_users_table --create=users
#add collumn migration
php artisan make:migration add_size_to_libraries --table=libraries




   