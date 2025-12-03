import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api/AuthAPI';

const API_URL = 'https://us-visa-gcp-api-955545365113.us-central1.run.app';
const validUser = { Email: 'advokat.tiac@mailinator.com', Password: 'Password##99' };

test.describe('Auth API Tests', () => {

  test('Successful authentication returns token', async ({ request }) => {
    const api = new AuthAPI(API_URL);
    const token = await api.authenticate(request, validUser.Email, validUser.Password);
    expect(token).toBeTruthy();
  });

  test('Get users returns all required properties', async ({ request }) => {
    const api = new AuthAPI(API_URL);
    const token = await api.authenticate(request, validUser.Email, validUser.Password);
    const users = await api.getUsers(request, token);
    expect(users.length).toBeGreaterThan(0);
  });

});
