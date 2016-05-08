class Api::TaggingsController < ApplicationController
	def index

	end

	def create
		
	end

	private
	def tagging_params
		params.require(:taggging).permit(:tag_id, :business_id)
	end
end
