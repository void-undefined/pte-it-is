var Pr = Object.defineProperty;
var Dr = (e, t, r) => t in e ? Pr(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var w = (e, t, r) => Dr(e, typeof t != "symbol" ? t + "" : t, r);
import {DaoService as Cr, UserService as Mr} from "./index-B_S8I6Qm.js";
import {r as R, R as C, i as Kt, t as Se} from "./index-BdDJSQ0C.js";
function S(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        r[n - 1] = arguments[n];
    throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e)
}
var jr = {};
function un() {
    return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : jr
}
var Ln = Object.assign
  , yt = Object.getOwnPropertyDescriptor
  , le = Object.defineProperty
  , Ct = Object.prototype
  , Xt = [];
Object.freeze(Xt);
var ln = {};
Object.freeze(ln);
var Rr = typeof Proxy < "u"
  , Lr = Object.toString();
function Nn() {
    Rr || S("Proxy not available")
}
function In(e) {
    var t = !1;
    return function() {
        if (!t)
            return t = !0,
            e.apply(this, arguments)
    }
}
var Fe = function() {};
function re(e) {
    return typeof e == "function"
}
function Re(e) {
    var t = typeof e;
    switch (t) {
    case "string":
    case "symbol":
    case "number":
        return !0
    }
    return !1
}
function Mt(e) {
    return e !== null && typeof e == "object"
}
function ye(e) {
    if (!Mt(e))
        return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null)
        return !0;
    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r.toString() === Lr
}
function Bn(e) {
    var t = e == null ? void 0 : e.constructor;
    return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1
}
function st(e, t, r) {
    le(e, t, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: r
    })
}
function Un(e, t, r) {
    le(e, t, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: r
    })
}
function Be(e, t) {
    var r = "isMobX" + e;
    return t.prototype[r] = !0,
    function(n) {
        return Mt(n) && n[r] === !0
    }
}
function He(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Map]"
}
function Nr(e) {
    var t = Object.getPrototypeOf(e)
      , r = Object.getPrototypeOf(t)
      , n = Object.getPrototypeOf(r);
    return n === null
}
function pe(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Set]"
}
var kn = typeof Object.getOwnPropertySymbols < "u";
function Ir(e) {
    var t = Object.keys(e);
    if (!kn)
        return t;
    var r = Object.getOwnPropertySymbols(e);
    return r.length ? [].concat(t, r.filter(function(n) {
        return Ct.propertyIsEnumerable.call(e, n)
    })) : t
}
var Ke = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : kn ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames;
function Vn(e) {
    return e === null ? null : typeof e == "object" ? "" + e : e
}
function be(e, t) {
    return Ct.hasOwnProperty.call(e, t)
}
var Br = Object.getOwnPropertyDescriptors || function(t) {
    var r = {};
    return Ke(t).forEach(function(n) {
        r[n] = yt(t, n)
    }),
    r
}
;
function G(e, t) {
    return !!(e & t)
}
function K(e, t, r) {
    return r ? e |= t : e &= ~t,
    e
}
function mn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function Ur(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Vr(n.key), n)
    }
}
function We(e, t, r) {
    return t && Ur(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Ge(e, t) {
    var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r)
        return (r = r.call(e)).next.bind(r);
    if (Array.isArray(e) || (r = $r(e)) || t) {
        r && (e = r);
        var n = 0;
        return function() {
            return n >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[n++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Le() {
    return Le = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Le.apply(null, arguments)
}
function $n(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    Yt(e, t)
}
function Yt(e, t) {
    return Yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n,
        r
    }
    ,
    Yt(e, t)
}
function kr(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function Vr(e) {
    var t = kr(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function $r(e, t) {
    if (e) {
        if (typeof e == "string")
            return mn(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? mn(e, t) : void 0
    }
}
var ue = Symbol("mobx-stored-annotations");
function fe(e) {
    function t(r, n) {
        if (at(n))
            return e.decorate_20223_(r, n);
        Xe(r, n, e)
    }
    return Object.assign(t, e)
}
function Xe(e, t, r) {
    be(e, ue) || st(e, ue, Le({}, e[ue])),
    Yr(r) || (e[ue][t] = r)
}
function Fr(e) {
    return be(e, ue) || st(e, ue, Le({}, e[ue])),
    e[ue]
}
function at(e) {
    return typeof e == "object" && typeof e.kind == "string"
}
var p = Symbol("mobx administration")
  , we = function() {
    function e(r) {
        r === void 0 && (r = "Atom"),
        this.name_ = void 0,
        this.flags_ = 0,
        this.observers_ = new Set,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = T.NOT_TRACKING_,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        this.name_ = r
    }
    var t = e.prototype;
    return t.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(n) {
            return n()
        })
    }
    ,
    t.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(n) {
            return n()
        })
    }
    ,
    t.reportObserved = function() {
        return nr(this)
    }
    ,
    t.reportChanged = function() {
        x(),
        rr(this),
        J()
    }
    ,
    t.toString = function() {
        return this.name_
    }
    ,
    We(e, [{
        key: "isBeingObserved",
        get: function() {
            return G(this.flags_, e.isBeingObservedMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isBeingObservedMask_, n)
        }
    }, {
        key: "isPendingUnobservation",
        get: function() {
            return G(this.flags_, e.isPendingUnobservationMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isPendingUnobservationMask_, n)
        }
    }, {
        key: "diffValue",
        get: function() {
            return G(this.flags_, e.diffValueMask_) ? 1 : 0
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.diffValueMask_, n === 1)
        }
    }])
}();
we.isBeingObservedMask_ = 1;
we.isPendingUnobservationMask_ = 2;
we.diffValueMask_ = 4;
var fn = Be("Atom", we);
function Fn(e, t, r) {
    t === void 0 && (t = Fe),
    r === void 0 && (r = Fe);
    var n = new we(e);
    return t !== Fe && es(n, t),
    r !== Fe && lr(n, r),
    n
}
function Gr(e, t) {
    return e === t
}
function Kr(e, t) {
    return vn(e, t)
}
function zr(e, t) {
    return vn(e, t, 1)
}
function qr(e, t) {
    return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
var ze = {
    identity: Gr,
    structural: Kr,
    default: qr,
    shallow: zr
};
function Ne(e, t, r) {
    return _r(e) ? e : Array.isArray(e) ? I.array(e, {
        name: r
    }) : ye(e) ? I.object(e, void 0, {
        name: r
    }) : He(e) ? I.map(e, {
        name: r
    }) : pe(e) ? I.set(e, {
        name: r
    }) : typeof e == "function" && !Ut(e) && !tt(e) ? Bn(e) ? qe(e) : et(r, e) : e
}
function Hr(e, t, r) {
    if (e == null || Vt(e) || kt(e) || ke(e) || Ye(e))
        return e;
    if (Array.isArray(e))
        return I.array(e, {
            name: r,
            deep: !1
        });
    if (ye(e))
        return I.object(e, void 0, {
            name: r,
            deep: !1
        });
    if (He(e))
        return I.map(e, {
            name: r,
            deep: !1
        });
    if (pe(e))
        return I.set(e, {
            name: r,
            deep: !1
        })
}
function jt(e) {
    return e
}
function Wr(e, t) {
    return vn(e, t) ? t : e
}
var Xr = "override";
function Yr(e) {
    return e.annotationType_ === Xr
}
function ot(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: xr,
        extend_: Jr,
        decorate_20223_: Qr
    }
}
function xr(e, t, r, n) {
    var i;
    if ((i = this.options_) != null && i.bound)
        return this.extend_(e, t, r, !1) === null ? 0 : 1;
    if (n === e.target_)
        return this.extend_(e, t, r, !1) === null ? 0 : 2;
    if (Ut(r.value))
        return 1;
    var s = Gn(e, this, t, r, !1);
    return le(n, t, s),
    2
}
function Jr(e, t, r, n) {
    var i = Gn(e, this, t, r);
    return e.defineProperty_(t, i, n)
}
function Qr(e, t) {
    var r = t.kind
      , n = t.name
      , i = t.addInitializer
      , s = this
      , a = function(f) {
        var l, h, d, E;
        return Ie((l = (h = s.options_) == null ? void 0 : h.name) != null ? l : n.toString(), f, (d = (E = s.options_) == null ? void 0 : E.autoAction) != null ? d : !1)
    };
    if (r == "field") {
        i(function() {
            Xe(this, n, s)
        });
        return
    }
    if (r == "method") {
        var o;
        return Ut(e) || (e = a(e)),
        (o = this.options_) != null && o.bound && i(function() {
            var u = this
              , f = u[n].bind(u);
            f.isMobxAction = !0,
            u[n] = f
        }),
        e
    }
    S("Cannot apply '" + s.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + s.annotationType_ + "' can only be used on properties with a function value."))
}
function Zr(e, t, r, n) {
    t.annotationType_,
    n.value
}
function Gn(e, t, r, n, i) {
    var s, a, o, u, f, l, h;
    i === void 0 && (i = c.safeDescriptors),
    Zr(e, t, r, n);
    var d = n.value;
    if ((s = t.options_) != null && s.bound) {
        var E;
        d = d.bind((E = e.proxy_) != null ? E : e.target_)
    }
    return {
        value: Ie((a = (o = t.options_) == null ? void 0 : o.name) != null ? a : r.toString(), d, (u = (f = t.options_) == null ? void 0 : f.autoAction) != null ? u : !1, (l = t.options_) != null && l.bound ? (h = e.proxy_) != null ? h : e.target_ : void 0),
        configurable: i ? e.isPlainObject_ : !0,
        enumerable: !1,
        writable: !i
    }
}
function Kn(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: ei,
        extend_: ti,
        decorate_20223_: ni
    }
}
function ei(e, t, r, n) {
    var i;
    if (n === e.target_)
        return this.extend_(e, t, r, !1) === null ? 0 : 2;
    if ((i = this.options_) != null && i.bound && (!be(e.target_, t) || !tt(e.target_[t])) && this.extend_(e, t, r, !1) === null)
        return 0;
    if (tt(r.value))
        return 1;
    var s = zn(e, this, t, r, !1, !1);
    return le(n, t, s),
    2
}
function ti(e, t, r, n) {
    var i, s = zn(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
    return e.defineProperty_(t, s, n)
}
function ni(e, t) {
    var r, n = t.name, i = t.addInitializer;
    return tt(e) || (e = qe(e)),
    (r = this.options_) != null && r.bound && i(function() {
        var s = this
          , a = s[n].bind(s);
        a.isMobXFlow = !0,
        s[n] = a
    }),
    e
}
function ri(e, t, r, n) {
    t.annotationType_,
    n.value
}
function zn(e, t, r, n, i, s) {
    s === void 0 && (s = c.safeDescriptors),
    ri(e, t, r, n);
    var a = n.value;
    if (tt(a) || (a = qe(a)),
    i) {
        var o;
        a = a.bind((o = e.proxy_) != null ? o : e.target_),
        a.isMobXFlow = !0
    }
    return {
        value: a,
        configurable: s ? e.isPlainObject_ : !0,
        enumerable: !1,
        writable: !s
    }
}
function cn(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: ii,
        extend_: si,
        decorate_20223_: ai
    }
}
function ii(e, t, r) {
    return this.extend_(e, t, r, !1) === null ? 0 : 1
}
function si(e, t, r, n) {
    return oi(e, this, t, r),
    e.defineComputedProperty_(t, Le({}, this.options_, {
        get: r.get,
        set: r.set
    }), n)
}
function ai(e, t) {
    var r = this
      , n = t.name
      , i = t.addInitializer;
    return i(function() {
        var s = Ve(this)[p]
          , a = Le({}, r.options_, {
            get: e,
            context: this
        });
        a.name || (a.name = "ObservableObject." + n.toString()),
        s.values_.set(n, new ie(a))
    }),
    function() {
        return this[p].getObservablePropValue_(n)
    }
}
function oi(e, t, r, n) {
    t.annotationType_,
    n.get
}
function Rt(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: ui,
        extend_: li,
        decorate_20223_: fi
    }
}
function ui(e, t, r) {
    return this.extend_(e, t, r, !1) === null ? 0 : 1
}
function li(e, t, r, n) {
    var i, s;
    return ci(e, this),
    e.defineObservableProperty_(t, r.value, (i = (s = this.options_) == null ? void 0 : s.enhancer) != null ? i : Ne, n)
}
function fi(e, t) {
    var r = this
      , n = t.kind
      , i = t.name
      , s = new WeakSet;
    function a(o, u) {
        var f, l, h = Ve(o)[p], d = new Me(u,(f = (l = r.options_) == null ? void 0 : l.enhancer) != null ? f : Ne,"ObservableObject." + i.toString(),!1);
        h.values_.set(i, d),
        s.add(o)
    }
    if (n == "accessor")
        return {
            get: function() {
                return s.has(this) || a(this, e.get.call(this)),
                this[p].getObservablePropValue_(i)
            },
            set: function(u) {
                return s.has(this) || a(this, u),
                this[p].setObservablePropValue_(i, u)
            },
            init: function(u) {
                return s.has(this) || a(this, u),
                u
            }
        }
}
function ci(e, t, r, n) {
    t.annotationType_
}
var di = "true"
  , hi = qn();
function qn(e) {
    return {
        annotationType_: di,
        options_: e,
        make_: _i,
        extend_: vi,
        decorate_20223_: pi
    }
}
function _i(e, t, r, n) {
    var i, s;
    if (r.get)
        return Lt.make_(e, t, r, n);
    if (r.set) {
        var a = Ie(t.toString(), r.set);
        return n === e.target_ ? e.defineProperty_(t, {
            configurable: c.safeDescriptors ? e.isPlainObject_ : !0,
            set: a
        }) === null ? 0 : 2 : (le(n, t, {
            configurable: !0,
            set: a
        }),
        2)
    }
    if (n !== e.target_ && typeof r.value == "function") {
        var o;
        if (Bn(r.value)) {
            var u, f = (u = this.options_) != null && u.autoBind ? qe.bound : qe;
            return f.make_(e, t, r, n)
        }
        var l = (o = this.options_) != null && o.autoBind ? et.bound : et;
        return l.make_(e, t, r, n)
    }
    var h = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? I.ref : I;
    if (typeof r.value == "function" && (s = this.options_) != null && s.autoBind) {
        var d;
        r.value = r.value.bind((d = e.proxy_) != null ? d : e.target_)
    }
    return h.make_(e, t, r, n)
}
function vi(e, t, r, n) {
    var i, s;
    if (r.get)
        return Lt.extend_(e, t, r, n);
    if (r.set)
        return e.defineProperty_(t, {
            configurable: c.safeDescriptors ? e.isPlainObject_ : !0,
            set: Ie(t.toString(), r.set)
        }, n);
    if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
        var a;
        r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_)
    }
    var o = ((s = this.options_) == null ? void 0 : s.deep) === !1 ? I.ref : I;
    return o.extend_(e, t, r, n)
}
function pi(e, t) {
    S("'" + this.annotationType_ + "' cannot be used as a decorator")
}
var gi = "observable"
  , bi = "observable.ref"
  , mi = "observable.shallow"
  , yi = "observable.struct"
  , Hn = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0
};
Object.freeze(Hn);
function ct(e) {
    return e || Hn
}
var xt = Rt(gi)
  , Oi = Rt(bi, {
    enhancer: jt
})
  , Ai = Rt(mi, {
    enhancer: Hr
})
  , Si = Rt(yi, {
    enhancer: Wr
})
  , Wn = fe(xt);
