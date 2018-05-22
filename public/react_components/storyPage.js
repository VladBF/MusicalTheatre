let React = require('react');

let storyData = [];

(function () {
    $.ajax({
        url: '/storyList',
        method: 'GET',
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

function storyParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        storyData.push(result.result[i]);
    }
}

class Story extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'container history-main-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    null,
                    '\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0442\u0435\u0430\u0442\u0440\u0443'
                ),
                React.createElement(
                    'p',
                    null,
                    storyData[0].information
                )
            )
        );
    }
}
module.exports.Story = Story;
