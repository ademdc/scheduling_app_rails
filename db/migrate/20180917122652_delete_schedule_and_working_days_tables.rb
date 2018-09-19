class DeleteScheduleAndWorkingDaysTables < ActiveRecord::Migration[5.2]
  def change
  	drop_table :working_days
  	drop_table :schedules
  end
end
