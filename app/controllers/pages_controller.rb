class PagesController < ApplicationController
respond_to :html, :js


	 def index
    
  		
	  	@projects = Project.all.order(created_at: :desc)
		@project = Project.first
			 respond_to do |format|
		      format.html
		      format.js
	  		end
	  end
	
	  def info
	    
		respond_to do |format|
	      format.html
	      format.js
			end
		end

		def contact
				respond_to do |format|
		      format.html # index.html.erb
		      format.js
			end
		end
end
