require 'jwt'

class Auth
  ALGORITHM = 'HS256'

  def self.issue(payload)
    JWT.encode(payload, hmac_secret, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, hmac_secret, true, { algorithm: ALGORITHM }).first
  end

  def self.hmac_secret
    ENV['HMAC_SECRET']
  end
end