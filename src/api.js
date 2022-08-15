import axios from "axios";

export const login = (data) => axios.post("/login", data)
export const updateSettings = (data) => axios.post("/settings", data)

export default { login, updateSettings }