class Api::BusinessesController < ApplicationController
	def index
		@businesses = Business.all
	end

	def create
		@business = Business.new(business_params)
		if @business.save
			render "api/business/show"
		else
			@errors = @business.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

	private 
	def business_params
		params.require(:business).permit(:name, :address, :hours, :price)
	end

end
