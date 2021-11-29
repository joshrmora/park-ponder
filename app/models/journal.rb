class Journal < ApplicationRecord
  validates :rating, presence: true
  validates :body, presence: true

  belongs_to :park
  belongs_to :user
end
