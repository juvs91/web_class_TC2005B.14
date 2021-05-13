import createError from "http-errors"
import jwt from 'jsonwebtoken'
import util from "util"
const signAsync = util.promisify(jwt.sign)
const verifyAsync = util.promisify(jwt.verify)
export default class JWTService {
  constructor(jwtSecret, jwtAuthMetadata) {
    this.jwtSecret = jwtSecret
    this.jwtAuthMetadata = jwtAuthMetadata
  }
  async verifyToken(token) {
    if (!token) {
      throw createError(401, `Error verifying token : 'token' is null`)
    }

    let userProfile;

    try {
      // decode user profile from token
      const decodedToken = await verifyAsync(token, this.jwtSecret);
      userProfile = {
        name: decodedToken.name,
        id: decodedToken.id
      }
    } catch (error) {
      throw createError(401, `Error verifying token : ${error.message}`)
    }
    // TODO check expirationTime or ttl that it's still a valid token that can be find in the decodedToken
    return userProfile;
  }
  async generateToken(userProfile) {
    if (!userProfile) {
      throw createError(401, 'Error generating token : userProfile is null')
    }

    // Generate a JSON Web Token
    let token;
    let payload = await this.jwtAuthMetadata.getPayload(userProfile);
    let headers = await this.jwtAuthMetadata.getHeaders(userProfile);
    console.log("payload", payload)
    console.log("header", headers)
    try {
      token = await signAsync(payload, this.jwtSecret, {
        header: headers
      });
    } catch (error) {
      throw createError(401, `Error encoding token : ${error}`)
    }
    console.log("the token", token)
    return token;
  }
}