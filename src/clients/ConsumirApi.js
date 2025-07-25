import axios from "axios";

const URL_API = 'http://localhost:8081/api/agendas/v1/doctores';

const guardar = async (body) => {
    const data =  axios.post(`${URL_API}`, body).then(r => r.data);
    console.log(data);
 
}

export const guardarFachada = async (body) => {
    await guardar(body);
}


