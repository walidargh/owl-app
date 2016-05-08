class Tagging < ActiveRecord::Base
	validates :tag_id, :business_id, presence: true
	validates :tag_id, uniqueness: {scope: :business_id}

	belongs_to :tag
	belongs_to :business
end
