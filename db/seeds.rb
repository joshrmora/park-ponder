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
user_2 = User.create(email: "josh@mail.com", password: "password", username: "joshmora", first_name: "Josh", last_name: "Mora", role: "member")
user_3 = User.create(email: "allina@mail.com", password: "password", username: "allinadolor", first_name: "Allina", last_name: "Dolor", role: "member")
user_4 = User.create(email: "archie@mail.com", password: "password", username: "archiegoodboy", first_name: "Archie", last_name: "Goodboy", role: "member")

journal_1 = Journal.create(rating: 4, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Nisl condimentum id venenatis a condimentum.  Sed blandit libero volutpat sed cras ornare arcu dui. Neque aliquam vestibulum morbi blandit. Cursus sit amet dictum sit amet justo donec enim diam. Morbi leo urna molestie at elementum eu facilisis sed odio.", park_id: 1, user_id: 1)
journal_2 = Journal.create(rating: 5, body: "Arcu non odio euismod lacinia at quis risus sed vulputate. Bibendum est ultricies integer quis. Amet consectetur adipiscing elit ut aliquam. Velit euismod in pellentesque massa placerat. Posuere ac ut consequat semper viverra nam libero. Maecenas volutpat blandit aliquam etiam erat velit.", park_id: 1, user_id: 1)
journal_3 = Journal.create(rating: 3, body: "My calf hurts.", park_id: 1, user_id: 2)


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

