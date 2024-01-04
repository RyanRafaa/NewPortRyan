import axios from "axios";
import { variables } from "../utils/variables";
import { REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from "../constants/api.constant";

const { BASE_API } = variables;

export const apiService = axios.create({
  baseURL: BASE_API,
  headers: {
    common: {
      [REQUEST_HEADER_AUTH_KEY]: TOKEN_TYPE,
    },
  },
});
