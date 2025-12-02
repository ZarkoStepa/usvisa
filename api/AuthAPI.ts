import { APIRequestContext, expect } from '@playwright/test';

export class AuthAPI {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async authenticate(request: APIRequestContext, email: string, password: string) {
    const response = await request.post(`${this.baseUrl}/api/authenticate`, {
      data: { Email: email, Password: password },
    });

    expect(response.status()).toBe(200);

    const accessToken = response.headers()['accesstoken'];
    if (!accessToken) throw new Error('Access token nije pronadjen u headerima!');

    return accessToken;
  }

  async getUsers(request: APIRequestContext, token: string) {
    const response = await request.get(`${this.baseUrl}/api/users/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    const requiredProps = [
      'Email','Id','FirstName','MiddleName','LastName','PhoneNumber',
      'RoleId','RoleName','OrganizationName','ProfilePicture',
      'Password','CreateDate','LastLoginDate','Active','PermissionIds'
    ];

    for (const prop of requiredProps) {
      expect(data[0]).toHaveProperty(prop);
    }

    return data;
  }
}