function dt(e) {
    return e.deep === !0 ? Ne : e.deep === !1 ? jt : Ti(e.defaultDecorator)
}
function Ei(e) {
    var t;
    return e ? (t = e.defaultDecorator) != null ? t : qn(e) : void 0
}
function Ti(e) {
    var t, r;
    return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Ne
}
function Xn(e, t, r) {
    if (at(t))
        return xt.decorate_20223_(e, t);
    if (Re(t)) {
        Xe(e, t, xt);
        return
    }
    return _r(e) ? e : ye(e) ? I.object(e, t, r) : Array.isArray(e) ? I.array(e, t) : He(e) ? I.map(e, t) : pe(e) ? I.set(e, t) : typeof e == "object" && e !== null ? e : I.box(e, t)
}
Ln(Xn, Wn);
var wi = {
    box: function(t, r) {
        var n = ct(r);
        return new Me(t,dt(n),n.name,!0,n.equals)
    },
    array: function(t, r) {
        var n = ct(r);
        return (c.useProxies === !1 || n.proxy === !1 ? As : ds)(t, dt(n), n.name)
    },
    map: function(t, r) {
        var n = ct(r);
        return new pr(t,dt(n),n.name)
    },
    set: function(t, r) {
        var n = ct(r);
        return new gr(t,dt(n),n.name)
    },
    object: function(t, r, n) {
        return Pe(function() {
            return cr(c.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Ve({}, n) : us({}, n), t, r)
        })
    },
    ref: fe(Oi),
    shallow: fe(Ai),
    deep: Wn,
    struct: fe(Si)
}
  , I = Ln(Xn, wi)
  , Yn = "computed"
  , Pi = "computed.struct"
  , Jt = cn(Yn)
  , Di = cn(Pi, {
    equals: ze.structural
})
  , Lt = function(t, r) {
    if (at(r))
        return Jt.decorate_20223_(t, r);
    if (Re(r))
        return Xe(t, r, Jt);
    if (ye(t))
        return fe(cn(Yn, t));
    var n = ye(r) ? r : {};
    return n.get = t,
    n.name || (n.name = t.name || ""),
    new ie(n)
};
Object.assign(Lt, Jt);
Lt.struct = fe(Di);
var yn, On, Ot = 0, Ci = 1, Mi = (yn = (On = yt(function() {}, "name")) == null ? void 0 : On.configurable) != null ? yn : !1, An = {
    value: "action",
    configurable: !0,
    writable: !1,
    enumerable: !1
};
function Ie(e, t, r, n) {
    r === void 0 && (r = !1);
    function i() {
        return ji(e, r, t, n || this, arguments)
    }
    return i.isMobxAction = !0,
    i.toString = function() {
        return t.toString()
    }
    ,
    Mi && (An.value = e,
    le(i, "name", An)),
    i
}
function ji(e, t, r, n, i) {
    var s = Ri(e, t);
    try {
        return r.apply(n, i)
    } catch (a) {
        throw s.error_ = a,
        a
    } finally {
        Li(s)
    }
}
function Ri(e, t, r, n) {
    var i = !1
      , s = 0
      , a = c.trackingDerivation
      , o = !t || !a;
    x();
    var u = c.allowStateChanges;
    o && (Ue(),
    u = Nt(!0));
    var f = dn(!0)
      , l = {
        runAsAction_: o,
        prevDerivation_: a,
        prevAllowStateChanges_: u,
        prevAllowStateReads_: f,
        notifySpy_: i,
        startTime_: s,
        actionId_: Ci++,
        parentActionId_: Ot
    };
    return Ot = l.actionId_,
    l
}
function Li(e) {
    Ot !== e.actionId_ && S(30),
    Ot = e.parentActionId_,
    e.error_ !== void 0 && (c.suppressReactionErrors = !0),
    It(e.prevAllowStateChanges_),
    Je(e.prevAllowStateReads_),
    J(),
    e.runAsAction_ && me(e.prevDerivation_),
    c.suppressReactionErrors = !1
}
function Ni(e, t) {
    var r = Nt(e);
    try {
        return t()
    } finally {
        It(r)
    }
}
function Nt(e) {
    var t = c.allowStateChanges;
    return c.allowStateChanges = e,
    t
}
function It(e) {
    c.allowStateChanges = e
}
var Me = function(e) {
    function t(n, i, s, a, o) {
        var u;
        return s === void 0 && (s = "ObservableValue"),
        o === void 0 && (o = ze.default),
        u = e.call(this, s) || this,
        u.enhancer = void 0,
        u.name_ = void 0,
        u.equals = void 0,
        u.hasUnreportedChange_ = !1,
        u.interceptors_ = void 0,
        u.changeListeners_ = void 0,
        u.value_ = void 0,
        u.dehancer = void 0,
        u.enhancer = i,
        u.name_ = s,
        u.equals = o,
        u.value_ = i(n, void 0, s),
        u
    }
    $n(t, e);
    var r = t.prototype;
    return r.dehanceValue = function(i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i
    }
    ,
    r.set = function(i) {
        this.value_,
        i = this.prepareNewValue_(i),
        i !== c.UNCHANGED && this.setNewValue_(i)
    }
    ,
    r.prepareNewValue_ = function(i) {
        if (X(this)) {
            var s = Y(this, {
                object: this,
                type: ce,
                newValue: i
            });
            if (!s)
                return c.UNCHANGED;
            i = s.newValue
        }
        return i = this.enhancer(i, this.value_, this.name_),
        this.equals(this.value_, i) ? c.UNCHANGED : i
    }
    ,
    r.setNewValue_ = function(i) {
        var s = this.value_;
        this.value_ = i,
        this.reportChanged(),
        te(this) && ne(this, {
            type: ce,
            object: this,
            newValue: i,
            oldValue: s
        })
    }
    ,
    r.get = function() {
        return this.reportObserved(),
        this.dehanceValue(this.value_)
    }
    ,
    r.intercept_ = function(i) {
        return ut(this, i)
    }
    ,
    r.observe_ = function(i, s) {
        return s && i({
            observableKind: "value",
            debugObjectName: this.name_,
            object: this,
            type: ce,
            newValue: this.value_,
            oldValue: void 0
        }),
        lt(this, i)
    }
    ,
    r.raw = function() {
        return this.value_
    }
    ,
    r.toJSON = function() {
        return this.get()
    }
    ,
    r.toString = function() {
        return this.name_ + "[" + this.value_ + "]"
    }
    ,
    r.valueOf = function() {
        return Vn(this.get())
    }
    ,
    r[Symbol.toPrimitive] = function() {
        return this.valueOf()
    }
    ,
    t
}(we)
  , ie = function() {
    function e(r) {
        this.dependenciesState_ = T.NOT_TRACKING_,
        this.observing_ = [],
        this.newObserving_ = null,
        this.observers_ = new Set,
        this.runId_ = 0,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = T.UP_TO_DATE_,
        this.unboundDepsCount_ = 0,
        this.value_ = new St(null),
        this.name_ = void 0,
        this.triggeredBy_ = void 0,
        this.flags_ = 0,
        this.derivation = void 0,
        this.setter_ = void 0,
        this.isTracing_ = At.NONE,
        this.scope_ = void 0,
        this.equals_ = void 0,
        this.requiresReaction_ = void 0,
        this.keepAlive_ = void 0,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        r.get || S(31),
        this.derivation = r.get,
        this.name_ = r.name || "ComputedValue",
        r.set && (this.setter_ = Ie("ComputedValue-setter", r.set)),
        this.equals_ = r.equals || (r.compareStructural || r.struct ? ze.structural : ze.default),
        this.scope_ = r.context,
        this.requiresReaction_ = r.requiresReaction,
        this.keepAlive_ = !!r.keepAlive
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function() {
        Vi(this)
    }
    ,
    t.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(n) {
            return n()
        })
    }
    ,
    t.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(n) {
            return n()
        })
    }
    ,
    t.get = function() {
        if (this.isComputing && S(32, this.name_, this.derivation),
        c.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
            Qt(this) && (this.warnAboutUntrackedRead_(),
            x(),
            this.value_ = this.computeValue_(!1),
            J());
        else if (nr(this),
        Qt(this)) {
            var n = c.trackingContext;
            this.keepAlive_ && !n && (c.trackingContext = this),
            this.trackAndCompute() && ki(this),
            c.trackingContext = n
        }
        var i = this.value_;
        if (pt(i))
            throw i.cause;
        return i
    }
    ,
    t.set = function(n) {
        if (this.setter_) {
            this.isRunningSetter && S(33, this.name_),
            this.isRunningSetter = !0;
            try {
                this.setter_.call(this.scope_, n)
            } finally {
                this.isRunningSetter = !1
            }
        } else
            S(34, this.name_)
    }
    ,
    t.trackAndCompute = function() {
        var n = this.value_
          , i = this.dependenciesState_ === T.NOT_TRACKING_
          , s = this.computeValue_(!0)
          , a = i || pt(n) || pt(s) || !this.equals_(n, s);
        return a && (this.value_ = s),
        a
    }
    ,
    t.computeValue_ = function(n) {
        this.isComputing = !0;
        var i = Nt(!1), s;
        if (n)
            s = xn(this, this.derivation, this.scope_);
        else if (c.disableErrorBoundaries === !0)
            s = this.derivation.call(this.scope_);
        else
            try {
                s = this.derivation.call(this.scope_)
            } catch (a) {
                s = new St(a)
            }
        return It(i),
        this.isComputing = !1,
        s
    }
    ,
    t.suspend_ = function() {
        this.keepAlive_ || (Zt(this),
        this.value_ = void 0)
    }
    ,
    t.observe_ = function(n, i) {
        var s = this
          , a = !0
          , o = void 0;
        return Yi(function() {
            var u = s.get();
            if (!a || i) {
                var f = Ue();
                n({
                    observableKind: "computed",
                    debugObjectName: s.name_,
                    type: ce,
                    object: s,
                    newValue: u,
                    oldValue: o
                }),
                me(f)
            }
            a = !1,
            o = u
        })
    }
    ,
    t.warnAboutUntrackedRead_ = function() {}
    ,
    t.toString = function() {
        return this.name_ + "[" + this.derivation.toString() + "]"
    }
    ,
    t.valueOf = function() {
        return Vn(this.get())
    }
    ,
    t[Symbol.toPrimitive] = function() {
        return this.valueOf()
    }
    ,
    We(e, [{
        key: "isComputing",
        get: function() {
            return G(this.flags_, e.isComputingMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isComputingMask_, n)
        }
    }, {
        key: "isRunningSetter",
        get: function() {
            return G(this.flags_, e.isRunningSetterMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isRunningSetterMask_, n)
        }
    }, {
        key: "isBeingObserved",
        get: function() {
            return G(this.flags_, e.isBeingObservedMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isBeingObservedMask_, n)
        }
    }, {
        key: "isPendingUnobservation",
        get: function() {
            return G(this.flags_, e.isPendingUnobservationMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isPendingUnobservationMask_, n)
        }
    }, {
        key: "diffValue",
        get: function() {
            return G(this.flags_, e.diffValueMask_) ? 1 : 0
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.diffValueMask_, n === 1)
        }
    }])
}();
ie.isComputingMask_ = 1;
ie.isRunningSetterMask_ = 2;
ie.isBeingObservedMask_ = 4;
ie.isPendingUnobservationMask_ = 8;
ie.diffValueMask_ = 16;
var Bt = Be("ComputedValue", ie), T;
(function(e) {
    e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_",
    e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_",
    e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_",
    e[e.STALE_ = 2] = "STALE_"
}
)(T || (T = {}));
var At;
(function(e) {
    e[e.NONE = 0] = "NONE",
    e[e.LOG = 1] = "LOG",
    e[e.BREAK = 2] = "BREAK"
}
)(At || (At = {}));
var St = function(t) {
    this.cause = void 0,
    this.cause = t
};
function pt(e) {
    return e instanceof St
}
function Qt(e) {
    switch (e.dependenciesState_) {
    case T.UP_TO_DATE_:
        return !1;
    case T.NOT_TRACKING_:
    case T.STALE_:
        return !0;
    case T.POSSIBLY_STALE_:
        {
            for (var t = dn(!0), r = Ue(), n = e.observing_, i = n.length, s = 0; s < i; s++) {
                var a = n[s];
                if (Bt(a)) {
                    if (c.disableErrorBoundaries)
                        a.get();
                    else
                        try {
                            a.get()
                        } catch {
                            return me(r),
                            Je(t),
                            !0
                        }
                    if (e.dependenciesState_ === T.STALE_)
                        return me(r),
                        Je(t),
                        !0
                }
            }
            return Qn(e),
            me(r),
            Je(t),
            !1
        }
    }
}
function xn(e, t, r) {
    var n = dn(!0);
    Qn(e),
    e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length),
    e.unboundDepsCount_ = 0,
    e.runId_ = ++c.runId;
    var i = c.trackingDerivation;
    c.trackingDerivation = e,
    c.inBatch++;
    var s;
    if (c.disableErrorBoundaries === !0)
        s = t.call(r);
    else
        try {
            s = t.call(r)
        } catch (a) {
            s = new St(a)
        }
    return c.inBatch--,
    c.trackingDerivation = i,
    Ii(e),
    Je(n),
    s
}
function Ii(e) {
    for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = T.UP_TO_DATE_, i = 0, s = e.unboundDepsCount_, a = 0; a < s; a++) {
        var o = r[a];
        o.diffValue === 0 && (o.diffValue = 1,
        i !== a && (r[i] = o),
        i++),
        o.dependenciesState_ > n && (n = o.dependenciesState_)
    }
    for (r.length = i,
    e.newObserving_ = null,
    s = t.length; s--; ) {
        var u = t[s];
        u.diffValue === 0 && er(u, e),
        u.diffValue = 0
    }
    for (; i--; ) {
        var f = r[i];
        f.diffValue === 1 && (f.diffValue = 0,
        Ui(f, e))
    }
    n !== T.UP_TO_DATE_ && (e.dependenciesState_ = n,
    e.onBecomeStale_())
}
function Zt(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var r = t.length; r--; )
        er(t[r], e);
    e.dependenciesState_ = T.NOT_TRACKING_
}
function Jn(e) {
    var t = Ue();
    try {
        return e()
    } finally {
        me(t)
    }
}
function Ue() {
    var e = c.trackingDerivation;
    return c.trackingDerivation = null,
    e
}
function me(e) {
    c.trackingDerivation = e
}
function dn(e) {
    var t = c.allowStateReads;
    return c.allowStateReads = e,
    t
}
function Je(e) {
    c.allowStateReads = e
}
function Qn(e) {
    if (e.dependenciesState_ !== T.UP_TO_DATE_) {
        e.dependenciesState_ = T.UP_TO_DATE_;
        for (var t = e.observing_, r = t.length; r--; )
            t[r].lowestObserverState_ = T.UP_TO_DATE_
    }
}
var gt = function() {
    this.version = 6,
    this.UNCHANGED = {},
    this.trackingDerivation = null,
    this.trackingContext = null,
    this.runId = 0,
    this.mobxGuid = 0,
    this.inBatch = 0,
    this.pendingUnobservations = [],
    this.pendingReactions = [],
    this.isRunningReactions = !1,
    this.allowStateChanges = !1,
    this.allowStateReads = !0,
    this.enforceActions = !0,
    this.spyListeners = [],
    this.globalReactionErrorHandlers = [],
    this.computedRequiresReaction = !1,
    this.reactionRequiresObservable = !1,
    this.observableRequiresReaction = !1,
    this.disableErrorBoundaries = !1,
    this.suppressReactionErrors = !1,
    this.useProxies = !0,
    this.verifyProxies = !1,
    this.safeDescriptors = !0
}
  , bt = !0
  , Zn = !1
  , c = function() {
    var e = un();
    return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (bt = !1),
    e.__mobxGlobals && e.__mobxGlobals.version !== new gt().version && (bt = !1),
    bt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1,
    e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
    e.__mobxGlobals) : (e.__mobxInstanceCount = 1,
    e.__mobxGlobals = new gt) : (setTimeout(function() {
        Zn || S(35)
    }, 1),
    new gt)
}();
function Bi() {
    if ((c.pendingReactions.length || c.inBatch || c.isRunningReactions) && S(36),
    Zn = !0,
    bt) {
        var e = un();
        --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0),
        c = new gt
    }
}
function Ui(e, t) {
    e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_)
}
function er(e, t) {
    e.observers_.delete(t),
    e.observers_.size === 0 && tr(e)
}
function tr(e) {
    e.isPendingUnobservation === !1 && (e.isPendingUnobservation = !0,
    c.pendingUnobservations.push(e))
}
function x() {
    c.inBatch++
}
function J() {
    if (--c.inBatch === 0) {
        ir();
        for (var e = c.pendingUnobservations, t = 0; t < e.length; t++) {
            var r = e[t];
            r.isPendingUnobservation = !1,
            r.observers_.size === 0 && (r.isBeingObserved && (r.isBeingObserved = !1,
            r.onBUO()),
            r instanceof ie && r.suspend_())
        }
        c.pendingUnobservations = []
    }
}
function nr(e) {
    var t = c.trackingDerivation;
    return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_,
    t.newObserving_[t.unboundDepsCount_++] = e,
    !e.isBeingObserved && c.trackingContext && (e.isBeingObserved = !0,
    e.onBO())),
    e.isBeingObserved) : (e.observers_.size === 0 && c.inBatch > 0 && tr(e),
    !1)
}
function rr(e) {
    e.lowestObserverState_ !== T.STALE_ && (e.lowestObserverState_ = T.STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === T.UP_TO_DATE_ && t.onBecomeStale_(),
        t.dependenciesState_ = T.STALE_
    }))
}
function ki(e) {
    e.lowestObserverState_ !== T.STALE_ && (e.lowestObserverState_ = T.STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === T.POSSIBLY_STALE_ ? t.dependenciesState_ = T.STALE_ : t.dependenciesState_ === T.UP_TO_DATE_ && (e.lowestObserverState_ = T.UP_TO_DATE_)
    }))
}
function Vi(e) {
    e.lowestObserverState_ === T.UP_TO_DATE_ && (e.lowestObserverState_ = T.POSSIBLY_STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === T.UP_TO_DATE_ && (t.dependenciesState_ = T.POSSIBLY_STALE_,
        t.onBecomeStale_())
    }))
}
var Oe = function() {
    function e(r, n, i, s) {
        r === void 0 && (r = "Reaction"),
        this.name_ = void 0,
        this.onInvalidate_ = void 0,
        this.errorHandler_ = void 0,
        this.requiresObservable_ = void 0,
        this.observing_ = [],
        this.newObserving_ = [],
        this.dependenciesState_ = T.NOT_TRACKING_,
        this.runId_ = 0,
        this.unboundDepsCount_ = 0,
        this.flags_ = 0,
        this.isTracing_ = At.NONE,
        this.name_ = r,
        this.onInvalidate_ = n,
        this.errorHandler_ = i,
        this.requiresObservable_ = s
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function() {
        this.schedule_()
    }
    ,
    t.schedule_ = function() {
        this.isScheduled || (this.isScheduled = !0,
        c.pendingReactions.push(this),
        ir())
    }
    ,
    t.runReaction_ = function() {
        if (!this.isDisposed) {
            x(),
            this.isScheduled = !1;
            var n = c.trackingContext;
            if (c.trackingContext = this,
            Qt(this)) {
                this.isTrackPending = !0;
                try {
                    this.onInvalidate_()
                } catch (i) {
                    this.reportExceptionInDerivation_(i)
                }
            }
            c.trackingContext = n,
            J()
        }
    }
    ,
    t.track = function(n) {
        if (!this.isDisposed) {
            x(),
            this.isRunning = !0;
            var i = c.trackingContext;
            c.trackingContext = this;
            var s = xn(this, n, void 0);
            c.trackingContext = i,
            this.isRunning = !1,
            this.isTrackPending = !1,
            this.isDisposed && Zt(this),
            pt(s) && this.reportExceptionInDerivation_(s.cause),
            J()
        }
    }
    ,
    t.reportExceptionInDerivation_ = function(n) {
        var i = this;
        if (this.errorHandler_) {
            this.errorHandler_(n, this);
            return
        }
        if (c.disableErrorBoundaries)
            throw n;
        var s = "[mobx] uncaught error in '" + this + "'";
        c.suppressReactionErrors || console.error(s, n),
        c.globalReactionErrorHandlers.forEach(function(a) {
            return a(n, i)
        })
    }
    ,
    t.dispose = function() {
        this.isDisposed || (this.isDisposed = !0,
        this.isRunning || (x(),
        Zt(this),
        J()))
    }
    ,
    t.getDisposer_ = function(n) {
        var i = this
          , s = function a() {
            i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", a)
        };
        return n == null || n.addEventListener == null || n.addEventListener("abort", s),
        s[p] = this,
        s
    }
    ,
    t.toString = function() {
        return "Reaction[" + this.name_ + "]"
    }
    ,
    t.trace = function(n) {}
    ,
    We(e, [{
        key: "isDisposed",
        get: function() {
            return G(this.flags_, e.isDisposedMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isDisposedMask_, n)
        }
    }, {
        key: "isScheduled",
        get: function() {
            return G(this.flags_, e.isScheduledMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isScheduledMask_, n)
        }
    }, {
        key: "isTrackPending",
        get: function() {
            return G(this.flags_, e.isTrackPendingMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isTrackPendingMask_, n)
        }
    }, {
        key: "isRunning",
        get: function() {
            return G(this.flags_, e.isRunningMask_)
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.isRunningMask_, n)
        }
    }, {
        key: "diffValue",
        get: function() {
            return G(this.flags_, e.diffValueMask_) ? 1 : 0
        },
        set: function(n) {
            this.flags_ = K(this.flags_, e.diffValueMask_, n === 1)
        }
    }])
}();
Oe.isDisposedMask_ = 1;
Oe.isScheduledMask_ = 2;
Oe.isTrackPendingMask_ = 4;
Oe.isRunningMask_ = 8;
Oe.diffValueMask_ = 16;
var $i = 100
  , en = function(t) {
    return t()
};
function ir() {
    c.inBatch > 0 || c.isRunningReactions || en(Fi)
}
function Fi() {
    c.isRunningReactions = !0;
    for (var e = c.pendingReactions, t = 0; e.length > 0; ) {
        ++t === $i && (console.error("[mobx] cycle in reaction: " + e[0]),
        e.splice(0));
        for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
            r[n].runReaction_()
    }
    c.isRunningReactions = !1
}
var Et = Be("Reaction", Oe);
function Gi(e) {
    var t = en;
    en = function(n) {
        return e(function() {
            return t(n)
        })
    }
}
function Qe() {
    return !1
}
function Ki(e) {
    return console.warn("[mobx.spy] Is a no-op in production builds"),
    function() {}
}
var sr = "action"
  , zi = "action.bound"
  , ar = "autoAction"
  , qi = "autoAction.bound"
  , Hi = "<unnamed action>"
  , tn = ot(sr)
  , Wi = ot(zi, {
    bound: !0
})
  , nn = ot(ar, {
    autoAction: !0
})
  , Xi = ot(qi, {
    autoAction: !0,
    bound: !0
});
function or(e) {
    var t = function(n, i) {
        if (re(n))
            return Ie(n.name || Hi, n, e);
        if (re(i))
            return Ie(n, i, e);
        if (at(i))
            return (e ? nn : tn).decorate_20223_(n, i);
        if (Re(i))
            return Xe(n, i, e ? nn : tn);
        if (Re(n))
            return fe(ot(e ? ar : sr, {
                name: n,
                autoAction: e
            }))
    };
    return t
}
var Ce = or(!1);
Object.assign(Ce, tn);
var et = or(!0);
Object.assign(et, nn);
Ce.bound = fe(Wi);
et.bound = fe(Xi);
function Ut(e) {
    return re(e) && e.isMobxAction === !0
}
function Yi(e, t) {
    var r, n, i, s;
    t === void 0 && (t = ln);
    var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun", o = !t.scheduler && !t.delay, u;
    if (o)
        u = new Oe(a,function() {
            this.track(h)
        }
        ,t.onError,t.requiresObservable);
    else {
        var f = ur(t)
          , l = !1;
        u = new Oe(a,function() {
            l || (l = !0,
            f(function() {
                l = !1,
                u.isDisposed || u.track(h)
            }))
        }
        ,t.onError,t.requiresObservable)
    }
    function h() {
        e(u)
    }
    return (i = t) != null && (i = i.signal) != null && i.aborted || u.schedule_(),
    u.getDisposer_((s = t) == null ? void 0 : s.signal)
}
var xi = function(t) {
    return t()
};
function ur(e) {
    return e.scheduler ? e.scheduler : e.delay ? function(t) {
        return setTimeout(t, e.delay)
    }
    : xi
}
function Gs(e, t, r) {
    var n, i, s;
    r === void 0 && (r = ln);
    var a = (n = r.name) != null ? n : "Reaction", o = Ce(a, r.onError ? Ji(r.onError, t) : t), u = !r.scheduler && !r.delay, f = ur(r), l = !0, h = !1, d, E = r.compareStructural ? ze.structural : r.equals || ze.default, g = new Oe(a,function() {
        l || u ? v() : h || (h = !0,
        f(v))
    }
    ,r.onError,r.requiresObservable);
    function v() {
        if (h = !1,
        !g.isDisposed) {
            var y = !1
              , O = d;
            g.track(function() {
                var b = Ni(!1, function() {
                    return e(g)
                });
                y = l || !E(d, b),
                d = b
            }),
            (l && r.fireImmediately || !l && y) && o(d, O, g),
            l = !1
        }
    }
    return (i = r) != null && (i = i.signal) != null && i.aborted || g.schedule_(),
    g.getDisposer_((s = r) == null ? void 0 : s.signal)
}
function Ji(e, t) {
    return function() {
        try {
            return t.apply(this, arguments)
        } catch (r) {
            e.call(this, r)
        }
    }
}
var Qi = "onBO"
  , Zi = "onBUO";
