let React = require('react');



class Story extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className='container'>
                <div className="row">
                    <h1>Історія театру</h1>
                </div>
            </div>
        )

    }
}
module.exports.Story = Story;