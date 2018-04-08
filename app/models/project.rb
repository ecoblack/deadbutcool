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

	

	def should_generate_new_friendly_id? #will change the slug if the name changed
    	title_changed?
  end

	 def slug=(value)
    if value.present?
      write_attribute(:slug, value)
    end
  end
end
