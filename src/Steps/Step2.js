import React, { Component } from 'react';


class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      primaria: localStorage.getItem('primaria'),
      secundaria: localStorage.getItem('secundaria'),
      terciaria: localStorage.getItem('terciaria'),
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    var nome = [name]
    localStorage.setItem(nome, value)
  }

  render() {
    if (this.props.currentStep == 2) { // Prop: The current step
      return (
        <div className="first-step">
          <h3 className="text-center">Cores da sua marca</h3>
          <div className="form-group row">
            <div className="col card-color">
              <input className="form-control cores" 
              type="color"  
              name="primaria"
              value={this.state.primaria}
              onChange={this.handleChange}  />
              <h3 className="color-text">{this.state.primaria}</h3>
              <p>Cor primária</p>
            </div>
            <div className="col card-color">
              <input className="form-control cores" 
              type="color"  
              name="secundaria"
              value={this.state.secundaria}
              onChange={this.handleChange}  />
              <h3 className="color-text">{this.state.secundaria}</h3>
              <p>Cor secundária</p>
            </div>
            <div className="col card-color">
              <input className="form-control cores" 
              type="color"  
              name="terciaria"
              value={this.state.terciaria}
              onChange={this.handleChange}  />
              <h3 className="color-text">{this.state.terciaria}</h3>
              <p>Cor terciária</p>
            </div>
          </div>


        </div>

      )
    }

    // Retorno null se não for o step certo
    return (
      null
    )
  }
}

export default Step2;
