Rails.application.routes.draw do
  resource :users
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
end
