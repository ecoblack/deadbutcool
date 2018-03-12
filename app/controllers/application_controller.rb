class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
 respond_to :html, :js
	  def index
		@project = Project.find(params[:id])
		project.next = Project.where("id > ?", id).order("id ASC").first || Project.first
   		project.previous = Project.where("id < ?", id).order("id DESC").first || Project.last
  
	end
end
