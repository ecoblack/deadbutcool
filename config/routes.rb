Rails.application.routes.draw do
	root 'pages#index'
		get  '/works',   to: 'pages#works'
	  	get  '/info',   to: 'pages#info'
  		get  '/contact', to: 'pages#contact'
end
