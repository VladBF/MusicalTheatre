let React = require('react');



class Contacts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-contactsPage-container">
                <div className="row">
                    <h1>Контактна інформація</h1>
                </div>
            </div>

        )
    }


}


module.exports.Contacts = Contacts;



