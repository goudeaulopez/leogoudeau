import React from 'react'
import '../styles/header.css'

class Header extends React.Component{
    render(){
        const mainPage = this.props.language === 'english'?'Home':'Inicio'
        const about =  this.props.language === 'english'?'About':'Acerca'
        const projects =  this.props.language === 'english'?'Projects':'Projectos'
        const contacto =  this.props.language === 'english'?'Contact':'Contacto'
        const selectLang =  this.props.language === 'english'?'Select language':'Selecciona idioma'
        const menuMobile = !this.props.menuMobile
        return(
            <div>
                <div className="desktopHeader navbar fixed-top navbar-light bg-light">
                <h2 className="pl-2 pt-1">Leo Goudeau</h2>
                     
                     <ul className="navbar-nav mr-auto d-flex flex-row ml-3">
                         <li className="nav-item ml-4">
                             <a onClick={()=>this.props.selectMenuBar('')} className="nav-link pt-2">{mainPage}</a>
                         </li>
                         <li className="nav-item ml-3">
                            <a onClick={()=>this.props.selectMenuBar('about')} className="nav-link pt-2">{about}</a>
                         </li>
                         <li className="nav-item ml-3">
                             <a onClick={()=>this.props.selectMenuBar('projects')} className="nav-link pt-2">{projects}</a>
                         </li>
                         <li className="nav-item ml-3">
                             <a onClick={()=>this.props.selectMenuBar('contact')} className="nav-link pt-2">{contacto}</a>
                         </li>
                         
                     </ul>
                     
                     <div className="mr-5 ml-2">
                        {selectLang} 
                        <img alt="uk" src="/18166.jpg" />
                        <img alt="es" src="/18168.jpg" />
                    </div>
                     
                </div>
                <div className="mobileHeader navbar fixed-top navbar-light bg-light justify-content-between">
                    <h3 style={{paddingLeft:'3px',paddingTop:'4px'}}>Leo Goudeau</h3>
                    <i onClick={()=>this.props.selectMenuMobile(menuMobile)} className="bars icon mb-0 large"></i>
                </div>
                <div id="languageHeaderMobile">
                   {
                       this.props.menuMobile === false ? 
                       <FlagLanguages changeLanguage={this.props.changeLanguage} language={this.props.language}/> :
                       <Menu language={this.props.language} selectMenuBar={this.props.selectMenuBar}/>
                   }
                </div>
                 
            </div>
        )
    }
}
export default Header

const Menu = props => {
        const mainPage =  props.language === 'english'?'Home':'Inicio'
        const about    =  props.language === 'english'?'About':'Acerca'
        const projects =  props.language === 'english'?'Projects':'Projectos'
        const contacto =  props.language === 'english'?'Contact':'Contacto'

    return(
        <div className="menuHeader">
             <p onClick={()=>props.selectMenuBar('')}>{mainPage}</p>
             <p onClick={()=>{props.selectMenuBar('about')}}>{about}</p>
             <p onClick={()=>props.selectMenuBar('projects')}>{projects}</p>
             <p onClick={()=>props.selectMenuBar('contact')}>{contacto}</p>
        </div>
    )
}

const FlagLanguages = props => {
    const selectLang =  props.language === 'english'?'Select language':'Selecciona idioma'
    return <div style={{marginTop:'3%',textAlign:'right'}}>
    {selectLang} 
    <img alt="uk" src="/18166.jpg" />
    <img alt="uk" src="/18168.jpg" />
</div>
}


/*
<a onClick={()=>this.props.changeLanguage('english')}><i className="gb flag ml-3"></i></a>
                        <a  onClick={()=>this.props.changeLanguage('espanol')}><i className="big flag es"></i></a>

<a onClick={()=>props.changeLanguage('english')}><i className="flag gb ml-2 "></i></a>
    <a  onClick={()=>props.changeLanguage('espanol')}><i className="flag es"></i></a>
*/
