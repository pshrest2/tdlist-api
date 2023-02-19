Rails.application.routes.draw do
  root "main#index"
  scope '/api/v1' do
    resources :todo_lists
  end
end
