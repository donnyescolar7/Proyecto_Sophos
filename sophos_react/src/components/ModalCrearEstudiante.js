import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablaEstudiantesModal from './TablaEstudiantesModal';
import axios from 'axios'
import constants from '../Constants'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalCrearEstudiante({ open, setOpenModalCrear }) {

  /*const [estudiantes_lista, setLista] = useState([])

  useEffect(()=>{
    loadData()
  },[])

  const loadData = async () => {
    console.log(curso)
    try {
      const res = await axios.get(constants.api_estudiantes_por_curso + curso.idcurso)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const actualizarLista = async (idesudiante, inscritoValue) => {
    console.log(curso)
    console.log("Idestudi"+idesudiante);
    try {
      const req = inscritoValue ? 
      constants.api_Agregar_RCursoEstudiante + curso.idcurso+"/"+idesudiante 
      :
      constants.api_Eliminar_RCursoEstudiante + curso.idcurso+"/"+idesudiante

      const res = await axios.post(req)
      console.log(res.data);
      if(res.data){
        estudiantes_lista[estudiantes_lista.findIndex((e) => e.idestudiante === idesudiante)].esta_en_curso = inscritoValue
        setLista([...estudiantes_lista])
      }

    } catch (error) {
      console.log(error)
    }
    
  }*/

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenModalCrear(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
          <Typography variant="h6" component="h2">
            Crear Estudiante
          </Typography>
          <TextField fullWidth label="Nombre" id="nombre" />
          <TextField fullWidth label="Facultad" id="facultad" />
          <TextField fullWidth label="Semestre" id="semestre" />
          <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={()=>setOpenModalCrear(true)}>Agregar Estudiante</Button>
          <Button color="error" variant="contained" onClick={()=>setOpenModalCrear(true)}>Cancelar</Button>
          </Stack>
          </Stack>
          
        </Box>
      </Modal>
    </div>
  );
}