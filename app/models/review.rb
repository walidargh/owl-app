class Review < ActiveRecord::Base
	validates :content, :stars, :user_id, :business_id, presence: true
	validates :stars, inclusion: {in: 1..5}

	belongs_to :user
	belongs_to :business
end
