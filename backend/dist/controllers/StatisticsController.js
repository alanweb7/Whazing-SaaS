'use strict';
const _0x85b4a0 = _0x1e55;
(function (_0x1a57e5, _0x1067b3) {
    const _0x3a81e2 = _0x1e55, _0x349e8c = _0x1a57e5();
    while (!![]) {
        try {
            const _0x49a720 = parseInt(_0x3a81e2(0x150)) / (-0x1 * -0x1fcb + 0x175 * 0x3 + -0x2429) + parseInt(_0x3a81e2(0x141)) / (-0x3 * -0x26f + -0x3fd * 0x4 + 0x3 * 0x2e3) * (parseInt(_0x3a81e2(0x12e)) / (0x53 * -0x3a + 0x5c * -0x58 + 0x3271 * 0x1)) + -parseInt(_0x3a81e2(0x130)) / (0x1149 * -0x2 + 0xbbc + -0x79e * -0x3) * (parseInt(_0x3a81e2(0x151)) / (0x29f * 0x9 + -0x77 * 0x33 + 0x23)) + -parseInt(_0x3a81e2(0x14a)) / (-0x988 + -0xf * 0x183 + 0xdf * 0x25) * (-parseInt(_0x3a81e2(0x147)) / (-0x37e * 0x8 + -0x1d8c + 0x1 * 0x3983)) + parseInt(_0x3a81e2(0x134)) / (-0x84d * 0x3 + 0x3 * 0x7b1 + 0x1dc) * (parseInt(_0x3a81e2(0x142)) / (-0xf9d + -0xe9b + -0x5 * -0x60d)) + -parseInt(_0x3a81e2(0x128)) / (-0x281 + -0x1 * -0x13ee + 0x1163 * -0x1) + parseInt(_0x3a81e2(0x152)) / (-0x31a + 0x11bd * -0x2 + 0x269f);
            if (_0x49a720 === _0x1067b3)
                break;
            else
                _0x349e8c['push'](_0x349e8c['shift']());
        } catch (_0x21ffc0) {
            _0x349e8c['push'](_0x349e8c['shift']());
        }
    }
}(_0x422b, 0x1263e1 + -0x96272 + 0x4f5a));
function _0x1e55(_0x3e5ed3, _0xb5fbda) {
    const _0x5d2eb5 = _0x422b();
    return _0x1e55 = function (_0x333859, _0x290b00) {
        _0x333859 = _0x333859 - (-0x1 * 0x805 + -0x178a + 0x68b * 0x5);
        let _0x59b530 = _0x5d2eb5[_0x333859];
        return _0x59b530;
    }, _0x1e55(_0x3e5ed3, _0xb5fbda);
}
var __importDefault = this && this[_0x85b4a0(0x14d) + _0x85b4a0(0x13f)] || function (_0x7c6959) {
    const _0x6ee781 = _0x85b4a0;
    return _0x7c6959 && _0x7c6959[_0x6ee781(0x13d)] ? _0x7c6959 : { 'default': _0x7c6959 };
};
const _0x2ba676 = {};
_0x2ba676[_0x85b4a0(0x14f)] = !![], Object[_0x85b4a0(0x145) + _0x85b4a0(0x155)](exports, _0x85b4a0(0x13d), _0x2ba676), exports[_0x85b4a0(0x14b) + _0x85b4a0(0x143)] = exports[_0x85b4a0(0x129) + _0x85b4a0(0x132)] = void (-0x1adc + -0xb8d * -0x2 + -0x3c2 * -0x1);
const TicketsQueuesService_1 = __importDefault(require(_0x85b4a0(0x14c) + _0x85b4a0(0x153) + _0x85b4a0(0x13b) + _0x85b4a0(0x13e) + _0x85b4a0(0x137))), ContactsReportService_1 = __importDefault(require(_0x85b4a0(0x14c) + _0x85b4a0(0x153) + _0x85b4a0(0x140) + _0x85b4a0(0x14e) + _0x85b4a0(0x149))), DashTicketsQueues = async (_0x2a5b5e, _0x1756f6) => {
        const _0x260fd9 = _0x85b4a0, _0x5ac9d4 = {};
        _0x5ac9d4[_0x260fd9(0x12a)] = function (_0x2528a7, _0x4f01cf) {
            return _0x2528a7 === _0x4f01cf;
        }, _0x5ac9d4[_0x260fd9(0x148)] = _0x260fd9(0x13a);
        const _0x5c39ec = _0x5ac9d4, {
                tenantId: _0x50d0e9,
                profile: _0x305303,
                id: _0x443213
            } = _0x2a5b5e[_0x260fd9(0x12f)], {
                dateStart: _0x2cbcb4,
                dateEnd: _0x2f8522,
                status: _0x4f9d03,
                queuesIds: _0x2bb45b,
                showAll: _0x4ff05c
            } = _0x2a5b5e[_0x260fd9(0x12d)], _0x33258a = await (0x2565 + -0x143c + -0x1 * 0x1129, TicketsQueuesService_1[_0x260fd9(0x131)])({
                'showAll': _0x5c39ec[_0x260fd9(0x12a)](_0x305303, _0x5c39ec[_0x260fd9(0x148)]) ? _0x4ff05c : ![],
                'dateStart': _0x2cbcb4,
                'dateEnd': _0x2f8522,
                'status': _0x4f9d03,
                'queuesIds': _0x2bb45b,
                'userId': _0x443213,
                'tenantId': _0x50d0e9
            });
        return _0x1756f6[_0x260fd9(0x144)](-0x1607 * -0x1 + 0x26b * 0x6 + -0x51 * 0x71)[_0x260fd9(0x136)](_0x33258a);
    };
