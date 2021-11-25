class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.text :activities, array: true, default: []
      t.string :address, null: false
      t.string :code, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.string :name, null: false
      t.string :state, null: false
      t.string :url, null:false

      t.timestamps
    end
  end
end
