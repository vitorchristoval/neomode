import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import EtapasConteudo from './EtapasConteudo';
import Menu from './Menu';


export class Home extends Component {
    constructor(props) {
        super(props)

     
        this.state ={
            step: Number
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this)
    }
    componentDidMount(){
            if(localStorage.getItem('currentStep') != null){
                this.setState({step : localStorage.getItem('currentStep')})
            }else{
                this.setState({step: 1});
            }
           
        
    }
    next(){
        if(this.state.step < 6){
            var newStep = (Number(this.state.step) + 1) ;
            console.log(newStep)
            this.setState({step : newStep});
            this.forceUpdate();
            localStorage.setItem('currentStep', newStep);
            this.render();
        }
       
    }
    previous(){
        if(this.state.step <= 6 && this.state.step > 1){
            var newStep = (Number(this.state.step) - 1) ;
            console.log(newStep)
            this.setState({step : newStep});
            this.forceUpdate();
            localStorage.setItem('currentStep', newStep);
            this.render();
        }
       
    }

    render() {
        if(this.state.step != null ){
            var steps = this.state.step
        }
       
        return (
            <div className="principal">
                <div className="row c-row">
                    <div className="col-xs-3">
                        <Menu />
                    </div>

                    <div className="col-xs-9">
                        <EtapasConteudo currentStep={steps} />
                    </div>
                </div>
                <div className="col-xs-12 steps">

                    <ul className="progressbar">
                        <li className="active"><button onClick={() => this.previous()}>Voltar</button></li>
                        <li className={steps >= 1 ? "active" : ""}>Onboarding</li>
                        <li className={steps >= 2 ? "active" : ""}>Marca</li>
                        <li className={steps >= 3 ? "active" : ""}>Integrações</li>
                        <li className={steps >= 4 ? "active" : ""}>App Stores</li>
                        <li className={steps >= 5 ? "active" : ""}>Conteúdo</li>
                        <li className={steps >= 6 ? "active" : ""}>Lojas</li>
                        <li><button onClick={() => this.next()}>Avançar</button></li>
                    </ul>

                </div>
            </div>
        )
    }
};

export default Home;
