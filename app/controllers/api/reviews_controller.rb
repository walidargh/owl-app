class Api::ReviewsController < ApplicationController
	def index
		@reviews = Reviews.find_by({business_id: review_params[:business_id]})
	end

	def create
		full_params = review_params
		full_params[:user_id] = current_user.id
		full_params[:stars] = full_params[:stars].to_i
		@review = Review.new(review_params)
		if @review.save
			render json: @review
		else
			@errors = @business.errors.full_messages
			render "api/shared/errors", status: 422
		end
	end

	private
	def review_params
		params.require(:reviews).permit(:content, :stars)
	end
	
end
