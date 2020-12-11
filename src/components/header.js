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
                <div className="desktopHeader navbar fixed-top navbar-light bg-light mb-0">
                <a className="title navbar-brand pt-2 pl-2">MyResume</a>
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
                        <a onClick={()=>this.props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
                        <a onClick={()=>this.props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
                    </div>
                     
                </div>
                <div className="mobileHeader navbar fixed-top navbar-light bg-light justify-content-between">
                   <a className="title navbar-brand pt-2 pl-2">Leo Goudeau</a>
                  <div>
                   <a onClick={()=>this.props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
                   <a onClick={()=>this.props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
                   <i onClick={()=>this.props.selectMenuMobile(menuMobile)} className="bars icon mt-1 ml-2 large"></i>
                  </div>
                </div>
                <div id="languageHeaderMobile">
                   {
                       this.props.menuMobile === false ? 
                       null :
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
   // const selectLang =  props.language === 'english'?'Select language':'Selecciona idioma'  {selectLang} 
    return <div style={{marginTop:'1%',marginLeft:'2%'}}>
   
    <a onClick={()=>props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
    <a onClick={()=>props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
</div>
}


/*
<a onClick={()=>this.props.changeLanguage('english')}><i className="gb flag ml-3"></i></a>
                        <a  onClick={()=>this.props.changeLanguage('espanol')}><i className="big flag es"></i></a>
<FlagLanguages changeLanguage={this.props.changeLanguage} language={this.props.language}/>
<a onClick={()=>props.changeLanguage('english')}><i className="flag gb ml-2 "></i></a>
    <a  onClick={()=>props.changeLanguage('espanol')}><i className="flag es"></i></a>
*/
