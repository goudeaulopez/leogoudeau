import React from 'react'
import SimpleForm from './simpleform'
import _ from 'lodash'
import '../../styles/create.css'

class Update extends React.Component{
    render(){
        const create = this.props.language === 'english'? 'Edit':
        'Editar'
        const title = this.props.language === 'english'? 'Update Record':
        'Editar Registro'

        const backtolist = this.props.language === 'english'? 'Back to list':'Volver a lista'

    return(
        <div className="create">
            <p  onClick={()=>this.props.onOption('')}>
                     {backtolist}
                </p>
           <SimpleForm initialValues={_.pick(this.props.selected,'firstname','lastname','phone','email','description')}
                       onList={this.props.onList} create={create} title={title}
           />
        </div>
    )
    }
}
export default Update