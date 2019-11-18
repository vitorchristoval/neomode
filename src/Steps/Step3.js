import React, { Component } from 'react';


class Step3 extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (this.props.currentStep == 3) { // Prop: The current step
            return (
                <div className="first-step">
                    <h3 className="text-center">Passo 3 </h3>

                </div>

            )
        }

        // Retorno null se não for o step certo
        return (
            null
        )
    }
}

export default Step3;
