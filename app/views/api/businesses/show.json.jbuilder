json.id @business.id
json.name @business.name
json.address @business.address
json.hours @business.hours
json.price @business.price
if Business.rating[@business.id]
	json.rating Business.rating[@business.id].to_f.round(2)
else 
	json.rating "null"
end

json.tags do
	json.array! @business.tags do |tag|
		json.id tag.id
		json.name tag.name
	end
end

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
