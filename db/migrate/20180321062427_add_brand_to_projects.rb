class AddBrandToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :brand, :string
  end
end
