'use strict';
const _0x10884e = _0x4b64;
(function (_0x426516, _0x45675d) {
    const _0x26ea0d = _0x4b64, _0x291be0 = _0x426516();
    while (!![]) {
        try {
            const _0x1a51ae = parseInt(_0x26ea0d(0xa0)) / (0x962 + -0x1330 * 0x2 + 0x1cff) + -parseInt(_0x26ea0d(0x7c)) / (-0x9e * 0x25 + -0x210e + 0x37e6) + parseInt(_0x26ea0d(0x89)) / (0x11 * 0x1d + -0x8 * 0x3dd + 0xe7f * 0x2) * (-parseInt(_0x26ea0d(0xad)) / (-0x76f * 0x4 + -0x2 * -0xe78 + 0xd0)) + -parseInt(_0x26ea0d(0x82)) / (-0x19 * -0x163 + -0x1 * -0x17f8 + -0x3a9e) + parseInt(_0x26ea0d(0xa6)) / (-0xc * 0x25a + 0x22d0 + 0x2 * -0x349) * (-parseInt(_0x26ea0d(0xa7)) / (0x8 * 0x24f + 0x7 * -0x45a + 0xc05)) + parseInt(_0x26ea0d(0x80)) / (0x122b + 0x2681 + -0x38a4) * (-parseInt(_0x26ea0d(0xa1)) / (0x1 * 0x2263 + 0x3 * 0xb1a + 0x2 * -0x21d4)) + parseInt(_0x26ea0d(0x98)) / (0x956 + 0x9cb + -0x1317) * (parseInt(_0x26ea0d(0x93)) / (-0x191c + 0x1382 + 0x5a5));
            if (_0x1a51ae === _0x45675d)
                break;
            else
                _0x291be0['push'](_0x291be0['shift']());
        } catch (_0xd1ed24) {
            _0x291be0['push'](_0x291be0['shift']());
        }
    }
}(_0x5d39, -0x3 * 0x3c3a6 + -0x9bdb1 + 0x1c7bc0));
function _0x4b64(_0x1ecb49, _0x1f1f08) {
    const _0x35a764 = _0x5d39();
    return _0x4b64 = function (_0x109849, _0x357783) {
        _0x109849 = _0x109849 - (-0x1859 * 0x1 + -0x1 * -0x115 + 0xbda * 0x2);
        let _0x2baecd = _0x35a764[_0x109849];
        return _0x2baecd;
    }, _0x4b64(_0x1ecb49, _0x1f1f08);
}
var __importDefault = this && this[_0x10884e(0x7f) + _0x10884e(0xb6)] || function (_0x5dbe1f) {
    const _0x3e9307 = _0x10884e;
    return _0x5dbe1f && _0x5dbe1f[_0x3e9307(0xae)] ? _0x5dbe1f : { 'default': _0x5dbe1f };
};
const _0x21884e = {};
_0x21884e[_0x10884e(0x97)] = !![], Object[_0x10884e(0x78) + _0x10884e(0xaa)](exports, _0x10884e(0xae), _0x21884e), exports[_0x10884e(0x9d)] = exports[_0x10884e(0x7d)] = exports[_0x10884e(0x8b)] = void (-0x1 * -0x1493 + 0x2086 + 0x3519 * -0x1);
const AppError_1 = __importDefault(require(_0x10884e(0x83) + _0x10884e(0x75))), AuthUserSerice_1 = __importDefault(require(_0x10884e(0x8d) + _0x10884e(0xab) + _0x10884e(0x79) + _0x10884e(0x96))), SendRefreshToken_1 = require(_0x10884e(0x9c) + _0x10884e(0x91) + _0x10884e(0x94)), RefreshTokenService_1 = require(_0x10884e(0x8d) + _0x10884e(0xa4) + _0x10884e(0xb8) + _0x10884e(0x7b) + _0x10884e(0xb0)), socket_1 = require(_0x10884e(0x86) + _0x10884e(0x81)), User_1 = __importDefault(require(_0x10884e(0xa5) + _0x10884e(0x77))), store = async (_0xd89133, _0x2a5d76) => {
        const _0x59abb8 = _0x10884e, _0x35efe4 = {};
        _0x35efe4[_0x59abb8(0xb2)] = _0x59abb8(0x7d);
        const _0x3501c1 = _0x35efe4, _0x47975d = (-0x1ee4 + 0x1 * 0xc89 + 0x125b, socket_1[_0x59abb8(0x99)])(), {
                email: _0x46fbe5,
                password: _0x38311a
            } = _0xd89133[_0x59abb8(0x7e)], _0x29d8b4 = {};
        _0x29d8b4[_0x59abb8(0x71)] = _0x46fbe5, _0x29d8b4[_0x59abb8(0x8f)] = _0x38311a;
        const {
            token: _0x516342,
            user: _0x2586b9,
            refreshToken: _0x50d256,
            usuariosOnline: _0x3a7941
        } = await (0xd1d + -0xe48 + -0xd * -0x17, AuthUserSerice_1[_0x59abb8(0xa3)])(_0x29d8b4);
        (0x12 * 0x1c2 + -0x2682 + 0x6de, SendRefreshToken_1[_0x59abb8(0x76) + _0x59abb8(0x9f)])(_0x2a5d76, _0x50d256);
        const _0x42b270 = {};
        _0x42b270[_0x59abb8(0x84)] = _0x516342, _0x42b270[_0x59abb8(0x9b)] = _0x2586b9[_0x59abb8(0x87)], _0x42b270[_0x59abb8(0x71)] = _0x2586b9[_0x59abb8(0x71)], _0x42b270[_0x59abb8(0x95)] = _0x2586b9[_0x59abb8(0x95)], _0x42b270[_0x59abb8(0x9a)] = _0x2586b9[_0x59abb8(0x9a)], _0x42b270[_0x59abb8(0x73)] = _0x2586b9['id'], _0x42b270[_0x59abb8(0x72)] = _0x2586b9[_0x59abb8(0x72)], _0x42b270[_0x59abb8(0x88)] = _0x2586b9[_0x59abb8(0x88)], _0x42b270[_0x59abb8(0xa8) + _0x59abb8(0xa2)] = _0x3a7941, _0x42b270[_0x59abb8(0x85)] = _0x2586b9[_0x59abb8(0x85)];
        const _0x4d3172 = _0x42b270;
        return _0x47975d[_0x59abb8(0x8e)](_0x4d3172[_0x59abb8(0x72)] + _0x59abb8(0xb5), {
            'action': _0x3501c1[_0x59abb8(0xb2)],
            'data': {
                'username': _0x4d3172[_0x59abb8(0x9b)],
                'email': _0x4d3172[_0x59abb8(0x71)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), _0x2a5d76[_0x59abb8(0x9a)](-0x1569 + 0xa5d + 0xbd4)[_0x59abb8(0x70)](_0x4d3172);
    };
exports[_0x10884e(0x8b)] = store;
const update = async (_0xa61c2f, _0x51c59e) => {
    const _0xf4a4f4 = _0x10884e, _0x4efec2 = {};
    _0x4efec2[_0xf4a4f4(0xb7)] = _0xf4a4f4(0x8c) + _0xf4a4f4(0x9e);
    const _0x142c50 = _0x4efec2, _0x151b54 = _0xa61c2f[_0xf4a4f4(0xac)][_0xf4a4f4(0xb3)];
    if (!_0x151b54)
        throw new AppError_1[(_0xf4a4f4(0xa3))](_0x142c50[_0xf4a4f4(0xb7)], 0x15a3 + 0x1641 + -0x2a53);
    const {
        newToken: _0x458c2e,
        refreshToken: _0x4b6b92
    } = await (0x103 * -0x1d + 0x1dc1 * 0x1 + -0x6a, RefreshTokenService_1[_0xf4a4f4(0x92) + _0xf4a4f4(0x7a)])(_0x151b54);
    (0xaf9 + -0x932 + -0x5 * 0x5b, SendRefreshToken_1[_0xf4a4f4(0x76) + _0xf4a4f4(0x9f)])(_0x51c59e, _0x4b6b92);
    const _0x4a9c54 = {};
    return _0x4a9c54[_0xf4a4f4(0x84)] = _0x458c2e, _0x51c59e[_0xf4a4f4(0x70)](_0x4a9c54);
};
exports[_0x10884e(0x7d)] = update;
const logout = async (_0x27e39f, _0x5d6abc) => {
    const _0x5b5b92 = _0x10884e, _0x573422 = {};
    _0x573422[_0x5b5b92(0x90)] = _0x5b5b92(0xaf) + _0x5b5b92(0xb9), _0x573422[_0x5b5b92(0xb4)] = _0x5b5b92(0x7d), _0x573422[_0x5b5b92(0xa9)] = _0x5b5b92(0xb1) + 'T';
    const _0x32d363 = _0x573422, {userId: _0x381509} = _0x27e39f[_0x5b5b92(0x7e)];
    if (!_0x381509)
        throw new AppError_1[(_0x5b5b92(0xa3))](_0x32d363[_0x5b5b92(0x90)], -0x1bb * 0x9 + -0x213d * 0x1 + 0x50a * 0xa);
    const _0x383f06 = (-0x1d1e + 0x1bcd + 0x151, socket_1[_0x5b5b92(0x99)])(), _0x324fba = await User_1[_0x5b5b92(0xa3)][_0x5b5b92(0x74)](_0x381509);
    _0x324fba && _0x324fba[_0x5b5b92(0x7d)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    _0x383f06[_0x5b5b92(0x8e)](_0x324fba?.[_0x5b5b92(0x72)] + _0x5b5b92(0xb5), {
        'action': _0x32d363[_0x5b5b92(0xb4)],
        'data': {
            'username': _0x324fba?.[_0x5b5b92(0x87)],
            'email': _0x324fba?.[_0x5b5b92(0x71)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const _0x3d06c1 = {};
    return _0x3d06c1[_0x5b5b92(0x8a)] = _0x32d363[_0x5b5b92(0xa9)], _0x5d6abc[_0x5b5b92(0x70)](_0x3d06c1);
};
function _0x5d39() {
    const _0x12e4f4 = [
        '../helpers',
        'logout',
        'N_EXPIRED',
        'hToken',
        '541875ItVBkD',
        '4851DwUigf',
        'line',
        'default',
        's/AuthServ',
        '../models/',
        '26766FrJzwP',
        '847vVhpcJ',
        'usuariosOn',
        'Ugyqs',
        'erty',
        's/UserServ',
        'cookies',
        '4lTJfFR',
        '__esModule',
        'ERR_USER_N',
        'vice',
        'USER_LOGOU',
        'rJPMd',
        'jrt',
        'zeMZM',
        ':users',
        'fault',
        'fTXmA',
        'ices/Refre',
        'OT_FOUND',
        'json',
        'email',
        'tenantId',
        'userId',
        'findByPk',
        'AppError',
        'SendRefres',
        'User',
        'defineProp',
        'ices/AuthU',
        'enService',
        'shTokenSer',
        '1908166OEiWNl',
        'update',
        'body',
        '__importDe',
        '9032aMtPPY',
        'cket',
        '2951990VNHWaw',
        '../errors/',
        'token',
        'configs',
        '../libs/so',
        'name',
        'queues',
        '293706iKptFH',
        'message',
        'store',
        'ERR_SESSIO',
        '../service',
        'emit',
        'password',
        'wVFaz',
        '/SendRefre',
        'RefreshTok',
        '114477vhvDAN',
        'shToken',
        'profile',
        'serSerice',
        'value',
        '2630cQIzBw',
        'getIO',
        'status',
        'username'
    ];
    _0x5d39 = function () {
        return _0x12e4f4;
    };
    return _0x5d39();
}
exports[_0x10884e(0x9d)] = logout;