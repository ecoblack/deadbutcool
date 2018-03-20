class PagesController < ApplicationController
respond_to :html, :js


	  def index
	  	@projects = Project.all.paginate(page: params[:page], per_page: 1)
		 
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

		@contact = {
			business_email: 'hello@deadbutcool.com',
			gen_email: "info@deadbutcool.com",
			phone: "+7-322-674-88-03",
			soundcloud: "soundcloud.com/fjordwhore",
			youtube: "soundcloud.com/fjordwhore",
			instagram: "soundcloud.com/fjordwhore"}
			
		end
		def contact
				respond_to do |format|
		      format.html # index.html.erb
		      format.js
			end
		end
end
