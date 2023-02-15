class TodoListsController < ApplicationController
  def index
    lists = TodoList.order(created_at: :desc)
    render json: lists
  end

  def create
    list = TodoList.create(todo_list_params)
    render json: list
  end

  def update
    list = TodoList.find(params[:id])
    list.update(todo_list_params)
    render json: list
  end

  def destroy
    list = TodoList.find(params[:id])
    list.destroy
    head :no_content, status: :ok
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:title, :done)
  end
end
