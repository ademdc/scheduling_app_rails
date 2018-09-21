class SchedulesController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy, :create]

	def index
		@users = User.all
	end

	def new
	end

	# GET user
	# GET user/:id
	def show
		@user = User.find(params[:user_id])
	end


	# POST /users/:id/schedules
  	# POST /users/:id/schedules

  	def create
  		# @schedule = WorkingDay.new(user_working_params)
  		# respond_to do |format|
  		# 	if @schedule.save
  		# 		format.html { redirect_to dashboard_path, notice: 'Working day was successfully created.' }
  		# 		format.json { render :show, status: :created, location: @schedule }
  		# 	else
  		# 		format.html { render :new }
  		# 		format.json { render json: @schedule.errors, status: :unprocessable_entity }
  		# 	end
  		# end

  		generator = Events::Generator.new(@user, params[:start_date], params[:end_date])
  		generator.generate
  		render json: generator.events
  	end


	# GET /users/:id/schedules
	# GET /users/:id/schedules
	def render_schedule
		@user = User.find(params[:id])
		@schedule = WorkingDay.by_user(@user.id)	
	#render json: @schedule, only: [:arrival, :departure]
	end

	def set_user
		@user = User.find(params[:user_id])
	end

	def user_working_params
      params.require(:working_day).permit(:user_id, :arrival, :break_start, :break_end, :departure)
    end

end
