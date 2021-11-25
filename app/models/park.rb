class Park < ApplicationRecord
  validates :activities, presence: true
  validates :address, presence: true
  validates :code, presence: true
  validates :description, presence: true
  validates :image, presence: true
  validates :name, presence: true
  validates :state, presence: true
  validates :url, presence: true

end
