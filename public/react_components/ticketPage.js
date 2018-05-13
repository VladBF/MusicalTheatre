let React = require('react');

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.orderTicket = this.orderTicket.bind(this);
    }

    orderTicket() {
        document.location.href = "https://kontramarka.ua/ru/theatre";
    }
    render() {
        return React.createElement(
            'div',
            { className: 'container ticket-main-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-12 order-ticket-container' },
                    React.createElement(
                        'div',
                        { className: 'about-price-ticket-container' },
                        React.createElement(
                            'h1',
                            { className: 'main-price-name' },
                            '\u0412\u0410\u0420\u0422\u0406\u0421\u0422\u042C \u041A\u0412\u0418\u0422\u041A\u0406\u0412'
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top' }),
                        React.createElement(
                            'div',
                            { className: 'price-info-container' },
                            React.createElement(
                                'h2',
                                { className: 'price-name' },
                                '\u0414\u0415\u041D\u041D\u0406 \u0412\u0418\u0421\u0422\u0410\u0412\u0418 \u0423 \u0411\u0423\u0414\u041D\u0406 \u0414\u041D\u0406:'
                            ),
                            React.createElement(
                                'h2',
                                { className: 'price' },
                                '30-90 \u0433\u0440\u043D.'
                            ),
                            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'ornament-left' }),
                            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'ornament-right' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom' }),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top' }),
                        React.createElement(
                            'div',
                            { className: 'price-info-container' },
                            React.createElement(
                                'h2',
                                { className: 'price-name' },
                                '\u0414\u0415\u041D\u041D\u0406 \u0412\u0418\u0421\u0422\u0410\u0412\u0418 \u0423 \u0412\u0418\u0425\u0406\u0414\u041D\u0406 \u0422\u0410 \u0421\u0412\u042F\u0422\u041A\u041E\u0412\u0406 \u0414\u041D\u0406:'
                            ),
                            React.createElement(
                                'h2',
                                { className: 'price' },
                                '30-200 \u0433\u0440\u043D.'
                            ),
                            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'ornament-left' }),
                            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'ornament-right' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom' }),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top' }),
                        React.createElement(
                            'div',
                            { className: 'price-info-container' },
                            React.createElement(
                                'h2',
                                { className: 'price-name' },
                                '\u0412\u0415\u0427\u0406\u0420\u041D\u0406 \u0412\u0418\u0421\u0422\u0410\u0412\u0418:'
                            ),
                            React.createElement(
                                'h2',
                                { className: 'price' },
                                '30-200 \u0433\u0440\u043D'
                            ),
                            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'ornament-left' }),
                            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'ornament-right' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom' }),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top' }),
                        React.createElement(
                            'div',
                            { className: 'price-info-container' },
                            React.createElement(
                                'h2',
                                { className: 'price-name' },
                                '\u0412\u0418\u0421\u0422\u0410\u0412\u0418 \u0412 \u0410\u0420\u0422\u0418\u0421\u0422\u0418\u0427\u041D\u0406\u0419 \u0412\u0406\u0422\u0410\u041B\u042C\u041D\u0406:'
                            ),
                            React.createElement(
                                'h2',
                                { className: 'price' },
                                '80 \u0433\u0440\u043D.'
                            ),
                            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'ornament-left' }),
                            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'ornament-right' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom' }),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top' }),
                        React.createElement(
                            'div',
                            { className: 'price-info-container' },
                            React.createElement(
                                'h2',
                                { className: 'price-name' },
                                '\u0414\u0456\u0442\u0438 \u0434\u043E 3-\u0445 \u0440\u043E\u043A\u0456\u0432 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0438 \u043D\u0430 \u0432\u0438\u0441\u0442\u0430\u0432\u0438 \u0431\u0435\u0437 \u043A\u0432\u0438\u0442\u043A\u0430.'
                            ),
                            React.createElement('img', { src: '../../image/ornament/ornament_7.png', alt: '', className: 'ornament-left-children' }),
                            React.createElement('img', { src: '../../image/ornament/ornament_7_2.png', alt: '', className: 'ornament-right-children' })
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom' }),
                        React.createElement(
                            'div',
                            { className: 'order-ticket-button-container' },
                            React.createElement(
                                'button',
                                { className: 'button-ornament-1', onClick: this.orderTicket },
                                '\u0417\u0410\u041C\u041E\u0412\u0418\u0422\u0418 \u041A\u0412\u0418\u0422\u041E\u041A'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'floor-plan-container' },
                        React.createElement(
                            'h1',
                            { className: 'main-price-name' },
                            '\u041F\u041B\u0410\u041D \u0413\u041B\u042F\u0414\u0410\u0427\u0415\u0412\u041E\u0407 \u0417\u0410\u041B\u0418'
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top-viewers' }),
                        React.createElement('img', { src: '../image/plan1.jpg', alt: '\u041F\u043B\u0430\u043D \u0433\u043B\u044F\u0434\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0437\u0430\u043B\u0443', className: 'floor-plan floor-plan1-img' })
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom-viewers' }),
                    React.createElement(
                        'div',
                        { className: 'floor-plan-container' },
                        React.createElement(
                            'h1',
                            { className: 'main-price-name' },
                            '\u041F\u041B\u0410\u041D \u0410\u0420\u0422\u0418\u0421\u0422\u0418\u0427\u041D\u041E\u0407 \u0412\u0406\u0422\u0410\u041B\u042C\u041D\u0406'
                        ),
                        React.createElement('img', { src: '../../image/ornament/ornament_6.png', alt: '', className: 'ornament-white-top-viewers' }),
                        React.createElement('img', { src: '../image/plan2.jpg', alt: '\u041F\u043B\u0430\u043D \u0430\u0440\u0442\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0457 \u0432\u0456\u0442\u0430\u043B\u044C\u043D\u0456', className: 'floor-plan floor-plan2-img' })
                    ),
                    React.createElement('img', { src: '../../image/ornament/ornament_6_2.png', alt: '', className: 'ornament-white-bottom-viewers' })
                )
            )
        );
    }
}
module.exports.Ticket = Ticket;
