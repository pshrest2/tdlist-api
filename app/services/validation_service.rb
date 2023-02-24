class ValidationService
    def validate_phone(phone)
        raise StandardError.new "Don't add country code. Only US phone number is accepted" if phone.include? "+"
        raise StandardError.new "Phone number should only have digits" unless phone.scan(/\D/).empty?
        raise StandardError.new "Phone number should be of length 10" unless trimmed.length == 10
    end

    def validate_username(username)
        raise StandardError.new "Username length should be less than 10" if username.length > 10

        user = User.find_by(username: username)
        raise StandardError.new "Username already exists" unless user.nil?
    end
end