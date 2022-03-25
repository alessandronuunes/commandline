php artisan make:model Todo -mcr
ou
php artisan make:model -mc test --resource

## o Generate a migration, seeder, factory and resource controller for the model
php artisan make:model Todo -a ou -all

## Other Options
# -c, --controller Create a new controller for the model
# -f, --factory Create a new factory for the model
# --force Create the class even if the model already exists
# -m, --migration Create a new migration file for the model
# -s, --seed Create a new seeder file for the model
# -p, --pivot Indicates if the generated model should be a custom intermediate table model
# -r, --resource Indicates if the generated controller should be a resource controller