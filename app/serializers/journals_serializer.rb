class JournalsSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user, if: :current_user

end
