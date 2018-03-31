class Project < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: [:slugged, :finders]
	validates :title, presence: true, length: { minimum: 3 }
  	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	
  	

	def next
	    Project.where("id < ?", id).order("id DESC").first || Project.last
	end

	def previous
	    
	    Project.where("id > ?", id).order("id ASC").first || Project.first
	end

	


end
