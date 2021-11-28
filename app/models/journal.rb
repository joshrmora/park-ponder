class Journal < ApplicationRecord
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }
  validates :body, presence: true

  belongs_to :park
  belongs_to :user
end
