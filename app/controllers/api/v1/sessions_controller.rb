class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: user
    else
      render json: { errors: { message: 'Unable to find user with that email or password' } }, status: 500
    end
  end
end