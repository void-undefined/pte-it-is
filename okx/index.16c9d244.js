( () => {
    var e = {
        77704: (e, t, n) => {
            "use strict";
            var a = n(87363)
              , r = n.n(a);
            const s = ReactRouterDOM;
            n(75139);
            var i = n(73271)
              , o = n(53949)
              , c = (n(78599),
            n(74165))
              , l = n(15861)
              , u = n(70885)
              , d = n(96723)
              , _ = n(46541)
              , m = n(1677)
              , p = n(25866)
              , f = n(8786)
              , x = function() {
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return f.Z.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            };
            const h = "App_container__p+0qT"
              , v = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = n(1413);
            const j = "ComPaddingLayout_common-padding-layout__0gGbM";
            var N = n(45263)
              , C = function(e) {
                return function(t) {
                    return (0,
                    N.jsx)("div", {
                        className: j,
                        children: (0,
                        N.jsx)(e, (0,
                        k.Z)({}, t))
                    })
                }
            }
              , b = n(44925)
              , w = n(95640)
              , y = n.n(w)
              , Z = n(14300)
              , P = n(72106)
              , O = {
                act: function() {}
            };
            "undefined" !== typeof window && (O = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var T = O
              , S = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                T.act({
                    action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                    params: {
                        source: e
                    },
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , E = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1,
                tgUsername: ""
            }
              , B = (0,
            a.createContext)(E)
              , I = function() {
                return (0,
                a.useContext)(B)
            }
              , L = function(e) {
                var t = e.children
                  , n = (0,
                a.useMemo)((function() {
                    var e, t, n = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, a = n.user, r = n.start_param;
                    if (a) {
                        var s = a.id
                          , i = a.username
                          , o = a.first_name
                          , c = a.last_name
                          , l = i;
                        if (o || c) {
                            var u = o && c ? " " : "";
                            l = "".concat(o).concat(u).concat(c)
                        }
                        return {
                            uid: null === s || void 0 === s ? void 0 : s.toString(),
                            username: l,
                            lastName: c,
                            firstName: o,
                            startParam: r,
                            gameId: 1,
                            tgUsername: i
                        }
                    }
                    return E
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                N.jsx)(B.Provider, {
                    value: s,
                    children: t
                })
            }
              , R = "/mini-app/racer"
              , A = "/mini-app/racer/referrals"
              , D = "/mini-app/racer/tasks"
              , F = "/mini-app/racer/tasks/partner"
              , G = "/mini-app/racer/leaderboard"
              , U = "/mini-app/racer/license"
              , W = "/mini-app/racer/license/grades"
              , M = n(83108)
              , V = n(76983)
              , H = n(59896)
              , Y = n(4860)
              , K = n(4422)
              , z = n(72202)
              , X = function(e, t) {
                e ? p.Z.success({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                }) : p.Z.error({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , J = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                X(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , q = n(60378);
            const Q = utils.ont;
            var $ = n.n(Q)
              , ee = function(e) {
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , te = function(e) {
                return function(t) {
                    if (!(0,
                    q.y)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        K.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                    }
                    return Promise.reject(t)
                }
            }
              , ne = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().get(t, n).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().getWithCache(t, n).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().post(t, n, a).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }()
              , se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().put(t, n, a).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }()
              , ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().delete(t, n).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = new FormData,
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((function(e) {
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , n = t[0]
                                      , a = t[1];
                                    a instanceof Blob ? r.append(n, a) : r.append(n, String(a))
                                }
                                )),
                                e.abrupt("return", re(t, r, a));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }();
            const ce = {
                get: ne,
                getWithCache: ae,
                post: re,
                put: se,
                postForm: oe,
                delete: ie
            };
            var le = n(15671)
              , ue = n(43144)
              , de = function() {
                function e() {
                    (0,
                    le.Z)(this, e),
                    this.store = void 0,
                    this.store = new Map
                }
                return (0,
                ue.Z)(e, [{
                    key: "setItem",
                    value: function(e, t) {
                        this.store.set(e, {
                            value: t,
                            timestamp: Date.now()
                        })
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        var t = this.store.get(e);
                        return t ? t.value : void 0
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        this.store.delete(e)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.store.clear()
                    }
                }, {
                    key: "hasItem",
                    value: function(e) {
                        return this.store.has(e)
                    }
                }, {
                    key: "isItemExpired",
                    value: function(e, t) {
                        var n = this.store.get(e);
                        return !n || Date.now() - n.timestamp > t
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return e.instance || (e.instance = new e),
                        e.instance
                    }
                }]),
                e
            }();
            de.instance = void 0;
            const _e = de.getInstance();
            function me(e, t) {
                return function() {
                    var n = (0,
                    l.Z)((0,
                    c.Z)().mark((function n(a, r) {
                        var s;
                        return (0,
                        c.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (s = "cache_".concat(a, "_").concat(JSON.stringify(r)),
                                    !_e.hasItem(s) || _e.isItemExpired(s, t)) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return", e(a, r, !0));
                                case 3:
                                    return n.abrupt("return", e(a, r, !1));
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }()
            }
            function pe() {
                var e, t;
                return (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initData) || ""
            }
            function fe(e, t, n) {
                return xe.apply(this, arguments)
            }
            function xe() {
                return (xe = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ce.get(t, (0,
                                k.Z)((0,
                                k.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": pe()
                                    }
                                }));
                            case 2:
                                return r = e.sent,
                                _e.setItem(n, r),
                                e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function he(e, t, n) {
                return ve.apply(this, arguments)
            }
            function ve() {
                return (ve = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !_e.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = _e.getItem(r),
                                fe(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", fe(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ge(e, t, n, a) {
                return ke.apply(this, arguments)
            }
            function ke() {
                return (ke = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ce.post(t, n, (0,
                                k.Z)((0,
                                k.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": pe()
                                    }
                                }));
                            case 2:
                                return s = e.sent,
                                _e.setItem(a, s),
                                e.abrupt("return", s);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function je(e, t, n, a) {
                return Ne.apply(this, arguments)
            }
            function Ne() {
                return (Ne = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !_e.hasItem(s) || !a) {
                                    e.next = 5;
                                    break
                                }
                                return i = _e.getItem(s),
                                ge(t, n, s, r).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", ge(t, n, s, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Ce = "/priapi/v1/affiliate"
              , be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(Ce, "/game/racer/info"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , we = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(Ce, "/game/racer/assess"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    var a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                he("".concat(Ce, "/game/racer/invitee-list"), {
                                    params: t
                                }, n);
                            case 3:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                e.t0,
                                e.abrupt("return", null);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(he, 1e4),
                                e.next = 4,
                                n("".concat(Ce, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 4:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                J(e.t0),
                                e.abrupt("return", null);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(he, 3e5),
                                e.next = 4,
                                n("".concat(Ce, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 4:
                                if (a = e.sent,
                                !(r = a.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                J(e.t0),
                                e.abrupt("return", null);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Oe = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e
            }({})
              , Te = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", he("".concat(Ce, "/game/racer/boosts"), {}, t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(Ce, "/game/racer/boost"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", he("".concat(Ce, "/game/racer/group-tasks"), {}, t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(Ce, "/game/racer/task"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ie = function(e) {
                return e[e.NotStarted = 0] = "NotStarted",
                e[e.InProgress = 1] = "InProgress",
                e[e.Ended = 2] = "Ended",
                e
            }({})
              , Le = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r, s, i = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] && i[0],
                                n = i.length > 1 && void 0 !== i[1] ? i[1] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 4,
                                je("".concat(Ce, "/game/racer/account-binding"), n, t);
                            case 4:
                                if (a = e.sent,
                                r = a.code,
                                s = a.data,
                                0 !== r || !s) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", (0,
                                k.Z)((0,
                                k.Z)({}, s), {}, {
                                    isConnectTelegram: 1 === s.tgBindingStatus,
                                    isKyc: 1 === s.kycVerifyStatus,
                                    joinedDate: Number(s.joinedDate)
                                }));
                            case 9:
                                return e.abrupt("return", null);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                he("".concat(Ce, "/game/racer/campaigns"), {}, t);
                            case 3:
                                if (n = e.sent,
                                a = n.code,
                                r = n.data,
                                0 !== a || !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 8:
                                return e.abrupt("return", null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            function Ae(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var De = {
                Rewards: Ae(Le, !0),
                Friends: Ae(Ze, {
                    pageNo: 1
                }),
                Boost: Ae(Te, !0),
                Task: Ae(Ee, !0),
                Invitee: Ae(ye, {
                    pageNo: 1
                }, !0),
                Global: Ae(Pe, {
                    pageNo: 1
                })
            }
              , Fe = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ge = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (0 !== t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t.shift(),
                                e.prev = 3,
                                e.next = 6,
                                new Promise((function(e) {
                                    var t = Math.floor(1e3 * Math.random()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                n && De[n] && (a = De[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && K.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                Ge(t);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e, null, [[3, 9]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function Ue() {
                Ge(Fe).catch((function(e) {
                    e instanceof Error && K.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var We = (0,
            a.createContext)({
                points: 0,
                accumPoints: 0,
                numChances: 0,
                numChancesTotal: 0,
                countdownDisplay: "",
                isLoading: !0,
                linkCode: "",
                updateGameInfo: function() {},
                updateGameInfoFromServer: function() {},
                isShowAutopilotGainedPoint: !1,
                isShowRiskControlSheet: !0,
                autopilotPoints: 0,
                hideRiskControlSheet: function() {},
                hideAutopilotSheet: function() {},
                isShowActivityDetails: !1,
                toggleActivityDetailsBottomSheet: function() {},
                hideNewbie: function() {},
                context: {},
                isShowNewbie: !1,
                basePoint: 0,
                autopilotPointsPerHour: 0
            })
              , Me = function() {
                return (0,
                a.useContext)(We)
            }
              , Ve = function(e) {
                var t, n = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], f = (0,
                a.useState)(0), x = (0,
                u.Z)(f, 2), h = x[0], v = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], C = k[1], b = (0,
                a.useState)(0), w = (0,
                u.Z)(b, 2), y = w[0], P = w[1], O = (0,
                a.useState)(0), T = (0,
                u.Z)(O, 2), S = T[0], E = T[1], B = (0,
                a.useState)(0), L = (0,
                u.Z)(B, 2), R = L[0], A = L[1], D = (0,
                a.useState)(""), F = (0,
                u.Z)(D, 2), G = F[0], U = F[1], W = (0,
                a.useState)({}), M = (0,
                u.Z)(W, 2), V = M[0], H = M[1], J = (0,
                a.useState)(!0), q = (0,
                u.Z)(J, 2), Q = q[0], $ = q[1], ee = I(), te = ee.username, ne = ee.startParam, ae = (0,
                a.useState)(""), re = (0,
                u.Z)(ae, 2), se = re[0], ie = re[1], oe = (0,
                a.useState)(!1), ce = (0,
                u.Z)(oe, 2), le = ce[0], ue = ce[1], de = (0,
                a.useState)(0), _e = (0,
                u.Z)(de, 2), me = _e[0], pe = _e[1], fe = (0,
                a.useState)(!1), xe = (0,
                u.Z)(fe, 2), he = xe[0], ve = xe[1], ge = (0,
                a.useState)(), ke = (0,
                u.Z)(ge, 2), je = ke[0], Ne = ke[1], Ce = (0,
                a.useState)(!1), we = (0,
                u.Z)(Ce, 2), ye = we[0], Ze = we[1], Pe = (0,
                a.useState)(!1), Oe = (0,
                u.Z)(Pe, 2), Te = Oe[0], Se = Oe[1], Ee = null !== (t = new Y.Z((ne || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", Be = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                be({
                                    extUserName: te,
                                    linkCode: Ee
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                v(n.basePoint),
                                C(n.autopilotPointsPerHour),
                                U(n.linkCode),
                                P(n.numChances),
                                A(n.secondToRefresh),
                                E(n.numChancesTotal),
                                ue(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Se(Boolean(n.context.isShowNewbieCredit)),
                                ve(n.isUnderRiskControl),
                                pe(n.autopilotPoints),
                                Ne({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                H(n.context),
                                $(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                X(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Ee, te]);
                (0,
                a.useEffect)((function() {
                    Ze(Boolean(null === je || void 0 === je ? void 0 : je.isShowActivityFlag))
                }
                ), [null === je || void 0 === je ? void 0 : je.isShowActivityFlag]),
                (0,
                a.useEffect)((function() {
                    Be().then(Ue).catch((function(e) {
                        e instanceof Error && K.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Be]),
                (0,
                a.useEffect)((function() {
                    var e = new z.Z(R);
                    return R > 0 ? (e.start(),
                    e.addEventListener(z.Z.Event.UPDATE, (function(e) {
                        ie("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(z.Z.Event.FINISH, (function() {
                        ie(""),
                        Be()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    ie("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [R, Be]),
                (0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || Be()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [Be]);
                var Ie = (0,
                a.useCallback)((function(e) {
                    o(Math.max(e.points, 0)),
                    P(e.numChances),
                    A(e.secondToRefresh)
                }
                ), [])
                  , Le = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Be();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [Be])
                  , Re = (0,
                a.useCallback)((function() {
                    ue(!1)
                }
                ), [])
                  , Ae = (0,
                a.useCallback)((function() {
                    Se(!1)
                }
                ), [])
                  , De = (0,
                a.useCallback)((function() {
                    ve(!1)
                }
                ), [])
                  , Fe = (0,
                a.useCallback)((function() {
                    Ze((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , Ge = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: Q,
                        points: i,
                        accumPoints: m,
                        numChances: y,
                        numChancesTotal: S,
                        countdownDisplay: se,
                        updateGameInfo: Ie,
                        linkCode: G,
                        updateGameInfoFromServer: Le,
                        isShowAutopilotGainedPoint: le,
                        autopilotPoints: me,
                        isShowNewbie: Te,
                        hideNewbie: Ae,
                        hideAutopilotSheet: Re,
                        isShowRiskControlSheet: he,
                        hideRiskControlSheet: De,
                        activity: je,
                        isShowActivityDetails: ye,
                        toggleActivityDetailsBottomSheet: Fe,
                        context: V,
                        basePoint: h,
                        autopilotPointsPerHour: j
                    }
                }
                ), [Q, i, m, y, S, se, Ie, G, Le, le, me, Re, Te, Ae, he, De, je, ye, Fe, V, h, j]);
                return (0,
                N.jsx)(We.Provider, {
                    value: Ge,
                    children: n
                })
            }
              , He = n(5425);
            const Ye = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Ke = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Ye.closeBtn,
                closeIconClassName: Ye.closeIcon
            }
              , ze = function(e) {
                return (0,
                N.jsx)(He.Z, (0,
                k.Z)((0,
                k.Z)({}, Ke), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Ye.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , Xe = function(e) {
                var t = He.Z.show((0,
                k.Z)((0,
                k.Z)({}, Ke), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Ye.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            };
            const Je = "PrimaryButton_button__SJFHA"
              , qe = "PrimaryButton_buttonText__19AJ7";
            var Qe = ["text", "className"]
              , $e = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                b.Z)(e, Qe);
                return (0,
                N.jsx)(V.default, (0,
                k.Z)((0,
                k.Z)({
                    category: V.default.CATEGORY.fill,
                    type: V.default.TYPE.primary,
                    size: V.default.SIZE.lg,
                    className: y()(Je, n),
                    contentClassName: qe
                }, a), {}, {
                    children: t
                }))
            }
              , et = n(4942);
            const tt = "Timer_timer__j+KcR"
              , nt = "Timer_show__GFyz+"
              , at = "Timer_label__nxjo+"
              , rt = "Timer_separator__CFi1G"
              , st = "Timer_timerValue__CaRO2";
            var it = function(e) {
                var t = e.endTime
                  , n = e.label
                  , r = (0,
                a.useRef)(new z.Z.Absolute(t,{
                    interval: 1
                }))
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , c = i[1];
                return (0,
                a.useEffect)((function() {
                    var e = r.current;
                    return e.start().addEventListener(z.Z.Event.UPDATE, (function(e) {
                        c(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: y()(tt, (0,
                    et.Z)({}, nt, o)),
                    children: [n && (0,
                    N.jsx)("span", {
                        className: at,
                        children: n
                    }), Number(null === o || void 0 === o ? void 0 : o.day) > 0 && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("span", {
                            className: st,
                            children: null === o || void 0 === o ? void 0 : o.day
                        }), (0,
                        N.jsx)("span", {
                            className: rt,
                            children: ":"
                        })]
                    }), (0,
                    N.jsx)("span", {
                        className: st,
                        children: null === o || void 0 === o ? void 0 : o.hour
                    }), (0,
                    N.jsx)("span", {
                        className: rt,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: st,
                        children: null === o || void 0 === o ? void 0 : o.minute
                    }), (0,
                    N.jsx)("span", {
                        className: rt,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: st,
                        children: null === o || void 0 === o ? void 0 : o.second
                    })]
                })
            };
            const ot = "EventPopover_eventPopoverWrapper__65bP-"
              , ct = "EventPopover_eventPopover__B0CAq"
              , lt = "EventPopover_eventPopoverDesc__+lNFw"
              , ut = "EventPopover_eventPopoverBtn__BKIwS"
              , dt = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , _t = "EventPopover_eventPopoverArrow__M+sYF"
              , mt = "EventPopover_eventDetailsContainer__G1KfS"
              , pt = "EventPopover_title__Tie4q"
              , ft = "EventPopover_description__tVAy9"
              , xt = "EventPopover_disclaimer__jFZC3"
              , ht = "EventPopover_continueBtn__S2Sj-"
              , vt = "EventPopover_eventDetails__5xDB0"
              , gt = "EventPopover_eventImg__0yapf";
            var kt = function(e) {
                var t = e.children
                  , n = Me()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(M.Z, {
                        zIndex: 998,
                        layerClassName: ot,
                        popperClassName: ct,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: lt,
                        description: (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(V.default, {
                                className: ut,
                                type: V.default.TYPE.primary,
                                category: V.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                N.jsx)(P.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: dt
                                }),
                                iconType: V.default.ICON_POSITION.tailing,
                                children: (0,
                                Z.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            N.jsx)("svg", {
                                className: _t,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                N.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    N.jsx)(ze, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        N.jsxs)("div", {
                            className: mt,
                            children: [(0,
                            N.jsxs)("div", {
                                className: vt,
                                children: [(0,
                                N.jsx)(H.Z, {
                                    pictureClassName: gt,
                                    className: gt,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                N.jsx)("h2", {
                                    className: pt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                N.jsx)("p", {
                                    className: ft,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                N.jsx)(it, {
                                    endTime: i,
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                N.jsx)("p", {
                                    className: xt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            N.jsx)($e, {
                                className: ht,
                                onClick: function() {
                                    s()
                                },
                                text: (0,
                                Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const jt = "Navbar_navbar__LF3-M"
              , Nt = "Navbar_link__qX0Sf"
              , Ct = "Navbar_active__TCbF8"
              , bt = "Navbar_linkIcon__GtH54"
              , wt = "Navbar_linkText__Szxi-"
              , yt = "Navbar_newIndicator__IrNNw";
            var Zt = ["children", "className"]
              , Pt = ["iconName", "label", "onClick", "showNewIndicator"]
              , Ot = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                b.Z)(e, Zt)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                N.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , Tt = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = e.showNewIndicator
                  , i = void 0 !== r && r
                  , o = (0,
                b.Z)(e, Pt)
                  , c = (0,
                s.useRouteMatch)({
                    path: o.to,
                    exact: o.to === R
                });
                return (0,
                N.jsxs)(Ot, {
                    className: y()(Nt, c && Ct),
                    to: o.to,
                    onClick: a,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: t,
                        className: bt
                    }), i && (0,
                    N.jsx)("span", {
                        className: yt
                    }), (0,
                    N.jsx)("span", {
                        className: wt,
                        children: n
                    })]
                })
            }
              , St = function() {
                var e = {
                    telegramid: I().uid
                };
                return (0,
                N.jsxs)("div", {
                    className: jt,
                    children: [(0,
                    N.jsx)(kt, {
                        children: (0,
                        N.jsx)(Tt, {
                            iconName: "okx-growth-home",
                            to: R,
                            label: (0,
                            Z.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    N.jsx)(Tt, {
                        iconName: "okx-growth-leaderboard",
                        to: G,
                        label: (0,
                        Z.O4)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(Tt, {
                        iconName: "okx-growth-task",
                        to: D,
                        label: (0,
                        Z.O4)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Task_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Task_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(Tt, {
                        iconName: "okx-growth-friends",
                        to: A,
                        label: (0,
                        Z.O4)("ok_game_okxracer_friends"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                                    anchor: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(e)
                        }
                    }), (0,
                    N.jsx)(Tt, {
                        iconName: "okx-growth-surprises",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises"),
                        showNewIndicator: !0
                    })]
                })
            };
            var Et = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Bt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , It = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({});
            function Lt(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            const Rt = "RiskControl_title__h9Z0T";
            var At = function() {
                var e = Me()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                N.jsx)(ze, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    N.jsx)("div", {
                        className: Rt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Dt = n(8031)
              , Ft = new (function() {
                function e() {
                    var t = this;
                    (0,
                    le.Z)(this, e),
                    this.instId = "BTC-USDT",
                    this.channel = "tickers",
                    this.channelSubscribe = {
                        op: "subscribe",
                        args: [{
                            channel: this.channel,
                            instId: this.instId
                        }]
                    },
                    this.handleList = [],
                    this.connection = void 0,
                    this.initConnect = function() {
                        t.connection.onSocketConnected((function() {
                            t.onConnected()
                        }
                        )),
                        t.connection.connect(),
                        t.addPageHideEvent()
                    }
                    ,
                    this.onConnected = function() {
                        t.connection.sendChannel(JSON.stringify(t.channelSubscribe)),
                        t.connection.setPushDataResolver(t.onResolve)
                    }
                    ,
                    this.onResolve = function(e) {
                        var n = e.arg
                          , a = e.data;
                        if (n.channel === t.channel && n.instId === t.instId) {
                            var r = ((null === a || void 0 === a ? void 0 : a[0]) || {}).last;
                            r && t.handleList.forEach((function(e) {
                                e(Number(r))
                            }
                            ))
                        }
                    }
                    ,
                    this.disconnect = function() {
                        t.connection.disconnect()
                    }
                    ,
                    this.addCallback = function(e) {
                        t.handleList.push(e)
                    }
                    ,
                    this.connection = new Dt.Z({
                        connectUrl: "wss://wspri.okx.com:8443/ws/v5/ipublic"
                    }),
                    this.initConnect()
                }
                return (0,
                ue.Z)(e, [{
                    key: "addPageHideEvent",
                    value: function() {
                        var e = this;
                        window.addEventListener("visibilitychange", (function() {
                            document.hidden ? e.disconnect() : (e.connection.onSocketConnected(e.onConnected),
                            e.connection.connect())
                        }
                        ))
                    }
                }]),
                e
            }())
              , Gt = (0,
            a.createContext)(Ft)
              , Ut = function(e) {
                var t = e.children;
                return (0,
                N.jsx)(Gt.Provider, {
                    value: Ft,
                    children: t
                })
            }
              , Wt = (0,
            a.createContext)(null)
              , Mt = function() {
                return (0,
                a.useContext)(Wt)
            }
              , Vt = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useContext)(Gt);
                return (0,
                a.useEffect)((function() {
                    o.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                N.jsx)(Wt.Provider, {
                    value: s,
                    children: t
                })
            }
              , Ht = n(46430)
              , Yt = "racer"
              , Kt = function() {
                var e;
                if (!(0,
                q.y)())
                    return Ht.Z.getInstance(Yt) || Ht.Z.init({
                        project: Yt
                    }),
                    null !== (e = Ht.Z.getInstance(Yt)) && void 0 !== e ? e : Ht.Z
            }
              , zt = "guessRecords_new";
            function Xt(e) {
                var t = Kt().get(zt) || [];
                t.unshift(e),
                Kt().set(zt, t.slice(0, 5))
            }
            var Jt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , qt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: Jt.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Jt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Qt = (0,
            a.createContext)(qt)
              , $t = function() {
                return (0,
                a.useContext)(Qt)
            }
              , en = function(e) {
                var t = e.children
                  , n = I().uid
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(5)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                a.useState)(null)
                  , x = (0,
                u.Z)(f, 2)
                  , h = x[0]
                  , v = x[1]
                  , g = (0,
                a.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , C = k[1]
                  , b = (0,
                a.useState)(Jt.NONE)
                  , w = (0,
                u.Z)(b, 2)
                  , y = w[0]
                  , P = w[1]
                  , O = Mt()
                  , S = Me().updateGameInfo
                  , E = (0,
                a.useRef)(Jt.NONE)
                  , B = (0,
                a.useRef)(1)
                  , L = (0,
                a.useRef)(10)
                  , R = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , D = (0,
                a.useRef)(null)
                  , F = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = E.current === Jt.UP ? 1 : 0,
                                e.next = 4,
                                we({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (C(a.won),
                                S({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                B.current = a.multiplier,
                                L.current = a.basePoint,
                                R.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                D.current = a.currentPrice,
                                Xt({
                                    curCombo: a.curCombo,
                                    won: a.won,
                                    predict: t,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                C(null),
                                R.current = null,
                                X(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = Jt.NONE,
                                o(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [S]);
                (0,
                a.useEffect)((function() {
                    var e = null;
                    if (i) {
                        var t = 5;
                        p(t),
                        e = setInterval((function() {
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            v(null),
                            F())
                        }
                        ), 1e3)
                    }
                    return function() {
                        e && clearTimeout(e)
                    }
                }
                ), [F, i]),
                (0,
                a.useEffect)((function() {
                    if (i && O)
                        if (h) {
                            var e = O > h;
                            P(O === h ? Jt.NONE : e ? Jt.UP : Jt.DOWN)
                        } else
                            v(O)
                }
                ), [h, i, O]);
                var G = (0,
                a.useCallback)((function(e) {
                    C(null),
                    o(!0),
                    E.current = e,
                    R.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === Jt.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
                            action: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                            anchor: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }(t),
                    e === Jt.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
                            action: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                            anchor: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }(t)
                }
                ), [])
                  , U = (0,
                a.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: G,
                        result: j,
                        isPending: i,
                        currentTrend: y,
                        multiplier: B.current,
                        basePoints: L.current,
                        predict: E.current,
                        changeRate: R.current,
                        prevPrice: A.current,
                        currentPrice: D.current
                    }
                }
                ), [m, y, i, B, G, j]);
                return (0,
                N.jsx)(Qt.Provider, {
                    value: U,
                    children: t
                })
            };
            const tn = "NewCampaigns_container__gO1Ko"
              , nn = "NewCampaigns_img__Or37G"
              , an = "NewCampaigns_title__Lx+PB"
              , rn = "NewCampaigns_desc__U9VKz"
              , sn = "NewCampaigns_btn__xIIk1";
            var on = function() {
                var e = (0,
                s.useHistory)()
                  , t = (0,
                s.useLocation)()
                  , n = !1
                  , a = function() {};
                return (0,
                N.jsxs)(ze, {
                    visible: n,
                    onClose: a,
                    containerClassName: tn,
                    children: [(0,
                    N.jsx)(H.Z, {
                        pictureClassName: nn,
                        className: nn,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/249/AE73AAA266A93F81.png")
                    }), (0,
                    N.jsx)("p", {
                        className: an,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase421_exciting_act")
                    }), (0,
                    N.jsx)("p", {
                        className: rn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase421_verify_join_verified")
                    }), (0,
                    N.jsx)($e, {
                        className: sn,
                        onClick: function() {
                            e.push({
                                pathname: U,
                                hash: t.hash
                            })
                        },
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase421_view_campaign")
                    })]
                })
            }
              , cn = n(94595)
              , ln = n(96450)
              , un = 2e3
              , dn = 500;
            function _n(e) {
                return (Math.abs(e) < 1e-4 ? ln.yx.ceilTruncate : ln.yx.floorTruncate)(e, 4)
            }
            const mn = "GuessResult_container__ECdpL"
              , pn = "GuessResult_title__fzYxg"
              , fn = "GuessResult_multiplier__yRHWm"
              , xn = "GuessResult_description__R2fup"
              , hn = "GuessResult_detailsIcon__ZE7Ry"
              , vn = "GuessResult_changeRateContainer__a5-N7"
              , gn = "GuessResult_label__+b5Nz"
              , kn = "GuessResult_changeRate__yhVz3"
              , jn = "GuessResult_up__5vYDR"
              , Nn = "GuessResult_down__fa-oP"
              , Cn = "GuessResult_priceChange__xr6e8"
              , bn = "GuessResult_price__Vk+bY";
            function wn(e) {
                return (0,
                cn.xG)((0,
                cn.uf)(ln.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var yn = function(e) {
                var t, n = e.className, r = $t(), s = r.result, i = r.multiplier, o = r.changeRate, c = r.prevPrice, l = r.currentPrice, d = (0,
                a.useState)(!1), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1];
                return (0,
                a.useEffect)((function() {
                    var e, t;
                    if (null !== s) {
                        var n, a, r, i;
                        if (null !== (n = window) && void 0 !== n && null !== (a = n.Telegram) && void 0 !== a && a.WebApp)
                            null === (r = window.Telegram.WebApp.HapticFeedback) || void 0 === r || null === (i = r.notificationOccurred) || void 0 === i || i.call(r, s ? "success" : "error");
                        e = setTimeout((function() {
                            p(!0),
                            t = setTimeout((function() {
                                p(!1)
                            }
                            ), un)
                        }
                        ), dn)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [s]),
                (0,
                N.jsx)(N.Fragment, {
                    children: m && (0,
                    N.jsxs)("div", {
                        className: y()(n, mn),
                        children: [(0,
                        N.jsx)("p", {
                            className: fn,
                            children: s ? (0,
                            N.jsxs)("span", {
                                className: hn,
                                children: ["\ud83d\udd25".repeat(Math.min(i, 4)), i > 1 ? "x".concat(i) : ""]
                            }) : (0,
                            N.jsx)("span", {
                                className: hn,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        N.jsx)("h2", {
                            className: pn,
                            children: (0,
                            Z.O4)(s ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        N.jsxs)("div", {
                            className: xn,
                            children: [null !== o && (0,
                            N.jsxs)("p", {
                                className: vn,
                                children: [(0,
                                N.jsx)("span", {
                                    className: gn,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                N.jsx)("span", {
                                    className: y()(kn, (t = {},
                                    (0,
                                    et.Z)(t, jn, o > 0),
                                    (0,
                                    et.Z)(t, Nn, o < 0),
                                    t)),
                                    children: (0,
                                    cn.uf)(_n(o), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && l && (0,
                            N.jsx)("p", {
                                className: Cn,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    N.jsx)("span", {
                                        className: bn,
                                        children: wn(c)
                                    }),
                                    currentPrice: (0,
                                    N.jsx)("span", {
                                        className: bn,
                                        children: wn(l)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const Zn = "TncButton_termsAndConditions__MyIpV";
            var Pn = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("button", {
                    className: y()(Zn, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                })
            };
            const On = "AutoPilot_title__NJa0C"
              , Tn = "AutoPilot_button__Sg42v";
            var Sn = function() {
                var e = Me()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                N.jsxs)(ze, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    N.jsx)("div", {
                        className: On,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            cn.uf)(n)
                        })
                    }), (0,
                    N.jsx)($e, {
                        className: Tn,
                        onClick: a,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const En = "BackgroundVideo_container__J5sO2"
              , Bn = "BackgroundVideo_muteButton__04Huj"
              , In = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Ln = "BackgroundVideo_staticImage__EpRTb"
              , Rn = "BackgroundVideo_hide__ZXYN9";
            var An, Dn, Fn, Gn, Un, Wn, Mn = "backgroundVideoSoundOn", Vn = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Hn = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], Yn = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], Kn = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Vn)
            }, zn = function() {
                var e = $t().isPending
                  , t = (0,
                a.useRef)(null)
                  , n = (0,
                a.useRef)(null)
                  , r = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , c = s[1]
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)(!1)
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = Kt()
                  , g = (0,
                a.useState)((function() {
                    var e = v.get(Mn);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , C = j[0]
                  , b = j[1];
                (0,
                a.useEffect)((function() {
                    t.current && (e && (h(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((function() {
                        c(!0)
                    }
                    )).catch((function() {
                        c(!1)
                    }
                    ))),
                    t.current.onended = function() {
                        var e;
                        h(!0),
                        null === (e = n.current) || void 0 === e || e.play().then((function() {
                            m(!0)
                        }
                        )).catch((function() {
                            m(!1)
                        }
                        ))
                    }
                    )
                }
                ), [e]);
                var w = !i && !_
                  , Z = i && x && _
                  , O = i && (!x || !_);
                return (0,
                N.jsxs)("div", {
                    className: En,
                    children: [(0,
                    N.jsx)(V.default, {
                        category: V.default.CATEGORY.fill,
                        type: V.default.TYPE.quaternary,
                        size: V.default.SIZE.md,
                        className: Bn,
                        strictCircle: !0,
                        onClick: function() {
                            b((function(e) {
                                return v.set(Mn, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: C ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: In
                        })
                    }), (0,
                    N.jsx)(H.Z, {
                        className: y()(Ln, (0,
                        et.Z)({}, Rn, !w)),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Vn)
                    }), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Kn), {}, {
                        className: y()((0,
                        et.Z)({}, Rn, !Z)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: Hn.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    })), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Kn), {}, {
                        className: y()((0,
                        et.Z)({}, Rn, !O)),
                        ref: t,
                        muted: C,
                        children: Yn.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, Xn = ["title", "titleId"];
            function Jn() {
                return Jn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Jn.apply(this, arguments)
            }
            function qn(e, t) {
                if (null == e)
                    return {};
                var n, a, r = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            function Qn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = qn(e, Xn);
                return a.createElement("svg", Jn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, An || (An = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Dn || (Dn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Fn || (Fn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Gn || (Gn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Un || (Un = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Wn || (Wn = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19404",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19404"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19404",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#F87989"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#F5384F"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19552",
                    x1: 62.6289,
                    y1: 48.4995,
                    x2: 62.6289,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .995,
                    stopColor: "#A60014"
                })))))
            }
            var $n = a.forwardRef(Qn);
            n.p;
            var ea, ta, na, aa, ra, sa, ia = ["title", "titleId"];
            function oa() {
                return oa = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                oa.apply(this, arguments)
            }
            function ca(e, t) {
                if (null == e)
                    return {};
                var n, a, r = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            function la(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = ca(e, ia);
                return a.createElement("svg", oa({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ea || (ea = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), ta || (ta = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), na || (na = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), aa || (aa = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), ra || (ra = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), sa || (sa = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19392",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19392"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19392",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#54EA90",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#54E88F"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#53E68E",
                    stopOpacity: 0
                })), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_738_19488",
                    x1: 72.4467,
                    y1: 48.4995,
                    x2: 72.4467,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#00BC4B"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#01933B"
                }))))))
            }
            var ua = a.forwardRef(la);
            n.p;
            const da = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var _a, ma = function(e) {
                var t = e.className
                  , n = $t()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = Me().numChances
                  , c = (0,
                a.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                a.useEffect)((function() {
                    var e;
                    return s || (e = setTimeout((function() {
                        _(void 0)
                    }
                    ), 2500)),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var m = function(e) {
                    var t, n, a;
                    s || d || (_(e === Jt.UP ? Jt.DOWN : Jt.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = o <= 0;
                return (0,
                N.jsxs)("div", {
                    className: t,
                    children: [(0,
                    N.jsx)("p", {
                        className: y()(da.instructions, s && da.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: da.btnContainer,
                        children: [(0,
                        N.jsxs)("button", {
                            disabled: p || d === Jt.UP,
                            onClick: function() {
                                return m(Jt.UP)
                            },
                            type: "button",
                            className: y()(da.btn, da.upBtn, (0,
                            et.Z)({}, da.pressed, i === Jt.UP)),
                            children: [(0,
                            N.jsx)(ua, {
                                className: y()(da.btnGraphic, da.upBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: da.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: da.arrow
                                })]
                            })]
                        }), (0,
                        N.jsxs)("button", {
                            disabled: p || d === Jt.DOWN,
                            onClick: function() {
                                return m(Jt.DOWN)
                            },
                            type: "button",
                            className: y()(da.btn, da.downBtn, (0,
                            et.Z)({}, da.pressed, i === Jt.DOWN)),
                            children: [(0,
                            N.jsx)($n, {
                                className: y()(da.btnGraphic, da.downBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: da.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: da.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, pa = ["title", "titleId"];
            function fa() {
                return fa = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                fa.apply(this, arguments)
            }
            function xa(e, t) {
                if (null == e)
                    return {};
                var n, a, r = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            function ha(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = xa(e, pa);
                return a.createElement("svg", fa({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, _a || (_a = a.createElement("g", {
                    transform: "translate(24 12)"
                }, a.createElement("rect", {
                    className: "track",
                    x: 2.5,
                    y: 2.5,
                    width: 322,
                    height: 155,
                    rx: 77.5,
                    fill: "#030303",
                    stroke: "#909090",
                    strokeWidth: 5
                }), a.createElement("path", {
                    d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                    fill: "url(#paint1_linear_263_6211)"
                }), a.createElement("path", {
                    d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                    fill: "url(#paint2_linear_263_6211)"
                }), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint1_linear_263_6211",
                    x1: 51.4976,
                    y1: 20,
                    x2: 51.4976,
                    y2: 140,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                })), a.createElement("linearGradient", {
                    id: "paint2_linear_263_6211",
                    x1: 277,
                    y1: 140,
                    x2: 277,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                }))))))
            }
            var va = a.forwardRef(ha);
            n.p;
            var ga = n(48275);
            const ka = "FuelIndicator_fuelContainer__QIskL"
              , ja = "FuelIndicator_toTasksIcon__Y7exC"
              , Na = "FuelIndicator_line__tWBfm"
              , Ca = "FuelIndicator_description__EaUsa"
              , ba = "FuelIndicator_fuelIcon__I38Ss"
              , wa = "FuelIndicator_maxChances__OMSHl"
              , ya = "FuelIndicator_earnPtsMsg__PjtcT";
            var Za, Pa, Oa = function(e) {
                var t = e.className
                  , n = Me()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, ka),
                    children: [(0,
                    N.jsx)("span", {
                        className: ba,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    N.jsx)(ga.Z.Line, {
                        className: Na,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    N.jsx)(Ot, {
                        to: D,
                        className: ya,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    N.jsxs)("p", {
                        className: Ca,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        N.jsxs)(N.Fragment, {
                            children: ["/\xa0", (0,
                            N.jsx)("span", {
                                className: wa,
                                children: r
                            })]
                        })]
                    }), (0,
                    N.jsx)(Ot, {
                        to: D,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: ja
                        })
                    })]
                })
            }, Ta = ["title", "titleId"];
            function Sa() {
                return Sa = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Sa.apply(this, arguments)
            }
            function Ea(e, t) {
                if (null == e)
                    return {};
                var n, a, r = function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, r = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        n = s[a],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            function Ba(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Ea(e, Ta);
                return a.createElement("svg", Sa({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Za || (Za = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Pa || (Pa = a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_563_49992",
                    x1: 84,
                    y1: 28.5652,
                    x2: 84,
                    y2: 5.44528e-7,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", null), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#909090"
                })))))
            }
            var Ia = a.forwardRef(Ba);
            n.p;
            const La = "RefuelTimer_container__wtALO"
              , Ra = "RefuelTimer_description__sD+HM"
              , Aa = "RefuelTimer_timer__LL1+c";
            var Da = function(e) {
                var t = e.className
                  , n = Me().countdownDisplay;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, La),
                    children: [(0,
                    N.jsx)(Ia, {}), (0,
                    N.jsx)("p", {
                        className: Ra,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            N.jsx)("span", {
                                className: Aa,
                                children: n
                            })
                        })
                    })]
                })
            };
            const Fa = "CoinPrice_raceTrack__NZO2t"
              , Ga = "CoinPrice_run__f0UIF"
              , Ua = "CoinPrice_coinPriceContainer__YbeUE"
              , Wa = "CoinPrice_content__a-5Jl"
              , Ma = "CoinPrice_fuelIndicator__p+f1I"
              , Va = "CoinPrice_refuelTimer__tbWMw"
              , Ha = "CoinPrice_hide__bHhxJ"
              , Ya = "CoinPrice_label__yTNy0"
              , Ka = "CoinPrice_value__ZjRZz"
              , za = "CoinPrice_slotMachine__hUQKt"
              , Xa = "SlotMachine_row__a4TO0"
              , Ja = "SlotMachine_animate__-G4TR"
              , qa = "SlotMachine_column__aR0VE"
              , Qa = "SlotMachine_arrows__m1dhv"
              , $a = "SlotMachine_columnContainer__a76pd"
              , er = "SlotMachine_background__b9TMg"
              , tr = "SlotMachine_slot__jwCvC"
              , nr = "SlotMachine_staticColumn__O5zfB"
              , ar = "SlotMachine_sm__ZRCig"
              , rr = "SlotMachine_arrow__qOYmf"
              , sr = "SlotMachine_wentUp__z48TO"
              , ir = "SlotMachine_down__aYC8C"
              , or = "SlotMachine_stable__CDMLP"
              , cr = "SlotMachine_wentDown__1fYUS"
              , lr = "SlotMachine_up__IuiYV";
            var ur = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                N.jsxs)("div", {
                    className: $a,
                    children: [(0,
                    N.jsx)("div", {
                        className: er
                    }), (0,
                    N.jsxs)("div", {
                        className: qa,
                        style: r,
                        children: [(0,
                        N.jsx)("p", {
                            className: tr,
                            children: a
                        }), t && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("p", {
                                className: tr,
                                children: "1"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "2"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "3"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "4"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "5"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "6"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "7"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "8"
                            }), (0,
                            N.jsx)("p", {
                                className: tr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , dr = function() {
                var e, t = $t(), n = t.changeRate, r = t.isPending, s = (0,
                a.useState)([]), i = (0,
                u.Z)(s, 2), o = i[0], c = i[1], l = (0,
                a.useState)(null), d = (0,
                u.Z)(l, 2), _ = d[0], m = d[1], p = (0,
                a.useState)(!1), f = (0,
                u.Z)(p, 2), x = f[0], h = f[1];
                return (0,
                a.useEffect)((function() {
                    r && h(!0)
                }
                ), [r]),
                (0,
                a.useEffect)((function() {
                    var e;
                    null !== n ? (m(null === (e = n) ? null : e > 0 ? Jt.UP : 0 === e ? Jt.NONE : Jt.DOWN),
                    c(String(Math.abs(Number(_n(n)))).split("").filter((function(e) {
                        return "." !== e
                    }
                    )).map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))),
                    h(!1)) : m(null)
                }
                ), [n]),
                (0,
                N.jsxs)("div", {
                    className: y()(Xa, x && Ja),
                    children: [(0,
                    N.jsx)("div", {
                        className: $a,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(Qa, (e = {},
                            (0,
                            et.Z)(e, sr, _ === Jt.UP),
                            (0,
                            et.Z)(e, cr, _ === Jt.DOWN),
                            (0,
                            et.Z)(e, or, _ === Jt.NONE),
                            e)),
                            children: [(0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: y()(rr, lr)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: y()(rr, or)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: y()(rr, ir)
                            })]
                        })
                    }), (0,
                    N.jsx)(ur, {
                        animate: x,
                        result: o[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: nr,
                        children: "."
                    }), (0,
                    N.jsx)(ur, {
                        animate: x,
                        result: o[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: x,
                        result: o[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: x,
                        result: o[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(ur, {
                        animate: x,
                        result: o[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: y()(nr, ar),
                        children: "%"
                    })]
                })
            }
              , _r = function() {
                var e = Mt()
                  , t = $t()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = Me().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                a.useEffect)((function() {
                    n && l(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((function() {
                    var e, t = function() {
                        e && clearTimeout(e)
                    };
                    return n || (null === r ? l(!1) : e = setTimeout((function() {
                        l(!1)
                    }
                    ), dn)),
                    t
                }
                ), [r, n]);
                var d = e ? "$".concat((0,
                cn.uf)(ln.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !n;
                return (0,
                N.jsxs)("div", {
                    className: Ua,
                    children: [(0,
                    N.jsx)(va, {
                        className: y()(Fa, n && Ga)
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Wa, c && Ha),
                        children: [(0,
                        N.jsx)("p", {
                            className: Ya,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        N.jsx)("p", {
                            className: Ka,
                            children: d
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Wa, !c && Ha),
                        children: [(0,
                        N.jsxs)("p", {
                            className: Ya,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        N.jsx)("div", {
                            className: za,
                            children: (0,
                            N.jsx)(dr, {})
                        })]
                    }), (0,
                    N.jsx)(Oa, {
                        className: Ma
                    }), (0,
                    N.jsx)("div", {
                        className: y()(Va, !_ && Ha),
                        children: (0,
                        N.jsx)(Da, {})
                    })]
                })
            };
            const mr = "LandingPage_container__pU2cC"
              , pr = "LandingPage_resultOverlay__WSYZb"
              , fr = "LandingPage_disclaimer__pVRHC"
              , xr = "LandingPage_recordsBtnContainer__Anr4Y"
              , hr = "LandingPage_backgroundVideo__flTkH"
              , vr = "LandingPage_content__D0ZLW"
              , gr = "LandingPage_points__Ruq4j"
              , kr = "LandingPage_coinPrice__nJ0nj"
              , jr = "LandingPage_btnContainer__IEll8"
              , Nr = "LandingPage_termsAndConditions__MdClU";
            var Cr = n(71979);
            const br = "NewbieWelcome_title__48Py5"
              , wr = "NewbieWelcome_desc__q7GHz"
              , yr = "NewbieWelcome_button__im+B1"
              , Zr = "NewbieWelcome_pointsBox__gOjMh"
              , Pr = "NewbieWelcome_points__4t75l"
              , Or = "NewbieWelcome_animation__tf9Dj";
            var Tr = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = o.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                Cr.Z)((0,
                l.Z)((0,
                c.Z)().mark((function a() {
                    return (0,
                    c.Z)().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2,
                                n.e(5340).then(n.t.bind(n, 5340, 23));
                            case 2:
                                a.sent.loadAnimation({
                                    container: e.current,
                                    renderer: "svg",
                                    loop: !1,
                                    autoplay: !0,
                                    path: t()
                                });
                            case 4:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                ))), []),
                (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsx)("div", {
                        ref: e,
                        className: Or
                    })
                })
            }
              , Sr = function() {
                var e = Me()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                N.jsxs)(ze, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(Tr, {}), (0,
                            N.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    N.jsx)("div", {
                        className: Zr,
                        children: (0,
                        N.jsx)("img", {
                            src: "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: Pr
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: br,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    N.jsx)("div", {
                        className: wr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    N.jsx)($e, {
                        className: yr,
                        onClick: t,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Er = n(22387);
            const Br = "UserPointCounter_pointCounter__-QAj8"
              , Ir = "UserPointCounter_hide__o4qTQ"
              , Lr = "UserPointCounter_points__d3HeG"
              , Rr = "UserPointCounter_title__B-gN-"
              , Ar = "UserPointCounter_countdown__Z7xGo"
              , Dr = "UserPointCounter_value__2a23E";
            var Fr = function() {
                var e = Me().points
                  , t = (0,
                Er.Z)(e)
                  , n = $t()
                  , r = n.isPending
                  , s = n.countdown
                  , i = (0,
                a.useRef)(null)
                  , o = (0,
                a.useState)(!1)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1];
                (0,
                a.useEffect)((function() {
                    var e;
                    return r ? d(!0) : e = setTimeout((function() {
                        d(!1)
                    }
                    ), 2500),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [r]);
                var _ = (0,
                a.useCallback)((function(e, t, n) {
                    e <= t && (n((0,
                    cn.uf)(String(e))),
                    requestAnimationFrame((function() {
                        var a = function(e, t) {
                            var n = t - e;
                            return Math.max(1, Math.floor(n / 10))
                        }(e, t);
                        _(e + a, t, n)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((function() {
                    var n;
                    if (t === e)
                        return function() {}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (n = i.current) || void 0 === n ? void 0 : n.innerText) || !t)
                        return _(0, e, a),
                        function() {}
                        ;
                    var r = setTimeout((function() {
                        _(t || 0, e, a)
                    }
                    ), 2500);
                    return function() {
                        clearTimeout(r)
                    }
                }
                ), [_, e, t]),
                (0,
                N.jsxs)("div", {
                    className: Br,
                    children: [(0,
                    N.jsxs)("p", {
                        className: y()(Rr, l && Ir),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    N.jsx)("p", {
                        ref: i,
                        className: y()(Lr, l && Ir),
                        children: "0"
                    }), (0,
                    N.jsxs)("p", {
                        className: y()(Ar, !l && Ir),
                        children: ["00:0", (0,
                        N.jsx)("span", {
                            className: Dr,
                            children: s
                        })]
                    })]
                })
            }
              , Gr = n(39136)
              , Ur = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.firstDigits
                  , a = void 0 === n ? 6 : n
                  , r = t.lastDigits
                  , s = void 0 === r ? 3 : r
                  , i = t.placeholder
                  , o = void 0 === i ? "..." : i;
                if (e && e.length > 20) {
                    var c = e.substring(0, a)
                      , l = e.substring(e.length - s, e.length);
                    return "".concat(c).concat(o).concat(l)
                }
                return e
            }
              , Wr = n(52008)
              , Mr = function(e, t) {
                var n, a = new Promise((function(a) {
                    e.connected && e.disconnect(),
                    e.setConnectRequestParameters({
                        state: "ready",
                        value: {
                            tonProof: t
                        }
                    }),
                    e.openSingleWalletModal("okxTonWallet"),
                    n = e.onSingleWalletModalStateChange(function() {
                        var t = (0,
                        l.Z)((0,
                        c.Z)().mark((function t(r) {
                            var s, i, o, l, u, d, _, m, p, f, x, h, v, g;
                            return (0,
                            c.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        "closed" === r.status && (s = null === e || void 0 === e ? void 0 : e.wallet,
                                        o = (i = s).account,
                                        l = o.address,
                                        u = o.publicKey,
                                        d = i.connectItems,
                                        _ = Wr.Address.parse(l),
                                        m = _.toString({
                                            urlSafe: !0,
                                            bounceable: !1,
                                            testOnly: !1
                                        }),
                                        p = d.tonProof,
                                        f = p.proof,
                                        x = f.signature,
                                        h = f.payload,
                                        v = f.domain,
                                        g = f.timestamp,
                                        a({
                                            tonAddress: m,
                                            publicKey: u,
                                            signature: x,
                                            msg: JSON.stringify({
                                                payload: h,
                                                domain: null === v || void 0 === v ? void 0 : v.value,
                                                timestamp: g
                                            })
                                        }),
                                        n && n());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                )), r = new Promise((function(e, t) {
                    var a = setTimeout((function() {
                        clearTimeout(a),
                        n && n(),
                        t(new Error("Promise timed out"))
                    }
                    ), 6e4)
                }
                ));
                return {
                    promise: Promise.race([a, r]),
                    unsubscribe: function() {
                        return n && n()
                    }
                }
            }
              , Vr = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    var a, r, s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 1,
                                a = Mr(t, n),
                                r = a.promise,
                                s = a.unsubscribe,
                                e.next = 5,
                                r;
                            case 5:
                                return i = e.sent,
                                o = s,
                                s(),
                                S({
                                    source: "app"
                                }),
                                e.abrupt("return", [i, o]);
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && K.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
                                    e: e.t0
                                });
                            case 15:
                                return e.abrupt("return", null);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 12]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            const Hr = "ViewWalletButton_button__WbNMO"
              , Yr = "ViewWalletButton_btnIcon__W5IFc";
            var Kr = function() {
                var e = Me()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , r = (0,
                d.dG)()
                  , s = (0,
                u.Z)(r, 1)[0]
                  , i = I().uid
                  , o = (0,
                a.useRef)((function() {}
                ));
                (0,
                a.useEffect)((function() {
                    return function() {
                        o.current && o.current()
                    }
                }
                ), []);
                var _ = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var a, r, l, d, _, m, p;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.tonAddress || !t.tonDeeplink) {
                                        e.next = 4;
                                        break
                                    }
                                    null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || r.WebApp.openLink(t.tonDeeplink),
                                    e.next = 26;
                                    break;
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    Vr(s, i);
                                case 7:
                                    if (!(l = e.sent)) {
                                        e.next = 19;
                                        break
                                    }
                                    return d = (0,
                                    u.Z)(l, 2),
                                    _ = d[0],
                                    m = d[1],
                                    o.current = m,
                                    p = {
                                        id: 9,
                                        taskContext: JSON.stringify((0,
                                        k.Z)({
                                            telegramId: i
                                        }, _))
                                    },
                                    e.next = 14,
                                    Be(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([Te(), n()]);
                                case 16:
                                    X(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    e.next = 20;
                                    break;
                                case 19:
                                    throw new Error("signature failed");
                                case 20:
                                    e.next = 26;
                                    break;
                                case 22:
                                    e.prev = 22,
                                    e.t0 = e.catch(4),
                                    J(e.t0),
                                    console.error(e.t0);
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[4, 22]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , m = (0,
                Gr.Z)(_, {
                    wait: 500
                }).run;
                return (0,
                N.jsxs)("button", {
                    className: Hr,
                    type: "button",
                    onClick: m,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-wallet",
                        className: Yr
                    }), t.tonAddress ? Ur(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    Z.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , zr = function() {
                var e = I().uid;
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
                            action: "OkxRacerLandingPage_Page_FullPage_View",
                            anchor: "OkxRacerLandingPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: e
                    })
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: mr,
                    children: [(0,
                    N.jsx)("div", {
                        className: xr,
                        children: (0,
                        N.jsx)(Kr, {})
                    }), (0,
                    N.jsx)("div", {
                        className: hr,
                        children: (0,
                        N.jsx)(zn, {})
                    }), (0,
                    N.jsxs)("div", {
                        className: vr,
                        children: [(0,
                        N.jsx)("div", {
                            className: gr,
                            children: (0,
                            N.jsx)(Fr, {})
                        }), (0,
                        N.jsx)("div", {
                            className: kr,
                            children: (0,
                            N.jsx)(_r, {})
                        }), (0,
                        N.jsx)(ma, {
                            className: jr
                        })]
                    }), (0,
                    N.jsx)(Pn, {
                        className: Nr
                    }), (0,
                    N.jsx)("p", {
                        className: fr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    N.jsx)(yn, {
                        className: pr
                    }), (0,
                    N.jsx)(Sn, {}), (0,
                    N.jsx)(Sr, {}), (0,
                    N.jsx)(At, {}), (0,
                    N.jsx)(on, {})]
                })
            }
              , Xr = function() {
                return (0,
                N.jsx)(en, {
                    children: (0,
                    N.jsx)(zr, {})
                })
            }
              , Jr = n(24084)
              , qr = n(58338);
            const Qr = "PageTitle_title__IQ7TT";
            var $r = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                N.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        qr.dU)(t)
                    },
                    className: y()(Qr, n)
                })
            };
            const es = "LeaderBoard_container__0DJSO"
              , ts = "LeaderBoard_desc__MFxC+"
              , ns = "LeaderBoard_inviteList__mV9a7"
              , as = "LeaderBoard_tabActiveClassName__7Xv4B"
              , rs = "LeaderBoard_tabsContent__KCGtW"
              , ss = "LeaderBoard_recordButton__lXzAl"
              , is = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var os = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("div", {
                    className: y()(is, t)
                })
            };
            const cs = "InviteButton_invite-btn__aAMio"
              , ls = "InviteButton_btn-a__At-wO"
              , us = "InviteButton_btn-container__sYDy5"
              , ds = "InviteButton_copyButton__znucI"
              , _s = "InviteButton_copyIcon__QZgE9";
            var ms = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = I().uid
                  , s = function(e) {
                    var t = new Y.Z
                      , n = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(Et.BOT_NAME, "/").concat(Et.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(n)
                    }
                }(Me().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                N.jsxs)("div", {
                    className: y()(a, us),
                    children: [(0,
                    N.jsx)("a", {
                        className: ls,
                        href: i,
                        children: (0,
                        N.jsx)($e, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    T.act({
                                        action: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                        anchor: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                        params: {
                                            telegramid: e
                                        },
                                        actionType: "",
                                        elementType: "",
                                        ampProject: "okx"
                                    })
                                }({
                                    telegramid: r
                                })
                            },
                            className: cs,
                            text: n
                        })
                    }), (0,
                    N.jsx)(V.default, {
                        strictCircle: !0,
                        category: V.default.CATEGORY.fill,
                        type: V.default.TYPE.primary,
                        size: V.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                X(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                X(!1, "Copy Invite URL failed")
                            }
                        },
                        className: ds,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-copy",
                            className: _s
                        })
                    })]
                })
            };
            const ps = "RankList_listItem__qJvXJ"
              , fs = "RankList_name__sxTWa"
              , xs = "RankList_mask__ldBi8"
              , hs = "RankList_hightLightRow__xYkeg"
              , vs = "RankList_listHeader__KVGnw"
              , gs = "RankList_rank__k2m5R"
              , ks = "RankList_icon__1-SRV"
              , js = "RankList_point__D5mVw"
              , Ns = "RankList_pointIcon__k80Wy"
              , Cs = "RankList_InviteButton__D6ute"
              , bs = "RankList_noFirendsNote__Ckkil"
              , ws = "RankList_under__MJ5We"
              , ys = "RankList_rankItemPlaceholder__z-upW"
              , Zs = "RankList_rank-name__YEqnc"
              , Ps = "RankList_rank-score__gtI+m";
            var Os = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Ts = 1
              , Ss = 2
              , Es = function(e) {
                var t = e.total;
                return (0,
                N.jsxs)("div", {
                    className: vs,
                    children: [(0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            cn.uf)(t)
                        })
                    }), (0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Bs = function() {
                return (0,
                N.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        N.jsxs)("div", {
                            className: ys,
                            children: [(0,
                            N.jsx)(os, {
                                className: Zs
                            }), (0,
                            N.jsx)(os, {
                                className: Ps
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , Is = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                N.jsxs)("div", {
                    className: y()(ps, n && hs),
                    children: [(0,
                    N.jsx)("div", {
                        className: xs
                    }), t.rank <= 3 ? (0,
                    N.jsx)("span", {
                        className: y()(gs, ks),
                        children: Os[t.rank]
                    }) : (0,
                    N.jsx)("span", {
                        className: gs,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    N.jsx)("div", {
                        className: fs,
                        children: t.extUserName
                    }), (0,
                    N.jsxs)("div", {
                        className: js,
                        children: [(0,
                        N.jsx)("span", {
                            className: Ns,
                            children: Os[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            cn.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Ls = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? Ts : t
                  , r = (0,
                a.useState)(!0)
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                a.useState)(0)
                  , x = (0,
                u.Z)(f, 2)
                  , h = x[0]
                  , v = x[1]
                  , g = (0,
                a.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , C = k[1]
                  , b = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var a, r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: t
                                    },
                                    n !== Ts) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Ze(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Pe(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (p(r.rows),
                                    v(r.total),
                                    C(r.userRanking)),
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0),
                                    e.t1;
                                case 18:
                                    o(!1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [n])
                  , w = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                a.useEffect)((function() {
                    b(1)
                }
                ), [b]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(Es, {
                        total: h
                    }), i ? (0,
                    N.jsx)(Bs, {}) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [w && (0,
                        N.jsx)(Is, {
                            item: j,
                            isHighlight: !0
                        }), m.map((function(e, t) {
                            return (0,
                            N.jsx)(Is, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    N.jsx)("div", {
                        className: ws
                    }), n === Ts && (0,
                    N.jsxs)(N.Fragment, {
                        children: [1 === m.length && (0,
                        N.jsx)("div", {
                            className: bs,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        N.jsx)(ms, {
                            className: Cs,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            };
            const Rs = "ViewRecordsButton_button__foNmQ"
              , As = "ViewRecordsButton_btnIcon__2U0Xs"
              , Ds = "ViewRecordsButton_title__XwRxi"
              , Fs = "ViewRecordsButton_container__KMBl3"
              , Gs = "ViewRecordsButton_recordContainer__H0HG0"
              , Us = "ViewRecordsButton_recordField__ntg1u"
              , Ws = "ViewRecordsButton_label__VInMo"
              , Ms = "ViewRecordsButton_value__YdAbG"
              , Vs = "ViewRecordsButton_trendIcon__OAhpt"
              , Hs = "ViewRecordsButton_up__lVPFv"
              , Ys = "ViewRecordsButton_down__z9X8U"
              , Ks = "ViewRecordsButton_timestamp__1KFJL"
              , zs = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , Xs = "ViewRecordsButton_description__2QLs8";
            var Js = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                N.jsxs)("div", {
                    className: Us,
                    children: [(0,
                    N.jsx)("p", {
                        className: Ws,
                        children: t
                    }), (0,
                    N.jsx)("div", {
                        className: Ms,
                        children: n
                    })]
                })
            }
              , qs = function() {
                return (0,
                N.jsxs)("button", {
                    className: Rs,
                    type: "button",
                    onClick: function() {
                        var e = Kt().get(zt) || []
                          , t = (0,
                        N.jsx)(N.Fragment, {
                            children: e.length > 0 ? e.map((function(e) {
                                var t = 1 === e.predict
                                  , n = "ok_game_okxracer_moon"
                                  , a = Hs
                                  , r = "okx-growth-trending-up";
                                return t || (n = "ok_game_okxracer_doom",
                                a = Ys,
                                r = "okx-growth-trending-down"),
                                (0,
                                N.jsxs)("div", {
                                    className: Gs,
                                    children: [(0,
                                    N.jsx)(Js, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_your_guess"),
                                        value: (0,
                                        N.jsxs)(N.Fragment, {
                                            children: [(0,
                                            Z.O4)(n), (0,
                                            N.jsx)(P.Z, {
                                                className: y()(Vs, a),
                                                iconName: r
                                            })]
                                        })
                                    }), (0,
                                    N.jsx)(Js, {
                                        label: "Result",
                                        value: (0,
                                        Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                    }), (0,
                                    N.jsx)(Js, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_consecutive_wins"),
                                        value: e.curCombo
                                    }), (0,
                                    N.jsx)("p", {
                                        className: Ks,
                                        children: (0,
                                        cn.o0)(new Date(e.date), {
                                            format: "yyyyMMMdhhmmss"
                                        })
                                    })]
                                }, e.date)
                            }
                            )) : (0,
                            N.jsxs)("div", {
                                className: zs,
                                children: [(0,
                                N.jsx)("p", {
                                    className: Ds,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_racing_record")
                                }), (0,
                                N.jsx)("p", {
                                    className: Xs,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_past_activity")
                                })]
                            })
                        });
                        Xe({
                            title: (0,
                            N.jsx)("span", {
                                className: Ds,
                                children: (0,
                                Z.O4)("ok_game_okxracer_racing_records")
                            }),
                            titleCenter: !0,
                            containerClassName: Fs,
                            children: t
                        })
                    },
                    children: [(0,
                    Z.O4)("ok_game_okxracer_my_records"), (0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-chevrons",
                        className: As
                    })]
                })
            }
              , Qs = function() {
                return (0,
                N.jsxs)("div", {
                    className: es,
                    children: [(0,
                    N.jsx)($r, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            Z.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: ts,
                        children: (0,
                        Z.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    N.jsx)("div", {
                        className: ss,
                        children: (0,
                        N.jsx)(qs, {})
                    }), (0,
                    N.jsxs)(Jr.Z, {
                        activeClassName: as,
                        noPadding: !0,
                        size: Jr.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        N.jsx)(Jr.Z.TabPane, {
                            tab: (0,
                            Z.O4)("ok_game_okxracer_friends2"),
                            id: Ts,
                            className: rs,
                            children: (0,
                            N.jsx)("div", {
                                className: ns,
                                children: (0,
                                N.jsx)(Ls, {
                                    pageType: Ts
                                })
                            })
                        }), (0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: rs,
                            tab: (0,
                            Z.O4)("ok_game_okxracer_global"),
                            id: Ss,
                            children: (0,
                            N.jsx)("div", {
                                className: ns,
                                children: (0,
                                N.jsx)(Ls, {
                                    pageType: Ss
                                })
                            })
                        })]
                    })]
                })
            };
            const $s = "index_page-container__uWksH"
              , ei = "index_page__-xiuX"
              , ti = "index_entering__yddHy";
            var ni = function(e) {
                var t = e.children
                  , n = e.animationPath
                  , r = (0,
                s.useLocation)()
                  , i = (0,
                a.useState)(r)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1]
                  , d = (0,
                a.useState)("")
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = function() {
                    return p(ti),
                    setTimeout((function() {
                        p("")
                    }
                    ), 200)
                };
                return (0,
                a.useEffect)((function() {
                    var e = null;
                    return n ? n.includes(r.pathname) && (e = f()) : e = f(),
                    l(r),
                    function() {
                        e && clearTimeout(e)
                    }
                }
                ), [r]),
                (0,
                N.jsx)("div", {
                    className: y()($s),
                    children: (0,
                    N.jsx)("div", {
                        className: y()(ei, m),
                        children: (0,
                        N.jsx)(s.Switch, {
                            location: c,
                            children: t
                        })
                    })
                })
            }
              , ai = {
                signupLink: "/join",
                downloadLink: "/download?redirectAppStore=true",
                bindTgLink: "https://www.okx.com/ul/3h87sZ",
                verifyKycLink: "https://www.okx.com/ul/3W2uzP",
                totalVerifiedCount: 0,
                isConnectTelegram: !1,
                isKyc: !1,
                joinedDate: 0,
                gradeCategories: [],
                pointGradeName: "",
                totalEarnedPoints: 0
            }
              , ri = (0,
            a.createContext)({
                accountBindingInfo: ai,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , si = function() {
                return (0,
                a.useContext)(ri)
            }
              , ii = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(ai)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = Boolean((null === s || void 0 === s ? void 0 : s.isConnectTelegram) && (null === s || void 0 === s ? void 0 : s.isKyc))
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 1 ? r[1] : void 0,
                                n = {
                                    isRecheckBinding: r.length > 0 && void 0 !== r[0] && r[0]
                                },
                                e.next = 5,
                                Le(t, n);
                            case 5:
                                return a = e.sent,
                                m(!1),
                                a && i(a),
                                e.abrupt("return", a);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), []);
                (0,
                a.useEffect)((function() {
                    f(!1, !0)
                }
                ), [f]);
                var x = (0,
                a.useMemo)((function() {
                    return {
                        accountBindingInfo: s,
                        isLoading: _,
                        getAccountBindingInfo: f,
                        isCertified: p
                    }
                }
                ), [s, f, p, _]);
                return (0,
                N.jsx)(ri.Provider, {
                    value: x,
                    children: t
                })
            };
            const oi = "CampaignEndedIndicator_campaignEndedIndicator__t9IRX"
              , ci = "CampaignEndedIndicator_campaignEndedIcon__nIS3f";
            var li = function(e) {
                var t = e.className;
                return (0,
                N.jsxs)("span", {
                    className: y()(oi, t),
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okds-clock",
                        className: ci
                    }), (0,
                    Z.O4)("ok_game_okxracer_tag_phase421_ended")]
                })
            };
            const ui = "CampaignCard_cardContainer__3yu81"
              , di = "CampaignCard_dateRange__hvYLA"
              , _i = "CampaignCard_campaignEndedIndicator__6J91S"
              , mi = "CampaignCard_card__cYF8Y"
              , pi = "CampaignCard_campaignImg__YpUgC"
              , fi = "CampaignCard_round__MMyT5"
              , xi = "CampaignCard_content__1ZjVu"
              , hi = "CampaignCard_name__mfl60"
              , vi = "CampaignCard_desc__klZyx"
              , gi = "CampaignCard_points__jIZar"
              , ki = "CampaignCard_btn__v8gu9"
              , ji = "CampaignCard_btnContent__-5uC9";
            var Ni = function(e) {
                var t = e.campaign
                  , n = e.btnText
                  , a = e.onClick
                  , r = e.roundLogo
                  , s = void 0 === r || r
                  , i = t.logo
                  , c = t.title
                  , l = t.subTitle
                  , u = t.points;
                return (0,
                N.jsxs)("li", {
                    className: ui,
                    children: [t.endDate && t.startDate ? t.status === Ie.Ended ? (0,
                    N.jsx)(li, {
                        className: _i
                    }) : (0,
                    N.jsxs)("span", {
                        className: di,
                        children: [(0,
                        cn.o0)(new Date(t.startDate)), "\xa0-\xa0", (0,
                        cn.o0)(new Date(t.endDate))]
                    }) : null, (0,
                    N.jsxs)("div", {
                        className: mi,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(i),
                            pictureClassName: pi,
                            className: y()(pi, (0,
                            et.Z)({}, fi, s))
                        }), (0,
                        N.jsxs)("div", {
                            className: xi,
                            children: [(0,
                            N.jsx)("p", {
                                className: hi,
                                children: c
                            }), (0,
                            N.jsx)("p", {
                                className: vi,
                                children: l
                            }), u && (0,
                            N.jsx)("p", {
                                className: gi,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: "+".concat((0,
                                    cn.uf)(u))
                                })
                            }), (0,
                            N.jsx)(V.default, {
                                type: V.default.TYPE.default,
                                category: V.default.CATEGORY.outline,
                                size: V.default.SIZE.s,
                                className: ki,
                                contentClassName: ji,
                                onClick: a,
                                children: n
                            })]
                        })]
                    })]
                })
            }
              , Ci = n(32267);
            const bi = {
                description: "Campaigns_description__Q6-cw",
                title: "Campaigns_title__a2IwB",
                count: "Campaigns_count__LxNZj",
                loaderContainer: "Campaigns_loaderContainer__tSglx",
                list: "Campaigns_list__y6Ye0",
                noCampaigns: "Campaigns_noCampaigns__faP1c",
                desc: "Campaigns_desc__q+hH9",
                campaignBottomSheet: "Campaigns_campaignBottomSheet__fMNLC",
                dateRange: "Campaigns_dateRange__AqH5L",
                subTitle: "Campaigns_subTitle__HyltI",
                divider: "Campaigns_divider__QdOyR",
                points: "Campaigns_points__Vrw3k",
                button: "Campaigns_button__nWE3x"
            };
            var wi = function() {
                var e = (0,
                a.useState)([])
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , s = (0,
                a.useState)(!0)
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , c = i[1];
                (0,
                a.useEffect)((function() {
                    c(!0),
                    Re(!0).then((function(e) {
                        e && r(e)
                    }
                    )).catch((function() {}
                    )).finally((function() {
                        c(!1)
                    }
                    ))
                }
                ), []);
                function l(e) {
                    Xe({
                        children: (0,
                        N.jsxs)("div", {
                            className: bi.campaignBottomSheet,
                            children: [e.status === Ie.Ended ? (0,
                            N.jsx)("span", {
                                className: bi.dateRange,
                                children: (0,
                                N.jsx)(li, {
                                    className: bi.campaignEndedIndicator
                                })
                            }) : (0,
                            N.jsxs)("span", {
                                className: bi.dateRange,
                                children: [(0,
                                cn.o0)(new Date(e.startDate)), "\xa0-\xa0", (0,
                                cn.o0)(new Date(e.endDate))]
                            }), (0,
                            N.jsx)("p", {
                                className: bi.subTitle,
                                children: e.title
                            }), (0,
                            N.jsx)("p", {
                                className: bi.desc,
                                children: e.description
                            }), (0,
                            N.jsx)("hr", {
                                className: bi.divider
                            }), (0,
                            N.jsx)("p", {
                                className: bi.points,
                                children: e.pointDescription
                            }), e.status !== Ie.Ended && (0,
                            N.jsx)($e, {
                                className: bi.button,
                                onClick: function() {
                                    !function(e) {
                                        var t, n;
                                        null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(e.webUrl)
                                    }(e)
                                },
                                text: (0,
                                Z.O4)("ok_game_okxracer_btn_phase421_go_campaign")
                            })]
                        })
                    })
                }
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("p", {
                        className: bi.title,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_title_phase421_campaigns"), "\xa0", (0,
                        N.jsxs)("span", {
                            className: bi.count,
                            children: ["(", n.length, ")"]
                        })]
                    }), o && (0,
                    N.jsx)("div", {
                        className: bi.loaderContainer,
                        children: (0,
                        N.jsx)(ga.Z, {})
                    }), !o && 0 === n.length && (0,
                    N.jsx)(Ci.Z.State, {
                        type: Ci.Z.State.TYPE.noRecord,
                        className: bi.noCampaigns,
                        title: (0,
                        Z.O4)("ok_game_okxracer_title_phase421_no_campaigns"),
                        description: (0,
                        N.jsx)("p", {
                            className: bi.desc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase421_stay_tuned")
                        })
                    }), (0,
                    N.jsx)("ul", {
                        className: bi.list,
                        children: n.map((function(e) {
                            return (0,
                            N.jsx)(Ni, {
                                campaign: e,
                                btnText: (0,
                                Z.O4)("ok_game_okxracer_btn_phase421_view_campaign"),
                                onClick: function() {
                                    l(e)
                                }
                            }, e.id)
                        }
                        ))
                    })]
                })
            }
              , yi = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Zi = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function Pi(e) {
                var t = {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: yi.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_verify")
                }
                  , n = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: yi.SIGNUP,
                    status: Zi(yi.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: yi.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var Oi = function(e) {
                var t = (0,
                a.useState)(Pi(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = I().uid;
                (0,
                a.useEffect)((function() {
                    s(Pi(e))
                }
                ), [e]);
                var o = (0,
                a.useCallback)((function(t) {
                    var n, a, o = r.find((function(e) {
                        return e.type === t
                    }
                    ));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(o.url),
                        t) {
                        case yi.SIGNUP:
                        case yi.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Pi(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case yi.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OKXRacerSurprisesPage_Page_Signup_View",
                                    anchor: "OKXRacerSurprisesPage_Page_Signup_View",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case yi.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case yi.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l);
                            break;
                        case yi.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                T.act({
                                    action: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                    anchor: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                    params: {
                                        telegramid: e
                                    },
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }(l)
                        }
                    }
                }
                ), [r, e]);
                return {
                    list: r,
                    handleClick: o
                }
            };
            const Ti = "CertifyBottomSheet_certifySteps__-zWCO"
              , Si = "CertifyBottomSheet_taskList__uK656"
              , Ei = "CertifyBottomSheet_task__iLWrC"
              , Bi = "CertifyBottomSheet_details__YoXf3"
              , Ii = "CertifyBottomSheet_title__X1Tnl"
              , Li = "CertifyBottomSheet_subTitle__EzVrR"
              , Ri = "CertifyBottomSheet_btn__JLhoo"
              , Ai = "CertifyBottomSheet_btnContent__wrzU-"
              , Di = "CertifyBottomSheet_verifyBtn__lYfYD";
            var Fi = ["getAccountBindingInfo"]
              , Gi = function(e) {
                var t = e.getAccountBindingInfo
                  , n = (0,
                b.Z)(e, Fi)
                  , a = I().uid
                  , r = si().accountBindingInfo
                  , s = Oi(r)
                  , i = s.list
                  , o = s.handleClick;
                return (0,
                N.jsx)(ze, (0,
                k.Z)((0,
                k.Z)({}, n), {}, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                    titleCenter: !0,
                    containerClassName: Ti,
                    children: (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("ul", {
                            className: Si,
                            children: i.map((function(e) {
                                return (0,
                                N.jsxs)("li", {
                                    className: Ei,
                                    children: [(0,
                                    N.jsxs)("div", {
                                        className: Bi,
                                        children: [(0,
                                        N.jsx)("p", {
                                            className: Ii,
                                            children: e.title
                                        }), (0,
                                        N.jsx)("p", {
                                            className: Li,
                                            children: e.subTitle
                                        })]
                                    }), (0,
                                    N.jsx)($e, {
                                        text: e.btnText,
                                        size: V.default.SIZE.xs,
                                        className: Ri,
                                        contentClassName: Ai,
                                        onClick: function() {
                                            o(e.type)
                                        }
                                    })]
                                }, e.type)
                            }
                            ))
                        }), (0,
                        N.jsx)($e, {
                            className: Di,
                            onClick: function() {
                                t(!0),
                                function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    T.act({
                                        action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                                        anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                                        params: {
                                            telegramid: e
                                        },
                                        actionType: "",
                                        elementType: "",
                                        ampProject: "okx"
                                    })
                                }({
                                    telegramid: a
                                })
                            },
                            text: (0,
                            Z.O4)("ok_game_okxracer_surprises_verify")
                        })]
                    })
                }))
            }
              , Ui = function() {
                var e = si().accountBindingInfo || {}
                  , t = e.gradeCategories
                  , n = e.pointGradeName
                  , r = void 0 === n ? "" : n
                  , s = e.totalEarnedPoints
                  , i = void 0 === s ? 0 : s
                  , o = (0,
                a.useMemo)((function() {
                    return !t || t.length <= 0 ? 0 : t.findIndex((function(e) {
                        return e.pointGradeName == r
                    }
                    ))
                }
                ), [t, r]);
                return {
                    currentGradeIndex: o,
                    currentGrade: null === t || void 0 === t ? void 0 : t[o],
                    gradeCategories: t,
                    pointGradeName: r,
                    totalEarnedPoints: i
                }
            };
            const Wi = {
                container: "Grades_container__d1oD4",
                cardBox: "Grades_cardBox__Z4YxU",
                content: "Grades_content__7jPV6",
                levelLogoBox: "Grades_levelLogoBox__6C4-+",
                levelLogo: "Grades_levelLogo__tIzPj",
                logoGrade: "Grades_logoGrade__IwsIy",
                switchBtn: "Grades_switchBtn__dYdo9",
                leftBtn: "Grades_leftBtn__exu0N",
                rightBtn: "Grades_rightBtn__0NWwR",
                currentGrade: "Grades_currentGrade__b0mob",
                gradeTitle: "Grades_gradeTitle__BC-VS",
                progressNum: "Grades_progressNum__wvm2X",
                progressSlide: "Grades_progressSlide__s3h-u",
                progress: "Grades_progress__WuMkb",
                "fade-in": "Grades_fade-in__itExd",
                fadeIn: "Grades_fade-in__itExd",
                "fade-out": "Grades_fade-out__L3IX9",
                fadeOut: "Grades_fade-out__L3IX9"
            };
            var Mi = function() {
                var e = Ui()
                  , t = e.currentGradeIndex
                  , n = e.currentGrade
                  , r = e.gradeCategories
                  , i = e.pointGradeName
                  , c = e.totalEarnedPoints
                  , l = (0,
                s.useHistory)()
                  , d = l.replace
                  , _ = l.goBack
                  , m = (0,
                s.useLocation)().hash
                  , p = (0,
                a.useState)(0)
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = (0,
                a.useState)(!0)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1];
                (0,
                a.useEffect)((function() {
                    if (r && !(r.length <= 0)) {
                        var e = r.map((function(e) {
                            return "".concat(o.Z.cdnBaseUrl).concat(null === e || void 0 === e ? void 0 : e.logo)
                        }
                        ));
                        e.forEach((function(e) {
                            (new Image).src = e
                        }
                        ))
                    }
                }
                ), [r]),
                (0,
                a.useEffect)((function() {
                    var e, t, n;
                    return null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.show().onClick(_),
                    function() {
                        var e, t, n;
                        null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.hide().offClick(_)
                    }
                }
                ), [_, m, d]),
                (0,
                a.useEffect)((function() {
                    h(t)
                }
                ), [t]),
                (0,
                a.useEffect)((function() {
                    j(!0)
                }
                ), [x]);
                var C = (0,
                a.useMemo)((function() {
                    return !(!r || r.length <= 0) && (n && (null === n || void 0 === n ? void 0 : n.pointGradeName) === r[x].pointGradeName)
                }
                ), [r, i, x])
                  , b = (0,
                a.useMemo)((function() {
                    return r ? r[x] : null
                }
                ), [x, r])
                  , w = function(e) {
                    j(!1),
                    setTimeout((function() {
                        return h(e)
                    }
                    ), 300)
                }
                  , O = (0,
                a.useCallback)((function() {
                    var e = x;
                    0 !== e && e--,
                    w(e)
                }
                ), [r, x])
                  , T = (0,
                a.useCallback)((function() {
                    var e = x;
                    e !== (null === r || void 0 === r ? void 0 : r.length) - 1 && e++,
                    w(e)
                }
                ), [r, x])
                  , S = t === r.length - 1;
                return (0,
                N.jsx)("div", {
                    className: Wi.container,
                    children: (0,
                    N.jsx)("div", {
                        className: Wi.cardBox,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(Wi.content, k ? Wi.fadeIn : Wi.fadeOut),
                            children: [(0,
                            N.jsx)("div", {
                                className: Wi.levelLogoBox,
                                children: (0,
                                N.jsx)("img", {
                                    src: null !== b && void 0 !== b && b.logo ? "".concat(o.Z.cdnBaseUrl).concat(null === b || void 0 === b ? void 0 : b.logo) : "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: y()(Wi.levelLogo, t >= x ? Wi.logoLight : Wi.logoGrade)
                                })
                            }), 0 !== x && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-left-centered-md", Wi.leftBtn, Wi.switchBtn),
                                onClick: O
                            }), x !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-right-centered-md", Wi.rightBtn, Wi.switchBtn),
                                onClick: T
                            }), (0,
                            N.jsx)("div", {
                                className: Wi.currentGrade,
                                children: C && (0,
                                Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            N.jsx)("div", {
                                className: Wi.gradeTitle,
                                children: null === b || void 0 === b ? void 0 : b.pointGradeName
                            }), (0,
                            N.jsx)("div", {
                                className: Wi.progressNum,
                                children: b ? C && S ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        cn.uf)(c)
                                    }), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : C ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        cn.uf)(c)
                                    }), " /", " ", (0,
                                    cn.uf)(b.upperBound), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                N.jsx)(N.Fragment, {
                                    children: b.upperBound ? (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        cn.uf)(b.lowerBound),
                                        top: (0,
                                        cn.uf)(b.upperBound)
                                    }) : (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        cn.uf)(b.lowerBound)
                                    })
                                }) : ""
                            }), C && !S && (0,
                            N.jsx)("div", {
                                className: Wi.progressSlide,
                                children: (0,
                                N.jsx)("div", {
                                    className: Wi.progress,
                                    style: {
                                        width: "".concat(c / (Number(null === b || void 0 === b ? void 0 : b.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const Vi = "License_loader__4L8AA"
              , Hi = "License_container__MxoNJ"
              , Yi = "License_pageTitle__h+Yja"
              , Ki = "License_verifiedUsers__q-uxi"
              , zi = "License_avatars__3HegJ"
              , Xi = "License_usersCount__fkW5h"
              , Ji = "License_title__e84VW"
              , qi = "License_termsAndConditions__jeApC";
            var Qi = n(35774)
              , $i = n(48006)
              , eo = n(40544);
            const to = "LicenseCard_licenseCard__+wyQA"
              , no = "LicenseCard_certified__jm59h"
              , ao = "LicenseCard_header__LUvW7"
              , ro = "LicenseCard_title__rMFOB"
              , so = "LicenseCard_content__i2ESe"
              , io = "LicenseCard_name__9TvhC"
              , oo = "LicenseCard_tgInfo__rBwsf"
              , co = "LicenseCard_squareDivider__e6Uce"
              , lo = "LicenseCard_innerCard__n57Gb"
              , uo = "LicenseCard_details__boiyi"
              , _o = "LicenseCard_label__JX11k"
              , mo = "LicenseCard_link__19+Q+"
              , po = "LicenseCard_linkIcon__oNENM"
              , fo = "LicenseCard_points__MkLL5"
              , xo = "LicenseCard_icon__b6JLr"
              , ho = "LicenseCard_certifyBtn__Z6vHo"
              , vo = "LicenseCard_infoPopoverDesc__Km8Og"
              , go = "LicenseCard_gradeImage__fd+PJ";
            var ko = function() {
                return (0,
                N.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: (0,
                    N.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.97777 2.5H2.35555C2.15919 2.5 2 2.65919 2 2.85555V7.47777C2 7.67413 2.15919 7.83332 2.35555 7.83332H6.97777C7.17413 7.83332 7.33332 7.67413 7.33332 7.47777V2.85555C7.33332 2.65919 7.17413 2.5 6.97777 2.5ZM12.3134 7.83334H7.69118C7.49482 7.83334 7.33563 7.99253 7.33563 8.18889V12.8111C7.33563 13.0075 7.49482 13.1667 7.69118 13.1667H12.3134C12.5098 13.1667 12.6689 13.0075 12.6689 12.8111V8.18889C12.6689 7.99253 12.5098 7.83334 12.3134 7.83334ZM13.0222 2.5H17.6444C17.8408 2.5 18 2.65919 18 2.85555V7.47777C18 7.67413 17.8408 7.83332 17.6444 7.83332H13.0222C12.8259 7.83332 12.6667 7.67413 12.6667 7.47777V2.85555C12.6667 2.65919 12.8259 2.5 13.0222 2.5ZM6.97777 13.1667H2.35555C2.15919 13.1667 2 13.3259 2 13.5222V18.1444C2 18.3408 2.15919 18.5 2.35555 18.5H6.97777C7.17413 18.5 7.33332 18.3408 7.33332 18.1444V13.5222C7.33332 13.3259 7.17413 13.1667 6.97777 13.1667ZM13.0222 13.1667H17.6444C17.8408 13.1667 18 13.3259 18 13.5222V18.1444C18 18.3408 17.8408 18.5 17.6444 18.5H13.0222C12.8259 18.5 12.6667 18.3408 12.6667 18.1444V13.5222C12.6667 13.3259 12.8259 13.1667 13.0222 13.1667Z",
                        fill: "#121212"
                    })
                })
            }
              , jo = function(e) {
                var t, n = e.showCertifyBottomSheet, a = (0,
                s.useLocation)(), r = I(), i = r.username, c = r.tgUsername, l = Me().accumPoints, u = si(), d = u.accountBindingInfo, _ = u.isCertified, m = Ui().currentGrade, p = null !== (t = null === d || void 0 === d ? void 0 : d.joinedDate) && void 0 !== t ? t : 0;
                return (0,
                N.jsxs)("section", {
                    className: y()(to, (0,
                    et.Z)({}, no, _)),
                    children: [(0,
                    N.jsxs)("div", {
                        className: ao,
                        children: [(0,
                        N.jsx)(ko, {}), (0,
                        N.jsx)("span", {
                            className: ro,
                            children: _ ? (0,
                            Z.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                            Z.O4)("ok_game_okxracer_label_phase4_uncertified")
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: so,
                        children: [(0,
                        N.jsx)("p", {
                            className: io,
                            children: i
                        }), (0,
                        N.jsxs)("p", {
                            className: oo,
                            children: [c && "@".concat(c), p > 0 && (0,
                            N.jsxs)(N.Fragment, {
                                children: [c && (0,
                                N.jsx)("svg", {
                                    className: co,
                                    width: "2",
                                    height: "2",
                                    viewBox: "0 0 2 2",
                                    children: (0,
                                    N.jsx)("rect", {
                                        width: "2",
                                        height: "2",
                                        fill: "currentColor"
                                    })
                                }), (0,
                                Z.O4)("ok_game_okxracer_text_phase4_joined_date", {
                                    date: (0,
                                    cn.o0)(new Date(p), {
                                        format: Qi.a1.StandardDate
                                    })
                                })]
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: lo,
                            children: [(0,
                            N.jsxs)("div", {
                                className: uo,
                                children: [(0,
                                N.jsx)("p", {
                                    className: _o,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                }), (0,
                                N.jsxs)(s.Link, {
                                    to: {
                                        pathname: W,
                                        hash: a.hash
                                    },
                                    className: mo,
                                    children: [(0,
                                    $i.Z)(null === d || void 0 === d ? void 0 : d.pointGradeName), (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okds-arrow-chevron-right-centered-md",
                                        className: po
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: fo,
                                    children: [(0,
                                    N.jsx)("span", {
                                        className: _o,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                    }), "\xa0", (0,
                                    cn.uf)(l), (0,
                                    N.jsx)(eo.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                        contentClassName: vo,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: xo
                                        })
                                    })]
                                })]
                            }), m && (0,
                            N.jsx)(H.Z, {
                                pictureClassName: go,
                                className: go,
                                src: "".concat(o.Z.cdnBaseUrl, "/").concat(m.logo)
                            })]
                        }), !_ && (0,
                        N.jsx)($e, {
                            className: ho,
                            size: V.default.SIZE.md,
                            text: (0,
                            Z.O4)("ok_game_okxracer_btn_phase4_certify"),
                            onClick: n
                        })]
                    })]
                })
            }
              , No = function() {
                var e, t = I().uid, n = si(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, d = n.isLoading, _ = (0,
                a.useState)(!1), m = (0,
                u.Z)(_, 2), p = m[0], f = m[1], x = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 0 && void 0 !== r[0] && r[0],
                                n = r.length > 1 ? r[1] : void 0,
                                e.prev = 2,
                                e.next = 5,
                                i(t, n);
                            case 5:
                                a = e.sent,
                                !t || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || X(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(2),
                                X(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 9]])
                }
                ))), [i]);
                if ((0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || x()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [x]),
                (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
                            action: "OKXRacerSurprisesPage_Page_FullPage_View",
                            anchor: "OKXRacerSurprisesPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: t
                    })
                }
                ), [t]),
                d)
                    return (0,
                    N.jsx)("div", {
                        className: Vi,
                        children: (0,
                        N.jsx)(ga.Z, {})
                    });
                var h = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0;
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: Hi,
                        children: [!s && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)($r, {
                                className: Yi,
                                html: (0,
                                Z.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                            }), (0,
                            N.jsxs)("div", {
                                className: Ki,
                                children: [(0,
                                N.jsx)(H.Z, {
                                    className: zi,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                                }), (0,
                                N.jsx)("span", {
                                    className: Xi,
                                    children: h > 0 ? (0,
                                    cn.uf)(h) : "--"
                                }), (0,
                                Z.O4)("ok_game_okxracer_text_racers_already_verified")]
                            })]
                        }), (0,
                        N.jsx)(jo, {
                            showCertifyBottomSheet: function() {
                                f(!0)
                            }
                        }), s && (0,
                        N.jsx)(wi, {}), !s && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("p", {
                                className: Ji,
                                children: (0,
                                Z.O4)("ok_game_okxracer_title_phase421_campaigns")
                            }), (0,
                            N.jsx)(Ni, {
                                roundLogo: !1,
                                campaign: {
                                    logo: "/cdn/assets/imgs/249/DDDFBE2458303008.png",
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_title_phase421_exciting_camp"),
                                    subTitle: (0,
                                    Z.O4)("ok_game_okxracer_text_phase421_verify_identity")
                                },
                                btnText: (0,
                                Z.O4)("ok_game_okxracer_btn_phase421_verify"),
                                onClick: function() {
                                    f(!0)
                                }
                            }), (0,
                            N.jsx)(Pn, {
                                className: qi
                            })]
                        })]
                    }), (0,
                    N.jsx)(Gi, {
                        visible: p,
                        onClose: function() {
                            f(!1)
                        },
                        getAccountBindingInfo: x
                    })]
                })
            }
              , Co = function() {
                return (0,
                N.jsx)(ii, {
                    children: (0,
                    N.jsxs)(ni, {
                        animationPath: [W],
                        children: [(0,
                        N.jsx)(s.Route, {
                            path: U,
                            component: No,
                            exact: !0
                        }), (0,
                        N.jsx)(s.Route, {
                            path: W,
                            component: C(Mi),
                            exact: !0
                        })]
                    })
                })
            };
            const bo = "QrCode_container__r4Fu7"
              , wo = "QrCode_qrCode__16PWa"
              , yo = "QrCode_title__+cibb"
              , Zo = "QrCode_message__eaOzW";
            var Po = function() {
                return (0,
                N.jsxs)("div", {
                    className: bo,
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: wo,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    N.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            qr.dU)((0,
                            Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: yo
                    }), (0,
                    N.jsx)("p", {
                        className: Zo,
                        children: (0,
                        Z.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            }
              , Oo = n(42982);
            const To = "PullupList_loading__+51Dh"
              , So = "PullupList_listLoadItem__XcvkH"
              , Eo = "PullupList_listLeft__4eGh6"
              , Bo = "PullupList_listRight__w7Ely"
              , Io = "PullupList_listLoading__whJeg";
            var Lo = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(So),
                    children: [(0,
                    N.jsx)(os, {
                        className: Eo
                    }), (0,
                    N.jsx)(os, {
                        className: Bo
                    })]
                })
            }
              , Ro = function() {
                return (0,
                N.jsx)("div", {
                    className: Io,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        N.jsx)(Lo, {}, t)
                    }
                    ))
                })
            }
              , Ao = function(e) {
                var t = e.loadData
                  , n = e.children
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , x = (0,
                a.useRef)(null)
                  , h = (0,
                a.useState)(!1)
                  , v = (0,
                u.Z)(h, 2)
                  , g = v[0]
                  , k = v[1]
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var n;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (-1 === f.current.total || !(i.length >= f.current.total || !0 === f.current.stop)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return p(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(f.current.page, f.current.total);
                                case 6:
                                    (n = e.sent) && n.rows ? (f.current.page += 1,
                                    o((function(e) {
                                        return [].concat((0,
                                        Oo.Z)(e), (0,
                                        Oo.Z)(n.rows))
                                    }
                                    )),
                                    f.current.total = 0 === n.rows.length ? i.length : n.total) : f.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    f.current.stop = !0;
                                case 13:
                                    p(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 10]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , C = (0,
                Gr.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , b = function(e) {
                    e[0].isIntersecting && !m && !1 === f.current.stop && k(!g)
                };
                return (0,
                a.useEffect)((function() {
                    var e = new IntersectionObserver(b,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return x.current && e.observe(x.current),
                    function() {
                        x.current && e.unobserve(x.current)
                    }
                }
                ), [m]),
                (0,
                a.useEffect)((function() {
                    C()
                }
                ), [g]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    N.jsx)("div", {
                        className: To,
                        ref: x,
                        children: m && (0,
                        N.jsx)(Ro, {})
                    })]
                })
            };
            const Do = "InviteList_listItem__q4jhG"
              , Fo = "InviteList_name__LLQgt"
              , Go = "InviteList_point__kXtCn"
              , Uo = "InviteList_earnedPrice__4vAfw"
              , Wo = "InviteList_pointNumber__v4P1H";
            var Mo = function() {
                var e = (0,
                a.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, s, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = !1,
                                    1 === t && (a = !0),
                                    s = {
                                        pageNo: t
                                    },
                                    n && n >= 0 && (s.total = n),
                                    e.next = 6,
                                    ye(s, a);
                                case 6:
                                    return (i = e.sent) && r(i.accumPoints),
                                    e.abrupt("return", i);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: Uo,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            N.jsx)("span", {
                                className: Wo,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    cn.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    N.jsx)(Ao, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            N.jsxs)("div", {
                                className: Do,
                                children: [(0,
                                N.jsx)("div", {
                                    className: Fo,
                                    children: e.extInviteeName
                                }), (0,
                                N.jsx)("div", {
                                    className: Go,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        cn.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const Vo = "ReferralsPage_container__V48m1"
              , Ho = "ReferralsPage_inviteDetail__L1MhM"
              , Yo = "ReferralsPage_detailItem__ujOp+"
              , Ko = "ReferralsPage_dot__zKW7L"
              , zo = "ReferralsPage_detailTitle__OE657"
              , Xo = "ReferralsPage_detailInfo__YC+Y9"
              , Jo = "ReferralsPage_inviteList__Jksx8";
            var qo = function() {
                var e = I().uid
                  , t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_refer_your_friends"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_rewards")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_get_bonus"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_hint")
                }];
                return (0,
                a.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        T.act({
                            action: "OkxRacerFriendsPage_Page_FullPage_View",
                            anchor: "OkxRacerFriendsPage_Page_FullPage_View",
                            params: {
                                telegramid: e
                            },
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }({
                        telegramid: e
                    })
                }
                ), []),
                (0,
                N.jsxs)("div", {
                    className: Vo,
                    children: [(0,
                    N.jsx)($r, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    N.jsx)("div", {
                        className: Ho,
                        children: t.map((function(e) {
                            return (0,
                            N.jsxs)("div", {
                                className: Yo,
                                children: [(0,
                                N.jsx)("div", {
                                    className: Ko
                                }), (0,
                                N.jsx)("div", {
                                    className: zo,
                                    children: e.title
                                }), (0,
                                N.jsx)("div", {
                                    className: Xo,
                                    children: e.detailInfo
                                })]
                            }, e.title)
                        }
                        ))
                    }), (0,
                    N.jsx)("div", {
                        className: Jo,
                        children: (0,
                        N.jsx)(Mo, {})
                    }), (0,
                    N.jsx)(ms, {})]
                })
            }
              , Qo = n(74914)
              , $o = n(59257);
            const ec = "index_taskItemPlaceholder__6HYF9"
              , tc = "index_task__wcySb";
            var nc = function() {
                return (0,
                N.jsx)(N.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        N.jsx)("div", {
                            className: y()(ec),
                            children: (0,
                            N.jsx)(os, {
                                className: tc
                            })
                        }, t)
                    }
                    ))
                })
            }
              , ac = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , rc = (0,
            a.createContext)({
                boosts: [],
                tasks: ac,
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                doTask: function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                partner: void 0,
                setSelectedPartner: function() {}
            })
              , sc = function() {
                return (0,
                a.useContext)(rc)
            }
              , ic = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(ac)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)()
                  , f = (0,
                u.Z)(p, 2)
                  , x = f[0]
                  , h = f[1]
                  , v = Me().updateGameInfoFromServer
                  , g = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Te(!0), Ee(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : ac);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [])
                  , k = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var n;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Se({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Te(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    J(e.t0);
                                case 13:
                                    return e.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, r, s, i, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = {
                                        id: t
                                    },
                                    n && (a.taskContext = n),
                                    e.next = 5,
                                    Be(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Ee(), v()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : ac,
                                    m(d),
                                    x && (_ = d.taskGroups.find((function(e) {
                                        return e.groupName === x.groupName
                                    }
                                    ))) && h(_)),
                                    e.abrupt("return", !0);
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(0),
                                    J(e.t0);
                                case 18:
                                    return e.abrupt("return", !1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                (0,
                a.useEffect)((function() {
                    g()
                }
                ), [g]);
                var C = (0,
                a.useCallback)((function(e) {
                    h(e)
                }
                ), []);
                return (0,
                N.jsx)(rc.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: x,
                        setSelectedPartner: C
                    },
                    children: t
                })
            };
            const oc = "WalletTask_sheet-container__bz-jm"
              , cc = "WalletTask_sheet-name__xuyl9"
              , lc = "WalletTask_sheet-desc__snmOq"
              , uc = "WalletTask_sheeLogo__LcXBr"
              , dc = "WalletTask_sheeLogoCheck__4qpgw"
              , _c = "WalletTask_sheetCopyBox__vbEpV"
              , mc = "WalletTask_sheetCopyIcon__shZrx"
              , pc = "WalletTask_btn__JBh79"
              , fc = "WalletTask_btn-txt__qnE8C";
            var xc = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , hc = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , vc = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.onClick
                  , i = e.customDesc
                  , _ = (0,
                d.dG)()
                  , m = (0,
                u.Z)(_, 1)[0]
                  , p = (0,
                a.useRef)((function() {}
                ))
                  , f = r().useState(!1)
                  , x = (0,
                u.Z)(f, 2)
                  , h = x[0]
                  , v = x[1];
                (0,
                a.useEffect)((function() {
                    return (null === t || void 0 === t ? void 0 : t.state) === Bt.finished ? T.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : T.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    function() {
                        p.current && p.current()
                    }
                }
                ), []);
                var g = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var a, r, i, o;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return v(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    Vr(m, n);
                                case 4:
                                    if (!(a = e.sent)) {
                                        e.next = 12;
                                        break
                                    }
                                    if (r = (0,
                                    u.Z)(a, 2),
                                    i = r[0],
                                    o = r[1],
                                    p.current = o,
                                    e.t0 = s,
                                    !e.t0) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 12,
                                    s(t, JSON.stringify((0,
                                    k.Z)({
                                        telegramId: n
                                    }, i)), i.tonAddress);
                                case 12:
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t1 = e.catch(1),
                                    console.error(e.t1);
                                case 17:
                                    v(!1);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 14]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(d.P6, {
                        style: {
                            display: "none"
                        }
                    }), (null === t || void 0 === t ? void 0 : t.state) === Bt.finished && t.context.actionType === Oe.WalletConnect ? (0,
                    N.jsxs)("div", {
                        className: oc,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(hc),
                            className: uc
                        }), (0,
                        N.jsx)("div", {
                            className: cc,
                            children: t.context.nameFinished
                        }), (0,
                        N.jsxs)("div", {
                            className: _c,
                            children: [(0,
                            N.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", mc),
                                onClick: function() {
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Oe.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        X(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        X(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.fill,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: pc,
                            onClick: function() {
                                s()
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: fc,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    N.jsxs)("div", {
                        className: oc,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(xc),
                            className: dc
                        }), (0,
                        N.jsx)("div", {
                            className: cc,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        N.jsx)("div", {
                            className: lc,
                            children: i || (null === t || void 0 === t ? void 0 : t.context.desc)
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.fill,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: pc,
                            loading: h,
                            onClick: g,
                            children: (0,
                            N.jsx)("div", {
                                className: fc,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            };
            const gc = "WalletDepositTask_sheet-container__7+LUG"
              , kc = "WalletDepositTask_sheet-name__RuWrl"
              , jc = "WalletDepositTask_sheet-desc__S5hoQ"
              , Nc = "WalletDepositTask_sheeLogo__VPRz9"
              , Cc = "WalletDepositTask_sheetCopyBox__FvPfk"
              , bc = "WalletDepositTask_sheetCopyIcon__KeD4-"
              , wc = "WalletDepositTask_btn__kCKz2"
              , yc = "WalletDepositTask_depositBtn__TPPeH"
              , Zc = "WalletDepositTask_btn-txt__tvio1";
            var Pc = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Oc = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.taskList
                  , i = e.onClick
                  , d = Me().context
                  , _ = sc().doTask
                  , m = r().useState("")
                  , p = (0,
                u.Z)(m, 2)
                  , f = p[0]
                  , x = p[1]
                  , h = (0,
                a.useRef)((function() {}
                ));
                (0,
                a.useEffect)((function() {
                    return x(d.tonAddress || ""),
                    function() {
                        h.current && h.current()
                    }
                }
                ), []);
                var v = (0,
                a.useMemo)((function() {
                    return s.find((function(e) {
                        var t;
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === Oe.WalletConnect
                    }
                    ))
                }
                ), [s])
                  , g = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n, a) {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((null === t || void 0 === t ? void 0 : t.state) !== Bt.unfinished) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    _(null === t || void 0 === t ? void 0 : t.id, n);
                                case 3:
                                    e.sent && (x(a || ""),
                                    X(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                N.jsx)(N.Fragment, {
                    children: (null === v || void 0 === v ? void 0 : v.state) !== Bt.unfinished && f || (null === t || void 0 === t ? void 0 : t.context.actionType) !== Oe.WalletDepositConnect ? (null === t || void 0 === t ? void 0 : t.context.actionType) === Oe.WalletDepositConnect && (0,
                    N.jsxs)("div", {
                        className: gc,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Pc),
                            className: Nc
                        }), (0,
                        N.jsx)("div", {
                            className: kc,
                            children: null === t || void 0 === t ? void 0 : t.context.connectedTitle
                        }), (0,
                        N.jsx)("div", {
                            className: jc,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        N.jsxs)("div", {
                            className: Cc,
                            children: [(0,
                            N.jsx)("div", {
                                children: f
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", bc),
                                onClick: function() {
                                    try {
                                        navigator.clipboard.writeText(f || ""),
                                        X(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url"))
                                    } catch (e) {
                                        X(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.fill,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: yc,
                            onClick: function() {
                                i(t)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Zc,
                                children: null === t || void 0 === t ? void 0 : t.context.verifyBtnText
                            })
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.outline,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: wc,
                            onClick: function() {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(d.tonDeeplink)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Zc,
                                children: null === t || void 0 === t ? void 0 : t.context.depositBtnText
                            })
                        })]
                    }) : (0,
                    N.jsx)(vc, {
                        selectedTask: v,
                        onClick: function() {
                            var e = (0,
                            l.Z)((0,
                            c.Z)().mark((function e(t, n, a) {
                                return (0,
                                c.Z)().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            g(t, n, a);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        customDesc: null === t || void 0 === t ? void 0 : t.context.walletDepositDesc,
                        uid: n
                    })
                })
            };
            const Tc = "index_task-item__JdIYG"
              , Sc = "index_title__hYmAn"
              , Ec = "index_state__ddlCZ"
              , Bc = "index_item-left__BNG-l"
              , Ic = "index_item-right__V+4iT"
              , Lc = "index_icon__yk0cJ"
              , Rc = "index_done__h9mLm";
            var Ac = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context;
                return (0,
                N.jsxs)("div", {
                    className: Tc,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: Bc,
                        children: [(0,
                        N.jsx)("div", {
                            className: Sc,
                            children: i.name
                        }), (0,
                        N.jsx)("div", {
                            className: Ec,
                            children: " ".concat(s === Bt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            cn.uf)(r, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: Ic,
                        children: s === Bt.finished ? (0,
                        N.jsx)("div", {
                            className: Rc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_done")
                        }) : (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", Lc)
                        })
                    })]
                }, a)
            };
            const Dc = "index_container__LfQHA"
              , Fc = "index_sheet-container__7hIP5"
              , Gc = "index_sheet-name__+hUn6"
              , Uc = "index_sheet-desc__Uh4Uk"
              , Wc = "index_btn__+6gr5";
            function Mc(e) {
                var t, n = e.tasks, r = e.className, s = sc().doTask, i = (0,
                a.useState)(), o = (0,
                u.Z)(i, 2), d = o[0], _ = o[1], m = (0,
                a.useState)(!1), p = (0,
                u.Z)(m, 2), f = p[0], x = p[1], h = I().uid, v = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 7;
                                        break
                                    }
                                    if (t.context.actionType === Oe.OpenLink && t.context.redirectLink && (null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || r.WebApp.openLink(t.context.redirectLink)),
                                    t.state !== Bt.unfinished) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5,
                                    s(t.id, n);
                                case 5:
                                    e.sent && X(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"));
                                case 7:
                                    x(!1);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), g = (0,
                Gr.Z)((function(e) {
                    var t = (n || []).find((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.id) === e
                    }
                    ));
                    if (t) {
                        var a = t.context.actionType
                          , r = t.state;
                        (null === t || void 0 === t ? void 0 : t.state) === Bt.finished && a !== Oe.WalletConnect && a !== Oe.OpenLink || (_(t),
                        x(!0),
                        a === Oe.WalletConnect && (r === Bt.finished ? T.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : T.act({
                            action: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })))
                    }
                }
                ), {
                    wait: 500,
                    leading: !0
                }).run, k = (0,
                Gr.Z)(v, {
                    wait: 500,
                    leading: !0
                }).run, j = (t = {},
                (0,
                et.Z)(t, Oe.WalletConnect, (function() {
                    return (0,
                    N.jsx)(vc, {
                        selectedTask: d,
                        onClick: function(e, t) {
                            return k(e, t)
                        },
                        uid: h
                    })
                }
                )),
                (0,
                et.Z)(t, Oe.WalletDepositConnect, (function() {
                    return (0,
                    N.jsx)(Oc, {
                        selectedTask: d,
                        taskList: n,
                        onClick: function(e) {
                            return k(e)
                        },
                        uid: h
                    })
                }
                )),
                t);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: y()(Dc, r),
                        children: n.length > 0 ? n.map((function(e) {
                            return (0,
                            N.jsx)(Ac, {
                                task: e,
                                onClick: g
                            }, e.id)
                        }
                        )) : (0,
                        N.jsx)(nc, {})
                    }), d && (0,
                    N.jsx)(ze, {
                        noContentPadding: !0,
                        visible: f,
                        onClose: function() {
                            _(void 0),
                            x(!1)
                        },
                        children: function() {
                            var e = j[d.context.actionType];
                            return e ? e() : function() {
                                var e = d.context
                                  , t = e.desc
                                  , n = e.btnText;
                                return (0,
                                N.jsxs)("div", {
                                    className: Fc,
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: Gc,
                                        children: e.name
                                    }), (0,
                                    N.jsx)("div", {
                                        className: Uc,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            qr.dU)(t)
                                        }
                                    }), (0,
                                    N.jsx)($e, {
                                        className: Wc,
                                        onClick: function() {
                                            return k(d)
                                        },
                                        text: n
                                    })]
                                })
                            }()
                        }()
                    })]
                })
            }
            const Vc = {
                container: "index_container__UavVq",
                header: "index_header__EKw6T",
                title: "index_title__J0Uw8",
                desc: "index_desc__C1bRh",
                status: "index_status__OIu7d",
                statusItem: "index_statusItem__Zhqk0",
                statusTitle: "index_statusTitle__42PdE",
                statusValue: "index_statusValue__bd5su",
                participantsIcon: "index_participantsIcon__BdqnP",
                tasks: "index_tasks__ctCRX",
                taskListHeader: "index_taskListHeader__ofYyy",
                taskCount: "index_taskCount__YgRaW"
            };
            var Hc = function() {
                var e = sc().partner
                  , t = (0,
                s.useHistory)()
                  , n = t.replace
                  , r = t.goBack
                  , i = (0,
                s.useLocation)().hash;
                if ((0,
                a.useEffect)((function() {
                    var t, a, s;
                    e ? null === (t = window.Telegram) || void 0 === t || null === (a = t.WebApp) || void 0 === a || null === (s = a.BackButton) || void 0 === s || s.show().onClick(r) : n(D + i);
                    return function() {
                        var e, t, n;
                        null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.hide().offClick(r)
                    }
                }
                ), [r, i, e, n]),
                !e)
                    return null;
                var c = e.numCompletedTasks
                  , l = e.numTasks
                  , u = e.tasks
                  , d = e.logo
                  , _ = e.groupName
                  , m = e.groupDesc
                  , p = e.totalPoints
                  , f = e.participants;
                return (0,
                N.jsxs)("div", {
                    className: Vc.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: Vc.header,
                        children: [(0,
                        N.jsx)(Qo.Z, {
                            size: $o.Z.sm,
                            className: Vc.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        N.jsx)("h1", {
                            className: Vc.title,
                            children: _
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: Vc.desc,
                        children: m
                    }), (0,
                    N.jsxs)("div", {
                        className: Vc.status,
                        children: [(0,
                        N.jsxs)("div", {
                            className: Vc.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: Vc.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: Vc.statusValue,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    cn.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: Vc.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: Vc.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            N.jsxs)("div", {
                                className: Vc.statusValue,
                                children: [(0,
                                N.jsx)(P.Z, {
                                    className: y()("okx-growth-friends", Vc.participantsIcon)
                                }), cn.ag.shortNumber(f, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: Vc.tasks,
                        children: [(0,
                        N.jsxs)("div", {
                            className: Vc.taskListHeader,
                            children: [(0,
                            N.jsx)("span", {
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            N.jsx)("span", {
                                className: Vc.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(c, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        N.jsx)(Mc, {
                            tasks: u
                        })]
                    })]
                })
            };
            const Yc = "index_backgroundWrapper__qN2sL"
              , Kc = "index_topContainer__Oestq"
              , zc = "index_pointsContainer__uT3xm"
              , Xc = "index_pointsNameBigger__vMdga"
              , Jc = "index_pointsNameSmaller__RJqmJ"
              , qc = "index_pointsValue__wGe00"
              , Qc = "index_availablePointsValue__n8yPm"
              , $c = "index_pointsDetails__nXNoJ"
              , el = "index_infoIcon__FqneN";
            var tl = function() {
                var e = Me()
                  , t = e.points
                  , n = e.accumPoints
                  , a = e.basePoint
                  , r = e.autopilotPointsPerHour;
                return (0,
                N.jsx)("div", {
                    className: Yc,
                    children: (0,
                    N.jsxs)("div", {
                        className: Kc,
                        children: [(0,
                        N.jsxs)("div", {
                            className: zc,
                            children: [(0,
                            N.jsx)("div", {
                                className: Xc,
                                children: (0,
                                Z.O4)("ok_game_okxracer_available_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: Qc,
                                children: ln.yx.thousandFormat(t || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: zc,
                            children: [(0,
                            N.jsxs)("div", {
                                className: Xc,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                N.jsx)(eo.Z, {
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: eo.Z.TYPES.neutral,
                                    children: (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okx-growth-information",
                                        className: el
                                    })
                                })]
                            }), (0,
                            N.jsx)("div", {
                                className: qc,
                                children: ln.yx.thousandFormat(n || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: $c,
                            children: [(0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsx)("div", {
                                    className: Jc,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                N.jsxs)("div", {
                                    className: qc,
                                    children: ["\ud83c\udfc1 ", ln.yx.thousandFormat(a || 0)]
                                })]
                            }), (0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsxs)("div", {
                                    className: Jc,
                                    children: [(0,
                                    Z.O4)("ok_game_okxracer_text_phase42_hourly_autopts"), (0,
                                    N.jsx)(eo.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                        type: eo.Z.TYPES.neutral,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: el
                                        })
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: qc,
                                    children: ["\ud83c\udfc1 ", ln.yx.thousandFormat(r || 0)]
                                })]
                            })]
                        })]
                    })
                })
            };
            const nl = "Tag_tag__tkWly";
            var al = function(e) {
                var t = e.text
                  , n = e.className;
                return (0,
                N.jsx)("span", {
                    className: y()(nl, n),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
              , rl = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === It.DailyBoost
            }
              , sl = function(e) {
                return "actionType"in e && e.actionType === Oe.UnLock
            }
              , il = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !rl(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                cn.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const ol = "index_sheet__FbHHx"
              , cl = "index_sheet-icon__H2xCV"
              , ll = "index_boostSheetTag__NbYFf"
              , ul = "index_sheet-title__RInQ-"
              , dl = "index_sheet-desc__W9myB"
              , _l = "index_sheet-data__FALtV"
              , ml = "index_sheet-point__Xrsvs"
              , pl = "index_sheet-lvl__f1+W-"
              , fl = "index_lockBtnContainer__4DPO7"
              , xl = "index_btn__bxKiJ"
              , hl = "index_boost-data-split-point__TaGIo";
            var vl = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t
                  , r = a.context
                  , s = a.curStage
                  , i = a.totalStage
                  , c = a.isLocked
                  , l = r.logo
                  , u = r.name
                  , d = r.desc
                  , _ = r.btnText
                  , m = sl(r)
                  , p = !1
                  , f = d
                  , x = _;
                return m && (c ? (f = r.unlockDescription,
                x = r.unlockButtonText) : f = r.ruleDescription,
                s === i && (p = !0,
                x = r.activatedButtonText)),
                (0,
                N.jsxs)("div", {
                    className: ol,
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: cl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(l)
                    }), m && (0,
                    N.jsx)(al, {
                        className: ll
                    }), (0,
                    N.jsx)("div", {
                        className: ul,
                        children: u
                    }), (0,
                    N.jsx)("div", {
                        className: dl,
                        children: f
                    }), (0,
                    N.jsxs)("div", {
                        className: _l,
                        children: [(0,
                        N.jsx)("span", {
                            className: ml,
                            children: il(t)
                        }), (rl(t) || s < i) && (0,
                        N.jsx)("span", {
                            className: hl
                        }), (0,
                        N.jsx)("span", {
                            className: pl,
                            children: rl(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), m && c ? (0,
                    N.jsx)(Ot, {
                        to: U,
                        className: fl,
                        children: (0,
                        N.jsx)($e, {
                            text: x
                        })
                    }) : (0,
                    N.jsx)($e, {
                        onClick: function() {
                            n(t)
                        },
                        className: xl,
                        text: x,
                        disabled: p
                    })]
                })
            };
            const gl = "index_boost-item__k6pnm"
              , kl = "index_boost-icon__wH6Dh"
              , jl = "index_boostIconLoading__PFCBM"
              , Nl = "index_boost-title__9R-Ry"
              , Cl = "index_newTag__tgIea"
              , bl = "index_boost-data__+0cnG"
              , wl = "index_boost-data-split-point__moT+k"
              , yl = "index_boost-data-stage__8CAgC"
              , Zl = "index_boostItemPlaceholder__NaUkk"
              , Pl = "index_locked__sM-YP"
              , Ol = "index_unlockIcon__whxqz"
              , Tl = "index_unlockButton__C3EY5";
            var Sl = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context;
                if (sl(s)) {
                    if (r)
                        return (0,
                        N.jsx)("div", {
                            className: bl,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === a)
                        return (0,
                        N.jsx)("div", {
                            className: bl,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                N.jsxs)("div", {
                    className: bl,
                    children: [(0,
                    N.jsx)("span", {
                        children: il(t)
                    }), (rl(t) || n < a) && (0,
                    N.jsx)("span", {
                        className: wl
                    }), (0,
                    N.jsx)("span", {
                        className: yl,
                        children: rl(t) ? "".concat(a - n, "/").concat(a) : "Lvl ".concat(n)
                    })]
                })
            }
              , El = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , c = r.logo
                  , l = sl(r);
                return (0,
                N.jsxs)("div", {
                    className: gl,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: kl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(c)
                    }), (0,
                    N.jsxs)("div", {
                        className: Nl,
                        children: [i, l && (0,
                        N.jsx)(al, {
                            className: Cl
                        })]
                    }), (0,
                    N.jsx)(Sl, {
                        boost: t
                    }), s && (0,
                    N.jsxs)("div", {
                        className: Pl,
                        children: [(0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-lock", Ol)
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.text,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: V.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: Tl,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , Bl = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(gl, Zl),
                    children: [(0,
                    N.jsx)(os, {
                        className: jl
                    }), (0,
                    N.jsx)(os, {
                        className: Nl
                    }), (0,
                    N.jsx)(os, {
                        className: bl
                    })]
                })
            };
            const Il = "index_boost-item-container__SW62L"
              , Ll = "index_boost-item-padding__IwiTB";
            var Rl = function(e) {
                var t = e.onClick
                  , n = sc().boosts
                  , r = (0,
                a.useCallback)((function(e) {
                    var a = n.find((function(t) {
                        return t.id === e
                    }
                    ));
                    a && t(a)
                }
                ), [n, t]);
                return (0,
                N.jsxs)("div", {
                    className: Il,
                    children: [(0,
                    N.jsx)("div", {
                        className: Ll
                    }), n.length > 0 ? (0,
                    N.jsx)(N.Fragment, {
                        children: n.map((function(e) {
                            return (0,
                            N.jsx)(El, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(Bl, {}), (0,
                        N.jsx)(Bl, {}), (0,
                        N.jsx)(Bl, {})]
                    }), (0,
                    N.jsx)("div", {
                        className: Ll
                    })]
                })
            };
            const Al = "index_boosts-title__WRC2M"
              , Dl = "index_boost-area__eFBHi"
              , Fl = "index_container__H6hcL";
            var Gl = function() {
                var e = sc()
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , r = (0,
                a.useState)()
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = Me().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var a, r, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.pointCost,
                                    r = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(r))) {
                                        e.next = 5;
                                        break
                                    }
                                    X(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(f - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    X(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && X(!0);
                                case 13:
                                    p(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , h = (0,
                a.useCallback)((function(e) {
                    p(!0),
                    o(e)
                }
                ), []);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsxs)("div", {
                        className: Al,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), (0,
                        N.jsx)("span", {
                            children: t.length > 0 ? " (".concat(t.length, ")") : ""
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: Dl,
                        children: (0,
                        N.jsxs)("div", {
                            className: Fl,
                            children: [(0,
                            N.jsx)(Rl, {
                                onClick: h
                            }), (0,
                            N.jsx)(ze, {
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                N.jsx)(vl, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            };
            const Ul = "index_partnerItem__S1dkf"
              , Wl = "index_title__bRRMU"
              , Ml = "index_points__WQSip"
              , Vl = "index_state__gi-nK"
              , Hl = "index_logo__y4rK-"
              , Yl = "index_item-left__ej9+1"
              , Kl = "index_item-right__3KRWi"
              , zl = "index_dot__4bynu"
              , Xl = "index_participantsIcon__-tYh0"
              , Jl = "index_icon__gS69A";
            var ql = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                N.jsxs)("div", {
                    className: Ul,
                    children: [(0,
                    N.jsx)(Qo.Z, {
                        size: $o.Z.sm,
                        className: Hl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    N.jsxs)("div", {
                        className: Yl,
                        children: [(0,
                        N.jsx)("div", {
                            className: Wl,
                            children: t
                        }), (0,
                        N.jsx)("div", {
                            className: Ml,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                cn.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        N.jsxs)("div", {
                            className: Vl,
                            children: [(0,
                            N.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    qr.dU)((0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: zl
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-friends", Xl)
                            }), (0,
                            N.jsx)("em", {
                                children: cn.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: Kl,
                        children: (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", Jl)
                        })
                    })]
                })
            };
            const Ql = "index_container__wKNP9";
            function $l(e) {
                var t = e.tasks
                  , n = e.className
                  , a = sc().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                N.jsx)("div", {
                    className: y()(Ql, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        N.jsx)(Ot, {
                            to: F,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            N.jsx)(ql, {
                                name: t,
                                logo: o,
                                totalPoints: s,
                                numCompletedTasks: r,
                                numTasks: n,
                                participants: i
                            })
                        }, t)
                    }
                    )) : (0,
                    N.jsx)(nc, {})
                })
            }
            const eu = "TaskArea_tabPane__irXs6"
              , tu = "TaskArea_tabName__-BL2R"
              , nu = "TaskArea_list__cqK4t";
            var au = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                Z.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                Z.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                N.jsxs)("div", {
                    className: tu,
                    children: [r, " ", (0,
                    N.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , ru = function() {
                var e = sc().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsxs)(Jr.Z.Underline, {
                        size: Jr.Z.SIZE.xl,
                        children: [(0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: eu,
                            tab: (0,
                            N.jsx)(au, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            N.jsx)($l, {
                                tasks: t,
                                className: nu
                            })
                        }), (0,
                        N.jsx)(Jr.Z.TabPane, {
                            className: eu,
                            tab: (0,
                            N.jsx)(au, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            N.jsx)(Mc, {
                                tasks: n,
                                className: nu
                            })
                        })]
                    })
                })
            };
            const su = "TaskPage_container__5KfIM"
              , iu = "TaskPage_block__kt8oo"
              , ou = "TaskPage_blockBoost__rwGOo";
            var cu = function() {
                return (0,
                N.jsxs)("div", {
                    className: su,
                    children: [(0,
                    N.jsx)("div", {
                        className: iu,
                        children: (0,
                        N.jsx)(tl, {})
                    }), (0,
                    N.jsx)("div", {
                        className: ou,
                        children: (0,
                        N.jsx)(Gl, {})
                    }), (0,
                    N.jsx)("div", {
                        className: iu,
                        children: (0,
                        N.jsx)(ru, {})
                    })]
                })
            }
              , lu = function() {
                return (0,
                N.jsx)(ic, {
                    children: (0,
                    N.jsxs)(s.Switch, {
                        children: [(0,
                        N.jsx)(s.Route, {
                            path: D,
                            component: cu,
                            exact: !0
                        }), (0,
                        N.jsx)(s.Route, {
                            path: F,
                            component: Hc,
                            exact: !0
                        })]
                    })
                })
            }
              , uu = function() {
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , i = (0,
                a.useMemo)(x, []);
                (0,
                a.useMemo)((function() {
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var f = function() {
                    var e = I().uid;
                    return (0,
                    a.useEffect)((function() {
                        var e, t, n, a, r, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d)),
                        document.addEventListener("contextmenu", (function(e) {
                            return e.preventDefault()
                        }
                        ))
                    }
                    ), []),
                    {
                        isAllowToLoadApp: true
                    }
                }().isAllowToLoadApp;
                return (0,
                a.useEffect)((function() {
                    var e = function() {
                        var e = (0,
                        l.Z)((0,
                        c.Z)().mark((function e() {
                            var t;
                            return (0,
                            c.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        _.d)(i);
                                    case 2:
                                        t = e.sent,
                                        r(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }
                ), [i]),
                (0,
                N.jsx)("article", {
                    className: h,
                    children: (0,
                    N.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: f ? (0,
                        N.jsx)(N.Fragment, {
                            children: (0,
                            N.jsx)(Ut, {
                                children: (0,
                                N.jsx)(Ve, {
                                    children: (0,
                                    N.jsx)(Vt, {
                                        children: (0,
                                        N.jsxs)(d.LD, {
                                            manifestUrl: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/files/247/E8722761C0AB6781.json"),
                                            children: [(0,
                                            N.jsx)("main", {
                                                className: g,
                                                children: (0,
                                                N.jsxs)(s.Switch, {
                                                    children: [(0,
                                                    N.jsx)(s.Route, {
                                                        path: R,
                                                        component: Xr,
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: G,
                                                        component: C(Qs),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: D,
                                                        component: lu
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: A,
                                                        component: C(qo),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: U,
                                                        component: Co
                                                    })]
                                                })
                                            }), (0,
                                            N.jsx)("div", {
                                                className: v,
                                                children: (0,
                                                N.jsx)(St, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        N.jsx)(Po, {})
                    })
                })
            }
              , du = document.getElementById("root");
            if (du) {
                var _u = (0,
                N.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    N.jsx)(L, {
                        children: (0,
                        N.jsx)(uu, {})
                    })
                });
                (0,
                i.createRoot)(du).render(_u)
            }
        }
        ,
        87363: e => {
            "use strict";
            e.exports = React
        }
        ,
        61533: e => {
            "use strict";
            e.exports = ReactDOM
        }
        ,
        37046: () => {}
        ,
        88924: () => {}
    }
      , t = {};
    function n(a) {
        var r = t[a];
        if (void 0 !== r)
            return r.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n),
        s.exports
    }
    n.m = e,
    n.amdO = {},
    ( () => {
        var e = [];
        n.O = (t, a, r, s) => {
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,r,s] = e[u], o = !0, c = 0; c < a.length; c++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e => n.O[e](a[c]))) ? a.splice(c--, 1) : (o = !1,
                        s < i && (i = s));
                    if (o) {
                        e.splice(u--, 1);
                        var l = r();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, r, s]
        }
    }
    )(),
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    ( () => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(a, r) {
            if (1 & r && (a = this(a)),
            8 & r)
                return a;
            if ("object" === typeof a && a) {
                if (4 & r && a.__esModule)
                    return a;
                if (16 & r && "function" === typeof a.then)
                    return a
            }
            var s = Object.create(null);
            n.r(s);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & r && a; "object" == typeof o && !~e.indexOf(o); o = t(o))
                Object.getOwnPropertyNames(o).forEach((e => i[e] = () => a[e]));
            return i.default = () => a,
            n.d(s, i),
            s
        }
    }
    )(),
    n.d = (e, t) => {
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.f = {},
    n.e = e => Promise.all(Object.keys(n.f).reduce(( (t, a) => (n.f[a](e, t),
    t)), [])),
    n.u = e => "common/" + e + ".b0933464.js",
    n.miniCssF = e => {}
    ,
    n.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e = {}
          , t = "growth:";
        n.l = (a, r, s, i) => {
            if (e[a])
                e[a].push(r);
            else {
                var o, c;
                if (void 0 !== s)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + s) {
                            o = d;
                            break
                        }
                    }
                o || (c = !0,
                (o = document.createElement("script")).charset = "utf-8",
                o.timeout = 120,
                n.nc && o.setAttribute("nonce", n.nc),
                o.setAttribute("data-webpack", t + s),
                o.src = a),
                e[a] = [r];
                var _ = (t, n) => {
                    o.onerror = o.onload = null,
                    clearTimeout(m);
                    var r = e[a];
                    if (delete e[a],
                    o.parentNode && o.parentNode.removeChild(o),
                    r && r.forEach((e => e(n))),
                    t)
                        return t(n)
                }
                  , m = setTimeout(_.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
                o.onerror = _.bind(null, o.onerror),
                o.onload = _.bind(null, o.onload),
                c && document.head.appendChild(o)
            }
        }
    }
    )(),
    n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e = {}
          , t = {};
        n.f.remotes = (a, r) => {
            n.o(e, a) && e[a].forEach((e => {
                var a = n.R;
                a || (a = []);
                var s = t[e];
                if (!(a.indexOf(s) >= 0)) {
                    if (a.push(s),
                    s.p)
                        return r.push(s.p);
                    var i = t => {
                        t || (t = new Error("Container missing")),
                        "string" === typeof t.message && (t.message += '\nwhile loading "' + s[1] + '" from ' + s[2]),
                        n.m[e] = () => {
                            throw t
                        }
                        ,
                        s.p = 0
                    }
                      , o = (e, t, n, a, o, c) => {
                        try {
                            var l = e(t, n);
                            if (!l || !l.then)
                                return o(l, a, c);
                            var u = l.then((e => o(e, a)), i);
                            if (!c)
                                return u;
                            r.push(s.p = u)
                        } catch (d) {
                            i(d)
                        }
                    }
                      , c = (e, t, n) => o(t.get, s[1], a, 0, l, n)
                      , l = t => {
                        s.p = 1,
                        n.m[e] = e => {
                            e.exports = t()
                        }
                    }
                    ;
                    o(n, s[2], 0, 0, ( (e, t, a) => e ? o(n.I, s[0], 0, e, c, a) : i()), 1)
                }
            }
            ))
        }
    }
    )(),
    ( () => {
        n.S = {};
        var e = {}
          , t = {};
        n.I = (a, r) => {
            r || (r = []);
            var s = t[a];
            if (s || (s = t[a] = {}),
            !(r.indexOf(s) >= 0)) {
                if (r.push(s),
                e[a])
                    return e[a];
                n.o(n.S, a) || (n.S[a] = {});
                n.S[a];
                var i = [];
                return i.length ? e[a] = Promise.all(i).then(( () => e[a] = 1)) : e[a] = 1
            }
        }
    }
    )(),
    ( () => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
                for (var r = a.length - 1; r > -1 && !e; )
                    e = a[r--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = e + "../"
    }
    )(),
    ( () => {
        try {
            if (n.miniCssF) {
                var e = n.miniCssF;
                n.miniCssF = function(t) {
                    var n = e(t);
                    if ("string" !== typeof n)
                        return n;
                    var a = window._okGlobal || window.okGlobal;
                    return a && a.isRTL && /\.css$/.test(n) ? n.replace(/\.css$/, ".rtl.css") : n
                }
            }
        } catch (t) {}
    }
    )(),
    ( () => {
        var e = {
            6554: 0,
            5145: 0
        };
        n.f.j = (t, a) => {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (5145 != t) {
                    var s = new Promise(( (n, a) => r = e[t] = [n, a]));
                    a.push(r[2] = s);
                    var i = n.p + n.u(t)
                      , o = new Error;
                    n.l(i, (a => {
                        if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var s = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")",
                            o.name = "ChunkLoadError",
                            o.type = s,
                            o.request = i,
                            r[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        n.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var r, s, [i,o,c] = a, l = 0;
            if (i.some((t => 0 !== e[t]))) {
                for (r in o)
                    n.o(o, r) && (n.m[r] = o[r]);
                if (c)
                    var u = c(n)
            }
            for (t && t(a); l < i.length; l++)
                s = i[l],
                n.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return n.O(u)
        }
          , a = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = n.O(void 0, [5534, 5825, 5145, 4878, 7124, 6371, 1249, 8283, 6877, 4102, 4084, 4719, 8232], ( () => n(77704)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.16c9d244.js.map

