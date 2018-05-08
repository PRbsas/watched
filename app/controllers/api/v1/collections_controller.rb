class Api::V1::CollectionsController < ApplicationController
  def index
    render json: current_user.shows
  end
end