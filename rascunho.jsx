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


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#homeArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
.conteudo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.header{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.header img{
    height: 80px;
    width: 400px;
}
.listPosts{
    height: 80vh;
    overflow-y: scroll;
}

.post{
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 0.5px 1px rgba(196, 192, 192, 0.603);
}
.postImage{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.post img{
    height: 80px;
    width: 160px;
}

.postTexts{
    width: 600px;
    margin-top: 2px;
}
.post:hover{
    background: #ccc;
}
/* postTextsTitle */
.postTextsBody{
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cadCurriculo{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(173, 173, 226, 0.938);
    height: 40px;
    width: 200px;
    font-size: 20px;
    animation: pulse 5s infinite;
}

@keyframes pulse {
    0% {
        color: #000
    }

    50% {
        color: rgba(224, 223, 223, 0.877);
    }

    100% {
        color: #000
    }
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.App {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
}

.subHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(163, 172, 228);
    width: 100%;
    height: 40px;
}

.btnSave {
    width: 100%;
    min-width: 300px;
    height: 80px;
    border-radius: 5px;
}

.tableListItemArea {
    width: 100%;
}

.logoArea img {
    height: 500px;
}

.logoutArea {
    display: flex;
    align-items: center;
    justify-content: center;
}




.homeHeaderLogo {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 100%;
}


.homeHeaderLogo img {
    height: 50px;
}

.headerMenuArea {
    min-width: 50px;
}

.modalContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modalContainer span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 3em;
}

@media only screen and (min-width: 600px) {

    .btnSave {
        width: 200px;
        height: 40px;
    }

}