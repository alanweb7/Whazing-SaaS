'use strict';
function _0x287d() {
    const _0x3ba199 = [
        'lJIgD',
        'erty',
        'YNmPl',
        'attributes',
        '../../erro',
        '1616135SbMdjZ',
        'fault',
        'findOne',
        '1978784bUSBmr',
        'email',
        'where',
        '6241288SDjdZx',
        '113899LrtDBx',
        'erRzm',
        '2470140TSRsPR',
        'name',
        'R_FOUND',
        'ERR_NO_USE',
        'value',
        'ls/User',
        'bwdpb',
        'defineProp',
        'default',
        '4661856xNgDaF',
        'configs',
        '2jqRdzd',
        'tenantId',
        'update',
        'rs/AppErro',
        'JmCuK',
        '__esModule',
        '5462352KThWah',
        '../../mode',
        '__importDe',
        'profile'
    ];
    _0x287d = function () {
        return _0x3ba199;
    };
    return _0x287d();
}
const _0x358028 = _0x36b9;
(function (_0x391d38, _0x441766) {
    const _0x44ca00 = _0x36b9, _0x27743a = _0x391d38();
    while (!![]) {
        try {
            const _0x4362f2 = -parseInt(_0x44ca00(0xcb)) / (-0x970 + -0xc37 * -0x3 + -0x1b34) * (parseInt(_0x44ca00(0xd8)) / (-0x1eba + 0x4 * -0x1d5 + -0x8 * -0x4c2)) + -parseInt(_0x44ca00(0xcd)) / (-0x4db + 0x1 * -0x1f75 + 0x1 * 0x2453) + -parseInt(_0x44ca00(0xea)) / (0x26bf + 0xb * 0x9d + -0x2d7a) + -parseInt(_0x44ca00(0xe7)) / (-0x188f + -0xce7 + 0x77f * 0x5) + parseInt(_0x44ca00(0xd6)) / (-0x95f + 0xe6 + 0x87f) + parseInt(_0x44ca00(0xde)) / (0x1 * 0xf31 + -0x329 * 0x9 + 0xd47) + parseInt(_0x44ca00(0xca)) / (-0x1a46 + -0x2110 + 0x3b5e);
            if (_0x4362f2 === _0x441766)
                break;
            else
                _0x27743a['push'](_0x27743a['shift']());
        } catch (_0x1795ad) {
            _0x27743a['push'](_0x27743a['shift']());
        }
    }
}(_0x287d, 0x6cf26 + 0x5b62c + -0x3a2d3));
var __importDefault = this && this[_0x358028(0xe0) + _0x358028(0xe8)] || function (_0xd2d196) {
    const _0x1917e7 = _0x358028;
    return _0xd2d196 && _0xd2d196[_0x1917e7(0xdd)] ? _0xd2d196 : { 'default': _0xd2d196 };
};
const _0x552e31 = {};
function _0x36b9(_0x1c6498, _0x1ef292) {
    const _0x3098b2 = _0x287d();
    return _0x36b9 = function (_0x490d83, _0x323bd3) {
        _0x490d83 = _0x490d83 - (-0x11d6 + -0x1 * 0x128b + -0x43 * -0x8e);
        let _0x56e532 = _0x3098b2[_0x490d83];
        return _0x56e532;
    }, _0x36b9(_0x1c6498, _0x1ef292);
}
_0x552e31[_0x358028(0xd1)] = !![], Object[_0x358028(0xd4) + _0x358028(0xe3)](exports, _0x358028(0xdd), _0x552e31);
const AppError_1 = __importDefault(require(_0x358028(0xe6) + _0x358028(0xdb) + 'r')), User_1 = __importDefault(require(_0x358028(0xdf) + _0x358028(0xd2))), UpdateUserConfigsService = async ({
        userConfigs: _0x56ab79,
        userId: _0x1eae3b,
        tenantId: _0x1eb484
    }) => {
        const _0x306e2f = _0x358028, _0xa927eb = {};
        _0xa927eb[_0x306e2f(0xe4)] = _0x306e2f(0xce), _0xa927eb[_0x306e2f(0xdc)] = _0x306e2f(0xeb), _0xa927eb[_0x306e2f(0xd3)] = _0x306e2f(0xe1), _0xa927eb[_0x306e2f(0xe2)] = _0x306e2f(0xd7), _0xa927eb[_0x306e2f(0xcc)] = _0x306e2f(0xd0) + _0x306e2f(0xcf);
        const _0x2b286b = _0xa927eb, _0x11865c = {};
        _0x11865c['id'] = _0x1eae3b, _0x11865c[_0x306e2f(0xd9)] = _0x1eb484;
        const _0x1bccf6 = {};
        _0x1bccf6[_0x306e2f(0xc9)] = _0x11865c, _0x1bccf6[_0x306e2f(0xe5)] = [
            _0x2b286b[_0x306e2f(0xe4)],
            'id',
            _0x2b286b[_0x306e2f(0xdc)],
            _0x2b286b[_0x306e2f(0xd3)],
            _0x2b286b[_0x306e2f(0xe2)]
        ];
        const _0x40678f = await User_1[_0x306e2f(0xd5)][_0x306e2f(0xe9)](_0x1bccf6);
        if (!_0x40678f)
            throw new AppError_1[(_0x306e2f(0xd5))](_0x2b286b[_0x306e2f(0xcc)], -0x2664 + 0xb6 * -0x1d + -0x42 * -0xeb);
        await _0x40678f[_0x306e2f(0xda)]({
            'configs': {
                ..._0x40678f[_0x306e2f(0xd7)],
                ..._0x56ab79
            }
        });
    };
exports[_0x358028(0xd5)] = UpdateUserConfigsService;