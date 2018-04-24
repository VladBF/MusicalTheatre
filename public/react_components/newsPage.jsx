let React = require('react');



class News extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-newsPage-container">
                <div className="row">
                    <h1>News Page</h1>
                </div>
            </div>

        )
    }


}


module.exports.News = News;



