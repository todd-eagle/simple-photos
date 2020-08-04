import React, {Component} from 'react' 
import UploadForm from './UploadForm/UploadForm'
import ImageContainer from './ImageContainer/ImageContainer'

class Dashboard extends Component {
  
    render(){
        return (
            <>
                <div>
                    This is the dashboard
                    <UploadForm />
                </div>
                <div>
                    <ImageContainer />
                </div>
                </>
            )
    }
}

export default Dashboard