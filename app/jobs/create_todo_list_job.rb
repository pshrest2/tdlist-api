class CreateTodoListJob < ApplicationJob
  queue_as :default

  def perform(user_id, title, done)
    user = User.find(user_id)
    puts "Creating todo list for user #{user.name}"

    user.todo_lists.create(title: title, done: done)
    user.save

  rescue ActiveRecord::RecordNotFound => e
    render 'User not found'
  end
end
