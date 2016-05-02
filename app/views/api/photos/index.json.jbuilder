json.array! @photos do |photo|
	json.id photo.id
	json.business_id photo.business_id
	json.url photo.url
end