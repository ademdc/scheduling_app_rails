Rails.application.routes.draw do

  root to: "dashboard#index"

  resources :working_days
  resources :dashboard, only:[:index]


  get 'users/schedule/:id' => "schedules#render_schedule"

  devise_for :users, controllers: {
      sessions: 'users/sessions',
      passwords: 'users/passwords',
      registrations: 'users/registrations',
  }

  resources :users do
    resource :schedule, only: [:create, :show]
  end


end
