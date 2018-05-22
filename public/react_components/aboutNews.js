let React = require('react');

class AboutNew extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.infoNews;
        return React.createElement(
            "div",
            { className: "container main-newsPage-container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "about-name-information-container" },
                    React.createElement(
                        "h3",
                        { className: "about-name-information" },
                        data[0].name_information
                    )
                ),
                React.createElement(
                    "div",
                    { className: "date-news-container" },
                    React.createElement(
                        "h3",
                        { className: "date-news-about" },
                        data[0].date
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12 news-element" },
                    data[0].image_1 === null ? React.createElement("span", null) : React.createElement("img", { src: "../" + data[0].image_1, alt: "", className: "img-about-news" }),
                    data[0].image_2 === null ? React.createElement("span", null) : React.createElement("img", { src: "../" + data[0].image_2, alt: "", className: "img-about-news" }),
                    data[0].image_3 === null ? React.createElement("span", null) : React.createElement("img", { src: "../" + data[0].image_3, alt: "", className: "img-about-news" }),
                    React.createElement(
                        "div",
                        { className: "about-information-container" },
                        React.createElement("img", { src: "../../image/ornament/ornament_5_2.png", alt: "", className: "ornament-information-top" }),
                        React.createElement(
                            "h5",
                            { className: "about-information-news" },
                            data[0].information
                        ),
                        React.createElement("img", { src: "../../image/ornament/ornament_5.png", alt: "", className: "ornament-information-bottom" })
                    ),
                    data[0].image_4 === null ? React.createElement("span", null) : React.createElement("img", { src: "../" + data[0].image_4, alt: "", className: "img-about-news_bottom" }),
                    data[0].image_5 === null ? React.createElement("span", null) : React.createElement("img", { src: "../" + data[0].image_5, alt: "", className: "img-about-news_bottom" })
                )
            )
        );
    }

}

module.exports.AboutNew = AboutNew;
