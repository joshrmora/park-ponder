class Api::V1::JournalsController < ApplicationController

  def index
    render json: Journal.all
  end

  def show
    render json: Journal.find(params[:id])
  end

end