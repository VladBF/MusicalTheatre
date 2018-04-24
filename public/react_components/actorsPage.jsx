let React = require('react');



class Actors extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-actorsPage-container">
                <div className="row">
                    <h1>Actors PAGE</h1>
                </div>
            </div>

        )
    }


}


module.exports.Actors = Actors;



