class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.issue({ user: user.id }) }
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end