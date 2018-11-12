class ApplicationController < ActionController::Base


  helper_method :ensure_logged_in, :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    redirect_to '/api/session' unless logged_in?
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    
    @current_user = nil
    session[:session_token] = nil
  end
end
