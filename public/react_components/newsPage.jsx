let React = require('react');
let AboutNew = require('./aboutNews').AboutNew;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const newsData = {
    NewInfo : [

    ],

    get: function (name) {
        return this.NewInfo.filter(function (item) {
            return item.date === name;
        })
    }

};

(function () {
    $.ajax({
        url:'/newsList',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            newsParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();

function newsParser(result){
    for(let i = 0; i < result.result.length; i++){
        newsData.NewInfo.push(result.result[i]);
    }
}


class AllNews extends React.Component {
    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="col-md-12 col-xs-12 col-sm-12 all-shows-container">
                <React.Fragment>
                    {
                        newsData.NewInfo.map((item,i) =>
                            <Link to={`/news/${item.date}`} key={i} onClick={this.UpScroll}>
                                <div className="col-md-4 news-element">
                                    <div className="name-information-container">
                                        <h3 className="name-information">{item.name_information}</h3>
                                    </div>
                                    <div className="img-news-container">
                                        <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-top-news"/>
                                        <img src={item.image_1} alt="" className="img-news"/>
                                    </div>
                                    <img src="../../image/ornament/ornament_8.png" alt="" className="ornament-bottom-news"/>
                                    <div className="date-news-container">
                                        <h3 className="date-news">{item.date}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </React.Fragment>
            </div>
        )
    }
}



class LookInfoAboutNew extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const News = newsData.get(this.props.match.params.look_new) ;
        return(
            <div className="aboutShow-container" id="aboutShow-container">
                <AboutNew infoNews={News}/>
            </div>

        )
    }

}






class News extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-repertory-container">
                <div className="row">
                    <h1 className="main-name-news">НОВИНИ</h1>

                    <Switch>
                        <Route exact path='/news' component={AllNews}/>
                        <Route path='/news/:look_new' component={LookInfoAboutNew}/>
                    </Switch>


                </div>
            </div>

        )
    }


}


module.exports.News = News;



