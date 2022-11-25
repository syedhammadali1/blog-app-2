import {
    create
} from "apisauce";



console.log(process.env.REACT_APP_API_URL);
// define the api
const apiInstance = create({
    baseURL: 'https://blog-api-testing.squadcodersdev.com/api',
});


const post = (url, data, config) => {
    const response = apiInstance.post(url, data, config);
    // return handleReponse(response);
    return response;
};

export const ApiService = {
    // get,
    post,
    // put,
    // patch,
    // deleteRequest,
  };