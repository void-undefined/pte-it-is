(()=>{
    "use strict";
    var e = {
        91816: (e,t,r)=>{
            var n = r(87363)
              , a = r.n(n);
            const s = ReactRouterDOM;
            r(75139);
            var i = r(73271)
              , o = r(53949)
              , c = (r(78599),
            r(74165))
              , l = r(15861)
              , u = r(70885)
              , d = r(95640)
              , _ = r.n(d)
              , p = r(46541)
              , m = r(1677)
              , h = r(2627)
              , x = r(45929)
              , v = r(8786)
              , f = ()=>{
                var e, t, r = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, n = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === r || void 0 === r ? void 0 : r.language_code) || "en"] || "en_US";
                return v.Z.set("locale", n),
                window._okGlobal && (window._okGlobal.locale = n),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: n
                }
            }
            ;
            const g = "App_container__p+0qT"
              , k = "App_navbar__zvxzr"
              , b = "App_content__Jjurs";
            var j = r(28683);
            const w = "NoPaddingLayout_no-padding-layout__6LAKV";
            var C = r(45263)
              , N = e=>t=>(0,
            C.jsx)("div", {
                className: w,
                children: (0,
                C.jsx)(e, (0,
                j.Z)({}, t))
            });
            const y = "ComPaddingLayout_common-padding-layout__0gGbM";
            var O = e=>t=>(0,
            C.jsx)("div", {
                className: y,
                children: (0,
                C.jsx)(e, (0,
                j.Z)({}, t))
            })
              , P = r(44925)
              , Z = r(14300)
              , E = r(72106)
              , T = {
                act: function() {}
            };
            "undefined" !== typeof window && (T = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var S = T
              , I = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , R = (0,
            n.createContext)(I)
              , L = ()=>(0,
            n.useContext)(R)
              , B = e=>{
                var t = e.children
                  , r = (0,
                n.useMemo)((()=>{
                    var e, t, r = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, n = r.user, a = r.start_param;
                    if (n) {
                        var s = n.id
                          , i = n.username
                          , o = n.first_name
                          , c = n.last_name
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
                            startParam: a,
                            gameId: 1
                        }
                    }
                    return I
                }
                ), [])
                  , a = (0,
                n.useState)(r)
                  , s = (0,
                u.Z)(a, 1)[0];
                return (0,
                C.jsx)(R.Provider, {
                    value: s,
                    children: t
                })
            }
              , A = "/mini-app/racer"
              , M = "/mini-app/racer/referrals"
              , F = "/mini-app/racer/tasks"
              , D = "/mini-app/racer/leaderboard"
              , U = "/mini-app/racer/rewards";
            const G = "Navbar_navbar__LF3-M"
              , V = "Navbar_link__qX0Sf"
              , W = "Navbar_active__TCbF8"
              , H = "Navbar_linkIcon__GtH54"
              , K = "Navbar_linkText__Szxi-";
            var X = ["children", "className"]
              , Y = ["iconName", "label", "onClick"]
              , z = e=>{
                var t = e.children
                  , r = e.className
                  , n = (0,
                P.Z)(e, X)
                  , a = (0,
                s.useLocation)().hash;
                return (0,
                C.jsx)(s.Link, {
                    className: r,
                    to: "".concat(n.to).concat(a),
                    onClick: n.onClick,
                    children: t
                })
            }
              , J = e=>{
                var t = e.iconName
                  , r = e.label
                  , n = e.onClick
                  , a = (0,
                P.Z)(e, Y)
                  , i = (0,
                s.useRouteMatch)({
                    path: a.to,
                    exact: !0
                });
                return (0,
                C.jsxs)(z, {
                    className: _()(V, i && W),
                    to: a.to,
                    onClick: n,
                    children: [(0,
                    C.jsx)(E.Z, {
                        iconName: t,
                        className: H
                    }), (0,
                    C.jsx)("span", {
                        className: K,
                        children: r
                    })]
                })
            }
              , q = ()=>{
                var e = {
                    telegramid: L().uid
                };
                return (0,
                C.jsxs)("div", {
                    className: G,
                    children: [(0,
                    C.jsx)(J, {
                        iconName: "okx-growth-home",
                        to: A,
                        label: (0,
                        Z.O4)("ok_game_okxracer_home")
                    }), (0,
                    C.jsx)(J, {
                        iconName: "okx-growth-leaderboard",
                        to: D,
                        label: (0,
                        Z.O4)("ok_game_okxracer_leaderboard"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                    C.jsx)(J, {
                        iconName: "okx-growth-task",
                        to: F,
                        label: (0,
                        Z.O4)("ok_game_okxracer_tasks"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                    C.jsx)(J, {
                        iconName: "okx-growth-friends",
                        to: M,
                        label: (0,
                        Z.O4)("ok_game_okxracer_friends"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                    C.jsx)(J, {
                        iconName: "okx-growth-surprises",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                })
            }
            ;
            function Q(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var $ = r(4860)
              , ee = r(72202)
              , te = (e,t)=>{
                e ? x.Z.success({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: x.Z.DIRECTION.topRight,
                    showClose: !1
                }) : x.Z.error({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: x.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , re = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                te(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , ne = r(60378)
              , ae = r(4422);
            const se = utils.ont;
            var ie = r.n(se)
              , oe = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , ce = e=>t=>{
                if (!(0,
                ne.y)()) {
                    var r = t || {}
                      , n = r.status
                      , a = r.data || {}
                      , s = a.msg
                      , i = a.code;
                    ae.k.warn("Request error, url=".concat(e, " status=").concat(n, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , le = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ie().get(t, r).then(oe, ce(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , ue = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ie().getWithCache(t, r).then(oe, ce(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , de = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ie().post(t, r, n).then(oe, ce(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }()
              , _e = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ie().put(t, r, n).then(oe, ce(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }()
              , pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ie().delete(t, r).then(oe, ce(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , me = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    var a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = new FormData,
                                Object.entries(null !== r && void 0 !== r ? r : {}).forEach((e=>{
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , r = t[0]
                                      , n = t[1];
                                    n instanceof Blob ? a.append(r, n) : a.append(r, String(n))
                                }
                                )),
                                e.abrupt("return", de(t, a, n));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }();
            const he = {
                get: le,
                getWithCache: ue,
                post: de,
                put: _e,
                postForm: me,
                delete: pe
            };
            class xe {
                constructor() {
                    this.store = void 0,
                    this.store = new Map
                }
                static getInstance() {
                    return xe.instance || (xe.instance = new xe),
                    xe.instance
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
                    var r = this.store.get(e);
                    return !r || Date.now() - r.timestamp > t
                }
            }
            xe.instance = void 0;
            const ve = xe.getInstance();
            function fe(e, t) {
                return function() {
                    var r = (0,
                    l.Z)((0,
                    c.Z)().mark((function r(n, a) {
                        var s;
                        return (0,
                        c.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (s = "cache_".concat(n, "_").concat(JSON.stringify(a)),
                                    !ve.hasItem(s) || ve.isItemExpired(s, t)) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return", e(n, a, !0));
                                case 3:
                                    return r.abrupt("return", e(n, a, !1));
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )));
                    return function(e, t) {
                        return r.apply(this, arguments)
                    }
                }()
            }
            function ge(e, t, r) {
                return ke.apply(this, arguments)
            }
            function ke() {
                return (ke = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    var a, s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                he.get(t, (0,
                                j.Z)((0,
                                j.Z)({}, n || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (a = window.Telegram) || void 0 === a || null === (s = a.WebApp) || void 0 === s ? void 0 : s.initData) || ""
                                    }
                                }));
                            case 2:
                                return i = e.sent,
                                ve.setItem(r, i),
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
            function be(e, t, r) {
                return je.apply(this, arguments)
            }
            function je() {
                return (je = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    var a, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (a = "cache_".concat(t, "_").concat(JSON.stringify(r)),
                                !n || !ve.hasItem(a)) {
                                    e.next = 5;
                                    break
                                }
                                return s = ve.getItem(a),
                                ge(t, a, r).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", ge(t, a, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function we(e, t, r, n) {
                return Ce.apply(this, arguments)
            }
            function Ce() {
                return (Ce = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n, a) {
                    var s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                he.post(t, r, (0,
                                j.Z)((0,
                                j.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (s = window.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i ? void 0 : i.initData) || ""
                                    }
                                }));
                            case 2:
                                return o = e.sent,
                                ve.setItem(n, o),
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
            function Ne(e, t, r, n) {
                return ye.apply(this, arguments)
            }
            function ye() {
                return (ye = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n, a) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(r)),
                                !ve.hasItem(s) || !n) {
                                    e.next = 5;
                                    break
                                }
                                return i = ve.getItem(s),
                                we(t, r, s, a).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", we(t, r, s, a));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Oe = "/priapi/v1/affiliate"
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(Oe, "/game/racer/info"), t));
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
                                return e.abrupt("return", Ne("".concat(Oe, "/game/racer/assess"), t));
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
                c.Z)().mark((function e(t, r) {
                    var n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                be("".concat(Oe, "/game/racer/invitee-list"), {
                                    params: t
                                }, r);
                            case 3:
                                if (n = e.sent,
                                !(a = n.data)) {
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
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , Te = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var r, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                r = fe(be, 1e4),
                                e.next = 4,
                                r("".concat(Oe, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 4:
                                if (n = e.sent,
                                !(a = n.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                re(e.t0),
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
              , Se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var r, n, a;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                r = fe(be, 3e5),
                                e.next = 4,
                                r("".concat(Oe, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 4:
                                if (n = e.sent,
                                !(a = n.data)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 8:
                                return e.abrupt("return", null);
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(0),
                                re(e.t0),
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
              , Ie = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e
            }({})
              , Re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", be("".concat(Oe, "/game/racer/boosts"), {}, t));
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
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(Oe, "/game/racer/boost"), t));
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
                                return e.abrupt("return", be("".concat(Oe, "/game/racer/tasks"), {}, t));
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
              , Ae = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(Oe, "/game/racer/task"), t));
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
              , Me = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r, n, a, s = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] && s[0],
                                e.next = 3,
                                Ne("".concat(Oe, "/game/racer/account-binding"), {}, t);
                            case 3:
                                if (r = e.sent,
                                n = r.code,
                                a = r.data,
                                0 !== n || !a) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", {
                                    isConnectTelegram: 1 === a.tgBindingStatus,
                                    isKyc: 1 === a.kycVerifyStatus,
                                    signupLink: a.signupLink,
                                    downloadLink: a.downloadLink,
                                    bindTgLink: a.bindTgLink,
                                    verifyKycLink: a.verifyKycLink
                                });
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
            function Fe(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                    r[n - 1] = arguments[n];
                return function() {
                    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                        n[a] = arguments[a];
                    return e(...r, ...n)
                }
            }
            var De = {
                Rewards: Fe(Me, !0),
                Friends: Fe(Te, {
                    pageNo: 1
                }),
                Boost: Fe(Re, !0),
                Task: Fe(Be, !0),
                Invitee: Fe(Ee, {
                    pageNo: 1
                }, !0),
                Global: Fe(Se, {
                    pageNo: 1
                })
            }
              , Ue = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ge = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var r;
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
                                return r = t.shift(),
                                e.prev = 3,
                                e.next = 6,
                                new Promise((e=>{
                                    var t = Math.floor(1e3 * Math.random()) + 500;
                                    setTimeout(e, t)
                                }
                                ));
                            case 6:
                                return e.next = 8,
                                n = De[r],
                                void ("requestIdleCallback"in window ? requestIdleCallback(n) : setTimeout(n, 0));
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(3),
                                ae.k.error("tg-pre-error", {
                                    error: e.t0
                                });
                            case 13:
                                return e.next = 15,
                                Ge(t);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                        var n
                    }
                    ), e, null, [[3, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ve = (0,
            n.createContext)({
                points: 0,
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
                autopilotPoints: 0,
                hideAutopilotSheet: ()=>{}
            })
              , We = ()=>(0,
            n.useContext)(Ve)
              , He = e=>{
                var t, r = e.children, a = (0,
                n.useState)(0), s = (0,
                u.Z)(a, 2), i = s[0], o = s[1], d = (0,
                n.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], h = (0,
                n.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                n.useState)(0), k = (0,
                u.Z)(g, 2), b = k[0], j = k[1], w = (0,
                n.useState)(""), N = (0,
                u.Z)(w, 2), y = N[0], O = N[1], P = (0,
                n.useState)(!0), E = (0,
                u.Z)(P, 2), T = E[0], S = E[1], I = L(), R = I.username, B = I.startParam, A = (0,
                n.useState)(""), M = (0,
                u.Z)(A, 2), F = M[0], D = M[1], U = (0,
                n.useState)(!1), G = (0,
                u.Z)(U, 2), V = G[0], W = G[1], H = (0,
                n.useState)(0), K = (0,
                u.Z)(H, 2), X = K[0], Y = K[1];
                (0,
                n.useEffect)((()=>{
                    Ge(Ue)
                }
                ), []);
                var z = null !== (t = new $.Z((B || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : ""
                  , J = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Pe({
                                    extUserName: R,
                                    linkCode: z
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (o(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                m(r.numChances),
                                j(r.secondToRefresh),
                                f(r.numChancesTotal),
                                W(r.isShowAutopilotGainedPoint),
                                Y(r.autopilotPoints),
                                S(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                te(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [z, R]);
                (0,
                n.useEffect)((()=>{
                    J()
                }
                ), [J]),
                (0,
                n.useEffect)((()=>{
                    var e = new ee.Z(b);
                    return b > 0 ? (e.start(),
                    e.addEventListener(ee.Z.Event.UPDATE, (e=>{
                        D("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(ee.Z.Event.FINISH, (()=>{
                        D(""),
                        J()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    D("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [b, J]),
                (0,
                n.useEffect)((()=>{
                    function e() {
                        document.hidden || J()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [J]);
                var q = (0,
                n.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    m(e.numChances),
                    j(e.secondToRefresh)
                }
                ), [])
                  , Q = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                J();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [J])
                  , re = (0,
                n.useCallback)((()=>{
                    W(!1)
                }
                ), [])
                  , ne = (0,
                n.useMemo)((()=>({
                    isLoading: T,
                    points: i,
                    numChances: p,
                    numChancesTotal: v,
                    countdownDisplay: F,
                    updateGameInfo: q,
                    linkCode: y,
                    updateGameInfoFromServer: Q,
                    isShowAutopilotGainedPoint: V,
                    autopilotPoints: X,
                    hideAutopilotSheet: re
                })), [T, i, p, v, F, q, y, Q, V, X, re]);
                return (0,
                C.jsx)(Ve.Provider, {
                    value: ne,
                    children: r
                })
            }
              , Ke = r(8031);
            var Xe = new class {
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
                          , r = e.data;
                        if (t.channel === this.channel && t.instId === this.instId) {
                            var n = ((null === r || void 0 === r ? void 0 : r[0]) || {}).last;
                            n && this.handleList.forEach((e=>{
                                e(Number(n))
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
                    this.connection = new Ke.Z({
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
              , Ye = (0,
            n.createContext)(Xe)
              , ze = e=>{
                var t = e.children;
                return (0,
                C.jsx)(Ye.Provider, {
                    value: Xe,
                    children: t
                })
            }
              , Je = (0,
            n.createContext)(null)
              , qe = ()=>(0,
            n.useContext)(Je)
              , Qe = e=>{
                var t = e.children
                  , r = (0,
                n.useState)(null)
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useContext)(Ye);
                return (0,
                n.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                C.jsx)(Je.Provider, {
                    value: s,
                    children: t
                })
            }
              , $e = r(46430)
              , et = "racer"
              , tt = ()=>{
                var e;
                if (!(0,
                ne.y)())
                    return $e.Z.getInstance(et) || $e.Z.init({
                        project: et
                    }),
                    null !== (e = $e.Z.getInstance(et)) && void 0 !== e ? e : $e.Z
            }
              , rt = "guessRecords_new";
            function nt(e) {
                var t = tt().get(rt) || [];
                t.unshift(e),
                tt().set(rt, t.slice(0, 5))
            }
            var at = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , st = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: at.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: at.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , it = (0,
            n.createContext)(st)
              , ot = ()=>(0,
            n.useContext)(it)
              , ct = e=>{
                var t = e.children
                  , r = L().uid
                  , a = (0,
                n.useState)(!1)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                n.useState)(5)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                n.useState)(null)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                n.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , b = k[0]
                  , j = k[1]
                  , w = (0,
                n.useState)(at.NONE)
                  , N = (0,
                u.Z)(w, 2)
                  , y = N[0]
                  , O = N[1]
                  , P = qe()
                  , E = We().updateGameInfo
                  , T = (0,
                n.useRef)(at.NONE)
                  , I = (0,
                n.useRef)(1)
                  , R = (0,
                n.useRef)(10)
                  , B = (0,
                n.useRef)(null)
                  , A = (0,
                n.useRef)(null)
                  , M = (0,
                n.useRef)(null)
                  , F = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = T.current === at.UP ? 1 : 0,
                                e.next = 4,
                                Ze({
                                    predict: t
                                });
                            case 4:
                                r = e.sent,
                                (n = r.data) && (j(n.won),
                                E({
                                    points: n.balancePoints,
                                    numChances: n.numChance,
                                    secondToRefresh: n.secondToRefresh
                                }),
                                I.current = n.multiplier,
                                R.current = n.basePoint,
                                B.current = Number(n.changeRate),
                                A.current = n.prevPrice,
                                M.current = n.currentPrice,
                                nt({
                                    curCombo: n.curCombo,
                                    won: n.won,
                                    predict: t,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                j(null),
                                B.current = null,
                                te(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                T.current = at.NONE,
                                o(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [E]);
                (0,
                n.useEffect)((()=>{
                    var e = null;
                    if (i) {
                        var t = 5;
                        m(t),
                        e = setInterval((()=>{
                            m(t -= 1),
                            0 === t && (e && clearInterval(e),
                            f(null),
                            F())
                        }
                        ), 1e3)
                    }
                    return ()=>{
                        e && clearTimeout(e)
                    }
                }
                ), [F, i]),
                (0,
                n.useEffect)((()=>{
                    if (i && P)
                        if (v) {
                            var e = P > v;
                            O(P === v ? at.NONE : e ? at.UP : at.DOWN)
                        } else
                            f(P)
                }
                ), [v, i, P]);
                var D = (0,
                n.useCallback)((e=>{
                    j(null),
                    o(!0),
                    T.current = e,
                    B.current = null;
                    var t = {
                        telegramid: r
                    };
                    e === at.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        S.act({
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
                    e === at.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        S.act({
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
                n.useMemo)((()=>({
                    countdown: p,
                    onButtonClick: D,
                    result: b,
                    isPending: i,
                    currentTrend: y,
                    multiplier: I.current,
                    basePoints: R.current,
                    predict: T.current,
                    changeRate: B.current,
                    prevPrice: A.current,
                    currentPrice: M.current
                })), [p, y, i, I, D, b]);
                return (0,
                C.jsx)(it.Provider, {
                    value: U,
                    children: t
                })
            }
              , lt = r(94595)
              , ut = r(96450)
              , dt = 2e3
              , _t = 500;
            function pt(e) {
                return (Math.abs(e) < 1e-4 ? ut.yx.ceilTruncate : ut.yx.floorTruncate)(e, 4)
            }
            const mt = "GuessResult_container__ECdpL"
              , ht = "GuessResult_title__fzYxg"
              , xt = "GuessResult_multiplier__yRHWm"
              , vt = "GuessResult_description__R2fup"
              , ft = "GuessResult_detailsIcon__ZE7Ry"
              , gt = "GuessResult_changeRateContainer__a5-N7"
              , kt = "GuessResult_label__+b5Nz"
              , bt = "GuessResult_changeRate__yhVz3"
              , jt = "GuessResult_up__5vYDR"
              , wt = "GuessResult_down__fa-oP"
              , Ct = "GuessResult_priceChange__xr6e8"
              , Nt = "GuessResult_price__Vk+bY";
            function yt(e) {
                return (0,
                lt.xG)((0,
                lt.uf)(ut.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var Ot = e=>{
                var t = e.className
                  , r = ot()
                  , a = r.result
                  , s = r.multiplier
                  , i = r.changeRate
                  , o = r.prevPrice
                  , c = r.currentPrice
                  , l = (0,
                n.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , p = d[0]
                  , m = d[1];
                return (0,
                n.useEffect)((()=>{
                    var e, t;
                    if (null !== a) {
                        var r, n, s, i;
                        if (null !== (r = window) && void 0 !== r && null !== (n = r.Telegram) && void 0 !== n && n.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, a ? "success" : "error");
                        e = setTimeout((()=>{
                            m(!0),
                            t = setTimeout((()=>{
                                m(!1)
                            }
                            ), dt)
                        }
                        ), _t)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [a]),
                (0,
                C.jsx)(C.Fragment, {
                    children: p && (0,
                    C.jsxs)("div", {
                        className: _()(t, mt),
                        children: [(0,
                        C.jsx)("p", {
                            className: xt,
                            children: a ? (0,
                            C.jsxs)("span", {
                                className: ft,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            C.jsx)("span", {
                                className: ft,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        C.jsx)("h2", {
                            className: ht,
                            children: (0,
                            Z.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        C.jsxs)("div", {
                            className: vt,
                            children: [null !== i && (0,
                            C.jsxs)("p", {
                                className: gt,
                                children: [(0,
                                C.jsx)("span", {
                                    className: kt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                C.jsx)("span", {
                                    className: _()(bt, {
                                        [jt]: i > 0,
                                        [wt]: i < 0
                                    }),
                                    children: (0,
                                    lt.uf)(pt(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            C.jsx)("p", {
                                className: Ct,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    C.jsx)("span", {
                                        className: Nt,
                                        children: yt(o)
                                    }),
                                    currentPrice: (0,
                                    C.jsx)("span", {
                                        className: Nt,
                                        children: yt(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var Pt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , Zt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Et = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , Tt = "/help/okx-racer-terms-and-conditions"
              , St = r(2663);
            const It = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Rt = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: It.closeBtn,
                closeIconClassName: It.closeIcon
            }
              , Lt = e=>(0,
            C.jsx)(St.Z, (0,
            j.Z)((0,
            j.Z)({}, Rt), {}, {
                topContent: e.title ? void 0 : (0,
                C.jsx)("div", {
                    className: It.topPadding
                })
            }, e))
              , Bt = r(76983);
            const At = "PrimaryButton_button__SJFHA"
              , Mt = "PrimaryButton_buttonText__19AJ7";
            var Ft = e=>{
                var t = e.onClick
                  , r = e.text
                  , n = e.className
                  , a = e.disabled
                  , s = void 0 !== a && a;
                return (0,
                C.jsx)(Bt.default, {
                    category: Bt.default.CATEGORY.fill,
                    type: Bt.default.TYPE.primary,
                    size: Bt.default.SIZE.lg,
                    className: _()(At, n),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    C.jsx)("div", {
                        className: Mt,
                        children: r
                    })
                })
            }
            ;
            const Dt = "AutoPilot_title__NJa0C"
              , Ut = "AutoPilot_button__Sg42v";
            var Gt = ()=>{
                var e = We()
                  , t = e.isShowAutopilotGainedPoint
                  , r = e.autopilotPoints
                  , n = e.hideAutopilotSheet;
                return (0,
                C.jsxs)(Lt, {
                    visible: t,
                    onClose: n,
                    children: [(0,
                    C.jsx)("div", {
                        className: Dt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: r
                        })
                    }), (0,
                    C.jsx)(Ft, {
                        className: Ut,
                        onClick: n,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , Vt = r(59896);
            const Wt = "BackgroundVideo_container__J5sO2"
              , Ht = "BackgroundVideo_muteButton__04Huj"
              , Kt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Xt = "BackgroundVideo_staticImage__EpRTb"
              , Yt = "BackgroundVideo_hide__ZXYN9";
            var zt, Jt, qt, Qt, $t, er, tr = "backgroundVideoSoundOn", rr = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", nr = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], ar = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], sr = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(rr)
            }, ir = ()=>{
                var e = ot().isPending
                  , t = (0,
                n.useRef)(null)
                  , r = (0,
                n.useRef)(null)
                  , a = (0,
                n.useState)(!1)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , c = s[1]
                  , l = (0,
                n.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , p = d[0]
                  , m = d[1]
                  , h = (0,
                n.useState)(!1)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = tt()
                  , k = (0,
                n.useState)((()=>{
                    var e = g.get(tr);
                    return Boolean(!e)
                }
                ))
                  , b = (0,
                u.Z)(k, 2)
                  , w = b[0]
                  , N = b[1];
                (0,
                n.useEffect)((()=>{
                    t.current && (e && (f(!1),
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
                        f(!0),
                        null === (e = r.current) || void 0 === e || e.play().then((()=>{
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
                var y = !i && !p
                  , O = i && v && p
                  , P = i && (!v || !p);
                return (0,
                C.jsxs)("div", {
                    className: Wt,
                    children: [(0,
                    C.jsx)(Bt.default, {
                        category: Bt.default.CATEGORY.fill,
                        type: Bt.default.TYPE.quaternary,
                        size: Bt.default.SIZE.md,
                        className: Ht,
                        strictCircle: !0,
                        onClick: ()=>{
                            N((e=>(g.set(tr, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Kt
                        })
                    }), (0,
                    C.jsx)(Vt.Z, {
                        className: _()(Xt, {
                            [Yt]: !y
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(rr)
                    }), (0,
                    C.jsx)("video", (0,
                    j.Z)((0,
                    j.Z)({}, sr), {}, {
                        className: _()({
                            [Yt]: !O
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: nr.map((e=>(0,
                        C.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    C.jsx)("video", (0,
                    j.Z)((0,
                    j.Z)({}, sr), {}, {
                        className: _()({
                            [Yt]: !P
                        }),
                        ref: t,
                        muted: w,
                        children: ar.map((e=>(0,
                        C.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , or = ["title", "titleId"];
            function cr() {
                return cr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                cr.apply(this, arguments)
            }
            function lr(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function ur(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = lr(e, or);
                return n.createElement("svg", cr({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, zt || (zt = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Jt || (Jt = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), qt || (qt = n.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Qt || (Qt = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), $t || ($t = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), er || (er = n.createElement("defs", null, n.createElement("filter", {
                    id: "filter0_i_738_19404",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, n.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), n.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), n.createElement("feOffset", {
                    dy: 2
                }), n.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), n.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), n.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19404"
                })), n.createElement("linearGradient", {
                    id: "paint0_linear_738_19404",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "#F5384F"
                }), n.createElement("stop", {
                    offset: .48,
                    stopColor: "#F87989"
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "#F5384F"
                })), n.createElement("linearGradient", {
                    id: "paint0_linear_738_19552",
                    x1: 62.6289,
                    y1: 48.4995,
                    x2: 62.6289,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "#F5384F"
                }), n.createElement("stop", {
                    offset: .995,
                    stopColor: "#A60014"
                })))))
            }
            var dr = n.forwardRef(ur);
            r.p;
            var _r, pr, mr, hr, xr, vr, fr = ["title", "titleId"];
            function gr() {
                return gr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                gr.apply(this, arguments)
            }
            function kr(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function br(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = kr(e, fr);
                return n.createElement("svg", gr({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, _r || (_r = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), pr || (pr = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), mr || (mr = n.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), hr || (hr = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), xr || (xr = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), vr || (vr = n.createElement("defs", null, n.createElement("filter", {
                    id: "filter0_i_738_19392",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, n.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), n.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), n.createElement("feOffset", {
                    dy: 2
                }), n.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), n.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), n.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19392"
                })), n.createElement("linearGradient", {
                    id: "paint0_linear_738_19392",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "#54EA90",
                    stopOpacity: 0
                }), n.createElement("stop", {
                    offset: .48,
                    stopColor: "#54E88F"
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "#53E68E",
                    stopOpacity: 0
                })), n.createElement("defs", null, n.createElement("linearGradient", {
                    id: "paint0_linear_738_19488",
                    x1: 72.4467,
                    y1: 48.4995,
                    x2: 72.4467,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "#00BC4B"
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "#01933B"
                }))))))
            }
            var jr = n.forwardRef(br);
            r.p;
            const wr = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var Cr, Nr = e=>{
                var t = e.className
                  , r = ot()
                  , a = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , o = We().numChances
                  , c = (0,
                n.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , p = l[1];
                (0,
                n.useEffect)((()=>{
                    var e;
                    return s || (e = setTimeout((()=>{
                        p(void 0)
                    }
                    ), 2500)),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var m = e=>{
                    var t, r, n;
                    s || d || (p(e === at.UP ? at.DOWN : at.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (n = r.WebApp) && void 0 !== n && n.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , h = o <= 0;
                return (0,
                C.jsxs)("div", {
                    className: t,
                    children: [(0,
                    C.jsx)("p", {
                        className: _()(wr.instructions, s && wr.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    C.jsxs)("div", {
                        className: wr.btnContainer,
                        children: [(0,
                        C.jsxs)("button", {
                            disabled: h || d === at.UP,
                            onClick: ()=>m(at.UP),
                            type: "button",
                            className: _()(wr.btn, wr.upBtn, {
                                [wr.pressed]: i === at.UP
                            }),
                            children: [(0,
                            C.jsx)(jr, {
                                className: _()(wr.btnGraphic, wr.upBtnGraphic)
                            }), (0,
                            C.jsxs)("span", {
                                className: wr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                C.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: wr.arrow
                                })]
                            })]
                        }), (0,
                        C.jsxs)("button", {
                            disabled: h || d === at.DOWN,
                            onClick: ()=>m(at.DOWN),
                            type: "button",
                            className: _()(wr.btn, wr.downBtn, {
                                [wr.pressed]: i === at.DOWN
                            }),
                            children: [(0,
                            C.jsx)(dr, {
                                className: _()(wr.btnGraphic, wr.downBtnGraphic)
                            }), (0,
                            C.jsxs)("span", {
                                className: wr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                C.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: wr.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , yr = ["title", "titleId"];
            function Or() {
                return Or = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Or.apply(this, arguments)
            }
            function Pr(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function Zr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Pr(e, yr);
                return n.createElement("svg", Or({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Cr || (Cr = n.createElement("g", {
                    transform: "translate(24 12)"
                }, n.createElement("rect", {
                    className: "track",
                    x: 2.5,
                    y: 2.5,
                    width: 322,
                    height: 155,
                    rx: 77.5,
                    fill: "#030303",
                    stroke: "#909090",
                    strokeWidth: 5
                }), n.createElement("path", {
                    d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                    fill: "url(#paint1_linear_263_6211)"
                }), n.createElement("path", {
                    d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                    fill: "url(#paint2_linear_263_6211)"
                }), n.createElement("defs", null, n.createElement("linearGradient", {
                    id: "paint1_linear_263_6211",
                    x1: 51.4976,
                    y1: 20,
                    x2: 51.4976,
                    y2: 140,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), n.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                })), n.createElement("linearGradient", {
                    id: "paint2_linear_263_6211",
                    x1: 277,
                    y1: 140,
                    x2: 277,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), n.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), n.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                }))))))
            }
            var Er = n.forwardRef(Zr);
            r.p;
            var Tr = r(48275);
            const Sr = "FuelIndicator_fuelContainer__QIskL"
              , Ir = "FuelIndicator_toTasksIcon__Y7exC"
              , Rr = "FuelIndicator_line__tWBfm"
              , Lr = "FuelIndicator_description__EaUsa"
              , Br = "FuelIndicator_fuelIcon__I38Ss"
              , Ar = "FuelIndicator_maxChances__OMSHl"
              , Mr = "FuelIndicator_earnPtsMsg__PjtcT";
            var Fr, Dr, Ur = e=>{
                var t = e.className
                  , r = We()
                  , n = r.numChances
                  , a = r.numChancesTotal;
                return (0,
                C.jsxs)("div", {
                    className: _()(t, Sr),
                    children: [(0,
                    C.jsx)("span", {
                        className: Br,
                        children: "\u26fd\ufe0f"
                    }), n > 0 ? (0,
                    C.jsx)(Tr.Z.Line, {
                        className: Rr,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: n / a * 100
                    }, a) : (0,
                    C.jsx)(z, {
                        to: F,
                        className: Mr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    C.jsxs)("p", {
                        className: Lr,
                        children: [n, "\xa0", void 0 !== a && 0 !== a && (0,
                        C.jsxs)(C.Fragment, {
                            children: ["/\xa0", (0,
                            C.jsx)("span", {
                                className: Ar,
                                children: a
                            })]
                        })]
                    }), (0,
                    C.jsx)(z, {
                        to: F,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: Ir
                        })
                    })]
                })
            }
            , Gr = ["title", "titleId"];
            function Vr() {
                return Vr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Vr.apply(this, arguments)
            }
            function Wr(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function Hr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Wr(e, Gr);
                return n.createElement("svg", Vr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Fr || (Fr = n.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Dr || (Dr = n.createElement("defs", null, n.createElement("linearGradient", {
                    id: "paint0_linear_563_49992",
                    x1: 84,
                    y1: 28.5652,
                    x2: 84,
                    y2: 5.44528e-7,
                    gradientUnits: "userSpaceOnUse"
                }, n.createElement("stop", null), n.createElement("stop", {
                    offset: 1,
                    stopColor: "#909090"
                })))))
            }
            var Kr = n.forwardRef(Hr);
            r.p;
            const Xr = "RefuelTimer_container__wtALO"
              , Yr = "RefuelTimer_description__sD+HM"
              , zr = "RefuelTimer_timer__LL1+c";
            var Jr = e=>{
                var t = e.className
                  , r = We().countdownDisplay;
                return (0,
                C.jsxs)("div", {
                    className: _()(t, Xr),
                    children: [(0,
                    C.jsx)(Kr, {}), (0,
                    C.jsx)("p", {
                        className: Yr,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            C.jsx)("span", {
                                className: zr,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const qr = "CoinPrice_raceTrack__NZO2t"
              , Qr = "CoinPrice_run__f0UIF"
              , $r = "CoinPrice_coinPriceContainer__YbeUE"
              , en = "CoinPrice_content__a-5Jl"
              , tn = "CoinPrice_fuelIndicator__p+f1I"
              , rn = "CoinPrice_refuelTimer__tbWMw"
              , nn = "CoinPrice_hide__bHhxJ"
              , an = "CoinPrice_label__yTNy0"
              , sn = "CoinPrice_value__ZjRZz"
              , on = "CoinPrice_slotMachine__hUQKt"
              , cn = "SlotMachine_row__a4TO0"
              , ln = "SlotMachine_animate__-G4TR"
              , un = "SlotMachine_column__aR0VE"
              , dn = "SlotMachine_arrows__m1dhv"
              , _n = "SlotMachine_columnContainer__a76pd"
              , pn = "SlotMachine_background__b9TMg"
              , mn = "SlotMachine_slot__jwCvC"
              , hn = "SlotMachine_staticColumn__O5zfB"
              , xn = "SlotMachine_sm__ZRCig"
              , vn = "SlotMachine_arrow__qOYmf"
              , fn = "SlotMachine_wentUp__z48TO"
              , gn = "SlotMachine_down__aYC8C"
              , kn = "SlotMachine_stable__CDMLP"
              , bn = "SlotMachine_wentDown__1fYUS"
              , jn = "SlotMachine_up__IuiYV";
            var wn = e=>{
                var t = e.animate
                  , r = e.result
                  , n = void 0 === r ? 0 : r
                  , a = e.columnStyle;
                return (0,
                C.jsxs)("div", {
                    className: _n,
                    children: [(0,
                    C.jsx)("div", {
                        className: pn
                    }), (0,
                    C.jsxs)("div", {
                        className: un,
                        style: a,
                        children: [(0,
                        C.jsx)("p", {
                            className: mn,
                            children: n
                        }), t && (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsx)("p", {
                                className: mn,
                                children: "1"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "2"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "3"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "4"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "5"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "6"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "7"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "8"
                            }), (0,
                            C.jsx)("p", {
                                className: mn,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , Cn = ()=>{
                var e = ot()
                  , t = e.changeRate
                  , r = e.isPending
                  , a = (0,
                n.useState)([])
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , c = (0,
                n.useState)(null)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , p = l[1]
                  , m = (0,
                n.useState)(!1)
                  , h = (0,
                u.Z)(m, 2)
                  , x = h[0]
                  , v = h[1];
                return (0,
                n.useEffect)((()=>{
                    r && v(!0)
                }
                ), [r]),
                (0,
                n.useEffect)((()=>{
                    var e;
                    null !== t ? (p(null === (e = t) ? null : e > 0 ? at.UP : 0 === e ? at.NONE : at.DOWN),
                    o(String(Math.abs(Number(pt(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    v(!1)) : p(null)
                }
                ), [t]),
                (0,
                C.jsxs)("div", {
                    className: _()(cn, x && ln),
                    children: [(0,
                    C.jsx)("div", {
                        className: _n,
                        children: (0,
                        C.jsxs)("div", {
                            className: _()(dn, {
                                [fn]: d === at.UP,
                                [bn]: d === at.DOWN,
                                [kn]: d === at.NONE
                            }),
                            children: [(0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: _()(vn, jn)
                            }), (0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: _()(vn, kn)
                            }), (0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: _()(vn, gn)
                            })]
                        })
                    }), (0,
                    C.jsx)(wn, {
                        animate: x,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    C.jsx)("span", {
                        className: hn,
                        children: "."
                    }), (0,
                    C.jsx)(wn, {
                        animate: x,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    C.jsx)(wn, {
                        animate: x,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    C.jsx)(wn, {
                        animate: x,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    C.jsx)(wn, {
                        animate: x,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    C.jsx)("span", {
                        className: _()(hn, xn),
                        children: "%"
                    })]
                })
            }
              , Nn = ()=>{
                var e = qe()
                  , t = ot()
                  , r = t.isPending
                  , a = t.changeRate
                  , s = We().countdownDisplay
                  , i = (0,
                n.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                n.useEffect)((()=>{
                    r && l(!0)
                }
                ), [r]),
                (0,
                n.useEffect)((()=>{
                    var e, t = ()=>{
                        e && clearTimeout(e)
                    }
                    ;
                    return r || (null === a ? l(!1) : e = setTimeout((()=>{
                        l(!1)
                    }
                    ), _t)),
                    t
                }
                ), [a, r]);
                var d = e ? "$".concat((0,
                lt.uf)(ut.yx.truncate(e, 1, !0))) : "--"
                  , p = s && !r;
                return (0,
                C.jsxs)("div", {
                    className: $r,
                    children: [(0,
                    C.jsx)(Er, {
                        className: _()(qr, r && Qr)
                    }), (0,
                    C.jsxs)("div", {
                        className: _()(en, c && nn),
                        children: [(0,
                        C.jsx)("p", {
                            className: an,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        C.jsx)("p", {
                            className: sn,
                            children: d
                        })]
                    }), (0,
                    C.jsxs)("div", {
                        className: _()(en, !c && nn),
                        children: [(0,
                        C.jsxs)("p", {
                            className: an,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        C.jsx)("div", {
                            className: on,
                            children: (0,
                            C.jsx)(Cn, {})
                        })]
                    }), (0,
                    C.jsx)(Ur, {
                        className: tn
                    }), (0,
                    C.jsx)("div", {
                        className: _()(rn, !p && nn),
                        children: (0,
                        C.jsx)(Jr, {})
                    })]
                })
            }
            ;
            const yn = "LandingPage_container__pU2cC"
              , On = "LandingPage_resultOverlay__WSYZb"
              , Pn = "LandingPage_disclaimer__pVRHC"
              , Zn = "LandingPage_recordsBtnContainer__Anr4Y"
              , En = "LandingPage_backgroundVideo__flTkH"
              , Tn = "LandingPage_content__D0ZLW"
              , Sn = "LandingPage_points__Ruq4j"
              , In = "LandingPage_coinPrice__nJ0nj"
              , Rn = "LandingPage_btnContainer__IEll8"
              , Ln = "LandingPage_termsAndConditions__MdClU";
            var Bn = r(22387);
            const An = "UserPointCounter_pointCounter__-QAj8"
              , Mn = "UserPointCounter_hide__o4qTQ"
              , Fn = "UserPointCounter_points__d3HeG"
              , Dn = "UserPointCounter_title__B-gN-"
              , Un = "UserPointCounter_countdown__Z7xGo"
              , Gn = "UserPointCounter_value__2a23E";
            var Vn = ()=>{
                var e = We().points
                  , t = (0,
                Bn.Z)(e)
                  , r = ot()
                  , a = r.isPending
                  , s = r.countdown
                  , i = (0,
                n.useRef)(null)
                  , o = (0,
                n.useState)(!1)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1];
                (0,
                n.useEffect)((()=>{
                    var e;
                    return a ? d(!0) : e = setTimeout((()=>{
                        d(!1)
                    }
                    ), 2500),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [a]);
                var p = (0,
                n.useCallback)(((e,t,r)=>{
                    e <= t && (r((0,
                    lt.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var n = function(e, t) {
                            var r = t - e;
                            return Math.max(1, Math.floor(r / 10))
                        }(e, t);
                        p(e + n, t, r)
                    }
                    )))
                }
                ), []);
                return (0,
                n.useEffect)((()=>{
                    var r;
                    if (t === e)
                        return ()=>{}
                        ;
                    function n(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (r = i.current) || void 0 === r ? void 0 : r.innerText) || !t)
                        return p(0, e, n),
                        ()=>{}
                        ;
                    var a = setTimeout((()=>{
                        p(t || 0, e, n)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(a)
                    }
                }
                ), [p, e, t]),
                (0,
                C.jsxs)("div", {
                    className: An,
                    children: [(0,
                    C.jsxs)("p", {
                        className: _()(Dn, l && Mn),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    C.jsx)("p", {
                        ref: i,
                        className: _()(Fn, l && Mn),
                        children: "0"
                    }), (0,
                    C.jsxs)("p", {
                        className: _()(Un, !l && Mn),
                        children: ["00:0", (0,
                        C.jsx)("span", {
                            className: Gn,
                            children: s
                        })]
                    })]
                })
            }
            ;
            const Wn = "ViewRecordsButton_button__MRo78"
              , Hn = "ViewRecordsButton_btnIcon__prKlS"
              , Kn = "ViewRecordsButton_title__obA3r"
              , Xn = "ViewRecordsButton_container__N3Rrb"
              , Yn = "ViewRecordsButton_recordContainer__ruZVu"
              , zn = "ViewRecordsButton_recordField__dACwq"
              , Jn = "ViewRecordsButton_label__xt3Hw"
              , qn = "ViewRecordsButton_value__lTHA5"
              , Qn = "ViewRecordsButton_trendIcon__3RV6P"
              , $n = "ViewRecordsButton_up__EC1B6"
              , ea = "ViewRecordsButton_down__4PWTz"
              , ta = "ViewRecordsButton_timestamp__P0JEp"
              , ra = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , na = "ViewRecordsButton_description__F22UB";
            var aa = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                C.jsxs)("div", {
                    className: zn,
                    children: [(0,
                    C.jsx)("p", {
                        className: Jn,
                        children: t
                    }), (0,
                    C.jsx)("div", {
                        className: qn,
                        children: r
                    })]
                })
            }
              , sa = ()=>(0,
            C.jsxs)("button", {
                className: Wn,
                type: "button",
                onClick: ()=>{
                    var e = tt().get(rt) || []
                      , t = (0,
                    C.jsx)(C.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , n = $n
                              , a = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            n = ea,
                            a = "okx-growth-trending-down"),
                            (0,
                            C.jsxs)("div", {
                                className: Yn,
                                children: [(0,
                                C.jsx)(aa, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    C.jsxs)(C.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        C.jsx)(E.Z, {
                                            className: _()(Qn, n),
                                            iconName: a
                                        })]
                                    })
                                }), (0,
                                C.jsx)(aa, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                C.jsx)(aa, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                C.jsx)("p", {
                                    className: ta,
                                    children: (0,
                                    lt.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        C.jsxs)("div", {
                            className: ra,
                            children: [(0,
                            C.jsx)("p", {
                                className: Kn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            C.jsx)("p", {
                                className: na,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = St.Z.show((0,
                        j.Z)((0,
                        j.Z)({}, Rt), {}, {
                            topContent: e.title ? void 0 : (0,
                            C.jsx)("div", {
                                className: It.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        C.jsx)("span", {
                            className: Kn,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: Xn,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                C.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Hn
                })]
            })
              , ia = ()=>{
                var e = L().uid;
                return (0,
                n.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        S.act({
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
                C.jsxs)("div", {
                    className: yn,
                    children: [(0,
                    C.jsx)("div", {
                        className: Zn,
                        children: (0,
                        C.jsx)(sa, {})
                    }), (0,
                    C.jsx)("div", {
                        className: En,
                        children: (0,
                        C.jsx)(ir, {})
                    }), (0,
                    C.jsxs)("div", {
                        className: Tn,
                        children: [(0,
                        C.jsx)("div", {
                            className: Sn,
                            children: (0,
                            C.jsx)(Vn, {})
                        }), (0,
                        C.jsx)("div", {
                            className: In,
                            children: (0,
                            C.jsx)(Nn, {})
                        }), (0,
                        C.jsx)(Nr, {
                            className: Rn
                        })]
                    }), (0,
                    C.jsx)("button", {
                        className: Ln,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Tt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    C.jsx)("p", {
                        className: Pn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    C.jsx)(Ot, {
                        className: On
                    }), (0,
                    C.jsx)(Gt, {})]
                })
            }
              , oa = ()=>(0,
            C.jsx)(ct, {
                children: (0,
                C.jsx)(ia, {})
            })
              , ca = r(24084)
              , la = r(58338);
            const ua = "PageTitle_title__IQ7TT";
            var da = e=>{
                var t = e.html;
                return (0,
                C.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        la.dU)(t)
                    },
                    className: ua
                })
            }
            ;
            const _a = "LeaderBoard_container__0DJSO"
              , pa = "LeaderBoard_desc__MFxC+"
              , ma = "LeaderBoard_inviteList__mV9a7"
              , ha = "LeaderBoard_tabActiveClassName__7Xv4B"
              , xa = "LeaderBoard_tabsContent__KCGtW"
              , va = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var fa = e=>{
                var t = e.className;
                return (0,
                C.jsx)("div", {
                    className: _()(va, t)
                })
            }
            ;
            const ga = "InviteButton_invite-btn__aAMio"
              , ka = "InviteButton_btn-a__At-wO"
              , ba = "InviteButton_btn-container__sYDy5"
              , ja = "InviteButton_copyButton__znucI"
              , wa = "InviteButton_copyIcon__QZgE9";
            var Ca = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , n = e.className
                  , a = L().uid
                  , s = (e=>{
                    var t = new $.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , n = "https://t.me/".concat(Pt.BOT_NAME, "/").concat(Pt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: n,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(n), "&text=").concat(r)
                    }
                }
                )(We().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                C.jsxs)("div", {
                    className: _()(n, ba),
                    children: [(0,
                    C.jsx)("a", {
                        className: ka,
                        href: i,
                        children: (0,
                        C.jsx)(Ft, {
                            onClick: ()=>{
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    S.act({
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
                            }
                            ,
                            className: ga,
                            text: r
                        })
                    }), (0,
                    C.jsx)(Bt.default, {
                        strictCircle: !0,
                        category: Bt.default.CATEGORY.fill,
                        type: Bt.default.TYPE.primary,
                        size: Bt.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(o),
                                te(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                te(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: ja,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: wa
                        })
                    })]
                })
            }
            ;
            const Na = "RankList_listItem__qJvXJ"
              , ya = "RankList_name__sxTWa"
              , Oa = "RankList_mask__ldBi8"
              , Pa = "RankList_hightLightRow__xYkeg"
              , Za = "RankList_listHeader__KVGnw"
              , Ea = "RankList_rank__k2m5R"
              , Ta = "RankList_icon__1-SRV"
              , Sa = "RankList_point__D5mVw"
              , Ia = "RankList_pointIcon__k80Wy"
              , Ra = "RankList_InviteButton__D6ute"
              , La = "RankList_noFirendsNote__Ckkil"
              , Ba = "RankList_under__MJ5We"
              , Aa = "RankList_rankItemPlaceholder__z-upW"
              , Ma = "RankList_rank-name__YEqnc"
              , Fa = "RankList_rank-score__gtI+m";
            var Da = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Ua = 1
              , Ga = 2
              , Va = e=>{
                var t = e.total;
                return (0,
                C.jsxs)("div", {
                    className: Za,
                    children: [(0,
                    C.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            lt.uf)(t)
                        })
                    }), (0,
                    C.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Wa = ()=>(0,
            C.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                C.jsxs)("div", {
                    className: Aa,
                    children: [(0,
                    C.jsx)(fa, {
                        className: Ma
                    }), (0,
                    C.jsx)(fa, {
                        className: Fa
                    })]
                }, t)))
            })
              , Ha = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                C.jsxs)("div", {
                    className: _()(Na, r && Pa),
                    children: [(0,
                    C.jsx)("div", {
                        className: Oa
                    }), t.rank <= 3 ? (0,
                    C.jsx)("span", {
                        className: _()(Ea, Ta),
                        children: Da[t.rank]
                    }) : (0,
                    C.jsx)("span", {
                        className: Ea,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    C.jsx)("div", {
                        className: ya,
                        children: t.extUserName
                    }), (0,
                    C.jsxs)("div", {
                        className: Sa,
                        children: [(0,
                        C.jsx)("span", {
                            className: Ia,
                            children: Da[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            lt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Ka = e=>{
                var t = e.pageType
                  , r = void 0 === t ? Ua : t
                  , a = (0,
                n.useState)(!0)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                n.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                n.useState)(0)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                n.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , b = k[0]
                  , j = k[1]
                  , w = (0,
                n.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var n, a;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    n = {
                                        pageNo: t
                                    },
                                    r !== Ua) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Te(n);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Se(n);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (m(a.rows),
                                    f(a.total),
                                    j(a.userRanking)),
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
                }(), [r])
                  , N = b && ((null === b || void 0 === b ? void 0 : b.rank) > 3 || -1 === (null === b || void 0 === b ? void 0 : b.rank));
                return (0,
                n.useEffect)((()=>{
                    w(1)
                }
                ), [w]),
                (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsx)(Va, {
                        total: v
                    }), i ? (0,
                    C.jsx)(Wa, {}) : (0,
                    C.jsxs)(C.Fragment, {
                        children: [N && (0,
                        C.jsx)(Ha, {
                            item: b,
                            isHighlight: !0
                        }), p.map(((e,t)=>(0,
                        C.jsx)(Ha, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    C.jsx)("div", {
                        className: Ba
                    }), r === Ua && (0,
                    C.jsxs)(C.Fragment, {
                        children: [1 === p.length && (0,
                        C.jsx)("div", {
                            className: La,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === p.length && (0,
                        C.jsx)(Ca, {
                            className: Ra,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Xa = ()=>(0,
            C.jsxs)("div", {
                className: _a,
                children: [(0,
                C.jsx)(da, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        Z.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                C.jsx)("div", {
                    className: pa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                C.jsxs)(ca.Z, {
                    activeClassName: ha,
                    noPadding: !0,
                    size: ca.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    C.jsx)(ca.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: Ua,
                        className: xa,
                        children: (0,
                        C.jsx)("div", {
                            className: ma,
                            children: (0,
                            C.jsx)(Ka, {
                                pageType: Ua
                            })
                        })
                    }), (0,
                    C.jsx)(ca.Z.TabPane, {
                        className: xa,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: Ga,
                        children: (0,
                        C.jsx)("div", {
                            className: ma,
                            children: (0,
                            C.jsx)(Ka, {
                                pageType: Ga
                            })
                        })
                    })]
                })]
            });
            const Ya = "QrCode_container__r4Fu7"
              , za = "QrCode_qrCode__16PWa"
              , Ja = "QrCode_title__+cibb"
              , qa = "QrCode_message__eaOzW";
            var Qa = ()=>(0,
            C.jsxs)("div", {
                className: Ya,
                children: [(0,
                C.jsx)(Vt.Z, {
                    className: za,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                C.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        la.dU)((0,
                        Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Ja
                }), (0,
                C.jsx)("p", {
                    className: qa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , $a = r(90534);
            const es = "PullupList_loading__+51Dh"
              , ts = "PullupList_listLoadItem__XcvkH"
              , rs = "PullupList_listLeft__4eGh6"
              , ns = "PullupList_listRight__w7Ely"
              , as = "PullupList_listLoading__whJeg";
            var ss = ()=>(0,
            C.jsxs)("div", {
                className: _()(ts),
                children: [(0,
                C.jsx)(fa, {
                    className: rs
                }), (0,
                C.jsx)(fa, {
                    className: ns
                })]
            })
              , is = ()=>(0,
            C.jsx)("div", {
                className: as,
                children: Array(3).fill(null).map(((e,t)=>(0,
                C.jsx)(ss, {}, t)))
            })
              , os = e=>{
                var t = e.loadData
                  , r = e.children
                  , a = (0,
                n.useState)([])
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                n.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                n.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , x = (0,
                n.useRef)(null)
                  , v = (0,
                n.useState)(!1)
                  , f = (0,
                u.Z)(v, 2)
                  , g = f[0]
                  , k = f[1]
                  , b = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        var r;
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
                                    return m(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(h.current.page, h.current.total);
                                case 6:
                                    (r = e.sent) && r.rows ? (h.current.page += 1,
                                    o((e=>[...e, ...r.rows])),
                                    h.current.total = 0 === r.rows.length ? i.length : r.total) : h.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    h.current.stop = !0;
                                case 13:
                                    m(!1);
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
                  , j = (0,
                $a.Z)(b, {
                    wait: 500,
                    leading: !0
                }).run
                  , w = e=>{
                    e[0].isIntersecting && !p && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                n.useEffect)((()=>{
                    var e = new IntersectionObserver(w,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return x.current && e.observe(x.current),
                    ()=>{
                        x.current && e.unobserve(x.current)
                    }
                }
                ), [p]),
                (0,
                n.useEffect)((()=>{
                    j()
                }
                ), [g]),
                (0,
                C.jsxs)(C.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    C.jsx)("div", {
                        className: es,
                        ref: x,
                        children: p && (0,
                        C.jsx)(is, {})
                    })]
                })
            }
            ;
            const cs = "InviteList_listItem__q4jhG"
              , ls = "InviteList_name__LLQgt"
              , us = "InviteList_point__kXtCn"
              , ds = "InviteList_earnedPrice__4vAfw"
              , _s = "InviteList_pointNumber__v4P1H";
            var ps = ()=>{
                var e = (0,
                n.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , a = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, r) {
                        var n, s, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = !1,
                                    1 === t && (n = !0),
                                    s = {
                                        pageNo: t
                                    },
                                    r && r >= 0 && (s.total = r),
                                    e.next = 6,
                                    Ee(s, n);
                                case 6:
                                    return (i = e.sent) && a(i.accumPoints),
                                    e.abrupt("return", i);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsx)("div", {
                        className: ds,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            C.jsx)("span", {
                                className: _s,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    lt.uf)(r)
                                })
                            })
                        })
                    }), (0,
                    C.jsx)(os, {
                        loadData: s,
                        children: (e,t)=>(0,
                        C.jsxs)("div", {
                            className: cs,
                            children: [(0,
                            C.jsx)("div", {
                                className: ls,
                                children: e.extInviteeName
                            }), (0,
                            C.jsx)("div", {
                                className: us,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    lt.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const ms = "ReferralsPage_container__V48m1"
              , hs = "ReferralsPage_inviteDetail__L1MhM"
              , xs = "ReferralsPage_detailItem__ujOp+"
              , vs = "ReferralsPage_dot__zKW7L"
              , fs = "ReferralsPage_detailTitle__OE657"
              , gs = "ReferralsPage_detailInfo__YC+Y9"
              , ks = "ReferralsPage_inviteList__Jksx8";
            var bs = ()=>{
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
                n.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        S.act({
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
                C.jsxs)("div", {
                    className: ms,
                    children: [(0,
                    C.jsx)(da, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    C.jsx)("div", {
                        className: hs,
                        children: t.map((e=>(0,
                        C.jsxs)("div", {
                            className: xs,
                            children: [(0,
                            C.jsx)("div", {
                                className: vs
                            }), (0,
                            C.jsx)("div", {
                                className: fs,
                                children: e.title
                            }), (0,
                            C.jsx)("div", {
                                className: gs,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    C.jsx)("div", {
                        className: ks,
                        children: (0,
                        C.jsx)(ps, {})
                    }), (0,
                    C.jsx)(Ca, {})]
                })
            }
            ;
            const js = "Tag_tag__tkWly";
            var ws, Cs, Ns, ys, Os, Ps, Zs, Es, Ts = e=>{
                var t = e.text
                  , r = e.className;
                return (0,
                C.jsx)("span", {
                    className: _()(js, r),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
            , Ss = ["title", "titleId"];
            function Is() {
                return Is = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Is.apply(this, arguments)
            }
            function Rs(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function Ls(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Rs(e, Ss);
                return n.createElement("svg", Is({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, ws || (ws = n.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Cs || (Cs = n.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Ns || (Ns = n.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ys || (ys = n.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), Os || (Os = n.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Ps || (Ps = n.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Zs || (Zs = n.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Es || (Es = n.createElement("defs", null, n.createElement("filter", {
                    id: "filter0_dd_888_7961",
                    x: 22.7336,
                    y: 26.6704,
                    width: 43.0309,
                    height: 34.1671,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, n.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), n.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), n.createElement("feOffset", null), n.createElement("feGaussianBlur", {
                    stdDeviation: 2.75
                }), n.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), n.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_888_7961"
                }), n.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), n.createElement("feOffset", null), n.createElement("feGaussianBlur", {
                    stdDeviation: 3.76406
                }), n.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), n.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect1_dropShadow_888_7961",
                    result: "effect2_dropShadow_888_7961"
                }), n.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_888_7961",
                    result: "shape"
                })))))
            }
            var Bs = n.forwardRef(Ls);
            r.p;
            const As = "index_container__DxcAz"
              , Ms = "index_logo__h1T0A"
              , Fs = "index_tlt__dqJHn"
              , Ds = "index_subtlt__m3p5l";
            var Us = ()=>(0,
            C.jsxs)("div", {
                className: As,
                children: [(0,
                C.jsx)(Bs, {
                    className: Ms
                }), (0,
                C.jsx)("div", {
                    className: Fs,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                C.jsx)("div", {
                    className: Ds,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Gs = a().memo(Us);
            var Vs, Ws = ["title", "titleId"];
            function Hs() {
                return Hs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Hs.apply(this, arguments)
            }
            function Ks(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function Xs(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Ks(e, Ws);
                return n.createElement("svg", Hs({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Vs || (Vs = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Ys = n.forwardRef(Xs);
            r.p;
            var zs, Js = ["title", "titleId"];
            function qs() {
                return qs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                qs.apply(this, arguments)
            }
            function Qs(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function $s(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Qs(e, Js);
                return n.createElement("svg", qs({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, zs || (zs = n.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var ei = n.forwardRef($s);
            r.p;
            var ti, ri = ["title", "titleId"];
            function ni() {
                return ni = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                ni.apply(this, arguments)
            }
            function ai(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function si(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = ai(e, ri);
                return n.createElement("svg", ni({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, ti || (ti = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var ii = n.forwardRef(si);
            r.p;
            var oi = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , ci = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
            function li(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: oi.SIGNUP,
                    status: ci(oi.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: oi.INSTALL,
                    status: ci(oi.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: oi.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: oi.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var ui = e=>{
                var t = (0,
                n.useState)(li(e))
                  , r = (0,
                u.Z)(t, 2)
                  , a = r[0]
                  , s = r[1]
                  , i = L().uid;
                (0,
                n.useEffect)((()=>{
                    s(li(e))
                }
                ), [e]);
                var o = (0,
                n.useCallback)((t=>{
                    var r, n, o = a.find((e=>e.type === t));
                    if (o) {
                        switch (null === (r = window) || void 0 === r || null === (n = r.Telegram) || void 0 === n || n.WebApp.openLink(o.url),
                        t) {
                        case oi.SIGNUP:
                        case oi.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(li(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case oi.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                        case oi.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                        case oi.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
                        case oi.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                S.act({
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
            }
            ;
            const di = "index_container__ZAgXf"
              , _i = "index_container_avatar__HvLrA"
              , pi = "index_container_task__OmqjX"
              , mi = "index_task_tlt__pIkV2"
              , hi = "index_tlt_sub__2aRiA"
              , xi = "index_tlt_arrow__kdbln"
              , vi = "index_task_subtlt__mzIaE";
            var fi = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                C.jsx)("div", {
                    className: _i,
                    children: r ? (0,
                    C.jsx)(ii, {}) : (0,
                    C.jsx)(ei, {})
                })
            }
              , gi = e=>{
                var t = e.title
                  , r = e.subTitle
                  , n = e.type
                  , a = e.onClick
                  , s = e.status;
                return (0,
                C.jsxs)("div", {
                    className: pi,
                    onClick: ()=>{
                        a(n)
                    }
                    ,
                    children: [(0,
                    C.jsxs)("div", {
                        className: mi,
                        children: [(0,
                        C.jsx)(fi, {
                            status: s
                        }), " ", (0,
                        C.jsx)("div", {
                            className: hi,
                            children: t
                        }), (0,
                        C.jsx)(Ys, {
                            className: xi
                        })]
                    }), (0,
                    C.jsx)("div", {
                        className: vi,
                        children: r
                    })]
                })
            }
            ;
            const ki = e=>{
                var t = ui(e)
                  , r = t.list
                  , n = t.handleClick;
                return (0,
                C.jsx)("div", {
                    className: di,
                    children: r.map((e=>(0,
                    C.jsx)(gi, (0,
                    j.Z)((0,
                    j.Z)({}, e), {}, {
                        onClick: n
                    }), e.type)))
                })
            }
            ;
            var bi, ji, wi, Ci = ["title", "titleId"];
            function Ni() {
                return Ni = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Ni.apply(this, arguments)
            }
            function yi(e, t) {
                if (null == e)
                    return {};
                var r, n, a = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, a = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            function Oi(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = yi(e, Ci);
                return n.createElement("svg", Ni({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, bi || (bi = n.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), ji || (ji = n.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), wi || (wi = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var Pi = n.forwardRef(Oi);
            r.p;
            const Zi = "index_loader__kDy+9"
              , Ei = "index_container__X8xX8"
              , Ti = "index_container_subtlt__LyYby"
              , Si = "index_container_info__c9KQP"
              , Ii = "index_info_icon__i5uhI"
              , Ri = "index_container_btn__rWex7"
              , Li = "index_tncContainer__McO06"
              , Bi = "index_termsAndConditions__Gifk+"
              , Ai = "index_autoPilotTask__tP9yX"
              , Mi = "index_autoPilotIcon__334Cy"
              , Fi = "index_autoPilotTitle__7zwDH"
              , Di = "index_newTag__h508t"
              , Ui = "index_autoPilotDesc__D59sa";
            var Gi = ()=>(0,
            C.jsx)(Gs, {})
              , Vi = e=>(0,
            C.jsxs)("div", {
                className: Ei,
                children: [(0,
                C.jsx)(da, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_title_ready_surprises")
                }), (0,
                C.jsx)("div", {
                    className: Ti,
                    children: (0,
                    Z.O4)("ok_game_okxracer_text_autodrive_complete_steps")
                }), (0,
                C.jsxs)("div", {
                    className: Ai,
                    children: [(0,
                    C.jsx)("div", {
                        className: Mi,
                        children: "\ud83d\udede"
                    }), (0,
                    C.jsxs)("div", {
                        children: [(0,
                        C.jsxs)("div", {
                            className: Fi,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_title_autodriving"), (0,
                            C.jsx)(Ts, {
                                className: Di
                            })]
                        }), (0,
                        C.jsx)("div", {
                            className: Ui,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_play_away")
                        })]
                    })]
                }), (0,
                C.jsx)(ki, (0,
                j.Z)({}, e)), (0,
                C.jsxs)("div", {
                    className: Si,
                    children: [(0,
                    C.jsx)(Pi, {
                        className: Ii,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                C.jsx)(Ft, {
                    onClick: e.onClick,
                    className: Ri,
                    text: (0,
                    Z.O4)("ok_game_okxracer_surprises_verify")
                }), (0,
                C.jsx)("div", {
                    className: Li,
                    children: (0,
                    C.jsx)("button", {
                        className: Bi,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Tt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , Wi = ()=>{
                var e = L().uid
                  , t = (0,
                n.useState)(!0)
                  , r = (0,
                u.Z)(t, 2)
                  , a = r[0]
                  , s = r[1]
                  , i = (0,
                n.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP"
                })
                  , o = (0,
                u.Z)(i, 2)
                  , d = o[0]
                  , _ = o[1]
                  , p = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r, n, a = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] && a[0],
                                r = a.length > 1 ? a[1] : void 0,
                                e.prev = 2,
                                e.next = 5,
                                Me(r);
                            case 5:
                                n = e.sent,
                                s(!1),
                                n && _(n),
                                !t || null !== n && void 0 !== n && n.isKyc && n.isConnectTelegram || te(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(2),
                                te(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 11]])
                }
                ))), []);
                return (0,
                n.useEffect)((()=>{
                    function e() {
                        document.hidden || p()
                    }
                    return p(!1, !0),
                    document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [p]),
                (0,
                n.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        S.act({
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
                C.jsx)("div", {
                    className: Zi,
                    children: (0,
                    C.jsx)(Tr.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                C.jsx)(Gi, {}) : (0,
                C.jsx)(Vi, (0,
                j.Z)((0,
                j.Z)({}, d), {}, {
                    onClick: ()=>{
                        p(!0),
                        function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                            S.act({
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
              , Hi = (0,
            n.createContext)({
                boosts: [],
                tasks: [],
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
                }()
            })
              , Ki = ()=>(0,
            n.useContext)(Hi)
              , Xi = e=>{
                var t = e.children
                  , r = (0,
                n.useState)([])
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useState)([])
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = We().updateGameInfoFromServer
                  , h = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Re(!0), Be(!0)]);
                            case 2:
                                "fulfilled" === (n = e.sent)[0].status && i(null !== (t = n[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === n[1].status && p(null !== (r = n[1].value.data) && void 0 !== r ? r : []);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [])
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Le({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Re(), m()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && i(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    re(e.t0);
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
                  , v = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ae({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Be(), m()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && p(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    re(e.t0);
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
                }();
                return (0,
                n.useEffect)((()=>{
                    h()
                }
                ), [h]),
                (0,
                C.jsx)(Hi.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: v
                    },
                    children: t
                })
            }
              , Yi = e=>(null === e || void 0 === e ? void 0 : e.type) === Et.DailyBoost
              , zi = e=>"actionType"in e && e.actionType === Ie.UnLock
              , Ji = e=>{
                var t = e.pointCost
                  , r = e.curStage
                  , n = e.totalStage;
                return !Yi(e) && r >= n ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                lt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const qi = "index_sheet__FbHHx"
              , Qi = "index_sheet-icon__H2xCV"
              , $i = "index_boostSheetTag__NbYFf"
              , eo = "index_sheet-title__RInQ-"
              , to = "index_sheet-desc__W9myB"
              , ro = "index_sheet-data__FALtV"
              , no = "index_sheet-point__Xrsvs"
              , ao = "index_sheet-lvl__f1+W-"
              , so = "index_lockBtnContainer__4DPO7"
              , io = "index_btn__bxKiJ"
              , oo = "index_boost-data-split-point__TaGIo";
            var co = e=>{
                var t = e.boost
                  , r = e.onClick
                  , n = t
                  , a = n.context
                  , s = n.curStage
                  , i = n.totalStage
                  , o = n.isLocked
                  , c = a.icon
                  , l = a.name
                  , u = a.desc
                  , d = a.btnText
                  , _ = zi(a)
                  , p = !1
                  , m = u
                  , h = d;
                return _ && (o ? (m = a.unlockDescription,
                h = a.unlockButtonText) : m = a.ruleDescription,
                s === i && (p = !0,
                h = a.activatedButtonText)),
                (0,
                C.jsxs)("div", {
                    className: qi,
                    children: [(0,
                    C.jsx)("div", {
                        className: Qi,
                        children: c
                    }), _ && (0,
                    C.jsx)(Ts, {
                        className: $i
                    }), (0,
                    C.jsx)("div", {
                        className: eo,
                        children: l
                    }), (0,
                    C.jsx)("div", {
                        className: to,
                        children: m
                    }), (0,
                    C.jsxs)("div", {
                        className: ro,
                        children: [(0,
                        C.jsx)("span", {
                            className: no,
                            children: Ji(t)
                        }), (Yi(t) || s < i) && (0,
                        C.jsx)("span", {
                            className: oo
                        }), (0,
                        C.jsx)("span", {
                            className: ao,
                            children: Yi(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    C.jsx)(z, {
                        to: U,
                        className: so,
                        children: (0,
                        C.jsx)(Ft, {
                            text: h
                        })
                    }) : (0,
                    C.jsx)(Ft, {
                        onClick: ()=>{
                            r(t)
                        }
                        ,
                        className: io,
                        text: h,
                        disabled: p
                    })]
                })
            }
            ;
            const lo = "index_boost-item__k6pnm"
              , uo = "index_boost-icon__wH6Dh"
              , _o = "index_boost-title__9R-Ry"
              , po = "index_newTag__tgIea"
              , mo = "index_boost-desc__k1Big"
              , ho = "index_boost-data__+0cnG"
              , xo = "index_boost-data-split-point__moT+k"
              , vo = "index_boost-data-stage__8CAgC"
              , fo = "index_boostItemPlaceholder__NaUkk"
              , go = "index_locked__sM-YP"
              , ko = "index_unlockIcon__whxqz"
              , bo = "index_unlockButton__C3EY5";
            var jo = e=>{
                var t = e.boost
                  , r = t.curStage
                  , n = t.totalStage
                  , a = t.isLocked
                  , s = t.context;
                if (zi(s)) {
                    if (a)
                        return (0,
                        C.jsx)("div", {
                            className: ho,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (r === n)
                        return (0,
                        C.jsx)("div", {
                            className: ho,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                C.jsxs)("div", {
                    className: ho,
                    children: [(0,
                    C.jsx)("span", {
                        children: Ji(t)
                    }), (Yi(t) || r < n) && (0,
                    C.jsx)("span", {
                        className: xo
                    }), (0,
                    C.jsx)("span", {
                        className: vo,
                        children: Yi(t) ? "".concat(n - r, "/").concat(n) : "Lvl ".concat(r)
                    })]
                })
            }
              , wo = e=>{
                var t = e.boost
                  , r = e.onClick
                  , n = t.id
                  , a = t.context
                  , s = t.isLocked
                  , i = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = zi(a);
                return (0,
                C.jsxs)("div", {
                    className: lo,
                    onClick: ()=>{
                        r(n)
                    }
                    ,
                    children: [(0,
                    C.jsx)("div", {
                        className: uo,
                        children: i
                    }), (0,
                    C.jsxs)("div", {
                        className: _o,
                        children: [o, l && (0,
                        C.jsx)(Ts, {
                            className: po
                        })]
                    }), (0,
                    C.jsx)("div", {
                        className: mo,
                        children: c
                    }), (0,
                    C.jsx)(jo, {
                        boost: t
                    }), s && (0,
                    C.jsxs)("div", {
                        className: go,
                        children: [(0,
                        C.jsx)(E.Z, {
                            className: _()("okx-growth-lock", ko)
                        }), (0,
                        C.jsx)(Bt.default, {
                            category: Bt.default.CATEGORY.text,
                            type: Bt.default.TYPE.primary,
                            size: Bt.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: Bt.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: bo,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, n)
            }
              , Co = ()=>(0,
            C.jsxs)("div", {
                className: _()(lo, fo),
                children: [(0,
                C.jsx)(fa, {
                    className: uo
                }), (0,
                C.jsx)(fa, {
                    className: _o
                }), (0,
                C.jsx)(fa, {
                    className: mo
                }), (0,
                C.jsx)(fa, {
                    className: ho
                })]
            });
            const No = "index_boost-item-container__SW62L"
              , yo = "index_boost-item-padding__IwiTB";
            var Oo = e=>{
                var t = e.onClick
                  , r = Ki().boosts
                  , a = (0,
                n.useCallback)((e=>{
                    var n = r.find((t=>t.id === e));
                    n && t(n)
                }
                ), [r, t]);
                return (0,
                C.jsxs)("div", {
                    className: No,
                    children: [(0,
                    C.jsx)("div", {
                        className: yo
                    }), r.length > 0 ? (0,
                    C.jsx)(C.Fragment, {
                        children: r.map((e=>(0,
                        C.jsx)(wo, {
                            boost: e,
                            onClick: a
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    C.jsxs)(C.Fragment, {
                        children: [(0,
                        C.jsx)(Co, {}), (0,
                        C.jsx)(Co, {}), (0,
                        C.jsx)(Co, {})]
                    }), (0,
                    C.jsx)("div", {
                        className: yo
                    })]
                })
            }
            ;
            const Po = "BoostArea_boosts-title__hkjWn"
              , Zo = "BoostArea_boost-area__AMJbh"
              , Eo = "BoostArea_container__qLJSQ";
            var To = ()=>{
                var e = Ki()
                  , t = e.boosts
                  , r = e.upgradeBoost
                  , a = (0,
                n.useState)()
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                n.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = We().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var n, a, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.pointCost,
                                    a = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(a))) {
                                        e.next = 5;
                                        break
                                    }
                                    te(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(n) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    te(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    r(t.id);
                                case 11:
                                    e.sent && te(!0);
                                case 13:
                                    m(!1);
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
                n.useCallback)((e=>{
                    m(!0),
                    o(e)
                }
                ), []);
                return (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsxs)("div", {
                        className: Po,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    C.jsx)("div", {
                        className: Zo,
                        children: (0,
                        C.jsxs)("div", {
                            className: Eo,
                            children: [(0,
                            C.jsx)(Oo, {
                                onClick: v
                            }), (0,
                            C.jsx)(Lt, {
                                visible: p,
                                onClose: ()=>{
                                    m(!1)
                                }
                                ,
                                children: i && (0,
                                C.jsx)(co, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const So = "TaskArea_tasks-title__tN1pb"
              , Io = "TaskArea_container__Iz7a-"
              , Ro = "TaskArea_task-item__w79wY"
              , Lo = "TaskArea_item-left__1r6mY"
              , Bo = "TaskArea_item-right__lk7YG"
              , Ao = "TaskArea_icon__RfKa0"
              , Mo = "TaskArea_title__OyXme"
              , Fo = "TaskArea_state__d9FdX"
              , Do = "TaskArea_sheet-container__lottt"
              , Uo = "TaskArea_sheet-name__CibLI"
              , Go = "TaskArea_sheet-desc__aaGRQ"
              , Vo = "TaskArea_btn__HU6oE"
              , Wo = "TaskArea_done__fmgjd"
              , Ho = "TaskArea_taskItemPlaceholder__JXSdR"
              , Ko = "TaskArea_task__cxfzp";
            var Xo = ()=>{
                var e = Ki()
                  , t = e.tasks
                  , r = e.doTask
                  , a = (0,
                n.useState)()
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                n.useState)(!1)
                  , p = (0,
                u.Z)(d, 2)
                  , m = p[0]
                  , h = p[1]
                  , x = (0,
                $a.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == Zt.finished)
                            return;
                        o(r),
                        h(!0)
                    }
                }
                ), {
                    wait: 500
                }).run
                  , v = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var n, a;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return 2 === t.context.actionType && t.context.redirectLink && (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(t.context.redirectLink)),
                                    e.next = 3,
                                    r(t.id);
                                case 3:
                                    e.sent && te(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    h(!1);
                                case 6:
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
                  , f = ()=>(0,
                C.jsx)("div", {
                    children: Array.from({
                        length: 2
                    }).map(((e,t)=>(0,
                    C.jsx)("div", {
                        className: _()(Ho),
                        children: (0,
                        C.jsx)(fa, {
                            className: Ko
                        })
                    }, t)))
                });
                return (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsxs)("div", {
                        className: So,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_tasks"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    C.jsxs)("div", {
                        className: Io,
                        children: [t.length > 0 ? t.map((e=>e && (e=>{
                            var t = e.id
                              , r = e.points
                              , n = e.state
                              , a = e.context;
                            return (0,
                            C.jsxs)("div", {
                                className: Ro,
                                onClick: ()=>{
                                    x(t)
                                }
                                ,
                                children: [(0,
                                C.jsxs)("div", {
                                    className: Lo,
                                    children: [(0,
                                    C.jsx)("div", {
                                        className: Mo,
                                        children: a.name
                                    }), (0,
                                    C.jsx)("div", {
                                        className: Fo,
                                        children: " ".concat(n === Zt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                        lt.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0,
                                C.jsx)("div", {
                                    className: Bo,
                                    children: n === Zt.finished ? (0,
                                    C.jsx)("div", {
                                        className: Wo,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_done")
                                    }) : (0,
                                    C.jsx)(E.Z, {
                                        className: _()("okx-growth-chevrons-right", Ao)
                                    })
                                })]
                            }, t)
                        }
                        )(e))) : (0,
                        C.jsx)(f, {}), i && (0,
                        C.jsx)(Lt, {
                            noContentPadding: !0,
                            visible: m,
                            onClose: ()=>{
                                h(!1)
                            }
                            ,
                            children: (()=>{
                                var e = i.context
                                  , t = e.desc
                                  , r = e.btnText;
                                return (0,
                                C.jsxs)("div", {
                                    className: Do,
                                    children: [(0,
                                    C.jsx)("div", {
                                        className: Uo,
                                        children: e.name
                                    }), (0,
                                    C.jsx)("div", {
                                        className: Go,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            la.dU)(t)
                                        }
                                    }), (0,
                                    C.jsx)(Ft, {
                                        className: Vo,
                                        onClick: ()=>v(i),
                                        text: r
                                    })]
                                })
                            }
                            )()
                        })]
                    })]
                })
            }
            ;
            const Yo = "TaskPage_container__5KfIM"
              , zo = "TaskPage_block__kt8oo"
              , Jo = "TaskPage_block-boost__QYQXL"
              , qo = "TaskPage_points-title__4hW9Y"
              , Qo = "TaskPage_points-content__+yK3g";
            var $o = ()=>{
                var e = We().points;
                return (0,
                C.jsxs)("div", {
                    className: Yo,
                    children: [(0,
                    C.jsx)("div", {
                        className: zo,
                        children: (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsxs)("div", {
                                className: qo,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            C.jsx)("div", {
                                className: Qo,
                                children: ut.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    C.jsx)("div", {
                        className: Jo,
                        children: (0,
                        C.jsx)(To, {})
                    }), (0,
                    C.jsx)("div", {
                        className: zo,
                        children: (0,
                        C.jsx)(Xo, {})
                    })]
                })
            }
              , ec = ()=>(0,
            C.jsx)(Xi, {
                children: (0,
                C.jsx)($o, {})
            })
              , tc = ()=>{
                var e = (0,
                n.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , a = t[1]
                  , i = (0,
                n.useMemo)(f, []);
                (0,
                n.useMemo)((()=>{
                    h.Z.setConfig({
                        popupClassName: "theme-dark"
                    }),
                    x.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var o = (()=>{
                    var e = L().uid;
                    return (0,
                    n.useEffect)((()=>{
                        var e, t, r, n, a, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (r = (n = window.Telegram.WebApp).ready) || void 0 === r || r.call(n),
                        null === (a = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === a || a.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d)),
                        document.addEventListener("contextmenu", (e=>e.preventDefault()))
                    }
                    ), []),
                    {
                        isAllowToLoadApp: true//Q(window) && Boolean(e) && !(window.location != window.parent.location)
                    }
                }
                )().isAllowToLoadApp;
                return (0,
                n.useEffect)((()=>{
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
                                        p.d)(i);
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
                    }
                    )()()
                }
                ), [i]),
                (0,
                C.jsx)("article", {
                    className: _()(g, "theme-dark"),
                    children: (0,
                    C.jsx)(m.Z, {
                        localeData: r,
                        fetchConfig: i,
                        children: o ? (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsx)(ze, {
                                children: (0,
                                C.jsx)(He, {
                                    children: (0,
                                    C.jsx)(Qe, {
                                        children: (0,
                                        C.jsx)("main", {
                                            className: b,
                                            children: (0,
                                            C.jsxs)(s.Switch, {
                                                children: [(0,
                                                C.jsx)(s.Route, {
                                                    path: A,
                                                    component: N(oa),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: D,
                                                    component: O(Xa),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: F,
                                                    component: N(ec),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: M,
                                                    component: O(bs),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: U,
                                                    component: O(Wi),
                                                    exact: !0
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            C.jsx)("div", {
                                className: k,
                                children: (0,
                                C.jsx)(q, {})
                            })]
                        }) : (0,
                        C.jsx)(Qa, {})
                    })
                })
            }
              , rc = document.getElementById("root");
            if (rc) {
                var nc = (0,
                C.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    C.jsx)(B, {
                        children: (0,
                        C.jsx)(tc, {})
                    })
                });
                (0,
                i.createRoot)(rc).render(nc)
            }
        }
        ,
        87363: e=>{
            e.exports = React
        }
        ,
        61533: e=>{
            e.exports = ReactDOM
        }
    }
      , t = {};
    function r(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, r),
        s.exports
    }
    r.m = e,
    (()=>{
        var e = [];
        r.O = (t,n,a,s)=>{
            if (!n) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n,a,s] = e[u], o = !0, c = 0; c < n.length; c++)
                        (!1 & s || i >= s) && Object.keys(r.O).every((e=>r.O[e](n[c]))) ? n.splice(c--, 1) : (o = !1,
                        s < i && (i = s));
                    if (o) {
                        e.splice(u--, 1);
                        var l = a();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [n, a, s]
        }
    }
    )(),
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var a = n.length - 1; a > -1 && !e; )
                    e = n[a--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        r.p = e + "../"
    }
    )(),
    (()=>{
        try {
            if (r.miniCssF) {
                var e = r.miniCssF;
                r.miniCssF = function(t) {
                    var r = e(t);
                    if ("string" !== typeof r)
                        return r;
                    var n = window._okGlobal || window.okGlobal;
                    return n && n.isRTL && /\.css$/.test(r) ? r.replace(/\.css$/, ".rtl.css") : r
                }
            }
        } catch (t) {}
    }
    )(),
    (()=>{
        var e = {
            6554: 0,
            9824: 0
        };
        r.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var a, s, [i,o,c] = n, l = 0;
            if (i.some((t=>0 !== e[t]))) {
                for (a in o)
                    r.o(o, a) && (r.m[a] = o[a]);
                if (c)
                    var u = c(r)
            }
            for (t && t(n); l < i.length; l++)
                s = i[l],
                r.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return r.O(u)
        }
          , n = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )();
    var n = r.O(void 0, [2675, 5825, 9824, 5890, 6970, 7569, 6877, 4084, 5573, 7110, 731, 3043], (()=>r(91816)));
    n = r.O(n)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.8a8d847a.js.map
