Rails.application.routes.draw do
root to: 'static_pages#root'

namespace :api, defaults: {format: :json} do
  resource :user, only: [:create, :show, :update, :delete]
  resources :businesses, only: [:index, :create]
  # TODO: Include edit, delete in methods?
end
end
