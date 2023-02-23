# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

pranaya = User.create(username: "pshrestha", email: "pranaya.shrestha2@gmail.com", name: "Pranaya", phone: "6623806746")

pranaya.todo_lists.create(title: "Schedule Meeting", done: false, due_date: Time.now + (180 * 60))
pranaya.todo_lists.create(title: "Call home", done: false, due_date: DateTime.now + 2)
