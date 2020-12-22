import React from 'react'
import Header from './header'
import Education from './education'
import Projects from './projects'
import Contact from './contact'
import MainPage from './mainPage'
import Work from './work'
import Images from './images'
import Videos from './videos'
import Weather from './weather'
import '../styles/app.css'
import Validations from './validations'

import unsplash from '../apis/unplash'
import ImageDisplay from './imageDisplay'

class App extends React.Component{
    state={
            language:'english',
            menuBar:'',
            menuMobile:false,
            messageSent:false,
            //images component
            imageList:[],
            //
            selected:null

        }
    componentDidMount(){
      this.searchIng('colombia')
    }
    changeLanguage = language => {
        this.setState({language})
    }
    selectMenuBar = menuBar => {
        this.setState({menuBar,menuMobile:false,messageSent:false})
    }
    selectMenuMobile = menuMobile => {
        this.setState({menuMobile})
    }
    setMessageSent = messageSent => {
        this.setState({messageSent})
    }
    //search image
    onSelected = selected => {
        this.setState({selected,menuBar:'DisplayImage'})
    }
    searchIng = async search => {
      const response = await unsplash.get(
        '/search/photos',
        {
         params:{query:search}
        }
      )
      console.log(response.data.results)
      this.setState({imageList:response.data.results})
    }
  

    menuNavigation = () => {
        switch(this.state.menuBar){
            case 'Education':
                return <Education language={this.state.language}/>
            case 'Weather':
                return <Weather language={this.state.language}/>
            case 'Videos':
                return <Videos language={this.state.language}/>
            case 'Images':
                return <Images 
                            onSelected = {this.onSelected}
                            selectMenuBar={this.selectMenuBar}
                            onListImage={this.state.imageList}  
                            language={this.state.language}/>
            case 'DisplayImage':
                return <ImageDisplay selected={this.state.selected}  selectMenuBar={this.selectMenuBar} language={this.state.language} />
            case 'Validations':
                return <Validations language={this.state.language}/>
            case 'Projects':
                return <Projects language={this.state.language} selectMenuBar={this.selectMenuBar}/>
            case 'Contact':
                return <Contact setMessageSent={this.setMessageSent} 
                                messageSent={this.state.messageSent} 
                                language={this.state.language}
                                selectMenuBar={this.selectMenuBar}
                        />
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
                        menuBar={this.state.menuBar}
                        searchIng={this.searchIng}
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
                      searchIng={this.searchIng}
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