# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')


Project.create!(title: 'First Project', description: 'Description is here', link: 'https://vimeo.com/113025608', credits: 'Jesus, mom')
Project.create!(title: 'Second Project', description: 'Description is here', link: 'https://vimeo.com/135814309', credits: 'Jesus, mom')
Project.create!(title: 'Third Project', description: 'Description is here', link: 'https://vimeo.com/247958907', credits: 'Jesus, mom')
Project.create!(title: 'Last Project with extremely long title for testing and stuff', description: 'Description is here', link: 'vimeo.com/1488', credits: 'Jesus, mom')