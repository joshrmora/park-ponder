class Api::V1::ParksController < ApplicationController

  NPS_KEY = ENV["NPS_KEY"]

  def index 
    url = "https://developer.nps.gov/api/v1/parks"

    response = Faraday.get(url, {'limit' => 1000, 'api_key' => NPS_KEY})
    parsed_response = JSON.parse(response.body)
    all_parks = parsed_response["data"]

    national_parks = []

    all_parks.each do |park|
      if park["designation"] == "National Park"
        national_parks << park
      end
    end

    binding.pry

    render json: parsed_response
  end
end