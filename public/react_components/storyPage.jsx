let React = require('react');

let storyData = [];

(function () {
    $.ajax({
        url:'/storyList',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            storyParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();


function storyParser(result){
    for(let i = 0; i < result.result.length; i++){
        storyData.push(result.result[i]);
    }
}

class Story extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className='container history-main-container'>
                <div className="row">
                    <h1>Історія театру</h1>
                    <p>{storyData[0].information}</p>

                </div>
            </div>
        )

    }
}
module.exports.Story = Story;