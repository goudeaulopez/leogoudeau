import React from 'react'
import Header from './header'
import Education from './education'
import Projects from './projects'
import Contact from './contact'
import MainPage from './mainPage'
import Work from './work'
import '../styles/app.css'

//6LfVGgcaAAAAACYZe13PTNs0JPkN-3q6EhWDUkMS

class App extends React.Component{
    state={language:'english',menuBar:'',menuMobile:false}
    
    changeLanguage = language => {
        this.setState({language})
    }
    selectMenuBar = menuBar => {
        this.setState({menuBar,menuMobile:false})
    }
    selectMenuMobile = menuMobile => {
        this.setState({menuMobile})
    }
    menuNavigation = () => {
        switch(this.state.menuBar){
            case 'Education':
                return <Education language={this.state.language}/>
            case 'Projects':
                return <Projects language={this.state.language}/>
            case 'Contact':
                return <Contact language={this.state.language}/>
            case 'Work':
                return <Work language={this.state.language}/>
            default:
                return <MainPage language={this.state.language}/>
        }
    }
    render(){
        return(
           <div>
               
                <div className="appDesktop">
                    <Header 
                        language={this.state.language}
                        changeLanguage={this.changeLanguage}
                        selectMenuBar={this.selectMenuBar} 
                    />
                    
                    {this.menuNavigation()}
                </div>

                <div className="appMobile">
                    <Header
                      language={this.state.language}
                      changeLanguage={this.changeLanguage}
                      selectMenuBar={this.selectMenuBar}
                      menuBar={this.state.menuBar}
                      menuMobile={this.state.menuMobile}
                      selectMenuMobile={this.selectMenuMobile}
                    />
                    {
                        this.state.menuMobile === false ?
                         this.menuNavigation() :
                         null
                    }
                </div>
           </div>
        )
    }
}
export default App