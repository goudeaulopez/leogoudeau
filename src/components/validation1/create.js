import React from 'react'
import SimpleForm from './simpleform'
import '../../styles/create.css'


class Create extends React.Component{
     render(){
        const create = this.props.language === 'english'? 'Create':
        'Crear'
        const title = this.props.language === 'english'? 'Create Record':
        'Crear Registro'

        const backtolist = this.props.language === 'english'? 'Back to list':'Volver a lista'

        return(
            <div className="create">
                 <p  onClick={()=>this.props.onOption('')}>
                     {backtolist}
                </p>
                <SimpleForm language={this.props.language} onList={this.props.onList} create={create} title={title} />
            </div>
        )
    }
}
export default Create