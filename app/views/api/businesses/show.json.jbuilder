json.id @business.id
json.name @business.name
json.address @business.address
json.hours @business.hours
json.price @business.price
json.reviews do
 json.array! @business.reviews do |review|
		json.id review.id
		json.business_id review.business_id
		json.body review.body
		json.rating review.rating
		json.username review.user.user_name
	end
end
json.photos do 
	json.array! @business.photos do |photo|
		json.id photo.id
		json.business_id photo.business_id
		json.url photo.url
	end
end
