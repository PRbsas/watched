class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title
      t.integer :year
      t.string :slug
      t.text :overview
      t.string :status
      t.integer :aired_episodes

      t.timestamps
    end
  end
end
