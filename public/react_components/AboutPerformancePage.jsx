let React = require('react');






class AboutPerformance extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let data = this.props.infoShow;
        return(
            <div className="container main-homePage-container">
                <div className="row">
                    <h1>{data[0].the_name_of_the_play}</h1>
                    <h1>{data[0].description_of_the_play}</h1>
                        <div>

                        </div>
                </div>
            </div>

        )
    }


}


module.exports.AboutPerformance = AboutPerformance;



