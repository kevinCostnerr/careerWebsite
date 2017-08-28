import axios from 'axios';

class JobPostService{

  sendData(data){
    axios.post('http://localhost:8000/add/post', data)
    .then(res => {
     this.setState({ data: res });
     })
     .catch(err => {
     console.error(err);
     });
  }
}
