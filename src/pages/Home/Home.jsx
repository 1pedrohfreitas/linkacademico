import './style.css'

import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.jpeg'
import { SnackBarCustom } from '../../components/SnackBarCustom';
import posts from '../../Data/post.json'
import { useNavigate } from 'react-router-dom';
export default function Home() {

    let navigate = useNavigate()

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

    const handleGoToCadCurriculo = () =>{
        navigate('/cadastro')
    }

    return (
        <div id='homeArea'>
            <div className="header">
                <img src={logo} alt="logo" />
            </div>
            <div className="conteudo">
                <div className="listPosts">
                    {posts.posts.map(post => (
                        <div key={post.id} className="post">
                            <div className="postImage">
                                <img src={post.imgsource} alt="" />
                            </div>
                            <div className="postTexts">
                                <div className="postTextsTitle">
                                    <h3>{post.title}</h3>
                                </div>
                                <div className="postTextsBody">
                                    {post.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="cadCurriculo"
                    onClick={handleGoToCadCurriculo}
                    >
                    Envie seu curriculo!
                </div>
            </div>
            <SnackBarCustom
                open={snackBarOpen}
                typeMessage={snackBarType}
                mensage={snackBarMessage}
            />
        </div >
    )
}
