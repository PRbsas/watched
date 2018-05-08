class Show < ApplicationRecord
  validates :title, presence: true
  # validates :title, uniqueness: true

  has_many :collections
  has_many :users, through: :collections
end
