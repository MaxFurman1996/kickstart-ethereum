'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xBeF64d6efe46AD9931dfEA7C24fE1602f266a9DB');

exports.default = factory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImZhY3RvcnkiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFHQSxJQUFNLFVBQVUsY0FBSyxBQUFMLElBQVMsQUFBVCxTQUNkLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURjLFlBRWQsQUFGYyxBQUFoQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heGZ1cm1hbi9EZXNrdG9wL1NvbGlkaXR5TXlGb2xkZXIva2lja3N0YXJ0In0=