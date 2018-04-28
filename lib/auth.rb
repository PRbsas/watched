require 'jwt'

class Auth
  ALGORITHM = 'HS256'

  def self.issue(payload)
    JWT.encode(payload, hmac_secret, ALGORITHM)
  end

  def self.decode(token)
  end

  def self.hmac_secret
    ENV['HMAC_SECRET']
  end
end