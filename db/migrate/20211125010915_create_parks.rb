class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :code, null: false
      t.text :description, null: false
      t.text :image, null: false
      t.string :name, null: false
      t.string :state, null: false
      t.string :url, null: false
      t.string :postalcode, null: false
      t.string :city, null: false
      t.string :addressline1
      t.string :addressline2

      t.timestamps
    end
  end
end
