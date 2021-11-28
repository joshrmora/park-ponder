class ParkSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :image, :name, :state, :url, :postalcode, :city

  has_many :journals
end
