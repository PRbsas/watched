class Api::V1::ShowsController < ApplicationController
  skip_before_action :authenticate

  def index
  end

  def create
    show = Show.new(show_params)
    if show.save
      render json: show
    else
      render json: { errors: show.errors.full_messages }, status: 500
    end
  end

  private
  def show_params
    params.require(:show).permit(:title, :year, :slug, :overview, :status, :aired_episodes)
  end
end
