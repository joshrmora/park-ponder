require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  
  describe "#index" do
    it "should return json data containing NPS parks info" do
      
      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200

    end
  end

end