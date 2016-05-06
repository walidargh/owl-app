class Api::SessionsController < ApplicationController

	def show
		if current_user
			@user = current_user
			render "api/users/show"
		else
			@errors = {}
			render json: @errors, status: 404
		end
	end

	def create
		@user = User.find_by_credentials(
			params[:user][:user_name],
			params[:user][:password]
			)
		if @user
			login_user(@user)
			render "api/users/show"
		else
			@errors = ['invalid username or password']
			render json: @errors, status: 401
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			@errors = ['no one logged in']
			render json: @errors, status: 404
		end
	end

end
