class Tag < ActiveRecord::Base
	validates :name, presence: true
	validates :name, uniqueness: true
	
	has_many :taggings, dependent: :destroy
	has_many :businesses, through: :taggings
end
