class Users::ListingController < Devise::ListingController

# GET /users
def index
	@users = User.all
end
end
