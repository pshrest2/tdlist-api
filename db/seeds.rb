# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

pranaya = User.create(name: "Pranaya")
pranaya.todo_lists.create(title: "Schedule Meeting", done: false)
pranaya.todo_lists.create(title: "Call home", done: false)
