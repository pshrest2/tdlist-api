class User < ApplicationRecord
    has_many :todo_lists
end
