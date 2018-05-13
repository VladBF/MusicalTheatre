let React = require('react');



class Ticket extends React.Component{
    constructor(props){
        super(props);
        this.orderTicket = this.orderTicket.bind(this);
    }

    orderTicket(){
        document.location.href = "https://kontramarka.ua/ru/theatre";
    }
    render () {
        return (
            <div className='container ticket-main-container'>
                <div className="row">
                    <div className="col-md-12 order-ticket-container">
                        <div className="about-price-ticket-container">
                            <h1 className="main-price-name">ВАРТІСТЬ КВИТКІВ</h1>

                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top"/>
                            <div className="price-info-container">
                                <h2 className="price-name">
                                    ДЕННІ ВИСТАВИ У БУДНІ ДНІ:
                                </h2>
                                <h2 className="price">
                                    30-90 грн.
                                </h2>
                                <img src="../../image/ornament/ornament_7.png" alt="" className="ornament-left"/>
                                <img src="../../image/ornament/ornament_7_2.png" alt="" className="ornament-right"/>
                            </div>
                            <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom"/>

                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top"/>
                            <div className="price-info-container">
                                <h2 className="price-name">
                                    ДЕННІ ВИСТАВИ У ВИХІДНІ ТА СВЯТКОВІ ДНІ:
                                </h2>
                                <h2 className="price">
                                    30-200 грн.
                                </h2>
                                <img src="../../image/ornament/ornament_7.png" alt="" className="ornament-left"/>
                                <img src="../../image/ornament/ornament_7_2.png" alt="" className="ornament-right"/>
                            </div>
                            <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom"/>

                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top"/>
                            <div className="price-info-container">
                                <h2 className="price-name">
                                    ВЕЧІРНІ ВИСТАВИ:
                                </h2>
                                <h2 className="price">
                                    30-200 грн
                                </h2>
                                <img src="../../image/ornament/ornament_7.png" alt="" className="ornament-left"/>
                                <img src="../../image/ornament/ornament_7_2.png" alt="" className="ornament-right"/>
                            </div>
                            <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom"/>

                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top"/>
                            <div className="price-info-container">
                                <h2 className="price-name">
                                    ВИСТАВИ В АРТИСТИЧНІЙ ВІТАЛЬНІ:
                                </h2>
                                <h2 className="price">
                                    80 грн.
                                </h2>
                                <img src="../../image/ornament/ornament_7.png" alt="" className="ornament-left"/>
                                <img src="../../image/ornament/ornament_7_2.png" alt="" className="ornament-right"/>
                            </div>
                            <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom"/>

                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top"/>
                            <div className="price-info-container">
                                <h2 className="price-name">
                                    Діти до 3-х років можуть проходити на вистави без квитка.
                                </h2>
                                <img src="../../image/ornament/ornament_7.png" alt="" className="ornament-left-children"/>
                                <img src="../../image/ornament/ornament_7_2.png" alt="" className="ornament-right-children"/>
                            </div>
                            <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom"/>


                            <div className="order-ticket-button-container">
                                <button className="button-ornament-1" onClick={this.orderTicket}>
                                   ЗАМОВИТИ КВИТОК
                                </button>
                            </div>

                        </div>

                        <div className="floor-plan-container">
                            <h1 className="main-price-name">ПЛАН ГЛЯДАЧЕВОЇ ЗАЛИ</h1>
                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top-viewers"/>
                            <img src="../image/plan1.jpg" alt="План глядацького залу" className="floor-plan floor-plan1-img"/>

                        </div>
                        <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom-viewers"/>
                        <div className="floor-plan-container">
                            <h1 className="main-price-name">ПЛАН АРТИСТИЧНОЇ ВІТАЛЬНІ</h1>
                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-white-top-viewers"/>
                            <img src="../image/plan2.jpg" alt="План артистичної вітальні" className="floor-plan floor-plan2-img"/>
                        </div>
                        <img src="../../image/ornament/ornament_6_2.png" alt="" className="ornament-white-bottom-viewers"/>

                    </div>
                </div>
            </div>
        )

    }
}
module.exports.Ticket = Ticket;