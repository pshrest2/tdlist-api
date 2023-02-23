class AddDueDateToTodoList < ActiveRecord::Migration[7.0]
  def change
    add_column :todo_lists, :due_date, :datetime
  end
end
