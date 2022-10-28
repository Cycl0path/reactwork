import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component{
 constructor(props) {
        super(props);
         this.state = {
            formtask: '',
            total: (Math.random() * 100).toFixed(2),
            tipAmount: 0,
            tipTotal: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSet0 = this.handleSet0.bind(this);
        this.handleSet10 = this.handleSet10.bind(this);
        this.handleSet20 = this.handleSet20.bind(this);
        this.handleSet30 = this.handleSet30.bind(this);
        this.goToSubmitPayment = this.goToSubmitPayment.bind(this);
      }
    
      handleChange(event) {
        this.setState({formtask: event.target.value});
      }
    
       handleSubmit(event) {
        this.setState( {tipTotal : (this.state.total * (1 + (this.state.formtask / 100))).toFixed(2)}
        );
        this.setState({formtask:""});
        event.preventDefault();
      }
      handleSet0(event)  {                                                             //I should be able to combine these, but can't
        this.setState( {tipTotal : (this.state.total * (1 + (0 / 100))).toFixed(2)});
        this.setState({formtask:""});
        event.preventDefault();
      }
      handleSet10(event)  {
        this.setState( {tipTotal : (this.state.total * (1 + (10 / 100))).toFixed(2)});
        this.setState({formtask:""});
        event.preventDefault();
      }
      handleSet20(event)  {
        this.setState( {tipTotal : (this.state.total * (1 + (20 / 100))).toFixed(2)});
        this.setState({formtask:""});
        event.preventDefault();
      }
      handleSet30(event)  {
        this.setState( {tipTotal : (this.state.total * (1 + (30 / 100))).toFixed(2)});
        this.setState({formtask:""});
        event.preventDefault();
      }
    
    
    goToSubmitPayment() {
      console.log("Here");
    root.render(
      <React.StrictMode>
        <SubmitPayment />
      </React.StrictMode>
      );
    }
    
    
    
      render() {
        return (
            <div class='background'>
              <h1> Total: $ {this.state.total}</h1>
              <div id='tipOptions'>
                <div class='S25'>
                  <form onSubmit={this.handleSet0} >
                    <input type="submit" value="0%" />
                  </form>
                </div>
                <div class='S25'>
                  <form onSubmit={this.handleSet10} >
                    <input type="submit" value="10%" />
                  </form>
                </div>
                  <div class='S25'>
                  <form onSubmit={this.handleSet20} >
                    <input type="submit" value="20%" />
                  </form>
                </div>
                <div class='S25'>
                  <form onSubmit={this.handleSet30} >
                    <input type="submit" value="30%" />
                  </form>
                </div>
              </div>
              <div class='next'>
                <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
                  <label>
                    Custom Tip Amount:
                    <input type="number" value={this.state.formtask} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
              <h1>New Total: $ {this.state.tipTotal}</h1>
              <div class='next'>
                <form onSubmit={this.goToSubmitPayment} >
                  <input type="submit" value="Proceed to Payment" />
                </form>
              </div>
            </div>
        );
      }
    }
    
    
    
    class SubmitPayment extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
            formtask: '',
            temp: '',
            creditCardNumber: '',
            pin: ''
        };
        
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.goToReceipt = this.goToReceipt.bind(this);
        
      }
      handleChange1(event) {
        this.setState({formtask: event.target.value});
      }
      handleChange2(event) {
        this.setState({temp: event.target.value});
      }
      
      goToReceipt(){
      root.render(
      <React.StrictMode>
        <Receipt />
      </React.StrictMode>
      );
    }
      
      render(){
        return(
          <div class='background'>
            <form onSubmit={this.handleSubmitCard} onKeyUp={this.handleChange1}>
              <label>
                Enter Credit Card Number:
                <input type="number" value={this.state.formtask} onChange={this.handleChange1} />
              </label>
            </form>
            <form onSubmit={this.handleSubmitPin} onKeyUp={this.handleChange2}>
              <label>
                Enter CCV:
                <input type="password" value={this.state.temp} onChange={this.handleChange2} />
              </label>
            </form>
            <div class='next'>
              <form onSubmit={this.goToReceipt} >
                <input type="submit" value="Confirm Payment" />
              </form>
            </div>
          </div>
        );
      }
    }
    
    
    class Receipt extends React.Component{
    constructor(props) {
      super(props);
        this.state = {
            temp: '',
            email: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({temp: event.target.value});
    }
    handleSubmit(event) {
        this.setState( {email : this.state.temp}
        );
        this.setState({temp:""});
        alert("Receipt Sent!");
        event.preventDefault();
      }
    
    render(){
      return(
        <div class='background'>
          <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
              <label>
                Enter Email to Receive Receipt:
                <input type="email" value={this.state.temp} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
          </form>
        </div>
         );     
      }
    }
    
    
    
export default App;


