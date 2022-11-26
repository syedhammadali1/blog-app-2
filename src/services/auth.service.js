import { userInfo } from "../util/constant"

const isTokenExist = () => {
    const token = localStorage.getItem(userInfo.TOKEN);
    if (token) {
        return true;
    }
    return false;
}

function getToken() {
    const token = localStorage.getItem(userInfo.TOKEN);
    if (token) {
      return token;
    }
    return null;
  }
  
  function getUserName() {
    const username = localStorage.getItem(userInfo.USERNAME);
    if (username) {
      return username;
    }
    return null;
  }

const AuthService = {
    isTokenExist,
    getToken,
    getUserName
}

export default AuthService;