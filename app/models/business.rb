class Business < ActiveRecord::Base
	validates :user_id, :name, :address, :hours, :price, :rating, presence: true
	validates :price, inclusion: {in: 1..4}
	validates :rating, inclusion: {in: 1..5}
	belongs_to :users
end
