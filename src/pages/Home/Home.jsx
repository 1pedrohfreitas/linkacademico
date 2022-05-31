import './style.css'

import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.jpeg'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import CardPost from '../../components/CardPost';
import posts from '../../Data/post.json'
import ModalSendCurriculo from '../../components/ModalSendCurriculo';
export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const cursos = [
        { id: 1, name: "Direito" },
        { id: 2, name: "Engenharia Civil" },
        { id: 3, name: "Engenharia Eletrica" },
        { id: 4, name: "Engenharia Mecanica" }
    ]
    const defaultCursos = {
        options: cursos.sort((a, b) => -b.name.substring(0, 1).localeCompare(a.name.substring(0, 1))),
        getOptionLabel: (option) => option.name,
    };
    const handleCloseModal = () => {
        setOpenModal(false)
    }


    return (
        <div id='homeArea'>
            <header>
                <section className="logoArea">
                    <div className="logoAreaImg">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="logoAreaSearch">
                        <Autocomplete
                            {...defaultCursos}
                            id="searchAutoComplete"
                            groupBy={(option) => option.name.substring(0, 1)}
                            disableCloseOnSelect
                            style={{ width: 300, background: "#e8f3ff", borderRadius: 5, height: "80%" }}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            renderInput={(params) => (
                                <TextField {...params}
                                    placeholder="Pesquise por curso"
                                    variant="standard"

                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            )}
                        />
                    </div>
                </section>
                <nav className="menuHeaderArea">
                    <ul>
                        <li className='menuHeaderHome'>
                            <a href="">
                                <div>
                                    <HomeIcon />
                                </div>
                                <span>
                                    Inicio
                                </span>
                            </a>
                        </li>
                        <li className='menuHeaderVaga'>
                            <a href="">
                                <div>
                                    <BusinessCenterIcon />
                                </div>
                                <span>
                                    Vagas
                                </span>
                            </a>
                        </li>
                        <li className='menuHeaderEmail'>
                            <a href="">
                                <div>
                                    <EmailIcon />
                                </div>
                                <span>
                                    Contato
                                </span>
                            </a>
                        </li>
                    </ul>
                    <a href="">
                        <div>
                            <AppsIcon />
                        </div>
                        <span>
                            Funções
                        </span>
                    </a>
                </nav>

            </header>
            <section className="body">
                <section className="leftArea">
                    <section className="profileArea">
                        <div className="profileAreaImgArea">
                            <div className="profileAreaImgBackgroundTop"></div>

                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        </div>
                        <div className="profileAreaInfo">
                            <div className="profileAreaNameArea">
                                <h2>Fulano</h2>
                            </div>
                            <div className="profileAreaCursoArea">
                                <h1>Analise e Denvolvimento de Sistemas</h1>
                                <h1>UFMG</h1>
                            </div>
                            <div className="profileAreaStatusArea">
                                <span>Curriculos enviados: 10/10</span>
                            </div>
                            <div className="profileAreaSendCurriculo">
                                <button onClick={()=>setOpenModal(true)}>
                                    Envie seu curriculo
                                </button>
                            </div>
                        </div>

                    </section>

                </section>
                <section className="midArea">
                    {posts.posts.map(post => (
                        <CardPost
                            key={post.id}
                            title={post.title}
                            img={post.imgsource}
                            text={post.text}
                        />
                    ))}

                </section>
                <section className="rightArea">

                </section>
            </section>
            <ModalSendCurriculo
            open={openModal}
            handleCloseModal={handleCloseModal}
             />

        </div >
    )
}