function es(e, t, r) {
    return fr(Qi, e, t, r)
}
function lr(e, t, r) {
    return fr(Zi, e, t, r)
}
function fr(e, t, r, n) {
    var i = Pt(t)
      , s = re(n) ? n : r
      , a = e + "L";
    return i[a] ? i[a].add(s) : i[a] = new Set([s]),
    function() {
        var o = i[a];
        o && (o.delete(s),
        o.size === 0 && delete i[a])
    }
}
var ts = "never"
  , ht = "always"
  , ns = "observed";
function Ks(e) {
    e.isolateGlobalState === !0 && Bi();
    var t = e.useProxies
      , r = e.enforceActions;
    if (t !== void 0 && (c.useProxies = t === ht ? !0 : t === ts ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (c.verifyProxies = !0),
    r !== void 0) {
        var n = r === ht ? ht : r === ns;
        c.enforceActions = n,
        c.allowStateChanges = !(n === !0 || n === ht)
    }
    ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
        i in e && (c[i] = !!e[i])
    }),
    c.allowStateReads = !c.observableRequiresReaction,
    e.reactionScheduler && Gi(e.reactionScheduler)
}
function cr(e, t, r, n) {
    var i = Br(t);
    return Pe(function() {
        var s = Ve(e, n)[p];
        Ke(i).forEach(function(a) {
            s.extend_(a, i[a], r && a in r ? r[a] : !0)
        })
    }),
    e
}
function zs(e, t) {
    return dr(Pt(e, t))
}
function dr(e) {
    var t = {
        name: e.name_
    };
    return e.observing_ && e.observing_.length > 0 && (t.dependencies = rs(e.observing_).map(dr)),
    t
}
function rs(e) {
    return Array.from(new Set(e))
}
var is = 0;
function hr() {
    this.message = "FLOW_CANCELLED"
}
hr.prototype = Object.create(Error.prototype);
var zt = Kn("flow")
  , ss = Kn("flow.bound", {
    bound: !0
})
  , qe = Object.assign(function(t, r) {
    if (at(r))
        return zt.decorate_20223_(t, r);
    if (Re(r))
        return Xe(t, r, zt);
    var n = t
      , i = n.name || "<unnamed flow>"
      , s = function() {
        var o = this, u = arguments, f = ++is, l = Ce(i + " - runid: " + f + " - init", n).apply(o, u), h, d = void 0, E = new Promise(function(g, v) {
            var y = 0;
            h = v;
            function O(m) {
                d = void 0;
                var L;
                try {
                    L = Ce(i + " - runid: " + f + " - yield " + y++, l.next).call(l, m)
                } catch (N) {
                    return v(N)
                }
                _(L)
            }
            function b(m) {
                d = void 0;
                var L;
                try {
                    L = Ce(i + " - runid: " + f + " - yield " + y++, l.throw).call(l, m)
                } catch (N) {
                    return v(N)
                }
                _(L)
            }
            function _(m) {
                if (re(m == null ? void 0 : m.then)) {
                    m.then(_, v);
                    return
                }
                return m.done ? g(m.value) : (d = Promise.resolve(m.value),
                d.then(O, b))
            }
            O(void 0)
        }
        );
        return E.cancel = Ce(i + " - runid: " + f + " - cancel", function() {
            try {
                d && Sn(d);
                var g = l.return(void 0)
                  , v = Promise.resolve(g.value);
                v.then(Fe, Fe),
                Sn(v),
                h(new hr)
            } catch (y) {
                h(y)
            }
        }),
        E
    };
    return s.isMobXFlow = !0,
    s
}, zt);
qe.bound = fe(ss);
function Sn(e) {
    re(e.cancel) && e.cancel()
}
function tt(e) {
    return (e == null ? void 0 : e.isMobXFlow) === !0
}
function as(e, t) {
    return e ? Vt(e) || !!e[p] || fn(e) || Et(e) || Bt(e) : !1
}
function _r(e) {
    return as(e)
}
function ge(e, t) {
    t === void 0 && (t = void 0),
    x();
    try {
        return e.apply(t)
    } finally {
        J()
    }
}
function $e(e) {
    return e[p]
}
var os = {
    has: function(t, r) {
        return $e(t).has_(r)
    },
    get: function(t, r) {
        return $e(t).get_(r)
    },
    set: function(t, r, n) {
        var i;
        return Re(r) ? (i = $e(t).set_(r, n, !0)) != null ? i : !0 : !1
    },
    deleteProperty: function(t, r) {
        var n;
        return Re(r) ? (n = $e(t).delete_(r, !0)) != null ? n : !0 : !1
    },
    defineProperty: function(t, r, n) {
        var i;
        return (i = $e(t).defineProperty_(r, n)) != null ? i : !0
    },
    ownKeys: function(t) {
        return $e(t).ownKeys_()
    },
    preventExtensions: function(t) {
        S(13)
    }
};
function us(e, t) {
    var r, n;
    return Nn(),
    e = Ve(e, t),
    (n = (r = e[p]).proxy_) != null ? n : r.proxy_ = new Proxy(e,os)
}
function X(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0
}
function ut(e, t) {
    var r = e.interceptors_ || (e.interceptors_ = []);
    return r.push(t),
    In(function() {
        var n = r.indexOf(t);
        n !== -1 && r.splice(n, 1)
    })
}
function Y(e, t) {
    var r = Ue();
    try {
        for (var n = [].concat(e.interceptors_ || []), i = 0, s = n.length; i < s && (t = n[i](t),
        t && !t.type && S(14),
        !!t); i++)
            ;
        return t
    } finally {
        me(r)
    }
}
function te(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0
}
function lt(e, t) {
    var r = e.changeListeners_ || (e.changeListeners_ = []);
    return r.push(t),
    In(function() {
        var n = r.indexOf(t);
        n !== -1 && r.splice(n, 1)
    })
}
function ne(e, t) {
    var r = Ue()
      , n = e.changeListeners_;
    if (n) {
        n = n.slice();
        for (var i = 0, s = n.length; i < s; i++)
            n[i](t);
        me(r)
    }
}
function qs(e, t, r) {
    return Pe(function() {
        var n, i = Ve(e, r)[p];
        (n = t) != null || (t = Fr(e)),
        Ke(t).forEach(function(s) {
            return i.make_(s, t[s])
        })
    }),
    e
}
var qt = Symbol("mobx-keys");
function ls(e, t, r) {
    return ye(e) ? cr(e, e, t, r) : (Pe(function() {
        var n = Ve(e, r)[p];
        if (!e[qt]) {
            var i = Object.getPrototypeOf(e)
              , s = new Set([].concat(Ke(e), Ke(i)));
            s.delete("constructor"),
            s.delete(p),
            st(i, qt, s)
        }
        e[qt].forEach(function(a) {
            return n.make_(a, t && a in t ? t[a] : !0)
        })
    }),
    e)
}
var En = "splice"
  , ce = "update"
  , fs = 1e4
  , cs = {
    get: function(t, r) {
        var n = t[p];
        return r === p ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : be(Tt, r) ? Tt[r] : t[r]
    },
    set: function(t, r, n) {
        var i = t[p];
        return r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n),
        !0
    },
    preventExtensions: function() {
        S(15)
    }
}
  , hn = function() {
    function e(r, n, i, s) {
        r === void 0 && (r = "ObservableArray"),
        this.owned_ = void 0,
        this.legacyMode_ = void 0,
        this.atom_ = void 0,
        this.values_ = [],
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.enhancer_ = void 0,
        this.dehancer = void 0,
        this.proxy_ = void 0,
        this.lastKnownLength_ = 0,
        this.owned_ = i,
        this.legacyMode_ = s,
        this.atom_ = new we(r),
        this.enhancer_ = function(a, o) {
            return n(a, o, "ObservableArray[..]")
        }
    }
    var t = e.prototype;
    return t.dehanceValue_ = function(n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n
    }
    ,
    t.dehanceValues_ = function(n) {
        return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n
    }
    ,
    t.intercept_ = function(n) {
        return ut(this, n)
    }
    ,
    t.observe_ = function(n, i) {
        return i === void 0 && (i = !1),
        i && n({
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: "splice",
            index: 0,
            added: this.values_.slice(),
            addedCount: this.values_.length,
            removed: [],
            removedCount: 0
        }),
        lt(this, n)
    }
    ,
    t.getArrayLength_ = function() {
        return this.atom_.reportObserved(),
        this.values_.length
    }
    ,
    t.setArrayLength_ = function(n) {
        (typeof n != "number" || isNaN(n) || n < 0) && S("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
            if (n > i) {
                for (var s = new Array(n - i), a = 0; a < n - i; a++)
                    s[a] = void 0;
                this.spliceWithArray_(i, 0, s)
            } else
                this.spliceWithArray_(n, i - n)
    }
    ,
    t.updateArrayLength_ = function(n, i) {
        n !== this.lastKnownLength_ && S(16),
        this.lastKnownLength_ += i,
        this.legacyMode_ && i > 0 && Or(n + i + 1)
    }
    ,
    t.spliceWithArray_ = function(n, i, s) {
        var a = this;
        this.atom_;
        var o = this.values_.length;
        if (n === void 0 ? n = 0 : n > o ? n = o : n < 0 && (n = Math.max(0, o + n)),
        arguments.length === 1 ? i = o - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, o - n)),
        s === void 0 && (s = Xt),
        X(this)) {
            var u = Y(this, {
                object: this.proxy_,
                type: En,
                index: n,
                removedCount: i,
                added: s
            });
            if (!u)
                return Xt;
            i = u.removedCount,
            s = u.added
        }
        if (s = s.length === 0 ? s : s.map(function(h) {
            return a.enhancer_(h, void 0)
        }),
        this.legacyMode_) {
            var f = s.length - i;
            this.updateArrayLength_(o, f)
        }
        var l = this.spliceItemsIntoValues_(n, i, s);
        return (i !== 0 || s.length !== 0) && this.notifyArraySplice_(n, s, l),
        this.dehanceValues_(l)
    }
    ,
    t.spliceItemsIntoValues_ = function(n, i, s) {
        if (s.length < fs) {
            var a;
            return (a = this.values_).splice.apply(a, [n, i].concat(s))
        } else {
            var o = this.values_.slice(n, n + i)
              , u = this.values_.slice(n + i);
            this.values_.length += s.length - i;
            for (var f = 0; f < s.length; f++)
                this.values_[n + f] = s[f];
            for (var l = 0; l < u.length; l++)
                this.values_[n + s.length + l] = u[l];
            return o
        }
    }
    ,
    t.notifyArrayChildUpdate_ = function(n, i, s) {
        var a = !this.owned_ && Qe()
          , o = te(this)
          , u = o || a ? {
            observableKind: "array",
            object: this.proxy_,
            type: ce,
            debugObjectName: this.atom_.name_,
            index: n,
            newValue: i,
            oldValue: s
        } : null;
        this.atom_.reportChanged(),
        o && ne(this, u)
    }
    ,
    t.notifyArraySplice_ = function(n, i, s) {
        var a = !this.owned_ && Qe()
          , o = te(this)
          , u = o || a ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: En,
            index: n,
            removed: s,
            added: i,
            removedCount: s.length,
            addedCount: i.length
        } : null;
        this.atom_.reportChanged(),
        o && ne(this, u)
    }
    ,
    t.get_ = function(n) {
        if (this.legacyMode_ && n >= this.values_.length) {
            console.warn("[mobx] Out of bounds read: " + n);
            return
        }
        return this.atom_.reportObserved(),
        this.dehanceValue_(this.values_[n])
    }
    ,
    t.set_ = function(n, i) {
        var s = this.values_;
        if (this.legacyMode_ && n > s.length && S(17, n, s.length),
        n < s.length) {
            this.atom_;
            var a = s[n];
            if (X(this)) {
                var o = Y(this, {
                    type: ce,
                    object: this.proxy_,
                    index: n,
                    newValue: i
                });
                if (!o)
                    return;
                i = o.newValue
            }
            i = this.enhancer_(i, a);
            var u = i !== a;
            u && (s[n] = i,
            this.notifyArrayChildUpdate_(n, i, a))
        } else {
            for (var f = new Array(n + 1 - s.length), l = 0; l < f.length - 1; l++)
                f[l] = void 0;
            f[f.length - 1] = i,
            this.spliceWithArray_(s.length, 0, f)
        }
    }
    ,
    e
}();
function ds(e, t, r, n) {
    return r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Nn(),
    Pe(function() {
        var i = new hn(r,t,n,!1);
        Un(i.values_, p, i);
        var s = new Proxy(i.values_,cs);
        return i.proxy_ = s,
        e && e.length && i.spliceWithArray_(0, 0, e),
        s
    })
}
var Tt = {
    clear: function() {
        return this.splice(0)
    },
    replace: function(t) {
        var r = this[p];
        return r.spliceWithArray_(0, r.values_.length, t)
    },
    toJSON: function() {
        return this.slice()
    },
    splice: function(t, r) {
        for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
            i[s - 2] = arguments[s];
        var a = this[p];
        switch (arguments.length) {
        case 0:
            return [];
        case 1:
            return a.spliceWithArray_(t);
        case 2:
            return a.spliceWithArray_(t, r)
        }
        return a.spliceWithArray_(t, r, i)
    },
    spliceWithArray: function(t, r, n) {
        return this[p].spliceWithArray_(t, r, n)
    },
    push: function() {
        for (var t = this[p], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
        return t.spliceWithArray_(t.values_.length, 0, n),
        t.values_.length
    },
    pop: function() {
        return this.splice(Math.max(this[p].values_.length - 1, 0), 1)[0]
    },
    shift: function() {
        return this.splice(0, 1)[0]
    },
    unshift: function() {
        for (var t = this[p], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
        return t.spliceWithArray_(0, 0, n),
        t.values_.length
    },
    reverse: function() {
        return c.trackingDerivation && S(37, "reverse"),
        this.replace(this.slice().reverse()),
        this
    },
    sort: function() {
        c.trackingDerivation && S(37, "sort");
        var t = this.slice();
        return t.sort.apply(t, arguments),
        this.replace(t),
        this
    },
    remove: function(t) {
        var r = this[p]
          , n = r.dehanceValues_(r.values_).indexOf(t);
        return n > -1 ? (this.splice(n, 1),
        !0) : !1
    }
};
M("at", q);
M("concat", q);
M("flat", q);
M("includes", q);
M("indexOf", q);
M("join", q);
M("lastIndexOf", q);
M("slice", q);
M("toString", q);
M("toLocaleString", q);
M("toSorted", q);
M("toSpliced", q);
M("with", q);
M("every", se);
M("filter", se);
M("find", se);
M("findIndex", se);
M("findLast", se);
M("findLastIndex", se);
M("flatMap", se);
M("forEach", se);
M("map", se);
M("some", se);
M("toReversed", se);
M("reduce", vr);
M("reduceRight", vr);
function M(e, t) {
    typeof Array.prototype[e] == "function" && (Tt[e] = t(e))
}
function q(e) {
    return function() {
        var t = this[p];
        t.atom_.reportObserved();
        var r = t.dehanceValues_(t.values_);
        return r[e].apply(r, arguments)
    }
}
function se(e) {
    return function(t, r) {
        var n = this
          , i = this[p];
        i.atom_.reportObserved();
        var s = i.dehanceValues_(i.values_);
        return s[e](function(a, o) {
            return t.call(r, a, o, n)
        })
    }
}
function vr(e) {
    return function() {
        var t = this
          , r = this[p];
        r.atom_.reportObserved();
        var n = r.dehanceValues_(r.values_)
          , i = arguments[0];
        return arguments[0] = function(s, a, o) {
            return i(s, a, o, t)
        }
        ,
        n[e].apply(n, arguments)
    }
}
var hs = Be("ObservableArrayAdministration", hn);
function kt(e) {
    return Mt(e) && hs(e[p])
}
var _s = {}
  , Ee = "add"
  , wt = "delete"
  , pr = function() {
    function e(r, n, i) {
        var s = this;
        n === void 0 && (n = Ne),
        i === void 0 && (i = "ObservableMap"),
        this.enhancer_ = void 0,
        this.name_ = void 0,
        this[p] = _s,
        this.data_ = void 0,
        this.hasMap_ = void 0,
        this.keysAtom_ = void 0,
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = n,
        this.name_ = i,
        re(Map) || S(18),
        Pe(function() {
            s.keysAtom_ = Fn("ObservableMap.keys()"),
            s.data_ = new Map,
            s.hasMap_ = new Map,
            r && s.merge(r)
        })
    }
    var t = e.prototype;
    return t.has_ = function(n) {
        return this.data_.has(n)
    }
    ,
    t.has = function(n) {
        var i = this;
        if (!c.trackingDerivation)
            return this.has_(n);
        var s = this.hasMap_.get(n);
        if (!s) {
            var a = s = new Me(this.has_(n),jt,"ObservableMap.key?",!1);
            this.hasMap_.set(n, a),
            lr(a, function() {
                return i.hasMap_.delete(n)
            })
        }
        return s.get()
    }
    ,
    t.set = function(n, i) {
        var s = this.has_(n);
        if (X(this)) {
            var a = Y(this, {
                type: s ? ce : Ee,
                object: this,
                newValue: i,
                name: n
            });
            if (!a)
                return this;
            i = a.newValue
        }
        return s ? this.updateValue_(n, i) : this.addValue_(n, i),
        this
    }
    ,
    t.delete = function(n) {
        var i = this;
        if (this.keysAtom_,
        X(this)) {
            var s = Y(this, {
                type: wt,
                object: this,
                name: n
            });
            if (!s)
                return !1
        }
        if (this.has_(n)) {
            var a = Qe()
              , o = te(this)
              , u = o || a ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: wt,
                object: this,
                oldValue: this.data_.get(n).value_,
                name: n
            } : null;
            return ge(function() {
                var f;
                i.keysAtom_.reportChanged(),
                (f = i.hasMap_.get(n)) == null || f.setNewValue_(!1);
                var l = i.data_.get(n);
                l.setNewValue_(void 0),
                i.data_.delete(n)
            }),
            o && ne(this, u),
            !0
        }
        return !1
    }
    ,
    t.updateValue_ = function(n, i) {
        var s = this.data_.get(n);
        if (i = s.prepareNewValue_(i),
        i !== c.UNCHANGED) {
            var a = Qe()
              , o = te(this)
              , u = o || a ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: ce,
                object: this,
                oldValue: s.value_,
                name: n,
                newValue: i
            } : null;
            s.setNewValue_(i),
            o && ne(this, u)
        }
    }
    ,
    t.addValue_ = function(n, i) {
        var s = this;
        this.keysAtom_,
        ge(function() {
            var f, l = new Me(i,s.enhancer_,"ObservableMap.key",!1);
            s.data_.set(n, l),
            i = l.value_,
            (f = s.hasMap_.get(n)) == null || f.setNewValue_(!0),
            s.keysAtom_.reportChanged()
        });
        var a = Qe()
          , o = te(this)
          , u = o || a ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: Ee,
            object: this,
            name: n,
            newValue: i
        } : null;
        o && ne(this, u)
    }
    ,
    t.get = function(n) {
        return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0)
    }
    ,
    t.dehanceValue_ = function(n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n
    }
    ,
    t.keys = function() {
        return this.keysAtom_.reportObserved(),
        this.data_.keys()
    }
    ,
    t.values = function() {
        var n = this
          , i = this.keys();
        return nt({
            next: function() {
                var a = i.next()
                  , o = a.done
                  , u = a.value;
                return {
                    done: o,
                    value: o ? void 0 : n.get(u)
                }
            }
        })
    }
    ,
    t.entries = function() {
        var n = this
          , i = this.keys();
        return nt({
            next: function() {
                var a = i.next()
                  , o = a.done
                  , u = a.value;
                return {
                    done: o,
                    value: o ? void 0 : [u, n.get(u)]
                }
            }
        })
    }
    ,
    t[Symbol.iterator] = function() {
        return this.entries()
    }
    ,
    t.forEach = function(n, i) {
        for (var s = Ge(this), a; !(a = s()).done; ) {
            var o = a.value
              , u = o[0]
              , f = o[1];
            n.call(i, f, u, this)
        }
    }
    ,
    t.merge = function(n) {
        var i = this;
        return ke(n) && (n = new Map(n)),
        ge(function() {
            ye(n) ? Ir(n).forEach(function(s) {
                return i.set(s, n[s])
            }) : Array.isArray(n) ? n.forEach(function(s) {
                var a = s[0]
                  , o = s[1];
                return i.set(a, o)
            }) : He(n) ? (Nr(n) || S(19, n),
            n.forEach(function(s, a) {
                return i.set(a, s)
            })) : n != null && S(20, n)
        }),
        this
    }
    ,
    t.clear = function() {
        var n = this;
        ge(function() {
            Jn(function() {
                for (var i = Ge(n.keys()), s; !(s = i()).done; ) {
                    var a = s.value;
                    n.delete(a)
                }
            })
        })
    }
    ,
    t.replace = function(n) {
        var i = this;
        return ge(function() {
            for (var s = vs(n), a = new Map, o = !1, u = Ge(i.data_.keys()), f; !(f = u()).done; ) {
                var l = f.value;
                if (!s.has(l)) {
                    var h = i.delete(l);
                    if (h)
                        o = !0;
                    else {
                        var d = i.data_.get(l);
                        a.set(l, d)
                    }
                }
            }
            for (var E = Ge(s.entries()), g; !(g = E()).done; ) {
                var v = g.value
                  , y = v[0]
                  , O = v[1]
                  , b = i.data_.has(y);
                if (i.set(y, O),
                i.data_.has(y)) {
                    var _ = i.data_.get(y);
                    a.set(y, _),
                    b || (o = !0)
                }
            }
            if (!o)
                if (i.data_.size !== a.size)
                    i.keysAtom_.reportChanged();
                else
                    for (var m = i.data_.keys(), L = a.keys(), N = m.next(), j = L.next(); !N.done; ) {
                        if (N.value !== j.value) {
                            i.keysAtom_.reportChanged();
                            break
                        }
                        N = m.next(),
                        j = L.next()
                    }
            i.data_ = a
        }),
        this
    }
    ,
    t.toString = function() {
        return "[object ObservableMap]"
    }
    ,
    t.toJSON = function() {
        return Array.from(this)
    }
    ,
    t.observe_ = function(n, i) {
        return lt(this, n)
    }
    ,
    t.intercept_ = function(n) {
        return ut(this, n)
    }
    ,
    We(e, [{
        key: "size",
        get: function() {
            return this.keysAtom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Map"
        }
    }])
}()
  , ke = Be("ObservableMap", pr);
