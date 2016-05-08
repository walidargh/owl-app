class Api::TagsController < ApplicationController
	def index
		@tags = Tag.all
	end

	# def create
	# 	@tag = Tag.new(tag_params)
	# 	if @tag.save
	# 		render json: @tag
	# 	else
	# 		@errors = @tag.errors.full_messages
	# 		render json: @error, status: 422
	# 	end
	# end

	private
	def tag_params
		params.require(:tag).permit(:name)
	end
end
