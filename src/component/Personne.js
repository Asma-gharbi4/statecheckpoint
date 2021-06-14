import React ,{component} from 'react'

class Personne extends React.Component {

    state ={ 
    person:{fullName: "Asma Gharbi",
    bio: "Nothing", 
    imgSRC: "./img.PNG",
    profession: "ingénieure"},
    show: false,
    digit:0
    };
    handleShowPerson = () => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      };
     
      componentDidMount() {
       setInterval( () => {
           this.setState(prevState =>({
            digit: prevState.digit + 1
        }));
    },1000); 
      };
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return(
          <>
          <h2>Timer: {this.state.digit} S</h2>
          {this.state.show&&(
        <>
        
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <h3>{this.state.person.profession}</h3>
        <img className="Photo" src={this.state.person.imgSRC} alt="myimg"></img>
       
        </>
       ) }
        <button className="Button" onClick={this.handleShowPerson}>Show me</button>
          </>
      
      )
    }
   }
   export default Personne