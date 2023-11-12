import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-9s09.onrender.com/swagger-ui/index.html'
})

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}