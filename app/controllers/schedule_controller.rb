class ScheduleController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy]

	def index
		@users = User.all
	end

	def new
	end

	# GET user
	# GET user/:id
	def show
	@user = User.find(params[:id])

	end

	# GET user_working
	# GET user_working/:id
	def render_schedule
	@user = User.find(params[:id])
	@schedule = WorkingDay.by_user(@user.id)	
	#render json: @schedule, only: [:arrival, :departure]
	end

	def set_user
      @user = User.find(params[:id])
    end
end
