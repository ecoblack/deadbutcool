ActiveAdmin.register Project do
		permit_params :title, :description, :link, :credits, :image, :brand, :id

		show do |t|
			attributes_table do

				row :title
				row :description
				row :link
				row :credits
				row :link0
				row :credit1
				row :link1
				row :credit2
				row :link2
				row :credit3
				row :link3
				row :credit4
				row :link4
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
				f.input :link0
				f.input :credit1
				f.input :link1
				f.input :credit2
				f.input :link2
				f.input :credit3
				f.input :link3
				f.input :credit4
				f.input :link4
				f.input :brand
				f.input :image, hint: f.project.image? ? image_tag(project.image.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
				
			end
			f.actions
		end
end