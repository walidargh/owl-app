Rails.application.routes.draw do
root to: 'static_pages#root'

namespace :api, defaults: {format: :json} do
  resources :businesses, only: [:index, :create, :show, :search] 
  resources :reviews, only: [:index, :create, :show]
  resource :user, only: [:create, :show, :update, :delete]
  resource :session, only: [:create, :destroy, :show]
  # TODO: Include edit, delete in methods?
end
end
