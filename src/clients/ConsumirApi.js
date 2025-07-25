import axios from "axios";

const URL_DOCTOR = 'http://localhost:8081/api/agendas/v1/doctores';

const URL_PACIENTE = 'http://localhost:8081/api/agendas/v1/pacientes';

const guardar = async (body) => {
    const data =  axios.post(`${URL_DOCTOR}`, body).then(r => r.data);
    console.log(data);
 
}

export const guardarFachada = async (body) => {
    await guardar(body);
}

const guardarPaciente = async (body) => {
    const data =  axios.post(`${URL_PACIENTE}`, body).then(r => r.data);
    console.log(data);
 
}

export const guardarPacienteFachada = async (body) => {
    await guardarPaciente(body);
}


