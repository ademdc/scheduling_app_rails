json.array!(@schedule) do |day|
  json.start day.arrival
  json.end day.break_start
  json.title "Before break"
end

json.array!(@schedule) do |day|
  json.start day.break_end
  json.end day.departure
  json.title "After break"
end