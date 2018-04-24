let React = require('react');

class Story extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    null,
                    '\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0442\u0435\u0430\u0442\u0440\u0443'
                )
            )
        );
    }
}
module.exports.Story = Story;
