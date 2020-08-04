import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticleOptions from './ParticleOptions';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const initialState = {
    input : '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedin: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceBox = (response) => {
    const image = document.getElementById('inputPicture');
    const height = image.height;
    const width = image.width;
    const bounding_box = response.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      "top": bounding_box.top_row * height,
      "right": width - (bounding_box.right_col * width),
      "bottom": height - (bounding_box.bottom_row * height),
      "left": bounding_box.left_col * width
    }
  }

  boxUpdater = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onDetect = (event) => {
    this.setState({imageUrl: this.state.input});
      fetch('https://mighty-hamlet-33397.herokuapp.com/imageurl', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://mighty-hamlet-33397.herokuapp.com/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(console.log)
        }
        this.boxUpdater(this.calculateFaceBox(response));
      })
      .catch(err => console.log(err)); 
  }

  onRouteChange = (Route) => {
    if (Route === 'home'){
      this.setState({isSignedin:true})
    }else{
      this.setState(initialState)
    }
    this.setState({route: Route})
  }

  render(){
    const { imageUrl, box, isSignedin } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={ParticleOptions}/>
        <div className='align'>
          <Logo />
          <Navigation onRouteChange={this.onRouteChange} isSignedin={isSignedin}/>
        </div>
        { this.state.route === 'signin' ?
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : 
          ( this.state.route === 'register' 
          ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : 
            <div>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm
                onInputChange = {this.onInputChange}
                onDetect = {this.onDetect}
              />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
