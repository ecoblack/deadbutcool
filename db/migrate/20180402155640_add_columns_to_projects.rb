class AddColumnsToProjects < ActiveRecord::Migration[5.0]
  def change
  	add_column :projects, :link0, :string
  	add_column :projects, :credit1, :string
  	add_column :projects, :link1, :string
  	add_column :projects, :credit2, :string
  	add_column :projects, :link2, :string
  	add_column :projects, :credit3, :string
  	add_column :projects, :link3, :string
  	add_column :projects, :credit4, :string
  	add_column :projects, :link4, :string
  end
end
