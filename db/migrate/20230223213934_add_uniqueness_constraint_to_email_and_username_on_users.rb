class AddUniquenessConstraintToEmailAndUsernameOnUsers < ActiveRecord::Migration[7.0]
  def change
    add_index :users, [:email, :username], unique: true
  end
end
