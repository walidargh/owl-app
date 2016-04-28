class Business < ActiveRecord::Base
	validates :user_id, :name, :address, :hours, :price, presence: true

	belongs_to :users
end
