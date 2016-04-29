class Business < ActiveRecord::Base
	validates :user_id, :name, :address, :hours, :price, presence: true
	validates :price, inclusion: {in: 1..3}

	belongs_to :user
	has_many :reviews
end