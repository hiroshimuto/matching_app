class UsersController < ApplicationController
  def index
    @users = User.where.not(id: current_user.id)
    gon.users = @users.length
  end

  def show
    @user = User.find(params[:id])
  end
end
