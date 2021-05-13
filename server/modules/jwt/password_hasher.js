import bcryptjs from 'bcryptjs';
export default class BcryptHasher {
  constructor(rounds) {
    this.rounds = rounds
  }

  async hashPassword(password) {
    const salt = await bcryptjs.genSalt(this.rounds);
    return bcryptjs.hash(password, salt);
  }

  async comparePassword(providedPass, storedPass) {
    const passwordIsMatched = await bcryptjs.compare(providedPass, storedPass);
    return passwordIsMatched;
  }
}