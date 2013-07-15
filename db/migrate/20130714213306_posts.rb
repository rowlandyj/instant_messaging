class Posts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :body, :subject
      t.belongs_to :user
      t.timestamps
    end
  end
end
