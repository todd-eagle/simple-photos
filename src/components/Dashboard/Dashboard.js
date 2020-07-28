import React, {Component} from 'react' 
import UploadForm from './UploadForm/UploadForm'

class Dashboard extends Component {
  
    render(){
        return (
                <div>
                    This is the dashboard
                    <UploadForm />
                </div>
            )

    }
}

export default Dashboard