export interface LoginRequest {
    loginType: 'ROLE_USER' | 'ROLE_ADMIN';
    loginId: string;
    password: string;
}