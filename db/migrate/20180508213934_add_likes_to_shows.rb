class AddLikesToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :likes, :number
  end
end
