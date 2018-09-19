class CreateWorkingDays < ActiveRecord::Migration[5.2]
  def change
    create_table :working_days do |t|
      t.integer :user_id
      t.datetime :arrival
      t.datetime :break_start
      t.datetime :break_end
      t.datetime :departure

      t.timestamps
    end
  end
end
