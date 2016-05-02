class Photo < ActiveRecord::Base
	validates :url, :user_id, :business_id, presence: true

	belongs_to: user
	belongs_to: business
end
