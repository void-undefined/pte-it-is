(()=>{
    "use strict";
    var e = {
        74085: (e,t,r)=>{
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
              , d = r(46541)
              , _ = r(1677)
              , m = r(2627)
              , p = r(45929)
              , h = r(8786)
              , x = ()=>{
                var e, t, r = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, n = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === r || void 0 === r ? void 0 : r.language_code) || "en"] || "en_US";
                return h.Z.set("locale", n),
                window._okGlobal && (window._okGlobal.locale = n),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: n
                }
            }
            ;
            const v = "App_container__p+0qT"
              , f = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = r(28683);
            const j = "NoPaddingLayout_no-padding-layout__6LAKV";
            var b = r(45263)
              , w = e=>t=>(0,
            b.jsx)("div", {
                className: j,
                children: (0,
                b.jsx)(e, (0,
                k.Z)({}, t))
            });
            const C = "ComPaddingLayout_common-padding-layout__0gGbM";
            var N = e=>t=>(0,
            b.jsx)("div", {
                className: C,
                children: (0,
                b.jsx)(e, (0,
                k.Z)({}, t))
            })
              , y = r(44925)
              , O = r(95640)
              , P = r.n(O)
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
              , R = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , L = (0,
            n.createContext)(R)
              , I = ()=>(0,
            n.useContext)(L)
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
                    return R
                }
                ), [])
                  , a = (0,
                n.useState)(r)
                  , s = (0,
                u.Z)(a, 1)[0];
                return (0,
                b.jsx)(L.Provider, {
                    value: s,
                    children: t
                })
            }
              , A = "/mini-app/racer"
              , M = "/mini-app/racer/referrals"
              , F = "/mini-app/racer/tasks"
              , D = "/mini-app/racer/leaderboard"
              , U = "/mini-app/racer/rewards";
            const V = "Navbar_navbar__LF3-M"
              , G = "Navbar_link__qX0Sf"
              , W = "Navbar_active__TCbF8"
              , H = "Navbar_linkIcon__GtH54"
              , K = "Navbar_linkText__Szxi-";
            var X = ["children", "className"]
              , Y = ["iconName", "label", "onClick"]
              , z = e=>{
                var t = e.children
                  , r = e.className
                  , n = (0,
                y.Z)(e, X)
                  , a = (0,
                s.useLocation)().hash;
                return (0,
                b.jsx)(s.Link, {
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
                y.Z)(e, Y)
                  , i = (0,
                s.useRouteMatch)({
                    path: a.to,
                    exact: !0
                });
                return (0,
                b.jsxs)(z, {
                    className: P()(G, i && W),
                    to: a.to,
                    onClick: n,
                    children: [(0,
                    b.jsx)(E.Z, {
                        iconName: t,
                        className: H
                    }), (0,
                    b.jsx)("span", {
                        className: K,
                        children: r
                    })]
                })
            }
              , Q = ()=>{
                var e = {
                    telegramid: I().uid
                };
                return (0,
                b.jsxs)("div", {
                    className: V,
                    children: [(0,
                    b.jsx)(J, {
                        iconName: "okx-growth-home",
                        to: A,
                        label: (0,
                        Z.O4)("ok_game_okxracer_home")
                    }), (0,
                    b.jsx)(J, {
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
                    b.jsx)(J, {
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
                    b.jsx)(J, {
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
                    b.jsx)(J, {
                        iconName: "okx-growth-surprises",
                        to: U,
                        label: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                })
            }
            ;
            function q(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var $ = ()=>((0,
            n.useEffect)((()=>{
                var e, t, r, n, a, s, i, o, c, l, u, d;
                null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (r = (n = window.Telegram.WebApp).ready) || void 0 === r || r.call(n),
                null === (a = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === a || a.call(s, "#0D0D0D"),
                null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"),
                null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l),
                null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d));
                document.addEventListener("contextmenu", (e=>e.preventDefault()))
            }
            ), []),
            {
                hasWebviewProxy: q(window)
            })
              , ee = r(4860)
              , te = r(72202)
              , re = (e,t)=>{
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
              , ne = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                re(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , ae = r(60378)
              , se = r(4422);
            const ie = utils.ont;
            var oe = r.n(ie)
              , ce = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , le = e=>t=>{
                if (!(0,
                ae.y)()) {
                    var r = t || {}
                      , n = r.status
                      , a = r.data || {}
                      , s = a.msg
                      , i = a.code;
                    se.k.warn("Request error, url=".concat(e, " status=").concat(n, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , ue = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().get(t, r).then(ce, le(t)));
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
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().getWithCache(t, r).then(ce, le(t)));
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
              , _e = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().post(t, r, n).then(ce, le(t)));
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
              , me = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().put(t, r, n).then(ce, le(t)));
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
                                return e.abrupt("return", oe().delete(t, r).then(ce, le(t)));
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
              , he = function() {
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
                                e.abrupt("return", _e(t, a, n));
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
            const xe = {
                get: ue,
                getWithCache: de,
                post: _e,
                put: me,
                postForm: he,
                delete: pe
            };
            function ve(e, t) {
                var r, n;
                return xe.get(e, (0,
                k.Z)((0,
                k.Z)({}, t || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (n = r.WebApp) || void 0 === n ? void 0 : n.initData) || ""
                    }
                }))
            }
            function fe(e, t, r) {
                var n, a;
                return xe.post(e, t, (0,
                k.Z)((0,
                k.Z)({}, r || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (n = window.Telegram) || void 0 === n || null === (a = n.WebApp) || void 0 === a ? void 0 : a.initData) || ""
                    }
                }))
            }
            var ge = "/priapi/v1/affiliate"
              , ke = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ge, "/game/racer/info"), t));
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
              , je = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ge, "/game/racer/assess"), t));
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
                    var r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ge, "/game/racer/invitee-list"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(n = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", n);
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
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , we = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ge, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(n = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", n);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                ne(e.t0),
                                e.abrupt("return", null);
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
              , Ce = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    var r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ge, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(n = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", n);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                ne(e.t0),
                                e.abrupt("return", null);
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
              , Ne = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e
            }({})
              , ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(ge, "/game/racer/boosts")));
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
              , Oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ge, "/game/racer/boost"), t));
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
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(ge, "/game/racer/tasks")));
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
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fe("".concat(ge, "/game/racer/task"), t));
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
                    var t, r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                fe("".concat(ge, "/game/racer/account-binding"), {});
                            case 2:
                                if (t = e.sent,
                                r = t.code,
                                n = t.data,
                                0 !== r || !n) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", {
                                    isConnectTelegram: 1 === n.tgBindingStatus,
                                    isKyc: 1 === n.kycVerifyStatus,
                                    signupLink: n.signupLink,
                                    downloadLink: n.downloadLink,
                                    bindTgLink: n.bindTgLink,
                                    verifyKycLink: n.verifyKycLink
                                });
                            case 7:
                                return e.abrupt("return", null);
                            case 8:
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
              , Te = (0,
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
              , Se = ()=>(0,
            n.useContext)(Te)
              , Re = e=>{
                var t, r = e.children, a = (0,
                n.useState)(0), s = (0,
                u.Z)(a, 2), i = s[0], o = s[1], d = (0,
                n.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], h = (0,
                n.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                n.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                n.useState)(""), N = (0,
                u.Z)(C, 2), y = N[0], O = N[1], P = (0,
                n.useState)(!0), E = (0,
                u.Z)(P, 2), T = E[0], S = E[1], R = I(), L = R.username, B = R.startParam, A = (0,
                n.useState)(""), M = (0,
                u.Z)(A, 2), F = M[0], D = M[1], U = (0,
                n.useState)(!1), V = (0,
                u.Z)(U, 2), G = V[0], W = V[1], H = (0,
                n.useState)(0), K = (0,
                u.Z)(H, 2), X = K[0], Y = K[1], z = null !== (t = new ee.Z((B || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", J = (0,
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
                                ke({
                                    extUserName: L,
                                    linkCode: z
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (o(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                p(r.numChances),
                                w(r.secondToRefresh),
                                f(r.numChancesTotal),
                                W(r.isShowAutopilotGainedPoint),
                                Y(r.autopilotPoints),
                                S(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                re(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [z, L]);
                (0,
                n.useEffect)((()=>{
                    J()
                }
                ), [J]),
                (0,
                n.useEffect)((()=>{
                    var e = new te.Z(j);
                    return j > 0 ? (e.start(),
                    e.addEventListener(te.Z.Event.UPDATE, (e=>{
                        D("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(te.Z.Event.FINISH, (()=>{
                        D(""),
                        J()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    D("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [j, J]),
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
                var Q = (0,
                n.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    p(e.numChances),
                    w(e.secondToRefresh)
                }
                ), [])
                  , q = (0,
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
                  , $ = (0,
                n.useCallback)((()=>{
                    W(!1)
                }
                ), [])
                  , ne = (0,
                n.useMemo)((()=>({
                    isLoading: T,
                    points: i,
                    numChances: m,
                    numChancesTotal: v,
                    countdownDisplay: F,
                    updateGameInfo: Q,
                    linkCode: y,
                    updateGameInfoFromServer: q,
                    isShowAutopilotGainedPoint: G,
                    autopilotPoints: X,
                    hideAutopilotSheet: $
                })), [T, i, m, v, F, Q, y, q, G, X, $]);
                return (0,
                b.jsx)(Te.Provider, {
                    value: ne,
                    children: r
                })
            }
              , Le = r(8031);
            var Ie = new class {
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
                    this.connection = new Le.Z({
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
              , Be = (0,
            n.createContext)(Ie)
              , Ae = e=>{
                var t = e.children;
                return (0,
                b.jsx)(Be.Provider, {
                    value: Ie,
                    children: t
                })
            }
              , Me = (0,
            n.createContext)(null)
              , Fe = ()=>(0,
            n.useContext)(Me)
              , De = e=>{
                var t = e.children
                  , r = (0,
                n.useState)(null)
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useContext)(Be);
                return (0,
                n.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                b.jsx)(Me.Provider, {
                    value: s,
                    children: t
                })
            }
              , Ue = r(46430)
              , Ve = "racer"
              , Ge = ()=>{
                var e;
                if (!(0,
                ae.y)())
                    return Ue.Z.getInstance(Ve) || Ue.Z.init({
                        project: Ve
                    }),
                    null !== (e = Ue.Z.getInstance(Ve)) && void 0 !== e ? e : Ue.Z
            }
              , We = "guessRecords_new";
            function He(e) {
                var t = Ge().get(We) || [];
                t.unshift(e),
                Ge().set(We, t.slice(0, 5))
            }
            var Ke = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Xe = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: Ke.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Ke.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Ye = (0,
            n.createContext)(Xe)
              , ze = ()=>(0,
            n.useContext)(Ye)
              , Je = e=>{
                var t = e.children
                  , r = I().uid
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
                  , m = _[0]
                  , p = _[1]
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
                  , j = k[0]
                  , w = k[1]
                  , C = (0,
                n.useState)(Ke.NONE)
                  , N = (0,
                u.Z)(C, 2)
                  , y = N[0]
                  , O = N[1]
                  , P = Fe()
                  , E = Se().updateGameInfo
                  , T = (0,
                n.useRef)(Ke.NONE)
                  , R = (0,
                n.useRef)(1)
                  , L = (0,
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
                                t = T.current === Ke.UP ? 1 : 0,
                                e.next = 4,
                                je({
                                    predict: t
                                });
                            case 4:
                                r = e.sent,
                                (n = r.data) && (w(n.won),
                                E({
                                    points: n.balancePoints,
                                    numChances: n.numChance,
                                    secondToRefresh: n.secondToRefresh
                                }),
                                R.current = n.multiplier,
                                L.current = n.basePoint,
                                B.current = Number(n.changeRate),
                                A.current = n.prevPrice,
                                M.current = n.currentPrice,
                                He({
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
                                w(null),
                                B.current = null,
                                re(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                T.current = Ke.NONE,
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
                        p(t),
                        e = setInterval((()=>{
                            p(t -= 1),
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
                            O(P === v ? Ke.NONE : e ? Ke.UP : Ke.DOWN)
                        } else
                            f(P)
                }
                ), [v, i, P]);
                var D = (0,
                n.useCallback)((e=>{
                    w(null),
                    o(!0),
                    T.current = e,
                    B.current = null;
                    var t = {
                        telegramid: r
                    };
                    e === Ke.UP && function() {
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
                    e === Ke.DOWN && function() {
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
                    countdown: m,
                    onButtonClick: D,
                    result: j,
                    isPending: i,
                    currentTrend: y,
                    multiplier: R.current,
                    basePoints: L.current,
                    predict: T.current,
                    changeRate: B.current,
                    prevPrice: A.current,
                    currentPrice: M.current
                })), [m, y, i, R, D, j]);
                return (0,
                b.jsx)(Ye.Provider, {
                    value: U,
                    children: t
                })
            }
              , Qe = r(94595)
              , qe = r(96450)
              , $e = 2e3
              , et = 500;
            function tt(e) {
                return (Math.abs(e) < 1e-4 ? qe.yx.ceilTruncate : qe.yx.floorTruncate)(e, 4)
            }
            const rt = "GuessResult_container__ECdpL"
              , nt = "GuessResult_title__fzYxg"
              , at = "GuessResult_multiplier__yRHWm"
              , st = "GuessResult_description__R2fup"
              , it = "GuessResult_detailsIcon__ZE7Ry"
              , ot = "GuessResult_changeRateContainer__a5-N7"
              , ct = "GuessResult_label__+b5Nz"
              , lt = "GuessResult_changeRate__yhVz3"
              , ut = "GuessResult_up__5vYDR"
              , dt = "GuessResult_down__fa-oP"
              , _t = "GuessResult_priceChange__xr6e8"
              , mt = "GuessResult_price__Vk+bY";
            function pt(e) {
                return (0,
                Qe.xG)((0,
                Qe.uf)(qe.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var ht = e=>{
                var t = e.className
                  , r = ze()
                  , a = r.result
                  , s = r.multiplier
                  , i = r.changeRate
                  , o = r.prevPrice
                  , c = r.currentPrice
                  , l = (0,
                n.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
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
                            ), $e)
                        }
                        ), et)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [a]),
                (0,
                b.jsx)(b.Fragment, {
                    children: _ && (0,
                    b.jsxs)("div", {
                        className: P()(t, rt),
                        children: [(0,
                        b.jsx)("p", {
                            className: at,
                            children: a ? (0,
                            b.jsxs)("span", {
                                className: it,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: it,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: nt,
                            children: (0,
                            Z.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: st,
                            children: [null !== i && (0,
                            b.jsxs)("p", {
                                className: ot,
                                children: [(0,
                                b.jsx)("span", {
                                    className: ct,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: P()(lt, {
                                        [ut]: i > 0,
                                        [dt]: i < 0
                                    }),
                                    children: (0,
                                    Qe.uf)(tt(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            b.jsx)("p", {
                                className: _t,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: mt,
                                        children: pt(o)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: mt,
                                        children: pt(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var xt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , vt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , ft = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , gt = "/help/okx-racer-terms-and-conditions"
              , kt = r(2663);
            const jt = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var bt = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: jt.closeBtn,
                closeIconClassName: jt.closeIcon
            }
              , wt = e=>(0,
            b.jsx)(kt.Z, (0,
            k.Z)((0,
            k.Z)({}, bt), {}, {
                topContent: e.title ? void 0 : (0,
                b.jsx)("div", {
                    className: jt.topPadding
                })
            }, e))
              , Ct = r(76983);
            const Nt = "PrimaryButton_button__SJFHA"
              , yt = "PrimaryButton_buttonText__19AJ7";
            var Ot = e=>{
                var t = e.onClick
                  , r = e.text
                  , n = e.className
                  , a = e.disabled
                  , s = void 0 !== a && a;
                return (0,
                b.jsx)(Ct.default, {
                    category: Ct.default.CATEGORY.fill,
                    type: Ct.default.TYPE.primary,
                    size: Ct.default.SIZE.lg,
                    className: P()(Nt, n),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    b.jsx)("div", {
                        className: yt,
                        children: r
                    })
                })
            }
            ;
            const Pt = "AutoPilot_title__NJa0C"
              , Zt = "AutoPilot_button__Sg42v";
            var Et = ()=>{
                var e = Se()
                  , t = e.isShowAutopilotGainedPoint
                  , r = e.autopilotPoints
                  , n = e.hideAutopilotSheet;
                return (0,
                b.jsxs)(wt, {
                    visible: t,
                    onClose: n,
                    children: [(0,
                    b.jsx)("div", {
                        className: Pt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: r
                        })
                    }), (0,
                    b.jsx)(Ot, {
                        className: Zt,
                        onClick: n,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , Tt = r(59896);
            const St = "BackgroundVideo_container__J5sO2"
              , Rt = "BackgroundVideo_muteButton__04Huj"
              , Lt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , It = "BackgroundVideo_staticImage__EpRTb"
              , Bt = "BackgroundVideo_hide__ZXYN9";
            var At, Mt, Ft, Dt, Ut, Vt, Gt = "backgroundVideoSoundOn", Wt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Ht = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Kt = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], Xt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Wt)
            }, Yt = ()=>{
                var e = ze().isPending
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
                  , _ = d[0]
                  , m = d[1]
                  , p = (0,
                n.useState)(!1)
                  , h = (0,
                u.Z)(p, 2)
                  , x = h[0]
                  , v = h[1]
                  , f = Ge()
                  , g = (0,
                n.useState)((()=>{
                    var e = f.get(Gt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
                (0,
                n.useEffect)((()=>{
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
                var N = !i && !_
                  , y = i && x && _
                  , O = i && (!x || !_);
                return (0,
                b.jsxs)("div", {
                    className: St,
                    children: [(0,
                    b.jsx)(Ct.default, {
                        category: Ct.default.CATEGORY.fill,
                        type: Ct.default.TYPE.quaternary,
                        size: Ct.default.SIZE.md,
                        className: Rt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(f.set(Gt, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Lt
                        })
                    }), (0,
                    b.jsx)(Tt.Z, {
                        className: P()(It, {
                            [Bt]: !N
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Wt)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Xt), {}, {
                        className: P()({
                            [Bt]: !y
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: Ht.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Xt), {}, {
                        className: P()({
                            [Bt]: !O
                        }),
                        ref: t,
                        muted: w,
                        children: Kt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , zt = ["title", "titleId"];
            function Jt() {
                return Jt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Jt.apply(this, arguments)
            }
            function Qt(e, t) {
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
            function qt(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Qt(e, zt);
                return n.createElement("svg", Jt({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, At || (At = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Mt || (Mt = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Ft || (Ft = n.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Dt || (Dt = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Ut || (Ut = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Vt || (Vt = n.createElement("defs", null, n.createElement("filter", {
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
            var $t = n.forwardRef(qt);
            r.p;
            var er, tr, rr, nr, ar, sr, ir = ["title", "titleId"];
            function or() {
                return or = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                or.apply(this, arguments)
            }
            function cr(e, t) {
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
            function lr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = cr(e, ir);
                return n.createElement("svg", or({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, er || (er = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), tr || (tr = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), rr || (rr = n.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), nr || (nr = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), ar || (ar = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), sr || (sr = n.createElement("defs", null, n.createElement("filter", {
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
            var ur = n.forwardRef(lr);
            r.p;
            const dr = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var _r, mr = e=>{
                var t = e.className
                  , r = ze()
                  , a = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , o = Se().numChances
                  , c = (0,
                n.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                n.useEffect)((()=>{
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
                    var t, r, n;
                    s || d || (_(e === Ke.UP ? Ke.DOWN : Ke.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (n = r.WebApp) && void 0 !== n && n.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , p = o <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: P()(dr.instructions, s && dr.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: dr.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: p || d === Ke.UP,
                            onClick: ()=>m(Ke.UP),
                            type: "button",
                            className: P()(dr.btn, dr.upBtn, {
                                [dr.pressed]: i === Ke.UP
                            }),
                            children: [(0,
                            b.jsx)(ur, {
                                className: P()(dr.btnGraphic, dr.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: dr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: dr.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: p || d === Ke.DOWN,
                            onClick: ()=>m(Ke.DOWN),
                            type: "button",
                            className: P()(dr.btn, dr.downBtn, {
                                [dr.pressed]: i === Ke.DOWN
                            }),
                            children: [(0,
                            b.jsx)($t, {
                                className: P()(dr.btnGraphic, dr.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: dr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: dr.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , pr = ["title", "titleId"];
            function hr() {
                return hr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                hr.apply(this, arguments)
            }
            function xr(e, t) {
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
            function vr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = xr(e, pr);
                return n.createElement("svg", hr({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, _r || (_r = n.createElement("g", {
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
            var fr = n.forwardRef(vr);
            r.p;
            var gr = r(48275);
            const kr = "FuelIndicator_fuelContainer__QIskL"
              , jr = "FuelIndicator_toTasksIcon__Y7exC"
              , br = "FuelIndicator_line__tWBfm"
              , wr = "FuelIndicator_description__EaUsa"
              , Cr = "FuelIndicator_fuelIcon__I38Ss"
              , Nr = "FuelIndicator_maxChances__OMSHl"
              , yr = "FuelIndicator_earnPtsMsg__PjtcT";
            var Or, Pr, Zr = e=>{
                var t = e.className
                  , r = Se()
                  , n = r.numChances
                  , a = r.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, kr),
                    children: [(0,
                    b.jsx)("span", {
                        className: Cr,
                        children: "\u26fd\ufe0f"
                    }), n > 0 ? (0,
                    b.jsx)(gr.Z.Line, {
                        className: br,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: n / a * 100
                    }, a) : (0,
                    b.jsx)(z, {
                        to: F,
                        className: yr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: wr,
                        children: [n, "\xa0", void 0 !== a && 0 !== a && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: Nr,
                                children: a
                            })]
                        })]
                    }), (0,
                    b.jsx)(z, {
                        to: F,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: jr
                        })
                    })]
                })
            }
            , Er = ["title", "titleId"];
            function Tr() {
                return Tr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Tr.apply(this, arguments)
            }
            function Sr(e, t) {
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
            function Rr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Sr(e, Er);
                return n.createElement("svg", Tr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Or || (Or = n.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Pr || (Pr = n.createElement("defs", null, n.createElement("linearGradient", {
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
            var Lr = n.forwardRef(Rr);
            r.p;
            const Ir = "RefuelTimer_container__wtALO"
              , Br = "RefuelTimer_description__sD+HM"
              , Ar = "RefuelTimer_timer__LL1+c";
            var Mr = e=>{
                var t = e.className
                  , r = Se().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, Ir),
                    children: [(0,
                    b.jsx)(Lr, {}), (0,
                    b.jsx)("p", {
                        className: Br,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: Ar,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const Fr = "CoinPrice_raceTrack__NZO2t"
              , Dr = "CoinPrice_run__f0UIF"
              , Ur = "CoinPrice_coinPriceContainer__YbeUE"
              , Vr = "CoinPrice_content__a-5Jl"
              , Gr = "CoinPrice_fuelIndicator__p+f1I"
              , Wr = "CoinPrice_refuelTimer__tbWMw"
              , Hr = "CoinPrice_hide__bHhxJ"
              , Kr = "CoinPrice_label__yTNy0"
              , Xr = "CoinPrice_value__ZjRZz"
              , Yr = "CoinPrice_slotMachine__hUQKt"
              , zr = "SlotMachine_row__a4TO0"
              , Jr = "SlotMachine_animate__-G4TR"
              , Qr = "SlotMachine_column__aR0VE"
              , qr = "SlotMachine_arrows__m1dhv"
              , $r = "SlotMachine_columnContainer__a76pd"
              , en = "SlotMachine_background__b9TMg"
              , tn = "SlotMachine_slot__jwCvC"
              , rn = "SlotMachine_staticColumn__O5zfB"
              , nn = "SlotMachine_sm__ZRCig"
              , an = "SlotMachine_arrow__qOYmf"
              , sn = "SlotMachine_wentUp__z48TO"
              , on = "SlotMachine_down__aYC8C"
              , cn = "SlotMachine_stable__CDMLP"
              , ln = "SlotMachine_wentDown__1fYUS"
              , un = "SlotMachine_up__IuiYV";
            var dn = e=>{
                var t = e.animate
                  , r = e.result
                  , n = void 0 === r ? 0 : r
                  , a = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: $r,
                    children: [(0,
                    b.jsx)("div", {
                        className: en
                    }), (0,
                    b.jsxs)("div", {
                        className: Qr,
                        style: a,
                        children: [(0,
                        b.jsx)("p", {
                            className: tn,
                            children: n
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: tn,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: tn,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , _n = ()=>{
                var e = ze()
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
                  , _ = l[1]
                  , m = (0,
                n.useState)(!1)
                  , p = (0,
                u.Z)(m, 2)
                  , h = p[0]
                  , x = p[1];
                return (0,
                n.useEffect)((()=>{
                    r && x(!0)
                }
                ), [r]),
                (0,
                n.useEffect)((()=>{
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? Ke.UP : 0 === e ? Ke.NONE : Ke.DOWN),
                    o(String(Math.abs(Number(tt(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    x(!1)) : _(null)
                }
                ), [t]),
                (0,
                b.jsxs)("div", {
                    className: P()(zr, h && Jr),
                    children: [(0,
                    b.jsx)("div", {
                        className: $r,
                        children: (0,
                        b.jsxs)("div", {
                            className: P()(qr, {
                                [sn]: d === Ke.UP,
                                [ln]: d === Ke.DOWN,
                                [cn]: d === Ke.NONE
                            }),
                            children: [(0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: P()(an, un)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: P()(an, cn)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: P()(an, on)
                            })]
                        })
                    }), (0,
                    b.jsx)(dn, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: rn,
                        children: "."
                    }), (0,
                    b.jsx)(dn, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(dn, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)(dn, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(dn, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: P()(rn, nn),
                        children: "%"
                    })]
                })
            }
              , mn = ()=>{
                var e = Fe()
                  , t = ze()
                  , r = t.isPending
                  , a = t.changeRate
                  , s = Se().countdownDisplay
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
                    ), et)),
                    t
                }
                ), [a, r]);
                var d = e ? "$".concat((0,
                Qe.uf)(qe.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !r;
                return (0,
                b.jsxs)("div", {
                    className: Ur,
                    children: [(0,
                    b.jsx)(fr, {
                        className: P()(Fr, r && Dr)
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Vr, c && Hr),
                        children: [(0,
                        b.jsx)("p", {
                            className: Kr,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Xr,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Vr, !c && Hr),
                        children: [(0,
                        b.jsxs)("p", {
                            className: Kr,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Yr,
                            children: (0,
                            b.jsx)(_n, {})
                        })]
                    }), (0,
                    b.jsx)(Zr, {
                        className: Gr
                    }), (0,
                    b.jsx)("div", {
                        className: P()(Wr, !_ && Hr),
                        children: (0,
                        b.jsx)(Mr, {})
                    })]
                })
            }
            ;
            const pn = "LandingPage_container__pU2cC"
              , hn = "LandingPage_resultOverlay__WSYZb"
              , xn = "LandingPage_disclaimer__pVRHC"
              , vn = "LandingPage_recordsBtnContainer__Anr4Y"
              , fn = "LandingPage_backgroundVideo__flTkH"
              , gn = "LandingPage_content__D0ZLW"
              , kn = "LandingPage_points__Ruq4j"
              , jn = "LandingPage_coinPrice__nJ0nj"
              , bn = "LandingPage_btnContainer__IEll8"
              , wn = "LandingPage_termsAndConditions__MdClU";
            var Cn = r(22387);
            const Nn = "UserPointCounter_pointCounter__-QAj8"
              , yn = "UserPointCounter_hide__o4qTQ"
              , On = "UserPointCounter_points__d3HeG"
              , Pn = "UserPointCounter_countdown__Z7xGo"
              , Zn = "UserPointCounter_title__B-gN-"
              , En = "UserPointCounter_value__2a23E";
            var Tn = ()=>{
                var e = Se().points
                  , t = (0,
                Cn.Z)(e)
                  , r = ze()
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
                var _ = (0,
                n.useCallback)(((e,t,r)=>{
                    e <= t && (r((0,
                    Qe.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var n = function(e, t) {
                            var r = t - e;
                            return Math.max(1, Math.floor(r / 10))
                        }(e, t);
                        _(e + n, t, r)
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
                        return _(0, e, n),
                        ()=>{}
                        ;
                    var a = setTimeout((()=>{
                        _(t || 0, e, n)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(a)
                    }
                }
                ), [_, e, t]),
                (0,
                b.jsxs)("div", {
                    className: Nn,
                    children: [(0,
                    b.jsxs)("p", {
                        className: P()(Zn, l && yn),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: i,
                        className: P()(On, l && yn),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: P()(Pn, !l && yn),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: En,
                            children: s
                        })]
                    })]
                })
            }
            ;
            const Sn = "ViewRecordsButton_button__MRo78"
              , Rn = "ViewRecordsButton_btnIcon__prKlS"
              , Ln = "ViewRecordsButton_title__obA3r"
              , In = "ViewRecordsButton_container__N3Rrb"
              , Bn = "ViewRecordsButton_recordContainer__ruZVu"
              , An = "ViewRecordsButton_recordField__dACwq"
              , Mn = "ViewRecordsButton_label__xt3Hw"
              , Fn = "ViewRecordsButton_value__lTHA5"
              , Dn = "ViewRecordsButton_trendIcon__3RV6P"
              , Un = "ViewRecordsButton_up__EC1B6"
              , Vn = "ViewRecordsButton_down__4PWTz"
              , Gn = "ViewRecordsButton_timestamp__P0JEp"
              , Wn = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , Hn = "ViewRecordsButton_description__F22UB";
            var Kn = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                b.jsxs)("div", {
                    className: An,
                    children: [(0,
                    b.jsx)("p", {
                        className: Mn,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: Fn,
                        children: r
                    })]
                })
            }
              , Xn = ()=>(0,
            b.jsxs)("button", {
                className: Sn,
                type: "button",
                onClick: ()=>{
                    var e = Ge().get(We) || []
                      , t = (0,
                    b.jsx)(b.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , n = Un
                              , a = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            n = Vn,
                            a = "okx-growth-trending-down"),
                            (0,
                            b.jsxs)("div", {
                                className: Bn,
                                children: [(0,
                                b.jsx)(Kn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    b.jsxs)(b.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        b.jsx)(E.Z, {
                                            className: P()(Dn, n),
                                            iconName: a
                                        })]
                                    })
                                }), (0,
                                b.jsx)(Kn, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                b.jsx)(Kn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                b.jsx)("p", {
                                    className: Gn,
                                    children: (0,
                                    Qe.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        b.jsxs)("div", {
                            className: Wn,
                            children: [(0,
                            b.jsx)("p", {
                                className: Ln,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            b.jsx)("p", {
                                className: Hn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = kt.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, bt), {}, {
                            topContent: e.title ? void 0 : (0,
                            b.jsx)("div", {
                                className: jt.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        b.jsx)("span", {
                            className: Ln,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: In,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                b.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Rn
                })]
            })
              , Yn = ()=>{
                var e = I().uid;
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
                b.jsxs)("div", {
                    className: pn,
                    children: [(0,
                    b.jsx)("div", {
                        className: vn,
                        children: (0,
                        b.jsx)(Xn, {})
                    }), (0,
                    b.jsx)("div", {
                        className: fn,
                        children: (0,
                        b.jsx)(Yt, {})
                    }), (0,
                    b.jsxs)("div", {
                        className: gn,
                        children: [(0,
                        b.jsx)("div", {
                            className: kn,
                            children: (0,
                            b.jsx)(Tn, {})
                        }), (0,
                        b.jsx)("div", {
                            className: jn,
                            children: (0,
                            b.jsx)(mn, {})
                        }), (0,
                        b.jsx)(mr, {
                            className: bn
                        })]
                    }), (0,
                    b.jsx)("button", {
                        className: wn,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(gt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    b.jsx)("p", {
                        className: xn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    b.jsx)(ht, {
                        className: hn
                    }), (0,
                    b.jsx)(Et, {})]
                })
            }
              , zn = ()=>(0,
            b.jsx)(Je, {
                children: (0,
                b.jsx)(Yn, {})
            })
              , Jn = r(24084)
              , Qn = r(58338);
            const qn = "PageTitle_title__IQ7TT";
            var $n = e=>{
                var t = e.html;
                return (0,
                b.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Qn.dU)(t)
                    },
                    className: qn
                })
            }
            ;
            const ea = "LeaderBoard_container__0DJSO"
              , ta = "LeaderBoard_desc__MFxC+"
              , ra = "LeaderBoard_inviteList__mV9a7"
              , na = "LeaderBoard_tabActiveClassName__7Xv4B"
              , aa = "LeaderBoard_tabsContent__KCGtW"
              , sa = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var ia = e=>{
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: P()(sa, t)
                })
            }
            ;
            const oa = "InviteButton_invite-btn__aAMio"
              , ca = "InviteButton_btn-a__At-wO"
              , la = "InviteButton_btn-container__sYDy5"
              , ua = "InviteButton_copyButton__znucI"
              , da = "InviteButton_copyIcon__QZgE9";
            var _a = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , n = e.className
                  , a = I().uid
                  , s = (e=>{
                    var t = new ee.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , n = "https://t.me/".concat(xt.BOT_NAME, "/").concat(xt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: n,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(n), "&text=").concat(r)
                    }
                }
                )(Se().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: P()(n, la),
                    children: [(0,
                    b.jsx)("a", {
                        className: ca,
                        href: i,
                        children: (0,
                        b.jsx)(Ot, {
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
                            className: oa,
                            text: r
                        })
                    }), (0,
                    b.jsx)(Ct.default, {
                        strictCircle: !0,
                        category: Ct.default.CATEGORY.fill,
                        type: Ct.default.TYPE.primary,
                        size: Ct.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(o),
                                re(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                re(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: ua,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: da
                        })
                    })]
                })
            }
            ;
            const ma = "RankList_listItem__qJvXJ"
              , pa = "RankList_name__sxTWa"
              , ha = "RankList_mask__ldBi8"
              , xa = "RankList_hightLightRow__xYkeg"
              , va = "RankList_listHeader__KVGnw"
              , fa = "RankList_rank__k2m5R"
              , ga = "RankList_icon__1-SRV"
              , ka = "RankList_point__D5mVw"
              , ja = "RankList_pointIcon__k80Wy"
              , ba = "RankList_InviteButton__D6ute"
              , wa = "RankList_noFirendsNote__Ckkil"
              , Ca = "RankList_under__MJ5We"
              , Na = "RankList_rankItemPlaceholder__z-upW"
              , ya = "RankList_rank-name__YEqnc"
              , Oa = "RankList_rank-score__gtI+m";
            var Pa = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Za = 1
              , Ea = 2
              , Ta = e=>{
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: va,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Qe.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Sa = ()=>(0,
            b.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                b.jsxs)("div", {
                    className: Na,
                    children: [(0,
                    b.jsx)(ia, {
                        className: ya
                    }), (0,
                    b.jsx)(ia, {
                        className: Oa
                    })]
                }, t)))
            })
              , Ra = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: P()(ma, r && xa),
                    children: [(0,
                    b.jsx)("div", {
                        className: ha
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: P()(fa, ga),
                        children: Pa[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: fa,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: pa,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: ka,
                        children: [(0,
                        b.jsx)("span", {
                            className: ja,
                            children: Pa[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Qe.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , La = e=>{
                var t = e.pageType
                  , r = void 0 === t ? Za : t
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
                  , m = _[0]
                  , p = _[1]
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
                  , j = k[0]
                  , w = k[1]
                  , C = (0,
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
                                    r !== Za) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    we(n);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Ce(n);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (p(a.rows),
                                    f(a.total),
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
                }(), [r])
                  , N = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                n.useEffect)((()=>{
                    C(1)
                }
                ), [C]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(Ta, {
                        total: v
                    }), i ? (0,
                    b.jsx)(Sa, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [N && (0,
                        b.jsx)(Ra, {
                            item: j,
                            isHighlight: !0
                        }), m.map(((e,t)=>(0,
                        b.jsx)(Ra, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    b.jsx)("div", {
                        className: Ca
                    }), r === Za && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === m.length && (0,
                        b.jsx)("div", {
                            className: wa,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        b.jsx)(_a, {
                            className: ba,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Ia = ()=>(0,
            b.jsxs)("div", {
                className: ea,
                children: [(0,
                b.jsx)($n, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        Z.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                b.jsx)("div", {
                    className: ta,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                b.jsxs)(Jn.Z, {
                    activeClassName: na,
                    noPadding: !0,
                    size: Jn.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    b.jsx)(Jn.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: Za,
                        className: aa,
                        children: (0,
                        b.jsx)("div", {
                            className: ra,
                            children: (0,
                            b.jsx)(La, {
                                pageType: Za
                            })
                        })
                    }), (0,
                    b.jsx)(Jn.Z.TabPane, {
                        className: aa,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: Ea,
                        children: (0,
                        b.jsx)("div", {
                            className: ra,
                            children: (0,
                            b.jsx)(La, {
                                pageType: Ea
                            })
                        })
                    })]
                })]
            });
            const Ba = "QrCode_container__r4Fu7"
              , Aa = "QrCode_qrCode__16PWa"
              , Ma = "QrCode_title__+cibb"
              , Fa = "QrCode_message__eaOzW";
            var Da = ()=>(0,
            b.jsxs)("div", {
                className: Ba,
                children: [(0,
                b.jsx)(Tt.Z, {
                    className: Aa,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                b.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Qn.dU)((0,
                        Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Ma
                }), (0,
                b.jsx)("p", {
                    className: Fa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , Ua = r(90534);
            const Va = "PullupList_loading__+51Dh"
              , Ga = "PullupList_listLoadItem__XcvkH"
              , Wa = "PullupList_listLeft__4eGh6"
              , Ha = "PullupList_listRight__w7Ely"
              , Ka = "PullupList_listLoading__whJeg";
            var Xa = ()=>(0,
            b.jsxs)("div", {
                className: P()(Ga),
                children: [(0,
                b.jsx)(ia, {
                    className: Wa
                }), (0,
                b.jsx)(ia, {
                    className: Ha
                })]
            })
              , Ya = ()=>(0,
            b.jsx)("div", {
                className: Ka,
                children: Array(3).fill(null).map(((e,t)=>(0,
                b.jsx)(Xa, {}, t)))
            })
              , za = e=>{
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
                  , m = _[0]
                  , p = _[1]
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
                  , j = function() {
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
                                    return p(!0),
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
                Ua.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = e=>{
                    e[0].isIntersecting && !m && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                n.useEffect)((()=>{
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
                n.useEffect)((()=>{
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    b.jsx)("div", {
                        className: Va,
                        ref: x,
                        children: m && (0,
                        b.jsx)(Ya, {})
                    })]
                })
            }
            ;
            const Ja = "InviteList_listItem__q4jhG"
              , Qa = "InviteList_name__LLQgt"
              , qa = "InviteList_point__kXtCn"
              , $a = "InviteList_earnedPrice__4vAfw"
              , es = "InviteList_pointNumber__v4P1H";
            var ts = ()=>{
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
                        var n, s;
                        return (0,
                        c.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        pageNo: t
                                    },
                                    r && r >= 0 && (n.total = r),
                                    e.next = 4,
                                    be(n);
                                case 4:
                                    return (s = e.sent) && a(s.accumPoints),
                                    e.abrupt("return", s);
                                case 7:
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
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: $a,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: es,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Qe.uf)(r)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(za, {
                        loadData: s,
                        children: (e,t)=>(0,
                        b.jsxs)("div", {
                            className: Ja,
                            children: [(0,
                            b.jsx)("div", {
                                className: Qa,
                                children: e.extInviteeName
                            }), (0,
                            b.jsx)("div", {
                                className: qa,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    Qe.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const rs = "ReferralsPage_container__V48m1"
              , ns = "ReferralsPage_inviteDetail__L1MhM"
              , as = "ReferralsPage_detailItem__ujOp+"
              , ss = "ReferralsPage_dot__zKW7L"
              , is = "ReferralsPage_detailTitle__OE657"
              , os = "ReferralsPage_detailInfo__YC+Y9"
              , cs = "ReferralsPage_inviteList__Jksx8";
            var ls = ()=>{
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
                b.jsxs)("div", {
                    className: rs,
                    children: [(0,
                    b.jsx)($n, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    b.jsx)("div", {
                        className: ns,
                        children: t.map((e=>(0,
                        b.jsxs)("div", {
                            className: as,
                            children: [(0,
                            b.jsx)("div", {
                                className: ss
                            }), (0,
                            b.jsx)("div", {
                                className: is,
                                children: e.title
                            }), (0,
                            b.jsx)("div", {
                                className: os,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    b.jsx)("div", {
                        className: cs,
                        children: (0,
                        b.jsx)(ts, {})
                    }), (0,
                    b.jsx)(_a, {})]
                })
            }
            ;
            const us = "Tag_tag__tkWly";
            var ds, _s, ms, ps, hs, xs, vs, fs, gs = e=>{
                var t = e.text
                  , r = e.className;
                return (0,
                b.jsx)("span", {
                    className: P()(us, r),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
            , ks = ["title", "titleId"];
            function js() {
                return js = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                js.apply(this, arguments)
            }
            function bs(e, t) {
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
            function ws(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = bs(e, ks);
                return n.createElement("svg", js({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, ds || (ds = n.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), _s || (_s = n.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ms || (ms = n.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ps || (ps = n.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), hs || (hs = n.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), xs || (xs = n.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), vs || (vs = n.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), fs || (fs = n.createElement("defs", null, n.createElement("filter", {
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
            var Cs = n.forwardRef(ws);
            r.p;
            const Ns = "index_container__DxcAz"
              , ys = "index_logo__h1T0A"
              , Os = "index_tlt__dqJHn"
              , Ps = "index_subtlt__m3p5l";
            var Zs = ()=>(0,
            b.jsxs)("div", {
                className: Ns,
                children: [(0,
                b.jsx)(Cs, {
                    className: ys
                }), (0,
                b.jsx)("div", {
                    className: Os,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                b.jsx)("div", {
                    className: Ps,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Es = a().memo(Zs);
            var Ts, Ss = ["title", "titleId"];
            function Rs() {
                return Rs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Rs.apply(this, arguments)
            }
            function Ls(e, t) {
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
            function Is(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Ls(e, Ss);
                return n.createElement("svg", Rs({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Ts || (Ts = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Bs = n.forwardRef(Is);
            r.p;
            var As, Ms = ["title", "titleId"];
            function Fs() {
                return Fs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Fs.apply(this, arguments)
            }
            function Ds(e, t) {
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
            function Us(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Ds(e, Ms);
                return n.createElement("svg", Fs({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, As || (As = n.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Vs = n.forwardRef(Us);
            r.p;
            var Gs, Ws = ["title", "titleId"];
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
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Gs || (Gs = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Ys = n.forwardRef(Xs);
            r.p;
            var zs = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Js = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
            function Qs(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: zs.SIGNUP,
                    status: Js(zs.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: zs.INSTALL,
                    status: Js(zs.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: zs.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: zs.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var qs = e=>{
                var t = (0,
                n.useState)(Qs(e))
                  , r = (0,
                u.Z)(t, 2)
                  , a = r[0]
                  , s = r[1]
                  , i = I().uid;
                (0,
                n.useEffect)((()=>{
                    s(Qs(e))
                }
                ), [e]);
                var o = (0,
                n.useCallback)((t=>{
                    var r, n, o = a.find((e=>e.type === t));
                    if (o) {
                        switch (null === (r = window) || void 0 === r || null === (n = r.Telegram) || void 0 === n || n.WebApp.openLink(o.url),
                        t) {
                        case zs.SIGNUP:
                        case zs.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Qs(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case zs.SIGNUP:
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
                        case zs.INSTALL:
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
                        case zs.CONNECT:
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
                        case zs.KYC:
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
            const $s = "index_container__ZAgXf"
              , ei = "index_container_avatar__HvLrA"
              , ti = "index_container_task__OmqjX"
              , ri = "index_task_tlt__pIkV2"
              , ni = "index_tlt_sub__2aRiA"
              , ai = "index_tlt_arrow__kdbln"
              , si = "index_task_subtlt__mzIaE";
            var ii = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: ei,
                    children: r ? (0,
                    b.jsx)(Ys, {}) : (0,
                    b.jsx)(Vs, {})
                })
            }
              , oi = e=>{
                var t = e.title
                  , r = e.subTitle
                  , n = e.type
                  , a = e.onClick
                  , s = e.status;
                return (0,
                b.jsxs)("div", {
                    className: ti,
                    onClick: ()=>{
                        a(n)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: ri,
                        children: [(0,
                        b.jsx)(ii, {
                            status: s
                        }), " ", (0,
                        b.jsx)("div", {
                            className: ni,
                            children: t
                        }), (0,
                        b.jsx)(Bs, {
                            className: ai
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: si,
                        children: r
                    })]
                })
            }
            ;
            const ci = e=>{
                var t = qs(e)
                  , r = t.list
                  , n = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: $s,
                    children: r.map((e=>(0,
                    b.jsx)(oi, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: n
                    }), e.type)))
                })
            }
            ;
            var li, ui, di, _i = ["title", "titleId"];
            function mi() {
                return mi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                mi.apply(this, arguments)
            }
            function pi(e, t) {
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
            function hi(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = pi(e, _i);
                return n.createElement("svg", mi({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, li || (li = n.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), ui || (ui = n.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), di || (di = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var xi = n.forwardRef(hi);
            r.p;
            const vi = "index_loader__kDy+9"
              , fi = "index_container__X8xX8"
              , gi = "index_container_subtlt__LyYby"
              , ki = "index_container_info__c9KQP"
              , ji = "index_info_icon__i5uhI"
              , bi = "index_container_btn__rWex7"
              , wi = "index_tncContainer__McO06"
              , Ci = "index_termsAndConditions__Gifk+"
              , Ni = "index_autoPilotTask__tP9yX"
              , yi = "index_autoPilotIcon__334Cy"
              , Oi = "index_autoPilotTitle__7zwDH"
              , Pi = "index_newTag__h508t"
              , Zi = "index_autoPilotDesc__D59sa";
            var Ei = ()=>(0,
            b.jsx)(Es, {})
              , Ti = e=>(0,
            b.jsxs)("div", {
                className: fi,
                children: [(0,
                b.jsx)($n, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_title_ready_surprises")
                }), (0,
                b.jsx)("div", {
                    className: gi,
                    children: (0,
                    Z.O4)("ok_game_okxracer_text_autodrive_complete_steps")
                }), (0,
                b.jsxs)("div", {
                    className: Ni,
                    children: [(0,
                    b.jsx)("div", {
                        className: yi,
                        children: "\ud83d\udede"
                    }), (0,
                    b.jsxs)("div", {
                        children: [(0,
                        b.jsxs)("div", {
                            className: Oi,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_title_autodriving"), (0,
                            b.jsx)(gs, {
                                className: Pi
                            })]
                        }), (0,
                        b.jsx)("div", {
                            className: Zi,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_play_away")
                        })]
                    })]
                }), (0,
                b.jsx)(ci, (0,
                k.Z)({}, e)), (0,
                b.jsxs)("div", {
                    className: ki,
                    children: [(0,
                    b.jsx)(xi, {
                        className: ji,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                b.jsx)(Ot, {
                    onClick: e.onClick,
                    className: bi,
                    text: (0,
                    Z.O4)("ok_game_okxracer_surprises_verify")
                }), (0,
                b.jsx)("div", {
                    className: wi,
                    children: (0,
                    b.jsx)("button", {
                        className: Ci,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(gt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , Si = ()=>{
                var e = I().uid
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
                  , m = (0,
                n.useCallback)((0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    var t, r, n = arguments;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] && n[0],
                                e.prev = 1,
                                e.next = 4,
                                Ee();
                            case 4:
                                r = e.sent,
                                s(!1),
                                r && _(r),
                                !t || null !== r && void 0 !== r && r.isKyc && r.isConnectTelegram || re(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1),
                                re(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 10]])
                }
                ))), []);
                return (0,
                n.useEffect)((()=>{
                    function e() {
                        document.hidden || m()
                    }
                    return m(),
                    document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [m]),
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
                b.jsx)("div", {
                    className: vi,
                    children: (0,
                    b.jsx)(gr.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                b.jsx)(Ei, {}) : (0,
                b.jsx)(Ti, (0,
                k.Z)((0,
                k.Z)({}, d), {}, {
                    onClick: ()=>{
                        m(!0),
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
              , Ri = (0,
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
              , Li = ()=>(0,
            n.useContext)(Ri)
              , Ii = e=>{
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
                  , m = d[1]
                  , p = Se().updateGameInfoFromServer
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
                                Promise.allSettled([ye(), Pe()]);
                            case 2:
                                "fulfilled" === (n = e.sent)[0].status && i(null !== (t = n[0].value.data) && void 0 !== t ? t : []),
                                "fulfilled" === n[1].status && m(null !== (r = n[1].value.data) && void 0 !== r ? r : []);
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
                                    Oe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([ye(), p()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && i(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ne(e.t0);
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
                                    Ze({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Pe(), p()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && m(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ne(e.t0);
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
                b.jsx)(Ri.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: v
                    },
                    children: t
                })
            }
              , Bi = e=>(null === e || void 0 === e ? void 0 : e.type) === ft.DailyBoost
              , Ai = e=>"actionType"in e && e.actionType === Ne.UnLock
              , Mi = e=>{
                var t = e.pointCost
                  , r = e.curStage
                  , n = e.totalStage;
                return !Bi(e) && r >= n ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                Qe.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const Fi = "index_sheet__FbHHx"
              , Di = "index_sheet-icon__H2xCV"
              , Ui = "index_boostSheetTag__NbYFf"
              , Vi = "index_sheet-title__RInQ-"
              , Gi = "index_sheet-desc__W9myB"
              , Wi = "index_sheet-data__FALtV"
              , Hi = "index_sheet-point__Xrsvs"
              , Ki = "index_sheet-lvl__f1+W-"
              , Xi = "index_lockBtnContainer__4DPO7"
              , Yi = "index_btn__bxKiJ"
              , zi = "index_boost-data-split-point__TaGIo";
            var Ji = e=>{
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
                  , _ = Ai(a)
                  , m = !1
                  , p = u
                  , h = d;
                return _ && (o ? (p = a.unlockDescription,
                h = a.unlockButtonText) : p = a.ruleDescription,
                s === i && (m = !0,
                h = a.activatedButtonText)),
                (0,
                b.jsxs)("div", {
                    className: Fi,
                    children: [(0,
                    b.jsx)("div", {
                        className: Di,
                        children: c
                    }), _ && (0,
                    b.jsx)(gs, {
                        className: Ui
                    }), (0,
                    b.jsx)("div", {
                        className: Vi,
                        children: l
                    }), (0,
                    b.jsx)("div", {
                        className: Gi,
                        children: p
                    }), (0,
                    b.jsxs)("div", {
                        className: Wi,
                        children: [(0,
                        b.jsx)("span", {
                            className: Hi,
                            children: Mi(t)
                        }), (Bi(t) || s < i) && (0,
                        b.jsx)("span", {
                            className: zi
                        }), (0,
                        b.jsx)("span", {
                            className: Ki,
                            children: Bi(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    b.jsx)(z, {
                        to: U,
                        className: Xi,
                        children: (0,
                        b.jsx)(Ot, {
                            text: h
                        })
                    }) : (0,
                    b.jsx)(Ot, {
                        onClick: ()=>{
                            r(t)
                        }
                        ,
                        className: Yi,
                        text: h,
                        disabled: m
                    })]
                })
            }
            ;
            const Qi = "index_boost-item__k6pnm"
              , qi = "index_boost-icon__wH6Dh"
              , $i = "index_boost-title__9R-Ry"
              , eo = "index_newTag__tgIea"
              , to = "index_boost-desc__k1Big"
              , ro = "index_boost-data__+0cnG"
              , no = "index_boost-data-split-point__moT+k"
              , ao = "index_boost-data-stage__8CAgC"
              , so = "index_boostItemPlaceholder__NaUkk"
              , io = "index_locked__sM-YP"
              , oo = "index_unlockIcon__whxqz"
              , co = "index_unlockButton__C3EY5";
            var lo = e=>{
                var t = e.boost
                  , r = t.curStage
                  , n = t.totalStage
                  , a = t.isLocked
                  , s = t.context;
                if (Ai(s)) {
                    if (a)
                        return (0,
                        b.jsx)("div", {
                            className: ro,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (r === n)
                        return (0,
                        b.jsx)("div", {
                            className: ro,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                b.jsxs)("div", {
                    className: ro,
                    children: [(0,
                    b.jsx)("span", {
                        children: Mi(t)
                    }), (Bi(t) || r < n) && (0,
                    b.jsx)("span", {
                        className: no
                    }), (0,
                    b.jsx)("span", {
                        className: ao,
                        children: Bi(t) ? "".concat(n - r, "/").concat(n) : "Lvl ".concat(r)
                    })]
                })
            }
              , uo = e=>{
                var t = e.boost
                  , r = e.onClick
                  , n = t.id
                  , a = t.context
                  , s = t.isLocked
                  , i = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = Ai(a);
                return (0,
                b.jsxs)("div", {
                    className: Qi,
                    onClick: ()=>{
                        r(n)
                    }
                    ,
                    children: [(0,
                    b.jsx)("div", {
                        className: qi,
                        children: i
                    }), (0,
                    b.jsxs)("div", {
                        className: $i,
                        children: [o, l && (0,
                        b.jsx)(gs, {
                            className: eo
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: to,
                        children: c
                    }), (0,
                    b.jsx)(lo, {
                        boost: t
                    }), s && (0,
                    b.jsxs)("div", {
                        className: io,
                        children: [(0,
                        b.jsx)(E.Z, {
                            className: P()("okx-growth-lock", oo)
                        }), (0,
                        b.jsx)(Ct.default, {
                            category: Ct.default.CATEGORY.text,
                            type: Ct.default.TYPE.primary,
                            size: Ct.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: Ct.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: co,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, n)
            }
              , _o = ()=>(0,
            b.jsxs)("div", {
                className: P()(Qi, so),
                children: [(0,
                b.jsx)(ia, {
                    className: qi
                }), (0,
                b.jsx)(ia, {
                    className: $i
                }), (0,
                b.jsx)(ia, {
                    className: to
                }), (0,
                b.jsx)(ia, {
                    className: ro
                })]
            });
            const mo = "index_boost-item-container__SW62L"
              , po = "index_boost-item-padding__IwiTB";
            var ho = e=>{
                var t = e.onClick
                  , r = Li().boosts
                  , a = (0,
                n.useCallback)((e=>{
                    var n = r.find((t=>t.id === e));
                    n && t(n)
                }
                ), [r, t]);
                return (0,
                b.jsxs)("div", {
                    className: mo,
                    children: [(0,
                    b.jsx)("div", {
                        className: po
                    }), r.length > 0 ? (0,
                    b.jsx)(b.Fragment, {
                        children: r.map((e=>(0,
                        b.jsx)(uo, {
                            boost: e,
                            onClick: a
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)(_o, {}), (0,
                        b.jsx)(_o, {}), (0,
                        b.jsx)(_o, {})]
                    }), (0,
                    b.jsx)("div", {
                        className: po
                    })]
                })
            }
            ;
            const xo = "BoostArea_boosts-title__hkjWn"
              , vo = "BoostArea_boost-area__AMJbh"
              , fo = "BoostArea_container__qLJSQ";
            var go = ()=>{
                var e = Li()
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
                  , m = _[0]
                  , p = _[1]
                  , h = Se().points
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
                                    re(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(n) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    re(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    r(t.id);
                                case 11:
                                    e.sent && re(!0);
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
                n.useCallback)((e=>{
                    p(!0),
                    o(e)
                }
                ), []);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: xo,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsx)("div", {
                        className: vo,
                        children: (0,
                        b.jsxs)("div", {
                            className: fo,
                            children: [(0,
                            b.jsx)(ho, {
                                onClick: v
                            }), (0,
                            b.jsx)(wt, {
                                visible: m,
                                onClose: ()=>{
                                    p(!1)
                                }
                                ,
                                children: i && (0,
                                b.jsx)(Ji, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const ko = "TaskArea_tasks-title__tN1pb"
              , jo = "TaskArea_container__Iz7a-"
              , bo = "TaskArea_task-item__w79wY"
              , wo = "TaskArea_item-left__1r6mY"
              , Co = "TaskArea_item-right__lk7YG"
              , No = "TaskArea_icon__RfKa0"
              , yo = "TaskArea_title__OyXme"
              , Oo = "TaskArea_state__d9FdX"
              , Po = "TaskArea_sheet-container__lottt"
              , Zo = "TaskArea_sheet-name__CibLI"
              , Eo = "TaskArea_sheet-desc__aaGRQ"
              , To = "TaskArea_btn__HU6oE"
              , So = "TaskArea_done__fmgjd"
              , Ro = "TaskArea_taskItemPlaceholder__JXSdR"
              , Lo = "TaskArea_task__cxfzp";
            var Io = ()=>{
                var e = Li()
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
                  , _ = (0,
                u.Z)(d, 2)
                  , m = _[0]
                  , p = _[1]
                  , h = (0,
                Ua.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == vt.finished)
                            return;
                        o(r),
                        p(!0)
                    }
                }
                ), {
                    wait: 500
                }).run
                  , x = function() {
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
                                    e.sent && re(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    p(!1);
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
                  , v = ()=>(0,
                b.jsx)("div", {
                    children: Array.from({
                        length: 2
                    }).map(((e,t)=>(0,
                    b.jsx)("div", {
                        className: P()(Ro),
                        children: (0,
                        b.jsx)(ia, {
                            className: Lo
                        })
                    }, t)))
                });
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: ko,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_tasks"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsxs)("div", {
                        className: jo,
                        children: [t.length > 0 ? t.map((e=>e && (e=>{
                            var t = e.id
                              , r = e.points
                              , n = e.state
                              , a = e.context;
                            return (0,
                            b.jsxs)("div", {
                                className: bo,
                                onClick: ()=>{
                                    h(t)
                                }
                                ,
                                children: [(0,
                                b.jsxs)("div", {
                                    className: wo,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: yo,
                                        children: a.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Oo,
                                        children: " ".concat(n === vt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                        Qe.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0,
                                b.jsx)("div", {
                                    className: Co,
                                    children: n === vt.finished ? (0,
                                    b.jsx)("div", {
                                        className: So,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_done")
                                    }) : (0,
                                    b.jsx)(E.Z, {
                                        className: P()("okx-growth-chevrons-right", No)
                                    })
                                })]
                            }, t)
                        }
                        )(e))) : (0,
                        b.jsx)(v, {}), i && (0,
                        b.jsx)(wt, {
                            noContentPadding: !0,
                            visible: m,
                            onClose: ()=>{
                                p(!1)
                            }
                            ,
                            children: (()=>{
                                var e = i.context
                                  , t = e.desc
                                  , r = e.btnText;
                                return (0,
                                b.jsxs)("div", {
                                    className: Po,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: Zo,
                                        children: e.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Eo,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Qn.dU)(t)
                                        }
                                    }), (0,
                                    b.jsx)(Ot, {
                                        className: To,
                                        onClick: ()=>x(i),
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
            const Bo = "TaskPage_container__5KfIM"
              , Ao = "TaskPage_block__kt8oo"
              , Mo = "TaskPage_block-boost__QYQXL"
              , Fo = "TaskPage_points-title__4hW9Y"
              , Do = "TaskPage_points-content__+yK3g";
            var Uo = ()=>{
                var e = Se().points;
                return (0,
                b.jsxs)("div", {
                    className: Bo,
                    children: [(0,
                    b.jsx)("div", {
                        className: Ao,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: Fo,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: Do,
                                children: qe.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    b.jsx)("div", {
                        className: Mo,
                        children: (0,
                        b.jsx)(go, {})
                    }), (0,
                    b.jsx)("div", {
                        className: Ao,
                        children: (0,
                        b.jsx)(Io, {})
                    })]
                })
            }
              , Vo = ()=>(0,
            b.jsx)(Ii, {
                children: (0,
                b.jsx)(Uo, {})
            })
              , Go = ()=>{
                var e = (0,
                n.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , a = t[1]
                  , i = I().uid
                  , o = (0,
                n.useMemo)(x, []);
                (0,
                n.useMemo)((()=>{
                    m.Z.setConfig({
                        popupClassName: "theme-dark"
                    }),
                    p.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var h = $().hasWebviewProxy;
                (0,
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
                                        d.d)(o);
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
                ), [o]);
                var k = true;
                return (0,
                b.jsx)("article", {
                    className: P()(v, "theme-dark"),
                    children: (0,
                    b.jsx)(_.Z, {
                        localeData: r,
                        fetchConfig: o,
                        children: k ? (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(Ae, {
                                children: (0,
                                b.jsx)(Re, {
                                    children: (0,
                                    b.jsx)(De, {
                                        children: (0,
                                        b.jsx)("main", {
                                            className: g,
                                            children: (0,
                                            b.jsxs)(s.Switch, {
                                                children: [(0,
                                                b.jsx)(s.Route, {
                                                    path: A,
                                                    component: w(zn),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: D,
                                                    component: N(Ia),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: F,
                                                    component: w(Vo),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: M,
                                                    component: N(ls),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: U,
                                                    component: N(Si),
                                                    exact: !0
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            b.jsx)("div", {
                                className: f,
                                children: (0,
                                b.jsx)(Q, {})
                            })]
                        }) : (0,
                        b.jsx)(Da, {})
                    })
                })
            }
              , Wo = document.getElementById("root");
            if (Wo) {
                var Ho = (0,
                b.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    b.jsx)(B, {
                        children: (0,
                        b.jsx)(Go, {})
                    })
                });
                (0,
                i.createRoot)(Wo).render(Ho)
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
    var n = r.O(void 0, [3231, 5825, 9824, 5890, 4128, 7569, 3599, 4084, 4148, 3020, 1973], (()=>r(74085)));
    n = r.O(n)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.06c01e49.js.map
