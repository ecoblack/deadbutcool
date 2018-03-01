class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

	  def index
		@projects = Project.all
	end
end
