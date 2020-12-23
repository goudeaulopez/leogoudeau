import React from 'react'
import '../styles/mainPage.css'

const MainPage = props => {

    const mainPage = props.language === 'english' ? <Main/> : <Inicio/>

    return(
       <div>
            <div className="mainDesktop">
              {mainPage}
            </div>
            <div className="mainMobile">
              {mainPage}
            </div>
       </div>
    )
}
export default MainPage

const Inicio = () => {
    return(
        <div className="ui segment" >
        <img id="mobileImage" alt="mypicture" className="ui tiny left rounded floated image m-3" src="/IMG20201223172446.jpg"/>
        <img id="desktopImage" alt="mypicture" className="ui small left rounded floated image m-3" src="/IMG20201223172446.jpg"/>
        <h4 className="pt-3">Leonardo Goudeau</h4>
        <h6 >Front-End Developer</h6>
        <p>
            Desde el inicio de mi capacitacion en el TAFE en 2017, yo estuve trabajando en algunos de mis
            propios projectos. 
            React fue unas de las asignaturas que yo estudie y me siento bien preparado escribiendo codigo
            con este formato
        </p>
         <p>
           Los conocimientos que yo he adquirido son tales como el component state, redux, usando
           API externos, aplicando estilo con librerias de javascript, operaciones CRUD usando ASP.net y
           Express, graficos con d3, integrando AWS para hosting y usando base de datos tales como 
           mongoDB y mySQL. Yo tambien puedo implementar estos conocimientos con react native
        </p>
        <p>
          A pesar que no tengo mucha experiencia, yo tengo un entendimiento solido de las reglas
          de programacion con los componentes State y Props
        </p>
        <p>
        Apreciariria tener la oportunidad para hablar contigo mas sobre lo que estoy haciendo y como yo 
        podria usar mis conocimientos para beneficiar tu organizacion
        </p>
        <p>Saluda atentamente <br/> Leonardo Goudeau</p>
       
       
    </div>
    )
}
const Main = () => {
    return(
        <div className="ui segment" >
            <img id="mobileImage" alt="mypicture" className="ui tiny left rounded floated image m-3" src="/IMG20201223172446.jpg"/>
            <img id="desktopImage" alt="mypicture" className="ui small left rounded floated image m-3" src="/IMG20201223172446.jpg"/>
        <h4 className="pt-3">Leonardo Goudeau</h4>
            <h6 >Front-End Developer</h6>
            <p>
            Since I began my training at TAFE in 2017, I have worked on some  of 
             my own projects.<br/>
             React was one of the subjects I studied and
             I feel very confident writing code with this framework </p>
             <p>
             I have acquired skills such as working with the component state,
              redux, playing with external Apis, applying good styling with 
              some JavaScript libraries, crud operations with Asp.net and Express, 
              charts with D3, integrating with Aws for deploying and using some 
              databases such as mongo dB and MySQL.I can also implement these skills with React native.
            </p>
            <p>
            Although I don’t have a lot of experience, 
            I do have a good, solid understanding of programming 
            rules most with the component state and props.
            </p>
            <p>
            I would appreciate the opportunity to talk with you more about what I am doing
             and how I could use my skills to benefit your organisation. 
            </p>
            <p>Best regards <br/> Leonardo Goudeau</p>
           
           
        </div>
    ) 
}


/*

<p className="pt-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. </p>


*/