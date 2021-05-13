import createError from "http-errors"
export default class UserService {
  constructor(userModel, passwordHasher){
    this.userModel = userModel
    this.passwordHasher = passwordHasher
  }
  async verifyCredentials(credentials) {
    const invalidCredentialsError = 'Invalid email or password.';
    const foundUser = await this.userModel.get({
      email: credentials.email
    });
    if (!foundUser) {
      throw createError(401, invalidCredentialsError)
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser[0].password,
    );

    if (!passwordMatched) {
      throw createError(401, invalidCredentialsError)
    }
    return foundUser;
  }
}