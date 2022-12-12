import hello from '../../assets/avatar1.png';
import './Main.css';




const Main = () => {

    return (
        <main>
            <div main_container>
                <div className="main_tittle">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá </h1>
                        <p>Seja Bem vindo ao seu Painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div>
                        <div className="card">

                            <i className="fa fa-file-text fa-2x text-ligthblue"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Número de Pedidos</p>
                                <span className="font-bold text-tittle">572</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-money fa-2x text-red"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Pagamentos</p>
                                <span className="font-bold text-tittle">R$ 1500.00</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-archive fa-2x text-yellow"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Número de Produtos</p>
                                <span className="font-bold text-tittle">50</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-bars fa-2x text-green"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Categorias</p>
                                <span className="font-bold text-tittle">20</span>
                            </div>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="charts">
                        </div>

                        <div className="charts__right">
                            <div className="charts__right__tittle">
                                <div>
                                    <h1>Relatório Diario</h1>
                                    <p>Piraquara</p>
                                </div>
                                <i className="fa fa-area-chart"></i>
                            </div>
                            <div className="charts_right_cards">
                                <div className="card1">
                                    <h3>Lucro</h3>
                                    <p>R$ 3000.00</p>
                                </div>
                                <div className="card2">
                                    <h3>Lucro</h3>
                                    <p>R$ 1500.00</p>
                                </div>
                                <div className="card3">
                                    <h3>Custos com Manutenção</h3>
                                    <p>R$ 500.00</p>
                                </div>
                                <div className="card4">
                                    <h3>Limpeza</h3>
                                    <p>R$ 200.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;