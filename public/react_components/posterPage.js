var _this = this;

let React = require('react');

let AboutPerformance = require('./AboutPerformancePage').AboutPerformance;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let MayArray = [];
let JuneArray = [];

const DataPoster = {
    poster: [],

    get: function (name) {
        return this.poster.filter(function (item) {
            return item.the_name_of_the_play === name;
        });
    }

};

(function () {
    $.ajax({
        url: '/repertoireList',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function dataParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        DataPoster.poster.push(result.result[i]);
    }
    for (let i = 0; i < 4; i++) {
        MayArray.push(result.result[i]);
    }
    for (let i = 4; i <= 8; i++) {
        JuneArray.push(result.result[i]);
    }
}

let May = () => {
    return React.createElement(
        'div',
        { id: 'testCarousel', className: 'carousel slide', 'data-ride': 'carousel' },
        React.createElement(
            'ol',
            { className: 'carousel-indicators' },
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '0', className: 'active' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '1' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '2' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '3' })
        ),
        React.createElement(
            'div',
            { className: 'carousel-inner' },
            React.createElement(
                'div',
                { className: 'item active' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${MayArray[0].the_name_of_the_play}`, key: 1, onClick: _this.UpScroll },
                    React.createElement('img', { src: MayArray[0].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                MayArray[0].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                MayArray[0].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${MayArray[1].the_name_of_the_play}`, key: 2, onClick: _this.UpScroll },
                    React.createElement('img', { src: MayArray[1].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                MayArray[1].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                MayArray[1].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${MayArray[2].the_name_of_the_play}`, key: 3, onClick: _this.UpScroll },
                    React.createElement('img', { src: MayArray[2].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                MayArray[2].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                MayArray[2].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${MayArray[3].the_name_of_the_play}`, key: 4, onClick: _this.UpScroll },
                    React.createElement('img', { src: MayArray[3].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                MayArray[3].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                MayArray[3].duration
                            )
                        )
                    )
                )
            )
        ),
        React.createElement(
            'a',
            { className: 'left carousel-control', href: '#testCarousel', role: 'button', 'data-slide': 'prev' },
            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'button-left' })
        ),
        React.createElement(
            'a',
            { className: 'right carousel-control', href: '#testCarousel', role: 'button', 'data-slide': 'next' },
            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'button-right' })
        )
    );
};

let June = () => {
    return React.createElement(
        'div',
        { id: 'testCarousel', className: 'carousel slide', 'data-ride': 'carousel' },
        React.createElement(
            'ol',
            { className: 'carousel-indicators' },
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '0', className: 'active' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '1' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '2' }),
            React.createElement('li', { 'data-target': '#testCarousel', 'data-slide-to': '3' })
        ),
        React.createElement(
            'div',
            { className: 'carousel-inner' },
            React.createElement(
                'div',
                { className: 'item active' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${JuneArray[0].the_name_of_the_play}`, key: 1, onClick: _this.UpScroll },
                    React.createElement('img', { src: JuneArray[0].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                JuneArray[0].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                JuneArray[0].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${JuneArray[1].the_name_of_the_play}`, key: 2, onClick: _this.UpScroll },
                    React.createElement('img', { src: JuneArray[1].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                JuneArray[1].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                JuneArray[1].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${JuneArray[2].the_name_of_the_play}`, key: 3, onClick: _this.UpScroll },
                    React.createElement('img', { src: JuneArray[2].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                JuneArray[2].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                JuneArray[2].duration
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    Link,
                    { to: `/repertoire/${JuneArray[3].the_name_of_the_play}`, key: 4, onClick: _this.UpScroll },
                    React.createElement('img', { src: JuneArray[3].image_main, className: 'carousel-one-img' }),
                    React.createElement(
                        'div',
                        { className: 'carousel-caption' },
                        React.createElement(
                            'div',
                            { className: 'name-carousel-container' },
                            React.createElement(
                                'h2',
                                { className: 'carousel-name-show' },
                                JuneArray[3].the_name_of_the_play
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'duration-carousel-container' },
                            React.createElement(
                                'h4',
                                { className: 'carousel-duration-show' },
                                '\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C - ',
                                JuneArray[3].duration
                            )
                        )
                    )
                )
            )
        ),
        React.createElement(
            'a',
            { className: 'left carousel-control', href: '#testCarousel', role: 'button', 'data-slide': 'prev' },
            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'button-left' })
        ),
        React.createElement(
            'a',
            { className: 'right carousel-control', href: '#testCarousel', role: 'button', 'data-slide': 'next' },
            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'button-right' })
        )
    );
};

class Poster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 0
        };

        this.showMay = this.showMay.bind(this);
        this.showJune = this.showJune.bind(this);
        this.UpScroll = this.UpScroll.bind(this);
    }

    showMay() {
        this.setState({
            month: 0
        });
    }
    showJune() {
        this.setState({
            month: 1
        });
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }
    render() {

        let month = null;

        if (this.state.month === 0) {
            month = React.createElement(May, null);
        } else {
            month = React.createElement(June, null);
        }
        return React.createElement(
            'div',
            { className: 'container main-homePage-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'poster-button-container' },
                    React.createElement(
                        'button',
                        { className: 'btn-may', onClick: this.showMay },
                        '\u0422\u0440\u0430\u0432\u0435\u043D\u044C'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn-june', onClick: this.showJune },
                        '\u0427\u0435\u0440\u0432\u0435\u043D\u044C'
                    )
                ),
                month
            )
        );
    }

}

class LookInfoAboutPoster extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Show = DataPoster.get(this.props.match.params.look_test);
        return React.createElement(
            'div',
            { className: 'aboutShow-container', id: 'aboutShow-container' },
            React.createElement(AboutPerformance, { infoShow: Show })
        );
    }
}

class MainPosterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container main-repertory-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    { className: 'poster-main' },
                    '\u0410\u0424\u0406\u0428\u0410'
                ),
                React.createElement(
                    Switch,
                    null,
                    React.createElement(Route, { exact: true, path: '/', component: Poster }),
                    React.createElement(Route, { path: '/repertoire/:look_test', component: LookInfoAboutPoster })
                )
            )
        );
    }

}

module.exports.MainPosterContainer = MainPosterContainer;
