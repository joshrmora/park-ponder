class Api::V1::UsersController < ApplicationController
  def index 
    if current_user 
      render json: current_user 
    else 
      render json: {}, status: 401
    end 
  end

  def show
    @user = User.find(params[:id])
  end
end