let React = require('react');



class Repertoire extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className='container main-repertoirePage-container'>
                <div className="row">
                    <h1>Репертуар</h1>
                </div>
            </div>
        )

    }
}
module.exports.Repertoire = Repertoire;