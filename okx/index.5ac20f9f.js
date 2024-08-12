(()=>{
    var e = {
        23839: (e,t,n)=>{
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
              , d = n(60343)
              , _ = n(46541)
              , m = n(1677)
              , p = n(45929)
              , h = n(8786)
              , x = ()=>{
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return h.Z.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            }
            ;
            const v = "App_container__p+0qT"
              , f = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = n(28683);
            const j = "NoPaddingLayout_no-padding-layout__6LAKV";
            var b = n(45263);
            const w = "ComPaddingLayout_common-padding-layout__0gGbM";
            var C = e=>t=>(0,
            b.jsx)("div", {
                className: w,
                children: (0,
                b.jsx)(e, (0,
                k.Z)({}, t))
            })
              , N = n(44925)
              , y = n(95640)
              , O = n.n(y)
              , P = n(14300)
              , Z = n(72106)
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
              , I = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , R = (0,
            a.createContext)(I)
              , L = ()=>(0,
            a.useContext)(R)
              , B = e=>{
                var t = e.children
                  , n = (0,
                a.useMemo)((()=>{
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
                            gameId: 1
                        }
                    }
                    return I
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                b.jsx)(R.Provider, {
                    value: s,
                    children: t
                })
            }
              , A = "/mini-app/racer"
              , F = "/mini-app/racer/referrals"
              , M = "/mini-app/racer/tasks"
              , W = "/mini-app/racer/tasks/partner"
              , U = "/mini-app/racer/leaderboard"
              , D = "/mini-app/racer/rewards"
              , V = n(72202)
              , G = n(83108)
              , H = n(76983)
              , K = n(59896)
              , Y = n(4860)
              , X = n(4422)
              , z = (e,t)=>{
                e ? p.Z.success({
                    title: t || (0,
                    P.O4)("ok_game_okxracer_success"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                }) : p.Z.error({
                    title: t || (0,
                    P.O4)("ok_game_okxracer_failed"),
                    placement: p.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , J = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                z(!1, t || (0,
                P.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , q = n(60378);
            const Q = utils.ont;
            var $ = n.n(Q)
              , ee = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , te = e=>t=>{
                if (!(0,
                q.y)()) {
                    var n = t || {}
                      , a = n.status
                      , r = n.data || {}
                      , s = r.msg
                      , i = r.code;
                    X.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
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
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((e=>{
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
            class le {
                constructor() {
                    this.store = void 0,
                    this.store = new Map
                }
                static getInstance() {
                    return le.instance || (le.instance = new le),
                    le.instance
                }
                setItem(e, t) {
                    this.store.set(e, {
                        value: t,
                        timestamp: Date.now()
                    })
                }
                getItem(e) {
                    var t = this.store.get(e);
                    return t ? t.value : void 0
                }
                removeItem(e) {
                    this.store.delete(e)
                }
                clear() {
                    this.store.clear()
                }
                hasItem(e) {
                    return this.store.has(e)
                }
                isItemExpired(e, t) {
                    var n = this.store.get(e);
                    return !n || Date.now() - n.timestamp > t
                }
            }
            le.instance = void 0;
            const ue = le.getInstance();
            function de(e, t) {
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
                                    !ue.hasItem(s) || ue.isItemExpired(s, t)) {
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
            function _e(e, t, n) {
                return me.apply(this, arguments)
            }
            function me() {
                return (me = (0,
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
                                ue.setItem(n, i),
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
            function pe(e, t, n) {
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
                                !a || !ue.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = ue.getItem(r),
                                _e(t, r, n).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", _e(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function xe(e, t, n, a) {
                return ve.apply(this, arguments)
            }
            function ve() {
                return (ve = (0,
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
                                ue.setItem(a, o),
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
            function fe(e, t, n, a) {
                return ge.apply(this, arguments)
            }
            function ge() {
                return (ge = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !ue.hasItem(s) || !a) {
                                    e.next = 5;
                                    break
                                }
                                return i = ue.getItem(s),
                                xe(t, n, s, r).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", xe(t, n, s, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var ke = "/priapi/v1/affiliate"
              , je = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ke, "/game/racer/info"), t));
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
              , be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ke, "/game/racer/assess"), t));
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
                                pe("".concat(ke, "/game/racer/invitee-list"), {
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
              , Ce = function() {
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
                                n = de(pe, 1e4),
                                e.next = 4,
                                n("".concat(ke, "/game/racer/leaderboard/friends"), {
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
              , Ne = function() {
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
                                n = de(pe, 3e5),
                                e.next = 4,
                                n("".concat(ke, "/game/racer/leaderboard/global"), {
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
              , ye = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
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
                                return e.abrupt("return", pe("".concat(ke, "/game/racer/boosts"), {}, t));
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
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ke, "/game/racer/boost"), t));
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
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", pe("".concat(ke, "/game/racer/group-tasks"), {}, t));
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
                                return e.abrupt("return", fe("".concat(ke, "/game/racer/task"), t));
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
                                fe("".concat(ke, "/game/racer/account-binding"), n, t);
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
                                    totalVerifiedCount: s.totalVerifiedCount
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
            function Se(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e(...n, ...a)
                }
            }
            var Ie = {
                Rewards: Se(Ee, !0),
                Friends: Se(Ce, {
                    pageNo: 1
                }),
                Boost: Se(Oe, !0),
                Task: Se(Ze, !0),
                Invitee: Se(we, {
                    pageNo: 1
                }, !0),
                Global: Se(Ne, {
                    pageNo: 1
                })
            }
              , Re = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Le = function() {
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
                                new Promise((e=>{
                                    var t = Math.floor(1e3 * Math.random()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                if (!n || !Ie[n]) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9,
                                a = Ie[n],
                                void ("requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0));
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && X.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 14:
                                return e.next = 16,
                                Le(t);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                        var a
                    }
                    ), e, null, [[3, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function Be() {
                Le(Re).catch((e=>{
                    e instanceof Error && X.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Ae = (0,
            a.createContext)({
                points: 0,
                accumPoints: 0,
                numChances: 0,
                numChancesTotal: 0,
                countdownDisplay: "",
                isLoading: !0,
                linkCode: "",
                updateGameInfo: ()=>{}
                ,
                updateGameInfoFromServer: ()=>{}
                ,
                isShowAutopilotGainedPoint: !1,
                isShowRiskControlSheet: !0,
                autopilotPoints: 0,
                hideRiskControlSheet: ()=>{}
                ,
                hideAutopilotSheet: ()=>{}
                ,
                isShowActivityDetails: !1,
                toggleActivityDetailsBottomSheet: ()=>{}
                ,
                context: {}
            })
              , Fe = ()=>(0,
            a.useContext)(Ae)
              , Me = e=>{
                var t, n = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], h = (0,
                a.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                a.useState)(0), N = (0,
                u.Z)(C, 2), y = N[0], O = N[1], Z = (0,
                a.useState)(""), T = (0,
                u.Z)(Z, 2), E = T[0], S = T[1], I = (0,
                a.useState)({}), R = (0,
                u.Z)(I, 2), B = R[0], A = R[1], F = (0,
                a.useState)(!0), M = (0,
                u.Z)(F, 2), W = M[0], U = M[1], D = L(), G = D.username, H = D.startParam, K = (0,
                a.useState)(""), J = (0,
                u.Z)(K, 2), q = J[0], Q = J[1], $ = (0,
                a.useState)(!1), ee = (0,
                u.Z)($, 2), te = ee[0], ne = ee[1], ae = (0,
                a.useState)(0), re = (0,
                u.Z)(ae, 2), se = re[0], ie = re[1], oe = (0,
                a.useState)(!1), ce = (0,
                u.Z)(oe, 2), le = ce[0], ue = ce[1], de = (0,
                a.useState)(), _e = (0,
                u.Z)(de, 2), me = _e[0], pe = _e[1], he = (0,
                a.useState)(!1), xe = (0,
                u.Z)(he, 2), ve = xe[0], fe = xe[1], ge = null !== (t = new Y.Z((H || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", ke = (0,
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
                                je({
                                    extUserName: G,
                                    linkCode: ge
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                S(n.linkCode),
                                f(n.numChances),
                                O(n.secondToRefresh),
                                w(n.numChancesTotal),
                                ne(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                ue(n.isUnderRiskControl),
                                ie(n.autopilotPoints),
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
                                P.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [ge, G]);
                (0,
                a.useEffect)((()=>{
                    fe(Boolean(null === me || void 0 === me ? void 0 : me.isShowActivityFlag))
                }
                ), [null === me || void 0 === me ? void 0 : me.isShowActivityFlag]),
                (0,
                a.useEffect)((()=>{
                    ke().then(Be).catch((e=>{
                        e instanceof Error && X.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [ke]),
                (0,
                a.useEffect)((()=>{
                    var e = new V.Z(y);
                    return y > 0 ? (e.start(),
                    e.addEventListener(V.Z.Event.UPDATE, (e=>{
                        Q("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(V.Z.Event.FINISH, (()=>{
                        Q(""),
                        ke()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    Q("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [y, ke]),
                (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || ke()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [ke]);
                var be = (0,
                a.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    f(e.numChances),
                    O(e.secondToRefresh)
                }
                ), [])
                  , we = (0,
                a.useCallback)((0,
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
                a.useCallback)((()=>{
                    ne(!1)
                }
                ), [])
                  , Ne = (0,
                a.useCallback)((()=>{
                    ue(!1)
                }
                ), [])
                  , ye = (0,
                a.useCallback)((()=>{
                    fe((e=>!e))
                }
                ), [])
                  , Oe = (0,
                a.useMemo)((()=>({
                    isLoading: W,
                    points: i,
                    accumPoints: m,
                    numChances: v,
                    numChancesTotal: j,
                    countdownDisplay: q,
                    updateGameInfo: be,
                    linkCode: E,
                    updateGameInfoFromServer: we,
                    isShowAutopilotGainedPoint: te,
                    autopilotPoints: se,
                    hideAutopilotSheet: Ce,
                    isShowRiskControlSheet: le,
                    hideRiskControlSheet: Ne,
                    activity: me,
                    isShowActivityDetails: ve,
                    toggleActivityDetailsBottomSheet: ye,
                    context: B
                })), [W, i, m, v, j, q, be, E, we, te, se, Ce, le, Ne, me, ve, ye, B]);
                return (0,
                b.jsx)(Ae.Provider, {
                    value: Oe,
                    children: n
                })
            }
              , We = n(5425);
            const Ue = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var De = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Ue.closeBtn,
                closeIconClassName: Ue.closeIcon
            }
              , Ve = e=>(0,
            b.jsx)(We.Z, (0,
            k.Z)((0,
            k.Z)({}, De), {}, {
                topContent: e.title ? void 0 : (0,
                b.jsx)("div", {
                    className: Ue.topPadding
                }),
                zIndex: 999
            }, e));
            const Ge = "PrimaryButton_button__SJFHA"
              , He = "PrimaryButton_buttonText__19AJ7";
            var Ke = e=>{
                var t = e.onClick
                  , n = e.text
                  , a = e.className
                  , r = e.disabled
                  , s = void 0 !== r && r;
                return (0,
                b.jsx)(H.default, {
                    category: H.default.CATEGORY.fill,
                    type: H.default.TYPE.primary,
                    size: H.default.SIZE.lg,
                    className: O()(Ge, a),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    b.jsx)("div", {
                        className: He,
                        children: n
                    })
                })
            }
            ;
            const Ye = "EventPopover_eventPopoverWrapper__65bP-"
              , Xe = "EventPopover_eventPopover__B0CAq"
              , ze = "EventPopover_eventPopoverDesc__+lNFw"
              , Je = "EventPopover_eventPopoverBtn__BKIwS"
              , qe = "EventPopover_eventPopoverBtnIcon__ao8J5"
              , Qe = "EventPopover_eventPopoverArrow__M+sYF"
              , $e = "EventPopover_eventDetailsContainer__G1KfS"
              , et = "EventPopover_title__Tie4q"
              , tt = "EventPopover_description__tVAy9"
              , nt = "EventPopover_disclaimer__jFZC3"
              , at = "EventPopover_continueBtn__S2Sj-"
              , rt = "EventPopover_eventDetails__5xDB0"
              , st = "EventPopover_eventImg__0yapf"
              , it = "EventPopover_timer__8z+oW"
              , ot = "EventPopover_show__-udK9"
              , ct = "EventPopover_label__nXELo"
              , lt = "EventPopover_separator__v11ad"
              , ut = "EventPopover_timerValue__ehgD2";
            var dt = e=>{
                var t = e.endTime
                  , n = (0,
                a.useRef)(new V.Z.Absolute(t,{
                    interval: 1
                }))
                  , r = (0,
                a.useState)()
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1];
                return (0,
                a.useEffect)((()=>{
                    var e = n.current;
                    return e.start().addEventListener(V.Z.Event.UPDATE, (e=>{
                        o(e)
                    }
                    )),
                    ()=>{
                        e.end()
                    }
                }
                ), []),
                (0,
                b.jsxs)("div", {
                    className: O()(it, {
                        [ot]: i
                    }),
                    children: [(0,
                    b.jsx)("span", {
                        className: ct,
                        children: (0,
                        P.O4)("ok_game_okxracer_text_phase3_ends_in")
                    }), Number(null === i || void 0 === i ? void 0 : i.day) > 0 && (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)("span", {
                            className: ut,
                            children: null === i || void 0 === i ? void 0 : i.day
                        }), (0,
                        b.jsx)("span", {
                            className: lt,
                            children: ":"
                        })]
                    }), (0,
                    b.jsx)("span", {
                        className: ut,
                        children: null === i || void 0 === i ? void 0 : i.hour
                    }), (0,
                    b.jsx)("span", {
                        className: lt,
                        children: ":"
                    }), (0,
                    b.jsx)("span", {
                        className: ut,
                        children: null === i || void 0 === i ? void 0 : i.minute
                    }), (0,
                    b.jsx)("span", {
                        className: lt,
                        children: ":"
                    }), (0,
                    b.jsx)("span", {
                        className: ut,
                        children: null === i || void 0 === i ? void 0 : i.second
                    })]
                })
            }
              , _t = e=>{
                var t = e.children
                  , n = Fe()
                  , a = n.activity
                  , r = n.isShowActivityDetails
                  , s = n.toggleActivityDetailsBottomSheet
                  , i = Number(null === a || void 0 === a ? void 0 : a.activityEndTime);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(G.Z, {
                        zIndex: 998,
                        layerClassName: Ye,
                        popperClassName: Xe,
                        disabled: !(null !== a && void 0 !== a && a.isShowActivityFlag),
                        show: null === a || void 0 === a ? void 0 : a.isShowActivityFlag,
                        hideArrow: !0,
                        descClassName: ze,
                        description: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(H.default, {
                                className: Je,
                                type: H.default.TYPE.primary,
                                category: H.default.CATEGORY.text,
                                htmlType: "button",
                                onClick: s,
                                icon: (0,
                                b.jsx)(Z.Z, {
                                    iconName: "okds-arrow-chevron-right-centered-md",
                                    className: qe
                                }),
                                iconType: H.default.ICON_POSITION.tailing,
                                children: (0,
                                P.O4)("ok_game_okxracer_tag_phase3_double_points")
                            }), (0,
                            b.jsx)("svg", {
                                className: Qe,
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
                    b.jsx)(Ve, {
                        noContentPadding: !0,
                        visible: r,
                        onClose: ()=>{
                            s()
                        }
                        ,
                        children: (0,
                        b.jsxs)("div", {
                            className: $e,
                            children: [(0,
                            b.jsxs)("div", {
                                className: rt,
                                children: [(0,
                                b.jsx)(K.Z, {
                                    pictureClassName: st,
                                    className: st,
                                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/88BF03D669EA1F25.png")
                                }), (0,
                                b.jsx)("h2", {
                                    className: et,
                                    children: (0,
                                    P.O4)("ok_game_okxracer_title_phase3_5mil_points")
                                }), (0,
                                b.jsx)("p", {
                                    className: tt,
                                    children: (0,
                                    P.O4)("ok_game_okxracer_text_phase3_correct_top")
                                }), (0,
                                b.jsx)(dt, {
                                    endTime: i
                                }), (0,
                                b.jsx)("p", {
                                    className: nt,
                                    children: (0,
                                    P.O4)("ok_game_okxracer_text_phase3_no_dbl_points")
                                })]
                            }), (0,
                            b.jsx)(Ke, {
                                className: at,
                                onClick: ()=>{
                                    s()
                                }
                                ,
                                text: (0,
                                P.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                            })]
                        })
                    })]
                })
            }
            ;
            const mt = "Navbar_navbar__LF3-M"
              , pt = "Navbar_link__qX0Sf"
              , ht = "Navbar_active__TCbF8"
              , xt = "Navbar_linkIcon__GtH54"
              , vt = "Navbar_linkText__Szxi-";
            var ft = ["children", "className"]
              , gt = ["iconName", "label", "onClick"]
              , kt = e=>{
                var t = e.children
                  , n = e.className
                  , a = (0,
                N.Z)(e, ft)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                b.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , jt = e=>{
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = (0,
                N.Z)(e, gt)
                  , i = (0,
                s.useRouteMatch)({
                    path: r.to,
                    exact: r.to === A
                });
                return (0,
                b.jsxs)(kt, {
                    className: O()(pt, i && ht),
                    to: r.to,
                    onClick: a,
                    children: [(0,
                    b.jsx)(Z.Z, {
                        iconName: t,
                        className: xt
                    }), (0,
                    b.jsx)("span", {
                        className: vt,
                        children: n
                    })]
                })
            }
              , bt = ()=>{
                var e = {
                    telegramid: L().uid
                };
                return (0,
                b.jsxs)("div", {
                    className: mt,
                    children: [(0,
                    b.jsx)(_t, {
                        children: (0,
                        b.jsx)(jt, {
                            iconName: "okx-growth-home",
                            to: A,
                            label: (0,
                            P.O4)("ok_game_okxracer_home")
                        })
                    }), (0,
                    b.jsx)(jt, {
                        iconName: "okx-growth-leaderboard",
                        to: U,
                        label: (0,
                        P.O4)("ok_game_okxracer_leaderboard"),
                        onClick: ()=>{
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
                    b.jsx)(jt, {
                        iconName: "okx-growth-task",
                        to: M,
                        label: (0,
                        P.O4)("ok_game_okxracer_tasks"),
                        onClick: ()=>{
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
                    b.jsx)(jt, {
                        iconName: "okx-growth-friends",
                        to: F,
                        label: (0,
                        P.O4)("ok_game_okxracer_friends"),
                        onClick: ()=>{
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
                    b.jsx)(jt, {
                        iconName: "okx-growth-surprises",
                        to: D,
                        label: (0,
                        P.O4)("ok_game_okxracer_surprises")
                    })]
                })
            }
            ;
            var wt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Ct = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Nt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , yt = "/help/okx-racer-terms-and-conditions"
              , Ot = ()=>"".concat(o.Z.cdnBaseUrl, "/cdn/assets/files/247/E8722761C0AB6781.json");
            function Pt(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function Zt() {
                return window.location != window.parent.location
            }
            const Tt = "RiskControl_title__h9Z0T";
            var Et = ()=>{
                var e = Fe()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                b.jsx)(Ve, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    b.jsx)("div", {
                        className: Tt,
                        children: (0,
                        P.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , St = n(8031);
            var It = new class {
                constructor() {
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
                    this.initConnect = ()=>{
                        this.connection.onSocketConnected((()=>{
                            this.onConnected()
                        }
                        )),
                        this.connection.connect(),
                        this.addPageHideEvent()
                    }
                    ,
                    this.onConnected = ()=>{
                        this.connection.sendChannel(JSON.stringify(this.channelSubscribe)),
                        this.connection.setPushDataResolver(this.onResolve)
                    }
                    ,
                    this.onResolve = e=>{
                        var t = e.arg
                          , n = e.data;
                        if (t.channel === this.channel && t.instId === this.instId) {
                            var a = ((null === n || void 0 === n ? void 0 : n[0]) || {}).last;
                            a && this.handleList.forEach((e=>{
                                e(Number(a))
                            }
                            ))
                        }
                    }
                    ,
                    this.disconnect = ()=>{
                        this.connection.disconnect()
                    }
                    ,
                    this.addCallback = e=>{
                        this.handleList.push(e)
                    }
                    ,
                    this.connection = new St.Z({
                        connectUrl: "wss://wspri.okx.com:8443/ws/v5/ipublic"
                    }),
                    this.initConnect()
                }
                addPageHideEvent() {
                    window.addEventListener("visibilitychange", (()=>{
                        document.hidden ? this.disconnect() : (this.connection.onSocketConnected(this.onConnected),
                        this.connection.connect())
                    }
                    ))
                }
            }
              , Rt = (0,
            a.createContext)(It)
              , Lt = e=>{
                var t = e.children;
                return (0,
                b.jsx)(Rt.Provider, {
                    value: It,
                    children: t
                })
            }
              , Bt = (0,
            a.createContext)(null)
              , At = ()=>(0,
            a.useContext)(Bt)
              , Ft = e=>{
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
                a.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                b.jsx)(Bt.Provider, {
                    value: s,
                    children: t
                })
            }
              , Mt = n(46430)
              , Wt = "racer"
              , Ut = ()=>{
                var e;
                if (!(0,
                q.y)())
                    return Mt.Z.getInstance(Wt) || Mt.Z.init({
                        project: Wt
                    }),
                    null !== (e = Mt.Z.getInstance(Wt)) && void 0 !== e ? e : Mt.Z
            }
              , Dt = "guessRecords_new";
            function Vt(e) {
                var t = Ut().get(Dt) || [];
                t.unshift(e),
                Ut().set(Dt, t.slice(0, 5))
            }
            var Gt = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Ht = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: Gt.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Gt.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Kt = (0,
            a.createContext)(Ht)
              , Yt = ()=>(0,
            a.useContext)(Kt)
              , Xt = e=>{
                var t = e.children
                  , n = L().uid
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
                  , h = (0,
                a.useState)(null)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                a.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , w = k[1]
                  , C = (0,
                a.useState)(Gt.NONE)
                  , N = (0,
                u.Z)(C, 2)
                  , y = N[0]
                  , O = N[1]
                  , Z = At()
                  , T = Fe().updateGameInfo
                  , S = (0,
                a.useRef)(Gt.NONE)
                  , I = (0,
                a.useRef)(1)
                  , R = (0,
                a.useRef)(10)
                  , B = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , F = (0,
                a.useRef)(null)
                  , M = (0,
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
                                t = S.current === Gt.UP ? 1 : 0,
                                e.next = 4,
                                be({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (a = n.data) && (w(a.won),
                                T({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                I.current = a.multiplier,
                                R.current = a.basePoint,
                                B.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                F.current = a.currentPrice,
                                Vt({
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
                                w(null),
                                B.current = null,
                                z(!1, (0,
                                P.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                S.current = Gt.NONE,
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
                a.useEffect)((()=>{
                    var e = null;
                    if (i) {
                        var t = 5;
                        p(t),
                        e = setInterval((()=>{
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            f(null),
                            M())
                        }
                        ), 1e3)
                    }
                    return ()=>{
                        e && clearTimeout(e)
                    }
                }
                ), [M, i]),
                (0,
                a.useEffect)((()=>{
                    if (i && Z)
                        if (v) {
                            var e = Z > v;
                            O(Z === v ? Gt.NONE : e ? Gt.UP : Gt.DOWN)
                        } else
                            f(Z)
                }
                ), [v, i, Z]);
                var W = (0,
                a.useCallback)((e=>{
                    w(null),
                    o(!0),
                    S.current = e,
                    B.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === Gt.UP && function() {
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
                    e === Gt.DOWN && function() {
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
                a.useMemo)((()=>({
                    countdown: m,
                    onButtonClick: W,
                    result: j,
                    isPending: i,
                    currentTrend: y,
                    multiplier: I.current,
                    basePoints: R.current,
                    predict: S.current,
                    changeRate: B.current,
                    prevPrice: A.current,
                    currentPrice: F.current
                })), [m, y, i, I, W, j]);
                return (0,
                b.jsx)(Kt.Provider, {
                    value: U,
                    children: t
                })
            }
              , zt = n(94595)
              , Jt = n(96450)
              , qt = 2e3
              , Qt = 500;
            function $t(e) {
                return (Math.abs(e) < 1e-4 ? Jt.yx.ceilTruncate : Jt.yx.floorTruncate)(e, 4)
            }
            const en = "GuessResult_container__ECdpL"
              , tn = "GuessResult_title__fzYxg"
              , nn = "GuessResult_multiplier__yRHWm"
              , an = "GuessResult_description__R2fup"
              , rn = "GuessResult_detailsIcon__ZE7Ry"
              , sn = "GuessResult_changeRateContainer__a5-N7"
              , on = "GuessResult_label__+b5Nz"
              , cn = "GuessResult_changeRate__yhVz3"
              , ln = "GuessResult_up__5vYDR"
              , un = "GuessResult_down__fa-oP"
              , dn = "GuessResult_priceChange__xr6e8"
              , _n = "GuessResult_price__Vk+bY";
            function mn(e) {
                return (0,
                zt.xG)((0,
                zt.uf)(Jt.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var pn = e=>{
                var t = e.className
                  , n = Yt()
                  , r = n.result
                  , s = n.multiplier
                  , i = n.changeRate
                  , o = n.prevPrice
                  , c = n.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , m = d[1];
                return (0,
                a.useEffect)((()=>{
                    var e, t;
                    if (null !== r) {
                        var n, a, s, i;
                        if (null !== (n = window) && void 0 !== n && null !== (a = n.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, r ? "success" : "error");
                        e = setTimeout((()=>{
                            m(!0),
                            t = setTimeout((()=>{
                                m(!1)
                            }
                            ), qt)
                        }
                        ), Qt)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                b.jsx)(b.Fragment, {
                    children: _ && (0,
                    b.jsxs)("div", {
                        className: O()(t, en),
                        children: [(0,
                        b.jsx)("p", {
                            className: nn,
                            children: r ? (0,
                            b.jsxs)("span", {
                                className: rn,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: rn,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: tn,
                            children: (0,
                            P.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: an,
                            children: [null !== i && (0,
                            b.jsxs)("p", {
                                className: sn,
                                children: [(0,
                                b.jsx)("span", {
                                    className: on,
                                    children: (0,
                                    P.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: O()(cn, {
                                        [ln]: i > 0,
                                        [un]: i < 0
                                    }),
                                    children: (0,
                                    zt.uf)($t(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            b.jsx)("p", {
                                className: dn,
                                children: (0,
                                P.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: _n,
                                        children: mn(o)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: _n,
                                        children: mn(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            const hn = "AutoPilot_title__NJa0C"
              , xn = "AutoPilot_button__Sg42v";
            var vn = ()=>{
                var e = Fe()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                b.jsxs)(Ve, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    b.jsx)("div", {
                        className: hn,
                        children: (0,
                        P.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            zt.uf)(n)
                        })
                    }), (0,
                    b.jsx)(Ke, {
                        className: xn,
                        onClick: a,
                        text: (0,
                        P.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
            ;
            const fn = "BackgroundVideo_container__J5sO2"
              , gn = "BackgroundVideo_muteButton__04Huj"
              , kn = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , jn = "BackgroundVideo_staticImage__EpRTb"
              , bn = "BackgroundVideo_hide__ZXYN9";
            var wn, Cn, Nn, yn, On, Pn, Zn = "backgroundVideoSoundOn", Tn = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", En = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Sn = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], In = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Tn)
            }, Rn = ()=>{
                var e = Yt().isPending
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
                  , h = (0,
                u.Z)(p, 2)
                  , x = h[0]
                  , v = h[1]
                  , f = Ut()
                  , g = (0,
                a.useState)((()=>{
                    var e = f.get(Zn);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
                (0,
                a.useEffect)((()=>{
                    t.current && (e && (v(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((()=>{
                        c(!0)
                    }
                    )).catch((()=>{
                        c(!1)
                    }
                    ))),
                    t.current.onended = ()=>{
                        var e;
                        v(!0),
                        null === (e = n.current) || void 0 === e || e.play().then((()=>{
                            m(!0)
                        }
                        )).catch((()=>{
                            m(!1)
                        }
                        ))
                    }
                    )
                }
                ), [e]);
                var N = !i && !_
                  , y = i && x && _
                  , P = i && (!x || !_);
                return (0,
                b.jsxs)("div", {
                    className: fn,
                    children: [(0,
                    b.jsx)(H.default, {
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.quaternary,
                        size: H.default.SIZE.md,
                        className: gn,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(f.set(Zn, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        b.jsx)(Z.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: kn
                        })
                    }), (0,
                    b.jsx)(K.Z, {
                        className: O()(jn, {
                            [bn]: !N
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Tn)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, In), {}, {
                        className: O()({
                            [bn]: !y
                        }),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: En.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, In), {}, {
                        className: O()({
                            [bn]: !P
                        }),
                        ref: t,
                        muted: w,
                        children: Sn.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , Ln = ["title", "titleId"];
            function Bn() {
                return Bn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Bn.apply(this, arguments)
            }
            function An(e, t) {
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
            function Fn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = An(e, Ln);
                return a.createElement("svg", Bn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, wn || (wn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Cn || (Cn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Nn || (Nn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), yn || (yn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), On || (On = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Pn || (Pn = a.createElement("defs", null, a.createElement("filter", {
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
            var Mn = a.forwardRef(Fn);
            n.p;
            var Wn, Un, Dn, Vn, Gn, Hn, Kn = ["title", "titleId"];
            function Yn() {
                return Yn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Yn.apply(this, arguments)
            }
            function Xn(e, t) {
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
            function zn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Xn(e, Kn);
                return a.createElement("svg", Yn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Wn || (Wn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Un || (Un = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Dn || (Dn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), Vn || (Vn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), Gn || (Gn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), Hn || (Hn = a.createElement("defs", null, a.createElement("filter", {
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
            var Jn = a.forwardRef(zn);
            n.p;
            const qn = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var Qn, $n = e=>{
                var t = e.className
                  , n = Yt()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = Fe().numChances
                  , c = (0,
                a.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                a.useEffect)((()=>{
                    var e;
                    return s || (e = setTimeout((()=>{
                        _(void 0)
                    }
                    ), 2500)),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var m = e=>{
                    var t, n, a;
                    s || d || (_(e === Gt.UP ? Gt.DOWN : Gt.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = o <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: O()(qn.instructions, s && qn.hide),
                        children: (0,
                        P.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: qn.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: p || d === Gt.UP,
                            onClick: ()=>m(Gt.UP),
                            type: "button",
                            className: O()(qn.btn, qn.upBtn, {
                                [qn.pressed]: i === Gt.UP
                            }),
                            children: [(0,
                            b.jsx)(Jn, {
                                className: O()(qn.btnGraphic, qn.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: qn.btnText,
                                children: [(0,
                                P.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(Z.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: qn.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: p || d === Gt.DOWN,
                            onClick: ()=>m(Gt.DOWN),
                            type: "button",
                            className: O()(qn.btn, qn.downBtn, {
                                [qn.pressed]: i === Gt.DOWN
                            }),
                            children: [(0,
                            b.jsx)(Mn, {
                                className: O()(qn.btnGraphic, qn.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: qn.btnText,
                                children: [(0,
                                P.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(Z.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: qn.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , ea = ["title", "titleId"];
            function ta() {
                return ta = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                ta.apply(this, arguments)
            }
            function na(e, t) {
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
            function aa(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = na(e, ea);
                return a.createElement("svg", ta({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Qn || (Qn = a.createElement("g", {
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
            var ra = a.forwardRef(aa);
            n.p;
            var sa = n(48275);
            const ia = "FuelIndicator_fuelContainer__QIskL"
              , oa = "FuelIndicator_toTasksIcon__Y7exC"
              , ca = "FuelIndicator_line__tWBfm"
              , la = "FuelIndicator_description__EaUsa"
              , ua = "FuelIndicator_fuelIcon__I38Ss"
              , da = "FuelIndicator_maxChances__OMSHl"
              , _a = "FuelIndicator_earnPtsMsg__PjtcT";
            var ma, pa, ha = e=>{
                var t = e.className
                  , n = Fe()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: O()(t, ia),
                    children: [(0,
                    b.jsx)("span", {
                        className: ua,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    b.jsx)(sa.Z.Line, {
                        className: ca,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    b.jsx)(kt, {
                        to: M,
                        className: _a,
                        children: (0,
                        P.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: la,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: da,
                                children: r
                            })]
                        })]
                    }), (0,
                    b.jsx)(kt, {
                        to: M,
                        children: (0,
                        b.jsx)(Z.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: oa
                        })
                    })]
                })
            }
            , xa = ["title", "titleId"];
            function va() {
                return va = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                va.apply(this, arguments)
            }
            function fa(e, t) {
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
            function ga(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = fa(e, xa);
                return a.createElement("svg", va({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ma || (ma = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), pa || (pa = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var ka = a.forwardRef(ga);
            n.p;
            const ja = "RefuelTimer_container__wtALO"
              , ba = "RefuelTimer_description__sD+HM"
              , wa = "RefuelTimer_timer__LL1+c";
            var Ca = e=>{
                var t = e.className
                  , n = Fe().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: O()(t, ja),
                    children: [(0,
                    b.jsx)(ka, {}), (0,
                    b.jsx)("p", {
                        className: ba,
                        children: (0,
                        P.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: wa,
                                children: n
                            })
                        })
                    })]
                })
            }
            ;
            const Na = "CoinPrice_raceTrack__NZO2t"
              , ya = "CoinPrice_run__f0UIF"
              , Oa = "CoinPrice_coinPriceContainer__YbeUE"
              , Pa = "CoinPrice_content__a-5Jl"
              , Za = "CoinPrice_fuelIndicator__p+f1I"
              , Ta = "CoinPrice_refuelTimer__tbWMw"
              , Ea = "CoinPrice_hide__bHhxJ"
              , Sa = "CoinPrice_label__yTNy0"
              , Ia = "CoinPrice_value__ZjRZz"
              , Ra = "CoinPrice_slotMachine__hUQKt"
              , La = "SlotMachine_row__a4TO0"
              , Ba = "SlotMachine_animate__-G4TR"
              , Aa = "SlotMachine_column__aR0VE"
              , Fa = "SlotMachine_arrows__m1dhv"
              , Ma = "SlotMachine_columnContainer__a76pd"
              , Wa = "SlotMachine_background__b9TMg"
              , Ua = "SlotMachine_slot__jwCvC"
              , Da = "SlotMachine_staticColumn__O5zfB"
              , Va = "SlotMachine_sm__ZRCig"
              , Ga = "SlotMachine_arrow__qOYmf"
              , Ha = "SlotMachine_wentUp__z48TO"
              , Ka = "SlotMachine_down__aYC8C"
              , Ya = "SlotMachine_stable__CDMLP"
              , Xa = "SlotMachine_wentDown__1fYUS"
              , za = "SlotMachine_up__IuiYV";
            var Ja = e=>{
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: Ma,
                    children: [(0,
                    b.jsx)("div", {
                        className: Wa
                    }), (0,
                    b.jsxs)("div", {
                        className: Aa,
                        style: r,
                        children: [(0,
                        b.jsx)("p", {
                            className: Ua,
                            children: a
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: Ua,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , qa = ()=>{
                var e = Yt()
                  , t = e.changeRate
                  , n = e.isPending
                  , r = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(r, 2)
                  , i = s[0]
                  , o = s[1]
                  , c = (0,
                a.useState)(null)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1]
                  , m = (0,
                a.useState)(!1)
                  , p = (0,
                u.Z)(m, 2)
                  , h = p[0]
                  , x = p[1];
                return (0,
                a.useEffect)((()=>{
                    n && x(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((()=>{
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? Gt.UP : 0 === e ? Gt.NONE : Gt.DOWN),
                    o(String(Math.abs(Number($t(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    x(!1)) : _(null)
                }
                ), [t]),
                (0,
                b.jsxs)("div", {
                    className: O()(La, h && Ba),
                    children: [(0,
                    b.jsx)("div", {
                        className: Ma,
                        children: (0,
                        b.jsxs)("div", {
                            className: O()(Fa, {
                                [Ha]: d === Gt.UP,
                                [Xa]: d === Gt.DOWN,
                                [Ya]: d === Gt.NONE
                            }),
                            children: [(0,
                            b.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: O()(Ga, za)
                            }), (0,
                            b.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: O()(Ga, Ya)
                            }), (0,
                            b.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: O()(Ga, Ka)
                            })]
                        })
                    }), (0,
                    b.jsx)(Ja, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: Da,
                        children: "."
                    }), (0,
                    b.jsx)(Ja, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(Ja, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)(Ja, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(Ja, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: O()(Da, Va),
                        children: "%"
                    })]
                })
            }
              , Qa = ()=>{
                var e = At()
                  , t = Yt()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = Fe().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                a.useEffect)((()=>{
                    n && l(!0)
                }
                ), [n]),
                (0,
                a.useEffect)((()=>{
                    var e, t = ()=>{
                        e && clearTimeout(e)
                    }
                    ;
                    return n || (null === r ? l(!1) : e = setTimeout((()=>{
                        l(!1)
                    }
                    ), Qt)),
                    t
                }
                ), [r, n]);
                var d = e ? "$".concat((0,
                zt.uf)(Jt.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !n;
                return (0,
                b.jsxs)("div", {
                    className: Oa,
                    children: [(0,
                    b.jsx)(ra, {
                        className: O()(Na, n && ya)
                    }), (0,
                    b.jsxs)("div", {
                        className: O()(Pa, c && Ea),
                        children: [(0,
                        b.jsx)("p", {
                            className: Sa,
                            children: (0,
                            P.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Ia,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: O()(Pa, !c && Ea),
                        children: [(0,
                        b.jsxs)("p", {
                            className: Sa,
                            children: [(0,
                            P.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Ra,
                            children: (0,
                            b.jsx)(qa, {})
                        })]
                    }), (0,
                    b.jsx)(ha, {
                        className: Za
                    }), (0,
                    b.jsx)("div", {
                        className: O()(Ta, !_ && Ea),
                        children: (0,
                        b.jsx)(Ca, {})
                    })]
                })
            }
            ;
            const $a = "LandingPage_container__pU2cC"
              , er = "LandingPage_resultOverlay__WSYZb"
              , tr = "LandingPage_disclaimer__pVRHC"
              , nr = "LandingPage_recordsBtnContainer__Anr4Y"
              , ar = "LandingPage_backgroundVideo__flTkH"
              , rr = "LandingPage_content__D0ZLW"
              , sr = "LandingPage_points__Ruq4j"
              , ir = "LandingPage_coinPrice__nJ0nj"
              , or = "LandingPage_btnContainer__IEll8"
              , cr = "LandingPage_termsAndConditions__MdClU";
            var lr = n(22387);
            const ur = "UserPointCounter_pointCounter__-QAj8"
              , dr = "UserPointCounter_hide__o4qTQ"
              , _r = "UserPointCounter_points__d3HeG"
              , mr = "UserPointCounter_title__B-gN-"
              , pr = "UserPointCounter_countdown__Z7xGo"
              , hr = "UserPointCounter_value__2a23E";
            var xr = ()=>{
                var e = Fe().points
                  , t = (0,
                lr.Z)(e)
                  , n = Yt()
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
                a.useEffect)((()=>{
                    var e;
                    return r ? d(!0) : e = setTimeout((()=>{
                        d(!1)
                    }
                    ), 2500),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [r]);
                var _ = (0,
                a.useCallback)(((e,t,n)=>{
                    e <= t && (n((0,
                    zt.uf)(String(e))),
                    requestAnimationFrame((()=>{
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
                a.useEffect)((()=>{
                    var n;
                    if (t === e)
                        return ()=>{}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (n = i.current) || void 0 === n ? void 0 : n.innerText) || !t)
                        return _(0, e, a),
                        ()=>{}
                        ;
                    var r = setTimeout((()=>{
                        _(t || 0, e, a)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(r)
                    }
                }
                ), [_, e, t]),
                (0,
                b.jsxs)("div", {
                    className: ur,
                    children: [(0,
                    b.jsxs)("p", {
                        className: O()(mr, l && dr),
                        children: ["\ud83c\udfc6 ", (0,
                        P.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: i,
                        className: O()(_r, l && dr),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: O()(pr, !l && dr),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: hr,
                            children: s
                        })]
                    })]
                })
            }
              , vr = function(e) {
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
              , fr = n(52008)
              , gr = n(52400)
              , kr = {
                Edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
                Chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge"
            }
              , jr = e=>{
                if (!window.okxTonWallet) {
                    var t, n, a = null === gr.X || void 0 === gr.X ? void 0 : gr.X.name;
                    return null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink(kr[a] || kr.Chrome),
                    Promise.reject(new Error("Please install the OKX Wallet plugin"))
                }
                return window.okxTonWallet.tonconnect.connect(2, {
                    manifestUrl: Ot(),
                    items: [{
                        name: "ton_addr"
                    }, {
                        name: "ton_proof",
                        payload: e
                    }]
                }).then((e=>{
                    var t, n = null === e || void 0 === e || null === (t = e.payload) || void 0 === t ? void 0 : t.items, a = n[0], r = a.publicKey, s = a.address, i = fr.Address.parse(s).toString({
                        urlSafe: !0,
                        bounceable: !1,
                        testOnly: !1
                    }), o = n[1].proof, c = o.domain, l = o.signature, u = o.payload, d = o.timestamp;
                    return {
                        tonAddress: i,
                        publicKey: r,
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
              , br = (e,t)=>{
                var n, a = new Promise((a=>{
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
                        var n, r, s, i, o, l, u, d, _, m, p, h, x, v;
                        return (0,
                        c.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n = e.wallet,
                                    s = (r = n).account,
                                    i = s.address,
                                    o = s.publicKey,
                                    l = r.connectItems,
                                    u = fr.Address.parse(i),
                                    d = u.toString({
                                        urlSafe: !0,
                                        bounceable: !1,
                                        testOnly: !1
                                    }),
                                    _ = l.tonProof,
                                    m = _.proof,
                                    p = m.signature,
                                    h = m.payload,
                                    x = m.domain,
                                    v = m.timestamp,
                                    a({
                                        tonAddress: d,
                                        publicKey: o,
                                        signature: p,
                                        msg: JSON.stringify({
                                            payload: h,
                                            domain: null === x || void 0 === x ? void 0 : x.value,
                                            timestamp: v
                                        })
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                )), r = new Promise(((e,t)=>{
                    var n = setTimeout((()=>{
                        clearTimeout(n),
                        t(new Error("Promise timed out"))
                    }
                    ), 6e4)
                }
                ));
                return {
                    promise: Promise.race([a, r]),
                    unsubscribe: ()=>n && n()
                }
            }
              , wr = function() {
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
                                    e.next = 23;
                                    break
                                }
                                if (e.prev = 1,
                                r = ()=>{}
                                ,
                                Zt()) {
                                    e.next = 13;
                                    break
                                }
                                return s = br(t, n),
                                i = s.promise,
                                o = s.unsubscribe,
                                e.next = 7,
                                i;
                            case 7:
                                a = e.sent,
                                r = o,
                                o(),
                                S({
                                    source: "app"
                                }),
                                e.next = 17;
                                break;
                            case 13:
                                return e.next = 15,
                                jr(n);
                            case 15:
                                a = e.sent,
                                S({
                                    source: "web"
                                });
                            case 17:
                                return e.abrupt("return", [a, r]);
                            case 20:
                                e.prev = 20,
                                e.t0 = e.catch(1),
                                e.t0 instanceof Error && X.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
            const Cr = "ViewWalletButton_button__WbNMO"
              , Nr = "ViewWalletButton_btnIcon__W5IFc";
            var yr = ()=>{
                var e = Fe()
                  , t = e.context
                  , n = e.updateGameInfoFromServer
                  , r = (0,
                d.dG)()
                  , s = (0,
                u.Z)(r, 1)[0]
                  , i = L().uid
                  , o = (0,
                a.useRef)((()=>{}
                ));
                (0,
                a.useEffect)((()=>()=>{
                    o.current && o.current()
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
                                    wr(s, i);
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
                                    Te(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([Oe(), n()]);
                                case 16:
                                    z(!0, (0,
                                    P.O4)("ok_game_okxracer_task_completion_msg")),
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
                    className: Cr,
                    type: "button",
                    onClick: _,
                    children: [(0,
                    b.jsx)(Z.Z, {
                        iconName: "okx-growth-wallet",
                        className: Nr
                    }), t.tonAddress ? vr(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    P.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , Or = ()=>{
                var e = L().uid;
                return (0,
                a.useEffect)((()=>{
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
                    className: $a,
                    children: [(0,
                    b.jsx)("div", {
                        className: nr,
                        children: (0,
                        b.jsx)(yr, {})
                    }), (0,
                    b.jsx)("div", {
                        className: ar,
                        children: (0,
                        b.jsx)(Rn, {})
                    }), (0,
                    b.jsxs)("div", {
                        className: rr,
                        children: [(0,
                        b.jsx)("div", {
                            className: sr,
                            children: (0,
                            b.jsx)(xr, {})
                        }), (0,
                        b.jsx)("div", {
                            className: ir,
                            children: (0,
                            b.jsx)(Qa, {})
                        }), (0,
                        b.jsx)($n, {
                            className: or
                        })]
                    }), (0,
                    b.jsx)("button", {
                        className: cr,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(yt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        P.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    b.jsx)("p", {
                        className: tr,
                        children: (0,
                        P.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    b.jsx)(pn, {
                        className: er
                    }), (0,
                    b.jsx)(vn, {}), (0,
                    b.jsx)(Et, {})]
                })
            }
              , Pr = ()=>(0,
            b.jsx)(Xt, {
                children: (0,
                b.jsx)(Or, {})
            })
              , Zr = n(24084)
              , Tr = n(58338);
            const Er = "PageTitle_title__IQ7TT";
            var Sr = e=>{
                var t = e.html;
                return (0,
                b.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Tr.dU)(t)
                    },
                    className: Er
                })
            }
            ;
            const Ir = "LeaderBoard_container__0DJSO"
              , Rr = "LeaderBoard_desc__MFxC+"
              , Lr = "LeaderBoard_inviteList__mV9a7"
              , Br = "LeaderBoard_tabActiveClassName__7Xv4B"
              , Ar = "LeaderBoard_tabsContent__KCGtW"
              , Fr = "LeaderBoard_recordButton__lXzAl"
              , Mr = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var Wr = e=>{
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: O()(Mr, t)
                })
            }
            ;
            const Ur = "InviteButton_invite-btn__aAMio"
              , Dr = "InviteButton_btn-a__At-wO"
              , Vr = "InviteButton_btn-container__sYDy5"
              , Gr = "InviteButton_copyButton__znucI"
              , Hr = "InviteButton_copyIcon__QZgE9";
            var Kr = e=>{
                var t = e.text
                  , n = void 0 === t ? (0,
                P.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = L().uid
                  , s = (e=>{
                    var t = new Y.Z
                      , n = (0,
                    P.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(wt.BOT_NAME, "/").concat(wt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(n)
                    }
                }
                )(Fe().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: O()(a, Vr),
                    children: [(0,
                    b.jsx)("a", {
                        className: Dr,
                        href: i,
                        children: (0,
                        b.jsx)(Ke, {
                            onClick: ()=>{
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
                                    telegramid: r
                                })
                            }
                            ,
                            className: Ur,
                            text: n
                        })
                    }), (0,
                    b.jsx)(H.default, {
                        strictCircle: !0,
                        category: H.default.CATEGORY.fill,
                        type: H.default.TYPE.primary,
                        size: H.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(o),
                                z(!0, (0,
                                P.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                z(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: Gr,
                        children: (0,
                        b.jsx)(Z.Z, {
                            iconName: "okx-growth-copy",
                            className: Hr
                        })
                    })]
                })
            }
            ;
            const Yr = "RankList_listItem__qJvXJ"
              , Xr = "RankList_name__sxTWa"
              , zr = "RankList_mask__ldBi8"
              , Jr = "RankList_hightLightRow__xYkeg"
              , qr = "RankList_listHeader__KVGnw"
              , Qr = "RankList_rank__k2m5R"
              , $r = "RankList_icon__1-SRV"
              , es = "RankList_point__D5mVw"
              , ts = "RankList_pointIcon__k80Wy"
              , ns = "RankList_InviteButton__D6ute"
              , as = "RankList_noFirendsNote__Ckkil"
              , rs = "RankList_under__MJ5We"
              , ss = "RankList_rankItemPlaceholder__z-upW"
              , is = "RankList_rank-name__YEqnc"
              , os = "RankList_rank-score__gtI+m";
            var cs = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , ls = 1
              , us = 2
              , ds = e=>{
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: qr,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        P.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            zt.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        P.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , _s = ()=>(0,
            b.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                b.jsxs)("div", {
                    className: ss,
                    children: [(0,
                    b.jsx)(Wr, {
                        className: is
                    }), (0,
                    b.jsx)(Wr, {
                        className: os
                    })]
                }, t)))
            })
              , ms = e=>{
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: O()(Yr, n && Jr),
                    children: [(0,
                    b.jsx)("div", {
                        className: zr
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: O()(Qr, $r),
                        children: cs[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: Qr,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: Xr,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: es,
                        children: [(0,
                        b.jsx)("span", {
                            className: ts,
                            children: cs[4]
                        }), (0,
                        P.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            zt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , ps = e=>{
                var t = e.pageType
                  , n = void 0 === t ? ls : t
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
                  , h = (0,
                a.useState)(0)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                a.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , w = k[1]
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
                                    n !== ls) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Ce(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Ne(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (r = e.t0) && r.rows && (p(r.rows),
                                    f(r.total),
                                    w(r.userRanking)),
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
                  , N = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                a.useEffect)((()=>{
                    C(1)
                }
                ), [C]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(ds, {
                        total: v
                    }), i ? (0,
                    b.jsx)(_s, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [N && (0,
                        b.jsx)(ms, {
                            item: j,
                            isHighlight: !0
                        }), m.map(((e,t)=>(0,
                        b.jsx)(ms, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    b.jsx)("div", {
                        className: rs
                    }), n === ls && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === m.length && (0,
                        b.jsx)("div", {
                            className: as,
                            children: (0,
                            P.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        b.jsx)(Kr, {
                            className: ns,
                            text: (0,
                            P.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
            ;
            const hs = "ViewRecordsButton_button__foNmQ"
              , xs = "ViewRecordsButton_btnIcon__2U0Xs"
              , vs = "ViewRecordsButton_title__XwRxi"
              , fs = "ViewRecordsButton_container__KMBl3"
              , gs = "ViewRecordsButton_recordContainer__H0HG0"
              , ks = "ViewRecordsButton_recordField__ntg1u"
              , js = "ViewRecordsButton_label__VInMo"
              , bs = "ViewRecordsButton_value__YdAbG"
              , ws = "ViewRecordsButton_trendIcon__OAhpt"
              , Cs = "ViewRecordsButton_up__lVPFv"
              , Ns = "ViewRecordsButton_down__z9X8U"
              , ys = "ViewRecordsButton_timestamp__1KFJL"
              , Os = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , Ps = "ViewRecordsButton_description__2QLs8";
            var Zs = e=>{
                var t = e.label
                  , n = e.value;
                return (0,
                b.jsxs)("div", {
                    className: ks,
                    children: [(0,
                    b.jsx)("p", {
                        className: js,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: bs,
                        children: n
                    })]
                })
            }
              , Ts = ()=>(0,
            b.jsxs)("button", {
                className: hs,
                type: "button",
                onClick: ()=>{
                    var e = Ut().get(Dt) || []
                      , t = (0,
                    b.jsx)(b.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , n = "ok_game_okxracer_moon"
                              , a = Cs
                              , r = "okx-growth-trending-up";
                            return t || (n = "ok_game_okxracer_doom",
                            a = Ns,
                            r = "okx-growth-trending-down"),
                            (0,
                            b.jsxs)("div", {
                                className: gs,
                                children: [(0,
                                b.jsx)(Zs, {
                                    label: (0,
                                    P.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    b.jsxs)(b.Fragment, {
                                        children: [(0,
                                        P.O4)(n), (0,
                                        b.jsx)(Z.Z, {
                                            className: O()(ws, a),
                                            iconName: r
                                        })]
                                    })
                                }), (0,
                                b.jsx)(Zs, {
                                    label: "Result",
                                    value: (0,
                                    P.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                b.jsx)(Zs, {
                                    label: (0,
                                    P.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                b.jsx)("p", {
                                    className: ys,
                                    children: (0,
                                    zt.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        b.jsxs)("div", {
                            className: Os,
                            children: [(0,
                            b.jsx)("p", {
                                className: vs,
                                children: (0,
                                P.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            b.jsx)("p", {
                                className: Ps,
                                children: (0,
                                P.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = We.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, De), {}, {
                            topContent: e.title ? void 0 : (0,
                            b.jsx)("div", {
                                className: Ue.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        b.jsx)("span", {
                            className: vs,
                            children: (0,
                            P.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: fs,
                        children: t
                    })
                }
                ,
                children: [(0,
                P.O4)("ok_game_okxracer_my_records"), (0,
                b.jsx)(Z.Z, {
                    iconName: "okx-growth-chevrons",
                    className: xs
                })]
            })
              , Es = ()=>(0,
            b.jsxs)("div", {
                className: Ir,
                children: [(0,
                b.jsx)(Sr, {
                    html: (0,
                    P.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        P.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                b.jsx)("div", {
                    className: Rr,
                    children: (0,
                    P.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                b.jsx)("div", {
                    className: Fr,
                    children: (0,
                    b.jsx)(Ts, {})
                }), (0,
                b.jsxs)(Zr.Z, {
                    activeClassName: Br,
                    noPadding: !0,
                    size: Zr.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    b.jsx)(Zr.Z.TabPane, {
                        tab: (0,
                        P.O4)("ok_game_okxracer_friends2"),
                        id: ls,
                        className: Ar,
                        children: (0,
                        b.jsx)("div", {
                            className: Lr,
                            children: (0,
                            b.jsx)(ps, {
                                pageType: ls
                            })
                        })
                    }), (0,
                    b.jsx)(Zr.Z.TabPane, {
                        className: Ar,
                        tab: (0,
                        P.O4)("ok_game_okxracer_global"),
                        id: us,
                        children: (0,
                        b.jsx)("div", {
                            className: Lr,
                            children: (0,
                            b.jsx)(ps, {
                                pageType: us
                            })
                        })
                    })]
                })]
            });
            const Ss = "QrCode_container__r4Fu7"
              , Is = "QrCode_qrCode__16PWa"
              , Rs = "QrCode_title__+cibb"
              , Ls = "QrCode_message__eaOzW";
            var Bs = ()=>(0,
            b.jsxs)("div", {
                className: Ss,
                children: [(0,
                b.jsx)(K.Z, {
                    className: Is,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                b.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Tr.dU)((0,
                        P.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Rs
                }), (0,
                b.jsx)("p", {
                    className: Ls,
                    children: (0,
                    P.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , As = n(90534);
            const Fs = "PullupList_loading__+51Dh"
              , Ms = "PullupList_listLoadItem__XcvkH"
              , Ws = "PullupList_listLeft__4eGh6"
              , Us = "PullupList_listRight__w7Ely"
              , Ds = "PullupList_listLoading__whJeg";
            var Vs = ()=>(0,
            b.jsxs)("div", {
                className: O()(Ms),
                children: [(0,
                b.jsx)(Wr, {
                    className: Ws
                }), (0,
                b.jsx)(Wr, {
                    className: Us
                })]
            })
              , Gs = ()=>(0,
            b.jsx)("div", {
                className: Ds,
                children: Array(3).fill(null).map(((e,t)=>(0,
                b.jsx)(Vs, {}, t)))
            })
              , Hs = e=>{
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
                  , h = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , x = (0,
                a.useRef)(null)
                  , v = (0,
                a.useState)(!1)
                  , f = (0,
                u.Z)(v, 2)
                  , g = f[0]
                  , k = f[1]
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
                                    if (-1 === h.current.total || !(i.length >= h.current.total || !0 === h.current.stop)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return p(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(h.current.page, h.current.total);
                                case 6:
                                    (n = e.sent) && n.rows ? (h.current.page += 1,
                                    o((e=>[...e, ...n.rows])),
                                    h.current.total = 0 === n.rows.length ? i.length : n.total) : h.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    h.current.stop = !0;
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
                As.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = e=>{
                    e[0].isIntersecting && !m && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                a.useEffect)((()=>{
                    var e = new IntersectionObserver(C,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return x.current && e.observe(x.current),
                    ()=>{
                        x.current && e.unobserve(x.current)
                    }
                }
                ), [m]),
                (0,
                a.useEffect)((()=>{
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [i.map(((e,t)=>n(e, t))), (0,
                    b.jsx)("div", {
                        className: Fs,
                        ref: x,
                        children: m && (0,
                        b.jsx)(Gs, {})
                    })]
                })
            }
            ;
            const Ks = "InviteList_listItem__q4jhG"
              , Ys = "InviteList_name__LLQgt"
              , Xs = "InviteList_point__kXtCn"
              , zs = "InviteList_earnedPrice__4vAfw"
              , Js = "InviteList_pointNumber__v4P1H";
            var qs = ()=>{
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
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: zs,
                        children: (0,
                        P.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: Js,
                                children: (0,
                                P.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    zt.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(Hs, {
                        loadData: s,
                        children: (e,t)=>(0,
                        b.jsxs)("div", {
                            className: Ks,
                            children: [(0,
                            b.jsx)("div", {
                                className: Ys,
                                children: e.extInviteeName
                            }), (0,
                            b.jsx)("div", {
                                className: Xs,
                                children: (0,
                                P.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    zt.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const Qs = "ReferralsPage_container__V48m1"
              , $s = "ReferralsPage_inviteDetail__L1MhM"
              , ei = "ReferralsPage_detailItem__ujOp+"
              , ti = "ReferralsPage_dot__zKW7L"
              , ni = "ReferralsPage_detailTitle__OE657"
              , ai = "ReferralsPage_detailInfo__YC+Y9"
              , ri = "ReferralsPage_inviteList__Jksx8";
            var si, ii, oi, ci, li, ui, di, _i, mi = ()=>{
                var e = L().uid
                  , t = [{
                    title: (0,
                    P.O4)("ok_game_okxracer_refer_your_friends"),
                    detailInfo: (0,
                    P.O4)("ok_game_okxracer_refer_rewards")
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_get_bonus"),
                    detailInfo: (0,
                    P.O4)("ok_game_okxracer_refer_hint")
                }];
                return (0,
                a.useEffect)((()=>{
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
                    className: Qs,
                    children: [(0,
                    b.jsx)(Sr, {
                        html: "".concat((0,
                        P.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        P.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    b.jsx)("div", {
                        className: $s,
                        children: t.map((e=>(0,
                        b.jsxs)("div", {
                            className: ei,
                            children: [(0,
                            b.jsx)("div", {
                                className: ti
                            }), (0,
                            b.jsx)("div", {
                                className: ni,
                                children: e.title
                            }), (0,
                            b.jsx)("div", {
                                className: ai,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    b.jsx)("div", {
                        className: ri,
                        children: (0,
                        b.jsx)(qs, {})
                    }), (0,
                    b.jsx)(Kr, {})]
                })
            }
            , pi = ["title", "titleId"];
            function hi() {
                return hi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                hi.apply(this, arguments)
            }
            function xi(e, t) {
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
            function vi(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = xi(e, pi);
                return a.createElement("svg", hi({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, si || (si = a.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ii || (ii = a.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), oi || (oi = a.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ci || (ci = a.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), li || (li = a.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ui || (ui = a.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), di || (di = a.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), _i || (_i = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_dd_888_7961",
                    x: 22.7336,
                    y: 26.6704,
                    width: 43.0309,
                    height: 34.1671,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", null), a.createElement("feGaussianBlur", {
                    stdDeviation: 2.75
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_888_7961"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", null), a.createElement("feGaussianBlur", {
                    stdDeviation: 3.76406
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect1_dropShadow_888_7961",
                    result: "effect2_dropShadow_888_7961"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_888_7961",
                    result: "shape"
                })))))
            }
            var fi = a.forwardRef(vi);
            n.p;
            const gi = "index_container__DxcAz"
              , ki = "index_logo__h1T0A"
              , ji = "index_tlt__dqJHn"
              , bi = "index_subtlt__m3p5l";
            var wi = ()=>(0,
            b.jsxs)("div", {
                className: gi,
                children: [(0,
                b.jsx)(fi, {
                    className: ki
                }), (0,
                b.jsx)("div", {
                    className: ji,
                    children: (0,
                    P.O4)("ok_game_okxracer_congratulations")
                }), (0,
                b.jsx)("div", {
                    className: bi,
                    children: (0,
                    P.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Ci = r().memo(wi);
            var Ni, yi = ["title", "titleId"];
            function Oi() {
                return Oi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Oi.apply(this, arguments)
            }
            function Pi(e, t) {
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
            function Zi(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Pi(e, yi);
                return a.createElement("svg", Oi({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ni || (Ni = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Ti = a.forwardRef(Zi);
            n.p;
            var Ei, Si = ["title", "titleId"];
            function Ii() {
                return Ii = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ii.apply(this, arguments)
            }
            function Ri(e, t) {
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
            function Li(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Ri(e, Si);
                return a.createElement("svg", Ii({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ei || (Ei = a.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Bi = a.forwardRef(Li);
            n.p;
            var Ai, Fi = ["title", "titleId"];
            function Mi() {
                return Mi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Mi.apply(this, arguments)
            }
            function Wi(e, t) {
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
            function Ui(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Wi(e, Fi);
                return a.createElement("svg", Mi({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ai || (Ai = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Di = a.forwardRef(Ui);
            n.p;
            var Vi = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Gi = e=>{
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            }
            ;
            function Hi(e) {
                var t = [{
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Vi.SIGNUP,
                    status: Gi(Vi.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_install"),
                    type: Vi.INSTALL,
                    status: Gi(Vi.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Vi.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Vi.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var Ki = e=>{
                var t = (0,
                a.useState)(Hi(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = L().uid;
                (0,
                a.useEffect)((()=>{
                    s(Hi(e))
                }
                ), [e]);
                var o = (0,
                a.useCallback)((t=>{
                    var n, a, o = r.find((e=>e.type === t));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(o.url),
                        t) {
                        case Vi.SIGNUP:
                        case Vi.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Hi(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case Vi.SIGNUP:
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
                        case Vi.INSTALL:
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
                        case Vi.CONNECT:
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
                        case Vi.KYC:
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
                ), [r, e]);
                return {
                    list: r,
                    handleClick: o
                }
            }
            ;
            const Yi = "index_container__ZAgXf"
              , Xi = "index_container_avatar__HvLrA"
              , zi = "index_container_task__OmqjX"
              , Ji = "index_task_tlt__pIkV2"
              , qi = "index_tlt_sub__2aRiA"
              , Qi = "index_tlt_arrow__kdbln"
              , $i = "index_task_subtlt__mzIaE";
            var eo = e=>{
                var t = e.status
                  , n = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: Xi,
                    children: n ? (0,
                    b.jsx)(Di, {}) : (0,
                    b.jsx)(Bi, {})
                })
            }
              , to = e=>{
                var t = e.title
                  , n = e.subTitle
                  , a = e.type
                  , r = e.onClick
                  , s = e.status;
                return (0,
                b.jsxs)("div", {
                    className: zi,
                    onClick: ()=>{
                        r(a)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: Ji,
                        children: [(0,
                        b.jsx)(eo, {
                            status: s
                        }), " ", (0,
                        b.jsx)("div", {
                            className: qi,
                            children: t
                        }), (0,
                        b.jsx)(Ti, {
                            className: Qi
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: $i,
                        children: n
                    })]
                })
            }
            ;
            const no = e=>{
                var t = Ki(e)
                  , n = t.list
                  , a = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: Yi,
                    children: n.map((e=>(0,
                    b.jsx)(to, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: a
                    }), e.type)))
                })
            }
            ;
            var ao, ro, so, io = ["title", "titleId"];
            function oo() {
                return oo = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                oo.apply(this, arguments)
            }
            function co(e, t) {
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
            function lo(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = co(e, io);
                return a.createElement("svg", oo({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ao || (ao = a.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), ro || (ro = a.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), so || (so = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var uo = a.forwardRef(lo);
            n.p;
            const _o = "index_loader__kDy+9"
              , mo = "index_container__X8xX8"
              , po = "index_container_subtlt__LyYby"
              , ho = "index_container_info__c9KQP"
              , xo = "index_info_icon__i5uhI"
              , vo = "index_verifiedUsers__ByJWu"
              , fo = "index_avatars__q4nFz"
              , go = "index_usersCount__ZOUzI"
              , ko = "index_container_btn__rWex7"
              , jo = "index_tncContainer__McO06"
              , bo = "index_termsAndConditions__Gifk+";
            var wo = ()=>(0,
            b.jsx)(Ci, {})
              , Co = e=>{
                var t = e.totalVerifiedCount;
                return (0,
                b.jsxs)("div", {
                    className: mo,
                    children: [(0,
                    b.jsx)(Sr, {
                        html: (0,
                        P.O4)("ok_game_okxracer_title_verify_surprises")
                    }), (0,
                    b.jsx)("div", {
                        className: po,
                        children: (0,
                        P.O4)("ok_game_okxracer_text_complete_steps_eligible")
                    }), (0,
                    b.jsxs)("div", {
                        className: vo,
                        children: [(0,
                        b.jsx)("img", {
                            className: fo,
                            src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg"),
                            alt: ""
                        }), (0,
                        b.jsx)("span", {
                            className: go,
                            children: t > 0 ? (0,
                            zt.uf)(t) : "--"
                        }), (0,
                        P.O4)("ok_game_okxracer_text_racers_already_verified")]
                    }), (0,
                    b.jsx)(no, (0,
                    k.Z)({}, e)), (0,
                    b.jsxs)("div", {
                        className: ho,
                        children: [(0,
                        b.jsx)(uo, {
                            className: xo,
                            height: 16
                        }), (0,
                        P.O4)("ok_game_okxracer_surprises_verify_desc")]
                    }), (0,
                    b.jsx)(Ke, {
                        onClick: e.onClick,
                        className: ko,
                        text: (0,
                        P.O4)("ok_game_okxracer_surprises_verify")
                    }), (0,
                    b.jsx)("div", {
                        className: jo,
                        children: (0,
                        b.jsx)("button", {
                            className: bo,
                            onClick: ()=>{
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(yt)
                            }
                            ,
                            type: "button",
                            children: (0,
                            P.O4)("ok_game_okxracer_tnc")
                        })
                    })]
                })
            }
              , No = ()=>{
                var e = L().uid
                  , t = (0,
                a.useState)(!0)
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = (0,
                a.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP",
                    totalVerifiedCount: 0
                })
                  , o = (0,
                u.Z)(i, 2)
                  , d = o[0]
                  , _ = o[1]
                  , m = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, a, r, i = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] && i[0],
                                n = i.length > 1 ? i[1] : void 0,
                                e.prev = 2,
                                a = {
                                    isRecheckBinding: t
                                },
                                e.next = 6,
                                Ee(n, a);
                            case 6:
                                r = e.sent,
                                s(!1),
                                r && _(r),
                                !t || null !== r && void 0 !== r && r.isKyc && r.isConnectTelegram || z(!1, (0,
                                P.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(2),
                                z(!1, (0,
                                P.O4)("ok_game_okxracer_error_high_traffic"));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 12]])
                }
                ))), []);
                return (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || m()
                    }
                    return m(!1, !0),
                    document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [m]),
                (0,
                a.useEffect)((()=>{
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
                r ? (0,
                b.jsx)("div", {
                    className: _o,
                    children: (0,
                    b.jsx)(sa.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                b.jsx)(wo, {}) : (0,
                b.jsx)(Co, (0,
                k.Z)((0,
                k.Z)({}, d), {}, {
                    onClick: ()=>{
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
              , yo = n(40544)
              , Oo = n(74914)
              , Po = n(59257);
            const Zo = "index_taskItemPlaceholder__6HYF9"
              , To = "index_task__wcySb";
            var Eo = ()=>(0,
            b.jsx)(b.Fragment, {
                children: Array.from({
                    length: 2
                }).map(((e,t)=>(0,
                b.jsx)("div", {
                    className: O()(Zo),
                    children: (0,
                    b.jsx)(Wr, {
                        className: To
                    })
                }, t)))
            });
            const So = {
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
            var Io = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , Ro = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , Lo = e=>{
                var t = e.selectedTask
                  , n = e.uid
                  , s = e.onClick
                  , i = (0,
                d.dG)()
                  , _ = (0,
                u.Z)(i, 1)[0]
                  , m = (0,
                a.useRef)((()=>{}
                ))
                  , p = r().useState(!1)
                  , h = (0,
                u.Z)(p, 2)
                  , x = h[0]
                  , v = h[1];
                (0,
                a.useEffect)((()=>((null === t || void 0 === t ? void 0 : t.state) === Ct.finished ? E.act({
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
                ()=>{
                    m.current && m.current()
                }
                )), []);
                var f = function() {
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
                                    e.next = 3,
                                    wr(_, n);
                                case 3:
                                    if (!(a = e.sent)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (r = (0,
                                    u.Z)(a, 2),
                                    i = r[0],
                                    o = r[1],
                                    m.current = o,
                                    e.t0 = s,
                                    !e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 11,
                                    s(t, JSON.stringify((0,
                                    k.Z)({
                                        telegramId: n
                                    }, i)));
                                case 11:
                                    v(!1);
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
                    }), (null === t || void 0 === t ? void 0 : t.state) === Ct.finished && t.context.actionType === ye.WalletConnect ? (0,
                    b.jsxs)("div", {
                        className: So.sheetContainer,
                        children: [(0,
                        b.jsx)(K.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Ro),
                            className: So.sheeLogo
                        }), (0,
                        b.jsx)("div", {
                            className: So.sheetName,
                            children: t.context.nameFinished
                        }), (0,
                        b.jsxs)("div", {
                            className: So.sheetCopyBox,
                            children: [(0,
                            b.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            b.jsx)(Z.Z, {
                                className: "okx-growth-copy",
                                onClick: ()=>{
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === ye.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        z(!0, (0,
                                        P.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        z(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        b.jsx)(H.default, {
                            category: H.default.CATEGORY.fill,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: So.btn,
                            onClick: ()=>{
                                s()
                            }
                            ,
                            children: (0,
                            b.jsx)("div", {
                                className: So.btnTxt,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    b.jsxs)("div", {
                        className: So.sheetContainer,
                        children: [(0,
                        b.jsx)(K.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(Io),
                            className: So.sheeLogoCheck
                        }), (0,
                        b.jsx)("div", {
                            className: So.sheetName,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        b.jsx)("div", {
                            className: So.sheetDesc,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        b.jsx)(H.default, {
                            category: H.default.CATEGORY.fill,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.lg,
                            className: So.btn,
                            loading: x,
                            onClick: f,
                            children: (0,
                            b.jsx)("div", {
                                className: So.btnTxt,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            }
              , Bo = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , Ao = (0,
            a.createContext)({
                boosts: [],
                tasks: Bo,
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
                setSelectedPartner: ()=>{}
            })
              , Fo = ()=>(0,
            a.useContext)(Ao)
              , Mo = e=>{
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(Bo)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                a.useState)()
                  , h = (0,
                u.Z)(p, 2)
                  , x = h[0]
                  , v = h[1]
                  , f = Fe().updateGameInfoFromServer
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
                                Promise.allSettled([Oe(!0), Ze(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : Bo);
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
                                    Pe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Oe(), f()]);
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
                                    Te(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Ze(), f()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : Bo,
                                    m(d),
                                    x && (_ = d.taskGroups.find((e=>e.groupName === x.groupName))) && v(_)),
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
                a.useEffect)((()=>{
                    g()
                }
                ), [g]);
                var w = (0,
                a.useCallback)((e=>{
                    v(e)
                }
                ), []);
                return (0,
                b.jsx)(Ao.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: j,
                        partner: x,
                        setSelectedPartner: w
                    },
                    children: t
                })
            }
            ;
            const Wo = "index_task-item__JdIYG"
              , Uo = "index_title__hYmAn"
              , Do = "index_state__ddlCZ"
              , Vo = "index_item-left__BNG-l"
              , Go = "index_item-right__V+4iT"
              , Ho = "index_icon__yk0cJ"
              , Ko = "index_done__h9mLm";
            var Yo = e=>{
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context;
                return (0,
                b.jsxs)("div", {
                    className: Wo,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: Vo,
                        children: [(0,
                        b.jsx)("div", {
                            className: Uo,
                            children: i.name
                        }), (0,
                        b.jsx)("div", {
                            className: Do,
                            children: " ".concat(s === Ct.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            zt.uf)(r, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: Go,
                        children: s === Ct.finished ? (0,
                        b.jsx)("div", {
                            className: Ko,
                            children: (0,
                            P.O4)("ok_game_okxracer_done")
                        }) : (0,
                        b.jsx)(Z.Z, {
                            className: O()("okx-growth-chevrons-right", Ho)
                        })
                    })]
                }, a)
            }
            ;
            const Xo = "index_container__LfQHA"
              , zo = "index_sheet-container__7hIP5"
              , Jo = "index_sheet-name__+hUn6"
              , qo = "index_sheet-desc__Uh4Uk"
              , Qo = "index_btn__+6gr5";
            function $o(e) {
                var t = e.tasks
                  , n = e.className
                  , r = Fo().doTask
                  , s = (0,
                a.useState)()
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(_, 2)
                  , p = m[0]
                  , h = m[1]
                  , x = L().uid
                  , v = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var a, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 6;
                                        break
                                    }
                                    return t.context.actionType === ye.OpenLink && t.context.redirectLink && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || s.WebApp.openLink(t.context.redirectLink)),
                                    e.next = 4,
                                    r(t.id, n);
                                case 4:
                                    e.sent && z(!0, (0,
                                    P.O4)("ok_game_okxracer_task_completion_msg"));
                                case 6:
                                    h(!1);
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
                  , f = (0,
                As.Z)((e=>{
                    if (t.length > 0) {
                        var n = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === n || void 0 === n ? void 0 : n.context.actionType) !== ye.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === Ct.finished)
                            return;
                        d(n),
                        h(!0),
                        (null === n || void 0 === n ? void 0 : n.context.actionType) === ye.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === Ct.finished ? E.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : (null === n || void 0 === n ? void 0 : n.context.actionType) === ye.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) !== Ct.finished && E.act({
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
                As.Z)(v, {
                    wait: 500
                }).run
                  , k = {
                    [ye.WalletConnect]: ()=>(0,
                    b.jsx)(Lo, {
                        selectedTask: o,
                        onClick: (e,t)=>g(e, t),
                        uid: x
                    })
                };
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: O()(Xo, n),
                        children: t.length > 0 ? t.map((e=>(0,
                        b.jsx)(Yo, {
                            task: e,
                            onClick: f
                        }, e.id))) : (0,
                        b.jsx)(Eo, {})
                    }), o && (0,
                    b.jsx)(Ve, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: ()=>{
                            d(void 0),
                            h(!1)
                        }
                        ,
                        children: (()=>{
                            var e = k[o.context.actionType];
                            return e ? e() : (()=>{
                                var e = o.context
                                  , t = e.desc
                                  , n = e.btnText;
                                return (0,
                                b.jsxs)("div", {
                                    className: zo,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: Jo,
                                        children: e.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: qo,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Tr.dU)(t)
                                        }
                                    }), (0,
                                    b.jsx)(Ke, {
                                        className: Qo,
                                        onClick: ()=>g(o),
                                        text: n
                                    })]
                                })
                            }
                            )()
                        }
                        )()
                    })]
                })
            }
            const ec = {
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
            var tc = ()=>{
                var e = Fo().partner
                  , t = (0,
                s.useHistory)()
                  , n = t.replace
                  , r = t.goBack
                  , i = (0,
                s.useLocation)().hash;
                if ((0,
                a.useEffect)((()=>{
                    var t, a, s;
                    e ? null === (t = window.Telegram) || void 0 === t || null === (a = t.WebApp) || void 0 === a || null === (s = a.BackButton) || void 0 === s || s.show().onClick(r) : n(M + i);
                    return ()=>{
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
                  , h = e.participants;
                return (0,
                b.jsxs)("div", {
                    className: ec.container,
                    children: [(0,
                    b.jsxs)("div", {
                        className: ec.header,
                        children: [(0,
                        b.jsx)(Oo.Z, {
                            size: Po.Z.sm,
                            className: ec.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        b.jsx)("h1", {
                            className: ec.title,
                            children: _
                        })]
                    }), (0,
                    b.jsx)("p", {
                        className: ec.desc,
                        children: m
                    }), (0,
                    b.jsxs)("div", {
                        className: ec.status,
                        children: [(0,
                        b.jsxs)("div", {
                            className: ec.statusItem,
                            children: [(0,
                            b.jsx)("div", {
                                className: ec.statusTitle,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            b.jsx)("div", {
                                className: ec.statusValue,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    zt.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        b.jsxs)("div", {
                            className: ec.statusItem,
                            children: [(0,
                            b.jsx)("div", {
                                className: ec.statusTitle,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            b.jsxs)("div", {
                                className: ec.statusValue,
                                children: [(0,
                                b.jsx)(Z.Z, {
                                    className: O()("okx-growth-friends", ec.participantsIcon)
                                }), zt.ag.shortNumber(h, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: ec.tasks,
                        children: [(0,
                        b.jsxs)("div", {
                            className: ec.taskListHeader,
                            children: [(0,
                            b.jsx)("span", {
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            b.jsx)("span", {
                                className: ec.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    P.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(c, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        b.jsx)($o, {
                            tasks: u
                        })]
                    })]
                })
            }
            ;
            const nc = "Tag_tag__tkWly";
            var ac = e=>{
                var t = e.text
                  , n = e.className;
                return (0,
                b.jsx)("span", {
                    className: O()(nc, n),
                    children: t || (0,
                    P.O4)("commonall_tag_text_new")
                })
            }
              , rc = e=>(null === e || void 0 === e ? void 0 : e.type) === Nt.DailyBoost
              , sc = e=>"actionType"in e && e.actionType === ye.UnLock
              , ic = e=>{
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !rc(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                P.O4)("ok_game_okxracer_free") : "".concat((0,
                zt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const oc = "index_sheet__FbHHx"
              , cc = "index_sheet-icon__H2xCV"
              , lc = "index_boostSheetTag__NbYFf"
              , uc = "index_sheet-title__RInQ-"
              , dc = "index_sheet-desc__W9myB"
              , _c = "index_sheet-data__FALtV"
              , mc = "index_sheet-point__Xrsvs"
              , pc = "index_sheet-lvl__f1+W-"
              , hc = "index_lockBtnContainer__4DPO7"
              , xc = "index_btn__bxKiJ"
              , vc = "index_boost-data-split-point__TaGIo";
            var fc = e=>{
                var t = e.boost
                  , n = e.onClick
                  , a = t
                  , r = a.context
                  , s = a.curStage
                  , i = a.totalStage
                  , o = a.isLocked
                  , c = r.icon
                  , l = r.name
                  , u = r.desc
                  , d = r.btnText
                  , _ = sc(r)
                  , m = !1
                  , p = u
                  , h = d;
                return _ && (o ? (p = r.unlockDescription,
                h = r.unlockButtonText) : p = r.ruleDescription,
                s === i && (m = !0,
                h = r.activatedButtonText)),
                (0,
                b.jsxs)("div", {
                    className: oc,
                    children: [(0,
                    b.jsx)("div", {
                        className: cc,
                        children: c
                    }), _ && (0,
                    b.jsx)(ac, {
                        className: lc
                    }), (0,
                    b.jsx)("div", {
                        className: uc,
                        children: l
                    }), (0,
                    b.jsx)("div", {
                        className: dc,
                        children: p
                    }), (0,
                    b.jsxs)("div", {
                        className: _c,
                        children: [(0,
                        b.jsx)("span", {
                            className: mc,
                            children: ic(t)
                        }), (rc(t) || s < i) && (0,
                        b.jsx)("span", {
                            className: vc
                        }), (0,
                        b.jsx)("span", {
                            className: pc,
                            children: rc(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    b.jsx)(kt, {
                        to: D,
                        className: hc,
                        children: (0,
                        b.jsx)(Ke, {
                            text: h
                        })
                    }) : (0,
                    b.jsx)(Ke, {
                        onClick: ()=>{
                            n(t)
                        }
                        ,
                        className: xc,
                        text: h,
                        disabled: m
                    })]
                })
            }
            ;
            const gc = "index_boost-item__k6pnm"
              , kc = "index_boost-icon__wH6Dh"
              , jc = "index_boost-title__9R-Ry"
              , bc = "index_newTag__tgIea"
              , wc = "index_boost-desc__k1Big"
              , Cc = "index_boost-data__+0cnG"
              , Nc = "index_boost-data-split-point__moT+k"
              , yc = "index_boost-data-stage__8CAgC"
              , Oc = "index_boostItemPlaceholder__NaUkk"
              , Pc = "index_locked__sM-YP"
              , Zc = "index_unlockIcon__whxqz"
              , Tc = "index_unlockButton__C3EY5";
            var Ec = e=>{
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context;
                if (sc(s)) {
                    if (r)
                        return (0,
                        b.jsx)("div", {
                            className: Cc,
                            children: (0,
                            P.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === a)
                        return (0,
                        b.jsx)("div", {
                            className: Cc,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                b.jsxs)("div", {
                    className: Cc,
                    children: [(0,
                    b.jsx)("span", {
                        children: ic(t)
                    }), (rc(t) || n < a) && (0,
                    b.jsx)("span", {
                        className: Nc
                    }), (0,
                    b.jsx)("span", {
                        className: yc,
                        children: rc(t) ? "".concat(a - n, "/").concat(a) : "Lvl ".concat(n)
                    })]
                })
            }
              , Sc = e=>{
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.icon
                  , o = r.name
                  , c = r.desc
                  , l = sc(r);
                return (0,
                b.jsxs)("div", {
                    className: gc,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    b.jsx)("div", {
                        className: kc,
                        children: i
                    }), (0,
                    b.jsxs)("div", {
                        className: jc,
                        children: [o, l && (0,
                        b.jsx)(ac, {
                            className: bc
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: wc,
                        children: c
                    }), (0,
                    b.jsx)(Ec, {
                        boost: t
                    }), s && (0,
                    b.jsxs)("div", {
                        className: Pc,
                        children: [(0,
                        b.jsx)(Z.Z, {
                            className: O()("okx-growth-lock", Zc)
                        }), (0,
                        b.jsx)(H.default, {
                            category: H.default.CATEGORY.text,
                            type: H.default.TYPE.primary,
                            size: H.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: H.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: Tc,
                            children: (0,
                            P.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , Ic = ()=>(0,
            b.jsxs)("div", {
                className: O()(gc, Oc),
                children: [(0,
                b.jsx)(Wr, {
                    className: kc
                }), (0,
                b.jsx)(Wr, {
                    className: jc
                }), (0,
                b.jsx)(Wr, {
                    className: wc
                }), (0,
                b.jsx)(Wr, {
                    className: Cc
                })]
            });
            const Rc = "index_boost-item-container__SW62L"
              , Lc = "index_boost-item-padding__IwiTB";
            var Bc = e=>{
                var t = e.onClick
                  , n = Fo().boosts
                  , r = (0,
                a.useCallback)((e=>{
                    var a = n.find((t=>t.id === e));
                    a && t(a)
                }
                ), [n, t]);
                return (0,
                b.jsxs)("div", {
                    className: Rc,
                    children: [(0,
                    b.jsx)("div", {
                        className: Lc
                    }), n.length > 0 ? (0,
                    b.jsx)(b.Fragment, {
                        children: n.map((e=>(0,
                        b.jsx)(Sc, {
                            boost: e,
                            onClick: r
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)(Ic, {}), (0,
                        b.jsx)(Ic, {}), (0,
                        b.jsx)(Ic, {})]
                    }), (0,
                    b.jsx)("div", {
                        className: Lc
                    })]
                })
            }
            ;
            const Ac = "BoostArea_boosts-title__hkjWn"
              , Fc = "BoostArea_boost-area__AMJbh"
              , Mc = "BoostArea_container__qLJSQ";
            var Wc = ()=>{
                var e = Fo()
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
                  , h = Fe().points
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
                                    z(!1, (0,
                                    P.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    z(!1, (0,
                                    P.O4)("ok_game_okxracer_insufficient_pts_msg")),
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
                  , v = (0,
                a.useCallback)((e=>{
                    p(!0),
                    o(e)
                }
                ), []);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: Ac,
                        children: [(0,
                        P.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsx)("div", {
                        className: Fc,
                        children: (0,
                        b.jsxs)("div", {
                            className: Mc,
                            children: [(0,
                            b.jsx)(Bc, {
                                onClick: v
                            }), (0,
                            b.jsx)(Ve, {
                                visible: m,
                                onClose: ()=>{
                                    p(!1)
                                }
                                ,
                                children: i && (0,
                                b.jsx)(fc, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const Uc = "index_partnerItem__S1dkf"
              , Dc = "index_title__bRRMU"
              , Vc = "index_points__WQSip"
              , Gc = "index_state__gi-nK"
              , Hc = "index_logo__y4rK-"
              , Kc = "index_item-left__ej9+1"
              , Yc = "index_item-right__3KRWi"
              , Xc = "index_dot__4bynu"
              , zc = "index_participantsIcon__-tYh0"
              , Jc = "index_icon__gS69A";
            var qc = e=>{
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                b.jsxs)("div", {
                    className: Uc,
                    children: [(0,
                    b.jsx)(Oo.Z, {
                        size: Po.Z.sm,
                        className: Hc,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    b.jsxs)("div", {
                        className: Kc,
                        children: [(0,
                        b.jsx)("div", {
                            className: Dc,
                            children: t
                        }), (0,
                        b.jsx)("div", {
                            className: Vc,
                            children: (0,
                            P.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                zt.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        b.jsxs)("div", {
                            className: Gc,
                            children: [(0,
                            b.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    Tr.dU)((0,
                                    P.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            b.jsx)("span", {
                                className: Xc
                            }), (0,
                            b.jsx)(Z.Z, {
                                className: O()("okx-growth-friends", zc)
                            }), (0,
                            b.jsx)("em", {
                                children: zt.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: Yc,
                        children: (0,
                        b.jsx)(Z.Z, {
                            className: O()("okx-growth-chevrons-right", Jc)
                        })
                    })]
                })
            }
            ;
            const Qc = "index_container__wKNP9";
            function $c(e) {
                var t = e.tasks
                  , n = e.className
                  , a = Fo().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                b.jsx)("div", {
                    className: O()(Qc, n),
                    children: r ? t.map((e=>{
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        b.jsx)(kt, {
                            to: W,
                            onClick: ()=>{
                                a(e)
                            }
                            ,
                            children: (0,
                            b.jsx)(qc, {
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
                    b.jsx)(Eo, {})
                })
            }
            const el = "TaskArea_tabPane__irXs6"
              , tl = "TaskArea_tabName__-BL2R"
              , nl = "TaskArea_list__cqK4t";
            var al = e=>{
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                P.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                P.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                b.jsxs)("div", {
                    className: tl,
                    children: [r, " ", (0,
                    b.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , rl = ()=>{
                var e = Fo().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                b.jsx)(b.Fragment, {
                    children: (0,
                    b.jsxs)(Zr.Z.Underline, {
                        size: Zr.Z.SIZE.xl,
                        children: [(0,
                        b.jsx)(Zr.Z.TabPane, {
                            className: el,
                            tab: (0,
                            b.jsx)(al, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            b.jsx)($c, {
                                tasks: t,
                                className: nl
                            })
                        }), (0,
                        b.jsx)(Zr.Z.TabPane, {
                            className: el,
                            tab: (0,
                            b.jsx)(al, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            b.jsx)($o, {
                                tasks: n,
                                className: nl
                            })
                        })]
                    })
                })
            }
            ;
            const sl = "TaskPage_container__5KfIM"
              , il = "TaskPage_block__kt8oo"
              , ol = "TaskPage_block-boost__QYQXL"
              , cl = "TaskPage_points-title__4hW9Y"
              , ll = "TaskPage_points-content__+yK3g"
              , ul = "TaskPage_totalPoints__hWrtV"
              , dl = "TaskPage_infoIcon__p5I2c";
            var _l = ()=>{
                var e = Fe()
                  , t = e.points
                  , n = e.accumPoints;
                return (0,
                b.jsxs)("div", {
                    className: sl,
                    children: [(0,
                    b.jsx)("div", {
                        className: il,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: cl,
                                children: ["\ud83c\udfc6 ", (0,
                                P.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: ll,
                                children: Jt.yx.thousandFormat(t || 0)
                            }), (0,
                            b.jsxs)("div", {
                                className: ul,
                                children: [(0,
                                P.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                b.jsx)("em", {
                                    children: Jt.yx.thousandFormat(n || 0)
                                }), (0,
                                b.jsx)(yo.Z, {
                                    title: (0,
                                    P.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: yo.Z.TYPES.neutral,
                                    children: (0,
                                    b.jsx)(Z.Z, {
                                        iconName: "okx-growth-information",
                                        className: dl
                                    })
                                })]
                            })]
                        })
                    }), (0,
                    b.jsx)("div", {
                        className: ol,
                        children: (0,
                        b.jsx)(Wc, {})
                    }), (0,
                    b.jsx)("div", {
                        className: il,
                        children: (0,
                        b.jsx)(rl, {})
                    })]
                })
            }
              , ml = ()=>(0,
            b.jsx)(Mo, {
                children: (0,
                b.jsxs)(s.Switch, {
                    children: [(0,
                    b.jsx)(s.Route, {
                        path: M,
                        component: _l,
                        exact: !0
                    }), (0,
                    b.jsx)(s.Route, {
                        path: W,
                        component: tc,
                        exact: !0
                    })]
                })
            })
              , pl = ()=>{
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , i = (0,
                a.useMemo)(x, []);
                (0,
                a.useMemo)((()=>{
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var o, h = (()=>{
                    var e = L().uid;
                    return (0,
                    a.useEffect)((()=>{
                        var e, t, n, a, r, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (a = window.Telegram.WebApp).ready) || void 0 === n || n.call(a),
                        null === (r = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === r || r.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d)),
                        document.addEventListener("contextmenu", (e=>e.preventDefault()))
                    }
                    ), []),
                    {
                        isAllowToLoadApp: true
                    }
                }
                )().isAllowToLoadApp;
                return (0,
                a.useEffect)((()=>{
                    (function() {
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
                    }
                    )()()
                }
                ), [i]),
                (0,
                b.jsx)("article", {
                    className: v,
                    children: (0,
                    b.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: h ? (0,
                        b.jsx)(b.Fragment, {
                            children: (0,
                            b.jsx)(Lt, {
                                children: (0,
                                b.jsx)(Me, {
                                    children: (0,
                                    b.jsx)(Ft, {
                                        children: (0,
                                        b.jsxs)(d.LD, {
                                            manifestUrl: Ot(),
                                            children: [(0,
                                            b.jsx)("main", {
                                                className: g,
                                                children: (0,
                                                b.jsxs)(s.Switch, {
                                                    children: [(0,
                                                    b.jsx)(s.Route, {
                                                        path: A,
                                                        component: (o = Pr,
                                                        e=>(0,
                                                        b.jsx)("div", {
                                                            className: j,
                                                            children: (0,
                                                            b.jsx)(o, (0,
                                                            k.Z)({}, e))
                                                        })),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(s.Route, {
                                                        path: U,
                                                        component: C(Es),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(s.Route, {
                                                        path: M,
                                                        component: ml
                                                    }), (0,
                                                    b.jsx)(s.Route, {
                                                        path: F,
                                                        component: C(mi),
                                                        exact: !0
                                                    }), (0,
                                                    b.jsx)(s.Route, {
                                                        path: D,
                                                        component: C(No),
                                                        exact: !0
                                                    })]
                                                })
                                            }), (0,
                                            b.jsx)("div", {
                                                className: f,
                                                children: (0,
                                                b.jsx)(bt, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        }) : (0,
                        b.jsx)(Bs, {})
                    })
                })
            }
              , hl = document.getElementById("root");
            if (hl) {
                var xl = (0,
                b.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    b.jsx)(B, {
                        children: (0,
                        b.jsx)(pl, {})
                    })
                });
                (0,
                i.createRoot)(hl).render(xl)
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
    n.d = (e,t)=>{
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
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
            5145: 0,
            5964: 0
        };
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
    var a = n.O(void 0, [3231, 5825, 5145, 5964, 5890, 64, 6371, 8283, 6877, 4084, 4259, 7110, 8037, 3489], (()=>n(23839)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.5ac20f9f.js.map
