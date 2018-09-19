class DropWorkingDayTable < ActiveRecord::Migration[5.2]
  def change
  	drop_table :working_days
  end
end
