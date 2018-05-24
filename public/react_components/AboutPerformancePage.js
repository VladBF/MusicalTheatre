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
                    "div",
                    { className: "name-play" },
                    React.createElement("img", { src: "../" + data[0].image_main, alt: "", className: "image-main-play" }),
                    React.createElement("img", { src: "../../image/ornament/ornament_11.png", alt: "", className: "ornament-name-play-left" }),
                    React.createElement("img", { src: "../../image/ornament/ornament_12.png", alt: "", className: "ornament-name-play-right" }),
                    React.createElement(
                        "h1",
                        null,
                        data[0].the_name_of_the_play
                    ),
                    React.createElement("img", { src: "../../image/ornament/ornament_9.png", alt: "", className: "ornament-name-play" })
                ),
                React.createElement(
                    "div",
                    { className: "play-author" },
                    React.createElement(
                        "h1",
                        null,
                        data[0].author
                    ),
                    React.createElement("img", { src: "../../image/ornament/ornament_8.png", alt: "", className: "ornament-author-bottom" })
                ),
                React.createElement(
                    "div",
                    { className: "container-play-genre" },
                    React.createElement(
                        "p",
                        { className: "play-genre" },
                        data[0].genre_name
                    )
                ),
                React.createElement(
                    "div",
                    { className: "people" },
                    React.createElement(
                        "p",
                        null,
                        data[0].staging_of_the_play_1
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].staging_of_the_play_2
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].staging_of_the_play_3
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].staging_of_the_play_4
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].staging_of_the_play_5
                    ),
                    React.createElement("img", { src: "../../image/ornament/ornament_1_2.png", alt: "", className: "ornament-people-bottom" })
                ),
                React.createElement(
                    "div",
                    { className: "premiere" },
                    React.createElement(
                        "p",
                        null,
                        "\u041F\u0440\u0435\u043C'\u0454\u0440\u0430 \u043F'\u0454\u0441\u0438:",
                        data[0].date_of_the_premiere
                    ),
                    React.createElement(
                        "p",
                        { className: "duration" },
                        "\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C:",
                        data[0].duration
                    )
                ),
                React.createElement(
                    "div",
                    { className: "container-play-description" },
                    React.createElement("img", { src: "../../image/ornament/ornament_5_2.png", alt: "", className: "ornament-description-top" }),
                    React.createElement(
                        "h1",
                        { className: "play-description" },
                        data[0].description_of_the_play
                    ),
                    React.createElement("img", { src: "../../image/ornament/ornament_5.png", alt: "", className: "ornament-description-bottom" })
                ),
                React.createElement(
                    "div",
                    { className: "role-and-actors" },
                    React.createElement(
                        "h1",
                        { className: "the-characters" },
                        "\u0414\u0456\u0439\u043E\u0432\u0456 \u043E\u0441\u043E\u0431\u0438 :"
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_1,
                        data[0].actor_name_1_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_2,
                        data[0].actor_name_2_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_3,
                        data[0].actor_name_3_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_4,
                        data[0].actor_name_4_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_5,
                        data[0].actor_name_5_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_6,
                        data[0].actor_name_6_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_7,
                        data[0].actor_name_7_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_8,
                        data[0].actor_name_8_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_9,
                        data[0].actor_name_9_id
                    ),
                    React.createElement(
                        "p",
                        null,
                        data[0].role_10,
                        data[0].actor_name_10_id
                    ),
                    React.createElement("img", { src: "../../image/ornament/ornament_1_2.png", alt: "", className: "ornament-actor-and-role-bottom" })
                ),
                React.createElement(
                    "ul",
                    { className: "image-main-play-photo" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_1, alt: "", className: "image-one" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_2, alt: "", className: "image-one" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_3, alt: "", className: "image-one" })
                    )
                ),
                React.createElement(
                    "ul",
                    { className: "image-main-play-photo" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_4, alt: "", className: "image-one" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_5, alt: "", className: "image-one" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("img", { src: "../" + data[0].image_6, alt: "", className: "image-one" })
                    )
                ),
                React.createElement("div", null)
            )
        );
    }

}

module.exports.AboutPerformance = AboutPerformance;
