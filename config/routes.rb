Rails.application.routes.draw do


  resources :working_days
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  get 'dashboard' => "dashboard#index"

  get 'user' => "schedule#index"
  get 'user/:id' => "schedule#show"
  get 'user_working/:id' => "schedule#render_schedule"

  # get 'users' => "users/listing#index"


  devise_for :users, controllers: {
      sessions: 'users/sessions',
      passwords: 'users/passwords',
      registrations: 'users/registrations',
  }

end
