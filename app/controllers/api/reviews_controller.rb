class Api::ReviewsController < ApplicationController
	def index
		# @reviews = Reviews.find_by({:business_id})
	end

	def show
	end

	def create
	end

	private
	def review_params
		params.require(:reviews).permit(:content, :stars, :business_id)
	end
end
