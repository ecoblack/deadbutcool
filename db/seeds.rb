# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')


Project.create!(title: 'FIRST PROJECT', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')
Project.create!(title: '2 PROJECT', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')
Project.create!(title: '3 PROJECT', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')
Project.create!(title: '4 PROJECT', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')
Project.create!(title: 'LAST PROJECT', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')