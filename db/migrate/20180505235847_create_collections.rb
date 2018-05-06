class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.integer :user_id
      t.integer :show_id
      t.string :status

      t.timestamps
    end
  end
end
