class Project < ApplicationRecord

	def next
    	Project.where("id > ?", id).order(id: :asc).limit(1).first
	end

	def prev
	     Project.where("id < ?", id).order(id: :desc).limit(1).first
	end
end
