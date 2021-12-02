class JournalsController < ApplicationController

  def create
    @journal = Journal.new(journal_params)
    @journal.user = current_user
    if @journal.save
      render json: @journal
    else
      render json: {errors: @journal.errors.full_messages.to_sentence}
    end
  end

  def edit
    @journal = Journal.find(params[:id])
  end

  def update
    @journal = Journal.find(params[:id])

    if @journal.update(journal_params)
      puts 'in controller update' 
      redirect_to "/parks/#{@journal.park_id}"
    else
      flash.now[:error] = @journal.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @journal = Journal.find(params[:id])

    if @journal.destroy
      flash.now[:notification] = "Journal has been deleted"
      redirect_to "/parks/#{@journal.park_id}"
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:rating, :body, :park_id)
  end


end