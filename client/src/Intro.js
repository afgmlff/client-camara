import React from 'react';
import './Intro.css'
import {Link} from 'react-router-dom' 

function Intro() {


  return (
    <>
        <div className='container-fluid'>
            <div class="row">
                <div className='col-sm-6 esquerda'>
                    <p className='title'>Dados Abertos</p>
                    <p className='parag'>Uma aplicação web que permite a pesquisa de informações sobre deputados federais da 56ª legislatura, a partir de um serviço de Dados Abertos da Câmara dos Deputados</p>
                    <p className='linkAPI'><span class="material-symbols-outlined">open_in_new</span>Saiba mais sobre a API</p>
                </div>
                <div className='col-sm-6'>
                    <img className="introImg"  src='./assetIntro.png'/>
                </div>
            </div>
        </div>
    </>
  )
}
export default Intro;
