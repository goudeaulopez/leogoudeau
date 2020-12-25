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
       
        <p>Saluda atentamente <br/> Leonardo Goudeau</p>
       
       <br/><br/>
    </div>
    )
}
const Main = () => {
    return(
        <div className="ui segment" >
            <img id="mobileImage" alt="mypicture" className="ui tiny left rounded floated image m-3" src="/IMG20201223172446.jpg"/>
            <img id="desktopImage" alt="mypicture" className="ui small left rounded floated image m-4" src="/IMG20201223172446.jpg"/>
            <h3 className="pt-5 pl-3">Leonardo Goudeau</h3>
            <h5 className="pt-1 pl-3 pb-2" >Front-End Developer</h5>
            <p className="p-2" style={{fontSize:'14px'}}>
              I began my coding journey about 3 years ago after being in different industries 
              since I finished Univesity back in Chile.
           
           
            
              <br/>
              I love software development because it gives me the chance to create, develop and solve problems
              to help people with their ideas.
              <br/>
             Every new opportunity is a  welcome challenge. If you want this new opportunity
             to lead to success, you have to work hard, feel motivated and be open to learn from others
            </p>
           
            
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