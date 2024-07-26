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
              , p = r(2627)
              , m = r(45929)
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
            const f = "App_container__p+0qT"
              , v = "App_navbar__zvxzr"
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
              , R = ()=>{
                S.act({
                    action: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , L = ()=>{
                S.act({
                    action: "OkxRacerLandingPage_NavigationBar_Task_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Task_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , I = ()=>{
                S.act({
                    action: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , B = "/mini-app/racer"
              , A = "/mini-app/racer/referrals"
              , M = "/mini-app/racer/tasks"
              , F = "/mini-app/racer/leaderboard"
              , D = "/mini-app/racer/rewards";
            const U = "Navbar_navbar__LF3-M"
              , V = "Navbar_link__qX0Sf"
              , G = "Navbar_active__TCbF8"
              , W = "Navbar_linkIcon__GtH54"
              , H = "Navbar_linkText__Szxi-";
            var K = ["children", "className"]
              , X = ["iconName", "label", "onClick"]
              , Y = e=>{
                var t = e.children
                  , r = e.className
                  , n = (0,
                y.Z)(e, K)
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
              , z = e=>{
                var t = e.iconName
                  , r = e.label
                  , n = e.onClick
                  , a = (0,
                y.Z)(e, X)
                  , i = (0,
                s.useRouteMatch)({
                    path: a.to,
                    exact: !0
                });
                return (0,
                b.jsxs)(Y, {
                    className: P()(V, i && G),
                    to: a.to,
                    onClick: n,
                    children: [(0,
                    b.jsx)(E.Z, {
                        iconName: t,
                        className: W
                    }), (0,
                    b.jsx)("span", {
                        className: H,
                        children: r
                    })]
                })
            }
              , J = ()=>(0,
            b.jsxs)("div", {
                className: U,
                children: [(0,
                b.jsx)(z, {
                    iconName: "okx-growth-home",
                    to: B,
                    label: (0,
                    Z.O4)("ok_game_okxracer_home")
                }), (0,
                b.jsx)(z, {
                    iconName: "okx-growth-leaderboard",
                    to: F,
                    label: (0,
                    Z.O4)("ok_game_okxracer_leaderboard"),
                    onClick: R
                }), (0,
                b.jsx)(z, {
                    iconName: "okx-growth-task",
                    to: M,
                    label: (0,
                    Z.O4)("ok_game_okxracer_tasks"),
                    onClick: L
                }), (0,
                b.jsx)(z, {
                    iconName: "okx-growth-friends",
                    to: A,
                    label: (0,
                    Z.O4)("ok_game_okxracer_friends"),
                    onClick: I
                }), (0,
                b.jsx)(z, {
                    iconName: "okx-growth-surprises",
                    to: D,
                    label: (0,
                    Z.O4)("ok_game_okxracer_surprises")
                })]
            });
            function Q(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var q = ()=>((0,
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
                hasWebviewProxy: Q(window)
            })
              , $ = r(4860)
              , ee = r(72202)
              , te = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , re = (0,
            n.createContext)(te)
              , ne = ()=>(0,
            n.useContext)(re)
              , ae = e=>{
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
                    return te
                }
                ), [])
                  , a = (0,
                n.useState)(r)
                  , s = (0,
                u.Z)(a, 1)[0];
                return (0,
                b.jsx)(re.Provider, {
                    value: s,
                    children: t
                })
            }
              , se = (e,t)=>{
                e ? m.Z.success({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                }) : m.Z.error({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , ie = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                se(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , oe = r(60378)
              , ce = r(4422);
            const le = utils.ont;
            var ue = r.n(le)
              , de = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , _e = e=>t=>{
                if (!(0,
                oe.y)()) {
                    var r = t || {}
                      , n = r.status
                      , a = r.data || {}
                      , s = a.msg
                      , i = a.code;
                    ce.k.warn("Request error, url=".concat(e, " status=").concat(n, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , pe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().get(t, r).then(de, _e(t)));
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
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().getWithCache(t, r).then(de, _e(t)));
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
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().post(t, r, n).then(de, _e(t)));
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
              , xe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r, n) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().put(t, r, n).then(de, _e(t)));
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
              , fe = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t, r) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().delete(t, r).then(de, _e(t)));
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
              , ve = function() {
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
                                e.abrupt("return", he(t, a, n));
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
            const ge = {
                get: pe,
                getWithCache: me,
                post: he,
                put: xe,
                postForm: ve,
                delete: fe
            };
            function ke(e, t) {
                var r, n;
                return ge.get(e, (0,
                k.Z)((0,
                k.Z)({}, t || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (n = r.WebApp) || void 0 === n ? void 0 : n.initData) || ""
                    }
                }))
            }
            function je(e, t, r) {
                var n, a;
                return ge.post(e, t, (0,
                k.Z)((0,
                k.Z)({}, r || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (n = window.Telegram) || void 0 === n || null === (a = n.WebApp) || void 0 === a ? void 0 : a.initData) || ""
                    }
                }))
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
                                return e.abrupt("return", je("".concat(be, "/game/racer/info"), t));
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
                                return e.abrupt("return", je("".concat(be, "/game/racer/assess"), t));
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
              , Ne = function() {
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
                                ke("".concat(be, "/game/racer/invitee-list"), {
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
              , ye = function() {
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
                                ke("".concat(be, "/game/racer/leaderboard/friends"), {
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
                                ie(e.t0),
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
              , Oe = function() {
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
                                ke("".concat(be, "/game/racer/leaderboard/global"), {
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
                                ie(e.t0),
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
              , Pe = function(e) {
                return e[e.Normal = 1] = "Normal",
                e[e.OpenLink = 2] = "OpenLink",
                e[e.UnLock = 3] = "UnLock",
                e
            }({})
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(be, "/game/racer/boosts")));
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
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(be, "/game/racer/boost"), t));
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
                c.Z)().mark((function e() {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ke("".concat(be, "/game/racer/tasks")));
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
              , Se = function() {
                var e = (0,
                l.Z)((0,
                c.Z)().mark((function e(t) {
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", je("".concat(be, "/game/racer/task"), t));
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
                    var t, r, n;
                    return (0,
                    c.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                je("".concat(be, "/game/racer/account-binding"), {});
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
              , Le = (0,
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
              , Ie = ()=>(0,
            n.useContext)(Le)
              , Be = e=>{
                var t, r = e.children, a = (0,
                n.useState)(0), s = (0,
                u.Z)(a, 2), i = s[0], o = s[1], d = (0,
                n.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], h = (0,
                n.useState)(0), x = (0,
                u.Z)(h, 2), f = x[0], v = x[1], g = (0,
                n.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                n.useState)(""), N = (0,
                u.Z)(C, 2), y = N[0], O = N[1], P = (0,
                n.useState)(!0), E = (0,
                u.Z)(P, 2), T = E[0], S = E[1], R = ne(), L = R.username, I = R.startParam, B = (0,
                n.useState)(""), A = (0,
                u.Z)(B, 2), M = A[0], F = A[1], D = (0,
                n.useState)(!1), U = (0,
                u.Z)(D, 2), V = U[0], G = U[1], W = (0,
                n.useState)(0), H = (0,
                u.Z)(W, 2), K = H[0], X = H[1], Y = null !== (t = new $.Z((I || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", z = (0,
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
                                we({
                                    extUserName: L,
                                    linkCode: Y
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (o(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                m(r.numChances),
                                w(r.secondToRefresh),
                                v(r.numChancesTotal),
                                G(r.isShowAutopilotGainedPoint),
                                X(r.autopilotPoints),
                                S(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                se(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [Y, L]);
                (0,
                n.useEffect)((()=>{
                    z()
                }
                ), [z]),
                (0,
                n.useEffect)((()=>{
                    var e = new ee.Z(j);
                    return j > 0 ? (e.start(),
                    e.addEventListener(ee.Z.Event.UPDATE, (e=>{
                        F("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(ee.Z.Event.FINISH, (()=>{
                        F(""),
                        z()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    F("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [j, z]),
                (0,
                n.useEffect)((()=>{
                    function e() {
                        document.hidden || z()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [z]);
                var J = (0,
                n.useCallback)((e=>{
                    o(Math.max(e.points, 0)),
                    m(e.numChances),
                    w(e.secondToRefresh)
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
                                z();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [z])
                  , q = (0,
                n.useCallback)((()=>{
                    G(!1)
                }
                ), [])
                  , te = (0,
                n.useMemo)((()=>({
                    isLoading: T,
                    points: i,
                    numChances: p,
                    numChancesTotal: f,
                    countdownDisplay: M,
                    updateGameInfo: J,
                    linkCode: y,
                    updateGameInfoFromServer: Q,
                    isShowAutopilotGainedPoint: V,
                    autopilotPoints: K,
                    hideAutopilotSheet: q
                })), [T, i, p, f, M, J, y, Q, V, K, q]);
                return (0,
                b.jsx)(Le.Provider, {
                    value: te,
                    children: r
                })
            }
              , Ae = r(8031);
            var Me = new class {
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
                    this.connection = new Ae.Z({
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
              , Fe = (0,
            n.createContext)(Me)
              , De = e=>{
                var t = e.children;
                return (0,
                b.jsx)(Fe.Provider, {
                    value: Me,
                    children: t
                })
            }
              , Ue = (0,
            n.createContext)(null)
              , Ve = ()=>(0,
            n.useContext)(Ue)
              , Ge = e=>{
                var t = e.children
                  , r = (0,
                n.useState)(null)
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useContext)(Fe);
                return (0,
                n.useEffect)((()=>{
                    o.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [o]),
                (0,
                b.jsx)(Ue.Provider, {
                    value: s,
                    children: t
                })
            }
              , We = r(46430)
              , He = "racer"
              , Ke = ()=>{
                var e;
                if (!(0,
                oe.y)())
                    return We.Z.getInstance(He) || We.Z.init({
                        project: He
                    }),
                    null !== (e = We.Z.getInstance(He)) && void 0 !== e ? e : We.Z
            }
              , Xe = "guessRecords_new";
            function Ye(e) {
                var t = Ke().get(Xe) || [];
                t.unshift(e),
                Ke().set(Xe, t.slice(0, 5))
            }
            var ze = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Je = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: ze.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: ze.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Qe = (0,
            n.createContext)(Je)
              , qe = ()=>(0,
            n.useContext)(Qe)
              , $e = e=>{
                var t = e.children
                  , r = (0,
                n.useState)(!1)
                  , a = (0,
                u.Z)(r, 2)
                  , s = a[0]
                  , i = a[1]
                  , o = (0,
                n.useState)(5)
                  , d = (0,
                u.Z)(o, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                n.useState)(null)
                  , h = (0,
                u.Z)(m, 2)
                  , x = h[0]
                  , f = h[1]
                  , v = (0,
                n.useState)(null)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1]
                  , w = (0,
                n.useState)(ze.NONE)
                  , C = (0,
                u.Z)(w, 2)
                  , N = C[0]
                  , y = C[1]
                  , O = Ve()
                  , P = Ie().updateGameInfo
                  , E = (0,
                n.useRef)(ze.NONE)
                  , T = (0,
                n.useRef)(1)
                  , R = (0,
                n.useRef)(10)
                  , L = (0,
                n.useRef)(null)
                  , I = (0,
                n.useRef)(null)
                  , B = (0,
                n.useRef)(null)
                  , A = (0,
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
                                t = E.current === ze.UP ? 1 : 0,
                                e.next = 4,
                                Ce({
                                    predict: t
                                });
                            case 4:
                                r = e.sent,
                                (n = r.data) && (j(n.won),
                                P({
                                    points: n.balancePoints,
                                    numChances: n.numChance,
                                    secondToRefresh: n.secondToRefresh
                                }),
                                T.current = n.multiplier,
                                R.current = n.basePoint,
                                L.current = Number(n.changeRate),
                                I.current = n.prevPrice,
                                B.current = n.currentPrice,
                                Ye({
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
                                L.current = null,
                                se(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = ze.NONE,
                                i(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [P]);
                (0,
                n.useEffect)((()=>{
                    var e = null;
                    if (s) {
                        var t = 5;
                        p(t),
                        e = setInterval((()=>{
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            f(null),
                            A())
                        }
                        ), 1e3)
                    }
                    return ()=>{
                        e && clearTimeout(e)
                    }
                }
                ), [A, s]),
                (0,
                n.useEffect)((()=>{
                    if (s && O)
                        if (x) {
                            var e = O > x;
                            y(O === x ? ze.NONE : e ? ze.UP : ze.DOWN)
                        } else
                            f(O)
                }
                ), [x, s, O]);
                var M = (0,
                n.useCallback)((e=>{
                    j(null),
                    i(!0),
                    E.current = e,
                    L.current = null,
                    e === ze.UP && S.act({
                        action: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        anchor: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    e === ze.DOWN && S.act({
                        action: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                        anchor: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), [])
                  , F = (0,
                n.useMemo)((()=>({
                    countdown: _,
                    onButtonClick: M,
                    result: k,
                    isPending: s,
                    currentTrend: N,
                    multiplier: T.current,
                    basePoints: R.current,
                    predict: E.current,
                    changeRate: L.current,
                    prevPrice: I.current,
                    currentPrice: B.current
                })), [_, N, s, T, M, k]);
                return (0,
                b.jsx)(Qe.Provider, {
                    value: F,
                    children: t
                })
            }
              , et = r(94595)
              , tt = r(96450)
              , rt = 2e3
              , nt = 500;
            function at(e) {
                return (Math.abs(e) < 1e-4 ? tt.yx.ceilTruncate : tt.yx.floorTruncate)(e, 4)
            }
            const st = "GuessResult_container__ECdpL"
              , it = "GuessResult_title__fzYxg"
              , ot = "GuessResult_multiplier__yRHWm"
              , ct = "GuessResult_description__R2fup"
              , lt = "GuessResult_detailsIcon__ZE7Ry"
              , ut = "GuessResult_changeRateContainer__a5-N7"
              , dt = "GuessResult_label__+b5Nz"
              , _t = "GuessResult_changeRate__yhVz3"
              , pt = "GuessResult_up__5vYDR"
              , mt = "GuessResult_down__fa-oP"
              , ht = "GuessResult_priceChange__xr6e8"
              , xt = "GuessResult_price__Vk+bY";
            function ft(e) {
                return (0,
                et.xG)((0,
                et.uf)(tt.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var vt = e=>{
                var t = e.className
                  , r = qe()
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
                            ), rt)
                        }
                        ), nt)
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
                        className: P()(t, st),
                        children: [(0,
                        b.jsx)("p", {
                            className: ot,
                            children: a ? (0,
                            b.jsxs)("span", {
                                className: lt,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: lt,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: it,
                            children: (0,
                            Z.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: ct,
                            children: [null !== i && (0,
                            b.jsxs)("p", {
                                className: ut,
                                children: [(0,
                                b.jsx)("span", {
                                    className: dt,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: P()(_t, {
                                        [pt]: i > 0,
                                        [mt]: i < 0
                                    }),
                                    children: (0,
                                    et.uf)(at(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), o && c && (0,
                            b.jsx)("p", {
                                className: ht,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: xt,
                                        children: ft(o)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: xt,
                                        children: ft(c)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var gt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , kt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , jt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , bt = "/help/okx-racer-terms-and-conditions"
              , wt = r(2663);
            const Ct = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Nt = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Ct.closeBtn,
                closeIconClassName: Ct.closeIcon
            }
              , yt = e=>(0,
            b.jsx)(wt.Z, (0,
            k.Z)((0,
            k.Z)({}, Nt), {}, {
                topContent: e.title ? void 0 : (0,
                b.jsx)("div", {
                    className: Ct.topPadding
                })
            }, e))
              , Ot = r(76983);
            const Pt = "PrimaryButton_button__SJFHA"
              , Zt = "PrimaryButton_buttonText__19AJ7";
            var Et = e=>{
                var t = e.onClick
                  , r = e.text
                  , n = e.className
                  , a = e.disabled
                  , s = void 0 !== a && a;
                return (0,
                b.jsx)(Ot.default, {
                    category: Ot.default.CATEGORY.fill,
                    type: Ot.default.TYPE.primary,
                    size: Ot.default.SIZE.lg,
                    className: P()(Pt, n),
                    onClick: t,
                    disabled: s,
                    children: (0,
                    b.jsx)("div", {
                        className: Zt,
                        children: r
                    })
                })
            }
            ;
            const Tt = "AutoPilot_title__NJa0C"
              , St = "AutoPilot_button__Sg42v";
            var Rt = ()=>{
                var e = Ie()
                  , t = e.isShowAutopilotGainedPoint
                  , r = e.autopilotPoints
                  , n = e.hideAutopilotSheet;
                return (0,
                b.jsxs)(yt, {
                    visible: t,
                    onClose: n,
                    children: [(0,
                    b.jsx)("div", {
                        className: Tt,
                        children: (0,
                        Z.O4)("ok_game_okxracer_title_autodrive_earned_points", {
                            number: r
                        })
                    }), (0,
                    b.jsx)(Et, {
                        className: St,
                        onClick: n,
                        text: (0,
                        Z.O4)("ok_game_okxracer_btn_autodrive_continue_racing")
                    })]
                })
            }
              , Lt = r(59896);
            const It = "BackgroundVideo_container__J5sO2"
              , Bt = "BackgroundVideo_muteButton__04Huj"
              , At = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Mt = "BackgroundVideo_staticImage__EpRTb"
              , Ft = "BackgroundVideo_hide__ZXYN9";
            var Dt, Ut, Vt, Gt, Wt, Ht, Kt = "backgroundVideoSoundOn", Xt = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Yt = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], zt = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], Jt = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(o.Z.cdnBaseUrl).concat(Xt)
            }, Qt = ()=>{
                var e = qe().isPending
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
                  , p = d[1]
                  , m = (0,
                n.useState)(!1)
                  , h = (0,
                u.Z)(m, 2)
                  , x = h[0]
                  , f = h[1]
                  , v = Ke()
                  , g = (0,
                n.useState)((()=>{
                    var e = v.get(Kt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
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
                var N = !i && !_
                  , y = i && x && _
                  , O = i && (!x || !_);
                return (0,
                b.jsxs)("div", {
                    className: It,
                    children: [(0,
                    b.jsx)(Ot.default, {
                        category: Ot.default.CATEGORY.fill,
                        type: Ot.default.TYPE.quaternary,
                        size: Ot.default.SIZE.md,
                        className: Bt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(v.set(Kt, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: At
                        })
                    }), (0,
                    b.jsx)(Lt.Z, {
                        className: P()(Mt, {
                            [Ft]: !N
                        }),
                        src: "".concat(o.Z.cdnBaseUrl).concat(Xt)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Jt), {}, {
                        className: P()({
                            [Ft]: !y
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: Yt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Jt), {}, {
                        className: P()({
                            [Ft]: !O
                        }),
                        ref: t,
                        muted: w,
                        children: zt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(o.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , qt = ["title", "titleId"];
            function $t() {
                return $t = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                $t.apply(this, arguments)
            }
            function er(e, t) {
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
            function tr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = er(e, qt);
                return n.createElement("svg", $t({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Dt || (Dt = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Ut || (Ut = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Vt || (Vt = n.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Gt || (Gt = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Wt || (Wt = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Ht || (Ht = n.createElement("defs", null, n.createElement("filter", {
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
            var rr = n.forwardRef(tr);
            r.p;
            var nr, ar, sr, ir, or, cr, lr = ["title", "titleId"];
            function ur() {
                return ur = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                ur.apply(this, arguments)
            }
            function dr(e, t) {
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
            function _r(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = dr(e, lr);
                return n.createElement("svg", ur({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, nr || (nr = n.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), ar || (ar = n.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), sr || (sr = n.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, n.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), ir || (ir = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), or || (or = n.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), cr || (cr = n.createElement("defs", null, n.createElement("filter", {
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
            var pr = n.forwardRef(_r);
            r.p;
            const mr = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var hr, xr = e=>{
                var t = e.className
                  , r = qe()
                  , a = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , o = Ie().numChances
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
                var p = e=>{
                    var t, r, n;
                    s || d || (_(e === ze.UP ? ze.DOWN : ze.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (n = r.WebApp) && void 0 !== n && n.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    a(e))
                }
                  , m = o <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: P()(mr.instructions, s && mr.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: mr.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: m || d === ze.UP,
                            onClick: ()=>p(ze.UP),
                            type: "button",
                            className: P()(mr.btn, mr.upBtn, {
                                [mr.pressed]: i === ze.UP
                            }),
                            children: [(0,
                            b.jsx)(pr, {
                                className: P()(mr.btnGraphic, mr.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: mr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: mr.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: m || d === ze.DOWN,
                            onClick: ()=>p(ze.DOWN),
                            type: "button",
                            className: P()(mr.btn, mr.downBtn, {
                                [mr.pressed]: i === ze.DOWN
                            }),
                            children: [(0,
                            b.jsx)(rr, {
                                className: P()(mr.btnGraphic, mr.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: mr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: mr.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , fr = ["title", "titleId"];
            function vr() {
                return vr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                vr.apply(this, arguments)
            }
            function gr(e, t) {
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
            function kr(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = gr(e, fr);
                return n.createElement("svg", vr({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, hr || (hr = n.createElement("g", {
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
            var jr = n.forwardRef(kr);
            r.p;
            var br = r(48275);
            const wr = "FuelIndicator_fuelContainer__QIskL"
              , Cr = "FuelIndicator_toTasksIcon__Y7exC"
              , Nr = "FuelIndicator_line__tWBfm"
              , yr = "FuelIndicator_description__EaUsa"
              , Or = "FuelIndicator_fuelIcon__I38Ss"
              , Pr = "FuelIndicator_maxChances__OMSHl"
              , Zr = "FuelIndicator_earnPtsMsg__PjtcT";
            var Er, Tr, Sr = e=>{
                var t = e.className
                  , r = Ie()
                  , n = r.numChances
                  , a = r.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, wr),
                    children: [(0,
                    b.jsx)("span", {
                        className: Or,
                        children: "\u26fd\ufe0f"
                    }), n > 0 ? (0,
                    b.jsx)(br.Z.Line, {
                        className: Nr,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: n / a * 100
                    }, a) : (0,
                    b.jsx)(Y, {
                        to: M,
                        className: Zr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: yr,
                        children: [n, "\xa0", void 0 !== a && 0 !== a && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: Pr,
                                children: a
                            })]
                        })]
                    }), (0,
                    b.jsx)(Y, {
                        to: M,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: Cr
                        })
                    })]
                })
            }
            , Rr = ["title", "titleId"];
            function Lr() {
                return Lr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Lr.apply(this, arguments)
            }
            function Ir(e, t) {
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
            function Br(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Ir(e, Rr);
                return n.createElement("svg", Lr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Er || (Er = n.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), Tr || (Tr = n.createElement("defs", null, n.createElement("linearGradient", {
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
            var Ar = n.forwardRef(Br);
            r.p;
            const Mr = "RefuelTimer_container__wtALO"
              , Fr = "RefuelTimer_description__sD+HM"
              , Dr = "RefuelTimer_timer__LL1+c";
            var Ur = e=>{
                var t = e.className
                  , r = Ie().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, Mr),
                    children: [(0,
                    b.jsx)(Ar, {}), (0,
                    b.jsx)("p", {
                        className: Fr,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: Dr,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const Vr = "CoinPrice_raceTrack__NZO2t"
              , Gr = "CoinPrice_run__f0UIF"
              , Wr = "CoinPrice_coinPriceContainer__YbeUE"
              , Hr = "CoinPrice_content__a-5Jl"
              , Kr = "CoinPrice_fuelIndicator__p+f1I"
              , Xr = "CoinPrice_refuelTimer__tbWMw"
              , Yr = "CoinPrice_hide__bHhxJ"
              , zr = "CoinPrice_label__yTNy0"
              , Jr = "CoinPrice_value__ZjRZz"
              , Qr = "CoinPrice_slotMachine__hUQKt"
              , qr = "SlotMachine_row__a4TO0"
              , $r = "SlotMachine_animate__-G4TR"
              , en = "SlotMachine_column__aR0VE"
              , tn = "SlotMachine_arrows__m1dhv"
              , rn = "SlotMachine_columnContainer__a76pd"
              , nn = "SlotMachine_background__b9TMg"
              , an = "SlotMachine_slot__jwCvC"
              , sn = "SlotMachine_staticColumn__O5zfB"
              , on = "SlotMachine_sm__ZRCig"
              , cn = "SlotMachine_arrow__qOYmf"
              , ln = "SlotMachine_wentUp__z48TO"
              , un = "SlotMachine_down__aYC8C"
              , dn = "SlotMachine_stable__CDMLP"
              , _n = "SlotMachine_wentDown__1fYUS"
              , pn = "SlotMachine_up__IuiYV";
            var mn = e=>{
                var t = e.animate
                  , r = e.result
                  , n = void 0 === r ? 0 : r
                  , a = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: rn,
                    children: [(0,
                    b.jsx)("div", {
                        className: nn
                    }), (0,
                    b.jsxs)("div", {
                        className: en,
                        style: a,
                        children: [(0,
                        b.jsx)("p", {
                            className: an,
                            children: n
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: an,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: an,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , hn = ()=>{
                var e = qe()
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
                  , p = (0,
                n.useState)(!1)
                  , m = (0,
                u.Z)(p, 2)
                  , h = m[0]
                  , x = m[1];
                return (0,
                n.useEffect)((()=>{
                    r && x(!0)
                }
                ), [r]),
                (0,
                n.useEffect)((()=>{
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? ze.UP : 0 === e ? ze.NONE : ze.DOWN),
                    o(String(Math.abs(Number(at(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    x(!1)) : _(null)
                }
                ), [t]),
                (0,
                b.jsxs)("div", {
                    className: P()(qr, h && $r),
                    children: [(0,
                    b.jsx)("div", {
                        className: rn,
                        children: (0,
                        b.jsxs)("div", {
                            className: P()(tn, {
                                [ln]: d === ze.UP,
                                [_n]: d === ze.DOWN,
                                [dn]: d === ze.NONE
                            }),
                            children: [(0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: P()(cn, pn)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: P()(cn, dn)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: P()(cn, un)
                            })]
                        })
                    }), (0,
                    b.jsx)(mn, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: sn,
                        children: "."
                    }), (0,
                    b.jsx)(mn, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(mn, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)(mn, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(mn, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: P()(sn, on),
                        children: "%"
                    })]
                })
            }
              , xn = ()=>{
                var e = Ve()
                  , t = qe()
                  , r = t.isPending
                  , a = t.changeRate
                  , s = Ie().countdownDisplay
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
                    ), nt)),
                    t
                }
                ), [a, r]);
                var d = e ? "$".concat((0,
                et.uf)(tt.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !r;
                return (0,
                b.jsxs)("div", {
                    className: Wr,
                    children: [(0,
                    b.jsx)(jr, {
                        className: P()(Vr, r && Gr)
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Hr, c && Yr),
                        children: [(0,
                        b.jsx)("p", {
                            className: zr,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Jr,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Hr, !c && Yr),
                        children: [(0,
                        b.jsxs)("p", {
                            className: zr,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Qr,
                            children: (0,
                            b.jsx)(hn, {})
                        })]
                    }), (0,
                    b.jsx)(Sr, {
                        className: Kr
                    }), (0,
                    b.jsx)("div", {
                        className: P()(Xr, !_ && Yr),
                        children: (0,
                        b.jsx)(Ur, {})
                    })]
                })
            }
            ;
            const fn = "LandingPage_container__pU2cC"
              , vn = "LandingPage_resultOverlay__WSYZb"
              , gn = "LandingPage_disclaimer__pVRHC"
              , kn = "LandingPage_recordsBtnContainer__Anr4Y"
              , jn = "LandingPage_backgroundVideo__flTkH"
              , bn = "LandingPage_content__D0ZLW"
              , wn = "LandingPage_points__Ruq4j"
              , Cn = "LandingPage_coinPrice__nJ0nj"
              , Nn = "LandingPage_btnContainer__IEll8"
              , yn = "LandingPage_termsAndConditions__MdClU";
            var On = r(22387);
            const Pn = "UserPointCounter_pointCounter__-QAj8"
              , Zn = "UserPointCounter_hide__o4qTQ"
              , En = "UserPointCounter_points__d3HeG"
              , Tn = "UserPointCounter_countdown__Z7xGo"
              , Sn = "UserPointCounter_title__B-gN-"
              , Rn = "UserPointCounter_value__2a23E";
            var Ln = ()=>{
                var e = Ie().points
                  , t = (0,
                On.Z)(e)
                  , r = qe()
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
                    et.uf)(String(e))),
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
                    className: Pn,
                    children: [(0,
                    b.jsxs)("p", {
                        className: P()(Sn, l && Zn),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: i,
                        className: P()(En, l && Zn),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: P()(Tn, !l && Zn),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: Rn,
                            children: s
                        })]
                    })]
                })
            }
            ;
            const In = "ViewRecordsButton_button__MRo78"
              , Bn = "ViewRecordsButton_btnIcon__prKlS"
              , An = "ViewRecordsButton_title__obA3r"
              , Mn = "ViewRecordsButton_container__N3Rrb"
              , Fn = "ViewRecordsButton_recordContainer__ruZVu"
              , Dn = "ViewRecordsButton_recordField__dACwq"
              , Un = "ViewRecordsButton_label__xt3Hw"
              , Vn = "ViewRecordsButton_value__lTHA5"
              , Gn = "ViewRecordsButton_trendIcon__3RV6P"
              , Wn = "ViewRecordsButton_up__EC1B6"
              , Hn = "ViewRecordsButton_down__4PWTz"
              , Kn = "ViewRecordsButton_timestamp__P0JEp"
              , Xn = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , Yn = "ViewRecordsButton_description__F22UB";
            var zn = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                b.jsxs)("div", {
                    className: Dn,
                    children: [(0,
                    b.jsx)("p", {
                        className: Un,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: Vn,
                        children: r
                    })]
                })
            }
              , Jn = ()=>(0,
            b.jsxs)("button", {
                className: In,
                type: "button",
                onClick: ()=>{
                    var e = Ke().get(Xe) || []
                      , t = (0,
                    b.jsx)(b.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , n = Wn
                              , a = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            n = Hn,
                            a = "okx-growth-trending-down"),
                            (0,
                            b.jsxs)("div", {
                                className: Fn,
                                children: [(0,
                                b.jsx)(zn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    b.jsxs)(b.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        b.jsx)(E.Z, {
                                            className: P()(Gn, n),
                                            iconName: a
                                        })]
                                    })
                                }), (0,
                                b.jsx)(zn, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                b.jsx)(zn, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                b.jsx)("p", {
                                    className: Kn,
                                    children: (0,
                                    et.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        b.jsxs)("div", {
                            className: Xn,
                            children: [(0,
                            b.jsx)("p", {
                                className: An,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            b.jsx)("p", {
                                className: Yn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = wt.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, Nt), {}, {
                            topContent: e.title ? void 0 : (0,
                            b.jsx)("div", {
                                className: Ct.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        b.jsx)("span", {
                            className: An,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: Mn,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                b.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Bn
                })]
            })
              , Qn = ()=>((0,
            n.useEffect)((()=>{
                S.act({
                    action: "OkxRacerLandingPage_Page_FullPage_View",
                    anchor: "OkxRacerLandingPage_Page_FullPage_View",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
            ), []),
            (0,
            b.jsxs)("div", {
                className: fn,
                children: [(0,
                b.jsx)("div", {
                    className: kn,
                    children: (0,
                    b.jsx)(Jn, {})
                }), (0,
                b.jsx)("div", {
                    className: jn,
                    children: (0,
                    b.jsx)(Qt, {})
                }), (0,
                b.jsxs)("div", {
                    className: bn,
                    children: [(0,
                    b.jsx)("div", {
                        className: wn,
                        children: (0,
                        b.jsx)(Ln, {})
                    }), (0,
                    b.jsx)("div", {
                        className: Cn,
                        children: (0,
                        b.jsx)(xn, {})
                    }), (0,
                    b.jsx)(xr, {
                        className: Nn
                    })]
                }), (0,
                b.jsx)("button", {
                    className: yn,
                    onClick: ()=>{
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(bt)
                    }
                    ,
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                }), (0,
                b.jsx)("p", {
                    className: gn,
                    children: (0,
                    Z.O4)("ok_game_okxracer_disclaimer")
                }), (0,
                b.jsx)(vt, {
                    className: vn
                }), (0,
                b.jsx)(Rt, {})]
            }))
              , qn = ()=>(0,
            b.jsx)($e, {
                children: (0,
                b.jsx)(Qn, {})
            })
              , $n = r(24084)
              , ea = r(58338);
            const ta = "PageTitle_title__IQ7TT";
            var ra = e=>{
                var t = e.html;
                return (0,
                b.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        ea.dU)(t)
                    },
                    className: ta
                })
            }
            ;
            const na = "LeaderBoard_container__0DJSO"
              , aa = "LeaderBoard_desc__MFxC+"
              , sa = "LeaderBoard_inviteList__mV9a7"
              , ia = "LeaderBoard_tabActiveClassName__7Xv4B"
              , oa = "LeaderBoard_tabsContent__KCGtW"
              , ca = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var la = e=>{
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: P()(ca, t)
                })
            }
            ;
            const ua = "InviteButton_invite-btn__aAMio"
              , da = "InviteButton_btn-a__At-wO"
              , _a = "InviteButton_btn-container__sYDy5"
              , pa = "InviteButton_copyButton__znucI"
              , ma = "InviteButton_copyIcon__QZgE9";
            var ha = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , n = e.className
                  , a = (e=>{
                    var t = new $.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , n = "https://t.me/".concat(gt.BOT_NAME, "/").concat(gt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: n,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(n), "&text=").concat(r)
                    }
                }
                )(Ie().linkCode)
                  , s = a.shareUrl
                  , i = a.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: P()(n, _a),
                    children: [(0,
                    b.jsx)("a", {
                        className: da,
                        href: s,
                        children: (0,
                        b.jsx)(Et, {
                            onClick: ()=>{
                                S.act({
                                    action: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                    anchor: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                    params: {},
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }
                            ,
                            className: ua,
                            text: r
                        })
                    }), (0,
                    b.jsx)(Ot.default, {
                        strictCircle: !0,
                        category: Ot.default.CATEGORY.fill,
                        type: Ot.default.TYPE.primary,
                        size: Ot.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(i),
                                se(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                se(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: pa,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: ma
                        })
                    })]
                })
            }
            ;
            const xa = "RankList_listItem__qJvXJ"
              , fa = "RankList_name__sxTWa"
              , va = "RankList_mask__ldBi8"
              , ga = "RankList_hightLightRow__xYkeg"
              , ka = "RankList_listHeader__KVGnw"
              , ja = "RankList_rank__k2m5R"
              , ba = "RankList_icon__1-SRV"
              , wa = "RankList_point__D5mVw"
              , Ca = "RankList_pointIcon__k80Wy"
              , Na = "RankList_InviteButton__D6ute"
              , ya = "RankList_noFirendsNote__Ckkil"
              , Oa = "RankList_under__MJ5We"
              , Pa = "RankList_rankItemPlaceholder__z-upW"
              , Za = "RankList_rank-name__YEqnc"
              , Ea = "RankList_rank-score__gtI+m";
            var Ta = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Sa = 1
              , Ra = 2
              , La = e=>{
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: ka,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            et.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Ia = ()=>(0,
            b.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                b.jsxs)("div", {
                    className: Pa,
                    children: [(0,
                    b.jsx)(la, {
                        className: Za
                    }), (0,
                    b.jsx)(la, {
                        className: Ea
                    })]
                }, t)))
            })
              , Ba = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: P()(xa, r && ga),
                    children: [(0,
                    b.jsx)("div", {
                        className: va
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: P()(ja, ba),
                        children: Ta[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: ja,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: fa,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: wa,
                        children: [(0,
                        b.jsx)("span", {
                            className: Ca,
                            children: Ta[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            et.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Aa = e=>{
                var t = e.pageType
                  , r = void 0 === t ? Sa : t
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
                  , f = x[0]
                  , v = x[1]
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
                                    r !== Sa) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    ye(n);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    Oe(n);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (a = e.t0) && a.rows && (m(a.rows),
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
                    b.jsx)(La, {
                        total: f
                    }), i ? (0,
                    b.jsx)(Ia, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [N && (0,
                        b.jsx)(Ba, {
                            item: j,
                            isHighlight: !0
                        }), p.map(((e,t)=>(0,
                        b.jsx)(Ba, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    b.jsx)("div", {
                        className: Oa
                    }), r === Sa && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === p.length && (0,
                        b.jsx)("div", {
                            className: ya,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === p.length && (0,
                        b.jsx)(ha, {
                            className: Na,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Ma = ()=>(0,
            b.jsxs)("div", {
                className: na,
                children: [(0,
                b.jsx)(ra, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_race_to_top", {
                        top: "<em>".concat((0,
                        Z.O4)("ok_game_okxracer_top"), "</em>")
                    })
                }), (0,
                b.jsx)("div", {
                    className: aa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                b.jsxs)($n.Z, {
                    activeClassName: ia,
                    noPadding: !0,
                    size: $n.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    b.jsx)($n.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: Sa,
                        className: oa,
                        children: (0,
                        b.jsx)("div", {
                            className: sa,
                            children: (0,
                            b.jsx)(Aa, {
                                pageType: Sa
                            })
                        })
                    }), (0,
                    b.jsx)($n.Z.TabPane, {
                        className: oa,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: Ra,
                        children: (0,
                        b.jsx)("div", {
                            className: sa,
                            children: (0,
                            b.jsx)(Aa, {
                                pageType: Ra
                            })
                        })
                    })]
                })]
            });
            const Fa = "QrCode_container__r4Fu7"
              , Da = "QrCode_qrCode__16PWa"
              , Ua = "QrCode_title__+cibb"
              , Va = "QrCode_message__eaOzW";
            var Ga = ()=>(0,
            b.jsxs)("div", {
                className: Fa,
                children: [(0,
                b.jsx)(Lt.Z, {
                    className: Da,
                    src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                b.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        ea.dU)((0,
                        Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Ua
                }), (0,
                b.jsx)("p", {
                    className: Va,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , Wa = r(90534);
            const Ha = "PullupList_loading__+51Dh"
              , Ka = "PullupList_listLoadItem__XcvkH"
              , Xa = "PullupList_listLeft__4eGh6"
              , Ya = "PullupList_listRight__w7Ely"
              , za = "PullupList_listLoading__whJeg";
            var Ja = ()=>(0,
            b.jsxs)("div", {
                className: P()(Ka),
                children: [(0,
                b.jsx)(la, {
                    className: Xa
                }), (0,
                b.jsx)(la, {
                    className: Ya
                })]
            })
              , Qa = ()=>(0,
            b.jsx)("div", {
                className: za,
                children: Array(3).fill(null).map(((e,t)=>(0,
                b.jsx)(Ja, {}, t)))
            })
              , qa = e=>{
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
                  , f = (0,
                n.useState)(!1)
                  , v = (0,
                u.Z)(f, 2)
                  , g = v[0]
                  , k = v[1]
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
                  , w = (0,
                Wa.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = e=>{
                    e[0].isIntersecting && !p && !1 === h.current.stop && k(!g)
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
                ), [p]),
                (0,
                n.useEffect)((()=>{
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    b.jsx)("div", {
                        className: Ha,
                        ref: x,
                        children: p && (0,
                        b.jsx)(Qa, {})
                    })]
                })
            }
            ;
            const $a = "InviteList_listItem__q4jhG"
              , es = "InviteList_name__LLQgt"
              , ts = "InviteList_point__kXtCn"
              , rs = "InviteList_earnedPrice__4vAfw"
              , ns = "InviteList_pointNumber__v4P1H";
            var as = ()=>{
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
                                    Ne(n);
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
                        className: rs,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: ns,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    et.uf)(r)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(qa, {
                        loadData: s,
                        children: (e,t)=>(0,
                        b.jsxs)("div", {
                            className: $a,
                            children: [(0,
                            b.jsx)("div", {
                                className: es,
                                children: e.extInviteeName
                            }), (0,
                            b.jsx)("div", {
                                className: ts,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    et.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const ss = "ReferralsPage_container__V48m1"
              , is = "ReferralsPage_inviteDetail__L1MhM"
              , os = "ReferralsPage_detailItem__ujOp+"
              , cs = "ReferralsPage_dot__zKW7L"
              , ls = "ReferralsPage_detailTitle__OE657"
              , us = "ReferralsPage_detailInfo__YC+Y9"
              , ds = "ReferralsPage_inviteList__Jksx8";
            var _s = ()=>{
                var e = [{
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
                    S.act({
                        action: "OkxRacerFriendsPage_Page_FullPage_View",
                        anchor: "OkxRacerFriendsPage_Page_FullPage_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), []),
                (0,
                b.jsxs)("div", {
                    className: ss,
                    children: [(0,
                    b.jsx)(ra, {
                        html: "".concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " <em>").concat((0,
                        Z.O4)("ok_game_okxracer_friends_hint2"), "</em>")
                    }), (0,
                    b.jsx)("div", {
                        className: is,
                        children: e.map((e=>(0,
                        b.jsxs)("div", {
                            className: os,
                            children: [(0,
                            b.jsx)("div", {
                                className: cs
                            }), (0,
                            b.jsx)("div", {
                                className: ls,
                                children: e.title
                            }), (0,
                            b.jsx)("div", {
                                className: us,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    b.jsx)("div", {
                        className: ds,
                        children: (0,
                        b.jsx)(as, {})
                    }), (0,
                    b.jsx)(ha, {})]
                })
            }
            ;
            const ps = "Tag_tag__tkWly";
            var ms, hs, xs, fs, vs, gs, ks, js, bs = e=>{
                var t = e.text
                  , r = e.className;
                return (0,
                b.jsx)("span", {
                    className: P()(ps, r),
                    children: t || (0,
                    Z.O4)("commonall_tag_text_new")
                })
            }
            , ws = ["title", "titleId"];
            function Cs() {
                return Cs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Cs.apply(this, arguments)
            }
            function Ns(e, t) {
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
            function ys(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Ns(e, ws);
                return n.createElement("svg", Cs({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, ms || (ms = n.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), hs || (hs = n.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), xs || (xs = n.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), fs || (fs = n.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), vs || (vs = n.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), gs || (gs = n.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ks || (ks = n.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), js || (js = n.createElement("defs", null, n.createElement("filter", {
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
            var Os = n.forwardRef(ys);
            r.p;
            const Ps = "index_container__DxcAz"
              , Zs = "index_logo__h1T0A"
              , Es = "index_tlt__dqJHn"
              , Ts = "index_subtlt__m3p5l";
            var Ss = ()=>(0,
            b.jsxs)("div", {
                className: Ps,
                children: [(0,
                b.jsx)(Os, {
                    className: Zs
                }), (0,
                b.jsx)("div", {
                    className: Es,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                b.jsx)("div", {
                    className: Ts,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Rs = a().memo(Ss);
            var Ls, Is = ["title", "titleId"];
            function Bs() {
                return Bs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Bs.apply(this, arguments)
            }
            function As(e, t) {
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
            function Ms(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = As(e, Is);
                return n.createElement("svg", Bs({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Ls || (Ls = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Fs = n.forwardRef(Ms);
            r.p;
            var Ds, Us = ["title", "titleId"];
            function Vs() {
                return Vs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Vs.apply(this, arguments)
            }
            function Gs(e, t) {
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
            function Ws(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = Gs(e, Us);
                return n.createElement("svg", Vs({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Ds || (Ds = n.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Hs = n.forwardRef(Ws);
            r.p;
            var Ks, Xs = ["title", "titleId"];
            function Ys() {
                return Ys = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                Ys.apply(this, arguments)
            }
            function zs(e, t) {
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
            function Js(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = zs(e, Xs);
                return n.createElement("svg", Ys({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, Ks || (Ks = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Qs = n.forwardRef(Js);
            r.p;
            var qs = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , $s = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
            function ei(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: qs.SIGNUP,
                    status: $s(qs.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: qs.INSTALL,
                    status: $s(qs.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: qs.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: qs.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var ti = e=>{
                var t = (0,
                n.useState)(ei(e))
                  , r = (0,
                u.Z)(t, 2)
                  , a = r[0]
                  , s = r[1];
                (0,
                n.useEffect)((()=>{
                    s(ei(e))
                }
                ), [e]);
                var i = (0,
                n.useCallback)((t=>{
                    var r, n, i = a.find((e=>e.type === t));
                    if (i) {
                        switch (null === (r = window) || void 0 === r || null === (n = r.Telegram) || void 0 === n || n.WebApp.openLink(i.url),
                        t) {
                        case qs.SIGNUP:
                        case qs.INSTALL:
                            o = t,
                            window.localStorage && window.localStorage.setItem(o, "1"),
                            s(ei(e))
                        }
                        var o;
                        switch (t) {
                        case qs.SIGNUP:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_Signup_View",
                                anchor: "OKXRacerSurprisesPage_Page_Signup_View",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case qs.INSTALL:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                anchor: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case qs.CONNECT:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                anchor: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case qs.KYC:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                anchor: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            })
                        }
                    }
                }
                ), [a, e]);
                return {
                    list: a,
                    handleClick: i
                }
            }
            ;
            const ri = "index_container__ZAgXf"
              , ni = "index_container_avatar__HvLrA"
              , ai = "index_container_task__OmqjX"
              , si = "index_task_tlt__pIkV2"
              , ii = "index_tlt_sub__2aRiA"
              , oi = "index_tlt_arrow__kdbln"
              , ci = "index_task_subtlt__mzIaE";
            var li = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: ni,
                    children: r ? (0,
                    b.jsx)(Qs, {}) : (0,
                    b.jsx)(Hs, {})
                })
            }
              , ui = e=>{
                var t = e.title
                  , r = e.subTitle
                  , n = e.type
                  , a = e.onClick
                  , s = e.status;
                return (0,
                b.jsxs)("div", {
                    className: ai,
                    onClick: ()=>{
                        a(n)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: si,
                        children: [(0,
                        b.jsx)(li, {
                            status: s
                        }), " ", (0,
                        b.jsx)("div", {
                            className: ii,
                            children: t
                        }), (0,
                        b.jsx)(Fs, {
                            className: oi
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: ci,
                        children: r
                    })]
                })
            }
            ;
            const di = e=>{
                var t = ti(e)
                  , r = t.list
                  , n = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: ri,
                    children: r.map((e=>(0,
                    b.jsx)(ui, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: n
                    }), e.type)))
                })
            }
            ;
            var _i, pi, mi, hi = ["title", "titleId"];
            function xi() {
                return xi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ,
                xi.apply(this, arguments)
            }
            function fi(e, t) {
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
            function vi(e, t) {
                var r = e.title
                  , a = e.titleId
                  , s = fi(e, hi);
                return n.createElement("svg", xi({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": a
                }, s), r ? n.createElement("title", {
                    id: a
                }, r) : null, _i || (_i = n.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), pi || (pi = n.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), mi || (mi = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var gi = n.forwardRef(vi);
            r.p;
            const ki = "index_loader__kDy+9"
              , ji = "index_container__X8xX8"
              , bi = "index_container_subtlt__LyYby"
              , wi = "index_container_info__c9KQP"
              , Ci = "index_info_icon__i5uhI"
              , Ni = "index_container_btn__rWex7"
              , yi = "index_tncContainer__McO06"
              , Oi = "index_termsAndConditions__Gifk+"
              , Pi = "index_autoPilotTask__tP9yX"
              , Zi = "index_autoPilotIcon__334Cy"
              , Ei = "index_autoPilotTitle__7zwDH"
              , Ti = "index_newTag__h508t"
              , Si = "index_autoPilotDesc__D59sa";
            var Ri = ()=>(0,
            b.jsx)(Rs, {})
              , Li = e=>(0,
            b.jsxs)("div", {
                className: ji,
                children: [(0,
                b.jsx)(ra, {
                    html: (0,
                    Z.O4)("ok_game_okxracer_title_ready_surprises")
                }), (0,
                b.jsx)("div", {
                    className: bi,
                    children: (0,
                    Z.O4)("ok_game_okxracer_text_autodrive_complete_steps")
                }), (0,
                b.jsxs)("div", {
                    className: Pi,
                    children: [(0,
                    b.jsx)("div", {
                        className: Zi,
                        children: "\ud83d\udede"
                    }), (0,
                    b.jsxs)("div", {
                        children: [(0,
                        b.jsxs)("div", {
                            className: Ei,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_title_autodriving"), (0,
                            b.jsx)(bs, {
                                className: Ti
                            })]
                        }), (0,
                        b.jsx)("div", {
                            className: Si,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_play_away")
                        })]
                    })]
                }), (0,
                b.jsx)(di, (0,
                k.Z)({}, e)), (0,
                b.jsxs)("div", {
                    className: wi,
                    children: [(0,
                    b.jsx)(gi, {
                        className: Ci,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                b.jsx)(Et, {
                    onClick: e.onClick,
                    className: Ni,
                    text: (0,
                    Z.O4)("ok_game_okxracer_surprises_verify")
                }), (0,
                b.jsx)("div", {
                    className: yi,
                    children: (0,
                    b.jsx)("button", {
                        className: Oi,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(bt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , Ii = ()=>{
                var e = (0,
                n.useState)(!0)
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , a = t[1]
                  , s = (0,
                n.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP"
                })
                  , i = (0,
                u.Z)(s, 2)
                  , o = i[0]
                  , d = i[1]
                  , _ = (0,
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
                                Re();
                            case 4:
                                r = e.sent,
                                a(!1),
                                r && d(r),
                                !t || null !== r && void 0 !== r && r.isKyc && r.isConnectTelegram || se(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1),
                                se(!1, (0,
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
                        document.hidden || _()
                    }
                    return _(),
                    document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [_]),
                (0,
                n.useEffect)((()=>{
                    S.act({
                        action: "OKXRacerSurprisesPage_Page_FullPage_View",
                        anchor: "OKXRacerSurprisesPage_Page_FullPage_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), []),
                r ? (0,
                b.jsx)("div", {
                    className: ki,
                    children: (0,
                    b.jsx)(br.Z, {})
                }) : o.isConnectTelegram && o.isKyc ? (0,
                b.jsx)(Ri, {}) : (0,
                b.jsx)(Li, (0,
                k.Z)((0,
                k.Z)({}, o), {}, {
                    onClick: ()=>{
                        _(!0),
                        S.act({
                            action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                            anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }
                }))
            }
              , Bi = (0,
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
              , Ai = ()=>(0,
            n.useContext)(Bi)
              , Mi = e=>{
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
                  , m = Ie().updateGameInfoFromServer
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
                                Promise.allSettled([Ze(), Te()]);
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
                                    Ee({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Ze(), m()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && i(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ie(e.t0);
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
                  , f = function() {
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
                                    Se({
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Te(), m()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && p(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ie(e.t0);
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
                b.jsx)(Bi.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: f
                    },
                    children: t
                })
            }
              , Fi = e=>(null === e || void 0 === e ? void 0 : e.type) === jt.DailyBoost
              , Di = e=>"actionType"in e && e.actionType === Pe.UnLock
              , Ui = e=>{
                var t = e.pointCost
                  , r = e.curStage
                  , n = e.totalStage;
                return !Fi(e) && r >= n ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                Z.O4)("ok_game_okxracer_free") : "".concat((0,
                et.uf)(-t, {
                    zeroSign: "-"
                }), " pts"))
            }
            ;
            const Vi = "index_sheet__FbHHx"
              , Gi = "index_sheet-icon__H2xCV"
              , Wi = "index_boostSheetTag__NbYFf"
              , Hi = "index_sheet-title__RInQ-"
              , Ki = "index_sheet-desc__W9myB"
              , Xi = "index_sheet-data__FALtV"
              , Yi = "index_sheet-point__Xrsvs"
              , zi = "index_sheet-lvl__f1+W-"
              , Ji = "index_lockBtnContainer__4DPO7"
              , Qi = "index_btn__bxKiJ"
              , qi = "index_boost-data-split-point__TaGIo";
            var $i = e=>{
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
                  , _ = Di(a)
                  , p = !1
                  , m = u
                  , h = d;
                return _ && (o ? (m = a.unlockDescription,
                h = a.unlockButtonText) : m = a.ruleDescription,
                s === i && (p = !0,
                h = a.activatedButtonText)),
                (0,
                b.jsxs)("div", {
                    className: Vi,
                    children: [(0,
                    b.jsx)("div", {
                        className: Gi,
                        children: c
                    }), _ && (0,
                    b.jsx)(bs, {
                        className: Wi
                    }), (0,
                    b.jsx)("div", {
                        className: Hi,
                        children: l
                    }), (0,
                    b.jsx)("div", {
                        className: Ki,
                        children: m
                    }), (0,
                    b.jsxs)("div", {
                        className: Xi,
                        children: [(0,
                        b.jsx)("span", {
                            className: Yi,
                            children: Ui(t)
                        }), (Fi(t) || s < i) && (0,
                        b.jsx)("span", {
                            className: qi
                        }), (0,
                        b.jsx)("span", {
                            className: zi,
                            children: Fi(t) ? "".concat(i - s, "/").concat(i) : "Lvl ".concat(s)
                        })]
                    }), _ && o ? (0,
                    b.jsx)(Y, {
                        to: D,
                        className: Ji,
                        children: (0,
                        b.jsx)(Et, {
                            text: h
                        })
                    }) : (0,
                    b.jsx)(Et, {
                        onClick: ()=>{
                            r(t)
                        }
                        ,
                        className: Qi,
                        text: h,
                        disabled: p
                    })]
                })
            }
            ;
            const eo = "index_boost-item__k6pnm"
              , to = "index_boost-icon__wH6Dh"
              , ro = "index_boost-title__9R-Ry"
              , no = "index_newTag__tgIea"
              , ao = "index_boost-desc__k1Big"
              , so = "index_boost-data__+0cnG"
              , io = "index_boost-data-split-point__moT+k"
              , oo = "index_boost-data-stage__8CAgC"
              , co = "index_boostItemPlaceholder__NaUkk"
              , lo = "index_locked__sM-YP"
              , uo = "index_unlockIcon__whxqz"
              , _o = "index_unlockButton__C3EY5";
            var po = e=>{
                var t = e.boost
                  , r = t.curStage
                  , n = t.totalStage
                  , a = t.isLocked
                  , s = t.context;
                if (Di(s)) {
                    if (a)
                        return (0,
                        b.jsx)("div", {
                            className: so,
                            children: (0,
                            Z.O4)("ok_game_okxracer_text_autodrive_locked")
                        });
                    if (r === n)
                        return (0,
                        b.jsx)("div", {
                            className: so,
                            children: s.activatedButtonText
                        })
                }
                return (0,
                b.jsxs)("div", {
                    className: so,
                    children: [(0,
                    b.jsx)("span", {
                        children: Ui(t)
                    }), (Fi(t) || r < n) && (0,
                    b.jsx)("span", {
                        className: io
                    }), (0,
                    b.jsx)("span", {
                        className: oo,
                        children: Fi(t) ? "".concat(n - r, "/").concat(n) : "Lvl ".concat(r)
                    })]
                })
            }
              , mo = e=>{
                var t = e.boost
                  , r = e.onClick
                  , n = t.id
                  , a = t.context
                  , s = t.isLocked
                  , i = a.icon
                  , o = a.name
                  , c = a.desc
                  , l = Di(a);
                return (0,
                b.jsxs)("div", {
                    className: eo,
                    onClick: ()=>{
                        r(n)
                    }
                    ,
                    children: [(0,
                    b.jsx)("div", {
                        className: to,
                        children: i
                    }), (0,
                    b.jsxs)("div", {
                        className: ro,
                        children: [o, l && (0,
                        b.jsx)(bs, {
                            className: no
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: ao,
                        children: c
                    }), (0,
                    b.jsx)(po, {
                        boost: t
                    }), s && (0,
                    b.jsxs)("div", {
                        className: lo,
                        children: [(0,
                        b.jsx)(E.Z, {
                            className: P()("okx-growth-lock", uo)
                        }), (0,
                        b.jsx)(Ot.default, {
                            category: Ot.default.CATEGORY.text,
                            type: Ot.default.TYPE.primary,
                            size: Ot.default.SIZE.md,
                            icon: "okds-arrow-chevron-right-centered-sm",
                            iconType: Ot.default.ICON_POSITION.tailing,
                            rect: !0,
                            style: {
                                padding: 0,
                                minWidth: "unset"
                            },
                            className: _o,
                            children: (0,
                            Z.O4)("ok_game_okxracer_textbtn_autodrive_unlock")
                        })]
                    })]
                }, n)
            }
              , ho = ()=>(0,
            b.jsxs)("div", {
                className: P()(eo, co),
                children: [(0,
                b.jsx)(la, {
                    className: to
                }), (0,
                b.jsx)(la, {
                    className: ro
                }), (0,
                b.jsx)(la, {
                    className: ao
                }), (0,
                b.jsx)(la, {
                    className: so
                })]
            });
            const xo = "index_boost-item-container__SW62L"
              , fo = "index_boost-item-padding__IwiTB";
            var vo = e=>{
                var t = e.onClick
                  , r = Ai().boosts
                  , a = (0,
                n.useCallback)((e=>{
                    var n = r.find((t=>t.id === e));
                    n && t(n)
                }
                ), [r, t]);
                return (0,
                b.jsxs)("div", {
                    className: xo,
                    children: [(0,
                    b.jsx)("div", {
                        className: fo
                    }), r.length > 0 ? (0,
                    b.jsx)(b.Fragment, {
                        children: r.map((e=>(0,
                        b.jsx)(mo, {
                            boost: e,
                            onClick: a
                        }, null === e || void 0 === e ? void 0 : e.id)))
                    }) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)(ho, {}), (0,
                        b.jsx)(ho, {}), (0,
                        b.jsx)(ho, {})]
                    }), (0,
                    b.jsx)("div", {
                        className: fo
                    })]
                })
            }
            ;
            const go = "BoostArea_boosts-title__hkjWn"
              , ko = "BoostArea_boost-area__AMJbh"
              , jo = "BoostArea_container__qLJSQ";
            var bo = ()=>{
                var e = Ai()
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
                  , h = Ie().points
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
                                    se(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(n) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    se(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    r(t.id);
                                case 11:
                                    e.sent && se(!0);
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
                  , f = (0,
                n.useCallback)((e=>{
                    m(!0),
                    o(e)
                }
                ), []);
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: go,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_upgrade"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsx)("div", {
                        className: ko,
                        children: (0,
                        b.jsxs)("div", {
                            className: jo,
                            children: [(0,
                            b.jsx)(vo, {
                                onClick: f
                            }), (0,
                            b.jsx)(yt, {
                                visible: p,
                                onClose: ()=>{
                                    m(!1)
                                }
                                ,
                                children: i && (0,
                                b.jsx)($i, {
                                    boost: i,
                                    onClick: x
                                })
                            })]
                        })
                    })]
                })
            }
            ;
            const wo = "TaskArea_tasks-title__tN1pb"
              , Co = "TaskArea_container__Iz7a-"
              , No = "TaskArea_task-item__w79wY"
              , yo = "TaskArea_item-left__1r6mY"
              , Oo = "TaskArea_item-right__lk7YG"
              , Po = "TaskArea_icon__RfKa0"
              , Zo = "TaskArea_title__OyXme"
              , Eo = "TaskArea_state__d9FdX"
              , To = "TaskArea_sheet-container__lottt"
              , So = "TaskArea_sheet-name__CibLI"
              , Ro = "TaskArea_sheet-desc__aaGRQ"
              , Lo = "TaskArea_btn__HU6oE"
              , Io = "TaskArea_done__fmgjd"
              , Bo = "TaskArea_taskItemPlaceholder__JXSdR"
              , Ao = "TaskArea_task__cxfzp";
            var Mo = ()=>{
                var e = Ai()
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
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                Wa.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == kt.finished)
                            return;
                        o(r),
                        m(!0)
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
                                    e.sent && se(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    m(!1);
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
                b.jsx)("div", {
                    children: Array.from({
                        length: 2
                    }).map(((e,t)=>(0,
                    b.jsx)("div", {
                        className: P()(Bo),
                        children: (0,
                        b.jsx)(la, {
                            className: Ao
                        })
                    }, t)))
                });
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: wo,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_tasks"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsxs)("div", {
                        className: Co,
                        children: [t.length > 0 ? t.map((e=>e && (e=>{
                            var t = e.id
                              , r = e.points
                              , n = e.state
                              , a = e.context;
                            return (0,
                            b.jsxs)("div", {
                                className: No,
                                onClick: ()=>{
                                    h(t)
                                }
                                ,
                                children: [(0,
                                b.jsxs)("div", {
                                    className: yo,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: Zo,
                                        children: a.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Eo,
                                        children: " ".concat(n === kt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                        et.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0,
                                b.jsx)("div", {
                                    className: Oo,
                                    children: n === kt.finished ? (0,
                                    b.jsx)("div", {
                                        className: Io,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_done")
                                    }) : (0,
                                    b.jsx)(E.Z, {
                                        className: P()("okx-growth-chevrons-right", Po)
                                    })
                                })]
                            }, t)
                        }
                        )(e))) : (0,
                        b.jsx)(f, {}), i && (0,
                        b.jsx)(yt, {
                            noContentPadding: !0,
                            visible: p,
                            onClose: ()=>{
                                m(!1)
                            }
                            ,
                            children: (()=>{
                                var e = i.context
                                  , t = e.desc
                                  , r = e.btnText;
                                return (0,
                                b.jsxs)("div", {
                                    className: To,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: So,
                                        children: e.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Ro,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            ea.dU)(t)
                                        }
                                    }), (0,
                                    b.jsx)(Et, {
                                        className: Lo,
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
            const Fo = "TaskPage_container__5KfIM"
              , Do = "TaskPage_block__kt8oo"
              , Uo = "TaskPage_block-boost__QYQXL"
              , Vo = "TaskPage_points-title__4hW9Y"
              , Go = "TaskPage_points-content__+yK3g";
            var Wo = ()=>{
                var e = Ie().points;
                return (0,
                b.jsxs)("div", {
                    className: Fo,
                    children: [(0,
                    b.jsx)("div", {
                        className: Do,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: Vo,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: Go,
                                children: tt.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    b.jsx)("div", {
                        className: Uo,
                        children: (0,
                        b.jsx)(bo, {})
                    }), (0,
                    b.jsx)("div", {
                        className: Do,
                        children: (0,
                        b.jsx)(Mo, {})
                    })]
                })
            }
              , Ho = ()=>(0,
            b.jsx)(Mi, {
                children: (0,
                b.jsx)(Wo, {})
            })
              , Ko = ()=>{
                var e = (0,
                n.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , a = t[1]
                  , i = ne().uid
                  , o = (0,
                n.useMemo)(x, []);
                (0,
                n.useMemo)((()=>{
                    p.Z.setConfig({
                        popupClassName: "theme-dark"
                    }),
                    m.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var h = q().hasWebviewProxy;
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
                    className: P()(f, "theme-dark"),
                    children: (0,
                    b.jsx)(_.Z, {
                        localeData: r,
                        fetchConfig: o,
                        children: k ? (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(De, {
                                children: (0,
                                b.jsx)(Be, {
                                    children: (0,
                                    b.jsx)(Ge, {
                                        children: (0,
                                        b.jsx)("main", {
                                            className: g,
                                            children: (0,
                                            b.jsxs)(s.Switch, {
                                                children: [(0,
                                                b.jsx)(s.Route, {
                                                    path: B,
                                                    component: w(qn),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: F,
                                                    component: N(Ma),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: M,
                                                    component: w(Ho),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: A,
                                                    component: N(_s),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: D,
                                                    component: N(Ii),
                                                    exact: !0
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            b.jsx)("div", {
                                className: v,
                                children: (0,
                                b.jsx)(J, {})
                            })]
                        }) : (0,
                        b.jsx)(Ga, {})
                    })
                })
            }
              , Xo = document.getElementById("root");
            if (Xo) {
                var Yo = (0,
                b.jsx)(s.BrowserRouter, {
                    basename: o.Z.langPath,
                    children: (0,
                    b.jsx)(ae, {
                        children: (0,
                        b.jsx)(Ko, {})
                    })
                });
                (0,
                i.createRoot)(Xo).render(Yo)
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
    var n = r.O(void 0, [2675, 5825, 9824, 5890, 6970, 7569, 3599, 4084, 4148, 3020, 2094], (()=>r(74085)));
    n = r.O(n)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.00e2313c.js.map
