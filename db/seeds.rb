# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

Park.destroy_all

user_1 = User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin", last_name: "admin", role: "admin")

url = "https://developer.nps.gov/api/v1/parks"
NPS_KEY = ENV["NPS_KEY"]

response = Faraday.get(url, {'limit' => 1000, 'api_key' => NPS_KEY})
parsed_response = JSON.parse(response.body)
all_parks = parsed_response["data"]

all_parks.each do |park|
  if park["designation"] == "National Park"
    Park.create(
      code: park["parkCode"],
      description: park["description"],
      image: park["images"][0]["url"],
      name: park["fullName"],
      state: park["states"],
      url: park["url"],
      postalcode: park["addresses"][0]["postalCode"],
      city: park["addresses"][0]["city"],
      addressline1: park["addresses"][0]["line1"],
      addressline2: park["addresses"][0]["line2"]
    )
  end
end

