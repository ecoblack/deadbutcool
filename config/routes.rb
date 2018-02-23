Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
	root 'pages#index'
		get  '/works',   to: 'pages#works'
	  	get  '/info',   to: 'pages#info'
  		get  '/contact', to: 'pages#contact'

  		resources :projects
end
