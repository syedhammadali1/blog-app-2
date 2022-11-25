import { ApiService } from "../util/api.service";

const userServiceUrl = {
    Login : '/login',
    Register : '/register',
}


const Login = (data) => {
    const response = ApiService.post(userServiceUrl.Login,data);
    console.log(response);
    // return response;
}


export const userServices = {
    Login,
}