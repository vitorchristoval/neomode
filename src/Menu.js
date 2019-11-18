import React, { Component } from 'react';



export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true,
        }
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({ view: !this.state.view });

        this.forceUpdate();
        console.log(this.state.view)
    }
    render() {
        return (
            <>
                {this.state.view ? <div className="menu">
                    <div className="logo">
                        <img src="/img/logo-c-default@2x.png" />
                    </div>
                    <div className="button-menu">
                        <button onClick={() => this.change()}><i className="fas fa-angle-left"></i></button>
                    </div>
                    <div className="itens">
                        <div className="col item">
                            <h5 ><i className="fas fa-check-circle"></i> Onboarding</h5>
                            <ul>
                                <li><a href="#" className="menu-visto"> <i className="fas fa-check-circle"></i> Materiais de apoio</a></li>
                                <li><a href="#"> <i className="fas fa-check-circle"></i> Informações da empresa</a></li>
                            </ul>

                        </div>
                        <div className="col item">
                            <h5 className="menu-visto"><i className="fas fa-check-circle"></i> Marca</h5>
                            <ul>
                                <li><a href="#" className="menu-visto"> <i className="fas fa-check-circle"></i> Cores da Marca</a></li>
                                <li><a href="#" className="menu-visto"> <i className="fas fa-check-circle"></i> Logos</a></li>
                            </ul>

                        </div>
                        <div className="col item">
                            <h5><i className="fas fa-check-circle"></i> Integrações</h5>
                            <ul>
                                <li><a href="#" className="menu-visto"> <i className="fas fa-check-circle"></i> E-commerce</a></li>
                                <li><a href="#"> <i className="fas fa-check-circle"></i> ERP</a></li>
                                <li><a href="#"> <i className="fas fa-check-circle"></i> Pagamento</a></li>
                            </ul>

                        </div>
                        <div className="col item">
                            <h5><i className="fas fa-check-circle"></i> APP Stores</h5>
                        </div>
                        <div className="col item">
                            <h5><i className="fas fa-check-circle"></i> Conteúdo</h5>
                            <ul>
                                <li><a href="#" className="menu-visto"> <i className="fas fa-check-circle"></i> Termos de uso</a></li>
                                <li><a href="#"> <i className="fas fa-check-circle"></i> Política de privacidade</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                    :
                    <div className="menu-short">
                        <div className="logo-short">
                            <img src="/img/favicon.ico" width="100" />
                        </div>
                        <div className="button-menu">
                            <button onClick={() => this.change()}><i className="fas fa-bars"></i></button>
                        </div>
                    </div>}


            </>
        )
    }
};

export default Dashboard;
