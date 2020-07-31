import React, {Component} from 'react' 
import axios from 'axios';

class TestForm extends Component {
  constructor(){
    super()
      this.state = {
        file: ''
      }
    }

    handleFile(e) {

      let file = e.target.files[0]

      this.setState({file: file})
    }
  
    handleUpload(e) {
      let file = this.state.file
      console.log("file info from state: ", file)
      let formData = new FormData()
      formData.append('file', file)
      console.log("file info from formData: ",formData.get('file') );

      axios({
        url: '/api/upload',
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data : formData
      })
      .then(res => { console.log(res)})
      .catch(err => { console.log(err)})

    }

    render(){
      return (
          <div>
            <label>Upload File:</label>
            <input
              type="file"
              name="input" 
              onChange={e=> this.handleFile(e)}
            />
            <button type="submit" onClick={e => this.handleUpload(e)}>Upload</button>
        </div>
      )
    }
}

export default TestForm
