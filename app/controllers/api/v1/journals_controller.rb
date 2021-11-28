class Api::V1::JournalsController < ApplicationController

  def index
    render json: Journal.all
  end

  def create
    journal = Journal.new(journal_params)
    journal.user = current_user
    if journal.save
      render json: journal
    else
      render json: {errors: journal.errors.full_messages.to_sentence}
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:rating, :body, :park_id)
  end

end