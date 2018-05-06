class Api::V1::CollectionsController < ApplicationController
  # skip_before_action :authenticate

  def index
    render json: current_user.shows
  end
end