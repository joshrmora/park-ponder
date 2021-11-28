class Park < ApplicationRecord
  validates :code, :description, :image, :name, :state, :url, :postalcode, :city, presence: true

  has_many :journals
end
