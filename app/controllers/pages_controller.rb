class PagesController < ApplicationController
def index
	@projects = Project.all
end

	def contact
	@contact = {
		business_email: 'hello@deadbutcool.com',
		gen_email: "info@deadbutcool.com",
		phone: "+7-322-674-88-03",
		soundcloud: "soundcloud.com/fjordwhore",
		youtube: "soundcloud.com/fjordwhore",
		instagram: "soundcloud.com/fjordwhore"}
		
	end
end
