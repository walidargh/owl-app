class Review < ActiveRecord::Base
	validates :content, :rating, :user_id, :business_id, presence: true
	validates :rating, inclusion: {in: 1..5}

	belongs_to :user
	belongs_to :business
end
