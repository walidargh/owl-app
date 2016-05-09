Rails.application.routes.draw do
root to: 'static_pages#root'

namespace :api, defaults: {format: :json} do
  resources :businesses, only: [:index, :create, :show] do 
  	get "search", on: :collection
  	get "filter", on: :collection
  end
  resources :tags, only: [:index, :create, :show]
  resources :reviews, only: [:index, :create, :show]
  resources :photos, only: [:index, :create]
  resource :user, only: [:create, :show, :update, :delete]
  resource :session, only: [:create, :destroy, :show]
  # TODO: Include edit, delete in methods?
end
end
