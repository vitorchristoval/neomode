import React, { Component } from 'react';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';

export class EtapasConteudo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: this.props.currentStep, // Default is Step 1

        }
    }


    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
          Email: ${email} \n 
          Username: ${username} \n
          Password: ${password}`)
    }



    render() {
        return (
            <div className="etapas-div col-xs-12">


                {this.props.currentStep == 1 ? <Step1
                    currentStep={1}
                    handleChange={this.handleChange}

                /> : ''}
                {this.props.currentStep == 2 ? <Step2
                    currentStep={2}
                    handleChange={this.handleChange}

                /> : ''}
                {this.props.currentStep == 3 ? <Step3
                    currentStep={3}
                    handleChange={this.handleChange}

                /> : ''}
                {this.props.currentStep == 4 ? <Step4
                    currentStep={4}
                    handleChange={this.handleChange}

                /> : ''}

                {this.props.currentStep == 5 ? <Step5
                    currentStep={5}
                    handleChange={this.handleChange}

                /> : ''}
                {this.props.currentStep == 6 ? <Step6
                        currentStep={6}
                        handleChange={this.handleChange}

                    /> : ''}






            </div>
        )
    }
};

export default EtapasConteudo;