function vs(e) {
    if (He(e) || ke(e))
        return e;
    if (Array.isArray(e))
        return new Map(e);
    if (ye(e)) {
        var t = new Map;
        for (var r in e)
            t.set(r, e[r]);
        return t
    } else
        return S(21, e)
}
var ps = {}
  , gr = function() {
    function e(r, n, i) {
        var s = this;
        n === void 0 && (n = Ne),
        i === void 0 && (i = "ObservableSet"),
        this.name_ = void 0,
        this[p] = ps,
        this.data_ = new Set,
        this.atom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = void 0,
        this.name_ = i,
        re(Set) || S(22),
        this.enhancer_ = function(a, o) {
            return n(a, o, i)
        }
        ,
        Pe(function() {
            s.atom_ = Fn(s.name_),
            r && s.replace(r)
        })
    }
    var t = e.prototype;
    return t.dehanceValue_ = function(n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n
    }
    ,
    t.clear = function() {
        var n = this;
        ge(function() {
            Jn(function() {
                for (var i = Ge(n.data_.values()), s; !(s = i()).done; ) {
                    var a = s.value;
                    n.delete(a)
                }
            })
        })
    }
    ,
    t.forEach = function(n, i) {
        for (var s = Ge(this), a; !(a = s()).done; ) {
            var o = a.value;
            n.call(i, o, o, this)
        }
    }
    ,
    t.add = function(n) {
        var i = this;
        if (this.atom_,
        X(this)) {
            var s = Y(this, {
                type: Ee,
                object: this,
                newValue: n
            });
            if (!s)
                return this
        }
        if (!this.has(n)) {
            ge(function() {
                i.data_.add(i.enhancer_(n, void 0)),
                i.atom_.reportChanged()
            });
            var a = !1
              , o = te(this)
              , u = o || a ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: Ee,
                object: this,
                newValue: n
            } : null;
            o && ne(this, u)
        }
        return this
    }
    ,
    t.delete = function(n) {
        var i = this;
        if (X(this)) {
            var s = Y(this, {
                type: wt,
                object: this,
                oldValue: n
            });
            if (!s)
                return !1
        }
        if (this.has(n)) {
            var a = !1
              , o = te(this)
              , u = o || a ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: wt,
                object: this,
                oldValue: n
            } : null;
            return ge(function() {
                i.atom_.reportChanged(),
                i.data_.delete(n)
            }),
            o && ne(this, u),
            !0
        }
        return !1
    }
    ,
    t.has = function(n) {
        return this.atom_.reportObserved(),
        this.data_.has(this.dehanceValue_(n))
    }
    ,
    t.entries = function() {
        var n = 0
          , i = Array.from(this.keys())
          , s = Array.from(this.values());
        return nt({
            next: function() {
                var o = n;
                return n += 1,
                o < s.length ? {
                    value: [i[o], s[o]],
                    done: !1
                } : {
                    done: !0
                }
            }
        })
    }
    ,
    t.keys = function() {
        return this.values()
    }
    ,
    t.values = function() {
        this.atom_.reportObserved();
        var n = this
          , i = 0
          , s = Array.from(this.data_.values());
        return nt({
            next: function() {
                return i < s.length ? {
                    value: n.dehanceValue_(s[i++]),
                    done: !1
                } : {
                    done: !0
                }
            }
        })
    }
    ,
    t.intersection = function(n) {
        if (pe(n))
            return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n)
    }
    ,
    t.union = function(n) {
        if (pe(n))
            return n.union(this);
        var i = new Set(this);
        return i.union(n)
    }
    ,
    t.difference = function(n) {
        return new Set(this).difference(n)
    }
    ,
    t.symmetricDifference = function(n) {
        if (pe(n))
            return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n)
    }
    ,
    t.isSubsetOf = function(n) {
        return new Set(this).isSubsetOf(n)
    }
    ,
    t.isSupersetOf = function(n) {
        return new Set(this).isSupersetOf(n)
    }
    ,
    t.isDisjointFrom = function(n) {
        if (pe(n))
            return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n)
    }
    ,
    t.replace = function(n) {
        var i = this;
        return Ye(n) && (n = new Set(n)),
        ge(function() {
            Array.isArray(n) ? (i.clear(),
            n.forEach(function(s) {
                return i.add(s)
            })) : pe(n) ? (i.clear(),
            n.forEach(function(s) {
                return i.add(s)
            })) : n != null && S("Cannot initialize set from " + n)
        }),
        this
    }
    ,
    t.observe_ = function(n, i) {
        return lt(this, n)
    }
    ,
    t.intercept_ = function(n) {
        return ut(this, n)
    }
    ,
    t.toJSON = function() {
        return Array.from(this)
    }
    ,
    t.toString = function() {
        return "[object ObservableSet]"
    }
    ,
    t[Symbol.iterator] = function() {
        return this.values()
    }
    ,
    We(e, [{
        key: "size",
        get: function() {
            return this.atom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Set"
        }
    }])
}()
  , Ye = Be("ObservableSet", gr)
  , Tn = Object.create(null)
  , wn = "remove"
  , br = function() {
    function e(r, n, i, s) {
        n === void 0 && (n = new Map),
        s === void 0 && (s = hi),
        this.target_ = void 0,
        this.values_ = void 0,
        this.name_ = void 0,
        this.defaultAnnotation_ = void 0,
        this.keysAtom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.proxy_ = void 0,
        this.isPlainObject_ = void 0,
        this.appliedAnnotations_ = void 0,
        this.pendingKeys_ = void 0,
        this.target_ = r,
        this.values_ = n,
        this.name_ = i,
        this.defaultAnnotation_ = s,
        this.keysAtom_ = new we("ObservableObject.keys"),
        this.isPlainObject_ = ye(this.target_)
    }
    var t = e.prototype;
    return t.getObservablePropValue_ = function(n) {
        return this.values_.get(n).get()
    }
    ,
    t.setObservablePropValue_ = function(n, i) {
        var s = this.values_.get(n);
        if (s instanceof ie)
            return s.set(i),
            !0;
        if (X(this)) {
            var a = Y(this, {
                type: ce,
                object: this.proxy_ || this.target_,
                name: n,
                newValue: i
            });
            if (!a)
                return null;
            i = a.newValue
        }
        if (i = s.prepareNewValue_(i),
        i !== c.UNCHANGED) {
            var o = te(this)
              , u = !1
              , f = o || u ? {
                type: ce,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                oldValue: s.value_,
                name: n,
                newValue: i
            } : null;
            s.setNewValue_(i),
            o && ne(this, f)
        }
        return !0
    }
    ,
    t.get_ = function(n) {
        return c.trackingDerivation && !be(this.target_, n) && this.has_(n),
        this.target_[n]
    }
    ,
    t.set_ = function(n, i, s) {
        return s === void 0 && (s = !1),
        be(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : s ? Reflect.set(this.target_, n, i) : (this.target_[n] = i,
        !0) : this.extend_(n, {
            value: i,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }, this.defaultAnnotation_, s)
    }
    ,
    t.has_ = function(n) {
        if (!c.trackingDerivation)
            return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map);
        var i = this.pendingKeys_.get(n);
        return i || (i = new Me(n in this.target_,jt,"ObservableObject.key?",!1),
        this.pendingKeys_.set(n, i)),
        i.get()
    }
    ,
    t.make_ = function(n, i) {
        if (i === !0 && (i = this.defaultAnnotation_),
        i !== !1) {
            if (!(n in this.target_)) {
                var s;
                if ((s = this.target_[ue]) != null && s[n])
                    return;
                S(1, i.annotationType_, this.name_ + "." + n.toString())
            }
            for (var a = this.target_; a && a !== Ct; ) {
                var o = yt(a, n);
                if (o) {
                    var u = i.make_(this, n, o, a);
                    if (u === 0)
                        return;
                    if (u === 1)
                        break
                }
                a = Object.getPrototypeOf(a)
            }
            Dn(this, i, n)
        }
    }
    ,
    t.extend_ = function(n, i, s, a) {
        if (a === void 0 && (a = !1),
        s === !0 && (s = this.defaultAnnotation_),
        s === !1)
            return this.defineProperty_(n, i, a);
        var o = s.extend_(this, n, i, a);
        return o && Dn(this, s, n),
        o
    }
    ,
    t.defineProperty_ = function(n, i, s) {
        s === void 0 && (s = !1),
        this.keysAtom_;
        try {
            x();
            var a = this.delete_(n);
            if (!a)
                return a;
            if (X(this)) {
                var o = Y(this, {
                    object: this.proxy_ || this.target_,
                    name: n,
                    type: Ee,
                    newValue: i.value
                });
                if (!o)
                    return null;
                var u = o.newValue;
                i.value !== u && (i = Le({}, i, {
                    value: u
                }))
            }
            if (s) {
                if (!Reflect.defineProperty(this.target_, n, i))
                    return !1
            } else
                le(this.target_, n, i);
            this.notifyPropertyAddition_(n, i.value)
        } finally {
            J()
        }
        return !0
    }
    ,
    t.defineObservableProperty_ = function(n, i, s, a) {
        a === void 0 && (a = !1),
        this.keysAtom_;
        try {
            x();
            var o = this.delete_(n);
            if (!o)
                return o;
            if (X(this)) {
                var u = Y(this, {
                    object: this.proxy_ || this.target_,
                    name: n,
                    type: Ee,
                    newValue: i
                });
                if (!u)
                    return null;
                i = u.newValue
            }
            var f = Pn(n)
              , l = {
                configurable: c.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !0,
                get: f.get,
                set: f.set
            };
            if (a) {
                if (!Reflect.defineProperty(this.target_, n, l))
                    return !1
            } else
                le(this.target_, n, l);
            var h = new Me(i,s,"ObservableObject.key",!1);
            this.values_.set(n, h),
            this.notifyPropertyAddition_(n, h.value_)
        } finally {
            J()
        }
        return !0
    }
    ,
    t.defineComputedProperty_ = function(n, i, s) {
        s === void 0 && (s = !1),
        this.keysAtom_;
        try {
            x();
            var a = this.delete_(n);
            if (!a)
                return a;
            if (X(this)) {
                var o = Y(this, {
                    object: this.proxy_ || this.target_,
                    name: n,
                    type: Ee,
                    newValue: void 0
                });
                if (!o)
                    return null
            }
            i.name || (i.name = "ObservableObject.key"),
            i.context = this.proxy_ || this.target_;
            var u = Pn(n)
              , f = {
                configurable: c.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !1,
                get: u.get,
                set: u.set
            };
            if (s) {
                if (!Reflect.defineProperty(this.target_, n, f))
                    return !1
            } else
                le(this.target_, n, f);
            this.values_.set(n, new ie(i)),
            this.notifyPropertyAddition_(n, void 0)
        } finally {
            J()
        }
        return !0
    }
    ,
    t.delete_ = function(n, i) {
        if (i === void 0 && (i = !1),
        this.keysAtom_,
        !be(this.target_, n))
            return !0;
        if (X(this)) {
            var s = Y(this, {
                object: this.proxy_ || this.target_,
                name: n,
                type: wn
            });
            if (!s)
                return null
        }
        try {
            var a;
            x();
            var o = te(this)
              , u = !1
              , f = this.values_.get(n)
              , l = void 0;
            if (!f && (o || u)) {
                var h;
                l = (h = yt(this.target_, n)) == null ? void 0 : h.value
            }
            if (i) {
                if (!Reflect.deleteProperty(this.target_, n))
                    return !1
            } else
                delete this.target_[n];
            if (f && (this.values_.delete(n),
            f instanceof Me && (l = f.value_),
            rr(f)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(n in this.target_),
            o || u) {
                var d = {
                    type: wn,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: l,
                    name: n
                };
                o && ne(this, d)
            }
        } finally {
            J()
        }
        return !0
    }
    ,
    t.observe_ = function(n, i) {
        return lt(this, n)
    }
    ,
    t.intercept_ = function(n) {
        return ut(this, n)
    }
    ,
    t.notifyPropertyAddition_ = function(n, i) {
        var s, a = te(this), o = !1;
        if (a || o) {
            var u = a || o ? {
                type: Ee,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: n,
                newValue: i
            } : null;
            a && ne(this, u)
        }
        (s = this.pendingKeys_) == null || (s = s.get(n)) == null || s.set(!0),
        this.keysAtom_.reportChanged()
    }
    ,
    t.ownKeys_ = function() {
        return this.keysAtom_.reportObserved(),
        Ke(this.target_)
    }
    ,
    t.keys_ = function() {
        return this.keysAtom_.reportObserved(),
        Object.keys(this.target_)
    }
    ,
    e
}();
function Ve(e, t) {
    var r;
    if (be(e, p))
        return e;
    var n = (r = t == null ? void 0 : t.name) != null ? r : "ObservableObject"
      , i = new br(e,new Map,String(n),Ei(t));
    return st(e, p, i),
    e
}
var gs = Be("ObservableObjectAdministration", br);
function Pn(e) {
    return Tn[e] || (Tn[e] = {
        get: function() {
            return this[p].getObservablePropValue_(e)
        },
        set: function(r) {
            return this[p].setObservablePropValue_(e, r)
        }
    })
}
function Vt(e) {
    return Mt(e) ? gs(e[p]) : !1
}
function Dn(e, t, r) {
    var n;
    (n = e.target_[ue]) == null || delete n[r]
}
var bs = yr(0)
  , ms = function() {
    var e = !1
      , t = {};
    return Object.defineProperty(t, "0", {
        set: function() {
            e = !0
        }
    }),
    Object.create(t)[0] = 1,
    e === !1
}()
  , Ht = 0
  , mr = function() {};
function ys(e, t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t
}
ys(mr, Array.prototype);
var _n = function(e) {
    function t(n, i, s, a) {
        var o;
        return s === void 0 && (s = "ObservableArray"),
        a === void 0 && (a = !1),
        o = e.call(this) || this,
        Pe(function() {
            var u = new hn(s,i,a,!0);
            u.proxy_ = o,
            Un(o, p, u),
            n && n.length && o.spliceWithArray(0, 0, n),
            ms && Object.defineProperty(o, "0", bs)
        }),
        o
    }
    $n(t, e);
    var r = t.prototype;
    return r.concat = function() {
        this[p].atom_.reportObserved();
        for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
            s[a] = arguments[a];
        return Array.prototype.concat.apply(this.slice(), s.map(function(o) {
            return kt(o) ? o.slice() : o
        }))
    }
    ,
    r[Symbol.iterator] = function() {
        var n = this
          , i = 0;
        return nt({
            next: function() {
                return i < n.length ? {
                    value: n[i++],
                    done: !1
                } : {
                    done: !0,
                    value: void 0
                }
            }
        })
    }
    ,
    We(t, [{
        key: "length",
        get: function() {
            return this[p].getArrayLength_()
        },
        set: function(i) {
            this[p].setArrayLength_(i)
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Array"
        }
    }])
}(mr);
Object.entries(Tt).forEach(function(e) {
    var t = e[0]
      , r = e[1];
    t !== "concat" && st(_n.prototype, t, r)
});
function yr(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this[p].get_(e)
        },
        set: function(r) {
            this[p].set_(e, r)
        }
    }
}
function Os(e) {
    le(_n.prototype, "" + e, yr(e))
}
function Or(e) {
    if (e > Ht) {
        for (var t = Ht; t < e + 100; t++)
            Os(t);
        Ht = e
    }
}
Or(1e3);
function As(e, t, r) {
    return new _n(e,t,r)
}
function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
        if (kt(e))
            return t !== void 0 && S(23),
            e[p].atom_;
        if (Ye(e))
            return e.atom_;
        if (ke(e)) {
            if (t === void 0)
                return e.keysAtom_;
            var r = e.data_.get(t) || e.hasMap_.get(t);
            return r || S(25, t, rn(e)),
            r
        }
        if (Vt(e)) {
            if (!t)
                return S(26);
            var n = e[p].values_.get(t);
            return n || S(27, t, rn(e)),
            n
        }
        if (fn(e) || Bt(e) || Et(e))
            return e
    } else if (re(e) && Et(e[p]))
        return e[p];
    S(28)
}
function Ss(e, t) {
    if (e || S(29),
    fn(e) || Bt(e) || Et(e) || ke(e) || Ye(e))
        return e;
    if (e[p])
        return e[p];
    S(24, e)
}
function rn(e, t) {
    var r;
    if (t !== void 0)
        r = Pt(e, t);
    else {
        if (Ut(e))
            return e.name;
        Vt(e) || ke(e) || Ye(e) ? r = Ss(e) : r = Pt(e)
    }
    return r.name_
}
function Pe(e) {
    var t = Ue()
      , r = Nt(!0);
    x();
    try {
        return e()
    } finally {
        J(),
        It(r),
        me(t)
    }
}
var Cn = Ct.toString;
function vn(e, t, r) {
    return r === void 0 && (r = -1),
    sn(e, t, r)
}
function sn(e, t, r, n, i) {
    if (e === t)
        return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null)
        return !1;
    if (e !== e)
        return t !== t;
    var s = typeof e;
    if (s !== "function" && s !== "object" && typeof t != "object")
        return !1;
    var a = Cn.call(e);
    if (a !== Cn.call(t))
        return !1;
    switch (a) {
    case "[object RegExp]":
    case "[object String]":
        return "" + e == "" + t;
    case "[object Number]":
        return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
        return +e == +t;
    case "[object Symbol]":
        return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
        r >= 0 && r++;
        break
    }
    e = Mn(e),
    t = Mn(t);
    var o = a === "[object Array]";
    if (!o) {
        if (typeof e != "object" || typeof t != "object")
            return !1;
        var u = e.constructor
          , f = t.constructor;
        if (u !== f && !(re(u) && u instanceof u && re(f) && f instanceof f) && "constructor"in e && "constructor"in t)
            return !1
    }
    if (r === 0)
        return !1;
    r < 0 && (r = -1),
    n = n || [],
    i = i || [];
    for (var l = n.length; l--; )
        if (n[l] === e)
            return i[l] === t;
    if (n.push(e),
    i.push(t),
    o) {
        if (l = e.length,
        l !== t.length)
            return !1;
        for (; l--; )
            if (!sn(e[l], t[l], r - 1, n, i))
                return !1
    } else {
        var h = Object.keys(e), d;
        if (l = h.length,
        Object.keys(t).length !== l)
            return !1;
        for (; l--; )
            if (d = h[l],
            !(be(t, d) && sn(e[d], t[d], r - 1, n, i)))
                return !1
    }
    return n.pop(),
    i.pop(),
    !0
}
function Mn(e) {
    return kt(e) ? e.slice() : He(e) || ke(e) || pe(e) || Ye(e) ? Array.from(e.entries()) : e
}
function nt(e) {
    return e[Symbol.iterator] = Es,
    e
}
function Es() {
    return this
}
["Symbol", "Map", "Set"].forEach(function(e) {
    var t = un();
    typeof t[e] > "u" && S("MobX requires global '" + e + "' to be available or polyfilled")
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Ki,
    extras: {
        getDebugName: rn
    },
    $mobx: p
});
function Ar(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (r = Ar(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function Te() {
    for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
        (e = arguments[r]) && (t = Ar(e)) && (n && (n += " "),
        n += t);
    return n
}
const rt = e => typeof e == "number" && !isNaN(e)
  , je = e => typeof e == "string"
  , z = e => typeof e == "function"
  , mt = e => je(e) || z(e) ? e : null
  , an = e => R.isValidElement(e) || je(e) || z(e) || rt(e);
function Ts(e, t, r) {
    r === void 0 && (r = 300);
    const {scrollHeight: n, style: i} = e;
    requestAnimationFrame( () => {
        i.minHeight = "initial",
        i.height = n + "px",
        i.transition = `all ${r}ms`,
        requestAnimationFrame( () => {
            i.height = "0",
            i.padding = "0",
            i.margin = "0",
            setTimeout(t, r)
        }
        )
    }
    )
}
function $t(e) {
    let {enter: t, exit: r, appendPosition: n=!1, collapse: i=!0, collapseDuration: s=300} = e;
    return function(a) {
        let {children: o, position: u, preventExitTransition: f, done: l, nodeRef: h, isIn: d, playToast: E} = a;
        const g = n ? `${t}--${u}` : t
          , v = n ? `${r}--${u}` : r
          , y = R.useRef(0);
        return R.useLayoutEffect( () => {
            const O = h.current
              , b = g.split(" ")
              , _ = m => {
                m.target === h.current && (E(),
                O.removeEventListener("animationend", _),
                O.removeEventListener("animationcancel", _),
                y.current === 0 && m.type !== "animationcancel" && O.classList.remove(...b))
            }
            ;
            O.classList.add(...b),
            O.addEventListener("animationend", _),
            O.addEventListener("animationcancel", _)
        }
        , []),
        R.useEffect( () => {
            const O = h.current
              , b = () => {
                O.removeEventListener("animationend", b),
                i ? Ts(O, l, s) : l()
            }
            ;
            d || (f ? b() : (y.current = 1,
            O.className += ` ${v}`,
            O.addEventListener("animationend", b)))
        }
        , [d]),
        C.createElement(C.Fragment, null, o)
    }
}
function jn(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const k = new Map;
let it = [];
const on = new Set
  , ws = e => on.forEach(t => t(e))
  , Sr = () => k.size > 0;
function Er(e, t) {
    var r;
    if (t)
        return !((r = k.get(t)) == null || !r.isToastActive(e));
    let n = !1;
    return k.forEach(i => {
        i.isToastActive(e) && (n = !0)
    }
    ),
    n
}
function Tr(e, t) {
    an(e) && (Sr() || it.push({
        content: e,
        options: t
    }),
    k.forEach(r => {
        r.buildToast(e, t)
    }
    ))
}
function Rn(e, t) {
    k.forEach(r => {
        t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === r.id && r.toggle(e, t == null ? void 0 : t.id) : r.toggle(e, t == null ? void 0 : t.id)
    }
    )
}
function Ps(e) {
    const {subscribe: t, getSnapshot: r, setProps: n} = R.useRef(function(s) {
        const a = s.containerId || 1;
        return {
            subscribe(o) {
                const u = function(l, h, d) {
                    let E = 1
                      , g = 0
                      , v = []
                      , y = []
                      , O = []
                      , b = h;
                    const _ = new Map
                      , m = new Set
                      , L = () => {
                        O = Array.from(_.values()),
                        m.forEach(A => A())
                    }
                      , N = A => {
                        y = A == null ? [] : y.filter(D => D !== A),
                        L()
                    }
                      , j = A => {
                        const {toastId: D, onOpen: B, updateId: H, children: Q} = A.props
                          , de = H == null;
                        A.staleId && _.delete(A.staleId),
                        _.set(D, A),
                        y = [...y, A.props.toastId].filter(Z => Z !== A.staleId),
                        L(),
                        d(jn(A, de ? "added" : "updated")),
                        de && z(B) && B(R.isValidElement(Q) && Q.props)
                    }
                    ;
                    return {
                        id: l,
                        props: b,
                        observe: A => (m.add(A),
                        () => m.delete(A)),
                        toggle: (A, D) => {
                            _.forEach(B => {
                                D != null && D !== B.props.toastId || z(B.toggle) && B.toggle(A)
                            }
                            )
                        }
                        ,
                        removeToast: N,
                        toasts: _,
                        clearQueue: () => {
                            g -= v.length,
                            v = []
                        }
                        ,
                        buildToast: (A, D) => {
                            if (($ => {
                                let {containerId: U, toastId: V, updateId: F} = $;
                                const oe = U ? U !== l : l !== 1
                                  , Ae = _.has(V) && F == null;
                                return oe || Ae
                            }
                            )(D))
                                return;
                            const {toastId: B, updateId: H, data: Q, staleId: de, delay: Z} = D
                              , he = () => {
                                N(B)
                            }
                              , De = H == null;
                            De && g++;
                            const W = {
                                ...b,
                                style: b.toastStyle,
                                key: E++,
                                ...Object.fromEntries(Object.entries(D).filter($ => {
                                    let[U,V] = $;
                                    return V != null
                                }
                                )),
                                toastId: B,
                                updateId: H,
                                data: Q,
                                closeToast: he,
                                isIn: !1,
                                className: mt(D.className || b.toastClassName),
                                bodyClassName: mt(D.bodyClassName || b.bodyClassName),
                                progressClassName: mt(D.progressClassName || b.progressClassName),
                                autoClose: !D.isLoading && (ee = D.autoClose,
                                _e = b.autoClose,
                                ee === !1 || rt(ee) && ee > 0 ? ee : _e),
                                deleteToast() {
                                    const $ = _.get(B)
                                      , {onClose: U, children: V} = $.props;
                                    z(U) && U(R.isValidElement(V) && V.props),
                                    d(jn($, "removed")),
                                    _.delete(B),
                                    g--,
                                    g < 0 && (g = 0),
                                    v.length > 0 ? j(v.shift()) : L()
                                }
                            };
                            var ee, _e;
                            W.closeButton = b.closeButton,
                            D.closeButton === !1 || an(D.closeButton) ? W.closeButton = D.closeButton : D.closeButton === !0 && (W.closeButton = !an(b.closeButton) || b.closeButton);
                            let ve = A;
                            R.isValidElement(A) && !je(A.type) ? ve = R.cloneElement(A, {
                                closeToast: he,
                                toastProps: W,
                                data: Q
                            }) : z(A) && (ve = A({
                                closeToast: he,
                                toastProps: W,
                                data: Q
                            }));
                            const ae = {
                                content: ve,
                                props: W,
                                staleId: de
                            };
                            b.limit && b.limit > 0 && g > b.limit && De ? v.push(ae) : rt(Z) ? setTimeout( () => {
                                j(ae)
                            }
                            , Z) : j(ae)
                        }
                        ,
                        setProps(A) {
                            b = A
                        },
                        setToggle: (A, D) => {
                            _.get(A).toggle = D
                        }
                        ,
                        isToastActive: A => y.some(D => D === A),
                        getSnapshot: () => b.newestOnTop ? O.reverse() : O
                    }
                }(a, s, ws);
                k.set(a, u);
                const f = u.observe(o);
                return it.forEach(l => Tr(l.content, l.options)),
                it = [],
                () => {
                    f(),
                    k.delete(a)
                }
            },
            setProps(o) {
                var u;
                (u = k.get(a)) == null || u.setProps(o)
            },
            getSnapshot() {
                var o;
                return (o = k.get(a)) == null ? void 0 : o.getSnapshot()
            }
        }
    }(e)).current;
    n(e);
    const i = R.useSyncExternalStore(t, r, r);
    return {
        getToastToRender: function(s) {
            if (!i)
                return [];
            const a = new Map;
            return i.forEach(o => {
                const {position: u} = o.props;
                a.has(u) || a.set(u, []),
                a.get(u).push(o)
            }
            ),
            Array.from(a, o => s(o[0], o[1]))
        },
        isToastActive: Er,
        count: i == null ? void 0 : i.length
    }
}
function Ds(e) {
    const [t,r] = R.useState(!1)
      , [n,i] = R.useState(!1)
      , s = R.useRef(null)
      , a = R.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current
      , {autoClose: o, pauseOnHover: u, closeToast: f, onClick: l, closeOnClick: h} = e;
    var d, E;
    function g() {
        r(!0)
    }
    function v() {
        r(!1)
    }
    function y(_) {
        const m = s.current;
        a.canDrag && m && (a.didMove = !0,
        t && v(),
        a.delta = e.draggableDirection === "x" ? _.clientX - a.start : _.clientY - a.start,
        a.start !== _.clientX && (a.canCloseOnClick = !1),
        m.style.transform = `translate3d(${e.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`},0)`,
        m.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance)))
    }
    function O() {
        document.removeEventListener("pointermove", y),
        document.removeEventListener("pointerup", O);
        const _ = s.current;
        if (a.canDrag && a.didMove && _) {
            if (a.canDrag = !1,
            Math.abs(a.delta) > a.removalDistance)
                return i(!0),
                e.closeToast(),
                void e.collapseAll();
            _.style.transition = "transform 0.2s, opacity 0.2s",
            _.style.removeProperty("transform"),
            _.style.removeProperty("opacity")
        }
    }
    (E = k.get((d = {
        id: e.toastId,
        containerId: e.containerId,
        fn: r
    }).containerId || 1)) == null || E.setToggle(d.id, d.fn),
    R.useEffect( () => {
        if (e.pauseOnFocusLoss)
            return document.hasFocus() || v(),
            window.addEventListener("focus", g),
            window.addEventListener("blur", v),
            () => {
                window.removeEventListener("focus", g),
                window.removeEventListener("blur", v)
            }
    }
    , [e.pauseOnFocusLoss]);
    const b = {
        onPointerDown: function(_) {
            if (e.draggable === !0 || e.draggable === _.pointerType) {
                a.didMove = !1,
                document.addEventListener("pointermove", y),
                document.addEventListener("pointerup", O);
                const m = s.current;
                a.canCloseOnClick = !0,
                a.canDrag = !0,
                m.style.transition = "none",
                e.draggableDirection === "x" ? (a.start = _.clientX,
                a.removalDistance = m.offsetWidth * (e.draggablePercent / 100)) : (a.start = _.clientY,
                a.removalDistance = m.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
            }
        },
        onPointerUp: function(_) {
            const {top: m, bottom: L, left: N, right: j} = s.current.getBoundingClientRect();
            _.nativeEvent.type !== "touchend" && e.pauseOnHover && _.clientX >= N && _.clientX <= j && _.clientY >= m && _.clientY <= L ? v() : g()
        }
    };
    return o && u && (b.onMouseEnter = v,
    e.stacked || (b.onMouseLeave = g)),
    h && (b.onClick = _ => {
        l && l(_),
        a.canCloseOnClick && f()
    }
    ),
    {
        playToast: g,
        pauseToast: v,
        isRunning: t,
        preventExitTransition: n,
        toastRef: s,
        eventHandlers: b
    }
}
function Cs(e) {
    let {delay: t, isRunning: r, closeToast: n, type: i="default", hide: s, className: a, style: o, controlledProgress: u, progress: f, rtl: l, isIn: h, theme: d} = e;
    const E = s || u && f === 0
      , g = {
        ...o,
        animationDuration: `${t}ms`,
        animationPlayState: r ? "running" : "paused"
    };
    u && (g.transform = `scaleX(${f})`);
    const v = Te("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${d}`, `Toastify__progress-bar--${i}`, {
        "Toastify__progress-bar--rtl": l
    })
      , y = z(a) ? a({
        rtl: l,
        type: i,
        defaultClassName: v
    }) : Te(v, a)
      , O = {
        [u && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && f < 1 ? null : () => {
            h && n()
        }
    };
    return C.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": E
    }, C.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`
    }), C.createElement("div", {
        role: "progressbar",
        "aria-hidden": E ? "true" : "false",
        "aria-label": "notification timer",
        className: y,
        style: g,
        ...O
    }))
}
let Ms = 1;
const wr = () => "" + Ms++;
function js(e) {
    return e && (je(e.toastId) || rt(e.toastId)) ? e.toastId : wr()
}
function Ze(e, t) {
    return Tr(e, t),
    t.toastId
}
function Dt(e, t) {
    return {
        ...t,
        type: t && t.type || e,
        toastId: js(t)
    }
}
function _t(e) {
    return (t, r) => Ze(t, Dt(e, r))
}
function P(e, t) {
    return Ze(e, Dt("default", t))
}
P.loading = (e, t) => Ze(e, Dt("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})),
P.promise = function(e, t, r) {
    let n, {pending: i, error: s, success: a} = t;
    i && (n = je(i) ? P.loading(i, r) : P.loading(i.render, {
        ...r,
        ...i
    }));
    const o = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }
      , u = (l, h, d) => {
        if (h == null)
            return void P.dismiss(n);
        const E = {
            type: l,
            ...o,
            ...r,
            data: d
        }
          , g = je(h) ? {
            render: h
        } : h;
        return n ? P.update(n, {
            ...E,
            ...g
        }) : P(g.render, {
            ...E,
            ...g
        }),
        d
    }
      , f = z(e) ? e() : e;
    return f.then(l => u("success", a, l)).catch(l => u("error", s, l)),
    f
}
,
P.success = _t("success"),
P.info = _t("info"),
P.error = _t("error"),
P.warning = _t("warning"),
P.warn = P.warning,
P.dark = (e, t) => Ze(e, Dt("default", {
    theme: "dark",
    ...t
})),
P.dismiss = function(e) {
    (function(t) {
        var r;
        if (Sr()) {
            if (t == null || je(r = t) || rt(r))
                k.forEach(n => {
                    n.removeToast(t)
                }
                );
            else if (t && ("containerId"in t || "id"in t)) {
                const n = k.get(t.containerId);
                n ? n.removeToast(t.id) : k.forEach(i => {
                    i.removeToast(t.id)
                }
                )
            }
        } else
            it = it.filter(n => t != null && n.options.toastId !== t)
    }
    )(e)
}
,
P.clearWaitingQueue = function(e) {
    e === void 0 && (e = {}),
    k.forEach(t => {
        !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
    }
    )
}
,
P.isActive = Er,
P.update = function(e, t) {
    t === void 0 && (t = {});
    const r = ( (n, i) => {
        var s;
        let {containerId: a} = i;
        return (s = k.get(a || 1)) == null ? void 0 : s.toasts.get(n)
    }
    )(e, t);
    if (r) {
        const {props: n, content: i} = r
          , s = {
            delay: 100,
            ...n,
            ...t,
            toastId: t.toastId || e,
            updateId: wr()
        };
        s.toastId !== e && (s.staleId = e);
        const a = s.render || i;
        delete s.render,
        Ze(a, s)
    }
}
,
P.done = e => {
    P.update(e, {
        progress: 1
    })
}
,
P.onChange = function(e) {
    return on.add(e),
    () => {
        on.delete(e)
    }
}
,
P.play = e => Rn(!0, e),
P.pause = e => Rn(!1, e);
const Rs = typeof window < "u" ? R.useLayoutEffect : R.useEffect
  , vt = e => {
    let {theme: t, type: r, isLoading: n, ...i} = e;
    return C.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`,
        ...i
    })
}
  , Wt = {
    info: function(e) {
        return C.createElement(vt, {
            ...e
        }, C.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
        }))
    },
    warning: function(e) {
        return C.createElement(vt, {
            ...e
        }, C.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
        }))
    },
    success: function(e) {
        return C.createElement(vt, {
            ...e
        }, C.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
        }))
    },
    error: function(e) {
        return C.createElement(vt, {
            ...e
        }, C.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
        }))
    },
    spinner: function() {
        return C.createElement("div", {
            className: "Toastify__spinner"
        })
    }
}
  , Ls = e => {
    const {isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: i, playToast: s} = Ds(e)
      , {closeButton: a, children: o, autoClose: u, onClick: f, type: l, hideProgressBar: h, closeToast: d, transition: E, position: g, className: v, style: y, bodyClassName: O, bodyStyle: b, progressClassName: _, progressStyle: m, updateId: L, role: N, progress: j, rtl: A, toastId: D, deleteToast: B, isIn: H, isLoading: Q, closeOnClick: de, theme: Z} = e
      , he = Te("Toastify__toast", `Toastify__toast-theme--${Z}`, `Toastify__toast--${l}`, {
        "Toastify__toast--rtl": A
    }, {
        "Toastify__toast--close-on-click": de
    })
      , De = z(v) ? v({
        rtl: A,
        position: g,
        type: l,
        defaultClassName: he
    }) : Te(he, v)
      , W = function(ae) {
        let {theme: $, type: U, isLoading: V, icon: F} = ae
          , oe = null;
        const Ae = {
            theme: $,
            type: U
        };
        return F === !1 || (z(F) ? oe = F({
            ...Ae,
            isLoading: V
        }) : R.isValidElement(F) ? oe = R.cloneElement(F, Ae) : V ? oe = Wt.spinner() : (ft => ft in Wt)(U) && (oe = Wt[U](Ae))),
        oe
    }(e)
      , ee = !!j || !u
      , _e = {
        closeToast: d,
        type: l,
        theme: Z
    };
    let ve = null;
    return a === !1 || (ve = z(a) ? a(_e) : R.isValidElement(a) ? R.cloneElement(a, _e) : function(ae) {
        let {closeToast: $, theme: U, ariaLabel: V="close"} = ae;
        return C.createElement("button", {
            className: `Toastify__close-button Toastify__close-button--${U}`,
            type: "button",
            onClick: F => {
                F.stopPropagation(),
                $(F)
            }
            ,
            "aria-label": V
        }, C.createElement("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 14 16"
        }, C.createElement("path", {
            fillRule: "evenodd",
            d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        })))
    }(_e)),
    C.createElement(E, {
        isIn: H,
        done: B,
        position: g,
        preventExitTransition: r,
        nodeRef: n,
        playToast: s
    }, C.createElement("div", {
        id: D,
        onClick: f,
        "data-in": H,
        className: De,
        ...i,
        style: y,
        ref: n
    }, C.createElement("div", {
        ...H && {
            role: N
        },
        className: z(O) ? O({
            type: l
        }) : Te("Toastify__toast-body", O),
        style: b
    }, W != null && C.createElement("div", {
        className: Te("Toastify__toast-icon", {
            "Toastify--animate-icon Toastify__zoom-enter": !Q
        })
    }, W), C.createElement("div", null, o)), ve, C.createElement(Cs, {
        ...L && !ee ? {
            key: `pb-${L}`
        } : {},
        rtl: A,
        theme: Z,
        delay: u,
        isRunning: t,
        isIn: H,
        closeToast: d,
        hide: h,
        type: l,
        style: m,
        className: _,
        controlledProgress: ee,
        progress: j || 0
    })))
}
  , Ft = function(e, t) {
    return t === void 0 && (t = !1),
    {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t
    }
}
  , Ns = $t(Ft("bounce", !0));
