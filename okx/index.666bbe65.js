(()=>{
    var e = {
        54584: (e,t,n)=>{
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
            const b = "NoPaddingLayout_no-padding-layout__6LAKV";
            var j = n(45263);
            const w = "ComPaddingLayout_common-padding-layout__0gGbM";
            var C = e=>t=>(0,
            j.jsx)("div", {
                className: w,
                children: (0,
                j.jsx)(e, (0,
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
              , R = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , I = (0,
            a.createContext)(R)
              , L = ()=>(0,
            a.useContext)(I)
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
                    return R
                }
                ), [])
                  , r = (0,
                a.useState)(n)
                  , s = (0,
                u.Z)(r, 1)[0];
                return (0,
                j.jsx)(I.Provider, {
                    value: s,
                    children: t
                })
            }
              , A = "/mini-app/racer"
              , M = "/mini-app/racer/referrals"
              , W = "/mini-app/racer/tasks"
              , U = "/mini-app/racer/tasks/partner"
              , F = "/mini-app/racer/leaderboard"
              , D = "/mini-app/racer/rewards";
            const V = "Navbar_navbar__LF3-M"
              , G = "Navbar_link__qX0Sf"
              , H = "Navbar_active__TCbF8"
              , K = "Navbar_linkIcon__GtH54"
              , Y = "Navbar_linkText__Szxi-";
            var X = ["children", "className"]
              , z = ["iconName", "label", "onClick"]
              , J = e=>{
                var t = e.children
                  , n = e.className
                  , a = (0,
                N.Z)(e, X)
                  , r = (0,
                s.useLocation)().hash;
                return (0,
                j.jsx)(s.Link, {
                    className: n,
                    to: "".concat(a.to).concat(r),
                    onClick: a.onClick,
                    children: t
                })
            }
              , q = e=>{
                var t = e.iconName
                  , n = e.label
                  , a = e.onClick
                  , r = (0,
                N.Z)(e, z)
                  , i = (0,
                s.useRouteMatch)({
                    path: r.to,
                    exact: r.to === A
                });
                return (0,
                j.jsxs)(J, {
                    className: O()(G, i && H),
                    to: r.to,
                    onClick: a,
                    children: [(0,
                    j.jsx)(Z.Z, {
                        iconName: t,
                        className: K
                    }), (0,
                    j.jsx)("span", {
                        className: Y,
                        children: n
                    })]
                })
            }
              , Q = ()=>{
                var e = {
                    telegramid: L().uid
                };
                return (0,
                j.jsxs)("div", {
                    className: V,
                    children: [(0,
                    j.jsx)(q, {
                        iconName: "okx-growth-home",
                        to: A,
                        label: (0,
                        P.O4)("ok_game_okxracer_home")
                    }), (0,
                    j.jsx)(q, {
                        iconName: "okx-growth-leaderboard",
                        to: F,
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
                    j.jsx)(q, {
                        iconName: "okx-growth-task",
                        to: W,
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
                    j.jsx)(q, {
                        iconName: "okx-growth-friends",
                        to: M,
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
                    j.jsx)(q, {
                        iconName: "okx-growth-surprises",
                        to: D,
                        label: (0,
                        P.O4)("ok_game_okxracer_surprises")
                    })]
                })
            }
            ;
            var $ = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , ee = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , te = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , ne = "/help/okx-racer-terms-and-conditions"
              , ae = ()=>"".concat(o.Z.cdnBaseUrl, "/cdn/assets/files/247/E8722761C0AB6781.json");
            function re(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            function se() {
                return window.location != window.parent.location
            }
            var ie = n(5425);
            const oe = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var ce = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: oe.closeBtn,
                closeIconClassName: oe.closeIcon
            }
              , le = e=>(0,
            j.jsx)(ie.Z, (0,
            k.Z)((0,
            k.Z)({}, ce), {}, {
                topContent: e.title ? void 0 : (0,
                j.jsx)("div", {
                    className: oe.topPadding
                }),
                zIndex: 999
            }, e))
              , ue = n(4860)
              , de = n(4422)
              , _e = n(72202)
              , me = (e,t)=>{
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
              , pe = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                me(!1, t || (0,
                P.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , he = n(60378);
            const xe = utils.ont;
            var ve = n.n(xe)
              , fe = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , ge = e=>t=>{
                if (!(0,
                he.y)()) {
                    var n = t || {}
                      , a = n.status
                      , r = n.data || {}
                      , s = r.msg
                      , i = r.code;
                    de.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , ke = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve().get(t, n).then(fe, ge(t)));
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
              , be = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve().getWithCache(t, n).then(fe, ge(t)));
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
              , je = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve().post(t, n, a).then(fe, ge(t)));
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
              , we = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve().put(t, n, a).then(fe, ge(t)));
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
              , Ce = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve().delete(t, n).then(fe, ge(t)));
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
              , Ne = function() {
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
                                e.abrupt("return", je(t, r, a));
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
            const ye = {
                get: ke,
                getWithCache: be,
                post: je,
                put: we,
                postForm: Ne,
                delete: Ce
            };
            class Oe {
                constructor() {
                    this.store = void 0,
                    this.store = new Map
                }
                static getInstance() {
                    return Oe.instance || (Oe.instance = new Oe),
                    Oe.instance
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
            Oe.instance = void 0;
            const Pe = Oe.getInstance();
            function Ze(e, t) {
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
                                    !Pe.hasItem(s) || Pe.isItemExpired(s, t)) {
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
            function Te(e, t, n) {
                return Ee.apply(this, arguments)
            }
            function Ee() {
                return (Ee = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r, s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ye.get(t, (0,
                                k.Z)((0,
                                k.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (s = r.WebApp) || void 0 === s ? void 0 : s.initData) || ""
                                    }
                                }));
                            case 2:
                                return i = e.sent,
                                Pe.setItem(n, i),
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
            function Se(e, t, n) {
                return Re.apply(this, arguments)
            }
            function Re() {
                return (Re = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a) {
                    var r, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !a || !Pe.hasItem(r)) {
                                    e.next = 5;
                                    break
                                }
                                return s = Pe.getItem(r),
                                Te(t, r, n).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", Te(t, r, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Ie(e, t, n, a) {
                return Le.apply(this, arguments)
            }
            function Le() {
                return (Le = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ye.post(t, n, (0,
                                k.Z)((0,
                                k.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (s = window.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i ? void 0 : i.initData) || ""
                                    }
                                }));
                            case 2:
                                return o = e.sent,
                                Pe.setItem(a, o),
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
            function Be(e, t, n, a) {
                return Ae.apply(this, arguments)
            }
            function Ae() {
                return (Ae = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, a, r) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !Pe.hasItem(s) || !a) {
                                    e.next = 5;
                                    break
                                }
                                return i = Pe.getItem(s),
                                Ie(t, n, s, r).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", Ie(t, n, s, r));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Me = "/priapi/v1/affiliate"
              , We = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Be("".concat(Me, "/game/racer/info"), t));
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
              , Ue = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Be("".concat(Me, "/game/racer/assess"), t));
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
              , Fe = function() {
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
                                Se("".concat(Me, "/game/racer/invitee-list"), {
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
              , De = function() {
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
                                n = Ze(Se, 1e4),
                                e.next = 4,
                                n("".concat(Me, "/game/racer/leaderboard/friends"), {
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
                                pe(e.t0),
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
              , Ve = function() {
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
                                n = Ze(Se, 3e5),
                                e.next = 4,
                                n("".concat(Me, "/game/racer/leaderboard/global"), {
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
                                pe(e.t0),
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
              , Ge = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e
            }({})
              , He = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Se("".concat(Me, "/game/racer/boosts"), {}, t));
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
              , Ke = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Be("".concat(Me, "/game/racer/boost"), t));
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
              , Ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Se("".concat(Me, "/game/racer/group-tasks"), {}, t));
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
              , Xe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Be("".concat(Me, "/game/racer/task"), t));
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
              , ze = function() {
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
                                Be("".concat(Me, "/game/racer/account-binding"), n, t);
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
            function Je(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                return function() {
                    for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return e(...n, ...a)
                }
            }
            var qe = {
                Rewards: Je(ze, !0),
                Friends: Je(De, {
                    pageNo: 1
                }),
                Boost: Je(He, !0),
                Task: Je(Ye, !0),
                Invitee: Je(Fe, {
                    pageNo: 1
                }, !0),
                Global: Je(Ve, {
                    pageNo: 1
                })
            }
              , Qe = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , $e = function() {
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
                                if (!n || !qe[n]) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9,
                                a = qe[n],
                                void ("requestIdleCallback"in window ? requestIdleCallback(a) : setTimeout(a, 0));
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && de.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 14:
                                return e.next = 16,
                                $e(t);
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
            function et() {
                $e(Qe).catch((e=>{
                    e instanceof Error && de.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var tt = (0,
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
                context: {}
            })
              , nt = ()=>(0,
            a.useContext)(tt)
              , at = e=>{
                var t, n = e.children, r = (0,
                a.useState)(0), s = (0,
                u.Z)(r, 2), i = s[0], o = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], h = (0,
                a.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), b = k[0], w = k[1], C = (0,
                a.useState)(0), N = (0,
                u.Z)(C, 2), y = N[0], O = N[1], Z = (0,
                a.useState)(""), T = (0,
                u.Z)(Z, 2), E = T[0], S = T[1], R = (0,
                a.useState)({}), I = (0,
                u.Z)(R, 2), B = I[0], A = I[1], M = (0,
                a.useState)(!0), W = (0,
                u.Z)(M, 2), U = W[0], F = W[1], D = L(), V = D.username, G = D.startParam, H = (0,
                a.useState)(""), K = (0,
                u.Z)(H, 2), Y = K[0], X = K[1], z = (0,
                a.useState)(!1), J = (0,
                u.Z)(z, 2), q = J[0], Q = J[1], $ = (0,
                a.useState)(0), ee = (0,
                u.Z)($, 2), te = ee[0], ne = ee[1], ae = (0,
                a.useState)(!1), re = (0,
                u.Z)(ae, 2), se = re[0], ie = re[1], oe = null !== (t = new ue.Z((G || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", ce = (0,
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
                                We({
                                    extUserName: V,
                                    linkCode: oe
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                p(Math.max(n.accumPoints, 0)),
                                S(n.linkCode),
                                f(n.numChances),
                                O(n.secondToRefresh),
                                w(n.numChancesTotal),
                                Q(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                ie(n.isUnderRiskControl),
                                ne(n.autopilotPoints),
                                A(n.context),
                                F(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                me(!1, (0,
                                P.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [oe, V]);
                (0,
                a.useEffect)((()=>{
                    ce().then(et).catch((e=>{
                        e instanceof Error && de.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [ce]),
                (0,
                a.useEffect)((()=>{
                    var e = new _e.Z(y);
                    return y > 0 ? (e.start(),
                    e.addEventListener(_e.Z.Event.UPDATE, (e=>{
                        X("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(_e.Z.Event.FINISH, (()=>{
                        X(""),
                        ce()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    X("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [y, ce]),
                (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || ce()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [ce]);
                var le = (0,
                a.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    f(e.numChances),
                    O(e.secondToRefresh)
                }
                ), [])
                  , pe = (0,
                a.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ce();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [ce])
                  , he = (0,
                a.useCallback)((()=>{
                    Q(!1)
                }
                ), [])
                  , xe = (0,
                a.useCallback)((()=>{
                    ie(!1)
                }
                ), [])
                  , ve = (0,
                a.useMemo)((()=>({
                    isLoading: U,
                    points: i,
                    accumPoints: m,
                    numChances: v,
                    numChancesTotal: b,
                    countdownDisplay: Y,
                    updateGameInfo: le,
                    linkCode: E,
                    updateGameInfoFromServer: pe,
                    isShowAutopilotGainedPoint: q,
                    autopilotPoints: te,
                    hideAutopilotSheet: he,
                    isShowRiskControlSheet: se,
                    hideRiskControlSheet: xe,
                    context: B
                })), [U, i, m, v, b, Y, le, E, pe, q, te, he, se, xe, B]);
                return (0,
                j.jsx)(tt.Provider, {
                    value: ve,
                    children: n
                })
            }
            ;
            const rt = "RiskControl_title__h9Z0T";
            var st = ()=>{
                var e = nt()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                j.jsx)(le, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    j.jsx)("div", {
                        className: rt,
                        children: (0,
                        P.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , it = n(8031);
            var ot = new class {
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
                    this.connection = new it.Z({
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
              , ct = (0,
            a.createContext)(ot)
              , lt = e=>{
                var t = e.children;
                return (0,
                j.jsx)(ct.Provider, {
                    value: ot,
                    children: t
                })
            }
              , ut = (0,
            a.createContext)(null)
              , dt = ()=>(0,
            a.useContext)(ut)
              , _t = e=>{
                var t = e.children
                  , n = (0,
                a.useState)(null)
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useContext)(ct);
                return (0,
                a.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                j.jsx)(ut.Provider, {
                    value: s,
                    children: t
                })
            }
              , mt = n(46430)
              , pt = "racer"
              , ht = ()=>{
                var e;
                if (!(0,
                he.y)())
                    return mt.Z.getInstance(pt) || mt.Z.init({
                        project: pt
                    }),
                    null !== (e = mt.Z.getInstance(pt)) && void 0 !== e ? e : mt.Z
            }
              , xt = "guessRecords_new";
            function vt(e) {
                var t = ht().get(xt) || [];
                t.unshift(e),
                ht().set(xt, t.slice(0, 5))
            }
            var ft = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , gt = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: ft.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: ft.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , kt = (0,
            a.createContext)(gt)
              , bt = ()=>(0,
            a.useContext)(kt)
              , jt = e=>{
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
                  , b = k[0]
                  , w = k[1]
                  , C = (0,
                a.useState)(ft.NONE)
                  , N = (0,
                u.Z)(C, 2)
                  , y = N[0]
                  , O = N[1]
                  , Z = dt()
                  , T = nt().updateGameInfo
                  , S = (0,
                a.useRef)(ft.NONE)
                  , R = (0,
                a.useRef)(1)
                  , I = (0,
                a.useRef)(10)
                  , B = (0,
                a.useRef)(null)
                  , A = (0,
                a.useRef)(null)
                  , M = (0,
                a.useRef)(null)
                  , W = (0,
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
                                t = S.current === ft.UP ? 1 : 0,
                                e.next = 4,
                                Ue({
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
                                R.current = a.multiplier,
                                I.current = a.basePoint,
                                B.current = Number(a.changeRate),
                                A.current = a.prevPrice,
                                M.current = a.currentPrice,
                                vt({
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
                                me(!1, (0,
                                P.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                S.current = ft.NONE,
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
                            W())
                        }
                        ), 1e3)
                    }
                    return ()=>{
                        e && clearTimeout(e)
                    }
                }
                ), [W, i]),
                (0,
                a.useEffect)((()=>{
                    if (i && Z)
                        if (v) {
                            var e = Z > v;
                            O(Z === v ? ft.NONE : e ? ft.UP : ft.DOWN)
                        } else
                            f(Z)
                }
                ), [v, i, Z]);
                var U = (0,
                a.useCallback)((e=>{
                    w(null),
                    o(!0),
                    S.current = e,
                    B.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === ft.UP && function() {
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
                    e === ft.DOWN && function() {
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
                  , F = (0,
                a.useMemo)((()=>({
                    countdown: m,
                    onButtonClick: U,
                    result: b,
                    isPending: i,
                    currentTrend: y,
                    multiplier: R.current,
                    basePoints: I.current,
                    predict: S.current,
                    changeRate: B.current,
                    prevPrice: A.current,
                    currentPrice: M.current
                })), [m, y, i, R, U, b]);
                return (0,
                j.jsx)(kt.Provider, {
                    value: F,
                    children: t
                })
            }
              , wt = n(94595)
              , Ct = n(96450)
              , Nt = 2e3
              , yt = 500;
            function Ot(e) {
                return (Math.abs(e) < 1e-4 ? Ct.yx.ceilTruncate : Ct.yx.floorTruncate)(e, 4)
            }
            const Pt = "GuessResult_container__ECdpL"
              , Zt = "GuessResult_title__fzYxg"
              , Tt = "GuessResult_multiplier__yRHWm"
              , Et = "GuessResult_description__R2fup"
              , St = "GuessResult_detailsIcon__ZE7Ry"
              , Rt = "GuessResult_changeRateContainer__a5-N7"
              , It = "GuessResult_label__+b5Nz"
              , Lt = "GuessResult_changeRate__yhVz3"
              , Bt = "GuessResult_up__5vYDR"
              , At = "GuessResult_down__fa-oP"
              , Mt = "GuessResult_priceChange__xr6e8"
              , Wt = "GuessResult_price__Vk+bY";
            function Ut(e) {
                return (0,
                wt.xG)((0,
                wt.uf)(Ct.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var Ft = e=>{
                var t = e.className
                  , n = bt()
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
                            ), Nt)
                        }
                        ), yt)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [r]),
                (0,
                j.jsx)(j.Fragment, {
                    children: _ && (0,
                    j.jsxs)("div", {
                        className: O()(t, Pt),
                        children: [(0,
                        j.jsx)("p", {
                            className: Tt,
                            children: r ? (0,
                            j.jsxs)("span", {
                                className: St,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            j.jsx)("span", {
                                className: St,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        j.jsx)("h2", {
                            className: Zt,
                            children: (0,
                            P.O4)(r ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        j.jsxs)("div", {
                            className: Et,
                            children: [null !== i && (0,
                            j.jsxs)("p", {
                                className: Rt,
                                children: [(0,
                                j.jsx)("span", {
                                    className: It,
                                    children: (0,
                                    P.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                j.jsx)("span", {
                                    className: O()(Lt, {
                                        [Bt]: i > 0,
                                        [At]: i < 0
                                    }),
                                    children: (0,
                                    wt.uf)(Ot(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            j.jsx)("p", {
                                className: Mt,
                                children: (0,
                                P.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    j.jsx)("span", {
                                        className: Wt,
                                        children: Ut(o)
                                    }),
                                    currentPrice: (0,
                                    j.jsx)("span", {
                                        className: Wt,
                                        children: Ut(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
              , Dt = n(76983);
            const Vt = "PrimaryButton_button__SJFHA"
              , Gt = "PrimaryButton_buttonText__19AJ7";
            var Ht = e=>{
                var t = e.onClick
                  , n = e.text
                  , a = e.className
                  , r = e.disabled
                  , s = void 0 !== r && r;
                return (0,
                j.jsx)(Dt.default, {
                    category: Dt.default.CATEGORY.fill,
                    type: Dt.default.TYPE.primary,
                    size: Dt.default.SIZE.lg,
                    className: O()(Vt, a),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    j.jsx)("div", {
                        className: Gt,
                        children: n
                    })
                })
            }
            ;
            const Kt = "AutoPilot_title__NJa0C"
              , Yt = "AutoPilot_button__Sg42v";
            var Xt = ()=>{
                var e = nt()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , a = e.hideAutopilotSheet;
                return (0,
                j.jsxs)(le, {
                    visible: t,
                    onClose: a,
                    children: [(0,
                    j.jsx)("div", {
                        className: Kt,
                        children: (0,
                        P.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            wt.uf)(n)
                        })
                    }), (0,
                    j.jsx)(Ht, {
                        className: Yt,
                        onClick: a,
                        text: (0,
                        P.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , zt = n(59896);
            const Jt = "BackgroundVideo_container__J5sO2"
              , qt = "BackgroundVideo_muteButton__04Huj"
              , Qt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , $t = "BackgroundVideo_staticImage__EpRTb"
              , en = "BackgroundVideo_hide__ZXYN9";
            var tn, nn, an, rn, sn, on, cn = "backgroundVideoSoundOn", ln = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", un = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], dn = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], _n = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(ln)
            }, mn = ()=>{
                var e = bt().isPending
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
                  , f = ht()
                  , g = (0,
                a.useState)((()=>{
                    var e = f.get(cn);
                    return Boolean(!e)
                }
                ))
                  , b = (0,
                u.Z)(g, 2)
                  , w = b[0]
                  , C = b[1];
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
                j.jsxs)("div", {
                    className: Jt,
                    children: [(0,
                    j.jsx)(Dt.default, {
                        category: Dt.default.CATEGORY.fill,
                        type: Dt.default.TYPE.quaternary,
                        size: Dt.default.SIZE.md,
                        className: qt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(f.set(cn, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        j.jsx)(Z.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Qt
                        })
                    }), (0,
                    j.jsx)(zt.Z, {
                        className: O()($t, {
                            [en]: !N
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(ln)
                    }), (0,
                    j.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, _n), {}, {
                        className: O()({
                            [en]: !y
                        }),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: un.map((e=>(0,
                        j.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    j.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, _n), {}, {
                        className: O()({
                            [en]: !P
                        }),
                        ref: t,
                        muted: w,
                        children: dn.map((e=>(0,
                        j.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , pn = ["title", "titleId"];
            function hn() {
                return hn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                hn.apply(this, arguments)
            }
            function xn(e, t) {
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
            function vn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = xn(e, pn);
                return a.createElement("svg", hn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, tn || (tn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), nn || (nn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), an || (an = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), rn || (rn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), sn || (sn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), on || (on = a.createElement("defs", null, a.createElement("filter", {
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
            var fn = a.forwardRef(vn);
            n.p;
            var gn, kn, bn, jn, wn, Cn, Nn = ["title", "titleId"];
            function yn() {
                return yn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                yn.apply(this, arguments)
            }
            function On(e, t) {
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
            function Pn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = On(e, Nn);
                return a.createElement("svg", yn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, gn || (gn = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), kn || (kn = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), bn || (bn = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), jn || (jn = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), wn || (wn = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), Cn || (Cn = a.createElement("defs", null, a.createElement("filter", {
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
            var Zn = a.forwardRef(Pn);
            n.p;
            const Tn = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var En, Sn = e=>{
                var t = e.className
                  , n = bt()
                  , r = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = nt().numChances
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
                    s || d || (_(e === ft.UP ? ft.DOWN : ft.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (a = n.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    r(e))
                }
                  , p = o <= 0;
                return (0,
                j.jsxs)("div", {
                    className: t,
                    children: [(0,
                    j.jsx)("p", {
                        className: O()(Tn.instructions, s && Tn.hide),
                        children: (0,
                        P.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    j.jsxs)("div", {
                        className: Tn.btnContainer,
                        children: [(0,
                        j.jsxs)("button", {
                            disabled: p || d === ft.UP,
                            onClick: ()=>m(ft.UP),
                            type: "button",
                            className: O()(Tn.btn, Tn.upBtn, {
                                [Tn.pressed]: i === ft.UP
                            }),
                            children: [(0,
                            j.jsx)(Zn, {
                                className: O()(Tn.btnGraphic, Tn.upBtnGraphic)
                            }), (0,
                            j.jsxs)("span", {
                                className: Tn.btnText,
                                children: [(0,
                                P.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                j.jsx)(Z.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: Tn.arrow
                                })]
                            })]
                        }), (0,
                        j.jsxs)("button", {
                            disabled: p || d === ft.DOWN,
                            onClick: ()=>m(ft.DOWN),
                            type: "button",
                            className: O()(Tn.btn, Tn.downBtn, {
                                [Tn.pressed]: i === ft.DOWN
                            }),
                            children: [(0,
                            j.jsx)(fn, {
                                className: O()(Tn.btnGraphic, Tn.downBtnGraphic)
                            }), (0,
                            j.jsxs)("span", {
                                className: Tn.btnText,
                                children: [(0,
                                P.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                j.jsx)(Z.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: Tn.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , Rn = ["title", "titleId"];
            function In() {
                return In = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                In.apply(this, arguments)
            }
            function Ln(e, t) {
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
            function Bn(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Ln(e, Rn);
                return a.createElement("svg", In({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, En || (En = a.createElement("g", {
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
            var An = a.forwardRef(Bn);
            n.p;
            var Mn = n(48275);
            const Wn = "FuelIndicator_fuelContainer__QIskL"
              , Un = "FuelIndicator_toTasksIcon__Y7exC"
              , Fn = "FuelIndicator_line__tWBfm"
              , Dn = "FuelIndicator_description__EaUsa"
              , Vn = "FuelIndicator_fuelIcon__I38Ss"
              , Gn = "FuelIndicator_maxChances__OMSHl"
              , Hn = "FuelIndicator_earnPtsMsg__PjtcT";
            var Kn, Yn, Xn = e=>{
                var t = e.className
                  , n = nt()
                  , a = n.numChances
                  , r = n.numChancesTotal;
                return (0,
                j.jsxs)("div", {
                    className: O()(t, Wn),
                    children: [(0,
                    j.jsx)("span", {
                        className: Vn,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    j.jsx)(Mn.Z.Line, {
                        className: Fn,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / r * 100
                    }, r) : (0,
                    j.jsx)(J, {
                        to: W,
                        className: Hn,
                        children: (0,
                        P.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    j.jsxs)("p", {
                        className: Dn,
                        children: [a, "\xa0", void 0 !== r && 0 !== r && (0,
                        j.jsxs)(j.Fragment, {
                            children: ["/\xa0", (0,
                            j.jsx)("span", {
                                className: Gn,
                                children: r
                            })]
                        })]
                    }), (0,
                    j.jsx)(J, {
                        to: W,
                        children: (0,
                        j.jsx)(Z.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: Un
                        })
                    })]
                })
            }
            , zn = ["title", "titleId"];
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
                  , s = qn(e, zn);
                return a.createElement("svg", Jn({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Kn || (Kn = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Yn || (Yn = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var $n = a.forwardRef(Qn);
            n.p;
            const ea = "RefuelTimer_container__wtALO"
              , ta = "RefuelTimer_description__sD+HM"
              , na = "RefuelTimer_timer__LL1+c";
            var aa = e=>{
                var t = e.className
                  , n = nt().countdownDisplay;
                return (0,
                j.jsxs)("div", {
                    className: O()(t, ea),
                    children: [(0,
                    j.jsx)($n, {}), (0,
                    j.jsx)("p", {
                        className: ta,
                        children: (0,
                        P.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            j.jsx)("span", {
                                className: na,
                                children: n
                            })
                        })
                    })]
                })
            }
            ;
            const ra = "CoinPrice_raceTrack__NZO2t"
              , sa = "CoinPrice_run__f0UIF"
              , ia = "CoinPrice_coinPriceContainer__YbeUE"
              , oa = "CoinPrice_content__a-5Jl"
              , ca = "CoinPrice_fuelIndicator__p+f1I"
              , la = "CoinPrice_refuelTimer__tbWMw"
              , ua = "CoinPrice_hide__bHhxJ"
              , da = "CoinPrice_label__yTNy0"
              , _a = "CoinPrice_value__ZjRZz"
              , ma = "CoinPrice_slotMachine__hUQKt"
              , pa = "SlotMachine_row__a4TO0"
              , ha = "SlotMachine_animate__-G4TR"
              , xa = "SlotMachine_column__aR0VE"
              , va = "SlotMachine_arrows__m1dhv"
              , fa = "SlotMachine_columnContainer__a76pd"
              , ga = "SlotMachine_background__b9TMg"
              , ka = "SlotMachine_slot__jwCvC"
              , ba = "SlotMachine_staticColumn__O5zfB"
              , ja = "SlotMachine_sm__ZRCig"
              , wa = "SlotMachine_arrow__qOYmf"
              , Ca = "SlotMachine_wentUp__z48TO"
              , Na = "SlotMachine_down__aYC8C"
              , ya = "SlotMachine_stable__CDMLP"
              , Oa = "SlotMachine_wentDown__1fYUS"
              , Pa = "SlotMachine_up__IuiYV";
            var Za = e=>{
                var t = e.animate
                  , n = e.result
                  , a = void 0 === n ? 0 : n
                  , r = e.columnStyle;
                return (0,
                j.jsxs)("div", {
                    className: fa,
                    children: [(0,
                    j.jsx)("div", {
                        className: ga
                    }), (0,
                    j.jsxs)("div", {
                        className: xa,
                        style: r,
                        children: [(0,
                        j.jsx)("p", {
                            className: ka,
                            children: a
                        }), t && (0,
                        j.jsxs)(j.Fragment, {
                            children: [(0,
                            j.jsx)("p", {
                                className: ka,
                                children: "1"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "2"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "3"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "4"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "5"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "6"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "7"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "8"
                            }), (0,
                            j.jsx)("p", {
                                className: ka,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , Ta = ()=>{
                var e = bt()
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
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? ft.UP : 0 === e ? ft.NONE : ft.DOWN),
                    o(String(Math.abs(Number(Ot(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    x(!1)) : _(null)
                }
                ), [t]),
                (0,
                j.jsxs)("div", {
                    className: O()(pa, h && ha),
                    children: [(0,
                    j.jsx)("div", {
                        className: fa,
                        children: (0,
                        j.jsxs)("div", {
                            className: O()(va, {
                                [Ca]: d === ft.UP,
                                [Oa]: d === ft.DOWN,
                                [ya]: d === ft.NONE
                            }),
                            children: [(0,
                            j.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: O()(wa, Pa)
                            }), (0,
                            j.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: O()(wa, ya)
                            }), (0,
                            j.jsx)(Z.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: O()(wa, Na)
                            })]
                        })
                    }), (0,
                    j.jsx)(Za, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    j.jsx)("span", {
                        className: ba,
                        children: "."
                    }), (0,
                    j.jsx)(Za, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    j.jsx)(Za, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    j.jsx)(Za, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    j.jsx)(Za, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    j.jsx)("span", {
                        className: O()(ba, ja),
                        children: "%"
                    })]
                })
            }
              , Ea = ()=>{
                var e = dt()
                  , t = bt()
                  , n = t.isPending
                  , r = t.changeRate
                  , s = nt().countdownDisplay
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
                    ), yt)),
                    t
                }
                ), [r, n]);
                var d = e ? "$".concat((0,
                wt.uf)(Ct.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !n;
                return (0,
                j.jsxs)("div", {
                    className: ia,
                    children: [(0,
                    j.jsx)(An, {
                        className: O()(ra, n && sa)
                    }), (0,
                    j.jsxs)("div", {
                        className: O()(oa, c && ua),
                        children: [(0,
                        j.jsx)("p", {
                            className: da,
                            children: (0,
                            P.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        j.jsx)("p", {
                            className: _a,
                            children: d
                        })]
                    }), (0,
                    j.jsxs)("div", {
                        className: O()(oa, !c && ua),
                        children: [(0,
                        j.jsxs)("p", {
                            className: da,
                            children: [(0,
                            P.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        j.jsx)("div", {
                            className: ma,
                            children: (0,
                            j.jsx)(Ta, {})
                        })]
                    }), (0,
                    j.jsx)(Xn, {
                        className: ca
                    }), (0,
                    j.jsx)("div", {
                        className: O()(la, !_ && ua),
                        children: (0,
                        j.jsx)(aa, {})
                    })]
                })
            }
            ;
            const Sa = "LandingPage_container__pU2cC"
              , Ra = "LandingPage_resultOverlay__WSYZb"
              , Ia = "LandingPage_disclaimer__pVRHC"
              , La = "LandingPage_recordsBtnContainer__Anr4Y"
              , Ba = "LandingPage_backgroundVideo__flTkH"
              , Aa = "LandingPage_content__D0ZLW"
              , Ma = "LandingPage_points__Ruq4j"
              , Wa = "LandingPage_coinPrice__nJ0nj"
              , Ua = "LandingPage_btnContainer__IEll8"
              , Fa = "LandingPage_termsAndConditions__MdClU";
            var Da = n(22387);
            const Va = "UserPointCounter_pointCounter__-QAj8"
              , Ga = "UserPointCounter_hide__o4qTQ"
              , Ha = "UserPointCounter_points__d3HeG"
              , Ka = "UserPointCounter_title__B-gN-"
              , Ya = "UserPointCounter_countdown__Z7xGo"
              , Xa = "UserPointCounter_value__2a23E";
            var za = ()=>{
                var e = nt().points
                  , t = (0,
                Da.Z)(e)
                  , n = bt()
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
                    wt.uf)(String(e))),
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
                j.jsxs)("div", {
                    className: Va,
                    children: [(0,
                    j.jsxs)("p", {
                        className: O()(Ka, l && Ga),
                        children: ["\ud83c\udfc6 ", (0,
                        P.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    j.jsx)("p", {
                        ref: i,
                        className: O()(Ha, l && Ga),
                        children: "0"
                    }), (0,
                    j.jsxs)("p", {
                        className: O()(Ya, !l && Ga),
                        children: ["00:0", (0,
                        j.jsx)("span", {
                            className: Xa,
                            children: s
                        })]
                    })]
                })
            }
              , Ja = function(e) {
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
              , qa = n(52008)
              , Qa = n(52400)
              , $a = {
                Edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
                Chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge"
            }
              , er = e=>{
                if (!window.okxTonWallet) {
                    var t, n, a = null === Qa.X || void 0 === Qa.X ? void 0 : Qa.X.name;
                    return null === (t = window) || void 0 === t || null === (n = t.Telegram) || void 0 === n || n.WebApp.openLink($a[a] || $a.Chrome),
                    Promise.reject(new Error("Please install the OKX Wallet plugin"))
                }
                return window.okxTonWallet.tonconnect.connect(2, {
                    manifestUrl: ae(),
                    items: [{
                        name: "ton_addr"
                    }, {
                        name: "ton_proof",
                        payload: e
                    }]
                }).then((e=>{
                    var t, n = null === e || void 0 === e || null === (t = e.payload) || void 0 === t ? void 0 : t.items, a = n[0], r = a.publicKey, s = a.address, i = qa.Address.parse(s).toString({
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
              , tr = (e,t)=>{
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
                                    u = qa.Address.parse(i),
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
              , nr = function() {
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
                                se()) {
                                    e.next = 13;
                                    break
                                }
                                return s = tr(t, n),
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
                                er(n);
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
                                e.t0 instanceof Error && de.k.warn("mini app okx racer, Wallet Error ".concat(e.t0.message), {
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
            const ar = "ViewWalletButton_button__WbNMO"
              , rr = "ViewWalletButton_btnIcon__W5IFc";
            var sr = ()=>{
                var e = nt()
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
                                    nr(s, i);
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
                                    Xe(p);
                                case 14:
                                    return e.next = 16,
                                    Promise.allSettled([He(), n()]);
                                case 16:
                                    me(!0, (0,
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
                                    pe(e.t0),
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
                j.jsxs)("button", {
                    className: ar,
                    type: "button",
                    onClick: _,
                    children: [(0,
                    j.jsx)(Z.Z, {
                        iconName: "okx-growth-wallet",
                        className: rr
                    }), t.tonAddress ? Ja(t.tonAddress || "", {
                        firstDigits: 6,
                        lastDigits: 4,
                        placeholder: "***"
                    }) : (0,
                    P.O4)("ok_game_okxracer_tag_phase3_okx_wallet")]
                })
            }
              , ir = ()=>{
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
                j.jsxs)("div", {
                    className: Sa,
                    children: [(0,
                    j.jsx)("div", {
                        className: La,
                        children: (0,
                        j.jsx)(sr, {})
                    }), (0,
                    j.jsx)("div", {
                        className: Ba,
                        children: (0,
                        j.jsx)(mn, {})
                    }), (0,
                    j.jsxs)("div", {
                        className: Aa,
                        children: [(0,
                        j.jsx)("div", {
                            className: Ma,
                            children: (0,
                            j.jsx)(za, {})
                        }), (0,
                        j.jsx)("div", {
                            className: Wa,
                            children: (0,
                            j.jsx)(Ea, {})
                        }), (0,
                        j.jsx)(Sn, {
                            className: Ua
                        })]
                    }), (0,
                    j.jsx)("button", {
                        className: Fa,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(ne)
                        }
                        ,
                        type: "button",
                        children: (0,
                        P.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    j.jsx)("p", {
                        className: Ia,
                        children: (0,
                        P.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    j.jsx)(Ft, {
                        className: Ra
                    }), (0,
                    j.jsx)(Xt, {}), (0,
                    j.jsx)(st, {})]
                })
            }
              , or = ()=>(0,
            j.jsx)(jt, {
                children: (0,
                j.jsx)(ir, {})
            })
              , cr = n(24084)
              , lr = n(58338);
            const ur = "PageTitle_title__IQ7TT";
            var dr = e=>{
                var t = e.html;
                return (0,
                j.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        lr.dU)(t)
                    },
                    className: ur
                })
            }
            ;
            const _r = "LeaderBoard_container__0DJSO"
              , mr = "LeaderBoard_desc__MFxC+"
              , pr = "LeaderBoard_inviteList__mV9a7"
              , hr = "LeaderBoard_tabActiveClassName__7Xv4B"
              , xr = "LeaderBoard_tabsContent__KCGtW"
              , vr = "LeaderBoard_recordButton__lXzAl"
              , fr = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var gr = e=>{
                var t = e.className;
                return (0,
                j.jsx)("div", {
                    className: O()(fr, t)
                })
            }
            ;
            const kr = "InviteButton_invite-btn__aAMio"
              , br = "InviteButton_btn-a__At-wO"
              , jr = "InviteButton_btn-container__sYDy5"
              , wr = "InviteButton_copyButton__znucI"
              , Cr = "InviteButton_copyIcon__QZgE9";
            var Nr = e=>{
                var t = e.text
                  , n = void 0 === t ? (0,
                P.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , r = L().uid
                  , s = (e=>{
                    var t = new ue.Z
                      , n = (0,
                    P.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat($.BOT_NAME, "/").concat($.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(n)
                    }
                }
                )(nt().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                j.jsxs)("div", {
                    className: O()(a, jr),
                    children: [(0,
                    j.jsx)("a", {
                        className: br,
                        href: i,
                        children: (0,
                        j.jsx)(Ht, {
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
                            className: kr,
                            text: n
                        })
                    }), (0,
                    j.jsx)(Dt.default, {
                        strictCircle: !0,
                        category: Dt.default.CATEGORY.fill,
                        type: Dt.default.TYPE.primary,
                        size: Dt.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(o),
                                me(!0, (0,
                                P.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                me(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: wr,
                        children: (0,
                        j.jsx)(Z.Z, {
                            iconName: "okx-growth-copy",
                            className: Cr
                        })
                    })]
                })
            }
            ;
            const yr = "RankList_listItem__qJvXJ"
              , Or = "RankList_name__sxTWa"
              , Pr = "RankList_mask__ldBi8"
              , Zr = "RankList_hightLightRow__xYkeg"
              , Tr = "RankList_listHeader__KVGnw"
              , Er = "RankList_rank__k2m5R"
              , Sr = "RankList_icon__1-SRV"
              , Rr = "RankList_point__D5mVw"
              , Ir = "RankList_pointIcon__k80Wy"
              , Lr = "RankList_InviteButton__D6ute"
              , Br = "RankList_noFirendsNote__Ckkil"
              , Ar = "RankList_under__MJ5We"
              , Mr = "RankList_rankItemPlaceholder__z-upW"
              , Wr = "RankList_rank-name__YEqnc"
              , Ur = "RankList_rank-score__gtI+m";
            var Fr = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Dr = 1
              , Vr = 2
              , Gr = e=>{
                var t = e.total;
                return (0,
                j.jsxs)("div", {
                    className: Tr,
                    children: [(0,
                    j.jsx)("span", {
                        children: (0,
                        P.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            wt.uf)(t)
                        })
                    }), (0,
                    j.jsx)("span", {
                        children: (0,
                        P.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Hr = ()=>(0,
            j.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                j.jsxs)("div", {
                    className: Mr,
                    children: [(0,
                    j.jsx)(gr, {
                        className: Wr
                    }), (0,
                    j.jsx)(gr, {
                        className: Ur
                    })]
                }, t)))
            })
              , Kr = e=>{
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                j.jsxs)("div", {
                    className: O()(yr, n && Zr),
                    children: [(0,
                    j.jsx)("div", {
                        className: Pr
                    }), t.rank <= 3 ? (0,
                    j.jsx)("span", {
                        className: O()(Er, Sr),
                        children: Fr[t.rank]
                    }) : (0,
                    j.jsx)("span", {
                        className: Er,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    j.jsx)("div", {
                        className: Or,
                        children: t.extUserName
                    }), (0,
                    j.jsxs)("div", {
                        className: Rr,
                        children: [(0,
                        j.jsx)("span", {
                            className: Ir,
                            children: Fr[4]
                        }), (0,
                        P.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            wt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Yr = e=>{
                var t = e.pageType
                  , n = void 0 === t ? Dr : t
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
                  , b = k[0]
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
                                    n !== Dr) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    De(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Ve(a);
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
                  , N = b && ((null === b || void 0 === b ? void 0 : b.rank) > 3 || -1 === (null === b || void 0 === b ? void 0 : b.rank));
                return (0,
                a.useEffect)((()=>{
                    C(1)
                }
                ), [C]),
                (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)(Gr, {
                        total: v
                    }), i ? (0,
                    j.jsx)(Hr, {}) : (0,
                    j.jsxs)(j.Fragment, {
                        children: [N && (0,
                        j.jsx)(Kr, {
                            item: b,
                            isHighlight: !0
                        }), m.map(((e,t)=>(0,
                        j.jsx)(Kr, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    j.jsx)("div", {
                        className: Ar
                    }), n === Dr && (0,
                    j.jsxs)(j.Fragment, {
                        children: [1 === m.length && (0,
                        j.jsx)("div", {
                            className: Br,
                            children: (0,
                            P.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        j.jsx)(Nr, {
                            className: Lr,
                            text: (0,
                            P.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
            ;
            const Xr = "ViewRecordsButton_button__foNmQ"
              , zr = "ViewRecordsButton_btnIcon__2U0Xs"
              , Jr = "ViewRecordsButton_title__XwRxi"
              , qr = "ViewRecordsButton_container__KMBl3"
              , Qr = "ViewRecordsButton_recordContainer__H0HG0"
              , $r = "ViewRecordsButton_recordField__ntg1u"
              , es = "ViewRecordsButton_label__VInMo"
              , ts = "ViewRecordsButton_value__YdAbG"
              , ns = "ViewRecordsButton_trendIcon__OAhpt"
              , as = "ViewRecordsButton_up__lVPFv"
              , rs = "ViewRecordsButton_down__z9X8U"
              , ss = "ViewRecordsButton_timestamp__1KFJL"
              , is = "ViewRecordsButton_emptyMessageContainer__fGiYv"
              , os = "ViewRecordsButton_description__2QLs8";
            var cs = e=>{
                var t = e.label
                  , n = e.value;
                return (0,
                j.jsxs)("div", {
                    className: $r,
                    children: [(0,
                    j.jsx)("p", {
                        className: es,
                        children: t
                    }), (0,
                    j.jsx)("div", {
                        className: ts,
                        children: n
                    })]
                })
            }
              , ls = ()=>(0,
            j.jsxs)("button", {
                className: Xr,
                type: "button",
                onClick: ()=>{
                    var e = ht().get(xt) || []
                      , t = (0,
                    j.jsx)(j.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , n = "ok_game_okxracer_moon"
                              , a = as
                              , r = "okx-growth-trending-up";
                            return t || (n = "ok_game_okxracer_doom",
                            a = rs,
                            r = "okx-growth-trending-down"),
                            (0,
                            j.jsxs)("div", {
                                className: Qr,
                                children: [(0,
                                j.jsx)(cs, {
                                    label: (0,
                                    P.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    j.jsxs)(j.Fragment, {
                                        children: [(0,
                                        P.O4)(n), (0,
                                        j.jsx)(Z.Z, {
                                            className: O()(ns, a),
                                            iconName: r
                                        })]
                                    })
                                }), (0,
                                j.jsx)(cs, {
                                    label: "Result",
                                    value: (0,
                                    P.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                j.jsx)(cs, {
                                    label: (0,
                                    P.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                j.jsx)("p", {
                                    className: ss,
                                    children: (0,
                                    wt.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        j.jsxs)("div", {
                            className: is,
                            children: [(0,
                            j.jsx)("p", {
                                className: Jr,
                                children: (0,
                                P.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            j.jsx)("p", {
                                className: os,
                                children: (0,
                                P.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = ie.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, ce), {}, {
                            topContent: e.title ? void 0 : (0,
                            j.jsx)("div", {
                                className: oe.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        j.jsx)("span", {
                            className: Jr,
                            children: (0,
                            P.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: qr,
                        children: t
                    })
                }
                ,
                children: [(0,
                P.O4)("ok_game_okxracer_my_records"), (0,
                j.jsx)(Z.Z, {
                    iconName: "okx-growth-chevrons",
                    className: zr
                })]
            })
              , us = ()=>(0,
            j.jsxs)("div", {
                className: _r,
                children: [(0,
                j.jsx)(dr, {
                    html: (0,
                    P.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        P.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                j.jsx)("div", {
                    className: mr,
                    children: (0,
                    P.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                j.jsx)("div", {
                    className: vr,
                    children: (0,
                    j.jsx)(ls, {})
                }), (0,
                j.jsxs)(cr.Z, {
                    activeClassName: hr,
                    noPadding: !0,
                    size: cr.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    j.jsx)(cr.Z.TabPane, {
                        tab: (0,
                        P.O4)("ok_game_okxracer_friends2"),
                        id: Dr,
                        className: xr,
                        children: (0,
                        j.jsx)("div", {
                            className: pr,
                            children: (0,
                            j.jsx)(Yr, {
                                pageType: Dr
                            })
                        })
                    }), (0,
                    j.jsx)(cr.Z.TabPane, {
                        className: xr,
                        tab: (0,
                        P.O4)("ok_game_okxracer_global"),
                        id: Vr,
                        children: (0,
                        j.jsx)("div", {
                            className: pr,
                            children: (0,
                            j.jsx)(Yr, {
                                pageType: Vr
                            })
                        })
                    })]
                })]
            });
            const ds = "QrCode_container__r4Fu7"
              , _s = "QrCode_qrCode__16PWa"
              , ms = "QrCode_title__+cibb"
              , ps = "QrCode_message__eaOzW";
            var hs = ()=>(0,
            j.jsxs)("div", {
                className: ds,
                children: [(0,
                j.jsx)(zt.Z, {
                    className: _s,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                j.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        lr.dU)((0,
                        P.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: ms
                }), (0,
                j.jsx)("p", {
                    className: ps,
                    children: (0,
                    P.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , xs = n(90534);
            const vs = "PullupList_loading__+51Dh"
              , fs = "PullupList_listLoadItem__XcvkH"
              , gs = "PullupList_listLeft__4eGh6"
              , ks = "PullupList_listRight__w7Ely"
              , bs = "PullupList_listLoading__whJeg";
            var js = ()=>(0,
            j.jsxs)("div", {
                className: O()(fs),
                children: [(0,
                j.jsx)(gr, {
                    className: gs
                }), (0,
                j.jsx)(gr, {
                    className: ks
                })]
            })
              , ws = ()=>(0,
            j.jsx)("div", {
                className: bs,
                children: Array(3).fill(null).map(((e,t)=>(0,
                j.jsx)(js, {}, t)))
            })
              , Cs = e=>{
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
                  , b = function() {
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
                xs.Z)(b, {
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
                j.jsxs)(j.Fragment, {
                    children: [i.map(((e,t)=>n(e, t))), (0,
                    j.jsx)("div", {
                        className: vs,
                        ref: x,
                        children: m && (0,
                        j.jsx)(ws, {})
                    })]
                })
            }
            ;
            const Ns = "InviteList_listItem__q4jhG"
              , ys = "InviteList_name__LLQgt"
              , Os = "InviteList_point__kXtCn"
              , Ps = "InviteList_earnedPrice__4vAfw"
              , Zs = "InviteList_pointNumber__v4P1H";
            var Ts = ()=>{
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
                                    Fe(s, a);
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
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)("div", {
                        className: Ps,
                        children: (0,
                        P.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            j.jsx)("span", {
                                className: Zs,
                                children: (0,
                                P.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    wt.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    j.jsx)(Cs, {
                        loadData: s,
                        children: (e,t)=>(0,
                        j.jsxs)("div", {
                            className: Ns,
                            children: [(0,
                            j.jsx)("div", {
                                className: ys,
                                children: e.extInviteeName
                            }), (0,
                            j.jsx)("div", {
                                className: Os,
                                children: (0,
                                P.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    wt.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const Es = "ReferralsPage_container__V48m1"
              , Ss = "ReferralsPage_inviteDetail__L1MhM"
              , Rs = "ReferralsPage_detailItem__ujOp+"
              , Is = "ReferralsPage_dot__zKW7L"
              , Ls = "ReferralsPage_detailTitle__OE657"
              , Bs = "ReferralsPage_detailInfo__YC+Y9"
              , As = "ReferralsPage_inviteList__Jksx8";
            var Ms, Ws, Us, Fs, Ds, Vs, Gs, Hs, Ks = ()=>{
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
                j.jsxs)("div", {
                    className: Es,
                    children: [(0,
                    j.jsx)(dr, {
                        html: "".concat((0,
                        P.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        P.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    j.jsx)("div", {
                        className: Ss,
                        children: t.map((e=>(0,
                        j.jsxs)("div", {
                            className: Rs,
                            children: [(0,
                            j.jsx)("div", {
                                className: Is
                            }), (0,
                            j.jsx)("div", {
                                className: Ls,
                                children: e.title
                            }), (0,
                            j.jsx)("div", {
                                className: Bs,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    j.jsx)("div", {
                        className: As,
                        children: (0,
                        j.jsx)(Ts, {})
                    }), (0,
                    j.jsx)(Nr, {})]
                })
            }
            , Ys = ["title", "titleId"];
            function Xs() {
                return Xs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Xs.apply(this, arguments)
            }
            function zs(e, t) {
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
            function Js(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = zs(e, Ys);
                return a.createElement("svg", Xs({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Ms || (Ms = a.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Ws || (Ws = a.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Us || (Us = a.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Fs || (Fs = a.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), Ds || (Ds = a.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Vs || (Vs = a.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Gs || (Gs = a.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Hs || (Hs = a.createElement("defs", null, a.createElement("filter", {
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
            var qs = a.forwardRef(Js);
            n.p;
            const Qs = "index_container__DxcAz"
              , $s = "index_logo__h1T0A"
              , ei = "index_tlt__dqJHn"
              , ti = "index_subtlt__m3p5l";
            var ni = ()=>(0,
            j.jsxs)("div", {
                className: Qs,
                children: [(0,
                j.jsx)(qs, {
                    className: $s
                }), (0,
                j.jsx)("div", {
                    className: ei,
                    children: (0,
                    P.O4)("ok_game_okxracer_congratulations")
                }), (0,
                j.jsx)("div", {
                    className: ti,
                    children: (0,
                    P.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const ai = r().memo(ni);
            var ri, si = ["title", "titleId"];
            function ii() {
                return ii = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                ii.apply(this, arguments)
            }
            function oi(e, t) {
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
            function ci(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = oi(e, si);
                return a.createElement("svg", ii({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ri || (ri = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var li = a.forwardRef(ci);
            n.p;
            var ui, di = ["title", "titleId"];
            function _i() {
                return _i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                _i.apply(this, arguments)
            }
            function mi(e, t) {
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
            function pi(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = mi(e, di);
                return a.createElement("svg", _i({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, ui || (ui = a.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var hi = a.forwardRef(pi);
            n.p;
            var xi, vi = ["title", "titleId"];
            function fi() {
                return fi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                fi.apply(this, arguments)
            }
            function gi(e, t) {
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
            function ki(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = gi(e, vi);
                return a.createElement("svg", fi({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, xi || (xi = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var bi = a.forwardRef(ki);
            n.p;
            var ji = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , wi = e=>{
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            }
            ;
            function Ci(e) {
                var t = [{
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: ji.SIGNUP,
                    status: wi(ji.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_install"),
                    type: ji.INSTALL,
                    status: wi(ji.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: ji.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    P.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    P.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: ji.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var Ni = e=>{
                var t = (0,
                a.useState)(Ci(e))
                  , n = (0,
                u.Z)(t, 2)
                  , r = n[0]
                  , s = n[1]
                  , i = L().uid;
                (0,
                a.useEffect)((()=>{
                    s(Ci(e))
                }
                ), [e]);
                var o = (0,
                a.useCallback)((t=>{
                    var n, a, o = r.find((e=>e.type === t));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (a = n.Telegram) || void 0 === a || a.WebApp.openLink(o.url),
                        t) {
                        case ji.SIGNUP:
                        case ji.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Ci(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case ji.SIGNUP:
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
                        case ji.INSTALL:
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
                        case ji.CONNECT:
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
                        case ji.KYC:
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
            const yi = "index_container__ZAgXf"
              , Oi = "index_container_avatar__HvLrA"
              , Pi = "index_container_task__OmqjX"
              , Zi = "index_task_tlt__pIkV2"
              , Ti = "index_tlt_sub__2aRiA"
              , Ei = "index_tlt_arrow__kdbln"
              , Si = "index_task_subtlt__mzIaE";
            var Ri = e=>{
                var t = e.status
                  , n = void 0 !== t && t;
                return (0,
                j.jsx)("div", {
                    className: Oi,
                    children: n ? (0,
                    j.jsx)(bi, {}) : (0,
                    j.jsx)(hi, {})
                })
            }
              , Ii = e=>{
                var t = e.title
                  , n = e.subTitle
                  , a = e.type
                  , r = e.onClick
                  , s = e.status;
                return (0,
                j.jsxs)("div", {
                    className: Pi,
                    onClick: ()=>{
                        r(a)
                    }
                    ,
                    children: [(0,
                    j.jsxs)("div", {
                        className: Zi,
                        children: [(0,
                        j.jsx)(Ri, {
                            status: s
                        }), " ", (0,
                        j.jsx)("div", {
                            className: Ti,
                            children: t
                        }), (0,
                        j.jsx)(li, {
                            className: Ei
                        })]
                    }), (0,
                    j.jsx)("div", {
                        className: Si,
                        children: n
                    })]
                })
            }
            ;
            const Li = e=>{
                var t = Ni(e)
                  , n = t.list
                  , a = t.handleClick;
                return (0,
                j.jsx)("div", {
                    className: yi,
                    children: n.map((e=>(0,
                    j.jsx)(Ii, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: a
                    }), e.type)))
                })
            }
            ;
            var Bi, Ai, Mi, Wi = ["title", "titleId"];
            function Ui() {
                return Ui = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                ,
                Ui.apply(this, arguments)
            }
            function Fi(e, t) {
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
            function Di(e, t) {
                var n = e.title
                  , r = e.titleId
                  , s = Fi(e, Wi);
                return a.createElement("svg", Ui({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Bi || (Bi = a.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), Ai || (Ai = a.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), Mi || (Mi = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var Vi = a.forwardRef(Di);
            n.p;
            const Gi = "index_loader__kDy+9"
              , Hi = "index_container__X8xX8"
              , Ki = "index_container_subtlt__LyYby"
              , Yi = "index_container_info__c9KQP"
              , Xi = "index_info_icon__i5uhI"
              , zi = "index_verifiedUsers__ByJWu"
              , Ji = "index_avatars__q4nFz"
              , qi = "index_usersCount__ZOUzI"
              , Qi = "index_container_btn__rWex7"
              , $i = "index_tncContainer__McO06"
              , eo = "index_termsAndConditions__Gifk+";
            var to = ()=>(0,
            j.jsx)(ai, {})
              , no = e=>{
                var t = e.totalVerifiedCount;
                return (0,
                j.jsxs)("div", {
                    className: Hi,
                    children: [(0,
                    j.jsx)(dr, {
                        html: (0,
                        P.O4)("ok_game_okxracer_title_verify_surprises")
                    }), (0,
                    j.jsx)("div", {
                        className: Ki,
                        children: (0,
                        P.O4)("ok_game_okxracer_text_complete_steps_eligible")
                    }), (0,
                    j.jsxs)("div", {
                        className: zi,
                        children: [(0,
                        j.jsx)("img", {
                            className: Ji,
                            src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg"),
                            alt: ""
                        }), (0,
                        j.jsx)("span", {
                            className: qi,
                            children: t > 0 ? (0,
                            wt.uf)(t) : "--"
                        }), (0,
                        P.O4)("ok_game_okxracer_text_racers_already_verified")]
                    }), (0,
                    j.jsx)(Li, (0,
                    k.Z)({}, e)), (0,
                    j.jsxs)("div", {
                        className: Yi,
                        children: [(0,
                        j.jsx)(Vi, {
                            className: Xi,
                            height: 16
                        }), (0,
                        P.O4)("ok_game_okxracer_surprises_verify_desc")]
                    }), (0,
                    j.jsx)(Ht, {
                        onClick: e.onClick,
                        className: Qi,
                        text: (0,
                        P.O4)("ok_game_okxracer_surprises_verify")
                    }), (0,
                    j.jsx)("div", {
                        className: $i,
                        children: (0,
                        j.jsx)("button", {
                            className: eo,
                            onClick: ()=>{
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(ne)
                            }
                            ,
                            type: "button",
                            children: (0,
                            P.O4)("ok_game_okxracer_tnc")
                        })
                    })]
                })
            }
              , ao = ()=>{
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
                                ze(n, a);
                            case 6:
                                r = e.sent,
                                s(!1),
                                r && _(r),
                                !t || null !== r && void 0 !== r && r.isKyc && r.isConnectTelegram || me(!1, (0,
                                P.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(2),
                                me(!1, (0,
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
                j.jsx)("div", {
                    className: Gi,
                    children: (0,
                    j.jsx)(Mn.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                j.jsx)(to, {}) : (0,
                j.jsx)(no, (0,
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
              , ro = n(40544)
              , so = n(74914)
              , io = n(59257);
            const oo = "index_taskItemPlaceholder__6HYF9"
              , co = "index_task__wcySb";
            var lo = ()=>(0,
            j.jsx)(j.Fragment, {
                children: Array.from({
                    length: 2
                }).map(((e,t)=>(0,
                j.jsx)("div", {
                    className: O()(oo),
                    children: (0,
                    j.jsx)(gr, {
                        className: co
                    })
                }, t)))
            });
            const uo = {
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
            var _o = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , mo = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , po = e=>{
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
                a.useEffect)((()=>((null === t || void 0 === t ? void 0 : t.state) === ee.finished ? E.act({
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
                                    nr(_, n);
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
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)(d.P6, {
                        style: {
                            display: "none"
                        }
                    }), (null === t || void 0 === t ? void 0 : t.state) === ee.finished && t.context.actionType === Ge.WalletConnect ? (0,
                    j.jsxs)("div", {
                        className: uo.sheetContainer,
                        children: [(0,
                        j.jsx)(zt.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(mo),
                            className: uo.sheeLogo
                        }), (0,
                        j.jsx)("div", {
                            className: uo.sheetName,
                            children: t.context.nameFinished
                        }), (0,
                        j.jsxs)("div", {
                            className: uo.sheetCopyBox,
                            children: [(0,
                            j.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            j.jsx)(Z.Z, {
                                className: "okx-growth-copy",
                                onClick: ()=>{
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Ge.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        me(!0, (0,
                                        P.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        me(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        j.jsx)(Dt.default, {
                            category: Dt.default.CATEGORY.fill,
                            type: Dt.default.TYPE.primary,
                            size: Dt.default.SIZE.lg,
                            className: uo.btn,
                            onClick: ()=>{
                                s()
                            }
                            ,
                            children: (0,
                            j.jsx)("div", {
                                className: uo.btnTxt,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    j.jsxs)("div", {
                        className: uo.sheetContainer,
                        children: [(0,
                        j.jsx)(zt.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(_o),
                            className: uo.sheeLogoCheck
                        }), (0,
                        j.jsx)("div", {
                            className: uo.sheetName,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        j.jsx)("div", {
                            className: uo.sheetDesc,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        j.jsx)(Dt.default, {
                            category: Dt.default.CATEGORY.fill,
                            type: Dt.default.TYPE.primary,
                            size: Dt.default.SIZE.lg,
                            className: uo.btn,
                            loading: x,
                            onClick: f,
                            children: (0,
                            j.jsx)("div", {
                                className: uo.btnTxt,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            }
              , ho = {
                taskGroups: [],
                ungroupedTasks: []
            }
              , xo = (0,
            a.createContext)({
                boosts: [],
                tasks: ho,
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
              , vo = ()=>(0,
            a.useContext)(xo)
              , fo = e=>{
                var t = e.children
                  , n = (0,
                a.useState)([])
                  , r = (0,
                u.Z)(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , o = (0,
                a.useState)(ho)
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
                  , f = nt().updateGameInfoFromServer
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
                                Promise.allSettled([He(!0), Ye(!0)]);
                            case 2:
                                "fulfilled" === (a = e.sent)[0].status && i(null !== (t = a[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === a[1].status && m(null !== (n = a[1].value.data) && void 0 !== n ? n : ho);
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
                                    Ke({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([He(), f()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    pe(e.t0);
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
                  , b = function() {
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
                                    Xe(a);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([Ye(), f()]);
                                case 7:
                                    return r = e.sent,
                                    s = (0,
                                    u.Z)(r, 1),
                                    i = s[0],
                                    "fulfilled" === i.status && (d = null !== (o = null === (l = i.value) || void 0 === l ? void 0 : l.data) && void 0 !== o ? o : ho,
                                    m(d),
                                    x && (_ = d.taskGroups.find((e=>e.groupName === x.groupName))) && v(_)),
                                    e.abrupt("return", !0);
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(0),
                                    pe(e.t0);
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
                j.jsx)(xo.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: k,
                        doTask: b,
                        partner: x,
                        setSelectedPartner: w
                    },
                    children: t
                })
            }
            ;
            const go = "index_task-item__JdIYG"
              , ko = "index_title__hYmAn"
              , bo = "index_state__ddlCZ"
              , jo = "index_item-left__BNG-l"
              , wo = "index_item-right__V+4iT"
              , Co = "index_icon__yk0cJ"
              , No = "index_done__h9mLm";
            var yo = e=>{
                var t = e.task
                  , n = e.onClick
                  , a = t.id
                  , r = t.points
                  , s = t.state
                  , i = t.context;
                return (0,
                j.jsxs)("div", {
                    className: go,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    j.jsxs)("div", {
                        className: jo,
                        children: [(0,
                        j.jsx)("div", {
                            className: ko,
                            children: i.name
                        }), (0,
                        j.jsx)("div", {
                            className: bo,
                            children: " ".concat(s === ee.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            wt.uf)(r, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), (0,
                    j.jsx)("div", {
                        className: wo,
                        children: s === ee.finished ? (0,
                        j.jsx)("div", {
                            className: No,
                            children: (0,
                            P.O4)("ok_game_okxracer_done")
                        }) : (0,
                        j.jsx)(Z.Z, {
                            className: O()("okx-growth-chevrons-right", Co)
                        })
                    })]
                }, a)
            }
            ;
            const Oo = "index_container__LfQHA"
              , Po = "index_sheet-container__7hIP5"
              , Zo = "index_sheet-name__+hUn6"
              , To = "index_sheet-desc__Uh4Uk"
              , Eo = "index_btn__+6gr5";
            function So(e) {
                var t = e.tasks
                  , n = e.className
                  , r = vo().doTask
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
                                    return t.context.actionType === Ge.OpenLink && t.context.redirectLink && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || s.WebApp.openLink(t.context.redirectLink)),
                                    e.next = 4,
                                    r(t.id, n);
                                case 4:
                                    e.sent && me(!0, (0,
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
                xs.Z)((e=>{
                    if (t.length > 0) {
                        var n = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === n || void 0 === n ? void 0 : n.context.actionType) !== Ge.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === ee.finished)
                            return;
                        d(n),
                        h(!0),
                        (null === n || void 0 === n ? void 0 : n.context.actionType) === Ge.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === ee.finished ? E.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : (null === n || void 0 === n ? void 0 : n.context.actionType) === Ge.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) !== ee.finished && E.act({
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
                xs.Z)(v, {
                    wait: 500
                }).run
                  , k = {
                    [Ge.WalletConnect]: ()=>(0,
                    j.jsx)(po, {
                        selectedTask: o,
                        onClick: (e,t)=>g(e, t),
                        uid: x
                    })
                };
                return (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)("div", {
                        className: O()(Oo, n),
                        children: t.length > 0 ? t.map((e=>(0,
                        j.jsx)(yo, {
                            task: e,
                            onClick: f
                        }, e.id))) : (0,
                        j.jsx)(lo, {})
                    }), o && (0,
                    j.jsx)(le, {
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
                                j.jsxs)("div", {
                                    className: Po,
                                    children: [(0,
                                    j.jsx)("div", {
                                        className: Zo,
                                        children: e.name
                                    }), (0,
                                    j.jsx)("div", {
                                        className: To,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            lr.dU)(t)
                                        }
                                    }), (0,
                                    j.jsx)(Ht, {
                                        className: Eo,
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
            const Ro = {
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
            var Io = ()=>{
                var e = vo().partner
                  , t = (0,
                s.useHistory)()
                  , n = t.replace
                  , r = t.goBack
                  , i = (0,
                s.useLocation)().hash;
                if ((0,
                a.useEffect)((()=>{
                    var t, a, s;
                    e ? null === (t = window.Telegram) || void 0 === t || null === (a = t.WebApp) || void 0 === a || null === (s = a.BackButton) || void 0 === s || s.show().onClick(r) : n(W + i);
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
                j.jsxs)("div", {
                    className: Ro.container,
                    children: [(0,
                    j.jsxs)("div", {
                        className: Ro.header,
                        children: [(0,
                        j.jsx)(so.Z, {
                            size: io.Z.sm,
                            className: Ro.logo,
                            src: "".concat(o.Z.cdnBaseUrl).concat(d)
                        }), (0,
                        j.jsx)("h1", {
                            className: Ro.title,
                            children: _
                        })]
                    }), (0,
                    j.jsx)("p", {
                        className: Ro.desc,
                        children: m
                    }), (0,
                    j.jsxs)("div", {
                        className: Ro.status,
                        children: [(0,
                        j.jsxs)("div", {
                            className: Ro.statusItem,
                            children: [(0,
                            j.jsx)("div", {
                                className: Ro.statusTitle,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_total_pts")
                            }), (0,
                            j.jsx)("div", {
                                className: Ro.statusValue,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                    number: (0,
                                    wt.uf)(p, {
                                        signDisplay: !0
                                    })
                                })
                            })]
                        }), (0,
                        j.jsxs)("div", {
                            className: Ro.statusItem,
                            children: [(0,
                            j.jsx)("div", {
                                className: Ro.statusTitle,
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_racers")
                            }), (0,
                            j.jsxs)("div", {
                                className: Ro.statusValue,
                                children: [(0,
                                j.jsx)(Z.Z, {
                                    className: O()("okx-growth-friends", Ro.participantsIcon)
                                }), wt.ag.shortNumber(h, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })]
                            })]
                        })]
                    }), (0,
                    j.jsxs)("div", {
                        className: Ro.tasks,
                        children: [(0,
                        j.jsxs)("div", {
                            className: Ro.taskListHeader,
                            children: [(0,
                            j.jsx)("span", {
                                children: (0,
                                P.O4)("ok_game_okxracer_text_phase3_tasks")
                            }), (0,
                            j.jsx)("span", {
                                className: Ro.taskCount,
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    P.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(c, "/").concat(l)
                                    })
                                }
                            })]
                        }), (0,
                        j.jsx)(So, {
                            tasks: u
                        })]
                    })]
                })
            }
            ;
            const Lo = "Tag_tag__tkWly";
            var Bo = e=>{
                var t = e.text
                  , n = e.className;
                return (0,
                j.jsx)("span", {
                    className: O()(Lo, n),
                    children: t || (0,
                    P.O4)("commonall_tag_text_new")
                })
            }
              , Ao = e=>(null === e || void 0 === e ? void 0 : e.type) === te.DailyBoost
              , Mo = e=>"actionType"in e && e.actionType === Ge.UnLock
              , Wo = e=>{
                var t = e.pointCost
                  , n = e.curStage
                  , a = e.totalStage;
                return !Ao(e) && n >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                P.O4)("ok_game_okxracer_free") : "".concat((0,
                wt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const Uo = "index_sheet__FbHHx"
              , Fo = "index_sheet-icon__H2xCV"
              , Do = "index_boostSheetTag__NbYFf"
              , Vo = "index_sheet-title__RInQ-"
              , Go = "index_sheet-desc__W9myB"
              , Ho = "index_sheet-data__FALtV"
              , Ko = "index_sheet-point__Xrsvs"
              , Yo = "index_sheet-lvl__f1+W-"
              , Xo = "index_lockBtnContainer__4DPO7"
              , zo = "index_btn__bxKiJ"
              , Jo = "index_boost-data-split-point__TaGIo";
            var qo = e=>{
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
                  , _ = Mo(r)
                  , m = !1
                  , p = u
                  , h = d;
                return _ && (o ? (p = r.unlockDescription,
                h = r.unlockButtonText) : p = r.ruleDescription,
                s === i && (m = !0,
                h = r.activatedButtonText)),
                (0,
                j.jsxs)("div", {
                    className: Uo,
                    children: [(0,
                    j.jsx)("div", {
                        className: Fo,
                        children: c
                    }), _ && (0,
                    j.jsx)(Bo, {
                        className: Do
                    }), (0,
                    j.jsx)("div", {
                        className: Vo,
                        children: l
                    }), (0,
                    j.jsx)("div", {
                        className: Go,
                        children: p
                    }), (0,
                    j.jsxs)("div", {
                        className: Ho,
                        children: [(0,
                        j.jsx)("span", {
                            className: Ko,
                            children: Wo(t)
                        }), (Ao(t) || s < i) && (0,
                        j.jsx)("span", {
                            className: Jo
                        }), (0,
                        j.jsx)("span", {
                            className: Yo,
                            children: Ao(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    j.jsx)(J, {
                        to: D,
                        className: Xo,
                        children: (0,
                        j.jsx)(Ht, {
                            text: h
                        })
                    }) : (0,
                    j.jsx)(Ht, {
                        onClick: ()=>{
                            n(t)
                        }
                        ,
                        className: zo,
                        text: h,
                        disabled: m
                    })]
                })
            }
            ;
            const Qo = "index_boost-item__k6pnm"
              , $o = "index_boost-icon__wH6Dh"
              , ec = "index_boost-title__9R-Ry"
              , tc = "index_newTag__tgIea"
              , nc = "index_boost-desc__k1Big"
              , ac = "index_boost-data__+0cnG"
              , rc = "index_boost-data-split-point__moT+k"
              , sc = "index_boost-data-stage__8CAgC"
              , ic = "index_boostItemPlaceholder__NaUkk"
              , oc = "index_locked__sM-YP"
              , cc = "index_unlockIcon__whxqz"
              , lc = "index_unlockButton__C3EY5";
            var uc = e=>{
                var t = e.boost
                  , n = t.curStage
                  , a = t.totalStage
                  , r = t.isLocked
                  , s = t.context;
                if (Mo(s)) {
                    if (r)
                        return (0,
                        j.jsx)("div", {
                            className: ac,
                            children: (0,
                            P.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === a)
                        return (0,
                        j.jsx)("div", {
                            className: ac,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                j.jsxs)("div", {
                    className: ac,
                    children: [(0,
                    j.jsx)("span", {
                        children: Wo(t)
                    }), (Ao(t) || n < a) && (0,
                    j.jsx)("span", {
                        className: rc
                    }), (0,
                    j.jsx)("span", {
                        className: sc,
                        children: Ao(t) ? "".concat(a - n, "/").concat(a) : "Lvl ".concat(n)
                    })]
                })
            }
              , dc = e=>{
                var t = e.boost
                  , n = e.onClick
                  , a = t.id
                  , r = t.context
                  , s = t.isLocked
                  , i = r.icon
                  , o = r.name
                  , c = r.desc
                  , l = Mo(r);
                return (0,
                j.jsxs)("div", {
                    className: Qo,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    j.jsx)("div", {
                        className: $o,
                        children: i
                    }), (0,
                    j.jsxs)("div", {
                        className: ec,
                        children: [o, l && (0,
                        j.jsx)(Bo, {
                            className: tc
                        })]
                    }), (0,
                    j.jsx)("div", {
                        className: nc,
                        children: c
                    }), (0,
                    j.jsx)(uc, {
                        boost: t
                    }), s && (0,
                    j.jsxs)("div", {
                        className: oc,
                        children: [(0,
                        j.jsx)(Z.Z, {
                            className: O()("okx-growth-lock", cc)
                        }), (0,
                        j.jsx)(Dt.default, {
                            category: Dt.default.CATEGORY.text,
                            type: Dt.default.TYPE.primary,
                            size: Dt.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: Dt.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: lc,
                            children: (0,
                            P.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, a)
            }
              , _c = ()=>(0,
            j.jsxs)("div", {
                className: O()(Qo, ic),
                children: [(0,
                j.jsx)(gr, {
                    className: $o
                }), (0,
                j.jsx)(gr, {
                    className: ec
                }), (0,
                j.jsx)(gr, {
                    className: nc
                }), (0,
                j.jsx)(gr, {
                    className: ac
                })]
            });
            const mc = "index_boost-item-container__SW62L"
              , pc = "index_boost-item-padding__IwiTB";
            var hc = e=>{
                var t = e.onClick
                  , n = vo().boosts
                  , r = (0,
                a.useCallback)((e=>{
                    var a = n.find((t=>t.id === e));
                    a && t(a)
                }
                ), [n, t]);
                return (0,
                j.jsxs)("div", {
                    className: mc,
                    children: [(0,
                    j.jsx)("div", {
                        className: pc
                    }), n.length > 0 ? (0,
                    j.jsx)(j.Fragment, {
                        children: n.map((e=>(0,
                        j.jsx)(dc, {
                            boost: e,
                            onClick: r
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    j.jsxs)(j.Fragment, {
                        children: [(0,
                        j.jsx)(_c, {}), (0,
                        j.jsx)(_c, {}), (0,
                        j.jsx)(_c, {})]
                    }), (0,
                    j.jsx)("div", {
                        className: pc
                    })]
                })
            }
            ;
            const xc = "BoostArea_boosts-title__hkjWn"
              , vc = "BoostArea_boost-area__AMJbh"
              , fc = "BoostArea_container__qLJSQ";
            var gc = ()=>{
                var e = vo()
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
                  , h = nt().points
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
                                    me(!1, (0,
                                    P.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    me(!1, (0,
                                    P.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && me(!0);
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
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsxs)("div", {
                        className: xc,
                        children: [(0,
                        P.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    j.jsx)("div", {
                        className: vc,
                        children: (0,
                        j.jsxs)("div", {
                            className: fc,
                            children: [(0,
                            j.jsx)(hc, {
                                onClick: v
                            }), (0,
                            j.jsx)(le, {
                                visible: m,
                                onClose: ()=>{
                                    p(!1)
                                }
                                ,
                                children: i && (0,
                                j.jsx)(qo, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const kc = "index_partnerItem__S1dkf"
              , bc = "index_title__bRRMU"
              , jc = "index_points__WQSip"
              , wc = "index_state__gi-nK"
              , Cc = "index_logo__y4rK-"
              , Nc = "index_item-left__ej9+1"
              , yc = "index_item-right__3KRWi"
              , Oc = "index_dot__4bynu"
              , Pc = "index_participantsIcon__-tYh0"
              , Zc = "index_icon__gS69A";
            var Tc = e=>{
                var t = e.name
                  , n = e.totalPoints
                  , a = e.numCompletedTasks
                  , r = e.numTasks
                  , s = e.participants
                  , i = e.logo;
                return (0,
                j.jsxs)("div", {
                    className: kc,
                    children: [(0,
                    j.jsx)(so.Z, {
                        size: io.Z.sm,
                        className: Cc,
                        src: "".concat(o.Z.cdnBaseUrl).concat(i)
                    }), (0,
                    j.jsxs)("div", {
                        className: Nc,
                        children: [(0,
                        j.jsx)("div", {
                            className: bc,
                            children: t
                        }), (0,
                        j.jsx)("div", {
                            className: jc,
                            children: (0,
                            P.O4)("ok_game_okxracer_text_phase3_up_to_pts", {
                                number: (0,
                                wt.uf)(n, {
                                    signDisplay: !0
                                })
                            })
                        }), (0,
                        j.jsxs)("div", {
                            className: wc,
                            children: [(0,
                            j.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: (0,
                                    lr.dU)((0,
                                    P.O4)("ok_game_okxracer_text_phase3_tasks_completed", {
                                        number: "".concat(a, "/").concat(r)
                                    }))
                                }
                            }), (0,
                            j.jsx)("span", {
                                className: Oc
                            }), (0,
                            j.jsx)(Z.Z, {
                                className: O()("okx-growth-friends", Pc)
                            }), (0,
                            j.jsx)("em", {
                                children: wt.ag.shortNumber(s, {
                                    digit: 0,
                                    roundingMode: "ceil"
                                })
                            })]
                        })]
                    }), (0,
                    j.jsx)("div", {
                        className: yc,
                        children: (0,
                        j.jsx)(Z.Z, {
                            className: O()("okx-growth-chevrons-right", Zc)
                        })
                    })]
                })
            }
            ;
            const Ec = "index_container__wKNP9";
            function Sc(e) {
                var t = e.tasks
                  , n = e.className
                  , a = vo().setSelectedPartner
                  , r = t.length > 0;
                return (0,
                j.jsx)("div", {
                    className: O()(Ec, n),
                    children: r ? t.map((e=>{
                        var t = e.groupName
                          , n = e.numTasks
                          , r = e.numCompletedTasks
                          , s = e.totalPoints
                          , i = e.participants
                          , o = e.logo;
                        return (0,
                        j.jsx)(J, {
                            to: U,
                            onClick: ()=>{
                                a(e)
                            }
                            ,
                            children: (0,
                            j.jsx)(Tc, {
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
                    j.jsx)(lo, {})
                })
            }
            const Rc = "TaskArea_tabPane__irXs6"
              , Ic = "TaskArea_tabName__-BL2R"
              , Lc = "TaskArea_list__cqK4t";
            var Bc = e=>{
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , a = e.count
                  , r = n ? (0,
                P.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                P.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                j.jsxs)("div", {
                    className: Ic,
                    children: [r, " ", (0,
                    j.jsxs)("span", {
                        children: ["(", a, ")"]
                    })]
                })
            }
              , Ac = ()=>{
                var e = vo().tasks
                  , t = e.taskGroups
                  , n = e.ungroupedTasks;
                return (0,
                j.jsx)(j.Fragment, {
                    children: (0,
                    j.jsxs)(cr.Z.Underline, {
                        size: cr.Z.SIZE.xl,
                        children: [(0,
                        j.jsx)(cr.Z.TabPane, {
                            className: Rc,
                            tab: (0,
                            j.jsx)(Bc, {
                                isPartner: !0,
                                count: t.length
                            }),
                            id: "partner",
                            children: (0,
                            j.jsx)(Sc, {
                                tasks: t,
                                className: Lc
                            })
                        }), (0,
                        j.jsx)(cr.Z.TabPane, {
                            className: Rc,
                            tab: (0,
                            j.jsx)(Bc, {
                                count: n.length
                            }),
                            id: "own",
                            children: (0,
                            j.jsx)(So, {
                                tasks: n,
                                className: Lc
                            })
                        })]
                    })
                })
            }
            ;
            const Mc = "TaskPage_container__5KfIM"
              , Wc = "TaskPage_block__kt8oo"
              , Uc = "TaskPage_block-boost__QYQXL"
              , Fc = "TaskPage_points-title__4hW9Y"
              , Dc = "TaskPage_points-content__+yK3g"
              , Vc = "TaskPage_totalPoints__hWrtV"
              , Gc = "TaskPage_infoIcon__p5I2c";
            var Hc = ()=>{
                var e = nt()
                  , t = e.points
                  , n = e.accumPoints;
                return (0,
                j.jsxs)("div", {
                    className: Mc,
                    children: [(0,
                    j.jsx)("div", {
                        className: Wc,
                        children: (0,
                        j.jsxs)(j.Fragment, {
                            children: [(0,
                            j.jsxs)("div", {
                                className: Fc,
                                children: ["\ud83c\udfc6 ", (0,
                                P.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            j.jsx)("div", {
                                className: Dc,
                                children: Ct.yx.thousandFormat(t || 0)
                            }), (0,
                            j.jsxs)("div", {
                                className: Vc,
                                children: [(0,
                                P.O4)("ok_game_okxracer_text_phase3_total_pts_earned"), (0,
                                j.jsx)("em", {
                                    children: Ct.yx.thousandFormat(n || 0)
                                }), (0,
                                j.jsx)(ro.Z, {
                                    title: (0,
                                    P.O4)("ok_game_okxracer_hinttext_phase3_surprises_based"),
                                    type: ro.Z.TYPES.neutral,
                                    children: (0,
                                    j.jsx)(Z.Z, {
                                        iconName: "okx-growth-information",
                                        className: Gc
                                    })
                                })]
                            })]
                        })
                    }), (0,
                    j.jsx)("div", {
                        className: Uc,
                        children: (0,
                        j.jsx)(gc, {})
                    }), (0,
                    j.jsx)("div", {
                        className: Wc,
                        children: (0,
                        j.jsx)(Ac, {})
                    })]
                })
            }
              , Kc = ()=>(0,
            j.jsx)(fo, {
                children: (0,
                j.jsxs)(s.Switch, {
                    children: [(0,
                    j.jsx)(s.Route, {
                        path: W,
                        component: Hc,
                        exact: !0
                    }), (0,
                    j.jsx)(s.Route, {
                        path: U,
                        component: Io,
                        exact: !0
                    })]
                })
            })
              , Yc = ()=>{
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
                j.jsx)("article", {
                    className: v,
                    children: (0,
                    j.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: h ? (0,
                        j.jsxs)(j.Fragment, {
                            children: [(0,
                            j.jsx)(lt, {
                                children: (0,
                                j.jsx)(at, {
                                    children: (0,
                                    j.jsx)(_t, {
                                        children: (0,
                                        j.jsx)(d.LD, {
                                            manifestUrl: ae(),
                                            children: (0,
                                            j.jsx)("main", {
                                                className: g,
                                                children: (0,
                                                j.jsxs)(s.Switch, {
                                                    children: [(0,
                                                    j.jsx)(s.Route, {
                                                        path: A,
                                                        component: (o = or,
                                                        e=>(0,
                                                        j.jsx)("div", {
                                                            className: b,
                                                            children: (0,
                                                            j.jsx)(o, (0,
                                                            k.Z)({}, e))
                                                        })),
                                                        exact: !0
                                                    }), (0,
                                                    j.jsx)(s.Route, {
                                                        path: F,
                                                        component: C(us),
                                                        exact: !0
                                                    }), (0,
                                                    j.jsx)(s.Route, {
                                                        path: W,
                                                        component: Kc
                                                    }), (0,
                                                    j.jsx)(s.Route, {
                                                        path: M,
                                                        component: C(Ks),
                                                        exact: !0
                                                    }), (0,
                                                    j.jsx)(s.Route, {
                                                        path: D,
                                                        component: C(ao),
                                                        exact: !0
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            j.jsx)("div", {
                                className: f,
                                children: (0,
                                j.jsx)(Q, {})
                            })]
                        }) : (0,
                        j.jsx)(hs, {})
                    })
                })
            }
              , Xc = document.getElementById("root");
            if (Xc) {
                var zc = (0,
                j.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    j.jsx)(B, {
                        children: (0,
                        j.jsx)(Yc, {})
                    })
                });
                (0,
                i.createRoot)(Xc).render(zc)
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
    var a = n.O(void 0, [3231, 5825, 5145, 5964, 5890, 64, 6371, 8283, 6877, 4084, 4259, 7110, 1490, 3801], (()=>n(54584)));
    a = n.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.666bbe65.js.map
