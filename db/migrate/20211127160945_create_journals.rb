class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.integer :rating, null: false
      t.text :body, null: false

      t.belongs_to :park, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
