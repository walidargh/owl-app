class Tagging < ActiveRecord::Base
	validates :tag, :business, presence: true
	validates :tag, uniqueness: {scope: :business_id}

	belongs_to :tag
end
