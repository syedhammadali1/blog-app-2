import { ApiService } from "../util/api.service";

const userServiceUrl = {
    Login : '/login',
    Register : '/register',
    FetchUsers: '/users',
    getUsers: "/users",
}


const Login = (data) => {
    const response = ApiService.post(userServiceUrl.Login,data);
    return response;
}
const Register = (data) => {
    const response = ApiService.post(userServiceUrl.Register,data);
    return response;
}

const GetAllUsers = () => {
    const response = ApiService.get(userServiceUrl.FetchUsers);
    return response;
}

const getUsers = async () => {
    const response = await ApiService.get(userServiceUrl.getUsers);
    return response;
  };

export const userServices = {
    Login,
    Register,
    GetAllUsers,
    getUsers
}