ActiveAdmin.register Project do
		permit_params :title, :description, :image, :link, :credits

		show do |t|
			attributes_table do
				row :title
				row :description
				row :link
				row :credits
				row :image do
					project.image? ? image_tag(project.image.url, height: '100') : content_tag(:span, "No photo yet")
				end
			end
		end

		form :html => { :enctype => "multipart/form-data" } do |f|
			f.inputs do
				row :title
				row :description
				row :link
				row :credits
				f.input :image, hint: f.project.image? ? image_tag(project.image.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
			end
			f.actions
		end
end