import React from 'react'
import '../styles/searchbar.css'

class SearchBar extends React.Component{
    state={search:''}
    onChange= e => {
        console.log(e.target.value)
        this.setState({search:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        if(this.props.menuBar === 'Videos'){
            this.props.searchVideo(this.state.search)
        }
        else if(this.props.menuBar === 'Weather'){
            this.props.searchCity(this.state.search)
        }
        else{
            this.props.searchIng(this.state.search)
        }
         this.setState({search:''})

    }
    //,this.props.searchicon(false)
    render(){
        const videos = this.props.language === 'english'? 'search for videos': 'busca un video'
        const images = this.props.language === 'english'? 'search for images': 'busca una imagen'
        const city = this.props.language === 'english'? 'search for city': 'busca por ciudad'
        const placeholder = this.props.menuBar === 'Videos'? videos:images
        const addingWeatherph = this.props.menuBar === 'Weather'? city : placeholder

        return(
            <div>
               <div className="desktopSearch">
                    <form  onSubmit={this.onSubmit}  >
                        <div className="ui small icon input">
                        <input  value={this.state.search} onChange={this.onChange} placeholder={addingWeatherph} />
                        <i className="search icon" type="submit"></i>
                        </div>
                    </form>
               </div>
               <div className="mobileSearch">
                    <form  onSubmit={this.onSubmit} >
                       <div >
                       <i onClick={()=>this.props.searchicon(false)} className="arrow left icon"></i>
                        <input  value={this.state.search} onChange={this.onChange} placeholder={addingWeatherph} />
                        <button >search</button>
                       </div>
                       
                    </form>
                   
               </div>
            
            </div>
        )
    }
}
export default SearchBar 
//className="searchbar" style={{display:'flex'}}
//<button style={{marginLeft:'4px', border:'none'}} type="submit"> </button>