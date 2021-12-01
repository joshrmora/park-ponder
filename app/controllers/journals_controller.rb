class JournalsController < ApplicationController

  def show

  end

  def create
    @journal = Journal.new(journal_params)
    @journal.user = current_user
    if @journal.save
      render json: @journal
    else
      render json: {errors: @journal.errors.full_messages.to_sentence}
    end
  end

  # def edit
  #   @journal = Journal.find(params[:id])
  # end

  # def update
  #   @journal = Journal.find(params[:id])

  #   if @journal.update(journal_params)
  #     redirect_to "/parks/#{params[:park_id]}"
  #   else
  #     flash.now[:error] = @journal.errors.full_messages.to_sentence
  #     render :edit
  #   end
  # end

  private

  def journal_params
    params.require(:journal).permit(:rating, :body, :park_id)
  end


end