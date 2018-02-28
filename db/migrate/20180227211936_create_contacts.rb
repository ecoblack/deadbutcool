class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|

      t.timestamps
      t.string :business_email
      t.string :gen_email
      t.string :phone
      t.string :soundcloud
      t.string :youtube
      t.string :facebook
      t.string :instagram

      t.text :description
    end
  end
end
