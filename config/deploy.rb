# config valid for current version and patch releases of Capistrano
lock "~> 3.10.1"

set :application, "DEADBUTCOOL"
set :repo_url, "git@github.com:ecoblack/deadbutcool.git"

set :deploy_to, "/home/fishhouse/www/deadbutcool"

append :linked_files, "config/database.yml", "config/secrets.yml"
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads"