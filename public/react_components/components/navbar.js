
let React = require('react');
let ReactDOM = require('react-dom');
let Link = require('react-router-dom').Link;

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.ReloadScript = this.ReloadScript.bind(this);
    }

    ReloadScript() {

        let carousel = $('#carousel').detach();
        $('body').append('<script src="/js/carousel.js" id="carousel"></script>');
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container main-container', id: 'navbar' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'navbar navbar-inverse navbar-fixed-top  col-xs-12 col-md-12 col-sm-12' },
                    React.createElement(
                        'div',
                        { className: 'container' },
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse navba-children-main-container', id: 'responsive-menu' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-list' },
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/news' },
                                        '\u041D\u043E\u0432\u0438\u043D\u0438'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/actors' },
                                        '\u0421\u043A\u043B\u0430\u0434 \u0442\u0435\u0430\u0442\u0440\u0443'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/repertoire' },
                                        '\u0420\u0435\u043F\u0435\u0440\u0442\u0443\u0430\u0440'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links', onClick: this.ReloadScript },
                                    React.createElement(
                                        Link,
                                        { to: '/' },
                                        React.createElement(
                                            'div',
                                            { className: 'navbar-mask-container' },
                                            React.createElement('img', { src: '../../image/mask.png', alt: '', className: 'mask' })
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/story' },
                                        '\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0422\u0435\u0430\u0442\u0440\u0443'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/tickets' },
                                        '\u041A\u0432\u0438\u0442\u043A\u0438'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-links' },
                                    React.createElement(
                                        Link,
                                        { to: '/contacts' },
                                        '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }

}

module.exports.Navbar = Navbar;
