class Business < ActiveRecord::Base
	validates :user_name, :name, :address, :hours, :price, presence: true

	belongs_to :users
end
