import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,ButtonGroup,
        Form,FormGroup,ControlLabel,
        FormControl,HelpBlock,
        Checkbox,Radio,Grid,Row,Col
      } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    course:"",
    color:"",
    songs:[],
    movies:[],
    gender:"",
    status:""
    
  };
  
  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
      
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
      var targetArray =this.state[fieldName];
      if(targetArray.indexOf(event.target.value) >=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value),
        1
      );
      else
      targetArray.push(event.target.value);
      
      var state=this.state;
      state[fieldName]=targetArray;
      this.setState(state);
  
    }
  };
  
  
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
         
          <h2>Student Survey!!!</h2>
        </div>
        <p className="jumbotron">
        
        
        <Grid>
        <Row>
          <Col md={6}>
          
          <Form>
          <FormGroup>
          <ControlLabel>Name please....</ControlLabel>
          <FormControl type="text" 
          placeholder="Who are you?..."
          value={this.state.name}
          onChange={this.onChange('name')}
         />
          <HelpBlock>use to identify you</HelpBlock>
          </FormGroup>
          
          
         
          
           <FormGroup>
          <ControlLabel>Choose Fav color</ControlLabel>
          
          <FormControl componentClass="select" 
          placeholder="color here..."
          value={this.state.color}
          onChange={this.onChange('color')}
          >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          </FormControl>
          
          <HelpBlock>use to identify you</HelpBlock>
          </FormGroup>
          
          <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
          <Checkbox value="Harry Potter"
                    checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                    onChange={this.checkboxChange('movies')}>
                    Harry Potter
          </Checkbox>
           <Checkbox value="lotr"
                     checked={this.state.movies.indexOf('lotr')>=0 ? true:false}
                     onChange={this.checkboxChange('movies')} >
                     Lord of the Rings
          </Checkbox>
            <Checkbox value="Twilight"
                      checked={this.state.movies.indexOf('Twilight')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')} >
                      Twilight
          </Checkbox>
          
          </FormGroup>
          
          
          
       
          
          <FormGroup>
          <ControlLabel>Gender </ControlLabel>
          <Radio name="gender" value="Male"
                 onChange={this.onChange('gender')}>Male</Radio>
                 
          <Radio name="gender" value="Female" 
                 onChange={this.onChange('gender')}>Female</Radio>
                
           
          </FormGroup>
          
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-music"></span>
          Music </Button>
          <Button bsStyle="primary">
           <span className="glyphicon glyphicon-asterisk"></span>
           Menu </Button>
          <Button bsStyle="warning">
          <span className="glyphicon glyphicon-warning-sign"></span>
          Warning  </Button>
          <Button bsStyle="danger" >
          <span className="glyphicon glyphicon-remove"></span>
          Error Button </Button>
          </ButtonGroup>
          </Form>
          <br>
          </br>
          
           <FormGroup>
          <ControlLabel>What is your course?</ControlLabel>
          <FormControl type="text" 
          placeholder="course"
          value={this.state.course}
          onChange={this.onChange('course')}
         />
          <HelpBlock>to recognize you</HelpBlock>
          </FormGroup>
          
          
          <FormGroup>
          <ControlLabel>Favorite Genre</ControlLabel>
          <Checkbox value="Pop"
                    checked={this.state.songs.indexOf('Pop')>=0 ? true:false}
                    onChange={this.checkboxChange('songs')}>
                    Pop
          </Checkbox>
           <Checkbox value="RNB"
                     checked={this.state.songs.indexOf('RNB')>=0 ? true:false}
                     onChange={this.checkboxChange('songs')} >
                     RNB
          </Checkbox>
            <Checkbox value="Rock"
                      checked={this.state.songs.indexOf('Rock')>=0 ? true:false}
                      onChange={this.checkboxChange('songs')} >
                      Rock
          </Checkbox>
          <Checkbox value="Love songs"
                     checked={this.state.songs.indexOf('Love songs')>=0 ? true:false}
                     onChange={this.checkboxChange('songs')} >
                     Love songs
          </Checkbox>
          
          </FormGroup>
          
          
           <FormGroup>
          <ControlLabel>Status </ControlLabel>
          <Radio name="status" value="Single"
                 onChange={this.onChange('status')}>Single</Radio>
                 
          <Radio name="status" value="Married" 
                 onChange={this.onChange('status')}>Married</Radio>
                
           
          </FormGroup>
          
          </Col>
          <Col md={6}>
          <strong>Name is {this.state.name}</strong><br/>
         
          <strong>Color is {this.state.color}</strong><br/>
          <strong>Movies is {
            this.state.movies.map((item,i)=>{
              return <div>
              <span className="label label-info" >{item}</span>
              </div>
              
            })
          }</strong><br/>
         
          
          <strong>Gender is {this.state.gender}</strong><br/>
           <strong>Course is {this.state.course}</strong><br/>
           <strong>Genre is {
            this.state.songs.map((item,i)=>{
              return <div>
              <span className="label label-info" >{item}</span>
              </div>
              
            })
          }</strong><br/>
          <strong>Status is {this.state.status}</strong><br/>
          
          </Col>
        </Row>
        </Grid>
        
        </p>
      </div>
      
    );
  }
}

export default App;
