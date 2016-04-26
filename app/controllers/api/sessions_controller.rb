class Api::SessionsController < ApplicationController
	def new

	end

	def create
		@user = User.find_by_credentials(
			user_params[:user_name],
			user_params[:password]
			)
		if @user
			login_user(@user)
		else
			#render new and display message
	end

	def destroy
		current_user.reset_session_token! if current_user
		session[:session_token] = nil
		#redirect to log in page
	end
end
