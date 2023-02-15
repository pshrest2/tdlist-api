Rails.application.routes.draw do
  scope '/api/v1' do
    resources :todo_lists
  end
end
