let React = require('react');

class Repertoire extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'container main-repertoirePage-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    null,
                    '\u0420\u0435\u043F\u0435\u0440\u0442\u0443\u0430\u0440'
                )
            )
        );
    }
}
module.exports.Repertoire = Repertoire;
