require 'byebug'
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login_user(user)
    puts "logging in"
    puts "user"
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!@current_user
  end

  def logout
    puts "logging out"
    puts current_user
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_current_user
    # redirect_to new_session_url unless signed_in?
  end

end
