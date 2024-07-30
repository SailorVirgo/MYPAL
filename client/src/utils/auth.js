<<<<<<< HEAD
import { jwtDecode } from 'jwt-decode';

// Your code using jwtDecode

=======
import decode from "jwt-decode";
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
<<<<<<< HEAD
=======
    // If there is a token and it's not expired, return `true`
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
<<<<<<< HEAD
    const decoded = decode(token);
    if (decoded.exp < Date.now()) {
      localStorage.removeItem('id_token');
      return true;
    }
=======
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
    return false;
  }

  getToken() {
<<<<<<< HEAD
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
=======
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
    window.location.reload();
  }
}

export default new AuthService();