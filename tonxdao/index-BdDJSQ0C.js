
const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/state-DUgjr4qF.js", "assets/index-B_S8I6Qm.js", "assets/Centrifugo-CqSc0S8v.js", "assets/App-C9AT5Lu0.js", "assets/App-DYoQzhbv.css"]))) => i.map(i => d[i]);
function lv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
var Hk = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function am(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function Vk(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var lm = {
    exports: {}
}
  , bl = {}
  , um = {
    exports: {}
}
  , ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss = Symbol.for("react.element")
  , uv = Symbol.for("react.portal")
  , cv = Symbol.for("react.fragment")
  , fv = Symbol.for("react.strict_mode")
  , dv = Symbol.for("react.profiler")
  , pv = Symbol.for("react.provider")
  , hv = Symbol.for("react.context")
  , mv = Symbol.for("react.forward_ref")
  , gv = Symbol.for("react.suspense")
  , yv = Symbol.for("react.memo")
  , vv = Symbol.for("react.lazy")
  , mp = Symbol.iterator;
function _v(e) {
    return e === null || typeof e != "object" ? null : (e = mp && e[mp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var cm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , fm = Object.assign
  , dm = {};
function Yi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = dm,
    this.updater = n || cm
}
Yi.prototype.isReactComponent = {};
Yi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Yi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function pm() {}
pm.prototype = Yi.prototype;
function Df(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = dm,
    this.updater = n || cm
}
var Ff = Df.prototype = new pm;
Ff.constructor = Df;
fm(Ff, Yi.prototype);
Ff.isPureReactComponent = !0;
var gp = Array.isArray
  , hm = Object.prototype.hasOwnProperty
  , $f = {
    current: null
}
  , mm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function gm(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            hm.call(t, r) && !mm.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Ss,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: $f.current
    }
}
function Sv(e, t) {
    return {
        $$typeof: Ss,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Bf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ss
}
function Ev(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var yp = /\/+/g;
function _u(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ev("" + e.key) : t.toString(36)
}
function ma(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ss:
            case uv:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + _u(s, 0) : r,
        gp(i) ? (n = "",
        e != null && (n = e.replace(yp, "$&/") + "/"),
        ma(i, t, n, "", function(u) {
            return u
        })) : i != null && (Bf(i) && (i = Sv(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(yp, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    gp(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + _u(o, a);
            s += ma(o, t, n, l, i)
        }
    else if (l = _v(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + _u(o, a++),
            s += ma(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function $s(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ma(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function wv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var yt = {
    current: null
}
  , ga = {
    transition: null
}
  , Cv = {
    ReactCurrentDispatcher: yt,
    ReactCurrentBatchConfig: ga,
    ReactCurrentOwner: $f
};
function ym() {
    throw Error("act(...) is not supported in production builds of React.")
}
ie.Children = {
    map: $s,
    forEach: function(e, t, n) {
        $s(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return $s(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return $s(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Bf(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ie.Component = Yi;
ie.Fragment = cv;
ie.Profiler = dv;
ie.PureComponent = Df;
ie.StrictMode = fv;
ie.Suspense = gv;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cv;
ie.act = ym;
ie.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = fm({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = $f.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            hm.call(t, l) && !mm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ss,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
ie.createContext = function(e) {
    return e = {
        $$typeof: hv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: pv,
        _context: e
    },
    e.Consumer = e
}
;
ie.createElement = gm;
ie.createFactory = function(e) {
    var t = gm.bind(null, e);
    return t.type = e,
    t
}
;
ie.createRef = function() {
    return {
        current: null
    }
}
;
ie.forwardRef = function(e) {
    return {
        $$typeof: mv,
        render: e
    }
}
;
ie.isValidElement = Bf;
ie.lazy = function(e) {
    return {
        $$typeof: vv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: wv
    }
}
;
ie.memo = function(e, t) {
    return {
        $$typeof: yv,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
ie.startTransition = function(e) {
    var t = ga.transition;
    ga.transition = {};
    try {
        e()
    } finally {
        ga.transition = t
    }
}
;
ie.unstable_act = ym;
ie.useCallback = function(e, t) {
    return yt.current.useCallback(e, t)
}
;
ie.useContext = function(e) {
    return yt.current.useContext(e)
}
;
ie.useDebugValue = function() {}
;
ie.useDeferredValue = function(e) {
    return yt.current.useDeferredValue(e)
}
;
ie.useEffect = function(e, t) {
    return yt.current.useEffect(e, t)
}
;
ie.useId = function() {
    return yt.current.useId()
}
;
ie.useImperativeHandle = function(e, t, n) {
    return yt.current.useImperativeHandle(e, t, n)
}
;
ie.useInsertionEffect = function(e, t) {
    return yt.current.useInsertionEffect(e, t)
}
;
ie.useLayoutEffect = function(e, t) {
    return yt.current.useLayoutEffect(e, t)
}
;
ie.useMemo = function(e, t) {
    return yt.current.useMemo(e, t)
}
;
ie.useReducer = function(e, t, n) {
    return yt.current.useReducer(e, t, n)
}
;
ie.useRef = function(e) {
    return yt.current.useRef(e)
}
;
ie.useState = function(e) {
    return yt.current.useState(e)
}
;
ie.useSyncExternalStore = function(e, t, n) {
    return yt.current.useSyncExternalStore(e, t, n)
}
;
ie.useTransition = function() {
    return yt.current.useTransition()
}
;
ie.version = "18.3.1";
um.exports = ie;
var F = um.exports;
const vm = am(F)
  , qk = lv({
    __proto__: null,
    default: vm
}, [F]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kv = F
  , xv = Symbol.for("react.element")
  , bv = Symbol.for("react.fragment")
  , Tv = Object.prototype.hasOwnProperty
  , Iv = kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Lv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function _m(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Tv.call(t, r) && !Lv.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: xv,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Iv.current
    }
}
bl.Fragment = bv;
bl.jsx = _m;
bl.jsxs = _m;
lm.exports = bl;
var N = lm.exports
  , oc = {}
  , Sm = {
    exports: {}
}
  , Dt = {}
  , Em = {
    exports: {}
}
  , wm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(L, $) {
        var j = L.length;
        L.push($);
        e: for (; 0 < j; ) {
            var de = j - 1 >>> 1
              , Oe = L[de];
            if (0 < i(Oe, $))
                L[de] = $,
                L[j] = Oe,
                j = de;
            else
                break e
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0]
    }
    function r(L) {
        if (L.length === 0)
            return null;
        var $ = L[0]
          , j = L.pop();
        if (j !== $) {
            L[0] = j;
            e: for (var de = 0, Oe = L.length, an = Oe >>> 1; de < an; ) {
                var ct = 2 * (de + 1) - 1
                  , Yt = L[ct]
                  , _t = ct + 1
                  , It = L[_t];
                if (0 > i(Yt, j))
                    _t < Oe && 0 > i(It, Yt) ? (L[de] = It,
                    L[_t] = j,
                    de = _t) : (L[de] = Yt,
                    L[ct] = j,
                    de = ct);
                else if (_t < Oe && 0 > i(It, j))
                    L[de] = It,
                    L[_t] = j,
                    de = _t;
                else
                    break e
            }
        }
        return $
    }
    function i(L, $) {
        var j = L.sortIndex - $.sortIndex;
        return j !== 0 ? j : L.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , h = !1
      , v = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(L) {
        for (var $ = n(u); $ !== null; ) {
            if ($.callback === null)
                r(u);
            else if ($.startTime <= L)
                r(u),
                $.sortIndex = $.expirationTime,
                t(l, $);
            else
                break;
            $ = n(u)
        }
    }
    function E(L) {
        if (v = !1,
        y(L),
        !h)
            if (n(l) !== null)
                h = !0,
                H(x);
            else {
                var $ = n(u);
                $ !== null && _e(E, $.startTime - L)
            }
    }
    function x(L, $) {
        h = !1,
        v && (v = !1,
        g(I),
        I = -1),
        m = !0;
        var j = d;
        try {
            for (y($),
            f = n(l); f !== null && (!(f.expirationTime > $) || L && !D()); ) {
                var de = f.callback;
                if (typeof de == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var Oe = de(f.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof Oe == "function" ? f.callback = Oe : f === n(l) && r(l),
                    y($)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var an = !0;
            else {
                var ct = n(u);
                ct !== null && _e(E, ct.startTime - $),
                an = !1
            }
            return an
        } finally {
            f = null,
            d = j,
            m = !1
        }
    }
    var b = !1
      , w = null
      , I = -1
      , W = 5
      , T = -1;
    function D() {
        return !(e.unstable_now() - T < W)
    }
    function z() {
        if (w !== null) {
            var L = e.unstable_now();
            T = L;
            var $ = !0;
            try {
                $ = w(!0, L)
            } finally {
                $ ? ee() : (b = !1,
                w = null)
            }
        } else
            b = !1
    }
    var ee;
    if (typeof p == "function")
        ee = function() {
            p(z)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ne = new MessageChannel
          , me = ne.port2;
        ne.port1.onmessage = z,
        ee = function() {
            me.postMessage(null)
        }
    } else
        ee = function() {
            k(z, 0)
        }
        ;
    function H(L) {
        w = L,
        b || (b = !0,
        ee())
    }
    function _e(L, $) {
        I = k(function() {
            L(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(L) {
        L.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        h || m || (h = !0,
        H(x))
    }
    ,
    e.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < L ? Math.floor(1e3 / L) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(L) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = d
        }
        var j = d;
        d = $;
        try {
            return L()
        } finally {
            d = j
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(L, $) {
        switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            L = 3
        }
        var j = d;
        d = L;
        try {
            return $()
        } finally {
            d = j
        }
    }
    ,
    e.unstable_scheduleCallback = function(L, $, j) {
        var de = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay,
        j = typeof j == "number" && 0 < j ? de + j : de) : j = de,
        L) {
        case 1:
            var Oe = -1;
            break;
        case 2:
            Oe = 250;
            break;
        case 5:
            Oe = 1073741823;
            break;
        case 4:
            Oe = 1e4;
            break;
        default:
            Oe = 5e3
        }
        return Oe = j + Oe,
        L = {
            id: c++,
            callback: $,
            priorityLevel: L,
            startTime: j,
            expirationTime: Oe,
            sortIndex: -1
        },
        j > de ? (L.sortIndex = j,
        t(u, L),
        n(l) === null && L === n(u) && (v ? (g(I),
        I = -1) : v = !0,
        _e(E, j - de))) : (L.sortIndex = Oe,
        t(l, L),
        h || m || (h = !0,
        H(x))),
        L
    }
    ,
    e.unstable_shouldYield = D,
    e.unstable_wrapCallback = function(L) {
        var $ = d;
        return function() {
            var j = d;
            d = $;
            try {
                return L.apply(this, arguments)
            } finally {
                d = j
            }
        }
    }
}
)(wm);
Em.exports = wm;
var Rv = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av = F
  , Mt = Rv;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Cm = new Set
  , qo = {};
function Gr(e, t) {
    Pi(e, t),
    Pi(e + "Capture", t)
}
function Pi(e, t) {
    for (qo[e] = t,
    e = 0; e < t.length; e++)
        Cm.add(t[e])
}
var Pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , sc = Object.prototype.hasOwnProperty
  , Pv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , vp = {}
  , _p = {};
function Ov(e) {
    return sc.call(_p, e) ? !0 : sc.call(vp, e) ? !1 : Pv.test(e) ? _p[e] = !0 : (vp[e] = !0,
    !1)
}
function Nv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Mv(e, t, n, r) {
    if (t === null || typeof t > "u" || Nv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function vt(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    nt[e] = new vt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    nt[t] = new vt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    nt[e] = new vt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    nt[e] = new vt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    nt[e] = new vt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    nt[e] = new vt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    nt[e] = new vt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    nt[e] = new vt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    nt[e] = new vt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var jf = /[\-:]([a-z])/g;
function Uf(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(jf, Uf);
    nt[t] = new vt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(jf, Uf);
    nt[t] = new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(jf, Uf);
    nt[t] = new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    nt[e] = new vt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
nt.xlinkHref = new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    nt[e] = new vt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wf(e, t, n, r) {
    var i = nt.hasOwnProperty(t) ? nt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Mv(t, n, i, r) && (n = null),
    r || i === null ? Ov(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jn = Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Bs = Symbol.for("react.element")
  , li = Symbol.for("react.portal")
  , ui = Symbol.for("react.fragment")
  , zf = Symbol.for("react.strict_mode")
  , ac = Symbol.for("react.profiler")
  , km = Symbol.for("react.provider")
  , xm = Symbol.for("react.context")
  , Hf = Symbol.for("react.forward_ref")
  , lc = Symbol.for("react.suspense")
  , uc = Symbol.for("react.suspense_list")
  , Vf = Symbol.for("react.memo")
  , Wn = Symbol.for("react.lazy")
  , bm = Symbol.for("react.offscreen")
  , Sp = Symbol.iterator;
function go(e) {
    return e === null || typeof e != "object" ? null : (e = Sp && e[Sp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Pe = Object.assign, Su;
function To(e) {
    if (Su === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Su = t && t[1] || ""
        }
    return `
` + Su + e
}
var Eu = !1;
function wu(e, t) {
    if (!e || Eu)
        return "";
    Eu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Eu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? To(e) : ""
}
function Dv(e) {
    switch (e.tag) {
    case 5:
        return To(e.type);
    case 16:
        return To("Lazy");
    case 13:
        return To("Suspense");
    case 19:
        return To("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = wu(e.type, !1),
        e;
    case 11:
        return e = wu(e.type.render, !1),
        e;
    case 1:
        return e = wu(e.type, !0),
        e;
    default:
        return ""
    }
}
function cc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ui:
        return "Fragment";
    case li:
        return "Portal";
    case ac:
        return "Profiler";
    case zf:
        return "StrictMode";
    case lc:
        return "Suspense";
    case uc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case xm:
            return (e.displayName || "Context") + ".Consumer";
        case km:
            return (e._context.displayName || "Context") + ".Provider";
        case Hf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Vf:
            return t = e.displayName || null,
            t !== null ? t : cc(e.type) || "Memo";
        case Wn:
            t = e._payload,
            e = e._init;
            try {
                return cc(e(t))
            } catch {}
        }
    return null
}
function Fv(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return cc(t);
    case 8:
        return t === zf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function fr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Tm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function $v(e) {
    var t = Tm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function js(e) {
    e._valueTracker || (e._valueTracker = $v(e))
}
function Im(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Tm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Oa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function fc(e, t) {
    var n = t.checked;
    return Pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ep(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = fr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Lm(e, t) {
    t = t.checked,
    t != null && Wf(e, "checked", t, !1)
}
function dc(e, t) {
    Lm(e, t);
    var n = fr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? pc(e, t.type, n) : t.hasOwnProperty("defaultValue") && pc(e, t.type, fr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function pc(e, t, n) {
    (t !== "number" || Oa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Io = Array.isArray;
function ki(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + fr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function hc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return Pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Cp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (Io(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: fr(n)
    }
}
function Rm(e, t) {
    var n = fr(t.value)
      , r = fr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function kp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Am(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function mc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Am(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Us, Pm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Us = Us || document.createElement("div"),
        Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Us.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ko(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ao = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Bv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function(e) {
    Bv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ao[t] = Ao[e]
    })
});
function Om(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ao.hasOwnProperty(e) && Ao[e] ? ("" + t).trim() : t + "px"
}
function Nm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Om(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var jv = Pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function gc(e, t) {
    if (t) {
        if (jv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function yc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var vc = null;
function qf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var _c = null
  , xi = null
  , bi = null;
function xp(e) {
    if (e = Cs(e)) {
        if (typeof _c != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = Al(t),
        _c(e.stateNode, e.type, t))
    }
}
function Mm(e) {
    xi ? bi ? bi.push(e) : bi = [e] : xi = e
}
function Dm() {
    if (xi) {
        var e = xi
          , t = bi;
        if (bi = xi = null,
        xp(e),
        t)
            for (e = 0; e < t.length; e++)
                xp(t[e])
    }
}
function Fm(e, t) {
    return e(t)
}
function $m() {}
var Cu = !1;
function Bm(e, t, n) {
    if (Cu)
        return e(t, n);
    Cu = !0;
    try {
        return Fm(e, t, n)
    } finally {
        Cu = !1,
        (xi !== null || bi !== null) && ($m(),
        Dm())
    }
}
function Go(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Al(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var Sc = !1;
if (Pn)
    try {
        var yo = {};
        Object.defineProperty(yo, "passive", {
            get: function() {
                Sc = !0
            }
        }),
        window.addEventListener("test", yo, yo),
        window.removeEventListener("test", yo, yo)
    } catch {
        Sc = !1
    }
function Uv(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Po = !1
  , Na = null
  , Ma = !1
  , Ec = null
  , Wv = {
    onError: function(e) {
        Po = !0,
        Na = e
    }
};
function zv(e, t, n, r, i, o, s, a, l) {
    Po = !1,
    Na = null,
    Uv.apply(Wv, arguments)
}
function Hv(e, t, n, r, i, o, s, a, l) {
    if (zv.apply(this, arguments),
    Po) {
        if (Po) {
            var u = Na;
            Po = !1,
            Na = null
        } else
            throw Error(A(198));
        Ma || (Ma = !0,
        Ec = u)
    }
}
function Yr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function jm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function bp(e) {
    if (Yr(e) !== e)
        throw Error(A(188))
}
function Vv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Yr(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return bp(i),
                    e;
                if (o === r)
                    return bp(i),
                    t;
                o = o.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function Um(e) {
    return e = Vv(e),
    e !== null ? Wm(e) : null
}
function Wm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Wm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var zm = Mt.unstable_scheduleCallback
  , Tp = Mt.unstable_cancelCallback
  , qv = Mt.unstable_shouldYield
  , Kv = Mt.unstable_requestPaint
  , $e = Mt.unstable_now
  , Gv = Mt.unstable_getCurrentPriorityLevel
  , Kf = Mt.unstable_ImmediatePriority
  , Hm = Mt.unstable_UserBlockingPriority
  , Da = Mt.unstable_NormalPriority
  , Yv = Mt.unstable_LowPriority
  , Vm = Mt.unstable_IdlePriority
  , Tl = null
  , vn = null;
function Jv(e) {
    if (vn && typeof vn.onCommitFiberRoot == "function")
        try {
            vn.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var nn = Math.clz32 ? Math.clz32 : Zv
  , Qv = Math.log
  , Xv = Math.LN2;
function Zv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Qv(e) / Xv | 0) | 0
}
var Ws = 64
  , zs = 4194304;
function Lo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Fa(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Lo(a) : (o &= s,
        o !== 0 && (r = Lo(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = Lo(s) : o !== 0 && (r = Lo(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - nn(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function e3(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function t3(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - nn(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = e3(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function wc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qm() {
    var e = Ws;
    return Ws <<= 1,
    !(Ws & 4194240) && (Ws = 64),
    e
}
function ku(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Es(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - nn(t),
    e[t] = n
}
function n3(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - nn(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Gf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - nn(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var ye = 0;
function Km(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gm, Yf, Ym, Jm, Qm, Cc = !1, Hs = [], er = null, tr = null, nr = null, Yo = new Map, Jo = new Map, Yn = [], r3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ip(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        er = null;
        break;
    case "dragenter":
    case "dragleave":
        tr = null;
        break;
    case "mouseover":
    case "mouseout":
        nr = null;
        break;
    case "pointerover":
    case "pointerout":
        Yo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Jo.delete(t.pointerId)
    }
}
function vo(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Cs(t),
    t !== null && Yf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function i3(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return er = vo(er, e, t, n, r, i),
        !0;
    case "dragenter":
        return tr = vo(tr, e, t, n, r, i),
        !0;
    case "mouseover":
        return nr = vo(nr, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Yo.set(o, vo(Yo.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Jo.set(o, vo(Jo.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Xm(e) {
    var t = Rr(e.target);
    if (t !== null) {
        var n = Yr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = jm(n),
                t !== null) {
                    e.blockedOn = t,
                    Qm(e.priority, function() {
                        Ym(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ya(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = kc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            vc = r,
            n.target.dispatchEvent(r),
            vc = null
        } else
            return t = Cs(n),
            t !== null && Yf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Lp(e, t, n) {
    ya(e) && n.delete(t)
}
function o3() {
    Cc = !1,
    er !== null && ya(er) && (er = null),
    tr !== null && ya(tr) && (tr = null),
    nr !== null && ya(nr) && (nr = null),
    Yo.forEach(Lp),
    Jo.forEach(Lp)
}
function _o(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Cc || (Cc = !0,
    Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, o3)))
}
function Qo(e) {
    function t(i) {
        return _o(i, e)
    }
    if (0 < Hs.length) {
        _o(Hs[0], e);
        for (var n = 1; n < Hs.length; n++) {
            var r = Hs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (er !== null && _o(er, e),
    tr !== null && _o(tr, e),
    nr !== null && _o(nr, e),
    Yo.forEach(t),
    Jo.forEach(t),
    n = 0; n < Yn.length; n++)
        r = Yn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yn.length && (n = Yn[0],
    n.blockedOn === null); )
        Xm(n),
        n.blockedOn === null && Yn.shift()
}
var Ti = jn.ReactCurrentBatchConfig
  , $a = !0;
function s3(e, t, n, r) {
    var i = ye
      , o = Ti.transition;
    Ti.transition = null;
    try {
        ye = 1,
        Jf(e, t, n, r)
    } finally {
        ye = i,
        Ti.transition = o
    }
}
function a3(e, t, n, r) {
    var i = ye
      , o = Ti.transition;
    Ti.transition = null;
    try {
        ye = 4,
        Jf(e, t, n, r)
    } finally {
        ye = i,
        Ti.transition = o
    }
}
function Jf(e, t, n, r) {
    if ($a) {
        var i = kc(e, t, n, r);
        if (i === null)
            Nu(e, t, r, Ba, n),
            Ip(e, r);
        else if (i3(i, e, t, n, r))
            r.stopPropagation();
        else if (Ip(e, r),
        t & 4 && -1 < r3.indexOf(e)) {
            for (; i !== null; ) {
                var o = Cs(i);
                if (o !== null && Gm(o),
                o = kc(e, t, n, r),
                o === null && Nu(e, t, r, Ba, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Nu(e, t, r, null, n)
    }
}
var Ba = null;
function kc(e, t, n, r) {
    if (Ba = null,
    e = qf(r),
    e = Rr(e),
    e !== null)
        if (t = Yr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = jm(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ba = e,
    null
}
function Zm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Gv()) {
        case Kf:
            return 1;
        case Hm:
            return 4;
        case Da:
        case Yv:
            return 16;
        case Vm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Qn = null
  , Qf = null
  , va = null;
function eg() {
    if (va)
        return va;
    var e, t = Qf, n = t.length, r, i = "value"in Qn ? Qn.value : Qn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return va = i.slice(e, 1 < r ? 1 - r : void 0)
}
function _a(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Vs() {
    return !0
}
function Rp() {
    return !1
}
function Ft(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Vs : Rp,
        this.isPropagationStopped = Rp,
        this
    }
    return Pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Vs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Vs)
        },
        persist: function() {},
        isPersistent: Vs
    }),
    t
}
var Ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Xf = Ft(Ji), ws = Pe({}, Ji, {
    view: 0,
    detail: 0
}), l3 = Ft(ws), xu, bu, So, Il = Pe({}, ws, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== So && (So && e.type === "mousemove" ? (xu = e.screenX - So.screenX,
        bu = e.screenY - So.screenY) : bu = xu = 0,
        So = e),
        xu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : bu
    }
}), Ap = Ft(Il), u3 = Pe({}, Il, {
    dataTransfer: 0
}), c3 = Ft(u3), f3 = Pe({}, ws, {
    relatedTarget: 0
}), Tu = Ft(f3), d3 = Pe({}, Ji, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), p3 = Ft(d3), h3 = Pe({}, Ji, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), m3 = Ft(h3), g3 = Pe({}, Ji, {
    data: 0
}), Pp = Ft(g3), y3 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, v3 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, _3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function S3(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _3[e]) ? !!t[e] : !1
}
function Zf() {
    return S3
}
var E3 = Pe({}, ws, {
    key: function(e) {
        if (e.key) {
            var t = y3[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = _a(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? v3[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zf,
    charCode: function(e) {
        return e.type === "keypress" ? _a(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? _a(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , w3 = Ft(E3)
  , C3 = Pe({}, Il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Op = Ft(C3)
  , k3 = Pe({}, ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zf
})
  , x3 = Ft(k3)
  , b3 = Pe({}, Ji, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , T3 = Ft(b3)
  , I3 = Pe({}, Il, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , L3 = Ft(I3)
  , R3 = [9, 13, 27, 32]
  , ed = Pn && "CompositionEvent"in window
  , Oo = null;
Pn && "documentMode"in document && (Oo = document.documentMode);
var A3 = Pn && "TextEvent"in window && !Oo
  , tg = Pn && (!ed || Oo && 8 < Oo && 11 >= Oo)
  , Np = " "
  , Mp = !1;
function ng(e, t) {
    switch (e) {
    case "keyup":
        return R3.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function rg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ci = !1;
function P3(e, t) {
    switch (e) {
    case "compositionend":
        return rg(t);
    case "keypress":
        return t.which !== 32 ? null : (Mp = !0,
        Np);
    case "textInput":
        return e = t.data,
        e === Np && Mp ? null : e;
    default:
        return null
    }
}
function O3(e, t) {
    if (ci)
        return e === "compositionend" || !ed && ng(e, t) ? (e = eg(),
        va = Qf = Qn = null,
        ci = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return tg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var N3 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Dp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!N3[e.type] : t === "textarea"
}
function ig(e, t, n, r) {
    Mm(r),
    t = ja(t, "onChange"),
    0 < t.length && (n = new Xf("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var No = null
  , Xo = null;
function M3(e) {
    mg(e, 0)
}
function Ll(e) {
    var t = pi(e);
    if (Im(t))
        return e
}
function D3(e, t) {
    if (e === "change")
        return t
}
var og = !1;
if (Pn) {
    var Iu;
    if (Pn) {
        var Lu = "oninput"in document;
        if (!Lu) {
            var Fp = document.createElement("div");
            Fp.setAttribute("oninput", "return;"),
            Lu = typeof Fp.oninput == "function"
        }
        Iu = Lu
    } else
        Iu = !1;
    og = Iu && (!document.documentMode || 9 < document.documentMode)
}
function $p() {
    No && (No.detachEvent("onpropertychange", sg),
    Xo = No = null)
}
function sg(e) {
    if (e.propertyName === "value" && Ll(Xo)) {
        var t = [];
        ig(t, Xo, e, qf(e)),
        Bm(M3, t)
    }
}
function F3(e, t, n) {
    e === "focusin" ? ($p(),
    No = t,
    Xo = n,
    No.attachEvent("onpropertychange", sg)) : e === "focusout" && $p()
}
function $3(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ll(Xo)
}
function B3(e, t) {
    if (e === "click")
        return Ll(t)
}
function j3(e, t) {
    if (e === "input" || e === "change")
        return Ll(t)
}
function U3(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var on = typeof Object.is == "function" ? Object.is : U3;
function Zo(e, t) {
    if (on(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!sc.call(t, i) || !on(e[i], t[i]))
            return !1
    }
    return !0
}
function Bp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function jp(e, t) {
    var n = Bp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Bp(n)
    }
}
function ag(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ag(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function lg() {
    for (var e = window, t = Oa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Oa(e.document)
    }
    return t
}
function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function W3(e) {
    var t = lg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ag(n.ownerDocument.documentElement, n)) {
        if (r !== null && td(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = jp(n, o);
                var s = jp(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var z3 = Pn && "documentMode"in document && 11 >= document.documentMode
  , fi = null
  , xc = null
  , Mo = null
  , bc = !1;
function Up(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bc || fi == null || fi !== Oa(r) || (r = fi,
    "selectionStart"in r && td(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Mo && Zo(Mo, r) || (Mo = r,
    r = ja(xc, "onSelect"),
    0 < r.length && (t = new Xf("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = fi)))
}
function qs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var di = {
    animationend: qs("Animation", "AnimationEnd"),
    animationiteration: qs("Animation", "AnimationIteration"),
    animationstart: qs("Animation", "AnimationStart"),
    transitionend: qs("Transition", "TransitionEnd")
}
  , Ru = {}
  , ug = {};
Pn && (ug = document.createElement("div").style,
"AnimationEvent"in window || (delete di.animationend.animation,
delete di.animationiteration.animation,
delete di.animationstart.animation),
"TransitionEvent"in window || delete di.transitionend.transition);
function Rl(e) {
    if (Ru[e])
        return Ru[e];
    if (!di[e])
        return e;
    var t = di[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ug)
            return Ru[e] = t[n];
    return e
}
var cg = Rl("animationend")
  , fg = Rl("animationiteration")
  , dg = Rl("animationstart")
  , pg = Rl("transitionend")
  , hg = new Map
  , Wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gr(e, t) {
    hg.set(e, t),
    Gr(t, [e])
}
for (var Au = 0; Au < Wp.length; Au++) {
    var Pu = Wp[Au]
      , H3 = Pu.toLowerCase()
      , V3 = Pu[0].toUpperCase() + Pu.slice(1);
    gr(H3, "on" + V3)
}
gr(cg, "onAnimationEnd");
gr(fg, "onAnimationIteration");
gr(dg, "onAnimationStart");
gr("dblclick", "onDoubleClick");
gr("focusin", "onFocus");
gr("focusout", "onBlur");
gr(pg, "onTransitionEnd");
Pi("onMouseEnter", ["mouseout", "mouseover"]);
Pi("onMouseLeave", ["mouseout", "mouseover"]);
Pi("onPointerEnter", ["pointerout", "pointerover"]);
Pi("onPointerLeave", ["pointerout", "pointerover"]);
Gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , q3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
function zp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Hv(r, t, void 0, e),
    e.currentTarget = null
}
function mg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    zp(i, a, u),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    zp(i, a, u),
                    o = l
                }
        }
    }
    if (Ma)
        throw e = Ec,
        Ma = !1,
        Ec = null,
        e
}
function xe(e, t) {
    var n = t[Ac];
    n === void 0 && (n = t[Ac] = new Set);
    var r = e + "__bubble";
    n.has(r) || (gg(t, e, 2, !1),
    n.add(r))
}
function Ou(e, t, n) {
    var r = 0;
    t && (r |= 4),
    gg(n, e, r, t)
}
var Ks = "_reactListening" + Math.random().toString(36).slice(2);
function es(e) {
    if (!e[Ks]) {
        e[Ks] = !0,
        Cm.forEach(function(n) {
            n !== "selectionchange" && (q3.has(n) || Ou(n, !1, e),
            Ou(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ks] || (t[Ks] = !0,
        Ou("selectionchange", !1, t))
    }
}
function gg(e, t, n, r) {
    switch (Zm(t)) {
    case 1:
        var i = s3;
        break;
    case 4:
        i = a3;
        break;
    default:
        i = Jf
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Sc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Nu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Rr(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Bm(function() {
        var u = o
          , c = qf(n)
          , f = [];
        e: {
            var d = hg.get(e);
            if (d !== void 0) {
                var m = Xf
                  , h = e;
                switch (e) {
                case "keypress":
                    if (_a(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = w3;
                    break;
                case "focusin":
                    h = "focus",
                    m = Tu;
                    break;
                case "focusout":
                    h = "blur",
                    m = Tu;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = Tu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Ap;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = c3;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = x3;
                    break;
                case cg:
                case fg:
                case dg:
                    m = p3;
                    break;
                case pg:
                    m = T3;
                    break;
                case "scroll":
                    m = l3;
                    break;
                case "wheel":
                    m = L3;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = m3;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Op
                }
                var v = (t & 4) !== 0
                  , k = !v && e === "scroll"
                  , g = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var E = y.stateNode;
                    if (y.tag === 5 && E !== null && (y = E,
                    g !== null && (E = Go(p, g),
                    E != null && v.push(ts(p, E, y)))),
                    k)
                        break;
                    p = p.return
                }
                0 < v.length && (d = new m(d,h,null,n,c),
                f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                d && n !== vc && (h = n.relatedTarget || n.fromElement) && (Rr(h) || h[On]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (h = n.relatedTarget || n.toElement,
                m = u,
                h = h ? Rr(h) : null,
                h !== null && (k = Yr(h),
                h !== k || h.tag !== 5 && h.tag !== 6) && (h = null)) : (m = null,
                h = u),
                m !== h)) {
                    if (v = Ap,
                    E = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Op,
                    E = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    k = m == null ? d : pi(m),
                    y = h == null ? d : pi(h),
                    d = new v(E,p + "leave",m,n,c),
                    d.target = k,
                    d.relatedTarget = y,
                    E = null,
                    Rr(c) === u && (v = new v(g,p + "enter",h,n,c),
                    v.target = y,
                    v.relatedTarget = k,
                    E = v),
                    k = E,
                    m && h)
                        t: {
                            for (v = m,
                            g = h,
                            p = 0,
                            y = v; y; y = ri(y))
                                p++;
                            for (y = 0,
                            E = g; E; E = ri(E))
                                y++;
                            for (; 0 < p - y; )
                                v = ri(v),
                                p--;
                            for (; 0 < y - p; )
                                g = ri(g),
                                y--;
                            for (; p--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = ri(v),
                                g = ri(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    m !== null && Hp(f, d, m, v, !1),
                    h !== null && k !== null && Hp(f, k, h, v, !0)
                }
            }
            e: {
                if (d = u ? pi(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var x = D3;
                else if (Dp(d))
                    if (og)
                        x = j3;
                    else {
                        x = $3;
                        var b = F3
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = B3);
                if (x && (x = x(e, u))) {
                    ig(f, x, n, c);
                    break e
                }
                b && b(e, d, u),
                e === "focusout" && (b = d._wrapperState) && b.controlled && d.type === "number" && pc(d, "number", d.value)
            }
            switch (b = u ? pi(u) : window,
            e) {
            case "focusin":
                (Dp(b) || b.contentEditable === "true") && (fi = b,
                xc = u,
                Mo = null);
                break;
            case "focusout":
                Mo = xc = fi = null;
                break;
            case "mousedown":
                bc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                bc = !1,
                Up(f, n, c);
                break;
            case "selectionchange":
                if (z3)
                    break;
            case "keydown":
            case "keyup":
                Up(f, n, c)
            }
            var w;
            if (ed)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var I = "onCompositionStart";
                        break e;
                    case "compositionend":
                        I = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        I = "onCompositionUpdate";
                        break e
                    }
                    I = void 0
                }
            else
                ci ? ng(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
            I && (tg && n.locale !== "ko" && (ci || I !== "onCompositionStart" ? I === "onCompositionEnd" && ci && (w = eg()) : (Qn = c,
            Qf = "value"in Qn ? Qn.value : Qn.textContent,
            ci = !0)),
            b = ja(u, I),
            0 < b.length && (I = new Pp(I,e,null,n,c),
            f.push({
                event: I,
                listeners: b
            }),
            w ? I.data = w : (w = rg(n),
            w !== null && (I.data = w)))),
            (w = A3 ? P3(e, n) : O3(e, n)) && (u = ja(u, "onBeforeInput"),
            0 < u.length && (c = new Pp("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = w))
        }
        mg(f, t)
    })
}
function ts(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ja(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Go(e, n),
        o != null && r.unshift(ts(e, o, i)),
        o = Go(e, t),
        o != null && r.push(ts(e, o, i))),
        e = e.return
    }
    return r
}
function ri(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Hp(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = Go(n, o),
        l != null && s.unshift(ts(n, l, a))) : i || (l = Go(n, o),
        l != null && s.push(ts(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var K3 = /\r\n?/g
  , G3 = /\u0000|\uFFFD/g;
function Vp(e) {
    return (typeof e == "string" ? e : "" + e).replace(K3, `
`).replace(G3, "")
}
function Gs(e, t, n) {
    if (t = Vp(t),
    Vp(e) !== t && n)
        throw Error(A(425))
}
function Ua() {}
var Tc = null
  , Ic = null;
function Lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Rc = typeof setTimeout == "function" ? setTimeout : void 0
  , Y3 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , qp = typeof Promise == "function" ? Promise : void 0
  , J3 = typeof queueMicrotask == "function" ? queueMicrotask : typeof qp < "u" ? function(e) {
    return qp.resolve(null).then(e).catch(Q3)
}
: Rc;
function Q3(e) {
    setTimeout(function() {
        throw e
    })
}
function Mu(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Qo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Qo(t)
}
function rr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Kp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Qi = Math.random().toString(36).slice(2)
  , pn = "__reactFiber$" + Qi
  , ns = "__reactProps$" + Qi
  , On = "__reactContainer$" + Qi
  , Ac = "__reactEvents$" + Qi
  , X3 = "__reactListeners$" + Qi
  , Z3 = "__reactHandles$" + Qi;
function Rr(e) {
    var t = e[pn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[On] || n[pn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Kp(e); e !== null; ) {
                    if (n = e[pn])
                        return n;
                    e = Kp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Cs(e) {
    return e = e[pn] || e[On],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function pi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function Al(e) {
    return e[ns] || null
}
var Pc = []
  , hi = -1;
function yr(e) {
    return {
        current: e
    }
}
function be(e) {
    0 > hi || (e.current = Pc[hi],
    Pc[hi] = null,
    hi--)
}
function we(e, t) {
    hi++,
    Pc[hi] = e.current,
    e.current = t
}
var dr = {}
  , lt = yr(dr)
  , xt = yr(!1)
  , Ur = dr;
function Oi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return dr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function bt(e) {
    return e = e.childContextTypes,
    e != null
}
function Wa() {
    be(xt),
    be(lt)
}
function Gp(e, t, n) {
    if (lt.current !== dr)
        throw Error(A(168));
    we(lt, t),
    we(xt, n)
}
function yg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(A(108, Fv(e) || "Unknown", i));
    return Pe({}, n, r)
}
function za(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dr,
    Ur = lt.current,
    we(lt, e),
    we(xt, xt.current),
    !0
}
function Yp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = yg(e, t, Ur),
    r.__reactInternalMemoizedMergedChildContext = e,
    be(xt),
    be(lt),
    we(lt, e)) : be(xt),
    we(xt, n)
}
var xn = null
  , Pl = !1
  , Du = !1;
function vg(e) {
    xn === null ? xn = [e] : xn.push(e)
}
function e4(e) {
    Pl = !0,
    vg(e)
}
function vr() {
    if (!Du && xn !== null) {
        Du = !0;
        var e = 0
          , t = ye;
        try {
            var n = xn;
            for (ye = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            xn = null,
            Pl = !1
        } catch (i) {
            throw xn !== null && (xn = xn.slice(e + 1)),
            zm(Kf, vr),
            i
        } finally {
            ye = t,
            Du = !1
        }
    }
    return null
}
var mi = []
  , gi = 0
  , Ha = null
  , Va = 0
  , Bt = []
  , jt = 0
  , Wr = null
  , Tn = 1
  , In = "";
function Ir(e, t) {
    mi[gi++] = Va,
    mi[gi++] = Ha,
    Ha = e,
    Va = t
}
function _g(e, t, n) {
    Bt[jt++] = Tn,
    Bt[jt++] = In,
    Bt[jt++] = Wr,
    Wr = e;
    var r = Tn;
    e = In;
    var i = 32 - nn(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - nn(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        Tn = 1 << 32 - nn(t) + i | n << i | r,
        In = o + e
    } else
        Tn = 1 << o | n << i | r,
        In = e
}
function nd(e) {
    e.return !== null && (Ir(e, 1),
    _g(e, 1, 0))
}
function rd(e) {
    for (; e === Ha; )
        Ha = mi[--gi],
        mi[gi] = null,
        Va = mi[--gi],
        mi[gi] = null;
    for (; e === Wr; )
        Wr = Bt[--jt],
        Bt[jt] = null,
        In = Bt[--jt],
        Bt[jt] = null,
        Tn = Bt[--jt],
        Bt[jt] = null
}
var Ot = null
  , Pt = null
  , Ie = !1
  , en = null;
function Sg(e, t) {
    var n = Wt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Jp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ot = e,
        Pt = rr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ot = e,
        Pt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Wr !== null ? {
            id: Tn,
            overflow: In
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Wt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ot = e,
        Pt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Oc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Nc(e) {
    if (Ie) {
        var t = Pt;
        if (t) {
            var n = t;
            if (!Jp(e, t)) {
                if (Oc(e))
                    throw Error(A(418));
                t = rr(n.nextSibling);
                var r = Ot;
                t && Jp(e, t) ? Sg(r, n) : (e.flags = e.flags & -4097 | 2,
                Ie = !1,
                Ot = e)
            }
        } else {
            if (Oc(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            Ie = !1,
            Ot = e
        }
    }
}
function Qp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ot = e
}
function Ys(e) {
    if (e !== Ot)
        return !1;
    if (!Ie)
        return Qp(e),
        Ie = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Lc(e.type, e.memoizedProps)),
    t && (t = Pt)) {
        if (Oc(e))
            throw Eg(),
            Error(A(418));
        for (; t; )
            Sg(e, t),
            t = rr(t.nextSibling)
    }
    if (Qp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Pt = rr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Pt = null
        }
    } else
        Pt = Ot ? rr(e.stateNode.nextSibling) : null;
    return !0
}
function Eg() {
    for (var e = Pt; e; )
        e = rr(e.nextSibling)
}
function Ni() {
    Pt = Ot = null,
    Ie = !1
}
function id(e) {
    en === null ? en = [e] : en.push(e)
}
var t4 = jn.ReactCurrentBatchConfig;
function Eo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Js(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Xp(e) {
    var t = e._init;
    return t(e._payload)
}
function wg(e) {
    function t(g, p) {
        if (e) {
            var y = g.deletions;
            y === null ? (g.deletions = [p],
            g.flags |= 16) : y.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function i(g, p) {
        return g = ar(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, p, y) {
        return g.index = y,
        e ? (y = g.alternate,
        y !== null ? (y = y.index,
        y < p ? (g.flags |= 2,
        p) : y) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, p, y, E) {
        return p === null || p.tag !== 6 ? (p = zu(y, g.mode, E),
        p.return = g,
        p) : (p = i(p, y),
        p.return = g,
        p)
    }
    function l(g, p, y, E) {
        var x = y.type;
        return x === ui ? c(g, p, y.props.children, E, y.key) : p !== null && (p.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Wn && Xp(x) === p.type) ? (E = i(p, y.props),
        E.ref = Eo(g, p, y),
        E.return = g,
        E) : (E = ba(y.type, y.key, y.props, null, g.mode, E),
        E.ref = Eo(g, p, y),
        E.return = g,
        E)
    }
    function u(g, p, y, E) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = Hu(y, g.mode, E),
        p.return = g,
        p) : (p = i(p, y.children || []),
        p.return = g,
        p)
    }
    function c(g, p, y, E, x) {
        return p === null || p.tag !== 7 ? (p = Dr(y, g.mode, E, x),
        p.return = g,
        p) : (p = i(p, y),
        p.return = g,
        p)
    }
    function f(g, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = zu("" + p, g.mode, y),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Bs:
                return y = ba(p.type, p.key, p.props, null, g.mode, y),
                y.ref = Eo(g, null, p),
                y.return = g,
                y;
            case li:
                return p = Hu(p, g.mode, y),
                p.return = g,
                p;
            case Wn:
                var E = p._init;
                return f(g, E(p._payload), y)
            }
            if (Io(p) || go(p))
                return p = Dr(p, g.mode, y, null),
                p.return = g,
                p;
            Js(g, p)
        }
        return null
    }
    function d(g, p, y, E) {
        var x = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return x !== null ? null : a(g, p, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Bs:
                return y.key === x ? l(g, p, y, E) : null;
            case li:
                return y.key === x ? u(g, p, y, E) : null;
            case Wn:
                return x = y._init,
                d(g, p, x(y._payload), E)
            }
            if (Io(y) || go(y))
                return x !== null ? null : c(g, p, y, E, null);
            Js(g, y)
        }
        return null
    }
    function m(g, p, y, E, x) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return g = g.get(y) || null,
            a(p, g, "" + E, x);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case Bs:
                return g = g.get(E.key === null ? y : E.key) || null,
                l(p, g, E, x);
            case li:
                return g = g.get(E.key === null ? y : E.key) || null,
                u(p, g, E, x);
            case Wn:
                var b = E._init;
                return m(g, p, y, b(E._payload), x)
            }
            if (Io(E) || go(E))
                return g = g.get(y) || null,
                c(p, g, E, x, null);
            Js(p, E)
        }
        return null
    }
    function h(g, p, y, E) {
        for (var x = null, b = null, w = p, I = p = 0, W = null; w !== null && I < y.length; I++) {
            w.index > I ? (W = w,
            w = null) : W = w.sibling;
            var T = d(g, w, y[I], E);
            if (T === null) {
                w === null && (w = W);
                break
            }
            e && w && T.alternate === null && t(g, w),
            p = o(T, p, I),
            b === null ? x = T : b.sibling = T,
            b = T,
            w = W
        }
        if (I === y.length)
            return n(g, w),
            Ie && Ir(g, I),
            x;
        if (w === null) {
            for (; I < y.length; I++)
                w = f(g, y[I], E),
                w !== null && (p = o(w, p, I),
                b === null ? x = w : b.sibling = w,
                b = w);
            return Ie && Ir(g, I),
            x
        }
        for (w = r(g, w); I < y.length; I++)
            W = m(w, g, I, y[I], E),
            W !== null && (e && W.alternate !== null && w.delete(W.key === null ? I : W.key),
            p = o(W, p, I),
            b === null ? x = W : b.sibling = W,
            b = W);
        return e && w.forEach(function(D) {
            return t(g, D)
        }),
        Ie && Ir(g, I),
        x
    }
    function v(g, p, y, E) {
        var x = go(y);
        if (typeof x != "function")
            throw Error(A(150));
        if (y = x.call(y),
        y == null)
            throw Error(A(151));
        for (var b = x = null, w = p, I = p = 0, W = null, T = y.next(); w !== null && !T.done; I++,
        T = y.next()) {
            w.index > I ? (W = w,
            w = null) : W = w.sibling;
            var D = d(g, w, T.value, E);
            if (D === null) {
                w === null && (w = W);
                break
            }
            e && w && D.alternate === null && t(g, w),
            p = o(D, p, I),
            b === null ? x = D : b.sibling = D,
            b = D,
            w = W
        }
        if (T.done)
            return n(g, w),
            Ie && Ir(g, I),
            x;
        if (w === null) {
            for (; !T.done; I++,
            T = y.next())
                T = f(g, T.value, E),
                T !== null && (p = o(T, p, I),
                b === null ? x = T : b.sibling = T,
                b = T);
            return Ie && Ir(g, I),
            x
        }
        for (w = r(g, w); !T.done; I++,
        T = y.next())
            T = m(w, g, I, T.value, E),
            T !== null && (e && T.alternate !== null && w.delete(T.key === null ? I : T.key),
            p = o(T, p, I),
            b === null ? x = T : b.sibling = T,
            b = T);
        return e && w.forEach(function(z) {
            return t(g, z)
        }),
        Ie && Ir(g, I),
        x
    }
    function k(g, p, y, E) {
        if (typeof y == "object" && y !== null && y.type === ui && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Bs:
                e: {
                    for (var x = y.key, b = p; b !== null; ) {
                        if (b.key === x) {
                            if (x = y.type,
                            x === ui) {
                                if (b.tag === 7) {
                                    n(g, b.sibling),
                                    p = i(b, y.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (b.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Wn && Xp(x) === b.type) {
                                n(g, b.sibling),
                                p = i(b, y.props),
                                p.ref = Eo(g, b, y),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, b);
                            break
                        } else
                            t(g, b);
                        b = b.sibling
                    }
                    y.type === ui ? (p = Dr(y.props.children, g.mode, E, y.key),
                    p.return = g,
                    g = p) : (E = ba(y.type, y.key, y.props, null, g.mode, E),
                    E.ref = Eo(g, p, y),
                    E.return = g,
                    g = E)
                }
                return s(g);
            case li:
                e: {
                    for (b = y.key; p !== null; ) {
                        if (p.key === b)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(g, p.sibling),
                                p = i(p, y.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = Hu(y, g.mode, E),
                    p.return = g,
                    g = p
                }
                return s(g);
            case Wn:
                return b = y._init,
                k(g, p, b(y._payload), E)
            }
            if (Io(y))
                return h(g, p, y, E);
            if (go(y))
                return v(g, p, y, E);
            Js(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = i(p, y),
        p.return = g,
        g = p) : (n(g, p),
        p = zu(y, g.mode, E),
        p.return = g,
        g = p),
        s(g)) : n(g, p)
    }
    return k
}
var Mi = wg(!0)
  , Cg = wg(!1)
  , qa = yr(null)
  , Ka = null
  , yi = null
  , od = null;
function sd() {
    od = yi = Ka = null
}
function ad(e) {
    var t = qa.current;
    be(qa),
    e._currentValue = t
}
function Mc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ii(e, t) {
    Ka = e,
    od = yi = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ct = !0),
    e.firstContext = null)
}
function Vt(e) {
    var t = e._currentValue;
    if (od !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        yi === null) {
            if (Ka === null)
                throw Error(A(308));
            yi = e,
            Ka.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            yi = yi.next = e;
    return t
}
var Ar = null;
function ld(e) {
    Ar === null ? Ar = [e] : Ar.push(e)
}
function kg(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ld(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Nn(e, r)
}
function Nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var zn = !1;
function ud(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function xg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ln(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ir(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    pe & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Nn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ld(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Nn(e, n)
}
function Sa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gf(e, n)
    }
}
function Zp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ga(e, t, n, r) {
    var i = e.updateQueue;
    zn = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? o = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = l = null,
        a = o;
        do {
            var d = a.lane
              , m = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var h = e
                      , v = a;
                    switch (d = t,
                    m = n,
                    v.tag) {
                    case 1:
                        if (h = v.payload,
                        typeof h == "function") {
                            f = h.call(m, f, d);
                            break e
                        }
                        f = h;
                        break e;
                    case 3:
                        h.flags = h.flags & -65537 | 128;
                    case 0:
                        if (h = v.payload,
                        d = typeof h == "function" ? h.call(m, f, d) : h,
                        d == null)
                            break e;
                        f = Pe({}, f, d);
                        break e;
                    case 2:
                        zn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [a] : d.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = m,
                l = f) : c = c.next = m,
                s |= d;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Hr |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function eh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(A(191, i));
                i.call(r)
            }
        }
}
var ks = {}
  , _n = yr(ks)
  , rs = yr(ks)
  , is = yr(ks);
function Pr(e) {
    if (e === ks)
        throw Error(A(174));
    return e
}
function cd(e, t) {
    switch (we(is, t),
    we(rs, e),
    we(_n, ks),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : mc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = mc(t, e)
    }
    be(_n),
    we(_n, t)
}
function Di() {
    be(_n),
    be(rs),
    be(is)
}
function bg(e) {
    Pr(is.current);
    var t = Pr(_n.current)
      , n = mc(t, e.type);
    t !== n && (we(rs, e),
    we(_n, n))
}
function fd(e) {
    rs.current === e && (be(_n),
    be(rs))
}
var Re = yr(0);
function Ya(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Fu = [];
function dd() {
    for (var e = 0; e < Fu.length; e++)
        Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0
}
var Ea = jn.ReactCurrentDispatcher
  , $u = jn.ReactCurrentBatchConfig
  , zr = 0
  , Ae = null
  , ze = null
  , Ye = null
  , Ja = !1
  , Do = !1
  , os = 0
  , n4 = 0;
function ot() {
    throw Error(A(321))
}
function pd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!on(e[n], t[n]))
            return !1;
    return !0
}
function hd(e, t, n, r, i, o) {
    if (zr = o,
    Ae = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ea.current = e === null || e.memoizedState === null ? s4 : a4,
    e = n(r, i),
    Do) {
        o = 0;
        do {
            if (Do = !1,
            os = 0,
            25 <= o)
                throw Error(A(301));
            o += 1,
            Ye = ze = null,
            t.updateQueue = null,
            Ea.current = l4,
            e = n(r, i)
        } while (Do)
    }
    if (Ea.current = Qa,
    t = ze !== null && ze.next !== null,
    zr = 0,
    Ye = ze = Ae = null,
    Ja = !1,
    t)
        throw Error(A(300));
    return e
}
function md() {
    var e = os !== 0;
    return os = 0,
    e
}
function cn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ye === null ? Ae.memoizedState = Ye = e : Ye = Ye.next = e,
    Ye
}
function qt() {
    if (ze === null) {
        var e = Ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ze.next;
    var t = Ye === null ? Ae.memoizedState : Ye.next;
    if (t !== null)
        Ye = t,
        ze = e;
    else {
        if (e === null)
            throw Error(A(310));
        ze = e,
        e = {
            memoizedState: ze.memoizedState,
            baseState: ze.baseState,
            baseQueue: ze.baseQueue,
            queue: ze.queue,
            next: null
        },
        Ye === null ? Ae.memoizedState = Ye = e : Ye = Ye.next = e
    }
    return Ye
}
function ss(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Bu(e) {
    var t = qt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = ze
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((zr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                Ae.lanes |= c,
                Hr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
        on(r, t.memoizedState) || (Ct = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            Ae.lanes |= o,
            Hr |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ju(e) {
    var t = qt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        on(o, t.memoizedState) || (Ct = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Tg() {}
function Ig(e, t) {
    var n = Ae
      , r = qt()
      , i = t()
      , o = !on(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Ct = !0),
    r = r.queue,
    gd(Ag.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ye !== null && Ye.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        as(9, Rg.bind(null, n, r, i, t), void 0, null),
        Je === null)
            throw Error(A(349));
        zr & 30 || Lg(n, t, i)
    }
    return i
}
function Lg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ae.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Rg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Pg(t) && Og(e)
}
function Ag(e, t, n) {
    return n(function() {
        Pg(t) && Og(e)
    })
}
function Pg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !on(e, n)
    } catch {
        return !0
    }
}
function Og(e) {
    var t = Nn(e, 1);
    t !== null && rn(t, e, 1, -1)
}
function th(e) {
    var t = cn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ss,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = o4.bind(null, Ae, e),
    [t.memoizedState, e]
}
function as(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ae.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Ng() {
    return qt().memoizedState
}
function wa(e, t, n, r) {
    var i = cn();
    Ae.flags |= e,
    i.memoizedState = as(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ol(e, t, n, r) {
    var i = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ze !== null) {
        var s = ze.memoizedState;
        if (o = s.destroy,
        r !== null && pd(r, s.deps)) {
            i.memoizedState = as(t, n, o, r);
            return
        }
    }
    Ae.flags |= e,
    i.memoizedState = as(1 | t, n, o, r)
}
function nh(e, t) {
    return wa(8390656, 8, e, t)
}
function gd(e, t) {
    return Ol(2048, 8, e, t)
}
function Mg(e, t) {
    return Ol(4, 2, e, t)
}
function Dg(e, t) {
    return Ol(4, 4, e, t)
}
function Fg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function $g(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ol(4, 4, Fg.bind(null, t, e), n)
}
function yd() {}
function Bg(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function jg(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ug(e, t, n) {
    return zr & 21 ? (on(n, t) || (n = qm(),
    Ae.lanes |= n,
    Hr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ct = !0),
    e.memoizedState = n)
}
function r4(e, t) {
    var n = ye;
    ye = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $u.transition;
    $u.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ye = n,
        $u.transition = r
    }
}
function Wg() {
    return qt().memoizedState
}
function i4(e, t, n) {
    var r = sr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    zg(e))
        Hg(t, n);
    else if (n = kg(e, t, n, r),
    n !== null) {
        var i = ht();
        rn(n, e, r, i),
        Vg(n, t, r)
    }
}
function o4(e, t, n) {
    var r = sr(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (zg(e))
        Hg(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                on(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    ld(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = kg(e, t, i, r),
        n !== null && (i = ht(),
        rn(n, e, r, i),
        Vg(n, t, r))
    }
}
function zg(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae
}
function Hg(e, t) {
    Do = Ja = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Vg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gf(e, n)
    }
}
var Qa = {
    readContext: Vt,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useInsertionEffect: ot,
    useLayoutEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useMutableSource: ot,
    useSyncExternalStore: ot,
    useId: ot,
    unstable_isNewReconciler: !1
}
  , s4 = {
    readContext: Vt,
    useCallback: function(e, t) {
        return cn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Vt,
    useEffect: nh,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        wa(4194308, 4, Fg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return wa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return wa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = cn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = cn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = i4.bind(null, Ae, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = cn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: th,
    useDebugValue: yd,
    useDeferredValue: function(e) {
        return cn().memoizedState = e
    },
    useTransition: function() {
        var e = th(!1)
          , t = e[0];
        return e = r4.bind(null, e[1]),
        cn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Ae
          , i = cn();
        if (Ie) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            Je === null)
                throw Error(A(349));
            zr & 30 || Lg(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        nh(Ag.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        as(9, Rg.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = cn()
          , t = Je.identifierPrefix;
        if (Ie) {
            var n = In
              , r = Tn;
            n = (r & ~(1 << 32 - nn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = os++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = n4++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , a4 = {
    readContext: Vt,
    useCallback: Bg,
    useContext: Vt,
    useEffect: gd,
    useImperativeHandle: $g,
    useInsertionEffect: Mg,
    useLayoutEffect: Dg,
    useMemo: jg,
    useReducer: Bu,
    useRef: Ng,
    useState: function() {
        return Bu(ss)
    },
    useDebugValue: yd,
    useDeferredValue: function(e) {
        var t = qt();
        return Ug(t, ze.memoizedState, e)
    },
    useTransition: function() {
        var e = Bu(ss)[0]
          , t = qt().memoizedState;
        return [e, t]
    },
    useMutableSource: Tg,
    useSyncExternalStore: Ig,
    useId: Wg,
    unstable_isNewReconciler: !1
}
  , l4 = {
    readContext: Vt,
    useCallback: Bg,
    useContext: Vt,
    useEffect: gd,
    useImperativeHandle: $g,
    useInsertionEffect: Mg,
    useLayoutEffect: Dg,
    useMemo: jg,
    useReducer: ju,
    useRef: Ng,
    useState: function() {
        return ju(ss)
    },
    useDebugValue: yd,
    useDeferredValue: function(e) {
        var t = qt();
        return ze === null ? t.memoizedState = e : Ug(t, ze.memoizedState, e)
    },
    useTransition: function() {
        var e = ju(ss)[0]
          , t = qt().memoizedState;
        return [e, t]
    },
    useMutableSource: Tg,
    useSyncExternalStore: Ig,
    useId: Wg,
    unstable_isNewReconciler: !1
};
function Xt(e, t) {
    if (e && e.defaultProps) {
        t = Pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Dc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Nl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Yr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ht()
          , i = sr(e)
          , o = Ln(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = ir(e, o, i),
        t !== null && (rn(t, e, i, r),
        Sa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ht()
          , i = sr(e)
          , o = Ln(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = ir(e, o, i),
        t !== null && (rn(t, e, i, r),
        Sa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ht()
          , r = sr(e)
          , i = Ln(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = ir(e, i, r),
        t !== null && (rn(t, e, r, n),
        Sa(t, e, r))
    }
};
function rh(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Zo(n, r) || !Zo(i, o) : !0
}
function qg(e, t, n) {
    var r = !1
      , i = dr
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Vt(o) : (i = bt(t) ? Ur : lt.current,
    r = t.contextTypes,
    o = (r = r != null) ? Oi(e, i) : dr),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Nl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function ih(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null)
}
function Fc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ud(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Vt(o) : (o = bt(t) ? Ur : lt.current,
    i.context = Oi(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Dc(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Nl.enqueueReplaceState(i, i.state, null),
    Ga(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Fi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Dv(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Uu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function $c(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var u4 = typeof WeakMap == "function" ? WeakMap : Map;
function Kg(e, t, n) {
    n = Ln(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Za || (Za = !0,
        Gc = r),
        $c(e, t)
    }
    ,
    n
}
function Gg(e, t, n) {
    n = Ln(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            $c(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        $c(e, t),
        typeof r != "function" && (or === null ? or = new Set([this]) : or.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function oh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new u4;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = C4.bind(null, e, t, n),
    t.then(e, e))
}
function sh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ah(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ln(-1, 1),
    t.tag = 2,
    ir(n, t, 1))),
    n.lanes |= 1),
    e)
}
var c4 = jn.ReactCurrentOwner
  , Ct = !1;
function dt(e, t, n, r) {
    t.child = e === null ? Cg(t, null, n, r) : Mi(t, e.child, n, r)
}
function lh(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Ii(t, i),
    r = hd(e, t, n, r, o, i),
    n = md(),
    e !== null && !Ct ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Mn(e, t, i)) : (Ie && n && nd(t),
    t.flags |= 1,
    dt(e, t, r, i),
    t.child)
}
function uh(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !xd(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Yg(e, t, o, r, i)) : (e = ba(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zo,
        n(s, r) && e.ref === t.ref)
            return Mn(e, t, i)
    }
    return t.flags |= 1,
    e = ar(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Yg(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Zo(o, r) && e.ref === t.ref)
            if (Ct = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ct = !0);
            else
                return t.lanes = e.lanes,
                Mn(e, t, i)
    }
    return Bc(e, t, n, r, i)
}
function Jg(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            we(_i, Rt),
            Rt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                we(_i, Rt),
                Rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            we(_i, Rt),
            Rt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        we(_i, Rt),
        Rt |= r;
    return dt(e, t, i, n),
    t.child
}
function Qg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Bc(e, t, n, r, i) {
    var o = bt(n) ? Ur : lt.current;
    return o = Oi(t, o),
    Ii(t, i),
    n = hd(e, t, n, r, o, i),
    r = md(),
    e !== null && !Ct ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Mn(e, t, i)) : (Ie && r && nd(t),
    t.flags |= 1,
    dt(e, t, n, i),
    t.child)
}
function ch(e, t, n, r, i) {
    if (bt(n)) {
        var o = !0;
        za(t)
    } else
        o = !1;
    if (Ii(t, i),
    t.stateNode === null)
        Ca(e, t),
        qg(t, n, r),
        Fc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Vt(u) : (u = bt(n) ? Ur : lt.current,
        u = Oi(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && ih(t, s, r, u),
        zn = !1;
        var d = t.memoizedState;
        s.state = d,
        Ga(t, r, s, i),
        l = t.memoizedState,
        a !== r || d !== l || xt.current || zn ? (typeof c == "function" && (Dc(t, n, c, r),
        l = t.memoizedState),
        (a = zn || rh(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        xg(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Xt(t.type, a),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Vt(l) : (l = bt(n) ? Ur : lt.current,
        l = Oi(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && ih(t, s, r, l),
        zn = !1,
        d = t.memoizedState,
        s.state = d,
        Ga(t, r, s, i);
        var h = t.memoizedState;
        a !== f || d !== h || xt.current || zn ? (typeof m == "function" && (Dc(t, n, m, r),
        h = t.memoizedState),
        (u = zn || rh(t, n, u, r, d, h, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = h),
        s.props = r,
        s.state = h,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return jc(e, t, n, r, o, i)
}
function jc(e, t, n, r, i, o) {
    Qg(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Yp(t, n, !1),
        Mn(e, t, o);
    r = t.stateNode,
    c4.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Mi(t, e.child, null, o),
    t.child = Mi(t, null, a, o)) : dt(e, t, a, o),
    t.memoizedState = r.state,
    i && Yp(t, n, !0),
    t.child
}
function Xg(e) {
    var t = e.stateNode;
    t.pendingContext ? Gp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gp(e, t.context, !1),
    cd(e, t.containerInfo)
}
function fh(e, t, n, r, i) {
    return Ni(),
    id(i),
    t.flags |= 256,
    dt(e, t, n, r),
    t.child
}
var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Wc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Zg(e, t, n) {
    var r = t.pendingProps, i = Re.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    we(Re, i & 1),
    e === null)
        return Nc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Fl(s, r, 0, null),
        e = Dr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Wc(n),
        t.memoizedState = Uc,
        e) : vd(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return f4(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = ar(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = ar(a, o) : (o = Dr(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Wc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Uc,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = ar(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function vd(e, t) {
    return t = Fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Qs(e, t, n, r) {
    return r !== null && id(r),
    Mi(t, e.child, null, n),
    e = vd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function f4(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Uu(Error(A(422))),
        Qs(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Fl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Dr(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Mi(t, e.child, null, s),
        t.child.memoizedState = Wc(s),
        t.memoizedState = Uc,
        o);
    if (!(t.mode & 1))
        return Qs(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(A(419)),
        r = Uu(o, r, void 0),
        Qs(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ct || a) {
        if (r = Je,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Nn(e, i),
            rn(r, e, i, -1))
        }
        return kd(),
        r = Uu(Error(A(421))),
        Qs(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = k4.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Pt = rr(i.nextSibling),
    Ot = t,
    Ie = !0,
    en = null,
    e !== null && (Bt[jt++] = Tn,
    Bt[jt++] = In,
    Bt[jt++] = Wr,
    Tn = e.id,
    In = e.overflow,
    Wr = t),
    t = vd(t, r.children),
    t.flags |= 4096,
    t)
}
function dh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Mc(e.return, t, n)
}
function Wu(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function e0(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (dt(e, t, r.children, n),
    r = Re.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && dh(e, n, t);
                else if (e.tag === 19)
                    dh(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (we(Re, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Ya(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Wu(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Ya(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Wu(t, !0, n, null, o);
            break;
        case "together":
            Wu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ca(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Hr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ar(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ar(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function d4(e, t, n) {
    switch (t.tag) {
    case 3:
        Xg(t),
        Ni();
        break;
    case 5:
        bg(t);
        break;
    case 1:
        bt(t.type) && za(t);
        break;
    case 4:
        cd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        we(qa, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (we(Re, Re.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Zg(e, t, n) : (we(Re, Re.current & 1),
            e = Mn(e, t, n),
            e !== null ? e.sibling : null);
        we(Re, Re.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return e0(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        we(Re, Re.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Jg(e, t, n)
    }
    return Mn(e, t, n)
}
var t0, zc, n0, r0;
t0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
zc = function() {}
;
n0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Pr(_n.current);
        var o = null;
        switch (n) {
        case "input":
            i = fc(e, i),
            r = fc(e, r),
            o = [];
            break;
        case "select":
            i = Pe({}, i, {
                value: void 0
            }),
            r = Pe({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = hc(e, i),
            r = hc(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ua)
        }
        gc(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qo.hasOwnProperty(u) ? (l != null && u === "onScroll" && xe("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
r0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function wo(e, t) {
    if (!Ie)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function p4(e, t, n) {
    var r = t.pendingProps;
    switch (rd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return st(t),
        null;
    case 1:
        return bt(t.type) && Wa(),
        st(t),
        null;
    case 3:
        return r = t.stateNode,
        Di(),
        be(xt),
        be(lt),
        dd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        en !== null && (Qc(en),
        en = null))),
        zc(e, t),
        st(t),
        null;
    case 5:
        fd(t);
        var i = Pr(is.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            n0(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return st(t),
                null
            }
            if (e = Pr(_n.current),
            Ys(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[pn] = t,
                r[ns] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    xe("cancel", r),
                    xe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    xe("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ro.length; i++)
                        xe(Ro[i], r);
                    break;
                case "source":
                    xe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    xe("error", r),
                    xe("load", r);
                    break;
                case "details":
                    xe("toggle", r);
                    break;
                case "input":
                    Ep(r, o),
                    xe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    xe("invalid", r);
                    break;
                case "textarea":
                    Cp(r, o),
                    xe("invalid", r)
                }
                gc(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Gs(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Gs(r.textContent, a, e),
                        i = ["children", "" + a]) : qo.hasOwnProperty(s) && a != null && s === "onScroll" && xe("scroll", r)
                    }
                switch (n) {
                case "input":
                    js(r),
                    wp(r, o, !0);
                    break;
                case "textarea":
                    js(r),
                    kp(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Ua)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Am(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[pn] = t,
                e[ns] = r,
                t0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = yc(n, r),
                    n) {
                    case "dialog":
                        xe("cancel", e),
                        xe("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xe("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ro.length; i++)
                            xe(Ro[i], e);
                        i = r;
                        break;
                    case "source":
                        xe("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xe("error", e),
                        xe("load", e),
                        i = r;
                        break;
                    case "details":
                        xe("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Ep(e, r),
                        i = fc(e, r),
                        xe("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Pe({}, r, {
                            value: void 0
                        }),
                        xe("invalid", e);
                        break;
                    case "textarea":
                        Cp(e, r),
                        i = hc(e, r),
                        xe("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    gc(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Nm(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Pm(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ko(e, l) : typeof l == "number" && Ko(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (qo.hasOwnProperty(o) ? l != null && o === "onScroll" && xe("scroll", e) : l != null && Wf(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        js(e),
                        wp(e, r, !1);
                        break;
                    case "textarea":
                        js(e),
                        kp(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + fr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? ki(e, !!r.multiple, o, !1) : r.defaultValue != null && ki(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Ua)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return st(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            r0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = Pr(is.current),
            Pr(_n.current),
            Ys(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[pn] = t,
                (o = r.nodeValue !== n) && (e = Ot,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Gs(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Gs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[pn] = t,
                t.stateNode = r
        }
        return st(t),
        null;
    case 13:
        if (be(Re),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ie && Pt !== null && t.mode & 1 && !(t.flags & 128))
                Eg(),
                Ni(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ys(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(A(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(A(317));
                    o[pn] = t
                } else
                    Ni(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                st(t),
                o = !1
            } else
                en !== null && (Qc(en),
                en = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Re.current & 1 ? Ve === 0 && (Ve = 3) : kd())),
        t.updateQueue !== null && (t.flags |= 4),
        st(t),
        null);
    case 4:
        return Di(),
        zc(e, t),
        e === null && es(t.stateNode.containerInfo),
        st(t),
        null;
    case 10:
        return ad(t.type._context),
        st(t),
        null;
    case 17:
        return bt(t.type) && Wa(),
        st(t),
        null;
    case 19:
        if (be(Re),
        o = t.memoizedState,
        o === null)
            return st(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                wo(o, !1);
            else {
                if (Ve !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ya(e),
                        s !== null) {
                            for (t.flags |= 128,
                            wo(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return we(Re, Re.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && $e() > $i && (t.flags |= 128,
                r = !0,
                wo(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ya(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    wo(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ie)
                        return st(t),
                        null
                } else
                    2 * $e() - o.renderingStartTime > $i && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    wo(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = $e(),
        t.sibling = null,
        n = Re.current,
        we(Re, r ? n & 1 | 2 : n & 1),
        t) : (st(t),
        null);
    case 22:
    case 23:
        return Cd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Rt & 1073741824 && (st(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : st(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function h4(e, t) {
    switch (rd(t),
    t.tag) {
    case 1:
        return bt(t.type) && Wa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Di(),
        be(xt),
        be(lt),
        dd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return fd(t),
        null;
    case 13:
        if (be(Re),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            Ni()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return be(Re),
        null;
    case 4:
        return Di(),
        null;
    case 10:
        return ad(t.type._context),
        null;
    case 22:
    case 23:
        return Cd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Xs = !1
  , at = !1
  , m4 = typeof WeakSet == "function" ? WeakSet : Set
  , B = null;
function vi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Me(e, t, r)
            }
        else
            n.current = null
}
function Hc(e, t, n) {
    try {
        n()
    } catch (r) {
        Me(e, t, r)
    }
}
var ph = !1;
function g4(e, t) {
    if (Tc = $a,
    e = lg(),
    td(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (a = s),
                            d === o && ++c === r && (l = s),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ic = {
        focusedElem: e,
        selectionRange: n
    },
    $a = !1,
    B = t; B !== null; )
        if (t = B,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            B = e;
        else
            for (; B !== null; ) {
                t = B;
                try {
                    var h = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (h !== null) {
                                var v = h.memoizedProps
                                  , k = h.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Xt(t.type, v), k);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (E) {
                    Me(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    B = e;
                    break
                }
                B = t.return
            }
    return h = ph,
    ph = !1,
    h
}
function Fo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Hc(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ml(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Vc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function i0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    i0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[pn],
    delete t[ns],
    delete t[Ac],
    delete t[X3],
    delete t[Z3])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function o0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function hh(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || o0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function qc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ua));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (qc(e, t, n),
        e = e.sibling; e !== null; )
            qc(e, t, n),
            e = e.sibling
}
function Kc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Kc(e, t, n),
        e = e.sibling; e !== null; )
            Kc(e, t, n),
            e = e.sibling
}
var Xe = null
  , Zt = !1;
function Un(e, t, n) {
    for (n = n.child; n !== null; )
        s0(e, t, n),
        n = n.sibling
}
function s0(e, t, n) {
    if (vn && typeof vn.onCommitFiberUnmount == "function")
        try {
            vn.onCommitFiberUnmount(Tl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        at || vi(n, t);
    case 6:
        var r = Xe
          , i = Zt;
        Xe = null,
        Un(e, t, n),
        Xe = r,
        Zt = i,
        Xe !== null && (Zt ? (e = Xe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
        break;
    case 18:
        Xe !== null && (Zt ? (e = Xe,
        n = n.stateNode,
        e.nodeType === 8 ? Mu(e.parentNode, n) : e.nodeType === 1 && Mu(e, n),
        Qo(e)) : Mu(Xe, n.stateNode));
        break;
    case 4:
        r = Xe,
        i = Zt,
        Xe = n.stateNode.containerInfo,
        Zt = !0,
        Un(e, t, n),
        Xe = r,
        Zt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!at && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Hc(n, t, s),
                i = i.next
            } while (i !== r)
        }
        Un(e, t, n);
        break;
    case 1:
        if (!at && (vi(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Me(n, t, a)
            }
        Un(e, t, n);
        break;
    case 21:
        Un(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (at = (r = at) || n.memoizedState !== null,
        Un(e, t, n),
        at = r) : Un(e, t, n);
        break;
    default:
        Un(e, t, n)
    }
}
function mh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new m4),
        t.forEach(function(r) {
            var i = x4.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Jt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Xe = a.stateNode,
                        Zt = !1;
                        break e;
                    case 3:
                        Xe = a.stateNode.containerInfo,
                        Zt = !0;
                        break e;
                    case 4:
                        Xe = a.stateNode.containerInfo,
                        Zt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Xe === null)
                    throw Error(A(160));
                s0(o, s, i),
                Xe = null,
                Zt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                Me(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            a0(t, e),
            t = t.sibling
}
function a0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Jt(t, e),
        ln(e),
        r & 4) {
            try {
                Fo(3, e, e.return),
                Ml(3, e)
            } catch (v) {
                Me(e, e.return, v)
            }
            try {
                Fo(5, e, e.return)
            } catch (v) {
                Me(e, e.return, v)
            }
        }
        break;
    case 1:
        Jt(t, e),
        ln(e),
        r & 512 && n !== null && vi(n, n.return);
        break;
    case 5:
        if (Jt(t, e),
        ln(e),
        r & 512 && n !== null && vi(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ko(i, "")
            } catch (v) {
                Me(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Lm(i, o),
                    yc(a, s);
                    var u = yc(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , f = l[s + 1];
                        c === "style" ? Nm(i, f) : c === "dangerouslySetInnerHTML" ? Pm(i, f) : c === "children" ? Ko(i, f) : Wf(i, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        dc(i, o);
                        break;
                    case "textarea":
                        Rm(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        m != null ? ki(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? ki(i, !!o.multiple, o.defaultValue, !0) : ki(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[ns] = o
                } catch (v) {
                    Me(e, e.return, v)
                }
        }
        break;
    case 6:
        if (Jt(t, e),
        ln(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (v) {
                Me(e, e.return, v)
            }
        }
        break;
    case 3:
        if (Jt(t, e),
        ln(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Qo(t.containerInfo)
            } catch (v) {
                Me(e, e.return, v)
            }
        break;
    case 4:
        Jt(t, e),
        ln(e);
        break;
    case 13:
        Jt(t, e),
        ln(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ed = $e())),
        r & 4 && mh(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (at = (u = at) || c,
        Jt(t, e),
        at = u) : Jt(t, e),
        ln(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (B = e,
                c = e.child; c !== null; ) {
                    for (f = B = c; B !== null; ) {
                        switch (d = B,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Fo(4, d, d.return);
                            break;
                        case 1:
                            vi(d, d.return);
                            var h = d.stateNode;
                            if (typeof h.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    h.props = t.memoizedProps,
                                    h.state = t.memoizedState,
                                    h.componentWillUnmount()
                                } catch (v) {
                                    Me(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            vi(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                yh(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        B = m) : yh(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Om("display", s))
                        } catch (v) {
                            Me(e, e.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            Me(e, e.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Jt(t, e),
        ln(e),
        r & 4 && mh(e);
        break;
    case 21:
        break;
    default:
        Jt(t, e),
        ln(e)
    }
}
function ln(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (o0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ko(i, ""),
                r.flags &= -33);
                var o = hh(e);
                Kc(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = hh(e);
                qc(e, a, s);
                break;
            default:
                throw Error(A(161))
            }
        } catch (l) {
            Me(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function y4(e, t, n) {
    B = e,
    l0(e)
}
function l0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
        var i = B
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Xs;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || at;
                a = Xs;
                var u = at;
                if (Xs = s,
                (at = l) && !u)
                    for (B = i; B !== null; )
                        s = B,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? vh(i) : l !== null ? (l.return = s,
                        B = l) : vh(i);
                for (; o !== null; )
                    B = o,
                    l0(o),
                    o = o.sibling;
                B = i,
                Xs = a,
                at = u
            }
            gh(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            B = o) : gh(e)
    }
}
function gh(e) {
    for (; B !== null; ) {
        var t = B;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        at || Ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !at)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Xt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && eh(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            eh(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Qo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                at || t.flags & 512 && Vc(t)
            } catch (d) {
                Me(t, t.return, d)
            }
        }
        if (t === e) {
            B = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function yh(e) {
    for (; B !== null; ) {
        var t = B;
        if (t === e) {
            B = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            B = n;
            break
        }
        B = t.return
    }
}
function vh(e) {
    for (; B !== null; ) {
        var t = B;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ml(4, t)
                } catch (l) {
                    Me(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Me(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    Vc(t)
                } catch (l) {
                    Me(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Vc(t)
                } catch (l) {
                    Me(t, s, l)
                }
            }
        } catch (l) {
            Me(t, t.return, l)
        }
        if (t === e) {
            B = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            B = a;
            break
        }
        B = t.return
    }
}
var v4 = Math.ceil
  , Xa = jn.ReactCurrentDispatcher
  , _d = jn.ReactCurrentOwner
  , zt = jn.ReactCurrentBatchConfig
  , pe = 0
  , Je = null
  , Ue = null
  , et = 0
  , Rt = 0
  , _i = yr(0)
  , Ve = 0
  , ls = null
  , Hr = 0
  , Dl = 0
  , Sd = 0
  , $o = null
  , Et = null
  , Ed = 0
  , $i = 1 / 0
  , Cn = null
  , Za = !1
  , Gc = null
  , or = null
  , Zs = !1
  , Xn = null
  , el = 0
  , Bo = 0
  , Yc = null
  , ka = -1
  , xa = 0;
function ht() {
    return pe & 6 ? $e() : ka !== -1 ? ka : ka = $e()
}
function sr(e) {
    return e.mode & 1 ? pe & 2 && et !== 0 ? et & -et : t4.transition !== null ? (xa === 0 && (xa = qm()),
    xa) : (e = ye,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Zm(e.type)),
    e) : 1
}
function rn(e, t, n, r) {
    if (50 < Bo)
        throw Bo = 0,
        Yc = null,
        Error(A(185));
    Es(e, n, r),
    (!(pe & 2) || e !== Je) && (e === Je && (!(pe & 2) && (Dl |= n),
    Ve === 4 && Jn(e, et)),
    Tt(e, r),
    n === 1 && pe === 0 && !(t.mode & 1) && ($i = $e() + 500,
    Pl && vr()))
}
function Tt(e, t) {
    var n = e.callbackNode;
    t3(e, t);
    var r = Fa(e, e === Je ? et : 0);
    if (r === 0)
        n !== null && Tp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Tp(n),
        t === 1)
            e.tag === 0 ? e4(_h.bind(null, e)) : vg(_h.bind(null, e)),
            J3(function() {
                !(pe & 6) && vr()
            }),
            n = null;
        else {
            switch (Km(r)) {
            case 1:
                n = Kf;
                break;
            case 4:
                n = Hm;
                break;
            case 16:
                n = Da;
                break;
            case 536870912:
                n = Vm;
                break;
            default:
                n = Da
            }
            n = g0(n, u0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function u0(e, t) {
    if (ka = -1,
    xa = 0,
    pe & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (Li() && e.callbackNode !== n)
        return null;
    var r = Fa(e, e === Je ? et : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = tl(e, r);
    else {
        t = r;
        var i = pe;
        pe |= 2;
        var o = f0();
        (Je !== e || et !== t) && (Cn = null,
        $i = $e() + 500,
        Mr(e, t));
        do
            try {
                E4();
                break
            } catch (a) {
                c0(e, a)
            }
        while (!0);
        sd(),
        Xa.current = o,
        pe = i,
        Ue !== null ? t = 0 : (Je = null,
        et = 0,
        t = Ve)
    }
    if (t !== 0) {
        if (t === 2 && (i = wc(e),
        i !== 0 && (r = i,
        t = Jc(e, i))),
        t === 1)
            throw n = ls,
            Mr(e, 0),
            Jn(e, r),
            Tt(e, $e()),
            n;
        if (t === 6)
            Jn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !_4(i) && (t = tl(e, r),
            t === 2 && (o = wc(e),
            o !== 0 && (r = o,
            t = Jc(e, o))),
            t === 1))
                throw n = ls,
                Mr(e, 0),
                Jn(e, r),
                Tt(e, $e()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                Lr(e, Et, Cn);
                break;
            case 3:
                if (Jn(e, r),
                (r & 130023424) === r && (t = Ed + 500 - $e(),
                10 < t)) {
                    if (Fa(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ht(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Rc(Lr.bind(null, e, Et, Cn), t);
                    break
                }
                Lr(e, Et, Cn);
                break;
            case 4:
                if (Jn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - nn(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = $e() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * v4(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Rc(Lr.bind(null, e, Et, Cn), r);
                    break
                }
                Lr(e, Et, Cn);
                break;
            case 5:
                Lr(e, Et, Cn);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return Tt(e, $e()),
    e.callbackNode === n ? u0.bind(null, e) : null
}
function Jc(e, t) {
    var n = $o;
    return e.current.memoizedState.isDehydrated && (Mr(e, t).flags |= 256),
    e = tl(e, t),
    e !== 2 && (t = Et,
    Et = n,
    t !== null && Qc(t)),
    e
}
function Qc(e) {
    Et === null ? Et = e : Et.push.apply(Et, e)
}
function _4(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!on(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Jn(e, t) {
    for (t &= ~Sd,
    t &= ~Dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - nn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function _h(e) {
    if (pe & 6)
        throw Error(A(327));
    Li();
    var t = Fa(e, 0);
    if (!(t & 1))
        return Tt(e, $e()),
        null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = wc(e);
        r !== 0 && (t = r,
        n = Jc(e, r))
    }
    if (n === 1)
        throw n = ls,
        Mr(e, 0),
        Jn(e, t),
        Tt(e, $e()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Lr(e, Et, Cn),
    Tt(e, $e()),
    null
}
function wd(e, t) {
    var n = pe;
    pe |= 1;
    try {
        return e(t)
    } finally {
        pe = n,
        pe === 0 && ($i = $e() + 500,
        Pl && vr())
    }
}
function Vr(e) {
    Xn !== null && Xn.tag === 0 && !(pe & 6) && Li();
    var t = pe;
    pe |= 1;
    var n = zt.transition
      , r = ye;
    try {
        if (zt.transition = null,
        ye = 1,
        e)
            return e()
    } finally {
        ye = r,
        zt.transition = n,
        pe = t,
        !(pe & 6) && vr()
    }
}
function Cd() {
    Rt = _i.current,
    be(_i)
}
function Mr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Y3(n)),
    Ue !== null)
        for (n = Ue.return; n !== null; ) {
            var r = n;
            switch (rd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Wa();
                break;
            case 3:
                Di(),
                be(xt),
                be(lt),
                dd();
                break;
            case 5:
                fd(r);
                break;
            case 4:
                Di();
                break;
            case 13:
                be(Re);
                break;
            case 19:
                be(Re);
                break;
            case 10:
                ad(r.type._context);
                break;
            case 22:
            case 23:
                Cd()
            }
            n = n.return
        }
    if (Je = e,
    Ue = e = ar(e.current, null),
    et = Rt = t,
    Ve = 0,
    ls = null,
    Sd = Dl = Hr = 0,
    Et = $o = null,
    Ar !== null) {
        for (t = 0; t < Ar.length; t++)
            if (n = Ar[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        Ar = null
    }
    return e
}
function c0(e, t) {
    do {
        var n = Ue;
        try {
            if (sd(),
            Ea.current = Qa,
            Ja) {
                for (var r = Ae.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ja = !1
            }
            if (zr = 0,
            Ye = ze = Ae = null,
            Do = !1,
            os = 0,
            _d.current = null,
            n === null || n.return === null) {
                Ve = 1,
                ls = t,
                Ue = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = et,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = sh(s);
                    if (m !== null) {
                        m.flags &= -257,
                        ah(m, s, a, o, t),
                        m.mode & 1 && oh(o, u, t),
                        t = m,
                        l = u;
                        var h = t.updateQueue;
                        if (h === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            h.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            oh(o, u, t),
                            kd();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (Ie && a.mode & 1) {
                    var k = sh(s);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        ah(k, s, a, o, t),
                        id(Fi(l, a));
                        break e
                    }
                }
                o = l = Fi(l, a),
                Ve !== 4 && (Ve = 2),
                $o === null ? $o = [o] : $o.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = Kg(o, l, t);
                        Zp(o, g);
                        break e;
                    case 1:
                        a = l;
                        var p = o.type
                          , y = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (or === null || !or.has(y)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var E = Gg(o, a, t);
                            Zp(o, E);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            p0(n)
        } catch (x) {
            t = x,
            Ue === n && n !== null && (Ue = n = n.return);
            continue
        }
        break
    } while (!0)
}
function f0() {
    var e = Xa.current;
    return Xa.current = Qa,
    e === null ? Qa : e
}
function kd() {
    (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
    Je === null || !(Hr & 268435455) && !(Dl & 268435455) || Jn(Je, et)
}
function tl(e, t) {
    var n = pe;
    pe |= 2;
    var r = f0();
    (Je !== e || et !== t) && (Cn = null,
    Mr(e, t));
    do
        try {
            S4();
            break
        } catch (i) {
            c0(e, i)
        }
    while (!0);
    if (sd(),
    pe = n,
    Xa.current = r,
    Ue !== null)
        throw Error(A(261));
    return Je = null,
    et = 0,
    Ve
}
function S4() {
    for (; Ue !== null; )
        d0(Ue)
}
function E4() {
    for (; Ue !== null && !qv(); )
        d0(Ue)
}
function d0(e) {
    var t = m0(e.alternate, e, Rt);
    e.memoizedProps = e.pendingProps,
    t === null ? p0(e) : Ue = t,
    _d.current = null
}
function p0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = h4(n, t),
            n !== null) {
                n.flags &= 32767,
                Ue = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ve = 6,
                Ue = null;
                return
            }
        } else if (n = p4(n, t, Rt),
        n !== null) {
            Ue = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ue = t;
            return
        }
        Ue = t = e
    } while (t !== null);
    Ve === 0 && (Ve = 5)
}
function Lr(e, t, n) {
    var r = ye
      , i = zt.transition;
    try {
        zt.transition = null,
        ye = 1,
        w4(e, t, n, r)
    } finally {
        zt.transition = i,
        ye = r
    }
    return null
}
function w4(e, t, n, r) {
    do
        Li();
    while (Xn !== null);
    if (pe & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (n3(e, o),
    e === Je && (Ue = Je = null,
    et = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zs || (Zs = !0,
    g0(Da, function() {
        return Li(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = zt.transition,
        zt.transition = null;
        var s = ye;
        ye = 1;
        var a = pe;
        pe |= 4,
        _d.current = null,
        g4(e, n),
        a0(n, e),
        W3(Ic),
        $a = !!Tc,
        Ic = Tc = null,
        e.current = n,
        y4(n),
        Kv(),
        pe = a,
        ye = s,
        zt.transition = o
    } else
        e.current = n;
    if (Zs && (Zs = !1,
    Xn = e,
    el = i),
    o = e.pendingLanes,
    o === 0 && (or = null),
    Jv(n.stateNode),
    Tt(e, $e()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Za)
        throw Za = !1,
        e = Gc,
        Gc = null,
        e;
    return el & 1 && e.tag !== 0 && Li(),
    o = e.pendingLanes,
    o & 1 ? e === Yc ? Bo++ : (Bo = 0,
    Yc = e) : Bo = 0,
    vr(),
    null
}
function Li() {
    if (Xn !== null) {
        var e = Km(el)
          , t = zt.transition
          , n = ye;
        try {
            if (zt.transition = null,
            ye = 16 > e ? 16 : e,
            Xn === null)
                var r = !1;
            else {
                if (e = Xn,
                Xn = null,
                el = 0,
                pe & 6)
                    throw Error(A(331));
                var i = pe;
                for (pe |= 4,
                B = e.current; B !== null; ) {
                    var o = B
                      , s = o.child;
                    if (B.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (B = u; B !== null; ) {
                                    var c = B;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fo(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        B = f;
                                    else
                                        for (; B !== null; ) {
                                            c = B;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (i0(c),
                                            c === u) {
                                                B = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                B = d;
                                                break
                                            }
                                            B = m
                                        }
                                }
                            }
                            var h = o.alternate;
                            if (h !== null) {
                                var v = h.child;
                                if (v !== null) {
                                    h.child = null;
                                    do {
                                        var k = v.sibling;
                                        v.sibling = null,
                                        v = k
                                    } while (v !== null)
                                }
                            }
                            B = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        B = s;
                    else
                        e: for (; B !== null; ) {
                            if (o = B,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fo(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                B = g;
                                break e
                            }
                            B = o.return
                        }
                }
                var p = e.current;
                for (B = p; B !== null; ) {
                    s = B;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        y.return = s,
                        B = y;
                    else
                        e: for (s = p; B !== null; ) {
                            if (a = B,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ml(9, a)
                                    }
                                } catch (x) {
                                    Me(a, a.return, x)
                                }
                            if (a === s) {
                                B = null;
                                break e
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                E.return = a.return,
                                B = E;
                                break e
                            }
                            B = a.return
                        }
                }
                if (pe = i,
                vr(),
                vn && typeof vn.onPostCommitFiberRoot == "function")
                    try {
                        vn.onPostCommitFiberRoot(Tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ye = n,
            zt.transition = t
        }
    }
    return !1
}
function Sh(e, t, n) {
    t = Fi(n, t),
    t = Kg(e, t, 1),
    e = ir(e, t, 1),
    t = ht(),
    e !== null && (Es(e, 1, t),
    Tt(e, t))
}
function Me(e, t, n) {
    if (e.tag === 3)
        Sh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Sh(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (or === null || !or.has(r))) {
                    e = Fi(n, e),
                    e = Gg(t, e, 1),
                    t = ir(t, e, 1),
                    e = ht(),
                    t !== null && (Es(t, 1, e),
                    Tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function C4(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ht(),
    e.pingedLanes |= e.suspendedLanes & n,
    Je === e && (et & n) === n && (Ve === 4 || Ve === 3 && (et & 130023424) === et && 500 > $e() - Ed ? Mr(e, 0) : Sd |= n),
    Tt(e, t)
}
function h0(e, t) {
    t === 0 && (e.mode & 1 ? (t = zs,
    zs <<= 1,
    !(zs & 130023424) && (zs = 4194304)) : t = 1);
    var n = ht();
    e = Nn(e, t),
    e !== null && (Es(e, t, n),
    Tt(e, n))
}
function k4(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    h0(e, n)
}
function x4(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    r !== null && r.delete(t),
    h0(e, n)
}
var m0;
m0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xt.current)
            Ct = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ct = !1,
                d4(e, t, n);
            Ct = !!(e.flags & 131072)
        }
    else
        Ct = !1,
        Ie && t.flags & 1048576 && _g(t, Va, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ca(e, t),
        e = t.pendingProps;
        var i = Oi(t, lt.current);
        Ii(t, n),
        i = hd(null, t, r, e, i, n);
        var o = md();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        bt(r) ? (o = !0,
        za(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ud(t),
        i.updater = Nl,
        t.stateNode = i,
        i._reactInternals = t,
        Fc(t, r, e, n),
        t = jc(null, t, r, !0, o, n)) : (t.tag = 0,
        Ie && o && nd(t),
        dt(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ca(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = T4(r),
            e = Xt(r, e),
            i) {
            case 0:
                t = Bc(null, t, r, e, n);
                break e;
            case 1:
                t = ch(null, t, r, e, n);
                break e;
            case 11:
                t = lh(null, t, r, e, n);
                break e;
            case 14:
                t = uh(null, t, r, Xt(r.type, e), n);
                break e
            }
            throw Error(A(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Xt(r, i),
        Bc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Xt(r, i),
        ch(e, t, r, i, n);
    case 3:
        e: {
            if (Xg(t),
            e === null)
                throw Error(A(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            xg(e, t),
            Ga(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Fi(Error(A(423)), t),
                    t = fh(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Fi(Error(A(424)), t),
                    t = fh(e, t, r, n, i);
                    break e
                } else
                    for (Pt = rr(t.stateNode.containerInfo.firstChild),
                    Ot = t,
                    Ie = !0,
                    en = null,
                    n = Cg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ni(),
                r === i) {
                    t = Mn(e, t, n);
                    break e
                }
                dt(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return bg(t),
        e === null && Nc(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Lc(r, i) ? s = null : o !== null && Lc(r, o) && (t.flags |= 32),
        Qg(e, t),
        dt(e, t, s, n),
        t.child;
    case 6:
        return e === null && Nc(t),
        null;
    case 13:
        return Zg(e, t, n);
    case 4:
        return cd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Mi(t, null, r, n) : dt(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Xt(r, i),
        lh(e, t, r, i, n);
    case 7:
        return dt(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return dt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return dt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            we(qa, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (on(o.value, s)) {
                    if (o.children === i.children && !xt.current) {
                        t = Mn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = Ln(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    Mc(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(A(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Mc(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            dt(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Ii(t, n),
        i = Vt(i),
        r = r(i),
        t.flags |= 1,
        dt(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Xt(r, t.pendingProps),
        i = Xt(r.type, i),
        uh(e, t, r, i, n);
    case 15:
        return Yg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Xt(r, i),
        Ca(e, t),
        t.tag = 1,
        bt(r) ? (e = !0,
        za(t)) : e = !1,
        Ii(t, n),
        qg(t, r, i),
        Fc(t, r, i, n),
        jc(null, t, r, !0, e, n);
    case 19:
        return e0(e, t, n);
    case 22:
        return Jg(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function g0(e, t) {
    return zm(e, t)
}
function b4(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Wt(e, t, n, r) {
    return new b4(e,t,n,r)
}
function xd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function T4(e) {
    if (typeof e == "function")
        return xd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Hf)
            return 11;
        if (e === Vf)
            return 14
    }
    return 2
}
function ar(e, t) {
    var n = e.alternate;
    return n === null ? (n = Wt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ba(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        xd(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case ui:
            return Dr(n.children, i, o, t);
        case zf:
            s = 8,
            i |= 8;
            break;
        case ac:
            return e = Wt(12, n, t, i | 2),
            e.elementType = ac,
            e.lanes = o,
            e;
        case lc:
            return e = Wt(13, n, t, i),
            e.elementType = lc,
            e.lanes = o,
            e;
        case uc:
            return e = Wt(19, n, t, i),
            e.elementType = uc,
            e.lanes = o,
            e;
        case bm:
            return Fl(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case km:
                    s = 10;
                    break e;
                case xm:
                    s = 9;
                    break e;
                case Hf:
                    s = 11;
                    break e;
                case Vf:
                    s = 14;
                    break e;
                case Wn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = Wt(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Dr(e, t, n, r) {
    return e = Wt(7, e, r, t),
    e.lanes = n,
    e
}
function Fl(e, t, n, r) {
    return e = Wt(22, e, r, t),
    e.elementType = bm,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function zu(e, t, n) {
    return e = Wt(6, e, null, t),
    e.lanes = n,
    e
}
function Hu(e, t, n) {
    return t = Wt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function I4(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ku(0),
    this.expirationTimes = ku(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ku(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function bd(e, t, n, r, i, o, s, a, l) {
    return e = new I4(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Wt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ud(o),
    e
}
function L4(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: li,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function y0(e) {
    if (!e)
        return dr;
    e = e._reactInternals;
    e: {
        if (Yr(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (bt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (bt(n))
            return yg(e, n, t)
    }
    return t
}
function v0(e, t, n, r, i, o, s, a, l) {
    return e = bd(n, r, !0, e, i, o, s, a, l),
    e.context = y0(null),
    n = e.current,
    r = ht(),
    i = sr(n),
    o = Ln(r, i),
    o.callback = t ?? null,
    ir(n, o, i),
    e.current.lanes = i,
    Es(e, i, r),
    Tt(e, r),
    e
}
function $l(e, t, n, r) {
    var i = t.current
      , o = ht()
      , s = sr(i);
    return n = y0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ln(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ir(i, t, s),
    e !== null && (rn(e, i, s, o),
    Sa(e, i, s)),
    s
}
function nl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Eh(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Td(e, t) {
    Eh(e, t),
    (e = e.alternate) && Eh(e, t)
}
function R4() {
    return null
}
var _0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Id(e) {
    this._internalRoot = e
}
Bl.prototype.render = Id.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    $l(e, t, null, null)
}
;
Bl.prototype.unmount = Id.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vr(function() {
            $l(null, e, null, null)
        }),
        t[On] = null
    }
}
;
function Bl(e) {
    this._internalRoot = e
}
Bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Jm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++)
            ;
        Yn.splice(n, 0, e),
        n === 0 && Xm(e)
    }
}
;
function Ld(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function jl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wh() {}
function A4(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = nl(s);
                o.call(u)
            }
        }
        var s = v0(t, r, e, 0, null, !1, !1, "", wh);
        return e._reactRootContainer = s,
        e[On] = s.current,
        es(e.nodeType === 8 ? e.parentNode : e),
        Vr(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = nl(l);
            a.call(u)
        }
    }
    var l = bd(e, 0, !1, null, null, !1, !1, "", wh);
    return e._reactRootContainer = l,
    e[On] = l.current,
    es(e.nodeType === 8 ? e.parentNode : e),
    Vr(function() {
        $l(t, l, n, r)
    }),
    l
}
function Ul(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = nl(s);
                a.call(l)
            }
        }
        $l(t, s, e, i)
    } else
        s = A4(n, t, e, i, r);
    return nl(s)
}
Gm = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Lo(t.pendingLanes);
            n !== 0 && (Gf(t, n | 1),
            Tt(t, $e()),
            !(pe & 6) && ($i = $e() + 500,
            vr()))
        }
        break;
    case 13:
        Vr(function() {
            var r = Nn(e, 1);
            if (r !== null) {
                var i = ht();
                rn(r, e, 1, i)
            }
        }),
        Td(e, 1)
    }
}
;
Yf = function(e) {
    if (e.tag === 13) {
        var t = Nn(e, 134217728);
        if (t !== null) {
            var n = ht();
            rn(t, e, 134217728, n)
        }
        Td(e, 134217728)
    }
}
;
Ym = function(e) {
    if (e.tag === 13) {
        var t = sr(e)
          , n = Nn(e, t);
        if (n !== null) {
            var r = ht();
            rn(n, e, t, r)
        }
        Td(e, t)
    }
}
;
Jm = function() {
    return ye
}
;
Qm = function(e, t) {
    var n = ye;
    try {
        return ye = e,
        t()
    } finally {
        ye = n
    }
}
;
_c = function(e, t, n) {
    switch (t) {
    case "input":
        if (dc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Al(r);
                    if (!i)
                        throw Error(A(90));
                    Im(r),
                    dc(r, i)
                }
            }
        }
        break;
    case "textarea":
        Rm(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ki(e, !!n.multiple, t, !1)
    }
}
;
Fm = wd;
$m = Vr;
var P4 = {
    usingClientEntryPoint: !1,
    Events: [Cs, pi, Al, Mm, Dm, wd]
}
  , Co = {
    findFiberByHostInstance: Rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , O4 = {
    bundleType: Co.bundleType,
    version: Co.version,
    rendererPackageName: Co.rendererPackageName,
    rendererConfig: Co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Um(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Co.findFiberByHostInstance || R4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ea.isDisabled && ea.supportsFiber)
        try {
            Tl = ea.inject(O4),
            vn = ea
        } catch {}
}
Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P4;
Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ld(t))
        throw Error(A(200));
    return L4(e, t, null, n)
}
;
Dt.createRoot = function(e, t) {
    if (!Ld(e))
        throw Error(A(299));
    var n = !1
      , r = ""
      , i = _0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = bd(e, 1, !1, null, null, n, !1, r, i),
    e[On] = t.current,
    es(e.nodeType === 8 ? e.parentNode : e),
    new Id(t)
}
;
Dt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = Um(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Dt.flushSync = function(e) {
    return Vr(e)
}
;
Dt.hydrate = function(e, t, n) {
    if (!jl(t))
        throw Error(A(200));
    return Ul(null, e, t, !0, n)
}
;
Dt.hydrateRoot = function(e, t, n) {
    if (!Ld(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = _0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = v0(t, null, e, 1, n ?? null, i, !1, o, s),
    e[On] = t.current,
    es(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Bl(t)
}
;
Dt.render = function(e, t, n) {
    if (!jl(t))
        throw Error(A(200));
    return Ul(null, e, t, !1, n)
}
;
Dt.unmountComponentAtNode = function(e) {
    if (!jl(e))
        throw Error(A(40));
    return e._reactRootContainer ? (Vr(function() {
        Ul(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[On] = null
        })
    }),
    !0) : !1
}
;
Dt.unstable_batchedUpdates = wd;
Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!jl(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return Ul(e, t, n, !1, r)
}
;
Dt.version = "18.3.1-next-f1338f8080-20240426";
function S0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)
        } catch (e) {
            console.error(e)
        }
}
S0(),
Sm.exports = Dt;
var N4 = Sm.exports, M4, Ch = N4;
M4 = oc.createRoot = Ch.createRoot,
oc.hydrateRoot = Ch.hydrateRoot;
const D4 = "modulepreload"
  , F4 = function(e) {
    return "/" + e
}
  , kh = {}
  , ta = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        i = Promise.all(n.map(a => {
            if (a = F4(a),
            a in kh)
                return;
            kh[a] = !0;
            const l = a.endsWith(".css")
              , u = l ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${u}`))
                return;
            const c = document.createElement("link");
            if (c.rel = l ? "stylesheet" : D4,
            l || (c.as = "script",
            c.crossOrigin = ""),
            c.href = a,
            s && c.setAttribute("nonce", s),
            document.head.appendChild(c),
            l)
                return new Promise( (f, d) => {
                    c.addEventListener("load", f),
                    c.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    return i.then( () => t()).catch(o => {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = o,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw o
    }
    )
}
  , $4 = {
    type: "logger",
    log(e) {
        this.output("log", e)
    },
    warn(e) {
        this.output("warn", e)
    },
    error(e) {
        this.output("error", e)
    },
    output(e, t) {
        console && console[e] && console[e].apply(console, t)
    }
};
class rl {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, n)
    }
    init(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = n.prefix || "i18next:",
        this.logger = t || $4,
        this.options = n,
        this.debug = n.debug
    }
    log() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "log", "", !0)
    }
    warn() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "", !0)
    }
    error() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "error", "")
    }
    deprecate() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, n, r, i) {
        return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
    }
    create(t) {
        return new rl(this.logger,{
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options,
        t.prefix = t.prefix || this.prefix,
        new rl(this.logger,t)
    }
}
var mn = new rl;
class Wl {
    constructor() {
        this.observers = {}
    }
    on(t, n) {
        return t.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const i = this.observers[r].get(n) || 0;
            this.observers[r].set(n, i + 1)
        }
        ),
        this
    }
    off(t, n) {
        if (this.observers[t]) {
            if (!n) {
                delete this.observers[t];
                return
            }
            this.observers[t].delete(n)
        }
    }
    emit(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i];
        this.observers[t] && Array.from(this.observers[t].entries()).forEach(s => {
            let[a,l] = s;
            for (let u = 0; u < l; u++)
                a(...r)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(s => {
            let[a,l] = s;
            for (let u = 0; u < l; u++)
                a.apply(a, [t, ...r])
        }
        )
    }
}
function ko() {
    let e, t;
    const n = new Promise( (r, i) => {
        e = r,
        t = i
    }
    );
    return n.resolve = e,
    n.reject = t,
    n
}
function xh(e) {
    return e == null ? "" : "" + e
}
function B4(e, t, n) {
    e.forEach(r => {
        t[r] && (n[r] = t[r])
    }
    )
}
const j4 = /###/g;
function jo(e, t, n) {
    function r(a) {
        return a && a.indexOf("###") > -1 ? a.replace(j4, ".") : a
    }
    function i() {
        return !e || typeof e == "string"
    }
    const o = typeof t != "string" ? t : t.split(".");
    let s = 0;
    for (; s < o.length - 1; ) {
        if (i())
            return {};
        const a = r(o[s]);
        !e[a] && n && (e[a] = new n),
        Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {},
        ++s
    }
    return i() ? {} : {
        obj: e,
        k: r(o[s])
    }
}
function bh(e, t, n) {
    const {obj: r, k: i} = jo(e, t, Object);
    if (r !== void 0 || t.length === 1) {
        r[i] = n;
        return
    }
    let o = t[t.length - 1]
      , s = t.slice(0, t.length - 1)
      , a = jo(e, s, Object);
    for (; a.obj === void 0 && s.length; )
        o = `${s[s.length - 1]}.${o}`,
        s = s.slice(0, s.length - 1),
        a = jo(e, s, Object),
        a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${o}`] = n
}
function U4(e, t, n, r) {
    const {obj: i, k: o} = jo(e, t, Object);
    i[o] = i[o] || [],
    i[o].push(n)
}
function il(e, t) {
    const {obj: n, k: r} = jo(e, t);
    if (n)
        return n[r]
}
function W4(e, t, n) {
    const r = il(e, n);
    return r !== void 0 ? r : il(t, n)
}
function E0(e, t, n) {
    for (const r in t)
        r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r]instanceof String || typeof t[r] == "string" || t[r]instanceof String ? n && (e[r] = t[r]) : E0(e[r], t[r], n) : e[r] = t[r]);
    return e
}
function ii(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var z4 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function H4(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => z4[t]) : e
}
class V4 {
    constructor(t) {
        this.capacity = t,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(t) {
        const n = this.regExpMap.get(t);
        if (n !== void 0)
            return n;
        const r = new RegExp(t);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(t, r),
        this.regExpQueue.push(t),
        r
    }
}
const q4 = [" ", ",", "?", "!", ";"]
  , K4 = new V4(20);
function G4(e, t, n) {
    t = t || "",
    n = n || "";
    const r = q4.filter(s => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0)
        return !0;
    const i = K4.getRegExp(`(${r.map(s => s === "?" ? "\\?" : s).join("|")})`);
    let o = !i.test(e);
    if (!o) {
        const s = e.indexOf(n);
        s > 0 && !i.test(e.substring(0, s)) && (o = !0)
    }
    return o
}
function Xc(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e)
        return;
    if (e[t])
        return e[t];
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ) {
        if (!i || typeof i != "object")
            return;
        let s, a = "";
        for (let l = o; l < r.length; ++l)
            if (l !== o && (a += n),
            a += r[l],
            s = i[a],
            s !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
                    continue;
                o += l - o + 1;
                break
            }
        i = s
    }
    return i
}
function ol(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class Th extends Wl {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(),
        this.data = t || {},
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1)
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
          , s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let a;
        t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n],
        r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
        const l = il(this.data, a);
        return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0],
        n = a[1],
        r = a.slice(2).join(".")),
        l || !s || typeof r != "string" ? l : Xc(this.data && this.data[t] && this.data[t][n], r, o)
    }
    addResource(t, n, r, i) {
        let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
        let a = [t, n];
        r && (a = a.concat(s ? r.split(s) : r)),
        t.indexOf(".") > -1 && (a = t.split("."),
        i = n,
        n = a[1]),
        this.addNamespaces(n),
        bh(this.data, a, i),
        o.silent || this.emit("added", t, n, r, i)
    }
    addResources(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const o in r)
            (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
                silent: !0
            });
        i.silent || this.emit("added", t, n, r)
    }
    addResourceBundle(t, n, r, i, o) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: !1,
            skipCopy: !1
        }
          , a = [t, n];
        t.indexOf(".") > -1 && (a = t.split("."),
        i = r,
        r = n,
        n = a[1]),
        this.addNamespaces(n);
        let l = il(this.data, a) || {};
        s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
        i ? E0(l, r, o) : l = {
            ...l,
            ...r
        },
        bh(this.data, a, l),
        s.silent || this.emit("added", t, n, r)
    }
    removeResourceBundle(t, n) {
        this.hasResourceBundle(t, n) && delete this.data[t][n],
        this.removeNamespaces(n),
        this.emit("removed", t, n)
    }
    hasResourceBundle(t, n) {
        return this.getResource(t, n) !== void 0
    }
    getResourceBundle(t, n) {
        return n || (n = this.options.defaultNS),
        this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(t, n)
        } : this.getResource(t, n)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const n = this.getDataByLanguage(t);
        return !!(n && Object.keys(n) || []).find(i => n[i] && Object.keys(n[i]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var w0 = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, n, r, i) {
        return e.forEach(o => {
            this.processors[o] && (t = this.processors[o].process(t, n, r, i))
        }
        ),
        t
    }
};
const Ih = {};
class sl extends Wl {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
        B4(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = mn.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (t == null)
            return !1;
        const r = this.resolve(t, n);
        return r && r.res !== void 0
    }
    extractFromKey(t, n) {
        let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
        let o = n.ns || this.options.defaultNS || [];
        const s = r && t.indexOf(r) > -1
          , a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !G4(t, r, i);
        if (s && !a) {
            const l = t.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0)
                return {
                    key: t,
                    namespaces: o
                };
            const u = t.split(r);
            (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()),
            t = u.join(i)
        }
        return typeof o == "string" && (o = [o]),
        {
            key: t,
            namespaces: o
        }
    }
    translate(t, n, r) {
        if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)),
        typeof n == "object" && (n = {
            ...n
        }),
        n || (n = {}),
        t == null)
            return "";
        Array.isArray(t) || (t = [String(t)]);
        const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails
          , o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
          , {key: s, namespaces: a} = this.extractFromKey(t[t.length - 1], n)
          , l = a[a.length - 1]
          , u = n.lng || this.language
          , c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (u && u.toLowerCase() === "cimode") {
            if (c) {
                const E = n.nsSeparator || this.options.nsSeparator;
                return i ? {
                    res: `${l}${E}${s}`,
                    usedKey: s,
                    exactUsedKey: s,
                    usedLng: u,
                    usedNS: l,
                    usedParams: this.getUsedParamsDetails(n)
                } : `${l}${E}${s}`
            }
            return i ? {
                res: s,
                usedKey: s,
                exactUsedKey: s,
                usedLng: u,
                usedNS: l,
                usedParams: this.getUsedParamsDetails(n)
            } : s
        }
        const f = this.resolve(t, n);
        let d = f && f.res;
        const m = f && f.usedKey || s
          , h = f && f.exactUsedKey || s
          , v = Object.prototype.toString.apply(d)
          , k = ["[object Number]", "[object Function]", "[object RegExp]"]
          , g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays
          , p = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (p && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && k.indexOf(v) < 0 && !(typeof g == "string" && Array.isArray(d))) {
            if (!n.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, d, {
                    ...n,
                    ns: a
                }) : `key '${s} (${this.language})' returned an object instead of string.`;
                return i ? (f.res = E,
                f.usedParams = this.getUsedParamsDetails(n),
                f) : E
            }
            if (o) {
                const E = Array.isArray(d)
                  , x = E ? [] : {}
                  , b = E ? h : m;
                for (const w in d)
                    if (Object.prototype.hasOwnProperty.call(d, w)) {
                        const I = `${b}${o}${w}`;
                        x[w] = this.translate(I, {
                            ...n,
                            joinArrays: !1,
                            ns: a
                        }),
                        x[w] === I && (x[w] = d[w])
                    }
                d = x
            }
        } else if (p && typeof g == "string" && Array.isArray(d))
            d = d.join(g),
            d && (d = this.extendTranslation(d, t, n, r));
        else {
            let E = !1
              , x = !1;
            const b = n.count !== void 0 && typeof n.count != "string"
              , w = sl.hasDefaultValue(n)
              , I = b ? this.pluralResolver.getSuffix(u, n.count, n) : ""
              , W = n.ordinal && b ? this.pluralResolver.getSuffix(u, n.count, {
                ordinal: !1
            }) : ""
              , T = b && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
              , D = T && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${I}`] || n[`defaultValue${W}`] || n.defaultValue;
            !this.isValidLookup(d) && w && (E = !0,
            d = D),
            this.isValidLookup(d) || (x = !0,
            d = s);
            const ee = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : d
              , ne = w && D !== d && this.options.updateMissing;
            if (x || E || ne) {
                if (this.logger.log(ne ? "updateKey" : "missingKey", u, l, s, ne ? D : d),
                o) {
                    const L = this.resolve(s, {
                        ...n,
                        keySeparator: !1
                    });
                    L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let me = [];
                const H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && H && H[0])
                    for (let L = 0; L < H.length; L++)
                        me.push(H[L]);
                else
                    this.options.saveMissingTo === "all" ? me = this.languageUtils.toResolveHierarchy(n.lng || this.language) : me.push(n.lng || this.language);
                const _e = (L, $, j) => {
                    const de = w && j !== d ? j : ee;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, $, de, ne, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, l, $, de, ne, n),
                    this.emit("missingKey", L, l, $, d)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && b ? me.forEach(L => {
                    const $ = this.pluralResolver.getSuffixes(L, n);
                    T && n[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`),
                    $.forEach(j => {
                        _e([L], s + j, n[`defaultValue${j}`] || D)
                    }
                    )
                }
                ) : _e(me, s, D))
            }
            d = this.extendTranslation(d, t, n, f, r),
            x && d === s && this.options.appendNamespaceToMissingKey && (d = `${l}:${s}`),
            (x || E) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, E ? d : void 0) : d = this.options.parseMissingKeyHandler(d))
        }
        return i ? (f.res = d,
        f.usedParams = this.getUsedParamsDetails(n),
        f) : d
    }
    extendTranslation(t, n, r, i, o) {
        var s = this;
        if (this.i18nFormat && this.i18nFormat.parse)
            t = this.i18nFormat.parse(t, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                resolved: i
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let c;
            if (u) {
                const d = t.match(this.interpolator.nestingRegexp);
                c = d && d.length
            }
            let f = r.replace && typeof r.replace != "string" ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (f = {
                ...this.options.interpolation.defaultVariables,
                ...f
            }),
            t = this.interpolator.interpolate(t, f, r.lng || this.language || i.usedLng, r),
            u) {
                const d = t.match(this.interpolator.nestingRegexp)
                  , m = d && d.length;
                c < m && (r.nest = !1)
            }
            !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = this.language || i.usedLng),
            r.nest !== !1 && (t = this.interpolator.nest(t, function() {
                for (var d = arguments.length, m = new Array(d), h = 0; h < d; h++)
                    m[h] = arguments[h];
                return o && o[0] === m[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),
                null) : s.translate(...m, n)
            }, r)),
            r.interpolation && this.interpolator.reset()
        }
        const a = r.postProcess || this.options.postProcess
          , l = typeof a == "string" ? [a] : a;
        return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = w0.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...i,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
        t
    }
    resolve(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
        return typeof t == "string" && (t = [t]),
        t.forEach(l => {
            if (this.isValidLookup(r))
                return;
            const u = this.extractFromKey(l, n)
              , c = u.key;
            i = c;
            let f = u.namespaces;
            this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
            const d = n.count !== void 0 && typeof n.count != "string"
              , m = d && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
              , h = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== ""
              , v = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            f.forEach(k => {
                this.isValidLookup(r) || (a = k,
                !Ih[`${v[0]}-${k}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Ih[`${v[0]}-${k}`] = !0,
                this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                v.forEach(g => {
                    if (this.isValidLookup(r))
                        return;
                    s = g;
                    const p = [c];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                        this.i18nFormat.addLookupKeys(p, c, g, k, n);
                    else {
                        let E;
                        d && (E = this.pluralResolver.getSuffix(g, n.count, n));
                        const x = `${this.options.pluralSeparator}zero`
                          , b = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (d && (p.push(c + E),
                        n.ordinal && E.indexOf(b) === 0 && p.push(c + E.replace(b, this.options.pluralSeparator)),
                        m && p.push(c + x)),
                        h) {
                            const w = `${c}${this.options.contextSeparator}${n.context}`;
                            p.push(w),
                            d && (p.push(w + E),
                            n.ordinal && E.indexOf(b) === 0 && p.push(w + E.replace(b, this.options.pluralSeparator)),
                            m && p.push(w + x))
                        }
                    }
                    let y;
                    for (; y = p.pop(); )
                        this.isValidLookup(r) || (o = y,
                        r = this.getResource(g, k, y, n))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: i,
            exactUsedKey: o,
            usedLng: s,
            usedNS: a
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i)
    }
    getUsedParamsDetails() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , r = t.replace && typeof t.replace != "string";
        let i = r ? t.replace : t;
        if (r && typeof t.count < "u" && (i.count = t.count),
        this.options.interpolation.defaultVariables && (i = {
            ...this.options.interpolation.defaultVariables,
            ...i
        }),
        !r) {
            i = {
                ...i
            };
            for (const o of n)
                delete i[o]
        }
        return i
    }
    static hasDefaultValue(t) {
        const n = "defaultValue";
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
                return !0;
        return !1
    }
}
function Vu(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class Lh {
    constructor(t) {
        this.options = t,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = mn.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = ol(t),
        !t || t.indexOf("-") < 0)
            return null;
        const n = t.split("-");
        return n.length === 2 || (n.pop(),
        n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = ol(t),
        !t || t.indexOf("-") < 0)
            return t;
        const n = t.split("-");
        return this.formatLanguageCode(n[0])
    }
    formatLanguageCode(t) {
        if (typeof t == "string" && t.indexOf("-") > -1) {
            const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let r = t.split("-");
            return this.options.lowerCaseLng ? r = r.map(i => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(),
            r[1] = r[1].toUpperCase(),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Vu(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Vu(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Vu(r[2].toLowerCase()))),
            r.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t)
            return null;
        let n;
        return t.forEach(r => {
            if (n)
                return;
            const i = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
        }
        ),
        !n && this.options.supportedLngs && t.forEach(r => {
            if (n)
                return;
            const i = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(i))
                return n = i;
            n = this.options.supportedLngs.find(o => {
                if (o === i)
                    return o;
                if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
                    return o
            }
            )
        }
        ),
        n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
        n
    }
    getFallbackCodes(t, n) {
        if (!t)
            return [];
        if (typeof t == "function" && (t = t(n)),
        typeof t == "string" && (t = [t]),
        Array.isArray(t))
            return t;
        if (!n)
            return t.default || [];
        let r = t[n];
        return r || (r = t[this.getScriptPartFromCode(n)]),
        r || (r = t[this.formatLanguageCode(n)]),
        r || (r = t[this.getLanguagePartFromCode(n)]),
        r || (r = t.default),
        r || []
    }
    toResolveHierarchy(t, n) {
        const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t)
          , i = []
          , o = s => {
            s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
        }
        ;
        return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)),
        this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)),
        r.forEach(s => {
            i.indexOf(s) < 0 && o(this.formatLanguageCode(s))
        }
        ),
        i
    }
}
let Y4 = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
}, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
}, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
}, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
}, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
}, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
}, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
}, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
}, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
}, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
}, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
}, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
}, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
}, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
}, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
}, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
}, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
}, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
}, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
}, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
}, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
}, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
}, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
}]
  , J4 = {
    1: function(e) {
        return +(e > 1)
    },
    2: function(e) {
        return +(e != 1)
    },
    3: function(e) {
        return 0
    },
    4: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    5: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
    },
    6: function(e) {
        return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
    },
    7: function(e) {
        return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    8: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
    },
    9: function(e) {
        return +(e >= 2)
    },
    10: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
    },
    11: function(e) {
        return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
    },
    12: function(e) {
        return +(e % 10 != 1 || e % 100 == 11)
    },
    13: function(e) {
        return +(e !== 0)
    },
    14: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
    },
    15: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    16: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
    },
    17: function(e) {
        return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
    },
    18: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : 2
    },
    19: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
    },
    20: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
    },
    21: function(e) {
        return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
    },
    22: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
    }
};
const Q4 = ["v1", "v2", "v3"]
  , X4 = ["v4"]
  , Rh = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
function Z4() {
    const e = {};
    return Y4.forEach(t => {
        t.lngs.forEach(n => {
            e[n] = {
                numbers: t.nr,
                plurals: J4[t.fc]
            }
        }
        )
    }
    ),
    e
}
class e6 {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t,
        this.options = n,
        this.logger = mn.create("pluralResolver"),
        (!this.options.compatibilityJSON || X4.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
        this.rules = Z4()
    }
    addRule(t, n) {
        this.rules[t] = n
    }
    getRule(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi())
            try {
                return new Intl.PluralRules(ol(t === "dev" ? "en" : t),{
                    type: n.ordinal ? "ordinal" : "cardinal"
                })
            } catch {
                return
            }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    }
    needsPlural(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1
    }
    getPluralFormsOfKey(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, r).map(i => `${n}${i}`)
    }
    getSuffixes(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort( (i, o) => Rh[i] - Rh[o]).map(i => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map(i => this.getSuffix(t, i, n)) : []
    }
    getSuffix(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const i = this.getRule(t, r);
        return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`),
        "")
    }
    getSuffixRetroCompatible(t, n) {
        const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
        let i = t.numbers[r];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
        const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
    }
    shouldUseIntlApi() {
        return !Q4.includes(this.options.compatibilityJSON)
    }
}
function Ah(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "."
      , i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0
      , o = W4(e, t, n);
    return !o && i && typeof n == "string" && (o = Xc(e, n, r),
    o === void 0 && (o = Xc(t, n, r))),
    o
}
class t6 {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = mn.create("interpolator"),
        this.options = t,
        this.format = t.interpolation && t.interpolation.format || (n => n),
        this.init(t)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const {escape: n, escapeValue: r, useRawValueToEscape: i, prefix: o, prefixEscaped: s, suffix: a, suffixEscaped: l, formatSeparator: u, unescapeSuffix: c, unescapePrefix: f, nestingPrefix: d, nestingPrefixEscaped: m, nestingSuffix: h, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: g, alwaysFormat: p} = t.interpolation;
        this.escape = n !== void 0 ? n : H4,
        this.escapeValue = r !== void 0 ? r : !0,
        this.useRawValueToEscape = i !== void 0 ? i : !1,
        this.prefix = o ? ii(o) : s || "{{",
        this.suffix = a ? ii(a) : l || "}}",
        this.formatSeparator = u || ",",
        this.unescapePrefix = c ? "" : f || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : c || "",
        this.nestingPrefix = d ? ii(d) : m || ii("$t("),
        this.nestingSuffix = h ? ii(h) : v || ii(")"),
        this.nestingOptionsSeparator = k || ",",
        this.maxReplaces = g || 1e3,
        this.alwaysFormat = p !== void 0 ? p : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = (n, r) => n && n.source === r ? (n.lastIndex = 0,
        n) : new RegExp(r,"g");
        this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(t, n, r, i) {
        let o, s, a;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function u(h) {
            return h.replace(/\$/g, "$$$$")
        }
        const c = h => {
            if (h.indexOf(this.formatSeparator) < 0) {
                const p = Ah(n, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(p, void 0, r, {
                    ...i,
                    ...n,
                    interpolationkey: h
                }) : p
            }
            const v = h.split(this.formatSeparator)
              , k = v.shift().trim()
              , g = v.join(this.formatSeparator).trim();
            return this.format(Ah(n, l, k, this.options.keySeparator, this.options.ignoreJSONStructure), g, r, {
                ...i,
                ...n,
                interpolationkey: k
            })
        }
        ;
        this.resetRegExp();
        const f = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler
          , d = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: h => u(h)
        }, {
            regex: this.regexp,
            safeValue: h => this.escapeValue ? u(this.escape(h)) : u(h)
        }].forEach(h => {
            for (a = 0; o = h.regex.exec(t); ) {
                const v = o[1].trim();
                if (s = c(v),
                s === void 0)
                    if (typeof f == "function") {
                        const g = f(t, o, i);
                        s = typeof g == "string" ? g : ""
                    } else if (i && Object.prototype.hasOwnProperty.call(i, v))
                        s = "";
                    else if (d) {
                        s = o[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),
                        s = "";
                else
                    typeof s != "string" && !this.useRawValueToEscape && (s = xh(s));
                const k = h.safeValue(s);
                if (t = t.replace(o[0], k),
                d ? (h.regex.lastIndex += s.length,
                h.regex.lastIndex -= o[0].length) : h.regex.lastIndex = 0,
                a++,
                a >= this.maxReplaces)
                    break
            }
        }
        ),
        t
    }
    nest(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
        function a(l, u) {
            const c = this.nestingOptionsSeparator;
            if (l.indexOf(c) < 0)
                return l;
            const f = l.split(new RegExp(`${c}[ ]*{`));
            let d = `{${f[1]}`;
            l = f[0],
            d = this.interpolate(d, s);
            const m = d.match(/'/g)
              , h = d.match(/"/g);
            (m && m.length % 2 === 0 && !h || h.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
                s = JSON.parse(d),
                u && (s = {
                    ...u,
                    ...s
                })
            } catch (v) {
                return this.logger.warn(`failed parsing options string in nesting for key ${l}`, v),
                `${l}${c}${d}`
            }
            return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue,
            l
        }
        for (; i = this.nestingRegexp.exec(t); ) {
            let l = [];
            s = {
                ...r
            },
            s = s.replace && typeof s.replace != "string" ? s.replace : s,
            s.applyPostProcessor = !1,
            delete s.defaultValue;
            let u = !1;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
                const c = i[1].split(this.formatSeparator).map(f => f.trim());
                i[1] = c.shift(),
                l = c,
                u = !0
            }
            if (o = n(a.call(this, i[1].trim(), s), s),
            o && i[0] === t && typeof o != "string")
                return o;
            typeof o != "string" && (o = xh(o)),
            o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
            o = ""),
            u && (o = l.reduce( (c, f) => this.format(c, f, r.lng, {
                ...r,
                interpolationkey: i[1].trim()
            }), o.trim())),
            t = t.replace(i[0], o),
            this.regexp.lastIndex = 0
        }
        return t
    }
}
function n6(e) {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
        const r = e.split("(");
        t = r[0].toLowerCase().trim();
        const i = r[1].substring(0, r[1].length - 1);
        t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach(s => {
            if (s) {
                const [a,...l] = s.split(":")
                  , u = l.join(":").trim().replace(/^'+|'+$/g, "")
                  , c = a.trim();
                n[c] || (n[c] = u),
                u === "false" && (n[c] = !1),
                u === "true" && (n[c] = !0),
                isNaN(u) || (n[c] = parseInt(u, 10))
            }
        }
        )
    }
    return {
        formatName: t,
        formatOptions: n
    }
}
function oi(e) {
    const t = {};
    return function(r, i, o) {
        const s = i + JSON.stringify(o);
        let a = t[s];
        return a || (a = e(ol(i), o),
        t[s] = a),
        a(r)
    }
}
class r6 {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = mn.create("formatter"),
        this.options = t,
        this.formats = {
            number: oi( (n, r) => {
                const i = new Intl.NumberFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            ),
            currency: oi( (n, r) => {
                const i = new Intl.NumberFormat(n,{
                    ...r,
                    style: "currency"
                });
                return o => i.format(o)
            }
            ),
            datetime: oi( (n, r) => {
                const i = new Intl.DateTimeFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            ),
            relativetime: oi( (n, r) => {
                const i = new Intl.RelativeTimeFormat(n,{
                    ...r
                });
                return o => i.format(o, r.range || "day")
            }
            ),
            list: oi( (n, r) => {
                const i = new Intl.ListFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            )
        },
        this.init(t)
    }
    init(t) {
        const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ","
    }
    add(t, n) {
        this.formats[t.toLowerCase().trim()] = n
    }
    addCached(t, n) {
        this.formats[t.toLowerCase().trim()] = oi(n)
    }
    format(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return n.split(this.formatSeparator).reduce( (a, l) => {
            const {formatName: u, formatOptions: c} = n6(l);
            if (this.formats[u]) {
                let f = a;
                try {
                    const d = i && i.formatParams && i.formatParams[i.interpolationkey] || {}
                      , m = d.locale || d.lng || i.locale || i.lng || r;
                    f = this.formats[u](a, m, {
                        ...c,
                        ...i,
                        ...d
                    })
                } catch (d) {
                    this.logger.warn(d)
                }
                return f
            } else
                this.logger.warn(`there was no format function for ${u}`);
            return a
        }
        , t)
    }
}
function i6(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t],
    e.pendingCount--)
}
class o6 extends Wl {
    constructor(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
        this.backend = t,
        this.store = n,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = i,
        this.logger = mn.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = i.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5,
        this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend && this.backend.init && this.backend.init(r, i.backend, i)
    }
    queueLoad(t, n, r, i) {
        const o = {}
          , s = {}
          , a = {}
          , l = {};
        return t.forEach(u => {
            let c = !0;
            n.forEach(f => {
                const d = `${u}|${f}`;
                !r.reload && this.store.hasResourceBundle(u, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1,
                c = !1,
                s[d] === void 0 && (s[d] = !0),
                o[d] === void 0 && (o[d] = !0),
                l[f] === void 0 && (l[f] = !0)))
            }
            ),
            c || (a[u] = !0)
        }
        ),
        (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
            pending: s,
            pendingCount: Object.keys(s).length,
            loaded: {},
            errors: [],
            callback: i
        }),
        {
            toLoad: Object.keys(o),
            pending: Object.keys(s),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(l)
        }
    }
    loaded(t, n, r) {
        const i = t.split("|")
          , o = i[0]
          , s = i[1];
        n && this.emit("failedLoading", o, s, n),
        r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[t] = n ? -1 : 2;
        const a = {};
        this.queue.forEach(l => {
            U4(l.loaded, [o], s),
            i6(l, t),
            n && l.errors.push(n),
            l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(u => {
                a[u] || (a[u] = {});
                const c = l.loaded[u];
                c.length && c.forEach(f => {
                    a[u][f] === void 0 && (a[u][f] = !0)
                }
                )
            }
            ),
            l.done = !0,
            l.errors.length ? l.callback(l.errors) : l.callback())
        }
        ),
        this.emit("loaded", a),
        this.queue = this.queue.filter(l => !l.done)
    }
    read(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          , o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
          , s = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length)
            return s(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: n,
                fcName: r,
                tried: i,
                wait: o,
                callback: s
            });
            return
        }
        this.readingCalls++;
        const a = (u, c) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const f = this.waitingReads.shift();
                this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
            }
            if (u && c && i < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, t, n, r, i + 1, o * 2, s)
                }
                , o);
                return
            }
            s(u, c)
        }
          , l = this.backend[r].bind(this.backend);
        if (l.length === 2) {
            try {
                const u = l(t, n);
                u && typeof u.then == "function" ? u.then(c => a(null, c)).catch(a) : a(null, u)
            } catch (u) {
                a(u)
            }
            return
        }
        return l(t, n, a)
    }
    prepareLoading(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , i = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            i && i();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
        typeof n == "string" && (n = [n]);
        const o = this.queueLoad(t, n, r, i);
        if (!o.toLoad.length)
            return o.pending.length || i(),
            null;
        o.toLoad.forEach(s => {
            this.loadOne(s)
        }
        )
    }
    load(t, n, r) {
        this.prepareLoading(t, n, {}, r)
    }
    reload(t, n, r) {
        this.prepareLoading(t, n, {
            reload: !0
        }, r)
    }
    loadOne(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const r = t.split("|")
          , i = r[0]
          , o = r[1];
        this.read(i, o, "read", void 0, void 0, (s, a) => {
            s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s),
            !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a),
            this.loaded(t, s, a)
        }
        )
    }
    saveMissing(t, n, r, i, o) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}
          , a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}
        ;
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if (this.backend && this.backend.create) {
                const l = {
                    ...s,
                    isUpdate: o
                }
                  , u = this.backend.create.bind(this.backend);
                if (u.length < 6)
                    try {
                        let c;
                        u.length === 5 ? c = u(t, n, r, i, l) : c = u(t, n, r, i),
                        c && typeof c.then == "function" ? c.then(f => a(null, f)).catch(a) : a(null, c)
                    } catch (c) {
                        a(c)
                    }
                else
                    u(t, n, r, i, a, l)
            }
            !t || !t[0] || this.store.addResource(t[0], n, r, i)
        }
    }
}
function Ph() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            let n = {};
            if (typeof t[1] == "object" && (n = t[1]),
            typeof t[1] == "string" && (n.defaultValue = t[1]),
            typeof t[2] == "string" && (n.tDescription = t[2]),
            typeof t[2] == "object" || typeof t[3] == "object") {
                const r = t[3] || t[2];
                Object.keys(r).forEach(i => {
                    n[i] = r[i]
                }
                )
            }
            return n
        },
        interpolation: {
            escapeValue: !0,
            format: e => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}
function Oh(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
}
function na() {}
function s6(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
        typeof e[n] == "function" && (e[n] = e[n].bind(e))
    }
    )
}
class us extends Wl {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        if (super(),
        this.options = Oh(t),
        this.services = {},
        this.logger = mn,
        this.modules = {
            external: []
        },
        s6(this),
        n && !this.isInitialized && !t.isClone) {
            if (!this.options.initImmediate)
                return this.init(t, n),
                this;
            setTimeout( () => {
                this.init(t, n)
            }
            , 0)
        }
    }
    init() {
        var t = this;
        let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = arguments.length > 1 ? arguments[1] : void 0;
        this.isInitializing = !0,
        typeof n == "function" && (r = n,
        n = {}),
        !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
        const i = Ph();
        this.options = {
            ...i,
            ...this.options,
            ...Oh(n)
        },
        this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...i.interpolation,
            ...this.options.interpolation
        }),
        n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
        n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
        function o(c) {
            return c ? typeof c == "function" ? new c : c : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? mn.init(o(this.modules.logger), this.options) : mn.init(null, this.options);
            let c;
            this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = r6);
            const f = new Lh(this.options);
            this.store = new Th(this.options.resources,this.options);
            const d = this.services;
            d.logger = mn,
            d.resourceStore = this.store,
            d.languageUtils = f,
            d.pluralResolver = new e6(f,{
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(c),
            d.formatter.init(d, this.options),
            this.options.interpolation.format = d.formatter.format.bind(d.formatter)),
            d.interpolator = new t6(this.options),
            d.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            d.backendConnector = new o6(o(this.modules.backend),d.resourceStore,d,this.options),
            d.backendConnector.on("*", function(m) {
                for (var h = arguments.length, v = new Array(h > 1 ? h - 1 : 0), k = 1; k < h; k++)
                    v[k - 1] = arguments[k];
                t.emit(m, ...v)
            }),
            this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector),
            d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)),
            this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat),
            d.i18nFormat.init && d.i18nFormat.init(this)),
            this.translator = new sl(this.services,this.options),
            this.translator.on("*", function(m) {
                for (var h = arguments.length, v = new Array(h > 1 ? h - 1 : 0), k = 1; k < h; k++)
                    v[k - 1] = arguments[k];
                t.emit(m, ...v)
            }),
            this.modules.external.forEach(m => {
                m.init && m.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        r || (r = na),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(c => {
            this[c] = function() {
                return t.store[c](...arguments)
            }
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(c => {
            this[c] = function() {
                return t.store[c](...arguments),
                t
            }
        }
        );
        const l = ko()
          , u = () => {
            const c = (f, d) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                l.resolve(d),
                r(f, d)
            }
            ;
            if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
                return c(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, c)
        }
        ;
        return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0),
        l
    }
    loadResources(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : na;
        const i = typeof t == "string" ? t : this.language;
        if (typeof t == "function" && (r = t),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const o = []
              , s = a => {
                if (!a || a === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(a).forEach(u => {
                    u !== "cimode" && o.indexOf(u) < 0 && o.push(u)
                }
                )
            }
            ;
            i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => s(l)),
            this.options.preload && this.options.preload.forEach(a => s(a)),
            this.services.backendConnector.load(o, this.options.ns, a => {
                !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(a)
            }
            )
        } else
            r(null)
    }
    reloadResources(t, n, r) {
        const i = ko();
        return t || (t = this.languages),
        n || (n = this.options.ns),
        r || (r = na),
        this.services.backendConnector.reload(t, n, o => {
            i.resolve(),
            r(o)
        }
        ),
        i
    }
    use(t) {
        if (!t)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t),
        (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t),
        t.type === "languageDetector" && (this.modules.languageDetector = t),
        t.type === "i18nFormat" && (this.modules.i18nFormat = t),
        t.type === "postProcessor" && w0.addPostProcessor(t),
        t.type === "formatter" && (this.modules.formatter = t),
        t.type === "3rdParty" && this.modules.external.push(t),
        this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let n = 0; n < this.languages.length; n++) {
                const r = this.languages[n];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
    }
    changeLanguage(t, n) {
        var r = this;
        this.isLanguageChangingTo = t;
        const i = ko();
        this.emit("languageChanging", t);
        const o = l => {
            this.language = l,
            this.languages = this.services.languageUtils.toResolveHierarchy(l),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(l)
        }
          , s = (l, u) => {
            u ? (o(u),
            this.translator.changeLanguage(u),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0,
            i.resolve(function() {
                return r.t(...arguments)
            }),
            n && n(l, function() {
                return r.t(...arguments)
            })
        }
          , a = l => {
            !t && !l && this.services.languageDetector && (l = []);
            const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
            u && (this.language || o(u),
            this.translator.language || this.translator.changeLanguage(u),
            this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)),
            this.loadResources(u, c => {
                s(c, u)
            }
            )
        }
        ;
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t),
        i
    }
    getFixedT(t, n, r) {
        var i = this;
        const o = function(s, a) {
            let l;
            if (typeof a != "object") {
                for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++)
                    c[f - 2] = arguments[f];
                l = i.options.overloadTranslationOptionHandler([s, a].concat(c))
            } else
                l = {
                    ...a
                };
            l.lng = l.lng || o.lng,
            l.lngs = l.lngs || o.lngs,
            l.ns = l.ns || o.ns,
            l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
            const d = i.options.keySeparator || ".";
            let m;
            return l.keyPrefix && Array.isArray(s) ? m = s.map(h => `${l.keyPrefix}${d}${h}`) : m = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s,
            i.t(m, l)
        };
        return typeof t == "string" ? o.lng = t : o.lngs = t,
        o.ns = n,
        o.keyPrefix = r,
        o
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = n.lng || this.resolvedLanguage || this.languages[0]
          , i = this.options ? this.options.fallbackLng : !1
          , o = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const s = (a, l) => {
            const u = this.services.backendConnector.state[`${a}|${l}`];
            return u === -1 || u === 2
        }
        ;
        if (n.precheck) {
            const a = n.precheck(this, s);
            if (a !== void 0)
                return a
        }
        return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)))
    }
    loadNamespaces(t, n) {
        const r = ko();
        return this.options.ns ? (typeof t == "string" && (t = [t]),
        t.forEach(i => {
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }
        ),
        this.loadResources(i => {
            r.resolve(),
            n && n(i)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    loadLanguages(t, n) {
        const r = ko();
        typeof t == "string" && (t = [t]);
        const i = this.options.preload || []
          , o = t.filter(s => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
        return o.length ? (this.options.preload = i.concat(o),
        this.loadResources(s => {
            r.resolve(),
            n && n(s)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
        !t)
            return "rtl";
        const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = this.services && this.services.languageUtils || new Lh(Ph());
        return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        return new us(t,n)
    }
    cloneInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : na;
        const r = t.forkResourceStore;
        r && delete t.forkResourceStore;
        const i = {
            ...this.options,
            ...t,
            isClone: !0
        }
          , o = new us(i);
        return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
        ["store", "services", "language"].forEach(a => {
            o[a] = this[a]
        }
        ),
        o.services = {
            ...this.services
        },
        o.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        r && (o.store = new Th(this.store.data,i),
        o.services.resourceStore = o.store),
        o.translator = new sl(o.services,i),
        o.translator.on("*", function(a) {
            for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
                u[c - 1] = arguments[c];
            o.emit(a, ...u)
        }),
        o.init(i, n),
        o.translator.options = i,
        o.translator.backendConnector.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        o
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const rt = us.createInstance();
rt.createInstance = us.createInstance;
rt.createInstance;
rt.dir;
rt.init;
rt.loadResources;
rt.reloadResources;
rt.use;
rt.changeLanguage;
rt.getFixedT;
const Kk = rt.t;
rt.exists;
rt.setDefaultNamespace;
rt.hasLoadedNamespace;
rt.loadNamespaces;
rt.loadLanguages;
const a6 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , l6 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , u6 = e => l6[e]
  , c6 = e => e.replace(a6, u6);
let Zc = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: c6
};
const f6 = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zc = {
        ...Zc,
        ...e
    }
}
  , Gk = () => Zc;
let C0;
const d6 = e => {
    C0 = e
}
  , Yk = () => C0
  , p6 = {
    type: "3rdParty",
    init(e) {
        f6(e.options.react),
        d6(e)
    }
}
  , h6 = "{{hours}} h {{minutes}} min"
  , m6 = {
    time: h6,
    "label_syndicate-join-confirmation": "Do you want to join “{{title}}”?",
    "label_syndicate-leave-confirmation": "Do you want to exit “{{title}}”?",
    "label_you-are-in-syndicate": "You’re a part of “{{title}}”",
    "label_voted-yes-count": "{{voted}} out of {{total}} members voted “Yes”"
}
  , g6 = "Вибрации"
  , y6 = "DAO"
  , v6 = "Задачи"
  , _6 = "Бусты"
  , S6 = "Уровень"
  , E6 = "{{hours}}ч {{minutes}}мин"
  , w6 = "Изменить"
  , C6 = "Вы"
  , k6 = "получи"
  , x6 = "Далее"
  , b6 = "Отправить"
  , T6 = {
    Vibrate: g6,
    DAO: y6,
    Tasks: v6,
    Boosts: _6,
    "DAO Profit:": "Прибыль DAO:",
    "Your progress:": "Ваш прогресс:",
    Level: S6,
    "Hold your finger here": "Положите палец на круг",
    "Time to Mega Farm: ": "Осталось до Мега Фарма: ",
    time: E6,
    "not set": "нет",
    "Congratulations!": "Поздравляем!",
    "You have reached level 2!": "Вы достигли уровня 2!",
    "Now it’s time to create a DAO and get more tokens, with friends.": "Теперь время создать DAO и получить больше токенов, с друзьями.",
    "Create a DAO": "Создать DAO",
    "DAO Settings": "Настройки DAO",
    "(local timezone)": "(местное время)",
    "Mega Farm time: ": "Время Мега Фарма: ",
    Change: w6,
    "You’re the owner": "Вы владелец",
    You: C6,
    "Leave the DAO": "Покинуть DAO",
    "Farm alone and": "Фарми один и",
    "Farm with 1 friend &": "Фарми с другом и",
    "Farm with 2 friends &": "Фарми с 2 друзьями и",
    get: k6,
    "What is Mega Farm?": "Что такое Мега Фарм",
    "Farm at Mega Farm time and get extra bonus!": "Фармить на Мега Фарм и получить дополнительный бонус!",
    "How does it work?": "Как это работает?",
    "Welcome at TONxDAO!": "Добро пожаловать в TONxDAO!",
    Next: x6,
    "Invite Friends and earn more!": "Приглашай друзей и зарабатывай больше!",
    "10% of earnings of your Invitees": "10% дохода от приглашенных вами",
    "will go to your profit": "прибавляется к вашей прибыли",
    "Send your Invite link:": "Ссылка для приглашения:",
    Send: b6,
    "Your Invited Friends:": "Ваши приглашенные друзья:",
    "Earned with Friends:": "Заработано с друзьями:",
    "label_syndicate-join-confirmation": "Хотите вступить в «{{title}}»?",
    "label_syndicate-leave-confirmation": "Хотите выйти из «{{title}}»?",
    "label_you-are-in-syndicate": "Вы состоите в «{{title}}»",
    "label_voted-yes-count": "{{voted}} из {{total}} проголосовали «Да»"
};
var k0 = {}
  , zl = {};
(function() {
    var e = {}
      , t = "";
    try {
        t = location.hash.toString()
    } catch {}
    var n = l(t)
      , r = g("initParams");
    if (r)
        for (var i in r)
            typeof n[i] > "u" && (n[i] = r[i]);
    k("initParams", n);
    var o = !1, s;
    try {
        if (o = window.parent != null && window != window.parent,
        o) {
            window.addEventListener("message", function(p) {
                if (p.source === window.parent) {
                    try {
                        var y = JSON.parse(p.data)
                    } catch {
                        return
                    }
                    if (!(!y || !y.eventType))
                        if (y.eventType == "set_custom_style")
                            p.origin === "https://web.telegram.org" && (s.innerHTML = y.eventData);
                        else if (y.eventType == "reload_iframe") {
                            try {
                                window.parent.postMessage(JSON.stringify({
                                    eventType: "iframe_will_reload"
                                }), "*")
                            } catch {}
                            location.reload()
                        } else
                            d(y.eventType, y.eventData)
                }
            }),
            s = document.createElement("style"),
            document.head.appendChild(s);
            try {
                window.parent.postMessage(JSON.stringify({
                    eventType: "iframe_ready",
                    eventData: {
                        reload_supported: !0
                    }
                }), "*")
            } catch {}
        }
    } catch {}
    function a(p) {
        try {
            return p = p.replace(/\+/g, "%20"),
            decodeURIComponent(p)
        } catch {
            return p
        }
    }
    function l(p) {
        p = p.replace(/^#/, "");
        var y = {};
        if (!p.length)
            return y;
        if (p.indexOf("=") < 0 && p.indexOf("?") < 0)
            return y._path = a(p),
            y;
        var E = p.indexOf("?");
        if (E >= 0) {
            var x = p.substr(0, E);
            y._path = a(x),
            p = p.substr(E + 1)
        }
        var b = u(p);
        for (var w in b)
            y[w] = b[w];
        return y
    }
    function u(p) {
        var y = {};
        if (!p.length)
            return y;
        var E = p.split("&"), x, b, w, I;
        for (x = 0; x < E.length; x++)
            b = E[x].split("="),
            w = a(b[0]),
            I = b[1] == null ? null : a(b[1]),
            y[w] = I;
        return y
    }
    function c(p, y) {
        var E = p.indexOf("#");
        if (E < 0)
            return p + "#" + y;
        var x = p.substr(E + 1);
        return x.indexOf("=") >= 0 || x.indexOf("?") >= 0 ? p + "&" + y : x.length > 0 ? p + "?" + y : p + y
    }
    function f(p, y, E) {
        if (y || (y = function() {}
        ),
        E === void 0 && (E = ""),
        console.log("[Telegram.WebView] > postEvent", p, E),
        window.TelegramWebviewProxy !== void 0)
            TelegramWebviewProxy.postEvent(p, JSON.stringify(E)),
            y();
        else if (window.external && "notify"in window.external)
            window.external.notify(JSON.stringify({
                eventType: p,
                eventData: E
            })),
            y();
        else if (o)
            try {
                var x = "https://web.telegram.org";
                x = "*",
                window.parent.postMessage(JSON.stringify({
                    eventType: p,
                    eventData: E
                }), x),
                y()
            } catch (b) {
                y(b)
            }
        else
            y({
                notAvailable: !0
            })
    }
    function d(p, y) {
        console.log("[Telegram.WebView] < receiveEvent", p, y),
        m(p, function(E) {
            E(p, y)
        })
    }
    function m(p, y) {
        var E = e[p];
        if (!(E === void 0 || !E.length))
            for (var x = 0; x < E.length; x++)
                try {
                    y(E[x])
                } catch {}
    }
    function h(p, y) {
        e[p] === void 0 && (e[p] = []);
        var E = e[p].indexOf(y);
        E === -1 && e[p].push(y)
    }
    function v(p, y) {
        if (e[p] !== void 0) {
            var E = e[p].indexOf(y);
            E !== -1 && e[p].splice(E, 1)
        }
    }
    function k(p, y) {
        try {
            return window.sessionStorage.setItem("__telegram__" + p, JSON.stringify(y)),
            !0
        } catch {}
        return !1
    }
    function g(p) {
        try {
            return JSON.parse(window.sessionStorage.getItem("__telegram__" + p))
        } catch {}
        return null
    }
    window.Telegram || (window.Telegram = {}),
    window.Telegram.WebView = {
        initParams: n,
        isIframe: o,
        onEvent: h,
        offEvent: v,
        postEvent: f,
        receiveEvent: d,
        callEventCallbacks: m
    },
    window.Telegram.Utils = {
        urlSafeDecode: a,
        urlParseQueryString: u,
        urlParseHashParams: l,
        urlAppendHashParams: c,
        sessionStorageSet: k,
        sessionStorageGet: g
    },
    window.TelegramGameProxy_receiveEvent = d,
    window.TelegramGameProxy = {
        receiveEvent: d
    }
}
)();
(function() {
    var e = window.Telegram.Utils
      , t = window.Telegram.WebView
      , n = t.initParams
      , r = t.isIframe
      , i = {}
      , o = ""
      , s = {}
      , a = {}
      , l = "light"
      , u = "6.0"
      , c = "unknown";
    if (n.tgWebAppData && n.tgWebAppData.length) {
        o = n.tgWebAppData,
        s = e.urlParseQueryString(o);
        for (var f in s) {
            var d = s[f];
            try {
                (d.substr(0, 1) == "{" && d.substr(-1) == "}" || d.substr(0, 1) == "[" && d.substr(-1) == "]") && (s[f] = JSON.parse(d))
            } catch {}
        }
    }
    if (n.tgWebAppThemeParams && n.tgWebAppThemeParams.length) {
        var m = n.tgWebAppThemeParams;
        try {
            var h = JSON.parse(m);
            h && W(h)
        } catch {}
    }
    var h = e.sessionStorageGet("themeParams");
    h && W(h),
    n.tgWebAppVersion && (u = n.tgWebAppVersion),
    n.tgWebAppPlatform && (c = n.tgWebAppPlatform);
    function v(_, S) {
        S.theme_params && (W(S.theme_params),
        window.Telegram.WebApp.MainButton.setParams({}),
        ti(),
        x("themeChanged"))
    }
    var k = window.innerHeight;
    function g(_, S) {
        S.height && (window.removeEventListener("resize", p),
        me(S))
    }
    function p(_) {
        k != window.innerHeight && (k = window.innerHeight,
        x("viewportChanged", {
            isStateStable: !0
        }))
    }
    function y(_) {
        if (!(_.metaKey || _.ctrlKey)) {
            for (var S = _.target; S.tagName != "A" && S.parentNode; )
                S = S.parentNode;
            S.tagName == "A" && S.target != "_blank" && (S.protocol == "http:" || S.protocol == "https:") && S.hostname == "t.me" && (i.openTgLink(S.href),
            _.preventDefault())
        }
    }
    function E(_) {
        return _.toString().replace(/^\s+|\s+$/g, "")
    }
    function x(_) {
        var S = Array.prototype.slice.call(arguments);
        _ = S.shift(),
        t.callEventCallbacks("webview:" + _, function(C) {
            C.apply(i, S)
        })
    }
    function b(_, S) {
        t.onEvent("webview:" + _, S)
    }
    function w(_, S) {
        t.offEvent("webview:" + _, S)
    }
    function I(_, S) {
        var C = document.documentElement;
        C && C.style && C.style.setProperty && C.style.setProperty("--tg-" + _, S)
    }
    function W(_) {
        _.bg_color == "#1c1c1d" && _.bg_color == _.secondary_bg_color && (_.secondary_bg_color = "#2c2c2e");
        var S;
        for (var C in _)
            (S = kr(_[C])) && (a[C] = S,
            C == "bg_color" && (l = gu(S) ? "dark" : "light",
            I("color-scheme", l)),
            C = "theme-" + C.split("_").join("-"),
            I(C, S));
        e.sessionStorageSet("themeParams", a)
    }
    var T = {};
    function D(_) {
        for (var S = 100; --S; ) {
            for (var C = "", R = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", O = R.length, Q = 0; Q < _; Q++)
                C += R[Math.floor(Math.random() * O)];
            if (!T[C])
                return T[C] = {},
                C
        }
        throw Error("WebAppCallbackIdGenerateFailed")
    }
    var z = !1
      , ee = !1
      , ne = !0;
    function me(_) {
        typeof _ < "u" && (ne = !!_.is_expanded,
        z = _.height,
        _.is_state_stable && (ee = _.height),
        x("viewportChanged", {
            isStateStable: !!_.is_state_stable
        }));
        var S, C;
        z !== !1 ? S = z - it + "px" : S = it ? "calc(100vh - " + it + "px)" : "100vh",
        ee !== !1 ? C = ee - it + "px" : C = it ? "calc(100vh - " + it + "px)" : "100vh",
        I("viewport-height", S),
        I("viewport-stable-height", C)
    }
    var H = !1;
    function _e(_) {
        if (!oe("6.2")) {
            console.warn("[Telegram.WebApp] Closing confirmation is not supported in version " + u);
            return
        }
        H = !!_,
        t.postEvent("web_app_setup_closing_behavior", !1, {
            need_confirmation: H
        })
    }
    var L = !0;
    function $(_) {
        if (!oe("7.7")) {
            console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version " + u);
            return
        }
        L = !!_,
        t.postEvent("web_app_setup_swipe_behavior", !1, {
            allow_vertical_swipe: L
        })
    }
    var j = "bg_color"
      , de = null;
    function Oe() {
        return j == "secondary_bg_color" ? a.secondary_bg_color : j == "bg_color" ? a.bg_color : de
    }
    function an(_) {
        if (!oe("6.1")) {
            console.warn("[Telegram.WebApp] Header color is not supported in version " + u);
            return
        }
        oe("6.9") || (a.bg_color && a.bg_color == _ ? _ = "bg_color" : a.secondary_bg_color && a.secondary_bg_color == _ && (_ = "secondary_bg_color"));
        var S = null
          , C = null;
        if (_ == "bg_color" || _ == "secondary_bg_color")
            C = _;
        else if (oe("6.9") && (S = kr(_),
        !S))
            throw console.error("[Telegram.WebApp] Header color format is invalid", _),
            Error("WebAppHeaderColorInvalid");
        if (!oe("6.9") && C != "bg_color" && C != "secondary_bg_color")
            throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'", _),
            Error("WebAppHeaderColorKeyInvalid");
        j = C,
        de = S,
        _t()
    }
    var ct = null
      , Yt = null;
    function _t() {
        (ct != j || Yt != de) && (ct = j,
        Yt = de,
        Yt ? t.postEvent("web_app_set_header_color", !1, {
            color: de
        }) : t.postEvent("web_app_set_header_color", !1, {
            color_key: j
        }))
    }
    var It = "bg_color";
    function ei() {
        return It == "secondary_bg_color" ? a.secondary_bg_color : It == "bg_color" ? a.bg_color : It
    }
    function Ds(_) {
        if (!oe("6.1")) {
            console.warn("[Telegram.WebApp] Background color is not supported in version " + u);
            return
        }
        var S;
        if (_ == "bg_color" || _ == "secondary_bg_color")
            S = _;
        else if (S = kr(_),
        !S)
            throw console.error("[Telegram.WebApp] Background color format is invalid", _),
            Error("WebAppBackgroundColorInvalid");
        It = S,
        ti()
    }
    var Cr = null;
    function ti() {
        var _ = ei();
        Cr != _ && (Cr = _,
        t.postEvent("web_app_set_background_color", !1, {
            color: _
        }))
    }
    function kr(_) {
        _ += "";
        var S;
        if (S = /^\s*#([0-9a-f]{6})\s*$/i.exec(_))
            return "#" + S[1].toLowerCase();
        if (S = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(_))
            return ("#" + S[1] + S[1] + S[2] + S[2] + S[3] + S[3]).toLowerCase();
        if (S = /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(_)) {
            var C = parseInt(S[1])
              , R = parseInt(S[2])
              , O = parseInt(S[3]);
            return C = (C < 16 ? "0" : "") + C.toString(16),
            R = (R < 16 ? "0" : "") + R.toString(16),
            O = (O < 16 ? "0" : "") + O.toString(16),
            "#" + C + R + O
        }
        return !1
    }
    function gu(_) {
        _ = _.replace(/[\s#]/g, ""),
        _.length == 3 && (_ = _[0] + _[0] + _[1] + _[1] + _[2] + _[2]);
        var S = parseInt(_.substr(0, 2), 16)
          , C = parseInt(_.substr(2, 2), 16)
          , R = parseInt(_.substr(4, 2), 16)
          , O = Math.sqrt(.299 * (S * S) + .587 * (C * C) + .114 * (R * R));
        return O < 120
    }
    function Sn(_, S) {
        typeof _ != "string" && (_ = ""),
        typeof S != "string" && (S = ""),
        _ = _.replace(/^\s+|\s+$/g, "").split("."),
        S = S.replace(/^\s+|\s+$/g, "").split(".");
        var C = Math.max(_.length, S.length), R, O, Q;
        for (R = 0; R < C; R++)
            if (O = parseInt(_[R]) || 0,
            Q = parseInt(S[R]) || 0,
            O != Q)
                return O > Q ? 1 : -1;
        return 0
    }
    function oe(_) {
        return Sn(u, _) >= 0
    }
    function lo(_) {
        if (window.Blob)
            try {
                return new Blob([_]).size
            } catch {}
        for (var S = _.length, C = _.length - 1; C >= 0; C--) {
            var R = _.charCodeAt(C);
            R > 127 && R <= 2047 ? S++ : R > 2047 && R <= 65535 && (S += 2),
            R >= 56320 && R <= 57343 && C--
        }
        return S
    }
    var uo = function() {
        var _ = !1
          , S = {};
        Object.defineProperty(S, "isVisible", {
            set: function(G) {
                ae({
                    is_visible: G
                })
            },
            get: function() {
                return _
            },
            enumerable: !0
        });
        var C = null;
        t.onEvent("back_button_pressed", R);
        function R() {
            x("backButtonClicked")
        }
        function O() {
            return {
                is_visible: _
            }
        }
        function Q(G) {
            return typeof G > "u" && (G = O()),
            JSON.stringify(G)
        }
        function U() {
            return oe("6.1") ? !0 : (console.warn("[Telegram.WebApp] BackButton is not supported in version " + u),
            !1)
        }
        function K() {
            var G = O()
              , ke = Q(G);
            C !== ke && (C = ke,
            t.postEvent("web_app_setup_back_button", !1, G))
        }
        function ae(G) {
            return U() && (typeof G.is_visible < "u" && (_ = !!G.is_visible),
            K()),
            S
        }
        return S.onClick = function(G) {
            return U() && b("backButtonClicked", G),
            S
        }
        ,
        S.offClick = function(G) {
            return U() && w("backButtonClicked", G),
            S
        }
        ,
        S.show = function() {
            return ae({
                is_visible: !0
            })
        }
        ,
        S.hide = function() {
            return ae({
                is_visible: !1
            })
        }
        ,
        S
    }()
      , it = 0
      , co = function() {
        var _ = !1
          , S = !0
          , C = !1
          , R = "CONTINUE"
          , O = !1
          , Q = !1
          , U = {};
        Object.defineProperty(U, "text", {
            set: function(M) {
                U.setParams({
                    text: M
                })
            },
            get: function() {
                return R
            },
            enumerable: !0
        }),
        Object.defineProperty(U, "color", {
            set: function(M) {
                U.setParams({
                    color: M
                })
            },
            get: function() {
                return O || a.button_color || "#2481cc"
            },
            enumerable: !0
        }),
        Object.defineProperty(U, "textColor", {
            set: function(M) {
                U.setParams({
                    text_color: M
                })
            },
            get: function() {
                return Q || a.button_text_color || "#ffffff"
            },
            enumerable: !0
        }),
        Object.defineProperty(U, "isVisible", {
            set: function(M) {
                U.setParams({
                    is_visible: M
                })
            },
            get: function() {
                return _
            },
            enumerable: !0
        }),
        Object.defineProperty(U, "isProgressVisible", {
            get: function() {
                return C
            },
            enumerable: !0
        }),
        Object.defineProperty(U, "isActive", {
            set: function(M) {
                U.setParams({
                    is_active: M
                })
            },
            get: function() {
                return S
            },
            enumerable: !0
        });
        var K = null;
        t.onEvent("main_button_pressed", St);
        var ae = null
          , G = {};
        if (n.tgWebAppDebug) {
            ae = document.createElement("tg-main-button"),
            G = {
                font: "600 14px/18px sans-serif",
                display: "none",
                width: "100%",
                height: "48px",
                borderRadius: "0",
                background: "no-repeat right center",
                position: "fixed",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "0",
                padding: "15px 20px",
                textAlign: "center",
                boxSizing: "border-box",
                zIndex: "10000"
            };
            for (var ke in G)
                ae.style[ke] = G[ke];
            document.addEventListener("DOMContentLoaded", function M(ge) {
                document.removeEventListener("DOMContentLoaded", M),
                document.body.appendChild(ae),
                ae.addEventListener("click", St, !1)
            })
        }
        function St() {
            S && x("mainButtonClicked")
        }
        function Fs() {
            var M = U.color
              , ge = U.textColor;
            return _ ? {
                is_visible: !0,
                is_active: S,
                is_progress_visible: C,
                text: R,
                color: M,
                text_color: ge
            } : {
                is_visible: !1
            }
        }
        function vu(M) {
            return typeof M > "u" && (M = Fs()),
            JSON.stringify(M)
        }
        function ho() {
            var M = Fs()
              , ge = vu(M);
            K !== ge && (K = ge,
            t.postEvent("web_app_setup_main_button", !1, M),
            n.tgWebAppDebug && Tr(M))
        }
        function Tr(M) {
            M.is_visible ? (ae.style.display = "block",
            it = 48,
            ae.style.opacity = M.is_active ? "1" : "0.8",
            ae.style.cursor = M.is_active ? "pointer" : "auto",
            ae.disabled = !M.is_active,
            ae.innerText = M.text,
            ae.style.backgroundImage = M.is_progress_visible ? "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')" : "none",
            ae.style.backgroundColor = M.color,
            ae.style.color = M.text_color) : (ae.style.display = "none",
            it = 0),
            document.documentElement && (document.documentElement.style.boxSizing = "border-box",
            document.documentElement.style.paddingBottom = it + "px"),
            me()
        }
        function ni(M) {
            if (typeof M.text < "u") {
                var ge = E(M.text);
                if (!ge.length)
                    throw console.error("[Telegram.WebApp] Main button text is required", M.text),
                    Error("WebAppMainButtonParamInvalid");
                if (ge.length > 64)
                    throw console.error("[Telegram.WebApp] Main button text is too long", ge),
                    Error("WebAppMainButtonParamInvalid");
                R = ge
            }
            if (typeof M.color < "u")
                if (M.color === !1 || M.color === null)
                    O = !1;
                else {
                    var Fe = kr(M.color);
                    if (!Fe)
                        throw console.error("[Telegram.WebApp] Main button color format is invalid", M.color),
                        Error("WebAppMainButtonParamInvalid");
                    O = Fe
                }
            if (typeof M.text_color < "u")
                if (M.text_color === !1 || M.text_color === null)
                    Q = !1;
                else {
                    var Be = kr(M.text_color);
                    if (!Be)
                        throw console.error("[Telegram.WebApp] Main button text color format is invalid", M.text_color),
                        Error("WebAppMainButtonParamInvalid");
                    Q = Be
                }
            if (typeof M.is_visible < "u") {
                if (M.is_visible && !U.text.length)
                    throw console.error("[Telegram.WebApp] Main button text is required"),
                    Error("WebAppMainButtonParamInvalid");
                _ = !!M.is_visible
            }
            return typeof M.is_active < "u" && (S = !!M.is_active),
            ho(),
            U
        }
        return U.setText = function(M) {
            return U.setParams({
                text: M
            })
        }
        ,
        U.onClick = function(M) {
            return b("mainButtonClicked", M),
            U
        }
        ,
        U.offClick = function(M) {
            return w("mainButtonClicked", M),
            U
        }
        ,
        U.show = function() {
            return U.setParams({
                is_visible: !0
            })
        }
        ,
        U.hide = function() {
            return U.setParams({
                is_visible: !1
            })
        }
        ,
        U.enable = function() {
            return U.setParams({
                is_active: !0
            })
        }
        ,
        U.disable = function() {
            return U.setParams({
                is_active: !1
            })
        }
        ,
        U.showProgress = function(M) {
            return S = !!M,
            C = !0,
            ho(),
            U
        }
        ,
        U.hideProgress = function() {
            return U.isActive || (S = !0),
            C = !1,
            ho(),
            U
        }
        ,
        U.setParams = ni,
        U
    }()
      , ce = function() {
        var _ = !1
          , S = {};
        Object.defineProperty(S, "isVisible", {
            set: function(G) {
                ae({
                    is_visible: G
                })
            },
            get: function() {
                return _
            },
            enumerable: !0
        });
        var C = null;
        t.onEvent("settings_button_pressed", R);
        function R() {
            x("settingsButtonClicked")
        }
        function O() {
            return {
                is_visible: _
            }
        }
        function Q(G) {
            return typeof G > "u" && (G = O()),
            JSON.stringify(G)
        }
        function U() {
            return oe("6.10") ? !0 : (console.warn("[Telegram.WebApp] SettingsButton is not supported in version " + u),
            !1)
        }
        function K() {
            var G = O()
              , ke = Q(G);
            C !== ke && (C = ke,
            t.postEvent("web_app_setup_settings_button", !1, G))
        }
        function ae(G) {
            return U() && (typeof G.is_visible < "u" && (_ = !!G.is_visible),
            K()),
            S
        }
        return S.onClick = function(G) {
            return U() && b("settingsButtonClicked", G),
            S
        }
        ,
        S.offClick = function(G) {
            return U() && w("settingsButtonClicked", G),
            S
        }
        ,
        S.show = function() {
            return ae({
                is_visible: !0
            })
        }
        ,
        S.hide = function() {
            return ae({
                is_visible: !1
            })
        }
        ,
        S
    }()
      , Lt = function() {
        var _ = {};
        function S(C) {
            if (!oe("6.1"))
                return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version " + u),
                _;
            if (C.type == "impact") {
                if (C.impact_style != "light" && C.impact_style != "medium" && C.impact_style != "heavy" && C.impact_style != "rigid" && C.impact_style != "soft")
                    throw console.error("[Telegram.WebApp] Haptic impact style is invalid", C.impact_style),
                    Error("WebAppHapticImpactStyleInvalid")
            } else if (C.type == "notification") {
                if (C.notification_type != "error" && C.notification_type != "success" && C.notification_type != "warning")
                    throw console.error("[Telegram.WebApp] Haptic notification type is invalid", C.notification_type),
                    Error("WebAppHapticNotificationTypeInvalid")
            } else if (C.type != "selection_change")
                throw console.error("[Telegram.WebApp] Haptic feedback type is invalid", C.type),
                Error("WebAppHapticFeedbackTypeInvalid");
            return t.postEvent("web_app_trigger_haptic_feedback", !1, C),
            _
        }
        return _.impactOccurred = function(C) {
            return S({
                type: "impact",
                impact_style: C
            })
        }
        ,
        _.notificationOccurred = function(C) {
            return S({
                type: "notification",
                notification_type: C
            })
        }
        ,
        _.selectionChanged = function() {
            return S({
                type: "selection_change"
            })
        }
        ,
        _
    }()
      , se = function() {
        var _ = {};
        function S(C, R, O) {
            if (!oe("6.9"))
                throw console.error("[Telegram.WebApp] CloudStorage is not supported in version " + u),
                Error("WebAppMethodUnsupported");
            return yu(C, R, O),
            _
        }
        return _.setItem = function(C, R, O) {
            return S("saveStorageValue", {
                key: C,
                value: R
            }, O)
        }
        ,
        _.getItem = function(C, R) {
            return _.getItems([C], R ? function(O, Q) {
                O ? R(O) : R(null, Q[C])
            }
            : null)
        }
        ,
        _.getItems = function(C, R) {
            return S("getStorageValues", {
                keys: C
            }, R)
        }
        ,
        _.removeItem = function(C, R) {
            return _.removeItems([C], R)
        }
        ,
        _.removeItems = function(C, R) {
            return S("deleteStorageValues", {
                keys: C
            }, R)
        }
        ,
        _.getKeys = function(C) {
            return S("getStorageKeys", {}, C)
        }
        ,
        _
    }()
      , Ce = function() {
        var _ = !1
          , S = !1
          , C = "unknown"
          , R = !1
          , O = !1
          , Q = !1
          , U = ""
          , K = {};
        Object.defineProperty(K, "isInited", {
            get: function() {
                return _
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "isBiometricAvailable", {
            get: function() {
                return _ && S
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "biometricType", {
            get: function() {
                return C || "unknown"
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "isAccessRequested", {
            get: function() {
                return R
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "isAccessGranted", {
            get: function() {
                return R && O
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "isBiometricTokenSaved", {
            get: function() {
                return Q
            },
            enumerable: !0
        }),
        Object.defineProperty(K, "deviceId", {
            get: function() {
                return U || ""
            },
            enumerable: !0
        });
        var ae = {
            callbacks: []
        }
          , G = !1
          , ke = !1
          , St = !1;
        t.onEvent("biometry_info_received", Fs),
        t.onEvent("biometry_auth_requested", vu),
        t.onEvent("biometry_token_updated", ho);
        function Fs(M, ge) {
            if (_ = !0,
            ge.available ? (S = !0,
            C = ge.type || "unknown",
            ge.access_requested ? (R = !0,
            O = !!ge.access_granted,
            Q = !!ge.token_saved) : (R = !1,
            O = !1,
            Q = !1)) : (S = !1,
            C = "unknown",
            R = !1,
            O = !1,
            Q = !1),
            U = ge.device_id || "",
            ae.callbacks.length > 0)
                for (var Fe = 0; Fe < ae.callbacks.length; Fe++) {
                    var Be = ae.callbacks[Fe];
                    Be()
                }
            if (G) {
                var mo = G;
                G = !1,
                mo.callback && mo.callback(O)
            }
            x("biometricManagerUpdated")
        }
        function vu(M, ge) {
            var Fe = ge.status == "authorized"
              , Be = ge.token || "";
            if (ke) {
                var mo = ke;
                ke = !1,
                mo.callback && mo.callback(Fe, Fe ? Be : null)
            }
            x("biometricAuthRequested", Fe ? {
                isAuthenticated: !0,
                biometricToken: Be
            } : {
                isAuthenticated: !1
            })
        }
        function ho(M, ge) {
            var Fe = !1;
            if (S && R && (ge.status == "updated" ? (Q = !0,
            Fe = !0) : ge.status == "removed" && (Q = !1,
            Fe = !0)),
            St) {
                var Be = St;
                St = !1,
                Be.callback && Be.callback(Fe)
            }
            x("biometricTokenUpdated", {
                isUpdated: Fe
            })
        }
        function Tr() {
            return oe("7.2") ? !0 : (console.warn("[Telegram.WebApp] BiometricManager is not supported in version " + u),
            !1)
        }
        function ni() {
            if (!_)
                throw console.error("[Telegram.WebApp] BiometricManager should be inited before using."),
                Error("WebAppBiometricManagerNotInited");
            return !0
        }
        return K.init = function(M) {
            return !Tr() || _ || (M && ae.callbacks.push(M),
            t.postEvent("web_app_biometry_get_info", !1)),
            K
        }
        ,
        K.requestAccess = function(M, ge) {
            if (!Tr())
                return K;
            if (ni(),
            !S)
                throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),
                Error("WebAppBiometricManagerBiometricsNotAvailable");
            if (G)
                throw console.error("[Telegram.WebApp] Access is already requested"),
                Error("WebAppBiometricManagerAccessRequested");
            var Fe = {};
            if (typeof M.reason < "u") {
                var Be = E(M.reason);
                if (Be.length > 128)
                    throw console.error("[Telegram.WebApp] Biometric reason is too long", Be),
                    Error("WebAppBiometricRequestAccessParamInvalid");
                Be.length > 0 && (Fe.reason = Be)
            }
            return G = {
                callback: ge
            },
            t.postEvent("web_app_biometry_request_access", !1, Fe),
            K
        }
        ,
        K.authenticate = function(M, ge) {
            if (!Tr())
                return K;
            if (ni(),
            !S)
                throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),
                Error("WebAppBiometricManagerBiometricsNotAvailable");
            if (!O)
                throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),
                Error("WebAppBiometricManagerBiometricAccessNotGranted");
            if (ke)
                throw console.error("[Telegram.WebApp] Authentication request is already in progress."),
                Error("WebAppBiometricManagerAuthenticationRequested");
            var Fe = {};
            if (typeof M.reason < "u") {
                var Be = E(M.reason);
                if (Be.length > 128)
                    throw console.error("[Telegram.WebApp] Biometric reason is too long", Be),
                    Error("WebAppBiometricRequestAccessParamInvalid");
                Be.length > 0 && (Fe.reason = Be)
            }
            return ke = {
                callback: ge
            },
            t.postEvent("web_app_biometry_request_auth", !1, Fe),
            K
        }
        ,
        K.updateBiometricToken = function(M, ge) {
            if (!Tr())
                return K;
            if (M = M || "",
            M.length > 1024)
                throw console.error("[Telegram.WebApp] Token is too long", M),
                Error("WebAppBiometricManagerTokenInvalid");
            if (ni(),
            !S)
                throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),
                Error("WebAppBiometricManagerBiometricsNotAvailable");
            if (!O)
                throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),
                Error("WebAppBiometricManagerBiometricAccessNotGranted");
            if (St)
                throw console.error("[Telegram.WebApp] Token request is already in progress."),
                Error("WebAppBiometricManagerTokenUpdateRequested");
            return St = {
                callback: ge
            },
            t.postEvent("web_app_biometry_update_token", !1, {
                token: M
            }),
            K
        }
        ,
        K.openSettings = function() {
            if (!Tr())
                return K;
            if (ni(),
            !S)
                throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),
                Error("WebAppBiometricManagerBiometricsNotAvailable");
            if (!R)
                throw console.error("[Telegram.WebApp] Biometric access was not requested yet."),
                Error("WebAppBiometricManagerBiometricsAccessNotRequested");
            return O ? (console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings."),
            K) : (t.postEvent("web_app_biometry_open_settings", !1),
            K)
        }
        ,
        K
    }()
      , re = {};
    function En(_, S) {
        if (S.slug && re[S.slug]) {
            var C = re[S.slug];
            delete re[S.slug],
            C.callback && C.callback(S.status),
            x("invoiceClosed", {
                url: C.url,
                status: S.status
            })
        }
    }
    var xr = !1;
    function ev(_, S) {
        if (xr) {
            var C = xr;
            xr = !1;
            var R = null;
            typeof S.button_id < "u" && (R = S.button_id),
            C.callback && C.callback(R),
            x("popupClosed", {
                button_id: R
            })
        }
    }
    var br = !1;
    function tv(_, S) {
        if (br) {
            var C = br
              , R = null;
            typeof S.data < "u" && (R = S.data),
            C.callback && C.callback(R) && (br = !1,
            t.postEvent("web_app_close_scan_qr_popup", !1)),
            x("qrTextReceived", {
                data: R
            })
        }
    }
    function nv(_, S) {
        br = !1,
        x("scanQrPopupClosed")
    }
    function rv(_, S) {
        if (S.req_id && T[S.req_id]) {
            var C = T[S.req_id];
            delete T[S.req_id];
            var R = null;
            typeof S.data < "u" && (R = S.data),
            C.callback && C.callback(R),
            x("clipboardTextReceived", {
                data: R
            })
        }
    }
    var fo = !1;
    function iv(_, S) {
        if (fo) {
            var C = fo;
            fo = !1,
            C.callback && C.callback(S.status == "allowed"),
            x("writeAccessRequested", {
                status: S.status
            })
        }
    }
    function ov(_, S) {
        var C, R, O = 0, Q = function() {
            yu("getRequestedContact", {}, function(K, ae) {
                ae && ae.length ? (clearTimeout(R),
                _(ae)) : (O += 50,
                C = setTimeout(Q, O))
            })
        }, U = function() {
            clearTimeout(C),
            _("")
        };
        R = setTimeout(U, S),
        Q()
    }
    var po = !1;
    function sv(_, S) {
        if (po) {
            var C = po;
            po = !1;
            var R = S.status == "sent"
              , O = {
                status: S.status
            };
            R ? ov(function(Q) {
                if (Q && Q.length) {
                    O.response = Q,
                    O.responseUnsafe = e.urlParseQueryString(Q);
                    for (var U in O.responseUnsafe) {
                        var K = O.responseUnsafe[U];
                        try {
                            (K.substr(0, 1) == "{" && K.substr(-1) == "}" || K.substr(0, 1) == "[" && K.substr(-1) == "]") && (O.responseUnsafe[U] = JSON.parse(K))
                        } catch {}
                    }
                }
                C.callback && C.callback(R, O),
                x("contactRequested", O)
            }, 3e3) : (C.callback && C.callback(R, O),
            x("contactRequested", O))
        }
    }
    function av(_, S) {
        if (S.req_id && T[S.req_id]) {
            var C = T[S.req_id];
            delete T[S.req_id];
            var R = null
              , O = null;
            typeof S.result < "u" && (R = S.result),
            typeof S.error < "u" && (O = S.error),
            C.callback && C.callback(O, R)
        }
    }
    function yu(_, S, C) {
        if (!oe("6.9"))
            throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        var R = D(16)
          , O = {
            req_id: R,
            method: _,
            params: S || {}
        };
        T[R] = {
            callback: C
        },
        t.postEvent("web_app_invoke_custom_method", !1, O)
    }
    window.Telegram || (window.Telegram = {}),
    Object.defineProperty(i, "initData", {
        get: function() {
            return o
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "initDataUnsafe", {
        get: function() {
            return s
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "version", {
        get: function() {
            return u
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "platform", {
        get: function() {
            return 'ios'
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "colorScheme", {
        get: function() {
            return l
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "themeParams", {
        get: function() {
            return a
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "isExpanded", {
        get: function() {
            return ne
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "viewportHeight", {
        get: function() {
            return (z === !1 ? window.innerHeight : z) - it
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "viewportStableHeight", {
        get: function() {
            return (ee === !1 ? window.innerHeight : ee) - it
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "isClosingConfirmationEnabled", {
        set: function(_) {
            _e(_)
        },
        get: function() {
            return H
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "isVerticalSwipesEnabled", {
        set: function(_) {
            $(_)
        },
        get: function() {
            return L
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "headerColor", {
        set: function(_) {
            an(_)
        },
        get: function() {
            return Oe()
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "backgroundColor", {
        set: function(_) {
            Ds(_)
        },
        get: function() {
            return ei()
        },
        enumerable: !0
    }),
    Object.defineProperty(i, "BackButton", {
        value: uo,
        enumerable: !0
    }),
    Object.defineProperty(i, "MainButton", {
        value: co,
        enumerable: !0
    }),
    Object.defineProperty(i, "SettingsButton", {
        value: ce,
        enumerable: !0
    }),
    Object.defineProperty(i, "HapticFeedback", {
        value: Lt,
        enumerable: !0
    }),
    Object.defineProperty(i, "CloudStorage", {
        value: se,
        enumerable: !0
    }),
    Object.defineProperty(i, "BiometricManager", {
        value: Ce,
        enumerable: !0
    }),
    i.setHeaderColor = function(_) {
        i.headerColor = _
    }
    ,
    i.setBackgroundColor = function(_) {
        i.backgroundColor = _
    }
    ,
    i.enableClosingConfirmation = function() {
        i.isClosingConfirmationEnabled = !0
    }
    ,
    i.disableClosingConfirmation = function() {
        i.isClosingConfirmationEnabled = !1
    }
    ,
    i.enableVerticalSwipes = function() {
        i.isVerticalSwipesEnabled = !0
    }
    ,
    i.disableVerticalSwipes = function() {
        i.isVerticalSwipesEnabled = !1
    }
    ,
    i.isVersionAtLeast = function(_) {
        return oe(_)
    }
    ,
    i.onEvent = function(_, S) {
        b(_, S)
    }
    ,
    i.offEvent = function(_, S) {
        w(_, S)
    }
    ,
    i.sendData = function(_) {
        if (!_ || !_.length)
            throw console.error("[Telegram.WebApp] Data is required", _),
            Error("WebAppDataInvalid");
        if (lo(_) > 4096)
            throw console.error("[Telegram.WebApp] Data is too long", _),
            Error("WebAppDataInvalid");
        t.postEvent("web_app_data_send", !1, {
            data: _
        })
    }
    ,
    i.switchInlineQuery = function(_, S) {
        if (!oe("6.6"))
            throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (!n.tgWebAppBotInline)
            throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),
            Error("WebAppInlineModeDisabled");
        if (_ = _ || "",
        _.length > 256)
            throw console.error("[Telegram.WebApp] Inline query is too long", _),
            Error("WebAppInlineQueryInvalid");
        var C = [];
        if (S) {
            if (!Array.isArray(S))
                throw console.error("[Telegram.WebApp] Choose chat types should be an array", S),
                Error("WebAppInlineChooseChatTypesInvalid");
            for (var R = {
                users: 1,
                bots: 1,
                groups: 1,
                channels: 1
            }, O = 0; O < S.length; O++) {
                var Q = S[O];
                if (!R[Q])
                    throw console.error("[Telegram.WebApp] Choose chat type is invalid", Q),
                    Error("WebAppInlineChooseChatTypeInvalid");
                R[Q] != 2 && (R[Q] = 2,
                C.push(Q))
            }
        }
        t.postEvent("web_app_switch_inline_query", !1, {
            query: _,
            chat_types: C
        })
    }
    ,
    i.openLink = function(R, S) {
        var C = document.createElement("A");
        if (C.href = R,
        C.protocol != "http:" && C.protocol != "https:")
            throw console.error("[Telegram.WebApp] Url protocol is not supported", R),
            Error("WebAppTgUrlInvalid");
        var R = C.href;
        if (S = S || {},
        oe("6.1")) {
            var O = {
                url: R
            };
            oe("6.4") && S.try_instant_view && (O.try_instant_view = !0),
            oe("7.6") && S.try_browser && (O.try_browser = S.try_browser),
            t.postEvent("web_app_open_link", !1, O)
        } else
            window.open(R, "_blank")
    }
    ,
    i.openTelegramLink = function(_) {
        var S = document.createElement("A");
        if (S.href = _,
        S.protocol != "http:" && S.protocol != "https:")
            throw console.error("[Telegram.WebApp] Url protocol is not supported", _),
            Error("WebAppTgUrlInvalid");
        if (S.hostname != "t.me")
            throw console.error("[Telegram.WebApp] Url host is not supported", _),
            Error("WebAppTgUrlInvalid");
        var C = S.pathname + S.search;
        r || oe("6.1") ? t.postEvent("web_app_open_tg_link", !1, {
            path_full: C
        }) : location.href = "https://t.me" + C
    }
    ,
    i.openInvoice = function(_, S) {
        var C = document.createElement("A"), R, O;
        if (C.href = _,
        C.protocol != "http:" && C.protocol != "https:" || C.hostname != "t.me" || !(R = C.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/)) || !(O = R[2]))
            throw console.error("[Telegram.WebApp] Invoice url is invalid", _),
            Error("WebAppInvoiceUrlInvalid");
        if (!oe("6.1"))
            throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (re[O])
            throw console.error("[Telegram.WebApp] Invoice is already opened"),
            Error("WebAppInvoiceOpened");
        re[O] = {
            url: _,
            callback: S
        },
        t.postEvent("web_app_open_invoice", !1, {
            slug: O
        })
    }
    ,
    i.showPopup = function(_, S) {
        if (!oe("6.2"))
            throw console.error("[Telegram.WebApp] Method showPopup is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (xr)
            throw console.error("[Telegram.WebApp] Popup is already opened"),
            Error("WebAppPopupOpened");
        var C = ""
          , R = ""
          , O = []
          , Q = {};
        if (typeof _.title < "u") {
            if (C = E(_.title),
            C.length > 64)
                throw console.error("[Telegram.WebApp] Popup title is too long", C),
                Error("WebAppPopupParamInvalid");
            C.length > 0 && (Q.title = C)
        }
        if (typeof _.message < "u" && (R = E(_.message)),
        !R.length)
            throw console.error("[Telegram.WebApp] Popup message is required", _.message),
            Error("WebAppPopupParamInvalid");
        if (R.length > 256)
            throw console.error("[Telegram.WebApp] Popup message is too long", R),
            Error("WebAppPopupParamInvalid");
        if (Q.message = R,
        typeof _.buttons < "u") {
            if (!Array.isArray(_.buttons))
                throw console.error("[Telegram.WebApp] Popup buttons should be an array", _.buttons),
                Error("WebAppPopupParamInvalid");
            for (var U = 0; U < _.buttons.length; U++) {
                var K = _.buttons[U]
                  , ae = {}
                  , G = "";
                if (typeof K.id < "u" && (G = K.id.toString(),
                G.length > 64))
                    throw console.error("[Telegram.WebApp] Popup button id is too long", G),
                    Error("WebAppPopupParamInvalid");
                ae.id = G;
                var ke = K.type;
                if (typeof ke > "u" && (ke = "default"),
                ae.type = ke,
                !(ke == "ok" || ke == "close" || ke == "cancel"))
                    if (ke == "default" || ke == "destructive") {
                        var St = "";
                        if (typeof K.text < "u" && (St = E(K.text)),
                        !St.length)
                            throw console.error("[Telegram.WebApp] Popup button text is required for type " + ke, K.text),
                            Error("WebAppPopupParamInvalid");
                        if (St.length > 64)
                            throw console.error("[Telegram.WebApp] Popup button text is too long", St),
                            Error("WebAppPopupParamInvalid");
                        ae.text = St
                    } else
                        throw console.error("[Telegram.WebApp] Popup button type is invalid", ke),
                        Error("WebAppPopupParamInvalid");
                O.push(ae)
            }
        } else
            O.push({
                id: "",
                type: "close"
            });
        if (O.length < 1)
            throw console.error("[Telegram.WebApp] Popup should have at least one button"),
            Error("WebAppPopupParamInvalid");
        if (O.length > 3)
            throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),
            Error("WebAppPopupParamInvalid");
        Q.buttons = O,
        xr = {
            callback: S
        },
        t.postEvent("web_app_open_popup", !1, Q)
    }
    ,
    i.showAlert = function(_, S) {
        i.showPopup({
            message: _
        }, S ? function() {
            S()
        }
        : null)
    }
    ,
    i.showConfirm = function(_, S) {
        i.showPopup({
            message: _,
            buttons: [{
                type: "ok",
                id: "ok"
            }, {
                type: "cancel"
            }]
        }, S ? function(C) {
            S(C == "ok")
        }
        : null)
    }
    ,
    i.showScanQrPopup = function(_, S) {
        if (!oe("6.4"))
            throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (br)
            throw console.error("[Telegram.WebApp] Popup is already opened"),
            Error("WebAppScanQrPopupOpened");
        var C = ""
          , R = {};
        if (typeof _.text < "u") {
            if (C = E(_.text),
            C.length > 64)
                throw console.error("[Telegram.WebApp] Scan QR popup text is too long", C),
                Error("WebAppScanQrPopupParamInvalid");
            C.length > 0 && (R.text = C)
        }
        br = {
            callback: S
        },
        t.postEvent("web_app_open_scan_qr_popup", !1, R)
    }
    ,
    i.closeScanQrPopup = function() {
        if (!oe("6.4"))
            throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        br = !1,
        t.postEvent("web_app_close_scan_qr_popup", !1)
    }
    ,
    i.readTextFromClipboard = function(_) {
        if (!oe("6.4"))
            throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        var S = D(16)
          , C = {
            req_id: S
        };
        T[S] = {
            callback: _
        },
        t.postEvent("web_app_read_text_from_clipboard", !1, C)
    }
    ,
    i.requestWriteAccess = function(_) {
        if (!oe("6.9"))
            throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (fo)
            throw console.error("[Telegram.WebApp] Write access is already requested"),
            Error("WebAppWriteAccessRequested");
        fo = {
            callback: _
        },
        t.postEvent("web_app_request_write_access")
    }
    ,
    i.requestContact = function(_) {
        if (!oe("6.9"))
            throw console.error("[Telegram.WebApp] Method requestContact is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        if (po)
            throw console.error("[Telegram.WebApp] Contact is already requested"),
            Error("WebAppContactRequested");
        po = {
            callback: _
        },
        t.postEvent("web_app_request_phone")
    }
    ,
    i.shareToStory = function(_, S) {
        if (S = S || {},
        !oe("7.8"))
            throw console.error("[Telegram.WebApp] Method shareToStory is not supported in version " + u),
            Error("WebAppMethodUnsupported");
        var C = document.createElement("A");
        if (C.href = _,
        C.protocol != "http:" && C.protocol != "https:")
            throw console.error("[Telegram.WebApp] Media url protocol is not supported", url),
            Error("WebAppMediaUrlInvalid");
        var R = {};
        if (R.media_url = C.href,
        typeof S.text < "u") {
            var O = E(S.text);
            if (O.length > 2048)
                throw console.error("[Telegram.WebApp] Text is too long", O),
                Error("WebAppShareToStoryParamInvalid");
            O.length > 0 && (R.text = O)
        }
        if (typeof S.widget_link < "u") {
            if (S.widget_link = S.widget_link || {},
            C.href = S.widget_link.url,
            C.protocol != "http:" && C.protocol != "https:")
                throw console.error("[Telegram.WebApp] Link protocol is not supported", url),
                Error("WebAppShareToStoryParamInvalid");
            var Q = {
                url: C.href
            };
            if (typeof S.widget_link.name < "u") {
                var U = E(S.widget_link.name);
                if (U.length > 48)
                    throw console.error("[Telegram.WebApp] Link name is too long", U),
                    Error("WebAppShareToStoryParamInvalid");
                U.length > 0 && (Q.name = U)
            }
            R.widget_link = Q
        }
        t.postEvent("web_app_share_to_story", !1, R)
    }
    ,
    i.invokeCustomMethod = function(_, S, C) {
        yu(_, S, C)
    }
    ,
    i.ready = function() {
        t.postEvent("web_app_ready")
    }
    ,
    i.expand = function() {
        t.postEvent("web_app_expand")
    }
    ,
    i.close = function(_) {
        _ = _ || {};
        var S = {};
        oe("7.6") && _.return_back && (S.return_back = !0),
        t.postEvent("web_app_close", !1, S)
    }
    ,
    window.Telegram.WebApp = i,
    _t(),
    ti(),
    me(),
    n.tgWebAppShowSettings && ce.show(),
    window.addEventListener("resize", p),
    r && document.addEventListener("click", y),
    t.onEvent("theme_changed", v),
    t.onEvent("viewport_changed", g),
    t.onEvent("invoice_closed", En),
    t.onEvent("popup_closed", ev),
    t.onEvent("qr_text_received", tv),
    t.onEvent("scan_qr_popup_closed", nv),
    t.onEvent("clipboard_text_received", rv),
    t.onEvent("write_access_requested", iv),
    t.onEvent("phone_requested", sv),
    t.onEvent("custom_method_invoked", av),
    t.postEvent("web_app_request_theme"),
    t.postEvent("web_app_request_viewport")
}
)();
Object.defineProperty(zl, "__esModule", {
    value: !0
});
zl.WebApp = void 0;
var I6 = window;
zl.WebApp = I6.Telegram.WebApp;
Object.defineProperty(k0, "__esModule", {
    value: !0
});
var L6 = zl
  , je = k0.default = L6.WebApp;
const R6 = ({className: e}) => N.jsxs("svg", {
    className: e,
    viewBox: "0 0 402 360",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [N.jsx("path", {
        d: "M197.511 156.111C190.141 155.532 183.416 152.446 178.067 147.216C171.986 141.279 168.72 133.498 168.72 125.01V122.503L138.856 92.5381L108.991 62.5736L106.478 62.5307C99.9032 62.4235 93.0065 60.0444 88.1938 56.2506C87.5922 55.7576 86.9906 55.3718 86.8832 55.3718C86.5394 55.3718 82.9084 51.3851 81.6193 49.6061C76.4413 42.4258 74.5506 32.8877 76.5917 24.1855C78.5254 15.8906 83.8967 8.56026 91.2662 4.25205C96.7019 1.05841 103.062 -0.399092 109.55 0.0938864C116.963 0.651167 123.623 3.73764 129.08 9.18184C132.604 12.6756 134.946 16.3836 136.557 20.9919C137.631 24.0998 138.04 26.3504 138.19 30.0155L138.319 33.2949L168.42 63.4524L198.52 93.6312L200.089 93.5884L201.657 93.5669L212.25 83L222.863 72.4117V69.9254C222.863 61.7162 226.108 54.0429 232.08 48.0629C236.786 43.3903 242.093 40.5824 248.538 39.3821C251.675 38.782 257.197 38.8463 260.183 39.4679C272.945 42.19 282.399 51.8352 284.891 64.6955C285.385 67.3319 285.385 72.9476 284.87 75.734C283.774 81.7354 280.852 87.4154 276.576 91.8737C274.041 94.5315 271.57 96.3748 268.412 98.0037C263.943 100.297 260.527 101.197 255.628 101.369L252.405 101.497L241.835 112.043L231.242 122.567V124.817C231.221 136.37 224.99 146.852 214.849 152.446C209.822 155.211 203.419 156.561 197.511 156.111Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M197.737 140.527C194.407 140.163 191.614 138.856 188.993 136.391C185.147 132.79 183.708 128.46 184.352 122.459C184.503 121.044 184.674 119.201 184.739 118.365L184.868 116.864L149.46 81.4342L114.052 46.0255L110.207 46.4542C107.027 46.8186 106.038 46.84 104.535 46.6685C96.3272 45.6397 90.6121 38.7594 91.0203 30.3788C91.2137 26.1992 92.5887 23.177 95.6826 20.0905C97.2081 18.5687 97.8526 18.0758 99.5499 17.2613C107.972 13.1245 117.769 17.0684 121.078 25.8991C121.959 28.2568 122.088 31.0861 121.572 35.6944L121.207 38.9523L156.722 74.5325C176.252 94.1016 192.323 110.113 192.452 110.113C192.581 110.113 194.192 109.963 196.019 109.791C199.07 109.491 199.671 109.491 203.281 109.834L207.212 110.198L223.24 94.2088L239.247 78.2406L238.903 75.197C238.431 71.0602 238.452 68.3596 238.989 66.3019C240.858 58.9501 248.206 53.8917 255.64 54.8134C259.336 55.2635 262.086 56.5924 264.728 59.1645C267.221 61.6079 268.596 64.2443 269.197 67.7166C269.777 71.0817 269.326 73.8895 267.629 77.3189C265.738 81.1556 261.978 84.1778 257.767 85.2495C255.726 85.7639 253.449 85.8067 249.281 85.3352L246.208 84.9922L245.349 85.9353C244.876 86.4497 237.679 93.6515 229.385 101.968L214.324 117.079L214.754 120.615C215.269 124.945 215.183 127.303 214.41 129.725C213.68 132.018 212.562 133.883 210.758 135.769C207.341 139.37 202.722 141.085 197.737 140.527ZM201.712 128.889C203.517 127.924 204.097 126.274 203.732 123.209L203.474 121.108L202.185 120.958C200.552 120.787 198.876 120.787 197.071 120.958L195.653 121.108L195.396 123.316C195.073 126.081 195.288 126.981 196.577 128.246C197.995 129.66 199.865 129.896 201.712 128.889ZM255.941 74.1467C256.371 73.9324 257.015 73.3322 257.359 72.8392C257.939 72.0033 258.004 71.7676 258.004 70.2458C258.004 68.7025 257.961 68.5096 257.338 67.738C255.103 64.9302 250.699 65.6375 249.71 68.9383C249.452 69.8171 249.603 73.568 249.925 74.0824C250.14 74.4039 252.675 74.7469 254.115 74.6397C254.695 74.5754 255.511 74.3611 255.941 74.1467ZM110.25 35.2014C110.314 35.1371 110.464 34.0868 110.572 32.8437C110.765 30.9361 110.744 30.486 110.421 29.6715C109.089 26.1778 104.148 25.9205 102.536 29.2428C101.655 31.0647 101.956 32.908 103.353 34.3226C104.427 35.4157 104.986 35.5443 107.693 35.4157C109.046 35.3514 110.207 35.2657 110.25 35.2014Z",
        fill: "url(#paint0_linear_1_4251)"
    }), N.jsx("path", {
        d: "M181.111 177.757C180.532 185.127 177.446 191.851 172.216 197.201C166.279 203.282 158.498 206.547 150.01 206.547L147.503 206.547L117.538 236.412L87.5736 266.276L87.5307 268.79C87.4235 275.365 85.0444 282.261 81.2506 287.074C80.7576 287.676 80.3718 288.277 80.3718 288.385C80.3718 288.728 76.3851 292.359 74.6061 293.649C67.4258 298.826 57.8877 300.717 49.1855 298.676C40.8906 296.742 33.5603 291.371 29.2521 284.002C26.0584 278.566 24.6009 272.206 25.0939 265.718C25.6512 258.305 28.7376 251.645 34.1818 246.188C37.6756 242.664 41.3836 240.322 45.9919 238.711C49.0998 237.637 51.3504 237.228 55.0155 237.078L58.2949 236.949L88.4524 206.848L118.631 176.747L118.588 175.179L118.567 173.61L108 163.018L97.4117 152.405L94.9254 152.405C86.7162 152.405 79.0429 149.16 73.0629 143.187C68.3903 138.482 65.5824 133.175 64.3821 126.73C63.782 123.593 63.8463 118.071 64.4679 115.085C67.19 102.322 76.8352 92.869 89.6955 90.3767C92.3319 89.8825 97.9476 89.8825 100.734 90.3982C106.735 91.4939 112.415 94.4159 116.874 98.6915C119.531 101.227 121.375 103.698 123.004 106.856C125.297 111.325 126.197 114.741 126.369 119.64L126.497 122.862L137.043 133.433L147.567 144.025L149.817 144.025C161.37 144.047 171.851 150.278 177.446 160.419C180.211 165.446 181.561 171.849 181.111 177.757Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M165.553 176.818C165.189 180.148 163.881 182.941 161.416 185.562C157.815 189.408 153.486 190.848 147.484 190.203C146.07 190.053 144.226 189.881 143.391 189.817L141.89 189.688L106.46 225.095L71.0513 260.503L71.4799 264.349C71.8443 267.529 71.8657 268.517 71.6943 270.021C70.6654 278.228 63.7852 283.943 55.4045 283.535C51.2249 283.342 48.2028 281.967 45.1163 278.873C43.5945 277.347 43.1015 276.703 42.287 275.005C38.1503 266.583 42.0941 256.786 50.9249 253.477C53.2826 252.596 56.1119 252.467 60.7201 252.983L63.9781 253.348L99.5583 217.833C119.127 198.303 135.138 182.232 135.138 182.103C135.138 181.974 134.988 180.363 134.817 178.537C134.517 175.486 134.517 174.884 134.86 171.275L135.224 167.343L119.235 151.315L103.266 135.308L100.223 135.652C96.086 136.125 93.3853 136.103 91.3277 135.566C83.9759 133.697 78.9175 126.349 79.8391 118.915C80.2892 115.22 81.6181 112.47 84.1902 109.827C86.6337 107.335 89.27 105.96 92.7423 105.358C96.1074 104.778 98.9153 105.229 102.345 106.926C106.181 108.817 109.204 112.577 110.275 116.788C110.79 118.829 110.832 121.107 110.361 125.275L110.018 128.347L110.961 129.207C111.476 129.679 118.677 136.877 126.994 145.17L142.104 160.231L145.641 159.802C149.971 159.286 152.328 159.372 154.75 160.145C157.044 160.876 158.909 161.993 160.795 163.798C164.396 167.214 166.11 171.833 165.553 176.818ZM153.915 172.843C152.95 171.038 151.3 170.458 148.235 170.824L146.134 171.081L145.984 172.37C145.813 174.003 145.813 175.679 145.984 177.484L146.134 178.902L148.342 179.16C151.107 179.482 152.007 179.267 153.272 177.978C154.686 176.56 154.922 174.691 153.915 172.843ZM99.1725 118.614C98.9581 118.185 98.358 117.54 97.865 117.196C97.0291 116.616 96.7933 116.552 95.2715 116.552C93.7283 116.552 93.5354 116.595 92.7637 117.218C89.9559 119.452 90.6632 123.857 93.964 124.845C94.8428 125.103 98.5938 124.953 99.1082 124.63C99.4297 124.415 99.7726 121.88 99.6654 120.441C99.6011 119.861 99.3868 119.044 99.1725 118.614ZM60.2272 264.306C60.1629 264.241 59.1126 264.091 57.8694 263.984C55.9618 263.79 55.5117 263.812 54.6972 264.134C51.2035 265.466 50.9463 270.408 54.2685 272.019C56.0904 272.9 57.9337 272.599 59.3484 271.203C60.4415 270.128 60.5701 269.57 60.4415 266.863C60.3772 265.509 60.2915 264.349 60.2272 264.306Z",
        fill: "url(#paint1_linear_1_4251)"
    }), N.jsx("path", {
        d: "M202.007 194.607C209.376 195.186 216.101 198.272 221.451 203.502C227.531 209.439 230.797 217.22 230.797 225.707V228.215L260.661 258.18L290.526 288.144L293.04 288.187C299.614 288.294 306.511 290.673 311.324 294.467C311.925 294.96 312.527 295.346 312.634 295.346C312.978 295.346 316.609 299.333 317.898 301.112C323.076 308.292 324.967 317.83 322.926 326.532C320.992 334.827 315.621 342.158 308.251 346.466C302.815 349.659 296.456 351.117 289.967 350.624C282.555 350.067 275.894 346.98 270.437 341.536C266.914 338.042 264.572 334.334 262.96 329.726C261.886 326.618 261.478 324.367 261.327 320.702L261.199 317.423L231.098 287.265L200.997 257.087L199.428 257.129L197.86 257.151L187.268 267.718L176.654 278.306V280.792C176.654 289.002 173.41 296.675 167.437 302.655C162.732 307.327 157.425 310.135 150.979 311.336C147.842 311.936 142.321 311.871 139.334 311.25C126.572 308.528 117.118 298.883 114.626 286.022C114.132 283.386 114.132 277.77 114.648 274.984C115.743 268.982 118.665 263.302 122.941 258.844C125.476 256.186 127.947 254.343 131.105 252.714C135.574 250.421 138.99 249.52 143.889 249.349L147.112 249.22L157.683 238.675L168.275 228.151V225.9C168.296 214.347 174.527 203.866 184.668 198.272C189.696 195.507 196.098 194.157 202.007 194.607Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M201.809 210.187C205.14 210.552 207.933 211.859 210.554 214.324C214.4 217.925 215.839 222.255 215.195 228.256C215.044 229.671 214.872 231.514 214.808 232.35L214.679 233.85L250.087 269.28L285.494 304.689L289.34 304.261C292.52 303.896 293.508 303.875 295.012 304.046C303.22 305.075 308.935 311.955 308.527 320.336C308.333 324.516 306.958 327.538 303.864 330.624C302.339 332.146 301.694 332.639 299.997 333.453C291.575 337.59 281.777 333.646 278.469 324.816C277.588 322.458 277.459 319.629 277.975 315.02L278.34 311.762L242.825 276.182C223.295 256.613 207.224 240.602 207.095 240.602C206.966 240.602 205.354 240.752 203.528 240.924C200.477 241.224 199.876 241.224 196.266 240.881L192.334 240.516L176.306 256.506L160.3 272.474L160.644 275.518C161.116 279.654 161.095 282.355 160.558 284.413C158.689 291.765 151.341 296.823 143.907 295.901C140.211 295.451 137.461 294.122 134.818 291.55C132.326 289.107 130.951 286.47 130.35 282.998C129.769 279.633 130.221 276.825 131.918 273.396C133.809 269.559 137.569 266.537 141.78 265.465C143.821 264.951 146.098 264.908 150.266 265.38L153.339 265.722L154.198 264.779C154.671 264.265 161.868 257.063 170.162 248.747L185.223 233.636L184.793 230.099C184.277 225.77 184.363 223.412 185.137 220.99C185.867 218.697 186.985 216.832 188.789 214.946C192.205 211.345 196.825 209.63 201.809 210.187ZM197.835 221.826C196.03 222.79 195.45 224.441 195.815 227.506L196.073 229.606L197.362 229.756C198.995 229.928 200.671 229.928 202.475 229.756L203.893 229.606L204.151 227.399C204.474 224.634 204.259 223.734 202.97 222.469C201.552 221.054 199.682 220.819 197.835 221.826ZM143.606 276.568C143.176 276.782 142.532 277.382 142.188 277.875C141.608 278.711 141.543 278.947 141.543 280.469C141.543 282.012 141.586 282.205 142.209 282.977C144.444 285.785 148.848 285.077 149.837 281.776C150.094 280.898 149.944 277.147 149.622 276.632C149.407 276.311 146.872 275.968 145.432 276.075C144.852 276.139 144.036 276.354 143.606 276.568ZM289.297 315.513C289.233 315.578 289.082 316.628 288.975 317.871C288.782 319.779 288.803 320.229 289.125 321.043C290.457 324.537 295.399 324.794 297.01 321.472C297.891 319.65 297.591 317.807 296.194 316.392C295.12 315.299 294.561 315.17 291.854 315.299C290.5 315.363 289.34 315.449 289.297 315.513Z",
        fill: "url(#paint2_linear_1_4251)"
    }), N.jsx("path", {
        d: "M219.608 173.252C220.187 165.883 223.273 159.158 228.503 153.808C234.44 147.728 242.221 144.462 250.708 144.462L253.216 144.462L283.181 114.597L313.145 84.7329L313.188 82.2192C313.295 75.6447 315.674 68.7479 319.468 63.9352C319.961 63.3336 320.347 62.7321 320.347 62.6246C320.347 62.2809 324.334 58.6499 326.113 57.3607C333.293 52.1828 342.831 50.2921 351.533 52.3332C359.828 54.2669 367.158 59.6382 371.467 67.0076C374.66 72.4434 376.118 78.803 375.625 85.2915C375.068 92.704 371.981 99.3644 366.537 104.822C363.043 108.345 359.335 110.687 354.727 112.298C351.619 113.373 349.368 113.781 345.703 113.931L342.424 114.06L312.266 144.161L282.088 174.262L282.13 175.83L282.152 177.399L292.719 187.991L303.307 198.605L305.793 198.605C314.003 198.605 321.676 201.849 327.656 207.822C332.328 212.527 335.136 217.834 336.337 224.28C336.937 227.416 336.872 232.938 336.251 235.925C333.529 248.687 323.884 258.14 311.023 260.633C308.387 261.127 302.771 261.127 299.985 260.611C293.983 259.515 288.303 256.593 283.845 252.318C281.187 249.783 279.344 247.312 277.715 244.153C275.422 239.684 274.521 236.268 274.35 231.37L274.221 228.147L263.676 217.576L253.152 206.984L250.901 206.984C239.348 206.962 228.867 200.732 223.273 190.591C220.508 185.563 219.158 179.161 219.608 173.252Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M234.442 173.464C  234.806 170.134 236.113 167.341 238.578 164.72C242.179 160.874 246.509 159.434 252.51 160.079C253.925 160.229 255.768 160.401 256.604 160.466L258.104 160.595L293.535 125.187L328.943 89.7793L328.515 85.9334C328.15 82.7536 328.129 81.7653 328.3 80.2613C329.329 72.054 336.209 66.3389 344.59 66.7471C348.77 66.9405 351.792 68.3155 354.878 71.4094C356.4 72.9349 356.893 73.5794 357.708 75.2767C361.844 83.699 357.901 93.4962 349.07 96.805C346.712 97.6859 343.883 97.8148 339.274 97.2991L336.017 96.9339L300.436 132.449C280.867 151.979 264.856 168.05 264.856 168.179C264.856 168.308 265.006 169.919 265.178 171.745C265.478 174.796 265.478 175.398 265.135 179.007L264.77 182.939L280.76 198.967L296.728 214.974L299.772 214.63C303.909 214.157 306.609 214.179 308.667 214.716C316.019 216.585 321.077 223.933 320.156 231.367C319.705 235.062 318.376 237.813 315.804 240.455C313.361 242.948 310.725 244.323 307.252 244.924C303.887 245.504 301.079 245.053 297.65 243.356C293.813 241.465 290.791 237.705 289.719 233.494C289.205 231.453 289.162 229.176 289.634 225.007L289.977 221.935L289.034 221.076C288.519 220.603 281.317 213.405 273.001 205.112L257.89 190.051L254.354 190.481C250.024 190.996 247.666 190.91 245.244 190.137C242.951 189.406 241.086 188.289 239.2 186.484C235.599 183.068 233.884 178.449 234.442 173.464ZM246.08 177.439C247.045 179.244 248.695 179.824 251.76 179.459L253.861 179.201L254.011 177.912C254.182 176.279 254.182 174.603 254.011 172.798L253.861 171.38L251.653 171.122C248.888 170.8 247.988 171.015 246.723 172.304C245.308 173.722 245.073 175.591 246.08 177.439ZM300.822 231.668C301.037 232.098 301.637 232.742 302.13 233.086C302.966 233.666 303.201 233.73 304.723 233.73C306.266 233.73 306.459 233.687 307.231 233.064C310.039 230.83 309.331 226.425 306.031 225.437C305.152 225.179 301.401 225.33 300.886 225.652C300.565 225.867 300.222 228.402 300.329 229.842C300.393 230.422 300.608 231.238 300.822 231.668ZM339.767 85.9764C339.832 86.0409 340.882 86.1913 342.125 86.2987C344.033 86.492 344.483 86.4706 345.297 86.1483C348.791 84.8162 349.048 79.8746 345.726 78.2632C343.904 77.3823 342.061 77.6831 340.646 79.0796C339.553 80.1539 339.425 80.7125 339.553 83.4197C339.617 84.7732 339.703 85.9334 339.767 85.9764Z",
        fill: "url(#paint3_linear_1_4251)"
    }), N.jsxs("defs", {
        children: [N.jsxs("linearGradient", {
            id: "paint0_linear_1_4251",
            x1: "180.219",
            y1: "15.6149",
            x2: "180.219",
            y2: "140.631",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint1_linear_1_4251",
            x1: "40.6406",
            y1: "194.337",
            x2: "165.656",
            y2: "194.337",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint2_linear_1_4251",
            x1: "219.328",
            y1: "335.1",
            x2: "219.328",
            y2: "210.084",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint3_linear_1_4251",
            x1: "359.354",
            y1: "155.945",
            x2: "234.338",
            y2: "155.945",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        })]
    })]
})
  , A6 = ({className: e}) => N.jsxs("svg", {
    className: e,
    viewBox: "0 0 56 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [N.jsxs("g", {
        clipPath: "url(#clip0_806_1761)",
        children: [N.jsx("path", {
            d: "M10.5882 21.5C16.4363 21.5 21.1765 16.7993 21.1765 11C21.1765 5.20072 16.4363 0.5 10.5882 0.5C4.74022 0.5 0 5.20072 0 11C0 16.7993 4.74022 21.5 10.5882 21.5Z",
            fill: "#0098EA"
        }), N.jsx("path", {
            d: "M14.2035 6.36035H6.97237C5.64288 6.36035 4.80045 7.78245 5.4695 8.93285L9.93178 16.6031C10.223 17.1038 10.9529 17.1038 11.2441 16.6031L15.7077 8.9322C16.376 7.78441 15.533 6.36035 14.2041 6.36035H14.2035ZM9.92847 14.3023L8.95634 12.4372L6.61104 8.27791C6.57541 8.21579 6.55693 8.14544 6.55749 8.07397C6.55804 8.0025 6.57759 7.93244 6.61418 7.87087C6.65076 7.80929 6.70308 7.75837 6.76586 7.72326C6.82863 7.68815 6.89964 7.67008 6.9717 7.67088H9.92648V14.3036L9.92781 14.3023H9.92847ZM14.5628 8.27726L12.2188 12.4379L11.2467 14.3023V7.66957H14.2028C14.5271 7.66957 14.7177 8.01082 14.5628 8.27726Z",
            fill: "white"
        }), N.jsx("path", {
            d: "M27.9245 16.7343H30.2327V8.75234H33.4244V6.57819H24.7328V8.75234H27.9245V16.7343ZM38.9713 16.9062C41.8851 16.9062 44.2654 14.5457 44.2654 11.6562C44.2654 8.76678 41.8851 6.40625 38.9713 6.40625C36.043 6.40625 33.6772 8.76678 33.6772 11.6562C33.6772 14.5457 36.043 16.9062 38.9713 16.9062ZM38.9713 14.7032C37.2977 14.7032 35.9848 13.3015 35.9848 11.6562C35.9848 10.011 37.2977 8.60928 38.9713 8.60928C40.6304 8.60928 41.9426 10.011 41.9426 11.6562C41.9426 13.3015 40.6304 14.7032 38.9713 14.7032ZM54.7981 16.7343V6.57819H52.4898V12.8434L47.5134 6.57819H45.536V16.7343H47.8297V10.454L52.8214 16.7343H54.7981Z",
            fill: "white"
        })]
    }), N.jsx("defs", {
        children: N.jsx("clipPath", {
            id: "clip0_806_1761",
            children: N.jsx("rect", {
                width: "55.5882",
                height: "21",
                fill: "white",
                transform: "translate(0 0.5)"
            })
        })
    })]
})
  , P6 = ({className: e}) => N.jsxs("svg", {
    className: e,
    viewBox: "0 0 70 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [N.jsx("path", {
        d: "M11.3735 9.84385C10.9128 9.80767 10.4924 9.61471 10.1579 9.28774C9.77778 8.91656 9.57361 8.43013 9.57361 7.89948V7.7427L7.70652 5.86935L5.83943 3.99601L5.68227 3.99333C5.27124 3.98663 4.84007 3.83789 4.53918 3.6007C4.50157 3.56988 4.46396 3.54576 4.45725 3.54576C4.43575 3.54576 4.20875 3.29652 4.12815 3.1853C3.80444 2.73639 3.68623 2.14008 3.81384 1.59603C3.93473 1.07745 4.27054 0.619161 4.73126 0.349818C5.0711 0.150155 5.4687 0.0590336 5.87435 0.089854C6.33777 0.124695 6.75417 0.317657 7.09535 0.658022C7.31564 0.876445 7.46205 1.10827 7.56279 1.39637C7.62995 1.59067 7.65547 1.73138 7.66488 1.96052L7.67294 2.16554L9.5548 4.05095L11.4367 5.93769L11.5347 5.93501L11.6328 5.93367L12.295 5.27304L12.9585 4.61108V4.45563C12.9585 3.94241 13.1614 3.46268 13.5348 3.08882C13.829 2.79669 14.1607 2.62115 14.5637 2.54611C14.7598 2.50859 15.105 2.51261 15.2917 2.55147C16.0896 2.72165 16.6806 3.32466 16.8364 4.12867C16.8673 4.29349 16.8673 4.64458 16.8351 4.81878C16.7666 5.19398 16.5839 5.54909 16.3166 5.82781C16.1581 5.99398 16.0036 6.10922 15.8062 6.21106C15.5268 6.35444 15.3132 6.41072 15.007 6.42144L14.8055 6.42948L14.1446 7.08877L13.4824 7.74672V7.88742C13.4811 8.60969 13.0915 9.26496 12.4575 9.61471C12.1432 9.78757 11.7429 9.87199 11.3735 9.84385Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M11.3881 8.82354C11.1799 8.80076 11.0052 8.71901 10.8414 8.56491C10.6009 8.33979 10.5109 8.06911 10.5512 7.6939C10.5606 7.60546 10.5714 7.49022 10.5754 7.43796L10.5835 7.34416L8.36983 5.12911L6.15619 2.9154L5.91575 2.9422C5.71696 2.96498 5.65517 2.96632 5.56114 2.9556C5.04803 2.89128 4.69073 2.46113 4.71625 1.93718C4.72834 1.67588 4.81431 1.48694 5.00773 1.29397C5.1031 1.19883 5.1434 1.16801 5.24951 1.11709C5.77606 0.858468 6.38857 1.10503 6.59543 1.65712C6.6505 1.80452 6.65856 1.9814 6.62632 2.26951L6.60349 2.47319L8.82384 4.69762C10.0448 5.92106 11.0496 6.92205 11.0576 6.92205C11.0657 6.92205 11.1664 6.91267 11.2806 6.90195C11.4713 6.88319 11.509 6.88319 11.7346 6.90463L11.9804 6.92741L12.9825 5.92776L13.9832 4.92944L13.9617 4.73916C13.9321 4.48054 13.9335 4.31169 13.9671 4.18305C14.0839 3.72343 14.5433 3.40718 15.0081 3.4648C15.2391 3.49294 15.411 3.57602 15.5763 3.73683C15.7321 3.88959 15.818 4.05441 15.8556 4.27149C15.8919 4.48188 15.8637 4.65742 15.7576 4.87182C15.6394 5.11169 15.4043 5.30063 15.141 5.36763C15.0134 5.39979 14.8711 5.40247 14.6105 5.37299L14.4184 5.35155L14.3647 5.41051C14.3351 5.44267 13.8851 5.89292 13.3666 6.41284L12.425 7.35756L12.4519 7.57866C12.4841 7.84934 12.4788 7.99674 12.4304 8.14817C12.3847 8.29155 12.3149 8.40813 12.2021 8.52605C11.9885 8.75117 11.6997 8.85838 11.3881 8.82354ZM11.6366 8.09591C11.7494 8.03561 11.7857 7.93242 11.7628 7.7408L11.7467 7.60948L11.6661 7.6001C11.564 7.58938 11.4593 7.58938 11.3464 7.6001L11.2578 7.60948L11.2417 7.7475C11.2215 7.92036 11.2349 7.97664 11.3155 8.05571C11.4042 8.14415 11.521 8.15889 11.6366 8.09591ZM15.0269 4.6735C15.0537 4.6601 15.094 4.62258 15.1155 4.59176C15.1518 4.5395 15.1558 4.52476 15.1558 4.42962C15.1558 4.33313 15.1531 4.32107 15.1142 4.27283C14.9745 4.09729 14.6991 4.14151 14.6373 4.34787C14.6212 4.40282 14.6306 4.63732 14.6508 4.66948C14.6642 4.68958 14.8227 4.71102 14.9127 4.70432C14.949 4.7003 15 4.6869 15.0269 4.6735ZM5.91844 2.23869C5.92247 2.23467 5.93187 2.16901 5.93859 2.09128C5.95068 1.97202 5.94933 1.94388 5.92919 1.89296C5.84591 1.67454 5.53696 1.65846 5.43622 1.86616C5.38115 1.98006 5.39995 2.0953 5.48726 2.18375C5.55443 2.25209 5.58935 2.26013 5.7586 2.25209C5.84322 2.24807 5.91575 2.24271 5.91844 2.23869Z",
        fill: "url(#paint0_linear_806_1768)"
    }), N.jsx("path", {
        d: "M10.3481 11.1047C10.3119 11.5655 10.119 11.9859 9.792 12.3204C9.42082 12.7005 8.93439 12.9047 8.40374 12.9047L8.24696 12.9047L6.37362 14.7718L4.50028 16.6388L4.4976 16.796C4.4909 17.207 4.34215 17.6382 4.10497 17.9391C4.07415 17.9767 4.05003 18.0143 4.05003 18.021C4.05003 18.0425 3.80079 18.2695 3.68957 18.3501C3.24066 18.6738 2.64435 18.792 2.10031 18.6644C1.58172 18.5435 1.12343 18.2077 0.85409 17.747C0.654427 17.4072 0.563306 17.0096 0.594126 16.6039C0.628967 16.1405 0.821929 15.7241 1.16229 15.3829C1.38072 15.1626 1.61254 15.0162 1.90064 14.9155C2.09495 14.8483 2.23565 14.8228 2.46479 14.8134L2.66981 14.8053L4.55522 12.9235L6.44196 11.0416L6.43928 10.9435L6.43794 10.8455L5.77731 10.1833L5.11534 9.51972L4.9599 9.51972C4.44667 9.51972 3.96695 9.31689 3.59308 8.94347C3.30096 8.64931 3.12542 8.31753 3.05038 7.91456C3.01286 7.71845 3.01688 7.37324 3.05574 7.18653C3.22592 6.38865 3.82893 5.79763 4.63294 5.64181C4.79776 5.61092 5.14884 5.61092 5.32305 5.64315C5.69825 5.71166 6.05336 5.89434 6.33208 6.16164C6.49824 6.32014 6.61348 6.47461 6.71532 6.67207C6.85871 6.95146 6.91499 7.16503 6.92571 7.47129L6.93375 7.67278L7.59303 8.33365L8.25098 8.99586L8.39168 8.99586C9.11395 8.9972 9.76922 9.38674 10.119 10.0207C10.2918 10.3351 10.3762 10.7353 10.3481 11.1047Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M9.32768 11.0906C9.3049 11.2988 9.22316 11.4734 9.06905 11.6373C8.84393 11.8777 8.57325 11.9677 8.19804 11.9274C8.1096 11.918 7.99436 11.9072 7.9421 11.9032L7.8483 11.8952L5.63325 14.1088L3.41954 16.3224L3.44634 16.5629C3.46912 16.7617 3.47046 16.8235 3.45974 16.9175C3.39542 17.4306 2.96528 17.7879 2.44133 17.7624C2.18003 17.7503 1.99109 17.6643 1.79812 17.4709C1.70298 17.3755 1.67216 17.3352 1.62124 17.2291C1.36262 16.7026 1.60918 16.0901 2.16127 15.8832C2.30867 15.8281 2.48555 15.8201 2.77366 15.8523L2.97734 15.8751L5.20177 13.6548C6.4252 12.4338 7.42619 11.4291 7.42619 11.421C7.42619 11.4129 7.41681 11.3122 7.40609 11.198C7.38733 11.0073 7.38733 10.9697 7.40877 10.744L7.43155 10.4982L6.4319 9.49615L5.43359 8.49544L5.24331 8.51693C4.98468 8.54648 4.81584 8.54514 4.6872 8.51156C4.22757 8.3947 3.91133 7.93531 3.96895 7.47056C3.99709 7.23952 4.08017 7.06759 4.24097 6.90237C4.39373 6.74656 4.55856 6.66059 4.77564 6.62298C4.98602 6.58671 5.16156 6.61492 5.37597 6.72103C5.61583 6.83924 5.80477 7.0743 5.87177 7.33758C5.90393 7.46518 5.90661 7.60757 5.87713 7.86815L5.85569 8.06023L5.91465 8.11396C5.94681 8.14351 6.39706 8.5935 6.91699 9.11198L7.8617 10.0536L8.0828 10.0267C8.35348 9.99449 8.50089 9.99986 8.65231 10.0482C8.79569 10.0939 8.91227 10.1637 9.03019 10.2766C9.25531 10.4901 9.36252 10.7789 9.32768 11.0906ZM8.60005 10.8421C8.53975 10.7292 8.43657 10.693 8.24494 10.7158L8.11362 10.7319L8.10424 10.8125C8.09352 10.9146 8.09352 11.0194 8.10424 11.1322L8.11362 11.2209L8.25164 11.237C8.4245 11.2571 8.48079 11.2437 8.55985 11.1631C8.64829 11.0744 8.66303 10.9576 8.60005 10.8421ZM5.17764 7.45175C5.16424 7.42489 5.12672 7.38459 5.0959 7.3631C5.04364 7.32683 5.0289 7.3228 4.93376 7.3228C4.83728 7.3228 4.82522 7.32549 4.77698 7.36444C4.60144 7.50414 4.64566 7.7795 4.85202 7.84129C4.90696 7.85741 5.14146 7.848 5.17362 7.82785C5.19373 7.81442 5.21517 7.65592 5.20846 7.56593C5.20444 7.52966 5.19104 7.47862 5.17764 7.45175ZM2.74284 16.5602C2.73882 16.5562 2.67315 16.5468 2.59543 16.54C2.47617 16.528 2.44803 16.5293 2.39711 16.5495C2.17869 16.6327 2.16261 16.9417 2.37031 17.0424C2.48421 17.0975 2.59945 17.0787 2.68789 16.9914C2.75624 16.9242 2.76428 16.8893 2.75624 16.72C2.75222 16.6354 2.74686 16.5629 2.74284 16.5602Z",
        fill: "url(#paint1_linear_806_1768)"
    }), N.jsx("path", {
        d: "M11.6108 12.1566C12.0716 12.1928 12.492 12.3858 12.8265 12.7127C13.2066 13.0839 13.4108 13.5704 13.4108 14.101V14.2578L15.2779 16.1311L17.1449 18.0045L17.3021 18.0072C17.7131 18.0139 18.1443 18.1626 18.4452 18.3998C18.4828 18.4306 18.5204 18.4547 18.5271 18.4547C18.5486 18.4547 18.7756 18.704 18.8562 18.8152C19.1799 19.2641 19.2981 19.8604 19.1705 20.4045C19.0496 20.923 18.7138 21.3813 18.2531 21.6507C17.9133 21.8503 17.5157 21.9415 17.11 21.9106C16.6466 21.8758 16.2302 21.6828 15.889 21.3425C15.6687 21.124 15.5223 20.8922 15.4216 20.6041C15.3544 20.4098 15.3289 20.2691 15.3195 20.04L15.3114 19.8349L13.4296 17.9495L11.5477 16.0628L11.4497 16.0655L11.3516 16.0668L10.6894 16.7274L10.0258 17.3894V17.5449C10.0258 18.0581 9.82301 18.5378 9.44959 18.9117C9.15542 19.2038 8.82364 19.3793 8.42067 19.4544C8.22456 19.4919 7.87935 19.4879 7.69264 19.449C6.89477 19.2788 6.30374 18.6758 6.14793 17.8718C6.11704 17.707 6.11704 17.3559 6.14927 17.1817C6.21778 16.8065 6.40046 16.4514 6.66776 16.1727C6.82626 16.0065 6.98073 15.8913 7.17819 15.7894C7.45758 15.646 7.67115 15.5898 7.97741 15.579L8.17889 15.571L8.83976 14.9117L9.50197 14.2538V14.1131C9.50332 13.3908 9.89285 12.7355 10.5269 12.3858C10.8412 12.2129 11.2415 12.1285 11.6108 12.1566Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M11.5953 13.177C11.8035 13.1997 11.9782 13.2815 12.142 13.4356C12.3825 13.6607 12.4725 13.9314 12.4322 14.3066C12.4228 14.395 12.412 14.5103 12.408 14.5625L12.3999 14.6563L14.6136 16.8714L16.8272 19.0851L17.0676 19.0583C17.2664 19.0355 17.3282 19.0342 17.4223 19.0449C17.9354 19.1092 18.2927 19.5394 18.2671 20.0633C18.2551 20.3246 18.1691 20.5136 17.9757 20.7065C17.8803 20.8017 17.84 20.8325 17.7339 20.8834C17.2073 21.142 16.5948 20.8955 16.388 20.3434C16.3329 20.196 16.3248 20.0191 16.3571 19.731L16.3799 19.5273L14.1596 17.3029C12.9386 16.0794 11.9338 15.0784 11.9258 15.0784C11.9177 15.0784 11.817 15.0878 11.7028 15.0985C11.5121 15.1173 11.4744 15.1173 11.2488 15.0959L11.003 15.0731L10.0009 16.0727L9.00021 17.071L9.0217 17.2613C9.05126 17.52 9.04991 17.6888 9.01633 17.8174C8.89947 18.2771 8.44009 18.5933 7.97533 18.5357C7.74429 18.5075 7.57236 18.4245 7.40714 18.2637C7.25133 18.1109 7.16536 17.9461 7.12775 17.729C7.09149 17.5186 7.11969 17.3431 7.22581 17.1287C7.34401 16.8888 7.57908 16.6999 7.84235 16.6329C7.96996 16.6007 8.11234 16.598 8.37292 16.6275L8.56501 16.6489L8.61874 16.59C8.64829 16.5578 9.09827 16.1076 9.61675 15.5876L10.5584 14.6429L10.5315 14.4218C10.4993 14.1511 10.5046 14.0037 10.553 13.8523C10.5987 13.7089 10.6685 13.5924 10.7813 13.4744C10.9949 13.2493 11.2837 13.1421 11.5953 13.177ZM11.3468 13.9046C11.234 13.9649 11.1977 14.0681 11.2206 14.2597L11.2367 14.391L11.3173 14.4004C11.4194 14.4111 11.5241 14.4111 11.637 14.4004L11.7256 14.391L11.7417 14.253C11.7619 14.0801 11.7485 14.0238 11.6679 13.9448C11.5792 13.8563 11.4624 13.8416 11.3468 13.9046ZM7.95652 17.327C7.92966 17.3404 7.88936 17.3779 7.86787 17.4087C7.8316 17.461 7.82757 17.4757 7.82757 17.5709C7.82757 17.6674 7.83026 17.6794 7.86921 17.7277C8.00891 17.9032 8.28427 17.859 8.34606 17.6526C8.36218 17.5977 8.35278 17.3632 8.33263 17.331C8.3192 17.3109 8.16069 17.2895 8.0707 17.2962C8.03443 17.3002 7.98339 17.3136 7.95652 17.327ZM17.065 19.7618C17.0609 19.7658 17.0515 19.8315 17.0448 19.9092C17.0327 20.0285 17.0341 20.0566 17.0542 20.1075C17.1375 20.3259 17.4464 20.342 17.5472 20.1343C17.6022 20.0204 17.5834 19.9052 17.4961 19.8167C17.429 19.7484 17.394 19.7404 17.2248 19.7484C17.1402 19.7524 17.0676 19.7578 17.065 19.7618Z",
        fill: "url(#paint2_linear_806_1768)"
    }), N.jsx("path", {
        d: "M12.5701 10.8704C12.6063 10.4096 12.7992 9.98921 13.1262 9.65474C13.4974 9.27461 13.9838 9.07044 14.5145 9.07044L14.6713 9.07044L16.5446 7.20335L18.4179 5.33626L18.4206 5.1791C18.4273 4.76807 18.5761 4.33689 18.8132 4.03601C18.8441 3.9984 18.8682 3.96079 18.8682 3.95407C18.8682 3.93258 19.1174 3.70558 19.2286 3.62498C19.6776 3.30126 20.2739 3.18306 20.8179 3.31067C21.3365 3.43156 21.7948 3.76736 22.0641 4.22809C22.2638 4.56793 22.3549 4.96553 22.3241 5.37118C22.2892 5.8346 22.0963 6.251 21.7559 6.59218C21.5375 6.81247 21.3057 6.95888 21.0176 7.05962C20.8233 7.12678 20.6826 7.1523 20.4534 7.16171L20.2484 7.16977L18.363 9.05163L16.4763 10.9335L16.4789 11.0316L16.4803 11.1296L17.1409 11.7918L17.8029 12.4554L17.9583 12.4554C18.4715 12.4554 18.9513 12.6582 19.3251 13.0316C19.6173 13.3258 19.7928 13.6576 19.8678 14.0605C19.9054 14.2567 19.9013 14.6019 19.8625 14.7886C19.6923 15.5864 19.0893 16.1775 18.2853 16.3333C18.1205 16.3642 17.7694 16.3642 17.5952 16.3319C17.22 16.2634 16.8649 16.0808 16.5861 15.8135C16.42 15.655 16.3047 15.5005 16.2029 15.303C16.0595 15.0236 16.0032 14.8101 15.9925 14.5038L15.9845 14.3023L15.3252 13.6415L14.6672 12.9792L14.5265 12.9792C13.8043 12.9779 13.149 12.5884 12.7992 11.9544C12.6264 11.64 12.542 11.2398 12.5701 10.8704Z",
        fill: "#0037FF"
    }), N.jsx("path", {
        d: "M13.5886 10.8826C13.6114 10.6744 13.6931 10.4998 13.8472 10.3359C14.0723 10.0954 14.343 10.0055 14.7182 10.0457C14.8067 10.0552 14.9219 10.0659 14.9742 10.0699L15.068 10.078L17.283 7.86434L19.4967 5.6507L19.4699 5.41026C19.4471 5.21146 19.4458 5.14968 19.4565 5.05565C19.5208 4.54254 19.951 4.18524 20.4749 4.21076C20.7362 4.22285 20.9252 4.30881 21.1181 4.50224C21.2133 4.59761 21.2441 4.6379 21.295 4.74402C21.5536 5.27057 21.3071 5.88308 20.755 6.08994C20.6076 6.14501 20.4307 6.15307 20.1426 6.12083L19.9389 6.098L17.7145 8.31836C16.4911 9.53935 15.4901 10.5441 15.4901 10.5521C15.4901 10.5602 15.4994 10.6609 15.5102 10.7751C15.5289 10.9659 15.5289 11.0035 15.5075 11.2291L15.4847 11.4749L16.4844 12.477L17.4827 13.4777L17.673 13.4562C17.9316 13.4267 18.1004 13.428 18.2291 13.4616C18.6887 13.5784 19.0049 14.0378 18.9473 14.5026C18.9192 14.7336 18.8361 14.9056 18.6753 15.0708C18.5225 15.2266 18.3577 15.3126 18.1406 15.3502C17.9302 15.3864 17.7547 15.3582 17.5403 15.2521C17.3004 15.1339 17.1115 14.8988 17.0445 14.6356C17.0123 14.508 17.0096 14.3656 17.0391 14.105L17.0606 13.9129L17.0016 13.8592C16.9694 13.8296 16.5192 13.3796 15.9993 12.8612L15.0546 11.9196L14.8335 11.9464C14.5628 11.9787 14.4154 11.9733 14.264 11.9249C14.1206 11.8793 14.004 11.8094 13.8861 11.6966C13.6609 11.483 13.5537 11.1942 13.5886 10.8826ZM14.3162 11.1311C14.3765 11.2439 14.4797 11.2802 14.6713 11.2573L14.8026 11.2412L14.812 11.1606C14.8227 11.0585 14.8227 10.9538 14.812 10.8409L14.8026 10.7523L14.6646 10.7362C14.4918 10.716 14.4355 10.7295 14.3564 10.81C14.268 10.8987 14.2532 11.0156 14.3162 11.1311ZM17.7386 14.5214C17.752 14.5483 17.7895 14.5886 17.8204 14.61C17.8726 14.6463 17.8874 14.6503 17.9825 14.6503C18.079 14.6503 18.091 14.6477 18.1393 14.6087C18.3148 14.469 18.2706 14.1936 18.0642 14.1319C18.0093 14.1157 17.7748 14.1251 17.7426 14.1453C17.7225 14.1587 17.7011 14.3172 17.7078 14.4072C17.7118 14.4435 17.7252 14.4945 17.7386 14.5214ZM20.1734 5.41295C20.1774 5.41698 20.2431 5.42638 20.3208 5.4331C20.4401 5.44519 20.4682 5.44384 20.5191 5.42369C20.7376 5.34041 20.7537 5.03147 20.5459 4.93073C20.432 4.87566 20.3168 4.89446 20.2284 4.98177C20.16 5.04893 20.152 5.08386 20.16 5.2531C20.164 5.33773 20.1694 5.41026 20.1734 5.41295Z",
        fill: "url(#paint3_linear_806_1768)"
    }), N.jsx("path", {
        d: "M36.0604 5.46924H33.1622L30.7764 9.04857L28.3591 5.46924H25.4773L29.3119 10.9533L25.364 16.5584H28.2627L30.7764 12.8568L33.2514 16.523L33.275 16.5584H36.1574L32.2252 10.9533L36.0604 5.46924Z",
        fill: "white"
    }), N.jsx("path", {
        d: "M45.0543 6.4639C44.3983 5.95223 43.5887 5.63817 42.648 5.53155C42.3853 5.50141 42.1074 5.48345 41.8221 5.47824C41.5269 5.47302 41.3481 5.4707 41.259 5.4707H37.438V16.5593H41.259C41.3518 16.5593 41.5416 16.5569 41.8221 16.5517C42.1063 16.5465 42.3837 16.5285 42.648 16.4984C43.5887 16.3912 44.3983 16.0777 45.0543 15.5661C45.7102 15.0544 46.2157 14.3956 46.5576 13.6075C46.8984 12.8212 47.0715 11.9491 47.0715 11.0156C47.0715 10.082 46.8984 9.20996 46.5576 8.42363C46.2162 7.63557 45.7102 6.97672 45.0543 6.46506V6.4639ZM39.8112 7.58457H41.2584C41.4 7.58457 41.5914 7.58689 41.8431 7.59211C42.0843 7.59732 42.304 7.61934 42.498 7.65933C42.9668 7.74682 43.3611 7.95601 43.6694 8.28051C43.9799 8.6079 44.2153 9.01468 44.3684 9.48984C44.5226 9.96848 44.6007 10.4813 44.6007 11.0144C44.6007 11.5475 44.5252 12.0232 44.3763 12.5019C44.2284 12.977 43.9972 13.389 43.6883 13.7269C43.3826 14.0612 42.9825 14.2773 42.4986 14.3701C42.3051 14.4048 42.0843 14.4257 41.8426 14.4332C41.5982 14.4408 41.4016 14.4448 41.2584 14.4448H39.8112V7.58457Z",
        fill: "white"
    }), N.jsx("path", {
        d: "M54.3579 5.46924H50.9868L47.3971 16.5578H49.8128L50.5448 14.284H54.7884L55.532 16.5578H57.9477L54.3763 5.52718L54.3574 5.46924H54.3579ZM51.2207 12.1846L52.6501 7.74536L54.102 12.1846H51.2207Z",
        fill: "white"
    }), N.jsx("path", {
        d: "M68.8986 7.99164C68.4403 7.12708 67.7786 6.44506 66.9312 5.96468C66.086 5.48547 65.0671 5.24268 63.9041 5.24268C62.7411 5.24268 61.7223 5.48547 60.877 5.96468C60.0296 6.44506 59.3674 7.12708 58.9096 7.99164C58.4524 8.85503 58.2201 9.87199 58.2201 11.0141C58.2201 12.1562 58.4519 13.1738 58.9096 14.0372C59.3674 14.9017 60.0296 15.5837 60.877 16.0641C61.7217 16.5433 62.7406 16.7861 63.9041 16.7861C65.0677 16.7861 66.0865 16.5433 66.9312 16.0641C67.7786 15.5837 68.4403 14.9017 68.8986 14.0372C69.3558 13.1738 69.5881 12.1568 69.5881 11.0141C69.5881 9.87141 69.3564 8.85503 68.8986 7.99164ZM65.6958 14.2359C65.2234 14.5349 64.6209 14.6827 63.9046 14.6717C63.1878 14.6618 62.5848 14.5048 62.1119 14.2058C61.641 13.9079 61.2829 13.4843 61.0474 12.9472C60.8104 12.406 60.6898 11.7558 60.6898 11.0141C60.6898 10.2724 60.8099 9.61702 61.0474 9.06538C61.2829 8.51837 61.641 8.09015 62.1119 7.7923C62.5696 7.50257 63.149 7.35597 63.8354 7.35597C63.8574 7.35597 63.88 7.35597 63.9025 7.35597C64.6188 7.36582 65.2223 7.52285 65.6953 7.82186C66.1662 8.1197 66.5243 8.54328 66.7598 9.08044C66.9968 9.62166 67.1174 10.2724 67.1174 11.0135C67.1174 11.7547 66.9973 12.4106 66.7598 12.9623C66.5243 13.5093 66.1662 13.9375 65.6953 14.2353L65.6958 14.2359Z",
        fill: "white"
    }), N.jsxs("defs", {
        children: [N.jsxs("linearGradient", {
            id: "paint0_linear_806_1768",
            x1: "10.2928",
            y1: "1.01416",
            x2: "10.2928",
            y2: "8.82999",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint1_linear_806_1768",
            x1: "1.51831",
            y1: "12.1858",
            x2: "9.33413",
            y2: "12.1858",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint2_linear_806_1768",
            x1: "12.6906",
            y1: "20.9863",
            x2: "12.6906",
            y2: "13.1705",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        }), N.jsxs("linearGradient", {
            id: "paint3_linear_806_1768",
            x1: "21.3979",
            y1: "9.78733",
            x2: "13.5821",
            y2: "9.78733",
            gradientUnits: "userSpaceOnUse",
            children: [N.jsx("stop", {
                stopColor: "#0C7CFF"
            }), N.jsx("stop", {
                offset: "1",
                stopColor: "#C7EBFF"
            })]
        })]
    })]
})
  , x0 = ({hidden: e, platformDisabled: t}) => {
    const [n,r] = F.useState(!1);
    if (F.useEffect( () => {
        e && setTimeout( () => {
            r(!0)
        }
        , 1e3)
    }
    , [e]),
    F.useEffect( () => {
        if (localStorage.getItem("tutorialScreen") !== "false" && window.history && window.history.replaceState) {
            const s = "/tutorial";
            console.log("newUrl", s),
            window.history.replaceState({}, document.title, s)
        }
    }
    , []),
    n)
        return null;
    const i = `SplashscreenBackground ${e ? "SplashscreenHidden" : ""}`;
    return N.jsxs("div", {
        className: ["Splashscreen fixed top-0 z-[9999999999] transform transition-all duration-1000 left-0  h-screen w-screen flex flex-col items-center justify-center text-white select-none", e ? "opacity-0" : ""].join(" "),
        children: [N.jsx("div", {
            className: i
        }), N.jsx(R6, {
            className: "h-36"
        }), N.jsx("div", {
            className: "sora-bold text-4xl mt-4",
            children: "TONxDAO"
        }), t ? N.jsx("div", {
            className: "poppins text-center text-base mt-8",
            children: "Your platform is not supported!"
        }) : N.jsx(N.Fragment, {
            children: N.jsxs("div", {
                className: "poppins text-center text-base mt-8",
                children: ["Welcome to TONxDAO Bot!", N.jsx("br", {}), "Vibe with your friends, create DAOs", N.jsx("br", {}), "& receive major prizes."]
            })
        }), t ? null : N.jsxs("div", {
            className: "fixed bottom-4 left-0 w-full flex items-center justify-center poppins text-base pb-4 gap-2",
            children: [N.jsx("div", {
                children: "Powered by"
            }), N.jsx(A6, {
                className: "h-6"
            }), N.jsx("div", {
                children: "Backed by"
            }), N.jsx(P6, {
                className: "h-6"
            })]
        })]
    })
}
  , O6 = async () => {
    var u, c;
    if ((je == null ? void 0 : je.platform) === "android" || (je == null ? void 0 : je.platform) === "android_x")
        console.log("android");
    else if ((je == null ? void 0 : je.platform) === "ios")
        console.log("ios");
    else
        return N.jsx(x0, {
            hidden: !1,
            platformDisabled: !0
        });
    const {OpenAPI: e, AuthService: t} = await ta(async () => {
        const {OpenAPI: f, AuthService: d} = await import("./index-B_S8I6Qm.js");
        return {
            OpenAPI: f,
            AuthService: d
        }
    }
    , [])
      , {state: n} = await ta(async () => {
        const {state: f} = await import("./state-DUgjr4qF.js").then(d => d.b);
        return {
            state: f
        }
    }
    , __vite__mapDeps([0, 1]));
    e.BASE = `${window.location.protocol}//${window.location.host}`,
    e.TOKEN = async () => localStorage.getItem("access_token") || "";
    const r = ((c = (u = je == null ? void 0 : je.initDataUnsafe) == null ? void 0 : u.user) == null ? void 0 : c.language_code) || "en";
    rt.use(p6).init({
        fallbackLng: "en",
        lng: r,
        resources: {
            en: {
                translations: m6
            },
            ru: {
                translations: T6
            }
        },
        ns: ["translations"],
        defaultNS: "translations"
    }),
    rt.languages = ["en", "ru"];
    const i = 100;
    document.body.style.overflowY = "hidden",
    document.body.style.marginTop = `${i}px`,
    document.body.style.height = window.innerHeight + i + "px",
    document.body.style.paddingBottom = `${i}px`,
    r === "ru" ? document.body.className = "ru-font" : document.body.className = "en-font",
    window.scrollTo(0, i),
    window.addEventListener("contextmenu", function(f) {
        f.preventDefault()
    }, {
        passive: !1
    }),
    window.addEventListener("contextmenu", function(f) {
        f.preventDefault()
    }, {
        passive: !1
    });
    const o = async () => {
        if (je != null && je.initData) {
            const f = await t.postAuthLoginTelegramWebApp({
                requestBody: {
                    initData: je == null ? void 0 : je.initData
                }
            });
            f.access_token && localStorage.setItem("access_token", f.access_token)
        }
        await n.updateProfile(),
        n.tutorialScreen && window.history && window.history.replaceState && window.history.replaceState({}, document.title, "/tutorial")
    }
      , s = async () => {
        await o();
        const [f,d] = await Promise.all([ta(async () => {
            const {CentrifugoProvider: m} = await import("./Centrifugo-CqSc0S8v.js");
            return {
                CentrifugoProvider: m
            }
        }
        , __vite__mapDeps([2, 1, 0])).then( ({CentrifugoProvider: m}) => m), ta(async () => {
            const {App: m} = await import("./App-C9AT5Lu0.js");
            return {
                App: m
            }
        }
        , __vite__mapDeps([3, 0, 1, 4])).then( ({App: m}) => m)]);
        return {
            CentrifugoProvider: f,
            App: d
        }
    }
      , {CentrifugoProvider: a, App: l} = await s();
    return console.debug("load Main fired"),
    N.jsx(a, {
        children: N.jsx(l, {})
    })
}
  , b0 = F.createContext({
    app: null
})
  , N6 = ({children: e}) => {
    console.debug("TelegramAppProvider");
    const [t,n] = F.useState(null);
    return F.useEffect( () => {
        var i;
        je.ready(),
        je.expand();
        const r = (i = window == null ? void 0 : window.Telegram) == null ? void 0 : i.WebApp;
        r && n(r)
    }
    , []),
    N.jsx(b0.Provider, {
        value: {
            app: t
        },
        children: e
    })
}
  , M6 = () => {
    const e = F.useContext(b0);
    if (!e)
        throw new Error("useWebApp must be used within a WebAppProvider");
    return e == null ? void 0 : e.app
}
  , D6 = () => {
    const e = M6();
    F.useEffect( () => {
        e == null || e.ready(),
        e == null || e.expand()
    }
    , [e]),
    console.debug("Loader");
    const [t,n] = vm.useState(void 0)
      , r = !!t
      , [i,o] = F.useState(!1)
      , s = F.useRef(!1);
    return F.useEffect( () => {
        if (s.current)
            return;
        s.current = !0;
        const a = performance.now();
        !t && O6().then(l => {
            performance.now() - a > 2e3 ? (o(!0),
            n(l)) : setTimeout( () => {
                o(!0),
                n(l)
            }
            , 2e3)
        }
        )
    }
    , [t]),
    F.useEffect( () => {
        const a = document.createElement("script");
        return a.src = "https://plausible.io/js/script.js",
        a.async = !0,
        a.setAttribute("data-domain", "production.tonxdao.app"),
        document.head.appendChild(a),
        () => {
            document.head.removeChild(a)
        }
    }
    , []),
    N.jsxs(N.Fragment, {
        children: [N.jsx(x0, {
            hidden: i
        }), r ? t : null]
    })
}
  , T0 = Object.prototype.toString;
function Rd(e) {
    switch (T0.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
        return !0;
    default:
        return Dn(e, Error)
    }
}
function Xi(e, t) {
    return T0.call(e) === `[object ${t}]`
}
function I0(e) {
    return Xi(e, "ErrorEvent")
}
function Nh(e) {
    return Xi(e, "DOMError")
}
function F6(e) {
    return Xi(e, "DOMException")
}
function Rn(e) {
    return Xi(e, "String")
}
function Ad(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__"in e && "__sentry_template_values__"in e
}
function Pd(e) {
    return e === null || Ad(e) || typeof e != "object" && typeof e != "function"
}
function Bi(e) {
    return Xi(e, "Object")
}
function Hl(e) {
    return typeof Event < "u" && Dn(e, Event)
}
function $6(e) {
    return typeof Element < "u" && Dn(e, Element)
}
function B6(e) {
    return Xi(e, "RegExp")
}
function Vl(e) {
    return !!(e && e.then && typeof e.then == "function")
}
function j6(e) {
    return Bi(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
}
function Dn(e, t) {
    try {
        return e instanceof t
    } catch {
        return !1
    }
}
function L0(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue))
}
function Ri(e, t=0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
}
function Mh(e, t) {
    if (!Array.isArray(e))
        return "";
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        try {
            L0(i) ? n.push("[VueViewModel]") : n.push(String(i))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(t)
}
function U6(e, t, n=!1) {
    return Rn(e) ? B6(t) ? t.test(e) : Rn(t) ? n ? e === t : e.includes(t) : !1 : !1
}
function lr(e, t=[], n=!1) {
    return t.some(r => U6(e, r, n))
}
function W6(e, t, n=250, r, i, o, s) {
    if (!o.exception || !o.exception.values || !s || !Dn(s.originalException, Error))
        return;
    const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
    a && (o.exception.values = z6(ef(e, t, i, s.originalException, r, o.exception.values, a, 0), n))
}
function ef(e, t, n, r, i, o, s, a) {
    if (o.length >= n + 1)
        return o;
    let l = [...o];
    if (Dn(r[i], Error)) {
        Dh(s, a);
        const u = e(t, r[i])
          , c = l.length;
        Fh(u, i, c, a),
        l = ef(e, t, n, r[i], i, [u, ...l], u, c)
    }
    return Array.isArray(r.errors) && r.errors.forEach( (u, c) => {
        if (Dn(u, Error)) {
            Dh(s, a);
            const f = e(t, u)
              , d = l.length;
            Fh(f, `errors[${c}]`, d, a),
            l = ef(e, t, n, u, i, [f, ...l], f, d)
        }
    }
    ),
    l
}
function Dh(e, t) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        ...e.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: t
    }
}
function Fh(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
function z6(e, t) {
    return e.map(n => (n.value && (n.value = Ri(n.value, t)),
    n))
}
const Fr = "8.29.0"
  , ue = globalThis;
function ql(e, t, n) {
    const r = ue
      , i = r.__SENTRY__ = r.__SENTRY__ || {}
      , o = i[Fr] = i[Fr] || {};
    return o[e] || (o[e] = t())
}
const Ai = ue
  , H6 = 80;
function Fn(e, t={}) {
    if (!e)
        return "<unknown>";
    try {
        let n = e;
        const r = 5
          , i = [];
        let o = 0
          , s = 0;
        const a = " > "
          , l = a.length;
        let u;
        const c = Array.isArray(t) ? t : t.keyAttrs
          , f = !Array.isArray(t) && t.maxStringLength || H6;
        for (; n && o++ < r && (u = V6(n, c),
        !(u === "html" || o > 1 && s + i.length * l + u.length >= f)); )
            i.push(u),
            s += u.length,
            n = n.parentNode;
        return i.reverse().join(a)
    } catch {
        return "<unknown>"
    }
}
function V6(e, t) {
    const n = e
      , r = [];
    if (!n || !n.tagName)
        return "";
    if (Ai.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        if (n.dataset.sentryElement)
            return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const i = t && t.length ? t.filter(s => n.getAttribute(s)).map(s => [s, n.getAttribute(s)]) : null;
    if (i && i.length)
        i.forEach(s => {
            r.push(`[${s[0]}="${s[1]}"]`)
        }
        );
    else {
        n.id && r.push(`#${n.id}`);
        const s = n.className;
        if (s && Rn(s)) {
            const a = s.split(/\s+/);
            for (const l of a)
                r.push(`.${l}`)
        }
    }
    const o = ["aria-label", "type", "name", "title", "alt"];
    for (const s of o) {
        const a = n.getAttribute(s);
        a && r.push(`[${s}="${a}"]`)
    }
    return r.join("")
}
function R0() {
    try {
        return Ai.document.location.href
    } catch {
        return ""
    }
}
function q6(e) {
    return Ai.document && Ai.document.querySelector ? Ai.document.querySelector(e) : null
}
function A0(e) {
    if (!Ai.HTMLElement)
        return null;
    let t = e;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!t)
            return null;
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent)
                return t.dataset.sentryComponent;
            if (t.dataset.sentryElement)
                return t.dataset.sentryElement
        }
        t = t.parentNode
    }
    return null
}
const Zi = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , K6 = "Sentry Logger "
  , tf = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  , al = {};
function eo(e) {
    if (!("console"in ue))
        return e();
    const t = ue.console
      , n = {}
      , r = Object.keys(al);
    r.forEach(i => {
        const o = al[i];
        n[i] = t[i],
        t[i] = o
    }
    );
    try {
        return e()
    } finally {
        r.forEach(i => {
            t[i] = n[i]
        }
        )
    }
}
function G6() {
    let e = !1;
    const t = {
        enable: () => {
            e = !0
        }
        ,
        disable: () => {
            e = !1
        }
        ,
        isEnabled: () => e
    };
    return Zi ? tf.forEach(n => {
        t[n] = (...r) => {
            e && eo( () => {
                ue.console[n](`${K6}[${n}]:`, ...r)
            }
            )
        }
    }
    ) : tf.forEach(n => {
        t[n] = () => {}
    }
    ),
    t
}
const P = ql("logger", G6)
  , Y6 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function J6(e) {
    return e === "http" || e === "https"
}
function xs(e, t=!1) {
    const {host: n, path: r, pass: i, port: o, projectId: s, protocol: a, publicKey: l} = e;
    return `${a}://${l}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${s}`
}
function Q6(e) {
    const t = Y6.exec(e);
    if (!t) {
        eo( () => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        }
        );
        return
    }
    const [n,r,i="",o="",s="",a=""] = t.slice(1);
    let l = ""
      , u = a;
    const c = u.split("/");
    if (c.length > 1 && (l = c.slice(0, -1).join("/"),
    u = c.pop()),
    u) {
        const f = u.match(/^\d+/);
        f && (u = f[0])
    }
    return P0({
        host: o,
        pass: i,
        path: l,
        projectId: u,
        port: s,
        protocol: n,
        publicKey: r
    })
}
function P0(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
    }
}
function X6(e) {
    if (!Zi)
        return !0;
    const {port: t, projectId: n, protocol: r} = e;
    return ["protocol", "publicKey", "host", "projectId"].find(s => e[s] ? !1 : (P.error(`Invalid Sentry Dsn: ${s} missing`),
    !0)) ? !1 : n.match(/^\d+$/) ? J6(r) ? t && isNaN(parseInt(t, 10)) ? (P.error(`Invalid Sentry Dsn: Invalid port ${t}`),
    !1) : !0 : (P.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
    !1) : (P.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
    !1)
}
function Z6(e) {
    const t = typeof e == "string" ? Q6(e) : P0(e);
    if (!(!t || !X6(t)))
        return t
}
class hn extends Error {
    constructor(t, n="warn") {
        super(t),
        this.message = t,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = n
    }
}
function kt(e, t, n) {
    if (!(t in e))
        return;
    const r = e[t]
      , i = n(r);
    typeof i == "function" && O0(i, r),
    e[t] = i
}
function Kt(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch {
        Zi && P.log(`Failed to add non-enumerable property "${t}" to object`, e)
    }
}
function O0(e, t) {
    try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        Kt(e, "__sentry_original__", t)
    } catch {}
}
function Od(e) {
    return e.__sentry_original__
}
function e5(e) {
    return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
}
function N0(e) {
    if (Rd(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...Bh(e)
        };
    if (Hl(e)) {
        const t = {
            type: e.type,
            target: $h(e.target),
            currentTarget: $h(e.currentTarget),
            ...Bh(e)
        };
        return typeof CustomEvent < "u" && Dn(e, CustomEvent) && (t.detail = e.detail),
        t
    } else
        return e
}
function $h(e) {
    try {
        return $6(e) ? Fn(e) : Object.prototype.toString.call(e)
    } catch {
        return "<unknown>"
    }
}
function Bh(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    } else
        return {}
}
function t5(e, t=40) {
    const n = Object.keys(N0(e));
    n.sort();
    const r = n[0];
    if (!r)
        return "[object has no keys]";
    if (r.length >= t)
        return Ri(r, t);
    for (let i = n.length; i > 0; i--) {
        const o = n.slice(0, i).join(", ");
        if (!(o.length > t))
            return i === n.length ? o : Ri(o, t)
    }
    return ""
}
function qe(e) {
    return nf(e, new Map)
}
function nf(e, t) {
    if (n5(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = {};
        t.set(e, r);
        for (const i of Object.keys(e))
            typeof e[i] < "u" && (r[i] = nf(e[i], t));
        return r
    }
    if (Array.isArray(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = [];
        return t.set(e, r),
        e.forEach(i => {
            r.push(nf(i, t))
        }
        ),
        r
    }
    return e
}
function n5(e) {
    if (!Bi(e))
        return !1;
    try {
        const t = Object.getPrototypeOf(e).constructor.name;
        return !t || t === "Object"
    } catch {
        return !0
    }
}
const M0 = 50
  , qr = "?"
  , jh = /\(error: (.*)\)/
  , Uh = /captureMessage|captureException/;
function D0(...e) {
    const t = e.sort( (n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r=0, i=0) => {
        const o = []
          , s = n.split(`
`);
        for (let a = r; a < s.length; a++) {
            const l = s[a];
            if (l.length > 1024)
                continue;
            const u = jh.test(l) ? l.replace(jh, "$1") : l;
            if (!u.match(/\S*Error: /)) {
                for (const c of t) {
                    const f = c(u);
                    if (f) {
                        o.push(f);
                        break
                    }
                }
                if (o.length >= M0 + i)
                    break
            }
        }
        return i5(o.slice(i))
    }
}
function r5(e) {
    return Array.isArray(e) ? D0(...e) : e
}
function i5(e) {
    if (!e.length)
        return [];
    const t = Array.from(e);
    return /sentryWrapped/.test(ra(t).function || "") && t.pop(),
    t.reverse(),
    Uh.test(ra(t).function || "") && (t.pop(),
    Uh.test(ra(t).function || "") && t.pop()),
    t.slice(0, M0).map(n => ({
        ...n,
        filename: n.filename || ra(t).filename,
        function: n.function || qr
    }))
}
function ra(e) {
    return e[e.length - 1] || {}
}
const qu = "<anonymous>";
function $n(e) {
    try {
        return !e || typeof e != "function" ? qu : e.name || qu
    } catch {
        return qu
    }
}
function Wh(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }
            ),
            n
        } catch {
            return
        }
    }
}
const Ta = {}
  , zh = {};
function _r(e, t) {
    Ta[e] = Ta[e] || [],
    Ta[e].push(t)
}
function Sr(e, t) {
    zh[e] || (t(),
    zh[e] = !0)
}
function Ht(e, t) {
    const n = e && Ta[e];
    if (n)
        for (const r of n)
            try {
                r(t)
            } catch (i) {
                Zi && P.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${$n(r)}
Error:`, i)
            }
}
function o5(e) {
    const t = "console";
    _r(t, e),
    Sr(t, s5)
}
function s5() {
    "console"in ue && tf.forEach(function(e) {
        e in ue.console && kt(ue.console, e, function(t) {
            return al[e] = t,
            function(...n) {
                Ht("console", {
                    args: n,
                    level: e
                });
                const i = al[e];
                i && i.apply(ue.console, n)
            }
        })
    })
}
const rf = ue;
function F0() {
    if (!("fetch"in rf))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch {
        return !1
    }
}
function of(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function a5() {
    if (typeof EdgeRuntime == "string")
        return !0;
    if (!F0())
        return !1;
    if (of(rf.fetch))
        return !0;
    let e = !1;
    const t = rf.document;
    if (t && typeof t.createElement == "function")
        try {
            const n = t.createElement("iframe");
            n.hidden = !0,
            t.head.appendChild(n),
            n.contentWindow && n.contentWindow.fetch && (e = of(n.contentWindow.fetch)),
            t.head.removeChild(n)
        } catch (n) {
            Zi && P.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return e
}
const $0 = 1e3;
function bs() {
    return Date.now() / $0
}
function l5() {
    const {performance: e} = ue;
    if (!e || !e.now)
        return bs;
    const t = Date.now() - e.now()
      , n = e.timeOrigin == null ? t : e.timeOrigin;
    return () => (n + e.now()) / $0
}
const mt = l5()
  , gt = ( () => {
    const {performance: e} = ue;
    if (!e || !e.now)
        return;
    const t = 3600 * 1e3
      , n = e.now()
      , r = Date.now()
      , i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
      , o = i < t
      , s = e.timing && e.timing.navigationStart
      , l = typeof s == "number" ? Math.abs(s + n - r) : t
      , u = l < t;
    return o || u ? i <= l ? e.timeOrigin : s : r
}
)();
function B0(e, t) {
    const n = "fetch";
    _r(n, e),
    Sr(n, () => j0(void 0, t))
}
function u5(e) {
    const t = "fetch-body-resolved";
    _r(t, e),
    Sr(t, () => j0(f5))
}
function j0(e, t=!1) {
    t && !a5() || kt(ue, "fetch", function(n) {
        return function(...r) {
            const {method: i, url: o} = d5(r)
              , s = {
                args: r,
                fetchData: {
                    method: i,
                    url: o
                },
                startTimestamp: mt() * 1e3
            };
            e || Ht("fetch", {
                ...s
            });
            const a = new Error().stack;
            return n.apply(ue, r).then(async l => (e ? e(l) : Ht("fetch", {
                ...s,
                endTimestamp: mt() * 1e3,
                response: l
            }),
            l), l => {
                throw Ht("fetch", {
                    ...s,
                    endTimestamp: mt() * 1e3,
                    error: l
                }),
                Rd(l) && l.stack === void 0 && (l.stack = a,
                Kt(l, "framesToPop", 1)),
                l
            }
            )
        }
    })
}
async function c5(e, t) {
    if (e && e.body && e.body.getReader) {
        const n = e.body.getReader();
        async function r({done: i}) {
            if (i)
                return Promise.resolve();
            try {
                const o = await Promise.race([n.read(), new Promise(s => {
                    setTimeout( () => {
                        s({
                            done: !0
                        })
                    }
                    , 5e3)
                }
                )]);
                await r(o)
            } catch {}
        }
        return n.read().then(r).then(t).catch( () => {}
        )
    }
}
async function f5(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    await c5(t, () => {
        Ht("fetch-body-resolved", {
            endTimestamp: mt() * 1e3,
            response: e
        })
    }
    )
}
function sf(e, t) {
    return !!e && typeof e == "object" && !!e[t]
}
function Hh(e) {
    return typeof e == "string" ? e : e ? sf(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}
function d5(e) {
    if (e.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (e.length === 2) {
        const [n,r] = e;
        return {
            url: Hh(n),
            method: sf(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const t = e[0];
    return {
        url: Hh(t),
        method: sf(t, "method") ? String(t.method).toUpperCase() : "GET"
    }
}
let ia = null;
function U0(e) {
    const t = "error";
    _r(t, e),
    Sr(t, p5)
}
function p5() {
    ia = ue.onerror,
    ue.onerror = function(e, t, n, r, i) {
        return Ht("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
        }),
        ia && !ia.__SENTRY_LOADER__ ? ia.apply(this, arguments) : !1
    }
    ,
    ue.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let oa = null;
function W0(e) {
    const t = "unhandledrejection";
    _r(t, e),
    Sr(t, h5)
}
function h5() {
    oa = ue.onunhandledrejection,
    ue.onunhandledrejection = function(e) {
        return Ht("unhandledrejection", e),
        oa && !oa.__SENTRY_LOADER__ ? oa.apply(this, arguments) : !0
    }
    ,
    ue.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function m5() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}
function g5() {
    return "npm"
}
function y5() {
    return !m5() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}
function Vh() {
    return typeof window < "u" && (!y5() || v5())
}
function v5() {
    return ue.process !== void 0 && ue.process.type === "renderer"
}
function _5() {
    const e = typeof WeakSet == "function"
      , t = e ? new WeakSet : [];
    function n(i) {
        if (e)
            return t.has(i) ? !0 : (t.add(i),
            !1);
        for (let o = 0; o < t.length; o++)
            if (t[o] === i)
                return !0;
        return t.push(i),
        !1
    }
    function r(i) {
        if (e)
            t.delete(i);
        else
            for (let o = 0; o < t.length; o++)
                if (t[o] === i) {
                    t.splice(o, 1);
                    break
                }
    }
    return [n, r]
}
function Le() {
    const e = ue
      , t = e.crypto || e.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return t.getRandomValues(r),
            r[0]
        }
        )
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}
function z0(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
}
function Hn(e) {
    const {message: t, event_id: n} = e;
    if (t)
        return t;
    const r = z0(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function af(e, t, n) {
    const r = e.exception = e.exception || {}
      , i = r.values = r.values || []
      , o = i[0] = i[0] || {};
    o.value || (o.value = t || ""),
    o.type || (o.type = "Error")
}
function cs(e, t) {
    const n = z0(e);
    if (!n)
        return;
    const r = {
        type: "generic",
        handled: !0
    }
      , i = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...i,
        ...t
    },
    t && "data"in t) {
        const o = {
            ...i && i.data,
            ...t.data
        };
        n.mechanism.data = o
    }
}
function qh(e) {
    if (e && e.__sentry_captured__)
        return !0;
    try {
        Kt(e, "__sentry_captured__", !0)
    } catch {}
    return !1
}
function H0(e) {
    return Array.isArray(e) ? e : [e]
}
function dn(e, t=100, n=1 / 0) {
    try {
        return lf("", e, t, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function V0(e, t=3, n=100 * 1024) {
    const r = dn(e, t);
    return C5(r) > n ? V0(e, t - 1, n) : r
}
function lf(e, t, n=1 / 0, r=1 / 0, i=_5()) {
    const [o,s] = i;
    if (t == null || ["number", "boolean", "string"].includes(typeof t) && !Number.isNaN(t))
        return t;
    const a = S5(e, t);
    if (!a.startsWith("[object "))
        return a;
    if (t.__sentry_skip_normalization__)
        return t;
    const l = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
    if (l === 0)
        return a.replace("object ", "");
    if (o(t))
        return "[Circular ~]";
    const u = t;
    if (u && typeof u.toJSON == "function")
        try {
            const m = u.toJSON();
            return lf("", m, l - 1, r, i)
        } catch {}
    const c = Array.isArray(t) ? [] : {};
    let f = 0;
    const d = N0(t);
    for (const m in d) {
        if (!Object.prototype.hasOwnProperty.call(d, m))
            continue;
        if (f >= r) {
            c[m] = "[MaxProperties ~]";
            break
        }
        const h = d[m];
        c[m] = lf(m, h, l - 1, r, i),
        f++
    }
    return s(t),
    c
}
function S5(e, t) {
    try {
        if (e === "domain" && t && typeof t == "object" && t._events)
            return "[Domain]";
        if (e === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && t === global)
            return "[Global]";
        if (typeof window < "u" && t === window)
            return "[Window]";
        if (typeof document < "u" && t === document)
            return "[Document]";
        if (L0(t))
            return "[VueViewModel]";
        if (j6(t))
            return "[SyntheticEvent]";
        if (typeof t == "number" && t !== t)
            return "[NaN]";
        if (typeof t == "function")
            return `[Function: ${$n(t)}]`;
        if (typeof t == "symbol")
            return `[${String(t)}]`;
        if (typeof t == "bigint")
            return `[BigInt: ${String(t)}]`;
        const n = E5(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
function E5(e) {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : "null prototype"
}
function w5(e) {
    return ~-encodeURI(e).split(/%..|./).length
}
function C5(e) {
    return w5(JSON.stringify(e))
}
var kn;
(function(e) {
    e[e.PENDING = 0] = "PENDING";
    const n = 1;
    e[e.RESOLVED = n] = "RESOLVED";
    const r = 2;
    e[e.REJECTED = r] = "REJECTED"
}
)(kn || (kn = {}));
function Bn(e) {
    return new Ut(t => {
        t(e)
    }
    )
}
function ll(e) {
    return new Ut( (t, n) => {
        n(e)
    }
    )
}
class Ut {
    constructor(t) {
        Ut.prototype.__init.call(this),
        Ut.prototype.__init2.call(this),
        Ut.prototype.__init3.call(this),
        Ut.prototype.__init4.call(this),
        this._state = kn.PENDING,
        this._handlers = [];
        try {
            t(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(t, n) {
        return new Ut( (r, i) => {
            this._handlers.push([!1, o => {
                if (!t)
                    r(o);
                else
                    try {
                        r(t(o))
                    } catch (s) {
                        i(s)
                    }
            }
            , o => {
                if (!n)
                    i(o);
                else
                    try {
                        r(n(o))
                    } catch (s) {
                        i(s)
                    }
            }
            ]),
            this._executeHandlers()
        }
        )
    }
    catch(t) {
        return this.then(n => n, t)
    }
    finally(t) {
        return new Ut( (n, r) => {
            let i, o;
            return this.then(s => {
                o = !1,
                i = s,
                t && t()
            }
            , s => {
                o = !0,
                i = s,
                t && t()
            }
            ).then( () => {
                if (o) {
                    r(i);
                    return
                }
                n(i)
            }
            )
        }
        )
    }
    __init() {
        this._resolve = t => {
            this._setResult(kn.RESOLVED, t)
        }
    }
    __init2() {
        this._reject = t => {
            this._setResult(kn.REJECTED, t)
        }
    }
    __init3() {
        this._setResult = (t, n) => {
            if (this._state === kn.PENDING) {
                if (Vl(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = t,
                this._value = n,
                this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === kn.PENDING)
                return;
            const t = this._handlers.slice();
            this._handlers = [],
            t.forEach(n => {
                n[0] || (this._state === kn.RESOLVED && n[1](this._value),
                this._state === kn.REJECTED && n[2](this._value),
                n[0] = !0)
            }
            )
        }
    }
}
function k5(e) {
    const t = [];
    function n() {
        return e === void 0 || t.length < e
    }
    function r(s) {
        return t.splice(t.indexOf(s), 1)[0] || Promise.resolve(void 0)
    }
    function i(s) {
        if (!n())
            return ll(new hn("Not adding Promise because buffer limit was reached."));
        const a = s();
        return t.indexOf(a) === -1 && t.push(a),
        a.then( () => r(a)).then(null, () => r(a).then(null, () => {}
        )),
        a
    }
    function o(s) {
        return new Ut( (a, l) => {
            let u = t.length;
            if (!u)
                return a(!0);
            const c = setTimeout( () => {
                s && s > 0 && a(!1)
            }
            , s);
            t.forEach(f => {
                Bn(f).then( () => {
                    --u || (clearTimeout(c),
                    a(!0))
                }
                , l)
            }
            )
        }
        )
    }
    return {
        $: t,
        add: i,
        drain: o
    }
}
function $r(e) {
    if (!e)
        return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t)
        return {};
    const n = t[6] || ""
      , r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}
const x5 = ["fatal", "error", "warning", "log", "info", "debug"];
function b5(e) {
    return e === "warn" ? "warning" : x5.includes(e) ? e : "log"
}
const uf = "baggage"
  , q0 = "sentry-"
  , T5 = /^sentry-/
  , I5 = 8192;
function K0(e) {
    const t = L5(e);
    if (!t)
        return;
    const n = Object.entries(t).reduce( (r, [i,o]) => {
        if (i.match(T5)) {
            const s = i.slice(q0.length);
            r[s] = o
        }
        return r
    }
    , {});
    if (Object.keys(n).length > 0)
        return n
}
function G0(e) {
    if (!e)
        return;
    const t = Object.entries(e).reduce( (n, [r,i]) => (i && (n[`${q0}${r}`] = i),
    n), {});
    return R5(t)
}
function L5(e) {
    if (!(!e || !Rn(e) && !Array.isArray(e)))
        return Array.isArray(e) ? e.reduce( (t, n) => {
            const r = Kh(n);
            return Object.entries(r).forEach( ([i,o]) => {
                t[i] = o
            }
            ),
            t
        }
        , {}) : Kh(e)
}
function Kh(e) {
    return e.split(",").map(t => t.split("=").map(n => decodeURIComponent(n.trim()))).reduce( (t, [n,r]) => (n && r && (t[n] = r),
    t), {})
}
function R5(e) {
    if (Object.keys(e).length !== 0)
        return Object.entries(e).reduce( (t, [n,r], i) => {
            const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`
              , s = i === 0 ? o : `${t},${o}`;
            return s.length > I5 ? (Zi && P.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
            t) : s
        }
        , "")
}
const A5 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function P5(e) {
    if (!e)
        return;
    const t = e.match(A5);
    if (!t)
        return;
    let n;
    return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1),
    {
        traceId: t[1],
        parentSampled: n,
        parentSpanId: t[2]
    }
}
function O5(e, t) {
    const n = P5(e)
      , r = K0(t)
      , {traceId: i, parentSpanId: o, parentSampled: s} = n || {};
    return n ? {
        traceId: i || Le(),
        parentSpanId: o || Le().substring(16),
        spanId: Le().substring(16),
        sampled: s,
        dsc: r || {}
    } : {
        traceId: i || Le(),
        spanId: Le().substring(16)
    }
}
function Nd(e=Le(), t=Le().substring(16), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"),
    `${e}-${t}${r}`
}
function Jr(e, t=[]) {
    return [e, t]
}
function N5(e, t) {
    const [n,r] = e;
    return [n, [...r, t]]
}
function Gh(e, t) {
    const n = e[1];
    for (const r of n) {
        const i = r[0].type;
        if (t(r, i))
            return !0
    }
    return !1
}
function cf(e) {
    return ue.__SENTRY__ && ue.__SENTRY__.encodePolyfill ? ue.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
}
function M5(e) {
    const [t,n] = e;
    let r = JSON.stringify(t);
    function i(o) {
        typeof r == "string" ? r = typeof o == "string" ? r + o : [cf(r), o] : r.push(typeof o == "string" ? cf(o) : o)
    }
    for (const o of n) {
        const [s,a] = o;
        if (i(`
${JSON.stringify(s)}
`),
        typeof a == "string" || a instanceof Uint8Array)
            i(a);
        else {
            let l;
            try {
                l = JSON.stringify(a)
            } catch {
                l = JSON.stringify(dn(a))
            }
            i(l)
        }
    }
    return typeof r == "string" ? r : D5(r)
}
function D5(e) {
    const t = e.reduce( (i, o) => i + o.length, 0)
      , n = new Uint8Array(t);
    let r = 0;
    for (const i of e)
        n.set(i, r),
        r += i.length;
    return n
}
function F5(e) {
    return [{
        type: "span"
    }, e]
}
function $5(e) {
    const t = typeof e.data == "string" ? cf(e.data) : e.data;
    return [qe({
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }), t]
}
const B5 = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};
function Yh(e) {
    return B5[e]
}
function Md(e) {
    if (!e || !e.sdk)
        return;
    const {name: t, version: n} = e.sdk;
    return {
        name: t,
        version: n
    }
}
function Y0(e, t, n, r) {
    const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && {
            sdk: t
        },
        ...!!n && r && {
            dsn: xs(r)
        },
        ...i && {
            trace: qe({
                ...i
            })
        }
    }
}
function j5(e, t, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: bs(),
        discarded_events: e
    }];
    return Jr(t ? {
        dsn: t
    } : {}, [r])
}
const U5 = 60 * 1e3;
function W5(e, t=Date.now()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? U5 : r - t
}
function z5(e, t) {
    return e[t] || e.all || 0
}
function J0(e, t, n=Date.now()) {
    return z5(e, t) > n
}
function Q0(e, {statusCode: t, headers: n}, r=Date.now()) {
    const i = {
        ...e
    }
      , o = n && n["x-sentry-rate-limits"]
      , s = n && n["retry-after"];
    if (o)
        for (const a of o.trim().split(",")) {
            const [l,u,,,c] = a.split(":", 5)
              , f = parseInt(l, 10)
              , d = (isNaN(f) ? 60 : f) * 1e3;
            if (!u)
                i.all = r + d;
            else
                for (const m of u.split(";"))
                    m === "metric_bucket" ? (!c || c.split(";").includes("custom")) && (i[m] = r + d) : i[m] = r + d
        }
    else
        s ? i.all = r + W5(s, r) : t === 429 && (i.all = r + 60 * 1e3);
    return i
}
function H5(e, t) {
    return e ?? t()
}
function wt(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
function ul() {
    return {
        traceId: Le(),
        spanId: Le().substring(16)
    }
}
const sa = ue;
function V5() {
    const e = sa.chrome
      , t = e && e.app && e.app.runtime
      , n = "history"in sa && !!sa.history.pushState && !!sa.history.replaceState;
    return !t && n
}
const Z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function to() {
    return Dd(ue),
    ue
}
function Dd(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || Fr,
    t[Fr] = t[Fr] || {}
}
function q5(e) {
    const t = mt()
      , n = {
        sid: Le(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => G5(n)
    };
    return e && ji(n, e),
    n
}
function ji(e, t={}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
    !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    e.timestamp = t.timestamp || mt(),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Le()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
        e.duration = void 0;
    else if (typeof t.duration == "number")
        e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0
    }
    t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status)
}
function K5(e, t) {
    let n = {};
    e.status === "ok" && (n = {
        status: "exited"
    }),
    ji(e, n)
}
function G5(e) {
    return qe({
        sid: `${e.sid}`,
        init: e.init,
        started: new Date(e.started * 1e3).toISOString(),
        timestamp: new Date(e.timestamp * 1e3).toISOString(),
        status: e.status,
        errors: e.errors,
        did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
        duration: e.duration,
        abnormal_mechanism: e.abnormal_mechanism,
        attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
        }
    })
}
const ff = "_sentrySpan";
function fs(e, t) {
    t ? Kt(e, ff, t) : delete e[ff]
}
function cl(e) {
    return e[ff]
}
const Y5 = 100;
class Fd {
    constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {},
        this._propagationContext = ul()
    }
    clone() {
        const t = new Fd;
        return t._breadcrumbs = [...this._breadcrumbs],
        t._tags = {
            ...this._tags
        },
        t._extra = {
            ...this._extra
        },
        t._contexts = {
            ...this._contexts
        },
        t._user = this._user,
        t._level = this._level,
        t._session = this._session,
        t._transactionName = this._transactionName,
        t._fingerprint = this._fingerprint,
        t._eventProcessors = [...this._eventProcessors],
        t._requestSession = this._requestSession,
        t._attachments = [...this._attachments],
        t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        },
        t._propagationContext = {
            ...this._propagationContext
        },
        t._client = this._client,
        t._lastEventId = this._lastEventId,
        fs(t, cl(this)),
        t
    }
    setClient(t) {
        this._client = t
    }
    setLastEventId(t) {
        this._lastEventId = t
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(t) {
        this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t),
        this
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
        this._session && ji(this._session, {
            user: t
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(t) {
        return this._requestSession = t,
        this
    }
    setTags(t) {
        return this._tags = {
            ...this._tags,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(t, n) {
        return this._tags = {
            ...this._tags,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(t) {
        return this._extra = {
            ...this._extra,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(t, n) {
        return this._extra = {
            ...this._extra,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(t) {
        return this._fingerprint = t,
        this._notifyScopeListeners(),
        this
    }
    setLevel(t) {
        return this._level = t,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(t) {
        return this._transactionName = t,
        this._notifyScopeListeners(),
        this
    }
    setContext(t, n) {
        return n === null ? delete this._contexts[t] : this._contexts[t] = n,
        this._notifyScopeListeners(),
        this
    }
    setSession(t) {
        return t ? this._session = t : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(t) {
        if (!t)
            return this;
        const n = typeof t == "function" ? t(this) : t
          , [r,i] = n instanceof Kr ? [n.getScopeData(), n.getRequestSession()] : Bi(n) ? [t, t.requestSession] : []
          , {tags: o, extra: s, user: a, contexts: l, level: u, fingerprint: c=[], propagationContext: f} = r || {};
        return this._tags = {
            ...this._tags,
            ...o
        },
        this._extra = {
            ...this._extra,
            ...s
        },
        this._contexts = {
            ...this._contexts,
            ...l
        },
        a && Object.keys(a).length && (this._user = a),
        u && (this._level = u),
        c.length && (this._fingerprint = c),
        f && (this._propagationContext = f),
        i && (this._requestSession = i),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._session = void 0,
        fs(this, void 0),
        this._attachments = [],
        this._propagationContext = ul(),
        this._notifyScopeListeners(),
        this
    }
    addBreadcrumb(t, n) {
        const r = typeof n == "number" ? n : Y5;
        if (r <= 0)
            return this;
        const i = {
            timestamp: bs(),
            ...t
        }
          , o = this._breadcrumbs;
        return o.push(i),
        this._breadcrumbs = o.length > r ? o.slice(-r) : o,
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(t) {
        return this._attachments.push(t),
        this
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: cl(this)
        }
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...t
        },
        this
    }
    setPropagationContext(t) {
        return this._propagationContext = t,
        this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(t, n) {
        const r = n && n.event_id ? n.event_id : Le();
        if (!this._client)
            return P.warn("No client configured on scope - will not capture exception!"),
            r;
        const i = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: i,
            ...n,
            event_id: r
        }, this),
        r
    }
    captureMessage(t, n, r) {
        const i = r && r.event_id ? r.event_id : Le();
        if (!this._client)
            return P.warn("No client configured on scope - will not capture message!"),
            i;
        const o = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: o,
            ...r,
            event_id: i
        }, this),
        i
    }
    captureEvent(t, n) {
        const r = n && n.event_id ? n.event_id : Le();
        return this._client ? (this._client.captureEvent(t, {
            ...n,
            event_id: r
        }, this),
        r) : (P.warn("No client configured on scope - will not capture event!"),
        r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(t => {
            t(this)
        }
        ),
        this._notifyingListeners = !1)
    }
}
const Kr = Fd;
function J5() {
    return ql("defaultCurrentScope", () => new Kr)
}
function Q5() {
    return ql("defaultIsolationScope", () => new Kr)
}
class X5 {
    constructor(t, n) {
        let r;
        t ? r = t : r = new Kr;
        let i;
        n ? i = n : i = new Kr,
        this._stack = [{
            scope: r
        }],
        this._isolationScope = i
    }
    withScope(t) {
        const n = this._pushScope();
        let r;
        try {
            r = t(n)
        } catch (i) {
            throw this._popScope(),
            i
        }
        return Vl(r) ? r.then(i => (this._popScope(),
        i), i => {
            throw this._popScope(),
            i
        }
        ) : (this._popScope(),
        r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const t = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: t
        }),
        t
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}
function Ui() {
    const e = to()
      , t = Dd(e);
    return t.stack = t.stack || new X5(J5(),Q5())
}
function Z5(e) {
    return Ui().withScope(e)
}
function e_(e, t) {
    const n = Ui();
    return n.withScope( () => (n.getStackTop().scope = e,
    t(e)))
}
function Jh(e) {
    return Ui().withScope( () => e(Ui().getIsolationScope()))
}
function t_() {
    return {
        withIsolationScope: Jh,
        withScope: Z5,
        withSetScope: e_,
        withSetIsolationScope: (e, t) => Jh(t),
        getCurrentScope: () => Ui().getScope(),
        getIsolationScope: () => Ui().getIsolationScope()
    }
}
function Ts(e) {
    const t = Dd(e);
    return t.acs ? t.acs : t_()
}
function Te() {
    const e = to();
    return Ts(e).getCurrentScope()
}
function Gt() {
    const e = to();
    return Ts(e).getIsolationScope()
}
function n_() {
    return ql("globalScope", () => new Kr)
}
function $d(...e) {
    const t = to()
      , n = Ts(t);
    if (e.length === 2) {
        const [r,i] = e;
        return r ? n.withSetScope(r, i) : n.withScope(i)
    }
    return n.withScope(e[0])
}
function le() {
    return Te().getClient()
}
const r_ = "_sentryMetrics";
function df(e) {
    const t = e[r_];
    if (!t)
        return;
    const n = {};
    for (const [,[r,i]] of t)
        (n[r] || (n[r] = [])).push(qe(i));
    return n
}
const gn = "sentry.source"
  , X0 = "sentry.sample_rate"
  , pr = "sentry.op"
  , Ke = "sentry.origin"
  , pf = "sentry.idle_span_finish_reason"
  , Kl = "sentry.measurement_unit"
  , Gl = "sentry.measurement_value"
  , i_ = "sentry.profile_id"
  , Bd = "sentry.exclusive_time"
  , o_ = 0
  , Z0 = 1
  , Ge = 2;
function s_(e) {
    if (e < 400 && e >= 100)
        return {
            code: Z0
        };
    if (e >= 400 && e < 500)
        switch (e) {
        case 401:
            return {
                code: Ge,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: Ge,
                message: "permission_denied"
            };
        case 404:
            return {
                code: Ge,
                message: "not_found"
            };
        case 409:
            return {
                code: Ge,
                message: "already_exists"
            };
        case 413:
            return {
                code: Ge,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: Ge,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: Ge,
                message: "cancelled"
            };
        default:
            return {
                code: Ge,
                message: "invalid_argument"
            }
        }
    if (e >= 500 && e < 600)
        switch (e) {
        case 501:
            return {
                code: Ge,
                message: "unimplemented"
            };
        case 503:
            return {
                code: Ge,
                message: "unavailable"
            };
        case 504:
            return {
                code: Ge,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: Ge,
                message: "internal_error"
            }
        }
    return {
        code: Ge,
        message: "unknown_error"
    }
}
function e2(e, t) {
    e.setAttribute("http.response.status_code", t);
    const n = s_(t);
    n.message !== "unknown_error" && e.setStatus(n)
}
const t2 = 0
  , n2 = 1;
function a_(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {data: r, op: i, parent_span_id: o, status: s, origin: a} = he(e);
    return qe({
        parent_span_id: o,
        span_id: t,
        trace_id: n,
        data: r,
        op: i,
        status: s,
        origin: a
    })
}
function l_(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {parent_span_id: r} = he(e);
    return qe({
        parent_span_id: r,
        span_id: t,
        trace_id: n
    })
}
function r2(e) {
    const {traceId: t, spanId: n} = e.spanContext()
      , r = Qr(e);
    return Nd(t, n, r)
}
function Br(e) {
    return typeof e == "number" ? Qh(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Qh(e.getTime()) : mt()
}
function Qh(e) {
    return e > 9999999999 ? e / 1e3 : e
}
function he(e) {
    if (c_(e))
        return e.getSpanJSON();
    try {
        const {spanId: t, traceId: n} = e.spanContext();
        if (u_(e)) {
            const {attributes: r, startTime: i, name: o, endTime: s, parentSpanId: a, status: l} = e;
            return qe({
                span_id: t,
                trace_id: n,
                data: r,
                description: o,
                parent_span_id: a,
                start_timestamp: Br(i),
                timestamp: Br(s) || void 0,
                status: i2(l),
                op: r[pr],
                origin: r[Ke],
                _metrics_summary: df(e)
            })
        }
        return {
            span_id: t,
            trace_id: n
        }
    } catch {
        return {}
    }
}
function u_(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}
function c_(e) {
    return typeof e.getSpanJSON == "function"
}
function Qr(e) {
    const {traceFlags: t} = e.spanContext();
    return t === n2
}
function i2(e) {
    if (!(!e || e.code === o_))
        return e.code === Z0 ? "ok" : e.message || "unknown_error"
}
const jr = "_sentryChildSpans"
  , hf = "_sentryRootSpan";
function o2(e, t) {
    const n = e[hf] || e;
    Kt(t, hf, n),
    e[jr] ? e[jr].add(t) : Kt(e, jr, new Set([t]))
}
function f_(e, t) {
    e[jr] && e[jr].delete(t)
}
function Ia(e) {
    const t = new Set;
    function n(r) {
        if (!t.has(r) && Qr(r)) {
            t.add(r);
            const i = r[jr] ? Array.from(r[jr]) : [];
            for (const o of i)
                n(o)
        }
    }
    return n(e),
    Array.from(t)
}
function tt(e) {
    return e[hf] || e
}
function ut() {
    const e = to()
      , t = Ts(e);
    return t.getActiveSpan ? t.getActiveSpan() : cl(Te())
}
let Xh = !1;
function d_() {
    Xh || (Xh = !0,
    U0(mf),
    W0(mf))
}
function mf() {
    const e = ut()
      , t = e && tt(e);
    if (t) {
        const n = "internal_error";
        Z && P.log(`[Tracing] Root span: ${n} -> Global error occured`),
        t.setStatus({
            code: Ge,
            message: n
        })
    }
}
mf.tag = "sentry_tracingErrorCallback";
const s2 = "_sentryScope"
  , a2 = "_sentryIsolationScope";
function p_(e, t, n) {
    e && (Kt(e, a2, n),
    Kt(e, s2, t))
}
function Zh(e) {
    return {
        scope: e[s2],
        isolationScope: e[a2]
    }
}
function hr(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
        return !1;
    const t = le()
      , n = e || t && t.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
}
class no {
    constructor(t={}) {
        this._traceId = t.traceId || Le(),
        this._spanId = t.spanId || Le().substring(16)
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: t2
        }
    }
    end(t) {}
    setAttribute(t, n) {
        return this
    }
    setAttributes(t) {
        return this
    }
    setStatus(t) {
        return this
    }
    updateName(t) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(t, n, r) {
        return this
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
}
const jd = "production"
  , l2 = "_frozenDsc";
function e1(e, t) {
    Kt(e, l2, t)
}
function Yl(e, t) {
    const n = t.getOptions()
      , {publicKey: r} = t.getDsn() || {}
      , i = qe({
        environment: n.environment || jd,
        release: n.release,
        public_key: r,
        trace_id: e
    });
    return t.emit("createDsc", i),
    i
}
function Xr(e) {
    const t = le();
    if (!t)
        return {};
    const n = Yl(he(e).trace_id || "", t)
      , r = tt(e)
      , i = r[l2];
    if (i)
        return i;
    const o = r.spanContext().traceState
      , s = o && o.get("sentry.dsc")
      , a = s && K0(s);
    if (a)
        return a;
    const l = he(r)
      , u = l.data || {}
      , c = u[X0];
    c != null && (n.sample_rate = `${c}`);
    const f = u[gn]
      , d = l.description;
    return f !== "url" && d && (n.transaction = d),
    n.sampled = String(Qr(r)),
    t.emit("createDsc", n, r),
    n
}
function h_(e) {
    if (!Z)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: r} = he(e)
      , {spanId: i} = e.spanContext()
      , o = Qr(e)
      , s = tt(e)
      , a = s === e
      , l = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${a ? "root " : ""}span`
      , u = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
    if (r && u.push(`parent ID: ${r}`),
    !a) {
        const {op: c, description: f} = he(s);
        u.push(`root ID: ${s.spanContext().spanId}`),
        c && u.push(`root op: ${c}`),
        f && u.push(`root description: ${f}`)
    }
    P.log(`${l}
  ${u.join(`
  `)}`)
}
function m_(e) {
    if (!Z)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >"} = he(e)
      , {spanId: r} = e.spanContext()
      , o = tt(e) === e
      , s = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${t}" with ID ${r}`;
    P.log(s)
}
function fl(e) {
    if (typeof e == "boolean")
        return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
        Z && P.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
        return
    }
    return t
}
function g_(e, t) {
    if (!hr(e))
        return [!1];
    let n;
    typeof e.tracesSampler == "function" ? n = e.tracesSampler(t) : t.parentSampled !== void 0 ? n = t.parentSampled : typeof e.tracesSampleRate < "u" ? n = e.tracesSampleRate : n = 1;
    const r = fl(n);
    return r === void 0 ? (Z && P.warn("[Tracing] Discarding transaction because of invalid sample rate."),
    [!1]) : r ? Math.random() < r ? [!0, r] : (Z && P.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),
    [!1, r]) : (Z && P.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
    [!1, r])
}
function y_(e, t) {
    return t && (e.sdk = e.sdk || {},
    e.sdk.name = e.sdk.name || t.name,
    e.sdk.version = e.sdk.version || t.version,
    e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
    e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]),
    e
}
function v_(e, t, n, r) {
    const i = Md(n)
      , o = {
        sent_at: new Date().toISOString(),
        ...i && {
            sdk: i
        },
        ...!!r && t && {
            dsn: xs(t)
        }
    }
      , s = "aggregates"in e ? [{
        type: "sessions"
    }, e] : [{
        type: "session"
    }, e.toJSON()];
    return Jr(o, [s])
}
function __(e, t, n, r) {
    const i = Md(n)
      , o = e.type && e.type !== "replay_event" ? e.type : "event";
    y_(e, n && n.sdk);
    const s = Y0(e, i, r, t);
    return delete e.sdkProcessingMetadata,
    Jr(s, [[{
        type: o
    }, e]])
}
function S_(e, t) {
    function n(c) {
        return !!c.trace_id && !!c.public_key
    }
    const r = Xr(e[0])
      , i = t && t.getDsn()
      , o = t && t.getOptions().tunnel
      , s = {
        sent_at: new Date().toISOString(),
        ...n(r) && {
            trace: r
        },
        ...!!o && i && {
            dsn: xs(i)
        }
    }
      , a = t && t.getOptions().beforeSendSpan
      , l = a ? c => a(he(c)) : c => he(c)
      , u = [];
    for (const c of e) {
        const f = l(c);
        f && u.push(F5(f))
    }
    return Jr(s, u)
}
function E_(e, t, n) {
    const r = ut()
      , i = r && tt(r);
    i && i.addEvent(e, {
        [Gl]: t,
        [Kl]: n
    })
}
function t1(e) {
    if (!e || e.length === 0)
        return;
    const t = {};
    return e.forEach(n => {
        const r = n.attributes || {}
          , i = r[Kl]
          , o = r[Gl];
        typeof i == "string" && typeof o == "number" && (t[n.name] = {
            value: o,
            unit: i
        })
    }
    ),
    t
}
const n1 = 1e3;
class Ud {
    constructor(t={}) {
        this._traceId = t.traceId || Le(),
        this._spanId = t.spanId || Le().substring(16),
        this._startTime = t.startTimestamp || mt(),
        this._attributes = {},
        this.setAttributes({
            [Ke]: "manual",
            [pr]: t.op,
            ...t.attributes
        }),
        this._name = t.name,
        t.parentSpanId && (this._parentSpanId = t.parentSpanId),
        "sampled"in t && (this._sampled = t.sampled),
        t.endTimestamp && (this._endTime = t.endTimestamp),
        this._events = [],
        this._isStandaloneSpan = t.isStandalone,
        this._endTime && this._onSpanEnded()
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
    spanContext() {
        const {_spanId: t, _traceId: n, _sampled: r} = this;
        return {
            spanId: t,
            traceId: n,
            traceFlags: r ? n2 : t2
        }
    }
    setAttribute(t, n) {
        return n === void 0 ? delete this._attributes[t] : this._attributes[t] = n,
        this
    }
    setAttributes(t) {
        return Object.keys(t).forEach(n => this.setAttribute(n, t[n])),
        this
    }
    updateStartTime(t) {
        this._startTime = Br(t)
    }
    setStatus(t) {
        return this._status = t,
        this
    }
    updateName(t) {
        return this._name = t,
        this
    }
    end(t) {
        this._endTime || (this._endTime = Br(t),
        m_(this),
        this._onSpanEnded())
    }
    getSpanJSON() {
        return qe({
            data: this._attributes,
            description: this._name,
            op: this._attributes[pr],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: i2(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[Ke],
            _metrics_summary: df(this),
            profile_id: this._attributes[i_],
            exclusive_time: this._attributes[Bd],
            measurements: t1(this._events),
            is_segment: this._isStandaloneSpan && tt(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? tt(this).spanContext().spanId : void 0
        })
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(t, n, r) {
        Z && P.log("[Tracing] Adding an event to span:", t);
        const i = r1(n) ? n : r || mt()
          , o = r1(n) ? {} : n || {}
          , s = {
            name: t,
            time: Br(i),
            attributes: o
        };
        return this._events.push(s),
        this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        const t = le();
        if (t && t.emit("spanEnd", this),
        !(this._isStandaloneSpan || this === tt(this)))
            return;
        if (this._isStandaloneSpan) {
            this._sampled ? C_(S_([this], t)) : (Z && P.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
            t && t.recordDroppedEvent("sample_rate", "span"));
            return
        }
        const r = this._convertSpanToTransaction();
        r && (Zh(this).scope || Te()).captureEvent(r)
    }
    _convertSpanToTransaction() {
        if (!i1(he(this)))
            return;
        this._name || (Z && P.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        this._name = "<unlabeled transaction>");
        const {scope: t, isolationScope: n} = Zh(this)
          , i = (t || Te()).getClient() || le();
        if (this._sampled !== !0) {
            Z && P.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
            i && i.recordDroppedEvent("sample_rate", "transaction");
            return
        }
        const s = Ia(this).filter(f => f !== this && !w_(f)).map(f => he(f)).filter(i1)
          , a = this._attributes[gn]
          , l = {
            contexts: {
                trace: a_(this)
            },
            spans: s.length > n1 ? s.sort( (f, d) => f.start_timestamp - d.start_timestamp).slice(0, n1) : s,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: t,
                capturedSpanIsolationScope: n,
                ...qe({
                    dynamicSamplingContext: Xr(this)
                })
            },
            _metrics_summary: df(this),
            ...a && {
                transaction_info: {
                    source: a
                }
            }
        }
          , u = t1(this._events);
        return u && Object.keys(u).length && (Z && P.log("[Measurements] Adding measurements to transaction event", JSON.stringify(u, void 0, 2)),
        l.measurements = u),
        l
    }
}
function r1(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e)
}
function i1(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
function w_(e) {
    return e instanceof Ud && e.isStandaloneSpan()
}
function C_(e) {
    const t = le();
    if (!t)
        return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return
    }
    const r = t.getTransport();
    r && r.send(e).then(null, i => {
        Z && P.error("Error while sending span:", i)
    }
    )
}
const u2 = "__SENTRY_SUPPRESS_TRACING__";
function Er(e) {
    const t = f2();
    if (t.startInactiveSpan)
        return t.startInactiveSpan(e);
    const n = x_(e)
      , {forceTransaction: r, parentSpan: i} = e;
    return (e.scope ? s => $d(e.scope, s) : i !== void 0 ? s => c2(i, s) : s => s())( () => {
        const s = Te()
          , a = T_(s);
        return e.onlyIfParent && !a ? new no : k_({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: s
        })
    }
    )
}
function c2(e, t) {
    const n = f2();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : $d(r => (fs(r, e || void 0),
    t(r)))
}
function k_({parentSpan: e, spanArguments: t, forceTransaction: n, scope: r}) {
    if (!hr())
        return new no;
    const i = Gt();
    let o;
    if (e && !n)
        o = b_(e, r, t),
        o2(e, o);
    else if (e) {
        const s = Xr(e)
          , {traceId: a, spanId: l} = e.spanContext()
          , u = Qr(e);
        o = o1({
            traceId: a,
            parentSpanId: l,
            ...t
        }, r, u),
        e1(o, s)
    } else {
        const {traceId: s, dsc: a, parentSpanId: l, sampled: u} = {
            ...i.getPropagationContext(),
            ...r.getPropagationContext()
        };
        o = o1({
            traceId: s,
            parentSpanId: l,
            ...t
        }, r, u),
        a && e1(o, a)
    }
    return h_(o),
    p_(o, r, i),
    o
}
function x_(e) {
    const n = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const r = {
            ...n
        };
        return r.startTimestamp = Br(e.startTime),
        delete r.startTime,
        r
    }
    return n
}
function f2() {
    const e = to();
    return Ts(e)
}
function o1(e, t, n) {
    const r = le()
      , i = r && r.getOptions() || {}
      , {name: o="", attributes: s} = e
      , [a,l] = t.getScopeData().sdkProcessingMetadata[u2] ? [!1] : g_(i, {
        name: o,
        parentSampled: n,
        attributes: s,
        transactionContext: {
            name: o,
            parentSampled: n
        }
    })
      , u = new Ud({
        ...e,
        attributes: {
            [gn]: "custom",
            ...e.attributes
        },
        sampled: a
    });
    return l !== void 0 && u.setAttribute(X0, l),
    r && r.emit("spanStart", u),
    u
}
function b_(e, t, n) {
    const {spanId: r, traceId: i} = e.spanContext()
      , o = t.getScopeData().sdkProcessingMetadata[u2] ? !1 : Qr(e)
      , s = o ? new Ud({
        ...n,
        parentSpanId: r,
        traceId: i,
        sampled: o
    }) : new no({
        traceId: i
    });
    o2(e, s);
    const a = le();
    return a && (a.emit("spanStart", s),
    n.endTimestamp && a.emit("spanEnd", s)),
    s
}
function T_(e) {
    const t = cl(e);
    if (!t)
        return;
    const n = le();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? tt(t) : t
}
const La = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
}
  , I_ = "heartbeatFailed"
  , L_ = "idleTimeout"
  , R_ = "finalTimeout"
  , A_ = "externalFinish";
function d2(e, t={}) {
    const n = new Map;
    let r = !1, i, o = A_, s = !t.disableAutoFinish;
    const a = []
      , {idleTimeout: l=La.idleTimeout, finalTimeout: u=La.finalTimeout, childSpanTimeout: c=La.childSpanTimeout, beforeSpanEnd: f} = t
      , d = le();
    if (!d || !hr())
        return new no;
    const m = Te()
      , h = ut()
      , v = P_(e);
    v.end = new Proxy(v.end,{
        apply(b, w, I) {
            f && f(v);
            const [W,...T] = I
              , D = W || mt()
              , z = Br(D)
              , ee = Ia(v).filter(L => L !== v);
            if (!ee.length)
                return x(z),
                Reflect.apply(b, w, [z, ...T]);
            const ne = ee.map(L => he(L).timestamp).filter(L => !!L)
              , me = ne.length ? Math.max(...ne) : void 0
              , H = he(v).start_timestamp
              , _e = Math.min(H ? H + u / 1e3 : 1 / 0, Math.max(H || -1 / 0, Math.min(z, me || 1 / 0)));
            return x(_e),
            Reflect.apply(b, w, [_e, ...T])
        }
    });
    function k() {
        i && (clearTimeout(i),
        i = void 0)
    }
    function g(b) {
        k(),
        i = setTimeout( () => {
            !r && n.size === 0 && s && (o = L_,
            v.end(b))
        }
        , l)
    }
    function p(b) {
        i = setTimeout( () => {
            !r && s && (o = I_,
            v.end(b))
        }
        , c)
    }
    function y(b) {
        k(),
        n.set(b, !0);
        const w = mt();
        p(w + c / 1e3)
    }
    function E(b) {
        if (n.has(b) && n.delete(b),
        n.size === 0) {
            const w = mt();
            g(w + l / 1e3)
        }
    }
    function x(b) {
        r = !0,
        n.clear(),
        a.forEach(z => z()),
        fs(m, h);
        const w = he(v)
          , {start_timestamp: I} = w;
        if (!I)
            return;
        (w.data || {})[pf] || v.setAttribute(pf, o),
        P.log(`[Tracing] Idle span "${w.op}" finished`);
        const T = Ia(v).filter(z => z !== v);
        let D = 0;
        T.forEach(z => {
            z.isRecording() && (z.setStatus({
                code: Ge,
                message: "cancelled"
            }),
            z.end(b),
            Z && P.log("[Tracing] Cancelling span since span ended early", JSON.stringify(z, void 0, 2)));
            const ee = he(z)
              , {timestamp: ne=0, start_timestamp: me=0} = ee
              , H = me <= b
              , _e = (u + l) / 1e3
              , L = ne - me <= _e;
            if (Z) {
                const $ = JSON.stringify(z, void 0, 2);
                H ? L || P.log("[Tracing] Discarding span since it finished after idle span final timeout", $) : P.log("[Tracing] Discarding span since it happened after idle span was finished", $)
            }
            (!L || !H) && (f_(v, z),
            D++)
        }
        ),
        D > 0 && v.setAttribute("sentry.idle_span_discarded_spans", D)
    }
    return a.push(d.on("spanStart", b => {
        if (r || b === v || he(b).timestamp)
            return;
        Ia(v).includes(b) && y(b.spanContext().spanId)
    }
    )),
    a.push(d.on("spanEnd", b => {
        r || E(b.spanContext().spanId)
    }
    )),
    a.push(d.on("idleSpanEnableAutoFinish", b => {
        b === v && (s = !0,
        g(),
        n.size && p())
    }
    )),
    t.disableAutoFinish || g(),
    setTimeout( () => {
        r || (v.setStatus({
            code: Ge,
            message: "deadline_exceeded"
        }),
        o = R_,
        v.end())
    }
    , u),
    v
}
function P_(e) {
    const t = Er(e);
    return fs(Te(), t),
    Z && P.log("[Tracing] Started span is an idle span"),
    t
}
function gf(e, t, n, r=0) {
    return new Ut( (i, o) => {
        const s = e[r];
        if (t === null || typeof s != "function")
            i(t);
        else {
            const a = s({
                ...t
            }, n);
            Z && s.id && a === null && P.log(`Event processor "${s.id}" dropped event`),
            Vl(a) ? a.then(l => gf(e, l, n, r + 1).then(i)).then(null, o) : gf(e, a, n, r + 1).then(i).then(null, o)
        }
    }
    )
}
function O_(e, t) {
    const {fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: o} = t;
    N_(e, t),
    r && F_(e, r),
    $_(e, n),
    M_(e, i),
    D_(e, o)
}
function s1(e, t) {
    const {extra: n, tags: r, user: i, contexts: o, level: s, sdkProcessingMetadata: a, breadcrumbs: l, fingerprint: u, eventProcessors: c, attachments: f, propagationContext: d, transactionName: m, span: h} = t;
    xo(e, "extra", n),
    xo(e, "tags", r),
    xo(e, "user", i),
    xo(e, "contexts", o),
    xo(e, "sdkProcessingMetadata", a),
    s && (e.level = s),
    m && (e.transactionName = m),
    h && (e.span = h),
    l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
    u.length && (e.fingerprint = [...e.fingerprint, ...u]),
    c.length && (e.eventProcessors = [...e.eventProcessors, ...c]),
    f.length && (e.attachments = [...e.attachments, ...f]),
    e.propagationContext = {
        ...e.propagationContext,
        ...d
    }
}
function xo(e, t, n) {
    if (n && Object.keys(n).length) {
        e[t] = {
            ...e[t]
        };
        for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
    }
}
function N_(e, t) {
    const {extra: n, tags: r, user: i, contexts: o, level: s, transactionName: a} = t
      , l = qe(n);
    l && Object.keys(l).length && (e.extra = {
        ...l,
        ...e.extra
    });
    const u = qe(r);
    u && Object.keys(u).length && (e.tags = {
        ...u,
        ...e.tags
    });
    const c = qe(i);
    c && Object.keys(c).length && (e.user = {
        ...c,
        ...e.user
    });
    const f = qe(o);
    f && Object.keys(f).length && (e.contexts = {
        ...f,
        ...e.contexts
    }),
    s && (e.level = s),
    a && e.type !== "transaction" && (e.transaction = a)
}
function M_(e, t) {
    const n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}
function D_(e, t) {
    e.sdkProcessingMetadata = {
        ...e.sdkProcessingMetadata,
        ...t
    }
}
function F_(e, t) {
    e.contexts = {
        trace: l_(t),
        ...e.contexts
    },
    e.sdkProcessingMetadata = {
        dynamicSamplingContext: Xr(t),
        ...e.sdkProcessingMetadata
    };
    const n = tt(t)
      , r = he(n).description;
    r && !e.transaction && e.type === "transaction" && (e.transaction = r)
}
function $_(e, t) {
    e.fingerprint = e.fingerprint ? H0(e.fingerprint) : [],
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint
}
function p2(e, t, n, r, i, o) {
    const {normalizeDepth: s=3, normalizeMaxBreadth: a=1e3} = e
      , l = {
        ...t,
        event_id: t.event_id || n.event_id || Le(),
        timestamp: t.timestamp || bs()
    }
      , u = n.integrations || e.integrations.map(k => k.name);
    B_(l, e),
    W_(l, u),
    i && i.emit("applyFrameMetadata", t),
    t.type === void 0 && j_(l, e.stackParser);
    const c = H_(r, n.captureContext);
    n.mechanism && cs(l, n.mechanism);
    const f = i ? i.getEventProcessors() : []
      , d = n_().getScopeData();
    if (o) {
        const k = o.getScopeData();
        s1(d, k)
    }
    if (c) {
        const k = c.getScopeData();
        s1(d, k)
    }
    const m = [...n.attachments || [], ...d.attachments];
    m.length && (n.attachments = m),
    O_(l, d);
    const h = [...f, ...d.eventProcessors];
    return gf(h, l, n).then(k => (k && U_(k),
    typeof s == "number" && s > 0 ? z_(k, s, a) : k))
}
function B_(e, t) {
    const {environment: n, release: r, dist: i, maxValueLength: o=250} = t;
    "environment"in e || (e.environment = "environment"in t ? n : jd),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && i !== void 0 && (e.dist = i),
    e.message && (e.message = Ri(e.message, o));
    const s = e.exception && e.exception.values && e.exception.values[0];
    s && s.value && (s.value = Ri(s.value, o));
    const a = e.request;
    a && a.url && (a.url = Ri(a.url, o))
}
const a1 = new WeakMap;
function j_(e, t) {
    const n = ue._sentryDebugIds;
    if (!n)
        return;
    let r;
    const i = a1.get(t);
    i ? r = i : (r = new Map,
    a1.set(t, r));
    const o = Object.entries(n).reduce( (s, [a,l]) => {
        let u;
        const c = r.get(a);
        c ? u = c : (u = t(a),
        r.set(a, u));
        for (let f = u.length - 1; f >= 0; f--) {
            const d = u[f];
            if (d.filename) {
                s[d.filename] = l;
                break
            }
        }
        return s
    }
    , {});
    try {
        e.exception.values.forEach(s => {
            s.stacktrace.frames.forEach(a => {
                a.filename && (a.debug_id = o[a.filename])
            }
            )
        }
        )
    } catch {}
}
function U_(e) {
    const t = {};
    try {
        e.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(i => {
                i.debug_id && (i.abs_path ? t[i.abs_path] = i.debug_id : i.filename && (t[i.filename] = i.debug_id),
                delete i.debug_id)
            }
            )
        }
        )
    } catch {}
    if (Object.keys(t).length === 0)
        return;
    e.debug_meta = e.debug_meta || {},
    e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.entries(t).forEach( ([r,i]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: i
        })
    }
    )
}
function W_(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {},
    e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}
function z_(e, t, n) {
    if (!e)
        return null;
    const r = {
        ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(i => ({
                ...i,
                ...i.data && {
                    data: dn(i.data, t, n)
                }
            }))
        },
        ...e.user && {
            user: dn(e.user, t, n)
        },
        ...e.contexts && {
            contexts: dn(e.contexts, t, n)
        },
        ...e.extra && {
            extra: dn(e.extra, t, n)
        }
    };
    return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
    e.contexts.trace.data && (r.contexts.trace.data = dn(e.contexts.trace.data, t, n))),
    e.spans && (r.spans = e.spans.map(i => ({
        ...i,
        ...i.data && {
            data: dn(i.data, t, n)
        }
    }))),
    r
}
function H_(e, t) {
    if (!t)
        return e;
    const n = e ? e.clone() : new Kr;
    return n.update(t),
    n
}
function Wd(e, t) {
    return Te().captureException(e, void 0)
}
function h2(e, t) {
    return Te().captureEvent(e, t)
}
function m2(e, t) {
    Gt().setContext(e, t)
}
function V_(e) {
    Gt().addEventProcessor(e)
}
function l1(e) {
    const t = le()
      , n = Gt()
      , r = Te()
      , {release: i, environment: o=jd} = t && t.getOptions() || {}
      , {userAgent: s} = ue.navigator || {}
      , a = q5({
        release: i,
        environment: o,
        user: r.getUser() || n.getUser(),
        ...s && {
            userAgent: s
        },
        ...e
    })
      , l = n.getSession();
    return l && l.status === "ok" && ji(l, {
        status: "exited"
    }),
    g2(),
    n.setSession(a),
    r.setSession(a),
    a
}
function g2() {
    const e = Gt()
      , t = Te()
      , n = t.getSession() || e.getSession();
    n && K5(n),
    y2(),
    e.setSession(),
    t.setSession()
}
function y2() {
    const e = Gt()
      , t = Te()
      , n = le()
      , r = t.getSession() || e.getSession();
    r && n && n.captureSession(r)
}
function u1(e=!1) {
    if (e) {
        g2();
        return
    }
    y2()
}
const q_ = "7";
function K_(e) {
    const t = e.protocol ? `${e.protocol}:` : ""
      , n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
}
function G_(e) {
    return `${K_(e)}${e.projectId}/envelope/`
}
function Y_(e, t) {
    return e5({
        sentry_key: e.publicKey,
        sentry_version: q_,
        ...t && {
            sentry_client: `${t.name}/${t.version}`
        }
    })
}
function J_(e, t, n) {
    return t || `${G_(e)}?${Y_(e, n)}`
}
const c1 = [];
function Q_(e) {
    const t = {};
    return e.forEach(n => {
        const {name: r} = n
          , i = t[r];
        i && !i.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
    }
    ),
    Object.values(t)
}
function X_(e) {
    const t = e.defaultIntegrations || []
      , n = e.integrations;
    t.forEach(s => {
        s.isDefaultInstance = !0
    }
    );
    let r;
    Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = H0(n(t)) : r = t;
    const i = Q_(r)
      , o = i.findIndex(s => s.name === "Debug");
    if (o > -1) {
        const [s] = i.splice(o, 1);
        i.push(s)
    }
    return i
}
function Z_(e, t) {
    const n = {};
    return t.forEach(r => {
        r && v2(e, r, n)
    }
    ),
    n
}
function f1(e, t) {
    for (const n of t)
        n && n.afterAllSetup && n.afterAllSetup(e)
}
function v2(e, t, n) {
    if (n[t.name]) {
        Z && P.log(`Integration skipped because it was already installed: ${t.name}`);
        return
    }
    if (n[t.name] = t,
    c1.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(),
    c1.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    typeof t.preprocessEvent == "function") {
        const r = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (i, o) => r(i, o, e))
    }
    if (typeof t.processEvent == "function") {
        const r = t.processEvent.bind(t)
          , i = Object.assign( (o, s) => r(o, s, e), {
            id: t.name
        });
        e.addEventProcessor(i)
    }
    Z && P.log(`Integration installed: ${t.name}`)
}
const d1 = "Not capturing exception because it's already been captured.";
class e8 {
    constructor(t) {
        if (this._options = t,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        t.dsn ? this._dsn = Z6(t.dsn) : Z && P.warn("No DSN provided, client will not send events."),
        this._dsn) {
            const n = J_(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: n
            })
        }
    }
    captureException(t, n, r) {
        const i = Le();
        if (qh(t))
            return Z && P.log(d1),
            i;
        const o = {
            event_id: i,
            ...n
        };
        return this._process(this.eventFromException(t, o).then(s => this._captureEvent(s, o, r))),
        o.event_id
    }
    captureMessage(t, n, r, i) {
        const o = {
            event_id: Le(),
            ...r
        }
          , s = Ad(t) ? t : String(t)
          , a = Pd(t) ? this.eventFromMessage(s, n, o) : this.eventFromException(t, o);
        return this._process(a.then(l => this._captureEvent(l, o, i))),
        o.event_id
    }
    captureEvent(t, n, r) {
        const i = Le();
        if (n && n.originalException && qh(n.originalException))
            return Z && P.log(d1),
            i;
        const o = {
            event_id: i,
            ...n
        }
          , a = (t.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(t, o, a || r)),
        o.event_id
    }
    captureSession(t) {
        typeof t.release != "string" ? Z && P.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
        ji(t, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(t) {
        const n = this._transport;
        return n ? (this.emit("flush"),
        this._isClientDoneProcessing(t).then(r => n.flush(t).then(i => r && i))) : Bn(!0)
    }
    close(t) {
        return this.flush(t).then(n => (this.getOptions().enabled = !1,
        this.emit("close"),
        n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(t) {
        this._eventProcessors.push(t)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some( ({name: t}) => t.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(t) {
        return this._integrations[t]
    }
    addIntegration(t) {
        const n = this._integrations[t.name];
        v2(this, t, this._integrations),
        n || f1(this, [t])
    }
    sendEvent(t, n={}) {
        this.emit("beforeSendEvent", t, n);
        let r = __(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const o of n.attachments || [])
            r = N5(r, $5(o));
        const i = this.sendEnvelope(r);
        i && i.then(o => this.emit("afterSendEvent", t, o), null)
    }
    sendSession(t) {
        const n = v_(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(t, n, r) {
        if (this._options.sendClientReports) {
            const i = typeof r == "number" ? r : 1
              , o = `${t}:${n}`;
            Z && P.log(`Recording outcome: "${o}"${i > 1 ? ` (${i} times)` : ""}`),
            this._outcomes[o] = (this._outcomes[o] || 0) + i
        }
    }
    on(t, n) {
        const r = this._hooks[t] = this._hooks[t] || [];
        return r.push(n),
        () => {
            const i = r.indexOf(n);
            i > -1 && r.splice(i, 1)
        }
    }
    emit(t, ...n) {
        const r = this._hooks[t];
        r && r.forEach(i => i(...n))
    }
    sendEnvelope(t) {
        return this.emit("beforeEnvelope", t),
        this._isEnabled() && this._transport ? this._transport.send(t).then(null, n => (Z && P.error("Error while sending event:", n),
        n)) : (Z && P.error("Transport disabled"),
        Bn({}))
    }
    _setupIntegrations() {
        const {integrations: t} = this._options;
        this._integrations = Z_(this, t),
        f1(this, t)
    }
    _updateSessionFromEvent(t, n) {
        let r = !1
          , i = !1;
        const o = n.exception && n.exception.values;
        if (o) {
            i = !0;
            for (const l of o) {
                const u = l.mechanism;
                if (u && u.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const s = t.status === "ok";
        (s && t.errors === 0 || s && r) && (ji(t, {
            ...r && {
                status: "crashed"
            },
            errors: t.errors || Number(i || r)
        }),
        this.captureSession(t))
    }
    _isClientDoneProcessing(t) {
        return new Ut(n => {
            let r = 0;
            const i = 1
              , o = setInterval( () => {
                this._numProcessing == 0 ? (clearInterval(o),
                n(!0)) : (r += i,
                t && r >= t && (clearInterval(o),
                n(!1)))
            }
            , i)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(t, n, r, i=Gt()) {
        const o = this.getOptions()
          , s = Object.keys(this._integrations);
        return !n.integrations && s.length > 0 && (n.integrations = s),
        this.emit("preprocessEvent", t, n),
        t.type || i.setLastEventId(t.event_id || n.event_id),
        p2(o, t, n, r, this, i).then(a => {
            if (a === null)
                return a;
            const l = {
                ...i.getPropagationContext(),
                ...r ? r.getPropagationContext() : void 0
            };
            if (!(a.contexts && a.contexts.trace) && l) {
                const {traceId: c, spanId: f, parentSpanId: d, dsc: m} = l;
                a.contexts = {
                    trace: qe({
                        trace_id: c,
                        span_id: f,
                        parent_span_id: d
                    }),
                    ...a.contexts
                };
                const h = m || Yl(c, this);
                a.sdkProcessingMetadata = {
                    dynamicSamplingContext: h,
                    ...a.sdkProcessingMetadata
                }
            }
            return a
        }
        )
    }
    _captureEvent(t, n={}, r) {
        return this._processEvent(t, n, r).then(i => i.event_id, i => {
            if (Z) {
                const o = i;
                o.logLevel === "log" ? P.log(o.message) : P.warn(o)
            }
        }
        )
    }
    _processEvent(t, n, r) {
        const i = this.getOptions()
          , {sampleRate: o} = i
          , s = S2(t)
          , a = _2(t)
          , l = t.type || "error"
          , u = `before send for type \`${l}\``
          , c = typeof o > "u" ? void 0 : fl(o);
        if (a && typeof c == "number" && Math.random() > c)
            return this.recordDroppedEvent("sample_rate", "error", t),
            ll(new hn(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
        const f = l === "replay_event" ? "replay" : l
          , m = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(t, n, r, m).then(h => {
            if (h === null)
                throw this.recordDroppedEvent("event_processor", f, t),
                new hn("An event processor returned `null`, will not send event.","log");
            if (n.data && n.data.__sentry__ === !0)
                return h;
            const k = n8(this, i, h, n);
            return t8(k, u)
        }
        ).then(h => {
            if (h === null) {
                if (this.recordDroppedEvent("before_send", f, t),
                s) {
                    const p = 1 + (t.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", p)
                }
                throw new hn(`${u} returned \`null\`, will not send event.`,"log")
            }
            const v = r && r.getSession();
            if (!s && v && this._updateSessionFromEvent(v, h),
            s) {
                const g = h.sdkProcessingMetadata && h.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                  , p = h.spans ? h.spans.length : 0
                  , y = g - p;
                y > 0 && this.recordDroppedEvent("before_send", "span", y)
            }
            const k = h.transaction_info;
            if (s && k && h.transaction !== t.transaction) {
                const g = "custom";
                h.transaction_info = {
                    ...k,
                    source: g
                }
            }
            return this.sendEvent(h, n),
            h
        }
        ).then(null, h => {
            throw h instanceof hn ? h : (this.captureException(h, {
                data: {
                    __sentry__: !0
                },
                originalException: h
            }),
            new hn(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`))
        }
        )
    }
    _process(t) {
        this._numProcessing++,
        t.then(n => (this._numProcessing--,
        n), n => (this._numProcessing--,
        n))
    }
    _clearOutcomes() {
        const t = this._outcomes;
        return this._outcomes = {},
        Object.entries(t).map( ([n,r]) => {
            const [i,o] = n.split(":");
            return {
                reason: i,
                category: o,
                quantity: r
            }
        }
        )
    }
    _flushOutcomes() {
        Z && P.log("Flushing outcomes...");
        const t = this._clearOutcomes();
        if (t.length === 0) {
            Z && P.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            Z && P.log("No dsn provided, will not send outcomes");
            return
        }
        Z && P.log("Sending outcomes:", t);
        const n = j5(t, this._options.tunnel && xs(this._dsn));
        this.sendEnvelope(n)
    }
}
function t8(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (Vl(e))
        return e.then(r => {
            if (!Bi(r) && r !== null)
                throw new hn(n);
            return r
        }
        , r => {
            throw new hn(`${t} rejected with ${r}`)
        }
        );
    if (!Bi(e) && e !== null)
        throw new hn(n);
    return e
}
function n8(e, t, n, r) {
    const {beforeSend: i, beforeSendTransaction: o, beforeSendSpan: s} = t;
    if (_2(n) && i)
        return i(n, r);
    if (S2(n)) {
        if (n.spans && s) {
            const a = [];
            for (const l of n.spans) {
                const u = s(l);
                u ? a.push(u) : e.recordDroppedEvent("before_send", "span")
            }
            n.spans = a
        }
        if (o) {
            if (n.spans) {
                const a = n.spans.length;
                n.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: a
                }
            }
            return o(n, r)
        }
    }
    return n
}
function _2(e) {
    return e.type === void 0
}
function S2(e) {
    return e.type === "transaction"
}
function r8(e, t) {
    t.debug === !0 && (Z ? P.enable() : eo( () => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    }
    )),
    Te().update(t.initialScope);
    const r = new e(t);
    return i8(r),
    r.init(),
    r
}
function i8(e) {
    Te().setClient(e)
}
const o8 = 64;
function s8(e, t, n=k5(e.bufferSize || o8)) {
    let r = {};
    const i = s => n.drain(s);
    function o(s) {
        const a = [];
        if (Gh(s, (f, d) => {
            const m = Yh(d);
            if (J0(r, m)) {
                const h = p1(f, d);
                e.recordDroppedEvent("ratelimit_backoff", m, h)
            } else
                a.push(f)
        }
        ),
        a.length === 0)
            return Bn({});
        const l = Jr(s[0], a)
          , u = f => {
            Gh(l, (d, m) => {
                const h = p1(d, m);
                e.recordDroppedEvent(f, Yh(m), h)
            }
            )
        }
          , c = () => t({
            body: M5(l)
        }).then(f => (f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && Z && P.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
        r = Q0(r, f),
        f), f => {
            throw u("network_error"),
            f
        }
        );
        return n.add(c).then(f => f, f => {
            if (f instanceof hn)
                return Z && P.error("Skipped sending event because buffer is full."),
                u("queue_overflow"),
                Bn({});
            throw f
        }
        )
    }
    return {
        send: o,
        flush: i
    }
}
function p1(e, t) {
    if (!(t !== "event" && t !== "transaction"))
        return Array.isArray(e) ? e[1] : void 0
}
function a8(e, t) {
    const n = t && t.getDsn()
      , r = t && t.getOptions().tunnel;
    return u8(e, n) || l8(e, r)
}
function l8(e, t) {
    return t ? h1(e) === h1(t) : !1
}
function u8(e, t) {
    return t ? e.includes(t.host) : !1
}
function h1(e) {
    return e[e.length - 1] === "/" ? e.slice(0, -1) : e
}
function E2(e, t, n=[t], r="npm") {
    const i = e._metadata || {};
    i.sdk || (i.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map(o => ({
            name: `${r}:@sentry/${o}`,
            version: Fr
        })),
        version: Fr
    }),
    e._metadata = i
}
const c8 = 100;
function mr(e, t) {
    const n = le()
      , r = Gt();
    if (!n)
        return;
    const {beforeBreadcrumb: i=null, maxBreadcrumbs: o=c8} = n.getOptions();
    if (o <= 0)
        return;
    const a = {
        timestamp: bs(),
        ...e
    }
      , l = i ? eo( () => i(a, t)) : a;
    l !== null && (n.emit && n.emit("beforeAddBreadcrumb", l, t),
    r.addBreadcrumb(l, o))
}
let m1;
const f8 = "FunctionToString"
  , g1 = new WeakMap
  , d8 = () => ({
    name: f8,
    setupOnce() {
        m1 = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...e) {
                const t = Od(this)
                  , n = g1.has(le()) && t !== void 0 ? t : this;
                return m1.apply(n, e)
            }
        } catch {}
    },
    setup(e) {
        g1.set(e, !0)
    }
})
  , p8 = d8
  , h8 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
  , m8 = "InboundFilters"
  , g8 = (e={}) => ({
    name: m8,
    processEvent(t, n, r) {
        const i = r.getOptions()
          , o = v8(e, i);
        return _8(t, o) ? null : t
    }
})
  , y8 = g8;
function v8(e={}, t={}) {
    return {
        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : h8],
        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
        ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
    }
}
function _8(e, t) {
    return t.ignoreInternal && x8(e) ? (Z && P.warn(`Event dropped due to being internal Sentry Error.
Event: ${Hn(e)}`),
    !0) : S8(e, t.ignoreErrors) ? (Z && P.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Hn(e)}`),
    !0) : T8(e) ? (Z && P.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Hn(e)}`),
    !0) : E8(e, t.ignoreTransactions) ? (Z && P.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Hn(e)}`),
    !0) : w8(e, t.denyUrls) ? (Z && P.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Hn(e)}.
Url: ${dl(e)}`),
    !0) : C8(e, t.allowUrls) ? !1 : (Z && P.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Hn(e)}.
Url: ${dl(e)}`),
    !0)
}
function S8(e, t) {
    return e.type || !t || !t.length ? !1 : k8(e).some(n => lr(n, t))
}
function E8(e, t) {
    if (e.type !== "transaction" || !t || !t.length)
        return !1;
    const n = e.transaction;
    return n ? lr(n, t) : !1
}
function w8(e, t) {
    if (!t || !t.length)
        return !1;
    const n = dl(e);
    return n ? lr(n, t) : !1
}
function C8(e, t) {
    if (!t || !t.length)
        return !0;
    const n = dl(e);
    return n ? lr(n, t) : !0
}
function k8(e) {
    const t = [];
    e.message && t.push(e.message);
    let n;
    try {
        n = e.exception.values[e.exception.values.length - 1]
    } catch {}
    return n && n.value && (t.push(n.value),
    n.type && t.push(`${n.type}: ${n.value}`)),
    t
}
function x8(e) {
    try {
        return e.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
function b8(e=[]) {
    for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
function dl(e) {
    try {
        let t;
        try {
            t = e.exception.values[0].stacktrace.frames
        } catch {}
        return t ? b8(t) : null
    } catch {
        return Z && P.error(`Cannot extract url for event ${Hn(e)}`),
        null
    }
}
function T8(e) {
    return e.type || !e.exception || !e.exception.values || e.exception.values.length === 0 ? !1 : !e.message && !e.exception.values.some(t => t.stacktrace || t.type && t.type !== "Error" || t.value)
}
const I8 = "Dedupe"
  , L8 = () => {
    let e;
    return {
        name: I8,
        processEvent(t) {
            if (t.type)
                return t;
            try {
                if (A8(t, e))
                    return Z && P.warn("Event dropped due to being a duplicate of previously captured event."),
                    null
            } catch {}
            return e = t
        }
    }
}
  , R8 = L8;
function A8(e, t) {
    return t ? !!(P8(e, t) || O8(e, t)) : !1
}
function P8(e, t) {
    const n = e.message
      , r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !C2(e, t) || !w2(e, t))
}
function O8(e, t) {
    const n = y1(t)
      , r = y1(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !C2(e, t) || !w2(e, t))
}
function w2(e, t) {
    let n = Wh(e)
      , r = Wh(t);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
    r = r,
    r.length !== n.length))
        return !1;
    for (let i = 0; i < r.length; i++) {
        const o = r[i]
          , s = n[i];
        if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function)
            return !1
    }
    return !0
}
function C2(e, t) {
    let n = e.fingerprint
      , r = t.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
    r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
function y1(e) {
    return e.exception && e.exception.values && e.exception.values[0]
}
function N8(e, t, n, r, i="auto.http.browser") {
    if (!e.fetchData)
        return;
    const o = hr() && t(e.fetchData.url);
    if (e.endTimestamp && o) {
        const h = e.fetchData.__span;
        if (!h)
            return;
        const v = r[h];
        v && (F8(v, e),
        delete r[h]);
        return
    }
    const s = Te()
      , a = le()
      , {method: l, url: u} = e.fetchData
      , c = D8(u)
      , f = c ? $r(c).host : void 0
      , d = !!ut()
      , m = o && d ? Er({
        name: `${l} ${u}`,
        attributes: {
            url: u,
            type: "fetch",
            "http.method": l,
            "http.url": c,
            "server.address": f,
            [Ke]: i,
            [pr]: "http.client"
        }
    }) : new no;
    if (e.fetchData.__span = m.spanContext().spanId,
    r[m.spanContext().spanId] = m,
    n(e.fetchData.url) && a) {
        const h = e.args[0];
        e.args[1] = e.args[1] || {};
        const v = e.args[1];
        v.headers = M8(h, a, s, v, hr() && d ? m : void 0)
    }
    return m
}
function M8(e, t, n, r, i) {
    const o = Gt()
      , {traceId: s, spanId: a, sampled: l, dsc: u} = {
        ...o.getPropagationContext(),
        ...n.getPropagationContext()
    }
      , c = i ? r2(i) : Nd(s, a, l)
      , f = G0(u || (i ? Xr(i) : Yl(s, t)))
      , d = r.headers || (typeof Request < "u" && Dn(e, Request) ? e.headers : void 0);
    if (d)
        if (typeof Headers < "u" && Dn(d, Headers)) {
            const m = new Headers(d);
            return m.append("sentry-trace", c),
            f && m.append(uf, f),
            m
        } else if (Array.isArray(d)) {
            const m = [...d, ["sentry-trace", c]];
            return f && m.push([uf, f]),
            m
        } else {
            const m = "baggage"in d ? d.baggage : void 0
              , h = [];
            return Array.isArray(m) ? h.push(...m) : m && h.push(m),
            f && h.push(f),
            {
                ...d,
                "sentry-trace": c,
                baggage: h.length > 0 ? h.join(",") : void 0
            }
        }
    else
        return {
            "sentry-trace": c,
            baggage: f
        }
}
function D8(e) {
    try {
        return new URL(e).href
    } catch {
        return
    }
}
function F8(e, t) {
    if (t.response) {
        e2(e, t.response.status);
        const n = t.response && t.response.headers && t.response.headers.get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && e.setAttribute("http.response_content_length", r)
        }
    } else
        t.error && e.setStatus({
            code: Ge,
            message: "internal_error"
        });
    e.end()
}
const Y = ue;
let yf = 0;
function k2() {
    return yf > 0
}
function $8() {
    yf++,
    setTimeout( () => {
        yf--
    }
    )
}
function Wi(e, t={}, n) {
    if (typeof e != "function")
        return e;
    try {
        const i = e.__sentry_wrapped__;
        if (i)
            return i;
        if (Od(e))
            return e
    } catch {
        return e
    }
    const r = function() {
        const i = Array.prototype.slice.call(arguments);
        try {
            const o = i.map(s => Wi(s, t));
            return e.apply(this, o)
        } catch (o) {
            throw $8(),
            $d(s => {
                s.addEventProcessor(a => (t.mechanism && (af(a, void 0),
                cs(a, t.mechanism)),
                a.extra = {
                    ...a.extra,
                    arguments: i
                },
                a)),
                Wd(o)
            }
            ),
            o
        }
    };
    try {
        for (const i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
    } catch {}
    O0(r, e),
    Kt(e, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return e.name
            }
        })
    } catch {}
    return r
}
const sn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function zd(e, t) {
    const n = Hd(e, t)
      , r = {
        type: t && t.name,
        value: z8(t)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
    r
}
function B8(e, t, n, r) {
    const i = le()
      , o = i && i.getOptions().normalizeDepth
      , s = G8(t)
      , a = {
        __serialized__: V0(t, o)
    };
    if (s)
        return {
            exception: {
                values: [zd(e, s)]
            },
            extra: a
        };
    const l = {
        exception: {
            values: [{
                type: Hl(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                value: q8(t, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: a
    };
    if (n) {
        const u = Hd(e, n);
        u.length && (l.exception.values[0].stacktrace = {
            frames: u
        })
    }
    return l
}
function Ku(e, t) {
    return {
        exception: {
            values: [zd(e, t)]
        }
    }
}
function Hd(e, t) {
    const n = t.stacktrace || t.stack || ""
      , r = U8(t)
      , i = W8(t);
    try {
        return e(n, r, i)
    } catch {}
    return []
}
const j8 = /Minified React error #\d+;/i;
function U8(e) {
    return e && j8.test(e.message) ? 1 : 0
}
function W8(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0
}
function z8(e) {
    const t = e && e.message;
    return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
}
function H8(e, t, n, r) {
    const i = n && n.syntheticException || void 0
      , o = Vd(e, t, i, r);
    return cs(o),
    o.level = "error",
    n && n.event_id && (o.event_id = n.event_id),
    Bn(o)
}
function V8(e, t, n="info", r, i) {
    const o = r && r.syntheticException || void 0
      , s = vf(e, t, o, i);
    return s.level = n,
    r && r.event_id && (s.event_id = r.event_id),
    Bn(s)
}
function Vd(e, t, n, r, i) {
    let o;
    if (I0(t) && t.error)
        return Ku(e, t.error);
    if (Nh(t) || F6(t)) {
        const s = t;
        if ("stack"in t)
            o = Ku(e, t);
        else {
            const a = s.name || (Nh(s) ? "DOMError" : "DOMException")
              , l = s.message ? `${a}: ${s.message}` : a;
            o = vf(e, l, n, r),
            af(o, l)
        }
        return "code"in s && (o.tags = {
            ...o.tags,
            "DOMException.code": `${s.code}`
        }),
        o
    }
    return Rd(t) ? Ku(e, t) : Bi(t) || Hl(t) ? (o = B8(e, t, n, i),
    cs(o, {
        synthetic: !0
    }),
    o) : (o = vf(e, t, n, r),
    af(o, `${t}`),
    cs(o, {
        synthetic: !0
    }),
    o)
}
function vf(e, t, n, r) {
    const i = {};
    if (r && n) {
        const o = Hd(e, n);
        o.length && (i.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: o
                }
            }]
        })
    }
    if (Ad(t)) {
        const {__sentry_template_string__: o, __sentry_template_values__: s} = t;
        return i.logentry = {
            message: o,
            params: s
        },
        i
    }
    return i.message = t,
    i
}
function q8(e, {isUnhandledRejection: t}) {
    const n = t5(e)
      , r = t ? "promise rejection" : "exception";
    return I0(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Hl(e) ? `Event \`${K8(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
function K8(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0
    } catch {}
}
function G8(e) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t];
            if (n instanceof Error)
                return n
        }
}
function Y8(e, {metadata: t, tunnel: n, dsn: r}) {
    const i = {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && t.sdk && {
            sdk: {
                name: t.sdk.name,
                version: t.sdk.version
            }
        },
        ...!!n && !!r && {
            dsn: xs(r)
        }
    }
      , o = J8(e);
    return Jr(i, [o])
}
function J8(e) {
    return [{
        type: "user_report"
    }, e]
}
class Q8 extends e8 {
    constructor(t) {
        const n = {
            parentSpanIsAlwaysRootSpan: !0,
            ...t
        }
          , r = Y.SENTRY_SDK_SOURCE || g5();
        E2(n, "browser", ["browser"], r),
        super(n),
        n.sendClientReports && Y.document && Y.document.addEventListener("visibilitychange", () => {
            Y.document.visibilityState === "hidden" && this._flushOutcomes()
        }
        )
    }
    eventFromException(t, n) {
        return H8(this._options.stackParser, t, n, this._options.attachStacktrace)
    }
    eventFromMessage(t, n="info", r) {
        return V8(this._options.stackParser, t, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            sn && P.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = Y8(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(t, n, r) {
        return t.platform = t.platform || "javascript",
        super._prepareEvent(t, n, r)
    }
}
const Nt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , X8 = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
  , ro = (e, t, n, r) => {
    let i, o;
    return s => {
        t.value >= 0 && (s || r) && (o = t.value - (i || 0),
        (o || i === void 0) && (i = t.value,
        t.delta = o,
        t.rating = X8(t.value, n),
        e(t)))
    }
}
  , J = ue
  , Z8 = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
  , Is = () => J.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
  , Jl = () => {
    const e = Is();
    return e && e.activationStart || 0
}
  , io = (e, t) => {
    const n = Is();
    let r = "navigate";
    return n && (J.document && J.document.prerendering || Jl() > 0 ? r = "prerender" : J.document && J.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
    {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: Z8(),
        navigationType: r
    }
}
  , Zr = (e, t, n) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver(i => {
                Promise.resolve().then( () => {
                    t(i.getEntries())
                }
                )
            }
            );
            return r.observe(Object.assign({
                type: e,
                buffered: !0
            }, n || {})),
            r
        }
    } catch {}
}
  , Ls = e => {
    const t = n => {
        (n.type === "pagehide" || J.document && J.document.visibilityState === "hidden") && e(n)
    }
    ;
    J.document && (addEventListener("visibilitychange", t, !0),
    addEventListener("pagehide", t, !0))
}
  , qd = e => {
    let t = !1;
    return n => {
        t || (e(n),
        t = !0)
    }
}
;
let ds = -1;
const eS = () => {
    ds = J.document.visibilityState === "hidden" && !J.document.prerendering ? 0 : 1 / 0
}
  , pl = e => {
    J.document.visibilityState === "hidden" && ds > -1 && (ds = e.type === "visibilitychange" ? e.timeStamp : 0,
    removeEventListener("visibilitychange", pl, !0),
    removeEventListener("prerenderingchange", pl, !0))
}
  , tS = () => {
    addEventListener("visibilitychange", pl, !0),
    addEventListener("prerenderingchange", pl, !0)
}
  , Ql = () => (J.document && ds < 0 && (eS(),
tS()),
{
    get firstHiddenTime() {
        return ds
    }
})
  , Rs = e => {
    J.document && J.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
}
  , nS = [1800, 3e3]
  , rS = (e, t={}) => {
    Rs( () => {
        const n = Ql()
          , r = io("FCP");
        let i;
        const s = Zr("paint", a => {
            a.forEach(l => {
                l.name === "first-contentful-paint" && (s.disconnect(),
                l.startTime < n.firstHiddenTime && (r.value = Math.max(l.startTime - Jl(), 0),
                r.entries.push(l),
                i(!0)))
            }
            )
        }
        );
        s && (i = ro(e, r, nS, t.reportAllChanges))
    }
    )
}
  , iS = [.1, .25]
  , oS = (e, t={}) => {
    rS(qd( () => {
        const n = io("CLS", 0);
        let r, i = 0, o = [];
        const s = l => {
            l.forEach(u => {
                if (!u.hadRecentInput) {
                    const c = o[0]
                      , f = o[o.length - 1];
                    i && c && f && u.startTime - f.startTime < 1e3 && u.startTime - c.startTime < 5e3 ? (i += u.value,
                    o.push(u)) : (i = u.value,
                    o = [u])
                }
            }
            ),
            i > n.value && (n.value = i,
            n.entries = o,
            r())
        }
          , a = Zr("layout-shift", s);
        a && (r = ro(e, n, iS, t.reportAllChanges),
        Ls( () => {
            s(a.takeRecords()),
            r(!0)
        }
        ),
        setTimeout(r, 0))
    }
    ))
}
  , sS = [100, 300]
  , aS = (e, t={}) => {
    Rs( () => {
        const n = Ql()
          , r = io("FID");
        let i;
        const o = l => {
            l.startTime < n.firstHiddenTime && (r.value = l.processingStart - l.startTime,
            r.entries.push(l),
            i(!0))
        }
          , s = l => {
            l.forEach(o)
        }
          , a = Zr("first-input", s);
        i = ro(e, r, sS, t.reportAllChanges),
        a && Ls(qd( () => {
            s(a.takeRecords()),
            a.disconnect()
        }
        ))
    }
    )
}
;
let x2 = 0
  , Gu = 1 / 0
  , aa = 0;
const lS = e => {
    e.forEach(t => {
        t.interactionId && (Gu = Math.min(Gu, t.interactionId),
        aa = Math.max(aa, t.interactionId),
        x2 = aa ? (aa - Gu) / 7 + 1 : 0)
    }
    )
}
;
let _f;
const uS = () => _f ? x2 : performance.interactionCount || 0
  , cS = () => {
    "interactionCount"in performance || _f || (_f = Zr("event", lS, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }))
}
  , fS = [200, 500]
  , dS = 0
  , b2 = () => uS() - dS
  , v1 = 10
  , bn = []
  , Yu = {}
  , _1 = e => {
    const t = bn[bn.length - 1]
      , n = Yu[e.interactionId];
    if (n || bn.length < v1 || t && e.duration > t.latency) {
        if (n)
            n.entries.push(e),
            n.latency = Math.max(n.latency, e.duration);
        else {
            const r = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            };
            Yu[r.id] = r,
            bn.push(r)
        }
        bn.sort( (r, i) => i.latency - r.latency),
        bn.splice(v1).forEach(r => {
            delete Yu[r.id]
        }
        )
    }
}
  , pS = () => {
    const e = Math.min(bn.length - 1, Math.floor(b2() / 50));
    return bn[e]
}
  , hS = (e, t={}) => {
    Rs( () => {
        cS();
        const n = io("INP");
        let r;
        const i = s => {
            s.forEach(l => {
                l.interactionId && _1(l),
                l.entryType === "first-input" && !bn.some(c => c.entries.some(f => l.duration === f.duration && l.startTime === f.startTime)) && _1(l)
            }
            );
            const a = pS();
            a && a.latency !== n.value && (n.value = a.latency,
            n.entries = a.entries,
            r())
        }
          , o = Zr("event", i, {
            durationThreshold: t.durationThreshold != null ? t.durationThreshold : 40
        });
        r = ro(e, n, fS, t.reportAllChanges),
        o && ("PerformanceEventTiming"in J && "interactionId"in PerformanceEventTiming.prototype && o.observe({
            type: "first-input",
            buffered: !0
        }),
        Ls( () => {
            i(o.takeRecords()),
            n.value < 0 && b2() > 0 && (n.value = 0,
            n.entries = []),
            r(!0)
        }
        ))
    }
    )
}
  , mS = [2500, 4e3]
  , S1 = {}
  , gS = (e, t={}) => {
    Rs( () => {
        const n = Ql()
          , r = io("LCP");
        let i;
        const o = a => {
            const l = a[a.length - 1];
            l && l.startTime < n.firstHiddenTime && (r.value = Math.max(l.startTime - Jl(), 0),
            r.entries = [l],
            i())
        }
          , s = Zr("largest-contentful-paint", o);
        if (s) {
            i = ro(e, r, mS, t.reportAllChanges);
            const a = qd( () => {
                S1[r.id] || (o(s.takeRecords()),
                s.disconnect(),
                S1[r.id] = !0,
                i(!0))
            }
            );
            ["keydown", "click"].forEach(l => {
                J.document && addEventListener(l, () => setTimeout(a, 0), !0)
            }
            ),
            Ls(a)
        }
    }
    )
}
  , yS = [800, 1800]
  , Sf = e => {
    J.document && J.document.prerendering ? Rs( () => Sf(e)) : J.document && J.document.readyState !== "complete" ? addEventListener("load", () => Sf(e), !0) : setTimeout(e, 0)
}
  , vS = (e, t={}) => {
    const n = io("TTFB")
      , r = ro(e, n, yS, t.reportAllChanges);
    Sf( () => {
        const i = Is();
        if (i) {
            const o = i.responseStart;
            if (o <= 0 || o > performance.now())
                return;
            n.value = Math.max(o - Jl(), 0),
            n.entries = [i],
            r(!0)
        }
    }
    )
}
  , Uo = {}
  , hl = {};
let T2, I2, L2, R2, A2;
function Kd(e, t=!1) {
    return As("cls", e, SS, T2, t)
}
function P2(e, t=!1) {
    return As("lcp", e, wS, L2, t)
}
function O2(e) {
    return As("fid", e, ES, I2)
}
function _S(e) {
    return As("ttfb", e, CS, R2)
}
function N2(e) {
    return As("inp", e, kS, A2)
}
function zi(e, t) {
    return M2(e, t),
    hl[e] || (xS(e),
    hl[e] = !0),
    D2(e, t)
}
function oo(e, t) {
    const n = Uo[e];
    if (!(!n || !n.length))
        for (const r of n)
            try {
                r(t)
            } catch (i) {
                Nt && P.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${$n(r)}
Error:`, i)
            }
}
function SS() {
    return oS(e => {
        oo("cls", {
            metric: e
        }),
        T2 = e
    }
    , {
        reportAllChanges: !0
    })
}
function ES() {
    return aS(e => {
        oo("fid", {
            metric: e
        }),
        I2 = e
    }
    )
}
function wS() {
    return gS(e => {
        oo("lcp", {
            metric: e
        }),
        L2 = e
    }
    , {
        reportAllChanges: !0
    })
}
function CS() {
    return vS(e => {
        oo("ttfb", {
            metric: e
        }),
        R2 = e
    }
    )
}
function kS() {
    return hS(e => {
        oo("inp", {
            metric: e
        }),
        A2 = e
    }
    )
}
function As(e, t, n, r, i=!1) {
    M2(e, t);
    let o;
    return hl[e] || (o = n(),
    hl[e] = !0),
    r && t({
        metric: r
    }),
    D2(e, t, i ? o : void 0)
}
function xS(e) {
    const t = {};
    e === "event" && (t.durationThreshold = 0),
    Zr(e, n => {
        oo(e, {
            entries: n
        })
    }
    , t)
}
function M2(e, t) {
    Uo[e] = Uo[e] || [],
    Uo[e].push(t)
}
function D2(e, t, n) {
    return () => {
        n && n();
        const r = Uo[e];
        if (!r)
            return;
        const i = r.indexOf(t);
        i !== -1 && r.splice(i, 1)
    }
}
function bS(e) {
    return "duration"in e
}
function Ju(e) {
    return typeof e == "number" && isFinite(e)
}
function Hi(e, t, n, {...r}) {
    const i = he(e).start_timestamp;
    return i && i > t && typeof e.updateStartTime == "function" && e.updateStartTime(t),
    c2(e, () => {
        const o = Er({
            startTime: t,
            ...r
        });
        return o && o.end(n),
        o
    }
    )
}
function F2(e) {
    const t = le();
    if (!t)
        return;
    const {name: n, transaction: r, attributes: i, startTime: o} = e
      , {release: s, environment: a} = t.getOptions()
      , l = t.getIntegrationByName("Replay")
      , u = l && l.getReplayId()
      , c = Te()
      , f = c.getUser()
      , d = f !== void 0 ? f.email || f.id || f.ip_address : void 0;
    let m;
    try {
        m = c.getScopeData().contexts.profile.profile_id
    } catch {}
    const h = {
        release: s,
        environment: a,
        user: d || void 0,
        profile_id: m || void 0,
        replay_id: u || void 0,
        transaction: r,
        "user_agent.original": J.navigator && J.navigator.userAgent,
        ...i
    };
    return Er({
        name: n,
        attributes: h,
        startTime: o,
        experimental: {
            standalone: !0
        }
    })
}
function Gd() {
    return J && J.addEventListener && J.performance
}
function De(e) {
    return e / 1e3
}
function TS() {
    let e = 0, t, n;
    if (!LS())
        return;
    let r = !1;
    function i() {
        r || (r = !0,
        n && IS(e, t, n),
        o())
    }
    const o = Kd( ({metric: s}) => {
        const a = s.entries[s.entries.length - 1];
        a && (e = s.value,
        t = a)
    }
    , !0);
    Ls( () => {
        i()
    }
    ),
    setTimeout( () => {
        const s = le()
          , a = wt([s, "optionalAccess", f => f.on, "call", f => f("startNavigationSpan", () => {
            i(),
            a && a()
        }
        )])
          , l = ut()
          , u = l && tt(l)
          , c = u && he(u);
        c && c.op === "pageload" && (n = u.spanContext().spanId)
    }
    , 0)
}
function IS(e, t, n) {
    Nt && P.log(`Sending CLS span (${e})`);
    const r = De(gt) + (wt([t, "optionalAccess", u => u.startTime]) || 0)
      , i = De(wt([t, "optionalAccess", u => u.duration]) || 0)
      , o = Te().getScopeData().transactionName
      , s = t ? Fn(wt([t, "access", u => u.sources, "access", u => u[0], "optionalAccess", u => u.node])) : "Layout shift"
      , a = qe({
        [Ke]: "auto.http.browser.cls",
        [pr]: "ui.webvital.cls",
        [Bd]: wt([t, "optionalAccess", u => u.duration]) || 0,
        "sentry.pageload.span_id": n
    })
      , l = F2({
        name: s,
        transaction: o,
        attributes: a,
        startTime: r
    });
    wt([l, "optionalAccess", u => u.addEvent, "call", u => u("cls", {
        [Kl]: "",
        [Gl]: e
    })]),
    wt([l, "optionalAccess", u => u.end, "call", u => u(r + i)])
}
function LS() {
    try {
        return wt([PerformanceObserver, "access", e => e.supportedEntryTypes, "optionalAccess", e => e.includes, "call", e => e("layout-shift")])
    } catch {
        return !1
    }
}
const RS = 2147483647;
let E1 = 0, Ze = {}, fn, Wo;
function AS({recordClsStandaloneSpans: e}) {
    const t = Gd();
    if (t && gt) {
        t.mark && J.performance.mark("sentry-tracing-init");
        const n = FS()
          , r = DS()
          , i = $S()
          , o = e ? TS() : MS();
        return () => {
            n(),
            r(),
            i(),
            o && o()
        }
    }
    return () => {}
}
function PS() {
    zi("longtask", ({entries: e}) => {
        if (ut())
            for (const t of e) {
                const n = De(gt + t.startTime)
                  , r = De(t.duration)
                  , i = Er({
                    name: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTime: n,
                    attributes: {
                        [Ke]: "auto.ui.browser.metrics"
                    }
                });
                i && i.end(n + r)
            }
    }
    )
}
function OS() {
    new PerformanceObserver(t => {
        if (ut())
            for (const n of t.getEntries()) {
                if (!n.scripts[0])
                    continue;
                const r = De(gt + n.startTime)
                  , i = De(n.duration)
                  , o = {
                    [Ke]: "auto.ui.browser.metrics"
                }
                  , s = n.scripts[0]
                  , {invoker: a, invokerType: l, sourceURL: u, sourceFunctionName: c, sourceCharPosition: f} = s;
                o["browser.script.invoker"] = a,
                o["browser.script.invoker_type"] = l,
                u && (o["code.filepath"] = u),
                c && (o["code.function"] = c),
                f !== -1 && (o["browser.script.source_char_position"] = f);
                const d = Er({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: r,
                    attributes: o
                });
                d && d.end(r + i)
            }
    }
    ).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}
function NS() {
    zi("event", ({entries: e}) => {
        if (ut()) {
            for (const t of e)
                if (t.name === "click") {
                    const n = De(gt + t.startTime)
                      , r = De(t.duration)
                      , i = {
                        name: Fn(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: n,
                        attributes: {
                            [Ke]: "auto.ui.browser.metrics"
                        }
                    }
                      , o = A0(t.target);
                    o && (i.attributes["ui.component_name"] = o);
                    const s = Er(i);
                    s && s.end(n + r)
                }
        }
    }
    )
}
function MS() {
    return Kd( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (Nt && P.log(`[Measurements] Adding CLS ${e.value}`),
        Ze.cls = {
            value: e.value,
            unit: ""
        },
        Wo = t)
    }
    , !0)
}
function DS() {
    return P2( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (Nt && P.log("[Measurements] Adding LCP"),
        Ze.lcp = {
            value: e.value,
            unit: "millisecond"
        },
        fn = t)
    }
    , !0)
}
function FS() {
    return O2( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        if (!t)
            return;
        const n = De(gt)
          , r = De(t.startTime);
        Nt && P.log("[Measurements] Adding FID"),
        Ze.fid = {
            value: e.value,
            unit: "millisecond"
        },
        Ze["mark.fid"] = {
            value: n + r,
            unit: "second"
        }
    }
    )
}
function $S() {
    return _S( ({metric: e}) => {
        e.entries[e.entries.length - 1] && (Nt && P.log("[Measurements] Adding TTFB"),
        Ze.ttfb = {
            value: e.value,
            unit: "millisecond"
        })
    }
    )
}
function BS(e, t) {
    const n = Gd();
    if (!n || !J.performance.getEntries || !gt)
        return;
    Nt && P.log("[Tracing] Adding & adjusting spans using Performance API");
    const r = De(gt)
      , i = n.getEntries()
      , {op: o, start_timestamp: s} = he(e);
    if (i.slice(E1).forEach(a => {
        const l = De(a.startTime)
          , u = De(Math.max(0, a.duration));
        if (!(o === "navigation" && s && r + l < s))
            switch (a.entryType) {
            case "navigation":
                {
                    US(e, a, r);
                    break
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    jS(e, a, l, u, r);
                    const c = Ql()
                      , f = a.startTime < c.firstHiddenTime;
                    a.name === "first-paint" && f && (Nt && P.log("[Measurements] Adding FP"),
                    Ze.fp = {
                        value: a.startTime,
                        unit: "millisecond"
                    }),
                    a.name === "first-contentful-paint" && f && (Nt && P.log("[Measurements] Adding FCP"),
                    Ze.fcp = {
                        value: a.startTime,
                        unit: "millisecond"
                    });
                    break
                }
            case "resource":
                {
                    zS(e, a, a.name, l, u, r);
                    break
                }
            }
    }
    ),
    E1 = Math.max(i.length - 1, 0),
    HS(e),
    o === "pageload") {
        qS(Ze);
        const a = Ze["mark.fid"];
        a && Ze.fid && (Hi(e, a.value, a.value + De(Ze.fid.value), {
            name: "first input delay",
            op: "ui.action",
            attributes: {
                [Ke]: "auto.ui.browser.metrics"
            }
        }),
        delete Ze["mark.fid"]),
        (!("fcp"in Ze) || !t.recordClsOnPageloadSpan) && delete Ze.cls,
        Object.entries(Ze).forEach( ([l,u]) => {
            E_(l, u.value, u.unit)
        }
        ),
        e.setAttribute("performance.timeOrigin", r),
        VS(e)
    }
    fn = void 0,
    Wo = void 0,
    Ze = {}
}
function jS(e, t, n, r, i) {
    const o = Is()
      , s = De(o ? o.requestStart : 0)
      , a = i + Math.max(n, s)
      , l = i + n
      , u = l + r
      , c = {
        [Ke]: "auto.resource.browser.metrics"
    };
    return a !== l && (c["sentry.browser.measure_happened_before_request"] = !0,
    c["sentry.browser.measure_start_time"] = a),
    Hi(e, a, u, {
        name: t.name,
        op: t.entryType,
        attributes: c
    }),
    a
}
function US(e, t, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        la(e, t, r, n)
    }
    ),
    la(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    la(e, t, "fetch", n, "cache", "domainLookupStart"),
    la(e, t, "domainLookup", n, "DNS"),
    WS(e, t, n)
}
function la(e, t, n, r, i, o) {
    const s = o ? t[o] : t[`${n}End`]
      , a = t[`${n}Start`];
    !a || !s || Hi(e, r + De(a), r + De(s), {
        op: "browser",
        name: i || n,
        attributes: {
            [Ke]: "auto.ui.browser.metrics"
        }
    })
}
function WS(e, t, n) {
    const r = n + De(t.requestStart)
      , i = n + De(t.responseEnd)
      , o = n + De(t.responseStart);
    t.responseEnd && (Hi(e, r, i, {
        op: "browser",
        name: "request",
        attributes: {
            [Ke]: "auto.ui.browser.metrics"
        }
    }),
    Hi(e, o, i, {
        op: "browser",
        name: "response",
        attributes: {
            [Ke]: "auto.ui.browser.metrics"
        }
    }))
}
function zS(e, t, n, r, i, o) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
        return;
    const s = $r(n)
      , a = {
        [Ke]: "auto.resource.browser.metrics"
    };
    Qu(a, t, "transferSize", "http.response_transfer_size"),
    Qu(a, t, "encodedBodySize", "http.response_content_length"),
    Qu(a, t, "decodedBodySize", "http.decoded_response_content_length"),
    "renderBlockingStatus"in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus),
    s.protocol && (a["url.scheme"] = s.protocol.split(":").pop()),
    s.host && (a["server.address"] = s.host),
    a["url.same_origin"] = n.includes(J.location.origin);
    const l = o + r
      , u = l + i;
    Hi(e, l, u, {
        name: n.replace(J.location.origin, ""),
        op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
        attributes: a
    })
}
function HS(e) {
    const t = J.navigator;
    if (!t)
        return;
    const n = t.connection;
    n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
    n.type && e.setAttribute("connectionType", n.type),
    Ju(n.rtt) && (Ze["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })),
    Ju(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
    Ju(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
}
function VS(e) {
    fn && (Nt && P.log("[Measurements] Adding LCP Data"),
    fn.element && e.setAttribute("lcp.element", Fn(fn.element)),
    fn.id && e.setAttribute("lcp.id", fn.id),
    fn.url && e.setAttribute("lcp.url", fn.url.trim().slice(0, 200)),
    e.setAttribute("lcp.size", fn.size)),
    Wo && Wo.sources && (Nt && P.log("[Measurements] Adding CLS Data"),
    Wo.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, Fn(t.node))))
}
function Qu(e, t, n, r) {
    const i = t[n];
    i != null && i < RS && (e[r] = i)
}
function qS(e) {
    const t = Is();
    if (!t)
        return;
    const {responseStart: n, requestStart: r} = t;
    r <= n && (Nt && P.log("[Measurements] Adding TTFB Request Time"),
    e["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
const KS = 1e3;
let w1, Ef, wf;
function $2(e) {
    const t = "dom";
    _r(t, e),
    Sr(t, GS)
}
function GS() {
    if (!J.document)
        return;
    const e = Ht.bind(null, "dom")
      , t = C1(e, !0);
    J.document.addEventListener("click", t, !1),
    J.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach(n => {
        const r = J[n] && J[n].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (kt(r, "addEventListener", function(i) {
            return function(o, s, a) {
                if (o === "click" || o == "keypress")
                    try {
                        const l = this
                          , u = l.__sentry_instrumentation_handlers__ = l.__sentry_instrumentation_handlers__ || {}
                          , c = u[o] = u[o] || {
                            refCount: 0
                        };
                        if (!c.handler) {
                            const f = C1(e);
                            c.handler = f,
                            i.call(this, o, f, a)
                        }
                        c.refCount++
                    } catch {}
                return i.call(this, o, s, a)
            }
        }),
        kt(r, "removeEventListener", function(i) {
            return function(o, s, a) {
                if (o === "click" || o == "keypress")
                    try {
                        const l = this
                          , u = l.__sentry_instrumentation_handlers__ || {}
                          , c = u[o];
                        c && (c.refCount--,
                        c.refCount <= 0 && (i.call(this, o, c.handler, a),
                        c.handler = void 0,
                        delete u[o]),
                        Object.keys(u).length === 0 && delete l.__sentry_instrumentation_handlers__)
                    } catch {}
                return i.call(this, o, s, a)
            }
        }))
    }
    )
}
function YS(e) {
    if (e.type !== Ef)
        return !1;
    try {
        if (!e.target || e.target._sentryId !== wf)
            return !1
    } catch {}
    return !0
}
function JS(e, t) {
    return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
}
function C1(e, t=!1) {
    return n => {
        if (!n || n._sentryCaptured)
            return;
        const r = QS(n);
        if (JS(n.type, r))
            return;
        Kt(n, "_sentryCaptured", !0),
        r && !r._sentryId && Kt(r, "_sentryId", Le());
        const i = n.type === "keypress" ? "input" : n.type;
        YS(n) || (e({
            event: n,
            name: i,
            global: t
        }),
        Ef = n.type,
        wf = r ? r._sentryId : void 0),
        clearTimeout(w1),
        w1 = J.setTimeout( () => {
            wf = void 0,
            Ef = void 0
        }
        , KS)
    }
}
function QS(e) {
    try {
        return e.target
    } catch {
        return null
    }
}
let ua;
function Xl(e) {
    const t = "history";
    _r(t, e),
    Sr(t, XS)
}
function XS() {
    if (!V5())
        return;
    const e = J.onpopstate;
    J.onpopstate = function(...n) {
        const r = J.location.href
          , i = ua;
        if (ua = r,
        Ht("history", {
            from: i,
            to: r
        }),
        e)
            try {
                return e.apply(this, n)
            } catch {}
    }
    ;
    function t(n) {
        return function(...r) {
            const i = r.length > 2 ? r[2] : void 0;
            if (i) {
                const o = ua
                  , s = String(i);
                ua = s,
                Ht("history", {
                    from: o,
                    to: s
                })
            }
            return n.apply(this, r)
        }
    }
    kt(J.history, "pushState", t),
    kt(J.history, "replaceState", t)
}
const Ra = {};
function B2(e) {
    const t = Ra[e];
    if (t)
        return t;
    let n = J[e];
    if (of(n))
        return Ra[e] = n.bind(J);
    const r = J.document;
    if (r && typeof r.createElement == "function")
        try {
            const i = r.createElement("iframe");
            i.hidden = !0,
            r.head.appendChild(i);
            const o = i.contentWindow;
            o && o[e] && (n = o[e]),
            r.head.removeChild(i)
        } catch (i) {
            Nt && P.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, i)
        }
    return n && (Ra[e] = n.bind(J))
}
function k1(e) {
    Ra[e] = void 0
}
function Vi(...e) {
    return B2("setTimeout")(...e)
}
const Or = "__sentry_xhr_v3__";
function j2(e) {
    const t = "xhr";
    _r(t, e),
    Sr(t, ZS)
}
function ZS() {
    if (!J.XMLHttpRequest)
        return;
    const e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open,{
        apply(t, n, r) {
            const i = mt() * 1e3
              , o = Rn(r[0]) ? r[0].toUpperCase() : void 0
              , s = e7(r[1]);
            if (!o || !s)
                return t.apply(n, r);
            n[Or] = {
                method: o,
                url: s,
                request_headers: {}
            },
            o === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const a = () => {
                const l = n[Or];
                if (l && n.readyState === 4) {
                    try {
                        l.status_code = n.status
                    } catch {}
                    const u = {
                        endTimestamp: mt() * 1e3,
                        startTimestamp: i,
                        xhr: n
                    };
                    Ht("xhr", u)
                }
            }
            ;
            return "onreadystatechange"in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange,{
                apply(l, u, c) {
                    return a(),
                    l.apply(u, c)
                }
            }) : n.addEventListener("readystatechange", a),
            n.setRequestHeader = new Proxy(n.setRequestHeader,{
                apply(l, u, c) {
                    const [f,d] = c
                      , m = u[Or];
                    return m && Rn(f) && Rn(d) && (m.request_headers[f.toLowerCase()] = d),
                    l.apply(u, c)
                }
            }),
            t.apply(n, r)
        }
    }),
    e.send = new Proxy(e.send,{
        apply(t, n, r) {
            const i = n[Or];
            if (!i)
                return t.apply(n, r);
            r[0] !== void 0 && (i.body = r[0]);
            const o = {
                startTimestamp: mt() * 1e3,
                xhr: n
            };
            return Ht("xhr", o),
            t.apply(n, r)
        }
    })
}
function e7(e) {
    if (Rn(e))
        return e;
    try {
        return e.toString()
    } catch {}
}
const Xu = []
  , Aa = new Map;
function t7() {
    if (Gd() && gt) {
        const t = n7();
        return () => {
            t()
        }
    }
    return () => {}
}
const x1 = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};
function n7() {
    return N2( ({metric: e}) => {
        if (e.value == null)
            return;
        const t = e.entries.find(h => h.duration === e.value && x1[h.name]);
        if (!t)
            return;
        const {interactionId: n} = t
          , r = x1[t.name]
          , i = De(gt + t.startTime)
          , o = De(e.value)
          , s = ut()
          , a = s ? tt(s) : void 0
          , u = (n != null ? Aa.get(n) : void 0) || a
          , c = u ? he(u).description : Te().getScopeData().transactionName
          , f = Fn(t.target)
          , d = qe({
            [Ke]: "auto.http.browser.inp",
            [pr]: `ui.interaction.${r}`,
            [Bd]: t.duration
        })
          , m = F2({
            name: f,
            transaction: c,
            attributes: d,
            startTime: i
        });
        wt([m, "optionalAccess", h => h.addEvent, "call", h => h("inp", {
            [Kl]: "millisecond",
            [Gl]: e.value
        })]),
        wt([m, "optionalAccess", h => h.end, "call", h => h(i + o)])
    }
    )
}
function r7(e) {
    const t = ({entries: n}) => {
        const r = ut()
          , i = r && tt(r);
        n.forEach(o => {
            if (!bS(o) || !i)
                return;
            const s = o.interactionId;
            if (s != null && !Aa.has(s)) {
                if (Xu.length > 10) {
                    const a = Xu.shift();
                    Aa.delete(a)
                }
                Xu.push(s),
                Aa.set(s, i)
            }
        }
        )
    }
    ;
    zi("event", t),
    zi("first-input", t)
}
function i7(e, t=B2("fetch")) {
    let n = 0
      , r = 0;
    function i(o) {
        const s = o.body.length;
        n += s,
        r++;
        const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t)
            return k1("fetch"),
            ll("No fetch implementation available");
        try {
            return t(e.url, a).then(l => (n -= s,
            r--,
            {
                statusCode: l.status,
                headers: {
                    "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": l.headers.get("Retry-After")
                }
            }))
        } catch (l) {
            return k1("fetch"),
            n -= s,
            r--,
            ll(l)
        }
    }
    return s8(e, i)
}
const o7 = 30
  , s7 = 50;
function Cf(e, t, n, r) {
    const i = {
        filename: e,
        function: t === "<anonymous>" ? qr : t,
        in_app: !0
    };
    return n !== void 0 && (i.lineno = n),
    r !== void 0 && (i.colno = r),
    i
}
const a7 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
  , l7 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , u7 = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , c7 = e => {
    const t = a7.exec(e);
    if (t) {
        const [,r,i,o] = t;
        return Cf(r, qr, +i, +o)
    }
    const n = l7.exec(e);
    if (n) {
        if (n[2] && n[2].indexOf("eval") === 0) {
            const s = u7.exec(n[2]);
            s && (n[2] = s[1],
            n[3] = s[2],
            n[4] = s[3])
        }
        const [i,o] = U2(n[1] || qr, n[2]);
        return Cf(o, i, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
    }
}
  , f7 = [o7, c7]
  , d7 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , p7 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , h7 = e => {
    const t = d7.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            const o = p7.exec(t[3]);
            o && (t[1] = t[1] || "eval",
            t[3] = o[1],
            t[4] = o[2],
            t[5] = "")
        }
        let r = t[3]
          , i = t[1] || qr;
        return [i,r] = U2(i, r),
        Cf(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
}
  , m7 = [s7, h7]
  , g7 = [f7, m7]
  , y7 = D0(...g7)
  , U2 = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1
      , r = e.indexOf("safari-web-extension") !== -1;
    return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : qr, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
}
  , ca = 1024
  , v7 = "Breadcrumbs"
  , _7 = (e={}) => {
    const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: v7,
        setup(n) {
            t.console && o5(C7(n)),
            t.dom && $2(w7(n, t.dom)),
            t.xhr && j2(k7(n)),
            t.fetch && B0(x7(n)),
            t.history && Xl(b7(n)),
            t.sentry && n.on("beforeSendEvent", E7(n))
        }
    }
}
  , S7 = _7;
function E7(e) {
    return function(n) {
        le() === e && mr({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: Hn(n)
        }, {
            event: n
        })
    }
}
function w7(e, t) {
    return function(r) {
        if (le() !== e)
            return;
        let i, o, s = typeof t == "object" ? t.serializeAttribute : void 0, a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        a && a > ca && (sn && P.warn(`\`dom.maxStringLength\` cannot exceed ${ca}, but a value of ${a} was configured. Sentry will use ${ca} instead.`),
        a = ca),
        typeof s == "string" && (s = [s]);
        try {
            const u = r.event
              , c = T7(u) ? u.target : u;
            i = Fn(c, {
                keyAttrs: s,
                maxStringLength: a
            }),
            o = A0(c)
        } catch {
            i = "<unknown>"
        }
        if (i.length === 0)
            return;
        const l = {
            category: `ui.${r.name}`,
            message: i
        };
        o && (l.data = {
            "ui.component_name": o
        }),
        mr(l, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }
}
function C7(e) {
    return function(n) {
        if (le() !== e)
            return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: b5(n.level),
            message: Mh(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1)
                r.message = `Assertion failed: ${Mh(n.args.slice(1), " ") || "console.assert"}`,
                r.data.arguments = n.args.slice(1);
            else
                return;
        mr(r, {
            input: n.args,
            level: n.level
        })
    }
}
function k7(e) {
    return function(n) {
        if (le() !== e)
            return;
        const {startTimestamp: r, endTimestamp: i} = n
          , o = n.xhr[Or];
        if (!r || !i || !o)
            return;
        const {method: s, url: a, status_code: l, body: u} = o
          , c = {
            method: s,
            url: a,
            status_code: l
        }
          , f = {
            xhr: n.xhr,
            input: u,
            startTimestamp: r,
            endTimestamp: i
        };
        mr({
            category: "xhr",
            data: c,
            type: "http"
        }, f)
    }
}
function x7(e) {
    return function(n) {
        if (le() !== e)
            return;
        const {startTimestamp: r, endTimestamp: i} = n;
        if (i && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const o = n.fetchData
                  , s = {
                    data: n.error,
                    input: n.args,
                    startTimestamp: r,
                    endTimestamp: i
                };
                mr({
                    category: "fetch",
                    data: o,
                    level: "error",
                    type: "http"
                }, s)
            } else {
                const o = n.response
                  , s = {
                    ...n.fetchData,
                    status_code: o && o.status
                }
                  , a = {
                    input: n.args,
                    response: o,
                    startTimestamp: r,
                    endTimestamp: i
                };
                mr({
                    category: "fetch",
                    data: s,
                    type: "http"
                }, a)
            }
    }
}
function b7(e) {
    return function(n) {
        if (le() !== e)
            return;
        let r = n.from
          , i = n.to;
        const o = $r(Y.location.href);
        let s = r ? $r(r) : void 0;
        const a = $r(i);
        (!s || !s.path) && (s = o),
        o.protocol === a.protocol && o.host === a.host && (i = a.relative),
        o.protocol === s.protocol && o.host === s.host && (r = s.relative),
        mr({
            category: "navigation",
            data: {
                from: r,
                to: i
            }
        })
    }
}
function T7(e) {
    return !!e && !!e.target
}
const I7 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
  , L7 = "BrowserApiErrors"
  , R7 = (e={}) => {
    const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
    };
    return {
        name: L7,
        setupOnce() {
            t.setTimeout && kt(Y, "setTimeout", b1),
            t.setInterval && kt(Y, "setInterval", b1),
            t.requestAnimationFrame && kt(Y, "requestAnimationFrame", P7),
            t.XMLHttpRequest && "XMLHttpRequest"in Y && kt(XMLHttpRequest.prototype, "send", O7);
            const n = t.eventTarget;
            n && (Array.isArray(n) ? n : I7).forEach(N7)
        }
    }
}
  , A7 = R7;
function b1(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = Wi(n, {
            mechanism: {
                data: {
                    function: $n(e)
                },
                handled: !1,
                type: "instrument"
            }
        }),
        e.apply(this, t)
    }
}
function P7(e) {
    return function(t) {
        return e.apply(this, [Wi(t, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: $n(e)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
function O7(e) {
    return function(...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
            i in n && typeof n[i] == "function" && kt(n, i, function(o) {
                const s = {
                    mechanism: {
                        data: {
                            function: i,
                            handler: $n(o)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                  , a = Od(o);
                return a && (s.mechanism.data.handler = $n(a)),
                Wi(o, s)
            })
        }
        ),
        e.apply(this, t)
    }
}
function N7(e) {
    const t = Y
      , n = t[e] && t[e].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (kt(n, "addEventListener", function(r) {
        return function(i, o, s) {
            try {
                typeof o.handleEvent == "function" && (o.handleEvent = Wi(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: $n(o),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch {}
            return r.apply(this, [i, Wi(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: $n(o),
                        target: e
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), s])
        }
    }),
    kt(n, "removeEventListener", function(r) {
        return function(i, o, s) {
            const a = o;
            try {
                const l = a && a.__sentry_wrapped__;
                l && r.call(this, i, l, s)
            } catch {}
            return r.call(this, i, a, s)
        }
    }))
}
const M7 = "GlobalHandlers"
  , D7 = (e={}) => {
    const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: M7,
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(n) {
            t.onerror && ($7(n),
            T1("onerror")),
            t.onunhandledrejection && (B7(n),
            T1("onunhandledrejection"))
        }
    }
}
  , F7 = D7;
function $7(e) {
    U0(t => {
        const {stackParser: n, attachStacktrace: r} = W2();
        if (le() !== e || k2())
            return;
        const {msg: i, url: o, line: s, column: a, error: l} = t
          , u = W7(Vd(n, l || i, void 0, r, !1), o, s, a);
        u.level = "error",
        h2(u, {
            originalException: l,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    }
    )
}
function B7(e) {
    W0(t => {
        const {stackParser: n, attachStacktrace: r} = W2();
        if (le() !== e || k2())
            return;
        const i = j7(t)
          , o = Pd(i) ? U7(i) : Vd(n, i, void 0, r, !0);
        o.level = "error",
        h2(o, {
            originalException: i,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    }
    )
}
function j7(e) {
    if (Pd(e))
        return e;
    try {
        if ("reason"in e)
            return e.reason;
        if ("detail"in e && "reason"in e.detail)
            return e.detail.reason
    } catch {}
    return e
}
function U7(e) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}
function W7(e, t, n, r) {
    const i = e.exception = e.exception || {}
      , o = i.values = i.values || []
      , s = o[0] = o[0] || {}
      , a = s.stacktrace = s.stacktrace || {}
      , l = a.frames = a.frames || []
      , u = isNaN(parseInt(r, 10)) ? void 0 : r
      , c = isNaN(parseInt(n, 10)) ? void 0 : n
      , f = Rn(t) && t.length > 0 ? t : R0();
    return l.length === 0 && l.push({
        colno: u,
        filename: f,
        function: qr,
        in_app: !0,
        lineno: c
    }),
    e
}
function T1(e) {
    sn && P.log(`Global Handler attached: ${e}`)
}
function W2() {
    const e = le();
    return e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const z7 = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!Y.navigator && !Y.location && !Y.document)
            return;
        const t = e.request && e.request.url || Y.location && Y.location.href
          , {referrer: n} = Y.document || {}
          , {userAgent: r} = Y.navigator || {}
          , i = {
            ...e.request && e.request.headers,
            ...n && {
                Referer: n
            },
            ...r && {
                "User-Agent": r
            }
        }
          , o = {
            ...e.request,
            ...t && {
                url: t
            },
            headers: i
        };
        e.request = o
    }
})
  , H7 = "cause"
  , V7 = 5
  , q7 = "LinkedErrors"
  , K7 = (e={}) => {
    const t = e.limit || V7
      , n = e.key || H7;
    return {
        name: q7,
        preprocessEvent(r, i, o) {
            const s = o.getOptions();
            W6(zd, s.stackParser, s.maxValueLength, n, t, r, i)
        }
    }
}
  , G7 = K7;
function Y7(e) {
    return [y8(), p8(), A7(), S7(), F7(), G7(), R8(), z7()]
}
function J7(e={}) {
    const t = {
        defaultIntegrations: Y7(),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : Y.SENTRY_RELEASE && Y.SENTRY_RELEASE.id ? Y.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return e.defaultIntegrations == null && delete e.defaultIntegrations,
    {
        ...t,
        ...e
    }
}
function Q7() {
    const e = typeof Y.window < "u" && Y;
    if (!e)
        return !1;
    const t = e.chrome ? "chrome" : "browser"
      , n = e[t]
      , r = n && n.runtime && n.runtime.id
      , i = Y.location && Y.location.href || ""
      , o = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"]
      , s = !!r && Y === Y.top && o.some(l => i.startsWith(`${l}//`))
      , a = typeof e.nw < "u";
    return !!r && !s && !a
}
function X7(e={}) {
    const t = J7(e);
    if (Q7()) {
        eo( () => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        );
        return
    }
    sn && (F0() || P.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = {
        ...t,
        stackParser: r5(t.stackParser || y7),
        integrations: X_(t),
        transport: t.transport || i7
    }
      , r = r8(Q8, n);
    return t.autoSessionTracking && Z7(),
    r
}
function Z7() {
    if (typeof Y.document > "u") {
        sn && P.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    l1({
        ignoreDuration: !0
    }),
    u1(),
    Xl( ({from: e, to: t}) => {
        e !== void 0 && e !== t && (l1({
            ignoreDuration: !0
        }),
        u1())
    }
    )
}
const Ee = ue
  , Yd = "sentryReplaySession"
  , e9 = "replay_event"
  , Jd = "Unable to send Replay"
  , t9 = 3e5
  , n9 = 9e5
  , r9 = 5e3
  , i9 = 5500
  , o9 = 6e4
  , s9 = 5e3
  , a9 = 3
  , I1 = 15e4
  , fa = 5e3
  , l9 = 3e3
  , u9 = 300
  , Qd = 2e7
  , c9 = 4999
  , f9 = 15e3
  , L1 = 36e5;
function kf(e, t) {
    return e ?? t()
}
function ps(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
var He;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(He || (He = {}));
function d9(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function zo(e) {
    const t = ps([e, "optionalAccess", n => n.host]);
    return ps([t, "optionalAccess", n => n.shadowRoot]) === e
}
function Ho(e) {
    return Object.prototype.toString.call(e) === "[object ShadowRoot]"
}
function p9(e) {
    return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
    e
}
function h9(e) {
    const {cssText: t} = e;
    if (t.split('"').length < 3)
        return t;
    const n = ["@import", `url(${JSON.stringify(e.href)})`];
    return e.layerName === "" ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
}
function ml(e) {
    try {
        const t = e.rules || e.cssRules;
        return t ? p9(Array.from(t, z2).join("")) : null
    } catch {
        return null
    }
}
function z2(e) {
    let t;
    if (g9(e))
        try {
            t = ml(e.styleSheet) || h9(e)
        } catch {}
    else if (y9(e) && e.selectorText.includes(":"))
        return m9(e.cssText);
    return t || e.cssText
}
function m9(e) {
    const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return e.replace(t, "$1\\$2")
}
function g9(e) {
    return "styleSheet"in e
}
function y9(e) {
    return "selectorText"in e
}
class H2 {
    constructor() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
    getId(t) {
        if (!t)
            return -1;
        const n = ps([this, "access", r => r.getMeta, "call", r => r(t), "optionalAccess", r => r.id]);
        return kf(n, () => -1)
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null
    }
    removeNodeFromMap(t) {
        const n = this.getId(t);
        this.idNodeMap.delete(n),
        t.childNodes && t.childNodes.forEach(r => this.removeNodeFromMap(r))
    }
    has(t) {
        return this.idNodeMap.has(t)
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t)
    }
    add(t, n) {
        const r = n.id;
        this.idNodeMap.set(r, t),
        this.nodeMetaMap.set(t, n)
    }
    replace(t, n) {
        const r = this.getNode(t);
        if (r) {
            const i = this.nodeMetaMap.get(r);
            i && this.nodeMetaMap.set(n, i)
        }
        this.idNodeMap.set(t, n)
    }
    reset() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
}
function v9() {
    return new H2
}
function Zl({maskInputOptions: e, tagName: t, type: n}) {
    return t === "OPTION" && (t = "SELECT"),
    !!(e[t.toLowerCase()] || n && e[n] || n === "password" || t === "INPUT" && !n && e.text)
}
function hs({isMasked: e, element: t, value: n, maskInputFn: r}) {
    let i = n || "";
    return e ? (r && (i = r(i, t)),
    "*".repeat(i.length)) : i
}
function qi(e) {
    return e.toLowerCase()
}
function xf(e) {
    return e.toUpperCase()
}
const R1 = "__rrweb_original__";
function _9(e) {
    const t = e.getContext("2d");
    if (!t)
        return !0;
    const n = 50;
    for (let r = 0; r < e.width; r += n)
        for (let i = 0; i < e.height; i += n) {
            const o = t.getImageData
              , s = R1 in o ? o[R1] : o;
            if (new Uint32Array(s.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i)).data.buffer).some(l => l !== 0))
                return !1
        }
    return !0
}
function Xd(e) {
    const t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? qi(t) : null
}
function gl(e, t, n) {
    return t === "INPUT" && (n === "radio" || n === "checkbox") ? e.getAttribute("value") || "" : e.value
}
function V2(e, t) {
    let n;
    try {
        n = new URL(e,kf(t, () => window.location.href))
    } catch {
        return null
    }
    const r = /\.([0-9a-z]+)(?:$)/i
      , i = n.pathname.match(r);
    return kf(ps([i, "optionalAccess", o => o[1]]), () => null)
}
const A1 = {};
function q2(e) {
    const t = A1[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const i = n.createElement("iframe");
            i.hidden = !0,
            n.head.appendChild(i);
            const o = i.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(i)
        } catch {}
    return A1[e] = r.bind(window)
}
function bf(...e) {
    return q2("setTimeout")(...e)
}
function K2(...e) {
    return q2("clearTimeout")(...e)
}
let S9 = 1;
const E9 = new RegExp("[^a-z0-9-_:]")
  , ms = -2;
function Zd() {
    return S9++
}
function w9(e) {
    if (e instanceof HTMLFormElement)
        return "form";
    const t = qi(e.tagName);
    return E9.test(t) ? "div" : t
}
function C9(e) {
    let t = "";
    return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
    t = t.split("?")[0],
    t
}
let si, P1;
const k9 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
  , x9 = /^(?:[a-z+]+:)?\/\//i
  , b9 = /^www\..*/i
  , T9 = /^(data:)([^,]*),(.*)/i;
function yl(e, t) {
    return (e || "").replace(k9, (n, r, i, o, s, a) => {
        const l = i || s || a
          , u = r || o || "";
        if (!l)
            return n;
        if (x9.test(l) || b9.test(l))
            return `url(${u}${l}${u})`;
        if (T9.test(l))
            return `url(${u}${l}${u})`;
        if (l[0] === "/")
            return `url(${u}${C9(t) + l}${u})`;
        const c = t.split("/")
          , f = l.split("/");
        c.pop();
        for (const d of f)
            d !== "." && (d === ".." ? c.pop() : c.push(d));
        return `url(${u}${c.join("/")}${u})`
    }
    )
}
const I9 = /^[^ \t\n\r\u000c]+/
  , L9 = /^[, \t\n\r\u000c]+/;
function R9(e, t) {
    if (t.trim() === "")
        return t;
    let n = 0;
    function r(o) {
        let s;
        const a = o.exec(t.substring(n));
        return a ? (s = a[0],
        n += s.length,
        s) : ""
    }
    const i = [];
    for (; r(L9),
    !(n >= t.length); ) {
        let o = r(I9);
        if (o.slice(-1) === ",")
            o = Si(e, o.substring(0, o.length - 1)),
            i.push(o);
        else {
            let s = "";
            o = Si(e, o);
            let a = !1;
            for (; ; ) {
                const l = t.charAt(n);
                if (l === "") {
                    i.push((o + s).trim());
                    break
                } else if (a)
                    l === ")" && (a = !1);
                else if (l === ",") {
                    n += 1,
                    i.push((o + s).trim());
                    break
                } else
                    l === "(" && (a = !0);
                s += l,
                n += 1
            }
        }
    }
    return i.join(", ")
}
function Si(e, t) {
    if (!t || t.trim() === "")
        return t;
    const n = e.createElement("a");
    return n.href = t,
    n.href
}
function A9(e) {
    return !!(e.tagName === "svg" || e.ownerSVGElement)
}
function ep() {
    const e = document.createElement("a");
    return e.href = "",
    e.href
}
function G2(e, t, n, r, i, o) {
    return r && (n === "src" || n === "href" && !(t === "use" && r[0] === "#") || n === "xlink:href" && r[0] !== "#" || n === "background" && (t === "table" || t === "td" || t === "th") ? Si(e, r) : n === "srcset" ? R9(e, r) : n === "style" ? yl(r, ep()) : t === "object" && n === "data" ? Si(e, r) : typeof o == "function" ? o(n, r, i) : r)
}
function Y2(e, t, n) {
    return (e === "video" || e === "audio") && t === "autoplay"
}
function P9(e, t, n, r) {
    try {
        if (r && e.matches(r))
            return !1;
        if (typeof t == "string") {
            if (e.classList.contains(t))
                return !0
        } else
            for (let i = e.classList.length; i--; ) {
                const o = e.classList[i];
                if (t.test(o))
                    return !0
            }
        if (n)
            return e.matches(n)
    } catch {}
    return !1
}
function O9(e, t) {
    for (let n = e.classList.length; n--; ) {
        const r = e.classList[n];
        if (t.test(r))
            return !0
    }
    return !1
}
function Nr(e, t, n=1 / 0, r=0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Nr(e.parentNode, t, n, r + 1)
}
function Ei(e, t) {
    return n => {
        const r = n;
        if (r === null)
            return !1;
        try {
            if (e) {
                if (typeof e == "string") {
                    if (r.matches(`.${e}`))
                        return !0
                } else if (O9(r, e))
                    return !0
            }
            return !!(t && r.matches(t))
        } catch {
            return !1
        }
    }
}
function Ki(e, t, n, r, i, o) {
    try {
        const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (s === null)
            return !1;
        if (s.tagName === "INPUT") {
            const u = s.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(u))
                return !0
        }
        let a = -1
          , l = -1;
        if (o) {
            if (l = Nr(s, Ei(r, i)),
            l < 0)
                return !0;
            a = Nr(s, Ei(t, n), l >= 0 ? l : 1 / 0)
        } else {
            if (a = Nr(s, Ei(t, n)),
            a < 0)
                return !1;
            l = Nr(s, Ei(r, i), a >= 0 ? a : 1 / 0)
        }
        return a >= 0 ? l >= 0 ? a <= l : !0 : l >= 0 ? !1 : !!o
    } catch {}
    return !!o
}
function N9(e, t, n) {
    const r = e.contentWindow;
    if (!r)
        return;
    let i = !1, o;
    try {
        o = r.document.readyState
    } catch {
        return
    }
    if (o !== "complete") {
        const a = bf( () => {
            i || (t(),
            i = !0)
        }
        , n);
        e.addEventListener("load", () => {
            K2(a),
            i = !0,
            t()
        }
        );
        return
    }
    const s = "about:blank";
    if (r.location.href !== s || e.src === s || e.src === "")
        return bf(t, 0),
        e.addEventListener("load", t);
    e.addEventListener("load", t)
}
function M9(e, t, n) {
    let r = !1, i;
    try {
        i = e.sheet
    } catch {
        return
    }
    if (i)
        return;
    const o = bf( () => {
        r || (t(),
        r = !0)
    }
    , n);
    e.addEventListener("load", () => {
        K2(o),
        r = !0,
        t()
    }
    )
}
function D9(e, t) {
    const {doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: s, maskAllText: a, maskAttributeFn: l, maskTextClass: u, unmaskTextClass: c, maskTextSelector: f, unmaskTextSelector: d, inlineStylesheet: m, maskInputOptions: h={}, maskTextFn: v, maskInputFn: k, dataURLOptions: g={}, inlineImages: p, recordCanvas: y, keepIframeSrcFn: E, newlyAddedElement: x=!1} = t
      , b = F9(n, r);
    switch (e.nodeType) {
    case e.DOCUMENT_NODE:
        return e.compatMode !== "CSS1Compat" ? {
            type: He.Document,
            childNodes: [],
            compatMode: e.compatMode
        } : {
            type: He.Document,
            childNodes: []
        };
    case e.DOCUMENT_TYPE_NODE:
        return {
            type: He.DocumentType,
            name: e.name,
            publicId: e.publicId,
            systemId: e.systemId,
            rootId: b
        };
    case e.ELEMENT_NODE:
        return B9(e, {
            doc: n,
            blockClass: i,
            blockSelector: o,
            unblockSelector: s,
            inlineStylesheet: m,
            maskAttributeFn: l,
            maskInputOptions: h,
            maskInputFn: k,
            dataURLOptions: g,
            inlineImages: p,
            recordCanvas: y,
            keepIframeSrcFn: E,
            newlyAddedElement: x,
            rootId: b,
            maskAllText: a,
            maskTextClass: u,
            unmaskTextClass: c,
            maskTextSelector: f,
            unmaskTextSelector: d
        });
    case e.TEXT_NODE:
        return $9(e, {
            maskAllText: a,
            maskTextClass: u,
            unmaskTextClass: c,
            maskTextSelector: f,
            unmaskTextSelector: d,
            maskTextFn: v,
            maskInputOptions: h,
            maskInputFn: k,
            rootId: b
        });
    case e.CDATA_SECTION_NODE:
        return {
            type: He.CDATA,
            textContent: "",
            rootId: b
        };
    case e.COMMENT_NODE:
        return {
            type: He.Comment,
            textContent: e.textContent || "",
            rootId: b
        };
    default:
        return !1
    }
}
function F9(e, t) {
    if (!t.hasNode(e))
        return;
    const n = t.getId(e);
    return n === 1 ? void 0 : n
}
function $9(e, t) {
    const {maskAllText: n, maskTextClass: r, unmaskTextClass: i, maskTextSelector: o, unmaskTextSelector: s, maskTextFn: a, maskInputOptions: l, maskInputFn: u, rootId: c} = t
      , f = e.parentNode && e.parentNode.tagName;
    let d = e.textContent;
    const m = f === "STYLE" ? !0 : void 0
      , h = f === "SCRIPT" ? !0 : void 0
      , v = f === "TEXTAREA" ? !0 : void 0;
    if (m && d) {
        try {
            e.nextSibling || e.previousSibling || ps([e, "access", g => g.parentNode, "access", g => g.sheet, "optionalAccess", g => g.cssRules]) && (d = ml(e.parentNode.sheet))
        } catch (g) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${g}`, e)
        }
        d = yl(d, ep())
    }
    h && (d = "SCRIPT_PLACEHOLDER");
    const k = Ki(e, r, o, i, s, n);
    if (!m && !h && !v && d && k && (d = a ? a(d, e.parentElement) : d.replace(/[\S]/g, "*")),
    v && d && (l.textarea || k) && (d = u ? u(d, e.parentNode) : d.replace(/[\S]/g, "*")),
    f === "OPTION" && d) {
        const g = Zl({
            type: null,
            tagName: f,
            maskInputOptions: l
        });
        d = hs({
            isMasked: Ki(e, r, o, i, s, g),
            element: e,
            value: d,
            maskInputFn: u
        })
    }
    return {
        type: He.Text,
        textContent: d || "",
        isStyle: m,
        rootId: c
    }
}
function B9(e, t) {
    const {doc: n, blockClass: r, blockSelector: i, unblockSelector: o, inlineStylesheet: s, maskInputOptions: a={}, maskAttributeFn: l, maskInputFn: u, dataURLOptions: c={}, inlineImages: f, recordCanvas: d, keepIframeSrcFn: m, newlyAddedElement: h=!1, rootId: v, maskAllText: k, maskTextClass: g, unmaskTextClass: p, maskTextSelector: y, unmaskTextSelector: E} = t
      , x = P9(e, r, i, o)
      , b = w9(e);
    let w = {};
    const I = e.attributes.length;
    for (let T = 0; T < I; T++) {
        const D = e.attributes[T];
        D.name && !Y2(b, D.name, D.value) && (w[D.name] = G2(n, b, qi(D.name), D.value, e, l))
    }
    if (b === "link" && s) {
        const T = Array.from(n.styleSheets).find(z => z.href === e.href);
        let D = null;
        T && (D = ml(T)),
        D && (delete w.rel,
        delete w.href,
        w._cssText = yl(D, T.href))
    }
    if (b === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
        const T = ml(e.sheet);
        T && (w._cssText = yl(T, ep()))
    }
    if (b === "input" || b === "textarea" || b === "select" || b === "option") {
        const T = e
          , D = Xd(T)
          , z = gl(T, xf(b), D)
          , ee = T.checked;
        if (D !== "submit" && D !== "button" && z) {
            const ne = Ki(T, g, y, p, E, Zl({
                type: D,
                tagName: xf(b),
                maskInputOptions: a
            }));
            w.value = hs({
                isMasked: ne,
                element: T,
                value: z,
                maskInputFn: u
            })
        }
        ee && (w.checked = ee)
    }
    if (b === "option" && (e.selected && !a.select ? w.selected = !0 : delete w.selected),
    b === "canvas" && d) {
        if (e.__context === "2d")
            _9(e) || (w.rr_dataURL = e.toDataURL(c.type, c.quality));
        else if (!("__context"in e)) {
            const T = e.toDataURL(c.type, c.quality)
              , D = document.createElement("canvas");
            D.width = e.width,
            D.height = e.height;
            const z = D.toDataURL(c.type, c.quality);
            T !== z && (w.rr_dataURL = T)
        }
    }
    if (b === "img" && f) {
        si || (si = n.createElement("canvas"),
        P1 = si.getContext("2d"));
        const T = e
          , D = T.crossOrigin;
        T.crossOrigin = "anonymous";
        const z = () => {
            T.removeEventListener("load", z);
            try {
                si.width = T.naturalWidth,
                si.height = T.naturalHeight,
                P1.drawImage(T, 0, 0),
                w.rr_dataURL = si.toDataURL(c.type, c.quality)
            } catch (ee) {
                console.warn(`Cannot inline img src=${T.currentSrc}! Error: ${ee}`)
            }
            D ? w.crossOrigin = D : T.removeAttribute("crossorigin")
        }
        ;
        T.complete && T.naturalWidth !== 0 ? z() : T.addEventListener("load", z)
    }
    if ((b === "audio" || b === "video") && (w.rr_mediaState = e.paused ? "paused" : "played",
    w.rr_mediaCurrentTime = e.currentTime),
    h || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft),
    e.scrollTop && (w.rr_scrollTop = e.scrollTop)),
    x) {
        const {width: T, height: D} = e.getBoundingClientRect();
        w = {
            class: w.class,
            rr_width: `${T}px`,
            rr_height: `${D}px`
        }
    }
    b === "iframe" && !m(w.src) && (!x && !e.contentDocument && (w.rr_src = w.src),
    delete w.src);
    let W;
    try {
        customElements.get(b) && (W = !0)
    } catch {}
    return {
        type: He.Element,
        tagName: b,
        attributes: w,
        childNodes: [],
        isSVG: A9(e) || void 0,
        needBlock: x,
        rootId: v,
        isCustom: W
    }
}
function Se(e) {
    return e == null ? "" : e.toLowerCase()
}
function j9(e, t) {
    if (t.comment && e.type === He.Comment)
        return !0;
    if (e.type === He.Element) {
        if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && V2(e.attributes.href) === "js"))
            return !0;
        if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (Se(e.attributes.name).match(/^msapplication-tile(image|color)$/) || Se(e.attributes.name) === "application-name" || Se(e.attributes.rel) === "icon" || Se(e.attributes.rel) === "apple-touch-icon" || Se(e.attributes.rel) === "shortcut icon")))
            return !0;
        if (e.tagName === "meta") {
            if (t.headMetaDescKeywords && Se(e.attributes.name).match(/^description|keywords$/))
                return !0;
            if (t.headMetaSocial && (Se(e.attributes.property).match(/^(og|twitter|fb):/) || Se(e.attributes.name).match(/^(og|twitter):/) || Se(e.attributes.name) === "pinterest"))
                return !0;
            if (t.headMetaRobots && (Se(e.attributes.name) === "robots" || Se(e.attributes.name) === "googlebot" || Se(e.attributes.name) === "bingbot"))
                return !0;
            if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
                return !0;
            if (t.headMetaAuthorship && (Se(e.attributes.name) === "author" || Se(e.attributes.name) === "generator" || Se(e.attributes.name) === "framework" || Se(e.attributes.name) === "publisher" || Se(e.attributes.name) === "progid" || Se(e.attributes.property).match(/^article:/) || Se(e.attributes.property).match(/^product:/)))
                return !0;
            if (t.headMetaVerification && (Se(e.attributes.name) === "google-site-verification" || Se(e.attributes.name) === "yandex-verification" || Se(e.attributes.name) === "csrf-token" || Se(e.attributes.name) === "p:domain_verify" || Se(e.attributes.name) === "verify-v1" || Se(e.attributes.name) === "verification" || Se(e.attributes.name) === "shopify-checkout-api-token"))
                return !0
        }
    }
    return !1
}
function wi(e, t) {
    const {doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: s, maskAllText: a, maskTextClass: l, unmaskTextClass: u, maskTextSelector: c, unmaskTextSelector: f, skipChild: d=!1, inlineStylesheet: m=!0, maskInputOptions: h={}, maskAttributeFn: v, maskTextFn: k, maskInputFn: g, slimDOMOptions: p, dataURLOptions: y={}, inlineImages: E=!1, recordCanvas: x=!1, onSerialize: b, onIframeLoad: w, iframeLoadTimeout: I=5e3, onStylesheetLoad: W, stylesheetLoadTimeout: T=5e3, keepIframeSrcFn: D= () => !1, newlyAddedElement: z=!1} = t;
    let {preserveWhiteSpace: ee=!0} = t;
    const ne = D9(e, {
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        maskAllText: a,
        unblockSelector: s,
        maskTextClass: l,
        unmaskTextClass: u,
        maskTextSelector: c,
        unmaskTextSelector: f,
        inlineStylesheet: m,
        maskInputOptions: h,
        maskAttributeFn: v,
        maskTextFn: k,
        maskInputFn: g,
        dataURLOptions: y,
        inlineImages: E,
        recordCanvas: x,
        keepIframeSrcFn: D,
        newlyAddedElement: z
    });
    if (!ne)
        return console.warn(e, "not serialized"),
        null;
    let me;
    r.hasNode(e) ? me = r.getId(e) : j9(ne, p) || !ee && ne.type === He.Text && !ne.isStyle && !ne.textContent.replace(/^\s+|\s+$/gm, "").length ? me = ms : me = Zd();
    const H = Object.assign(ne, {
        id: me
    });
    if (r.add(e, H),
    me === ms)
        return null;
    b && b(e);
    let _e = !d;
    if (H.type === He.Element) {
        _e = _e && !H.needBlock,
        delete H.needBlock;
        const L = e.shadowRoot;
        L && Ho(L) && (H.isShadowHost = !0)
    }
    if ((H.type === He.Document || H.type === He.Element) && _e) {
        p.headWhitespace && H.type === He.Element && H.tagName === "head" && (ee = !1);
        const L = {
            doc: n,
            mirror: r,
            blockClass: i,
            blockSelector: o,
            maskAllText: a,
            unblockSelector: s,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: c,
            unmaskTextSelector: f,
            skipChild: d,
            inlineStylesheet: m,
            maskInputOptions: h,
            maskAttributeFn: v,
            maskTextFn: k,
            maskInputFn: g,
            slimDOMOptions: p,
            dataURLOptions: y,
            inlineImages: E,
            recordCanvas: x,
            preserveWhiteSpace: ee,
            onSerialize: b,
            onIframeLoad: w,
            iframeLoadTimeout: I,
            onStylesheetLoad: W,
            stylesheetLoadTimeout: T,
            keepIframeSrcFn: D
        };
        for (const $ of Array.from(e.childNodes)) {
            const j = wi($, L);
            j && H.childNodes.push(j)
        }
        if (d9(e) && e.shadowRoot)
            for (const $ of Array.from(e.shadowRoot.childNodes)) {
                const j = wi($, L);
                j && (Ho(e.shadowRoot) && (j.isShadow = !0),
                H.childNodes.push(j))
            }
    }
    return e.parentNode && zo(e.parentNode) && Ho(e.parentNode) && (H.isShadow = !0),
    H.type === He.Element && H.tagName === "iframe" && N9(e, () => {
        const L = e.contentDocument;
        if (L && w) {
            const $ = wi(L, {
                doc: L,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: s,
                maskAllText: a,
                maskTextClass: l,
                unmaskTextClass: u,
                maskTextSelector: c,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: m,
                maskInputOptions: h,
                maskAttributeFn: v,
                maskTextFn: k,
                maskInputFn: g,
                slimDOMOptions: p,
                dataURLOptions: y,
                inlineImages: E,
                recordCanvas: x,
                preserveWhiteSpace: ee,
                onSerialize: b,
                onIframeLoad: w,
                iframeLoadTimeout: I,
                onStylesheetLoad: W,
                stylesheetLoadTimeout: T,
                keepIframeSrcFn: D
            });
            $ && w(e, $)
        }
    }
    , I),
    H.type === He.Element && H.tagName === "link" && typeof H.attributes.rel == "string" && (H.attributes.rel === "stylesheet" || H.attributes.rel === "preload" && typeof H.attributes.href == "string" && V2(H.attributes.href) === "css") && M9(e, () => {
        if (W) {
            const L = wi(e, {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: s,
                maskAllText: a,
                maskTextClass: l,
                unmaskTextClass: u,
                maskTextSelector: c,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: m,
                maskInputOptions: h,
                maskAttributeFn: v,
                maskTextFn: k,
                maskInputFn: g,
                slimDOMOptions: p,
                dataURLOptions: y,
                inlineImages: E,
                recordCanvas: x,
                preserveWhiteSpace: ee,
                onSerialize: b,
                onIframeLoad: w,
                iframeLoadTimeout: I,
                onStylesheetLoad: W,
                stylesheetLoadTimeout: T,
                keepIframeSrcFn: D
            });
            L && W(e, L)
        }
    }
    , T),
    H
}
function U9(e, t) {
    const {mirror: n=new H2, blockClass: r="rr-block", blockSelector: i=null, unblockSelector: o=null, maskAllText: s=!1, maskTextClass: a="rr-mask", unmaskTextClass: l=null, maskTextSelector: u=null, unmaskTextSelector: c=null, inlineStylesheet: f=!0, inlineImages: d=!1, recordCanvas: m=!1, maskAllInputs: h=!1, maskAttributeFn: v, maskTextFn: k, maskInputFn: g, slimDOM: p=!1, dataURLOptions: y, preserveWhiteSpace: E, onSerialize: x, onIframeLoad: b, iframeLoadTimeout: w, onStylesheetLoad: I, stylesheetLoadTimeout: W, keepIframeSrcFn: T= () => !1} = t || {};
    return wi(e, {
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: i,
        unblockSelector: o,
        maskAllText: s,
        maskTextClass: a,
        unmaskTextClass: l,
        maskTextSelector: u,
        unmaskTextSelector: c,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputOptions: h === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
        } : h === !1 ? {} : h,
        maskAttributeFn: v,
        maskTextFn: k,
        maskInputFn: g,
        slimDOMOptions: p === !0 || p === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: p === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : p === !1 ? {} : p,
        dataURLOptions: y,
        inlineImages: d,
        recordCanvas: m,
        preserveWhiteSpace: E,
        onSerialize: x,
        onIframeLoad: b,
        iframeLoadTimeout: w,
        onStylesheetLoad: I,
        stylesheetLoadTimeout: W,
        keepIframeSrcFn: T,
        newlyAddedElement: !1
    })
}
function Vn(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
function pt(e, t, n=document) {
    const r = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, r),
    () => n.removeEventListener(e, t, r)
}
const ai = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let O1 = {
    map: {},
    getId() {
        return console.error(ai),
        -1
    },
    getNode() {
        return console.error(ai),
        null
    },
    removeNodeFromMap() {
        console.error(ai)
    },
    has() {
        return console.error(ai),
        !1
    },
    reset() {
        console.error(ai)
    }
};
typeof window < "u" && window.Proxy && window.Reflect && (O1 = new Proxy(O1,{
    get(e, t, n) {
        return t === "map" && console.error(ai),
        Reflect.get(e, t, n)
    }
}));
function gs(e, t, n={}) {
    let r = null
      , i = 0;
    return function(...o) {
        const s = Date.now();
        !i && n.leading === !1 && (i = s);
        const a = t - (s - i)
          , l = this;
        a <= 0 || a > t ? (r && (G9(r),
        r = null),
        i = s,
        e.apply(l, o)) : !r && n.trailing !== !1 && (r = eu( () => {
            i = n.leading === !1 ? 0 : Date.now(),
            r = null,
            e.apply(l, o)
        }
        , a))
    }
}
function J2(e, t, n, r, i=window) {
    const o = i.Object.getOwnPropertyDescriptor(e, t);
    return i.Object.defineProperty(e, t, r ? n : {
        set(s) {
            eu( () => {
                n.set.call(this, s)
            }
            , 0),
            o && o.set && o.set.call(this, s)
        }
    }),
    () => J2(e, t, o || {}, !0)
}
function tp(e, t, n) {
    try {
        if (!(t in e))
            return () => {}
            ;
        const r = e[t]
          , i = n(r);
        return typeof i == "function" && (i.prototype = i.prototype || {},
        Object.defineProperties(i, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })),
        e[t] = i,
        () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
let vl = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) || (vl = () => new Date().getTime());
function Q2(e) {
    const t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : Vn([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollLeft]) || Vn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollLeft]) || Vn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollLeft]) || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : Vn([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollTop]) || Vn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollTop]) || Vn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollTop]) || 0
    }
}
function X2() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}
function Z2() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}
function ey(e) {
    return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
}
function At(e, t, n, r, i) {
    if (!e)
        return !1;
    const o = ey(e);
    if (!o)
        return !1;
    const s = Ei(t, n);
    if (!i) {
        const u = r && o.matches(r);
        return s(o) && !u
    }
    const a = Nr(o, s);
    let l = -1;
    return a < 0 ? !1 : (r && (l = Nr(o, Ei(null, r))),
    a > -1 && l < 0 ? !0 : a < l)
}
function W9(e, t) {
    return t.getId(e) !== -1
}
function Zu(e, t) {
    return t.getId(e) === ms
}
function ty(e, t) {
    if (zo(e))
        return !1;
    const n = t.getId(e);
    return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? ty(e.parentNode, t) : !0 : !0
}
function Tf(e) {
    return !!e.changedTouches
}
function z9(e=window) {
    "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains || (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t))
            throw new TypeError("1 argument is required");
        do
            if (this === n)
                return !0;
        while (n = n && n.parentNode);
        return !1
    }
    )
}
function ny(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e))
}
function ry(e, t) {
    return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
}
function If(e) {
    return !!Vn([e, "optionalAccess", t => t.shadowRoot])
}
class H9 {
    constructor() {
        this.id = 1,
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map
    }
    getId(t) {
        return H5(this.styleIDMap.get(t), () => -1)
    }
    has(t) {
        return this.styleIDMap.has(t)
    }
    add(t, n) {
        if (this.has(t))
            return this.getId(t);
        let r;
        return n === void 0 ? r = this.id++ : r = n,
        this.styleIDMap.set(t, r),
        this.idStyleMap.set(r, t),
        r
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null
    }
    reset() {
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map,
        this.id = 1
    }
    generateId() {
        return this.id++
    }
}
function iy(e) {
    let t = null;
    return Vn([e, "access", n => n.getRootNode, "optionalCall", n => n(), "optionalAccess", n => n.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
    t
}
function V9(e) {
    let t = e, n;
    for (; n = iy(t); )
        t = n;
    return t
}
function q9(e) {
    const t = e.ownerDocument;
    if (!t)
        return !1;
    const n = V9(e);
    return t.contains(n)
}
function oy(e) {
    const t = e.ownerDocument;
    return t ? t.contains(e) || q9(e) : !1
}
const N1 = {};
function np(e) {
    const t = N1[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const i = n.createElement("iframe");
            i.hidden = !0,
            n.head.appendChild(i);
            const o = i.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(i)
        } catch {}
    return N1[e] = r.bind(window)
}
function K9(...e) {
    return np("requestAnimationFrame")(...e)
}
function eu(...e) {
    return np("setTimeout")(...e)
}
function G9(...e) {
    return np("clearTimeout")(...e)
}
var te = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
e[e.Load = 1] = "Load",
e[e.FullSnapshot = 2] = "FullSnapshot",
e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
e[e.Meta = 4] = "Meta",
e[e.Custom = 5] = "Custom",
e[e.Plugin = 6] = "Plugin",
e))(te || {})
  , X = (e => (e[e.Mutation = 0] = "Mutation",
e[e.MouseMove = 1] = "MouseMove",
e[e.MouseInteraction = 2] = "MouseInteraction",
e[e.Scroll = 3] = "Scroll",
e[e.ViewportResize = 4] = "ViewportResize",
e[e.Input = 5] = "Input",
e[e.TouchMove = 6] = "TouchMove",
e[e.MediaInteraction = 7] = "MediaInteraction",
e[e.StyleSheetRule = 8] = "StyleSheetRule",
e[e.CanvasMutation = 9] = "CanvasMutation",
e[e.Font = 10] = "Font",
e[e.Log = 11] = "Log",
e[e.Drag = 12] = "Drag",
e[e.StyleDeclaration = 13] = "StyleDeclaration",
e[e.Selection = 14] = "Selection",
e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
e[e.CustomElement = 16] = "CustomElement",
e))(X || {})
  , ft = (e => (e[e.MouseUp = 0] = "MouseUp",
e[e.MouseDown = 1] = "MouseDown",
e[e.Click = 2] = "Click",
e[e.ContextMenu = 3] = "ContextMenu",
e[e.DblClick = 4] = "DblClick",
e[e.Focus = 5] = "Focus",
e[e.Blur = 6] = "Blur",
e[e.TouchStart = 7] = "TouchStart",
e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
e[e.TouchEnd = 9] = "TouchEnd",
e[e.TouchCancel = 10] = "TouchCancel",
e))(ft || {})
  , wn = (e => (e[e.Mouse = 0] = "Mouse",
e[e.Pen = 1] = "Pen",
e[e.Touch = 2] = "Touch",
e))(wn || {});
function Y9(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
function M1(e) {
    return "__ln"in e
}
class J9 {
    constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }
    get(t) {
        if (t >= this.length)
            throw new Error("Position outside of list range");
        let n = this.head;
        for (let r = 0; r < t; r++)
            n = Y9([n, "optionalAccess", i => i.next]) || null;
        return n
    }
    addNode(t) {
        const n = {
            value: t,
            previous: null,
            next: null
        };
        if (t.__ln = n,
        t.previousSibling && M1(t.previousSibling)) {
            const r = t.previousSibling.__ln.next;
            n.next = r,
            n.previous = t.previousSibling.__ln,
            t.previousSibling.__ln.next = n,
            r && (r.previous = n)
        } else if (t.nextSibling && M1(t.nextSibling) && t.nextSibling.__ln.previous) {
            const r = t.nextSibling.__ln.previous;
            n.previous = r,
            n.next = t.nextSibling.__ln,
            t.nextSibling.__ln.previous = n,
            r && (r.next = n)
        } else
            this.head && (this.head.previous = n),
            n.next = this.head,
            this.head = n;
        n.next === null && (this.tail = n),
        this.length++
    }
    removeNode(t) {
        const n = t.__ln;
        this.head && (n.previous ? (n.previous.next = n.next,
        n.next ? n.next.previous = n.previous : this.tail = n.previous) : (this.head = n.next,
        this.head ? this.head.previous = null : this.tail = null),
        t.__ln && delete t.__ln,
        this.length--)
    }
}
const D1 = (e, t) => `${e}@${t}`;
class Q9 {
    constructor() {
        this.frozen = !1,
        this.locked = !1,
        this.texts = [],
        this.attributes = [],
        this.attributeMap = new WeakMap,
        this.removes = [],
        this.mapRemoves = [],
        this.movedMap = {},
        this.addedSet = new Set,
        this.movedSet = new Set,
        this.droppedSet = new Set,
        this.processMutations = t => {
            t.forEach(this.processMutation),
            this.emit()
        }
        ,
        this.emit = () => {
            if (this.frozen || this.locked)
                return;
            const t = []
              , n = new Set
              , r = new J9
              , i = l => {
                let u = l
                  , c = ms;
                for (; c === ms; )
                    u = u && u.nextSibling,
                    c = u && this.mirror.getId(u);
                return c
            }
              , o = l => {
                if (!l.parentNode || !oy(l))
                    return;
                const u = zo(l.parentNode) ? this.mirror.getId(iy(l)) : this.mirror.getId(l.parentNode)
                  , c = i(l);
                if (u === -1 || c === -1)
                    return r.addNode(l);
                const f = wi(l, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskAllText: this.maskAllText,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    unmaskTextClass: this.unmaskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskAttributeFn: this.maskAttributeFn,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: d => {
                        ny(d, this.mirror) && !At(d, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(d),
                        ry(d, this.mirror) && this.stylesheetManager.trackLinkElement(d),
                        If(l) && this.shadowDomManager.addShadowRoot(l.shadowRoot, this.doc)
                    }
                    ,
                    onIframeLoad: (d, m) => {
                        At(d, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(d, m),
                        d.contentWindow && this.canvasManager.addWindow(d.contentWindow),
                        this.shadowDomManager.observeAttachShadow(d))
                    }
                    ,
                    onStylesheetLoad: (d, m) => {
                        this.stylesheetManager.attachLinkElement(d, m)
                    }
                });
                f && (t.push({
                    parentId: u,
                    nextId: c,
                    node: f
                }),
                n.add(f.id))
            }
            ;
            for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const l of this.movedSet)
                F1(this.removes, l, this.mirror) && !this.movedSet.has(l.parentNode) || o(l);
            for (const l of this.addedSet)
                !$1(this.droppedSet, l) && !F1(this.removes, l, this.mirror) || $1(this.movedSet, l) ? o(l) : this.droppedSet.add(l);
            let s = null;
            for (; r.length; ) {
                let l = null;
                if (s) {
                    const u = this.mirror.getId(s.value.parentNode)
                      , c = i(s.value);
                    u !== -1 && c !== -1 && (l = s)
                }
                if (!l) {
                    let u = r.tail;
                    for (; u; ) {
                        const c = u;
                        if (u = u.previous,
                        c) {
                            const f = this.mirror.getId(c.value.parentNode);
                            if (i(c.value) === -1)
                                continue;
                            if (f !== -1) {
                                l = c;
                                break
                            } else {
                                const m = c.value;
                                if (m.parentNode && m.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const h = m.parentNode.host;
                                    if (this.mirror.getId(h) !== -1) {
                                        l = c;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!l) {
                    for (; r.head; )
                        r.removeNode(r.head.value);
                    break
                }
                s = l.previous,
                r.removeNode(l.value),
                o(l.value)
            }
            const a = {
                texts: this.texts.map(l => ({
                    id: this.mirror.getId(l.node),
                    value: l.value
                })).filter(l => !n.has(l.id)).filter(l => this.mirror.has(l.id)),
                attributes: this.attributes.map(l => {
                    const {attributes: u} = l;
                    if (typeof u.style == "string") {
                        const c = JSON.stringify(l.styleDiff)
                          , f = JSON.stringify(l._unchangedStyles);
                        c.length < u.style.length && (c + f).split("var(").length === u.style.split("var(").length && (u.style = l.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(l.node),
                        attributes: u
                    }
                }
                ).filter(l => !n.has(l.id)).filter(l => this.mirror.has(l.id)),
                removes: this.removes,
                adds: t
            };
            !a.texts.length && !a.attributes.length && !a.removes.length && !a.adds.length || (this.texts = [],
            this.attributes = [],
            this.attributeMap = new WeakMap,
            this.removes = [],
            this.addedSet = new Set,
            this.movedSet = new Set,
            this.droppedSet = new Set,
            this.movedMap = {},
            this.mutationCb(a))
        }
        ,
        this.processMutation = t => {
            if (!Zu(t.target, this.mirror))
                switch (t.type) {
                case "characterData":
                    {
                        const n = t.target.textContent;
                        !At(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && n !== t.oldValue && this.texts.push({
                            value: Ki(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && n ? this.maskTextFn ? this.maskTextFn(n, ey(t.target)) : n.replace(/[\S]/g, "*") : n,
                            node: t.target
                        });
                        break
                    }
                case "attributes":
                    {
                        const n = t.target;
                        let r = t.attributeName
                          , i = t.target.getAttribute(r);
                        if (r === "value") {
                            const s = Xd(n)
                              , a = n.tagName;
                            i = gl(n, a, s);
                            const l = Zl({
                                maskInputOptions: this.maskInputOptions,
                                tagName: a,
                                type: s
                            })
                              , u = Ki(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, l);
                            i = hs({
                                isMasked: u,
                                element: n,
                                value: i,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (At(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || i === t.oldValue)
                            return;
                        let o = this.attributeMap.get(t.target);
                        if (n.tagName === "IFRAME" && r === "src" && !this.keepIframeSrcFn(i))
                            if (!n.contentDocument)
                                r = "rr_src";
                            else
                                return;
                        if (o || (o = {
                            node: t.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        },
                        this.attributes.push(o),
                        this.attributeMap.set(t.target, o)),
                        r === "type" && n.tagName === "INPUT" && (t.oldValue || "").toLowerCase() === "password" && n.setAttribute("data-rr-is-password", "true"),
                        !Y2(n.tagName, r) && (o.attributes[r] = G2(this.doc, qi(n.tagName), qi(r), i, n, this.maskAttributeFn),
                        r === "style")) {
                            if (!this.unattachedDoc)
                                try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch {
                                    this.unattachedDoc = this.doc
                                }
                            const s = this.unattachedDoc.createElement("span");
                            t.oldValue && s.setAttribute("style", t.oldValue);
                            for (const a of Array.from(n.style)) {
                                const l = n.style.getPropertyValue(a)
                                  , u = n.style.getPropertyPriority(a);
                                l !== s.style.getPropertyValue(a) || u !== s.style.getPropertyPriority(a) ? u === "" ? o.styleDiff[a] = l : o.styleDiff[a] = [l, u] : o._unchangedStyles[a] = [l, u]
                            }
                            for (const a of Array.from(s.style))
                                n.style.getPropertyValue(a) === "" && (o.styleDiff[a] = !1)
                        }
                        break
                    }
                case "childList":
                    {
                        if (At(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                            return;
                        t.addedNodes.forEach(n => this.genAdds(n, t.target)),
                        t.removedNodes.forEach(n => {
                            const r = this.mirror.getId(n)
                              , i = zo(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            At(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Zu(n, this.mirror) || !W9(n, this.mirror) || (this.addedSet.has(n) ? (Lf(this.addedSet, n),
                            this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || ty(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[D1(r, i)] ? Lf(this.movedSet, n) : this.removes.push({
                                parentId: i,
                                id: r,
                                isShadow: zo(t.target) && Ho(t.target) ? !0 : void 0
                            })),
                            this.mapRemoves.push(n))
                        }
                        );
                        break
                    }
                }
        }
        ,
        this.genAdds = (t, n) => {
            if (!this.processedNodeManager.inOtherBuffer(t, this) && !(this.addedSet.has(t) || this.movedSet.has(t))) {
                if (this.mirror.hasNode(t)) {
                    if (Zu(t, this.mirror))
                        return;
                    this.movedSet.add(t);
                    let r = null;
                    n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                    r && r !== -1 && (this.movedMap[D1(this.mirror.getId(t), r)] = !0)
                } else
                    this.addedSet.add(t),
                    this.droppedSet.delete(t);
                At(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach(r => this.genAdds(r)),
                If(t) && t.shadowRoot.childNodes.forEach(r => {
                    this.processedNodeManager.add(r, this),
                    this.genAdds(r, t)
                }
                ))
            }
        }
    }
    init(t) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(n => {
            this[n] = t[n]
        }
        )
    }
    freeze() {
        this.frozen = !0,
        this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1,
        this.canvasManager.unfreeze(),
        this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0,
        this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1,
        this.canvasManager.unlock(),
        this.emit()
    }
    reset() {
        this.shadowDomManager.reset(),
        this.canvasManager.reset()
    }
}
function Lf(e, t) {
    e.delete(t),
    t.childNodes.forEach(n => Lf(e, n))
}
function F1(e, t, n) {
    return e.length === 0 ? !1 : sy(e, t, n)
}
function sy(e, t, n) {
    const {parentNode: r} = t;
    if (!r)
        return !1;
    const i = n.getId(r);
    return e.some(o => o.id === i) ? !0 : sy(e, r, n)
}
function $1(e, t) {
    return e.size === 0 ? !1 : ay(e, t)
}
function ay(e, t) {
    const {parentNode: n} = t;
    return n ? e.has(n) ? !0 : ay(e, n) : !1
}
let Vo;
function X9(e) {
    Vo = e
}
function Z9() {
    Vo = void 0
}
const fe = e => Vo ? (...n) => {
    try {
        return e(...n)
    } catch (r) {
        if (Vo && Vo(r) === !0)
            return () => {}
            ;
        throw r
    }
}
: e;
function tn(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
const Ci = [];
function Ps(e) {
    try {
        if ("composedPath"in e) {
            const t = e.composedPath();
            if (t.length)
                return t[0]
        } else if ("path"in e && e.path.length)
            return e.path[0]
    } catch {}
    return e && e.target
}
function ly(e, t) {
    const n = new Q9;
    Ci.push(n),
    n.init(e);
    let r = window.MutationObserver || window.__rrMutationObserver;
    const i = tn([window, "optionalAccess", s => s.Zone, "optionalAccess", s => s.__symbol__, "optionalCall", s => s("MutationObserver")]);
    i && window[i] && (r = window[i]);
    const o = new r(fe(s => {
        e.onMutation && e.onMutation(s) === !1 || n.processMutations.bind(n)(s)
    }
    ));
    return o.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }),
    o
}
function eE({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
    if (t.mousemove === !1)
        return () => {}
        ;
    const i = typeof t.mousemove == "number" ? t.mousemove : 50
      , o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
    let s = [], a;
    const l = gs(fe(f => {
        const d = Date.now() - a;
        e(s.map(m => (m.timeOffset -= d,
        m)), f),
        s = [],
        a = null
    }
    ), o)
      , u = fe(gs(fe(f => {
        const d = Ps(f)
          , {clientX: m, clientY: h} = Tf(f) ? f.changedTouches[0] : f;
        a || (a = vl()),
        s.push({
            x: m,
            y: h,
            id: r.getId(d),
            timeOffset: vl() - a
        }),
        l(typeof DragEvent < "u" && f instanceof DragEvent ? X.Drag : f instanceof MouseEvent ? X.MouseMove : X.TouchMove)
    }
    ), i, {
        trailing: !1
    }))
      , c = [pt("mousemove", u, n), pt("touchmove", u, n), pt("drag", u, n)];
    return fe( () => {
        c.forEach(f => f())
    }
    )
}
function tE({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, sampling: s}) {
    if (s.mouseInteraction === !1)
        return () => {}
        ;
    const a = s.mouseInteraction === !0 || s.mouseInteraction === void 0 ? {} : s.mouseInteraction
      , l = [];
    let u = null;
    const c = f => d => {
        const m = Ps(d);
        if (At(m, r, i, o, !0))
            return;
        let h = null
          , v = f;
        if ("pointerType"in d) {
            switch (d.pointerType) {
            case "mouse":
                h = wn.Mouse;
                break;
            case "touch":
                h = wn.Touch;
                break;
            case "pen":
                h = wn.Pen;
                break
            }
            h === wn.Touch ? ft[f] === ft.MouseDown ? v = "TouchStart" : ft[f] === ft.MouseUp && (v = "TouchEnd") : wn.Pen
        } else
            Tf(d) && (h = wn.Touch);
        h !== null ? (u = h,
        (v.startsWith("Touch") && h === wn.Touch || v.startsWith("Mouse") && h === wn.Mouse) && (h = null)) : ft[f] === ft.Click && (h = u,
        u = null);
        const k = Tf(d) ? d.changedTouches[0] : d;
        if (!k)
            return;
        const g = n.getId(m)
          , {clientX: p, clientY: y} = k;
        fe(e)({
            type: ft[v],
            id: g,
            x: p,
            y,
            ...h !== null && {
                pointerType: h
            }
        })
    }
    ;
    return Object.keys(ft).filter(f => Number.isNaN(Number(f)) && !f.endsWith("_Departed") && a[f] !== !1).forEach(f => {
        let d = qi(f);
        const m = c(f);
        if (window.PointerEvent)
            switch (ft[f]) {
            case ft.MouseDown:
            case ft.MouseUp:
                d = d.replace("mouse", "pointer");
                break;
            case ft.TouchStart:
            case ft.TouchEnd:
                return
            }
        l.push(pt(d, m, t))
    }
    ),
    fe( () => {
        l.forEach(f => f())
    }
    )
}
function uy({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, sampling: s}) {
    const a = fe(gs(fe(l => {
        const u = Ps(l);
        if (!u || At(u, r, i, o, !0))
            return;
        const c = n.getId(u);
        if (u === t && t.defaultView) {
            const f = Q2(t.defaultView);
            e({
                id: c,
                x: f.left,
                y: f.top
            })
        } else
            e({
                id: c,
                x: u.scrollLeft,
                y: u.scrollTop
            })
    }
    ), s.scroll || 100));
    return pt("scroll", a, t)
}
function nE({viewportResizeCb: e}, {win: t}) {
    let n = -1
      , r = -1;
    const i = fe(gs(fe( () => {
        const o = X2()
          , s = Z2();
        (n !== o || r !== s) && (e({
            width: Number(s),
            height: Number(o)
        }),
        n = o,
        r = s)
    }
    ), 200));
    return pt("resize", i, t)
}
const rE = ["INPUT", "TEXTAREA", "SELECT"]
  , B1 = new WeakMap;
function iE({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, ignoreClass: s, ignoreSelector: a, maskInputOptions: l, maskInputFn: u, sampling: c, userTriggeredOnInput: f, maskTextClass: d, unmaskTextClass: m, maskTextSelector: h, unmaskTextSelector: v}) {
    function k(w) {
        let I = Ps(w);
        const W = w.isTrusted
          , T = I && xf(I.tagName);
        if (T === "OPTION" && (I = I.parentElement),
        !I || !T || rE.indexOf(T) < 0 || At(I, r, i, o, !0))
            return;
        const D = I;
        if (D.classList.contains(s) || a && D.matches(a))
            return;
        const z = Xd(I);
        let ee = gl(D, T, z)
          , ne = !1;
        const me = Zl({
            maskInputOptions: l,
            tagName: T,
            type: z
        })
          , H = Ki(I, d, h, m, v, me);
        (z === "radio" || z === "checkbox") && (ne = I.checked),
        ee = hs({
            isMasked: H,
            element: I,
            value: ee,
            maskInputFn: u
        }),
        g(I, f ? {
            text: ee,
            isChecked: ne,
            userTriggered: W
        } : {
            text: ee,
            isChecked: ne
        });
        const _e = I.name;
        z === "radio" && _e && ne && t.querySelectorAll(`input[type="radio"][name="${_e}"]`).forEach(L => {
            if (L !== I) {
                const $ = hs({
                    isMasked: H,
                    element: L,
                    value: gl(L, T, z),
                    maskInputFn: u
                });
                g(L, f ? {
                    text: $,
                    isChecked: !ne,
                    userTriggered: !1
                } : {
                    text: $,
                    isChecked: !ne
                })
            }
        }
        )
    }
    function g(w, I) {
        const W = B1.get(w);
        if (!W || W.text !== I.text || W.isChecked !== I.isChecked) {
            B1.set(w, I);
            const T = n.getId(w);
            fe(e)({
                ...I,
                id: T
            })
        }
    }
    const y = (c.input === "last" ? ["change"] : ["input", "change"]).map(w => pt(w, fe(k), t))
      , E = t.defaultView;
    if (!E)
        return () => {
            y.forEach(w => w())
        }
        ;
    const x = E.Object.getOwnPropertyDescriptor(E.HTMLInputElement.prototype, "value")
      , b = [[E.HTMLInputElement.prototype, "value"], [E.HTMLInputElement.prototype, "checked"], [E.HTMLSelectElement.prototype, "value"], [E.HTMLTextAreaElement.prototype, "value"], [E.HTMLSelectElement.prototype, "selectedIndex"], [E.HTMLOptionElement.prototype, "selected"]];
    return x && x.set && y.push(...b.map(w => J2(w[0], w[1], {
        set() {
            fe(k)({
                target: this,
                isTrusted: !1
            })
        }
    }, !1, E))),
    fe( () => {
        y.forEach(w => w())
    }
    )
}
function _l(e) {
    const t = [];
    function n(r, i) {
        if (da("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule || da("CSSMediaRule") && r.parentRule instanceof CSSMediaRule || da("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule || da("CSSConditionRule") && r.parentRule instanceof CSSConditionRule) {
            const s = Array.from(r.parentRule.cssRules).indexOf(r);
            i.unshift(s)
        } else if (r.parentStyleSheet) {
            const s = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
            i.unshift(s)
        }
        return i
    }
    return n(e, t)
}
function qn(e, t, n) {
    let r, i;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e),
    {
        styleId: i,
        id: r
    }) : {}
}
function oE({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
    if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
        return () => {}
        ;
    const i = r.CSSStyleSheet.prototype.insertRule;
    r.CSSStyleSheet.prototype.insertRule = new Proxy(i,{
        apply: fe( (c, f, d) => {
            const [m,h] = d
              , {id: v, styleId: k} = qn(f, t, n.styleMirror);
            return (v && v !== -1 || k && k !== -1) && e({
                id: v,
                styleId: k,
                adds: [{
                    rule: m,
                    index: h
                }]
            }),
            c.apply(f, d)
        }
        )
    });
    const o = r.CSSStyleSheet.prototype.deleteRule;
    r.CSSStyleSheet.prototype.deleteRule = new Proxy(o,{
        apply: fe( (c, f, d) => {
            const [m] = d
              , {id: h, styleId: v} = qn(f, t, n.styleMirror);
            return (h && h !== -1 || v && v !== -1) && e({
                id: h,
                styleId: v,
                removes: [{
                    index: m
                }]
            }),
            c.apply(f, d)
        }
        )
    });
    let s;
    r.CSSStyleSheet.prototype.replace && (s = r.CSSStyleSheet.prototype.replace,
    r.CSSStyleSheet.prototype.replace = new Proxy(s,{
        apply: fe( (c, f, d) => {
            const [m] = d
              , {id: h, styleId: v} = qn(f, t, n.styleMirror);
            return (h && h !== -1 || v && v !== -1) && e({
                id: h,
                styleId: v,
                replace: m
            }),
            c.apply(f, d)
        }
        )
    }));
    let a;
    r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync,
    r.CSSStyleSheet.prototype.replaceSync = new Proxy(a,{
        apply: fe( (c, f, d) => {
            const [m] = d
              , {id: h, styleId: v} = qn(f, t, n.styleMirror);
            return (h && h !== -1 || v && v !== -1) && e({
                id: h,
                styleId: v,
                replaceSync: m
            }),
            c.apply(f, d)
        }
        )
    }));
    const l = {};
    pa("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (pa("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
    pa("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule),
    pa("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
    const u = {};
    return Object.entries(l).forEach( ([c,f]) => {
        u[c] = {
            insertRule: f.prototype.insertRule,
            deleteRule: f.prototype.deleteRule
        },
        f.prototype.insertRule = new Proxy(u[c].insertRule,{
            apply: fe( (d, m, h) => {
                const [v,k] = h
                  , {id: g, styleId: p} = qn(m.parentStyleSheet, t, n.styleMirror);
                return (g && g !== -1 || p && p !== -1) && e({
                    id: g,
                    styleId: p,
                    adds: [{
                        rule: v,
                        index: [..._l(m), k || 0]
                    }]
                }),
                d.apply(m, h)
            }
            )
        }),
        f.prototype.deleteRule = new Proxy(u[c].deleteRule,{
            apply: fe( (d, m, h) => {
                const [v] = h
                  , {id: k, styleId: g} = qn(m.parentStyleSheet, t, n.styleMirror);
                return (k && k !== -1 || g && g !== -1) && e({
                    id: k,
                    styleId: g,
                    removes: [{
                        index: [..._l(m), v]
                    }]
                }),
                d.apply(m, h)
            }
            )
        })
    }
    ),
    fe( () => {
        r.CSSStyleSheet.prototype.insertRule = i,
        r.CSSStyleSheet.prototype.deleteRule = o,
        s && (r.CSSStyleSheet.prototype.replace = s),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(l).forEach( ([c,f]) => {
            f.prototype.insertRule = u[c].insertRule,
            f.prototype.deleteRule = u[c].deleteRule
        }
        )
    }
    )
}
function cy({mirror: e, stylesheetManager: t}, n) {
    let r = null;
    n.nodeName === "#document" ? r = e.getId(n) : r = e.getId(n.host);
    const i = n.nodeName === "#document" ? tn([n, "access", s => s.defaultView, "optionalAccess", s => s.Document]) : tn([n, "access", s => s.ownerDocument, "optionalAccess", s => s.defaultView, "optionalAccess", s => s.ShadowRoot])
      , o = tn([i, "optionalAccess", s => s.prototype]) ? Object.getOwnPropertyDescriptor(tn([i, "optionalAccess", s => s.prototype]), "adoptedStyleSheets") : void 0;
    return r === null || r === -1 || !i || !o ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: o.configurable,
        enumerable: o.enumerable,
        get() {
            return tn([o, "access", s => s.get, "optionalAccess", s => s.call, "call", s => s(this)])
        },
        set(s) {
            const a = tn([o, "access", l => l.set, "optionalAccess", l => l.call, "call", l => l(this, s)]);
            if (r !== null && r !== -1)
                try {
                    t.adoptStyleSheets(s, r)
                } catch {}
            return a
        }
    }),
    fe( () => {
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get: o.get,
            set: o.set
        })
    }
    ))
}
function sE({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: i}) {
    const o = i.CSSStyleDeclaration.prototype.setProperty;
    i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
        apply: fe( (a, l, u) => {
            const [c,f,d] = u;
            if (n.has(c))
                return o.apply(l, [c, f, d]);
            const {id: m, styleId: h} = qn(tn([l, "access", v => v.parentRule, "optionalAccess", v => v.parentStyleSheet]), t, r.styleMirror);
            return (m && m !== -1 || h && h !== -1) && e({
                id: m,
                styleId: h,
                set: {
                    property: c,
                    value: f,
                    priority: d
                },
                index: _l(l.parentRule)
            }),
            a.apply(l, u)
        }
        )
    });
    const s = i.CSSStyleDeclaration.prototype.removeProperty;
    return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s,{
        apply: fe( (a, l, u) => {
            const [c] = u;
            if (n.has(c))
                return s.apply(l, [c]);
            const {id: f, styleId: d} = qn(tn([l, "access", m => m.parentRule, "optionalAccess", m => m.parentStyleSheet]), t, r.styleMirror);
            return (f && f !== -1 || d && d !== -1) && e({
                id: f,
                styleId: d,
                remove: {
                    property: c
                },
                index: _l(l.parentRule)
            }),
            a.apply(l, u)
        }
        )
    }),
    fe( () => {
        i.CSSStyleDeclaration.prototype.setProperty = o,
        i.CSSStyleDeclaration.prototype.removeProperty = s
    }
    )
}
function aE({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: i, sampling: o, doc: s}) {
    const a = fe(u => gs(fe(c => {
        const f = Ps(c);
        if (!f || At(f, t, n, r, !0))
            return;
        const {currentTime: d, volume: m, muted: h, playbackRate: v} = f;
        e({
            type: u,
            id: i.getId(f),
            currentTime: d,
            volume: m,
            muted: h,
            playbackRate: v
        })
    }
    ), o.media || 500))
      , l = [pt("play", a(0), s), pt("pause", a(1), s), pt("seeked", a(2), s), pt("volumechange", a(3), s), pt("ratechange", a(4), s)];
    return fe( () => {
        l.forEach(u => u())
    }
    )
}
function lE({fontCb: e, doc: t}) {
    const n = t.defaultView;
    if (!n)
        return () => {}
        ;
    const r = []
      , i = new WeakMap
      , o = n.FontFace;
    n.FontFace = function(l, u, c) {
        const f = new o(l,u,c);
        return i.set(f, {
            family: l,
            buffer: typeof u != "string",
            descriptors: c,
            fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
        }),
        f
    }
    ;
    const s = tp(t.fonts, "add", function(a) {
        return function(l) {
            return eu(fe( () => {
                const u = i.get(l);
                u && (e(u),
                i.delete(l))
            }
            ), 0),
            a.apply(this, [l])
        }
    });
    return r.push( () => {
        n.FontFace = o
    }
    ),
    r.push(s),
    fe( () => {
        r.forEach(a => a())
    }
    )
}
function uE(e) {
    const {doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, selectionCb: s} = e;
    let a = !0;
    const l = fe( () => {
        const u = t.getSelection();
        if (!u || a && tn([u, "optionalAccess", d => d.isCollapsed]))
            return;
        a = u.isCollapsed || !1;
        const c = []
          , f = u.rangeCount || 0;
        for (let d = 0; d < f; d++) {
            const m = u.getRangeAt(d)
              , {startContainer: h, startOffset: v, endContainer: k, endOffset: g} = m;
            At(h, r, i, o, !0) || At(k, r, i, o, !0) || c.push({
                start: n.getId(h),
                startOffset: v,
                end: n.getId(k),
                endOffset: g
            })
        }
        s({
            ranges: c
        })
    }
    );
    return l(),
    pt("selectionchange", l)
}
function cE({doc: e, customElementCb: t}) {
    const n = e.defaultView;
    return !n || !n.customElements ? () => {}
    : tp(n.customElements, "define", function(i) {
        return function(o, s, a) {
            try {
                t({
                    define: {
                        name: o
                    }
                })
            } catch {}
            return i.apply(this, [o, s, a])
        }
    })
}
function fE(e, t={}) {
    const n = e.doc.defaultView;
    if (!n)
        return () => {}
        ;
    let r;
    e.recordDOM && (r = ly(e, e.doc));
    const i = eE(e)
      , o = tE(e)
      , s = uy(e)
      , a = nE(e, {
        win: n
    })
      , l = iE(e)
      , u = aE(e);
    let c = () => {}
      , f = () => {}
      , d = () => {}
      , m = () => {}
    ;
    e.recordDOM && (c = oE(e, {
        win: n
    }),
    f = cy(e, e.doc),
    d = sE(e, {
        win: n
    }),
    e.collectFonts && (m = lE(e)));
    const h = uE(e)
      , v = cE(e)
      , k = [];
    for (const g of e.plugins)
        k.push(g.observer(g.callback, n, g.options));
    return fe( () => {
        Ci.forEach(g => g.reset()),
        tn([r, "optionalAccess", g => g.disconnect, "call", g => g()]),
        i(),
        o(),
        s(),
        a(),
        l(),
        u(),
        c(),
        f(),
        d(),
        m(),
        h(),
        v(),
        k.forEach(g => g())
    }
    )
}
function da(e) {
    return typeof window[e] < "u"
}
function pa(e) {
    return !!(typeof window[e] < "u" && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
}
class Rf {
    constructor(t) {
        this.generateIdFn = t,
        this.iframeIdToRemoteIdMap = new WeakMap,
        this.iframeRemoteIdToIdMap = new WeakMap
    }
    getId(t, n, r, i) {
        const o = r || this.getIdToRemoteIdMap(t)
          , s = i || this.getRemoteIdToIdMap(t);
        let a = o.get(n);
        return a || (a = this.generateIdFn(),
        o.set(n, a),
        s.set(a, n)),
        a
    }
    getIds(t, n) {
        const r = this.getIdToRemoteIdMap(t)
          , i = this.getRemoteIdToIdMap(t);
        return n.map(o => this.getId(t, o, r, i))
    }
    getRemoteId(t, n, r) {
        const i = r || this.getRemoteIdToIdMap(t);
        if (typeof n != "number")
            return n;
        const o = i.get(n);
        return o || -1
    }
    getRemoteIds(t, n) {
        const r = this.getRemoteIdToIdMap(t);
        return n.map(i => this.getRemoteId(t, i, r))
    }
    reset(t) {
        if (!t) {
            this.iframeIdToRemoteIdMap = new WeakMap,
            this.iframeRemoteIdToIdMap = new WeakMap;
            return
        }
        this.iframeIdToRemoteIdMap.delete(t),
        this.iframeRemoteIdToIdMap.delete(t)
    }
    getIdToRemoteIdMap(t) {
        let n = this.iframeIdToRemoteIdMap.get(t);
        return n || (n = new Map,
        this.iframeIdToRemoteIdMap.set(t, n)),
        n
    }
    getRemoteIdToIdMap(t) {
        let n = this.iframeRemoteIdToIdMap.get(t);
        return n || (n = new Map,
        this.iframeRemoteIdToIdMap.set(t, n)),
        n
    }
}
function j1(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const i = e[r]
          , o = e[r + 1];
        if (r += 2,
        (i === "optionalAccess" || i === "optionalCall") && n == null)
            return;
        i === "access" || i === "optionalAccess" ? (t = n,
        n = o(n)) : (i === "call" || i === "optionalCall") && (n = o( (...s) => n.call(t, ...s)),
        t = void 0)
    }
    return n
}
class dE {
    constructor() {
        this.crossOriginIframeMirror = new Rf(Zd),
        this.crossOriginIframeRootIdMap = new WeakMap
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class pE {
    constructor(t) {
        this.iframes = new WeakMap,
        this.crossOriginIframeMap = new WeakMap,
        this.crossOriginIframeMirror = new Rf(Zd),
        this.crossOriginIframeRootIdMap = new WeakMap,
        this.mutationCb = t.mutationCb,
        this.wrappedEmit = t.wrappedEmit,
        this.stylesheetManager = t.stylesheetManager,
        this.recordCrossOriginIframes = t.recordCrossOriginIframes,
        this.crossOriginIframeStyleMirror = new Rf(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
        this.mirror = t.mirror,
        this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
    addIframe(t) {
        this.iframes.set(t, !0),
        t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
    }
    addLoadListener(t) {
        this.loadListener = t
    }
    attachIframe(t, n) {
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(t),
                nextId: null,
                node: n
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
        j1([this, "access", r => r.loadListener, "optionalCall", r => r(t)]),
        t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
    }
    handleMessage(t) {
        const n = t;
        if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
            return;
        const i = this.crossOriginIframeMap.get(t.source);
        if (!i)
            return;
        const o = this.transformCrossOriginEvent(i, n.data.event);
        o && this.wrappedEmit(o, n.data.isCheckout)
    }
    transformCrossOriginEvent(t, n) {
        switch (n.type) {
        case te.FullSnapshot:
            {
                this.crossOriginIframeMirror.reset(t),
                this.crossOriginIframeStyleMirror.reset(t),
                this.replaceIdOnNode(n.data.node, t);
                const r = n.data.node.id;
                return this.crossOriginIframeRootIdMap.set(t, r),
                this.patchRootIdOnNode(n.data.node, r),
                {
                    timestamp: n.timestamp,
                    type: te.IncrementalSnapshot,
                    data: {
                        source: X.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(t),
                            nextId: null,
                            node: n.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                }
            }
        case te.Meta:
        case te.Load:
        case te.DomContentLoaded:
            return !1;
        case te.Plugin:
            return n;
        case te.Custom:
            return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]),
            n;
        case te.IncrementalSnapshot:
            switch (n.data.source) {
            case X.Mutation:
                return n.data.adds.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "nextId", "previousId"]),
                    this.replaceIdOnNode(r.node, t);
                    const i = this.crossOriginIframeRootIdMap.get(t);
                    i && this.patchRootIdOnNode(r.node, i)
                }
                ),
                n.data.removes.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "id"])
                }
                ),
                n.data.attributes.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n.data.texts.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case X.Drag:
            case X.TouchMove:
            case X.MouseMove:
                return n.data.positions.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case X.ViewportResize:
                return !1;
            case X.MediaInteraction:
            case X.MouseInteraction:
            case X.Scroll:
            case X.CanvasMutation:
            case X.Input:
                return this.replaceIds(n.data, t, ["id"]),
                n;
            case X.StyleSheetRule:
            case X.StyleDeclaration:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleId"]),
                n;
            case X.Font:
                return n;
            case X.Selection:
                return n.data.ranges.forEach(r => {
                    this.replaceIds(r, t, ["start", "end"])
                }
                ),
                n;
            case X.AdoptedStyleSheet:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleIds"]),
                j1([n, "access", r => r.data, "access", r => r.styles, "optionalAccess", r => r.forEach, "call", r => r(i => {
                    this.replaceStyleIds(i, t, ["styleId"])
                }
                )]),
                n
            }
        }
        return !1
    }
    replace(t, n, r, i) {
        for (const o of i)
            !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = t.getIds(r, n[o]) : n[o] = t.getId(r, n[o]));
        return n
    }
    replaceIds(t, n, r) {
        return this.replace(this.crossOriginIframeMirror, t, n, r)
    }
    replaceStyleIds(t, n, r) {
        return this.replace(this.crossOriginIframeStyleMirror, t, n, r)
    }
    replaceIdOnNode(t, n) {
        this.replaceIds(t, n, ["id", "rootId"]),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.replaceIdOnNode(r, n)
        }
        )
    }
    patchRootIdOnNode(t, n) {
        t.type !== He.Document && !t.rootId && (t.rootId = n),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.patchRootIdOnNode(r, n)
        }
        )
    }
}
class hE {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class mE {
    constructor(t) {
        this.shadowDoms = new WeakSet,
        this.restoreHandlers = [],
        this.mutationCb = t.mutationCb,
        this.scrollCb = t.scrollCb,
        this.bypassOptions = t.bypassOptions,
        this.mirror = t.mirror,
        this.init()
    }
    init() {
        this.reset(),
        this.patchAttachShadow(Element, document)
    }
    addShadowRoot(t, n) {
        if (!Ho(t) || this.shadowDoms.has(t))
            return;
        this.shadowDoms.add(t),
        this.bypassOptions.canvasManager.addShadowRoot(t);
        const r = ly({
            ...this.bypassOptions,
            doc: n,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, t);
        this.restoreHandlers.push( () => r.disconnect()),
        this.restoreHandlers.push(uy({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror
        })),
        eu( () => {
            t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
            this.restoreHandlers.push(cy({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, t))
        }
        , 0)
    }
    observeAttachShadow(t) {
        !t.contentWindow || !t.contentDocument || this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
    }
    patchAttachShadow(t, n) {
        const r = this;
        this.restoreHandlers.push(tp(t.prototype, "attachShadow", function(i) {
            return function(o) {
                const s = i.call(this, o);
                return this.shadowRoot && oy(this) && r.addShadowRoot(this.shadowRoot, n),
                s
            }
        }))
    }
    reset() {
        this.restoreHandlers.forEach(t => {
            try {
                t()
            } catch {}
        }
        ),
        this.restoreHandlers = [],
        this.shadowDoms = new WeakSet,
        this.bypassOptions.canvasManager.resetShadowRoots()
    }
}
class U1 {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class gE {
    constructor(t) {
        this.trackedLinkElements = new WeakSet,
        this.styleMirror = new H9,
        this.mutationCb = t.mutationCb,
        this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
    }
    attachLinkElement(t, n) {
        "_cssText"in n.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: n.id,
                attributes: n.attributes
            }]
        }),
        this.trackLinkElement(t)
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t),
        this.trackStylesheetInLinkElement(t))
    }
    adoptStyleSheets(t, n) {
        if (t.length === 0)
            return;
        const r = {
            id: n,
            styleIds: []
        }
          , i = [];
        for (const o of t) {
            let s;
            this.styleMirror.has(o) ? s = this.styleMirror.getId(o) : (s = this.styleMirror.add(o),
            i.push({
                styleId: s,
                rules: Array.from(o.rules || CSSRule, (a, l) => ({
                    rule: z2(a),
                    index: l
                }))
            })),
            r.styleIds.push(s)
        }
        i.length > 0 && (r.styles = i),
        this.adoptedStyleSheetCb(r)
    }
    reset() {
        this.styleMirror.reset(),
        this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(t) {}
}
class yE {
    constructor() {
        this.nodeMap = new WeakMap,
        this.loop = !0,
        this.periodicallyClear()
    }
    periodicallyClear() {
        K9( () => {
            this.clear(),
            this.loop && this.periodicallyClear()
        }
        )
    }
    inOtherBuffer(t, n) {
        const r = this.nodeMap.get(t);
        return r && Array.from(r).some(i => i !== n)
    }
    add(t, n) {
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(n))
    }
    clear() {
        this.nodeMap = new WeakMap
    }
    destroy() {
        this.loop = !1
    }
}
let Ne, Sl;
try {
    if (Array.from([1], e => e * 2)[0] !== 2) {
        const e = document.createElement("iframe");
        document.body.appendChild(e),
        Array.from = wt([e, "access", t => t.contentWindow, "optionalAccess", t => t.Array, "access", t => t.from]) || Array.from,
        document.body.removeChild(e)
    }
} catch (e) {
    console.debug("Unable to override Array.from", e)
}
const Qt = v9();
function An(e={}) {
    const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: i="rr-block", blockSelector: o=null, unblockSelector: s=null, ignoreClass: a="rr-ignore", ignoreSelector: l=null, maskAllText: u=!1, maskTextClass: c="rr-mask", unmaskTextClass: f=null, maskTextSelector: d=null, unmaskTextSelector: m=null, inlineStylesheet: h=!0, maskAllInputs: v, maskInputOptions: k, slimDOMOptions: g, maskAttributeFn: p, maskInputFn: y, maskTextFn: E, maxCanvasSize: x=null, packFn: b, sampling: w={}, dataURLOptions: I={}, mousemoveWait: W, recordDOM: T=!0, recordCanvas: D=!1, recordCrossOriginIframes: z=!1, recordAfter: ee=e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: ne=!1, collectFonts: me=!1, inlineImages: H=!1, plugins: _e, keepIframeSrcFn: L= () => !1, ignoreCSSAttributes: $=new Set([]), errorHandler: j, onMutation: de, getCanvasManager: Oe} = e;
    X9(j);
    const an = z ? window.parent === window : !0;
    let ct = !1;
    if (!an)
        try {
            window.parent.document && (ct = !1)
        } catch {
            ct = !0
        }
    if (an && !t)
        throw new Error("emit function is required");
    W !== void 0 && w.mousemove === void 0 && (w.mousemove = W),
    Qt.reset();
    const Yt = v === !0 ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        radio: !0,
        checkbox: !0
    } : k !== void 0 ? k : {}
      , _t = g === !0 || g === "all" ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: g === "all",
        headMetaDescKeywords: g === "all"
    } : g || {};
    z9();
    let It, ei = 0;
    const Ds = ce => {
        for (const Lt of _e || [])
            Lt.eventProcessor && (ce = Lt.eventProcessor(ce));
        return b && !ct && (ce = b(ce)),
        ce
    }
    ;
    Ne = (ce, Lt) => {
        const se = ce;
        if (se.timestamp = vl(),
        wt([Ci, "access", Ce => Ce[0], "optionalAccess", Ce => Ce.isFrozen, "call", Ce => Ce()]) && se.type !== te.FullSnapshot && !(se.type === te.IncrementalSnapshot && se.data.source === X.Mutation) && Ci.forEach(Ce => Ce.unfreeze()),
        an)
            wt([t, "optionalCall", Ce => Ce(Ds(se), Lt)]);
        else if (ct) {
            const Ce = {
                type: "rrweb",
                event: Ds(se),
                origin: window.location.origin,
                isCheckout: Lt
            };
            window.parent.postMessage(Ce, "*")
        }
        if (se.type === te.FullSnapshot)
            It = se,
            ei = 0;
        else if (se.type === te.IncrementalSnapshot) {
            if (se.data.source === X.Mutation && se.data.isAttachIframe)
                return;
            ei++;
            const Ce = r && ei >= r
              , re = n && It && se.timestamp - It.timestamp > n;
            (Ce || re) && co(!0)
        }
    }
    ;
    const Cr = ce => {
        Ne({
            type: te.IncrementalSnapshot,
            data: {
                source: X.Mutation,
                ...ce
            }
        })
    }
      , ti = ce => Ne({
        type: te.IncrementalSnapshot,
        data: {
            source: X.Scroll,
            ...ce
        }
    })
      , kr = ce => Ne({
        type: te.IncrementalSnapshot,
        data: {
            source: X.CanvasMutation,
            ...ce
        }
    })
      , gu = ce => Ne({
        type: te.IncrementalSnapshot,
        data: {
            source: X.AdoptedStyleSheet,
            ...ce
        }
    })
      , Sn = new gE({
        mutationCb: Cr,
        adoptedStyleSheetCb: gu
    })
      , oe = typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new dE : new pE({
        mirror: Qt,
        mutationCb: Cr,
        stylesheetManager: Sn,
        recordCrossOriginIframes: z,
        wrappedEmit: Ne
    });
    for (const ce of _e || [])
        ce.getMirror && ce.getMirror({
            nodeMirror: Qt,
            crossOriginIframeMirror: oe.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: oe.crossOriginIframeStyleMirror
        });
    const lo = new yE
      , uo = _E(Oe, {
        mirror: Qt,
        win: window,
        mutationCb: ce => Ne({
            type: te.IncrementalSnapshot,
            data: {
                source: X.CanvasMutation,
                ...ce
            }
        }),
        recordCanvas: D,
        blockClass: i,
        blockSelector: o,
        unblockSelector: s,
        maxCanvasSize: x,
        sampling: w.canvas,
        dataURLOptions: I,
        errorHandler: j
    })
      , it = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new hE : new mE({
        mutationCb: Cr,
        scrollCb: ti,
        bypassOptions: {
            onMutation: de,
            blockClass: i,
            blockSelector: o,
            unblockSelector: s,
            maskAllText: u,
            maskTextClass: c,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: m,
            inlineStylesheet: h,
            maskInputOptions: Yt,
            dataURLOptions: I,
            maskAttributeFn: p,
            maskTextFn: E,
            maskInputFn: y,
            recordCanvas: D,
            inlineImages: H,
            sampling: w,
            slimDOMOptions: _t,
            iframeManager: oe,
            stylesheetManager: Sn,
            canvasManager: uo,
            keepIframeSrcFn: L,
            processedNodeManager: lo
        },
        mirror: Qt
    })
      , co = (ce=!1) => {
        if (!T)
            return;
        Ne({
            type: te.Meta,
            data: {
                href: window.location.href,
                width: Z2(),
                height: X2()
            }
        }, ce),
        Sn.reset(),
        it.init(),
        Ci.forEach(se => se.lock());
        const Lt = U9(document, {
            mirror: Qt,
            blockClass: i,
            blockSelector: o,
            unblockSelector: s,
            maskAllText: u,
            maskTextClass: c,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: m,
            inlineStylesheet: h,
            maskAllInputs: Yt,
            maskAttributeFn: p,
            maskInputFn: y,
            maskTextFn: E,
            slimDOM: _t,
            dataURLOptions: I,
            recordCanvas: D,
            inlineImages: H,
            onSerialize: se => {
                ny(se, Qt) && oe.addIframe(se),
                ry(se, Qt) && Sn.trackLinkElement(se),
                If(se) && it.addShadowRoot(se.shadowRoot, document)
            }
            ,
            onIframeLoad: (se, Ce) => {
                oe.attachIframe(se, Ce),
                se.contentWindow && uo.addWindow(se.contentWindow),
                it.observeAttachShadow(se)
            }
            ,
            onStylesheetLoad: (se, Ce) => {
                Sn.attachLinkElement(se, Ce)
            }
            ,
            keepIframeSrcFn: L
        });
        if (!Lt)
            return console.warn("Failed to snapshot the document");
        Ne({
            type: te.FullSnapshot,
            data: {
                node: Lt,
                initialOffset: Q2(window)
            }
        }),
        Ci.forEach(se => se.unlock()),
        document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Sn.adoptStyleSheets(document.adoptedStyleSheets, Qt.getId(document))
    }
    ;
    Sl = co;
    try {
        const ce = []
          , Lt = Ce => fe(fE)({
            onMutation: de,
            mutationCb: Cr,
            mousemoveCb: (re, En) => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: En,
                    positions: re
                }
            }),
            mouseInteractionCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.MouseInteraction,
                    ...re
                }
            }),
            scrollCb: ti,
            viewportResizeCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.ViewportResize,
                    ...re
                }
            }),
            inputCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.Input,
                    ...re
                }
            }),
            mediaInteractionCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.MediaInteraction,
                    ...re
                }
            }),
            styleSheetRuleCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.StyleSheetRule,
                    ...re
                }
            }),
            styleDeclarationCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.StyleDeclaration,
                    ...re
                }
            }),
            canvasMutationCb: kr,
            fontCb: re => Ne({
                type: te.IncrementalSnapshot,
                data: {
                    source: X.Font,
                    ...re
                }
            }),
            selectionCb: re => {
                Ne({
                    type: te.IncrementalSnapshot,
                    data: {
                        source: X.Selection,
                        ...re
                    }
                })
            }
            ,
            customElementCb: re => {
                Ne({
                    type: te.IncrementalSnapshot,
                    data: {
                        source: X.CustomElement,
                        ...re
                    }
                })
            }
            ,
            blockClass: i,
            ignoreClass: a,
            ignoreSelector: l,
            maskAllText: u,
            maskTextClass: c,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: m,
            maskInputOptions: Yt,
            inlineStylesheet: h,
            sampling: w,
            recordDOM: T,
            recordCanvas: D,
            inlineImages: H,
            userTriggeredOnInput: ne,
            collectFonts: me,
            doc: Ce,
            maskAttributeFn: p,
            maskInputFn: y,
            maskTextFn: E,
            keepIframeSrcFn: L,
            blockSelector: o,
            unblockSelector: s,
            slimDOMOptions: _t,
            dataURLOptions: I,
            mirror: Qt,
            iframeManager: oe,
            stylesheetManager: Sn,
            shadowDomManager: it,
            processedNodeManager: lo,
            canvasManager: uo,
            ignoreCSSAttributes: $,
            plugins: wt([_e, "optionalAccess", re => re.filter, "call", re => re(En => En.observer), "optionalAccess", re => re.map, "call", re => re(En => ({
                observer: En.observer,
                options: En.options,
                callback: xr => Ne({
                    type: te.Plugin,
                    data: {
                        plugin: En.name,
                        payload: xr
                    }
                })
            }))]) || []
        }, {});
        oe.addLoadListener(Ce => {
            try {
                ce.push(Lt(Ce.contentDocument))
            } catch (re) {
                console.warn(re)
            }
        }
        );
        const se = () => {
            co(),
            ce.push(Lt(document))
        }
        ;
        return document.readyState === "interactive" || document.readyState === "complete" ? se() : (ce.push(pt("DOMContentLoaded", () => {
            Ne({
                type: te.DomContentLoaded,
                data: {}
            }),
            ee === "DOMContentLoaded" && se()
        }
        )),
        ce.push(pt("load", () => {
            Ne({
                type: te.Load,
                data: {}
            }),
            ee === "load" && se()
        }
        , window))),
        () => {
            ce.forEach(Ce => Ce()),
            lo.destroy(),
            Sl = void 0,
            Z9()
        }
    } catch (ce) {
        console.warn(ce)
    }
}
function vE(e) {
    if (!Sl)
        throw new Error("please take full snapshot after start recording");
    Sl(e)
}
An.mirror = Qt;
An.takeFullSnapshot = vE;
function _E(e, t) {
    try {
        return e ? e(t) : new U1
    } catch {
        return console.warn("Unable to initialize CanvasManager"),
        new U1
    }
}
const V = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , W1 = ["info", "warn", "error", "log"]
  , Pa = "[Replay] ";
function ec(e, t="info") {
    mr({
        category: "console",
        data: {
            logger: "replay"
        },
        level: t,
        message: `${Pa}${e}`
    }, {
        level: t
    })
}
function SE() {
    let e = !1
      , t = !1;
    const n = {
        exception: () => {}
        ,
        infoTick: () => {}
        ,
        setConfig: r => {
            e = r.captureExceptions,
            t = r.traceInternals
        }
    };
    return V ? (W1.forEach(r => {
        n[r] = (...i) => {
            P[r](Pa, ...i),
            t && ec(i[0])
        }
    }
    ),
    n.exception = (r, ...i) => {
        n.error && n.error(...i),
        P.error(Pa, r),
        e ? Wd(r) : t && ec(r)
    }
    ,
    n.infoTick = (...r) => {
        P.info(Pa, ...r),
        t && setTimeout( () => ec(r[0]), 0)
    }
    ) : W1.forEach(r => {
        n[r] = () => {}
    }
    ),
    n
}
const q = SE()
  , EE = 3
  , wE = 5;
function rp(e) {
    return e > 9999999999 ? e : e * 1e3
}
function tc(e) {
    return e > 9999999999 ? e / 1e3 : e
}
function Os(e, t) {
    t.category !== "sentry.transaction" && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
    e.addUpdate( () => (e.throttledAddEvent({
        type: te.Custom,
        timestamp: (t.timestamp || 0) * 1e3,
        data: {
            tag: "breadcrumb",
            payload: dn(t, 10, 1e3)
        }
    }),
    t.category === "console")))
}
const CE = "button,a";
function fy(e) {
    return e.closest(CE) || e
}
function dy(e) {
    const t = py(e);
    return !t || !(t instanceof Element) ? t : fy(t)
}
function py(e) {
    return kE(e) ? e.target : e
}
function kE(e) {
    return typeof e == "object" && !!e && "target"in e
}
let Kn;
function xE(e) {
    return Kn || (Kn = [],
    bE()),
    Kn.push(e),
    () => {
        const t = Kn ? Kn.indexOf(e) : -1;
        t > -1 && Kn.splice(t, 1)
    }
}
function bE() {
    kt(Ee, "open", function(e) {
        return function(...t) {
            if (Kn)
                try {
                    Kn.forEach(n => n())
                } catch {}
            return e.apply(Ee, t)
        }
    })
}
const TE = new Set([X.Mutation, X.StyleSheetRule, X.StyleDeclaration, X.AdoptedStyleSheet, X.CanvasMutation, X.Selection, X.MediaInteraction]);
function IE(e, t, n) {
    e.handleClick(t, n)
}
class LE {
    constructor(t, n, r=Os) {
        this._lastMutation = 0,
        this._lastScroll = 0,
        this._clicks = [],
        this._timeout = n.timeout / 1e3,
        this._threshold = n.threshold / 1e3,
        this._scollTimeout = n.scrollTimeout / 1e3,
        this._replay = t,
        this._ignoreSelector = n.ignoreSelector,
        this._addBreadcrumbEvent = r
    }
    addListeners() {
        const t = xE( () => {
            this._lastMutation = z1()
        }
        );
        this._teardown = () => {
            t(),
            this._clicks = [],
            this._lastMutation = 0,
            this._lastScroll = 0
        }
    }
    removeListeners() {
        this._teardown && this._teardown(),
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(t, n) {
        if (AE(n, this._ignoreSelector) || !PE(t))
            return;
        const r = {
            timestamp: tc(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: n
        };
        this._clicks.some(i => i.node === r.node && Math.abs(i.timestamp - r.timestamp) < 1) || (this._clicks.push(r),
        this._clicks.length === 1 && this._scheduleCheckClicks())
    }
    registerMutation(t=Date.now()) {
        this._lastMutation = tc(t)
    }
    registerScroll(t=Date.now()) {
        this._lastScroll = tc(t)
    }
    registerClick(t) {
        const n = fy(t);
        this._handleMultiClick(n)
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach(n => {
            n.clickCount++
        }
        )
    }
    _getClicks(t) {
        return this._clicks.filter(n => n.node === t)
    }
    _checkClicks() {
        const t = []
          , n = z1();
        this._clicks.forEach(r => {
            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0),
            !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0),
            r.timestamp + this._timeout <= n && t.push(r)
        }
        );
        for (const r of t) {
            const i = this._clicks.indexOf(r);
            i > -1 && (this._generateBreadcrumbs(r),
            this._clicks.splice(i, 1))
        }
        this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(t) {
        const n = this._replay
          , r = t.scrollAfter && t.scrollAfter <= this._scollTimeout
          , i = t.mutationAfter && t.mutationAfter <= this._threshold
          , o = !r && !i
          , {clickCount: s, clickBreadcrumb: a} = t;
        if (o) {
            const l = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3
              , u = l < this._timeout * 1e3 ? "mutation" : "timeout"
              , c = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.slowClickDetected",
                data: {
                    ...a.data,
                    url: Ee.location.href,
                    route: n.getCurrentRoute(),
                    timeAfterClickMs: l,
                    endReason: u,
                    clickCount: s || 1
                }
            };
            this._addBreadcrumbEvent(n, c);
            return
        }
        if (s > 1) {
            const l = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.multiClick",
                data: {
                    ...a.data,
                    url: Ee.location.href,
                    route: n.getCurrentRoute(),
                    clickCount: s,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(n, l)
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        this._checkClickTimeout = Vi( () => this._checkClicks(), 1e3)
    }
}
const RE = ["A", "BUTTON", "INPUT"];
function AE(e, t) {
    return !!(!RE.includes(e.tagName) || e.tagName === "INPUT" && !["submit", "button"].includes(e.getAttribute("type") || "") || e.tagName === "A" && (e.hasAttribute("download") || e.hasAttribute("target") && e.getAttribute("target") !== "_self") || t && e.matches(t))
}
function PE(e) {
    return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp)
}
function z1() {
    return Date.now() / 1e3
}
function OE(e, t) {
    try {
        if (!NE(t))
            return;
        const {source: n} = t.data;
        if (TE.has(n) && e.registerMutation(t.timestamp),
        n === X.Scroll && e.registerScroll(t.timestamp),
        ME(t)) {
            const {type: r, id: i} = t.data
              , o = An.mirror.getNode(i);
            o instanceof HTMLElement && r === ft.Click && e.registerClick(o)
        }
    } catch {}
}
function NE(e) {
    return e.type === EE
}
function ME(e) {
    return e.data.source === X.MouseInteraction
}
function yn(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    }
}
var El;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(El || (El = {}));
const DE = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
function FE(e) {
    const t = {};
    !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
    for (const n in e)
        if (DE.has(n)) {
            let r = n;
            (n === "data-testid" || n === "data-test-id") && (r = "testId"),
            t[r] = e[n]
        }
    return t
}
const $E = e => t => {
    if (!e.isEnabled())
        return;
    const n = BE(t);
    if (!n)
        return;
    const r = t.name === "click"
      , i = r ? t.event : void 0;
    r && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && IE(e.clickDetector, n, dy(t.event)),
    Os(e, n)
}
;
function hy(e, t) {
    const n = An.mirror.getId(e)
      , r = n && An.mirror.getNode(n)
      , i = r && An.mirror.getMeta(r)
      , o = i && UE(i) ? i : null;
    return {
        message: t,
        data: o ? {
            nodeId: n,
            node: {
                id: n,
                tagName: o.tagName,
                textContent: Array.from(o.childNodes).map(s => s.type === El.Text && s.textContent).filter(Boolean).map(s => s.trim()).join(""),
                attributes: FE(o.attributes)
            }
        } : {}
    }
}
function BE(e) {
    const {target: t, message: n} = jE(e);
    return yn({
        category: `ui.${e.name}`,
        ...hy(t, n)
    })
}
function jE(e) {
    const t = e.name === "click";
    let n, r = null;
    try {
        r = t ? dy(e.event) : py(e.event),
        n = Fn(r, {
            maxStringLength: 200
        }) || "<unknown>"
    } catch {
        n = "<unknown>"
    }
    return {
        target: r,
        message: n
    }
}
function UE(e) {
    return e.type === El.Element
}
function WE(e, t) {
    if (!e.isEnabled())
        return;
    e.updateUserActivity();
    const n = zE(t);
    n && Os(e, n)
}
function zE(e) {
    const {metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: o, target: s} = e;
    if (!s || HE(s) || !o)
        return null;
    const a = t || r || i
      , l = o.length === 1;
    if (!a && l)
        return null;
    const u = Fn(s, {
        maxStringLength: 200
    }) || "<unknown>"
      , c = hy(s, u);
    return yn({
        category: "ui.keyDown",
        message: u,
        data: {
            ...c.data,
            metaKey: t,
            shiftKey: n,
            ctrlKey: r,
            altKey: i,
            key: o
        }
    })
}
function HE(e) {
    return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
}
const VE = {
    resource: JE,
    paint: GE,
    navigation: YE
};
function ha(e, t) {
    return ({metric: n}) => void t.replayPerformanceEntries.push(e(n))
}
function qE(e) {
    return e.map(KE).filter(Boolean)
}
function KE(e) {
    const t = VE[e.entryType];
    return t ? t(e) : null
}
function Gi(e) {
    return ((gt || Ee.performance.timeOrigin) + e) / 1e3
}
function GE(e) {
    const {duration: t, entryType: n, name: r, startTime: i} = e
      , o = Gi(i);
    return {
        type: n,
        name: r,
        start: o,
        end: o + t,
        data: void 0
    }
}
function YE(e) {
    const {entryType: t, name: n, decodedBodySize: r, duration: i, domComplete: o, encodedBodySize: s, domContentLoadedEventStart: a, domContentLoadedEventEnd: l, domInteractive: u, loadEventStart: c, loadEventEnd: f, redirectCount: d, startTime: m, transferSize: h, type: v} = e;
    return i === 0 ? null : {
        type: `${t}.${v}`,
        start: Gi(m),
        end: Gi(o),
        name: n,
        data: {
            size: h,
            decodedBodySize: r,
            encodedBodySize: s,
            duration: i,
            domInteractive: u,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: l,
            loadEventStart: c,
            loadEventEnd: f,
            domComplete: o,
            redirectCount: d
        }
    }
}
function JE(e) {
    const {entryType: t, initiatorType: n, name: r, responseEnd: i, startTime: o, decodedBodySize: s, encodedBodySize: a, responseStatus: l, transferSize: u} = e;
    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
        type: `${t}.${n}`,
        start: Gi(o),
        end: Gi(i),
        name: r,
        data: {
            size: u,
            statusCode: l,
            decodedBodySize: s,
            encodedBodySize: a
        }
    }
}
function QE(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.element ? [t.element] : void 0;
    return tu(e, "largest-contentful-paint", n)
}
function XE(e) {
    return e.sources !== void 0
}
function ZE(e) {
    const t = []
      , n = [];
    for (const r of e.entries)
        if (XE(r)) {
            const i = [];
            for (const o of r.sources)
                if (o.node) {
                    n.push(o.node);
                    const s = An.mirror.getId(o.node);
                    s && i.push(s)
                }
            t.push({
                value: r.value,
                nodeIds: i.length ? i : void 0
            })
        }
    return tu(e, "cumulative-layout-shift", n, t)
}
function ew(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return tu(e, "first-input-delay", n)
}
function tw(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return tu(e, "interaction-to-next-paint", n)
}
function tu(e, t, n, r) {
    const i = e.value
      , o = e.rating
      , s = Gi(i);
    return {
        type: "web-vital",
        name: t,
        start: s,
        end: s,
        data: {
            value: i,
            size: i,
            rating: o,
            nodeIds: n ? n.map(a => An.mirror.getId(a)) : void 0,
            attributions: r
        }
    }
}
function nw(e) {
    function t(i) {
        e.performanceEntries.includes(i) || e.performanceEntries.push(i)
    }
    function n({entries: i}) {
        i.forEach(t)
    }
    const r = [];
    return ["navigation", "paint", "resource"].forEach(i => {
        r.push(zi(i, n))
    }
    ),
    r.push(P2(ha(QE, e)), Kd(ha(ZE, e)), O2(ha(ew, e)), N2(ha(tw, e))),
    () => {
        r.forEach(i => i())
    }
}
const rw = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function iw() {
    const e = new Blob([rw]);
    return URL.createObjectURL(e)
}
class ip extends Error {
    constructor() {
        super(`Event buffer exceeded maximum size of ${Qd}.`)
    }
}
class my {
    constructor() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return this.events.length > 0
    }
    get type() {
        return "sync"
    }
    destroy() {
        this.events = []
    }
    async addEvent(t) {
        const n = JSON.stringify(t).length;
        if (this._totalSize += n,
        this._totalSize > Qd)
            throw new ip;
        this.events.push(t)
    }
    finish() {
        return new Promise(t => {
            const n = this.events;
            this.clear(),
            t(JSON.stringify(n))
        }
        )
    }
    clear() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    getEarliestTimestamp() {
        const t = this.events.map(n => n.timestamp).sort()[0];
        return t ? rp(t) : null
    }
}
class ow {
    constructor(t) {
        this._worker = t,
        this._id = 0
    }
    ensureReady() {
        return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise( (t, n) => {
            this._worker.addEventListener("message", ({data: r}) => {
                r.success ? t() : n()
            }
            , {
                once: !0
            }),
            this._worker.addEventListener("error", r => {
                n(r)
            }
            , {
                once: !0
            })
        }
        ),
        this._ensureReadyPromise)
    }
    destroy() {
        V && q.info("Destroying compression worker"),
        this._worker.terminate()
    }
    postMessage(t, n) {
        const r = this._getAndIncrementId();
        return new Promise( (i, o) => {
            const s = ({data: a}) => {
                const l = a;
                if (l.method === t && l.id === r) {
                    if (this._worker.removeEventListener("message", s),
                    !l.success) {
                        V && q.error("Error in compression worker: ", l.response),
                        o(new Error("Error in compression worker"));
                        return
                    }
                    i(l.response)
                }
            }
            ;
            this._worker.addEventListener("message", s),
            this._worker.postMessage({
                id: r,
                method: t,
                arg: n
            })
        }
        )
    }
    _getAndIncrementId() {
        return this._id++
    }
}
class sw {
    constructor(t) {
        this._worker = new ow(t),
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return !!this._earliestTimestamp
    }
    get type() {
        return "worker"
    }
    ensureReady() {
        return this._worker.ensureReady()
    }
    destroy() {
        this._worker.destroy()
    }
    addEvent(t) {
        const n = rp(t.timestamp);
        (!this._earliestTimestamp || n < this._earliestTimestamp) && (this._earliestTimestamp = n);
        const r = JSON.stringify(t);
        return this._totalSize += r.length,
        this._totalSize > Qd ? Promise.reject(new ip) : this._sendEventToWorker(r)
    }
    finish() {
        return this._finishRequest()
    }
    clear() {
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1,
        this._worker.postMessage("clear").then(null, t => {
            V && q.exception(t, 'Sending "clear" message to worker failed', t)
        }
        )
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage("addEvent", t)
    }
    async _finishRequest() {
        const t = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null,
        this._totalSize = 0,
        t
    }
}
class aw {
    constructor(t) {
        this._fallback = new my,
        this._compression = new sw(t),
        this._used = this._fallback,
        this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
    get type() {
        return this._used.type
    }
    get hasEvents() {
        return this._used.hasEvents
    }
    get hasCheckout() {
        return this._used.hasCheckout
    }
    set hasCheckout(t) {
        this._used.hasCheckout = t
    }
    destroy() {
        this._fallback.destroy(),
        this._compression.destroy()
    }
    clear() {
        return this._used.clear()
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp()
    }
    addEvent(t) {
        return this._used.addEvent(t)
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(),
        this._used.finish()
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady()
        } catch (t) {
            V && q.exception(t, "Failed to load the compression worker, falling back to simple buffer");
            return
        }
        await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
        const {events: t, hasCheckout: n} = this._fallback
          , r = [];
        for (const i of t)
            r.push(this._compression.addEvent(i));
        this._compression.hasCheckout = n,
        this._used = this._compression;
        try {
            await Promise.all(r)
        } catch (i) {
            V && q.exception(i, "Failed to add events when switching buffers.")
        }
    }
}
function lw({useCompression: e, workerUrl: t}) {
    if (e && window.Worker) {
        const n = uw(t);
        if (n)
            return n
    }
    return V && q.info("Using simple buffer"),
    new my
}
function uw(e) {
    try {
        const t = e || cw();
        if (!t)
            return;
        V && q.info(`Using compression worker${e ? ` from ${e}` : ""}`);
        const n = new Worker(t);
        return new aw(n)
    } catch (t) {
        V && q.exception(t, "Failed to create compression worker")
    }
}
function cw() {
    return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" || !__SENTRY_EXCLUDE_REPLAY_WORKER__ ? iw() : ""
}
function op() {
    try {
        return "sessionStorage"in Ee && !!Ee.sessionStorage
    } catch {
        return !1
    }
}
function fw(e) {
    dw(),
    e.session = void 0
}
function dw() {
    if (op())
        try {
            Ee.sessionStorage.removeItem(Yd)
        } catch {}
}
function gy(e) {
    return e === void 0 ? !1 : Math.random() < e
}
function yy(e) {
    const t = Date.now()
      , n = e.id || Le()
      , r = e.started || t
      , i = e.lastActivity || t
      , o = e.segmentId || 0
      , s = e.sampled
      , a = e.previousSessionId;
    return {
        id: n,
        started: r,
        lastActivity: i,
        segmentId: o,
        sampled: s,
        previousSessionId: a
    }
}
function sp(e) {
    if (op())
        try {
            Ee.sessionStorage.setItem(Yd, JSON.stringify(e))
        } catch {}
}
function pw(e, t) {
    return gy(e) ? "session" : t ? "buffer" : !1
}
function H1({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: r}={}) {
    const i = pw(e, t)
      , o = yy({
        sampled: i,
        previousSessionId: r
    });
    return n && sp(o),
    o
}
function hw() {
    if (!op())
        return null;
    try {
        const e = Ee.sessionStorage.getItem(Yd);
        if (!e)
            return null;
        const t = JSON.parse(e);
        return V && q.infoTick("Loading existing session"),
        yy(t)
    } catch {
        return null
    }
}
function Af(e, t, n=+new Date) {
    return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n
}
function vy(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r=Date.now()}) {
    return Af(e.started, t, r) || Af(e.lastActivity, n, r)
}
function _y(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
    return !(!vy(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) || e.sampled === "buffer" && e.segmentId === 0)
}
function nc({sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n}, r) {
    const i = r.stickySession && hw();
    return i ? _y(i, {
        sessionIdleExpire: e,
        maxReplayDuration: t
    }) ? (V && q.infoTick("Session in sessionStorage is expired, creating new one..."),
    H1(r, {
        previousSessionId: i.id
    })) : i : (V && q.infoTick("Creating new session"),
    H1(r, {
        previousSessionId: n
    }))
}
function mw(e) {
    return e.type === te.Custom
}
function ap(e, t, n) {
    return Ey(e, t) ? (Sy(e, t, n),
    !0) : !1
}
function gw(e, t, n) {
    return Ey(e, t) ? Sy(e, t, n) : Promise.resolve(null)
}
async function Sy(e, t, n) {
    if (!e.eventBuffer)
        return null;
    try {
        n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
        n && (e.eventBuffer.hasCheckout = !0);
        const r = e.getOptions()
          , i = yw(t, r.beforeAddRecordingEvent);
        return i ? await e.eventBuffer.addEvent(i) : void 0
    } catch (r) {
        const i = r && r instanceof ip ? "addEventSizeExceeded" : "addEvent";
        e.handleException(r),
        await e.stop({
            reason: i
        });
        const o = le();
        o && o.recordDroppedEvent("internal_sdk_error", "replay")
    }
}
function Ey(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
        return !1;
    const n = rp(t.timestamp);
    return n + e.timeouts.sessionIdlePause < Date.now() ? !1 : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration ? (V && q.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`),
    !1) : !0
}
function yw(e, t) {
    try {
        if (typeof t == "function" && mw(e))
            return t(e)
    } catch (n) {
        return V && q.exception(n, "An error occured in the `beforeAddRecordingEvent` callback, skipping the event..."),
        null
    }
    return e
}
function lp(e) {
    return !e.type
}
function Pf(e) {
    return e.type === "transaction"
}
function vw(e) {
    return e.type === "replay_event"
}
function V1(e) {
    return e.type === "feedback"
}
function _w(e) {
    return (t, n) => {
        if (!e.isEnabled() || !lp(t) && !Pf(t))
            return;
        const r = n && n.statusCode;
        if (!(!r || r < 200 || r >= 300)) {
            if (Pf(t)) {
                Sw(e, t);
                return
            }
            Ew(e, t)
        }
    }
}
function Sw(e, t) {
    const n = e.getContext();
    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
}
function Ew(e, t) {
    const n = e.getContext();
    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
        return;
    const {beforeErrorSampling: r} = e.getOptions();
    typeof r == "function" && !r(t) || Vi( () => {
        e.sendBufferedReplayOrFlush()
    }
    )
}
function ww(e) {
    return t => {
        !e.isEnabled() || !lp(t) || Cw(e, t)
    }
}
function Cw(e, t) {
    const n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
    if (typeof n == "string" && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
        const r = yn({
            category: "replay.hydrate-error",
            data: {
                url: R0()
            }
        });
        Os(e, r)
    }
}
function kw(e) {
    const t = le();
    t && t.on("beforeAddBreadcrumb", n => xw(e, n))
}
function xw(e, t) {
    if (!e.isEnabled() || !wy(t))
        return;
    const n = bw(t);
    n && Os(e, n)
}
function bw(e) {
    return !wy(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : e.category === "console" ? Tw(e) : yn(e)
}
function Tw(e) {
    const t = e.data && e.data.arguments;
    if (!Array.isArray(t) || t.length === 0)
        return yn(e);
    let n = !1;
    const r = t.map(i => {
        if (!i)
            return i;
        if (typeof i == "string")
            return i.length > fa ? (n = !0,
            `${i.slice(0, fa)}…`) : i;
        if (typeof i == "object")
            try {
                const o = dn(i, 7);
                return JSON.stringify(o).length > fa ? (n = !0,
                `${JSON.stringify(o, null, 2).slice(0, fa)}…`) : o
            } catch {}
        return i
    }
    );
    return yn({
        ...e,
        data: {
            ...e.data,
            arguments: r,
            ...n ? {
                _meta: {
                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                }
            } : {}
        }
    })
}
function wy(e) {
    return !!e.category
}
function Iw(e, t) {
    return e.type || !e.exception || !e.exception.values || !e.exception.values.length ? !1 : !!(t.originalException && t.originalException.__rrweb__)
}
function Lw(e, t) {
    e.triggerUserActivity(),
    e.addUpdate( () => t.timestamp ? (e.throttledAddEvent({
        type: te.Custom,
        timestamp: t.timestamp * 1e3,
        data: {
            tag: "breadcrumb",
            payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: {
                    feedbackId: t.event_id
                }
            }
        }
    }),
    !1) : !0)
}
function Rw(e, t) {
    return e.recordingMode !== "buffer" || t.message === Jd || !t.exception || t.type ? !1 : gy(e.getOptions().errorSampleRate)
}
function Aw(e) {
    return Object.assign( (t, n) => e.isEnabled() ? vw(t) ? (delete t.breadcrumbs,
    t) : !lp(t) && !Pf(t) && !V1(t) || !e.checkAndHandleExpiredSession() ? t : V1(t) ? (e.flush(),
    t.contexts.feedback.replay_id = e.getSessionId(),
    Lw(e, t),
    t) : Iw(t, n) && !e.getOptions()._experiments.captureExceptions ? (V && q.log("Ignoring error from rrweb internals", t),
    null) : ((Rw(e, t) || e.recordingMode === "session") && (t.tags = {
        ...t.tags,
        replayId: e.getSessionId()
    }),
    t) : t, {
        id: "Replay"
    })
}
function nu(e, t) {
    return t.map( ({type: n, start: r, end: i, name: o, data: s}) => {
        const a = e.throttledAddEvent({
            type: te.Custom,
            timestamp: r,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: n,
                    description: o,
                    startTimestamp: r,
                    endTimestamp: i,
                    data: s
                }
            }
        });
        return typeof a == "string" ? Promise.resolve(null) : a
    }
    )
}
function Pw(e) {
    const {from: t, to: n} = e
      , r = Date.now() / 1e3;
    return {
        type: "navigation.push",
        start: r,
        end: r,
        name: n,
        data: {
            previous: t
        }
    }
}
function Ow(e) {
    return t => {
        if (!e.isEnabled())
            return;
        const n = Pw(t);
        n !== null && (e.getContext().urls.push(n.name),
        e.triggerUserActivity(),
        e.addUpdate( () => (nu(e, [n]),
        !1)))
    }
}
function Nw(e, t) {
    return V && e.getOptions()._experiments.traceInternals ? !1 : a8(t, le())
}
function Cy(e, t) {
    e.isEnabled() && t !== null && (Nw(e, t.name) || e.addUpdate( () => (nu(e, [t]),
    !0)))
}
function ru(e) {
    if (!e)
        return;
    const t = new TextEncoder;
    try {
        if (typeof e == "string")
            return t.encode(e).length;
        if (e instanceof URLSearchParams)
            return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            const n = Ty(e);
            return t.encode(n).length
        }
        if (e instanceof Blob)
            return e.size;
        if (e instanceof ArrayBuffer)
            return e.byteLength
    } catch {}
}
function ky(e) {
    if (!e)
        return;
    const t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t
}
function xy(e) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof URLSearchParams)
            return [e.toString()];
        if (e instanceof FormData)
            return [Ty(e)];
        if (!e)
            return [void 0]
    } catch (t) {
        return V && q.exception(t, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return V && q.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
function wl(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
    const n = {
        ...e._meta
    }
      , r = n.warnings || [];
    return n.warnings = [...r, t],
    e._meta = n,
    e
}
function by(e, t) {
    if (!t)
        return null;
    const {startTimestamp: n, endTimestamp: r, url: i, method: o, statusCode: s, request: a, response: l} = t;
    return {
        type: e,
        start: n / 1e3,
        end: r / 1e3,
        name: i,
        data: qe({
            method: o,
            statusCode: s,
            request: a,
            response: l
        })
    }
}
function ys(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: ["URL_SKIPPED"]
        }
    }
}
function ur(e, t, n) {
    if (!t && Object.keys(e).length === 0)
        return;
    if (!t)
        return {
            headers: e
        };
    if (!n)
        return {
            headers: e,
            size: t
        };
    const r = {
        headers: e,
        size: t
    }
      , {body: i, warnings: o} = Mw(n);
    return r.body = i,
    o && o.length > 0 && (r._meta = {
        warnings: o
    }),
    r
}
function Of(e, t) {
    return Object.entries(e).reduce( (n, [r,i]) => {
        const o = r.toLowerCase();
        return t.includes(o) && e[r] && (n[o] = i),
        n
    }
    , {})
}
function Ty(e) {
    return new URLSearchParams(e).toString()
}
function Mw(e) {
    if (!e || typeof e != "string")
        return {
            body: e
        };
    const t = e.length > I1
      , n = Dw(e);
    if (t) {
        const r = e.slice(0, I1);
        return n ? {
            body: r,
            warnings: ["MAYBE_JSON_TRUNCATED"]
        } : {
            body: `${r}…`,
            warnings: ["TEXT_TRUNCATED"]
        }
    }
    if (n)
        try {
            return {
                body: JSON.parse(e)
            }
        } catch {}
    return {
        body: e
    }
}
function Dw(e) {
    const t = e[0]
      , n = e[e.length - 1];
    return t === "[" && n === "]" || t === "{" && n === "}"
}
function Cl(e, t) {
    const n = Fw(e);
    return lr(n, t)
}
function Fw(e, t=Ee.document.baseURI) {
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Ee.location.origin))
        return e;
    const n = new URL(e,t);
    if (n.origin !== new URL(t).origin)
        return e;
    const r = n.href;
    return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
}
async function $w(e, t, n) {
    try {
        const r = await jw(e, t, n)
          , i = by("resource.fetch", r);
        Cy(n.replay, i)
    } catch (r) {
        V && q.exception(r, "Failed to capture fetch breadcrumb")
    }
}
function Bw(e, t) {
    const {input: n, response: r} = t
      , i = n ? Iy(n) : void 0
      , o = ru(i)
      , s = r ? ky(r.headers.get("content-length")) : void 0;
    o !== void 0 && (e.data.request_body_size = o),
    s !== void 0 && (e.data.response_body_size = s)
}
async function jw(e, t, n) {
    const r = Date.now()
      , {startTimestamp: i=r, endTimestamp: o=r} = t
      , {url: s, method: a, status_code: l=0, request_body_size: u, response_body_size: c} = e.data
      , f = Cl(s, n.networkDetailAllowUrls) && !Cl(s, n.networkDetailDenyUrls)
      , d = f ? Uw(n, t.input, u) : ys(u)
      , m = await Ww(f, n, t.response, c);
    return {
        startTimestamp: i,
        endTimestamp: o,
        url: s,
        method: a,
        statusCode: l,
        request: d,
        response: m
    }
}
function Uw({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
    const i = n ? Vw(n, t) : {};
    if (!e)
        return ur(i, r, void 0);
    const o = Iy(n)
      , [s,a] = xy(o)
      , l = ur(i, r, s);
    return a ? wl(l, a) : l
}
async function Ww(e, {networkCaptureBodies: t, networkResponseHeaders: n}, r, i) {
    if (!e && i !== void 0)
        return ys(i);
    const o = r ? Ly(r.headers, n) : {};
    if (!r || !t && i !== void 0)
        return ur(o, i, void 0);
    const [s,a] = await Hw(r)
      , l = zw(s, {
        networkCaptureBodies: t,
        responseBodySize: i,
        captureDetails: e,
        headers: o
    });
    return a ? wl(l, a) : l
}
function zw(e, {networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: i}) {
    try {
        const o = e && e.length && n === void 0 ? ru(e) : n;
        return r ? t ? ur(i, o, e) : ur(i, o, void 0) : ys(o)
    } catch (o) {
        return V && q.exception(o, "Failed to serialize response body"),
        ur(i, n, void 0)
    }
}
async function Hw(e) {
    const t = qw(e);
    if (!t)
        return [void 0, "BODY_PARSE_ERROR"];
    try {
        return [await Kw(t)]
    } catch (n) {
        return V && q.exception(n, "Failed to get text body from response"),
        [void 0, "BODY_PARSE_ERROR"]
    }
}
function Iy(e=[]) {
    if (!(e.length !== 2 || typeof e[1] != "object"))
        return e[1].body
}
function Ly(e, t) {
    const n = {};
    return t.forEach(r => {
        e.get(r) && (n[r] = e.get(r))
    }
    ),
    n
}
function Vw(e, t) {
    return e.length === 1 && typeof e[0] != "string" ? q1(e[0], t) : e.length === 2 ? q1(e[1], t) : {}
}
function q1(e, t) {
    if (!e)
        return {};
    const n = e.headers;
    return n ? n instanceof Headers ? Ly(n, t) : Array.isArray(n) ? {} : Of(n, t) : {}
}
function qw(e) {
    try {
        return e.clone()
    } catch (t) {
        V && q.exception(t, "Failed to clone response body")
    }
}
function Kw(e) {
    return new Promise( (t, n) => {
        const r = Vi( () => n(new Error("Timeout while trying to read response body")), 500);
        Gw(e).then(i => t(i), i => n(i)).finally( () => clearTimeout(r))
    }
    )
}
async function Gw(e) {
    return await e.text()
}
async function Yw(e, t, n) {
    try {
        const r = Qw(e, t, n)
          , i = by("resource.xhr", r);
        Cy(n.replay, i)
    } catch (r) {
        V && q.exception(r, "Failed to capture xhr breadcrumb")
    }
}
function Jw(e, t) {
    const {xhr: n, input: r} = t;
    if (!n)
        return;
    const i = ru(r)
      , o = n.getResponseHeader("content-length") ? ky(n.getResponseHeader("content-length")) : tC(n.response, n.responseType);
    i !== void 0 && (e.data.request_body_size = i),
    o !== void 0 && (e.data.response_body_size = o)
}
function Qw(e, t, n) {
    const r = Date.now()
      , {startTimestamp: i=r, endTimestamp: o=r, input: s, xhr: a} = t
      , {url: l, method: u, status_code: c=0, request_body_size: f, response_body_size: d} = e.data;
    if (!l)
        return null;
    if (!a || !Cl(l, n.networkDetailAllowUrls) || Cl(l, n.networkDetailDenyUrls)) {
        const b = ys(f)
          , w = ys(d);
        return {
            startTimestamp: i,
            endTimestamp: o,
            url: l,
            method: u,
            statusCode: c,
            request: b,
            response: w
        }
    }
    const m = a[Or]
      , h = m ? Of(m.request_headers, n.networkRequestHeaders) : {}
      , v = Of(Xw(a), n.networkResponseHeaders)
      , [k,g] = n.networkCaptureBodies ? xy(s) : [void 0]
      , [p,y] = n.networkCaptureBodies ? Zw(a) : [void 0]
      , E = ur(h, f, k)
      , x = ur(v, d, p);
    return {
        startTimestamp: i,
        endTimestamp: o,
        url: l,
        method: u,
        statusCode: c,
        request: g ? wl(E, g) : E,
        response: y ? wl(x, y) : x
    }
}
function Xw(e) {
    const t = e.getAllResponseHeaders();
    return t ? t.split(`\r
`).reduce( (n, r) => {
        const [i,o] = r.split(": ");
        return o && (n[i.toLowerCase()] = o),
        n
    }
    , {}) : {}
}
function Zw(e) {
    const t = [];
    try {
        return [e.responseText]
    } catch (n) {
        t.push(n)
    }
    try {
        return eC(e.response, e.responseType)
    } catch (n) {
        t.push(n)
    }
    return V && q.warn("Failed to get xhr response body", ...t),
    [void 0]
}
function eC(e, t) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof Document)
            return [e.body.outerHTML];
        if (t === "json" && e && typeof e == "object")
            return [JSON.stringify(e)];
        if (!e)
            return [void 0]
    } catch (n) {
        return V && q.exception(n, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return V && q.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
function tC(e, t) {
    try {
        const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
        return ru(n)
    } catch {
        return
    }
}
function nC(e) {
    const t = le();
    try {
        const {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: i, networkRequestHeaders: o, networkResponseHeaders: s} = e.getOptions()
          , a = {
            replay: e,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: i,
            networkRequestHeaders: o,
            networkResponseHeaders: s
        };
        t && t.on("beforeAddBreadcrumb", (l, u) => rC(a, l, u))
    } catch {}
}
function rC(e, t, n) {
    if (t.data)
        try {
            iC(t) && sC(n) && (Jw(t, n),
            Yw(t, n, e)),
            oC(t) && aC(n) && (Bw(t, n),
            $w(t, n, e))
        } catch (r) {
            V && q.exception(r, "Error when enriching network breadcrumb")
        }
}
function iC(e) {
    return e.category === "xhr"
}
function oC(e) {
    return e.category === "fetch"
}
function sC(e) {
    return e && e.xhr
}
function aC(e) {
    return e && e.response
}
function lC(e) {
    const t = le();
    $2($E(e)),
    Xl(Ow(e)),
    kw(e),
    nC(e);
    const n = Aw(e);
    V_(n),
    t && (t.on("beforeSendEvent", ww(e)),
    t.on("afterSendEvent", _w(e)),
    t.on("createDsc", r => {
        const i = e.getSessionId();
        i && e.isEnabled() && e.recordingMode === "session" && e.checkAndHandleExpiredSession() && (r.replay_id = i)
    }
    ),
    t.on("spanStart", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("spanEnd", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("beforeSendFeedback", (r, i) => {
        const o = e.getSessionId();
        i && i.includeReplay && e.isEnabled() && o && r.contexts && r.contexts.feedback && (r.contexts.feedback.replay_id = o)
    }
    ))
}
async function uC(e) {
    try {
        return Promise.all(nu(e, [cC(Ee.performance.memory)]))
    } catch {
        return []
    }
}
function cC(e) {
    const {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e
      , i = Date.now() / 1e3;
    return {
        type: "memory",
        name: "memory",
        start: i,
        end: i,
        data: {
            memory: {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: r
            }
        }
    }
}
function fC(e, t, n) {
    let r, i, o;
    const s = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
    function a() {
        return l(),
        r = e(),
        r
    }
    function l() {
        i !== void 0 && clearTimeout(i),
        o !== void 0 && clearTimeout(o),
        i = o = void 0
    }
    function u() {
        return i !== void 0 || o !== void 0 ? a() : r
    }
    function c() {
        return i && clearTimeout(i),
        i = Vi(a, t),
        s && o === void 0 && (o = Vi(a, s)),
        r
    }
    return c.cancel = l,
    c.flush = u,
    c
}
function dC(e) {
    let t = !1;
    return (n, r) => {
        if (!e.checkAndHandleExpiredSession()) {
            V && q.warn("Received replay event after session expired.");
            return
        }
        const i = r || !t;
        t = !0,
        e.clickDetector && OE(e.clickDetector, n),
        e.addUpdate( () => {
            if (e.recordingMode === "buffer" && i && e.setInitialState(),
            !ap(e, n, i))
                return !0;
            if (!i)
                return !1;
            if (hC(e, i),
            e.session && e.session.previousSessionId)
                return !0;
            if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
                const o = e.eventBuffer.getEarliestTimestamp();
                o && (V && q.info(`Updating session start time to earliest event in buffer to ${new Date(o)}`),
                e.session.started = o,
                e.getOptions().stickySession && sp(e.session))
            }
            return e.recordingMode === "session" && e.flush(),
            !0
        }
        )
    }
}
function pC(e) {
    const t = e.getOptions();
    return {
        type: te.Custom,
        timestamp: Date.now(),
        data: {
            tag: "options",
            payload: {
                shouldRecordCanvas: e.isRecordingCanvas(),
                sessionSampleRate: t.sessionSampleRate,
                errorSampleRate: t.errorSampleRate,
                useCompressionOption: t.useCompression,
                blockAllMedia: t.blockAllMedia,
                maskAllText: t.maskAllText,
                maskAllInputs: t.maskAllInputs,
                useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                networkCaptureBodies: t.networkCaptureBodies,
                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
            }
        }
    }
}
function hC(e, t) {
    !t || !e.session || e.session.segmentId !== 0 || ap(e, pC(e), !1)
}
function mC(e, t, n, r) {
    return Jr(Y0(e, Md(e), r, n), [[{
        type: "replay_event"
    }, e], [{
        type: "replay_recording",
        length: typeof t == "string" ? new TextEncoder().encode(t).length : t.length
    }, t]])
}
function gC({recordingData: e, headers: t}) {
    let n;
    const r = `${JSON.stringify(t)}
`;
    if (typeof e == "string")
        n = `${r}${e}`;
    else {
        const o = new TextEncoder().encode(r);
        n = new Uint8Array(o.length + e.length),
        n.set(o),
        n.set(e, o.length)
    }
    return n
}
async function yC({client: e, scope: t, replayId: n, event: r}) {
    const i = typeof e._integrations == "object" && e._integrations !== null && !Array.isArray(e._integrations) ? Object.keys(e._integrations) : void 0
      , o = {
        event_id: n,
        integrations: i
    };
    e.emit("preprocessEvent", r, o);
    const s = await p2(e.getOptions(), r, o, t, e, Gt());
    if (!s)
        return null;
    s.platform = s.platform || "javascript";
    const a = e.getSdkMetadata()
      , {name: l, version: u} = a && a.sdk || {};
    return s.sdk = {
        ...s.sdk,
        name: l || "sentry.javascript.unknown",
        version: u || "0.0.0"
    },
    s
}
async function vC({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: o}) {
    const s = gC({
        recordingData: e,
        headers: {
            segment_id: n
        }
    })
      , {urls: a, errorIds: l, traceIds: u, initialTimestamp: c} = r
      , f = le()
      , d = Te()
      , m = f && f.getTransport()
      , h = f && f.getDsn();
    if (!f || !m || !h || !o.sampled)
        return Bn({});
    const v = {
        type: e9,
        replay_start_timestamp: c / 1e3,
        timestamp: i / 1e3,
        error_ids: l,
        trace_ids: u,
        urls: a,
        replay_id: t,
        segment_id: n,
        replay_type: o.sampled
    }
      , k = await yC({
        scope: d,
        client: f,
        replayId: t,
        event: v
    });
    if (!k)
        return f.recordDroppedEvent("event_processor", "replay", v),
        V && q.info("An event processor returned `null`, will not send event."),
        Bn({});
    delete k.sdkProcessingMetadata;
    const g = mC(k, s, h, f.getOptions().tunnel);
    let p;
    try {
        p = await m.send(g)
    } catch (E) {
        const x = new Error(Jd);
        try {
            x.cause = E
        } catch {}
        throw x
    }
    if (typeof p.statusCode == "number" && (p.statusCode < 200 || p.statusCode >= 300))
        throw new Ry(p.statusCode);
    const y = Q0({}, p);
    if (J0(y, "replay"))
        throw new Ay(y);
    return p
}
class Ry extends Error {
    constructor(t) {
        super(`Transport returned status code ${t}`)
    }
}
class Ay extends Error {
    constructor(t) {
        super("Rate limit hit"),
        this.rateLimits = t
    }
}
async function Py(e, t={
    count: 0,
    interval: s9
}) {
    const {recordingData: n, options: r} = e;
    if (n.length)
        try {
            return await vC(e),
            !0
        } catch (i) {
            if (i instanceof Ry || i instanceof Ay)
                throw i;
            if (m2("Replays", {
                _retryCount: t.count
            }),
            V && r._experiments && r._experiments.captureExceptions && Wd(i),
            t.count >= a9) {
                const o = new Error(`${Jd} - max retries exceeded`);
                try {
                    o.cause = i
                } catch {}
                throw o
            }
            return t.interval *= ++t.count,
            new Promise( (o, s) => {
                Vi(async () => {
                    try {
                        await Py(e, t),
                        o(!0)
                    } catch (a) {
                        s(a)
                    }
                }
                , t.interval)
            }
            )
        }
}
const Oy = "__THROTTLED"
  , _C = "__SKIPPED";
function SC(e, t, n) {
    const r = new Map
      , i = a => {
        const l = a - n;
        r.forEach( (u, c) => {
            c < l && r.delete(c)
        }
        )
    }
      , o = () => [...r.values()].reduce( (a, l) => a + l, 0);
    let s = !1;
    return (...a) => {
        const l = Math.floor(Date.now() / 1e3);
        if (i(l),
        o() >= t) {
            const c = s;
            return s = !0,
            c ? _C : Oy
        }
        s = !1;
        const u = r.get(l) || 0;
        return r.set(l, u + 1),
        e(...a)
    }
}
class Gn {
    constructor({options: t, recordingOptions: n}) {
        Gn.prototype.__init.call(this),
        Gn.prototype.__init2.call(this),
        Gn.prototype.__init3.call(this),
        Gn.prototype.__init4.call(this),
        Gn.prototype.__init5.call(this),
        Gn.prototype.__init6.call(this),
        this.eventBuffer = null,
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this.recordingMode = "session",
        this.timeouts = {
            sessionIdlePause: t9,
            sessionIdleExpire: n9
        },
        this._lastActivity = Date.now(),
        this._isEnabled = !1,
        this._isPaused = !1,
        this._requiresManualStart = !1,
        this._hasInitializedCoreListeners = !1,
        this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        },
        this._recordingOptions = n,
        this._options = t,
        this._debouncedFlush = fC( () => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
        }),
        this._throttledAddEvent = SC( (s, a) => gw(this, s, a), 300, 5);
        const {slowClickTimeout: r, slowClickIgnoreSelectors: i} = this.getOptions()
          , o = r ? {
            threshold: Math.min(l9, r),
            timeout: r,
            scrollTimeout: u9,
            ignoreSelector: i ? i.join(",") : ""
        } : void 0;
        if (o && (this.clickDetector = new LE(this,o)),
        V) {
            const s = t._experiments;
            q.setConfig({
                captureExceptions: !!s.captureExceptions,
                traceInternals: !!s.traceInternals
            })
        }
    }
    getContext() {
        return this._context
    }
    isEnabled() {
        return this._isEnabled
    }
    isPaused() {
        return this._isPaused
    }
    isRecordingCanvas() {
        return !!this._canvas
    }
    getOptions() {
        return this._options
    }
    handleException(t) {
        V && q.exception(t)
    }
    initializeSampling(t) {
        const {errorSampleRate: n, sessionSampleRate: r} = this._options
          , i = n <= 0 && r <= 0;
        if (this._requiresManualStart = i,
        !i) {
            if (this._initializeSessionForSampling(t),
            !this.session) {
                V && q.exception(new Error("Unable to initialize and create session"));
                return
            }
            this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session",
            V && q.infoTick(`Starting replay in ${this.recordingMode} mode`),
            this._initializeRecording())
        }
    }
    start() {
        if (this._isEnabled && this.recordingMode === "session") {
            V && q.info("Recording is already in progress");
            return
        }
        if (this._isEnabled && this.recordingMode === "buffer") {
            V && q.info("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        V && q.infoTick("Starting replay in session mode"),
        this._updateUserActivity();
        const t = nc({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = t,
        this._initializeRecording()
    }
    startBuffering() {
        if (this._isEnabled) {
            V && q.info("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        V && q.infoTick("Starting replay in buffer mode");
        const t = nc({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = t,
        this.recordingMode = "buffer",
        this._initializeRecording()
    }
    startRecording() {
        try {
            const t = this._canvas;
            this._stopRecording = An({
                ...this._recordingOptions,
                ...this.recordingMode === "buffer" && {
                    checkoutEveryNms: o9
                },
                emit: dC(this),
                onMutation: this._onMutationHandler,
                ...t ? {
                    recordCanvas: t.recordCanvas,
                    getCanvasManager: t.getCanvasManager,
                    sampling: t.sampling,
                    dataURLOptions: t.dataURLOptions
                } : {}
            })
        } catch (t) {
            this.handleException(t)
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(),
            this._stopRecording = void 0),
            !0
        } catch (t) {
            return this.handleException(t),
            !1
        }
    }
    async stop({forceFlush: t=!1, reason: n}={}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                V && q.info(`Stopping Replay${n ? ` triggered by ${n}` : ""}`),
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                t && await this._flush({
                    force: !0
                }),
                this.eventBuffer && this.eventBuffer.destroy(),
                this.eventBuffer = null,
                fw(this)
            } catch (r) {
                this.handleException(r)
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0,
        this.stopRecording(),
        V && q.info("Pausing replay"))
    }
    resume() {
        !this._isPaused || !this._checkSession() || (this._isPaused = !1,
        this.startRecording(),
        V && q.info("Resuming replay"))
    }
    async sendBufferedReplayOrFlush({continueRecording: t=!0}={}) {
        if (this.recordingMode === "session")
            return this.flushImmediate();
        const n = Date.now();
        V && q.info("Converting buffer to session"),
        await this.flushImmediate();
        const r = this.stopRecording();
        !t || !r || this.recordingMode !== "session" && (this.recordingMode = "session",
        this.session && (this._updateUserActivity(n),
        this._updateSessionActivity(n),
        this._maybeSaveSession()),
        this.startRecording())
    }
    addUpdate(t) {
        const n = t();
        this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush()
    }
    triggerUserActivity() {
        if (this._updateUserActivity(),
        !this._stopRecording) {
            if (!this._checkSession())
                return;
            this.resume();
            return
        }
        this.checkAndHandleExpiredSession(),
        this._updateSessionActivity()
    }
    updateUserActivity() {
        this._updateUserActivity(),
        this._updateSessionActivity()
    }
    conditionalFlush() {
        return this.recordingMode === "buffer" ? Promise.resolve() : this.flushImmediate()
    }
    flush() {
        return this._debouncedFlush()
    }
    flushImmediate() {
        return this._debouncedFlush(),
        this._debouncedFlush.flush()
    }
    cancelFlush() {
        this._debouncedFlush.cancel()
    }
    getSessionId() {
        return this.session && this.session.id
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && Af(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
            this.pause();
            return
        }
        return !!this._checkSession()
    }
    setInitialState() {
        const t = `${Ee.location.pathname}${Ee.location.hash}${Ee.location.search}`
          , n = `${Ee.location.origin}${t}`;
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._clearContext(),
        this._context.initialUrl = n,
        this._context.initialTimestamp = Date.now(),
        this._context.urls.push(n)
    }
    throttledAddEvent(t, n) {
        const r = this._throttledAddEvent(t, n);
        if (r === Oy) {
            const i = yn({
                category: "replay.throttled"
            });
            this.addUpdate( () => !ap(this, {
                type: wE,
                timestamp: i.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: i,
                    metric: !0
                }
            }))
        }
        return r
    }
    getCurrentRoute() {
        const t = this.lastActiveSpan || ut()
          , n = t && tt(t)
          , i = (n && he(n).data || {})[gn];
        if (!(!n || !i || !["route", "custom"].includes(i)))
            return he(n).description
    }
    _initializeRecording() {
        this.setInitialState(),
        this._updateSessionActivity(),
        this.eventBuffer = lw({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }),
        this._removeListeners(),
        this._addListeners(),
        this._isEnabled = !0,
        this._isPaused = !1,
        this.startRecording()
    }
    _initializeSessionForSampling(t) {
        const n = this._options.errorSampleRate > 0
          , r = nc({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            previousSessionId: t
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering: n
        });
        this.session = r
    }
    _checkSession() {
        if (!this.session)
            return !1;
        const t = this.session;
        return _y(t, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) ? (this._refreshSession(t),
        !1) : !0
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }),
        this.initializeSampling(t.id))
    }
    _addListeners() {
        try {
            Ee.document.addEventListener("visibilitychange", this._handleVisibilityChange),
            Ee.addEventListener("blur", this._handleWindowBlur),
            Ee.addEventListener("focus", this._handleWindowFocus),
            Ee.addEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.addListeners(),
            this._hasInitializedCoreListeners || (lC(this),
            this._hasInitializedCoreListeners = !0)
        } catch (t) {
            this.handleException(t)
        }
        this._performanceCleanupCallback = nw(this)
    }
    _removeListeners() {
        try {
            Ee.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
            Ee.removeEventListener("blur", this._handleWindowBlur),
            Ee.removeEventListener("focus", this._handleWindowFocus),
            Ee.removeEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.removeListeners(),
            this._performanceCleanupCallback && this._performanceCleanupCallback()
        } catch (t) {
            this.handleException(t)
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            Ee.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
        }
    }
    __init2() {
        this._handleWindowBlur = () => {
            const t = yn({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(t)
        }
    }
    __init3() {
        this._handleWindowFocus = () => {
            const t = yn({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(t)
        }
    }
    __init4() {
        this._handleKeyboardEvent = t => {
            WE(this, t)
        }
    }
    _doChangeToBackgroundTasks(t) {
        !this.session || vy(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (t && this._createCustomBreadcrumb(t),
        this.conditionalFlush())
    }
    _doChangeToForegroundTasks(t) {
        if (!this.session)
            return;
        if (!this.checkAndHandleExpiredSession()) {
            V && q.info("Document has become active, but session has expired");
            return
        }
        t && this._createCustomBreadcrumb(t)
    }
    _updateUserActivity(t=Date.now()) {
        this._lastActivity = t
    }
    _updateSessionActivity(t=Date.now()) {
        this.session && (this.session.lastActivity = t,
        this._maybeSaveSession())
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate( () => {
            this.throttledAddEvent({
                type: te.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: t
                }
            })
        }
        )
    }
    _addPerformanceEntries() {
        const t = qE(this.performanceEntries).concat(this.replayPerformanceEntries);
        return this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        Promise.all(nu(this, t))
    }
    _clearContext() {
        this._context.errorIds.clear(),
        this._context.traceIds.clear(),
        this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
        const {session: t, eventBuffer: n} = this;
        if (!t || !n || this._requiresManualStart || t.segmentId)
            return;
        const r = n.getEarliestTimestamp();
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
    }
    _popEventContext() {
        const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(),
        t
    }
    async _runFlush() {
        const t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            V && q.error("No session or eventBuffer found to flush.");
            return
        }
        if (await this._addPerformanceEntries(),
        !(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await uC(this),
        !!this.eventBuffer && t === this.getSessionId()))
            try {
                this._updateInitialTimestampFromEventBuffer();
                const n = Date.now();
                if (n - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                    throw new Error("Session is too long, not sending replay");
                const r = this._popEventContext()
                  , i = this.session.segmentId++;
                this._maybeSaveSession();
                const o = await this.eventBuffer.finish();
                await Py({
                    replayId: t,
                    recordingData: o,
                    segmentId: i,
                    eventContext: r,
                    session: this.session,
                    options: this.getOptions(),
                    timestamp: n
                })
            } catch (n) {
                this.handleException(n),
                this.stop({
                    reason: "sendReplay"
                });
                const r = le();
                r && r.recordDroppedEvent("send_error", "replay")
            }
    }
    __init5() {
        this._flush = async ({force: t=!1}={}) => {
            if (!this._isEnabled && !t)
                return;
            if (!this.checkAndHandleExpiredSession()) {
                V && q.error("Attempting to finish replay event after session expired.");
                return
            }
            if (!this.session)
                return;
            const n = this.session.started
              , i = Date.now() - n;
            this._debouncedFlush.cancel();
            const o = i < this._options.minReplayDuration
              , s = i > this._options.maxReplayDuration + 5e3;
            if (o || s) {
                V && q.info(`Session duration (${Math.floor(i / 1e3)}s) is too ${o ? "short" : "long"}, not sending replay.`),
                o && this._debouncedFlush();
                return
            }
            const a = this.eventBuffer;
            if (a && this.session.segmentId === 0 && !a.hasCheckout && V && q.info("Flushing initial segment without checkout."),
            !this._flushLock) {
                this._flushLock = this._runFlush(),
                await this._flushLock,
                this._flushLock = void 0;
                return
            }
            try {
                await this._flushLock
            } catch (l) {
                V && q.error(l)
            } finally {
                this._debouncedFlush()
            }
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && sp(this.session)
    }
    __init6() {
        this._onMutationHandler = t => {
            const n = t.length
              , r = this._options.mutationLimit
              , i = this._options.mutationBreadcrumbLimit
              , o = r && n > r;
            if (n > i || o) {
                const s = yn({
                    category: "replay.mutations",
                    data: {
                        count: n,
                        limit: o
                    }
                });
                this._createCustomBreadcrumb(s)
            }
            return o ? (this.stop({
                reason: "mutationLimit",
                forceFlush: this.recordingMode === "session"
            }),
            !1) : !0
        }
    }
}
function bo(e, t) {
    return [...e, ...t].join(",")
}
function EC({mask: e, unmask: t, block: n, unblock: r, ignore: i}) {
    const o = ['base[href="/"]']
      , s = bo(e, [".sentry-mask", "[data-sentry-mask]"])
      , a = bo(t, []);
    return {
        maskTextSelector: s,
        unmaskTextSelector: a,
        blockSelector: bo(n, [".sentry-block", "[data-sentry-block]", ...o]),
        unblockSelector: bo(r, []),
        ignoreSelector: bo(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
    }
}
function wC({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: i, value: o}) {
    return !r || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? o : n.includes(t) || t === "value" && e.tagName === "INPUT" && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
}
const K1 = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
  , CC = ["content-length", "content-type", "accept"];
let G1 = !1;
const kC = e => new iu(e);
class iu {
    static __initStatic() {
        this.id = "Replay"
    }
    constructor({flushMinDelay: t=r9, flushMaxDelay: n=i9, minReplayDuration: r=c9, maxReplayDuration: i=L1, stickySession: o=!0, useCompression: s=!0, workerUrl: a, _experiments: l={}, maskAllText: u=!0, maskAllInputs: c=!0, blockAllMedia: f=!0, mutationBreadcrumbLimit: d=750, mutationLimit: m=1e4, slowClickTimeout: h=7e3, slowClickIgnoreSelectors: v=[], networkDetailAllowUrls: k=[], networkDetailDenyUrls: g=[], networkCaptureBodies: p=!0, networkRequestHeaders: y=[], networkResponseHeaders: E=[], mask: x=[], maskAttributes: b=["title", "placeholder"], unmask: w=[], block: I=[], unblock: W=[], ignore: T=[], maskFn: D, beforeAddRecordingEvent: z, beforeErrorSampling: ee}={}) {
        this.name = iu.id;
        const ne = EC({
            mask: x,
            unmask: w,
            block: I,
            unblock: W,
            ignore: T
        });
        if (this._recordingOptions = {
            maskAllInputs: c,
            maskAllText: u,
            maskInputOptions: {
                password: !0
            },
            maskTextFn: D,
            maskInputFn: D,
            maskAttributeFn: (me, H, _e) => wC({
                maskAttributes: b,
                maskAllText: u,
                privacyOptions: ne,
                key: me,
                value: H,
                el: _e
            }),
            ...ne,
            slimDOMOptions: "all",
            inlineStylesheet: !0,
            inlineImages: !1,
            collectFonts: !0,
            errorHandler: me => {
                try {
                    me.__rrweb__ = !0
                } catch {}
            }
        },
        this._initialOptions = {
            flushMinDelay: t,
            flushMaxDelay: n,
            minReplayDuration: Math.min(r, f9),
            maxReplayDuration: Math.min(i, L1),
            stickySession: o,
            useCompression: s,
            workerUrl: a,
            blockAllMedia: f,
            maskAllInputs: c,
            maskAllText: u,
            mutationBreadcrumbLimit: d,
            mutationLimit: m,
            slowClickTimeout: h,
            slowClickIgnoreSelectors: v,
            networkDetailAllowUrls: k,
            networkDetailDenyUrls: g,
            networkCaptureBodies: p,
            networkRequestHeaders: Y1(y),
            networkResponseHeaders: Y1(E),
            beforeAddRecordingEvent: z,
            beforeErrorSampling: ee,
            _experiments: l
        },
        this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${K1}` : K1),
        this._isInitialized && Vh())
            throw new Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0
    }
    get _isInitialized() {
        return G1
    }
    set _isInitialized(t) {
        G1 = t
    }
    afterAllSetup(t) {
        !Vh() || this._replay || (this._setup(t),
        this._initialize(t))
    }
    start() {
        this._replay && this._replay.start()
    }
    startBuffering() {
        this._replay && this._replay.startBuffering()
    }
    stop() {
        return this._replay ? this._replay.stop({
            forceFlush: this._replay.recordingMode === "session"
        }) : Promise.resolve()
    }
    flush(t) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : (this._replay.start(),
        Promise.resolve()) : Promise.resolve()
    }
    getReplayId() {
        if (!(!this._replay || !this._replay.isEnabled()))
            return this._replay.getSessionId()
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t),
        this._replay.initializeSampling())
    }
    _setup(t) {
        const n = xC(this._initialOptions, t);
        this._replay = new Gn({
            options: n,
            recordingOptions: this._recordingOptions
        })
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            const n = t.getIntegrationByName("ReplayCanvas");
            if (!n)
                return;
            this._replay._canvas = n.getOptions()
        } catch {}
    }
}
iu.__initStatic();
function xC(e, t) {
    const n = t.getOptions()
      , r = {
        sessionSampleRate: 0,
        errorSampleRate: 0,
        ...qe(e)
    }
      , i = fl(n.replaysSessionSampleRate)
      , o = fl(n.replaysOnErrorSampleRate);
    return i == null && o == null && eo( () => {
        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
    }
    ),
    i != null && (r.sessionSampleRate = i),
    o != null && (r.errorSampleRate = o),
    r
}
function Y1(e) {
    return [...CC, ...e.map(t => t.toLowerCase())]
}
const J1 = new WeakMap
  , rc = new Map
  , Nf = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0
};
function bC(e, t) {
    const {traceFetch: n, traceXHR: r, shouldCreateSpanForRequest: i, enableHTTPTimings: o, tracePropagationTargets: s} = {
        traceFetch: Nf.traceFetch,
        traceXHR: Nf.traceXHR,
        ...t
    }
      , a = typeof i == "function" ? i : c => !0
      , l = c => RC(c, s)
      , u = {};
    n && (e.addEventProcessor(c => (c.type === "transaction" && c.spans && c.spans.forEach(f => {
        if (f.op === "http.client") {
            const d = rc.get(f.span_id);
            d && (f.timestamp = d / 1e3,
            rc.delete(f.span_id))
        }
    }
    ),
    c)),
    u5(c => {
        if (c.response) {
            const f = J1.get(c.response);
            f && c.endTimestamp && rc.set(f, c.endTimestamp)
        }
    }
    ),
    B0(c => {
        const f = N8(c, a, l, u);
        if (c.response && c.fetchData.__span && J1.set(c.response, c.fetchData.__span),
        f) {
            const d = Ny(c.fetchData.url)
              , m = d ? $r(d).host : void 0;
            f.setAttributes({
                "http.url": d,
                "server.address": m
            })
        }
        o && f && Q1(f)
    }
    )),
    r && j2(c => {
        const f = AC(c, a, l, u);
        o && f && Q1(f)
    }
    )
}
function TC(e) {
    return e.entryType === "resource" && "initiatorType"in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
}
function Q1(e) {
    const {url: t} = he(e).data || {};
    if (!t || typeof t != "string")
        return;
    const n = zi("resource", ({entries: r}) => {
        r.forEach(i => {
            TC(i) && i.name.endsWith(t) && (LC(i).forEach(s => e.setAttribute(...s)),
            setTimeout(n))
        }
        )
    }
    )
}
function IC(e) {
    let t = "unknown"
      , n = "unknown"
      , r = "";
    for (const i of e) {
        if (i === "/") {
            [t,n] = e.split("/");
            break
        }
        if (!isNaN(Number(i))) {
            t = r === "h" ? "http" : r,
            n = e.split(r)[1];
            break
        }
        r += i
    }
    return r === e && (t = r),
    {
        name: t,
        version: n
    }
}
function un(e=0) {
    return ((gt || performance.timeOrigin) + e) / 1e3
}
function LC(e) {
    const {name: t, version: n} = IC(e.nextHopProtocol)
      , r = [];
    return r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    gt ? [...r, ["http.request.redirect_start", un(e.redirectStart)], ["http.request.fetch_start", un(e.fetchStart)], ["http.request.domain_lookup_start", un(e.domainLookupStart)], ["http.request.domain_lookup_end", un(e.domainLookupEnd)], ["http.request.connect_start", un(e.connectStart)], ["http.request.secure_connection_start", un(e.secureConnectionStart)], ["http.request.connection_end", un(e.connectEnd)], ["http.request.request_start", un(e.requestStart)], ["http.request.response_start", un(e.responseStart)], ["http.request.response_end", un(e.responseEnd)]] : r
}
function RC(e, t) {
    const n = Y.location && Y.location.href;
    if (n) {
        let r, i;
        try {
            r = new URL(e,n),
            i = new URL(n).origin
        } catch {
            return !1
        }
        const o = r.origin === i;
        return t ? lr(r.toString(), t) || o && lr(r.pathname, t) : o
    } else {
        const r = !!e.match(/^\/(?!\/)/);
        return t ? lr(e, t) : r
    }
}
function AC(e, t, n, r) {
    const i = e.xhr
      , o = i && i[Or];
    if (!i || i.__sentry_own_request__ || !o)
        return;
    const s = hr() && t(o.url);
    if (e.endTimestamp && s) {
        const d = i.__sentry_xhr_span_id__;
        if (!d)
            return;
        const m = r[d];
        m && o.status_code !== void 0 && (e2(m, o.status_code),
        m.end(),
        delete r[d]);
        return
    }
    const a = Ny(o.url)
      , l = a ? $r(a).host : void 0
      , u = !!ut()
      , c = s && u ? Er({
        name: `${o.method} ${o.url}`,
        attributes: {
            type: "xhr",
            "http.method": o.method,
            "http.url": a,
            url: o.url,
            "server.address": l,
            [Ke]: "auto.http.browser",
            [pr]: "http.client"
        }
    }) : new no;
    i.__sentry_xhr_span_id__ = c.spanContext().spanId,
    r[i.__sentry_xhr_span_id__] = c;
    const f = le();
    return i.setRequestHeader && n(o.url) && f && PC(i, f, hr() && u ? c : void 0),
    c
}
function PC(e, t, n) {
    const r = Te()
      , i = Gt()
      , {traceId: o, spanId: s, sampled: a, dsc: l} = {
        ...i.getPropagationContext(),
        ...r.getPropagationContext()
    }
      , u = n && hr() ? r2(n) : Nd(o, s, a)
      , c = G0(l || (n ? Xr(n) : Yl(o, t)));
    OC(e, u, c)
}
function OC(e, t, n) {
    try {
        e.setRequestHeader("sentry-trace", t),
        n && e.setRequestHeader(uf, n)
    } catch {}
}
function Ny(e) {
    try {
        return new URL(e,Y.location.origin).href
    } catch {
        return
    }
}
function NC() {
    Y && Y.document ? Y.document.addEventListener("visibilitychange", () => {
        const e = ut();
        if (!e)
            return;
        const t = tt(e);
        if (Y.document.hidden && t) {
            const n = "cancelled"
              , {op: r, status: i} = he(t);
            sn && P.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`),
            i || t.setStatus({
                code: Ge,
                message: n
            }),
            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
            t.end()
        }
    }
    ) : sn && P.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
const MC = "BrowserTracing"
  , DC = {
    ...La,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    _experiments: {},
    ...Nf
}
  , FC = (e={}) => {
    d_();
    const {enableInp: t, enableLongTask: n, enableLongAnimationFrame: r, _experiments: {enableInteractions: i, enableStandaloneClsSpans: o}, beforeStartSpan: s, idleTimeout: a, finalTimeout: l, childSpanTimeout: u, markBackgroundSpan: c, traceFetch: f, traceXHR: d, shouldCreateSpanForRequest: m, enableHTTPTimings: h, instrumentPageLoad: v, instrumentNavigation: k} = {
        ...DC,
        ...e
    }
      , g = AS({
        recordClsStandaloneSpans: o || !1
    });
    t && t7(),
    r && ue.PerformanceObserver && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? OS() : n && PS(),
    i && NS();
    const p = {
        name: void 0,
        source: void 0
    };
    function y(E, x) {
        const b = x.op === "pageload"
          , w = s ? s(x) : x
          , I = w.attributes || {};
        x.name !== w.name && (I[gn] = "custom",
        w.attributes = I),
        p.name = w.name,
        p.source = I[gn];
        const W = d2(w, {
            idleTimeout: a,
            finalTimeout: l,
            childSpanTimeout: u,
            disableAutoFinish: b,
            beforeSpanEnd: D => {
                g(),
                BS(D, {
                    recordClsOnPageloadSpan: !o
                })
            }
        });
        function T() {
            ["interactive", "complete"].includes(Y.document.readyState) && E.emit("idleSpanEnableAutoFinish", W)
        }
        return b && Y.document && (Y.document.addEventListener("readystatechange", () => {
            T()
        }
        ),
        T()),
        W
    }
    return {
        name: MC,
        afterAllSetup(E) {
            let x, b = Y.location && Y.location.href;
            E.on("startNavigationSpan", w => {
                le() === E && (x && !he(x).timestamp && (sn && P.log(`[Tracing] Finishing current root span with op: ${he(x).op}`),
                x.end()),
                x = y(E, {
                    op: "navigation",
                    ...w
                }))
            }
            ),
            E.on("startPageLoadSpan", (w, I={}) => {
                if (le() !== E)
                    return;
                x && !he(x).timestamp && (sn && P.log(`[Tracing] Finishing current root span with op: ${he(x).op}`),
                x.end());
                const W = I.sentryTrace || X1("sentry-trace")
                  , T = I.baggage || X1("baggage")
                  , D = O5(W, T);
                Te().setPropagationContext(D),
                x = y(E, {
                    op: "pageload",
                    ...w
                })
            }
            ),
            E.on("spanEnd", w => {
                const I = he(w).op;
                if (w !== tt(w) || I !== "navigation" && I !== "pageload")
                    return;
                const W = Te()
                  , T = W.getPropagationContext();
                W.setPropagationContext({
                    ...T,
                    sampled: T.sampled !== void 0 ? T.sampled : Qr(w),
                    dsc: T.dsc || Xr(w)
                })
            }
            ),
            Y.location && (v && My(E, {
                name: Y.location.pathname,
                startTime: gt ? gt / 1e3 : void 0,
                attributes: {
                    [gn]: "url",
                    [Ke]: "auto.pageload.browser"
                }
            }),
            k && Xl( ({to: w, from: I}) => {
                if (I === void 0 && b && b.indexOf(w) !== -1) {
                    b = void 0;
                    return
                }
                I !== w && (b = void 0,
                $C(E, {
                    name: Y.location.pathname,
                    attributes: {
                        [gn]: "url",
                        [Ke]: "auto.navigation.browser"
                    }
                }))
            }
            )),
            c && NC(),
            i && BC(a, l, u, p),
            t && r7(),
            bC(E, {
                traceFetch: f,
                traceXHR: d,
                tracePropagationTargets: E.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: m,
                enableHTTPTimings: h
            })
        }
    }
}
;
function My(e, t, n) {
    e.emit("startPageLoadSpan", t, n),
    Te().setTransactionName(t.name);
    const r = ut();
    return (r && he(r).op) === "pageload" ? r : void 0
}
function $C(e, t) {
    Gt().setPropagationContext(ul()),
    Te().setPropagationContext(ul()),
    e.emit("startNavigationSpan", t),
    Te().setTransactionName(t.name);
    const n = ut();
    return (n && he(n).op) === "navigation" ? n : void 0
}
function X1(e) {
    const t = q6(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0
}
function BC(e, t, n, r) {
    let i;
    const o = () => {
        const s = "ui.action.click"
          , a = ut()
          , l = a && tt(a);
        if (l) {
            const u = he(l).op;
            if (["navigation", "pageload"].includes(u)) {
                sn && P.warn(`[Tracing] Did not create ${s} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (i && (i.setAttribute(pf, "interactionInterrupted"),
        i.end(),
        i = void 0),
        !r.name) {
            sn && P.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`);
            return
        }
        i = d2({
            name: r.name,
            op: s,
            attributes: {
                [gn]: r.source || "url"
            }
        }, {
            idleTimeout: e,
            finalTimeout: t,
            childSpanTimeout: n
        })
    }
    ;
    Y.document && addEventListener("click", o, {
        once: !1,
        capture: !0
    })
}
function jC(e) {
    const t = {
        ...e
    };
    return E2(t, "react"),
    m2("react", {
        version: F.version
    }),
    X7(t)
}
var Dy = {
    exports: {}
}
  , ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe = typeof Symbol == "function" && Symbol.for
  , up = Qe ? Symbol.for("react.element") : 60103
  , cp = Qe ? Symbol.for("react.portal") : 60106
  , ou = Qe ? Symbol.for("react.fragment") : 60107
  , su = Qe ? Symbol.for("react.strict_mode") : 60108
  , au = Qe ? Symbol.for("react.profiler") : 60114
  , lu = Qe ? Symbol.for("react.provider") : 60109
  , uu = Qe ? Symbol.for("react.context") : 60110
  , fp = Qe ? Symbol.for("react.async_mode") : 60111
  , cu = Qe ? Symbol.for("react.concurrent_mode") : 60111
  , fu = Qe ? Symbol.for("react.forward_ref") : 60112
  , du = Qe ? Symbol.for("react.suspense") : 60113
  , UC = Qe ? Symbol.for("react.suspense_list") : 60120
  , pu = Qe ? Symbol.for("react.memo") : 60115
  , hu = Qe ? Symbol.for("react.lazy") : 60116
  , WC = Qe ? Symbol.for("react.block") : 60121
  , zC = Qe ? Symbol.for("react.fundamental") : 60117
  , HC = Qe ? Symbol.for("react.responder") : 60118
  , VC = Qe ? Symbol.for("react.scope") : 60119;
function $t(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case up:
            switch (e = e.type,
            e) {
            case fp:
            case cu:
            case ou:
            case au:
            case su:
            case du:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case uu:
                case fu:
                case hu:
                case pu:
                case lu:
                    return e;
                default:
                    return t
                }
            }
        case cp:
            return t
        }
    }
}
function Fy(e) {
    return $t(e) === cu
}
ve.AsyncMode = fp;
ve.ConcurrentMode = cu;
ve.ContextConsumer = uu;
ve.ContextProvider = lu;
ve.Element = up;
ve.ForwardRef = fu;
ve.Fragment = ou;
ve.Lazy = hu;
ve.Memo = pu;
ve.Portal = cp;
ve.Profiler = au;
ve.StrictMode = su;
ve.Suspense = du;
ve.isAsyncMode = function(e) {
    return Fy(e) || $t(e) === fp
}
;
ve.isConcurrentMode = Fy;
ve.isContextConsumer = function(e) {
    return $t(e) === uu
}
;
ve.isContextProvider = function(e) {
    return $t(e) === lu
}
;
ve.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === up
}
;
ve.isForwardRef = function(e) {
    return $t(e) === fu
}
;
ve.isFragment = function(e) {
    return $t(e) === ou
}
;
ve.isLazy = function(e) {
    return $t(e) === hu
}
;
ve.isMemo = function(e) {
    return $t(e) === pu
}
;
ve.isPortal = function(e) {
    return $t(e) === cp
}
;
ve.isProfiler = function(e) {
    return $t(e) === au
}
;
ve.isStrictMode = function(e) {
    return $t(e) === su
}
;
ve.isSuspense = function(e) {
    return $t(e) === du
}
;
ve.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ou || e === cu || e === au || e === su || e === du || e === UC || typeof e == "object" && e !== null && (e.$$typeof === hu || e.$$typeof === pu || e.$$typeof === lu || e.$$typeof === uu || e.$$typeof === fu || e.$$typeof === zC || e.$$typeof === HC || e.$$typeof === VC || e.$$typeof === WC)
}
;
ve.typeOf = $t;
Dy.exports = ve;
var qC = Dy.exports
  , dp = qC
  , KC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , GC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , YC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , $y = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , pp = {};
pp[dp.ForwardRef] = YC;
pp[dp.Memo] = $y;
function Z1(e) {
    return dp.isMemo(e) ? $y : pp[e.$$typeof] || KC
}
var JC = Object.defineProperty
  , QC = Object.getOwnPropertyNames
  , em = Object.getOwnPropertySymbols
  , XC = Object.getOwnPropertyDescriptor
  , ZC = Object.getPrototypeOf
  , tm = Object.prototype;
function By(e, t, n) {
    if (typeof t != "string") {
        if (tm) {
            var r = ZC(t);
            r && r !== tm && By(e, r, n)
        }
        var i = QC(t);
        em && (i = i.concat(em(t)));
        for (var o = Z1(e), s = Z1(t), a = 0; a < i.length; ++a) {
            var l = i[a];
            if (!GC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
                var u = XC(t, l);
                try {
                    JC(e, l, u)
                } catch {}
            }
        }
    }
    return e
}
var ek = By;
const Jk = am(ek)
  , tk = new WeakSet;
function nk(e) {
    const t = FC({
        ...e,
        instrumentPageLoad: !1,
        instrumentNavigation: !1
    })
      , {useEffect: n, useLocation: r, useNavigationType: i, createRoutesFromChildren: o, matchRoutes: s, stripBasename: a, instrumentPageLoad: l=!0, instrumentNavigation: u=!0} = e;
    return {
        ...t,
        setup() {},
        afterAllSetup(c) {
            t.afterAllSetup(c);
            const f = Y && Y.location && Y.location.pathname;
            l && f && My(c, {
                name: f,
                attributes: {
                    [gn]: "url",
                    [pr]: "pageload",
                    [Ke]: "auto.pageload.react.reactrouter_v6"
                }
            }),
            u && tk.add(c)
        }
    }
}
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vs() {
    return vs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    vs.apply(this, arguments)
}
var Zn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Zn || (Zn = {}));
const nm = "popstate";
function Qk(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: s, hash: a} = r.location;
        return Mf("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Uy(i)
    }
    return ik(t, n, null, e)
}
function We(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function jy(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function rk() {
    return Math.random().toString(36).substr(2, 8)
}
function rm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Mf(e, t, n, r) {
    return n === void 0 && (n = null),
    vs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? so(t) : t, {
        state: n,
        key: t && t.key || r || rk()
    })
}
function Uy(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function so(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ik(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , a = Zn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(vs({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Zn.Pop;
        let k = c()
          , g = k == null ? null : k - u;
        u = k,
        l && l({
            action: a,
            location: v.location,
            delta: g
        })
    }
    function d(k, g) {
        a = Zn.Push;
        let p = Mf(v.location, k, g);
        u = c() + 1;
        let y = rm(p, u)
          , E = v.createHref(p);
        try {
            s.pushState(y, "", E)
        } catch (x) {
            if (x instanceof DOMException && x.name === "DataCloneError")
                throw x;
            i.location.assign(E)
        }
        o && l && l({
            action: a,
            location: v.location,
            delta: 1
        })
    }
    function m(k, g) {
        a = Zn.Replace;
        let p = Mf(v.location, k, g);
        u = c();
        let y = rm(p, u)
          , E = v.createHref(p);
        s.replaceState(y, "", E),
        o && l && l({
            action: a,
            location: v.location,
            delta: 0
        })
    }
    function h(k) {
        let g = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof k == "string" ? k : Uy(k);
        return p = p.replace(/ $/, "%20"),
        We(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(k) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(nm, f),
            l = k,
            () => {
                i.removeEventListener(nm, f),
                l = null
            }
        },
        createHref(k) {
            return t(i, k)
        },
        createURL: h,
        encodeLocation(k) {
            let g = h(k);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: d,
        replace: m,
        go(k) {
            return s.go(k)
        }
    };
    return v
}
var im;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(im || (im = {}));
function Wy(e, t, n) {
    return n === void 0 && (n = "/"),
    ok(e, t, n, !1)
}
function ok(e, t, n, r) {
    let i = typeof t == "string" ? so(t) : t
      , o = Vy(i.pathname || "/", n);
    if (o == null)
        return null;
    let s = zy(e);
    sk(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = yk(o);
        a = mk(s[l], u, r)
    }
    return a
}
function zy(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (We(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = cr([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (We(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        zy(o.children, t, c, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: pk(u, o.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of Hy(o.path))
                i(o, s, l)
    }
    ),
    t
}
function Hy(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = Hy(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
    i && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function sk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : hk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const ak = /^:[\w-]+$/
  , lk = 3
  , uk = 2
  , ck = 1
  , fk = 10
  , dk = -2
  , om = e => e === "*";
function pk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(om) && (r += dk),
    t && (r += uk),
    n.filter(i => !om(i)).reduce( (i, o) => i + (ak.test(o) ? lk : o === "" ? ck : fk), r)
}
function hk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function mk(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , o = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , f = sm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , d = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = sm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(i, f.params),
        s.push({
            params: i,
            pathname: cr([o, f.pathname]),
            pathnameBase: Ek(cr([o, f.pathnameBase])),
            route: d
        }),
        f.pathnameBase !== "/" && (o = cr([o, f.pathnameBase]))
    }
    return s
}
function sm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = gk(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            let {paramName: d, isOptional: m} = c;
            if (d === "*") {
                let v = a[f] || "";
                s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const h = a[f];
            return m && !h ? u[d] = void 0 : u[d] = (h || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function gk(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jy(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function yk(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return jy(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Vy(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function vk(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? so(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : _k(n, t) : t,
        search: wk(r),
        hash: Ck(i)
    }
}
function _k(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ic(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Sk(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function qy(e, t) {
    let n = Sk(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Ky(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = so(e) : (i = vs({}, e),
    We(!i.pathname || !i.pathname.includes("?"), ic("?", "pathname", "search", i)),
    We(!i.pathname || !i.pathname.includes("#"), ic("#", "pathname", "hash", i)),
    We(!i.search || !i.search.includes("#"), ic("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (s == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                f -= 1;
            i.pathname = d.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = vk(i, a)
      , u = s && s !== "/" && s.endsWith("/")
      , c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const cr = e => e.join("/").replace(/\/\/+/g, "/")
  , Ek = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , wk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Ck = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function kk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Gy = ["post", "put", "patch", "delete"];
new Set(Gy);
const xk = ["get", ...Gy];
new Set(xk);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _s() {
    return _s = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _s.apply(this, arguments)
}
const hp = F.createContext(null)
  , bk = F.createContext(null)
  , ao = F.createContext(null)
  , Ns = F.createContext(null)
  , wr = F.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yy = F.createContext(null);
function Xk(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Ms() || We(!1);
    let {basename: r, navigator: i} = F.useContext(ao)
      , {hash: o, pathname: s, search: a} = Rk(e, {
        relative: n
    })
      , l = s;
    return r !== "/" && (l = s === "/" ? r : cr([r, s])),
    i.createHref({
        pathname: l,
        search: a,
        hash: o
    })
}
function Ms() {
    return F.useContext(Ns) != null
}
function mu() {
    return Ms() || We(!1),
    F.useContext(Ns).location
}
function Tk() {
    return F.useContext(Ns).navigationType
}
function Jy(e) {
    F.useContext(ao).static || F.useLayoutEffect(e)
}
function Zk() {
    let {isDataRoute: e} = F.useContext(wr);
    return e ? Wk() : Ik()
}
function Ik() {
    Ms() || We(!1);
    let e = F.useContext(hp)
      , {basename: t, future: n, navigator: r} = F.useContext(ao)
      , {matches: i} = F.useContext(wr)
      , {pathname: o} = mu()
      , s = JSON.stringify(qy(i, n.v7_relativeSplatPath))
      , a = F.useRef(!1);
    return Jy( () => {
        a.current = !0
    }
    ),
    F.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = Ky(u, JSON.parse(s), o, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : cr([t, f.pathname])),
        (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, s, o, e])
}
const Qy = F.createContext(null);
function ex() {
    return F.useContext(Qy)
}
function Lk(e) {
    let t = F.useContext(wr).outlet;
    return t && F.createElement(Qy.Provider, {
        value: e
    }, t)
}
function Rk(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = F.useContext(ao)
      , {matches: i} = F.useContext(wr)
      , {pathname: o} = mu()
      , s = JSON.stringify(qy(i, r.v7_relativeSplatPath));
    return F.useMemo( () => Ky(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}
function Ak(e, t) {
    return Pk(e, t)
}
function Pk(e, t, n, r) {
    Ms() || We(!1);
    let {navigator: i} = F.useContext(ao)
      , {matches: o} = F.useContext(wr)
      , s = o[o.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = mu(), c;
    if (t) {
        var f;
        let k = typeof t == "string" ? so(t) : t;
        l === "/" || (f = k.pathname) != null && f.startsWith(l) || We(!1),
        c = k
    } else
        c = u;
    let d = c.pathname || "/"
      , m = d;
    if (l !== "/") {
        let k = l.replace(/^\//, "").split("/");
        m = "/" + d.replace(/^\//, "").split("/").slice(k.length).join("/")
    }
    let h = Wy(e, {
        pathname: m
    })
      , v = Fk(h && h.map(k => Object.assign({}, k, {
        params: Object.assign({}, a, k.params),
        pathname: cr([l, i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname]),
        pathnameBase: k.pathnameBase === "/" ? l : cr([l, i.encodeLocation ? i.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
    })), o, n, r);
    return t && v ? F.createElement(Ns.Provider, {
        value: {
            location: _s({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Zn.Pop
        }
    }, v) : v
}
function Ok() {
    let e = Uk()
      , t = kk(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return F.createElement(F.Fragment, null, F.createElement("h2", null, "Unexpected Application Error!"), F.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? F.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Nk = F.createElement(Ok, null);
class Mk extends F.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? F.createElement(wr.Provider, {
            value: this.props.routeContext
        }, F.createElement(Yy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Dk(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = F.useContext(hp);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    F.createElement(wr.Provider, {
        value: t
    }, r)
}
function Fk(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || We(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let f = s[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: d, errors: m} = n
                  , h = f.route.loader && d[f.route.id] === void 0 && (!m || m[f.route.id] === void 0);
                if (f.route.lazy || h) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, f, d) => {
        let m, h = !1, v = null, k = null;
        n && (m = a && f.route.id ? a[f.route.id] : void 0,
        v = f.route.errorElement || Nk,
        l && (u < 0 && d === 0 ? (h = !0,
        k = null) : u === d && (h = !0,
        k = f.route.hydrateFallbackElement || null)));
        let g = t.concat(s.slice(0, d + 1))
          , p = () => {
            let y;
            return m ? y = v : h ? y = k : f.route.Component ? y = F.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = c,
            F.createElement(Dk, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? F.createElement(Mk, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: m,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Xy = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Xy || {})
  , kl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(kl || {});
function $k(e) {
    let t = F.useContext(hp);
    return t || We(!1),
    t
}
function Bk(e) {
    let t = F.useContext(bk);
    return t || We(!1),
    t
}
function jk(e) {
    let t = F.useContext(wr);
    return t || We(!1),
    t
}
function Zy(e) {
    let t = jk()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || We(!1),
    n.route.id
}
function Uk() {
    var e;
    let t = F.useContext(Yy)
      , n = Bk(kl.UseRouteError)
      , r = Zy(kl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Wk() {
    let {router: e} = $k(Xy.UseNavigateStable)
      , t = Zy(kl.UseNavigateStable)
      , n = F.useRef(!1);
    return Jy( () => {
        n.current = !0
    }
    ),
    F.useCallback(function(i, o) {
        o === void 0 && (o = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, _s({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function tx(e) {
    return Lk(e.context)
}
function zk(e) {
    We(!1)
}
function nx(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Zn.Pop, navigator: o, static: s=!1, future: a} = e;
    Ms() && We(!1);
    let l = t.replace(/^\/*/, "/")
      , u = F.useMemo( () => ({
        basename: l,
        navigator: o,
        static: s,
        future: _s({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, o, s]);
    typeof r == "string" && (r = so(r));
    let {pathname: c="/", search: f="", hash: d="", state: m=null, key: h="default"} = r
      , v = F.useMemo( () => {
        let k = Vy(c, l);
        return k == null ? null : {
            location: {
                pathname: k,
                search: f,
                hash: d,
                state: m,
                key: h
            },
            navigationType: i
        }
    }
    , [l, c, f, d, m, h, i]);
    return v == null ? null : F.createElement(ao.Provider, {
        value: u
    }, F.createElement(Ns.Provider, {
        children: n,
        value: v
    }))
}
function rx(e) {
    let {children: t, location: n} = e;
    return Ak(xl(t), n)
}
new Promise( () => {}
);
function xl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return F.Children.forEach(e, (r, i) => {
        if (!F.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === F.Fragment) {
            n.push.apply(n, xl(r.props.children, o));
            return
        }
        r.type !== zk && We(!1),
        !r.props.index || !r.props.children || We(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = xl(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
jC({
    dsn: "https://269d2f2576314087afbfc24f46857513@app.glitchtip.com/8047",
    integrations: [nk({
        useEffect: F.useEffect,
        useLocation: mu,
        useNavigationType: Tk,
        createRoutesFromChildren: xl,
        matchRoutes: Wy
    }), kC()],
    tracesSampleRate: 1,
    tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: .1,
    replaysOnErrorSampleRate: 1
});
oc.createRoot(document.getElementById("root")).render(N.jsx(N6, {
    children: N.jsx(D6, {})
}));
export {rx as A, zk as B, bk as D, ao as N, tx as O, vm as R, R6 as X, je as _, Yk as a, nx as b, Qk as c, qk as d, mu as e, We as f, Gk as g, Xk as h, rt as i, N as j, hp as k, Zk as l, sm as m, Uy as n, N4 as o, Jk as p, Vk as q, F as r, Vy as s, Kk as t, Rk as u, Hk as v, ex as w, am as x, M4 as y, M6 as z};
