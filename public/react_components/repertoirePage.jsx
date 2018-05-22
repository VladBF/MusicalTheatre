let React = require('react');
let AboutPerformance = require('./AboutPerformancePage').AboutPerformance;


let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;




let adult = [];
let child = [];



const DataRepertoire = {
    repertoire : [

    ],

    get: function (name) {
        return this.repertoire.filter(function (item) {
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
        DataRepertoire.repertoire.push(result.result[i]);
    }

    adult = result.result.filter(function (item) {
      return Number(item.age_name) > 3
    });

    child = result.result.filter(function (item) {
        return Number(item.age_name) === 3
    });
}



let Children = () =>{
        return(
            <React.Fragment>
                {
                    child.map((item,i) =>
                        <Link to={`/repertoire/${item.the_name_of_the_play}`} key={i} onClick={this.UpScroll}>
                            <div className="col-md-6 repertory-show-element">
                                <div className="repertory-info-container">
                                    <div className="repertory-container-show-name">
                                        <h1 className="repertory-show-name">{item.the_name_of_the_play}</h1>
                                    </div>
                                    <img src="../../image/ornament/ornament_5_2.png" alt="" className="ornament-play-top"/>
                                    <div className="repertory-container-show-img">
                                        <img src={item.image_main} alt="" className="repertory-show-img"/>
                                    </div>
                                    <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-play-bottom"/>
                                    <div className="repertory-duration-container">
                                        <h3 className="repertory-duration">Тривалість - {item.duration}</h3>
                                    </div>
                                    <img src="../../image/ornament/ornament_1_2.png" alt="" className="ornament-play-center"/>
                                </div>
                            </div>
                        </Link>

                    )
                }
            </React.Fragment>
        )
};


let Adult = () => {
    return(
        <React.Fragment>
            {
                adult.map((item,i) =>
                    <Link to={`/repertoire/${item.the_name_of_the_play}`} key={i} onClick={this.UpScroll}>
                        <div className="col-md-6 repertory-show-element">
                            <div className="repertory-info-container">
                                <div className="repertory-container-show-name">
                                    <h1 className="repertory-show-name">{item.the_name_of_the_play}</h1>
                                </div>
                                <img src="../../image/ornament/ornament_5_2.png" alt="" className="ornament-play-top"/>
                                <div className="repertory-container-show-img">
                                    <img src={item.image_main} alt="" className="repertory-show-img"/>
                                </div>
                                <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-play-bottom"/>
                                <div className="repertory-duration-container">
                                    <h3 className="repertory-duration">Тривалість - {item.duration}</h3>
                                </div>
                                <img src="../../image/ornament/ornament_1_2.png" alt="" className="ornament-play-center"/>
                            </div>
                        </div>
                    </Link>

                )
            }
        </React.Fragment>
    )
};



class  AllPerformance extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            age_category:false
        };

        this.UpScroll = this.UpScroll.bind(this);
        this.AdultCategory = this.AdultCategory.bind(this);
        this.ChildCategory = this.ChildCategory.bind(this);
    }
    UpScroll(){
        window.scrollTo(0, 0);
    }

    AdultCategory(){
        this.setState({
            age_category:false
        })
    }
    ChildCategory(){
        this.setState({
            age_category:true
        })
    }

    render(){

        let choiceCategory = null;

        if(this.state.age_category === false){
            choiceCategory = <Adult/>
        }
        else{
            choiceCategory = <Children/>
        }


        return(
            <div className="col-md-12 col-xs-12 col-sm-12 all-shows-container">

                    <div className="button-age-category-container">
                        <button className="btn-repertoire" onClick={this.AdultCategory}>Дорослі</button>
                        <button className="btn-repertoire" onClick={this.ChildCategory}>Діти</button>
                    </div>

                    {choiceCategory};
            </div>

        )




    }







}


class LookInfoAboutPerformance extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const Show = DataRepertoire.get(this.props.match.params.look_show) ;
        return(
            <div className="aboutShow-container" id="aboutShow-container">
                <AboutPerformance infoShow={Show}/>
            </div>

        )
    }

}


class Repertory extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="container main-repertory-container">
                <div className="row">
                    <h1 className="main-name">РЕПЕРТУАР</h1>

                    <Switch>
                        <Route exact path='/repertoire' component={AllPerformance}/>
                        <Route path='/repertoire/:look_show' component={LookInfoAboutPerformance}/>
                    </Switch>


                </div>
            </div>

        )
    }


}







module.exports.Repertory = Repertory;