ActiveAdmin.register Contact do
		permit_params :business_email, :gen_email, :phone, :soundcloud, :youtube, :instagram, :description
  
		show do |t|
			attributes_table do
				row :business_email
				row :gen_email
				row :phone
				row :soundcloud
				row :youtube
				row :instagram
				row :description
				
			end
		end

		form :html => { :enctype => "multipart/form-data" } do |f|
			f.inputs do
				f.input :business_email
				f.input :gen_email
				f.input :phone
				f.input :soundcloud
				f.input :youtube
				f.input :instagram
				f.input :description
				end
				f.actions
		end
end