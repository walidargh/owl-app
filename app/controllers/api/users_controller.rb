class Api::UsersController < ApplicationController
	#ensure signed in for show, edit, update, destroy, maybe index?
	def show
		current_user
	end

	def new
		#redirec to log in page
	end

	def create
		@user = User.create!(user_params)
		if @user
			login_user(@user)
		else
			#redirec to sign up page
		end
	end

	def edit
		@user = User.find_by_user_name(user_params[:user_name])
		#render user profile edit form
	end

	def update
		@user = User.update(user_params)
		#make a redirect
	end

	def destroy
		#find user, destroy their session, delete them from db, redirect to sign up page
	end

	private
	def user_params
		params.require(:user).permit(:user_name, :password)
	end
end
