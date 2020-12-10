import React from 'react'
import Header from './header'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import MainPage from './mainPage'
import '../styles/app.css'


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
            case 'about':
                return <About language={this.state.language}/>
            case 'projects':
                return <Projects language={this.state.language}/>
            case 'contact':
                return <Contact language={this.state.language}/>
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
                    <br/><br/><br/>
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