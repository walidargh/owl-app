json.array! @photos do |photo|
	json.id photo.id
	json.url photo.url
	json.business_id photo.business_id
end