ActiveAdmin.register Project do
		permit_params :title, :description, :link

		show do |t|
			attributes_table do
				row :title
				row :description
				row :link
				
			end
		end

		form :html => { :enctype => "multipart/form-data" } do |f|
			f.inputs do
				f.input :title
				f.input :description
				f.input :link
				
			end
			f.actions
		end
end