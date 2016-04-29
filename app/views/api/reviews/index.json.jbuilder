json.array! @reviews do |review|
	json.id review.id
	json.name review.content
	json.address review.address
end