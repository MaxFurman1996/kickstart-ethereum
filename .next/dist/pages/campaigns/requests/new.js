'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxfurman/Desktop/SolidityMyFolder/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                console.log(_this.state.errorMessage);

                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUzs7QUFDaEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUliOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFRjttQkFBUSxBQUNHLEFBQ1A7eUJBRkksQUFFUyxBQUNiO3VCQUhJLEFBR08sQUFDWDtxQkFKSSxBQUlLLEFBQ1Q7MEIsQUFMSSxBQUtVO0FBTFYsQUFDSixpQixBQVlKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjswRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFDdkM7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjs4Q0FDSyxNQUpuQyxBQUl3QyxPQUp4QyxBQUlDLDBCQUpELEFBSUMsYUFKRCxBQUljLG9CQUpkLEFBSWMsT0FKZCxBQUlxQix3QkFKckIsQUFJcUI7Z0RBSnJCO2dEQUFBO3VDQU1vQixjQUFBLEFBQUssSUFOekIsQUFNb0IsQUFBUzs7aUNBQTFCO0FBTkgsb0RBQUE7Z0RBQUE7dUNBT0csU0FBQSxBQUFTLFFBQVQsQUFDRCxjQURDLEFBQ2EsYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FEM0MsQUFDMEIsQUFBd0IsVUFEbEQsQUFDNEQsV0FENUQsQUFFRCxLQUFLLEVBQUMsTUFBTSxTQVRkLEFBT0csQUFFSSxBQUFPLEFBQVM7O2lDQUMxQjsrQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFWdkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFaM0IsQUFZSCxBQUFjLEFBQW9COztpQ0FFdEM7d0NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUV2Qjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FoQlQsQUFnQlAsQUFBYyxBQUFXOztpQ0FoQmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUJIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLEFBRUosMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FEN0IsQUFDTixBQUFjLEFBQTRCO0FBSGxEOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGM0Q7OzhCQUFBO2dDQVpSLEFBVUksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4QkFBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BRDNCLEFBQ04sQUFBYyxBQUEwQjtBQUhoRDs7OEJBQUE7Z0NBcEJSLEFBa0JJLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0EzQkosQUEyQkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWxDWixBQUNJLEFBS0ksQUE0QkksQUFNZjs7Ozs7bUgsQUFqRTRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQjtrRUFDRCxFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBWlUsQUE4RXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4ZnVybWFuL0Rlc2t0b3AvU29saWRpdHlNeUZvbGRlci9raWNrc3RhcnQifQ==