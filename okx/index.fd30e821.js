(()=>{
    var e = {
        70716: (e,t,n)=>{
            "use strict";
            var r = n(87363)
              , a = n.n(r);
            const i = ReactRouterDOM;
            n(75139);
            var s = n(73271)
              , o = n(53949)
              , c = (n(78599),
            n(74165))
              , l = n(15861)
              , u = n(70885)
              , d = n(96723)
              , _ = n(46541)
              , m = n(1677)
              , p = n(98924)
              , f = n(8786)
              , h = function() {
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, r = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return f.Z.set("locale", r),
                window._okGlobal && (window._okGlobal.locale = r),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: r
                }
            };
            const x = "App_container__p+0qT"
              , v = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = n(1413);
            const j = "NoPaddingLayout_no-padding-layout__6LAKV";
            var b = n(45263);
            const w = "ComPaddingLayout_common-padding-layout__0gGbM";
            var C = function(e) {
                return function(t) {
                    return (0,
                    b.jsx)("div", {
                        className: w,
                        children: (0,
                        b.jsx)(e, (0,
                        k.Z)({}, t))
                    })
                }
            }
              , y = n(44925)
              , N = n(95640)
              , O = n.n(N)
              , Z = n(14300)
              , P = n(72106)
              , T = {
                act: function() {}
            };
            "undefined" !== typeof window && (T = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var E = T
              , S = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).source;
                E.act({
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
              , R = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , I = (0,
            r.createContext)(R)
              , L = function() {
                return (0,
                r.useContext)(I)
            }
              , B = function(e) {
                var t = e.children
                  , n = (0,
                r.useMemo)((function() {
                    var e, t, n = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, r = n.user, a = n.start_param;
                    if (r) {
                        var i = r.id
                          , s = r.username
                          , o = r.first_name
                          , c = r.last_name
                          , l = s;
                        if (o || c) {
                            var u = o && o ? " " : "";
                            l = "".concat(o).concat(u).concat(c)
                        }
                        return {
                            uid: null === i || void 0 === i ? void 0 : i.toString(),
                            username: l,
                            lastName: c,
                            firstName: o,
                            startParam: a,
                            gameId: 1
                        }
                    }
                    return R
                }
                ), [])
                  , a = (0,
                r.useState)(n)
                  , i = (0,
                u.Z)(a, 1)[0];
                return (0,
                b.jsx)(I.Provider, {
                    value: i,
                    children: t
                })
            }
              , A = "/mini-app/racer"
              , F = "/mini-app/racer/referrals"
              , M = "/mini-app/racer/tasks"
              , W = "/mini-app/racer/tasks/partner"
              , U = "/mini-app/racer/leaderboard"
              , D = "/mini-app/racer/rewards"
              , V = n(83108)
              , G = n(76983)
              , H = n(59896)
              , K = n(4860)
              , Y = n(4422)
              , X = n(72202)
              , z = function(e, t) {
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
                z(!1, t || (0,
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
                          , r = n.status
                          , a = n.data || {}
                          , i = a.msg
                          , s = a.code;
                        Y.k.warn("Request error, url=".concat(e, " status=").concat(r, " msg=").concat(i, " code=").concat(s), t)
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
              , re = function() {
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
              , ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().post(t, n, r).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
              , ie = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", $().put(t, n, r).then(ee, te(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
              , se = function() {
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
                c.Z)().mark((function e(t, n, r) {
                    var a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = new FormData,
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((function(e) {
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    r instanceof Blob ? a.append(n, r) : a.append(n, String(r))
                                }
                                )),
                                e.abrupt("return", ae(t, a, r));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }();
            const ce = {
                get: ne,
                getWithCache: re,
                post: ae,
                put: ie,
                postForm: oe,
                delete: se
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
                    c.Z)().mark((function n(r, a) {
                        var i;
                        return (0,
                        c.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (i = "cache_".concat(r, "_").concat(JSON.stringify(a)),
                                    !_e.hasItem(i) || _e.isItemExpired(i, t)) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return", e(r, a, !0));
                                case 3:
                                    return n.abrupt("return", e(r, a, !1));
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
                c.Z)().mark((function e(t, n, r) {
                    var a, i, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ce.get(t, (0,
                                k.Z)((0,
                                k.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (a = window.Telegram) || void 0 === a || null === (i = a.WebApp) || void 0 === i ? void 0 : i.initData) || ""
                                    }
                                }));
                            case 2:
                                return s = e.sent,
                                _e.setItem(n, s),
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
            function he(e, t, n) {
                return xe.apply(this, arguments)
            }
            function xe() {
                return (xe = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    var a, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (a = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !r || !_e.hasItem(a)) {
                                    e.next = 5;
                                    break
                                }
                                return i = _e.getItem(a),
                                pe(t, a, n).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", pe(t, a, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ve(e, t, n, r) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r, a) {
                    var i, s, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ce.post(t, n, (0,
                                k.Z)((0,
                                k.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (i = window.Telegram) || void 0 === i || null === (s = i.WebApp) || void 0 === s ? void 0 : s.initData) || ""
                                    }
                                }));
                            case 2:
                                return o = e.sent,
                                _e.setItem(r, o),
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
            function ke(e, t, n, r) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r, a) {
                    var i, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (i = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !_e.hasItem(i) || !r) {
                                    e.next = 5;
                                    break
                                }
                                return s = _e.getItem(i),
                                ve(t, n, i, a).then((function() {}
                                )).catch((function() {}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", ve(t, n, i, a));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var be = "/priapi/v1/affiliate"
              , we = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(be, "/game/racer/info"), t));
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
                                return e.abrupt("return", ke("".concat(be, "/game/racer/assess"), t));
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
                    var r, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                he("".concat(be, "/game/racer/invitee-list"), {
                                    params: t
                                }, n);
                            case 3:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", a);
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
              , Ne = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, r, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(he, 1e4),
                                e.next = 4,
                                n("".concat(be, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 4:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", a);
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
              , Oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var n, r, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                n = me(he, 3e5),
                                e.next = 4,
                                n("".concat(be, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 4:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", a);
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
              , Ze = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e
            }({})
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", he("".concat(be, "/game/racer/boosts"), {}, t));
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
                                return e.abrupt("return", ke("".concat(be, "/game/racer/boost"), t));
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
                                return e.abrupt("return", he("".concat(be, "/game/racer/group-tasks"), {}, t));
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
                                return e.abrupt("return", ke("".concat(be, "/game/racer/task"), t));
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
              , Re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r, a, i, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                n = s.length > 1 && void 0 !== s[1] ? s[1] : {
                                    isRecheckBinding: !1
                                },
                                e.next = 4,
                                ke("".concat(be, "/game/racer/account-binding"), n, t);
                            case 4:
                                if (r = e.sent,
                                a = r.code,
                                i = r.data,
                                0 !== a || !i) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", {
                                    isConnectTelegram: 1 === i.tgBindingStatus,
                                    isKyc: 1 === i.kycVerifyStatus,
                                    signupLink: i.signupLink,
                                    downloadLink: i.downloadLink,
                                    bindTgLink: i.bindTgLink,
                                    verifyKycLink: i.verifyKycLink,
                                    totalVerifiedCount: i.totalVerifiedCount
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
            function Ie(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                        r[a] = arguments[a];
                    return e.apply(void 0, n.concat(r))
                }
            }
            var Le = {
                Rewards: Ie(Re, !0),
                Friends: Ie(Ne, {
                    pageNo: 1
                }),
                Boost: Ie(Pe, !0),
                Task: Ie(Ee, !0),
                Invitee: Ie(ye, {
                    pageNo: 1
                }, !0),
                Global: Ie(Oe, {
                    pageNo: 1
                })
            }
              , Be = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
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
                                if (!n || !Le[n]) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9,
                                r = Le[n],
                                void ("requestIdleCallback"in window ? requestIdleCallback(r) : setTimeout(r, 0));
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && Y.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 14:
                                return e.next = 16,
                                Ae(t);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                        var r
                    }
                    ), e, null, [[3, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function Fe() {
                Ae(Be).catch((function(e) {
                    e instanceof Error && Y.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Me = (0,
            r.createContext)({
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
                context: {}
            })
              , We = function() {
                return (0,
                r.useContext)(Me)
            }
              , Ue = function(e) {
                var t, n = e.children, a = (0,
                r.useState)(0), i = (0,
                u.Z)(a, 2), s = i[0], o = i[1], d = (0,
                r.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], f = (0,
                r.useState)(0), h = (0,
                u.Z)(f, 2), x = h[0], v = h[1], g = (0,
                r.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                r.useState)(0), y = (0,
                u.Z)(C, 2), N = y[0], O = y[1], P = (0,
                r.useState)(""), T = (0,
                u.Z)(P, 2), E = T[0], S = T[1], R = (0,
                r.useState)({}), I = (0,
                u.Z)(R, 2), B = I[0], A = I[1], F = (0,
                r.useState)(!0), M = (0,
                u.Z)(F, 2), W = M[0], U = M[1], D = L(), V = D.username, G = D.startParam, H = (0,
                r.useState)(""), J = (0,
                u.Z)(H, 2), q = J[0], Q = J[1], $ = (0,
                r.useState)(!1), ee = (0,
                u.Z)($, 2), te = ee[0], ne = ee[1], re = (0,
                r.useState)(0), ae = (0,
                u.Z)(re, 2), ie = ae[0], se = ae[1], oe = (0,
                r.useState)(!1), ce = (0,
                u.Z)(oe, 2), le = ce[0], ue = ce[1], de = (0,
                r.useState)(), _e = (0,
                u.Z)(de, 2), me = _e[0], pe = _e[1], fe = (0,
                r.useState)(!1), he = (0,
                u.Z)(fe, 2), xe = he[0], ve = he[1], ge = null !== (t = new K.Z((G || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", ke = (0,
                r.useCallback)((0,
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
                                we({
                                    extUserName: V,
                                    linkCode: ge
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                S(n.linkCode),
                                v(n.numChances),
                                O(n.secondToRefresh),
                                w(n.numChancesTotal),
                                ne(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                ue(n.isUnderRiskControl),
                                se(n.autopilotPoints),
                                pe({
                                    activityEndTime: n.context.activityEndTime,
                                    isShowActivityFlag: n.context.isShowActivityFlag && !n.isUnderRiskControl
                                }),
                                A(n.context),
                                U(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                z(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [ge, V]);
                (0,
                r.useEffect)((function() {
                    ve(Boolean(null === me || void 0 === me ? void 0 : me.isShowActivityFlag))
                }
                ), [null === me || void 0 === me ? void 0 : me.isShowActivityFlag]),
                (0,
                r.useEffect)((function() {
                    ke().then(Fe).catch((function(e) {
                        e instanceof Error && Y.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [ke]),
                (0,
                r.useEffect)((function() {
                    var e = new X.Z(N);
                    return N > 0 ? (e.start(),
                    e.addEventListener(X.Z.Event.UPDATE, (function(e) {
                        Q("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(X.Z.Event.FINISH, (function() {
                        Q(""),
                        ke()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    Q("")),
                    function() {
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [N, ke]),
                (0,
                r.useEffect)((function() {
                    function e() {
                        document.hidden || ke()
                    }
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [ke]);
                var je = (0,
                r.useCallback)((function(e) {
                    o(Math.max(e.points, 0)),
                    v(e.numChances),
                    O(e.secondToRefresh)
                }
                ), [])
                  , be = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ke();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [ke])
                  , Ce = (0,
                r.useCallback)((function() {
                    ne(!1)
                }
                ), [])
                  , ye = (0,
                r.useCallback)((function() {
                    ue(!1)
                }
                ), [])
                  , Ne = (0,
                r.useCallback)((function() {
                    ve((function(e) {
                        return !e
                    }
                    ))
                }
                ), [])
                  , Oe = (0,
                r.useMemo)((function() {
                    return {
                        isLoading: W,
                        points: s,
                        accumPoints: m,
                        numChances: x,
                        numChancesTotal: j,
                        countdownDisplay: q,
                        updateGameInfo: je,
                        linkCode: E,
                        updateGameInfoFromServer: be,
                        isShowAutopilotGainedPoint: te,
                        autopilotPoints: ie,
                        hideAutopilotSheet: Ce,
                        isShowRiskControlSheet: le,
                        hideRiskControlSheet: ye,
                        activity: me,
                        isShowActivityDetails: xe,
                        toggleActivityDetailsBottomSheet: Ne,
                        context: B
                    }
                }
                ), [W, s, m, x, j, q, je, E, be, te, ie, Ce, le, ye, me, xe, Ne, B]);
                return (0,
                b.jsx)(Me.Provider, {
                    value: Oe,
                    children: n
                })
            }
              , De = n(5425);
            const Ve = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Ge = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Ve.closeBtn,
                closeIconClassName: Ve.closeIcon
            }
              , He = function(e) {
                return (0,
                b.jsx)(De.Z, (0,
                k.Z)((0,
                k.Z)({}, Ge), {}, {
                    topContent: e.title ? void 0 : (0,
                    b.jsx)("div", {
                        className: Ve.topPadding
                    }),
                    zIndex: 999
                }, e))
            };
            const Ke = "PrimaryButton_button__SJFHA"
              , Ye = "PrimaryButton_buttonText__19AJ7";
            var Xe = function(e) {
                var t = e.onClick
                  , n = e.text
                  , r = e.className
                  , a = e.disabled
                  , i = void 0 !== a && a;
                return (0,
                b.jsx)(G.default, {
                    category: G.default.CATEGORY.fill,
                    type: G.default.TYPE.primary,
                    size: G.default.SIZE.lg,
                    className: O()(Ke, r),
                    onClick: t,
                    disabled: i,
                    children: (0,
                    b.jsx)("div", {
                        className: Ye,
                        children: n
                    })
                })
            }
              , ze = n(4942);
            const Je = "Timer_timer__j+KcR"
              , qe = "Timer_show__GFyz+"
              , Qe = "Timer_label__nxjo+"
              , $e = "Timer_separator__CFi1G"
              , et = "Timer_timerValue__CaRO2";
            var tt = function(e) {
                var t = e.endTime
                  , n = e.label
                  , a = (0,
                r.useRef)(new X.Z.Absolute(t,{
                    interval: 1
                }))
                  , i = (0,
                r.useState)()
                  , s = (0,
                u.Z)(i, 2)
                  , o = s[0]
                  , c = s[1];
                return (0,
                r.useEffect)((function() {
                    var e = a.current;
                    return e.start().addEventListener(X.Z.Event.UPDATE, (function(e) {
                        c(e)
                    }
                    )),
                    function() {
                        e.end()
                    }
                }
                ), []),
                (0,
                b.jsxs)("div", {
                    className: O()(Je, (0,
                    ze.Z)({}, qe, o)),
                    children: [n && (0,
                    b.jsx)("span", {
                        className: Qe,
                        children: n
                    }), Number(null === o || void 0 === o ? void 0 : o.day) > 0 && (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)("span", {
                            className: et,
                            children: null === o || void 0 === o ? void 0 : o.day
                        }), (0,
                        b.jsx)("span", {
                            className: $e,
                            children: ":"
                        })]
                    }), (0,
                    b.jsx)("span", {
                        className: et,
                        children: null === o || void 0 === o ? void 0 : o.hour
                    }), (0,
                    b.jsx)("span", {
                        className: $e,
                        children: ":"
                    }), (0,
                    b.jsx)("span", {
                        className: et,
                        children: null === o || void 0 === o ? void 0 : o.minute
                    }), (0,
                    b.jsx)("span", {
                        className: $e,
                        children: ":"
                    }), (0,
                    b.jsx)("span", {
                        className: et,
                        children: null === o || void 0 === o ? void 0 : o.second
                    })]
                })
            };
            const nt = "EventPopover_eventPopoverWrapper__65bP-"
              , rt = "EventPopover_eventPopover__B0CAq"
              , at = "EventPopover_eventPopoverDesc__+lNFw"
              , it = "EventPopover_eventPopoverBtn__BKIwS"
              , st = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , ot = "EventPopover_eventPopoverArrow__M+sYF"
              , ct = "EventPopover_eventDetailsContainer__G1KfS"
              , lt = "EventPopover_title__Tie4q"
              , ut = "EventPopover_description__tVAy9"
              , dt = "EventPopover_disclaimer__jFZC3"
              , _t = "EventPopover_continueBtn__S2Sj-"
              , mt = "EventPopover_eventDetails__5xDB0"
              , pt = "EventPopover_eventImg__0yapf";
            var ft = function(e) {
                var t = e.children
                  , n = We()
                  , r = n.activity
                  , a = n.isShowActivityDetails
                  , i = n.toggleActivityDetailsBottomSheet
                  , s = Number(null === r || void 0 === r ? void 0 : r.activityEndTime);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(V.Z, {
                        zIndex: 998,
                        layerClassName: nt,
                        popperClassName: rt,
                        disabled: !(null !== r && void 0 !== r && r.isShowActivityFlag),
                        show: null === r || void 0 === r ? void 0 : r.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: at,
                        description: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(G.default, {
                                className: it,
                                type: G.default.TYPE.primary,
                                category: G.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: i,
                                icon: (0,
                                b.jsx)(P.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: st
                                }),
                                iconType: G.default.ICON_POSITION.tailing,
                                children: (0,
                                Z.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            b.jsx)("svg", {
                                className: ot,
                                width: "8",
                                height: "4",
                                viewBox: "0 0 8 4",
                                fill: "none",
                                children: (0,
                                b.jsx)("path", {
                                    d: "M4 4L8 0L0 0L4 4Z",
                                    fill: "#2F302D"
                                })
                            })]
                        }),
                        children: t
                    }), (0,
                    b.jsx)(He, {
                        noContentPadding: !0,
                        visible: a,
                        onClose: function() {
                            i()
                        },
                        children: (0,
                        b.jsxs)("div", {
                            className: ct,
                            children: [(0,
                            b.jsxs)("div", {
                                className: mt,
                                children: [(0,
                                b.jsx)(H.Z, {
                                    pictureClassName: pt,
                                    className: pt,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                b.jsx)("h2", {
                                    className: lt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                b.jsx)("p", {
                                    className: ut,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                b.jsx)(tt, {
                                    endTime: s,
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_ends_in")
                                }), (0,
                                b.jsx)("p", {
                                    className: dt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            b.jsx)(Xe, {
                                className: _t,
                                onClick: function() {
                                    i()
                                },
                                text: (0,
                                Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            };
            const ht = "Navbar_navbar__LF3-M"
              , xt = "Navbar_link__qX0Sf"
              , vt = "Navbar_active__TCbF8"
              , gt = "Navbar_linkIcon__GtH54"
              , kt = "Navbar_linkText__Szxi-";
            var jt = ["children", "className"]
              , bt = ["iconName", "label", "onClick"]
              , wt = function(e) {
                var t = e.children
                  , n = e.className
                  , r = (0,
                y.Z)(e, jt)
                  , a = (0,
                i.useLocation)().hash;
                return (0,
                b.jsx)(i.Link, {
                    className: n,
                    to: "".concat(r.to).concat(a),
                    onClick: r.onClick,
                    children: t
                })
            }
              , Ct = function(e) {
                var t = e.iconName
                  , n = e.label
                  , r = e.onClick
                  , a = (0,
                y.Z)(e, bt)
                  , s = (0,
                i.useRouteMatch)({
                    path: a.to,
                    exact: a.to === A
                });
                return (0,
                b.jsxs)(wt, {
                    className: O()(xt, s && vt),
                    to: a.to,
                    onClick: r,
                    children: [(0,
                    b.jsx)(P.Z, {
                        iconName: t,
                        className: gt
                    }), (0,
                    b.jsx)("span", {
                        className: kt,
                        children: n
                    })]
                })
            }
              , yt = function() {
                var e = {
                    telegramid: L().uid
                };
                return (0,
                b.jsxs)("div", {
                    className: ht,
                    children: [(0,
                    b.jsx)(ft, {
                        children: (0,
                        b.jsx)(Ct, {
                            iconName: "okx-growth-home",
                            to: A,
                            label: (0,
                            Z.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    b.jsx)(Ct, {
                        iconName: "okx-growth-leaderboard",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_leaderboard"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                    b.jsx)(Ct, {
                        iconName: "okx-growth-task",
                        to: M,
                        label: (0,
                        Z.O4)("ok_game_okxracer_tasks"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                    b.jsx)(Ct, {
                        iconName: "okx-growth-friends",
                        to: F,
                        label: (0,
                        Z.O4)("ok_game_okxracer_friends"),
                        onClick: function() {
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                    b.jsx)(Ct, {
                        iconName: "okx-growth-surprises",
                        to: D,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                })
            };
            var Nt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Ot = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Zt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , Pt = "/help/okx-racer-terms-and-conditions"
              , Tt = function() {
                return "".concat(o.Z.cdnBaseUrl, "/cdn/assets/files/247/E8722761C0AB6781.json")
            };
            function Et(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function St() {
                return window.location != window.parent.location
            }
            const Rt = "RiskControl_title__h9Z0T";
            var It = function() {
                var e = We()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                b.jsx)(He, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    b.jsx)("div", {
                        className: Rt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , Lt = n(8031)
              , Bt = new (function() {
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
                          , r = e.data;
                        if (n.channel === t.channel && n.instId === t.instId) {
                            var a = ((null === r || void 0 === r ? void 0 : r[0]) || {}).last;
                            a && t.handleList.forEach((function(e) {
                                e(Number(a))
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
                    this.connection = new Lt.Z({
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
              , At = (0,
            r.createContext)(Bt)
              , Ft = function(e) {
                var t = e.children;
                return (0,
                b.jsx)(At.Provider, {
                    value: Bt,
                    children: t
                })
            }
              , Mt = (0,
            r.createContext)(null)
              , Wt = function() {
                return (0,
                r.useContext)(Mt)
            }
              , Ut = function(e) {
                var t = e.children
                  , n = (0,
                r.useState)(null)
                  , a = (0,
                u.Z)(n, 2)
                  , i = a[0]
                  , s = a[1]
                  , o = (0,
                r.useContext)(At);
                return (0,
                r.useEffect)((function() {
                    o.addCallback((function(e) {
                        s(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                b.jsx)(Mt.Provider, {
                    value: i,
                    children: t
                })
            }
              , Dt = n(46430)
              , Vt = "racer"
              , Gt = function() {
                var e;
                if (!(0,
                q.y)())
                    return Dt.Z.getInstance(Vt) || Dt.Z.init({
                        project: Vt
                    }),
                    null !== (e = Dt.Z.getInstance(Vt)) && void 0 !== e ? e : Dt.Z
            }
              , Ht = "guessRecords_new";
            function Kt(e) {
                var t = Gt().get(Ht) || [];
                t.unshift(e),
                Gt().set(Ht, t.slice(0, 5))
            }
            var Yt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Xt = {
                countdown: 5,
                onButtonClick: function() {},
                result: null,
                isPending: !1,
                currentTrend: Yt.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Yt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , zt = (0,
            r.createContext)(Xt)
              , Jt = function() {
                return (0,
                r.useContext)(zt)
            }
              , qt = function(e) {
                var t = e.children
                  , n = L().uid
                  , a = (0,
                r.useState)(!1)
                  , i = (0,
                u.Z)(a, 2)
                  , s = i[0]
                  , o = i[1]
                  , d = (0,
                r.useState)(5)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                r.useState)(null)
                  , h = (0,
                u.Z)(f, 2)
                  , x = h[0]
                  , v = h[1]
                  , g = (0,
                r.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , w = k[1]
                  , C = (0,
                r.useState)(Yt.NONE)
                  , y = (0,
                u.Z)(C, 2)
                  , N = y[0]
                  , O = y[1]
                  , P = Wt()
                  , T = We().updateGameInfo
                  , S = (0,
                r.useRef)(Yt.NONE)
                  , R = (0,
                r.useRef)(1)
                  , I = (0,
                r.useRef)(10)
                  , B = (0,
                r.useRef)(null)
                  , A = (0,
                r.useRef)(null)
                  , F = (0,
                r.useRef)(null)
                  , M = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = S.current === Yt.UP ? 1 : 0,
                                e.next = 4,
                                Ce({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (r = n.data) && (w(r.won),
                                T({
                                    points: r.balancePoints,
                                    numChances: r.numChance,
                                    secondToRefresh: r.secondToRefresh
                                }),
                                R.current = r.multiplier,
                                I.current = r.basePoint,
                                B.current = Number(r.changeRate),
                                A.current = r.prevPrice,
                                F.current = r.currentPrice,
                                Kt({
                                    curCombo: r.curCombo,
                                    won: r.won,
                                    predict: t,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                w(null),
                                B.current = null,
                                z(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                S.current = Yt.NONE,
                                o(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [T]);
                (0,
                r.useEffect)((function() {
                    var e = null;
                    if (s) {
                        var t = 5;
                        p(t),
                        e = setInterval((function() {
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            v(null),
                            M())
                        }
                        ), 1e3)
                    }
                    return function() {
                        e && clearTimeout(e)
                    }
                }
                ), [M, s]),
                (0,
                r.useEffect)((function() {
                    if (s && P)
                        if (x) {
                            var e = P > x;
                            O(P === x ? Yt.NONE : e ? Yt.UP : Yt.DOWN)
                        } else
                            v(P)
                }
                ), [x, s, P]);
                var W = (0,
                r.useCallback)((function(e) {
                    w(null),
                    o(!0),
                    S.current = e,
                    B.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === Yt.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        E.act({
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
                    e === Yt.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        E.act({
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
                r.useMemo)((function() {
                    return {
                        countdown: m,
                        onButtonClick: W,
                        result: j,
                        isPending: s,
                        currentTrend: N,
                        multiplier: R.current,
                        basePoints: I.current,
                        predict: S.current,
                        changeRate: B.current,
                        prevPrice: A.current,
                        currentPrice: F.current
                    }
                }
                ), [m, N, s, R, W, j]);
                return (0,
                b.jsx)(zt.Provider, {
                    value: U,
                    children: t
                })
            }
              , Qt = n(94595)
              , $t = n(96450)
              , en = 2e3
              , tn = 500;
            function nn(e) {
                return (Math.abs(e) < 1e-4 ? $t.yx.ceilTruncate : $t.yx.floorTruncate)(e, 4)
            }
            const rn = "GuessResult_container__ECdpL"
              , an = "GuessResult_title__fzYxg"
              , sn = "GuessResult_multiplier__yRHWm"
              , on = "GuessResult_description__R2fup"
              , cn = "GuessResult_detailsIcon__ZE7Ry"
              , ln = "GuessResult_changeRateContainer__a5-N7"
              , un = "GuessResult_label__+b5Nz"
              , dn = "GuessResult_changeRate__yhVz3"
              , _n = "GuessResult_up__5vYDR"
              , mn = "GuessResult_down__fa-oP"
              , pn = "GuessResult_priceChange__xr6e8"
              , fn = "GuessResult_price__Vk+bY";
            function hn(e) {
                return (0,
                Qt.xG)((0,
                Qt.uf)($t.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var xn = function(e) {
                var t, n = e.className, a = Jt(), i = a.result, s = a.multiplier, o = a.changeRate, c = a.prevPrice, l = a.currentPrice, d = (0,
                r.useState)(!1), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1];
                return (0,
                r.useEffect)((function() {
                    var e, t;
                    if (null !== i) {
                        var n, r, a, s;
                        if (null !== (n = window) && void 0 !== n && null !== (r = n.Telegram) && void 0 !== r && r.WebApp)
                            null === (a = window.Telegram.WebApp.HapticFeedback) || void 0 === a || null === (s = a.notificationOccurred) || void 0 === s || s.call(a, i ? "success" : "error");
                        e = setTimeout((function() {
                            p(!0),
                            t = setTimeout((function() {
                                p(!1)
                            }
                            ), en)
                        }
                        ), tn)
                    }
                    return function() {
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [i]),
                (0,
                b.jsx)(b.Fragment, {
                    children: m && (0,
                    b.jsxs)("div", {
                        className: O()(n, rn),
                        children: [(0,
                        b.jsx)("p", {
                            className: sn,
                            children: i ? (0,
                            b.jsxs)("span", {
                                className: cn,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: cn,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: an,
                            children: (0,
                            Z.O4)(i ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: on,
                            children: [null !== o && (0,
                            b.jsxs)("p", {
                                className: ln,
                                children: [(0,
                                b.jsx)("span", {
                                    className: un,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: O()(dn, (t = {},
                                    (0,
                                    ze.Z)(t, _n, o > 0),
                                    (0,
                                    ze.Z)(t, mn, o < 0),
                                    t)),
                                    children: (0,
                                    Qt.uf)(nn(o), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && l && (0,
                            b.jsx)("p", {
                                className: pn,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: fn,
                                        children: hn(c)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: fn,
                                        children: hn(l)
                                    })
                                })
                            })]
                        })]
                    })
                })
            };
            const vn = "AutoPilot_title__NJa0C"
              , gn = "AutoPilot_button__Sg42v";
            var kn = function() {
                var e = We()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , r = e.hideAutopilotSheet;
                return (0,
                b.jsxs)(He, {
                    visible: t,
                    onClose: r,
                    children: [(0,
                    b.jsx)("div", {
                        className: vn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            Qt.uf)(n)
                        })
                    }), (0,
                    b.jsx)(Xe, {
                        className: gn,
                        onClick: r,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            };
            const jn = "BackgroundVideo_container__J5sO2"
              , bn = "BackgroundVideo_muteButton__04Huj"
              , wn = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Cn = "BackgroundVideo_staticImage__EpRTb"
              , yn = "BackgroundVideo_hide__ZXYN9";
            var Nn, On, Zn, Pn, Tn, En, Sn = "backgroundVideoSoundOn", Rn = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", In = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Ln = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], Bn = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Rn)
            }, An = function() {
                var e = Jt().isPending
                  , t = (0,
                r.useRef)(null)
                  , n = (0,
                r.useRef)(null)
                  , a = (0,
                r.useState)(!1)
                  , i = (0,
                u.Z)(a, 2)
                  , s = i[0]
                  , c = i[1]
                  , l = (0,
                r.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                r.useState)(!1)
                  , f = (0,
                u.Z)(p, 2)
                  , h = f[0]
                  , x = f[1]
                  , v = Gt()
                  , g = (0,
                r.useState)((function() {
                    var e = v.get(Sn);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
                (0,
                r.useEffect)((function() {
                    t.current && (e && (x(!1),
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
                        x(!0),
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
                var y = !s && !_
                  , N = s && h && _
                  , Z = s && (!h || !_);
                return (0,
                b.jsxs)("div", {
                    className: jn,
                    children: [(0,
                    b.jsx)(G.default, {
                        category: G.default.CATEGORY.fill,
                        type: G.default.TYPE.quaternary,
                        size: G.default.SIZE.md,
                        className: bn,
                        strictCircle: !0,
                        onClick: function() {
                            C((function(e) {
                                return v.set(Sn, e),
                                !e
                            }
                            ))
                        },
                        children: (0,
                        b.jsx)(P.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: wn
                        })
                    }), (0,
                    b.jsx)(H.Z, {
                        className: O()(Cn, (0,
                        ze.Z)({}, yn, !y)),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Rn)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Bn), {}, {
                        className: O()((0,
                        ze.Z)({}, yn, !N)),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: In.map((function(e) {
                            return (0,
                            b.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e)
                            }, e)
                        }
                        ))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Bn), {}, {
                        className: O()((0,
                        ze.Z)({}, yn, !Z)),
                        ref: t,
                        muted: w,
                        children: Ln.map((function(e) {
                            return (0,
                            b.jsx)("source", {
                                src: "".concat(o.Z.cdnBaseUrl).concat(e)
                            }, e)
                        }
                        ))
                    }))]
                })
            }, Fn = ["title", "titleId"];
            function Mn() {
                return Mn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Mn.apply(this, arguments)
            }
            function Wn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Un(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = Wn(e, Fn);
                return r.createElement("svg", Mn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, Nn || (Nn = r.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), On || (On = r.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Zn || (Zn = r.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, r.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Pn || (Pn = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Tn || (Tn = r.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), En || (En = r.createElement("defs", null, r.createElement("filter", {
                    id: "filter0_i_738_19404",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, r.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), r.createElement("feOffset", {
                    dy: 2
                }), r.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), r.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), r.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19404"
                })), r.createElement("linearGradient", {
                    id: "paint0_linear_738_19404",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#F5384F"
                }), r.createElement("stop", {
                    offset: .48,
                    stopColor: "#F87989"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#F5384F"
                })), r.createElement("linearGradient", {
                    id: "paint0_linear_738_19552",
                    x1: 62.6289,
                    y1: 48.4995,
                    x2: 62.6289,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#F5384F"
                }), r.createElement("stop", {
                    offset: .995,
                    stopColor: "#A60014"
                })))))
            }
            var Dn = r.forwardRef(Un);
            n.p;
            var Vn, Gn, Hn, Kn, Yn, Xn, zn = ["title", "titleId"];
            function Jn() {
                return Jn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Jn.apply(this, arguments)
            }
            function qn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Qn(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = qn(e, zn);
                return r.createElement("svg", Jn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, Vn || (Vn = r.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Gn || (Gn = r.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Hn || (Hn = r.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, r.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), Kn || (Kn = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), Yn || (Yn = r.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), Xn || (Xn = r.createElement("defs", null, r.createElement("filter", {
                    id: "filter0_i_738_19392",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, r.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), r.createElement("feOffset", {
                    dy: 2
                }), r.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), r.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), r.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19392"
                })), r.createElement("linearGradient", {
                    id: "paint0_linear_738_19392",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#54EA90",
                    stopOpacity: 0
                }), r.createElement("stop", {
                    offset: .48,
                    stopColor: "#54E88F"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#53E68E",
                    stopOpacity: 0
                })), r.createElement("defs", null, r.createElement("linearGradient", {
                    id: "paint0_linear_738_19488",
                    x1: 72.4467,
                    y1: 48.4995,
                    x2: 72.4467,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#00BC4B"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#01933B"
                }))))))
            }
            var $n = r.forwardRef(Qn);
            n.p;
            const er = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var tr, nr = function(e) {
                var t = e.className
                  , n = Jt()
                  , a = n.onButtonClick
                  , i = n.isPending
                  , s = n.predict
                  , o = We().numChances
                  , c = (0,
                r.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                r.useEffect)((function() {
                    var e;
                    return i || (e = setTimeout((function() {
                        _(void 0)
                    }
                    ), 2500)),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [i]);
                var m = function(e) {
                    var t, n, r;
                    i || d || (_(e === Yt.UP ? Yt.DOWN : Yt.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (r = n.WebApp) && void 0 !== r && r.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , p = o <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: O()(er.instructions, i && er.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: er.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: p || d === Yt.UP,
                            onClick: function() {
                                return m(Yt.UP)
                            },
                            type: "button",
                            className: O()(er.btn, er.upBtn, (0,
                            ze.Z)({}, er.pressed, s === Yt.UP)),
                            children: [(0,
                            b.jsx)($n, {
                                className: O()(er.btnGraphic, er.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: er.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(P.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: er.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: p || d === Yt.DOWN,
                            onClick: function() {
                                return m(Yt.DOWN)
                            },
                            type: "button",
                            className: O()(er.btn, er.downBtn, (0,
                            ze.Z)({}, er.pressed, s === Yt.DOWN)),
                            children: [(0,
                            b.jsx)(Dn, {
                                className: O()(er.btnGraphic, er.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: er.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(P.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: er.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }, rr = ["title", "titleId"];
            function ar() {
                return ar = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                ar.apply(this, arguments)
            }
            function ir(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function sr(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = ir(e, rr);
                return r.createElement("svg", ar({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, tr || (tr = r.createElement("g", {
                    transform: "translate(24 12)"
                }, r.createElement("rect", {
                    className: "track",
                    x: 2.5,
                    y: 2.5,
                    width: 322,
                    height: 155,
                    rx: 77.5,
                    fill: "#030303",
                    stroke: "#909090",
                    strokeWidth: 5
                }), r.createElement("path", {
                    d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                    fill: "url(#paint1_linear_263_6211)"
                }), r.createElement("path", {
                    d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                    fill: "url(#paint2_linear_263_6211)"
                }), r.createElement("defs", null, r.createElement("linearGradient", {
                    id: "paint1_linear_263_6211",
                    x1: 51.4976,
                    y1: 20,
                    x2: 51.4976,
                    y2: 140,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), r.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                })), r.createElement("linearGradient", {
                    id: "paint2_linear_263_6211",
                    x1: 277,
                    y1: 140,
                    x2: 277,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), r.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                }))))))
            }
            var or = r.forwardRef(sr);
            n.p;
            var cr = n(48275);
            const lr = "FuelIndicator_fuelContainer__QIskL"
              , ur = "FuelIndicator_toTasksIcon__Y7exC"
              , dr = "FuelIndicator_line__tWBfm"
              , _r = "FuelIndicator_description__EaUsa"
              , mr = "FuelIndicator_fuelIcon__I38Ss"
              , pr = "FuelIndicator_maxChances__OMSHl"
              , fr = "FuelIndicator_earnPtsMsg__PjtcT";
            var hr, xr, vr = function(e) {
                var t = e.className
                  , n = We()
                  , r = n.numChances
                  , a = n.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: O()(t, lr),
                    children: [(0,
                    b.jsx)("span", {
                        className: mr,
                        children: "\u26fd\ufe0f"
                    }), r > 0 ? (0,
                    b.jsx)(cr.Z.Line, {
                        className: dr,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: r / a * 100
                    }, a) : (0,
                    b.jsx)(wt, {
                        to: M,
                        className: fr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: _r,
                        children: [r, "\xa0", void 0 !== a && 0 !== a && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: pr,
                                children: a
                            })]
                        })]
                    }), (0,
                    b.jsx)(wt, {
                        to: M,
                        children: (0,
                        b.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: ur
                        })
                    })]
                })
            }, gr = ["title", "titleId"];
            function kr() {
                return kr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                kr.apply(this, arguments)
            }
            function jr(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function br(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = jr(e, gr);
                return r.createElement("svg", kr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, hr || (hr = r.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), xr || (xr = r.createElement("defs", null, r.createElement("linearGradient", {
                    id: "paint0_linear_563_49992",
                    x1: 84,
                    y1: 28.5652,
                    x2: 84,
                    y2: 5.44528e-7,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", null), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#909090"
                })))))
            }
            var wr = r.forwardRef(br);
            n.p;
            const Cr = "RefuelTimer_container__wtALO"
              , yr = "RefuelTimer_description__sD+HM"
              , Nr = "RefuelTimer_timer__LL1+c";
            var Or = function(e) {
                var t = e.className
                  , n = We().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: O()(t, Cr),
                    children: [(0,
                    b.jsx)(wr, {}), (0,
                    b.jsx)("p", {
                        className: yr,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: Nr,
                                children: n
                            })
                        })
                    })]
                })
            };
            const Zr = "CoinPrice_raceTrack__NZO2t"
              , Pr = "CoinPrice_run__f0UIF"
              , Tr = "CoinPrice_coinPriceContainer__YbeUE"
              , Er = "CoinPrice_content__a-5Jl"
              , Sr = "CoinPrice_fuelIndicator__p+f1I"
              , Rr = "CoinPrice_refuelTimer__tbWMw"
              , Ir = "CoinPrice_hide__bHhxJ"
              , Lr = "CoinPrice_label__yTNy0"
              , Br = "CoinPrice_value__ZjRZz"
              , Ar = "CoinPrice_slotMachine__hUQKt"
              , Fr = "SlotMachine_row__a4TO0"
              , Mr = "SlotMachine_animate__-G4TR"
              , Wr = "SlotMachine_column__aR0VE"
              , Ur = "SlotMachine_arrows__m1dhv"
              , Dr = "SlotMachine_columnContainer__a76pd"
              , Vr = "SlotMachine_background__b9TMg"
              , Gr = "SlotMachine_slot__jwCvC"
              , Hr = "SlotMachine_staticColumn__O5zfB"
              , Kr = "SlotMachine_sm__ZRCig"
              , Yr = "SlotMachine_arrow__qOYmf"
              , Xr = "SlotMachine_wentUp__z48TO"
              , zr = "SlotMachine_down__aYC8C"
              , Jr = "SlotMachine_stable__CDMLP"
              , qr = "SlotMachine_wentDown__1fYUS"
              , Qr = "SlotMachine_up__IuiYV";
            var $r = function(e) {
                var t = e.animate
                  , n = e.result
                  , r = void 0 === n ? 0 : n
                  , a = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: Dr,
                    children: [(0,
                    b.jsx)("div", {
                        className: Vr
                    }), (0,
                    b.jsxs)("div", {
                        className: Wr,
                        style: a,
                        children: [(0,
                        b.jsx)("p", {
                            className: Gr,
                            children: r
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: Gr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , ea = function() {
                var e, t = Jt(), n = t.changeRate, a = t.isPending, i = (0,
                r.useState)([]), s = (0,
                u.Z)(i, 2), o = s[0], c = s[1], l = (0,
                r.useState)(null), d = (0,
                u.Z)(l, 2), _ = d[0], m = d[1], p = (0,
                r.useState)(!1), f = (0,
                u.Z)(p, 2), h = f[0], x = f[1];
                return (0,
                r.useEffect)((function() {
                    a && x(!0)
                }
                ), [a]),
                (0,
                r.useEffect)((function() {
                    var e;
                    null !== n ? (m(null === (e = n) ? null : e > 0 ? Yt.UP : 0 === e ? Yt.NONE : Yt.DOWN),
                    c(String(Math.abs(Number(nn(n)))).split("").filter((function(e) {
                        return "." !== e
                    }
                    )).map((function(e) {
                        return parseInt(e, 10)
                    }
                    ))),
                    x(!1)) : m(null)
                }
                ), [n]),
                (0,
                b.jsxs)("div", {
                    className: O()(Fr, h && Mr),
                    children: [(0,
                    b.jsx)("div", {
                        className: Dr,
                        children: (0,
                        b.jsxs)("div", {
                            className: O()(Ur, (e = {},
                            (0,
                            ze.Z)(e, Xr, _ === Yt.UP),
                            (0,
                            ze.Z)(e, qr, _ === Yt.DOWN),
                            (0,
                            ze.Z)(e, Jr, _ === Yt.NONE),
                            e)),
                            children: [(0,
                            b.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: O()(Yr, Qr)
                            }), (0,
                            b.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: O()(Yr, Jr)
                            }), (0,
                            b.jsx)(P.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: O()(Yr, zr)
                            })]
                        })
                    }), (0,
                    b.jsx)($r, {
                        animate: h,
                        result: o[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: Hr,
                        children: "."
                    }), (0,
                    b.jsx)($r, {
                        animate: h,
                        result: o[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)($r, {
                        animate: h,
                        result: o[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)($r, {
                        animate: h,
                        result: o[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)($r, {
                        animate: h,
                        result: o[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: O()(Hr, Kr),
                        children: "%"
                    })]
                })
            }
              , ta = function() {
                var e = Wt()
                  , t = Jt()
                  , n = t.isPending
                  , a = t.changeRate
                  , i = We().countdownDisplay
                  , s = (0,
                r.useState)(!1)
                  , o = (0,
                u.Z)(s, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                r.useEffect)((function() {
                    n && l(!0)
                }
                ), [n]),
                (0,
                r.useEffect)((function() {
                    var e, t = function() {
                        e && clearTimeout(e)
                    };
                    return n || (null === a ? l(!1) : e = setTimeout((function() {
                        l(!1)
                    }
                    ), tn)),
                    t
                }
                ), [a, n]);
                var d = e ? "$".concat((0,
                Qt.uf)($t.yx.truncate(e, 1, !0))) : "--"
                  , _ = i && !n;
                return (0,
                b.jsxs)("div", {
                    className: Tr,
                    children: [(0,
                    b.jsx)(or, {
                        className: O()(Zr, n && Pr)
                    }), (0,
                    b.jsxs)("div", {
                        className: O()(Er, c && Ir),
                        children: [(0,
                        b.jsx)("p", {
                            className: Lr,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Br,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: O()(Er, !c && Ir),
                        children: [(0,
                        b.jsxs)("p", {
                            className: Lr,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Ar,
                            children: (0,
                            b.jsx)(ea, {})
                        })]
                    }), (0,
                    b.jsx)(vr, {
                        className: Sr
                    }), (0,
                    b.jsx)("div", {
                        className: O()(Rr, !_ && Ir),
                        children: (0,
                        b.jsx)(Or, {})
                    })]
                })
            };
            const na = "LandingPage_container__pU2cC"
              , ra = "LandingPage_resultOverlay__WSYZb"
              , aa = "LandingPage_disclaimer__pVRHC"
              , ia = "LandingPage_recordsBtnContainer__Anr4Y"
              , sa = "LandingPage_backgroundVideo__flTkH"
              , oa = "LandingPage_content__D0ZLW"
              , ca = "LandingPage_points__Ruq4j"
              , la = "LandingPage_coinPrice__nJ0nj"
              , ua = "LandingPage_btnContainer__IEll8"
              , da = "LandingPage_termsAndConditions__MdClU";
            var _a = n(22387);
            const ma = "UserPointCounter_pointCounter__-QAj8"
              , pa = "UserPointCounter_hide__o4qTQ"
              , fa = "UserPointCounter_points__d3HeG"
              , ha = "UserPointCounter_title__B-gN-"
              , xa = "UserPointCounter_countdown__Z7xGo"
              , va = "UserPointCounter_value__2a23E";
            var ga = function() {
                var e = We().points
                  , t = (0,
                _a.Z)(e)
                  , n = Jt()
                  , a = n.isPending
                  , i = n.countdown
                  , s = (0,
                r.useRef)(null)
                  , o = (0,
                r.useState)(!1)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1];
                (0,
                r.useEffect)((function() {
                    var e;
                    return a ? d(!0) : e = setTimeout((function() {
                        d(!1)
                    }
                    ), 2500),
                    function() {
                        clearTimeout(e)
                    }
                }
                ), [a]);
                var _ = (0,
                r.useCallback)((function(e, t, n) {
                    e <= t && (n((0,
                    Qt.uf)(String(e))),
                    requestAnimationFrame((function() {
                        var r = function(e, t) {
                            var n = t - e;
                            return Math.max(1, Math.floor(n / 10))
                        }(e, t);
                        _(e + r, t, n)
                    }
                    )))
                }
                ), []);
                return (0,
                r.useEffect)((function() {
                    var n;
                    if (t === e)
                        return function() {}
                        ;
                    function r(e) {
                        s.current && (s.current.innerText = e)
                    }
                    if ("0" === (null === (n = s.current) || void 0 === n ? void 0 : n.innerText) || !t)
                        return _(0, e, r),
                        function() {}
                        ;
                    var a = setTimeout((function() {
                        _(t || 0, e, r)
                    }
                    ), 2500);
                    return function() {
                        clearTimeout(a)
                    }
                }
                ), [_, e, t]),
                (0,
                b.jsxs)("div", {
                    className: ma,
                    children: [(0,
                    b.jsxs)("p", {
                        className: O()(ha, l && pa),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: s,
                        className: O()(fa, l && pa),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: O()(xa, !l && pa),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: va,
                            children: i
                        })]
                    })]
                })
            }
              , ka = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.firstDigits
                  , r = void 0 === n ? 6 : n
                  , a = t.lastDigits
                  , i = void 0 === a ? 3 : a
                  , s = t.placeholder
                  , o = void 0 === s ? "..." : s;
                if (e && e.length > 20) {
                    var c = e.substring(0, r)
                      , l = e.substring(e.length - i, e.length);
                    return "".concat(c).concat(o).concat(l)
                }
                return e
            }
              , ja = n(52008)
              , ba = n(52400)
              , wa = {
                Edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
                Chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge"
            }
              , Ca = function(e) {
                if (!window.okxTonWallet) {
                    var t, n, r = null === ba.X || void 0 === ba.X ? void 0 : ba.X.name;
                    return null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(wa[r] || wa.Chrome),
                    Promise.reject(new Error("Please install the OKX Wallet plugin"))
                }
                return window.okxTonWallet.tonconnect.connect(2, {
                    manifestUrl: Tt(),
                    items: [{
                        name: "ton_addr"
                    }, {
                        name: "ton_proof",
                        payload: e
                    }]
                }).then((function(e) {
                    var t, n = null === e || void 0 === e || null === (t = e.payload) || void 0 === t ? void 0 : t.items, r = n[0], a = r.publicKey, i = r.address, s = ja.Address.parse(i).toString({
                        urlSafe: !0,
                        bounceable: !1,
                        testOnly: !1
                    }), o = n[1].proof, c = o.domain, l = o.signature, u = o.payload, d = o.timestamp;
                    return {
                        tonAddress: s,
                        publicKey: a,
                        signature: l,
                        msg: JSON.stringify({
                            payload: u,
                            domain: null === c || void 0 === c ? void 0 : c.value,
                            timestamp: d
                        })
                    }
                }
                ))
            }
              , ya = function(e, t) {
                var n, r = new Promise((function(r) {
                    e.setConnectRequestParameters({
                        state: "ready",
                        value: {
                            tonProof: t
                        }
                    }),
                    e.openSingleWalletModal("okxTonWallet"),
                    n = e.onSingleWalletModalStateChange((0,
                    l.Z)((0,
                    c.Z)().mark((function t() {
                        var a, i, s, o, l, u, d, _, m, p, f, h, x, v;
                        return (0,
                        c.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    a = e.wallet,
                                    s = (i = a).account,
                                    o = s.address,
                                    l = s.publicKey,
                                    u = i.connectItems,
                                    d = ja.Address.parse(o),
                                    _ = d.toString({
                                        urlSafe: !0,
                                        bounceable: !1,
                                        testOnly: !1
                                    }),
                                    m = u.tonProof,
                                    p = m.proof,
                                    f = p.signature,
                                    h = p.payload,
                                    x = p.domain,
                                    v = p.timestamp,
                                    r({
                                        tonAddress: _,
                                        publicKey: l,
                                        signature: f,
                                        msg: JSON.stringify({
                                            payload: h,
                                            domain: null === x || void 0 === x ? void 0 : x.value,
                                            timestamp: v
                                        })
                                    }),
                                    n && n();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                )), a = new Promise((function(e, t) {
                    var r = setTimeout((function() {
                        clearTimeout(r),
                        n && n(),
                        t(new Error("Promise timed out"))
                    }
                    ), 6e4)
                }
                ));
                return {
                    promise: Promise.race([r, a]),
                    unsubscribe: function() {
                        return n && n()
                    }
                }
            }
              , Na = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    var r, a, i, s, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 23;
                                    break
                                }
                                if (e.prev = 1,
                                a = function() {}
                                ,
                                St()) {
                                    e.next = 13;
                                    break
                                }
                                return i = ya(t, n),
                                s = i.promise,
                                o = i.unsubscribe,
                                e.next = 7,
                                s;
                            case 7:
                                r = e.sent,
                                a = o,
                                o(),
                                S({
                                    source: "app"
                                }),
                                e.next = 17;
                                break;
                            case 13:
                                return e.next = 15,
                                Ca(n);
                            case 15:
                                r = e.sent,
                                S({
                                    source: "web"
                                });
                            case 17:
                                return e.abrupt("return", [r, a]);
                            case 20:
                                e.prev = 20,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && Y.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
                                    e: e.t0
                                });
                            case 23:
                                return e.abrupt("return", null);
                            case 24:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 20]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            const Oa = "ViewWalletButton_button__WbNMO"
              , Za = "ViewWalletButton_btnIcon__W5IFc";
            var Pa = function() {
                var e = We()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , a = (0,
                d.dG)()
                  , i = (0,
                u.Z)(a, 1)[0]
                  , s = L().uid
                  , o = (0,
                r.useRef)((function() {}
                ));
                (0,
                r.useEffect)((function() {
                    return function() {
                        o.current && o.current()
                    }
                }
                ), []);
                var _ = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var r, a, l, d, _, m, p;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.tonAddress || !t.tonDeeplink) {
                                        e.next = 4;
                                        break
                                    }
                                    null === (r = window) || void 0 === r || null === (a = r.Telegram) || void 0 === a || a.WebApp.openLink(t.tonDeeplink),
                                    e.next = 26;
                                    break;
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    Na(i, s);
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
                                            telegramId: s
                                        }, _))
                                    },
                                    e.next = 14,
                                    Se(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([Pe(), n()]);
                                case 16:
                                    z(!0, (0,
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
                }();
                return (0,
                b.jsxs)("button", {
                    className: Oa,
                    type: "button",
                    onClick: _,
                    children: [(0,
                    b.jsx)(P.Z, {
                        iconName: "okx-growth-wallet",
                        className: Za
                    }), t.tonAddress ? ka(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    Z.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Ta = function() {
                var e = L().uid;
                return (0,
                r.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        E.act({
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
                b.jsxs)("div", {
                    className: na,
                    children: [(0,
                    b.jsx)("div", {
                        className: ia,
                        children: (0,
                        b.jsx)(Pa, {})
                    }), (0,
                    b.jsx)("div", {
                        className: sa,
                        children: (0,
                        b.jsx)(An, {})
                    }), (0,
                    b.jsxs)("div", {
                        className: oa,
                        children: [(0,
                        b.jsx)("div", {
                            className: ca,
                            children: (0,
                            b.jsx)(ga, {})
                        }), (0,
                        b.jsx)("div", {
                            className: la,
                            children: (0,
                            b.jsx)(ta, {})
                        }), (0,
                        b.jsx)(nr, {
                            className: ua
                        })]
                    }), (0,
                    b.jsx)("button", {
                        className: da,
                        onClick: function() {
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Pt)
                        },
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    b.jsx)("p", {
                        className: aa,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    b.jsx)(xn, {
                        className: ra
                    }), (0,
                    b.jsx)(kn, {}), (0,
                    b.jsx)(It, {})]
                })
            }
              , Ea = function() {
                return (0,
                b.jsx)(qt, {
                    children: (0,
                    b.jsx)(Ta, {})
                })
            }
              , Sa = n(24084)
              , Ra = n(58338);
            const Ia = "PageTitle_title__IQ7TT";
            var La = function(e) {
                var t = e.html;
                return (0,
                b.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Ra.dU)(t)
                    },
                    className: Ia
                })
            };
            const Ba = "LeaderBoard_container__0DJSO"
              , Aa = "LeaderBoard_desc__MFxC+"
              , Fa = "LeaderBoard_inviteList__mV9a7"
              , Ma = "LeaderBoard_tabActiveClassName__7Xv4B"
              , Wa = "LeaderBoard_tabsContent__KCGtW"
              , Ua = "LeaderBoard_recordButton__lXzAl"
              , Da = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var Va = function(e) {
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: O()(Da, t)
                })
            };
            const Ga = "InviteButton_invite-btn__aAMio"
              , Ha = "InviteButton_btn-a__At-wO"
              , Ka = "InviteButton_btn-container__sYDy5"
              , Ya = "InviteButton_copyButton__znucI"
              , Xa = "InviteButton_copyIcon__QZgE9";
            var za = function(e) {
                var t = e.text
                  , n = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , r = e.className
                  , a = L().uid
                  , i = function(e) {
                    var t = new K.Z
                      , n = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , r = "https://t.me/".concat(Nt.BOT_NAME, "/").concat(Nt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: r,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(r), "&text=").concat(n)
                    }
                }(We().linkCode)
                  , s = i.shareUrl
                  , o = i.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: O()(r, Ka),
                    children: [(0,
                    b.jsx)("a", {
                        className: Ha,
                        href: s,
                        children: (0,
                        b.jsx)(Xe, {
                            onClick: function() {
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    E.act({
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
                                    telegramid: a
                                })
                            },
                            className: Ga,
                            text: n
                        })
                    }), (0,
                    b.jsx)(G.default, {
                        strictCircle: !0,
                        category: G.default.CATEGORY.fill,
                        type: G.default.TYPE.primary,
                        size: G.default.SIZE.lg,
                        onClick: function() {
                            try {
                                navigator.clipboard.writeText(o),
                                z(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                z(!1, "Copy Invite URL failed")
                            }
                        },
                        className: Ya,
                        children: (0,
                        b.jsx)(P.Z, {
                            iconName: "okx-growth-copy",
                            className: Xa
                        })
                    })]
                })
            };
            const Ja = "RankList_listItem__qJvXJ"
              , qa = "RankList_name__sxTWa"
              , Qa = "RankList_mask__ldBi8"
              , $a = "RankList_hightLightRow__xYkeg"
              , ei = "RankList_listHeader__KVGnw"
              , ti = "RankList_rank__k2m5R"
              , ni = "RankList_icon__1-SRV"
              , ri = "RankList_point__D5mVw"
              , ai = "RankList_pointIcon__k80Wy"
              , ii = "RankList_InviteButton__D6ute"
              , si = "RankList_noFirendsNote__Ckkil"
              , oi = "RankList_under__MJ5We"
              , ci = "RankList_rankItemPlaceholder__z-upW"
              , li = "RankList_rank-name__YEqnc"
              , ui = "RankList_rank-score__gtI+m";
            var di = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , _i = 1
              , mi = 2
              , pi = function(e) {
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: ei,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Qt.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , fi = function() {
                return (0,
                b.jsx)("div", {
                    children: Array.from({
                        length: 3
                    }).map((function(e, t) {
                        return (0,
                        b.jsxs)("div", {
                            className: ci,
                            children: [(0,
                            b.jsx)(Va, {
                                className: li
                            }), (0,
                            b.jsx)(Va, {
                                className: ui
                            })]
                        }, t)
                    }
                    ))
                })
            }
              , hi = function(e) {
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: O()(Ja, n && $a),
                    children: [(0,
                    b.jsx)("div", {
                        className: Qa
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: O()(ti, ni),
                        children: di[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: ti,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: qa,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: ri,
                        children: [(0,
                        b.jsx)("span", {
                            className: ai,
                            children: di[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Qt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , xi = function(e) {
                var t = e.pageType
                  , n = void 0 === t ? _i : t
                  , a = (0,
                r.useState)(!0)
                  , i = (0,
                u.Z)(a, 2)
                  , s = i[0]
                  , o = i[1]
                  , d = (0,
                r.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                r.useState)(0)
                  , h = (0,
                u.Z)(f, 2)
                  , x = h[0]
                  , v = h[1]
                  , g = (0,
                r.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , w = k[1]
                  , C = (0,
                r.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var r, a;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    r = {
                                        pageNo: t
                                    },
                                    n !== _i) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Ne(r);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Oe(r);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (p(a.rows),
                                    v(a.total),
                                    w(a.userRanking)),
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
                  , y = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                r.useEffect)((function() {
                    C(1)
                }
                ), [C]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(pi, {
                        total: x
                    }), s ? (0,
                    b.jsx)(fi, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [y && (0,
                        b.jsx)(hi, {
                            item: j,
                            isHighlight: !0
                        }), m.map((function(e, t) {
                            return (0,
                            b.jsx)(hi, {
                                item: e
                            }, "".concat(e.extUserName, "-").concat(t))
                        }
                        ))]
                    }), (0,
                    b.jsx)("div", {
                        className: oi
                    }), n === _i && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === m.length && (0,
                        b.jsx)("div", {
                            className: si,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        b.jsx)(za, {
                            className: ii,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            };
            const vi = "ViewRecordsButton_button__foNmQ"
              , gi = "ViewRecordsButton_btnIcon__2U0Xs"
              , ki = "ViewRecordsButton_title__XwRxi"
              , ji = "ViewRecordsButton_container__KMBl3"
              , bi = "ViewRecordsButton_recordContainer__H0HG0"
              , wi = "ViewRecordsButton_recordField__ntg1u"
              , Ci = "ViewRecordsButton_label__VInMo"
              , yi = "ViewRecordsButton_value__YdAbG"
              , Ni = "ViewRecordsButton_trendIcon__OAhpt"
              , Oi = "ViewRecordsButton_up__lVPFv"
              , Zi = "ViewRecordsButton_down__z9X8U"
              , Pi = "ViewRecordsButton_timestamp__1KFJL"
              , Ti = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , Ei = "ViewRecordsButton_description__2QLs8";
            var Si = function(e) {
                var t = e.label
                  , n = e.value;
                return (0,
                b.jsxs)("div", {
                    className: wi,
                    children: [(0,
                    b.jsx)("p", {
                        className: Ci,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: yi,
                        children: n
                    })]
                })
            }
              , Ri = function() {
                return (0,
                b.jsxs)("button", {
                    className: vi,
                    type: "button",
                    onClick: function() {
                        var e = Gt().get(Ht) || []
                          , t = (0,
                        b.jsx)(b.Fragment, {
                            children: e.length > 0 ? e.map((function(e) {
                                var t = 1 === e.predict
                                  , n = "ok_game_okxracer_moon"
                                  , r = Oi
                                  , a = "okx-growth-trending-up";
                                return t || (n = "ok_game_okxracer_doom",
                                r = Zi,
                                a = "okx-growth-trending-down"),
                                (0,
                                b.jsxs)("div", {
                                    className: bi,
                                    children: [(0,
                                    b.jsx)(Si, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_your_guess"),
                                        value: (0,
                                        b.jsxs)(b.Fragment, {
                                            children: [(0,
                                            Z.O4)(n), (0,
                                            b.jsx)(P.Z, {
                                                className: O()(Ni, r),
                                                iconName: a
                                            })]
                                        })
                                    }), (0,
                                    b.jsx)(Si, {
                                        label: "Result",
                                        value: (0,
                                        Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                    }), (0,
                                    b.jsx)(Si, {
                                        label: (0,
                                        Z.O4)("ok_game_okxracer_consecutive_wins"),
                                        value: e.curCombo
                                    }), (0,
                                    b.jsx)("p", {
                                        className: Pi,
                                        children: (0,
                                        Qt.o0)(new Date(e.date), {
                                            format: "yyyyMMMdhhmmss"
                                        })
                                    })]
                                }, e.date)
                            }
                            )) : (0,
                            b.jsxs)("div", {
                                className: Ti,
                                children: [(0,
                                b.jsx)("p", {
                                    className: ki,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_racing_record")
                                }), (0,
                                b.jsx)("p", {
                                    className: Ei,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_no_past_activity")
                                })]
                            })
                        });
                        !function(e) {
                            var t = De.Z.show((0,
                            k.Z)((0,
                            k.Z)({}, Ge), {}, {
                                topContent: e.title ? void 0 : (0,
                                b.jsx)("div", {
                                    className: Ve.topPadding
                                }),
                                onClose: function() {
                                    t.destroy()
                                }
                            }, e))
                        }({
                            title: (0,
                            b.jsx)("span", {
                                className: ki,
                                children: (0,
                                Z.O4)("ok_game_okxracer_racing_records")
                            }),
                            titleCenter: !0,
                            containerClassName: ji,
                            children: t
                        })
                    },
                    children: [(0,
                    Z.O4)("ok_game_okxracer_my_records"), (0,
                    b.jsx)(P.Z, {
                        iconName: "okx-growth-chevrons",
                        className: gi
                    })]
                })
            }
              , Ii = function() {
                return (0,
                b.jsxs)("div", {
                    className: Ba,
                    children: [(0,
                    b.jsx)(La, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_race_to_top", {
                            top: "<em>".concat((0,
                            Z.O4)("ok_game_okxracer_top"), "</em>")
                        })
                    }), (0,
                    b.jsx)("div", {
                        className: Aa,
                        children: (0,
                        Z.O4)("ok_game_okxracer_leaderboard_guide")
                    }), (0,
                    b.jsx)("div", {
                        className: Ua,
                        children: (0,
                        b.jsx)(Ri, {})
                    }), (0,
                    b.jsxs)(Sa.Z, {
                        activeClassName: Ma,
                        noPadding: !0,
                        size: Sa.Z.SIZE.xl,
                        destroyOnHide: !0,
                        children: [(0,
                        b.jsx)(Sa.Z.TabPane, {
                            tab: (0,
                            Z.O4)("ok_game_okxracer_friends2"),
                            id: _i,
                            className: Wa,
                            children: (0,
                            b.jsx)("div", {
                                className: Fa,
                                children: (0,
                                b.jsx)(xi, {
                                    pageType: _i
                                })
                            })
                        }), (0,
                        b.jsx)(Sa.Z.TabPane, {
                            className: Wa,
                            tab: (0,
                            Z.O4)("ok_game_okxracer_global"),
                            id: mi,
                            children: (0,
                            b.jsx)("div", {
                                className: Fa,
                                children: (0,
                                b.jsx)(xi, {
                                    pageType: mi
                                })
                            })
                        })]
                    })]
                })
            };
            const Li = "QrCode_container__r4Fu7"
              , Bi = "QrCode_qrCode__16PWa"
              , Ai = "QrCode_title__+cibb"
              , Fi = "QrCode_message__eaOzW";
            var Mi = function() {
                return (0,
                b.jsxs)("div", {
                    className: Li,
                    children: [(0,
                    b.jsx)(H.Z, {
                        className: Bi,
                        src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                    }), (0,
                    b.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            Ra.dU)((0,
                            Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                        },
                        className: Ai
                    }), (0,
                    b.jsx)("p", {
                        className: Fi,
                        children: (0,
                        Z.O4)("ok_game_okxracer_browser_msg")
                    })]
                })
            }
              , Wi = n(42982)
              , Ui = n(90534);
            const Di = "PullupList_loading__+51Dh"
              , Vi = "PullupList_listLoadItem__XcvkH"
              , Gi = "PullupList_listLeft__4eGh6"
              , Hi = "PullupList_listRight__w7Ely"
              , Ki = "PullupList_listLoading__whJeg";
            var Yi = function() {
                return (0,
                b.jsxs)("div", {
                    className: O()(Vi),
                    children: [(0,
                    b.jsx)(Va, {
                        className: Gi
                    }), (0,
                    b.jsx)(Va, {
                        className: Hi
                    })]
                })
            }
              , Xi = function() {
                return (0,
                b.jsx)("div", {
                    className: Ki,
                    children: Array(3).fill(null).map((function(e, t) {
                        return (0,
                        b.jsx)(Yi, {}, t)
                    }
                    ))
                })
            }
              , zi = function(e) {
                var t = e.loadData
                  , n = e.children
                  , a = (0,
                r.useState)([])
                  , i = (0,
                u.Z)(a, 2)
                  , s = i[0]
                  , o = i[1]
                  , d = (0,
                r.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = (0,
                r.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , h = (0,
                r.useRef)(null)
                  , x = (0,
                r.useState)(!1)
                  , v = (0,
                u.Z)(x, 2)
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
                                    if (-1 === f.current.total || !(s.length >= f.current.total || !0 === f.current.stop)) {
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
                                        Wi.Z)(e), (0,
                                        Wi.Z)(n.rows))
                                    }
                                    )),
                                    f.current.total = 0 === n.rows.length ? s.length : n.total) : f.current.stop = !0,
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
                  , w = (0,
                Ui.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = function(e) {
                    e[0].isIntersecting && !m && !1 === f.current.stop && k(!g)
                };
                return (0,
                r.useEffect)((function() {
                    var e = new IntersectionObserver(C,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return h.current && e.observe(h.current),
                    function() {
                        h.current && e.unobserve(h.current)
                    }
                }
                ), [m]),
                (0,
                r.useEffect)((function() {
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [s.map((function(e, t) {
                        return n(e, t)
                    }
                    )), (0,
                    b.jsx)("div", {
                        className: Di,
                        ref: h,
                        children: m && (0,
                        b.jsx)(Xi, {})
                    })]
                })
            };
            const Ji = "InviteList_listItem__q4jhG"
              , qi = "InviteList_name__LLQgt"
              , Qi = "InviteList_point__kXtCn"
              , $i = "InviteList_earnedPrice__4vAfw"
              , es = "InviteList_pointNumber__v4P1H";
            var ts = function() {
                var e = (0,
                r.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , a = t[1]
                  , i = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var r, i, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = !1,
                                    1 === t && (r = !0),
                                    i = {
                                        pageNo: t
                                    },
                                    n && n >= 0 && (i.total = n),
                                    e.next = 6,
                                    ye(i, r);
                                case 6:
                                    return (s = e.sent) && a(s.accumPoints),
                                    e.abrupt("return", s);
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
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: $i,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: es,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Qt.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(zi, {
                        loadData: i,
                        children: function(e, t) {
                            return (0,
                            b.jsxs)("div", {
                                className: Ji,
                                children: [(0,
                                b.jsx)("div", {
                                    className: qi,
                                    children: e.extInviteeName
                                }), (0,
                                b.jsx)("div", {
                                    className: Qi,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0,
                                        Qt.uf)(e.contributedPoints)
                                    })
                                })]
                            }, "".concat(e.extInviteeName, "-").concat(t))
                        }
                    })]
                })
            };
            const ns = "ReferralsPage_container__V48m1"
              , rs = "ReferralsPage_inviteDetail__L1MhM"
              , as = "ReferralsPage_detailItem__ujOp+"
              , is = "ReferralsPage_dot__zKW7L"
              , ss = "ReferralsPage_detailTitle__OE657"
              , os = "ReferralsPage_detailInfo__YC+Y9"
              , cs = "ReferralsPage_inviteList__Jksx8";
            var ls, us, ds, _s, ms, ps, fs, hs, xs = function() {
                var e = L().uid
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
                r.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        E.act({
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
                b.jsxs)("div", {
                    className: ns,
                    children: [(0,
                    b.jsx)(La, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    b.jsx)("div", {
                        className: rs,
                        children: t.map((function(e) {
                            return (0,
                            b.jsxs)("div", {
                                className: as,
                                children: [(0,
                                b.jsx)("div", {
                                    className: is
                                }), (0,
                                b.jsx)("div", {
                                    className: ss,
                                    children: e.title
                                }), (0,
                                b.jsx)("div", {
                                    className: os,
                                    children: e.detailInfo
                                })]
                            }, e.title)
                        }
                        ))
                    }), (0,
                    b.jsx)("div", {
                        className: cs,
                        children: (0,
                        b.jsx)(ts, {})
                    }), (0,
                    b.jsx)(za, {})]
                })
            }, vs = ["title", "titleId"];
            function gs() {
                return gs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                gs.apply(this, arguments)
            }
            function ks(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function js(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = ks(e, vs);
                return r.createElement("svg", gs({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, ls || (ls = r.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), us || (us = r.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ds || (ds = r.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), _s || (_s = r.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), ms || (ms = r.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ps || (ps = r.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), fs || (fs = r.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), hs || (hs = r.createElement("defs", null, r.createElement("filter", {
                    id: "filter0_dd_888_7961",
                    x: 22.7336,
                    y: 26.6704,
                    width: 43.0309,
                    height: 34.1671,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, r.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), r.createElement("feOffset", null), r.createElement("feGaussianBlur", {
                    stdDeviation: 2.75
                }), r.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), r.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_888_7961"
                }), r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), r.createElement("feOffset", null), r.createElement("feGaussianBlur", {
                    stdDeviation: 3.76406
                }), r.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), r.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect1_dropShadow_888_7961",
                    result: "effect2_dropShadow_888_7961"
                }), r.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_888_7961",
                    result: "shape"
                })))))
            }
            var bs = r.forwardRef(js);
            n.p;
            const ws = "index_container__DxcAz"
              , Cs = "index_logo__h1T0A"
              , ys = "index_tlt__dqJHn"
              , Ns = "index_subtlt__m3p5l";
            var Os = function() {
                return (0,
                b.jsxs)("div", {
                    className: ws,
                    children: [(0,
                    b.jsx)(bs, {
                        className: Cs
                    }), (0,
                    b.jsx)("div", {
                        className: ys,
                        children: (0,
                        Z.O4)("ok_game_okxracer_congratulations")
                    }), (0,
                    b.jsx)("div", {
                        className: Ns,
                        children: (0,
                        Z.O4)("ok_game_okxracer_congratulations_msg")
                    })]
                })
            };
            const Zs = a().memo(Os);
            var Ps, Ts = ["title", "titleId"];
            function Es() {
                return Es = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Es.apply(this, arguments)
            }
            function Ss(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Rs(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = Ss(e, Ts);
                return r.createElement("svg", Es({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, Ps || (Ps = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Is = r.forwardRef(Rs);
            n.p;
            var Ls, Bs = ["title", "titleId"];
            function As() {
                return As = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                As.apply(this, arguments)
            }
            function Fs(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Ms(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = Fs(e, Bs);
                return r.createElement("svg", As({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, Ls || (Ls = r.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Ws = r.forwardRef(Ms);
            n.p;
            var Us, Ds = ["title", "titleId"];
            function Vs() {
                return Vs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Vs.apply(this, arguments)
            }
            function Gs(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Hs(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = Gs(e, Ds);
                return r.createElement("svg", Vs({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, Us || (Us = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Ks = r.forwardRef(Hs);
            n.p;
            var Ys = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Xs = function(e) {
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            };
            function zs(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Ys.SIGNUP,
                    status: Xs(Ys.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: Ys.INSTALL,
                    status: Xs(Ys.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Ys.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Ys.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var Js = function(e) {
                var t = (0,
                r.useState)(zs(e))
                  , n = (0,
                u.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , s = L().uid;
                (0,
                r.useEffect)((function() {
                    i(zs(e))
                }
                ), [e]);
                var o = (0,
                r.useCallback)((function(t) {
                    var n, r, o = a.find((function(e) {
                        return e.type === t
                    }
                    ));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (r = n.Telegram) || void 0 === r || r.WebApp.openLink(o.url),
                        t) {
                        case Ys.SIGNUP:
                        case Ys.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            i(zs(e))
                        }
                        var c, l = {
                            telegramid: s
                        };
                        switch (t) {
                        case Ys.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                        case Ys.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                        case Ys.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                        case Ys.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                E.act({
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
                ), [a, e]);
                return {
                    list: a,
                    handleClick: o
                }
            };
            const qs = "index_container__ZAgXf"
              , Qs = "index_container_avatar__HvLrA"
              , $s = "index_container_task__OmqjX"
              , eo = "index_task_tlt__pIkV2"
              , to = "index_tlt_sub__2aRiA"
              , no = "index_tlt_arrow__kdbln"
              , ro = "index_task_subtlt__mzIaE";
            var ao = function(e) {
                var t = e.status
                  , n = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: Qs,
                    children: n ? (0,
                    b.jsx)(Ks, {}) : (0,
                    b.jsx)(Ws, {})
                })
            }
              , io = function(e) {
                var t = e.title
                  , n = e.subTitle
                  , r = e.type
                  , a = e.onClick
                  , i = e.status;
                return (0,
                b.jsxs)("div", {
                    className: $s,
                    onClick: function() {
                        a(r)
                    },
                    children: [(0,
                    b.jsxs)("div", {
                        className: eo,
                        children: [(0,
                        b.jsx)(ao, {
                            status: i
                        }), " ", (0,
                        b.jsx)("div", {
                            className: to,
                            children: t
                        }), (0,
                        b.jsx)(Is, {
                            className: no
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: ro,
                        children: n
                    })]
                })
            };
            const so = function(e) {
                var t = Js(e)
                  , n = t.list
                  , r = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: qs,
                    children: n.map((function(e) {
                        return (0,
                        b.jsx)(io, (0,
                        k.Z)((0,
                        k.Z)({}, e), {}, {
                            onClick: r
                        }), e.type)
                    }
                    ))
                })
            };
            var oo, co, lo, uo = ["title", "titleId"];
            function _o() {
                return _o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                _o.apply(this, arguments)
            }
            function mo(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function po(e, t) {
                var n = e.title
                  , a = e.titleId
                  , i = mo(e, uo);
                return r.createElement("svg", _o({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, i), n ? r.createElement("title", {
                    id: a
                }, n) : null, oo || (oo = r.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), co || (co = r.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), lo || (lo = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var fo = r.forwardRef(po);
            n.p;
            const ho = "index_loader__kDy+9"
              , xo = "index_container__X8xX8"
              , vo = "index_container_subtlt__LyYby"
              , go = "index_container_info__c9KQP"
              , ko = "index_info_icon__i5uhI"
              , jo = "index_verifiedUsers__ByJWu"
              , bo = "index_avatars__q4nFz"
              , wo = "index_usersCount__ZOUzI"
              , Co = "index_container_btn__rWex7"
              , yo = "index_tncContainer__McO06"
              , No = "index_termsAndConditions__Gifk+";
            var Oo = function() {
                return (0,
                b.jsx)(Zs, {})
            }
              , Zo = function(e) {
                var t = e.totalVerifiedCount;
                return (0,
                b.jsxs)("div", {
                    className: xo,
                    children: [(0,
                    b.jsx)(La, {
                        html: (0,
                        Z.O4)("ok_game_okxracer_title_verify_surprises")
                    }), (0,
                    b.jsx)("div", {
                        className: vo,
                        children: (0,
                        Z.O4)("ok_game_okxracer_text_complete_steps_eligible")
                    }), (0,
                    b.jsxs)("div", {
                        className: jo,
                        children: [(0,
                        b.jsx)("img", {
                            className: bo,
                            src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg"),
                            alt: ""
                        }), (0,
                        b.jsx)("span", {
                            className: wo,
                            children: t > 0 ? (0,
                            Qt.uf)(t) : "--"
                        }), (0,
                        Z.O4)("ok_game_okxracer_text_racers_already_verified")]
                    }), (0,
                    b.jsx)(so, (0,
                    k.Z)({}, e)), (0,
                    b.jsxs)("div", {
                        className: go,
                        children: [(0,
                        b.jsx)(fo, {
                            className: ko,
                            height: 16
                        }), (0,
                        Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                    }), (0,
                    b.jsx)(Xe, {
                        onClick: e.onClick,
                        className: Co,
                        text: (0,
                        Z.O4)("ok_game_okxracer_surprises_verify")
                    }), (0,
                    b.jsx)("div", {
                        className: yo,
                        children: (0,
                        b.jsx)("button", {
                            className: No,
                            onClick: function() {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Pt)
                            },
                            type: "button",
                            children: (0,
                            Z.O4)("ok_game_okxracer_tnc")
                        })
                    })]
                })
            }
              , Po = function() {
                var e = L().uid
                  , t = (0,
                r.useState)(!0)
                  , n = (0,
                u.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , s = (0,
                r.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP",
                    totalVerifiedCount: 0
                })
                  , o = (0,
                u.Z)(s, 2)
                  , d = o[0]
                  , _ = o[1]
                  , m = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r, a, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                n = s.length > 1 ? s[1] : void 0,
                                e.prev = 2,
                                r = {
                                    isRecheckBinding: t
                                },
                                e.next = 6,
                                Re(n, r);
                            case 6:
                                a = e.sent,
                                i(!1),
                                a && _(a),
                                !t || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || z(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(2),
                                z(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 12]])
                }
                ))), []);
                return (0,
                r.useEffect)((function() {
                    function e() {
                        document.hidden || m()
                    }
                    return m(!1, !0),
                    document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [m]),
                (0,
                r.useEffect)((function() {
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        E.act({
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
                        telegramid: e
                    })
                }
                ), []),
                a ? (0,
                b.jsx)("div", {
                    className: ho,
                    children: (0,
                    b.jsx)(cr.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                b.jsx)(Oo, {}) : (0,
                b.jsx)(Zo, (0,
                k.Z)((0,
                k.Z)({}, d), {}, {
                    onClick: function() {
                        m(!0),
                        function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                            E.act({
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
                            telegramid: e
                        })
                    }
                }))
            }
              , To = n(40544)
              , Eo = n(74914)
              , So = n(59257);
            const Ro = "index_taskItemPlaceholder__6HYF9"
              , Io = "index_task__wcySb";
            var Lo = function() {
                return (0,
                b.jsx)(b.Fragment, {
                    children: Array.from({
                        length: 2
                    }).map((function(e, t) {
                        return (0,
                        b.jsx)("div", {
                            className: O()(Ro),
                            children: (0,
                            b.jsx)(Va, {
                                className: Io
                            })
                        }, t)
                    }
                    ))
                })
            };
            const Bo = {
                "sheet-container": "WalletTask_sheet-container__bz-jm",
                sheetContainer: "WalletTask_sheet-container__bz-jm",
                "sheet-name": "WalletTask_sheet-name__xuyl9",
                sheetName: "WalletTask_sheet-name__xuyl9",
                "sheet-desc": "WalletTask_sheet-desc__snmOq",
                sheetDesc: "WalletTask_sheet-desc__snmOq",
                sheetLogo: "WalletTask_sheetLogo__IiFeJ",
                sheeLogoCheck: "WalletTask_sheeLogoCheck__4qpgw",
                sheetCopyBox: "WalletTask_sheetCopyBox__vbEpV",
                btn: "WalletTask_btn__JBh79",
                "btn-txt": "WalletTask_btn-txt__qnE8C",
                btnTxt: "WalletTask_btn-txt__qnE8C",
                done: "WalletTask_done__vJ+ii",
                taskItemPlaceholder: "WalletTask_taskItemPlaceholder__alL+I",
                task: "WalletTask_task__wYv+1"
            };
            var Ao = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Fo = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Mo = function(e) {
                var t = e.selectedTask
                  , n = e.uid
                  , i = e.onClick
                  , s = (0,
                d.dG)()
                  , _ = (0,
                u.Z)(s, 1)[0]
                  , m = (0,
                r.useRef)((function() {}
                ))
                  , p = a().useState(!1)
                  , f = (0,
                u.Z)(p, 2)
                  , h = f[0]
                  , x = f[1];
                (0,
                r.useEffect)((function() {
                    return (null === t || void 0 === t ? void 0 : t.state) === Ot.finished ? E.act({
                        action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }) : E.act({
                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    function() {
                        m.current && m.current()
                    }
                }
                ), []);
                var v = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var r, a, s, o;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return x(!0),
                                    e.next = 3,
                                    Na(_, n);
                                case 3:
                                    if (!(r = e.sent)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (a = (0,
                                    u.Z)(r, 2),
                                    s = a[0],
                                    o = a[1],
                                    m.current = o,
                                    e.t0 = i,
                                    !e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 11,
                                    i(t, JSON.stringify((0,
                                    k.Z)({
                                        telegramId: n
                                    }, s)));
                                case 11:
                                    x(!1);
                                case 12:
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
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(d.P6, {
                        style: {
                            display: "none"
                        }
                    }), (null === t || void 0 === t ? void 0 : t.state) === Ot.finished && t.context.actionType === Ze.WalletConnect ? (0,
                    b.jsxs)("div", {
                        className: Bo.sheetContainer,
                        children: [(0,
                        b.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Fo),
                            className: Bo.sheeLogo
                        }), (0,
                        b.jsx)("div", {
                            className: Bo.sheetName,
                            children: t.context.nameFinished
                        }), (0,
                        b.jsxs)("div", {
                            className: Bo.sheetCopyBox,
                            children: [(0,
                            b.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            b.jsx)(P.Z, {
                                className: "okx-growth-copy",
                                onClick: function() {
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Ze.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        z(!0, (0,
                                        Z.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        z(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        b.jsx)(G.default, {
                            category: G.default.CATEGORY.fill,
                            type: G.default.TYPE.primary,
                            size: G.default.SIZE.lg,
                            className: Bo.btn,
                            onClick: function() {
                                i()
                            },
                            children: (0,
                            b.jsx)("div", {
                                className: Bo.btnTxt,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    b.jsxs)("div", {
                        className: Bo.sheetContainer,
                        children: [(0,
                        b.jsx)(H.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Ao),
                            className: Bo.sheeLogoCheck
                        }), (0,
                        b.jsx)("div", {
                            className: Bo.sheetName,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        b.jsx)("div", {
                            className: Bo.sheetDesc,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        b.jsx)(G.default, {
                            category: G.default.CATEGORY.fill,
                            type: G.default.TYPE.primary,
                            size: G.default.SIZE.lg,
                            className: Bo.btn,
                            loading: h,
                            onClick: v,
                            children: (0,
                            b.jsx)("div", {
                                className: Bo.btnTxt,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            }
              , Wo = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , Uo = (0,
            r.createContext)({
                boosts: [],
                tasks: Wo,
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
              , Do = function() {
                return (0,
                r.useContext)(Uo)
            }
              , Vo = function(e) {
                var t = e.children
                  , n = (0,
                r.useState)([])
                  , a = (0,
                u.Z)(n, 2)
                  , i = a[0]
                  , s = a[1]
                  , o = (0,
                r.useState)(Wo)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                r.useState)()
                  , f = (0,
                u.Z)(p, 2)
                  , h = f[0]
                  , x = f[1]
                  , v = We().updateGameInfoFromServer
                  , g = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Pe(!0), Ee(!0)]);
                            case 2:
                                "fulfilled" === (r = e.sent)[0].status && s(null !== (t = r[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === r[1].status && m(null !== (n = r[1].value.data) && void 0 !== n ? n : Wo);
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
                                    Promise.allSettled([Pe(), v()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && s(n[0].value.data || []),
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
                        var r, a, i, s, o, l, d, _;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    r = {
                                        id: t
                                    },
                                    n && (r.taskContext = n),
                                    e.next = 5,
                                    Se(r);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Ee(), v()]);
                                case 7:
                                    return a = e.sent,
                                    i = (0,
                                    u.Z)(a, 1),
                                    s = i[0],
                                    "fulfilled" === s.status && (d = null !== (o = null === (l = s.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : Wo,
                                    m(d),
                                    h && (_ = d.taskGroups.find((function(e) {
                                        return e.groupName === h.groupName
                                    }
                                    ))) && x(_)),
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
                r.useEffect)((function() {
                    g()
                }
                ), [g]);
                var w = (0,
                r.useCallback)((function(e) {
                    x(e)
                }
                ), []);
                return (0,
                b.jsx)(Uo.Provider, {
                    value: {
                        boosts: i,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: h,
                        setSelectedPartner: w
                    },
                    children: t
                })
            };
            const Go = "index_task-item__JdIYG"
              , Ho = "index_title__hYmAn"
              , Ko = "index_state__ddlCZ"
              , Yo = "index_item-left__BNG-l"
              , Xo = "index_item-right__V+4iT"
              , zo = "index_icon__yk0cJ"
              , Jo = "index_done__h9mLm";
            var qo = function(e) {
                var t = e.task
                  , n = e.onClick
                  , r = t.id
                  , a = t.points
                  , i = t.state
                  , s = t.context;
                return (0,
                b.jsxs)("div", {
                    className: Go,
                    onClick: function() {
                        n(r)
                    },
                    children: [(0,
                    b.jsxs)("div", {
                        className: Yo,
                        children: [(0,
                        b.jsx)("div", {
                            className: Ho,
                            children: s.name
                        }), (0,
                        b.jsx)("div", {
                            className: Ko,
                            children: " ".concat(i === Ot.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            Qt.uf)(a, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: Xo,
                        children: i === Ot.finished ? (0,
                        b.jsx)("div", {
                            className: Jo,
                            children: (0,
                            Z.O4)("ok_game_okxracer_done")
                        }) : (0,
                        b.jsx)(P.Z, {
                            className: O()("okx-growth-chevrons-right", zo)
                        })
                    })]
                }, r)
            };
            const Qo = "index_container__LfQHA"
              , $o = "index_sheet-container__7hIP5"
              , ec = "index_sheet-name__+hUn6"
              , tc = "index_sheet-desc__Uh4Uk"
              , nc = "index_btn__+6gr5";
            function rc(e) {
                var t = e.tasks
                  , n = e.className
                  , a = Do().doTask
                  , i = (0,
                r.useState)()
                  , s = (0,
                u.Z)(i, 2)
                  , o = s[0]
                  , d = s[1]
                  , _ = (0,
                r.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , f = m[1]
                  , h = L().uid
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var r, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 6;
                                        break
                                    }
                                    return t.context.actionType === Ze.OpenLink && t.context.redirectLink && (null === (r = window) || void 0 === r || null === (i = r.Telegram) || void 0 === i || i.WebApp.openLink(t.context.redirectLink)),
                                    e.next = 4,
                                    a(t.id, n);
                                case 4:
                                    e.sent && z(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg"));
                                case 6:
                                    f(!1);
                                case 7:
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
                  , v = (0,
                Ui.Z)((function(e) {
                    if (t.length > 0) {
                        var n = t.find((function(t) {
                            return (null === t || void 0 === t ? void 0 : t.id) === e
                        }
                        ));
                        if ((null === n || void 0 === n ? void 0 : n.context.actionType) !== Ze.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === Ot.finished)
                            return;
                        d(n),
                        f(!0),
                        (null === n || void 0 === n ? void 0 : n.context.actionType) === Ze.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === Ot.finished ? E.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : (null === n || void 0 === n ? void 0 : n.context.actionType) === Ze.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) !== Ot.finished && E.act({
                            action: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_ConnectToWallet_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }
                }
                ), {
                    wait: 500
                }).run
                  , g = (0,
                Ui.Z)(x, {
                    wait: 500
                }).run
                  , k = (0,
                ze.Z)({}, Ze.WalletConnect, (function() {
                    return (0,
                    b.jsx)(Mo, {
                        selectedTask: o,
                        onClick: function(e, t) {
                            return g(e, t)
                        },
                        uid: h
                    })
                }
                ));
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: O()(Qo, n),
                        children: t.length > 0 ? t.map((function(e) {
                            return (0,
                            b.jsx)(qo, {
                                task: e,
                                onClick: v
                            }, e.id)
                        }
                        )) : (0,
                        b.jsx)(Lo, {})
                    }), o && (0,
                    b.jsx)(He, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: function() {
                            d(void 0),
                            f(!1)
                        },
                        children: function() {
                            var e = k[o.context.actionType];
                            return e ? e() : function() {
                                var e = o.context
                                  , t = e.desc
                                  , n = e.btnText;
                                return (0,
                                b.jsxs)("div", {
                                    className: $o,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: ec,
                                        children: e.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: tc,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Ra.dU)(t)
                                        }
                                    }), (0,
                                    b.jsx)(Xe, {
                                        className: nc,
                                        onClick: function() {
                                            return g(o)
                                        },
                                        text: n
                                    })]
                                })
                            }()
                        }()
                    })]
                })
            }
            const ac = {
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
            var ic = function() {
                var e = Do().partner
                  , t = (0,
                i.useHistory)()
                  , n = t.replace
                  , a = t.goBack
                  , s = (0,
                i.useLocation)().hash;
                if ((0,
                r.useEffect)((function() {
                    var t, r, i;
                    e ? null === (t = window.Telegram) || void 0 === t || null === (r = t.WebApp) || void 0 === r || null === (i = r.BackButton) || void 0 === i || i.show().onClick(a) : n(M + s);
                    return function() {
                        var e, t, n;
                        null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BackButton) || void 0 === n || n.hide().offClick(a)
                    }
                }
                ), [a, s, e, n]),
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
                b.jsxs)("div", {
                    className: ac.container,
                    children: [(0,
                    b.jsxs)("div", {
                        className: ac.header,
                        children: [(0,
                        b.jsx)(Eo.Z, {
                            size: So.Z.sm,
                            className: ac.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        b.jsx)("h1", {
                            className: ac.title,
                            children: _
                        })]
                    }), (0,
                    b.jsx)("p", {
                        className: ac.desc,
                        children: m
                    }), (0,
                    b.jsxs)("div", {
                        className: ac.status,
                        children: [(0,
                        b.jsxs)("div", {
                            className: ac.statusItem,
                            children: [(0,
                            b.jsx)("div", {
                                className: ac.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            b.jsx)("div", {
                                className: ac.statusValue,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    Qt.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        b.jsxs)("div", {
                            className: ac.statusItem,
                            children: [(0,
                            b.jsx)("div", {
                                className: ac.statusTitle,
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            b.jsxs)("div", {
                                className: ac.statusValue,
                                children: [(0,
                                b.jsx)(P.Z, {
                                    className: O()("okx-growth-friends", ac.participantsIcon)
                                }), Qt.ag.shortNumber(f, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: ac.tasks,
                        children: [(0,
                        b.jsxs)("div", {
                            className: ac.taskListHeader,
                            children: [(0,
                            b.jsx)("span", {
                                children: (0,
                                Z.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            b.jsx)("span", {
                                className: ac.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(c, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        b.jsx)(rc, {
                            tasks: u
                        })]
                    })]
                })
            };
            const sc = "Tag_tag__tkWly";
            var oc = function(e) {
                var t = e.text
                  , n = e.className;
                return (0,
                b.jsx)("span", {
                    className: O()(sc, n),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
              , cc = function(e) {
                return (null === e || void 0 === e ? void 0 : e.type) === Zt.DailyBoost
            }
              , lc = function(e) {
                return "actionType"in e && e.actionType === Ze.UnLock
            }
              , uc = function(e) {
                var t = e.pointCost
                  , n = e.curStage
                  , r = e.totalStage;
                return !cc(e) && n >= r ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                Qt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            };
            const dc = "index_sheet__FbHHx"
              , _c = "index_sheet-icon__H2xCV"
              , mc = "index_boostSheetTag__NbYFf"
              , pc = "index_sheet-title__RInQ-"
              , fc = "index_sheet-desc__W9myB"
              , hc = "index_sheet-data__FALtV"
              , xc = "index_sheet-point__Xrsvs"
              , vc = "index_sheet-lvl__f1+W-"
              , gc = "index_lockBtnContainer__4DPO7"
              , kc = "index_btn__bxKiJ"
              , jc = "index_boost-data-split-point__TaGIo";
            var bc = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , r = t
                  , a = r.context
                  , i = r.curStage
                  , s = r.totalStage
                  , o = r.isLocked
                  , c = a.icon
                  , l = a.name
                  , u = a.desc
                  , d = a.btnText
                  , _ = lc(a)
                  , m = !1
                  , p = u
                  , f = d;
                return _ && (o ? (p = a.unlockDescription,
                f = a.unlockButtonText) : p = a.ruleDescription,
                i === s && (m = !0,
                f = a.activatedButtonText)),
                (0,
                b.jsxs)("div", {
                    className: dc,
                    children: [(0,
                    b.jsx)("div", {
                        className: _c,
                        children: c
                    }), _ && (0,
                    b.jsx)(oc, {
                        className: mc
                    }), (0,
                    b.jsx)("div", {
                        className: pc,
                        children: l
                    }), (0,
                    b.jsx)("div", {
                        className: fc,
                        children: p
                    }), (0,
                    b.jsxs)("div", {
                        className: hc,
                        children: [(0,
                        b.jsx)("span", {
                            className: xc,
                            children: uc(t)
                        }), (cc(t) || i < s) && (0,
                        b.jsx)("span", {
                            className: jc
                        }), (0,
                        b.jsx)("span", {
                            className: vc,
                            children: cc(t) ? "".concat(s - i, "/").concat(s) : "Lvl ".concat(i)
                        })]
                    }), _ && o ? (0,
                    b.jsx)(wt, {
                        to: D,
                        className: gc,
                        children: (0,
                        b.jsx)(Xe, {
                            text: f
                        })
                    }) : (0,
                    b.jsx)(Xe, {
                        onClick: function() {
                            n(t)
                        },
                        className: kc,
                        text: f,
                        disabled: m
                    })]
                })
            };
            const wc = "index_boost-item__k6pnm"
              , Cc = "index_boost-icon__wH6Dh"
              , yc = "index_boost-title__9R-Ry"
              , Nc = "index_newTag__tgIea"
              , Oc = "index_boost-desc__k1Big"
              , Zc = "index_boost-data__+0cnG"
              , Pc = "index_boost-data-split-point__moT+k"
              , Tc = "index_boost-data-stage__8CAgC"
              , Ec = "index_boostItemPlaceholder__NaUkk"
              , Sc = "index_locked__sM-YP"
              , Rc = "index_unlockIcon__whxqz"
              , Ic = "index_unlockButton__C3EY5";
            var Lc = function(e) {
                var t = e.boost
                  , n = t.curStage
                  , r = t.totalStage
                  , a = t.isLocked
                  , i = t.context;
                if (lc(i)) {
                    if (a)
                        return (0,
                        b.jsx)("div", {
                            className: Zc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === r)
                        return (0,
                        b.jsx)("div", {
                            className: Zc,
                            children: i.activatedButtonText
                        })
                }
                return (0,
                b.jsxs)("div", {
                    className: Zc,
                    children: [(0,
                    b.jsx)("span", {
                        children: uc(t)
                    }), (cc(t) || n < r) && (0,
                    b.jsx)("span", {
                        className: Pc
                    }), (0,
                    b.jsx)("span", {
                        className: Tc,
                        children: cc(t) ? "".concat(r - n, "/").concat(r) : "Lvl ".concat(n)
                    })]
                })
            }
              , Bc = function(e) {
                var t = e.boost
                  , n = e.onClick
                  , r = t.id
                  , a = t.context
                  , i = t.isLocked
                  , s = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = lc(a);
                return (0,
                b.jsxs)("div", {
                    className: wc,
                    onClick: function() {
                        n(r)
                    },
                    children: [(0,
                    b.jsx)("div", {
                        className: Cc,
                        children: s
                    }), (0,
                    b.jsxs)("div", {
                        className: yc,
                        children: [o, l && (0,
                        b.jsx)(oc, {
                            className: Nc
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: Oc,
                        children: c
                    }), (0,
                    b.jsx)(Lc, {
                        boost: t
                    }), i && (0,
                    b.jsxs)("div", {
                        className: Sc,
                        children: [(0,
                        b.jsx)(P.Z, {
                            className: O()("okx-growth-lock", Rc)
                        }), (0,
                        b.jsx)(G.default, {
                            category: G.default.CATEGORY.text,
                            type: G.default.TYPE.primary,
                            size: G.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: G.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: Ic,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, r)
            }
              , Ac = function() {
                return (0,
                b.jsxs)("div", {
                    className: O()(wc, Ec),
                    children: [(0,
                    b.jsx)(Va, {
                        className: Cc
                    }), (0,
                    b.jsx)(Va, {
                        className: yc
                    }), (0,
                    b.jsx)(Va, {
                        className: Oc
                    }), (0,
                    b.jsx)(Va, {
                        className: Zc
                    })]
                })
            };
            const Fc = "index_boost-item-container__SW62L"
              , Mc = "index_boost-item-padding__IwiTB";
            var Wc = function(e) {
                var t = e.onClick
                  , n = Do().boosts
                  , a = (0,
                r.useCallback)((function(e) {
                    var r = n.find((function(t) {
                        return t.id === e
                    }
                    ));
                    r && t(r)
                }
                ), [n, t]);
                return (0,
                b.jsxs)("div", {
                    className: Fc,
                    children: [(0,
                    b.jsx)("div", {
                        className: Mc
                    }), n.length > 0 ? (0,
                    b.jsx)(b.Fragment, {
                        children: n.map((function(e) {
                            return (0,
                            b.jsx)(Bc, {
                                boost: e,
                                onClick: a
                            }, null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)(Ac, {}), (0,
                        b.jsx)(Ac, {}), (0,
                        b.jsx)(Ac, {})]
                    }), (0,
                    b.jsx)("div", {
                        className: Mc
                    })]
                })
            };
            const Uc = "BoostArea_boosts-title__hkjWn"
              , Dc = "BoostArea_boost-area__AMJbh"
              , Vc = "BoostArea_container__qLJSQ";
            var Gc = function() {
                var e = Do()
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , a = (0,
                r.useState)()
                  , i = (0,
                u.Z)(a, 2)
                  , s = i[0]
                  , o = i[1]
                  , d = (0,
                r.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , f = We().points
                  , h = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var r, a, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.pointCost,
                                    a = t.curStage,
                                    i = t.totalStage,
                                    !(Number(i) <= Number(a))) {
                                        e.next = 5;
                                        break
                                    }
                                    z(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(f - Number(r) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    z(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && z(!0);
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
                  , x = (0,
                r.useCallback)((function(e) {
                    p(!0),
                    o(e)
                }
                ), []);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: Uc,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsx)("div", {
                        className: Dc,
                        children: (0,
                        b.jsxs)("div", {
                            className: Vc,
                            children: [(0,
                            b.jsx)(Wc, {
                                onClick: x
                            }), (0,
                            b.jsx)(He, {
                                visible: m,
                                onClose: function() {
                                    p(!1)
                                },
                                children: s && (0,
                                b.jsx)(bc, {
                                    boost: s,
                                    onClick: h
                                })
                            })]
                        })
                    })]
                })
            };
            const Hc = "index_partnerItem__S1dkf"
              , Kc = "index_title__bRRMU"
              , Yc = "index_points__WQSip"
              , Xc = "index_state__gi-nK"
              , zc = "index_logo__y4rK-"
              , Jc = "index_item-left__ej9+1"
              , qc = "index_item-right__3KRWi"
              , Qc = "index_dot__4bynu"
              , $c = "index_participantsIcon__-tYh0"
              , el = "index_icon__gS69A";
            var tl = function(e) {
                var t = e.name
                  , n = e.totalPoints
                  , r = e.numCompletedTasks
                  , a = e.numTasks
                  , i = e.participants
                  , s = e.logo;
                return (0,
                b.jsxs)("div", {
                    className: Hc,
                    children: [(0,
                    b.jsx)(Eo.Z, {
                        size: So.Z.sm,
                        className: zc,
                        src: "".concat(o.Z.cdnBaseUrl).concat(s)
                    }), (0,
                    b.jsxs)("div", {
                        className: Jc,
                        children: [(0,
                        b.jsx)("div", {
                            className: Kc,
                            children: t
                        }), (0,
                        b.jsx)("div", {
                            className: Yc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                Qt.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        b.jsxs)("div", {
                            className: Xc,
                            children: [(0,
                            b.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Ra.dU)((0,
                                    Z.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(r, "/").concat(a)
                                    }))
                                }
                            }), (0,
                            b.jsx)("span", {
                                className: Qc
                            }), (0,
                            b.jsx)(P.Z, {
                                className: O()("okx-growth-friends", $c)
                            }), (0,
                            b.jsx)("em", {
                                children: Qt.ag.shortNumber(i, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: qc,
                        children: (0,
                        b.jsx)(P.Z, {
                            className: O()("okx-growth-chevrons-right", el)
                        })
                    })]
                })
            };
            const nl = "index_container__wKNP9";
            function rl(e) {
                var t = e.tasks
                  , n = e.className
                  , r = Do().setSelectedPartner
                  , a = t.length > 0;
                return (0,
                b.jsx)("div", {
                    className: O()(nl, n),
                    children: a ? t.map((function(e) {
                        var t = e.groupName
                          , n = e.numTasks
                          , a = e.numCompletedTasks
                          , i = e.totalPoints
                          , s = e.participants
                          , o = e.logo;
                        return (0,
                        b.jsx)(wt, {
                            to: W,
                            onClick: function() {
                                r(e)
                            },
                            children: (0,
                            b.jsx)(tl, {
                                name: t,
                                logo: o,
                                totalPoints: i,
                                numCompletedTasks: a,
                                numTasks: n,
                                participants: s
                            })
                        }, t)
                    }
                    )) : (0,
                    b.jsx)(Lo, {})
                })
            }
            const al = "TaskArea_tabPane__irXs6"
              , il = "TaskArea_tabName__-BL2R"
              , sl = "TaskArea_list__cqK4t";
            var ol = function(e) {
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , r = e.count
                  , a = n ? (0,
                Z.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                Z.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                b.jsxs)("div", {
                    className: il,
                    children: [a, " ", (0,
                    b.jsxs)("span", {
                        children: ["(", r, ")"]
                    })]
                })
            }
              , cl = function() {
                var e = Do().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                b.jsx)(b.Fragment, {
                    children: (0,
                    b.jsxs)(Sa.Z.Underline, {
                        size: Sa.Z.SIZE.xl,
                        children: [(0,
                        b.jsx)(Sa.Z.TabPane, {
                            className: al,
                            tab: (0,
                            b.jsx)(ol, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            b.jsx)(rl, {
                                tasks: t,
                                className: sl
                            })
                        }), (0,
                        b.jsx)(Sa.Z.TabPane, {
                            className: al,
                            tab: (0,
                            b.jsx)(ol, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            b.jsx)(rc, {
                                tasks: n,
                                className: sl
                            })
                        })]
                    })
                })
            };
            const ll = "TaskPage_container__5KfIM"
              , ul = "TaskPage_block__kt8oo"
              , dl = "TaskPage_block-boost__QYQXL"
              , _l = "TaskPage_points-title__4hW9Y"
              , ml = "TaskPage_points-content__+yK3g"
              , pl = "TaskPage_totalPoints__hWrtV"
              , fl = "TaskPage_infoIcon__p5I2c";
            var hl = function() {
                var e = We()
                  , t = e.points
                  , n = e.accumPoints;
                return (0,
                b.jsxs)("div", {
                    className: ll,
                    children: [(0,
                    b.jsx)("div", {
                        className: ul,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: _l,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: ml,
                                children: $t.yx.thousandFormat(t || 0)
                            }), (0,
                            b.jsxs)("div", {
                                className: pl,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                b.jsx)("em", {
                                    children: $t.yx.thousandFormat(n || 0)
                                }), (0,
                                b.jsx)(To.Z, {
                                    title: (0,
                                    Z.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: To.Z.TYPES.neutral,
                                    children: (0,
                                    b.jsx)(P.Z, {
                                        iconName: "okx-growth-information",
                                        className: fl
                                    })
                                })]
                            })]
                        })
                    }), (0,
                    b.jsx)("div", {
                        className: dl,
                        children: (0,
                        b.jsx)(Gc, {})
                    }), (0,
                    b.jsx)("div", {
                        className: ul,
                        children: (0,
                        b.jsx)(cl, {})
                    })]
                })
            }
              , xl = function() {
                return (0,
                b.jsx)(Vo, {
                    children: (0,
                    b.jsxs)(i.Switch, {
                        children: [(0,
                        b.jsx)(i.Route, {
                            path: M,
                            component: hl,
                            exact: !0
                        }), (0,
                        b.jsx)(i.Route, {
                            path: W,
                            component: ic,
                            exact: !0
                        })]
                    })
                })
            }
              , vl = function() {
                var e = (0,
                r.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , a = t[1]
                  , s = (0,
                r.useMemo)(h, []);
                (0,
                r.useMemo)((function() {
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var o, f = function() {
                    var e = L().uid;
                    return (0,
                    r.useEffect)((function() {
                        var e, t, n, r, a, i, s, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (r = window.Telegram.WebApp).ready) || void 0 === n || n.call(r),
                        null === (a = (i = window.Telegram.WebApp).setHeaderColor) || void 0 === a || a.call(i, "#0D0D0D"),
                        null === (s = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === s || s.call(o, "#0D0D0D"),
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
                r.useEffect)((function() {
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
                                        _.d)(s);
                                    case 2:
                                        t = e.sent,
                                        a(t);
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
                ), [s]),
                (0,
                b.jsx)("article", {
                    className: x,
                    children: (0,
                    b.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: s,
                        children: f ? (0,
                        b.jsx)(b.Fragment, {
                            children: (0,
                            b.jsx)(Ft, {
                                children: (0,
                                b.jsx)(Ue, {
                                    children: (0,
                                    b.jsx)(Ut, {
                                        children: (0,
                                        b.jsxs)(d.LD, {
                                            manifestUrl: Tt(),
                                            children: [(0,
                                            b.jsx)("main", {
                                                className: g,
                                                children: (0,
                                                b.jsxs)(i.Switch, {
                                                    children: [(0,
                                                    b.jsx)(i.Route, {
                                                        path: A,
                                                        component: (o = Ea,
                                                        function(e) {
                                                            return (0,
                                                            b.jsx)("div", {
                                                                className: j,
                                                                children: (0,
                                                                b.jsx)(o, (0,
                                                                k.Z)({}, e))
                                                            })
                                                        }
                                                        ),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(i.Route, {
                                                        path: U,
                                                        component: C(Ii),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(i.Route, {
                                                        path: M,
                                                        component: xl
                                                    }), (0,
                                                    b.jsx)(i.Route, {
                                                        path: F,
                                                        component: C(xs),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(i.Route, {
                                                        path: D,
                                                        component: C(Po),
                                                        exact: !0
                                                    })]
                                                })
                                            }), (0,
                                            b.jsx)("div", {
                                                className: v,
                                                children: (0,
                                                b.jsx)(yt, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        b.jsx)(Mi, {})
                    })
                })
            }
              , gl = document.getElementById("root");
            if (gl) {
                var kl = (0,
                b.jsx)(i.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    b.jsx)(B, {
                        children: (0,
                        b.jsx)(vl, {})
                    })
                });
                (0,
                s.createRoot)(gl).render(kl)
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
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.m = e,
    n.amdO = {},
    (()=>{
        var e = [];
        n.O = (t,r,a,i)=>{
            if (!r) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r,a,i] = e[u], o = !0, c = 0; c < r.length; c++)
                        (!1 & i || s >= i) && Object.keys(n.O).every((e=>n.O[e](r[c]))) ? r.splice(c--, 1) : (o = !1,
                        i < s && (s = i));
                    if (o) {
                        e.splice(u--, 1);
                        var l = a();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--)
                e[u] = e[u - 1];
            e[u] = [r, a, i]
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
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
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
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var a = r.length - 1; a > -1 && !e; )
                    e = r[a--].src
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
                    var r = window._okGlobal || window.okGlobal;
                    return r && r.isRTL && /\.css$/.test(n) ? n.replace(/\.css$/, ".rtl.css") : n
                }
            }
        } catch (t) {}
    }
    )(),
    (()=>{
        var e = {
            6554: 0,
            5145: 0,
            2627: 0
        };
        n.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, i, [s,o,c] = r, l = 0;
            if (s.some((t=>0 !== e[t]))) {
                for (a in o)
                    n.o(o, a) && (n.m[a] = o[a]);
                if (c)
                    var u = c(n)
            }
            for (t && t(r); l < s.length; l++)
                i = s[l],
                n.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return n.O(u)
        }
          , r = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var r = n.O(void 0, [9934, 5825, 5145, 7678, 5890, 6371, 8283, 6877, 1249, 4084, 2627, 2821, 8037, 3295], (()=>n(70716)));
    r = n.O(r)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.fd30e821.js.map
