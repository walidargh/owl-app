class Api::BusinessesController < ApplicationController
	def index
		@businesses = Business.all
	end

	def create
		full_params = business_params
		full_params[:user_id] = current_user.id
		@business = Business.new(full_params)
		if @business.save
			render json: @business
		else
			@errors = @business.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

	def show 
		@business = Business.find(params[:id])
		if @business
			
		else
			@errors = @business.errors.full_messages
			render "api/shared/error", status: 404
		end
	end

	def search
		if params[:query].present?
			 @users = Business.where("name ~ ?", params[:query])
		else
			@user = User.none
		end
		
    respond_to do |format|
      format.html { render :search }
      format.json { render :search }
    end

	end

	private 
	def business_params
		params.require(:business).permit(:name, :address, :hours, :price)
	end

end
