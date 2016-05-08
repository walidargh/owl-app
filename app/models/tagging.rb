class Tagging < ActiveRecord::Base
	belongs_to :tag

	validates :tag, :business, presence: true
	validates :tag, uniqueness: {scope: :business_id}
end
