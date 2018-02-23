class AddColumnToProject < ActiveRecord::Migration[5.0]
  def change
  	add_column :projects, :title, :string
  	add_column :projects, :description, :text
  	add_column :projects, :link, :string
  	add_column :projects, :credits, :text
  end
end
