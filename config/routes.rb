Rails.application.routes.draw do
  get 'todo_lists/index'
  get 'todo_lists/create'
  get 'todo_lists/update'
  get 'todo_lists/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
