(()=>{
    var e = {
        14431: (e,t,n)=>{
            "use strict";
            var r = n(87363)
              , a = n.n(r);
            const s = ReactRouterDOM;
            n(75139);
            var i = n(73271)
              , o = n(53949)
              , c = (n(78599),
            n(74165))
              , l = n(15861)
              , u = n(70885)
              , d = n(95640)
              , _ = n.n(d)
              , p = n(46541)
              , m = n(1677)
              , h = n(2627)
              , x = n(45929)
              , v = n(8786)
              , f = ()=>{
                var e, t, n = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, r = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === n || void 0 === n ? void 0 : n.language_code) || "en"] || "en_US";
                return v.Z.set("locale", r),
                window._okGlobal && (window._okGlobal.locale = r),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: r
                }
            }
              , g = n(12782);
            const k = "App_container__p+0qT"
              , j = "App_navbar__zvxzr"
              , b = "App_content__Jjurs";
            var w = n(28683);
            const C = "NoPaddingLayout_no-padding-layout__6LAKV";
            var y = n(45263)
              , N = e=>t=>(0,
            y.jsx)("div", {
                className: C,
                children: (0,
                y.jsx)(e, (0,
                w.Z)({}, t))
            });
            const O = "ComPaddingLayout_common-padding-layout__0gGbM";
            var P = e=>t=>(0,
            y.jsx)("div", {
                className: O,
                children: (0,
                y.jsx)(e, (0,
                w.Z)({}, t))
            })
              , Z = n(44925)
              , T = n(14300)
              , E = n(72106)
              , S = {
                act: function() {}
            };
            "undefined" !== typeof window && (S = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var R = S
              , L = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , I = (0,
            r.createContext)(L)
              , B = ()=>(0,
            r.useContext)(I)
              , A = e=>{
                var t = e.children
                  , n = (0,
                r.useMemo)((()=>{
                    var e, t, n = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, r = n.user, a = n.start_param;
                    if (r) {
                        var s = r.id
                          , i = r.username
                          , o = r.first_name
                          , c = r.last_name
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
                    return L
                }
                ), [])
                  , a = (0,
                r.useState)(n)
                  , s = (0,
                u.Z)(a, 1)[0];
                return (0,
                y.jsx)(I.Provider, {
                    value: s,
                    children: t
                })
            }
              , M = "/mini-app/racer"
              , F = "/mini-app/racer/referrals"
              , U = "/mini-app/racer/tasks"
              , W = "/mini-app/racer/leaderboard"
              , D = "/mini-app/racer/rewards";
            const V = "Navbar_navbar__LF3-M"
              , G = "Navbar_link__qX0Sf"
              , H = "Navbar_active__TCbF8"
              , K = "Navbar_linkIcon__GtH54"
              , Y = "Navbar_linkText__Szxi-";
            var z = ["children", "className"]
              , X = ["iconName", "label", "onClick"]
              , J = e=>{
                var t = e.children
                  , n = e.className
                  , r = (0,
                Z.Z)(e, z)
                  , a = (0,
                s.useLocation)().hash;
                return (0,
                y.jsx)(s.Link, {
                    className: n,
                    to: "".concat(r.to).concat(a),
                    onClick: r.onClick,
                    children: t
                })
            }
              , q = e=>{
                var t = e.iconName
                  , n = e.label
                  , r = e.onClick
                  , a = (0,
                Z.Z)(e, X)
                  , i = (0,
                s.useRouteMatch)({
                    path: a.to,
                    exact: !0
                });
                return (0,
                y.jsxs)(J, {
                    className: _()(G, i && H),
                    to: a.to,
                    onClick: r,
                    children: [(0,
                    y.jsx)(E.Z, {
                        iconName: t,
                        className: K
                    }), (0,
                    y.jsx)("span", {
                        className: Y,
                        children: n
                    })]
                })
            }
              , Q = ()=>{
                var e = {
                    telegramid: B().uid
                };
                return (0,
                y.jsxs)("div", {
                    className: V,
                    children: [(0,
                    y.jsx)(q, {
                        iconName: "okx-growth-home",
                        to: M,
                        label: (0,
                        T.O4)("ok_game_okxracer_home")
                    }), (0,
                    y.jsx)(q, {
                        iconName: "okx-growth-leaderboard",
                        to: W,
                        label: (0,
                        T.O4)("ok_game_okxracer_leaderboard"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                    y.jsx)(q, {
                        iconName: "okx-growth-task",
                        to: U,
                        label: (0,
                        T.O4)("ok_game_okxracer_tasks"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                    y.jsx)(q, {
                        iconName: "okx-growth-friends",
                        to: F,
                        label: (0,
                        T.O4)("ok_game_okxracer_friends"),
                        onClick: ()=>{
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                    y.jsx)(q, {
                        iconName: "okx-growth-surprises",
                        to: D,
                        label: (0,
                        T.O4)("ok_game_okxracer_surprises")
                    })]
                })
            }
            ;
            function $(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var ee = n(5425);
            const te = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var ne = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: te.closeBtn,
                closeIconClassName: te.closeIcon
            }
              , re = e=>(0,
            y.jsx)(ee.Z, (0,
            w.Z)((0,
            w.Z)({}, ne), {}, {
                topContent: e.title ? void 0 : (0,
                y.jsx)("div", {
                    className: te.topPadding
                })
            }, e))
              , ae = n(4860)
              , se = n(4422)
              , ie = n(72202)
              , oe = (e,t)=>{
                e ? x.Z.success({
                    title: t || (0,
                    T.O4)("ok_game_okxracer_success"),
                    placement: x.Z.DIRECTION.topRight,
                    showClose: !1
                }) : x.Z.error({
                    title: t || (0,
                    T.O4)("ok_game_okxracer_failed"),
                    placement: x.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , ce = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                oe(!1, t || (0,
                T.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , le = n(60378);
            const ue = utils.ont;
            var de = n.n(ue)
              , _e = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , pe = e=>t=>{
                if (!(0,
                le.y)()) {
                    var n = t || {}
                      , r = n.status
                      , a = n.data || {}
                      , s = a.msg
                      , i = a.code;
                    se.k.warn("Request error, url=".concat(e, " status=").concat(r, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , me = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de().get(t, n).then(_e, pe(t)));
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
              , he = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de().getWithCache(t, n).then(_e, pe(t)));
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
              , xe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de().post(t, n, r).then(_e, pe(t)));
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
              , ve = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de().put(t, n, r).then(_e, pe(t)));
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
              , fe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", de().delete(t, n).then(_e, pe(t)));
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
              , ge = function() {
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
                                Object.entries(null !== n && void 0 !== n ? n : {}).forEach((e=>{
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    r instanceof Blob ? a.append(n, r) : a.append(n, String(r))
                                }
                                )),
                                e.abrupt("return", xe(t, a, r));
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
            const ke = {
                get: me,
                getWithCache: he,
                post: xe,
                put: ve,
                postForm: ge,
                delete: fe
            };
            class je {
                constructor() {
                    this.store = void 0,
                    this.store = new Map
                }
                static getInstance() {
                    return je.instance || (je.instance = new je),
                    je.instance
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
            je.instance = void 0;
            const be = je.getInstance();
            function we(e, t) {
                return function() {
                    var n = (0,
                    l.Z)((0,
                    c.Z)().mark((function n(r, a) {
                        var s;
                        return (0,
                        c.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (s = "cache_".concat(r, "_").concat(JSON.stringify(a)),
                                    !be.hasItem(s) || be.isItemExpired(s, t)) {
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
            function Ce(e, t, n) {
                return ye.apply(this, arguments)
            }
            function ye() {
                return (ye = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    var a, s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ke.get(t, (0,
                                w.Z)((0,
                                w.Z)({}, r || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (a = window.Telegram) || void 0 === a || null === (s = a.WebApp) || void 0 === s ? void 0 : s.initData) || ""
                                    }
                                }));
                            case 2:
                                return i = e.sent,
                                be.setItem(n, i),
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
            function Ne(e, t, n) {
                return Oe.apply(this, arguments)
            }
            function Oe() {
                return (Oe = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r) {
                    var a, s;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (a = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !r || !be.hasItem(a)) {
                                    e.next = 5;
                                    break
                                }
                                return s = be.getItem(a),
                                Ce(t, a, n).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", s);
                            case 5:
                                return e.abrupt("return", Ce(t, a, n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Pe(e, t, n, r) {
                return Ze.apply(this, arguments)
            }
            function Ze() {
                return (Ze = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r, a) {
                    var s, i, o;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ke.post(t, n, (0,
                                w.Z)((0,
                                w.Z)({}, a || {}), {}, {
                                    headers: {
                                        "X-Telegram-Init-Data": (null === (s = window.Telegram) || void 0 === s || null === (i = s.WebApp) || void 0 === i ? void 0 : i.initData) || ""
                                    }
                                }));
                            case 2:
                                return o = e.sent,
                                be.setItem(r, o),
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
            function Te(e, t, n, r) {
                return Ee.apply(this, arguments)
            }
            function Ee() {
                return (Ee = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, n, r, a) {
                    var s, i;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = "cache_".concat(t, "_").concat(JSON.stringify(n)),
                                !be.hasItem(s) || !r) {
                                    e.next = 5;
                                    break
                                }
                                return i = be.getItem(s),
                                Pe(t, n, s, a).then((()=>{}
                                )).catch((()=>{}
                                )),
                                e.abrupt("return", i);
                            case 5:
                                return e.abrupt("return", Pe(t, n, s, a));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Se = "/priapi/v1/affiliate"
              , Re = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Te("".concat(Se, "/game/racer/info"), t));
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
                                return e.abrupt("return", Te("".concat(Se, "/game/racer/assess"), t));
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
              , Ie = function() {
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
                                Ne("".concat(Se, "/game/racer/invitee-list"), {
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
              , Be = function() {
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
                                n = we(Ne, 1e4),
                                e.next = 4,
                                n("".concat(Se, "/game/racer/leaderboard/friends"), {
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
                                ce(e.t0),
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
              , Ae = function() {
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
                                n = we(Ne, 3e5),
                                e.next = 4,
                                n("".concat(Se, "/game/racer/leaderboard/global"), {
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
                                ce(e.t0),
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
              , Me = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e[e.WalletConnect = 4] = "WalletConnect",
                e
            }({})
              , Fe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(Se, "/game/racer/boosts"), {}, t));
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
                                return e.abrupt("return", Te("".concat(Se, "/game/racer/boost"), t));
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
              , We = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ne("".concat(Se, "/game/racer/tasks"), {}, t));
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
              , De = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Te("".concat(Se, "/game/racer/task"), t));
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
              , Ve = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r, a, s, i = arguments;
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
                                Te("".concat(Se, "/game/racer/account-binding"), n, t);
                            case 4:
                                if (r = e.sent,
                                a = r.code,
                                s = r.data,
                                0 !== a || !s) {
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
            function Ge(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                        r[a] = arguments[a];
                    return e(...n, ...r)
                }
            }
            var He = {
                Rewards: Ge(Ve, !0),
                Friends: Ge(Be, {
                    pageNo: 1
                }),
                Boost: Ge(Fe, !0),
                Task: Ge(We, !0),
                Invitee: Ge(Ie, {
                    pageNo: 1
                }, !0),
                Global: Ge(Ae, {
                    pageNo: 1
                })
            }
              , Ke = ["Rewards", "Friends", "Boost", "Task", "Invitee", "Global"]
              , Ye = function() {
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
                                return e.next = 8,
                                r = He[n],
                                void ("requestIdleCallback"in window ? requestIdleCallback(r) : setTimeout(r, 0));
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(3),
                                e.t0 instanceof Error && se.k.error("mini app okx racer, executeRequestsRecursively-error ".concat(e.t0.message), e.t0);
                            case 13:
                                return e.next = 15,
                                Ye(t);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                        var r
                    }
                    ), e, null, [[3, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function ze() {
                Ye(Ke).catch((e=>{
                    e instanceof Error && se.k.error("mini app okx racer, initPreRequest-error ".concat(e.message), {
                        e: e
                    })
                }
                ))
            }
            var Xe = (0,
            r.createContext)({
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
                isShowRiskControlSheet: !0,
                autopilotPoints: 0,
                hideRiskControlSheet: ()=>{}
                ,
                hideAutopilotSheet: ()=>{}
            })
              , Je = ()=>(0,
            r.useContext)(Xe)
              , qe = e=>{
                var t, n = e.children, a = (0,
                r.useState)(0), s = (0,
                u.Z)(a, 2), i = s[0], o = s[1], d = (0,
                r.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], h = (0,
                r.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                r.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], b = k[1], w = (0,
                r.useState)(""), C = (0,
                u.Z)(w, 2), N = C[0], O = C[1], P = (0,
                r.useState)(!0), Z = (0,
                u.Z)(P, 2), E = Z[0], S = Z[1], R = B(), L = R.username, I = R.startParam, A = (0,
                r.useState)(""), M = (0,
                u.Z)(A, 2), F = M[0], U = M[1], W = (0,
                r.useState)(!1), D = (0,
                u.Z)(W, 2), V = D[0], G = D[1], H = (0,
                r.useState)(0), K = (0,
                u.Z)(H, 2), Y = K[0], z = K[1], X = (0,
                r.useState)(!1), J = (0,
                u.Z)(X, 2), q = J[0], Q = J[1], $ = null !== (t = new ae.Z((I || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", ee = (0,
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
                                Re({
                                    extUserName: L,
                                    linkCode: $
                                });
                            case 3:
                                t = e.sent,
                                (n = t.data) && (o(Math.max(n.balancePoints, 0)),
                                O(n.linkCode),
                                m(n.numChances),
                                b(n.secondToRefresh),
                                f(n.numChancesTotal),
                                G(!n.isUnderRiskControl && n.isShowAutopilotGainedPoint),
                                Q(n.isUnderRiskControl),
                                z(n.autopilotPoints),
                                S(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                oe(!1, (0,
                                T.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [$, L]);
                (0,
                r.useEffect)((()=>{
                    ee().then(ze).catch((e=>{
                        e instanceof Error && se.k.error("mini app racer init load failed ".concat(e.message), e)
                    }
                    ))
                }
                ), [ee]),
                (0,
                r.useEffect)((()=>{
                    var e = new ie.Z(j);
                    return j > 0 ? (e.start(),
                    e.addEventListener(ie.Z.Event.UPDATE, (e=>{
                        U("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(ie.Z.Event.FINISH, (()=>{
                        U(""),
                        ee()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    U("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [j, ee]),
                (0,
                r.useEffect)((()=>{
                    function e() {
                        document.hidden || ee()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [ee]);
                var te = (0,
                r.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    m(e.numChances),
                    b(e.secondToRefresh)
                }
                ), [])
                  , ne = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ee();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [ee])
                  , re = (0,
                r.useCallback)((()=>{
                    G(!1)
                }
                ), [])
                  , ce = (0,
                r.useCallback)((()=>{
                    Q(!1)
                }
                ), [])
                  , le = (0,
                r.useMemo)((()=>({
                    isLoading: E,
                    points: i,
                    numChances: p,
                    numChancesTotal: v,
                    countdownDisplay: F,
                    updateGameInfo: te,
                    linkCode: N,
                    updateGameInfoFromServer: ne,
                    isShowAutopilotGainedPoint: V,
                    autopilotPoints: Y,
                    hideAutopilotSheet: re,
                    isShowRiskControlSheet: q,
                    hideRiskControlSheet: ce
                })), [E, i, p, v, F, te, N, ne, V, Y, re, q, ce]);
                return (0,
                y.jsx)(Xe.Provider, {
                    value: le,
                    children: n
                })
            }
            ;
            const Qe = "RiskControl_title__h9Z0T";
            var $e = ()=>{
                var e = Je()
                  , t = e.isShowRiskControlSheet
                  , n = e.hideRiskControlSheet;
                return (0,
                y.jsx)(re, {
                    visible: t,
                    onClose: n,
                    children: (0,
                    y.jsx)("div", {
                        className: Qe,
                        children: (0,
                        T.O4)("ok_game_okxracer_risk_control")
                    })
                })
            }
              , et = n(8031);
            var tt = new class {
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
                            var r = ((null === n || void 0 === n ? void 0 : n[0]) || {}).last;
                            r && this.handleList.forEach((e=>{
                                e(Number(r))
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
                    this.connection = new et.Z({
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
              , nt = (0,
            r.createContext)(tt)
              , rt = e=>{
                var t = e.children;
                return (0,
                y.jsx)(nt.Provider, {
                    value: tt,
                    children: t
                })
            }
              , at = (0,
            r.createContext)(null)
              , st = ()=>(0,
            r.useContext)(at)
              , it = e=>{
                var t = e.children
                  , n = (0,
                r.useState)(null)
                  , a = (0,
                u.Z)(n, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                r.useContext)(nt);
                return (0,
                r.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                y.jsx)(at.Provider, {
                    value: s,
                    children: t
                })
            }
              , ot = n(46430)
              , ct = "racer"
              , lt = ()=>{
                var e;
                if (!(0,
                le.y)())
                    return ot.Z.getInstance(ct) || ot.Z.init({
                        project: ct
                    }),
                    null !== (e = ot.Z.getInstance(ct)) && void 0 !== e ? e : ot.Z
            }
              , ut = "guessRecords_new";
            function dt(e) {
                var t = lt().get(ut) || [];
                t.unshift(e),
                lt().set(ut, t.slice(0, 5))
            }
            var _t = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , pt = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: _t.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: _t.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , mt = (0,
            r.createContext)(pt)
              , ht = ()=>(0,
            r.useContext)(mt)
              , xt = e=>{
                var t = e.children
                  , n = B().uid
                  , a = (0,
                r.useState)(!1)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                r.useState)(5)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                r.useState)(null)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                r.useState)(null)
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , b = k[1]
                  , w = (0,
                r.useState)(_t.NONE)
                  , C = (0,
                u.Z)(w, 2)
                  , N = C[0]
                  , O = C[1]
                  , P = st()
                  , Z = Je().updateGameInfo
                  , E = (0,
                r.useRef)(_t.NONE)
                  , S = (0,
                r.useRef)(1)
                  , L = (0,
                r.useRef)(10)
                  , I = (0,
                r.useRef)(null)
                  , A = (0,
                r.useRef)(null)
                  , M = (0,
                r.useRef)(null)
                  , F = (0,
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
                                t = E.current === _t.UP ? 1 : 0,
                                e.next = 4,
                                Le({
                                    predict: t
                                });
                            case 4:
                                n = e.sent,
                                (r = n.data) && (b(r.won),
                                Z({
                                    points: r.balancePoints,
                                    numChances: r.numChance,
                                    secondToRefresh: r.secondToRefresh
                                }),
                                S.current = r.multiplier,
                                L.current = r.basePoint,
                                I.current = Number(r.changeRate),
                                A.current = r.prevPrice,
                                M.current = r.currentPrice,
                                dt({
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
                                b(null),
                                I.current = null,
                                oe(!1, (0,
                                T.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = _t.NONE,
                                o(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [Z]);
                (0,
                r.useEffect)((()=>{
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
                r.useEffect)((()=>{
                    if (i && P)
                        if (v) {
                            var e = P > v;
                            O(P === v ? _t.NONE : e ? _t.UP : _t.DOWN)
                        } else
                            f(P)
                }
                ), [v, i, P]);
                var U = (0,
                r.useCallback)((e=>{
                    b(null),
                    o(!0),
                    E.current = e,
                    I.current = null;
                    var t = {
                        telegramid: n
                    };
                    e === _t.UP && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        R.act({
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
                    e === _t.DOWN && function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        R.act({
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
                  , W = (0,
                r.useMemo)((()=>({
                    countdown: p,
                    onButtonClick: U,
                    result: j,
                    isPending: i,
                    currentTrend: N,
                    multiplier: S.current,
                    basePoints: L.current,
                    predict: E.current,
                    changeRate: I.current,
                    prevPrice: A.current,
                    currentPrice: M.current
                })), [p, N, i, S, U, j]);
                return (0,
                y.jsx)(mt.Provider, {
                    value: W,
                    children: t
                })
            }
              , vt = n(94595)
              , ft = n(96450)
              , gt = 2e3
              , kt = 500;
            function jt(e) {
                return (Math.abs(e) < 1e-4 ? ft.yx.ceilTruncate : ft.yx.floorTruncate)(e, 4)
            }
            const bt = "GuessResult_container__ECdpL"
              , wt = "GuessResult_title__fzYxg"
              , Ct = "GuessResult_multiplier__yRHWm"
              , yt = "GuessResult_description__R2fup"
              , Nt = "GuessResult_detailsIcon__ZE7Ry"
              , Ot = "GuessResult_changeRateContainer__a5-N7"
              , Pt = "GuessResult_label__+b5Nz"
              , Zt = "GuessResult_changeRate__yhVz3"
              , Tt = "GuessResult_up__5vYDR"
              , Et = "GuessResult_down__fa-oP"
              , St = "GuessResult_priceChange__xr6e8"
              , Rt = "GuessResult_price__Vk+bY";
            function Lt(e) {
                return (0,
                vt.xG)((0,
                vt.uf)(ft.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var It = e=>{
                var t = e.className
                  , n = ht()
                  , a = n.result
                  , s = n.multiplier
                  , i = n.changeRate
                  , o = n.prevPrice
                  , c = n.currentPrice
                  , l = (0,
                r.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , p = d[0]
                  , m = d[1];
                return (0,
                r.useEffect)((()=>{
                    var e, t;
                    if (null !== a) {
                        var n, r, s, i;
                        if (null !== (n = window) && void 0 !== n && null !== (r = n.Telegram) && void 0 !== r && r.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, a ? "success" : "error");
                        e = setTimeout((()=>{
                            m(!0),
                            t = setTimeout((()=>{
                                m(!1)
                            }
                            ), gt)
                        }
                        ), kt)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [a]),
                (0,
                y.jsx)(y.Fragment, {
                    children: p && (0,
                    y.jsxs)("div", {
                        className: _()(t, bt),
                        children: [(0,
                        y.jsx)("p", {
                            className: Ct,
                            children: a ? (0,
                            y.jsxs)("span", {
                                className: Nt,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            y.jsx)("span", {
                                className: Nt,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        y.jsx)("h2", {
                            className: wt,
                            children: (0,
                            T.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        y.jsxs)("div", {
                            className: yt,
                            children: [null !== i && (0,
                            y.jsxs)("p", {
                                className: Ot,
                                children: [(0,
                                y.jsx)("span", {
                                    className: Pt,
                                    children: (0,
                                    T.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                y.jsx)("span", {
                                    className: _()(Zt, {
                                        [Tt]: i > 0,
                                        [Et]: i < 0
                                    }),
                                    children: (0,
                                    vt.uf)(jt(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            y.jsx)("p", {
                                className: St,
                                children: (0,
                                T.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    y.jsx)("span", {
                                        className: Rt,
                                        children: Lt(o)
                                    }),
                                    currentPrice: (0,
                                    y.jsx)("span", {
                                        className: Rt,
                                        children: Lt(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var Bt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , At = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , Mt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , Ft = "/help/okx-racer-terms-and-conditions"
              , Ut = n(76983);
            const Wt = "PrimaryButton_button__SJFHA"
              , Dt = "PrimaryButton_buttonText__19AJ7";
            var Vt = e=>{
                var t = e.onClick
                  , n = e.text
                  , r = e.className
                  , a = e.disabled
                  , s = void 0 !== a && a;
                return (0,
                y.jsx)(Ut.default, {
                    category: Ut.default.CATEGORY.fill,
                    type: Ut.default.TYPE.primary,
                    size: Ut.default.SIZE.lg,
                    className: _()(Wt, r),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    y.jsx)("div", {
                        className: Dt,
                        children: n
                    })
                })
            }
            ;
            const Gt = "AutoPilot_title__NJa0C"
              , Ht = "AutoPilot_button__Sg42v";
            var Kt = ()=>{
                var e = Je()
                  , t = e.isShowAutopilotGainedPoint
                  , n = e.autopilotPoints
                  , r = e.hideAutopilotSheet;
                return (0,
                y.jsxs)(re, {
                    visible: t,
                    onClose: r,
                    children: [(0,
                    y.jsx)("div", {
                        className: Gt,
                        children: (0,
                        T.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: (0,
                            vt.uf)(n)
                        })
                    }), (0,
                    y.jsx)(Vt, {
                        className: Ht,
                        onClick: r,
                        text: (0,
                        T.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , Yt = n(59896);
            const zt = "BackgroundVideo_container__J5sO2"
              , Xt = "BackgroundVideo_muteButton__04Huj"
              , Jt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , qt = "BackgroundVideo_staticImage__EpRTb"
              , Qt = "BackgroundVideo_hide__ZXYN9";
            var $t, en, tn, nn, rn, an, sn = "backgroundVideoSoundOn", on = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", cn = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], ln = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], un = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(on)
            }, dn = ()=>{
                var e = ht().isPending
                  , t = (0,
                r.useRef)(null)
                  , n = (0,
                r.useRef)(null)
                  , a = (0,
                r.useState)(!1)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , c = s[1]
                  , l = (0,
                r.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , p = d[0]
                  , m = d[1]
                  , h = (0,
                r.useState)(!1)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = lt()
                  , k = (0,
                r.useState)((()=>{
                    var e = g.get(sn);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(k, 2)
                  , b = j[0]
                  , C = j[1];
                (0,
                r.useEffect)((()=>{
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
                var N = !i && !p
                  , O = i && v && p
                  , P = i && (!v || !p);
                return (0,
                y.jsxs)("div", {
                    className: zt,
                    children: [(0,
                    y.jsx)(Ut.default, {
                        category: Ut.default.CATEGORY.fill,
                        type: Ut.default.TYPE.quaternary,
                        size: Ut.default.SIZE.md,
                        className: Xt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(g.set(sn, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        y.jsx)(E.Z, {
                            iconName: b ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Jt
                        })
                    }), (0,
                    y.jsx)(Yt.Z, {
                        className: _()(qt, {
                            [Qt]: !N
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(on)
                    }), (0,
                    y.jsx)("video", (0,
                    w.Z)((0,
                    w.Z)({}, un), {}, {
                        className: _()({
                            [Qt]: !O
                        }),
                        ref: n,
                        loop: !0,
                        muted: !0,
                        children: cn.map((e=>(0,
                        y.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    y.jsx)("video", (0,
                    w.Z)((0,
                    w.Z)({}, un), {}, {
                        className: _()({
                            [Qt]: !P
                        }),
                        ref: t,
                        muted: b,
                        children: ln.map((e=>(0,
                        y.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , _n = ["title", "titleId"];
            function pn() {
                return pn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                pn.apply(this, arguments)
            }
            function mn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function hn(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = mn(e, _n);
                return r.createElement("svg", pn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, $t || ($t = r.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), en || (en = r.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), tn || (tn = r.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, r.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), nn || (nn = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), rn || (rn = r.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), an || (an = r.createElement("defs", null, r.createElement("filter", {
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
            var xn = r.forwardRef(hn);
            n.p;
            var vn, fn, gn, kn, jn, bn, wn = ["title", "titleId"];
            function Cn() {
                return Cn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Cn.apply(this, arguments)
            }
            function yn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Nn(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = yn(e, wn);
                return r.createElement("svg", Cn({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, vn || (vn = r.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), fn || (fn = r.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), gn || (gn = r.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, r.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), kn || (kn = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), jn || (jn = r.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), bn || (bn = r.createElement("defs", null, r.createElement("filter", {
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
            var On = r.forwardRef(Nn);
            n.p;
            const Pn = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var Zn, Tn = e=>{
                var t = e.className
                  , n = ht()
                  , a = n.onButtonClick
                  , s = n.isPending
                  , i = n.predict
                  , o = Je().numChances
                  , c = (0,
                r.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , p = l[1];
                (0,
                r.useEffect)((()=>{
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
                    var t, n, r;
                    s || d || (p(e === _t.UP ? _t.DOWN : _t.UP),
                    null !== (t = window) && void 0 !== t && null !== (n = t.Telegram) && void 0 !== n && null !== (r = n.WebApp) && void 0 !== r && r.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , h = o <= 0;
                return (0,
                y.jsxs)("div", {
                    className: t,
                    children: [(0,
                    y.jsx)("p", {
                        className: _()(Pn.instructions, s && Pn.hide),
                        children: (0,
                        T.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    y.jsxs)("div", {
                        className: Pn.btnContainer,
                        children: [(0,
                        y.jsxs)("button", {
                            disabled: h || d === _t.UP,
                            onClick: ()=>m(_t.UP),
                            type: "button",
                            className: _()(Pn.btn, Pn.upBtn, {
                                [Pn.pressed]: i === _t.UP
                            }),
                            children: [(0,
                            y.jsx)(On, {
                                className: _()(Pn.btnGraphic, Pn.upBtnGraphic)
                            }), (0,
                            y.jsxs)("span", {
                                className: Pn.btnText,
                                children: [(0,
                                T.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                y.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: Pn.arrow
                                })]
                            })]
                        }), (0,
                        y.jsxs)("button", {
                            disabled: h || d === _t.DOWN,
                            onClick: ()=>m(_t.DOWN),
                            type: "button",
                            className: _()(Pn.btn, Pn.downBtn, {
                                [Pn.pressed]: i === _t.DOWN
                            }),
                            children: [(0,
                            y.jsx)(xn, {
                                className: _()(Pn.btnGraphic, Pn.downBtnGraphic)
                            }), (0,
                            y.jsxs)("span", {
                                className: Pn.btnText,
                                children: [(0,
                                T.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                y.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: Pn.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , En = ["title", "titleId"];
            function Sn() {
                return Sn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Sn.apply(this, arguments)
            }
            function Rn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Ln(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = Rn(e, En);
                return r.createElement("svg", Sn({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, Zn || (Zn = r.createElement("g", {
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
            var In = r.forwardRef(Ln);
            n.p;
            var Bn = n(48275);
            const An = "FuelIndicator_fuelContainer__QIskL"
              , Mn = "FuelIndicator_toTasksIcon__Y7exC"
              , Fn = "FuelIndicator_line__tWBfm"
              , Un = "FuelIndicator_description__EaUsa"
              , Wn = "FuelIndicator_fuelIcon__I38Ss"
              , Dn = "FuelIndicator_maxChances__OMSHl"
              , Vn = "FuelIndicator_earnPtsMsg__PjtcT";
            var Gn, Hn, Kn = e=>{
                var t = e.className
                  , n = Je()
                  , r = n.numChances
                  , a = n.numChancesTotal;
                return (0,
                y.jsxs)("div", {
                    className: _()(t, An),
                    children: [(0,
                    y.jsx)("span", {
                        className: Wn,
                        children: "\u26fd\ufe0f"
                    }), r > 0 ? (0,
                    y.jsx)(Bn.Z.Line, {
                        className: Fn,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: r / a * 100
                    }, a) : (0,
                    y.jsx)(J, {
                        to: U,
                        className: Vn,
                        children: (0,
                        T.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    y.jsxs)("p", {
                        className: Un,
                        children: [r, "\xa0", void 0 !== a && 0 !== a && (0,
                        y.jsxs)(y.Fragment, {
                            children: ["/\xa0", (0,
                            y.jsx)("span", {
                                className: Dn,
                                children: a
                            })]
                        })]
                    }), (0,
                    y.jsx)(J, {
                        to: U,
                        children: (0,
                        y.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: Mn
                        })
                    })]
                })
            }
            , Yn = ["title", "titleId"];
            function zn() {
                return zn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                zn.apply(this, arguments)
            }
            function Xn(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Jn(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = Xn(e, Yn);
                return r.createElement("svg", zn({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, Gn || (Gn = r.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Hn || (Hn = r.createElement("defs", null, r.createElement("linearGradient", {
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
            var qn = r.forwardRef(Jn);
            n.p;
            const Qn = "RefuelTimer_container__wtALO"
              , $n = "RefuelTimer_description__sD+HM"
              , er = "RefuelTimer_timer__LL1+c";
            var tr = e=>{
                var t = e.className
                  , n = Je().countdownDisplay;
                return (0,
                y.jsxs)("div", {
                    className: _()(t, Qn),
                    children: [(0,
                    y.jsx)(qn, {}), (0,
                    y.jsx)("p", {
                        className: $n,
                        children: (0,
                        T.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            y.jsx)("span", {
                                className: er,
                                children: n
                            })
                        })
                    })]
                })
            }
            ;
            const nr = "CoinPrice_raceTrack__NZO2t"
              , rr = "CoinPrice_run__f0UIF"
              , ar = "CoinPrice_coinPriceContainer__YbeUE"
              , sr = "CoinPrice_content__a-5Jl"
              , ir = "CoinPrice_fuelIndicator__p+f1I"
              , or = "CoinPrice_refuelTimer__tbWMw"
              , cr = "CoinPrice_hide__bHhxJ"
              , lr = "CoinPrice_label__yTNy0"
              , ur = "CoinPrice_value__ZjRZz"
              , dr = "CoinPrice_slotMachine__hUQKt"
              , _r = "SlotMachine_row__a4TO0"
              , pr = "SlotMachine_animate__-G4TR"
              , mr = "SlotMachine_column__aR0VE"
              , hr = "SlotMachine_arrows__m1dhv"
              , xr = "SlotMachine_columnContainer__a76pd"
              , vr = "SlotMachine_background__b9TMg"
              , fr = "SlotMachine_slot__jwCvC"
              , gr = "SlotMachine_staticColumn__O5zfB"
              , kr = "SlotMachine_sm__ZRCig"
              , jr = "SlotMachine_arrow__qOYmf"
              , br = "SlotMachine_wentUp__z48TO"
              , wr = "SlotMachine_down__aYC8C"
              , Cr = "SlotMachine_stable__CDMLP"
              , yr = "SlotMachine_wentDown__1fYUS"
              , Nr = "SlotMachine_up__IuiYV";
            var Or = e=>{
                var t = e.animate
                  , n = e.result
                  , r = void 0 === n ? 0 : n
                  , a = e.columnStyle;
                return (0,
                y.jsxs)("div", {
                    className: xr,
                    children: [(0,
                    y.jsx)("div", {
                        className: vr
                    }), (0,
                    y.jsxs)("div", {
                        className: mr,
                        style: a,
                        children: [(0,
                        y.jsx)("p", {
                            className: fr,
                            children: r
                        }), t && (0,
                        y.jsxs)(y.Fragment, {
                            children: [(0,
                            y.jsx)("p", {
                                className: fr,
                                children: "1"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "2"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "3"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "4"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "5"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "6"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "7"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "8"
                            }), (0,
                            y.jsx)("p", {
                                className: fr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , Pr = ()=>{
                var e = ht()
                  , t = e.changeRate
                  , n = e.isPending
                  , a = (0,
                r.useState)([])
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , c = (0,
                r.useState)(null)
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , p = l[1]
                  , m = (0,
                r.useState)(!1)
                  , h = (0,
                u.Z)(m, 2)
                  , x = h[0]
                  , v = h[1];
                return (0,
                r.useEffect)((()=>{
                    n && v(!0)
                }
                ), [n]),
                (0,
                r.useEffect)((()=>{
                    var e;
                    null !== t ? (p(null === (e = t) ? null : e > 0 ? _t.UP : 0 === e ? _t.NONE : _t.DOWN),
                    o(String(Math.abs(Number(jt(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    v(!1)) : p(null)
                }
                ), [t]),
                (0,
                y.jsxs)("div", {
                    className: _()(_r, x && pr),
                    children: [(0,
                    y.jsx)("div", {
                        className: xr,
                        children: (0,
                        y.jsxs)("div", {
                            className: _()(hr, {
                                [br]: d === _t.UP,
                                [yr]: d === _t.DOWN,
                                [Cr]: d === _t.NONE
                            }),
                            children: [(0,
                            y.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: _()(jr, Nr)
                            }), (0,
                            y.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: _()(jr, Cr)
                            }), (0,
                            y.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: _()(jr, wr)
                            })]
                        })
                    }), (0,
                    y.jsx)(Or, {
                        animate: x,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    y.jsx)("span", {
                        className: gr,
                        children: "."
                    }), (0,
                    y.jsx)(Or, {
                        animate: x,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    y.jsx)(Or, {
                        animate: x,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    y.jsx)(Or, {
                        animate: x,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    y.jsx)(Or, {
                        animate: x,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    y.jsx)("span", {
                        className: _()(gr, kr),
                        children: "%"
                    })]
                })
            }
              , Zr = ()=>{
                var e = st()
                  , t = ht()
                  , n = t.isPending
                  , a = t.changeRate
                  , s = Je().countdownDisplay
                  , i = (0,
                r.useState)(!1)
                  , o = (0,
                u.Z)(i, 2)
                  , c = o[0]
                  , l = o[1];
                (0,
                r.useEffect)((()=>{
                    n && l(!0)
                }
                ), [n]),
                (0,
                r.useEffect)((()=>{
                    var e, t = ()=>{
                        e && clearTimeout(e)
                    }
                    ;
                    return n || (null === a ? l(!1) : e = setTimeout((()=>{
                        l(!1)
                    }
                    ), kt)),
                    t
                }
                ), [a, n]);
                var d = e ? "$".concat((0,
                vt.uf)(ft.yx.truncate(e, 1, !0))) : "--"
                  , p = s && !n;
                return (0,
                y.jsxs)("div", {
                    className: ar,
                    children: [(0,
                    y.jsx)(In, {
                        className: _()(nr, n && rr)
                    }), (0,
                    y.jsxs)("div", {
                        className: _()(sr, c && cr),
                        children: [(0,
                        y.jsx)("p", {
                            className: lr,
                            children: (0,
                            T.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        y.jsx)("p", {
                            className: ur,
                            children: d
                        })]
                    }), (0,
                    y.jsxs)("div", {
                        className: _()(sr, !c && cr),
                        children: [(0,
                        y.jsxs)("p", {
                            className: lr,
                            children: [(0,
                            T.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        y.jsx)("div", {
                            className: dr,
                            children: (0,
                            y.jsx)(Pr, {})
                        })]
                    }), (0,
                    y.jsx)(Kn, {
                        className: ir
                    }), (0,
                    y.jsx)("div", {
                        className: _()(or, !p && cr),
                        children: (0,
                        y.jsx)(tr, {})
                    })]
                })
            }
            ;
            const Tr = "LandingPage_container__pU2cC"
              , Er = "LandingPage_resultOverlay__WSYZb"
              , Sr = "LandingPage_disclaimer__pVRHC"
              , Rr = "LandingPage_recordsBtnContainer__Anr4Y"
              , Lr = "LandingPage_backgroundVideo__flTkH"
              , Ir = "LandingPage_content__D0ZLW"
              , Br = "LandingPage_points__Ruq4j"
              , Ar = "LandingPage_coinPrice__nJ0nj"
              , Mr = "LandingPage_btnContainer__IEll8"
              , Fr = "LandingPage_termsAndConditions__MdClU";
            var Ur = n(22387);
            const Wr = "UserPointCounter_pointCounter__-QAj8"
              , Dr = "UserPointCounter_hide__o4qTQ"
              , Vr = "UserPointCounter_points__d3HeG"
              , Gr = "UserPointCounter_title__B-gN-"
              , Hr = "UserPointCounter_countdown__Z7xGo"
              , Kr = "UserPointCounter_value__2a23E";
            var Yr = ()=>{
                var e = Je().points
                  , t = (0,
                Ur.Z)(e)
                  , n = ht()
                  , a = n.isPending
                  , s = n.countdown
                  , i = (0,
                r.useRef)(null)
                  , o = (0,
                r.useState)(!1)
                  , c = (0,
                u.Z)(o, 2)
                  , l = c[0]
                  , d = c[1];
                (0,
                r.useEffect)((()=>{
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
                r.useCallback)(((e,t,n)=>{
                    e <= t && (n((0,
                    vt.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var r = function(e, t) {
                            var n = t - e;
                            return Math.max(1, Math.floor(n / 10))
                        }(e, t);
                        p(e + r, t, n)
                    }
                    )))
                }
                ), []);
                return (0,
                r.useEffect)((()=>{
                    var n;
                    if (t === e)
                        return ()=>{}
                        ;
                    function r(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (n = i.current) || void 0 === n ? void 0 : n.innerText) || !t)
                        return p(0, e, r),
                        ()=>{}
                        ;
                    var a = setTimeout((()=>{
                        p(t || 0, e, r)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(a)
                    }
                }
                ), [p, e, t]),
                (0,
                y.jsxs)("div", {
                    className: Wr,
                    children: [(0,
                    y.jsxs)("p", {
                        className: _()(Gr, l && Dr),
                        children: ["\ud83c\udfc6 ", (0,
                        T.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    y.jsx)("p", {
                        ref: i,
                        className: _()(Vr, l && Dr),
                        children: "0"
                    }), (0,
                    y.jsxs)("p", {
                        className: _()(Hr, !l && Dr),
                        children: ["00:0", (0,
                        y.jsx)("span", {
                            className: Kr,
                            children: s
                        })]
                    })]
                })
            }
            ;
            const zr = "ViewRecordsButton_button__MRo78"
              , Xr = "ViewRecordsButton_btnIcon__prKlS"
              , Jr = "ViewRecordsButton_title__obA3r"
              , qr = "ViewRecordsButton_container__N3Rrb"
              , Qr = "ViewRecordsButton_recordContainer__ruZVu"
              , $r = "ViewRecordsButton_recordField__dACwq"
              , ea = "ViewRecordsButton_label__xt3Hw"
              , ta = "ViewRecordsButton_value__lTHA5"
              , na = "ViewRecordsButton_trendIcon__3RV6P"
              , ra = "ViewRecordsButton_up__EC1B6"
              , aa = "ViewRecordsButton_down__4PWTz"
              , sa = "ViewRecordsButton_timestamp__P0JEp"
              , ia = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , oa = "ViewRecordsButton_description__F22UB";
            var ca = e=>{
                var t = e.label
                  , n = e.value;
                return (0,
                y.jsxs)("div", {
                    className: $r,
                    children: [(0,
                    y.jsx)("p", {
                        className: ea,
                        children: t
                    }), (0,
                    y.jsx)("div", {
                        className: ta,
                        children: n
                    })]
                })
            }
              , la = ()=>(0,
            y.jsxs)("button", {
                className: zr,
                type: "button",
                onClick: ()=>{
                    var e = lt().get(ut) || []
                      , t = (0,
                    y.jsx)(y.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , n = "ok_game_okxracer_moon"
                              , r = ra
                              , a = "okx-growth-trending-up";
                            return t || (n = "ok_game_okxracer_doom",
                            r = aa,
                            a = "okx-growth-trending-down"),
                            (0,
                            y.jsxs)("div", {
                                className: Qr,
                                children: [(0,
                                y.jsx)(ca, {
                                    label: (0,
                                    T.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    y.jsxs)(y.Fragment, {
                                        children: [(0,
                                        T.O4)(n), (0,
                                        y.jsx)(E.Z, {
                                            className: _()(na, r),
                                            iconName: a
                                        })]
                                    })
                                }), (0,
                                y.jsx)(ca, {
                                    label: "Result",
                                    value: (0,
                                    T.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                y.jsx)(ca, {
                                    label: (0,
                                    T.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                y.jsx)("p", {
                                    className: sa,
                                    children: (0,
                                    vt.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        y.jsxs)("div", {
                            className: ia,
                            children: [(0,
                            y.jsx)("p", {
                                className: Jr,
                                children: (0,
                                T.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            y.jsx)("p", {
                                className: oa,
                                children: (0,
                                T.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = ee.Z.show((0,
                        w.Z)((0,
                        w.Z)({}, ne), {}, {
                            topContent: e.title ? void 0 : (0,
                            y.jsx)("div", {
                                className: te.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        y.jsx)("span", {
                            className: Jr,
                            children: (0,
                            T.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: qr,
                        children: t
                    })
                }
                ,
                children: [(0,
                T.O4)("ok_game_okxracer_my_records"), (0,
                y.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Xr
                })]
            })
              , ua = ()=>{
                var e = B().uid;
                return (0,
                r.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        R.act({
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
                y.jsxs)("div", {
                    className: Tr,
                    children: [(0,
                    y.jsx)("div", {
                        className: Rr,
                        children: (0,
                        y.jsx)(la, {})
                    }), (0,
                    y.jsx)("div", {
                        className: Lr,
                        children: (0,
                        y.jsx)(dn, {})
                    }), (0,
                    y.jsxs)("div", {
                        className: Ir,
                        children: [(0,
                        y.jsx)("div", {
                            className: Br,
                            children: (0,
                            y.jsx)(Yr, {})
                        }), (0,
                        y.jsx)("div", {
                            className: Ar,
                            children: (0,
                            y.jsx)(Zr, {})
                        }), (0,
                        y.jsx)(Tn, {
                            className: Mr
                        })]
                    }), (0,
                    y.jsx)("button", {
                        className: Fr,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Ft)
                        }
                        ,
                        type: "button",
                        children: (0,
                        T.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    y.jsx)("p", {
                        className: Sr,
                        children: (0,
                        T.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    y.jsx)(It, {
                        className: Er
                    }), (0,
                    y.jsx)(Kt, {}), (0,
                    y.jsx)($e, {})]
                })
            }
              , da = ()=>(0,
            y.jsx)(xt, {
                children: (0,
                y.jsx)(ua, {})
            })
              , _a = n(24084)
              , pa = n(58338);
            const ma = "PageTitle_title__IQ7TT";
            var ha = e=>{
                var t = e.html;
                return (0,
                y.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        pa.dU)(t)
                    },
                    className: ma
                })
            }
            ;
            const xa = "LeaderBoard_container__0DJSO"
              , va = "LeaderBoard_desc__MFxC+"
              , fa = "LeaderBoard_inviteList__mV9a7"
              , ga = "LeaderBoard_tabActiveClassName__7Xv4B"
              , ka = "LeaderBoard_tabsContent__KCGtW"
              , ja = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var ba = e=>{
                var t = e.className;
                return (0,
                y.jsx)("div", {
                    className: _()(ja, t)
                })
            }
            ;
            const wa = "InviteButton_invite-btn__aAMio"
              , Ca = "InviteButton_btn-a__At-wO"
              , ya = "InviteButton_btn-container__sYDy5"
              , Na = "InviteButton_copyButton__znucI"
              , Oa = "InviteButton_copyIcon__QZgE9";
            var Pa = e=>{
                var t = e.text
                  , n = void 0 === t ? (0,
                T.O4)("ok_game_okxracer_invite_friends") : t
                  , r = e.className
                  , a = B().uid
                  , s = (e=>{
                    var t = new ae.Z
                      , n = (0,
                    T.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , r = "https://t.me/".concat(Bt.BOT_NAME, "/").concat(Bt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: r,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(r), "&text=").concat(n)
                    }
                }
                )(Je().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                y.jsxs)("div", {
                    className: _()(r, ya),
                    children: [(0,
                    y.jsx)("a", {
                        className: Ca,
                        href: i,
                        children: (0,
                        y.jsx)(Vt, {
                            onClick: ()=>{
                                !function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                    R.act({
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
                            className: wa,
                            text: n
                        })
                    }), (0,
                    y.jsx)(Ut.default, {
                        strictCircle: !0,
                        category: Ut.default.CATEGORY.fill,
                        type: Ut.default.TYPE.primary,
                        size: Ut.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(o),
                                oe(!0, (0,
                                T.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                oe(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: Na,
                        children: (0,
                        y.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: Oa
                        })
                    })]
                })
            }
            ;
            const Za = "RankList_listItem__qJvXJ"
              , Ta = "RankList_name__sxTWa"
              , Ea = "RankList_mask__ldBi8"
              , Sa = "RankList_hightLightRow__xYkeg"
              , Ra = "RankList_listHeader__KVGnw"
              , La = "RankList_rank__k2m5R"
              , Ia = "RankList_icon__1-SRV"
              , Ba = "RankList_point__D5mVw"
              , Aa = "RankList_pointIcon__k80Wy"
              , Ma = "RankList_InviteButton__D6ute"
              , Fa = "RankList_noFirendsNote__Ckkil"
              , Ua = "RankList_under__MJ5We"
              , Wa = "RankList_rankItemPlaceholder__z-upW"
              , Da = "RankList_rank-name__YEqnc"
              , Va = "RankList_rank-score__gtI+m";
            var Ga = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Ha = 1
              , Ka = 2
              , Ya = e=>{
                var t = e.total;
                return (0,
                y.jsxs)("div", {
                    className: Ra,
                    children: [(0,
                    y.jsx)("span", {
                        children: (0,
                        T.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            vt.uf)(t)
                        })
                    }), (0,
                    y.jsx)("span", {
                        children: (0,
                        T.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , za = ()=>(0,
            y.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                y.jsxs)("div", {
                    className: Wa,
                    children: [(0,
                    y.jsx)(ba, {
                        className: Da
                    }), (0,
                    y.jsx)(ba, {
                        className: Va
                    })]
                }, t)))
            })
              , Xa = e=>{
                var t = e.item
                  , n = e.isHighlight;
                return (0,
                y.jsxs)("div", {
                    className: _()(Za, n && Sa),
                    children: [(0,
                    y.jsx)("div", {
                        className: Ea
                    }), t.rank <= 3 ? (0,
                    y.jsx)("span", {
                        className: _()(La, Ia),
                        children: Ga[t.rank]
                    }) : (0,
                    y.jsx)("span", {
                        className: La,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    y.jsx)("div", {
                        className: Ta,
                        children: t.extUserName
                    }), (0,
                    y.jsxs)("div", {
                        className: Ba,
                        children: [(0,
                        y.jsx)("span", {
                            className: Aa,
                            children: Ga[4]
                        }), (0,
                        T.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            vt.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Ja = e=>{
                var t = e.pageType
                  , n = void 0 === t ? Ha : t
                  , a = (0,
                r.useState)(!0)
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                r.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                r.useState)(0)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = (0,
                r.useState)()
                  , k = (0,
                u.Z)(g, 2)
                  , j = k[0]
                  , b = k[1]
                  , w = (0,
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
                                    n !== Ha) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Be(r);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Ae(r);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (m(a.rows),
                                    f(a.total),
                                    b(a.userRanking)),
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
                  , C = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                r.useEffect)((()=>{
                    w(1)
                }
                ), [w]),
                (0,
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsx)(Ya, {
                        total: v
                    }), i ? (0,
                    y.jsx)(za, {}) : (0,
                    y.jsxs)(y.Fragment, {
                        children: [C && (0,
                        y.jsx)(Xa, {
                            item: j,
                            isHighlight: !0
                        }), p.map(((e,t)=>(0,
                        y.jsx)(Xa, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    y.jsx)("div", {
                        className: Ua
                    }), n === Ha && (0,
                    y.jsxs)(y.Fragment, {
                        children: [1 === p.length && (0,
                        y.jsx)("div", {
                            className: Fa,
                            children: (0,
                            T.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === p.length && (0,
                        y.jsx)(Pa, {
                            className: Ma,
                            text: (0,
                            T.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , qa = ()=>(0,
            y.jsxs)("div", {
                className: xa,
                children: [(0,
                y.jsx)(ha, {
                    html: (0,
                    T.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        T.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                y.jsx)("div", {
                    className: va,
                    children: (0,
                    T.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                y.jsxs)(_a.Z, {
                    activeClassName: ga,
                    noPadding: !0,
                    size: _a.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    y.jsx)(_a.Z.TabPane, {
                        tab: (0,
                        T.O4)("ok_game_okxracer_friends2"),
                        id: Ha,
                        className: ka,
                        children: (0,
                        y.jsx)("div", {
                            className: fa,
                            children: (0,
                            y.jsx)(Ja, {
                                pageType: Ha
                            })
                        })
                    }), (0,
                    y.jsx)(_a.Z.TabPane, {
                        className: ka,
                        tab: (0,
                        T.O4)("ok_game_okxracer_global"),
                        id: Ka,
                        children: (0,
                        y.jsx)("div", {
                            className: fa,
                            children: (0,
                            y.jsx)(Ja, {
                                pageType: Ka
                            })
                        })
                    })]
                })]
            });
            const Qa = "QrCode_container__r4Fu7"
              , $a = "QrCode_qrCode__16PWa"
              , es = "QrCode_title__+cibb"
              , ts = "QrCode_message__eaOzW";
            var ns = ()=>(0,
            y.jsxs)("div", {
                className: Qa,
                children: [(0,
                y.jsx)(Yt.Z, {
                    className: $a,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                y.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        pa.dU)((0,
                        T.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: es
                }), (0,
                y.jsx)("p", {
                    className: ts,
                    children: (0,
                    T.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , rs = n(90534);
            const as = "PullupList_loading__+51Dh"
              , ss = "PullupList_listLoadItem__XcvkH"
              , is = "PullupList_listLeft__4eGh6"
              , os = "PullupList_listRight__w7Ely"
              , cs = "PullupList_listLoading__whJeg";
            var ls = ()=>(0,
            y.jsxs)("div", {
                className: _()(ss),
                children: [(0,
                y.jsx)(ba, {
                    className: is
                }), (0,
                y.jsx)(ba, {
                    className: os
                })]
            })
              , us = ()=>(0,
            y.jsx)("div", {
                className: cs,
                children: Array(3).fill(null).map(((e,t)=>(0,
                y.jsx)(ls, {}, t)))
            })
              , ds = e=>{
                var t = e.loadData
                  , n = e.children
                  , a = (0,
                r.useState)([])
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                r.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                r.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , x = (0,
                r.useRef)(null)
                  , v = (0,
                r.useState)(!1)
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
                                    return m(!0),
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
                  , b = (0,
                rs.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , w = e=>{
                    e[0].isIntersecting && !p && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                r.useEffect)((()=>{
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
                r.useEffect)((()=>{
                    b()
                }
                ), [g]),
                (0,
                y.jsxs)(y.Fragment, {
                    children: [i.map(((e,t)=>n(e, t))), (0,
                    y.jsx)("div", {
                        className: as,
                        ref: x,
                        children: p && (0,
                        y.jsx)(us, {})
                    })]
                })
            }
            ;
            const _s = "InviteList_listItem__q4jhG"
              , ps = "InviteList_name__LLQgt"
              , ms = "InviteList_point__kXtCn"
              , hs = "InviteList_earnedPrice__4vAfw"
              , xs = "InviteList_pointNumber__v4P1H";
            var vs = ()=>{
                var e = (0,
                r.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , a = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, n) {
                        var r, s, i;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = !1,
                                    1 === t && (r = !0),
                                    s = {
                                        pageNo: t
                                    },
                                    n && n >= 0 && (s.total = n),
                                    e.next = 6,
                                    Ie(s, r);
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
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsx)("div", {
                        className: hs,
                        children: (0,
                        T.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            y.jsx)("span", {
                                className: xs,
                                children: (0,
                                T.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    vt.uf)(n)
                                })
                            })
                        })
                    }), (0,
                    y.jsx)(ds, {
                        loadData: s,
                        children: (e,t)=>(0,
                        y.jsxs)("div", {
                            className: _s,
                            children: [(0,
                            y.jsx)("div", {
                                className: ps,
                                children: e.extInviteeName
                            }), (0,
                            y.jsx)("div", {
                                className: ms,
                                children: (0,
                                T.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    vt.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const fs = "ReferralsPage_container__V48m1"
              , gs = "ReferralsPage_inviteDetail__L1MhM"
              , ks = "ReferralsPage_detailItem__ujOp+"
              , js = "ReferralsPage_dot__zKW7L"
              , bs = "ReferralsPage_detailTitle__OE657"
              , ws = "ReferralsPage_detailInfo__YC+Y9"
              , Cs = "ReferralsPage_inviteList__Jksx8";
            var ys, Ns, Os, Ps, Zs, Ts, Es, Ss, Rs = ()=>{
                var e = B().uid
                  , t = [{
                    title: (0,
                    T.O4)("ok_game_okxracer_refer_your_friends"),
                    detailInfo: (0,
                    T.O4)("ok_game_okxracer_refer_rewards")
                }, {
                    title: (0,
                    T.O4)("ok_game_okxracer_get_bonus"),
                    detailInfo: (0,
                    T.O4)("ok_game_okxracer_refer_hint")
                }];
                return (0,
                r.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        R.act({
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
                y.jsxs)("div", {
                    className: fs,
                    children: [(0,
                    y.jsx)(ha, {
                        html: "".concat((0,
                        T.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        T.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    y.jsx)("div", {
                        className: gs,
                        children: t.map((e=>(0,
                        y.jsxs)("div", {
                            className: ks,
                            children: [(0,
                            y.jsx)("div", {
                                className: js
                            }), (0,
                            y.jsx)("div", {
                                className: bs,
                                children: e.title
                            }), (0,
                            y.jsx)("div", {
                                className: ws,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    y.jsx)("div", {
                        className: Cs,
                        children: (0,
                        y.jsx)(vs, {})
                    }), (0,
                    y.jsx)(Pa, {})]
                })
            }
            , Ls = ["title", "titleId"];
            function Is() {
                return Is = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Is.apply(this, arguments)
            }
            function Bs(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function As(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = Bs(e, Ls);
                return r.createElement("svg", Is({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, ys || (ys = r.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Ns || (Ns = r.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Os || (Os = r.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), Ps || (Ps = r.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), Zs || (Zs = r.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Ts || (Ts = r.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Es || (Es = r.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), Ss || (Ss = r.createElement("defs", null, r.createElement("filter", {
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
            var Ms = r.forwardRef(As);
            n.p;
            const Fs = "index_container__DxcAz"
              , Us = "index_logo__h1T0A"
              , Ws = "index_tlt__dqJHn"
              , Ds = "index_subtlt__m3p5l";
            var Vs = ()=>(0,
            y.jsxs)("div", {
                className: Fs,
                children: [(0,
                y.jsx)(Ms, {
                    className: Us
                }), (0,
                y.jsx)("div", {
                    className: Ws,
                    children: (0,
                    T.O4)("ok_game_okxracer_congratulations")
                }), (0,
                y.jsx)("div", {
                    className: Ds,
                    children: (0,
                    T.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Gs = a().memo(Vs);
            var Hs, Ks = ["title", "titleId"];
            function Ys() {
                return Ys = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Ys.apply(this, arguments)
            }
            function zs(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Xs(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = zs(e, Ks);
                return r.createElement("svg", Ys({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, Hs || (Hs = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Js = r.forwardRef(Xs);
            n.p;
            var qs, Qs = ["title", "titleId"];
            function $s() {
                return $s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                $s.apply(this, arguments)
            }
            function ei(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function ti(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = ei(e, Qs);
                return r.createElement("svg", $s({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, qs || (qs = r.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var ni = r.forwardRef(ti);
            n.p;
            var ri, ai = ["title", "titleId"];
            function si() {
                return si = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                si.apply(this, arguments)
            }
            function ii(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function oi(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = ii(e, ai);
                return r.createElement("svg", si({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, ri || (ri = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var ci = r.forwardRef(oi);
            n.p;
            var li = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , ui = e=>{
                var t, n;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n ? void 0 : n.getItem(e)))
            }
            ;
            function di(e) {
                var t = [{
                    title: (0,
                    T.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    T.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: li.SIGNUP,
                    status: ui(li.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    T.O4)("ok_game_okxracer_surprises_install"),
                    type: li.INSTALL,
                    status: ui(li.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    T.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    T.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: li.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    T.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    T.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: li.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var _i = e=>{
                var t = (0,
                r.useState)(di(e))
                  , n = (0,
                u.Z)(t, 2)
                  , a = n[0]
                  , s = n[1]
                  , i = B().uid;
                (0,
                r.useEffect)((()=>{
                    s(di(e))
                }
                ), [e]);
                var o = (0,
                r.useCallback)((t=>{
                    var n, r, o = a.find((e=>e.type === t));
                    if (o) {
                        switch (null === (n = window) || void 0 === n || null === (r = n.Telegram) || void 0 === r || r.WebApp.openLink(o.url),
                        t) {
                        case li.SIGNUP:
                        case li.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(di(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case li.SIGNUP:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                        case li.INSTALL:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                        case li.CONNECT:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
                        case li.KYC:
                            !function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                                R.act({
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
            const pi = "index_container__ZAgXf"
              , mi = "index_container_avatar__HvLrA"
              , hi = "index_container_task__OmqjX"
              , xi = "index_task_tlt__pIkV2"
              , vi = "index_tlt_sub__2aRiA"
              , fi = "index_tlt_arrow__kdbln"
              , gi = "index_task_subtlt__mzIaE";
            var ki = e=>{
                var t = e.status
                  , n = void 0 !== t && t;
                return (0,
                y.jsx)("div", {
                    className: mi,
                    children: n ? (0,
                    y.jsx)(ci, {}) : (0,
                    y.jsx)(ni, {})
                })
            }
              , ji = e=>{
                var t = e.title
                  , n = e.subTitle
                  , r = e.type
                  , a = e.onClick
                  , s = e.status;
                return (0,
                y.jsxs)("div", {
                    className: hi,
                    onClick: ()=>{
                        a(r)
                    }
                    ,
                    children: [(0,
                    y.jsxs)("div", {
                        className: xi,
                        children: [(0,
                        y.jsx)(ki, {
                            status: s
                        }), " ", (0,
                        y.jsx)("div", {
                            className: vi,
                            children: t
                        }), (0,
                        y.jsx)(Js, {
                            className: fi
                        })]
                    }), (0,
                    y.jsx)("div", {
                        className: gi,
                        children: n
                    })]
                })
            }
            ;
            const bi = e=>{
                var t = _i(e)
                  , n = t.list
                  , r = t.handleClick;
                return (0,
                y.jsx)("div", {
                    className: pi,
                    children: n.map((e=>(0,
                    y.jsx)(ji, (0,
                    w.Z)((0,
                    w.Z)({}, e), {}, {
                        onClick: r
                    }), e.type)))
                })
            }
            ;
            var wi, Ci, yi, Ni = ["title", "titleId"];
            function Oi() {
                return Oi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Oi.apply(this, arguments)
            }
            function Pi(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        n = s[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            function Zi(e, t) {
                var n = e.title
                  , a = e.titleId
                  , s = Pi(e, Ni);
                return r.createElement("svg", Oi({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), n ? r.createElement("title", {
                    id: a
                }, n) : null, wi || (wi = r.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), Ci || (Ci = r.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), yi || (yi = r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var Ti = r.forwardRef(Zi);
            n.p;
            const Ei = "index_loader__kDy+9"
              , Si = "index_container__X8xX8"
              , Ri = "index_container_subtlt__LyYby"
              , Li = "index_container_info__c9KQP"
              , Ii = "index_info_icon__i5uhI"
              , Bi = "index_verifiedUsers__ByJWu"
              , Ai = "index_avatars__q4nFz"
              , Mi = "index_usersCount__ZOUzI"
              , Fi = "index_container_btn__rWex7"
              , Ui = "index_tncContainer__McO06"
              , Wi = "index_termsAndConditions__Gifk+";
            var Di = ()=>(0,
            y.jsx)(Gs, {})
              , Vi = e=>{
                var t = e.totalVerifiedCount;
                return (0,
                y.jsxs)("div", {
                    className: Si,
                    children: [(0,
                    y.jsx)(ha, {
                        html: (0,
                        T.O4)("ok_game_okxracer_title_verify_surprises")
                    }), (0,
                    y.jsx)("div", {
                        className: Ri,
                        children: (0,
                        T.O4)("ok_game_okxracer_text_complete_steps_eligible")
                    }), (0,
                    y.jsxs)("div", {
                        className: Bi,
                        children: [(0,
                        y.jsx)("img", {
                            className: Ai,
                            src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/248/82E299F1E77A18A1.jpeg"),
                            alt: ""
                        }), (0,
                        y.jsx)("span", {
                            className: Mi,
                            children: t > 0 ? (0,
                            vt.uf)(t) : "--"
                        }), (0,
                        T.O4)("ok_game_okxracer_text_racers_already_verified")]
                    }), (0,
                    y.jsx)(bi, (0,
                    w.Z)({}, e)), (0,
                    y.jsxs)("div", {
                        className: Li,
                        children: [(0,
                        y.jsx)(Ti, {
                            className: Ii,
                            height: 16
                        }), (0,
                        T.O4)("ok_game_okxracer_surprises_verify_desc")]
                    }), (0,
                    y.jsx)(Vt, {
                        onClick: e.onClick,
                        className: Fi,
                        text: (0,
                        T.O4)("ok_game_okxracer_surprises_verify")
                    }), (0,
                    y.jsx)("div", {
                        className: Ui,
                        children: (0,
                        y.jsx)("button", {
                            className: Wi,
                            onClick: ()=>{
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(Ft)
                            }
                            ,
                            type: "button",
                            children: (0,
                            T.O4)("ok_game_okxracer_tnc")
                        })
                    })]
                })
            }
              , Gi = ()=>{
                var e = B().uid
                  , t = (0,
                r.useState)(!0)
                  , n = (0,
                u.Z)(t, 2)
                  , a = n[0]
                  , s = n[1]
                  , i = (0,
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
                u.Z)(i, 2)
                  , d = o[0]
                  , _ = o[1]
                  , p = (0,
                r.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, n, r, a, i = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] && i[0],
                                n = i.length > 1 ? i[1] : void 0,
                                e.prev = 2,
                                r = {
                                    isRecheckBinding: t
                                },
                                e.next = 6,
                                Ve(n, r);
                            case 6:
                                a = e.sent,
                                s(!1),
                                a && _(a),
                                !t || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || oe(!1, (0,
                                T.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(2),
                                oe(!1, (0,
                                T.O4)("ok_game_okxracer_error_high_traffic"));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 12]])
                }
                ))), []);
                return (0,
                r.useEffect)((()=>{
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
                r.useEffect)((()=>{
                    !function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                        R.act({
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
                y.jsx)("div", {
                    className: Ei,
                    children: (0,
                    y.jsx)(Bn.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                y.jsx)(Di, {}) : (0,
                y.jsx)(Vi, (0,
                w.Z)((0,
                w.Z)({}, d), {}, {
                    onClick: ()=>{
                        p(!0),
                        function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).telegramid;
                            R.act({
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
            r.createContext)({
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
            r.useContext)(Hi)
              , Yi = e=>{
                var t = e.children
                  , n = (0,
                r.useState)([])
                  , a = (0,
                u.Z)(n, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                r.useState)([])
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = Je().updateGameInfoFromServer
                  , h = (0,
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
                                Promise.allSettled([Fe(!0), We(!0)]);
                            case 2:
                                "fulfilled" === (r = e.sent)[0].status && i(null !== (t = r[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === r[1].status && p(null !== (n = r[1].value.data) && void 0 !== n ? n : []);
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
                        var n;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ue({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Fe(), m()]);
                                case 5:
                                    return "fulfilled" === (n = e.sent)[0].status && i(n[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ce(e.t0);
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
                    c.Z)().mark((function e(t, n) {
                        var r, a;
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
                                    De(r);
                                case 5:
                                    return e.next = 7,
                                    Promise.allSettled([We(), m()]);
                                case 7:
                                    return "fulfilled" === (a = e.sent)[0].status && p(a[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    ce(e.t0);
                                case 15:
                                    return e.abrupt("return", !1);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 12]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                r.useEffect)((()=>{
                    h()
                }
                ), [h]),
                (0,
                y.jsx)(Hi.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: v
                    },
                    children: t
                })
            }
            ;
            const zi = "Tag_tag__tkWly";
            var Xi = e=>{
                var t = e.text
                  , n = e.className;
                return (0,
                y.jsx)("span", {
                    className: _()(zi, n),
                    children: t || (0,
                    T.O4)("commonall_tag_text_new")
                })
            }
              , Ji = e=>(null === e || void 0 === e ? void 0 : e.type) === Mt.DailyBoost
              , qi = e=>"actionType"in e && e.actionType === Me.UnLock
              , Qi = e=>{
                var t = e.pointCost
                  , n = e.curStage
                  , r = e.totalStage;
                return !Ji(e) && n >= r ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                T.O4)("ok_game_okxracer_free") : "".concat((0,
                vt.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const $i = "index_sheet__FbHHx"
              , eo = "index_sheet-icon__H2xCV"
              , to = "index_boostSheetTag__NbYFf"
              , no = "index_sheet-title__RInQ-"
              , ro = "index_sheet-desc__W9myB"
              , ao = "index_sheet-data__FALtV"
              , so = "index_sheet-point__Xrsvs"
              , io = "index_sheet-lvl__f1+W-"
              , oo = "index_lockBtnContainer__4DPO7"
              , co = "index_btn__bxKiJ"
              , lo = "index_boost-data-split-point__TaGIo";
            var uo = e=>{
                var t = e.boost
                  , n = e.onClick
                  , r = t
                  , a = r.context
                  , s = r.curStage
                  , i = r.totalStage
                  , o = r.isLocked
                  , c = a.icon
                  , l = a.name
                  , u = a.desc
                  , d = a.btnText
                  , _ = qi(a)
                  , p = !1
                  , m = u
                  , h = d;
                return _ && (o ? (m = a.unlockDescription,
                h = a.unlockButtonText) : m = a.ruleDescription,
                s === i && (p = !0,
                h = a.activatedButtonText)),
                (0,
                y.jsxs)("div", {
                    className: $i,
                    children: [(0,
                    y.jsx)("div", {
                        className: eo,
                        children: c
                    }), _ && (0,
                    y.jsx)(Xi, {
                        className: to
                    }), (0,
                    y.jsx)("div", {
                        className: no,
                        children: l
                    }), (0,
                    y.jsx)("div", {
                        className: ro,
                        children: m
                    }), (0,
                    y.jsxs)("div", {
                        className: ao,
                        children: [(0,
                        y.jsx)("span", {
                            className: so,
                            children: Qi(t)
                        }), (Ji(t) || s < i) && (0,
                        y.jsx)("span", {
                            className: lo
                        }), (0,
                        y.jsx)("span", {
                            className: io,
                            children: Ji(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    y.jsx)(J, {
                        to: D,
                        className: oo,
                        children: (0,
                        y.jsx)(Vt, {
                            text: h
                        })
                    }) : (0,
                    y.jsx)(Vt, {
                        onClick: ()=>{
                            n(t)
                        }
                        ,
                        className: co,
                        text: h,
                        disabled: p
                    })]
                })
            }
            ;
            const _o = "index_boost-item__k6pnm"
              , po = "index_boost-icon__wH6Dh"
              , mo = "index_boost-title__9R-Ry"
              , ho = "index_newTag__tgIea"
              , xo = "index_boost-desc__k1Big"
              , vo = "index_boost-data__+0cnG"
              , fo = "index_boost-data-split-point__moT+k"
              , go = "index_boost-data-stage__8CAgC"
              , ko = "index_boostItemPlaceholder__NaUkk"
              , jo = "index_locked__sM-YP"
              , bo = "index_unlockIcon__whxqz"
              , wo = "index_unlockButton__C3EY5";
            var Co = e=>{
                var t = e.boost
                  , n = t.curStage
                  , r = t.totalStage
                  , a = t.isLocked
                  , s = t.context;
                if (qi(s)) {
                    if (a)
                        return (0,
                        y.jsx)("div", {
                            className: vo,
                            children: (0,
                            T.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (n === r)
                        return (0,
                        y.jsx)("div", {
                            className: vo,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                y.jsxs)("div", {
                    className: vo,
                    children: [(0,
                    y.jsx)("span", {
                        children: Qi(t)
                    }), (Ji(t) || n < r) && (0,
                    y.jsx)("span", {
                        className: fo
                    }), (0,
                    y.jsx)("span", {
                        className: go,
                        children: Ji(t) ? "".concat(r - n, "/").concat(r) : "Lvl ".concat(n)
                    })]
                })
            }
              , yo = e=>{
                var t = e.boost
                  , n = e.onClick
                  , r = t.id
                  , a = t.context
                  , s = t.isLocked
                  , i = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = qi(a);
                return (0,
                y.jsxs)("div", {
                    className: _o,
                    onClick: ()=>{
                        n(r)
                    }
                    ,
                    children: [(0,
                    y.jsx)("div", {
                        className: po,
                        children: i
                    }), (0,
                    y.jsxs)("div", {
                        className: mo,
                        children: [o, l && (0,
                        y.jsx)(Xi, {
                            className: ho
                        })]
                    }), (0,
                    y.jsx)("div", {
                        className: xo,
                        children: c
                    }), (0,
                    y.jsx)(Co, {
                        boost: t
                    }), s && (0,
                    y.jsxs)("div", {
                        className: jo,
                        children: [(0,
                        y.jsx)(E.Z, {
                            className: _()("okx-growth-lock", bo)
                        }), (0,
                        y.jsx)(Ut.default, {
                            category: Ut.default.CATEGORY.text,
                            type: Ut.default.TYPE.primary,
                            size: Ut.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: Ut.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: wo,
                            children: (0,
                            T.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, r)
            }
              , No = ()=>(0,
            y.jsxs)("div", {
                className: _()(_o, ko),
                children: [(0,
                y.jsx)(ba, {
                    className: po
                }), (0,
                y.jsx)(ba, {
                    className: mo
                }), (0,
                y.jsx)(ba, {
                    className: xo
                }), (0,
                y.jsx)(ba, {
                    className: vo
                })]
            });
            const Oo = "index_boost-item-container__SW62L"
              , Po = "index_boost-item-padding__IwiTB";
            var Zo = e=>{
                var t = e.onClick
                  , n = Ki().boosts
                  , a = (0,
                r.useCallback)((e=>{
                    var r = n.find((t=>t.id === e));
                    r && t(r)
                }
                ), [n, t]);
                return (0,
                y.jsxs)("div", {
                    className: Oo,
                    children: [(0,
                    y.jsx)("div", {
                        className: Po
                    }), n.length > 0 ? (0,
                    y.jsx)(y.Fragment, {
                        children: n.map((e=>(0,
                        y.jsx)(yo, {
                            boost: e,
                            onClick: a
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    y.jsxs)(y.Fragment, {
                        children: [(0,
                        y.jsx)(No, {}), (0,
                        y.jsx)(No, {}), (0,
                        y.jsx)(No, {})]
                    }), (0,
                    y.jsx)("div", {
                        className: Po
                    })]
                })
            }
            ;
            const To = "BoostArea_boosts-title__hkjWn"
              , Eo = "BoostArea_boost-area__AMJbh"
              , So = "BoostArea_container__qLJSQ";
            var Ro = ()=>{
                var e = Ki()
                  , t = e.boosts
                  , n = e.upgradeBoost
                  , a = (0,
                r.useState)()
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                r.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = Je().points
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t) {
                        var r, a, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.pointCost,
                                    a = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(a))) {
                                        e.next = 5;
                                        break
                                    }
                                    oe(!1, (0,
                                    T.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(r) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    oe(!1, (0,
                                    T.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    n(t.id);
                                case 11:
                                    e.sent && oe(!0);
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
                r.useCallback)((e=>{
                    m(!0),
                    o(e)
                }
                ), []);
                return (0,
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsxs)("div", {
                        className: To,
                        children: [(0,
                        T.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    y.jsx)("div", {
                        className: Eo,
                        children: (0,
                        y.jsxs)("div", {
                            className: So,
                            children: [(0,
                            y.jsx)(Zo, {
                                onClick: v
                            }), (0,
                            y.jsx)(re, {
                                visible: p,
                                onClose: ()=>{
                                    m(!1)
                                }
                                ,
                                children: i && (0,
                                y.jsx)(uo, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
              , Lo = n(74914)
              , Io = n(59257);
            const Bo = "index_task-item__JdIYG"
              , Ao = "index_title__hYmAn"
              , Mo = "index_state__ddlCZ"
              , Fo = "index_partner__JYUHR"
              , Uo = "index_logo__DhC6Q"
              , Wo = "index_item-left__BNG-l"
              , Do = "index_item-right__V+4iT"
              , Vo = "index_icon__yk0cJ"
              , Go = "index_done__h9mLm";
            var Ho = e=>{
                var t = e.task
                  , n = e.onClick
                  , r = t.id
                  , a = t.points
                  , s = t.state
                  , i = t.context
                  , c = i.logo
                  , l = i.isPartner;
                return (0,
                y.jsxs)("div", {
                    className: Bo,
                    onClick: ()=>{
                        n(r)
                    }
                    ,
                    children: [(0,
                    y.jsxs)("div", {
                        className: Wo,
                        children: [l ? (0,
                        y.jsx)("div", {
                            className: Fo,
                            children: (0,
                            T.O4)("ok_game_okxracer_tag_partnership")
                        }) : null, (0,
                        y.jsx)("div", {
                            className: Ao,
                            children: i.name
                        }), (0,
                        y.jsx)("div", {
                            className: Mo,
                            children: " ".concat(s === At.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                            vt.uf)(a, {
                                signDisplay: !0
                            }), " pts")
                        })]
                    }), c ? (0,
                    y.jsx)(Lo.Z, {
                        size: Io.Z.sm,
                        className: Uo,
                        src: "".concat(o.Z.cdnBaseUrl).concat(c)
                    }) : null, (0,
                    y.jsx)("div", {
                        className: Do,
                        children: s === At.finished ? (0,
                        y.jsx)("div", {
                            className: Go,
                            children: (0,
                            T.O4)("ok_game_okxracer_done")
                        }) : (0,
                        y.jsx)(E.Z, {
                            className: _()("okx-growth-chevrons-right", Vo)
                        })
                    })]
                }, r)
            }
            ;
            const Ko = "index_container__LfQHA"
              , Yo = "index_taskItemPlaceholder__fM-lX"
              , zo = "index_task__AMi4e";
            var Xo = ()=>(0,
            y.jsx)(y.Fragment, {
                children: Array.from({
                    length: 2
                }).map(((e,t)=>(0,
                y.jsx)("div", {
                    className: _()(Yo),
                    children: (0,
                    y.jsx)(ba, {
                        className: zo
                    })
                }, t)))
            });
            function Jo(e) {
                var t = e.tasks
                  , n = e.onClick;
                return (0,
                y.jsx)("div", {
                    className: Ko,
                    children: t.length > 0 ? t.map((e=>(0,
                    y.jsx)(Ho, {
                        task: e,
                        onClick: n
                    }, e.id))) : (0,
                    y.jsx)(Xo, {})
                })
            }
            var qo = n(52008);
            const Qo = "WalletTask_sheet-container__bz-jm"
              , $o = "WalletTask_sheet-name__xuyl9"
              , ec = "WalletTask_sheet-desc__snmOq"
              , tc = "WalletTask_sheeLogo__LcXBr"
              , nc = "WalletTask_sheeLogoCheck__4qpgw"
              , rc = "WalletTask_sheetCopyBox__vbEpV"
              , ac = "WalletTask_btn__JBh79"
              , sc = "WalletTask_btn-txt__qnE8C";
            var ic = "/cdn/assets/imgs/248/9C021A3DC09B4C81.webp"
              , oc = "/cdn/assets/imgs/247/F90A315B5916E44A.webp"
              , cc = e=>{
                var t = e.selectedTask
                  , n = e.uid
                  , a = e.onClick
                  , s = (0,
                g.dG)()
                  , i = (0,
                u.Z)(s, 1)[0]
                  , d = (0,
                r.useRef)((()=>{}
                ))
                  , _ = ()=>{
                    d.current && d.current()
                }
                ;
                (0,
                r.useEffect)((()=>(i.setConnectRequestParameters({
                    state: "ready",
                    value: {
                        tonProof: n
                    }
                }),
                (null === t || void 0 === t ? void 0 : t.state) === At.finished ? R.act({
                    action: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                    anchor: "OkxRacerLandingPage_TaskPopUp_CheckAddress_View",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                }) : R.act({
                    action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                    anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_View",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                }),
                ()=>{
                    _()
                }
                )), []);
                var p = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e() {
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!i) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    i.openSingleWalletModal("okxTonWallet");
                                case 3:
                                    _(),
                                    d.current = i.onSingleWalletModalStateChange((0,
                                    l.Z)((0,
                                    c.Z)().mark((function e() {
                                        var r, s, o, l, u, d, p, m, h, x, v, f, g, k;
                                        return (0,
                                        c.Z)().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0,
                                                    r = i.wallet,
                                                    o = (s = r).account,
                                                    l = o.address,
                                                    u = o.publicKey,
                                                    d = s.connectItems,
                                                    p = qo.Address.parse(l),
                                                    m = p.toString({
                                                        urlSafe: !0,
                                                        bounceable: !1,
                                                        testOnly: !1
                                                    }),
                                                    h = d.tonProof,
                                                    x = h.proof,
                                                    v = x.signature,
                                                    f = x.payload,
                                                    g = x.domain,
                                                    k = x.timestamp,
                                                    e.t0 = a,
                                                    !e.t0) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    return e.next = 11,
                                                    a(t, JSON.stringify({
                                                        telegramId: n,
                                                        tonAddress: m,
                                                        publicKey: u,
                                                        signature: v,
                                                        msg: JSON.stringify({
                                                            payload: f,
                                                            domain: null === g || void 0 === g ? void 0 : g.value,
                                                            timestamp: k
                                                        })
                                                    }));
                                                case 11:
                                                    e.next = 16;
                                                    break;
                                                case 13:
                                                    e.prev = 13,
                                                    e.t1 = e.catch(0),
                                                    e.t1 instanceof Error && se.k.warn("mini app okx racer, Wallet Error ".concat(e.t1.message), {
                                                        e: e.t1
                                                    });
                                                case 16:
                                                    _(),
                                                    i.disconnect();
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 13]])
                                    }
                                    ))));
                                case 5:
                                    R.act({
                                        action: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                                        anchor: "OkxRacerLandingPage_TaskPopUp_ConnectToWallet_Click",
                                        params: {},
                                        actionType: "",
                                        elementType: "",
                                        ampProject: "okx"
                                    });
                                case 6:
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
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsx)(g.P6, {
                        style: {
                            display: "none"
                        }
                    }), (null === t || void 0 === t ? void 0 : t.state) === At.finished && t.context.actionType === Me.WalletConnect ? (0,
                    y.jsxs)("div", {
                        className: Qo,
                        children: [(0,
                        y.jsx)(Yt.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(oc),
                            className: tc
                        }), (0,
                        y.jsx)("div", {
                            className: $o,
                            children: t.context.nameFinished
                        }), (0,
                        y.jsxs)("div", {
                            className: rc,
                            children: [(0,
                            y.jsx)("div", {
                                children: t.context.tonAddress
                            }), (0,
                            y.jsx)(E.Z, {
                                className: "okx-growth-copy",
                                onClick: ()=>{
                                    try {
                                        (null === t || void 0 === t ? void 0 : t.context.actionType) === Me.WalletConnect && (navigator.clipboard.writeText(null === t || void 0 === t ? void 0 : t.context.tonAddress),
                                        oe(!0, (0,
                                        T.O4)("ok_game_okxracer_copied_url")))
                                    } catch (e) {
                                        oe(!1, "Copy Invite URL failed")
                                    }
                                }
                            })]
                        }), (0,
                        y.jsx)(Ut.default, {
                            category: Ut.default.CATEGORY.fill,
                            type: Ut.default.TYPE.primary,
                            size: Ut.default.SIZE.lg,
                            className: ac,
                            onClick: ()=>{
                                a()
                            }
                            ,
                            children: (0,
                            y.jsx)("div", {
                                className: sc,
                                children: t.context.btnTextFinished
                            })
                        })]
                    }) : (0,
                    y.jsxs)("div", {
                        className: Qo,
                        children: [(0,
                        y.jsx)(Yt.Z, {
                            src: "".concat(o.Z.cdnBaseUrl).concat(ic),
                            className: nc
                        }), (0,
                        y.jsx)("div", {
                            className: $o,
                            children: null === t || void 0 === t ? void 0 : t.context.name
                        }), (0,
                        y.jsx)("div", {
                            className: ec,
                            children: null === t || void 0 === t ? void 0 : t.context.desc
                        }), (0,
                        y.jsx)(Ut.default, {
                            category: Ut.default.CATEGORY.fill,
                            type: Ut.default.TYPE.primary,
                            size: Ut.default.SIZE.lg,
                            className: ac,
                            onClick: p,
                            children: (0,
                            y.jsx)("div", {
                                className: sc,
                                children: null === t || void 0 === t ? void 0 : t.context.btnText
                            })
                        })]
                    })]
                })
            }
            ;
            const lc = "TaskArea_tabPane__irXs6"
              , uc = "TaskArea_tabName__-BL2R"
              , dc = "TaskArea_sheet-container__lottt"
              , _c = "TaskArea_sheet-name__CibLI"
              , pc = "TaskArea_sheet-desc__aaGRQ"
              , mc = "TaskArea_btn__HU6oE";
            var hc = e=>{
                var t = e.isPartner
                  , n = void 0 !== t && t
                  , r = e.count
                  , a = n ? (0,
                T.O4)("ok_game_okxracer_tab_partner_tasks") : (0,
                T.O4)("ok_game_okxracer_tab_my_tasks");
                return (0,
                y.jsxs)("div", {
                    className: uc,
                    children: [a, " ", (0,
                    y.jsxs)("span", {
                        children: ["(", r, ")"]
                    })]
                })
            }
              , xc = ()=>{
                var e = Ki()
                  , t = e.tasks
                  , n = e.doTask
                  , a = (0,
                r.useState)()
                  , s = (0,
                u.Z)(a, 2)
                  , i = s[0]
                  , o = s[1]
                  , d = (0,
                r.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = B().uid
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    c.Z)().mark((function e(t, r) {
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
                                    return t.context.actionType === Me.OpenLink && t.context.redirectLink && (null === (a = window) || void 0 === a || null === (s = a.Telegram) || void 0 === s || s.WebApp.openLink(t.context.redirectLink)),
                                    e.next = 4,
                                    n(t.id, r);
                                case 4:
                                    e.sent && oe(!0, (0,
                                    T.O4)("ok_game_okxracer_task_completion_msg"));
                                case 6:
                                    m(!1);
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
                rs.Z)((e=>{
                    if (t.length > 0) {
                        var n = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === n || void 0 === n ? void 0 : n.context.actionType) !== Me.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === At.finished)
                            return;
                        o(n),
                        m(!0),
                        (null === n || void 0 === n ? void 0 : n.context.actionType) === Me.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) === At.finished ? R.act({
                            action: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            anchor: "OkxRacerLandingPage_TaskCard_CheckAddress_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        }) : (null === n || void 0 === n ? void 0 : n.context.actionType) === Me.WalletConnect && (null === n || void 0 === n ? void 0 : n.state) !== At.finished && R.act({
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
                  , f = (0,
                rs.Z)(x, {
                    wait: 500
                }).run
                  , g = t.filter((e=>e.context.isPartner))
                  , k = t.filter((e=>!e.context.isPartner))
                  , j = {
                    [Me.WalletConnect]: ()=>(0,
                    y.jsx)(cc, {
                        selectedTask: i,
                        onClick: (e,t)=>f(e, t),
                        uid: h
                    })
                };
                return (0,
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsxs)(_a.Z.Underline, {
                        size: _a.Z.SIZE.xl,
                        children: [(0,
                        y.jsx)(_a.Z.TabPane, {
                            className: lc,
                            tab: (0,
                            y.jsx)(hc, {
                                isPartner: !0,
                                count: g.length
                            }),
                            id: "partner",
                            children: (0,
                            y.jsx)(Jo, {
                                tasks: g,
                                onClick: v
                            })
                        }), (0,
                        y.jsx)(_a.Z.TabPane, {
                            className: lc,
                            tab: (0,
                            y.jsx)(hc, {
                                count: k.length
                            }),
                            id: "own",
                            children: (0,
                            y.jsx)(Jo, {
                                tasks: k,
                                onClick: v
                            })
                        })]
                    }), i && (0,
                    y.jsx)(re, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: ()=>{
                            o(void 0),
                            m(!1)
                        }
                        ,
                        children: (()=>{
                            var e = j[i.context.actionType];
                            return e ? e() : (()=>{
                                var e = i.context
                                  , t = e.desc
                                  , n = e.btnText;
                                return (0,
                                y.jsxs)("div", {
                                    className: dc,
                                    children: [(0,
                                    y.jsx)("div", {
                                        className: _c,
                                        children: e.name
                                    }), (0,
                                    y.jsx)("div", {
                                        className: pc,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            pa.dU)(t)
                                        }
                                    }), (0,
                                    y.jsx)(Vt, {
                                        className: mc,
                                        onClick: ()=>f(i),
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
            ;
            const vc = "TaskPage_container__5KfIM"
              , fc = "TaskPage_block__kt8oo"
              , gc = "TaskPage_block-boost__QYQXL"
              , kc = "TaskPage_points-title__4hW9Y"
              , jc = "TaskPage_points-content__+yK3g";
            var bc = ()=>{
                var e = Je().points;
                return (0,
                y.jsxs)("div", {
                    className: vc,
                    children: [(0,
                    y.jsx)("div", {
                        className: fc,
                        children: (0,
                        y.jsxs)(y.Fragment, {
                            children: [(0,
                            y.jsxs)("div", {
                                className: kc,
                                children: ["\ud83c\udfc6 ", (0,
                                T.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            y.jsx)("div", {
                                className: jc,
                                children: ft.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    y.jsx)("div", {
                        className: gc,
                        children: (0,
                        y.jsx)(Ro, {})
                    }), (0,
                    y.jsx)("div", {
                        className: fc,
                        children: (0,
                        y.jsx)(xc, {})
                    })]
                })
            }
              , wc = ()=>(0,
            y.jsx)(Yi, {
                children: (0,
                y.jsx)(bc, {})
            })
              , Cc = "".concat(o.Z.cdnBaseUrl, "/cdn/assets/files/247/E8722761C0AB6781.json")
              , yc = ()=>{
                var e = (0,
                r.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , n = t[0]
                  , a = t[1]
                  , i = (0,
                r.useMemo)(f, []);
                (0,
                r.useMemo)((()=>{
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
                    var e = B().uid;
                    return (0,
                    r.useEffect)((()=>{
                        var e, t, n, r, a, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (n = (r = window.Telegram.WebApp).ready) || void 0 === n || n.call(r),
                        null === (a = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === a || a.call(s, "#0D0D0D"),
                        null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                        null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                        null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d)),
                        document.addEventListener("contextmenu", (e=>e.preventDefault()))
                    }
                    ), []),
                    {
                        isAllowToLoadApp: true//$(window) && Boolean(e) && !(window.location != window.parent.location)
                    }
                }
                )().isAllowToLoadApp;
                return (0,
                r.useEffect)((()=>{
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
                y.jsx)("article", {
                    className: _()(k, "theme-dark"),
                    children: (0,
                    y.jsx)(m.Z, {
                        localeData: n,
                        fetchConfig: i,
                        children: o ? (0,
                        y.jsxs)(y.Fragment, {
                            children: [(0,
                            y.jsx)(rt, {
                                children: (0,
                                y.jsx)(qe, {
                                    children: (0,
                                    y.jsx)(it, {
                                        children: (0,
                                        y.jsx)(g.LD, {
                                            manifestUrl: Cc,
                                            children: (0,
                                            y.jsx)("main", {
                                                className: b,
                                                children: (0,
                                                y.jsxs)(s.Switch, {
                                                    children: [(0,
                                                    y.jsx)(s.Route, {
                                                        path: M,
                                                        component: N(da),
                                                        exact: !0
                                                    }), (0,
                                                    y.jsx)(s.Route, {
                                                        path: W,
                                                        component: P(qa),
                                                        exact: !0
                                                    }), (0,
                                                    y.jsx)(s.Route, {
                                                        path: U,
                                                        component: N(wc),
                                                        exact: !0
                                                    }), (0,
                                                    y.jsx)(s.Route, {
                                                        path: F,
                                                        component: P(Rs),
                                                        exact: !0
                                                    }), (0,
                                                    y.jsx)(s.Route, {
                                                        path: D,
                                                        component: P(Gi),
                                                        exact: !0
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            y.jsx)("div", {
                                className: j,
                                children: (0,
                                y.jsx)(Q, {})
                            })]
                        }) : (0,
                        y.jsx)(ns, {})
                    })
                })
            }
              , Nc = document.getElementById("root");
            if (Nc) {
                var Oc = (0,
                y.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    y.jsx)(A, {
                        children: (0,
                        y.jsx)(yc, {})
                    })
                });
                (0,
                i.createRoot)(Nc).render(Oc)
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
        var s = t[r] = {
            exports: {}
        };
        return e[r].call(s.exports, s, s.exports, n),
        s.exports
    }
    n.m = e,
    n.amdO = {},
    (()=>{
        var e = [];
        n.O = (t,r,a,s)=>{
            if (!r) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r,a,s] = e[u], o = !0, c = 0; c < r.length; c++)
                        (!1 & s || i >= s) && Object.keys(n.O).every((e=>n.O[e](r[c]))) ? r.splice(c--, 1) : (o = !1,
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
            e[u] = [r, a, s]
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
            5145: 0
        };
        n.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, s, [i,o,c] = r, l = 0;
            if (i.some((t=>0 !== e[t]))) {
                for (a in o)
                    n.o(o, a) && (n.m[a] = o[a]);
                if (c)
                    var u = c(n)
            }
            for (t && t(r); l < i.length; l++)
                s = i[l],
                n.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return n.O(u)
        }
          , r = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var r = n.O(void 0, [2675, 5825, 5145, 5890, 6970, 6371, 6877, 4084, 5573, 7429, 669, 1561], (()=>n(14431)));
    r = n.O(r)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.34cd84b2.js.map
