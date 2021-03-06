let React = require('react');




let ActorsData = [];
let DirectionsData = [];


let ActorsPeople = () => {
    return(
        <React.Fragment>
            {
                ActorsData.map((item,i) =>
                    <div className="col-md-3 col-xs-6 col-sm-6 actor-block" key={i} >
                        <div className="actor-img-container container-wrapper">
                            <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-top-actor"/>
                            <img src={item.image} alt="" className="actor-img"/>
                            <img src="../../image/ornament/ornament_8.png" alt="" className="ornament-bottom-actor"/>
                        </div>
                        <div className="actor-name-container container-actor-posts">
                            <p className="actor-position">
                                {item.name_position}
                            </p>
                            <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-posts"/>

                            <h1 className="actor-name">
                                {item.name_actor}
                            </h1>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
};

let Direction = () => {
    return(
        <React.Fragment>
            {
                DirectionsData.map((item,i) =>
                    <div className="col-md-3 col-xs-6 col-sm-6 direction-block" key={i}>
                        <img src="../../image/ornament/ornament_6.png" alt="" className="ornament-top-director"/>
                        <div className="direction-img-container">
                            <img src={item.image} alt="" className="direction-img"/>
                            <img src="../../image/ornament/ornament_8.png" alt="" className="ornament-bottom-director"/>
                        </div>
                        <div className="direction-name-container">
                            <p className="direction-position">
                                {item.posts}
                            </p>
                            <img src="../../image/ornament/ornament_9.png" alt="" className="ornament-posts-director"/>
                        </div>
                        <div className="director-name">
                            <h1 className="direction-name">
                                {item.name_management}
                            </h1>
                        </div>

                    </div>
                )
            }
        </React.Fragment>
    )
};





(function () {
    $.ajax({
        url:'/actorsList',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            actorsParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();



function actorsParser(result){
    for(let i = 0; i < result.result.length; i++){
        ActorsData.push(result.result[i]);
    }
}



(function () {
    $.ajax({
        url:'/directionList',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            directionParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();


function directionParser(result){
    for(let i = 0; i < result.result.length; i++){
        DirectionsData.push(result.result[i]);
    }
}


class Actors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collective:0
        };

        this.showActors = this.showActors.bind(this);
        this.showDirection = this.showDirection.bind(this);

    }

    showActors(){
      this.setState({
          collective:0
      })
    }
    showDirection(){
        this.setState({
            collective:1
        })
    }


    render(){

        let people_in_theater  = null;

        if(this.state.collective === 0){
            people_in_theater = <ActorsPeople/>
        }
        else if(this.state.collective === 1){
            people_in_theater = <Direction/>
        }
        else{
            people_in_theater = <PeopleTheater/>
        }
        return(
            <div className="container main-actorsPage-container">
                <div className="row">
                    <h1 className= "storage">СКЛАД ТЕАТРУ</h1>
                    <div className="actors-button-container">
                        <button className="btn-actors" onClick={this.showActors}>Трупа</button>
                        <button className="btn-actors" onClick={this.showDirection}>Дирекція та художнє керівництво</button>
                    </div>

                    {people_in_theater}

                </div>
            </div>

        )
    }


}


module.exports.Actors = Actors;



