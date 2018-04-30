class ApplicationController < ActionController::API
  before_action :authenticate

  def current_user
    if token
      user = User.find(auth['user'])
      if user
        @current_user ||= user
      end
    end
  end

  def logged_in?
    !!current_user
  end

  private

  def authenticate
    render json: { message: 'Not authorized' } unless logged_in?
  end

  def token
    request.env['HTTP_AUTHORIZATION'].split(' ')[1]
  end

  def auth
    Auth.decode(token)
  end
end
