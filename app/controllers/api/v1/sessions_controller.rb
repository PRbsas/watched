class Api::V1::SessionsController < ApplicationController

  def create
    user = User.find_by(email: user_params[:email])
    if user.authenticate(user_params[:password])
      render json: { token: Auth.issue({ user: user.id }) }
    else
      render json: { errors: { message: 'Unable to find user with that email or password' } }, status: 500
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end