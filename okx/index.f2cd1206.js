(()=>{
    "use strict";
    var e = {
        96563: (e,t,r)=>{
            var a = r(87363)
              , n = r.n(a);
            const s = ReactRouterDOM;
            r(75139);
            var i = r(73271)
              , c = r(53949)
              , o = (r(78599),
            r(74165))
              , l = r(15861)
              , u = r(70885)
              , d = r(46541)
              , _ = r(1677)
              , p = r(2627)
              , m = r(45929)
              , h = r(8786)
              , f = ()=>{
                var e, t, r = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === r || void 0 === r ? void 0 : r.language_code) || "en"] || "en_US";
                return h.Z.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            }
            ;
            const x = "App_container__p+0qT"
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
              , B = ()=>{
                S.act({
                    action: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , I = "/mini-app/racer"
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
              , Y = ["iconName", "label", "onClick"]
              , X = e=>{
                var t = e.children
                  , r = e.className
                  , a = (0,
                y.Z)(e, K)
                  , n = (0,
                s.useLocation)().hash;
                return (0,
                b.jsx)(s.Link, {
                    className: r,
                    to: "".concat(a.to).concat(n),
                    onClick: a.onClick,
                    children: t
                })
            }
              , z = e=>{
                var t = e.iconName
                  , r = e.label
                  , a = e.onClick
                  , n = (0,
                y.Z)(e, Y)
                  , i = (0,
                s.useRouteMatch)({
                    path: n.to,
                    exact: !0
                });
                return (0,
                b.jsxs)(X, {
                    className: P()(V, i && G),
                    to: n.to,
                    onClick: a,
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
              , Q = ()=>(0,
            b.jsxs)("div", {
                className: U,
                children: [(0,
                b.jsx)(z, {
                    iconName: "okx-growth-home",
                    to: I,
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
                    onClick: B
                }), (0,
                b.jsx)(z, {
                    iconName: "okx-growth-surprises",
                    to: D,
                    label: (0,
                    Z.O4)("ok_game_okxracer_surprises")
                })]
            });
            function q(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var J = ()=>((0,
            a.useEffect)((()=>{
                var e, t, r, a, n, s, i, c, o, l, u, d;
                null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (r = (a = window.Telegram.WebApp).ready) || void 0 === r || r.call(a),
                null === (n = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === n || n.call(s, "#0D0D0D"),
                null === (i = (c = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(c, "#0D0D0D"),
                null === (o = (l = window.Telegram.WebApp).expand) || void 0 === o || o.call(l),
                null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d));
                document.addEventListener("contextmenu", (e=>e.preventDefault()))
            }
            ), []),
            {
                hasWebviewProxy: q(window)
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
            a.createContext)(te)
              , ae = ()=>(0,
            a.useContext)(re)
              , ne = e=>{
                var t = e.children
                  , r = (0,
                a.useMemo)((()=>{
                    var e, t, r = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, a = r.user, n = r.start_param;
                    if (a) {
                        var s = a.id
                          , i = a.username
                          , c = a.first_name
                          , o = a.last_name
                          , l = i;
                        if (c || o) {
                            var u = c && c ? " " : "";
                            l = "".concat(c).concat(u).concat(o)
                        }
                        return {
                            uid: null === s || void 0 === s ? void 0 : s.toString(),
                            username: l,
                            lastName: o,
                            firstName: c,
                            startParam: n,
                            gameId: 1
                        }
                    }
                    return te
                }
                ), [])
                  , n = (0,
                a.useState)(r)
                  , s = (0,
                u.Z)(n, 1)[0];
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
              , ce = r(60378)
              , oe = r(4422);
            const le = utils.ont;
            var ue = r.n(le)
              , de = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , _e = e=>t=>{
                if (!(0,
                ce.y)()) {
                    var r = t || {}
                      , a = r.status
                      , n = r.data || {}
                      , s = n.msg
                      , i = n.code;
                    oe.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , pe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t, r, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().post(t, r, a).then(de, _e(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }()
              , fe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ue().put(t, r, a).then(de, _e(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }()
              , xe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t, r, a) {
                    var n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = new FormData,
                                Object.entries(null !== r && void 0 !== r ? r : {}).forEach((e=>{
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , r = t[0]
                                      , a = t[1];
                                    a instanceof Blob ? n.append(r, a) : n.append(r, String(a))
                                }
                                )),
                                e.abrupt("return", he(t, n, a));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }();
            const ge = {
                get: pe,
                getWithCache: me,
                post: he,
                put: fe,
                postForm: ve,
                delete: xe
            };
            function ke(e, t) {
                var r, a;
                return ge.get(e, (0,
                k.Z)((0,
                k.Z)({}, t || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (r = window.Telegram) || void 0 === r || null === (a = r.WebApp) || void 0 === a ? void 0 : a.initData) || ""
                    }
                }))
            }
            function je(e, t, r) {
                var a, n;
                return ge.post(e, t, (0,
                k.Z)((0,
                k.Z)({}, r || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": (null === (a = window.Telegram) || void 0 === a || null === (n = a.WebApp) || void 0 === n ? void 0 : n.initData) || ""
                    }
                }))
            }
            var be = "/priapi/v1/affiliate"
              , we = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
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
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ye = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
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
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
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
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
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
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
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
              , Te = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
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
              , Se = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                je("".concat(be, "/game/racer/account-binding"), {});
                            case 2:
                                if (t = e.sent,
                                r = t.code,
                                a = t.data,
                                0 !== r || !a) {
                                    e.next = 7;
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
              , Re = (0,
            a.createContext)({
                points: 0,
                numChances: 0,
                numChancesTotal: 0,
                countdownDisplay: "",
                isLoading: !0,
                linkCode: "",
                updateGameInfo: ()=>{}
                ,
                updateGameInfoFromServer: ()=>{}
            })
              , Le = ()=>(0,
            a.useContext)(Re)
              , Be = e=>{
                var t, r = e.children, n = (0,
                a.useState)(0), s = (0,
                u.Z)(n, 2), i = s[0], c = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], h = (0,
                a.useState)(0), f = (0,
                u.Z)(h, 2), x = f[0], v = f[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                a.useState)(""), N = (0,
                u.Z)(C, 2), y = N[0], O = N[1], P = (0,
                a.useState)(!0), E = (0,
                u.Z)(P, 2), T = E[0], S = E[1], R = ae(), L = R.username, B = R.startParam, I = (0,
                a.useState)(""), A = (0,
                u.Z)(I, 2), M = A[0], F = A[1], D = null !== (t = new $.Z((B || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", U = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                we({
                                    extUserName: L,
                                    linkCode: D
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (c(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                m(r.numChances),
                                w(r.secondToRefresh),
                                v(r.numChancesTotal),
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
                ))), [D, L]);
                (0,
                a.useEffect)((()=>{
                    U()
                }
                ), [U]),
                (0,
                a.useEffect)((()=>{
                    var e = new ee.Z(j);
                    return j > 0 ? (e.start(),
                    e.addEventListener(ee.Z.Event.UPDATE, (e=>{
                        F("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(ee.Z.Event.FINISH, (()=>{
                        F(""),
                        U()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    F("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [j, U]),
                (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || U()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [U]);
                var V = (0,
                a.useCallback)((e=>{
                    c(Math.max(e.points, 0)),
                    m(e.numChances),
                    w(e.secondToRefresh)
                }
                ), [])
                  , G = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                U();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [U])
                  , W = (0,
                a.useMemo)((()=>({
                    isLoading: T,
                    points: i,
                    numChances: p,
                    numChancesTotal: x,
                    countdownDisplay: M,
                    updateGameInfo: V,
                    linkCode: y,
                    updateGameInfoFromServer: G
                })), [T, i, p, x, M, y, V, G]);
                return (0,
                b.jsx)(Re.Provider, {
                    value: W,
                    children: r
                })
            }
              , Ie = r(8031);
            var Ae = new class {
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
                            var a = ((null === r || void 0 === r ? void 0 : r[0]) || {}).last;
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
                    this.connection = new Ie.Z({
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
              , Me = (0,
            a.createContext)(Ae)
              , Fe = e=>{
                var t = e.children;
                return (0,
                b.jsx)(Me.Provider, {
                    value: Ae,
                    children: t
                })
            }
              , De = (0,
            a.createContext)(null)
              , Ue = ()=>(0,
            a.useContext)(De)
              , Ve = e=>{
                var t = e.children
                  , r = (0,
                a.useState)(null)
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useContext)(Me);
                return (0,
                a.useEffect)((()=>{
                    c.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                b.jsx)(De.Provider, {
                    value: s,
                    children: t
                })
            }
              , Ge = r(46430)
              , We = "racer"
              , He = ()=>{
                var e;
                if (!(0,
                ce.y)())
                    return Ge.Z.getInstance(We) || Ge.Z.init({
                        project: We
                    }),
                    null !== (e = Ge.Z.getInstance(We)) && void 0 !== e ? e : Ge.Z
            }
              , Ke = "guessRecords_new";
            function Ye(e) {
                var t = He().get(Ke) || [];
                t.unshift(e),
                He().set(Ke, t.slice(0, 5))
            }
            var Xe = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , ze = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: Xe.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Xe.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Qe = (0,
            a.createContext)(ze)
              , qe = ()=>(0,
            a.useContext)(Qe)
              , Je = e=>{
                var t = e.children
                  , r = (0,
                a.useState)(!1)
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useState)(5)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)(null)
                  , h = (0,
                u.Z)(m, 2)
                  , f = h[0]
                  , x = h[1]
                  , v = (0,
                a.useState)(null)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1]
                  , w = (0,
                a.useState)(Xe.NONE)
                  , C = (0,
                u.Z)(w, 2)
                  , N = C[0]
                  , y = C[1]
                  , O = Ue()
                  , P = Le().updateGameInfo
                  , E = (0,
                a.useRef)(Xe.NONE)
                  , T = (0,
                a.useRef)(1)
                  , R = (0,
                a.useRef)(10)
                  , L = (0,
                a.useRef)(null)
                  , B = (0,
                a.useRef)(null)
                  , I = (0,
                a.useRef)(null)
                  , A = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = E.current === Xe.UP ? 1 : 0,
                                e.next = 4,
                                Ce({
                                    predict: t
                                });
                            case 4:
                                r = e.sent,
                                (a = r.data) && (j(a.won),
                                P({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                T.current = a.multiplier,
                                R.current = a.basePoint,
                                L.current = Number(a.changeRate),
                                B.current = a.prevPrice,
                                I.current = a.currentPrice,
                                Ye({
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
                                j(null),
                                L.current = null,
                                se(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                E.current = Xe.NONE,
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
                a.useEffect)((()=>{
                    var e = null;
                    if (s) {
                        var t = 5;
                        p(t),
                        e = setInterval((()=>{
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            x(null),
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
                a.useEffect)((()=>{
                    if (s && O)
                        if (f) {
                            var e = O > f;
                            y(O === f ? Xe.NONE : e ? Xe.UP : Xe.DOWN)
                        } else
                            x(O)
                }
                ), [f, s, O]);
                var M = (0,
                a.useCallback)((e=>{
                    j(null),
                    i(!0),
                    E.current = e,
                    L.current = null,
                    e === Xe.UP && S.act({
                        action: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        anchor: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    e === Xe.DOWN && S.act({
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
                a.useMemo)((()=>({
                    countdown: _,
                    onButtonClick: M,
                    result: k,
                    isPending: s,
                    currentTrend: N,
                    multiplier: T.current,
                    basePoints: R.current,
                    predict: E.current,
                    changeRate: L.current,
                    prevPrice: B.current,
                    currentPrice: I.current
                })), [_, N, s, T, M, k]);
                return (0,
                b.jsx)(Qe.Provider, {
                    value: F,
                    children: t
                })
            }
              , $e = r(94595)
              , et = r(96450)
              , tt = 2e3
              , rt = 500;
            function at(e) {
                return (Math.abs(e) < 1e-4 ? et.yx.ceilTruncate : et.yx.floorTruncate)(e, 4)
            }
            const nt = "GuessResult_container__ECdpL"
              , st = "GuessResult_title__fzYxg"
              , it = "GuessResult_multiplier__yRHWm"
              , ct = "GuessResult_description__R2fup"
              , ot = "GuessResult_detailsIcon__ZE7Ry"
              , lt = "GuessResult_changeRateContainer__a5-N7"
              , ut = "GuessResult_label__+b5Nz"
              , dt = "GuessResult_changeRate__yhVz3"
              , _t = "GuessResult_up__5vYDR"
              , pt = "GuessResult_down__fa-oP"
              , mt = "GuessResult_priceChange__xr6e8"
              , ht = "GuessResult_price__Vk+bY";
            function ft(e) {
                return (0,
                $e.xG)((0,
                $e.uf)(et.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var xt = e=>{
                var t = e.className
                  , r = qe()
                  , n = r.result
                  , s = r.multiplier
                  , i = r.changeRate
                  , c = r.prevPrice
                  , o = r.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1];
                return (0,
                a.useEffect)((()=>{
                    var e, t;
                    if (null !== n) {
                        var r, a, s, i;
                        if (null !== (r = window) && void 0 !== r && null !== (a = r.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, n ? "success" : "error");
                        e = setTimeout((()=>{
                            p(!0),
                            t = setTimeout((()=>{
                                p(!1)
                            }
                            ), tt)
                        }
                        ), rt)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [n]),
                (0,
                b.jsx)(b.Fragment, {
                    children: _ && (0,
                    b.jsxs)("div", {
                        className: P()(t, nt),
                        children: [(0,
                        b.jsx)("p", {
                            className: it,
                            children: n ? (0,
                            b.jsxs)("span", {
                                className: ot,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: ot,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: st,
                            children: (0,
                            Z.O4)(n ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: ct,
                            children: [null !== i && (0,
                            b.jsxs)("p", {
                                className: lt,
                                children: [(0,
                                b.jsx)("span", {
                                    className: ut,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: P()(dt, {
                                        [_t]: i > 0,
                                        [pt]: i < 0
                                    }),
                                    children: (0,
                                    $e.uf)(at(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && o && (0,
                            b.jsx)("p", {
                                className: mt,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: ht,
                                        children: ft(c)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: ht,
                                        children: ft(o)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var vt = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , gt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , kt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , jt = "/help/okx-racer-terms-and-conditions"
              , bt = r(76983)
              , wt = r(59896);
            const Ct = "BackgroundVideo_container__J5sO2"
              , Nt = "BackgroundVideo_muteButton__04Huj"
              , yt = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , Ot = "BackgroundVideo_staticImage__EpRTb"
              , Pt = "BackgroundVideo_hide__ZXYN9";
            var Zt, Et, Tt, St, Rt, Lt, Bt = "backgroundVideoSoundOn", It = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", At = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Mt = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], Ft = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.Z.cdnBaseUrl).concat(It)
            }, Dt = ()=>{
                var e = qe().isPending
                  , t = (0,
                a.useRef)(null)
                  , r = (0,
                a.useRef)(null)
                  , n = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , o = s[1]
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)(!1)
                  , h = (0,
                u.Z)(m, 2)
                  , f = h[0]
                  , x = h[1]
                  , v = He()
                  , g = (0,
                a.useState)((()=>{
                    var e = v.get(Bt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
                (0,
                a.useEffect)((()=>{
                    t.current && (e && (x(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((()=>{
                        o(!0)
                    }
                    )).catch((()=>{
                        o(!1)
                    }
                    ))),
                    t.current.onended = ()=>{
                        var e;
                        x(!0),
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
                  , y = i && f && _
                  , O = i && (!f || !_);
                return (0,
                b.jsxs)("div", {
                    className: Ct,
                    children: [(0,
                    b.jsx)(bt.default, {
                        category: bt.default.CATEGORY.fill,
                        type: bt.default.TYPE.quaternary,
                        size: bt.default.SIZE.md,
                        className: Nt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(v.set(Bt, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: yt
                        })
                    }), (0,
                    b.jsx)(wt.Z, {
                        className: P()(Ot, {
                            [Pt]: !N
                        }),
                        src: "".concat(c.Z.cdnBaseUrl).concat(It)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Ft), {}, {
                        className: P()({
                            [Pt]: !y
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: At.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(c.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, Ft), {}, {
                        className: P()({
                            [Pt]: !O
                        }),
                        ref: t,
                        muted: w,
                        children: Mt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(c.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , Ut = ["title", "titleId"];
            function Vt() {
                return Vt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Vt.apply(this, arguments)
            }
            function Gt(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Wt(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Gt(e, Ut);
                return a.createElement("svg", Vt({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Zt || (Zt = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Et || (Et = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Tt || (Tt = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), St || (St = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), Rt || (Rt = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Lt || (Lt = a.createElement("defs", null, a.createElement("filter", {
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
            var Ht = a.forwardRef(Wt);
            r.p;
            var Kt, Yt, Xt, zt, Qt, qt, Jt = ["title", "titleId"];
            function $t() {
                return $t = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                $t.apply(this, arguments)
            }
            function er(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function tr(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = er(e, Jt);
                return a.createElement("svg", $t({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Kt || (Kt = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Yt || (Yt = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Xt || (Xt = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), zt || (zt = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), Qt || (Qt = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), qt || (qt = a.createElement("defs", null, a.createElement("filter", {
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
            var rr = a.forwardRef(tr);
            r.p;
            const ar = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var nr, sr = e=>{
                var t = e.className
                  , r = qe()
                  , n = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , c = Le().numChances
                  , o = (0,
                a.useState)()
                  , l = (0,
                u.Z)(o, 2)
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
                var p = e=>{
                    var t, r, a;
                    s || d || (_(e === Xe.UP ? Xe.DOWN : Xe.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (a = r.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    n(e))
                }
                  , m = c <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: P()(ar.instructions, s && ar.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: ar.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: m || d === Xe.UP,
                            onClick: ()=>p(Xe.UP),
                            type: "button",
                            className: P()(ar.btn, ar.upBtn, {
                                [ar.pressed]: i === Xe.UP
                            }),
                            children: [(0,
                            b.jsx)(rr, {
                                className: P()(ar.btnGraphic, ar.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: ar.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: ar.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: m || d === Xe.DOWN,
                            onClick: ()=>p(Xe.DOWN),
                            type: "button",
                            className: P()(ar.btn, ar.downBtn, {
                                [ar.pressed]: i === Xe.DOWN
                            }),
                            children: [(0,
                            b.jsx)(Ht, {
                                className: P()(ar.btnGraphic, ar.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: ar.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: ar.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , ir = ["title", "titleId"];
            function cr() {
                return cr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                cr.apply(this, arguments)
            }
            function or(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function lr(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = or(e, ir);
                return a.createElement("svg", cr({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, nr || (nr = a.createElement("g", {
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
            var ur = a.forwardRef(lr);
            r.p;
            var dr = r(48275);
            const _r = "FuelIndicator_fuelContainer__QIskL"
              , pr = "FuelIndicator_toTasksIcon__Y7exC"
              , mr = "FuelIndicator_line__tWBfm"
              , hr = "FuelIndicator_description__EaUsa"
              , fr = "FuelIndicator_fuelIcon__I38Ss"
              , xr = "FuelIndicator_maxChances__OMSHl"
              , vr = "FuelIndicator_earnPtsMsg__PjtcT";
            var gr, kr, jr = e=>{
                var t = e.className
                  , r = Le()
                  , a = r.numChances
                  , n = r.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, _r),
                    children: [(0,
                    b.jsx)("span", {
                        className: fr,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    b.jsx)(dr.Z.Line, {
                        className: mr,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / n * 100
                    }, n) : (0,
                    b.jsx)(X, {
                        to: M,
                        className: vr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: hr,
                        children: [a, "\xa0", void 0 !== n && 0 !== n && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: xr,
                                children: n
                            })]
                        })]
                    }), (0,
                    b.jsx)(X, {
                        to: M,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: pr
                        })
                    })]
                })
            }
            , br = ["title", "titleId"];
            function wr() {
                return wr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                wr.apply(this, arguments)
            }
            function Cr(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Nr(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Cr(e, br);
                return a.createElement("svg", wr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, gr || (gr = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), kr || (kr = a.createElement("defs", null, a.createElement("linearGradient", {
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
            var yr = a.forwardRef(Nr);
            r.p;
            const Or = "RefuelTimer_container__wtALO"
              , Pr = "RefuelTimer_description__sD+HM"
              , Zr = "RefuelTimer_timer__LL1+c";
            var Er = e=>{
                var t = e.className
                  , r = Le().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, Or),
                    children: [(0,
                    b.jsx)(yr, {}), (0,
                    b.jsx)("p", {
                        className: Pr,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: Zr,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const Tr = "CoinPrice_raceTrack__NZO2t"
              , Sr = "CoinPrice_run__f0UIF"
              , Rr = "CoinPrice_coinPriceContainer__YbeUE"
              , Lr = "CoinPrice_content__a-5Jl"
              , Br = "CoinPrice_fuelIndicator__p+f1I"
              , Ir = "CoinPrice_refuelTimer__tbWMw"
              , Ar = "CoinPrice_hide__bHhxJ"
              , Mr = "CoinPrice_label__yTNy0"
              , Fr = "CoinPrice_value__ZjRZz"
              , Dr = "CoinPrice_slotMachine__hUQKt"
              , Ur = "SlotMachine_row__a4TO0"
              , Vr = "SlotMachine_animate__-G4TR"
              , Gr = "SlotMachine_column__aR0VE"
              , Wr = "SlotMachine_arrows__m1dhv"
              , Hr = "SlotMachine_columnContainer__a76pd"
              , Kr = "SlotMachine_background__b9TMg"
              , Yr = "SlotMachine_slot__jwCvC"
              , Xr = "SlotMachine_staticColumn__O5zfB"
              , zr = "SlotMachine_sm__ZRCig"
              , Qr = "SlotMachine_arrow__qOYmf"
              , qr = "SlotMachine_wentUp__z48TO"
              , Jr = "SlotMachine_down__aYC8C"
              , $r = "SlotMachine_stable__CDMLP"
              , ea = "SlotMachine_wentDown__1fYUS"
              , ta = "SlotMachine_up__IuiYV";
            var ra = e=>{
                var t = e.animate
                  , r = e.result
                  , a = void 0 === r ? 0 : r
                  , n = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: Hr,
                    children: [(0,
                    b.jsx)("div", {
                        className: Kr
                    }), (0,
                    b.jsxs)("div", {
                        className: Gr,
                        style: n,
                        children: [(0,
                        b.jsx)("p", {
                            className: Yr,
                            children: a
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: Yr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , aa = ()=>{
                var e = qe()
                  , t = e.changeRate
                  , r = e.isPending
                  , n = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , o = (0,
                a.useState)(null)
                  , l = (0,
                u.Z)(o, 2)
                  , d = l[0]
                  , _ = l[1]
                  , p = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(p, 2)
                  , h = m[0]
                  , f = m[1];
                return (0,
                a.useEffect)((()=>{
                    r && f(!0)
                }
                ), [r]),
                (0,
                a.useEffect)((()=>{
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? Xe.UP : 0 === e ? Xe.NONE : Xe.DOWN),
                    c(String(Math.abs(Number(at(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    f(!1)) : _(null)
                }
                ), [t]),
                (0,
                b.jsxs)("div", {
                    className: P()(Ur, h && Vr),
                    children: [(0,
                    b.jsx)("div", {
                        className: Hr,
                        children: (0,
                        b.jsxs)("div", {
                            className: P()(Wr, {
                                [qr]: d === Xe.UP,
                                [ea]: d === Xe.DOWN,
                                [$r]: d === Xe.NONE
                            }),
                            children: [(0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: P()(Qr, ta)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: P()(Qr, $r)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: P()(Qr, Jr)
                            })]
                        })
                    }), (0,
                    b.jsx)(ra, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: Xr,
                        children: "."
                    }), (0,
                    b.jsx)(ra, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(ra, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)(ra, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(ra, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: P()(Xr, zr),
                        children: "%"
                    })]
                })
            }
              , na = ()=>{
                var e = Ue()
                  , t = qe()
                  , r = t.isPending
                  , n = t.changeRate
                  , s = Le().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , c = (0,
                u.Z)(i, 2)
                  , o = c[0]
                  , l = c[1];
                (0,
                a.useEffect)((()=>{
                    r && l(!0)
                }
                ), [r]),
                (0,
                a.useEffect)((()=>{
                    var e, t = ()=>{
                        e && clearTimeout(e)
                    }
                    ;
                    return r || (null === n ? l(!1) : e = setTimeout((()=>{
                        l(!1)
                    }
                    ), rt)),
                    t
                }
                ), [n, r]);
                var d = e ? "$".concat((0,
                $e.uf)(et.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !r;
                return (0,
                b.jsxs)("div", {
                    className: Rr,
                    children: [(0,
                    b.jsx)(ur, {
                        className: P()(Tr, r && Sr)
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Lr, o && Ar),
                        children: [(0,
                        b.jsx)("p", {
                            className: Mr,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Fr,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Lr, !o && Ar),
                        children: [(0,
                        b.jsxs)("p", {
                            className: Mr,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Dr,
                            children: (0,
                            b.jsx)(aa, {})
                        })]
                    }), (0,
                    b.jsx)(jr, {
                        className: Br
                    }), (0,
                    b.jsx)("div", {
                        className: P()(Ir, !_ && Ar),
                        children: (0,
                        b.jsx)(Er, {})
                    })]
                })
            }
            ;
            const sa = "LandingPage_container__pU2cC"
              , ia = "LandingPage_resultOverlay__WSYZb"
              , ca = "LandingPage_disclaimer__pVRHC"
              , oa = "LandingPage_recordsBtnContainer__Anr4Y"
              , la = "LandingPage_backgroundVideo__flTkH"
              , ua = "LandingPage_content__D0ZLW"
              , da = "LandingPage_points__Ruq4j"
              , _a = "LandingPage_coinPrice__nJ0nj"
              , pa = "LandingPage_btnContainer__IEll8"
              , ma = "LandingPage_termsAndConditions__MdClU";
            var ha = r(22387);
            const fa = "UserPointCounter_pointCounter__-QAj8"
              , xa = "UserPointCounter_hide__o4qTQ"
              , va = "UserPointCounter_points__d3HeG"
              , ga = "UserPointCounter_countdown__Z7xGo"
              , ka = "UserPointCounter_title__B-gN-"
              , ja = "UserPointCounter_value__2a23E";
            var ba = ()=>{
                var e = Le().points
                  , t = (0,
                ha.Z)(e)
                  , r = qe()
                  , n = r.isPending
                  , s = r.countdown
                  , i = (0,
                a.useRef)(null)
                  , c = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(c, 2)
                  , l = o[0]
                  , d = o[1];
                (0,
                a.useEffect)((()=>{
                    var e;
                    return n ? d(!0) : e = setTimeout((()=>{
                        d(!1)
                    }
                    ), 2500),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [n]);
                var _ = (0,
                a.useCallback)(((e,t,r)=>{
                    e <= t && (r((0,
                    $e.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var a = function(e, t) {
                            var r = t - e;
                            return Math.max(1, Math.floor(r / 10))
                        }(e, t);
                        _(e + a, t, r)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((()=>{
                    var r;
                    if (t === e)
                        return ()=>{}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (r = i.current) || void 0 === r ? void 0 : r.innerText) || !t)
                        return _(0, e, a),
                        ()=>{}
                        ;
                    var n = setTimeout((()=>{
                        _(t || 0, e, a)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(n)
                    }
                }
                ), [_, e, t]),
                (0,
                b.jsxs)("div", {
                    className: fa,
                    children: [(0,
                    b.jsxs)("p", {
                        className: P()(ka, l && xa),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: i,
                        className: P()(va, l && xa),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: P()(ga, !l && xa),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: ja,
                            children: s
                        })]
                    })]
                })
            }
              , wa = r(2663);
            const Ca = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var Na = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: Ca.closeBtn,
                closeIconClassName: Ca.closeIcon
            }
              , ya = e=>(0,
            b.jsx)(wa.Z, (0,
            k.Z)((0,
            k.Z)({}, Na), {}, {
                topContent: e.title ? void 0 : (0,
                b.jsx)("div", {
                    className: Ca.topPadding
                })
            }, e));
            const Oa = "ViewRecordsButton_button__MRo78"
              , Pa = "ViewRecordsButton_btnIcon__prKlS"
              , Za = "ViewRecordsButton_title__obA3r"
              , Ea = "ViewRecordsButton_container__N3Rrb"
              , Ta = "ViewRecordsButton_recordContainer__ruZVu"
              , Sa = "ViewRecordsButton_recordField__dACwq"
              , Ra = "ViewRecordsButton_label__xt3Hw"
              , La = "ViewRecordsButton_value__lTHA5"
              , Ba = "ViewRecordsButton_trendIcon__3RV6P"
              , Ia = "ViewRecordsButton_up__EC1B6"
              , Aa = "ViewRecordsButton_down__4PWTz"
              , Ma = "ViewRecordsButton_timestamp__P0JEp"
              , Fa = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , Da = "ViewRecordsButton_description__F22UB";
            var Ua = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                b.jsxs)("div", {
                    className: Sa,
                    children: [(0,
                    b.jsx)("p", {
                        className: Ra,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: La,
                        children: r
                    })]
                })
            }
              , Va = ()=>(0,
            b.jsxs)("button", {
                className: Oa,
                type: "button",
                onClick: ()=>{
                    var e = He().get(Ke) || []
                      , t = (0,
                    b.jsx)(b.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , a = Ia
                              , n = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            a = Aa,
                            n = "okx-growth-trending-down"),
                            (0,
                            b.jsxs)("div", {
                                className: Ta,
                                children: [(0,
                                b.jsx)(Ua, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    b.jsxs)(b.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        b.jsx)(E.Z, {
                                            className: P()(Ba, a),
                                            iconName: n
                                        })]
                                    })
                                }), (0,
                                b.jsx)(Ua, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                b.jsx)(Ua, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                b.jsx)("p", {
                                    className: Ma,
                                    children: (0,
                                    $e.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        b.jsxs)("div", {
                            className: Fa,
                            children: [(0,
                            b.jsx)("p", {
                                className: Za,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            b.jsx)("p", {
                                className: Da,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = wa.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, Na), {}, {
                            topContent: e.title ? void 0 : (0,
                            b.jsx)("div", {
                                className: Ca.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        b.jsx)("span", {
                            className: Za,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: Ea,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                b.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Pa
                })]
            })
              , Ga = ()=>((0,
            a.useEffect)((()=>{
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
                className: sa,
                children: [(0,
                b.jsx)("div", {
                    className: oa,
                    children: (0,
                    b.jsx)(Va, {})
                }), (0,
                b.jsx)("div", {
                    className: la,
                    children: (0,
                    b.jsx)(Dt, {})
                }), (0,
                b.jsxs)("div", {
                    className: ua,
                    children: [(0,
                    b.jsx)("div", {
                        className: da,
                        children: (0,
                        b.jsx)(ba, {})
                    }), (0,
                    b.jsx)("div", {
                        className: _a,
                        children: (0,
                        b.jsx)(na, {})
                    }), (0,
                    b.jsx)(sr, {
                        className: pa
                    })]
                }), (0,
                b.jsx)("button", {
                    className: ma,
                    onClick: ()=>{
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(jt)
                    }
                    ,
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                }), (0,
                b.jsx)("p", {
                    className: ca,
                    children: (0,
                    Z.O4)("ok_game_okxracer_disclaimer")
                }), (0,
                b.jsx)(xt, {
                    className: ia
                })]
            }))
              , Wa = ()=>(0,
            b.jsx)(Je, {
                children: (0,
                b.jsx)(Ga, {})
            })
              , Ha = r(24084);
            const Ka = "LeaderBoard_container__0DJSO"
              , Ya = "LeaderBoard_title__jnBkh"
              , Xa = "LeaderBoard_titleMark__t4fQw"
              , za = "LeaderBoard_desc__MFxC+"
              , Qa = "LeaderBoard_inviteList__mV9a7"
              , qa = "LeaderBoard_tabActiveClassName__7Xv4B"
              , Ja = "LeaderBoard_tabsContent__KCGtW"
              , $a = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var en = e=>{
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: P()($a, t)
                })
            }
            ;
            const tn = "InviteButton_invite-btn__aAMio"
              , rn = "InviteButton_btn-a__At-wO"
              , an = "InviteButton_btn-container__sYDy5"
              , nn = "InviteButton_btn-text__PhM48"
              , sn = "InviteButton_copyButton__znucI"
              , cn = "InviteButton_copyIcon__QZgE9";
            var on = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , n = (e=>{
                    var t = new $.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(vt.BOT_NAME, "/").concat(vt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(r)
                    }
                }
                )(Le().linkCode)
                  , s = n.shareUrl
                  , i = n.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: P()(a, an),
                    children: [(0,
                    b.jsx)("a", {
                        className: rn,
                        href: s,
                        children: (0,
                        b.jsx)(bt.default, {
                            category: bt.default.CATEGORY.fill,
                            type: bt.default.TYPE.tertiary,
                            size: bt.default.SIZE.lg,
                            className: tn,
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
                            children: (0,
                            b.jsx)("div", {
                                className: nn,
                                children: r
                            })
                        })
                    }), (0,
                    b.jsx)(bt.default, {
                        strictCircle: !0,
                        category: bt.default.CATEGORY.fill,
                        type: bt.default.TYPE.tertiary,
                        size: bt.default.SIZE.lg,
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
                        className: sn,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: cn
                        })
                    })]
                })
            }
            ;
            const ln = "RankList_listItem__qJvXJ"
              , un = "RankList_name__sxTWa"
              , dn = "RankList_mask__ldBi8"
              , _n = "RankList_hightLightRow__xYkeg"
              , pn = "RankList_listHeader__KVGnw"
              , mn = "RankList_rank__k2m5R"
              , hn = "RankList_icon__1-SRV"
              , fn = "RankList_point__D5mVw"
              , xn = "RankList_pointIcon__k80Wy"
              , vn = "RankList_InviteButton__D6ute"
              , gn = "RankList_noFirendsNote__Ckkil"
              , kn = "RankList_under__MJ5We"
              , jn = "RankList_rankItemPlaceholder__z-upW"
              , bn = "RankList_rank-name__YEqnc"
              , wn = "RankList_rank-score__gtI+m";
            var Cn = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , Nn = 1
              , yn = 2
              , On = e=>{
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: pn,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            $e.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Pn = ()=>(0,
            b.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                b.jsxs)("div", {
                    className: jn,
                    children: [(0,
                    b.jsx)(en, {
                        className: bn
                    }), (0,
                    b.jsx)(en, {
                        className: wn
                    })]
                }, t)))
            })
              , Zn = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: P()(ln, r && _n),
                    children: [(0,
                    b.jsx)("div", {
                        className: dn
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: P()(mn, hn),
                        children: Cn[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: mn,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: un,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: fn,
                        children: [(0,
                        b.jsx)("span", {
                            className: xn,
                            children: Cn[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            $e.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , En = e=>{
                var t = e.pageType
                  , r = void 0 === t ? Nn : t
                  , n = (0,
                a.useState)(!0)
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)([])
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                a.useState)(0)
                  , f = (0,
                u.Z)(h, 2)
                  , x = f[0]
                  , v = f[1]
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
                    o.Z)().mark((function e(t) {
                        var a, n;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        pageNo: t
                                    },
                                    r !== Nn) {
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
                                    Oe(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (n = e.t0) && n.rows && (m(n.rows),
                                    v(n.total),
                                    w(n.userRanking)),
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0),
                                    e.t1;
                                case 18:
                                    c(!1);
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
                a.useEffect)((()=>{
                    C(1)
                }
                ), [C]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(On, {
                        total: x
                    }), i ? (0,
                    b.jsx)(Pn, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [N && (0,
                        b.jsx)(Zn, {
                            item: j,
                            isHighlight: !0
                        }), p.map(((e,t)=>(0,
                        b.jsx)(Zn, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    b.jsx)("div", {
                        className: kn
                    }), r === Nn && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === p.length && (0,
                        b.jsx)("div", {
                            className: gn,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === p.length && (0,
                        b.jsx)(on, {
                            className: vn,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Tn = ()=>(0,
            b.jsxs)("div", {
                className: Ka,
                children: [(0,
                b.jsx)("div", {
                    className: Ya,
                    children: (0,
                    Z.Lg)("ok_game_okxracer_race_to_top", {
                        top: (0,
                        b.jsx)("span", {
                            className: Xa,
                            children: (0,
                            Z.O4)("ok_game_okxracer_top")
                        })
                    })
                }), (0,
                b.jsx)("div", {
                    className: za,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                b.jsxs)(Ha.Z, {
                    activeClassName: qa,
                    noPadding: !0,
                    size: Ha.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    b.jsx)(Ha.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: Nn,
                        className: Ja,
                        children: (0,
                        b.jsx)("div", {
                            className: Qa,
                            children: (0,
                            b.jsx)(En, {
                                pageType: Nn
                            })
                        })
                    }), (0,
                    b.jsx)(Ha.Z.TabPane, {
                        className: Ja,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: yn,
                        children: (0,
                        b.jsx)("div", {
                            className: Qa,
                            children: (0,
                            b.jsx)(En, {
                                pageType: yn
                            })
                        })
                    })]
                })]
            })
              , Sn = r(58338);
            const Rn = "QrCode_container__r4Fu7"
              , Ln = "QrCode_qrCode__16PWa"
              , Bn = "QrCode_title__+cibb"
              , In = "QrCode_message__eaOzW";
            var An = ()=>(0,
            b.jsxs)("div", {
                className: Rn,
                children: [(0,
                b.jsx)(wt.Z, {
                    className: Ln,
                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                b.jsx)("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        Sn.dU)((0,
                        Z.O4)("ok_game_okxracer_browser_title_scan_play"))
                    },
                    className: Bn
                }), (0,
                b.jsx)("p", {
                    className: In,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , Mn = r(90534);
            const Fn = "PullupList_loading__+51Dh"
              , Dn = "PullupList_listLoadItem__XcvkH"
              , Un = "PullupList_listLeft__4eGh6"
              , Vn = "PullupList_listRight__w7Ely"
              , Gn = "PullupList_listLoading__whJeg";
            var Wn = ()=>(0,
            b.jsxs)("div", {
                className: P()(Dn),
                children: [(0,
                b.jsx)(en, {
                    className: Un
                }), (0,
                b.jsx)(en, {
                    className: Vn
                })]
            })
              , Hn = ()=>(0,
            b.jsx)("div", {
                className: Gn,
                children: Array(3).fill(null).map(((e,t)=>(0,
                b.jsx)(Wn, {}, t)))
            })
              , Kn = e=>{
                var t = e.loadData
                  , r = e.children
                  , n = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , f = (0,
                a.useRef)(null)
                  , x = (0,
                a.useState)(!1)
                  , v = (0,
                u.Z)(x, 2)
                  , g = v[0]
                  , k = v[1]
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    c((e=>[...e, ...r.rows])),
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
                Mn.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = e=>{
                    e[0].isIntersecting && !p && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                a.useEffect)((()=>{
                    var e = new IntersectionObserver(C,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return f.current && e.observe(f.current),
                    ()=>{
                        f.current && e.unobserve(f.current)
                    }
                }
                ), [p]),
                (0,
                a.useEffect)((()=>{
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    b.jsx)("div", {
                        className: Fn,
                        ref: f,
                        children: p && (0,
                        b.jsx)(Hn, {})
                    })]
                })
            }
            ;
            const Yn = "InviteList_listItem__q4jhG"
              , Xn = "InviteList_name__LLQgt"
              , zn = "InviteList_point__kXtCn"
              , Qn = "InviteList_earnedPrice__4vAfw"
              , qn = "InviteList_pointNumber__v4P1H";
            var Jn = ()=>{
                var e = (0,
                a.useState)(0)
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , n = t[1]
                  , s = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t, r) {
                        var a, s;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = {
                                        pageNo: t
                                    },
                                    r && r >= 0 && (a.total = r),
                                    e.next = 4,
                                    Ne(a);
                                case 4:
                                    return (s = e.sent) && n(s.accumPoints),
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
                        className: Qn,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: qn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    $e.uf)(r)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(Kn, {
                        loadData: s,
                        children: (e,t)=>(0,
                        b.jsxs)("div", {
                            className: Yn,
                            children: [(0,
                            b.jsx)("div", {
                                className: Xn,
                                children: e.extInviteeName
                            }), (0,
                            b.jsx)("div", {
                                className: zn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    $e.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const $n = "ReferralsPage_container__V48m1"
              , es = "ReferralsPage_title__nvv+x"
              , ts = "ReferralsPage_titleMark__FCOdJ"
              , rs = "ReferralsPage_inviteDetail__L1MhM"
              , as = "ReferralsPage_detailItem__ujOp+"
              , ns = "ReferralsPage_dot__zKW7L"
              , ss = "ReferralsPage_detailTitle__OE657"
              , is = "ReferralsPage_detailInfo__YC+Y9"
              , cs = "ReferralsPage_inviteList__Jksx8";
            var os, ls, us, ds, _s, ps, ms, hs, fs = ()=>{
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
                a.useEffect)((()=>{
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
                    className: $n,
                    children: [(0,
                    b.jsxs)("div", {
                        className: es,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " ", (0,
                        b.jsx)("span", {
                            className: ts,
                            children: (0,
                            Z.O4)("ok_game_okxracer_friends_hint2")
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: rs,
                        children: e.map((e=>(0,
                        b.jsxs)("div", {
                            className: as,
                            children: [(0,
                            b.jsx)("div", {
                                className: ns
                            }), (0,
                            b.jsx)("div", {
                                className: ss,
                                children: e.title
                            }), (0,
                            b.jsx)("div", {
                                className: is,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    b.jsx)("div", {
                        className: cs,
                        children: (0,
                        b.jsx)(Jn, {})
                    }), (0,
                    b.jsx)(on, {})]
                })
            }
            , xs = ["title", "titleId"];
            function vs() {
                return vs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                vs.apply(this, arguments)
            }
            function gs(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function ks(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = gs(e, xs);
                return a.createElement("svg", vs({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, os || (os = a.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ls || (ls = a.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), us || (us = a.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), ds || (ds = a.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), _s || (_s = a.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ps || (ps = a.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ms || (ms = a.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), hs || (hs = a.createElement("defs", null, a.createElement("filter", {
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
            var js = a.forwardRef(ks);
            r.p;
            const bs = "index_container__DxcAz"
              , ws = "index_logo__h1T0A"
              , Cs = "index_tlt__dqJHn"
              , Ns = "index_subtlt__m3p5l";
            var ys = ()=>(0,
            b.jsxs)("div", {
                className: bs,
                children: [(0,
                b.jsx)(js, {
                    className: ws
                }), (0,
                b.jsx)("div", {
                    className: Cs,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                b.jsx)("div", {
                    className: Ns,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Os = n().memo(ys);
            var Ps, Zs = ["title", "titleId"];
            function Es() {
                return Es = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Es.apply(this, arguments)
            }
            function Ts(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Ss(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Ts(e, Zs);
                return a.createElement("svg", Es({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Ps || (Ps = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Rs = a.forwardRef(Ss);
            r.p;
            var Ls, Bs = ["title", "titleId"];
            function Is() {
                return Is = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Is.apply(this, arguments)
            }
            function As(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Ms(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = As(e, Bs);
                return a.createElement("svg", Is({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Ls || (Ls = a.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Fs = a.forwardRef(Ms);
            r.p;
            var Ds, Us = ["title", "titleId"];
            function Vs() {
                return Vs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Vs.apply(this, arguments)
            }
            function Gs(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Ws(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Gs(e, Us);
                return a.createElement("svg", Vs({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Ds || (Ds = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Hs = a.forwardRef(Ws);
            r.p;
            var Ks = r(41072)
              , Ys = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Xs = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
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
            var Qs = e=>{
                var t = (0,
                a.useState)(zs(e))
                  , r = (0,
                u.Z)(t, 2)
                  , n = r[0]
                  , s = r[1];
                (0,
                a.useEffect)((()=>{
                    s(zs(e))
                }
                ), [e]);
                var i = (0,
                a.useCallback)((t=>{
                    var r = n.find((e=>e.type === t));
                    if (r) {
                        switch ((0,
                        Ks.k)(r.url),
                        t) {
                        case Ys.SIGNUP:
                        case Ys.INSTALL:
                            a = t,
                            window.localStorage && window.localStorage.setItem(a, "1"),
                            s(zs(e))
                        }
                        var a;
                        switch (t) {
                        case Ys.SIGNUP:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_Signup_View",
                                anchor: "OKXRacerSurprisesPage_Page_Signup_View",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ys.INSTALL:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                anchor: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ys.CONNECT:
                            S.act({
                                action: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                anchor: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ys.KYC:
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
                ), [n, e]);
                return {
                    list: n,
                    handleClick: i
                }
            }
            ;
            const qs = "index_container__ZAgXf"
              , Js = "index_container_avatar__HvLrA"
              , $s = "index_container_task__OmqjX"
              , ei = "index_task_tlt__pIkV2"
              , ti = "index_tlt_sub__2aRiA"
              , ri = "index_tlt_arrow__kdbln"
              , ai = "index_task_subtlt__mzIaE";
            var ni = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: Js,
                    children: r ? (0,
                    b.jsx)(Hs, {}) : (0,
                    b.jsx)(Fs, {})
                })
            }
              , si = e=>{
                var t = e.title
                  , r = e.subTitle
                  , a = e.type
                  , n = e.onClick
                  , s = e.status;
                return (0,
                b.jsxs)("div", {
                    className: $s,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: ei,
                        children: [(0,
                        b.jsx)(ni, {
                            status: s
                        }), " ", (0,
                        b.jsx)("div", {
                            className: ti,
                            children: t
                        }), (0,
                        b.jsx)(Rs, {
                            className: ri
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: ai,
                        children: r
                    })]
                })
            }
            ;
            const ii = e=>{
                var t = Qs(e)
                  , r = t.list
                  , a = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: qs,
                    children: r.map((e=>(0,
                    b.jsx)(si, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: a
                    }), e.type)))
                })
            }
            ;
            var ci, oi, li, ui = ["title", "titleId"];
            function di() {
                return di = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                di.apply(this, arguments)
            }
            function _i(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function pi(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = _i(e, ui);
                return a.createElement("svg", di({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, ci || (ci = a.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), oi || (oi = a.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), li || (li = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var mi = a.forwardRef(pi);
            r.p;
            const hi = "index_loader__kDy+9"
              , fi = "index_container__X8xX8"
              , xi = "index_container_tlt__+XAOL"
              , vi = "index_container_tlt_highlight__uMjOB"
              , gi = "index_container_subtlt__LyYby"
              , ki = "index_container_info__c9KQP"
              , ji = "index_info_icon__i5uhI"
              , bi = "index_container_btn__rWex7"
              , wi = "index_buttonText__1fWA+"
              , Ci = "index_tncContainer__McO06"
              , Ni = "index_termsAndConditions__Gifk+";
            var yi = ()=>(0,
            b.jsx)(Os, {})
              , Oi = e=>(0,
            b.jsxs)("div", {
                className: fi,
                children: [(0,
                b.jsxs)("div", {
                    className: xi,
                    children: [(0,
                    Z.O4)("ok_game_okxracer_surprises_title2"), "\xa0", (0,
                    b.jsx)("div", {
                        className: vi,
                        children: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                }), (0,
                b.jsx)("div", {
                    className: gi,
                    children: (0,
                    Z.O4)("ok_game_okxracer_surprises_sub_text")
                }), (0,
                b.jsx)(ii, (0,
                k.Z)({}, e)), (0,
                b.jsxs)("div", {
                    className: ki,
                    children: [(0,
                    b.jsx)(mi, {
                        className: ji,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                b.jsx)(bt.default, {
                    category: bt.default.CATEGORY.fill,
                    type: bt.default.TYPE.tertiary,
                    size: bt.default.SIZE.lg,
                    onClick: e.onClick,
                    className: bi,
                    children: (0,
                    b.jsx)("div", {
                        className: wi,
                        children: (0,
                        Z.O4)("ok_game_okxracer_surprises_verify")
                    })
                }), (0,
                b.jsx)("div", {
                    className: Ci,
                    children: (0,
                    b.jsx)("button", {
                        className: Ni,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(jt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , Pi = ()=>{
                var e = (0,
                a.useState)(!0)
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , n = t[1]
                  , s = (0,
                a.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP"
                })
                  , i = (0,
                u.Z)(s, 2)
                  , c = i[0]
                  , d = i[1]
                  , _ = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r, a = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] && a[0],
                                e.prev = 1,
                                e.next = 4,
                                Se();
                            case 4:
                                r = e.sent,
                                n(!1),
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
                a.useEffect)((()=>{
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
                a.useEffect)((()=>{
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
                    className: hi,
                    children: (0,
                    b.jsx)(dr.Z, {})
                }) : c.isConnectTelegram && c.isKyc ? (0,
                b.jsx)(yi, {}) : (0,
                b.jsx)(Oi, (0,
                k.Z)((0,
                k.Z)({}, c), {}, {
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
              , Zi = (0,
            a.createContext)({
                boosts: [],
                tasks: [],
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
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
              , Ei = ()=>(0,
            a.useContext)(Zi)
              , Ti = e=>{
                var t = e.children
                  , r = (0,
                a.useState)([])
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useState)([])
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = Le().updateGameInfoFromServer
                  , h = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Pe(), Ee()]);
                            case 2:
                                "fulfilled" === (t = e.sent)[0].status && i(t[0].value.data || []),
                                "fulfilled" === t[1].status && p(t[1].value.data || []);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [])
                  , f = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    Promise.allSettled([Pe(), m()]);
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
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
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
                                    Promise.allSettled([Ee(), m()]);
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
                a.useEffect)((()=>{
                    h()
                }
                ), [h]),
                (0,
                b.jsx)(Zi.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: f,
                        doTask: x
                    },
                    children: t
                })
            }
            ;
            const Si = "BoostArea_container__qLJSQ"
              , Ri = "BoostArea_boost-item-container__YOXum"
              , Li = "BoostArea_boost-item__DNNqs"
              , Bi = "BoostArea_boost-item-padding__oEq50"
              , Ii = "BoostArea_boost-icon__QNzuc"
              , Ai = "BoostArea_boost-title__AkQjB"
              , Mi = "BoostArea_boost-desc__ao1CF"
              , Fi = "BoostArea_boost-data__ZHjQc"
              , Di = "BoostArea_boost-data-split-point__vPwdk"
              , Ui = "BoostArea_boost-data-stage__vN56W"
              , Vi = "BoostArea_sheet__yqb00"
              , Gi = "BoostArea_sheet-icon__BeFAi"
              , Wi = "BoostArea_sheet-title__iwAxt"
              , Hi = "BoostArea_sheet-desc__shobA"
              , Ki = "BoostArea_sheet-data__sT-mb"
              , Yi = "BoostArea_sheet-point__DEkj1"
              , Xi = "BoostArea_sheet-lvl__ybAg3"
              , zi = "BoostArea_btn__sDOPz"
              , Qi = "BoostArea_btn-txt__3KRt0"
              , qi = "BoostArea_boostItemPlaceholder__+rOxt";
            var Ji = ()=>(0,
            b.jsxs)("div", {
                className: P()(Li, qi),
                children: [(0,
                b.jsx)(en, {
                    className: Ii
                }), (0,
                b.jsx)(en, {
                    className: Ai
                }), (0,
                b.jsx)(en, {
                    className: Mi
                }), (0,
                b.jsx)(en, {
                    className: Fi
                })]
            })
              , $i = ()=>{
                var e = Ei()
                  , t = e.boosts
                  , r = e.upgradeBoost
                  , n = (0,
                a.useState)()
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = Le().points
                  , f = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var a, n, s;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.pointCost,
                                    n = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(n))) {
                                        e.next = 5;
                                        break
                                    }
                                    se(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(a) < 0)) {
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
                  , x = e=>(null === e || void 0 === e ? void 0 : e.type) === kt.DailyBoost
                  , v = e=>{
                    var t = e.pointCost
                      , r = e.curStage
                      , a = e.totalStage;
                    return !x(e) && r >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                    Z.O4)("ok_game_okxracer_free") : "".concat((0,
                    $e.uf)(-t, {
                        zeroSign: "-"
                    }), " pts"))
                }
                  , g = e=>{
                    var r = e.id
                      , a = e.context
                      , n = e.curStage
                      , s = e.totalStage
                      , i = a.icon
                      , o = a.name
                      , l = a.desc;
                    return (0,
                    b.jsxs)("div", {
                        className: Li,
                        onClick: ()=>{
                            (e=>{
                                if (t.length > 0) {
                                    var r = t.find((t=>t.id === e));
                                    m(!0),
                                    c(r)
                                }
                            }
                            )(r)
                        }
                        ,
                        children: [(0,
                        b.jsx)("div", {
                            className: Ii,
                            children: i
                        }), (0,
                        b.jsx)("div", {
                            className: Ai,
                            children: o
                        }), (0,
                        b.jsx)("div", {
                            className: Mi,
                            children: l
                        }), (0,
                        b.jsxs)("div", {
                            className: Fi,
                            children: [(0,
                            b.jsx)("span", {
                                children: v(e)
                            }), (x(e) || n < s) && (0,
                            b.jsx)("span", {
                                className: Di
                            }), (0,
                            b.jsx)("span", {
                                className: Ui,
                                children: x(e) ? "".concat(s - n, "/").concat(s) : "Lvl ".concat(n)
                            })]
                        })]
                    }, r)
                }
                ;
                return (0,
                b.jsxs)("div", {
                    className: Si,
                    children: [(0,
                    b.jsxs)("div", {
                        className: Ri,
                        children: [(0,
                        b.jsx)("div", {
                            className: Bi
                        }), t.length > 0 ? (0,
                        b.jsx)(b.Fragment, {
                            children: t.map((e=>g(e)))
                        }) : (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(Ji, {}), (0,
                            b.jsx)(Ji, {}), (0,
                            b.jsx)(Ji, {})]
                        }), (0,
                        b.jsx)("div", {
                            className: Bi
                        })]
                    }), (0,
                    b.jsx)(ya, {
                        visible: p,
                        onClose: ()=>{
                            m(!1)
                        }
                        ,
                        children: (()=>{
                            if (i) {
                                var e = i
                                  , t = e.context
                                  , r = e.curStage
                                  , a = e.totalStage
                                  , n = t.icon
                                  , s = t.name
                                  , c = t.desc;
                                return (0,
                                b.jsxs)("div", {
                                    className: Vi,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: Gi,
                                        children: n
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Wi,
                                        children: s
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Hi,
                                        children: c
                                    }), (0,
                                    b.jsxs)("div", {
                                        className: Ki,
                                        children: [(0,
                                        b.jsx)("span", {
                                            className: Yi,
                                            children: v(i)
                                        }), (x(i) || r < a) && (0,
                                        b.jsx)("span", {
                                            className: Di
                                        }), (0,
                                        b.jsx)("span", {
                                            className: Xi,
                                            children: x(i) ? "".concat(a - r, "/").concat(a) : "Lvl ".concat(r)
                                        })]
                                    }), (0,
                                    b.jsx)(bt.default, {
                                        category: bt.default.CATEGORY.fill,
                                        type: bt.default.TYPE.primary,
                                        size: bt.default.SIZE.lg,
                                        className: zi,
                                        onClick: ()=>f(i),
                                        children: (0,
                                        b.jsx)("div", {
                                            className: Qi,
                                            children: (0,
                                            Z.O4)("ok_game_okxracer_boost_now")
                                        })
                                    })]
                                })
                            }
                            return (0,
                            b.jsx)(b.Fragment, {})
                        }
                        )()
                    })]
                })
            }
            ;
            const ec = "TaskArea_tasks-title__tN1pb"
              , tc = "TaskArea_container__Iz7a-"
              , rc = "TaskArea_task-item__w79wY"
              , ac = "TaskArea_item-left__1r6mY"
              , nc = "TaskArea_item-right__lk7YG"
              , sc = "TaskArea_icon__RfKa0"
              , ic = "TaskArea_title__OyXme"
              , cc = "TaskArea_state__d9FdX"
              , oc = "TaskArea_sheet-container__lottt"
              , lc = "TaskArea_sheet-name__CibLI"
              , uc = "TaskArea_sheet-desc__aaGRQ"
              , dc = "TaskArea_btn__HU6oE"
              , _c = "TaskArea_btn-txt__l+NXi"
              , pc = "TaskArea_done__fmgjd"
              , mc = "TaskArea_taskItemPlaceholder__JXSdR"
              , hc = "TaskArea_task__cxfzp";
            var fc = ()=>{
                var e = Ei()
                  , t = e.tasks
                  , r = e.doTask
                  , n = (0,
                a.useState)()
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                Mn.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == gt.finished)
                            return;
                        c(r),
                        m(!0)
                    }
                }
                ), {
                    wait: 500
                }).run
                  , f = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return 2 === t.context.actionType && t.context.redirectLink && (0,
                                    Ks.k)(t.context.redirectLink),
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
                  , x = ()=>(0,
                b.jsx)("div", {
                    children: Array.from({
                        length: 2
                    }).map(((e,t)=>(0,
                    b.jsx)("div", {
                        className: P()(mc),
                        children: (0,
                        b.jsx)(en, {
                            className: hc
                        })
                    }, t)))
                });
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsxs)("div", {
                        className: ec,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_tasks"), t.length > 0 ? " (".concat(t.length, ")") : ""]
                    }), (0,
                    b.jsxs)("div", {
                        className: tc,
                        children: [t.length > 0 ? t.map((e=>e && (e=>{
                            var t = e.id
                              , r = e.points
                              , a = e.state
                              , n = e.context;
                            return (0,
                            b.jsxs)("div", {
                                className: rc,
                                onClick: ()=>{
                                    h(t)
                                }
                                ,
                                children: [(0,
                                b.jsxs)("div", {
                                    className: ac,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: ic,
                                        children: n.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: cc,
                                        children: " ".concat(a === gt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                        $e.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0,
                                b.jsx)("div", {
                                    className: nc,
                                    children: a === gt.finished ? (0,
                                    b.jsx)("div", {
                                        className: pc,
                                        children: (0,
                                        Z.O4)("ok_game_okxracer_done")
                                    }) : (0,
                                    b.jsx)(E.Z, {
                                        className: P()("okx-growth-chevrons-right", sc)
                                    })
                                })]
                            }, t)
                        }
                        )(e))) : (0,
                        b.jsx)(x, {}), i && (0,
                        b.jsx)(ya, {
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
                                    className: oc,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: lc,
                                        children: e.name
                                    }), (0,
                                    b.jsx)("div", {
                                        className: uc,
                                        dangerouslySetInnerHTML: {
                                            __html: (0,
                                            Sn.dU)(t)
                                        }
                                    }), (0,
                                    b.jsx)(bt.default, {
                                        category: bt.default.CATEGORY.fill,
                                        type: bt.default.TYPE.primary,
                                        size: bt.default.SIZE.lg,
                                        className: dc,
                                        onClick: ()=>f(i),
                                        children: (0,
                                        b.jsx)("div", {
                                            className: _c,
                                            children: r
                                        })
                                    })]
                                })
                            }
                            )()
                        })]
                    })]
                })
            }
            ;
            const xc = "TaskPage_container__5KfIM"
              , vc = "TaskPage_block__kt8oo"
              , gc = "TaskPage_block-boost__QYQXL"
              , kc = "TaskPage_points-title__4hW9Y"
              , jc = "TaskPage_points-content__+yK3g"
              , bc = "TaskPage_boosts-title__PhFSP"
              , wc = "TaskPage_boost-area__Qpbhq";
            var Cc = ()=>{
                var e = Le().points;
                return (0,
                b.jsxs)("div", {
                    className: xc,
                    children: [(0,
                    b.jsx)("div", {
                        className: vc,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: kc,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: jc,
                                children: et.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: gc,
                        children: [(0,
                        b.jsx)("div", {
                            className: bc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_upgrade")
                        }), (0,
                        b.jsx)("div", {
                            className: wc,
                            children: (0,
                            b.jsx)($i, {})
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: vc,
                        children: (0,
                        b.jsx)(fc, {})
                    })]
                })
            }
              , Nc = ()=>(0,
            b.jsx)(Ti, {
                children: (0,
                b.jsx)(Cc, {})
            })
              , yc = ()=>{
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , n = t[1]
                  , i = ae().uid
                  , c = (0,
                a.useMemo)(f, []);
                (0,
                a.useMemo)((()=>{
                    p.Z.setConfig({
                        popupClassName: "theme-dark"
                    }),
                    m.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var h = J().hasWebviewProxy;
                (0,
                a.useEffect)((()=>{
                    (function() {
                        var e = (0,
                        l.Z)((0,
                        o.Z)().mark((function e() {
                            var t;
                            return (0,
                            o.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        d.d)(c);
                                    case 2:
                                        t = e.sent,
                                        n(t);
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
                ), [c]);
                var k = true;
                return (0,
                b.jsx)("article", {
                    className: x,
                    children: (0,
                    b.jsx)(_.Z, {
                        localeData: r,
                        fetchConfig: c,
                        children: k ? (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(Fe, {
                                children: (0,
                                b.jsx)(Be, {
                                    children: (0,
                                    b.jsx)(Ve, {
                                        children: (0,
                                        b.jsx)("main", {
                                            className: g,
                                            children: (0,
                                            b.jsxs)(s.Switch, {
                                                children: [(0,
                                                b.jsx)(s.Route, {
                                                    path: I,
                                                    component: w(Wa),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: F,
                                                    component: N(Tn),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: M,
                                                    component: w(Nc),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: A,
                                                    component: N(fs),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: D,
                                                    component: N(Pi),
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
                                b.jsx)(Q, {})
                            })]
                        }) : (0,
                        b.jsx)(An, {})
                    })
                })
            }
              , Oc = document.getElementById("root");
            if (Oc) {
                var Pc = (0,
                b.jsx)(s.BrowserRouter, {
                    basename: c.Z.langPath,
                    children: (0,
                    b.jsx)(ne, {
                        children: (0,
                        b.jsx)(yc, {})
                    })
                });
                (0,
                i.createRoot)(Oc).render(Pc)
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
    function r(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, r),
        s.exports
    }
    r.m = e,
    (()=>{
        var e = [];
        r.O = (t,a,n,s)=>{
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,n,s] = e[u], c = !0, o = 0; o < a.length; o++)
                        (!1 & s || i >= s) && Object.keys(r.O).every((e=>r.O[e](a[o]))) ? a.splice(o--, 1) : (c = !1,
                        s < i && (i = s));
                    if (c) {
                        e.splice(u--, 1);
                        var l = n();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, n, s]
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
        for (var a in t)
            r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
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
            var a = t.getElementsByTagName("script");
            if (a.length)
                for (var n = a.length - 1; n > -1 && !e; )
                    e = a[n--].src
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
                    var a = window._okGlobal || window.okGlobal;
                    return a && a.isRTL && /\.css$/.test(r) ? r.replace(/\.css$/, ".rtl.css") : r
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
        var t = (t,a)=>{
            var n, s, [i,c,o] = a, l = 0;
            if (i.some((t=>0 !== e[t]))) {
                for (n in c)
                    r.o(c, n) && (r.m[n] = c[n]);
                if (o)
                    var u = o(r)
            }
            for (t && t(a); l < i.length; l++)
                s = i[l],
                r.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return r.O(u)
        }
          , a = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = r.O(void 0, [2675, 5825, 9824, 5890, 6970, 7569, 3599, 4084, 4148, 3020, 1761], (()=>r(96563)));
    a = r.O(a)
}
)();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/growth/telegram-mini-app/index.f2cd1206.js.map
