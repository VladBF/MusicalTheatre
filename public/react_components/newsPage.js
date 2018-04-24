let React = require('react');

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "container main-newsPage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    "News Page"
                )
            )
        );
    }

}

module.exports.News = News;
