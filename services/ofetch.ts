import { ofetch } from "ofetch";
import { useAuthStore } from "../store/auth";


const options = {
  
  baseURL: "https://prod.theingeniumapp.com/api/v1/",
  onRequest: ( {request, response, options, error}:any ) => {
    console.log(request, response, options, error);
    if (window.Cookies.useAuthStore) {
      const authStore = JSON.parse(window.Cookies.useAuthStore); // global method
      if (authStore.isLoggedIn && authStore.bearerToken) {
        console.log(authStore.bearerToken)
        options.headers.Authorization = "Bearer " + authStore.bearerToken;
      }
    }
  },

  onRequestError: (err) => {
    console.error(err);
  },

  onResponse: ( {request, options, response }:any) => {
    // console.log(request, options, response);
  },

  onResponseError: ( {request, options, response}:any ) => {
    //if error is 401 - clear local storage and redirect back to the login page
    console.log(request, options, response);
  },
};

/**
 if (process.client) {
  const config = useRuntimeConfig();
  options.baseURL = config.NUXT_API_BASE_URL;
}
 */

console.log(options);

const apiRequest = ofetch.create(options);

export { apiRequest };
// apiRequest('/test') // Same as ofetch('/test', { baseURL: '/api' })
