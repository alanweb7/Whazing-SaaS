'use strict';
const _0x472d6c = _0x2aeb;
(function (_0x39bbfc, _0x2d25b3) {
    const _0x31f295 = _0x2aeb, _0x37c282 = _0x39bbfc();
    while (!![]) {
        try {
            const _0x1bd5fc = -parseInt(_0x31f295(0x1e0)) / (-0x19d * -0xe + 0x1578 + -0x2c0d) + parseInt(_0x31f295(0x1eb)) / (0x4b7 * 0x6 + 0x1 * -0x1656 + -0x5f2) + parseInt(_0x31f295(0x22a)) / (-0x72d * -0x2 + -0x2 * 0x9ec + 0x1 * 0x581) * (-parseInt(_0x31f295(0x256)) / (0x3a5 * -0x3 + 0x13 * -0x110 + 0x1 * 0x1f23)) + -parseInt(_0x31f295(0x245)) / (-0x241 * -0xa + -0x33c + -0x1349) + parseInt(_0x31f295(0x220)) / (0x572 * 0x3 + -0x563 * 0x4 + 0x53c) + -parseInt(_0x31f295(0x262)) / (0x1 * 0x1525 + 0xd4 * 0x4 + -0x186e) * (parseInt(_0x31f295(0x1d6)) / (-0x1f3 * 0x5 + -0x1f64 + -0x3 * -0xdb9)) + -parseInt(_0x31f295(0x1d7)) / (-0x1312 + -0x1 * -0xef + -0x122c * -0x1) * (-parseInt(_0x31f295(0x1ff)) / (-0x1c7a + -0x1417 + 0x309b * 0x1));
            if (_0x1bd5fc === _0x2d25b3)
                break;
            else
                _0x37c282['push'](_0x37c282['shift']());
        } catch (_0x37abae) {
            _0x37c282['push'](_0x37c282['shift']());
        }
    }
}(_0x166a, -0x113c6 + 0x2d526 + 0x1258d * 0x3));
var __importDefault = this && this[_0x472d6c(0x22d) + _0x472d6c(0x23f)] || function (_0x2337a6) {
    const _0x3f5d1e = _0x472d6c;
    return _0x2337a6 && _0x2337a6[_0x3f5d1e(0x1ec)] ? _0x2337a6 : { 'default': _0x2337a6 };
};
const _0x4e8670 = {};
_0x4e8670[_0x472d6c(0x235)] = !![], Object[_0x472d6c(0x249) + _0x472d6c(0x244)](exports, _0x472d6c(0x1ec), _0x4e8670), exports[_0x472d6c(0x209) + _0x472d6c(0x20d)] = exports[_0x472d6c(0x210)] = exports[_0x472d6c(0x246)] = exports[_0x472d6c(0x20f)] = exports[_0x472d6c(0x1ca)] = exports[_0x472d6c(0x248)] = void (0x3 * 0x2e5 + -0x2078 + 0x1 * 0x17c9);
const sequelize_1 = require(_0x472d6c(0x214)), socket_1 = require(_0x472d6c(0x250) + _0x472d6c(0x20d)), Message_1 = __importDefault(require(_0x472d6c(0x1d0) + _0x472d6c(0x217))), CreateLogTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x1f9) + _0x472d6c(0x23c) + _0x472d6c(0x231))), CreateTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x1f9) + _0x472d6c(0x259) + _0x472d6c(0x1d5))), DeleteTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x234) + _0x472d6c(0x203) + _0x472d6c(0x1d5))), ListTicketsService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x204) + _0x472d6c(0x201) + _0x472d6c(0x225))), ShowLogTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x23d) + _0x472d6c(0x20e) + _0x472d6c(0x1cd))), ShowTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x23d) + _0x472d6c(0x241) + _0x472d6c(0x25e))), UpdateTicketService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x22e) + _0x472d6c(0x1e8) + _0x472d6c(0x259) + _0x472d6c(0x1d5))), Whatsapp_1 = __importDefault(require(_0x472d6c(0x1d0) + _0x472d6c(0x23a))), AppError_1 = __importDefault(require(_0x472d6c(0x20c) + _0x472d6c(0x1e7))), CreateMessageSystemService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x228) + _0x472d6c(0x206) + _0x472d6c(0x1fb) + _0x472d6c(0x218) + _0x472d6c(0x25e))), pupa_1 = require(_0x472d6c(0x239) + _0x472d6c(0x208)), Ticket_1 = __importDefault(require(_0x472d6c(0x1d0) + _0x472d6c(0x1fc))), ListSettingsService_1 = __importDefault(require(_0x472d6c(0x222) + _0x472d6c(0x236) + _0x472d6c(0x1e4) + _0x472d6c(0x242) + _0x472d6c(0x1cd))), index = async (_0x2f41c5, _0x5afb57) => {
        const _0x5b373b = _0x472d6c, {
                tenantId: _0x1f432e,
                profile: _0x136ab3
            } = _0x2f41c5[_0x5b373b(0x202)], {
                searchParam: _0x1606cb,
                pageNumber: _0x435be0,
                status: _0x19b0fb,
                date: _0xed0fc8,
                showAll: _0x28163f,
                withUnreadMessages: _0x3d263f,
                queuesIds: _0x5210d5,
                isNotAssignedUser: _0x3ec8d7,
                includeNotQueueDefined: _0x2eb3b4
            } = _0x2f41c5[_0x5b373b(0x221)], _0x2c3388 = _0x2f41c5[_0x5b373b(0x202)]['id'], _0x4f4888 = {};
        _0x4f4888[_0x5b373b(0x1fd) + 'm'] = _0x1606cb, _0x4f4888[_0x5b373b(0x1fe)] = _0x435be0, _0x4f4888[_0x5b373b(0x232)] = _0x19b0fb, _0x4f4888[_0x5b373b(0x255)] = _0xed0fc8, _0x4f4888[_0x5b373b(0x215)] = _0x28163f, _0x4f4888[_0x5b373b(0x263)] = _0x2c3388, _0x4f4888[_0x5b373b(0x25b) + _0x5b373b(0x1e9)] = _0x3d263f, _0x4f4888[_0x5b373b(0x1cc)] = _0x5210d5, _0x4f4888[_0x5b373b(0x247) + _0x5b373b(0x254)] = _0x3ec8d7, _0x4f4888[_0x5b373b(0x1f4) + _0x5b373b(0x1e3) + 'ed'] = _0x2eb3b4, _0x4f4888[_0x5b373b(0x212)] = _0x1f432e, _0x4f4888[_0x5b373b(0x25f)] = _0x136ab3;
        const {
                tickets: _0x102b28,
                count: _0x2a9757,
                hasMore: _0x6e0070
            } = await (-0x1f9a + -0x2b * 0x4f + -0x3 * -0xef5, ListTicketsService_1[_0x5b373b(0x21b)])(_0x4f4888), _0xf3f91f = {};
        return _0xf3f91f[_0x5b373b(0x24f)] = _0x102b28, _0xf3f91f[_0x5b373b(0x21f)] = _0x2a9757, _0xf3f91f[_0x5b373b(0x25c)] = _0x6e0070, _0x5afb57[_0x5b373b(0x232)](-0x4 * -0x851 + 0x10ed + -0x70f * 0x7)[_0x5b373b(0x1f2)](_0xf3f91f);
    };
