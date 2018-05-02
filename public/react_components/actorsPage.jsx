let React = require('react');




let ActorsData = [];


let ActorsPeople = () => {
    return(
        <React.Fragment>
            {
                ActorsData.map((item,i) =>
                    <div className="col-md-3 col-xs-6 col-sm-6 actor-block" key={i} data-id={item.actor_id}>
                        <div className="actor-img-container">
                            <img src={item.image} alt="" className="actor-img"/>
                        </div>
                        <div className="actor-name-container">
                            <p className="actor-position">
                                {item.name_position}
                            </p>


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
        <h1>Дирекція</h1>
    )
};

let PeopleTheater = () => {
    return(
        <h1>Люди театру</h1>
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
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();

function dataParser(result){
    for(let i = 0; i < result.result.length; i++){
        ActorsData.push(result.result[i]);
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
        this.showPeopleTheater = this.showPeopleTheater.bind(this);
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
    showPeopleTheater(){
        this.setState({
            collective:2
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
                    <div className="actors-button-container">
                        <button className="btn btn-primary" onClick={this.showActors}>Трупа</button>
                        <button className="btn btn-primary" onClick={this.showDirection}>Дирекція та художнє керівництво</button>
                        <button className="btn btn-primary" onClick={this.showPeopleTheater}>Люди театру</button>
                    </div>

                    {people_in_theater}

                </div>
            </div>

        )
    }


}


module.exports.Actors = Actors;



