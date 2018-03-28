ActiveAdmin.register Project do
		permit_params :title, :description, :link, :credits, :image, :brand

		show do |t|
			attributes_table do

				row :title
				row :description
				row :link
				row :credits
				row :brand
				row :image do
					project.image? ? image_tag(project.image.url, height: '100') : content_tag(:span, "No photo yet")
				
				end
				
			end
		end

		form :html => { :enctype => "multipart/form-data" } do |f|
			f.inputs do
				f.input :title
				f.input :description
				f.input :link
				f.input :credits
				f.input :brand
				f.input :image, hint: f.project.image? ? image_tag(project.image.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
				
			end
			f.actions
		end
end