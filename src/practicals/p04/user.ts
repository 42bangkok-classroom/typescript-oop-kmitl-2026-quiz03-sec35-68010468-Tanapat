export class User {
  username: string
  private password: string
  
  // 1. เอาคำว่า static ออก
  private LOGIN_ATTEMPTS: number = 0

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  login(password: string): boolean {
    // 2. เปลี่ยนจาก User. เป็น this.
    this.LOGIN_ATTEMPTS += 1
    return this.validatePassword(password)
  }

  private validatePassword(password: string): boolean {
    return this.password === password
  }

  getLoginAttempts(): number {
    // 3. เปลี่ยนจาก User. เป็น this.
    return this.LOGIN_ATTEMPTS
  }
}