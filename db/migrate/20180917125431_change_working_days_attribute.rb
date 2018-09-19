class ChangeWorkingDaysAttribute < ActiveRecord::Migration[5.2]
  def change
  	  change_column :working_days, :arrival, :datetime
  	  change_column :working_days, :break_start, :datetime
  	  change_column :working_days, :break_end, :datetime
  	  change_column :working_days, :departure, :datetime
  end
end
