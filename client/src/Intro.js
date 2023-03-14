import React from 'react';
import './Intro.css'
import {Link} from 'react-router-dom' 

function Intro() {


  return (
    <>
        <div className='container-fluid'>
            <div class="row align-items-center">
                <div className='col-lg-5 esquerda'>
                    <p className='title'>Dados Abertos</p>
                    <p className='parag'>Uma aplicação web que permite a pesquisa de informações sobre deputados federais da 56ª legislatura, a partir de um serviço de Dados Abertos da Câmara dos Deputados</p>
                    <p className='linkAPI'><a href='https://dadosabertos.camara.leg.br/swagger/api.html' target="_blank"><span class="material-symbols-outlined">open_in_new</span><span className='linkText'>Saiba mais sobre a API</span></a></p>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6 text-center'>
                    <img className="introImg"  src='./assetIntro.png'/>
                </div>
            </div>
        </div>
    </>
  )
}
export default Intro;
