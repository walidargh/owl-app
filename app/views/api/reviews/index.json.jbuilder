json.array! @reviews do |review|
	json.id review.id
	json.name review.body
	json.address review.address
end
