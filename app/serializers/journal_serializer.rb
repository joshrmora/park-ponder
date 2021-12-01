class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user, :body, :rating

  belongs_to :user
  belongs_to :park
end