$t(Ft("slide", !0));
$t(Ft("zoom"));
$t(Ft("flip"));
const Is = {
    position: "top-right",
    transition: Ns,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
function Hs(e) {
    let t = {
        ...Is,
        ...e
    };
    const r = e.stacked
      , [n,i] = R.useState(!0)
      , s = R.useRef(null)
      , {getToastToRender: a, isToastActive: o, count: u} = Ps(t)
      , {className: f, style: l, rtl: h, containerId: d} = t;
    function E(v) {
        const y = Te("Toastify__toast-container", `Toastify__toast-container--${v}`, {
            "Toastify__toast-container--rtl": h
        });
        return z(f) ? f({
            position: v,
            rtl: h,
            defaultClassName: y
        }) : Te(y, mt(f))
    }
    function g() {
        r && (i(!0),
        P.play())
    }
    return Rs( () => {
        if (r) {
            var v;
            const y = s.current.querySelectorAll('[data-in="true"]')
              , O = 12
              , b = (v = t.position) == null ? void 0 : v.includes("top");
            let _ = 0
              , m = 0;
            Array.from(y).reverse().forEach( (L, N) => {
                const j = L;
                j.classList.add("Toastify__toast--stacked"),
                N > 0 && (j.dataset.collapsed = `${n}`),
                j.dataset.pos || (j.dataset.pos = b ? "top" : "bot");
                const A = _ * (n ? .2 : 1) + (n ? 0 : O * N);
                j.style.setProperty("--y", `${b ? A : -1 * A}px`),
                j.style.setProperty("--g", `${O}`),
                j.style.setProperty("--s", "" + (1 - (n ? m : 0))),
                _ += j.offsetHeight,
                m += .025
            }
            )
        }
    }
    , [n, u, r]),
    C.createElement("div", {
        ref: s,
        className: "Toastify",
        id: d,
        onMouseEnter: () => {
            r && (i(!1),
            P.pause())
        }
        ,
        onMouseLeave: g
    }, a( (v, y) => {
        const O = y.length ? {
            ...l
        } : {
            ...l,
            pointerEvents: "none"
        };
        return C.createElement("div", {
            className: E(v),
            style: O,
            key: `container-${v}`
        }, y.map(b => {
            let {content: _, props: m} = b;
            return C.createElement(Ls, {
                ...m,
                stacked: r,
                collapseAll: g,
                isIn: o(m.toastId, m.containerId),
                style: m.style,
                key: `toast-${m.key}`
            }, _)
        }
        ))
    }
    ))
}
class Bs {
    constructor() {
        w(this, "particlesCount", 0);
        w(this, "profile", null);
        w(this, "dao", null);
        w(this, "touchTime", 0);
        w(this, "lastTapTime", 0);
        w(this, "energy", 0);
        w(this, "maxEnergy", 0);
        w(this, "energyPerSecond", 1);
        w(this, "tapsPerSecond", 5);
        w(this, "levels", [0]);
        w(this, "startedAt");
        w(this, "startDelay", 0);
        w(this, "isDaoOwner", !1);
        w(this, "isMegaFarmNow", !1);
        w(this, "tutorialScreen", !1);
        w(this, "daoProfit", 0);
        w(this, "utcMegaFarmTime", null);
        w(this, "daoUsers", []);
        w(this, "daoUsersLastTaps", {});
        w(this, "daoUsersTouching", {});
        w(this, "isGlobalLoading", !1);
        w(this, "dao_id", 0);
        w(this, "daoUser1Online", !1);
        w(this, "daoUser2Online", !1);
        w(this, "daoUser3Online", !1);
        w(this, "daoUser4Online", !1);
        w(this, "syndicate", null);
        w(this, "syndicate_voting", null);
        w(this, "centrifugo");
        ls(this),
        this.addParticles = this.addParticles.bind(this)
    }
    setEnergy(t) {
        this.energy = t,
        this.profile && (this.profile.energy = t)
    }
    setCoins(t) {
        t <= this.particlesCount || (this.particlesCount = t,
        this.profile && (this.profile.coins = t))
    }
    setGlobalLoading(t) {
        this.isGlobalLoading = t
    }
    get megaFarmTime() {
        var r, n;
        if (!this.utcMegaFarmTime)
            return null;
        let t = new Date;
        return t.setHours(parseInt(((r = this.utcMegaFarmTime.split(":")) == null ? void 0 : r[0]) || "0") || 0),
        t.setMinutes(parseInt(((n = this.utcMegaFarmTime.split(":")) == null ? void 0 : n[1]) || "0") || 0),
        t.setSeconds(0),
        t = new Date(t.getTime() - new Date().getTimezoneOffset() * 60 * 1e3),
        `${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}`
    }
    get displayMegaFarmTime() {
        return this.megaFarmTime || Kt.t("not set")
    }
    get currentLevel() {
        const t = this.isDaoAvailable ? this.daoProfit : this.particlesCount;
        for (let r = 0; r < this.levels.length; r++)
            if (t < this.levels[r])
                return r + 1;
        return this.levels.length
    }
    start() {
        this.startedAt = new Date
    }
    stop() {
        this.startedAt = void 0
    }
    get isStarted() {
        var t;
        return this != null && this.startedAt ? (((t = this == null ? void 0 : this.startedAt) == null ? void 0 : t.getTime()) || 0) + this.startDelay < new Date().getTime() : !1
    }
    get loadingDelay() {
        var t;
        return this.startDelay - Math.trunc(new Date().getTime() - (((t = this == null ? void 0 : this.startedAt) == null ? void 0 : t.getTime()) || 0))
    }
    get nextLevel() {
        return this.currentLevel + 1
    }
    setProfile(t) {
        this.profile = t,
        this.dao_id = t.dao_id || 0,
        this.particlesCount = t.coins || 0,
        this.energy = t.energy || 0,
        this.maxEnergy = t.max_energy || 0,
        this.levels = t.level_caps
    }
    setDao(t) {
        t.id === this.dao_id && (this.setDaoProfit(t.profit, !0),
        this.dao_id = t.id,
        this.setDaoUsers(t.users),
        this.setDaoResponse(t),
        this.utcMegaFarmTime = t.mega_farm_time,
        this.updateIsMegaFarmNow())
    }
    setDaoProfit(t, r=!1) {
        !r && t <= this.daoProfit || (this.daoProfit = t,
        this.dao && (this.dao.profit = t))
    }
    addDaoProfit(t) {
        this.daoProfit += t
    }
    setDaoResponse(t) {
        this.dao = t
    }
    setDaoUsers(t) {
        var i;
        const r = t.slice().sort( (s, a) => a.id - s.id);
        for (let s = 0; s < r.length; s++)
            r[s].id === ((i = this == null ? void 0 : this.profile) == null ? void 0 : i.id) && r[s].is_owner && (this.isDaoOwner = !0);
        const n = r.filter(s => {
            var a;
            return s.id !== ((a = this == null ? void 0 : this.profile) == null ? void 0 : a.id)
        }
        );
        this.daoUsers = n,
        this._initSetUserOnline()
    }
    addParticles(t) {
        this.particlesCount += t
    }
    setCentrifugo(t) {
        this.centrifugo = t
    }
    tap() {
        var i, s;
        const n = new Date().getTime() / 1e3;
        return this.energy > 0 ? ((i = this.profile) != null && i.dao_id || this.addParticles(250),
        (s = this.centrifugo) == null || s.publish(this._centrifugeDAOChannel, {}),
        this.energy = Math.max(0, this.energy - 5),
        this.profile && (this.profile.last_energy_change = n,
        this.profile.energy = this.energy),
        !0) : !1
    }
    isRestoringAllowed() {
        return new Date().getTime() - new Date(this.lastTapTime).getTime() >= 5e3
    }
    setLastTapTime() {
        this.lastTapTime = new Date().getTime()
    }
    calculateEnergy() {
        if (!this.profile)
            return;
        const r = new Date().getTime()
          , n = this.profile.energy
          , i = this.profile.last_energy_change * 1e3
          , s = i + 3e4
          , o = (r - new Date(s).getTime()) / (1e3 / this.energyPerSecond)
          , u = Math.min(this.maxEnergy, Math.floor(this.energy + Math.max(0, o)));
        console.log("newEnergy", u),
        n !== u && s <= r && (this.profile.energy = u,
        this.energy = u,
        this.profile.last_energy_change = i / 1e3 + o)
    }
    async refreshDao() {
        return await Cr.getDaoDaoUsers().then(t => {
            this.setDao(t);
            const r = [];
            return t.syndicate_id && r.push(this.fetchDaoSyndicate()),
            t.syndicate_voting && r.push(this.fetchActiveSyndicateVoting()),
            Promise.all(r)
        }
        )
    }
    async updateProfile() {
        await Promise.all([Mr.getUserProfile().then(t => {
            this.setProfile(t),
            (t == null ? void 0 : t.coins) <= 1e5 && (localStorage.setItem("tutorialScreen", "true"),
            this.setTutorialScreen(!0)),
            this.refreshDao()
        }
        )])
    }
    get nextLevelScore() {
        return this.levels[this.currentLevel - 1]
    }
    get prevLevelScore() {
        return this.currentLevel === 1 ? 1e5 : this.levels[this.currentLevel - 2]
    }
    get _centrifugeDAOChannel() {
        var t, r;
        return (t = this == null ? void 0 : this.profile) != null && t.dao_id ? `dao:${String((r = this == null ? void 0 : this.profile) == null ? void 0 : r.dao_id)}` : "dao:0"
    }
    get _centrifugeDAOChannelSubscription() {
        if (!this.centrifugo || !this._centrifugeDAOChannel)
            return null;
        let t = this.centrifugo.getSubscription(this._centrifugeDAOChannel) || null;
        return t === null && (t = this.centrifugo.newSubscription(this._centrifugeDAOChannel)),
        t
    }
    _setUserOnline(t, r=!0) {
        this.daoUsers.forEach( (n, i) => {
            String(n.id) === t && (n.is_online = r,
            i === 0 && (this.daoUser1Online = r),
            i === 1 && (this.daoUser2Online = r),
            i === 2 && (this.daoUser3Online = r),
            i === 3 && (this.daoUser4Online = r))
        }
        )
    }
    _initSetUserOnline() {
        const t = this.daoUsers.length;
        this.daoUsers.forEach( (r, n) => {
            n === 0 && (this.daoUser1Online = r.is_online),
            n === 1 && (this.daoUser2Online = r.is_online),
            n === 2 && (this.daoUser3Online = r.is_online),
            n === 3 && (this.daoUser4Online = r.is_online)
        }
        );
        for (let r = t; r < 5; r++)
            r === 0 && (this.daoUser1Online = !1),
            r === 1 && (this.daoUser2Online = !1),
            r === 2 && (this.daoUser3Online = !1),
            r === 3 && (this.daoUser4Online = !1)
    }
    subscribeCentrifugeDAOChannelEvents(t, r=!1) {
        return t.removeAllListeners(),
        t.on("publication", n => {
            var i, s, a, o, u, f, l, h, d, E, g, v, y, O, b, _, m, L, N, j, A, D, B, H, Q, de, Z, he, De, W, ee, _e, ve, ae, $, U, V, F, oe, Ae, ft, pn, gn, bn;
            if (!n.info) {
                if (((i = n == null ? void 0 : n.data) == null ? void 0 : i.type) === "taskClaimed") {
                    this.addParticles(((s = n == null ? void 0 : n.data) == null ? void 0 : s.a) || 0),
                    this.refreshDao();
                    return
                }
                if (((a = n == null ? void 0 : n.data) == null ? void 0 : a.type) === "daoUpdated") {
                    this.refreshDao();
                    return
                }
                if (((o = n == null ? void 0 : n.data) == null ? void 0 : o.type) === "userLeft") {
                    P.info(Se("{{name}} left our DAO", {
                        name: (u = n == null ? void 0 : n.data) == null ? void 0 : u.full_name
                    })),
                    this.refreshDao();
                    return
                }
                if (((f = n == null ? void 0 : n.data) == null ? void 0 : f.type) === "userJoined") {
                    P.info(Se("{{name}} joined our DAO", {
                        name: (l = n == null ? void 0 : n.data) == null ? void 0 : l.full_name
                    })),
                    this.refreshDao();
                    return
                }
                if (((h = n == null ? void 0 : n.data) == null ? void 0 : h.type) === "syndicateVote") {
                    const xe = (E = (d = n == null ? void 0 : n.data) == null ? void 0 : d.body) == null ? void 0 : E.vote;
                    let Gt = null;
                    ((v = (g = n == null ? void 0 : n.data) == null ? void 0 : g.body) == null ? void 0 : v.type) === "join" ? Gt = xe ? Se("{{name}} voted for joining {{syndicate_name}}", {
                        name: (O = (y = n == null ? void 0 : n.data) == null ? void 0 : y.body) == null ? void 0 : O.full_name,
                        syndicate_name: (_ = (b = n == null ? void 0 : n.data) == null ? void 0 : b.body) == null ? void 0 : _.syndicate_name
                    }) : Se("{{name}} voted for not joining {{syndicate_name}}", {
                        name: (L = (m = n == null ? void 0 : n.data) == null ? void 0 : m.body) == null ? void 0 : L.full_name,
                        syndicate_name: (j = (N = n == null ? void 0 : n.data) == null ? void 0 : N.body) == null ? void 0 : j.syndicate_name
                    }) : ((D = (A = n == null ? void 0 : n.data) == null ? void 0 : A.body) == null ? void 0 : D.type) === "leave" && (Gt = xe ? Se("{{name}} voted for leaving {{syndicate_name}}", {
                        name: (H = (B = n == null ? void 0 : n.data) == null ? void 0 : B.body) == null ? void 0 : H.full_name,
                        syndicate_name: (de = (Q = n == null ? void 0 : n.data) == null ? void 0 : Q.body) == null ? void 0 : de.syndicate_name
                    }) : Se("{{name}} voted for not leaving {{syndicate_name}}", {
                        name: (he = (Z = n == null ? void 0 : n.data) == null ? void 0 : Z.body) == null ? void 0 : he.full_name,
                        syndicate_name: (W = (De = n == null ? void 0 : n.data) == null ? void 0 : De.body) == null ? void 0 : W.syndicate_name
                    })),
                    P.info(Gt),
                    this.refreshDao();
                    return
                }
                if (((ee = n == null ? void 0 : n.data) == null ? void 0 : ee.type) === "syndicateVotingStart") {
                    let xe = null;
                    xe = ((ve = (_e = n == null ? void 0 : n.data) == null ? void 0 : _e.body) == null ? void 0 : ve.type) === "join" ? Se("{{name}} started voting for joining  {{syndicate_name}}", {
                        name: ($ = (ae = n == null ? void 0 : n.data) == null ? void 0 : ae.body) == null ? void 0 : $.full_name,
                        syndicate_name: (V = (U = n == null ? void 0 : n.data) == null ? void 0 : U.body) == null ? void 0 : V.syndicate_name
                    }) : Se("{{name}} started voting for leaving  {{syndicate_name}}", {
                        name: (oe = (F = n == null ? void 0 : n.data) == null ? void 0 : F.body) == null ? void 0 : oe.full_name,
                        syndicate_name: (ft = (Ae = n == null ? void 0 : n.data) == null ? void 0 : Ae.body) == null ? void 0 : ft.syndicate_name
                    }),
                    P.info(xe),
                    this.refreshDao();
                    return
                }
                return
            }
            this._setUserOnline(n.info.user),
            this.daoUsersLastTaps = {
                ...this.daoUsersLastTaps || {},
                [n.info.user]: performance.now()
            },
            this.addDaoProfit(((pn = n == null ? void 0 : n.data) == null ? void 0 : pn.a) || 0),
            (gn = this.profile) != null && gn.id && String(this.profile.id) === n.info.user && this.addParticles(((bn = n == null ? void 0 : n.data) == null ? void 0 : bn.a) || 0)
        }
        ),
        r || (t.on("join", n => {
            console.debug("DAO centrifugo ws join event"),
            this._setUserOnline(n.info.user)
        }
        ),
        t.on("leave", n => {
            console.debug("dao ws leave event"),
            this._setUserOnline(n.info.user, !1)
        }
        )),
        t
    }
    disconnectCentrifugeDAOChannel() {
        if (!this.centrifugo || !this._centrifugeDAOChannel)
            return null;
        this.centrifugo.removeSubscription(this._centrifugeDAOChannelSubscription)
    }
    updateIsMegaFarmNow() {
        if (!this.todayMegaFarmDatetime)
            return !1;
        const t = new Date().getTime() - this.todayMegaFarmDatetime.getTime()
          , r = Math.floor(t / 1e3);
        return 0 < r && r <= 60 * 10 ? (this.isMegaFarmNow = !0,
        !0) : (this.isMegaFarmNow = !1,
        !1)
    }
    updateDaoUsersTouching() {
        const t = {
            ...this.daoUsersTouching
        };
        for (const r of this.daoUsers)
            t[r.id] = this.daoUsersLastTaps[r.id] >= performance.now() - 1e3 || !1;
        this.daoUsersTouching = t
    }
    getDisplayMultiplier(t) {
        let r = 1;
        for (const n of this.daoUsers)
            this.daoUsersTouching[n.id] && r < 3 && (r += 1);
        return t && (r *= 2),
        r
    }
    get timeToMegaFarm() {
        if (!this.nextMegaFarmDatetime)
            return Kt.t("not set");
        const t = this.nextMegaFarmDatetime.getTime() - new Date().getTime()
          , r = Math.floor(t / 1e3)
          , n = Math.floor(r / 60)
          , i = n % 60
          , s = Math.floor(n / 60);
        return Kt.t("time", {
            hours: s,
            minutes: i
        })
    }
    get todayMegaFarmDatetime() {
        if (!this.megaFarmTime)
            return;
        const t = this.megaFarmTime.split(":")
          , r = parseInt(t[0])
          , n = parseInt(t[1])
          , i = new Date;
        return i.setSeconds(0),
        i.setHours(r),
        i.setMinutes(n),
        i
    }
    get nextMegaFarmDatetime() {
        if (!this.utcMegaFarmTime || !this.todayMegaFarmDatetime)
            return;
        const t = new Date;
        return t < this.todayMegaFarmDatetime ? this.todayMegaFarmDatetime : (t.setDate(t.getDate() + 1),
        t.setSeconds(0),
        t.setHours(this.todayMegaFarmDatetime.getHours()),
        t.setMinutes(this.todayMegaFarmDatetime.getMinutes()),
        t)
    }
    updateTouchTime(t) {
        this.touchTime = t
    }
    setTutorialScreen(t) {
        this.tutorialScreen = t
    }
    fetchDaoSyndicate() {}
    fetchActiveSyndicateVoting() {}
    get isDaoAvailable() {
        return this.particlesCount >= Us || this.dao_id
    }
}
const Us = 105e3
  , ks = new Bs
  , Ws = Object.freeze(Object.defineProperty({
    __proto__: null,
    state: ks
}, Symbol.toStringTag, {
    value: "Module"
}));
export {P as B, Hs as Q, Oe as R, ls as a, Ws as b, Ks as c, zs as g, qs as m, Gs as r, ks as s};
