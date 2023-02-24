Rails.application.routes.draw do
  root "main#index", defaults: {format: :html}
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :todo_lists
      resources :signup
    end
  end

  get "*path", to: "main#index"
end
