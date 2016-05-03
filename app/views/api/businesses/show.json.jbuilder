json.id @business.id
json.name @business.name
json.address @business.address
json.hours @business.hours
json.price @business.price
json.reviews do
 json.array! @business.reviews do |review|
		json.id review.id
		json.body review.body
		json.rating review.rating
	end
end
json.photos do 
	json.array! @business.photos do |photo|
		json.id photo.id
		json.url photo.url
	end
end
