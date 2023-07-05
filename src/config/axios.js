import axios from "axios";
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_APIURL
})

export { clienteAxios };
