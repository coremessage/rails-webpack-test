Rails.application.routes.draw do
  root to: 'home#index'
  get '/cow' => 'home#cow', as: :cow
end
