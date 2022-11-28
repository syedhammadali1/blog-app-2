import { ApiService } from "../util/api.service";

const userServiceUrl = {
    Login : '/login',
    Register : '/register',
}


const Login = (data) => {
    const response = ApiService.post(userServiceUrl.Login,data);
    // console.log(response);
    return response;
}
const Register = (data) => {
    const response = ApiService.post(userServiceUrl.Register,data);
    return response;
}


export const userServices = {
    Login,
    Register
}