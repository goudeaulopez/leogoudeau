import React from 'react'
import SearchBar from './searchBar'
import '../styles/header.css'

class Header extends React.Component{
   state={searchSomething:false}
   searchicon = searchSomething => {
       this.setState({searchSomething})
   }
   render(){
        

        const mainPage = this.props.language === 'english'?'Home':'Inicio'
        const education =  this.props.language === 'english'?'Education':'Educacion'
        const projects =  this.props.language === 'english'?'Projects':'Projectos'
        const contacto =  this.props.language === 'english'?'Contact':'Contacto'

       const searchbar = this.props.menuBar === 'Images'  || this.props.menuBar === 'Videos' || this.props.menuBar === 'Weather' ? 
       <SearchBar searchIng={this.props.searchIng} language={this.props.language} menuBar={this.props.menuBar} searchicon ={this.searchicon}
       searchVideo = {this.props.searchVideo} searchCity ={this.props.searchCity}/>:null
        
       
       
       const searchSomething = this.state.searchSomething=== false
       ?
        <SearchIcon 
            menuMobile={this.props.menuMobile} 
            menuBar={this.props.menuBar} 
            language={this.props.language}
            changeLanguage={this.props.changeLanguage}
            selectMenuMobile={this.props.selectMenuMobile}
            searchicon ={this.searchicon}
            searchSomething = {this.state.searchSomething}
       />
       :
       <div className="mobileHeader navbar fixed-top navbar-light bg-light justify-content-between">
       <SearchBar 
             searchIng ={this.props.searchIng} 
             searchVideo = {this.props.searchVideo}
             searchCity ={this.props.searchCity}
            language={this.props.language}
            menuBar={this.props.menuBar}
            searchicon ={this.searchicon}
            

        />
   </div>

       return(
            <div>
                <div className="desktopHeader navbar fixed-top navbar-light bg-light mb-0">
                     <a style={{color:'#263029'}}  className="title navbar-brand pt-2 pl-2">MyResume</a>
                     <ul className="navbar-nav mr-auto d-flex flex-row ml-3">
                          <li className="nav-item ml-2">
                             <p onClick={()=>{this.props.selectMenuBar('')}}  
                                className="nav-link pt-2" style={{color:'#263029'}} >
                                 {mainPage}
                            </p>
                          </li>
                          <li className="nav-item ml-2">
                            <p onClick={()=>this.props.selectMenuBar('Education')}
                               className="nav-link pt-2" style={{color:'#263029'}}>
                            {education}
                            </p>
                         </li>
                         
                        <li className="nav-item ml-2">
                          <p  onClick={()=>this.props.selectMenuBar('Projects')} 
                             className="nav-link pt-2" style={{color:'#263029'}}>{projects}</p>
                        </li>
                        <li className="nav-item ml-2">
                           <p onClick={()=>this.props.selectMenuBar('Contact')} 
                           className="nav-link pt-2" style={{color:'#263029'}}>{contacto}</p>
                       </li>
                        <li className="nav-item ml-3" >
                           {searchbar}
                       </li>
                   </ul>
                    <div className="mr-5 ml-2 mt-3" style={{display:'flex'}}>
                         
                         <p  onClick={()=>this.props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></p> 
                         <p  onClick={()=>this.props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></p>
                </div>
                </div>
                  {searchSomething}
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
        const projects =  props.language === 'english'?'Projects':'Projectos'
        const contacto =  props.language === 'english'?'Contact':'Contacto'

    return(
        <div className="menuHeader">
             <p onClick={()=>props.selectMenuBar('')}>{mainPage}</p>
             <p onClick={()=>{props.selectMenuBar('Education')}}>{education}</p>
             <p onClick={()=>props.selectMenuBar('Projects')}>{projects}</p>
             <p onClick={()=>props.selectMenuBar('Contact')}>{contacto}</p>
        </div>
    )
}

const Title = props => { 
    switch(props.menuBar){
      case 'Education':
          return props.language === 'english'?'Education':'Educacion'
      case 'Projects':
          return props.language === 'english'?'Projects':'Projectos'
      case 'Images':
          return props.language === 'english'?'Images':'Imagenes'
      case 'DisplayImage':
            return props.language === 'english'?'Images':'Imagenes'
      case 'Videos':
          return  props.language === 'english'?'Videos':'Videos'
      case 'Validations':
           return props.language === 'english'?'Validations':'Validaciones'
      case 'Weather':
            return props.language === 'english'?'Weather':'Tiempo'
      case 'Contact':
          return props.language === 'english'?'Contact':'Contacto'
      case 'ReduxForm':
            return props.language === 'english'?'ReduxForm':'ReduxForm'
      case 'Weather':
            return props.language === 'english'?'Weather':'Tiempo'
      default:
          return props.language === 'english'?'MyResume':'MyResume'
    }
}


const SearchIcon = props => {
    const menuMobile = !props.menuMobile
    const searchicon = props.menuBar === 'Images' && menuMobile === true || props.menuBar === 'Videos' && menuMobile === true 
    || props.menuBar === 'Weather' && menuMobile === true? 
    <i onClick={()=>{props.searchicon(true)}} className="search icon mt-1 ml-2 large"></i>:
    ''
    



    return(
        <div className="mobileHeader navbar fixed-top navbar-light bg-light  justify-content-between" >
             <a  style={{fontSize:'18px',fontWeight:'bold',color:'#263029'}} className="title navbar-brand pt-2 pl-1">
                     <Title language={props.language} menuBar={props.menuBar}/>
            </a>
           <div>
            {searchicon}
            <a  onClick={()=>props.changeLanguage('english')}><img  alt="uk" src="/18166.jpg" /></a> 
            <a  onClick={()=>props.changeLanguage('espanol')}><img  alt="es" src="/18168.jpg" /></a>
            <i onClick={()=>props.selectMenuMobile(menuMobile)} className="bars icon mt-1 ml-2 large"></i>
          </div>
       </div> 
    )
}
