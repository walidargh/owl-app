json.array! @businesses do |business|
	json.id business.id
	json.name business.name
	json.address business.address
	json.hours business.hours
	json.price business.price
	if @ratings[business.id]
		json.rating @ratings[business.id].to_i.round(3)
	else 
		json.rating "null"
	end
	json.featured do 
		if business.photos.first
			json.id business.photos.first.id
			json.url business.photos.first.url
		end
	end

	json.tags do
		json.array! business.tags do |tag|
			json.id tag.id
			json.name tag.name
		end
	end
	
end