Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'users#create'
      post '/login', to: 'sessions#create'
      post '/likes', to: 'shows#likes'
      resources :shows
      resources :collections
    end
  end
end
