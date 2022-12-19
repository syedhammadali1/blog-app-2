import {
    create
} from "apisauce";
import AuthService from "../services/auth.service";



// console.log();
// define the api
const apiInstance = create({
    baseURL: process.env.REACT_APP_API_URL,
});


const post = (url, data, config) => {
    const response = apiInstance.post(url, data, config);
    // return handleReponse(response);
    return response;
};

const get = (url, queryParams, config) => {
    const response = apiInstance.get(url, queryParams, config);
    // return handleReponse(response);
    return response;

  };


apiInstance.addRequestTransform((request) => {
    if(AuthService.isTokenExist()){
        request.headers["Authorization"] = `Bearer ${AuthService.getToken()}`
    }
})

export const ApiService = {
    get,
    post,
    // put,
    // patch,
    // deleteRequest,
  };