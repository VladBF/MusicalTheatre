let React = require('react');

let AboutPerformance = require('./AboutPerformancePage').AboutPerformance;


let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;


let MayArray = [];
let JuneArray = [];

const DataPoster = {
    poster : [

    ],

    get: function (name) {
        return this.poster.filter(function (item) {
            return item.the_name_of_the_play === name;
        })
    }

};

(function () {
    $.ajax({
        url:'/repertoireList',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();

function dataParser(result){
    for(let i = 0; i < result.result.length; i++){
        DataPoster.poster.push(result.result[i]);
    }
    for(let i = 0; i < 4; i++){
        MayArray.push(result.result[i]);
    }
    for(let i = 4; i <= 8; i++){
        JuneArray.push(result.result[i]);
    }
}


let May =() => {
    return(
        <div id="testCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#testCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#testCarousel" data-slide-to="1"></li>
                <li data-target="#testCarousel" data-slide-to="2"></li>
                <li data-target="#testCarousel" data-slide-to="3"></li>
            </ol>


            <div className="carousel-inner">

                    <div className="item active">
                        <Link to={`/repertoire/${MayArray[0].the_name_of_the_play}`} key={1} onClick={this.UpScroll}>
                            <img src={MayArray[0].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                               <div className="name-carousel-container">
                                   <h2 className="carousel-name-show">{MayArray[0].the_name_of_the_play}</h2>
                               </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {MayArray[0].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${MayArray[1].the_name_of_the_play}`} key={2} onClick={this.UpScroll}>
                            <img src={MayArray[1].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{MayArray[1].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {MayArray[1].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${MayArray[2].the_name_of_the_play}`} key={3} onClick={this.UpScroll}>
                            <img src={MayArray[2].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{MayArray[2].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {MayArray[2].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${MayArray[3].the_name_of_the_play}`} key={4} onClick={this.UpScroll}>
                            <img src={MayArray[3].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{MayArray[3].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {MayArray[3].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
            </div>


            <a className="left carousel-control" href="#testCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>

            <a className="right carousel-control" href="#testCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    )

};


let June =() => {
    return(
        <div id="testCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#testCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#testCarousel" data-slide-to="1"></li>
                <li data-target="#testCarousel" data-slide-to="2"></li>
                <li data-target="#testCarousel" data-slide-to="3"></li>
            </ol>


            <div className="carousel-inner">

                    <div className="item active">
                        <Link to={`/repertoire/${JuneArray[0].the_name_of_the_play}`} key={1} onClick={this.UpScroll}>
                            <img src={JuneArray[0].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{JuneArray[0].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {JuneArray[0].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${JuneArray[1].the_name_of_the_play}`} key={2} onClick={this.UpScroll}>
                            <img src={JuneArray[1].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{JuneArray[1].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {JuneArray[1].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${JuneArray[2].the_name_of_the_play}`} key={3} onClick={this.UpScroll}>
                            <img src={JuneArray[2].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{JuneArray[2].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {JuneArray[2].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to={`/repertoire/${JuneArray[3].the_name_of_the_play}`} key={4} onClick={this.UpScroll}>
                            <img src={JuneArray[3].image_main} className="carousel-one-img"/>
                            <div className="carousel-caption">
                                <div className="name-carousel-container">
                                    <h2 className="carousel-name-show">{JuneArray[3].the_name_of_the_play}</h2>
                                </div>
                                <div className="duration-carousel-container">
                                    <h4 className="carousel-duration-show">Тривалість - {JuneArray[3].duration}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
            </div>


            <a className="left carousel-control" href="#testCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>

            <a className="right carousel-control" href="#testCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    )
};




class Poster extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            month:0
        };

        this.showMay = this.showMay.bind(this);
        this.showJune = this.showJune.bind(this);
        this.UpScroll = this.UpScroll.bind(this);
    }

    showMay(){
        this.setState({
            month:0
        })
    }
    showJune(){
        this.setState({
            month:1
        })
    }
    UpScroll(){
        window.scrollTo(0, 0);
    }
    render(){

        let month  = null;

        if(this.state.month === 0){
            month = <May/>
        }
        else{
            month = <June/>
        }
        return(
            <div className="container main-homePage-container">
                <div className="row">

                    <div className="poster-button-container">
                        <button className="btn btn-primary btn-month" onClick={this.showMay}>Травень</button>
                        <button className="btn btn-primary btn-month" onClick={this.showJune}>Червень</button>
                    </div>

                    {month}


                </div>
            </div>

        )
    }

}

class LookInfoAboutPoster extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const Show = DataPoster.get(this.props.match.params.look_test) ;
        return(
            <div className="aboutShow-container" id="aboutShow-container">
                <AboutPerformance infoShow={Show}/>
            </div>

        )
    }
}


class MainPosterContainer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container main-repertory-container">
                <div className="row">
                   <h1>АФІША</h1>

                   <Switch>
                       <Route exact path='/' component={Poster}/>
                       <Route path='/repertoire/:look_test' component={LookInfoAboutPoster}/>
                   </Switch>

                </div>
            </div>
        )
    }
    
}

module.exports.MainPosterContainer = MainPosterContainer;


