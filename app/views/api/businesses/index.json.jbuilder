json.array! @businesses do |business|
	json.id business.id
	json.name business.name
	json.address business.address
	json.hours business.hours
	json.price business.price
end