exports[_0x472d6c(0x248)] = index;
const store = async (_0x15acf9, _0xec4951) => {
    const _0x57b0f7 = _0x472d6c, _0x4a7641 = {};
    _0x4a7641[_0x57b0f7(0x1de)] = function (_0x4256e3, _0x19cb70) {
        return _0x4256e3 === _0x19cb70;
    }, _0x4a7641[_0x57b0f7(0x1f1)] = _0x57b0f7(0x1f7) + _0x57b0f7(0x21a) + 'ts', _0x4a7641[_0x57b0f7(0x219)] = _0x57b0f7(0x238), _0x4a7641[_0x57b0f7(0x1f5)] = _0x57b0f7(0x22c), _0x4a7641[_0x57b0f7(0x230)] = function (_0x36b92f, _0x2c261a) {
        return _0x36b92f === _0x2c261a;
    }, _0x4a7641[_0x57b0f7(0x261)] = _0x57b0f7(0x23b), _0x4a7641[_0x57b0f7(0x21c)] = function (_0x4c3a1b, _0xa7b551) {
        return _0x4c3a1b != _0xa7b551;
    }, _0x4a7641[_0x57b0f7(0x1e2)] = function (_0x3c0a9a, _0x5baa0f) {
        return _0x3c0a9a == _0x5baa0f;
    }, _0x4a7641[_0x57b0f7(0x1e1)] = _0x57b0f7(0x1f6) + _0x57b0f7(0x22b) + _0x57b0f7(0x1d9) + _0x57b0f7(0x1ee), _0x4a7641[_0x57b0f7(0x1dc)] = _0x57b0f7(0x1d2);
    const _0x1982bd = _0x4a7641, {tenantId: _0x29a924} = _0x15acf9[_0x57b0f7(0x202)], {
            contactId: _0x1a44cd,
            status: _0xd8d7db,
            userId: _0x515c91,
            channel: _0x5ec30f,
            channelId: _0x5e962f
        } = _0x15acf9[_0x57b0f7(0x1d4)], _0x110eaa = {};
    _0x110eaa[_0x57b0f7(0x232)] = _0x1982bd[_0x57b0f7(0x219)];
    const _0x2efa47 = {};
    _0x2efa47[_0x57b0f7(0x232)] = _0x1982bd[_0x57b0f7(0x1f5)];
    const _0x3399c1 = {
        [sequelize_1['Op']['or']]: [
            _0x110eaa,
            _0x2efa47
        ]
    };
    _0x3399c1[_0x57b0f7(0x226)] = _0x1a44cd, _0x3399c1[_0x57b0f7(0x212)] = _0x29a924, _0x3399c1[_0x57b0f7(0x1c9)] = _0x5ec30f;
    const _0xc388fb = {};
    _0xc388fb[_0x57b0f7(0x1ed)] = _0x3399c1;
    const _0x141725 = await Ticket_1[_0x57b0f7(0x21b)][_0x57b0f7(0x25d)](_0xc388fb), _0x452626 = await (-0x1261 + -0x4 * 0x2e9 + 0x1 * 0x1e05, ListSettingsService_1[_0x57b0f7(0x21b)])(_0x29a924), _0x451e92 = _0x1982bd[_0x57b0f7(0x230)](_0x452626?.[_0x57b0f7(0x24b)](_0x54c3c7 => {
            const _0x4f550c = _0x57b0f7;
            return _0x1982bd[_0x4f550c(0x1de)](_0x54c3c7[_0x4f550c(0x258)], _0x1982bd[_0x4f550c(0x1f1)]);
        })?.[_0x57b0f7(0x235)], _0x1982bd[_0x57b0f7(0x261)]) ? 'S' : 'N';
    if (_0x141725 && !!_0x141725[_0x57b0f7(0x263)] && _0x1982bd[_0x57b0f7(0x21c)](_0x141725[_0x57b0f7(0x263)], _0x515c91) && _0x1982bd[_0x57b0f7(0x1e2)](_0x451e92, 'S'))
        throw new AppError_1[(_0x57b0f7(0x21b))](_0x1982bd[_0x57b0f7(0x1e1)]);
    if (_0x141725)
        return _0xec4951[_0x57b0f7(0x232)](-0x8af + -0xb * 0x1a1 + 0x1b62)[_0x57b0f7(0x1f2)](_0x141725);
    const _0x47d182 = {};
    _0x47d182[_0x57b0f7(0x226)] = _0x1a44cd, _0x47d182[_0x57b0f7(0x232)] = _0xd8d7db, _0x47d182[_0x57b0f7(0x263)] = _0x515c91, _0x47d182[_0x57b0f7(0x212)] = _0x29a924, _0x47d182[_0x57b0f7(0x1c9)] = _0x5ec30f, _0x47d182[_0x57b0f7(0x1d8)] = _0x5e962f;
    const _0x363bda = await (0x1b * 0x3b + 0x4d5 * 0x2 + 0x53 * -0x31, CreateTicketService_1[_0x57b0f7(0x21b)])(_0x47d182);
    if (!_0x515c91) {
        const _0x5b11f2 = (-0x5 * -0x753 + 0x224 * -0x2 + 0x11 * -0x1e7, socket_1[_0x57b0f7(0x22f)])();
        _0x5b11f2['to'](_0x29a924 + ':' + _0x363bda[_0x57b0f7(0x232)])[_0x57b0f7(0x1e6)](_0x29a924 + _0x57b0f7(0x1cf), {
            'action': _0x1982bd[_0x57b0f7(0x1dc)],
            'ticket': _0x363bda
        });
    }
    return _0xec4951[_0x57b0f7(0x232)](-0xb7b + -0x1 * -0x1e2b + -0x11e8)[_0x57b0f7(0x1f2)](_0x363bda);
};
exports[_0x472d6c(0x1ca)] = store;
const show = async (_0x2633a3, _0x293aef) => {
    const _0x4d2d16 = _0x472d6c, _0x214563 = {};
    _0x214563[_0x4d2d16(0x1fa)] = _0x4d2d16(0x22c), _0x214563[_0x4d2d16(0x200)] = _0x4d2d16(0x1dd) + _0x4d2d16(0x229), _0x214563[_0x4d2d16(0x1d3)] = _0x4d2d16(0x21e);
    const _0x3246a5 = _0x214563, {ticketId: _0x28d364} = _0x2633a3[_0x4d2d16(0x24d)], {tenantId: _0x2b2d5f} = _0x2633a3[_0x4d2d16(0x202)], _0x1a099a = _0x2633a3[_0x4d2d16(0x202)]['id'], _0xda053a = {};
    _0xda053a['id'] = _0x28d364, _0xda053a[_0x4d2d16(0x212)] = _0x2b2d5f;
    const _0x193227 = await (-0x2621 + 0x1d * -0x71 + 0x32ee, ShowTicketService_1[_0x4d2d16(0x21b)])(_0xda053a), _0x15e1d0 = { [sequelize_1['Op'][_0x4d2d16(0x20a)]]: null }, _0x2c64a2 = {};
    _0x2c64a2[_0x4d2d16(0x226)] = _0x193227[_0x4d2d16(0x226)], _0x2c64a2[_0x4d2d16(0x1cb) + 'te'] = _0x15e1d0, _0x2c64a2[_0x4d2d16(0x232)] = _0x3246a5[_0x4d2d16(0x1fa)];
    const _0x323f0f = _0x2c64a2, _0x3ad409 = {};
    _0x3ad409[_0x4d2d16(0x1ed)] = _0x323f0f;
    const _0x2b3260 = await Message_1[_0x4d2d16(0x21b)][_0x4d2d16(0x257)](_0x3ad409);
    _0x193227[_0x4d2d16(0x1f8) + 'ue'](_0x3246a5[_0x4d2d16(0x200)], _0x2b3260);
    const _0x3fd1b7 = {};
    return _0x3fd1b7[_0x4d2d16(0x263)] = _0x1a099a, _0x3fd1b7[_0x4d2d16(0x1f3)] = _0x28d364, _0x3fd1b7[_0x4d2d16(0x1f0)] = _0x3246a5[_0x4d2d16(0x1d3)], await (-0x8e3 + -0x209c + 0x297f, CreateLogTicketService_1[_0x4d2d16(0x21b)])(_0x3fd1b7), _0x293aef[_0x4d2d16(0x232)](-0x1eaa + 0x33 * -0x21 + -0x2605 * -0x1)[_0x4d2d16(0x1f2)](_0x193227);
};
exports[_0x472d6c(0x20f)] = show;
const update = async (_0x1e332c, _0x13576f) => {
    const _0x3ce301 = _0x472d6c, _0x15af45 = {};
    _0x15af45[_0x3ce301(0x260)] = function (_0x2095f2, _0x11b3f2) {
        return _0x2095f2 === _0x11b3f2;
    }, _0x15af45[_0x3ce301(0x1ce)] = _0x3ce301(0x251), _0x15af45[_0x3ce301(0x213)] = _0x3ce301(0x253), _0x15af45[_0x3ce301(0x240)] = _0x3ce301(0x22c);
    const _0x19d19c = _0x15af45, {ticketId: _0x357bbf} = _0x1e332c[_0x3ce301(0x24d)], {tenantId: _0x2b85a2} = _0x1e332c[_0x3ce301(0x202)], _0x379f9e = _0x1e332c[_0x3ce301(0x202)]['id'], {isTransference: _0x5e4594} = _0x1e332c[_0x3ce301(0x1d4)], _0x33311c = { ..._0x1e332c[_0x3ce301(0x1d4)] };
    _0x33311c[_0x3ce301(0x212)] = _0x2b85a2;
    const _0x4da902 = _0x33311c, _0x4974b9 = {};
    _0x4974b9[_0x3ce301(0x237)] = _0x4da902, _0x4974b9[_0x3ce301(0x1f3)] = _0x357bbf, _0x4974b9[_0x3ce301(0x205) + _0x3ce301(0x227)] = _0x5e4594, _0x4974b9[_0x3ce301(0x24c) + _0x3ce301(0x243)] = _0x379f9e;
    const {ticket: _0x1c8560} = await (-0x53c * 0x7 + -0x7fe + 0x2ca2, UpdateTicketService_1[_0x3ce301(0x21b)])(_0x4974b9);
    if (_0x19d19c[_0x3ce301(0x260)](_0x4da902[_0x3ce301(0x232)], _0x19d19c[_0x3ce301(0x1ce)])) {
        const _0x32caf5 = {};
        _0x32caf5['id'] = _0x1c8560[_0x3ce301(0x252)], _0x32caf5[_0x3ce301(0x212)] = _0x2b85a2;
        const _0x5601b1 = {};
        _0x5601b1[_0x3ce301(0x1ed)] = _0x32caf5;
        const _0x52980b = await Whatsapp_1[_0x3ce301(0x21b)][_0x3ce301(0x25d)](_0x5601b1);
        if (_0x52980b?.[_0x3ce301(0x25a) + _0x3ce301(0x1e5)]) {
            const _0x5f105c = {};
            _0x5f105c[_0x3ce301(0x233)] = _0x1c8560[_0x3ce301(0x233)], _0x5f105c[_0x3ce301(0x21d)] = _0x1c8560[_0x3ce301(0x1ea)][_0x3ce301(0x21d)];
            const _0x4d39ee = (0x5 * 0x45b + -0x7 * 0x8b + -0x11fa, pupa_1[_0x3ce301(0x20b)])(_0x52980b[_0x3ce301(0x25a) + _0x3ce301(0x1e5)] || '', _0x5f105c), _0x2a66a7 = {};
            _0x2a66a7[_0x3ce301(0x1d4)] = _0x4d39ee, _0x2a66a7[_0x3ce301(0x264)] = !![], _0x2a66a7[_0x3ce301(0x1db)] = !![];
            const _0x4ea72b = {};
            _0x4ea72b[_0x3ce301(0x1ef)] = _0x2a66a7, _0x4ea72b[_0x3ce301(0x212)] = _0x2b85a2, _0x4ea72b[_0x3ce301(0x265)] = _0x1c8560, _0x4ea72b[_0x3ce301(0x263)] = _0x1e332c[_0x3ce301(0x202)]['id'], _0x4ea72b[_0x3ce301(0x24e)] = _0x19d19c[_0x3ce301(0x213)], _0x4ea72b[_0x3ce301(0x232)] = _0x19d19c[_0x3ce301(0x240)], _0x4ea72b[_0x3ce301(0x205)] = ![], _0x4ea72b[_0x3ce301(0x224)] = ![];
            const _0x5c5bf6 = _0x4ea72b;
            await (-0xa7 * -0x26 + 0xa00 + 0x2 * -0x1165, CreateMessageSystemService_1[_0x3ce301(0x21b)])(_0x5c5bf6);
            const _0x4e27fa = {};
            _0x4e27fa[_0x3ce301(0x216) + _0x3ce301(0x217)] = !![], await _0x1c8560[_0x3ce301(0x246)](_0x4e27fa);
        }
    }
    return _0x13576f[_0x3ce301(0x232)](-0x6 * 0x247 + -0x9ef + 0x4f * 0x4f)[_0x3ce301(0x1f2)](_0x1c8560);
};
exports[_0x472d6c(0x246)] = update;
function _0x166a() {
    const _0x3b5174 = [
        'sendType',
        'tickets',
        '../libs/so',
        'closed',
        'whatsappId',
        'bot',
        'nedUser',
        'date',
        '93428YDakdA',
        'findAll',
        'key',
        'ateTicketS',
        'farewellMe',
        'withUnread',
        'hasMore',
        'findOne',
        'vice',
        'profile',
        'sQYGI',
        'FvxBH',
        '174482bYKJsg',
        'userId',
        'fromMe',
        'ticket',
        'channel',
        'store',
        'scheduleDa',
        'queuesIds',
        'Service',
        'viODf',
        ':ticket',
        '../models/',
        'ticket\x20del',
        'create',
        'DArIO',
        'body',
        'ervice',
        '8PMqjVo',
        '261XYhTkU',
        'channelId',
        'para\x20outro',
        'eted',
        'read',
        'AnWcn',
        'scheduledM',
        'hsKCA',
        ':notificat',
        '476684qOXeLf',
        'FjoLM',
        'BolCh',
        'QueueDefin',
        'ervices/Li',
        'ssage',
        'emit',
        'AppError',
        'rvices/Upd',
        'Messages',
        'contact',
        '714766dtJuZC',
        '__esModule',
        'where',
        '\x20usuário',
        'msg',
        'type',
        'PQVQB',
        'json',
        'ticketId',
        'includeNot',
        'TILvJ',
        'Ticket\x20já\x20',
        'NotViewAss',
        'setDataVal',
        'rvices/Cre',
        'cRCqg',
        'eateMessag',
        'Ticket',
        'searchPara',
        'pageNumber',
        '278440XAhyjY',
        'REenb',
        'tTicketsSe',
        'user',
        'eteTicketS',
        'rvices/Lis',
        'isTransfer',
        'ervices/Cr',
        'message',
        'upa',
        'showLogsTi',
        'not',
        'pupa',
        '../errors/',
        'cket',
        'wLogTicket',
        'show',
        'remove',
        'DpTUC',
        'tenantId',
        'oDqhZ',
        'sequelize',
        'showAll',
        'isFarewell',
        'Message',
        'eSystemSer',
        'Adlqc',
        'ignedTicke',
        'default',
        'FWYnd',
        'name',
        'access',
        'count',
        '1320546hDXrHF',
        'query',
        '../service',
        'delete',
        'note',
        'rvice',
        'contactId',
        'ence',
        's/MessageS',
        'essages',
        '33sUEASQ',
        'atribuido\x20',
        'pending',
        '__importDe',
        's/TicketSe',
        'getIO',
        'oRxGg',
        'etService',
        'status',
        'protocol',
        'rvices/Del',
        'value',
        's/SettingS',
        'ticketData',
        'open',
        '../utils/p',
        'Whatsapp',
        'enabled',
        'ateLogTick',
        'rvices/Sho',
        'ion',
        'fault',
        'mtXey',
        'wTicketSer',
        'stSettings',
        'est',
        'erty',
        '1429630EToFyk',
        'update',
        'isNotAssig',
        'index',
        'defineProp',
        'vyfSW',
        'find',
        'userIdRequ',
        'params'
    ];
    _0x166a = function () {
        return _0x3b5174;
    };
    return _0x166a();
}
const remove = async (_0x36b074, _0x2a7e52) => {
    const _0x10fdb4 = _0x472d6c, _0x286a13 = {};
    _0x286a13[_0x10fdb4(0x24a)] = _0x10fdb4(0x223), _0x286a13[_0x10fdb4(0x211)] = _0x10fdb4(0x1d1) + _0x10fdb4(0x1da);
    const _0x42a757 = _0x286a13, {ticketId: _0x7329a7} = _0x36b074[_0x10fdb4(0x24d)], {tenantId: _0x5868da} = _0x36b074[_0x10fdb4(0x202)], _0x3995fb = _0x36b074[_0x10fdb4(0x202)]['id'], _0x4cd981 = {};
    _0x4cd981['id'] = _0x7329a7, _0x4cd981[_0x10fdb4(0x212)] = _0x5868da, _0x4cd981[_0x10fdb4(0x263)] = _0x3995fb;
    const _0x29c9dc = await (0x2c * 0x3a + -0x1 * -0x1f76 + -0x296e, DeleteTicketService_1[_0x10fdb4(0x21b)])(_0x4cd981), _0x43ebe5 = (-0x1 * 0x1feb + 0x1248 + 0xda3 * 0x1, socket_1[_0x10fdb4(0x22f)])();
    _0x43ebe5['to'](_0x5868da + ':' + _0x29c9dc[_0x10fdb4(0x232)])['to'](_0x5868da + ':' + _0x7329a7)['to'](_0x5868da + (_0x10fdb4(0x1df) + _0x10fdb4(0x23e)))[_0x10fdb4(0x1e6)](_0x5868da + _0x10fdb4(0x1cf), {
        'action': _0x42a757[_0x10fdb4(0x24a)],
        'ticketId': +_0x7329a7
    });
    const _0x3ffb77 = {};
    return _0x3ffb77[_0x10fdb4(0x207)] = _0x42a757[_0x10fdb4(0x211)], _0x2a7e52[_0x10fdb4(0x232)](0x1c2c * 0x1 + -0x23cc * 0x1 + -0x4 * -0x21a)[_0x10fdb4(0x1f2)](_0x3ffb77);
};
exports[_0x472d6c(0x210)] = remove;
function _0x2aeb(_0xfc695e, _0x2ef008) {
    const _0x4c784f = _0x166a();
    return _0x2aeb = function (_0x4e643b, _0x122795) {
        _0x4e643b = _0x4e643b - (0x14f6 + 0x1a19 + -0x2d46);
        let _0x1004fc = _0x4c784f[_0x4e643b];
        return _0x1004fc;
    }, _0x2aeb(_0xfc695e, _0x2ef008);
}
const showLogsTicket = async (_0x5afbca, _0x3119f1) => {
    const _0x88f710 = _0x472d6c, {ticketId: _0x12177e} = _0x5afbca[_0x88f710(0x24d)], _0x1c43da = {};
    _0x1c43da[_0x88f710(0x1f3)] = _0x12177e;
    const _0x33aa5d = await (-0x102c + -0x18c0 + 0x28ec, ShowLogTicketService_1[_0x88f710(0x21b)])(_0x1c43da);
    return _0x3119f1[_0x88f710(0x232)](-0x2 * -0x1350 + -0x8d6 + -0x1d02)[_0x88f710(0x1f2)](_0x33aa5d);
};
exports[_0x472d6c(0x209) + _0x472d6c(0x20d)] = showLogsTicket;