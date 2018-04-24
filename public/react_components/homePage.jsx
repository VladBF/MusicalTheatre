let React = require('react');



class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-homePage-container">
                <div className="row">
                    <h1>HOME PAGE</h1>
                </div>
            </div>

        )
    }


}


module.exports.Home = Home;