exports[_0x85b4a0(0x129) + _0x85b4a0(0x132)] = DashTicketsQueues;
function _0x422b() {
    const _0x448259 = [
        '40hEizIR',
        '7868388qZiuZZ',
        's/Statisti',
        'ddds',
        'erty',
        '10324310DCbAiK',
        'DashTicket',
        'ytskP',
        'tenantId',
        'userId',
        'query',
        '243963dFNkaS',
        'user',
        '85912gnxgXR',
        'default',
        'sQueues',
        'startDate',
        '204616NEgkgJ',
        'tags',
        'json',
        'ice',
        'wallets',
        'profile',
        'admin',
        'cs/Tickets',
        'searchPara',
        '__esModule',
        'QueuesServ',
        'fault',
        'cs/Contact',
        '8MHGVLk',
        '9Zougoi',
        'port',
        'status',
        'defineProp',
        'endDate',
        '1113UIULqn',
        'lNZCA',
        'vice',
        '25686LRmoQa',
        'ContactsRe',
        '../service',
        '__importDe',
        'sReportSer',
        'value',
        '67912TSrujc'
    ];
    _0x422b = function () {
        return _0x448259;
    };
    return _0x422b();
}
const ContactsReport = async (_0x33fc00, _0x1578ec) => {
    const _0x2461ac = _0x85b4a0, {tenantId: _0x4cff5b} = _0x33fc00[_0x2461ac(0x12f)], {
            startDate: _0x342f4f,
            endDate: _0x5d061c,
            tags: _0x12c558,
            ddds: _0x3e0eac,
            searchParam: _0x3e5d44,
            wallets: _0x4cf9e9
        } = _0x33fc00[_0x2461ac(0x12d)], _0x383c26 = {};
    _0x383c26[_0x2461ac(0x133)] = _0x342f4f, _0x383c26[_0x2461ac(0x146)] = _0x5d061c, _0x383c26[_0x2461ac(0x135)] = _0x12c558, _0x383c26[_0x2461ac(0x154)] = _0x3e0eac, _0x383c26[_0x2461ac(0x138)] = _0x4cf9e9, _0x383c26[_0x2461ac(0x12b)] = _0x4cff5b, _0x383c26[_0x2461ac(0x139)] = _0x33fc00[_0x2461ac(0x12f)][_0x2461ac(0x139)], _0x383c26[_0x2461ac(0x12c)] = +_0x33fc00[_0x2461ac(0x12f)]['id'], _0x383c26[_0x2461ac(0x13c) + 'm'] = _0x3e5d44;
    const _0x4a4f3d = await (-0x2ab * 0x3 + -0x1930 + 0x2131, ContactsReportService_1[_0x2461ac(0x131)])(_0x383c26);
    return _0x1578ec[_0x2461ac(0x144)](0x1be * -0xe + -0x176a + -0x6 * -0x819)[_0x2461ac(0x136)](_0x4a4f3d);
};
exports[_0x85b4a0(0x14b) + _0x85b4a0(0x143)] = ContactsReport;