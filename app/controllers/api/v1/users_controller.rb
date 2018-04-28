class Api::V1::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end