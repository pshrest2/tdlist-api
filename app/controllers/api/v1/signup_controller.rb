class Api::V1::SignupController < Api::V1::ApiController
    def create
        validation = ValidationService.new
        validation.validate_username(signup_params[:username])
        validation.validate_phone(signup_params[:phone])

        User.create(signup_params)
        render status: 200
    rescue => e
        render json: {
            message: e.message
            status: 500
        }
    end

    private
    def signup_params
        params.require(:user_data).permit(:name, :email, :username, :phone)
    end
end