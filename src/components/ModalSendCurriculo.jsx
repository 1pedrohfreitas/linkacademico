import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Autocomplete, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalSendCurriculo(props) {

    const [cursoSelecionado, setCursoSelecionado] = useState([]);
    const [cursosAtuacaoSelecionados, setCursosAtuacaoSelecionados] = useState([]);
    const [cursoAtuacao, setCursoAtuacao] = useState([]);

    const cursos = [
        { id: 1, name: "Direito" },
        { id: 2, name: "Engenharia Civil" },
        { id: 3, name: "Engenharia Eletrica" },
        { id: 4, name: "Engenharia Mecanica" }
    ]

    const defaultCursos = {
        options: cursos,
        getOptionLabel: (option) => option.name,
    };

    const cursosatuacao = [
        { id: 1, name: "Penal", cursoid: 1 },
        { id: 2, name: "Civil", cursoid: 1 },
        { id: 3, name: "Trabalhista", cursoid: 1 },

        { id: 4, name: "Grande Construções", cursoid: 2 },
        { id: 5, name: "Edificações", cursoid: 2 },

        { id: 6, name: "Eletrica Industrial", cursoid: 3 },
        { id: 7, name: "Eletrônica", cursoid: 3 },

        { id: 8, name: "Automobilistica", cursoid: 4 },
        { id: 9, name: "Mecanica Industrial", cursoid: 4 },
    ]

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const closeModal = () => {
        props.handleCloseModal()
    }

    const handleChangeArea = (event) => {
        const {
            target: { value },
        } = event;
        setCursoAtuacao(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleInputFile = () => {
        document.getElementById("file").click()
    }
    const handleChanceCurso = (value) => {
        if (value != null) {
            setCursoSelecionado(value.id)
            setCursosAtuacaoSelecionados(cursosatuacao.filter(atuacao => atuacao.cursoid == value.id))
        } else {
            setCursoSelecionado(null)
            setCursosAtuacaoSelecionados([])
            setCursoAtuacao([])
        }
    }

    return (
        <div>
            <Modal
                open={props.open}
            >
                <Box sx={style}>
                    <div className="modalContainer">
                        <span onClick={closeModal}>
                        <ExitToAppSharpIcon />
                        </span>
                        <div className="formCad">
                            <TextField id="name" label="Nome Completo:" variant="outlined" />
                            <TextField id="email" label="E-mail:" variant="outlined" />
                        </div>
                        <div className="definecurso">
                            <div className="definircurso">
                                <Autocomplete
                                    {...defaultCursos}
                                    id="userIdPermission"
                                    disableCloseOnSelect
                                    style={{ width: 300 }}
                                    onChange={(e, value) => { handleChanceCurso(value) }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Curso" variant="outlined" />
                                    )}
                                />
                            </div>
                            <div className="definirareadeatuacao">
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="areaatuacao-label">Area de Atuação</InputLabel>
                                    <Select
                                        labelId="areaatuacao-label"
                                        id="areaatuacao"
                                        multiple
                                        value={cursoAtuacao}
                                        onChange={handleChangeArea}
                                        input={<OutlinedInput label="Cursos" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {cursosAtuacaoSelecionados.map((cursoAtuacaoItem) => (
                                            <MenuItem key={cursoAtuacaoItem.id} value={cursoAtuacaoItem.name}>
                                                <Checkbox checked={cursoAtuacao.indexOf(cursoAtuacaoItem.name) > -1} />
                                                <ListItemText primary={cursoAtuacaoItem.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="profileAreaSendCurriculo">
                        <input
                            id="file"
                            type="file"
                        />
                        <button onClick={handleInputFile}>
                            Envie seu curriculo
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
