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
        <img  alt="mypicture" className="ui small left rounded floated image m-3" src="/1265060_673310719365614_1302370417_o.jpg"/>
       <p className="pt-2">
       Solamente en espanol sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
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
    </div>
    )
}
const Main = () => {
    return(
        <div className="ui segment" >
            <img alt="mypicture" className="ui small left rounded floated image m-3" src="/1265060_673310719365614_1302370417_o.jpg"/>
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
        </div>
    )
}