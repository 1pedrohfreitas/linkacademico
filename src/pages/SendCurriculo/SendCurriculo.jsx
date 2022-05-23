import './style.css'

import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.jpeg'
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { SnackBarCustom } from '../../components/SnackBarCustom';
export default function SendCurriculo() {

    const [snackBarType, setSnackBarType] = useState('');
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    function openSnackBar(sbType, sbMessage) {
        return new Promise((resolve, reject) => {
            setSnackBarType(sbType)
            setSnackBarMessage(sbMessage)
            setSnackBarOpen(true)
            resolve("Dados Atualizados")
        })
    }

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

    const [cursosSelecionados, setCursosSelecionados] = useState([]);
    const [cursoAtuacao, setCursoAtuacao] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(cursosSelecionados)
        setCursosSelecionados(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeArea = (event) => {
        const {
            target: { value },
        } = event;
        setCursoAtuacao(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const cursos = [
        { id: 1, name: "Direito" },
        { id: 2, name: "Engenharia Civil" },
        { id: 3, name: "Engenharia Eletrica" },
        { id: 4, name: "Engenharia Mecanica" }
    ]

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

    const handleChanceCurso = (value) => {
        if (value != null) {
            setCursoSelected(value.id)
        }

    }
    const handleClicarSalvar = () => {
        openSnackBar("success", "Usuario adicionado com sucesso").finally(() => {
            setTimeout(() => {
                setSnackBarOpen(false)
            }, 3000);
        })
    }
    // useEffect(() => {
    //     handleChanceListCursosAtuacao
    //     console.log(cursoSelected)
    //     console.log(cursosatuacao.filter(a => a.cursoid == cursoSelected))

    // }, [cursoSelected]);
    // const handleChanceListCursosAtuacao = () => {
    //     setCursoAtuacao(cursosatuacao.filter(a => a.cursoid == cursoSelected))
    // }
    const defaultCursos = {
        options: cursos,
        getOptionLabel: (option) => option.name,
    };
    let defaultAreadeatuacao = {
        options: cursosatuacao,
        getOptionLabel: (option) => option.name,
    };
    return (
        <div id='homeArea'>
            <div className="header">
                <img src={logo} alt="logo" />
            </div>

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
                            {cursosatuacao.map((curso) => (
                                <MenuItem key={curso.id} value={curso.name}>
                                    <Checkbox checked={cursoAtuacao.indexOf(curso.name) > -1} />
                                    <ListItemText primary={curso.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>


            <div className="location">
                <p>Selecione a localização da sua residencia</p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.0711465496584!2d-43.89437417310245!3d-19.624255862079952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa67c770aea8485%3A0x9934511089409b93!2sR.%20Tab.%20Jos%C3%A9%20Camilo%20-%20Vila%20Santa%20Cecilia%2C%20Lagoa%20Santa%20-%20MG%2C%2033400-000!5e0!3m2!1spt-BR!2sbr!4v1653133341022!5m2!1spt-BR!2sbr"

                    style={{
                        border: 0,
                        width: 300,
                        height: 250
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div className="enviacurriculo">
                <Button
                    variant="contained"
                    component="label"
                >
                    Envie seu curriculo
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </div>

            <div className="btnsalvar">
                <Button
                    onClick={handleClicarSalvar}
                    variant="contained"
                    component="label">
                    Salvar
                </Button>
            </div>

            <div className="footer"></div>
            <SnackBarCustom
                open={snackBarOpen}
                typeMessage={snackBarType}
                mensage={snackBarMessage}
            />
        </div>
    )
}
