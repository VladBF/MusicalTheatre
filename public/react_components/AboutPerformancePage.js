let React = require('react');

class AboutPerformance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let data = this.props.infoShow;
        return React.createElement(
            "div",
            { className: "container main-homePage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    data[0].the_name_of_the_play
                ),
                React.createElement(
                    "h1",
                    null,
                    data[0].description_of_the_play
                )
            )
        );
    }

}

module.exports.AboutPerformance = AboutPerformance;
