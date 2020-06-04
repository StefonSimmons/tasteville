class AuthenticationController < ApplicationController
  
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(login_params[:username])
    #the 'authenticate' method provided by Bcrypt and 'has_secure_password'
    if @user.authenticate(login_params[:password]) 
      token = encode({user_id: @user.id})
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end

  private

  def login_params
    # :auth refers to the controller
    params.require(:auth).permit(:username, :password)
  end

end
