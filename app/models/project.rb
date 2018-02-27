class Project < ApplicationRecord

	validates :title, presence: true, length: { minimum: 3 }
  	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	def prev
	     Project.where("id < ?", id).order(id: :desc).limit(1).first
	end

	def next
    	Project.where("id > ?", id).order(id: :asc).limit(1).first
	end

	
end
