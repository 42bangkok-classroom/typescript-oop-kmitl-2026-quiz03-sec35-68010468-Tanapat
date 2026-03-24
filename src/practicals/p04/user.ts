export class User {
  username: string
  private password: string
  private static LOGIN_ATTEMPTS: number = 0

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  login(password: string): boolean {
    User.LOGIN_ATTEMPTS += 1
    return this.validatePassword(password)
  }

  private validatePassword(password: string): boolean {
    return this.password === password
  }

  getLoginAttempts(): number {
    return User.LOGIN_ATTEMPTS
  }
}
