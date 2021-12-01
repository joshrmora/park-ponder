Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  resources :journals, only: [:index, :create, :update, :edit]

  get "/parks", to: "homes#index"
  get "/parks/:id", to: "homes#index"
  get "/journals/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show]

      resources :journals, only: [:index, :create]

      resources :users, only: [:index, :show]
    end
  end

end
