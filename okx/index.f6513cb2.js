(()=>{
    var e = {
        13591: (e,t,n)=>{
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
              , b = function(e) {
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
              , C = n(44925)
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
              , L = (0,
            a.createContext)(E)
              , B = function() {
                return (0,
                a.useContext)(L)
            }
              , I = function(e) {
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
                            var u = o && o ? " " : "";
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
                N.jsx)(L.Provider, {
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
              , K = n(4860)
              , Y = n(4422)
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
              , q = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                X(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , J = n(60378);
            const Q = utils.ont;
            var $ = n.n(Q)
              , ee = function(e) {
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , te = function(e) {
                return function(t) {
                    if (!(0,
                    J.y)()) {
                        var n = t || {}
                          , a = n.status
                          , r = n.data || {}
                          , s = r.msg
                          , i = r.code;
                        Y.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
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
            function pe(e, t, n) {
                return fe.apply(this, arguments)
            }
            function fe() {
                return (fe = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r, s, i;
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
                                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (s = r.WebApp) || void 0 === s ? void 0 : s.initData) || ""
                                    }
                                }));
                            case 2:
                                return i = e.sent,
                                _e.setItem(n, i),
                                e.abrupt("return", i);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function xe(e, t, n) {
                return he.apply(this, arguments)
            }
            function he() {
                return (he = (0,
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
                                pe(t, r, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", pe(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ve(e, t, n, a) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i, o;
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
                                        "X-Telegram-Init-Data": (null === (s = window.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i ? void 0 : i.initData) || ""
                                    }
                                }));
                            case 2:
                                return o = e.sent,
                                _e.setItem(a, o),
                                e.abrupt("return", o);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ke(e, t, n, a) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
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
                                ve(t, n, s, r).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", ve(t, n, s, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Ne = "/priapi/v1/affiliate"
              , be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(Ne, "/game/racer/info"), t));
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
              , Ce = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(Ne, "/game/racer/assess"), t));
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
                c.Z)().mark((function e(t, n) {
                    var a, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                xe("".concat(Ne, "/game/racer/invitee-list"), {
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
              , ye = function() {
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
                                n = me(xe, 1e4),
                                e.next = 4,
                                n("".concat(Ne, "/game/racer/leaderboard/friends"), {
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
                                q(e.t0),
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
                                n = me(xe, 3e5),
                                e.next = 4,
                                n("".concat(Ne, "/game/racer/leaderboard/global"), {
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
                                q(e.t0),
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
              , Pe = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e[e.WalletDepositConnect = 5] = "WalletDepositConnect",
                e
            }({})
              , Oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", xe("".concat(Ne, "/game/racer/boosts"), {}, t));
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
              , Te = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(Ne, "/game/racer/boost"), t));
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
                                return e.abrupt("return", xe("".concat(Ne, "/game/racer/group-tasks"), {}, t));
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
                                return e.abrupt("return", ke("".concat(Ne, "/game/racer/task"), t));
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
                                ke("".concat(Ne, "/game/racer/account-binding"), n, t);
                            case 4:
                                if (a = e.sent,
                                r = a.code,
                                s = a.data,
                                0 !== r || !s) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", {
                                    isConnectTelegram: 1 === s.tgBindingStatus,
                                    isKyc: 1 === s.kycVerifyStatus,
                                    signupLink: s.signupLink,
                                    downloadLink: s.downloadLink,
                                    bindTgLink: s.bindTgLink,
                                    verifyKycLink: s.verifyKycLink,
                                    totalVerifiedCount: s.totalVerifiedCount,
                                    joinedDate: Number(s.joinedDate),
                                    pointGradeName: s.pointGradeName,
                                    totalEarnedPoints: s.totalEarnedPoints,
                                    gradeCategories: s.gradeCategories
                                });
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
            }();
            function Be(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e.apply(void 0, n.concat(a))
                }
            }
            var Ie = {
                Rewards: Be(Le, !0),
                Friends: Be(ye, {
                    pageNo: 1
                }),
                Boost: Be(Oe, !0),
                Task: Be(Se, !0),
                Invitee: Be(we, {
                    pageNo: 1
                }, !0),
                Global: Be(Ze, {
                    pageNo: 1
                })
            }
              , Re = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ae = function() {
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
                                n && Ie[n] && (a = Ie[n],
                                "requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && Y.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 12:
                                return e.next = 14,
                                Ae(t);
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
            function De() {
                Ae(Re).catch((function(e) {
                    e instanceof Error && Y.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Fe = (0,
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
              , Ge = function() {
                return (0,
                a.useContext)(Fe)
            }
              , Ue = function(e) {
                var t, n = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], f = (0,
                a.useState)(0), x = (0,
                u.Z)(f, 2), h = x[0], v = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], b = k[1], C = (0,
                a.useState)(0), w = (0,
                u.Z)(C, 2), y = w[0], P = w[1], O = (0,
                a.useState)(0), T = (0,
                u.Z)(O, 2), S = T[0], E = T[1], L = (0,
                a.useState)(0), I = (0,
                u.Z)(L, 2), R = I[0], A = I[1], D = (0,
                a.useState)(""), F = (0,
                u.Z)(D, 2), G = F[0], U = F[1], W = (0,
                a.useState)({}), M = (0,
                u.Z)(W, 2), V = M[0], H = M[1], q = (0,
                a.useState)(!0), J = (0,
                u.Z)(q, 2), Q = J[0], $ = J[1], ee = B(), te = ee.username, ne = ee.startParam, ae = (0,
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
                u.Z)(Pe, 2), Te = Oe[0], Se = Oe[1], Ee = null !== (t = new K.Z((ne || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", Le = (0,
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
                                b(n.autopilotPointsPerHour),
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
                    Le().then(De).catch((function(e) {
                        e instanceof Error && Y.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [Le]),
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
                        Le()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    ie("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [R, Le]),
                (0,
                a.useEffect)((function() {
                    function e() {
                        document.hidden || Le()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [Le]);
                var Be = (0,
                a.useCallback)((function(e) {
                    o(Math.max(e.points, 0)),
                    P(e.numChances),
                    A(e.secondToRefresh)
                }
                ), [])
                  , Ie = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Le();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [Le])
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
                  , Ge = (0,
                a.useCallback)((function() {
                    ve(!1)
                }
                ), [])
                  , Ue = (0,
                a.useCallback)((function() {
                    Ze((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , We = (0,
                a.useMemo)((function() {
                    return {
                        isLoading: Q,
                        points: i,
                        accumPoints: m,
                        numChances: y,
                        numChancesTotal: S,
                        countdownDisplay: se,
                        updateGameInfo: Be,
                        linkCode: G,
                        updateGameInfoFromServer: Ie,
                        isShowAutopilotGainedPoint: le,
                        autopilotPoints: me,
                        isShowNewbie: Te,
                        hideNewbie: Ae,
                        hideAutopilotSheet: Re,
                        isShowRiskControlSheet: he,
                        hideRiskControlSheet: Ge,
                        activity: je,
                        isShowActivityDetails: ye,
                        toggleActivityDetailsBottomSheet: Ue,
                        context: V,
                        basePoint: h,
                        autopilotPointsPerHour: j
                    }
                }
                ), [Q, i, m, y, S, se, Be, G, Ie, le, me, Re, Te, Ae, he, Ge, je, ye, Ue, V, h, j]);
                return (0,
                N.jsx)(Fe.Provider, {
                    value: We,
                    children: n
                })
            }
              , We = n(5425);
            const Me = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Ve = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Me.closeBtn,
                closeIconClassName: Me.closeIcon
            }
              , He = function(e) {
                return (0,
                N.jsx)(We.Z, (0,
                k.Z)((0,
                k.Z)({}, Ve), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Me.topPadding
                    }),
                    zIndex: 999
                }, e))
            }
              , Ke = function(e) {
                var t = We.Z.show((0,
                k.Z)((0,
                k.Z)({}, Ve), {}, {
                    topContent: e.title ? void 0 : (0,
                    N.jsx)("div", {
                        className: Me.topPadding
                    }),
                    onClose: function() {
                        t.destroy()
                    }
                }, e));
                return t
            };
            const Ye = "PrimaryButton_button__SJFHA"
              , ze = "PrimaryButton_buttonText__19AJ7";
            var Xe = ["text", "className"]
              , qe = function(e) {
                var t = e.text
                  , n = e.className
                  , a = (0,
                C.Z)(e, Xe);
                return (0,
                N.jsx)(V.default, (0,
                k.Z)((0,
                k.Z)({
                    category: V.default.CATEGORY.fill,
                    type: V.default.TYPE.primary,
                    size: V.default.SIZE.lg,
                    className: y()(Ye, n),
                    contentClassName: ze
                }, a), {}, {
                    children: t
                }))
            }
              , Je = n(4942);
            const Qe = "Timer_timer__j+KcR"
              , $e = "Timer_show__GFyz+"
              , et = "Timer_label__nxjo+"
              , tt = "Timer_separator__CFi1G"
              , nt = "Timer_timerValue__CaRO2";
            var at = function(e) {
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
                    className: y()(Qe, (0,
                    Je.Z)({}, $e, o)),
                    children: [n && (0,
                    N.jsx)("span", {
                        className: et,
                        children: n
                    }), Number(null === o || void 0 === o ? void 0 : o.day) > 0 && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("span", {
                            className: nt,
                            children: null === o || void 0 === o ? void 0 : o.day
                        }), (0,
                        N.jsx)("span", {
                            className: tt,
                            children: ":"
                        })]
                    }), (0,
                    N.jsx)("span", {
                        className: nt,
                        children: null === o || void 0 === o ? void 0 : o.hour
                    }), (0,
                    N.jsx)("span", {
                        className: tt,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: nt,
                        children: null === o || void 0 === o ? void 0 : o.minute
                    }), (0,
                    N.jsx)("span", {
                        className: tt,
                        children: ":"
                    }), (0,
                    N.jsx)("span", {
                        className: nt,
                        children: null === o || void 0 === o ? void 0 : o.second
                    })]
                })
            };
            const rt = "EventPopover_eventPopoverWrapper__65bP-"
              , st = "EventPopover_eventPopover__B0CAq"
              , it = "EventPopover_eventPopoverDesc__+lNFw"
              , ot = "EventPopover_eventPopoverBtn__BKIwS"
              , ct = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , lt = "EventPopover_eventPopoverArrow__M+sYF"
              , ut = "EventPopover_eventDetailsContainer__G1KfS"
              , dt = "EventPopover_title__Tie4q"
              , _t = "EventPopover_description__tVAy9"
              , mt = "EventPopover_disclaimer__jFZC3"
              , pt = "EventPopover_continueBtn__S2Sj-"
              , ft = "EventPopover_eventDetails__5xDB0"
              , xt = "EventPopover_eventImg__0yapf";
            var ht = function(e) {
                var t = e.children
                  , n = Ge()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(M.Z, {
                        zIndex: 998,
                        layerClassName: rt,
                        popperClassName: st,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: it,
                        description: (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(V.default, {
                                className: ot,
                                type: V.default.TYPE.primary,
                                category: V.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                N.jsx)(P.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: ct
                                }),
                                iconType: V.default.ICON_POSITION.tailing,
                                children: (0,
                                Z.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            N.jsx)("svg", {
                                className: lt,
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
                    N.jsx)(He, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: function() {
                            s()
                        },
                        children: (0,
                        N.jsxs)("div", {
                            className: ut,
                            children: [(0,
                            N.jsxs)("div", {
                                className: ft,
                                children: [(0,
                                N.jsx)(H.Z, {
                                    pictureClassName: xt,
                                    className: xt,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                N.jsx)("h2", {
                                    className: dt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                N.jsx)("p", {
                                    className: _t,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                N.jsx)(at, {
                                    endTime: i,
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                N.jsx)("p", {
                                    className: mt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            N.jsx)(qe, {
                                className: pt,
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
            const vt = "Navbar_navbar__LF3-M"
              , gt = "Navbar_link__qX0Sf"
              , kt = "Navbar_active__TCbF8"
              , jt = "Navbar_linkIcon__GtH54"
              , Nt = "Navbar_linkText__Szxi-";
            var bt = ["children", "className"]
              , Ct = ["iconName", "label", "onClick"]
              , wt = function(e) {
                var t = e.children
                  , n = e.className
                  , a = (0,
                C.Z)(e, bt)
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
              , yt = function(e) {
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = (0,
                C.Z)(e, Ct)
                  , i = (0,
                s.useRouteMatch)({
                    path: r.to,
                    exact: r.to === R
                });
                return (0,
                N.jsxs)(wt, {
                    className: y()(gt, i && kt),
                    to: r.to,
                    onClick: a,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: t,
                        className: jt
                    }), (0,
                    N.jsx)("span", {
                        className: Nt,
                        children: n
                    })]
                })
            }
              , Zt = function() {
                var e = {
                    telegramid: B().uid
                };
                return (0,
                N.jsxs)("div", {
                    className: vt,
                    children: [(0,
                    N.jsx)(ht, {
                        children: (0,
                        N.jsx)(yt, {
                            iconName: "okx-growth-home",
                            to: R,
                            label: (0,
                            Z.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    N.jsx)(yt, {
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
                    N.jsx)(yt, {
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
                    N.jsx)(yt, {
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
                    N.jsx)(yt, {
                        iconName: "okx-growth-surprises",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                })
            };
            var Pt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Ot = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Tt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({});
            function St(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            const Et = "RiskControl_title__h9Z0T";
            var Lt = function() {
                var e = Ge()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                N.jsx)(He, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    N.jsx)("div", {
                        className: Et,
                        children: (0,
                        Z.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Bt = n(8031)
              , It = new (function() {
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
                    this.connection = new Bt.Z({
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
              , Rt = (0,
            a.createContext)(It)
              , At = function(e) {
                var t = e.children;
                return (0,
                N.jsx)(Rt.Provider, {
                    value: It,
                    children: t
                })
            }
              , Dt = (0,
            a.createContext)(null)
              , Ft = function() {
                return (0,
                a.useContext)(Dt)
            }
              , Gt = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useContext)(Rt);
                return (0,
                a.useEffect)((function() {
                    o.addCallback((function(e) {
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                N.jsx)(Dt.Provider, {
                    value: s,
                    children: t
                })
            }
              , Ut = n(46430)
              , Wt = "racer"
              , Mt = function() {
                var e;
                if (!(0,
                J.y)())
                    return Ut.Z.getInstance(Wt) || Ut.Z.init({
                        project: Wt
                    }),
                    null !== (e = Ut.Z.getInstance(Wt)) && void 0 !== e ? e : Ut.Z
            }
              , Vt = "guessRecords_new";
            function Ht(e) {
                var t = Mt().get(Vt) || [];
                t.unshift(e),
                Mt().set(Vt, t.slice(0, 5))
            }
            var Kt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Yt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: Kt.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Kt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , zt = (0,
            a.createContext)(Yt)
              , Xt = function() {
                return (0,
                a.useContext)(zt)
            }
              , qt = function(e) {
                var t = e.children
                  , n = B().uid
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
                  , b = k[1]
                  , C = (0,
                a.useState)(Kt.NONE)
                  , w = (0,
                u.Z)(C, 2)
                  , y = w[0]
                  , P = w[1]
                  , O = Ft()
                  , S = Ge().updateGameInfo
                  , E = (0,
                a.useRef)(Kt.NONE)
                  , L = (0,
                a.useRef)(1)
                  , I = (0,
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
                                t = E.current === Kt.UP ? 1 : 0,
                                e.next = 4,
                                Ce({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (b(a.won),
                                S({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                L.current = a.multiplier,
                                I.current = a.basePoint,
                                R.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                D.current = a.currentPrice,
                                Ht({
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
                                b(null),
                                R.current = null,
                                X(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = Kt.NONE,
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
                            P(O === h ? Kt.NONE : e ? Kt.UP : Kt.DOWN)
                        } else
                            v(O)
                }
                ), [h, i, O]);
                var G = (0,
                a.useCallback)((function(e) {
                    b(null),
                    o(!0),
                    E.current = e,
                    R.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === Kt.UP && function() {
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
                    e === Kt.DOWN && function() {
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
                        multiplier: L.current,
                        basePoints: I.current,
                        predict: E.current,
                        changeRate: R.current,
                        prevPrice: A.current,
                        currentPrice: D.current
                    }
                }
                ), [m, y, i, L, G, j]);
                return (0,
                N.jsx)(zt.Provider, {
                    value: U,
                    children: t
                })
            }
              , Jt = n(94595)
              , Qt = n(96450)
              , $t = 2e3
              , en = 500;
            function tn(e) {
                return (Math.abs(e) < 1e-4 ? Qt.yx.ceilTruncate : Qt.yx.floorTruncate)(e, 4)
            }
            const nn = "GuessResult_container__ECdpL"
              , an = "GuessResult_title__fzYxg"
              , rn = "GuessResult_multiplier__yRHWm"
              , sn = "GuessResult_description__R2fup"
              , on = "GuessResult_detailsIcon__ZE7Ry"
              , cn = "GuessResult_changeRateContainer__a5-N7"
              , ln = "GuessResult_label__+b5Nz"
              , un = "GuessResult_changeRate__yhVz3"
              , dn = "GuessResult_up__5vYDR"
              , _n = "GuessResult_down__fa-oP"
              , mn = "GuessResult_priceChange__xr6e8"
              , pn = "GuessResult_price__Vk+bY";
            function fn(e) {
                return (0,
                Jt.xG)((0,
                Jt.uf)(Qt.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var xn = function(e) {
                var t, n = e.className, r = Xt(), s = r.result, i = r.multiplier, o = r.changeRate, c = r.prevPrice, l = r.currentPrice, d = (0,
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
                            ), $t)
                        }
                        ), en)
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
                        className: y()(n, nn),
                        children: [(0,
                        N.jsx)("p", {
                            className: rn,
                            children: s ? (0,
                            N.jsxs)("span", {
                                className: on,
                                children: ["\ud83d\udd25".repeat(Math.min(i, 4)), i > 1 ? "x".concat(i) : ""]
                            }) : (0,
                            N.jsx)("span", {
                                className: on,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        N.jsx)("h2", {
                            className: an,
                            children: (0,
                            Z.O4)(s ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        N.jsxs)("div", {
                            className: sn,
                            children: [null !== o && (0,
                            N.jsxs)("p", {
                                className: cn,
                                children: [(0,
                                N.jsx)("span", {
                                    className: ln,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                N.jsx)("span", {
                                    className: y()(un, (t = {},
                                    (0,
                                    Je.Z)(t, dn, o > 0),
                                    (0,
                                    Je.Z)(t, _n, o < 0),
                                    t)),
                                    children: (0,
                                    Jt.uf)(tn(o), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && l && (0,
                            N.jsx)("p", {
                                className: mn,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    N.jsx)("span", {
                                        className: pn,
                                        children: fn(c)
                                    }),
                                    currentPrice: (0,
                                    N.jsx)("span", {
                                        className: pn,
                                        children: fn(l)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const hn = "TncButton_termsAndConditions__MyIpV";
            var vn = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("button", {
                    className: y()(hn, t),
                    onClick: function() {
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink("/help/okx-racer-terms-and-conditions")
                    },
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                })
            };
            const gn = "AutoPilot_title__NJa0C"
              , kn = "AutoPilot_button__Sg42v";
            var jn = function() {
                var e = Ge()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                N.jsxs)(He, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    N.jsx)("div", {
                        className: gn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            Jt.uf)(n)
                        })
                    }), (0,
                    N.jsx)(qe, {
                        className: kn,
                        onClick: a,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const Nn = "BackgroundVideo_container__J5sO2"
              , bn = "BackgroundVideo_muteButton__04Huj"
              , Cn = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , wn = "BackgroundVideo_staticImage__EpRTb"
              , yn = "BackgroundVideo_hide__ZXYN9";
            var Zn, Pn, On, Tn, Sn, En, Ln = "backgroundVideoSoundOn", Bn = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", In = [{
                src: "/cdn/assets/files/247/766B45A8C0029E3D.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4",
                type: "video/mp4"
            }], Rn = [{
                src: "/cdn/assets/files/247/C524742B60C368EB.webm",
                type: "video/webm"
            }, {
                src: "/cdn/assets/files/247/FD71D56636980B09.mp4",
                type: "video/mp4"
            }], An = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Bn)
            }, Dn = function() {
                var e = Xt().isPending
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
                  , v = Mt()
                  , g = (0,
                a.useState)((function() {
                    var e = v.get(Ln);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , b = j[0]
                  , C = j[1];
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
                    className: Nn,
                    children: [(0,
                    N.jsx)(V.default, {
                        category: V.default.CATEGORY.fill,
                        type: V.default.TYPE.quaternary,
                        size: V.default.SIZE.md,
                        className: bn,
                        strictCircle: !0,
                        onClick: function() {
                            C((function(e) {
                                return v.set(Ln, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: b ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Cn
                        })
                    }), (0,
                    N.jsx)(H.Z, {
                        className: y()(wn, (0,
                        Je.Z)({}, yn, !w)),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Bn)
                    }), (0,
                    N.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, An), {}, {
                        className: y()((0,
                        Je.Z)({}, yn, !Z)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: In.map((function(e) {
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
                    k.Z)({}, An), {}, {
                        className: y()((0,
                        Je.Z)({}, yn, !O)),
                        ref: t,
                        muted: b,
                        children: Rn.map((function(e) {
                            return (0,
                            N.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e.src),
                                type: e.type
                            }, e.src)
                        }
                        ))
                    }))]
                })
            }, Fn = ["title", "titleId"];
            function Gn() {
                return Gn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Gn.apply(this, arguments)
            }
            function Un(e, t) {
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
            function Wn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Un(e, Fn);
                return a.createElement("svg", Gn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Zn || (Zn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Pn || (Pn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), On || (On = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Tn || (Tn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Sn || (Sn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), En || (En = a.createElement("defs", null, a.createElement("filter", {
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
            var Mn = a.forwardRef(Wn);
            n.p;
            var Vn, Hn, Kn, Yn, zn, Xn, qn = ["title", "titleId"];
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
            function Qn(e, t) {
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
            function $n(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Qn(e, qn);
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
                }, n) : null, Vn || (Vn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Hn || (Hn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Kn || (Kn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), Yn || (Yn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), zn || (zn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), Xn || (Xn = a.createElement("defs", null, a.createElement("filter", {
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
            var ea = a.forwardRef($n);
            n.p;
            const ta = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var na, aa = function(e) {
                var t = e.className
                  , n = Xt()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = Ge().numChances
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
                    s || d || (_(e === Kt.UP ? Kt.DOWN : Kt.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = o <= 0;
                return (0,
                N.jsxs)("div", {
                    className: t,
                    children: [(0,
                    N.jsx)("p", {
                        className: y()(ta.instructions, s && ta.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: ta.btnContainer,
                        children: [(0,
                        N.jsxs)("button", {
                            disabled: p || d === Kt.UP,
                            onClick: function() {
                                return m(Kt.UP)
                            },
                            type: "button",
                            className: y()(ta.btn, ta.upBtn, (0,
                            Je.Z)({}, ta.pressed, i === Kt.UP)),
                            children: [(0,
                            N.jsx)(ea, {
                                className: y()(ta.btnGraphic, ta.upBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: ta.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: ta.arrow
                                })]
                            })]
                        }), (0,
                        N.jsxs)("button", {
                            disabled: p || d === Kt.DOWN,
                            onClick: function() {
                                return m(Kt.DOWN)
                            },
                            type: "button",
                            className: y()(ta.btn, ta.downBtn, (0,
                            Je.Z)({}, ta.pressed, i === Kt.DOWN)),
                            children: [(0,
                            N.jsx)(Mn, {
                                className: y()(ta.btnGraphic, ta.downBtnGraphic)
                            }), (0,
                            N.jsxs)("span", {
                                className: ta.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                N.jsx)(P.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: ta.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, ra = ["title", "titleId"];
            function sa() {
                return sa = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                sa.apply(this, arguments)
            }
            function ia(e, t) {
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
            function oa(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = ia(e, ra);
                return a.createElement("svg", sa({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, na || (na = a.createElement("g", {
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
            var ca = a.forwardRef(oa);
            n.p;
            var la = n(48275);
            const ua = "FuelIndicator_fuelContainer__QIskL"
              , da = "FuelIndicator_toTasksIcon__Y7exC"
              , _a = "FuelIndicator_line__tWBfm"
              , ma = "FuelIndicator_description__EaUsa"
              , pa = "FuelIndicator_fuelIcon__I38Ss"
              , fa = "FuelIndicator_maxChances__OMSHl"
              , xa = "FuelIndicator_earnPtsMsg__PjtcT";
            var ha, va, ga = function(e) {
                var t = e.className
                  , n = Ge()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, ua),
                    children: [(0,
                    N.jsx)("span", {
                        className: pa,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    N.jsx)(la.Z.Line, {
                        className: _a,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    N.jsx)(wt, {
                        to: D,
                        className: xa,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    N.jsxs)("p", {
                        className: ma,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        N.jsxs)(N.Fragment, {
                            children: ["/\xa0", (0,
                            N.jsx)("span", {
                                className: fa,
                                children: r
                            })]
                        })]
                    }), (0,
                    N.jsx)(wt, {
                        to: D,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: da
                        })
                    })]
                })
            }, ka = ["title", "titleId"];
            function ja() {
                return ja = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                ja.apply(this, arguments)
            }
            function Na(e, t) {
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
            function ba(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Na(e, ka);
                return a.createElement("svg", ja({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ha || (ha = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), va || (va = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var Ca = a.forwardRef(ba);
            n.p;
            const wa = "RefuelTimer_container__wtALO"
              , ya = "RefuelTimer_description__sD+HM"
              , Za = "RefuelTimer_timer__LL1+c";
            var Pa = function(e) {
                var t = e.className
                  , n = Ge().countdownDisplay;
                return (0,
                N.jsxs)("div", {
                    className: y()(t, wa),
                    children: [(0,
                    N.jsx)(Ca, {}), (0,
                    N.jsx)("p", {
                        className: ya,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            N.jsx)("span", {
                                className: Za,
                                children: n
                            })
                        })
                    })]
                })
            };
            const Oa = "CoinPrice_raceTrack__NZO2t"
              , Ta = "CoinPrice_run__f0UIF"
              , Sa = "CoinPrice_coinPriceContainer__YbeUE"
              , Ea = "CoinPrice_content__a-5Jl"
              , La = "CoinPrice_fuelIndicator__p+f1I"
              , Ba = "CoinPrice_refuelTimer__tbWMw"
              , Ia = "CoinPrice_hide__bHhxJ"
              , Ra = "CoinPrice_label__yTNy0"
              , Aa = "CoinPrice_value__ZjRZz"
              , Da = "CoinPrice_slotMachine__hUQKt"
              , Fa = "SlotMachine_row__a4TO0"
              , Ga = "SlotMachine_animate__-G4TR"
              , Ua = "SlotMachine_column__aR0VE"
              , Wa = "SlotMachine_arrows__m1dhv"
              , Ma = "SlotMachine_columnContainer__a76pd"
              , Va = "SlotMachine_background__b9TMg"
              , Ha = "SlotMachine_slot__jwCvC"
              , Ka = "SlotMachine_staticColumn__O5zfB"
              , Ya = "SlotMachine_sm__ZRCig"
              , za = "SlotMachine_arrow__qOYmf"
              , Xa = "SlotMachine_wentUp__z48TO"
              , qa = "SlotMachine_down__aYC8C"
              , Ja = "SlotMachine_stable__CDMLP"
              , Qa = "SlotMachine_wentDown__1fYUS"
              , $a = "SlotMachine_up__IuiYV";
            var er = function(e) {
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                N.jsxs)("div", {
                    className: Ma,
                    children: [(0,
                    N.jsx)("div", {
                        className: Va
                    }), (0,
                    N.jsxs)("div", {
                        className: Ua,
                        style: r,
                        children: [(0,
                        N.jsx)("p", {
                            className: Ha,
                            children: a
                        }), t && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "1"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "2"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "3"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "4"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "5"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "6"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "7"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "8"
                            }), (0,
                            N.jsx)("p", {
                                className: Ha,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , tr = function() {
                var e, t = Xt(), n = t.changeRate, r = t.isPending, s = (0,
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
                    null !== n ? (m(null === (e = n) ? null : e > 0 ? Kt.UP : 0 === e ? Kt.NONE : Kt.DOWN),
                    c(String(Math.abs(Number(tn(n)))).split("").filter((function(e) {
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
                    className: y()(Fa, x && Ga),
                    children: [(0,
                    N.jsx)("div", {
                        className: Ma,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(Wa, (e = {},
                            (0,
                            Je.Z)(e, Xa, _ === Kt.UP),
                            (0,
                            Je.Z)(e, Qa, _ === Kt.DOWN),
                            (0,
                            Je.Z)(e, Ja, _ === Kt.NONE),
                            e)),
                            children: [(0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: y()(za, $a)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: y()(za, Ja)
                            }), (0,
                            N.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: y()(za, qa)
                            })]
                        })
                    }), (0,
                    N.jsx)(er, {
                        animate: x,
                        result: o[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: Ka,
                        children: "."
                    }), (0,
                    N.jsx)(er, {
                        animate: x,
                        result: o[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(er, {
                        animate: x,
                        result: o[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    N.jsx)(er, {
                        animate: x,
                        result: o[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    N.jsx)(er, {
                        animate: x,
                        result: o[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    N.jsx)("span", {
                        className: y()(Ka, Ya),
                        children: "%"
                    })]
                })
            }
              , nr = function() {
                var e = Ft()
                  , t = Xt()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = Ge().countdownDisplay
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
                    ), en)),
                    t
                }
                ), [r, n]);
                var d = e ? "$".concat((0,
                Jt.uf)(Qt.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !n;
                return (0,
                N.jsxs)("div", {
                    className: Sa,
                    children: [(0,
                    N.jsx)(ca, {
                        className: y()(Oa, n && Ta)
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Ea, c && Ia),
                        children: [(0,
                        N.jsx)("p", {
                            className: Ra,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        N.jsx)("p", {
                            className: Aa,
                            children: d
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: y()(Ea, !c && Ia),
                        children: [(0,
                        N.jsxs)("p", {
                            className: Ra,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        N.jsx)("div", {
                            className: Da,
                            children: (0,
                            N.jsx)(tr, {})
                        })]
                    }), (0,
                    N.jsx)(ga, {
                        className: La
                    }), (0,
                    N.jsx)("div", {
                        className: y()(Ba, !_ && Ia),
                        children: (0,
                        N.jsx)(Pa, {})
                    })]
                })
            };
            const ar = "LandingPage_container__pU2cC"
              , rr = "LandingPage_resultOverlay__WSYZb"
              , sr = "LandingPage_disclaimer__pVRHC"
              , ir = "LandingPage_recordsBtnContainer__Anr4Y"
              , or = "LandingPage_backgroundVideo__flTkH"
              , cr = "LandingPage_content__D0ZLW"
              , lr = "LandingPage_points__Ruq4j"
              , ur = "LandingPage_coinPrice__nJ0nj"
              , dr = "LandingPage_btnContainer__IEll8"
              , _r = "LandingPage_termsAndConditions__MdClU";
            var mr = n(71979);
            const pr = "NewbieWelcome_title__48Py5"
              , fr = "NewbieWelcome_desc__q7GHz"
              , xr = "NewbieWelcome_button__im+B1"
              , hr = "NewbieWelcome_pointsBox__gOjMh"
              , vr = "NewbieWelcome_points__4t75l"
              , gr = "NewbieWelcome_animation__tf9Dj";
            var kr = function() {
                var e = r().useRef(null)
                  , t = function() {
                    var e = o.Z.cdnBaseUrl;
                    return "".concat(e, "/cdn/assets/files/248/9534B41B7241E81E.json")
                };
                return (0,
                mr.Z)((0,
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
                        className: gr
                    })
                })
            }
              , jr = function() {
                var e = Ge()
                  , t = e.hideNewbie
                  , n = e.isShowNewbie;
                return (0,
                N.jsxs)(He, {
                    visible: n,
                    onClose: t,
                    renderWindow: function(e) {
                        return (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(kr, {}), (0,
                            N.jsx)(e, {})]
                        })
                    },
                    children: [(0,
                    N.jsx)("div", {
                        className: hr,
                        children: (0,
                        N.jsx)("img", {
                            src: "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/4770A4DA6875EB63.webp"),
                            alt: "racer",
                            className: vr
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: pr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_phase4_welcome")
                    }), (0,
                    N.jsx)("div", {
                        className: fr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase4_received_points")
                    }), (0,
                    N.jsx)(qe, {
                        className: xr,
                        onClick: t,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_phase4_start_racing")
                    })]
                })
            }
              , Nr = n(22387);
            const br = "UserPointCounter_pointCounter__-QAj8"
              , Cr = "UserPointCounter_hide__o4qTQ"
              , wr = "UserPointCounter_points__d3HeG"
              , yr = "UserPointCounter_title__B-gN-"
              , Zr = "UserPointCounter_countdown__Z7xGo"
              , Pr = "UserPointCounter_value__2a23E";
            var Or = function() {
                var e = Ge().points
                  , t = (0,
                Nr.Z)(e)
                  , n = Xt()
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
                    Jt.uf)(String(e))),
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
                    className: br,
                    children: [(0,
                    N.jsxs)("p", {
                        className: y()(yr, l && Cr),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    N.jsx)("p", {
                        ref: i,
                        className: y()(wr, l && Cr),
                        children: "0"
                    }), (0,
                    N.jsxs)("p", {
                        className: y()(Zr, !l && Cr),
                        children: ["00:0", (0,
                        N.jsx)("span", {
                            className: Pr,
                            children: s
                        })]
                    })]
                })
            }
              , Tr = n(39136)
              , Sr = function(e) {
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
              , Er = n(52008)
              , Lr = function(e, t) {
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
                                        _ = Er.Address.parse(l),
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
              , Br = function() {
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
                                a = Lr(t, n),
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
                                e.t0 instanceof Error && Y.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
            const Ir = "ViewWalletButton_button__WbNMO"
              , Rr = "ViewWalletButton_btnIcon__W5IFc";
            var Ar = function() {
                var e = Ge()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , r = (0,
                d.dG)()
                  , s = (0,
                u.Z)(r, 1)[0]
                  , i = B().uid
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
                                    Br(s, i);
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
                                    Ee(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([Oe(), n()]);
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
                                    q(e.t0),
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
                Tr.Z)(_, {
                    wait: 500
                }).run;
                return (0,
                N.jsxs)("button", {
                    className: Ir,
                    type: "button",
                    onClick: m,
                    children: [(0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-wallet",
                        className: Rr
                    }), t.tonAddress ? Sr(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    Z.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Dr = function() {
                var e = B().uid;
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
                    className: ar,
                    children: [(0,
                    N.jsx)("div", {
                        className: ir,
                        children: (0,
                        N.jsx)(Ar, {})
                    }), (0,
                    N.jsx)("div", {
                        className: or,
                        children: (0,
                        N.jsx)(Dn, {})
                    }), (0,
                    N.jsxs)("div", {
                        className: cr,
                        children: [(0,
                        N.jsx)("div", {
                            className: lr,
                            children: (0,
                            N.jsx)(Or, {})
                        }), (0,
                        N.jsx)("div", {
                            className: ur,
                            children: (0,
                            N.jsx)(nr, {})
                        }), (0,
                        N.jsx)(aa, {
                            className: dr
                        })]
                    }), (0,
                    N.jsx)(vn, {
                        className: _r
                    }), (0,
                    N.jsx)("p", {
                        className: sr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    N.jsx)(xn, {
                        className: rr
                    }), (0,
                    N.jsx)(jn, {}), (0,
                    N.jsx)(jr, {}), (0,
                    N.jsx)(Lt, {})]
                })
            }
              , Fr = function() {
                return (0,
                N.jsx)(qt, {
                    children: (0,
                    N.jsx)(Dr, {})
                })
            }
              , Gr = n(24084)
              , Ur = n(58338);
            const Wr = "PageTitle_title__IQ7TT";
            var Mr = function(e) {
                var t = e.html
                  , n = e.className;
                return (0,
                N.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Ur.dU)(t)
                    },
                    className: y()(Wr, n)
                })
            };
            const Vr = "LeaderBoard_container__0DJSO"
              , Hr = "LeaderBoard_desc__MFxC+"
              , Kr = "LeaderBoard_inviteList__mV9a7"
              , Yr = "LeaderBoard_tabActiveClassName__7Xv4B"
              , zr = "LeaderBoard_tabsContent__KCGtW"
              , Xr = "LeaderBoard_recordButton__lXzAl"
              , qr = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var Jr = function(e) {
                var t = e.className;
                return (0,
                N.jsx)("div", {
                    className: y()(qr, t)
                })
            };
            const Qr = "InviteButton_invite-btn__aAMio"
              , $r = "InviteButton_btn-a__At-wO"
              , es = "InviteButton_btn-container__sYDy5"
              , ts = "InviteButton_copyButton__znucI"
              , ns = "InviteButton_copyIcon__QZgE9";
            var as = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = B().uid
                  , s = function(e) {
                    var t = new K.Z
                      , n = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(Pt.BOT_NAME, "/").concat(Pt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(n)
                    }
                }(Ge().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                N.jsxs)("div", {
                    className: y()(a, es),
                    children: [(0,
                    N.jsx)("a", {
                        className: $r,
                        href: i,
                        children: (0,
                        N.jsx)(qe, {
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
                            className: Qr,
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
                        className: ts,
                        children: (0,
                        N.jsx)(P.Z, {
                            iconName: "okx-growth-copy",
                            className: ns
                        })
                    })]
                })
            };
            const rs = "RankList_listItem__qJvXJ"
              , ss = "RankList_name__sxTWa"
              , is = "RankList_mask__ldBi8"
              , os = "RankList_hightLightRow__xYkeg"
              , cs = "RankList_listHeader__KVGnw"
              , ls = "RankList_rank__k2m5R"
              , us = "RankList_icon__1-SRV"
              , ds = "RankList_point__D5mVw"
              , _s = "RankList_pointIcon__k80Wy"
              , ms = "RankList_InviteButton__D6ute"
              , ps = "RankList_noFirendsNote__Ckkil"
              , fs = "RankList_under__MJ5We"
              , xs = "RankList_rankItemPlaceholder__z-upW"
              , hs = "RankList_rank-name__YEqnc"
              , vs = "RankList_rank-score__gtI+m";
            var gs = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , ks = 1
              , js = 2
              , Ns = function(e) {
                var t = e.total;
                return (0,
                N.jsxs)("div", {
                    className: cs,
                    children: [(0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Jt.uf)(t)
                        })
                    }), (0,
                    N.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , bs = function() {
                return (0,
                N.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        N.jsxs)("div", {
                            className: xs,
                            children: [(0,
                            N.jsx)(Jr, {
                                className: hs
                            }), (0,
                            N.jsx)(Jr, {
                                className: vs
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , Cs = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                N.jsxs)("div", {
                    className: y()(rs, n && os),
                    children: [(0,
                    N.jsx)("div", {
                        className: is
                    }), t.rank <= 3 ? (0,
                    N.jsx)("span", {
                        className: y()(ls, us),
                        children: gs[t.rank]
                    }) : (0,
                    N.jsx)("span", {
                        className: ls,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    N.jsx)("div", {
                        className: ss,
                        children: t.extUserName
                    }), (0,
                    N.jsxs)("div", {
                        className: ds,
                        children: [(0,
                        N.jsx)("span", {
                            className: _s,
                            children: gs[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Jt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , ws = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? ks : t
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
                  , b = k[1]
                  , C = (0,
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
                                    n !== ks) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    ye(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Ze(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (p(r.rows),
                                    v(r.total),
                                    b(r.userRanking)),
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
                    C(1)
                }
                ), [C]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(Ns, {
                        total: h
                    }), i ? (0,
                    N.jsx)(bs, {}) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [w && (0,
                        N.jsx)(Cs, {
                            item: j,
                            isHighlight: !0
                        }), m.map((function(e, t) {
                            return (0,
                            N.jsx)(Cs, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    N.jsx)("div", {
                        className: fs
                    }), n === ks && (0,
                    N.jsxs)(N.Fragment, {
                        children: [1 === m.length && (0,
                        N.jsx)("div", {
                            className: ps,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        N.jsx)(as, {
                            className: ms,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            };
            const ys = "ViewRecordsButton_button__foNmQ"
              , Zs = "ViewRecordsButton_btnIcon__2U0Xs"
              , Ps = "ViewRecordsButton_title__XwRxi"
              , Os = "ViewRecordsButton_container__KMBl3"
              , Ts = "ViewRecordsButton_recordContainer__H0HG0"
              , Ss = "ViewRecordsButton_recordField__ntg1u"
              , Es = "ViewRecordsButton_label__VInMo"
              , Ls = "ViewRecordsButton_value__YdAbG"
              , Bs = "ViewRecordsButton_trendIcon__OAhpt"
              , Is = "ViewRecordsButton_up__lVPFv"
              , Rs = "ViewRecordsButton_down__z9X8U"
              , As = "ViewRecordsButton_timestamp__1KFJL"
              , Ds = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , Fs = "ViewRecordsButton_description__2QLs8";
            var Gs = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                N.jsxs)("div", {
                    className: Ss,
                    children: [(0,
                    N.jsx)("p", {
                        className: Es,
                        children: t
                    }), (0,
                    N.jsx)("div", {
                        className: Ls,
                        children: n
                    })]
                })
            }
              , Us = function() {
                return (0,
                N.jsxs)("button", {
                    className: ys,
                    type: "button",
                    onClick: function() {
                        var e = Mt().get(Vt) || []
                          , t = (0,
                        N.jsx)(N.Fragment, {
                            children: e.length > 0 ? e.map((function(e) {
                                var t = 1 === e.predict
                                  , n = "ok_game_okxracer_moon"
                                  , a = Is
                                  , r = "okx-growth-trending-up";
                                return t || (n = "ok_game_okxracer_doom",
                                a = Rs,
                                r = "okx-growth-trending-down"),
                                (0,
                                N.jsxs)("div", {
                                    className: Ts,
                                    children: [(0,
                                    N.jsx)(Gs, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_your_guess"),
                                        value: (0,
                                        N.jsxs)(N.Fragment, {
                                            children: [(0,
                                            Z.O4)(n), (0,
                                            N.jsx)(P.Z, {
                                                className: y()(Bs, a),
                                                iconName: r
                                            })]
                                        })
                                    }), (0,
                                    N.jsx)(Gs, {
                                        label: "Result",
                                        value: (0,
                                        Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                    }), (0,
                                    N.jsx)(Gs, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_consecutive_wins"),
                                        value: e.curCombo
                                    }), (0,
                                    N.jsx)("p", {
                                        className: As,
                                        children: (0,
                                        Jt.o0)(new Date(e.date), {
                                            format: "yyyyMMMdhhmmss"
                                        })
                                    })]
                                }, e.date)
                            }
                            )) : (0,
                            N.jsxs)("div", {
                                className: Ds,
                                children: [(0,
                                N.jsx)("p", {
                                    className: Ps,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_racing_record")
                                }), (0,
                                N.jsx)("p", {
                                    className: Fs,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_past_activity")
                                })]
                            })
                        });
                        Ke({
                            title: (0,
                            N.jsx)("span", {
                                className: Ps,
                                children: (0,
                                Z.O4)("ok_game_okxracer_racing_records")
                            }),
                            titleCenter: !0,
                            containerClassName: Os,
                            children: t
                        })
                    },
                    children: [(0,
                    Z.O4)("ok_game_okxracer_my_records"), (0,
                    N.jsx)(P.Z, {
                        iconName: "okx-growth-chevrons",
                        className: Zs
                    })]
                })
            }
              , Ws = function() {
                return (0,
                N.jsxs)("div", {
                    className: Vr,
                    children: [(0,
                    N.jsx)(Mr, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            Z.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: Hr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    N.jsx)("div", {
                        className: Xr,
                        children: (0,
                        N.jsx)(Us, {})
                    }), (0,
                    N.jsxs)(Gr.Z, {
                        activeClassName: Yr,
                        noPadding: !0,
                        size: Gr.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        N.jsx)(Gr.Z.TabPane, {
                            tab: (0,
                            Z.O4)("ok_game_okxracer_friends2"),
                            id: ks,
                            className: zr,
                            children: (0,
                            N.jsx)("div", {
                                className: Kr,
                                children: (0,
                                N.jsx)(ws, {
                                    pageType: ks
                                })
                            })
                        }), (0,
                        N.jsx)(Gr.Z.TabPane, {
                            className: zr,
                            tab: (0,
                            Z.O4)("ok_game_okxracer_global"),
                            id: js,
                            children: (0,
                            N.jsx)("div", {
                                className: Kr,
                                children: (0,
                                N.jsx)(ws, {
                                    pageType: js
                                })
                            })
                        })]
                    })]
                })
            };
            const Ms = "index_page-container__uWksH"
              , Vs = "index_page__-xiuX"
              , Hs = "index_entering__yddHy";
            var Ks = function(e) {
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
                    return p(Hs),
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
                    className: y()(Ms),
                    children: (0,
                    N.jsx)("div", {
                        className: y()(Vs, m),
                        children: (0,
                        N.jsx)(s.Switch, {
                            location: c,
                            children: t
                        })
                    })
                })
            }
              , Ys = {
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
              , zs = (0,
            a.createContext)({
                accountBindingInfo: Ys,
                isCertified: !1,
                isLoading: !1,
                getAccountBindingInfo: function() {
                    throw new Error("Function not implemented.")
                }
            })
              , Xs = function() {
                return (0,
                a.useContext)(zs)
            }
              , qs = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)(Ys)
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
                N.jsx)(zs.Provider, {
                    value: x,
                    children: t
                })
            }
              , Js = function() {
                var e = Xs().accountBindingInfo || {}
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
            const Qs = {
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
            var $s = function() {
                var e = Js()
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
                var b = (0,
                a.useMemo)((function() {
                    return !(!r || r.length <= 0) && (n && (null === n || void 0 === n ? void 0 : n.pointGradeName) === r[x].pointGradeName)
                }
                ), [r, i, x])
                  , C = (0,
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
                    className: Qs.container,
                    children: (0,
                    N.jsx)("div", {
                        className: Qs.cardBox,
                        children: (0,
                        N.jsxs)("div", {
                            className: y()(Qs.content, k ? Qs.fadeIn : Qs.fadeOut),
                            children: [(0,
                            N.jsx)("div", {
                                className: Qs.levelLogoBox,
                                children: (0,
                                N.jsx)("img", {
                                    src: null !== C && void 0 !== C && C.logo ? "".concat(o.Z.cdnBaseUrl).concat(null === C || void 0 === C ? void 0 : C.logo) : "".concat(o.Z.cdnBaseUrl).concat("/cdn/assets/imgs/248/0A41A851FBCA2AA7.webp"),
                                    alt: "level",
                                    className: y()(Qs.levelLogo, t >= x ? Qs.logoLight : Qs.logoGrade)
                                })
                            }), 0 !== x && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-left-centered-md", Qs.leftBtn, Qs.switchBtn),
                                onClick: O
                            }), x !== (null === r || void 0 === r ? void 0 : r.length) - 1 && (0,
                            N.jsx)(P.Z, {
                                className: y()("okds-arrow-chevron-right-centered-md", Qs.rightBtn, Qs.switchBtn),
                                onClick: T
                            }), (0,
                            N.jsx)("div", {
                                className: Qs.currentGrade,
                                children: b && (0,
                                Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                            }), (0,
                            N.jsx)("div", {
                                className: Qs.gradeTitle,
                                children: null === C || void 0 === C ? void 0 : C.pointGradeName
                            }), (0,
                            N.jsx)("div", {
                                className: Qs.progressNum,
                                children: C ? b && S ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        Jt.uf)(c)
                                    }), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : b ? (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("span", {
                                        children: (0,
                                        Jt.uf)(c)
                                    }), " /", " ", (0,
                                    Jt.uf)(C.upperBound), "\xa0", (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_points_tracker")]
                                }) : (0,
                                N.jsx)(N.Fragment, {
                                    children: C.upperBound ? (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_range_points_grade", {
                                        bottom: (0,
                                        Jt.uf)(C.lowerBound),
                                        top: (0,
                                        Jt.uf)(C.upperBound)
                                    }) : (0,
                                    Z.O4)("ok_game_okxracer_text_phase4_legendary_pts", {
                                        number: (0,
                                        Jt.uf)(C.lowerBound)
                                    })
                                }) : ""
                            }), b && !S && (0,
                            N.jsx)("div", {
                                className: Qs.progressSlide,
                                children: (0,
                                N.jsx)("div", {
                                    className: Qs.progress,
                                    style: {
                                        width: "".concat(c / (Number(null === C || void 0 === C ? void 0 : C.upperBound) || 1) * 100, "%")
                                    }
                                })
                            })]
                        })
                    })
                })
            };
            const ei = "License_loader__4L8AA"
              , ti = "License_container__MxoNJ"
              , ni = "License_pageTitle__h+Yja"
              , ai = "License_description__Oh9KK"
              , ri = "License_verifiedUsers__q-uxi"
              , si = "License_desc__tz2hR"
              , ii = "License_avatars__3HegJ"
              , oi = "License_usersCount__fkW5h"
              , ci = "License_termsAndConditions__jeApC";
            var li = n(35774)
              , ui = n(48006)
              , di = n(40544)
              , _i = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , mi = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function pi(e) {
                var t = {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: _i.KYC,
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
                    type: _i.SIGNUP,
                    status: mi(_i.SIGNUP),
                    url: e.signupLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_signup")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: _i.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink,
                    btnText: (0,
                    Z.O4)("ok_game_okxracer_btn_phase4_connect")
                }, t];
                return e.isConnectTelegram ? [t] : n
            }
            var fi = function(e) {
                var t = (0,
                a.useState)(pi(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = B().uid;
                (0,
                a.useEffect)((function() {
                    s(pi(e))
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
                        case _i.SIGNUP:
                        case _i.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(pi(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case _i.SIGNUP:
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
                        case _i.INSTALL:
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
                        case _i.CONNECT:
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
                        case _i.KYC:
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
            const xi = "LicenseCard_licenseCard__+wyQA"
              , hi = "LicenseCard_certified__jm59h"
              , vi = "LicenseCard_header__LUvW7"
              , gi = "LicenseCard_title__rMFOB"
              , ki = "LicenseCard_content__i2ESe"
              , ji = "LicenseCard_name__9TvhC"
              , Ni = "LicenseCard_tgInfo__rBwsf"
              , bi = "LicenseCard_squareDivider__e6Uce"
              , Ci = "LicenseCard_innerCard__n57Gb"
              , wi = "LicenseCard_details__boiyi"
              , yi = "LicenseCard_label__JX11k"
              , Zi = "LicenseCard_link__19+Q+"
              , Pi = "LicenseCard_linkIcon__oNENM"
              , Oi = "LicenseCard_points__MkLL5"
              , Ti = "LicenseCard_icon__b6JLr"
              , Si = "LicenseCard_certifyBtn__Z6vHo"
              , Ei = "LicenseCard_infoPopoverDesc__Km8Og"
              , Li = "LicenseCard_gradeImage__fd+PJ"
              , Bi = "LicenseCard_certifySteps__ocFD5"
              , Ii = "LicenseCard_subtitle__voS2X"
              , Ri = "LicenseCard_taskList__p-fIq"
              , Ai = "LicenseCard_task__zeIrU"
              , Di = "LicenseCard_subTitle__1PnGb"
              , Fi = "LicenseCard_btn__99PVm"
              , Gi = "LicenseCard_btnContent__KHUa5"
              , Ui = "LicenseCard_verifyBtn__fejf-";
            var Wi = function() {
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
              , Mi = function(e) {
                var t, n = e.getAccountBindingInfo, a = (0,
                s.useLocation)(), r = B(), i = r.uid, c = r.username, l = r.tgUsername, u = Ge().accumPoints, d = Xs(), _ = d.accountBindingInfo, m = d.isCertified, p = fi(_), f = p.list, x = p.handleClick, h = Js().currentGrade, v = null !== (t = null === _ || void 0 === _ ? void 0 : _.joinedDate) && void 0 !== t ? t : 0;
                return (0,
                N.jsxs)("section", {
                    className: y()(xi, (0,
                    Je.Z)({}, hi, m)),
                    children: [(0,
                    N.jsxs)("div", {
                        className: vi,
                        children: [(0,
                        N.jsx)(Wi, {}), (0,
                        N.jsx)("span", {
                            className: gi,
                            children: m ? (0,
                            Z.O4)("ok_game_okxracer_label_phase4_certified") : (0,
                            Z.O4)("ok_game_okxracer_label_phase4_uncertified")
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: ki,
                        children: [(0,
                        N.jsx)("p", {
                            className: ji,
                            children: c
                        }), (0,
                        N.jsxs)("p", {
                            className: Ni,
                            children: [l && "@".concat(l), v > 0 && (0,
                            N.jsxs)(N.Fragment, {
                                children: [l && (0,
                                N.jsx)("svg", {
                                    className: bi,
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
                                    Jt.o0)(new Date(v), {
                                        format: li.a1.StandardDate
                                    })
                                })]
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: Ci,
                            children: [(0,
                            N.jsxs)("div", {
                                className: wi,
                                children: [(0,
                                N.jsx)("p", {
                                    className: yi,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase4_racer_grade")
                                }), (0,
                                N.jsxs)(s.Link, {
                                    to: {
                                        pathname: W,
                                        hash: a.hash
                                    },
                                    className: Zi,
                                    children: [(0,
                                    ui.Z)(null === _ || void 0 === _ ? void 0 : _.pointGradeName), (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okds-arrow-chevron-right-centered-md",
                                        className: Pi
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: Oi,
                                    children: [(0,
                                    N.jsx)("span", {
                                        className: yi,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned")
                                    }), "\xa0", (0,
                                    Jt.uf)(u), (0,
                                    N.jsx)(di.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                        contentClassName: Ei,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: Ti
                                        })
                                    })]
                                })]
                            }), h && (0,
                            N.jsx)(H.Z, {
                                pictureClassName: Li,
                                className: Li,
                                src: "".concat(o.Z.cdnBaseUrl, "/").concat(h.logo)
                            })]
                        }), !m && (0,
                        N.jsx)(qe, {
                            className: Si,
                            size: V.default.SIZE.md,
                            text: (0,
                            Z.O4)("ok_game_okxracer_btn_phase4_certify"),
                            onClick: function() {
                                Ke({
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_title_phase4_complete_steps"),
                                    titleCenter: !0,
                                    containerClassName: Bi,
                                    children: (0,
                                    N.jsxs)(N.Fragment, {
                                        children: [(0,
                                        N.jsx)("p", {
                                            className: Ii,
                                            children: (0,
                                            Z.O4)("ok_game_okxracer_text_complete_steps_eligible")
                                        }), (0,
                                        N.jsx)("ul", {
                                            className: Ri,
                                            children: f.map((function(e) {
                                                return (0,
                                                N.jsxs)("li", {
                                                    className: Ai,
                                                    children: [(0,
                                                    N.jsxs)("div", {
                                                        className: wi,
                                                        children: [(0,
                                                        N.jsx)("p", {
                                                            className: gi,
                                                            children: e.title
                                                        }), (0,
                                                        N.jsx)("p", {
                                                            className: Di,
                                                            children: e.subTitle
                                                        })]
                                                    }), (0,
                                                    N.jsx)(qe, {
                                                        text: e.btnText,
                                                        size: V.default.SIZE.xs,
                                                        className: Fi,
                                                        contentClassName: Gi,
                                                        onClick: function() {
                                                            x(e.type)
                                                        }
                                                    })]
                                                }, e.type)
                                            }
                                            ))
                                        }), (0,
                                        N.jsx)(qe, {
                                            className: Ui,
                                            onClick: function() {
                                                n(!0),
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
                                                    telegramid: i
                                                })
                                            },
                                            text: (0,
                                            Z.O4)("ok_game_okxracer_surprises_verify")
                                        })]
                                    })
                                })
                            }
                        })]
                    })]
                })
            }
              , Vi = function() {
                var e, t = B().uid, n = Xs(), r = n.accountBindingInfo, s = n.isCertified, i = n.getAccountBindingInfo, u = n.isLoading, d = (0,
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
                        document.hidden || d()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [d]),
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
                u)
                    return (0,
                    N.jsx)("div", {
                        className: ei,
                        children: (0,
                        N.jsx)(la.Z, {})
                    });
                var _ = null !== (e = null === r || void 0 === r ? void 0 : r.totalVerifiedCount) && void 0 !== e ? e : 0;
                return (0,
                N.jsxs)("div", {
                    className: ti,
                    children: [!s && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(Mr, {
                            className: ni,
                            html: (0,
                            Z.O4)("ok_game_okxracer_title_phase4_cerify_racing")
                        }), (0,
                        N.jsxs)("div", {
                            className: ri,
                            children: [(0,
                            N.jsx)("p", {
                                className: si,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase4_certify_surprises")
                            }), (0,
                            N.jsx)(H.Z, {
                                className: ii,
                                src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg")
                            }), (0,
                            N.jsx)("span", {
                                className: oi,
                                children: _ > 0 ? (0,
                                Jt.uf)(_) : "--"
                            }), (0,
                            Z.O4)("ok_game_okxracer_text_racers_already_verified")]
                        })]
                    }), (0,
                    N.jsx)(Mi, {
                        getAccountBindingInfo: d
                    }), s && (0,
                    N.jsx)("p", {
                        className: ai,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_phase4_checkback_soon")
                    }), !s && (0,
                    N.jsx)(vn, {
                        className: ci
                    })]
                })
            }
              , Hi = function() {
                return (0,
                N.jsx)(qs, {
                    children: (0,
                    N.jsx)(Ks, {
                        animationPath: [W],
                        children: (0,
                        N.jsxs)(s.Switch, {
                            children: [(0,
                            N.jsx)(s.Route, {
                                path: U,
                                component: Vi,
                                exact: !0
                            }), (0,
                            N.jsx)(s.Route, {
                                path: W,
                                component: $s,
                                exact: !0
                            })]
                        })
                    })
                })
            };
            const Ki = "QrCode_container__r4Fu7"
              , Yi = "QrCode_qrCode__16PWa"
              , zi = "QrCode_title__+cibb"
              , Xi = "QrCode_message__eaOzW";
            var qi = function() {
                return (0,
                N.jsxs)("div", {
                    className: Ki,
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: Yi,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    N.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            Ur.dU)((0,
                            Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: zi
                    }), (0,
                    N.jsx)("p", {
                        className: Xi,
                        children: (0,
                        Z.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            }
              , Ji = n(42982);
            const Qi = "PullupList_loading__+51Dh"
              , $i = "PullupList_listLoadItem__XcvkH"
              , eo = "PullupList_listLeft__4eGh6"
              , to = "PullupList_listRight__w7Ely"
              , no = "PullupList_listLoading__whJeg";
            var ao = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()($i),
                    children: [(0,
                    N.jsx)(Jr, {
                        className: eo
                    }), (0,
                    N.jsx)(Jr, {
                        className: to
                    })]
                })
            }
              , ro = function() {
                return (0,
                N.jsx)("div", {
                    className: no,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        N.jsx)(ao, {}, t)
                    }
                    ))
                })
            }
              , so = function(e) {
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
                                        Ji.Z)(e), (0,
                                        Ji.Z)(n.rows))
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
                  , b = (0,
                Tr.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = function(e) {
                    e[0].isIntersecting && !m && !1 === f.current.stop && k(!g)
                };
                return (0,
                a.useEffect)((function() {
                    var e = new IntersectionObserver(C,{
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
                    b()
                }
                ), [g]),
                (0,
                N.jsxs)(N.Fragment, {
                    children: [i.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    N.jsx)("div", {
                        className: Qi,
                        ref: x,
                        children: m && (0,
                        N.jsx)(ro, {})
                    })]
                })
            };
            const io = "InviteList_listItem__q4jhG"
              , oo = "InviteList_name__LLQgt"
              , co = "InviteList_point__kXtCn"
              , lo = "InviteList_earnedPrice__4vAfw"
              , uo = "InviteList_pointNumber__v4P1H";
            var _o = function() {
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
                                    we(s, a);
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
                        className: lo,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            N.jsx)("span", {
                                className: uo,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Jt.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    N.jsx)(so, {
                        loadData: s,
                        children: function(e, t) {
                            return (0,
                            N.jsxs)("div", {
                                className: io,
                                children: [(0,
                                N.jsx)("div", {
                                    className: oo,
                                    children: e.extInviteeName
                                }), (0,
                                N.jsx)("div", {
                                    className: co,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        Jt.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const mo = "ReferralsPage_container__V48m1"
              , po = "ReferralsPage_inviteDetail__L1MhM"
              , fo = "ReferralsPage_detailItem__ujOp+"
              , xo = "ReferralsPage_dot__zKW7L"
              , ho = "ReferralsPage_detailTitle__OE657"
              , vo = "ReferralsPage_detailInfo__YC+Y9"
              , go = "ReferralsPage_inviteList__Jksx8";
            var ko = function() {
                var e = B().uid
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
                    className: mo,
                    children: [(0,
                    N.jsx)(Mr, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    N.jsx)("div", {
                        className: po,
                        children: t.map((function(e) {
                            return (0,
                            N.jsxs)("div", {
                                className: fo,
                                children: [(0,
                                N.jsx)("div", {
                                    className: xo
                                }), (0,
                                N.jsx)("div", {
                                    className: ho,
                                    children: e.title
                                }), (0,
                                N.jsx)("div", {
                                    className: vo,
                                    children: e.detailInfo
                                })]
                            }, e.title)
                        }
                        ))
                    }), (0,
                    N.jsx)("div", {
                        className: go,
                        children: (0,
                        N.jsx)(_o, {})
                    }), (0,
                    N.jsx)(as, {})]
                })
            }
              , jo = n(74914)
              , No = n(59257);
            const bo = "index_taskItemPlaceholder__6HYF9"
              , Co = "index_task__wcySb";
            var wo = function() {
                return (0,
                N.jsx)(N.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        N.jsx)("div", {
                            className: y()(bo),
                            children: (0,
                            N.jsx)(Jr, {
                                className: Co
                            })
                        }, t)
                    }
                    ))
                })
            }
              , yo = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , Zo = (0,
            a.createContext)({
                boosts: [],
                tasks: yo,
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
              , Po = function() {
                return (0,
                a.useContext)(Zo)
            }
              , Oo = function(e) {
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(yo)
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
                  , v = Ge().updateGameInfoFromServer
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
                                Promise.allSettled([Oe(!0), Se(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : yo);
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
                                    Te({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Oe(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
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
                                    Ee(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Se(), v()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : yo,
                                    m(d),
                                    x && (_ = d.taskGroups.find((function(e) {
                                        return e.groupName === x.groupName
                                    }
                                    ))) && h(_)),
                                    e.abrupt("return", !0);
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(0),
                                    q(e.t0);
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
                var b = (0,
                a.useCallback)((function(e) {
                    h(e)
                }
                ), []);
                return (0,
                N.jsx)(Zo.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: x,
                        setSelectedPartner: b
                    },
                    children: t
                })
            };
            const To = "WalletTask_sheet-container__bz-jm"
              , So = "WalletTask_sheet-name__xuyl9"
              , Eo = "WalletTask_sheet-desc__snmOq"
              , Lo = "WalletTask_sheeLogo__LcXBr"
              , Bo = "WalletTask_sheeLogoCheck__4qpgw"
              , Io = "WalletTask_sheetCopyBox__vbEpV"
              , Ro = "WalletTask_sheetCopyIcon__shZrx"
              , Ao = "WalletTask_btn__JBh79"
              , Do = "WalletTask_btn-txt__qnE8C";
            var Fo = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Go = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Uo = function(e) {
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
                    return (null === t || void 0 === t ? void 0 : t.state) === Ot.finished ? T.act({
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
                                    Br(m, n);
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
                    }), (null === t || void 0 === t ? void 0 : t.state) === Ot.finished && t.context.actionType === Pe.WalletConnect ? (0,
                    N.jsxs)("div", {
                        className: To,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Go),
                            className: Lo
                        }), (0,
                        N.jsx)("div", {
                            className: So,
                            children: t.context.nameFinished
                        }), (0,
                        N.jsxs)("div", {
                            className: Io,
                            children: [(0,
                            N.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", Ro),
                                onClick: function() {
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Pe.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
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
                            className: Ao,
                            onClick: function() {
                                s()
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: Do,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    N.jsxs)("div", {
                        className: To,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Fo),
                            className: Bo
                        }), (0,
                        N.jsx)("div", {
                            className: So,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        N.jsx)("div", {
                            className: Eo,
                            children: i || (null === t || void 0 === t ? void 0 : t.context.desc)
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.fill,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: Ao,
                            loading: h,
                            onClick: g,
                            children: (0,
                            N.jsx)("div", {
                                className: Do,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            };
            const Wo = "WalletDepositTask_sheet-container__7+LUG"
              , Mo = "WalletDepositTask_sheet-name__RuWrl"
              , Vo = "WalletDepositTask_sheet-desc__S5hoQ"
              , Ho = "WalletDepositTask_sheeLogo__VPRz9"
              , Ko = "WalletDepositTask_sheetCopyBox__FvPfk"
              , Yo = "WalletDepositTask_sheetCopyIcon__KeD4-"
              , zo = "WalletDepositTask_btn__kCKz2"
              , Xo = "WalletDepositTask_depositBtn__TPPeH"
              , qo = "WalletDepositTask_btn-txt__tvio1";
            var Jo = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Qo = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.taskList
                  , i = e.onClick
                  , d = Ge().context
                  , _ = Po().doTask
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
                        return (null === e || void 0 === e || null === (t = e.context) || void 0 === t ? void 0 : t.actionType) === Pe.WalletConnect
                    }
                    ))
                }
                ), [s])
                  , g = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n, a) {
                        var r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((null === t || void 0 === t ? void 0 : t.state) !== Ot.unfinished) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    _(null === t || void 0 === t ? void 0 : t.id, n);
                                case 3:
                                    r = e.sent,
                                    x(a || ""),
                                    r && X(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"));
                                case 6:
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
                    children: (null === v || void 0 === v ? void 0 : v.state) !== Ot.unfinished || f || (null === t || void 0 === t ? void 0 : t.context.actionType) !== Pe.WalletDepositConnect ? (null === t || void 0 === t ? void 0 : t.context.actionType) === Pe.WalletDepositConnect && (0,
                    N.jsxs)("div", {
                        className: Wo,
                        children: [(0,
                        N.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Jo),
                            className: Ho
                        }), (0,
                        N.jsx)("div", {
                            className: Mo,
                            children: null === t || void 0 === t ? void 0 : t.context.connectedTitle
                        }), (0,
                        N.jsx)("div", {
                            className: Vo,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        N.jsxs)("div", {
                            className: Ko,
                            children: [(0,
                            N.jsx)("div", {
                                children: f
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-copy", Yo),
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
                            className: Xo,
                            onClick: function() {
                                i(t)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: qo,
                                children: null === t || void 0 === t ? void 0 : t.context.verifyBtnText
                            })
                        }), (0,
                        N.jsx)(V.default, {
                            category: V.default.CATEGORY.outline,
                            type: V.default.TYPE.primary,
                            size: V.default.SIZE.lg,
                            className: zo,
                            onClick: function() {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(d.tonDeeplink)
                            },
                            children: (0,
                            N.jsx)("div", {
                                className: qo,
                                children: null === t || void 0 === t ? void 0 : t.context.depositBtnText
                            })
                        })]
                    }) : (0,
                    N.jsx)(Uo, {
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
            const $o = "index_task-item__JdIYG"
              , ec = "index_title__hYmAn"
              , tc = "index_state__ddlCZ"
              , nc = "index_item-left__BNG-l"
              , ac = "index_item-right__V+4iT"
              , rc = "index_icon__yk0cJ"
              , sc = "index_done__h9mLm";
            var ic = function(e) {
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context;
                return (0,
                N.jsxs)("div", {
                    className: $o,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsxs)("div", {
                        className: nc,
                        children: [(0,
                        N.jsx)("div", {
                            className: ec,
                            children: i.name
                        }), (0,
                        N.jsx)("div", {
                            className: tc,
                            children: " ".concat(s === Ot.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            Jt.uf)(r, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: ac,
                        children: s === Ot.finished ? (0,
                        N.jsx)("div", {
                            className: sc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_done")
                        }) : (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", rc)
                        })
                    })]
                }, a)
            };
            const oc = "index_container__LfQHA"
              , cc = "index_sheet-container__7hIP5"
              , lc = "index_sheet-name__+hUn6"
              , uc = "index_sheet-desc__Uh4Uk"
              , dc = "index_btn__+6gr5";
            function _c(e) {
                var t, n = e.tasks, r = e.className, s = Po().doTask, i = (0,
                a.useState)(), o = (0,
                u.Z)(i, 2), d = o[0], _ = o[1], m = (0,
                a.useState)(!1), p = (0,
                u.Z)(m, 2), f = p[0], x = p[1], h = B().uid, v = function() {
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
                                    if (t.context.actionType === Pe.OpenLink && t.context.redirectLink && (null === (a = window) || void 0 === a || null === (r = a.Telegram) || void 0 === r || r.WebApp.openLink(t.context.redirectLink)),
                                    t.state !== Ot.unfinished) {
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
                Tr.Z)((function(e) {
                    var t = (n || []).find((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.id) === e
                    }
                    ));
                    if (t) {
                        var a = t.context.actionType
                          , r = t.state;
                        (null === t || void 0 === t ? void 0 : t.state) === Ot.finished && a !== Pe.WalletConnect && a !== Pe.OpenLink || (_(t),
                        x(!0),
                        a === Pe.WalletConnect && (r === Ot.finished ? T.act({
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
                Tr.Z)(v, {
                    wait: 500,
                    leading: !0
                }).run, j = (t = {},
                (0,
                Je.Z)(t, Pe.WalletConnect, (function() {
                    return (0,
                    N.jsx)(Uo, {
                        selectedTask: d,
                        onClick: function(e, t) {
                            return k(e, t)
                        },
                        uid: h
                    })
                }
                )),
                (0,
                Je.Z)(t, Pe.WalletDepositConnect, (function() {
                    return (0,
                    N.jsx)(Qo, {
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
                        className: y()(oc, r),
                        children: n.length > 0 ? n.map((function(e) {
                            return (0,
                            N.jsx)(ic, {
                                task: e,
                                onClick: g
                            }, e.id)
                        }
                        )) : (0,
                        N.jsx)(wo, {})
                    }), d && (0,
                    N.jsx)(He, {
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
                                    className: cc,
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: lc,
                                        children: e.name
                                    }), (0,
                                    N.jsx)("div", {
                                        className: uc,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Ur.dU)(t)
                                        }
                                    }), (0,
                                    N.jsx)(qe, {
                                        className: dc,
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
            const mc = {
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
            var pc = function() {
                var e = Po().partner
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
                    className: mc.container,
                    children: [(0,
                    N.jsxs)("div", {
                        className: mc.header,
                        children: [(0,
                        N.jsx)(jo.Z, {
                            size: No.Z.sm,
                            className: mc.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        N.jsx)("h1", {
                            className: mc.title,
                            children: _
                        })]
                    }), (0,
                    N.jsx)("p", {
                        className: mc.desc,
                        children: m
                    }), (0,
                    N.jsxs)("div", {
                        className: mc.status,
                        children: [(0,
                        N.jsxs)("div", {
                            className: mc.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: mc.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: mc.statusValue,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    Jt.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: mc.statusItem,
                            children: [(0,
                            N.jsx)("div", {
                                className: mc.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            N.jsxs)("div", {
                                className: mc.statusValue,
                                children: [(0,
                                N.jsx)(P.Z, {
                                    className: y()("okx-growth-friends", mc.participantsIcon)
                                }), Jt.ag.shortNumber(f, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: mc.tasks,
                        children: [(0,
                        N.jsxs)("div", {
                            className: mc.taskListHeader,
                            children: [(0,
                            N.jsx)("span", {
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            N.jsx)("span", {
                                className: mc.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(c, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        N.jsx)(_c, {
                            tasks: u
                        })]
                    })]
                })
            };
            const fc = "index_backgroundWrapper__qN2sL"
              , xc = "index_topContainer__Oestq"
              , hc = "index_pointsContainer__uT3xm"
              , vc = "index_pointsNameBigger__vMdga"
              , gc = "index_pointsNameSmaller__RJqmJ"
              , kc = "index_pointsValue__wGe00"
              , jc = "index_availablePointsValue__n8yPm"
              , Nc = "index_pointsDetails__nXNoJ"
              , bc = "index_infoIcon__FqneN";
            var Cc = function() {
                var e = Ge()
                  , t = e.points
                  , n = e.accumPoints
                  , a = e.basePoint
                  , r = e.autopilotPointsPerHour;
                return (0,
                N.jsx)("div", {
                    className: fc,
                    children: (0,
                    N.jsxs)("div", {
                        className: xc,
                        children: [(0,
                        N.jsxs)("div", {
                            className: hc,
                            children: [(0,
                            N.jsx)("div", {
                                className: vc,
                                children: (0,
                                Z.O4)("ok_game_okxracer_available_pts")
                            }), (0,
                            N.jsx)("div", {
                                className: jc,
                                children: Qt.yx.thousandFormat(t || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: hc,
                            children: [(0,
                            N.jsxs)("div", {
                                className: vc,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                N.jsx)(di.Z, {
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: di.Z.TYPES.neutral,
                                    children: (0,
                                    N.jsx)(P.Z, {
                                        iconName: "okx-growth-information",
                                        className: bc
                                    })
                                })]
                            }), (0,
                            N.jsx)("div", {
                                className: kc,
                                children: Qt.yx.thousandFormat(n || 0)
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: Nc,
                            children: [(0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsx)("div", {
                                    className: gc,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase42_base_pts_win")
                                }), (0,
                                N.jsxs)("div", {
                                    className: kc,
                                    children: ["\ud83c\udfc1 ", Qt.yx.thousandFormat(a || 0)]
                                })]
                            }), (0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsxs)("div", {
                                    className: gc,
                                    children: [(0,
                                    Z.O4)("ok_game_okxracer_text_phase42_hourly_autopts"), (0,
                                    N.jsx)(di.Z, {
                                        title: (0,
                                        Z.O4)("ok_game_okxracer_tooltip_phase42_hourly_earned"),
                                        type: di.Z.TYPES.neutral,
                                        children: (0,
                                        N.jsx)(P.Z, {
                                            iconName: "okx-growth-information",
                                            className: bc
                                        })
                                    })]
                                }), (0,
                                N.jsxs)("div", {
                                    className: kc,
                                    children: ["\ud83c\udfc1 ", Qt.yx.thousandFormat(r || 0)]
                                })]
                            })]
                        })]
                    })
                })
            };
            const wc = "Tag_tag__tkWly";
            var yc = function(e) {
                var t = e.text
                  , n = e.className;
                return (0,
                N.jsx)("span", {
                    className: y()(wc, n),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
              , Zc = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === Tt.DailyBoost
            }
              , Pc = function(e) {
                return "actionType"in e && e.actionType === Pe.UnLock
            }
              , Oc = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !Zc(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                Jt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const Tc = "index_sheet__FbHHx"
              , Sc = "index_sheet-icon__H2xCV"
              , Ec = "index_boostSheetTag__NbYFf"
              , Lc = "index_sheet-title__RInQ-"
              , Bc = "index_sheet-desc__W9myB"
              , Ic = "index_sheet-data__FALtV"
              , Rc = "index_sheet-point__Xrsvs"
              , Ac = "index_sheet-lvl__f1+W-"
              , Dc = "index_lockBtnContainer__4DPO7"
              , Fc = "index_btn__bxKiJ"
              , Gc = "index_boost-data-split-point__TaGIo";
            var Uc = function(e) {
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
                  , m = Pc(r)
                  , p = !1
                  , f = d
                  , x = _;
                return m && (c ? (f = r.unlockDescription,
                x = r.unlockButtonText) : f = r.ruleDescription,
                s === i && (p = !0,
                x = r.activatedButtonText)),
                (0,
                N.jsxs)("div", {
                    className: Tc,
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: Sc,
                        src: "".concat(o.Z.cdnBaseUrl).concat(l)
                    }), m && (0,
                    N.jsx)(yc, {
                        className: Ec
                    }), (0,
                    N.jsx)("div", {
                        className: Lc,
                        children: u
                    }), (0,
                    N.jsx)("div", {
                        className: Bc,
                        children: f
                    }), (0,
                    N.jsxs)("div", {
                        className: Ic,
                        children: [(0,
                        N.jsx)("span", {
                            className: Rc,
                            children: Oc(t)
                        }), (Zc(t) || s < i) && (0,
                        N.jsx)("span", {
                            className: Gc
                        }), (0,
                        N.jsx)("span", {
                            className: Ac,
                            children: Zc(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), m && c ? (0,
                    N.jsx)(wt, {
                        to: U,
                        className: Dc,
                        children: (0,
                        N.jsx)(qe, {
                            text: x
                        })
                    }) : (0,
                    N.jsx)(qe, {
                        onClick: function() {
                            n(t)
                        },
                        className: Fc,
                        text: x,
                        disabled: p
                    })]
                })
            };
            const Wc = "index_boost-item__k6pnm"
              , Mc = "index_boost-icon__wH6Dh"
              , Vc = "index_boostIconLoading__PFCBM"
              , Hc = "index_boost-title__9R-Ry"
              , Kc = "index_newTag__tgIea"
              , Yc = "index_boost-data__+0cnG"
              , zc = "index_boost-data-split-point__moT+k"
              , Xc = "index_boost-data-stage__8CAgC"
              , qc = "index_boostItemPlaceholder__NaUkk"
              , Jc = "index_locked__sM-YP"
              , Qc = "index_unlockIcon__whxqz"
              , $c = "index_unlockButton__C3EY5";
            var el = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context;
                if (Pc(s)) {
                    if (r)
                        return (0,
                        N.jsx)("div", {
                            className: Yc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === a)
                        return (0,
                        N.jsx)("div", {
                            className: Yc,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                N.jsxs)("div", {
                    className: Yc,
                    children: [(0,
                    N.jsx)("span", {
                        children: Oc(t)
                    }), (Zc(t) || n < a) && (0,
                    N.jsx)("span", {
                        className: zc
                    }), (0,
                    N.jsx)("span", {
                        className: Xc,
                        children: Zc(t) ? "".concat(a - n, "/").concat(a) : "Lvl ".concat(n)
                    })]
                })
            }
              , tl = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.name
                  , c = r.logo
                  , l = Pc(r);
                return (0,
                N.jsxs)("div", {
                    className: Wc,
                    onClick: function() {
                        n(a)
                    },
                    children: [(0,
                    N.jsx)(H.Z, {
                        className: Mc,
                        src: "".concat(o.Z.cdnBaseUrl).concat(c)
                    }), (0,
                    N.jsxs)("div", {
                        className: Hc,
                        children: [i, l && (0,
                        N.jsx)(yc, {
                            className: Kc
                        })]
                    }), (0,
                    N.jsx)(el, {
                        boost: t
                    }), s && (0,
                    N.jsxs)("div", {
                        className: Jc,
                        children: [(0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-lock", Qc)
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
                            className: $c,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , nl = function() {
                return (0,
                N.jsxs)("div", {
                    className: y()(Wc, qc),
                    children: [(0,
                    N.jsx)(Jr, {
                        className: Vc
                    }), (0,
                    N.jsx)(Jr, {
                        className: Hc
                    }), (0,
                    N.jsx)(Jr, {
                        className: Yc
                    })]
                })
            };
            const al = "index_boost-item-container__SW62L"
              , rl = "index_boost-item-padding__IwiTB";
            var sl = function(e) {
                var t = e.onClick
                  , n = Po().boosts
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
                    className: al,
                    children: [(0,
                    N.jsx)("div", {
                        className: rl
                    }), n.length > 0 ? (0,
                    N.jsx)(N.Fragment, {
                        children: n.map((function(e) {
                            return (0,
                            N.jsx)(tl, {
                                boost: e,
                                onClick: r
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(nl, {}), (0,
                        N.jsx)(nl, {}), (0,
                        N.jsx)(nl, {})]
                    }), (0,
                    N.jsx)("div", {
                        className: rl
                    })]
                })
            };
            const il = "index_boosts-title__WRC2M"
              , ol = "index_boost-area__eFBHi"
              , cl = "index_container__H6hcL";
            var ll = function() {
                var e = Po()
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
                  , f = Ge().points
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
                        className: il,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), (0,
                        N.jsx)("span", {
                            children: t.length > 0 ? " (".concat(t.length, ")") : ""
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: ol,
                        children: (0,
                        N.jsxs)("div", {
                            className: cl,
                            children: [(0,
                            N.jsx)(sl, {
                                onClick: h
                            }), (0,
                            N.jsx)(He, {
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: i && (0,
                                N.jsx)(Uc, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            };
            const ul = "index_partnerItem__S1dkf"
              , dl = "index_title__bRRMU"
              , _l = "index_points__WQSip"
              , ml = "index_state__gi-nK"
              , pl = "index_logo__y4rK-"
              , fl = "index_item-left__ej9+1"
              , xl = "index_item-right__3KRWi"
              , hl = "index_dot__4bynu"
              , vl = "index_participantsIcon__-tYh0"
              , gl = "index_icon__gS69A";
            var kl = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                N.jsxs)("div", {
                    className: ul,
                    children: [(0,
                    N.jsx)(jo.Z, {
                        size: No.Z.sm,
                        className: pl,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    N.jsxs)("div", {
                        className: fl,
                        children: [(0,
                        N.jsx)("div", {
                            className: dl,
                            children: t
                        }), (0,
                        N.jsx)("div", {
                            className: _l,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                Jt.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        N.jsxs)("div", {
                            className: ml,
                            children: [(0,
                            N.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Ur.dU)((0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: hl
                            }), (0,
                            N.jsx)(P.Z, {
                                className: y()("okx-growth-friends", vl)
                            }), (0,
                            N.jsx)("em", {
                                children: Jt.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: xl,
                        children: (0,
                        N.jsx)(P.Z, {
                            className: y()("okx-growth-chevrons-right", gl)
                        })
                    })]
                })
            };
            const jl = "index_container__wKNP9";
            function Nl(e) {
                var t = e.tasks
                  , n = e.className
                  , a = Po().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                N.jsx)("div", {
                    className: y()(jl, n),
                    children: r ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        N.jsx)(wt, {
                            to: F,
                            onClick: function() {
                                a(e)
                            },
                            children: (0,
                            N.jsx)(kl, {
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
                    N.jsx)(wo, {})
                })
            }
            const bl = "TaskArea_tabPane__irXs6"
              , Cl = "TaskArea_tabName__-BL2R"
              , wl = "TaskArea_list__cqK4t";
            var yl = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                Z.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                Z.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                N.jsxs)("div", {
                    className: Cl,
                    children: [r, " ", (0,
                    N.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , Zl = function() {
                var e = Po().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                N.jsx)(N.Fragment, {
                    children: (0,
                    N.jsxs)(Gr.Z.Underline, {
                        size: Gr.Z.SIZE.xl,
                        children: [(0,
                        N.jsx)(Gr.Z.TabPane, {
                            className: bl,
                            tab: (0,
                            N.jsx)(yl, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            N.jsx)(Nl, {
                                tasks: t,
                                className: wl
                            })
                        }), (0,
                        N.jsx)(Gr.Z.TabPane, {
                            className: bl,
                            tab: (0,
                            N.jsx)(yl, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            N.jsx)(_c, {
                                tasks: n,
                                className: wl
                            })
                        })]
                    })
                })
            };
            const Pl = "TaskPage_container__5KfIM"
              , Ol = "TaskPage_block__kt8oo"
              , Tl = "TaskPage_blockBoost__rwGOo";
            var Sl = function() {
                return (0,
                N.jsxs)("div", {
                    className: Pl,
                    children: [(0,
                    N.jsx)("div", {
                        className: Ol,
                        children: (0,
                        N.jsx)(Cc, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Tl,
                        children: (0,
                        N.jsx)(ll, {})
                    }), (0,
                    N.jsx)("div", {
                        className: Ol,
                        children: (0,
                        N.jsx)(Zl, {})
                    })]
                })
            }
              , El = function() {
                return (0,
                N.jsx)(Oo, {
                    children: (0,
                    N.jsxs)(s.Switch, {
                        children: [(0,
                        N.jsx)(s.Route, {
                            path: D,
                            component: Sl,
                            exact: !0
                        }), (0,
                        N.jsx)(s.Route, {
                            path: F,
                            component: pc,
                            exact: !0
                        })]
                    })
                })
            }
              , Ll = function() {
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
                    var e = B().uid;
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
                            N.jsx)(At, {
                                children: (0,
                                N.jsx)(Ue, {
                                    children: (0,
                                    N.jsx)(Gt, {
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
                                                        component: Fr,
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: G,
                                                        component: b(Ws),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: D,
                                                        component: El
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: A,
                                                        component: b(ko),
                                                        exact: !0
                                                    }), (0,
                                                    N.jsx)(s.Route, {
                                                        path: U,
                                                        component: b(Hi)
                                                    })]
                                                })
                                            }), (0,
                                            N.jsx)("div", {
                                                className: v,
                                                children: (0,
                                                N.jsx)(Zt, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        N.jsx)(qi, {})
                    })
                })
            }
              , Bl = document.getElementById("root");
            if (Bl) {
                var Il = (0,
                N.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    N.jsx)(I, {
                        children: (0,
                        N.jsx)(Ll, {})
                    })
                });
                (0,
                i.createRoot)(Bl).render(Il)
            }
        }
        ,
        87363: e=>{
            "use strict";
            e.exports = React
        }
        ,
        61533: e=>{
            "use strict";
            e.exports = ReactDOM
        }
        ,
        37046: ()=>{}
        ,
        88924: ()=>{}
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
    (()=>{
        var e = [];
        n.O = (t,a,r,s)=>{
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,r,s] = e[u], o = !0, c = 0; c < a.length; c++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e=>n.O[e](a[c]))) ? a.splice(c--, 1) : (o = !1,
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
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    (()=>{
        var e, t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__;
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
                Object.getOwnPropertyNames(o).forEach((e=>i[e] = ()=>a[e]));
            return i.default = ()=>a,
            n.d(s, i),
            s
        }
    }
    )(),
    n.d = (e,t)=>{
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.f = {},
    n.e = e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e, t),
    t)), [])),
    n.u = e=>"common/" + e + ".b0933464.js",
    n.miniCssF = e=>{}
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
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {}
          , t = "growth:";
        n.l = (a,r,s,i)=>{
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
                var _ = (t,n)=>{
                    o.onerror = o.onload = null,
                    clearTimeout(m);
                    var r = e[a];
                    if (delete e[a],
                    o.parentNode && o.parentNode.removeChild(o),
                    r && r.forEach((e=>e(n))),
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
    n.r = e=>{
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e = {}
          , t = {};
        n.f.remotes = (a,r)=>{
            n.o(e, a) && e[a].forEach((e=>{
                var a = n.R;
                a || (a = []);
                var s = t[e];
                if (!(a.indexOf(s) >= 0)) {
                    if (a.push(s),
                    s.p)
                        return r.push(s.p);
                    var i = t=>{
                        t || (t = new Error("Container missing")),
                        "string" === typeof t.message && (t.message += '\nwhile loading "' + s[1] + '" from ' + s[2]),
                        n.m[e] = ()=>{
                            throw t
                        }
                        ,
                        s.p = 0
                    }
                      , o = (e,t,n,a,o,c)=>{
                        try {
                            var l = e(t, n);
                            if (!l || !l.then)
                                return o(l, a, c);
                            var u = l.then((e=>o(e, a)), i);
                            if (!c)
                                return u;
                            r.push(s.p = u)
                        } catch (d) {
                            i(d)
                        }
                    }
                      , c = (e,t,n)=>o(t.get, s[1], a, 0, l, n)
                      , l = t=>{
                        s.p = 1,
                        n.m[e] = e=>{
                            e.exports = t()
                        }
                    }
                    ;
                    o(n, s[2], 0, 0, ((e,t,a)=>e ? o(n.I, s[0], 0, e, c, a) : i()), 1)
                }
            }
            ))
        }
    }
    )(),
    (()=>{
        n.S = {};
        var e = {}
          , t = {};
        n.I = (a,r)=>{
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
                return i.length ? e[a] = Promise.all(i).then((()=>e[a] = 1)) : e[a] = 1
            }
        }
    }
    )(),
    (()=>{
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
    (()=>{
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
    (()=>{
        var e = {
            6554: 0,
            5145: 0
        };
        n.f.j = (t,a)=>{
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (5145 != t) {
                    var s = new Promise(((n,a)=>r = e[t] = [n, a]));
                    a.push(r[2] = s);
                    var i = n.p + n.u(t)
                      , o = new Error;
                    n.l(i, (a=>{
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
        n.O.j = t=>0 === e[t];
        var t = (t,a)=>{
            var r, s, [i,o,c] = a, l = 0;
            if (i.some((t=>0 !== e[t]))) {
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
    var a = n.O(void 0, [5534, 5825, 5145, 4878, 7124, 6371, 1249, 8283, 6877, 4102, 4084, 4719, 5354], (()=>n(13591)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.f6513cb2.js.map
