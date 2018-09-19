class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:

    user ||= User.new       # guest user (not logged in)

    working_day ||= WorkingDay.new

    if user.type == 'Admin'
      can :manage, :all
    end

    if user.type == 'Employee'
      can :manage, User, id: user.id
      can :manage, WorkingDay, user_id: user.id

    end

    if user.type == 'Admin'
      can :manage, :all
      can :dashboard                  # allow access to dashboard
    end

    if user.type=="Admin"
          can :manage, User
    end
    
  end
end
