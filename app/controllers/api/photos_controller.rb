class Api::PhotosController < ApplicationController
	def index
		@photos = Photo.find_by({business_id: photo_params[:business_id]})
	end

	def create
		full_params = photo_params
		full_params[:user_id] = current_user.id
		@photo = Photo.new(full_params)
		if @photo.save
			render json: @photo
		else 
			@errors = @photo.errors.full_messages
			render "api/shared/errors", status: 422
		end
	end

	private
	def photo_params
		params.require(:photo).permit(:url, :business_id)
	end
end
