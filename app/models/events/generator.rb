module Events
	class Generator
		def initialize(user, start_date, end_date)
			@user = user
			@start_date = start_date
			@end_date = end_date
		end

		def generate
			from_date = @start_date.split('-')
			to_date = @end_date.split('-')

			events = []

			(DateTime.new(from_date[0].to_i,from_date[1].to_i,from_date[2].to_i)..DateTime.new(to_date[0].to_i,to_date[1].to_i,to_date[2].to_i)).each do |date|
			  new_day = WorkingDay.new
			  new_day.user_id = @user.id
			  new_day.arrival = date
			  new_day.break_start = date
			  new_day.break_end = date
			  new_day.departure = date
			  events.push(new_day)
			  new_day.save
			  
			end
		end
	end
end