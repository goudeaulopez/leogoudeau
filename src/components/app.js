import React from 'react'
import Header from './header'
import Education from './education'
import Projects from './projects'
import Contact from './contact'
import MainPage from './mainPage'
import Images from './images/images'
import Videos from './videos/videos'
import Weather from './weather/weather'
import '../styles/app.css'
import Validations1 from './validation1/validations1'
import unsplash from '../apis/unplash'
import ImageDisplay from './images/imageDisplay'
import youtube from '../apis/youtube'
import ReduxForm from './reduxForm/reduxForm'
import axios from 'axios'


class App extends React.Component{
    state={
            language:'english',
            menuBar:'',
            menuMobile:false,
            messageSent:false,
            imageList:[],
            selected:null,
            videoList:[],
            selectedVideo:null,
            currentWeather:[],
            weeklyWeather:[]
           


        }
    componentDidMount(){
     window.navigator.geolocation.getCurrentPosition(
         async position => {
             var lat = position.coords.latitude
             var lon = position.coords.longitude

             let url = "https://api.openweathermap.org/data/2.5/"
             let appi= "&appid=51e980823ae41cf16c725f5fb2103836"
            // we get the current forecast with coordenates
            let currentWeather = await axios.get(`${url}weather?lat=${lat}&lon=${lon+appi}`)
            let weeklyWeather = await axios.get(`${url}forecast?lat=${lat}&lon=${lon+appi}`)
            this.setState({currentWeather:currentWeather.data,weeklyWeather:weeklyWeather.data})

         }
        
     )
    
      this.searchIng('colombia')
      this.searchVideo('salento colombia')
     
    }
    searchCity = async search => {
        //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
        //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        let city = search
        let url = "https://api.openweathermap.org/data/2.5/"
        let appi= "&appid=51e980823ae41cf16c725f5fb2103836"

            let currentWeather = await axios.get(`${url}weather?q=${city+appi}`)
            let weeklyWeather = await axios.get(`${url}forecast?q=${city+appi}`)
            this.setState({currentWeather:currentWeather.data,weeklyWeather:weeklyWeather.data})

    }
    selectingVideo = selectedVideo => {
        this.setState({selectedVideo})
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
    /*  const response = await unsplash.get(
        '/search/photos',
        {
         params:{query:search}
        }
      )
      console.log(response.data.results)
      this.setState({imageList:response.data.results})*/
      console.log('hola image')
    }
    searchVideo = async search => {
      /*  const response = await youtube.get(
            '/search',{
                params:{
                    q: search
                }
            }
        )
        this.setState({videoList:response.data.items, selectedVideo: response.data.items[0]})
        console.log(this.state.videoList) */
        console.log('hola')
    }
  //,onSelected:response.data.items[0]

    menuNavigation = () => {
        switch(this.state.menuBar){
            case 'Education':
                return <Education language={this.state.language}/>
            case 'Weather':
                return <Weather 
                        language={this.state.language}
                        weeklyWeather={this.state.weeklyWeather}
                        currentWeather={this.state.currentWeather}
                        />
            case 'Videos':
                return <Videos 
                          language={this.state.language}
                          onListVideos={this.state.videoList}
                          selectedVideo={this.state.selectedVideo}
                          selectingVideo={this.selectingVideo}
                        />
            case 'Images':
                return <Images 
                            onSelected = {this.onSelected}
                            selectMenuBar={this.selectMenuBar}
                            onListImage={this.state.imageList}  
                            language={this.state.language}/>
            case 'DisplayImage':
                return <ImageDisplay selected={this.state.selected}  selectMenuBar={this.selectMenuBar} language={this.state.language} />
            case 'Validations1':
                return <Validations1 language={this.state.language}/>
            case 'ReduxForm':
                    return <ReduxForm language={this.state.language}/>
            case 'Projects':
                return <Projects language={this.state.language} selectMenuBar={this.selectMenuBar}/>
            case 'Contact':
                return <Contact setMessageSent={this.setMessageSent} 
                                messageSent={this.state.messageSent} 
                                language={this.state.language}
                                selectMenuBar={this.selectMenuBar}
                        />
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
                        searchVideo={this.searchVideo}
                        searchCity={this.searchCity}
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
                      searchVideo={this.searchVideo}
                      searchCity={this.searchCity}
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

