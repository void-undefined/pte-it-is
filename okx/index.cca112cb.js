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
              , d = r(95640)
              , _ = r.n(d)
              , m = r(46541)
              , p = r(1677)
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
              , j = "App_content__Jjurs";
            var b = r(28683);
            const w = "NoPaddingLayout_no-padding-layout__6LAKV";
            var C = r(45263)
              , N = e=>t=>(0,
            C.jsx)("div", {
                className: w,
                children: (0,
                C.jsx)(e, (0,
                b.Z)({}, t))
            });
            const y = "ComPaddingLayout_common-padding-layout__0gGbM";
            var O = e=>t=>(0,
            C.jsx)("div", {
                className: y,
                children: (0,
                C.jsx)(e, (0,
                b.Z)({}, t))
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
                C.jsx)(L.Provider, {
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
                    className: _()(G, i && W),
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
              , Q = ()=>{
                var e = {
                    telegramid: I().uid
                };
                return (0,
                C.jsxs)("div", {
                    className: V,
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
            function q(e) {
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
              , me = function() {
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
              , pe = function() {
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
                postForm: pe,
                delete: me
            };
            function xe(e, t) {
                var r, n;
                return he.get(e, (0,
                b.Z)((0,
                b.Z)({}, t || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (n = r.WebApp) || void 0 === n ? void 0 : n.initData) || ""
                    }
                }))
            }
            function ve(e, t, r) {
                var n, a;
                return he.post(e, t, (0,
                b.Z)((0,
                b.Z)({}, r || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (n = window.Telegram) || void 0 === n || null === (a = n.WebApp) || void 0 === a ? void 0 : a.initData) || ""
                    }
                }))
            }
            var fe = "/priapi/v1/affiliate"
              , ge = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(fe, "/game/racer/info"), t));
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
              , ke = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(fe, "/game/racer/assess"), t));
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
                    var r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                xe("".concat(fe, "/game/racer/invitee-list"), {
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
                                xe("".concat(fe, "/game/racer/leaderboard/friends"), {
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
                                re(e.t0),
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
                                xe("".concat(fe, "/game/racer/leaderboard/global"), {
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
                                re(e.t0),
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
              , Ce = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e
            }({})
              , Ne = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", xe("".concat(fe, "/game/racer/boosts")));
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
              , ye = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(fe, "/game/racer/boost"), t));
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
              , Oe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", xe("".concat(fe, "/game/racer/tasks")));
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
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(fe, "/game/racer/task"), t));
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
                c.Z)().mark((function e() {
                    var t, r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ve("".concat(fe, "/game/racer/account-binding"), {});
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
              , Ee = (0,
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
              , Te = ()=>(0,
            n.useContext)(Ee)
              , Se = e=>{
                var t, r = e.children, a = (0,
                n.useState)(0), s = (0,
                u.Z)(a, 2), i = s[0], o = s[1], d = (0,
                n.useState)(0), _ = (0,
                u.Z)(d, 2), m = _[0], p = _[1], h = (0,
                n.useState)(0), x = (0,
                u.Z)(h, 2), v = x[0], f = x[1], g = (0,
                n.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], b = k[1], w = (0,
                n.useState)(""), N = (0,
                u.Z)(w, 2), y = N[0], O = N[1], P = (0,
                n.useState)(!0), E = (0,
                u.Z)(P, 2), T = E[0], S = E[1], R = I(), L = R.username, B = R.startParam, A = (0,
                n.useState)(""), M = (0,
                u.Z)(A, 2), F = M[0], D = M[1], U = (0,
                n.useState)(!1), V = (0,
                u.Z)(U, 2), G = V[0], W = V[1], H = (0,
                n.useState)(0), K = (0,
                u.Z)(H, 2), X = K[0], Y = K[1], z = null !== (t = new $.Z((B || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", J = (0,
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
                                ge({
                                    extUserName: L,
                                    linkCode: z
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (o(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                p(r.numChances),
                                b(r.secondToRefresh),
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
                ))), [z, L]);
                (0,
                n.useEffect)((()=>{
                    J()
                }
                ), [J]),
                (0,
                n.useEffect)((()=>{
                    var e = new ee.Z(j);
                    return j > 0 ? (e.start(),
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
                    b(e.secondToRefresh)
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
                  , re = (0,
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
                    hideAutopilotSheet: re
                })), [T, i, m, v, F, Q, y, q, G, X, re]);
                return (0,
                C.jsx)(Ee.Provider, {
                    value: ne,
                    children: r
                })
            }
              , Re = r(8031);
            var Le = new class {
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
                    this.connection = new Re.Z({
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
              , Ie = (0,
            n.createContext)(Le)
              , Be = e=>{
                var t = e.children;
                return (0,
                C.jsx)(Ie.Provider, {
                    value: Le,
                    children: t
                })
            }
              , Ae = (0,
            n.createContext)(null)
              , Me = ()=>(0,
            n.useContext)(Ae)
              , Fe = e=>{
                var t = e.children
                  , r = (0,
                n.useState)(null)
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useContext)(Ie);
                return (0,
                n.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                C.jsx)(Ae.Provider, {
                    value: s,
                    children: t
                })
            }
              , De = r(46430)
              , Ue = "racer"
              , Ve = ()=>{
                var e;
                if (!(0,
                ne.y)())
                    return De.Z.getInstance(Ue) || De.Z.init({
                        project: Ue
                    }),
                    null !== (e = De.Z.getInstance(Ue)) && void 0 !== e ? e : De.Z
            }
              , Ge = "guessRecords_new";
            function We(e) {
                var t = Ve().get(Ge) || [];
                t.unshift(e),
                Ve().set(Ge, t.slice(0, 5))
            }
            var He = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Ke = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: He.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: He.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Xe = (0,
            n.createContext)(Ke)
              , Ye = ()=>(0,
            n.useContext)(Xe)
              , ze = e=>{
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
                  , b = k[1]
                  , w = (0,
                n.useState)(He.NONE)
                  , N = (0,
                u.Z)(w, 2)
                  , y = N[0]
                  , O = N[1]
                  , P = Me()
                  , E = Te().updateGameInfo
                  , T = (0,
                n.useRef)(He.NONE)
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
                                t = T.current === He.UP ? 1 : 0,
                                e.next = 4,
                                ke({
                                    predict: t
                                });
                            case 4:
                                r = e.sent,
                                (n = r.data) && (b(n.won),
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
                                We({
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
                                b(null),
                                B.current = null,
                                te(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                T.current = He.NONE,
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
                            O(P === v ? He.NONE : e ? He.UP : He.DOWN)
                        } else
                            f(P)
                }
                ), [v, i, P]);
                var D = (0,
                n.useCallback)((e=>{
                    b(null),
                    o(!0),
                    T.current = e,
                    B.current = null;
                    var t = {
                        telegramid: r
                    };
                    e === He.UP && function() {
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
                    e === He.DOWN && function() {
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
                C.jsx)(Xe.Provider, {
                    value: U,
                    children: t
                })
            }
              , Je = r(94595)
              , Qe = r(96450)
              , qe = 2e3
              , $e = 500;
            function et(e) {
                return (Math.abs(e) < 1e-4 ? Qe.yx.ceilTruncate : Qe.yx.floorTruncate)(e, 4)
            }
            const tt = "GuessResult_container__ECdpL"
              , rt = "GuessResult_title__fzYxg"
              , nt = "GuessResult_multiplier__yRHWm"
              , at = "GuessResult_description__R2fup"
              , st = "GuessResult_detailsIcon__ZE7Ry"
              , it = "GuessResult_changeRateContainer__a5-N7"
              , ot = "GuessResult_label__+b5Nz"
              , ct = "GuessResult_changeRate__yhVz3"
              , lt = "GuessResult_up__5vYDR"
              , ut = "GuessResult_down__fa-oP"
              , dt = "GuessResult_priceChange__xr6e8"
              , _t = "GuessResult_price__Vk+bY";
            function mt(e) {
                return (0,
                Je.xG)((0,
                Je.uf)(Qe.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var pt = e=>{
                var t = e.className
                  , r = Ye()
                  , a = r.result
                  , s = r.multiplier
                  , i = r.changeRate
                  , o = r.prevPrice
                  , c = r.currentPrice
                  , l = (0,
                n.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , m = d[0]
                  , p = d[1];
                return (0,
                n.useEffect)((()=>{
                    var e, t;
                    if (null !== a) {
                        var r, n, s, i;
                        if (null !== (r = window) && void 0 !== r && null !== (n = r.Telegram) && void 0 !== n && n.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, a ? "success" : "error");
                        e = setTimeout((()=>{
                            p(!0),
                            t = setTimeout((()=>{
                                p(!1)
                            }
                            ), qe)
                        }
                        ), $e)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [a]),
                (0,
                C.jsx)(C.Fragment, {
                    children: m && (0,
                    C.jsxs)("div", {
                        className: _()(t, tt),
                        children: [(0,
                        C.jsx)("p", {
                            className: nt,
                            children: a ? (0,
                            C.jsxs)("span", {
                                className: st,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            C.jsx)("span", {
                                className: st,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        C.jsx)("h2", {
                            className: rt,
                            children: (0,
                            Z.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        C.jsxs)("div", {
                            className: at,
                            children: [null !== i && (0,
                            C.jsxs)("p", {
                                className: it,
                                children: [(0,
                                C.jsx)("span", {
                                    className: ot,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                C.jsx)("span", {
                                    className: _()(ct, {
                                        [lt]: i > 0,
                                        [ut]: i < 0
                                    }),
                                    children: (0,
                                    Je.uf)(et(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            C.jsx)("p", {
                                className: dt,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    C.jsx)("span", {
                                        className: _t,
                                        children: mt(o)
                                    }),
                                    currentPrice: (0,
                                    C.jsx)("span", {
                                        className: _t,
                                        children: mt(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var ht = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , xt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , vt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , ft = "/help/okx-racer-terms-and-conditions"
              , gt = r(2663);
            const kt = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var jt = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: kt.closeBtn,
                closeIconClassName: kt.closeIcon
            }
              , bt = e=>(0,
            C.jsx)(gt.Z, (0,
            b.Z)((0,
            b.Z)({}, jt), {}, {
                topContent: e.title ? void 0 : (0,
                C.jsx)("div", {
                    className: kt.topPadding
                })
            }, e))
              , wt = r(76983);
            const Ct = "PrimaryButton_button__SJFHA"
              , Nt = "PrimaryButton_buttonText__19AJ7";
            var yt = e=>{
                var t = e.onClick
                  , r = e.text
                  , n = e.className
                  , a = e.disabled
                  , s = void 0 !== a && a;
                return (0,
                C.jsx)(wt.default, {
                    category: wt.default.CATEGORY.fill,
                    type: wt.default.TYPE.primary,
                    size: wt.default.SIZE.lg,
                    className: _()(Ct, n),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    C.jsx)("div", {
                        className: Nt,
                        children: r
                    })
                })
            }
            ;
            const Ot = "AutoPilot_title__NJa0C"
              , Pt = "AutoPilot_button__Sg42v";
            var Zt = ()=>{
                var e = Te()
                  , t = e.isShowAutopilotGainedPoint
                  , r = e.autopilotPoints
                  , n = e.hideAutopilotSheet;
                return (0,
                C.jsxs)(bt, {
                    visible: t,
                    onClose: n,
                    children: [(0,
                    C.jsx)("div", {
                        className: Ot,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: r
                        })
                    }), (0,
                    C.jsx)(yt, {
                        className: Pt,
                        onClick: n,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , Et = r(59896);
            const Tt = "BackgroundVideo_container__J5sO2"
              , St = "BackgroundVideo_muteButton__04Huj"
              , Rt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Lt = "BackgroundVideo_staticImage__EpRTb"
              , It = "BackgroundVideo_hide__ZXYN9";
            var Bt, At, Mt, Ft, Dt, Ut, Vt = "backgroundVideoSoundOn", Gt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Wt = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Ht = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], Kt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Gt)
            }, Xt = ()=>{
                var e = Ye().isPending
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
                  , m = d[0]
                  , p = d[1]
                  , h = (0,
                n.useState)(!1)
                  , x = (0,
                u.Z)(h, 2)
                  , v = x[0]
                  , f = x[1]
                  , g = Ve()
                  , k = (0,
                n.useState)((()=>{
                    var e = g.get(Vt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(k, 2)
                  , w = j[0]
                  , N = j[1];
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
                            p(!0)
                        }
                        )).catch((()=>{
                            p(!1)
                        }
                        ))
                    }
                    )
                }
                ), [e]);
                var y = !i && !m
                  , O = i && v && m
                  , P = i && (!v || !m);
                return (0,
                C.jsxs)("div", {
                    className: Tt,
                    children: [(0,
                    C.jsx)(wt.default, {
                        category: wt.default.CATEGORY.fill,
                        type: wt.default.TYPE.quaternary,
                        size: wt.default.SIZE.md,
                        className: St,
                        strictCircle: !0,
                        onClick: ()=>{
                            N((e=>(g.set(Vt, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Rt
                        })
                    }), (0,
                    C.jsx)(Et.Z, {
                        className: _()(Lt, {
                            [It]: !y
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Gt)
                    }), (0,
                    C.jsx)("video", (0,
                    b.Z)((0,
                    b.Z)({}, Kt), {}, {
                        className: _()({
                            [It]: !O
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: Wt.map((e=>(0,
                        C.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    C.jsx)("video", (0,
                    b.Z)((0,
                    b.Z)({}, Kt), {}, {
                        className: _()({
                            [It]: !P
                        }),
                        ref: t,
                        muted: w,
                        children: Ht.map((e=>(0,
                        C.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , Yt = ["title", "titleId"];
            function zt() {
                return zt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                zt.apply(this, arguments)
            }
            function Jt(e, t) {
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
            function Qt(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Jt(e, Yt);
                return n.createElement("svg", zt({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Bt || (Bt = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), At || (At = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Mt || (Mt = n.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Ft || (Ft = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Dt || (Dt = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Ut || (Ut = n.createElement("defs", null, n.createElement("filter", {
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
            var qt = n.forwardRef(Qt);
            r.p;
            var $t, er, tr, rr, nr, ar, sr = ["title", "titleId"];
            function ir() {
                return ir = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                ir.apply(this, arguments)
            }
            function or(e, t) {
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
            function cr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = or(e, sr);
                return n.createElement("svg", ir({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, $t || ($t = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), er || (er = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), tr || (tr = n.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), rr || (rr = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), nr || (nr = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), ar || (ar = n.createElement("defs", null, n.createElement("filter", {
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
            var lr = n.forwardRef(cr);
            r.p;
            const ur = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var dr, _r = e=>{
                var t = e.className
                  , r = Ye()
                  , a = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , o = Te().numChances
                  , c = (0,
                n.useState)()
                  , l = (0,
                u.Z)(c, 2)
                  , d = l[0]
                  , m = l[1];
                (0,
                n.useEffect)((()=>{
                    var e;
                    return s || (e = setTimeout((()=>{
                        m(void 0)
                    }
                    ), 2500)),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var p = e=>{
                    var t, r, n;
                    s || d || (m(e === He.UP ? He.DOWN : He.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (n = r.WebApp) && void 0 !== n && n.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , h = o <= 0;
                return (0,
                C.jsxs)("div", {
                    className: t,
                    children: [(0,
                    C.jsx)("p", {
                        className: _()(ur.instructions, s && ur.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    C.jsxs)("div", {
                        className: ur.btnContainer,
                        children: [(0,
                        C.jsxs)("button", {
                            disabled: h || d === He.UP,
                            onClick: ()=>p(He.UP),
                            type: "button",
                            className: _()(ur.btn, ur.upBtn, {
                                [ur.pressed]: i === He.UP
                            }),
                            children: [(0,
                            C.jsx)(lr, {
                                className: _()(ur.btnGraphic, ur.upBtnGraphic)
                            }), (0,
                            C.jsxs)("span", {
                                className: ur.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                C.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: ur.arrow
                                })]
                            })]
                        }), (0,
                        C.jsxs)("button", {
                            disabled: h || d === He.DOWN,
                            onClick: ()=>p(He.DOWN),
                            type: "button",
                            className: _()(ur.btn, ur.downBtn, {
                                [ur.pressed]: i === He.DOWN
                            }),
                            children: [(0,
                            C.jsx)(qt, {
                                className: _()(ur.btnGraphic, ur.downBtnGraphic)
                            }), (0,
                            C.jsxs)("span", {
                                className: ur.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                C.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: ur.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , mr = ["title", "titleId"];
            function pr() {
                return pr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                pr.apply(this, arguments)
            }
            function hr(e, t) {
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
            function xr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = hr(e, mr);
                return n.createElement("svg", pr({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, dr || (dr = n.createElement("g", {
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
            var vr = n.forwardRef(xr);
            r.p;
            var fr = r(48275);
            const gr = "FuelIndicator_fuelContainer__QIskL"
              , kr = "FuelIndicator_toTasksIcon__Y7exC"
              , jr = "FuelIndicator_line__tWBfm"
              , br = "FuelIndicator_description__EaUsa"
              , wr = "FuelIndicator_fuelIcon__I38Ss"
              , Cr = "FuelIndicator_maxChances__OMSHl"
              , Nr = "FuelIndicator_earnPtsMsg__PjtcT";
            var yr, Or, Pr = e=>{
                var t = e.className
                  , r = Te()
                  , n = r.numChances
                  , a = r.numChancesTotal;
                return (0,
                C.jsxs)("div", {
                    className: _()(t, gr),
                    children: [(0,
                    C.jsx)("span", {
                        className: wr,
                        children: "\u26fd\ufe0f"
                    }), n > 0 ? (0,
                    C.jsx)(fr.Z.Line, {
                        className: jr,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: n / a * 100
                    }, a) : (0,
                    C.jsx)(z, {
                        to: F,
                        className: Nr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    C.jsxs)("p", {
                        className: br,
                        children: [n, "\xa0", void 0 !== a && 0 !== a && (0,
                        C.jsxs)(C.Fragment, {
                            children: ["/\xa0", (0,
                            C.jsx)("span", {
                                className: Cr,
                                children: a
                            })]
                        })]
                    }), (0,
                    C.jsx)(z, {
                        to: F,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: kr
                        })
                    })]
                })
            }
            , Zr = ["title", "titleId"];
            function Er() {
                return Er = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Er.apply(this, arguments)
            }
            function Tr(e, t) {
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
            function Sr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Tr(e, Zr);
                return n.createElement("svg", Er({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, yr || (yr = n.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Or || (Or = n.createElement("defs", null, n.createElement("linearGradient", {
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
            var Rr = n.forwardRef(Sr);
            r.p;
            const Lr = "RefuelTimer_container__wtALO"
              , Ir = "RefuelTimer_description__sD+HM"
              , Br = "RefuelTimer_timer__LL1+c";
            var Ar = e=>{
                var t = e.className
                  , r = Te().countdownDisplay;
                return (0,
                C.jsxs)("div", {
                    className: _()(t, Lr),
                    children: [(0,
                    C.jsx)(Rr, {}), (0,
                    C.jsx)("p", {
                        className: Ir,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            C.jsx)("span", {
                                className: Br,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const Mr = "CoinPrice_raceTrack__NZO2t"
              , Fr = "CoinPrice_run__f0UIF"
              , Dr = "CoinPrice_coinPriceContainer__YbeUE"
              , Ur = "CoinPrice_content__a-5Jl"
              , Vr = "CoinPrice_fuelIndicator__p+f1I"
              , Gr = "CoinPrice_refuelTimer__tbWMw"
              , Wr = "CoinPrice_hide__bHhxJ"
              , Hr = "CoinPrice_label__yTNy0"
              , Kr = "CoinPrice_value__ZjRZz"
              , Xr = "CoinPrice_slotMachine__hUQKt"
              , Yr = "SlotMachine_row__a4TO0"
              , zr = "SlotMachine_animate__-G4TR"
              , Jr = "SlotMachine_column__aR0VE"
              , Qr = "SlotMachine_arrows__m1dhv"
              , qr = "SlotMachine_columnContainer__a76pd"
              , $r = "SlotMachine_background__b9TMg"
              , en = "SlotMachine_slot__jwCvC"
              , tn = "SlotMachine_staticColumn__O5zfB"
              , rn = "SlotMachine_sm__ZRCig"
              , nn = "SlotMachine_arrow__qOYmf"
              , an = "SlotMachine_wentUp__z48TO"
              , sn = "SlotMachine_down__aYC8C"
              , on = "SlotMachine_stable__CDMLP"
              , cn = "SlotMachine_wentDown__1fYUS"
              , ln = "SlotMachine_up__IuiYV";
            var un = e=>{
                var t = e.animate
                  , r = e.result
                  , n = void 0 === r ? 0 : r
                  , a = e.columnStyle;
                return (0,
                C.jsxs)("div", {
                    className: qr,
                    children: [(0,
                    C.jsx)("div", {
                        className: $r
                    }), (0,
                    C.jsxs)("div", {
                        className: Jr,
                        style: a,
                        children: [(0,
                        C.jsx)("p", {
                            className: en,
                            children: n
                        }), t && (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsx)("p", {
                                className: en,
                                children: "1"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "2"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "3"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "4"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "5"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "6"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "7"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "8"
                            }), (0,
                            C.jsx)("p", {
                                className: en,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , dn = ()=>{
                var e = Ye()
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
                  , m = l[1]
                  , p = (0,
                n.useState)(!1)
                  , h = (0,
                u.Z)(p, 2)
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
                    null !== t ? (m(null === (e = t) ? null : e > 0 ? He.UP : 0 === e ? He.NONE : He.DOWN),
                    o(String(Math.abs(Number(et(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    v(!1)) : m(null)
                }
                ), [t]),
                (0,
                C.jsxs)("div", {
                    className: _()(Yr, x && zr),
                    children: [(0,
                    C.jsx)("div", {
                        className: qr,
                        children: (0,
                        C.jsxs)("div", {
                            className: _()(Qr, {
                                [an]: d === He.UP,
                                [cn]: d === He.DOWN,
                                [on]: d === He.NONE
                            }),
                            children: [(0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: _()(nn, ln)
                            }), (0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: _()(nn, on)
                            }), (0,
                            C.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: _()(nn, sn)
                            })]
                        })
                    }), (0,
                    C.jsx)(un, {
                        animate: x,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    C.jsx)("span", {
                        className: tn,
                        children: "."
                    }), (0,
                    C.jsx)(un, {
                        animate: x,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    C.jsx)(un, {
                        animate: x,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    C.jsx)(un, {
                        animate: x,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    C.jsx)(un, {
                        animate: x,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    C.jsx)("span", {
                        className: _()(tn, rn),
                        children: "%"
                    })]
                })
            }
              , _n = ()=>{
                var e = Me()
                  , t = Ye()
                  , r = t.isPending
                  , a = t.changeRate
                  , s = Te().countdownDisplay
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
                    ), $e)),
                    t
                }
                ), [a, r]);
                var d = e ? "$".concat((0,
                Je.uf)(Qe.yx.truncate(e, 1, !0))) : "--"
                  , m = s && !r;
                return (0,
                C.jsxs)("div", {
                    className: Dr,
                    children: [(0,
                    C.jsx)(vr, {
                        className: _()(Mr, r && Fr)
                    }), (0,
                    C.jsxs)("div", {
                        className: _()(Ur, c && Wr),
                        children: [(0,
                        C.jsx)("p", {
                            className: Hr,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        C.jsx)("p", {
                            className: Kr,
                            children: d
                        })]
                    }), (0,
                    C.jsxs)("div", {
                        className: _()(Ur, !c && Wr),
                        children: [(0,
                        C.jsxs)("p", {
                            className: Hr,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        C.jsx)("div", {
                            className: Xr,
                            children: (0,
                            C.jsx)(dn, {})
                        })]
                    }), (0,
                    C.jsx)(Pr, {
                        className: Vr
                    }), (0,
                    C.jsx)("div", {
                        className: _()(Gr, !m && Wr),
                        children: (0,
                        C.jsx)(Ar, {})
                    })]
                })
            }
            ;
            const mn = "LandingPage_container__pU2cC"
              , pn = "LandingPage_resultOverlay__WSYZb"
              , hn = "LandingPage_disclaimer__pVRHC"
              , xn = "LandingPage_recordsBtnContainer__Anr4Y"
              , vn = "LandingPage_backgroundVideo__flTkH"
              , fn = "LandingPage_content__D0ZLW"
              , gn = "LandingPage_points__Ruq4j"
              , kn = "LandingPage_coinPrice__nJ0nj"
              , jn = "LandingPage_btnContainer__IEll8"
              , bn = "LandingPage_termsAndConditions__MdClU";
            var wn = r(22387);
            const Cn = "UserPointCounter_pointCounter__-QAj8"
              , Nn = "UserPointCounter_hide__o4qTQ"
              , yn = "UserPointCounter_points__d3HeG"
              , On = "UserPointCounter_title__B-gN-"
              , Pn = "UserPointCounter_countdown__Z7xGo"
              , Zn = "UserPointCounter_value__2a23E";
            var En = ()=>{
                var e = Te().points
                  , t = (0,
                wn.Z)(e)
                  , r = Ye()
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
                var m = (0,
                n.useCallback)(((e,t,r)=>{
                    e <= t && (r((0,
                    Je.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var n = function(e, t) {
                            var r = t - e;
                            return Math.max(1, Math.floor(r / 10))
                        }(e, t);
                        m(e + n, t, r)
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
                        return m(0, e, n),
                        ()=>{}
                        ;
                    var a = setTimeout((()=>{
                        m(t || 0, e, n)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(a)
                    }
                }
                ), [m, e, t]),
                (0,
                C.jsxs)("div", {
                    className: Cn,
                    children: [(0,
                    C.jsxs)("p", {
                        className: _()(On, l && Nn),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    C.jsx)("p", {
                        ref: i,
                        className: _()(yn, l && Nn),
                        children: "0"
                    }), (0,
                    C.jsxs)("p", {
                        className: _()(Pn, !l && Nn),
                        children: ["00:0", (0,
                        C.jsx)("span", {
                            className: Zn,
                            children: s
                        })]
                    })]
                })
            }
            ;
            const Tn = "ViewRecordsButton_button__MRo78"
              , Sn = "ViewRecordsButton_btnIcon__prKlS"
              , Rn = "ViewRecordsButton_title__obA3r"
              , Ln = "ViewRecordsButton_container__N3Rrb"
              , In = "ViewRecordsButton_recordContainer__ruZVu"
              , Bn = "ViewRecordsButton_recordField__dACwq"
              , An = "ViewRecordsButton_label__xt3Hw"
              , Mn = "ViewRecordsButton_value__lTHA5"
              , Fn = "ViewRecordsButton_trendIcon__3RV6P"
              , Dn = "ViewRecordsButton_up__EC1B6"
              , Un = "ViewRecordsButton_down__4PWTz"
              , Vn = "ViewRecordsButton_timestamp__P0JEp"
              , Gn = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , Wn = "ViewRecordsButton_description__F22UB";
            var Hn = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                C.jsxs)("div", {
                    className: Bn,
                    children: [(0,
                    C.jsx)("p", {
                        className: An,
                        children: t
                    }), (0,
                    C.jsx)("div", {
                        className: Mn,
                        children: r
                    })]
                })
            }
              , Kn = ()=>(0,
            C.jsxs)("button", {
                className: Tn,
                type: "button",
                onClick: ()=>{
                    var e = Ve().get(Ge) || []
                      , t = (0,
                    C.jsx)(C.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , n = Dn
                              , a = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            n = Un,
                            a = "okx-growth-trending-down"),
                            (0,
                            C.jsxs)("div", {
                                className: In,
                                children: [(0,
                                C.jsx)(Hn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    C.jsxs)(C.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        C.jsx)(E.Z, {
                                            className: _()(Fn, n),
                                            iconName: a
                                        })]
                                    })
                                }), (0,
                                C.jsx)(Hn, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                C.jsx)(Hn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                C.jsx)("p", {
                                    className: Vn,
                                    children: (0,
                                    Je.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        C.jsxs)("div", {
                            className: Gn,
                            children: [(0,
                            C.jsx)("p", {
                                className: Rn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            C.jsx)("p", {
                                className: Wn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = gt.Z.show((0,
                        b.Z)((0,
                        b.Z)({}, jt), {}, {
                            topContent: e.title ? void 0 : (0,
                            C.jsx)("div", {
                                className: kt.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        C.jsx)("span", {
                            className: Rn,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: Ln,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                C.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Sn
                })]
            })
              , Xn = ()=>{
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
                C.jsxs)("div", {
                    className: mn,
                    children: [(0,
                    C.jsx)("div", {
                        className: xn,
                        children: (0,
                        C.jsx)(Kn, {})
                    }), (0,
                    C.jsx)("div", {
                        className: vn,
                        children: (0,
                        C.jsx)(Xt, {})
                    }), (0,
                    C.jsxs)("div", {
                        className: fn,
                        children: [(0,
                        C.jsx)("div", {
                            className: gn,
                            children: (0,
                            C.jsx)(En, {})
                        }), (0,
                        C.jsx)("div", {
                            className: kn,
                            children: (0,
                            C.jsx)(_n, {})
                        }), (0,
                        C.jsx)(_r, {
                            className: jn
                        })]
                    }), (0,
                    C.jsx)("button", {
                        className: bn,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(ft)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    }), (0,
                    C.jsx)("p", {
                        className: hn,
                        children: (0,
                        Z.O4)("ok_game_okxracer_disclaimer")
                    }), (0,
                    C.jsx)(pt, {
                        className: pn
                    }), (0,
                    C.jsx)(Zt, {})]
                })
            }
              , Yn = ()=>(0,
            C.jsx)(ze, {
                children: (0,
                C.jsx)(Xn, {})
            })
              , zn = r(24084)
              , Jn = r(58338);
            const Qn = "PageTitle_title__IQ7TT";
            var qn = e=>{
                var t = e.html;
                return (0,
                C.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Jn.dU)(t)
                    },
                    className: Qn
                })
            }
            ;
            const $n = "LeaderBoard_container__0DJSO"
              , ea = "LeaderBoard_desc__MFxC+"
              , ta = "LeaderBoard_inviteList__mV9a7"
              , ra = "LeaderBoard_tabActiveClassName__7Xv4B"
              , na = "LeaderBoard_tabsContent__KCGtW"
              , aa = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var sa = e=>{
                var t = e.className;
                return (0,
                C.jsx)("div", {
                    className: _()(aa, t)
                })
            }
            ;
            const ia = "InviteButton_invite-btn__aAMio"
              , oa = "InviteButton_btn-a__At-wO"
              , ca = "InviteButton_btn-container__sYDy5"
              , la = "InviteButton_copyButton__znucI"
              , ua = "InviteButton_copyIcon__QZgE9";
            var da = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , n = e.className
                  , a = I().uid
                  , s = (e=>{
                    var t = new $.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , n = "https://t.me/".concat(ht.BOT_NAME, "/").concat(ht.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: n,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(n), "&text=").concat(r)
                    }
                }
                )(Te().linkCode)
                  , i = s.shareUrl
                  , o = s.appUrl;
                return (0,
                C.jsxs)("div", {
                    className: _()(n, ca),
                    children: [(0,
                    C.jsx)("a", {
                        className: oa,
                        href: i,
                        children: (0,
                        C.jsx)(yt, {
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
                            className: ia,
                            text: r
                        })
                    }), (0,
                    C.jsx)(wt.default, {
                        strictCircle: !0,
                        category: wt.default.CATEGORY.fill,
                        type: wt.default.TYPE.primary,
                        size: wt.default.SIZE.lg,
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
                        className: la,
                        children: (0,
                        C.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: ua
                        })
                    })]
                })
            }
            ;
            const _a = "RankList_listItem__qJvXJ"
              , ma = "RankList_name__sxTWa"
              , pa = "RankList_mask__ldBi8"
              , ha = "RankList_hightLightRow__xYkeg"
              , xa = "RankList_listHeader__KVGnw"
              , va = "RankList_rank__k2m5R"
              , fa = "RankList_icon__1-SRV"
              , ga = "RankList_point__D5mVw"
              , ka = "RankList_pointIcon__k80Wy"
              , ja = "RankList_InviteButton__D6ute"
              , ba = "RankList_noFirendsNote__Ckkil"
              , wa = "RankList_under__MJ5We"
              , Ca = "RankList_rankItemPlaceholder__z-upW"
              , Na = "RankList_rank-name__YEqnc"
              , ya = "RankList_rank-score__gtI+m";
            var Oa = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Pa = 1
              , Za = 2
              , Ea = e=>{
                var t = e.total;
                return (0,
                C.jsxs)("div", {
                    className: xa,
                    children: [(0,
                    C.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            Je.uf)(t)
                        })
                    }), (0,
                    C.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Ta = ()=>(0,
            C.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                C.jsxs)("div", {
                    className: Ca,
                    children: [(0,
                    C.jsx)(sa, {
                        className: Na
                    }), (0,
                    C.jsx)(sa, {
                        className: ya
                    })]
                }, t)))
            })
              , Sa = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                C.jsxs)("div", {
                    className: _()(_a, r && ha),
                    children: [(0,
                    C.jsx)("div", {
                        className: pa
                    }), t.rank <= 3 ? (0,
                    C.jsx)("span", {
                        className: _()(va, fa),
                        children: Oa[t.rank]
                    }) : (0,
                    C.jsx)("span", {
                        className: va,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    C.jsx)("div", {
                        className: ma,
                        children: t.extUserName
                    }), (0,
                    C.jsxs)("div", {
                        className: ga,
                        children: [(0,
                        C.jsx)("span", {
                            className: ka,
                            children: Oa[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            Je.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Ra = e=>{
                var t = e.pageType
                  , r = void 0 === t ? Pa : t
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
                  , b = k[1]
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
                                    r !== Pa) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    be(n);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    we(n);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (p(a.rows),
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
                }(), [r])
                  , N = j && ((null === j || void 0 === j ? void 0 : j.rank) > 3 || -1 === (null === j || void 0 === j ? void 0 : j.rank));
                return (0,
                n.useEffect)((()=>{
                    w(1)
                }
                ), [w]),
                (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsx)(Ea, {
                        total: v
                    }), i ? (0,
                    C.jsx)(Ta, {}) : (0,
                    C.jsxs)(C.Fragment, {
                        children: [N && (0,
                        C.jsx)(Sa, {
                            item: j,
                            isHighlight: !0
                        }), m.map(((e,t)=>(0,
                        C.jsx)(Sa, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    C.jsx)("div", {
                        className: wa
                    }), r === Pa && (0,
                    C.jsxs)(C.Fragment, {
                        children: [1 === m.length && (0,
                        C.jsx)("div", {
                            className: ba,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === m.length && (0,
                        C.jsx)(da, {
                            className: ja,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , La = ()=>(0,
            C.jsxs)("div", {
                className: $n,
                children: [(0,
                C.jsx)(qn, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        Z.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                C.jsx)("div", {
                    className: ea,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                C.jsxs)(zn.Z, {
                    activeClassName: ra,
                    noPadding: !0,
                    size: zn.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    C.jsx)(zn.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: Pa,
                        className: na,
                        children: (0,
                        C.jsx)("div", {
                            className: ta,
                            children: (0,
                            C.jsx)(Ra, {
                                pageType: Pa
                            })
                        })
                    }), (0,
                    C.jsx)(zn.Z.TabPane, {
                        className: na,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: Za,
                        children: (0,
                        C.jsx)("div", {
                            className: ta,
                            children: (0,
                            C.jsx)(Ra, {
                                pageType: Za
                            })
                        })
                    })]
                })]
            });
            const Ia = "QrCode_container__r4Fu7"
              , Ba = "QrCode_qrCode__16PWa"
              , Aa = "QrCode_title__+cibb"
              , Ma = "QrCode_message__eaOzW";
            var Fa = ()=>(0,
            C.jsxs)("div", {
                className: Ia,
                children: [(0,
                C.jsx)(Et.Z, {
                    className: Ba,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                C.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Jn.dU)((0,
                        Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Aa
                }), (0,
                C.jsx)("p", {
                    className: Ma,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , Da = r(90534);
            const Ua = "PullupList_loading__+51Dh"
              , Va = "PullupList_listLoadItem__XcvkH"
              , Ga = "PullupList_listLeft__4eGh6"
              , Wa = "PullupList_listRight__w7Ely"
              , Ha = "PullupList_listLoading__whJeg";
            var Ka = ()=>(0,
            C.jsxs)("div", {
                className: _()(Va),
                children: [(0,
                C.jsx)(sa, {
                    className: Ga
                }), (0,
                C.jsx)(sa, {
                    className: Wa
                })]
            })
              , Xa = ()=>(0,
            C.jsx)("div", {
                className: Ha,
                children: Array(3).fill(null).map(((e,t)=>(0,
                C.jsx)(Ka, {}, t)))
            })
              , Ya = e=>{
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
                  , b = (0,
                Da.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , w = e=>{
                    e[0].isIntersecting && !m && !1 === h.current.stop && k(!g)
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
                ), [m]),
                (0,
                n.useEffect)((()=>{
                    b()
                }
                ), [g]),
                (0,
                C.jsxs)(C.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    C.jsx)("div", {
                        className: Ua,
                        ref: x,
                        children: m && (0,
                        C.jsx)(Xa, {})
                    })]
                })
            }
            ;
            const za = "InviteList_listItem__q4jhG"
              , Ja = "InviteList_name__LLQgt"
              , Qa = "InviteList_point__kXtCn"
              , qa = "InviteList_earnedPrice__4vAfw"
              , $a = "InviteList_pointNumber__v4P1H";
            var es = ()=>{
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
                                    je(n);
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
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsx)("div", {
                        className: qa,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            C.jsx)("span", {
                                className: $a,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    Je.uf)(r)
                                })
                            })
                        })
                    }), (0,
                    C.jsx)(Ya, {
                        loadData: s,
                        children: (e,t)=>(0,
                        C.jsxs)("div", {
                            className: za,
                            children: [(0,
                            C.jsx)("div", {
                                className: Ja,
                                children: e.extInviteeName
                            }), (0,
                            C.jsx)("div", {
                                className: Qa,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    Je.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const ts = "ReferralsPage_container__V48m1"
              , rs = "ReferralsPage_inviteDetail__L1MhM"
              , ns = "ReferralsPage_detailItem__ujOp+"
              , as = "ReferralsPage_dot__zKW7L"
              , ss = "ReferralsPage_detailTitle__OE657"
              , is = "ReferralsPage_detailInfo__YC+Y9"
              , os = "ReferralsPage_inviteList__Jksx8";
            var cs = ()=>{
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
                C.jsxs)("div", {
                    className: ts,
                    children: [(0,
                    C.jsx)(qn, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    C.jsx)("div", {
                        className: rs,
                        children: t.map((e=>(0,
                        C.jsxs)("div", {
                            className: ns,
                            children: [(0,
                            C.jsx)("div", {
                                className: as
                            }), (0,
                            C.jsx)("div", {
                                className: ss,
                                children: e.title
                            }), (0,
                            C.jsx)("div", {
                                className: is,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    C.jsx)("div", {
                        className: os,
                        children: (0,
                        C.jsx)(es, {})
                    }), (0,
                    C.jsx)(da, {})]
                })
            }
            ;
            const ls = "Tag_tag__tkWly";
            var us, ds, _s, ms, ps, hs, xs, vs, fs = e=>{
                var t = e.text
                  , r = e.className;
                return (0,
                C.jsx)("span", {
                    className: _()(ls, r),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
            , gs = ["title", "titleId"];
            function ks() {
                return ks = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                ks.apply(this, arguments)
            }
            function js(e, t) {
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
            function bs(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = js(e, gs);
                return n.createElement("svg", ks({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, us || (us = n.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ds || (ds = n.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), _s || (_s = n.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ms || (ms = n.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), ps || (ps = n.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), hs || (hs = n.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), xs || (xs = n.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), vs || (vs = n.createElement("defs", null, n.createElement("filter", {
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
            var ws = n.forwardRef(bs);
            r.p;
            const Cs = "index_container__DxcAz"
              , Ns = "index_logo__h1T0A"
              , ys = "index_tlt__dqJHn"
              , Os = "index_subtlt__m3p5l";
            var Ps = ()=>(0,
            C.jsxs)("div", {
                className: Cs,
                children: [(0,
                C.jsx)(ws, {
                    className: Ns
                }), (0,
                C.jsx)("div", {
                    className: ys,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                C.jsx)("div", {
                    className: Os,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Zs = a().memo(Ps);
            var Es, Ts = ["title", "titleId"];
            function Ss() {
                return Ss = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Ss.apply(this, arguments)
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
                  , s = Rs(e, Ts);
                return n.createElement("svg", Ss({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Es || (Es = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Is = n.forwardRef(Ls);
            r.p;
            var Bs, As = ["title", "titleId"];
            function Ms() {
                return Ms = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Ms.apply(this, arguments)
            }
            function Fs(e, t) {
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
            function Ds(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Fs(e, As);
                return n.createElement("svg", Ms({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Bs || (Bs = n.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Us = n.forwardRef(Ds);
            r.p;
            var Vs, Gs = ["title", "titleId"];
            function Ws() {
                return Ws = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Ws.apply(this, arguments)
            }
            function Hs(e, t) {
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
            function Ks(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Hs(e, Gs);
                return n.createElement("svg", Ws({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Vs || (Vs = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Xs = n.forwardRef(Ks);
            r.p;
            var Ys = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , zs = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
            function Js(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Ys.SIGNUP,
                    status: zs(Ys.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: Ys.INSTALL,
                    status: zs(Ys.INSTALL),
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
            var Qs = e=>{
                var t = (0,
                n.useState)(Js(e))
                  , r = (0,
                u.Z)(t, 2)
                  , a = r[0]
                  , s = r[1]
                  , i = I().uid;
                (0,
                n.useEffect)((()=>{
                    s(Js(e))
                }
                ), [e]);
                var o = (0,
                n.useCallback)((t=>{
                    var r, n, o = a.find((e=>e.type === t));
                    if (o) {
                        switch (null === (r = window) || void 0 === r || null === (n = r.Telegram) || void 0 === n || n.WebApp.openLink(o.url),
                        t) {
                        case Ys.SIGNUP:
                        case Ys.INSTALL:
                            c = t,
                            window.localStorage && window.localStorage.setItem(c, "1"),
                            s(Js(e))
                        }
                        var c, l = {
                            telegramid: i
                        };
                        switch (t) {
                        case Ys.SIGNUP:
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
                        case Ys.INSTALL:
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
                        case Ys.CONNECT:
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
                        case Ys.KYC:
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
            const qs = "index_container__ZAgXf"
              , $s = "index_container_avatar__HvLrA"
              , ei = "index_container_task__OmqjX"
              , ti = "index_task_tlt__pIkV2"
              , ri = "index_tlt_sub__2aRiA"
              , ni = "index_tlt_arrow__kdbln"
              , ai = "index_task_subtlt__mzIaE";
            var si = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                C.jsx)("div", {
                    className: $s,
                    children: r ? (0,
                    C.jsx)(Xs, {}) : (0,
                    C.jsx)(Us, {})
                })
            }
              , ii = e=>{
                var t = e.title
                  , r = e.subTitle
                  , n = e.type
                  , a = e.onClick
                  , s = e.status;
                return (0,
                C.jsxs)("div", {
                    className: ei,
                    onClick: ()=>{
                        a(n)
                    }
                    ,
                    children: [(0,
                    C.jsxs)("div", {
                        className: ti,
                        children: [(0,
                        C.jsx)(si, {
                            status: s
                        }), " ", (0,
                        C.jsx)("div", {
                            className: ri,
                            children: t
                        }), (0,
                        C.jsx)(Is, {
                            className: ni
                        })]
                    }), (0,
                    C.jsx)("div", {
                        className: ai,
                        children: r
                    })]
                })
            }
            ;
            const oi = e=>{
                var t = Qs(e)
                  , r = t.list
                  , n = t.handleClick;
                return (0,
                C.jsx)("div", {
                    className: qs,
                    children: r.map((e=>(0,
                    C.jsx)(ii, (0,
                    b.Z)((0,
                    b.Z)({}, e), {}, {
                        onClick: n
                    }), e.type)))
                })
            }
            ;
            var ci, li, ui, di = ["title", "titleId"];
            function _i() {
                return _i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                _i.apply(this, arguments)
            }
            function mi(e, t) {
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
            function pi(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = mi(e, di);
                return n.createElement("svg", _i({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, ci || (ci = n.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), li || (li = n.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), ui || (ui = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var hi = n.forwardRef(pi);
            r.p;
            const xi = "index_loader__kDy+9"
              , vi = "index_container__X8xX8"
              , fi = "index_container_subtlt__LyYby"
              , gi = "index_container_info__c9KQP"
              , ki = "index_info_icon__i5uhI"
              , ji = "index_container_btn__rWex7"
              , bi = "index_tncContainer__McO06"
              , wi = "index_termsAndConditions__Gifk+"
              , Ci = "index_autoPilotTask__tP9yX"
              , Ni = "index_autoPilotIcon__334Cy"
              , yi = "index_autoPilotTitle__7zwDH"
              , Oi = "index_newTag__h508t"
              , Pi = "index_autoPilotDesc__D59sa";
            var Zi = ()=>(0,
            C.jsx)(Zs, {})
              , Ei = e=>(0,
            C.jsxs)("div", {
                className: vi,
                children: [(0,
                C.jsx)(qn, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_title_ready_surprises")
                }), (0,
                C.jsx)("div", {
                    className: fi,
                    children: (0,
                    Z.O4)("ok_game_okxracer_text_autodrive_complete_steps")
                }), (0,
                C.jsxs)("div", {
                    className: Ci,
                    children: [(0,
                    C.jsx)("div", {
                        className: Ni,
                        children: "\ud83d\udede"
                    }), (0,
                    C.jsxs)("div", {
                        children: [(0,
                        C.jsxs)("div", {
                            className: yi,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_title_autodriving"), (0,
                            C.jsx)(fs, {
                                className: Oi
                            })]
                        }), (0,
                        C.jsx)("div", {
                            className: Pi,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_play_away")
                        })]
                    })]
                }), (0,
                C.jsx)(oi, (0,
                b.Z)({}, e)), (0,
                C.jsxs)("div", {
                    className: gi,
                    children: [(0,
                    C.jsx)(hi, {
                        className: ki,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                C.jsx)(yt, {
                    onClick: e.onClick,
                    className: ji,
                    text: (0,
                    Z.O4)("ok_game_okxracer_surprises_verify")
                }), (0,
                C.jsx)("div", {
                    className: bi,
                    children: (0,
                    C.jsx)("button", {
                        className: wi,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(ft)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , Ti = ()=>{
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
                                Ze();
                            case 4:
                                r = e.sent,
                                s(!1),
                                r && _(r),
                                !t || null !== r && void 0 !== r && r.isKyc && r.isConnectTelegram || te(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1),
                                te(!1, (0,
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
                C.jsx)("div", {
                    className: xi,
                    children: (0,
                    C.jsx)(fr.Z, {})
                }) : d.isConnectTelegram && d.isKyc ? (0,
                C.jsx)(Zi, {}) : (0,
                C.jsx)(Ei, (0,
                b.Z)((0,
                b.Z)({}, d), {}, {
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
              , Si = (0,
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
              , Ri = ()=>(0,
            n.useContext)(Si)
              , Li = e=>{
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
                  , p = Te().updateGameInfoFromServer
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
                                Promise.allSettled([Ne(), Oe()]);
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
                                    ye({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Ne(), p()]);
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
                                    Pe({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Oe(), p()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && m(r[0].value.data || []),
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
                C.jsx)(Si.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: v
                    },
                    children: t
                })
            }
              , Ii = e=>(null === e || void 0 === e ? void 0 : e.type) === vt.DailyBoost
              , Bi = e=>"actionType"in e && e.actionType === Ce.UnLock
              , Ai = e=>{
                var t = e.pointCost
                  , r = e.curStage
                  , n = e.totalStage;
                return !Ii(e) && r >= n ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                Je.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const Mi = "index_sheet__FbHHx"
              , Fi = "index_sheet-icon__H2xCV"
              , Di = "index_boostSheetTag__NbYFf"
              , Ui = "index_sheet-title__RInQ-"
              , Vi = "index_sheet-desc__W9myB"
              , Gi = "index_sheet-data__FALtV"
              , Wi = "index_sheet-point__Xrsvs"
              , Hi = "index_sheet-lvl__f1+W-"
              , Ki = "index_lockBtnContainer__4DPO7"
              , Xi = "index_btn__bxKiJ"
              , Yi = "index_boost-data-split-point__TaGIo";
            var zi = e=>{
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
                  , _ = Bi(a)
                  , m = !1
                  , p = u
                  , h = d;
                return _ && (o ? (p = a.unlockDescription,
                h = a.unlockButtonText) : p = a.ruleDescription,
                s === i && (m = !0,
                h = a.activatedButtonText)),
                (0,
                C.jsxs)("div", {
                    className: Mi,
                    children: [(0,
                    C.jsx)("div", {
                        className: Fi,
                        children: c
                    }), _ && (0,
                    C.jsx)(fs, {
                        className: Di
                    }), (0,
                    C.jsx)("div", {
                        className: Ui,
                        children: l
                    }), (0,
                    C.jsx)("div", {
                        className: Vi,
                        children: p
                    }), (0,
                    C.jsxs)("div", {
                        className: Gi,
                        children: [(0,
                        C.jsx)("span", {
                            className: Wi,
                            children: Ai(t)
                        }), (Ii(t) || s < i) && (0,
                        C.jsx)("span", {
                            className: Yi
                        }), (0,
                        C.jsx)("span", {
                            className: Hi,
                            children: Ii(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    C.jsx)(z, {
                        to: U,
                        className: Ki,
                        children: (0,
                        C.jsx)(yt, {
                            text: h
                        })
                    }) : (0,
                    C.jsx)(yt, {
                        onClick: ()=>{
                            r(t)
                        }
                        ,
                        className: Xi,
                        text: h,
                        disabled: m
                    })]
                })
            }
            ;
            const Ji = "index_boost-item__k6pnm"
              , Qi = "index_boost-icon__wH6Dh"
              , qi = "index_boost-title__9R-Ry"
              , $i = "index_newTag__tgIea"
              , eo = "index_boost-desc__k1Big"
              , to = "index_boost-data__+0cnG"
              , ro = "index_boost-data-split-point__moT+k"
              , no = "index_boost-data-stage__8CAgC"
              , ao = "index_boostItemPlaceholder__NaUkk"
              , so = "index_locked__sM-YP"
              , io = "index_unlockIcon__whxqz"
              , oo = "index_unlockButton__C3EY5";
            var co = e=>{
                var t = e.boost
                  , r = t.curStage
                  , n = t.totalStage
                  , a = t.isLocked
                  , s = t.context;
                if (Bi(s)) {
                    if (a)
                        return (0,
                        C.jsx)("div", {
                            className: to,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (r === n)
                        return (0,
                        C.jsx)("div", {
                            className: to,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                C.jsxs)("div", {
                    className: to,
                    children: [(0,
                    C.jsx)("span", {
                        children: Ai(t)
                    }), (Ii(t) || r < n) && (0,
                    C.jsx)("span", {
                        className: ro
                    }), (0,
                    C.jsx)("span", {
                        className: no,
                        children: Ii(t) ? "".concat(n - r, "/").concat(n) : "Lvl ".concat(r)
                    })]
                })
            }
              , lo = e=>{
                var t = e.boost
                  , r = e.onClick
                  , n = t.id
                  , a = t.context
                  , s = t.isLocked
                  , i = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = Bi(a);
                return (0,
                C.jsxs)("div", {
                    className: Ji,
                    onClick: ()=>{
                        r(n)
                    }
                    ,
                    children: [(0,
                    C.jsx)("div", {
                        className: Qi,
                        children: i
                    }), (0,
                    C.jsxs)("div", {
                        className: qi,
                        children: [o, l && (0,
                        C.jsx)(fs, {
                            className: $i
                        })]
                    }), (0,
                    C.jsx)("div", {
                        className: eo,
                        children: c
                    }), (0,
                    C.jsx)(co, {
                        boost: t
                    }), s && (0,
                    C.jsxs)("div", {
                        className: so,
                        children: [(0,
                        C.jsx)(E.Z, {
                            className: _()("okx-growth-lock", io)
                        }), (0,
                        C.jsx)(wt.default, {
                            category: wt.default.CATEGORY.text,
                            type: wt.default.TYPE.primary,
                            size: wt.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: wt.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: oo,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, n)
            }
              , uo = ()=>(0,
            C.jsxs)("div", {
                className: _()(Ji, ao),
                children: [(0,
                C.jsx)(sa, {
                    className: Qi
                }), (0,
                C.jsx)(sa, {
                    className: qi
                }), (0,
                C.jsx)(sa, {
                    className: eo
                }), (0,
                C.jsx)(sa, {
                    className: to
                })]
            });
            const _o = "index_boost-item-container__SW62L"
              , mo = "index_boost-item-padding__IwiTB";
            var po = e=>{
                var t = e.onClick
                  , r = Ri().boosts
                  , a = (0,
                n.useCallback)((e=>{
                    var n = r.find((t=>t.id === e));
                    n && t(n)
                }
                ), [r, t]);
                return (0,
                C.jsxs)("div", {
                    className: _o,
                    children: [(0,
                    C.jsx)("div", {
                        className: mo
                    }), r.length > 0 ? (0,
                    C.jsx)(C.Fragment, {
                        children: r.map((e=>(0,
                        C.jsx)(lo, {
                            boost: e,
                            onClick: a
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    C.jsxs)(C.Fragment, {
                        children: [(0,
                        C.jsx)(uo, {}), (0,
                        C.jsx)(uo, {}), (0,
                        C.jsx)(uo, {})]
                    }), (0,
                    C.jsx)("div", {
                        className: mo
                    })]
                })
            }
            ;
            const ho = "BoostArea_boosts-title__hkjWn"
              , xo = "BoostArea_boost-area__AMJbh"
              , vo = "BoostArea_container__qLJSQ";
            var fo = ()=>{
                var e = Ri()
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
                  , h = Te().points
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
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsxs)("div", {
                        className: ho,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    C.jsx)("div", {
                        className: xo,
                        children: (0,
                        C.jsxs)("div", {
                            className: vo,
                            children: [(0,
                            C.jsx)(po, {
                                onClick: v
                            }), (0,
                            C.jsx)(bt, {
                                visible: m,
                                onClose: ()=>{
                                    p(!1)
                                }
                                ,
                                children: i && (0,
                                C.jsx)(zi, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const go = "TaskArea_tasks-title__tN1pb"
              , ko = "TaskArea_container__Iz7a-"
              , jo = "TaskArea_task-item__w79wY"
              , bo = "TaskArea_item-left__1r6mY"
              , wo = "TaskArea_item-right__lk7YG"
              , Co = "TaskArea_icon__RfKa0"
              , No = "TaskArea_title__OyXme"
              , yo = "TaskArea_state__d9FdX"
              , Oo = "TaskArea_sheet-container__lottt"
              , Po = "TaskArea_sheet-name__CibLI"
              , Zo = "TaskArea_sheet-desc__aaGRQ"
              , Eo = "TaskArea_btn__HU6oE"
              , To = "TaskArea_done__fmgjd"
              , So = "TaskArea_taskItemPlaceholder__JXSdR"
              , Ro = "TaskArea_task__cxfzp";
            var Lo = ()=>{
                var e = Ri()
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
                  , m = (0,
                u.Z)(d, 2)
                  , p = m[0]
                  , h = m[1]
                  , x = (0,
                Da.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == xt.finished)
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
                        className: _()(So),
                        children: (0,
                        C.jsx)(sa, {
                            className: Ro
                        })
                    }, t)))
                });
                return (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsxs)("div", {
                        className: go,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_tasks"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    C.jsxs)("div", {
                        className: ko,
                        children: [t.length > 0 ? t.map((e=>e && (e=>{
                            var t = e.id
                              , r = e.points
                              , n = e.state
                              , a = e.context;
                            return (0,
                            C.jsxs)("div", {
                                className: jo,
                                onClick: ()=>{
                                    x(t)
                                }
                                ,
                                children: [(0,
                                C.jsxs)("div", {
                                    className: bo,
                                    children: [(0,
                                    C.jsx)("div", {
                                        className: No,
                                        children: a.name
                                    }), (0,
                                    C.jsx)("div", {
                                        className: yo,
                                        children: " ".concat(n === xt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                        Je.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0,
                                C.jsx)("div", {
                                    className: wo,
                                    children: n === xt.finished ? (0,
                                    C.jsx)("div", {
                                        className: To,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_done")
                                    }) : (0,
                                    C.jsx)(E.Z, {
                                        className: _()("okx-growth-chevrons-right", Co)
                                    })
                                })]
                            }, t)
                        }
                        )(e))) : (0,
                        C.jsx)(f, {}), i && (0,
                        C.jsx)(bt, {
                            noContentPadding: !0,
                            visible: p,
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
                                    className: Oo,
                                    children: [(0,
                                    C.jsx)("div", {
                                        className: Po,
                                        children: e.name
                                    }), (0,
                                    C.jsx)("div", {
                                        className: Zo,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Jn.dU)(t)
                                        }
                                    }), (0,
                                    C.jsx)(yt, {
                                        className: Eo,
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
            const Io = "TaskPage_container__5KfIM"
              , Bo = "TaskPage_block__kt8oo"
              , Ao = "TaskPage_block-boost__QYQXL"
              , Mo = "TaskPage_points-title__4hW9Y"
              , Fo = "TaskPage_points-content__+yK3g";
            var Do = ()=>{
                var e = Te().points;
                return (0,
                C.jsxs)("div", {
                    className: Io,
                    children: [(0,
                    C.jsx)("div", {
                        className: Bo,
                        children: (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsxs)("div", {
                                className: Mo,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            C.jsx)("div", {
                                className: Fo,
                                children: Qe.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    C.jsx)("div", {
                        className: Ao,
                        children: (0,
                        C.jsx)(fo, {})
                    }), (0,
                    C.jsx)("div", {
                        className: Bo,
                        children: (0,
                        C.jsx)(Lo, {})
                    })]
                })
            }
              , Uo = ()=>(0,
            C.jsx)(Li, {
                children: (0,
                C.jsx)(Do, {})
            })
              , Vo = ()=>{
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
                var o = true;
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
                                        m.d)(i);
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
                    C.jsx)(p.Z, {
                        localeData: r,
                        fetchConfig: i,
                        children: o ? (0,
                        C.jsxs)(C.Fragment, {
                            children: [(0,
                            C.jsx)(Be, {
                                children: (0,
                                C.jsx)(Se, {
                                    children: (0,
                                    C.jsx)(Fe, {
                                        children: (0,
                                        C.jsx)("main", {
                                            className: j,
                                            children: (0,
                                            C.jsxs)(s.Switch, {
                                                children: [(0,
                                                C.jsx)(s.Route, {
                                                    path: A,
                                                    component: N(Yn),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: D,
                                                    component: O(La),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: F,
                                                    component: N(Uo),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: M,
                                                    component: O(cs),
                                                    exact: !0
                                                }), (0,
                                                C.jsx)(s.Route, {
                                                    path: U,
                                                    component: O(Ti),
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
                                C.jsx)(Q, {})
                            })]
                        }) : (0,
                        C.jsx)(Fa, {})
                    })
                })
            }
              , Go = document.getElementById("root");
            if (Go) {
                var Wo = (0,
                C.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    C.jsx)(B, {
                        children: (0,
                        C.jsx)(Vo, {})
                    })
                });
                (0,
                i.createRoot)(Go).render(Wo)
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
    var n = r.O(void 0, [2675, 5825, 9824, 5890, 6970, 7569, 6877, 4084, 5573, 7110, 731, 3043], (()=>r(74085)));
    n = r.O(n)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.cca112cb.js.map
