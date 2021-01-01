import React from 'react'
import '../styles/searchbar.css'

class SearchBar extends React.Component{
    state={search:''}
    onChange= e => {
        this.setState({search:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        if(this.props.menuBar === 'Videos'){
            this.props.searchVideo(this.state.search)
        }
        else{
            this.props.searchIng(this.state.search)
        }
         this.setState({search:''})

    }

    render(){
        const videos = this.props.language === 'english'? 'search for videos': 'busca un video'
        const images = this.props.language === 'english'? 'search for images': 'busca una imagen'
        const placeholder = this.props.menuBar === 'Videos'? videos:images

        return(
            <div>
               <div className="desktopSearch">
                    <form  onSubmit={this.onSubmit}  >
                        <div className="ui small icon input">
                        <input  value={this.state.search} onChange={this.onChange} placeholder={placeholder} />
                        <i className="search icon" type="submit"></i>
                        </div>
                    </form>
               </div>
               <div className="mobileSearch">
                    <form  onSubmit={this.onSubmit}  >
                        <i onClick={()=>this.props.searchicon(false)} className="arrow left icon"></i>
                        <input  value={this.state.search} onChange={this.onChange} placeholder={placeholder} />
                        <button  type="submit">search</button>
                       
                    </form>
                   
               </div>
            
            </div>
        )
    }
}
export default SearchBar 
//className="searchbar" style={{display:'flex'}}
//<button style={{marginLeft:'4px', border:'none'}} type="submit"> </button>