import React from 'react'
import '../styles/mainPage.css'

const MainPage = props => {

    const mainPage = props.language === 'english' ? <Main/> : <Inicio/>

    return(
       <div>
            <div className="mainDesktop">
            <img id="desktopImage" alt="mypicture" className="ui small left rounded floated image ml-3 mr-5" src="/IMG20201223172446.jpg"/>
              {mainPage}
            </div>
            <div className="mainMobile">
            <img id="mobileImage" alt="mypicture" className="ui tiny left rounded floated image ml-3 " src="/IMG20201223172446.jpg"/>
              {mainPage}
            </div>
       </div>
    )
}
export default MainPage

const Inicio = () => {
    return(
        <div className="mainpage" >
        <h3>Leonardo Goudeau</h3>
        <h5>Front-End Developer</h5>
        <a href="https://github.com/goudeaulopez/leogoudeau" target="_blank" className="mini ui button ml-3">Codigo fuente<i className="github icon ml-2"></i></a>
        <br/><br/>
        <p>
         Yo comenze mi viaje en programacion hace 3 años, despues de haber estado en diferentes industrias desde
         que termine la universidad en Chile
        </p>
        <p>
         Me encanta el desarrollo de software porque me da la oportunidad de crear, desarrollar, resolver problemas
         y ayudar a la gente con sus ideas
        </p>
       
        <p>
            Me siento con mucha confianza escribiendo programas y todos mis projectos estan escrito en React.<br/>
            Espero que mires mis projectos y talvez podamos conversar!!
        </p>
        <p id="onlyDesktop" >
        Cada nueva oportunidad es un gran desafio. Si tu quieres que esta nueva oportunidad triunfe tu tienes 
        que trabajar duro, sentirte motivado y estar abierto para aprender de los otros
        </p>
        <h6>Mis Saludos</h6>
        <h6>Leonardo Goudeau</h6>
</div>
    )
}
const Main = () => {
    return(
          <div className="mainpage" >
                  <h3>Leonardo Goudeau</h3>
                  <h5>Front-End Developer</h5>
                  <a href="https://github.com/goudeaulopez/leogoudeau"  target="_blank" className="mini ui button ml-3">source code <i className="github icon ml-2"></i></a>
                  <br/><br/>
                  <p>
                  I began my coding journey about 3 years ago after being in different industries 
                  since I finished Univesity back in Chile.
                  </p>
                  <p>
                  I love software development because it gives me the chance to create, develop, solve problems and
                   to help people with their ideas.
                  </p>
                 
                  <p>
                      I feel very confident writting code with React and all my projects are written with this 
                      framework.<br/>
                      I hope you take a look in my projects and maybe we get in touch!!!</p>
                
                  <p id="onlyDesktop">
                  Every new opportunity is a  welcome challenge. If you want this new opportunity
                  to lead to success, you have to work hard, feel motivated and be open to learn from others 
                  </p>
                  <h6>Best Regards</h6>
                  <h6>Leonardo Goudeau</h6>
          </div>
    ) 
}

