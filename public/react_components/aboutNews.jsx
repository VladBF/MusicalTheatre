let React = require('react');



class AboutNew extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let data = this.props.infoNews;
        return(
            <div className="container main-newsPage-container">
                <div className="row">
                    <div className="about-name-information-container">
                        <h3 className="about-name-information">{data[0].name_information}</h3>
                    </div>
                    <div className="date-news-container">
                        <h3 className="date-news-about">{data[0].date}</h3>
                    </div>
                    <div className="col-md-12 news-element">
                        {data[0].image_1 === null ? <span></span> : <img src={"../"+data[0].image_1} alt="" className="img-about-news"/>}
                        {data[0].image_2 === null ? <span></span> : <img src={"../"+data[0].image_2} alt="" className="img-about-news"/>}
                        {data[0].image_3 === null ? <span></span> : <img src={"../"+data[0].image_3} alt="" className="img-about-news"/>}
                        <div className="about-information-container">
                            <img src="../../image/ornament/ornament_5_2.png" alt="" className="ornament-information-top"/>
                            <h5 className="about-information-news">{data[0].information}</h5>
                            <img src="../../image/ornament/ornament_5.png" alt="" className="ornament-information-bottom"/>
                        </div>
                        {data[0].image_4 === null ? <span></span> : <img src={"../"+data[0].image_4} alt="" className="img-about-news_bottom"/>}
                        {data[0].image_5 === null ? <span></span> : <img src={"../"+data[0].image_5} alt="" className="img-about-news_bottom"/>}

                    </div>

                </div>
            </div>

        )
    }


}




module.exports.AboutNew = AboutNew;



