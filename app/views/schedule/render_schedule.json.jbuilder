# json.start @schedule[0].arrival
# json.end @schedule[0].departure
# json.title "title"

# json.days @schedule do |json, day|
# 	json.(day, :arrival, :departure)
# end 

# count = 0;

# json.schedule do |json|
# 	json.start @schedule[count].arrival
# 	json.end @schedule[count].departure
# 	json.title "Schedule "
# 	count+=1;
# end

json.array!(@schedule) do |day|
  json.start day.arrival
  json.end day.departure
  json.title "Schedule"
end