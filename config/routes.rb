Rails.application.routes.draw do

 namespace :admin do
    # Add dashboard for your models here
    resources :projects
   

    root to: "projects#index" # <--- Root route
  end

	root 'pages#index'
		get  '/works',   to: 'projects#index'
	  	get  '/info',   to: 'pages#info'
  		get  '/contact', to: 'pages#contact'
  		get '/projects/:title', to: "projects#show"
  		resources :projects
end
