import React from 'react'
import '../styles/header.css'

class Header extends React.Component{
   
    render(){
        const mainPage = this.props.language === 'english'?'Home':'Inicio'
        const education =  this.props.language === 'english'?'Education':'Educacion'
        const projects =  this.props.language === 'english'?'Projects':'Projectos'
        const contacto =  this.props.language === 'english'?'Contact':'Contacto'
        const work =  this.props.language === 'english'?'Works':'Trabajos'
        const selectLang =  this.props.language === 'english'?'Select language':'Selecciona idioma'
       
        const menuMobile = !this.props.menuMobile
//this.upvote
        return(
            <div>
                <div className="desktopHeader navbar fixed-top navbar-light bg-light mb-0">
                <a  className="title navbar-brand pt-2 pl-2">MyResume</a>
                     <ul className="navbar-nav mr-auto d-flex flex-row ml-3">
                         <li className="nav-item ml-4">
                             <p  onClick={()=>{this.props.selectMenuBar('')}}  className="nav-link pt-2">{mainPage}</p>
                         </li>
                         <li className="nav-item ml-3">
                            <p  onClick={()=>this.props.selectMenuBar('Education')} className="nav-link pt-2">{education}</p>
                         </li>
                         <li className="nav-item ml-3">
                            <p  onClick={()=>this.props.selectMenuBar('Work')} className="nav-link pt-2">{work}</p>
                         </li>
                         <li className="nav-item ml-3">
                             <p  onClick={()=>this.props.selectMenuBar('Projects')} className="nav-link pt-2">{projects}</p>
                         </li>
                         <li className="nav-item ml-3">
                             <p  onClick={()=>this.props.selectMenuBar('Contact')} className="nav-link pt-2">{contacto}</p>
                         </li>
                         
                     </ul>
                     
                     <div className="mr-5 ml-2 mt-3" style={{display:'flex'}}>
                         {selectLang} 
                        <p  onClick={()=>this.props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></p> 
                        <p onClick={()=>this.props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></p>
                    </div>
                     
                </div>
                <div className="mobileHeader navbar fixed-top navbar-light bg-light justify-content-between">
                   <a  style={{fontSize:'20px',fontWeight:'bold'}} className="title navbar-brand pt-2 pl-2">
                       <Title language={this.props.language} menuBar={this.props.menuBar}/>
                   </a>
                  <div>
                   <a  onClick={()=>this.props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
                   <a  onClick={()=>this.props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
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
        const mainPage =  props.language === 'english'?'MyResume':'MyResume'
        const education=  props.language === 'english'?'Education':'Educacion'
        const work = props.language === 'english'?'Works':'Trabajos'
        const projects =  props.language === 'english'?'Projects':'Projectos'
        const contacto =  props.language === 'english'?'Contact':'Contacto'

    return(
        <div className="menuHeader">
             <p onClick={()=>props.selectMenuBar('')}>{mainPage}</p>
             <p onClick={()=>{props.selectMenuBar('Education')}}>{education}</p>
             <p onClick={()=>{props.selectMenuBar('Work')}}>{work}</p>
             <p onClick={()=>props.selectMenuBar('Projects')}>{projects}</p>
             <p onClick={()=>props.selectMenuBar('Contact')}>{contacto}</p>
        </div>
    )
}

const Title = props => { 
    switch(props.menuBar){
      case 'Education':
          return props.language === 'english'?'Education':'Educacion'
      case 'Work':
          return props.language === 'english'?'Works':'Trabajos'
      case 'Projects':
          return props.language === 'english'?'Projects':'Projectos'
      case 'Contact':
          return props.language === 'english'?'Contact':'Contacto'
      default:
          return props.language === 'english'?'MyResume':'MyResume'
    }
}


/*
const FlagLanguages = props => {
   // const selectLang =  props.language === 'english'?'Select language':'Selecciona idioma'  {selectLang} 
    return <div style={{marginTop:'1%',marginLeft:'2%'}}>
   
    <a onClick={()=>props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
    <a onClick={()=>props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
</div>
}

*/
/*
<a onClick={()=>this.props.changeLanguage('english')}><i className="gb flag ml-3"></i></a>
                        <a  onClick={()=>this.props.changeLanguage('espanol')}><i className="big flag es"></i></a>
<FlagLanguages changeLanguage={this.props.changeLanguage} language={this.props.language}/>
<a onClick={()=>props.changeLanguage('english')}><i className="flag gb ml-2 "></i></a>
    <a  onClick={()=>props.changeLanguage('espanol')}><i className="flag es"></i></a>
*/
