import React, { Component } from 'react';


class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: localStorage.getItem('nome'),
      site: localStorage.getItem('site'),
      cnpj: localStorage.getItem('cnpj'),
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
    if (this.props.currentStep == 1) { // Prop: The current step
      return (
        <div className="first-step">
          <h3 className="text-center">Informações básicas da sua empresa</h3>
          <div className="form-group">
            <label htmlFor="nome">Nome de exibição da marca</label>
            <input
              className="form-control"
              id="nome"
              name="nome"
              type="text"
              value={this.state.nome} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="site">Domínio do site principal</label>
            <input
              className="form-control"
              id="site"
              name="site"
              type="text"
              value={this.state.site} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ principal</label>
            <input
              className="form-control"
              id="cnpj"
              name="cnpj"
              type="text"
              value={this.state.cnpj} 
              onChange={this.handleChange} 
            />
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

export default Step1;
