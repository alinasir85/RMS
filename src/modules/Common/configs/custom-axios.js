import axios from "axios";

const instance = axios.create({
   baseURL: 'http://localhost:8080'
});

instance.interceptors.request.use(
    config => {
       if(config && config.headers) {
          config.headers['Content-Type'] = 'application/json';
          config.withCredentials=true;
       }
       return config;
    },
    error => {
       Promise.reject(error);
    }
);

export default instance;
