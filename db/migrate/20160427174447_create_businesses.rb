class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
    	t.integer :user_id, null: false
    	t.string :name, null: false
    	t.string :address, null: false 
    	t.string :hours, null: false
    	t.integer :price, null: false
        
    	t.timestamps
    end

    add_index :businesses, :user_id
  end
end
