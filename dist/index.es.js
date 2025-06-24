import * as $ from "react";
import It, { forwardRef as zt, createElement as _t, useState as F, useEffect as je, useRef as it, createContext as fr, useContext as Xt } from "react";
var Tt = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function hr() {
  if (Mt) return rt;
  Mt = 1;
  var e = It, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, s, g) {
    var i, p = {}, R = null, _ = null;
    g !== void 0 && (R = "" + g), s.key !== void 0 && (R = "" + s.key), s.ref !== void 0 && (_ = s.ref);
    for (i in s) n.call(s, i) && !c.hasOwnProperty(i) && (p[i] = s[i]);
    if (d && d.defaultProps) for (i in s = d.defaultProps, s) p[i] === void 0 && (p[i] = s[i]);
    return { $$typeof: r, type: d, key: R, ref: _, props: p, _owner: l.current };
  }
  return rt.Fragment = o, rt.jsx = f, rt.jsxs = f, rt;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function pr() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = It, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), A = Symbol.iterator, T = "@@iterator";
    function W(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = A && t[A] || t[T];
      return typeof a == "function" ? a : null;
    }
    var z = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(t) {
      {
        for (var a = arguments.length, h = new Array(a > 1 ? a - 1 : 0), m = 1; m < a; m++)
          h[m - 1] = arguments[m];
        fe("error", t, h);
      }
    }
    function fe(t, a, h) {
      {
        var m = z.ReactDebugCurrentFrame, P = m.getStackAddendum();
        P !== "" && (a += "%s", h = h.concat([P]));
        var I = h.map(function(E) {
          return String(E);
        });
        I.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, I);
      }
    }
    var J = !1, H = !1, Z = !1, X = !1, w = !1, K;
    K = Symbol.for("react.module.reference");
    function $e(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === c || w || t === l || t === g || t === i || X || t === _ || J || H || Z || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === p || t.$$typeof === f || t.$$typeof === d || t.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === K || t.getModuleId !== void 0));
    }
    function Ze(t, a, h) {
      var m = t.displayName;
      if (m)
        return m;
      var P = a.displayName || a.name || "";
      return P !== "" ? h + "(" + P + ")" : h;
    }
    function xe(t) {
      return t.displayName || "Context";
    }
    function le(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case g:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            var a = t;
            return xe(a) + ".Consumer";
          case f:
            var h = t;
            return xe(h._context) + ".Provider";
          case s:
            return Ze(t, t.render, "ForwardRef");
          case p:
            var m = t.displayName || null;
            return m !== null ? m : le(t.type) || "Memo";
          case R: {
            var P = t, I = P._payload, E = P._init;
            try {
              return le(E(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, re = 0, oe, ne, x, _e, ye, we, Y;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function q() {
      {
        if (re === 0) {
          oe = console.log, ne = console.info, x = console.warn, _e = console.error, ye = console.group, we = console.groupCollapsed, Y = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        re++;
      }
    }
    function Q() {
      {
        if (re--, re === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, t, {
              value: oe
            }),
            info: se({}, t, {
              value: ne
            }),
            warn: se({}, t, {
              value: x
            }),
            error: se({}, t, {
              value: _e
            }),
            group: se({}, t, {
              value: ye
            }),
            groupCollapsed: se({}, t, {
              value: we
            }),
            groupEnd: se({}, t, {
              value: Y
            })
          });
        }
        re < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = z.ReactCurrentDispatcher, O;
    function ke(t, a, h) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (P) {
            var m = P.stack.trim().match(/\n( *(at )?)/);
            O = m && m[1] || "";
          }
        return `
` + O + t;
      }
    }
    var ge = !1, pe;
    {
      var k = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new k();
    }
    function Re(t, a) {
      if (!t || ge)
        return "";
      {
        var h = pe.get(t);
        if (h !== void 0)
          return h;
      }
      var m;
      ge = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = he.current, he.current = null, q();
      try {
        if (a) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (ie) {
              m = ie;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (ie) {
              m = ie;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            m = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && m && typeof ie.stack == "string") {
          for (var j = ie.stack.split(`
`), te = m.stack.split(`
`), G = j.length - 1, B = te.length - 1; G >= 1 && B >= 0 && j[G] !== te[B]; )
            B--;
          for (; G >= 1 && B >= 0; G--, B--)
            if (j[G] !== te[B]) {
              if (G !== 1 || B !== 1)
                do
                  if (G--, B--, B < 0 || j[G] !== te[B]) {
                    var ue = `
` + j[G].replace(" at new ", " at ");
                    return t.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", t.displayName)), typeof t == "function" && pe.set(t, ue), ue;
                  }
                while (G >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ge = !1, he.current = I, Q(), Error.prepareStackTrace = P;
      }
      var Ue = t ? t.displayName || t.name : "", Me = Ue ? ke(Ue) : "";
      return typeof t == "function" && pe.set(t, Me), Me;
    }
    function bt(t, a, h) {
      return Re(t, !1);
    }
    function at(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function De(t, a, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Re(t, at(t));
      if (typeof t == "string")
        return ke(t);
      switch (t) {
        case g:
          return ke("Suspense");
        case i:
          return ke("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            return bt(t.render);
          case p:
            return De(t.type, a, h);
          case R: {
            var m = t, P = m._payload, I = m._init;
            try {
              return De(I(P), a, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, lt = {}, ct = z.ReactDebugCurrentFrame;
    function Te(t) {
      if (t) {
        var a = t._owner, h = De(t.type, t._source, a ? a.type : null);
        ct.setExtraStackFrame(h);
      } else
        ct.setExtraStackFrame(null);
    }
    function vt(t, a, h, m, P) {
      {
        var I = Function.call.bind(Ie);
        for (var E in t)
          if (I(t, E)) {
            var j = void 0;
            try {
              if (typeof t[E] != "function") {
                var te = Error((m || "React class") + ": " + h + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              j = t[E](a, E, m, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              j = G;
            }
            j && !(j instanceof Error) && (Te(P), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", h, E, typeof j), Te(null)), j instanceof Error && !(j.message in lt) && (lt[j.message] = !0, Te(P), M("Failed %s type: %s", h, j.message), Te(null));
          }
      }
    }
    var xt = Array.isArray;
    function Qe(t) {
      return xt(t);
    }
    function dt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, h = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function yt(t) {
      try {
        return y(t), !1;
      } catch {
        return !0;
      }
    }
    function y(t) {
      return "" + t;
    }
    function S(t) {
      if (yt(t))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(t)), y(t);
    }
    var N = z.ReactCurrentOwner, L = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, V, me;
    function ce(t) {
      if (Ie.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ce(t) {
      if (Ie.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Fe(t, a) {
      typeof t.ref == "string" && N.current;
    }
    function ut(t, a) {
      {
        var h = function() {
          V || (V = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function He(t, a) {
      {
        var h = function() {
          me || (me = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var be = function(t, a, h, m, P, I, E) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: h,
        props: E,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function ze(t, a, h, m, P) {
      {
        var I, E = {}, j = null, te = null;
        h !== void 0 && (S(h), j = "" + h), Ce(a) && (S(a.key), j = "" + a.key), ce(a) && (te = a.ref, Fe(a, P));
        for (I in a)
          Ie.call(a, I) && !L.hasOwnProperty(I) && (E[I] = a[I]);
        if (t && t.defaultProps) {
          var G = t.defaultProps;
          for (I in G)
            E[I] === void 0 && (E[I] = G[I]);
        }
        if (j || te) {
          var B = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          j && ut(E, B), te && He(E, B);
        }
        return be(t, j, te, P, m, N.current, E);
      }
    }
    var Ve = z.ReactCurrentOwner, ft = z.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var a = t._owner, h = De(t.type, t._source, a ? a.type : null);
        ft.setExtraStackFrame(h);
      } else
        ft.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function We(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function et() {
      {
        if (Ve.current) {
          var t = le(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function wt(t) {
      return "";
    }
    var ve = {};
    function Ee(t) {
      {
        var a = et();
        if (!a) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (a = `

Check the top-level render call using <` + h + ">.");
        }
        return a;
      }
    }
    function Ge(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = Ee(a);
        if (ve[h])
          return;
        ve[h] = !0;
        var m = "";
        t && t._owner && t._owner !== Ve.current && (m = " It was passed a child from " + le(t._owner.type) + "."), Pe(t), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, m), Pe(null);
      }
    }
    function Be(t, a) {
      {
        if (typeof t != "object")
          return;
        if (Qe(t))
          for (var h = 0; h < t.length; h++) {
            var m = t[h];
            We(m) && Ge(m, a);
          }
        else if (We(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var P = W(t);
          if (typeof P == "function" && P !== t.entries)
            for (var I = P.call(t), E; !(E = I.next()).done; )
              We(E.value) && Ge(E.value, a);
        }
      }
    }
    function ht(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var h;
        if (typeof a == "function")
          h = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === p))
          h = a.propTypes;
        else
          return;
        if (h) {
          var m = le(a);
          vt(h, t.props, "prop", m, t);
        } else if (a.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var P = le(a);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tt(t) {
      {
        for (var a = Object.keys(t.props), h = 0; h < a.length; h++) {
          var m = a[h];
          if (m !== "children" && m !== "key") {
            Pe(t), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Pe(null);
            break;
          }
        }
        t.ref !== null && (Pe(t), M("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    var ee = {};
    function de(t, a, h, m, P, I) {
      {
        var E = $e(t);
        if (!E) {
          var j = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = wt();
          te ? j += te : j += et();
          var G;
          t === null ? G = "null" : Qe(t) ? G = "array" : t !== void 0 && t.$$typeof === r ? (G = "<" + (le(t.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : G = typeof t, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, j);
        }
        var B = ze(t, a, h, P, I);
        if (B == null)
          return B;
        if (E) {
          var ue = a.children;
          if (ue !== void 0)
            if (m)
              if (Qe(ue)) {
                for (var Ue = 0; Ue < ue.length; Ue++)
                  Be(ue[Ue], t);
                Object.freeze && Object.freeze(ue);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(ue, t);
        }
        if (Ie.call(a, "key")) {
          var Me = le(t), ie = Object.keys(a).filter(function(ur) {
            return ur !== "key";
          }), Ct = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ee[Me + Ct]) {
            var dr = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ct, Me, dr, Me), ee[Me + Ct] = !0;
          }
        }
        return t === n ? tt(B) : ht(B), B;
      }
    }
    function ae(t, a, h) {
      return de(t, a, h, !0);
    }
    function kt(t, a, h) {
      return de(t, a, h, !1);
    }
    var Rt = kt, pt = ae;
    ot.Fragment = n, ot.jsx = Rt, ot.jsxs = pt;
  }()), ot;
}
process.env.NODE_ENV === "production" ? Tt.exports = hr() : Tt.exports = pr();
var u = Tt.exports;
function $t(e, r) {
  if (typeof e == "function")
    return e(r);
  e != null && (e.current = r);
}
function mr(...e) {
  return (r) => {
    let o = !1;
    const n = e.map((l) => {
      const c = $t(l, r);
      return !o && typeof c == "function" && (o = !0), c;
    });
    if (o)
      return () => {
        for (let l = 0; l < n.length; l++) {
          const c = n[l];
          typeof c == "function" ? c() : $t(e[l], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  const r = /* @__PURE__ */ vr(e), o = $.forwardRef((n, l) => {
    const { children: c, ...f } = n, d = $.Children.toArray(c), s = d.find(yr);
    if (s) {
      const g = s.props.children, i = d.map((p) => p === s ? $.Children.count(g) > 1 ? $.Children.only(null) : $.isValidElement(g) ? g.props.children : null : p);
      return /* @__PURE__ */ u.jsx(r, { ...f, ref: l, children: $.isValidElement(g) ? $.cloneElement(g, void 0, i) : null });
    }
    return /* @__PURE__ */ u.jsx(r, { ...f, ref: l, children: c });
  });
  return o.displayName = `${e}.Slot`, o;
}
var br = /* @__PURE__ */ gr("Slot");
// @__NO_SIDE_EFFECTS__
function vr(e) {
  const r = $.forwardRef((o, n) => {
    const { children: l, ...c } = o;
    if ($.isValidElement(l)) {
      const f = kr(l), d = wr(c, l.props);
      return l.type !== $.Fragment && (d.ref = n ? mr(n, f) : f), $.cloneElement(l, d);
    }
    return $.Children.count(l) > 1 ? $.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var xr = Symbol("radix.slottable");
function yr(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xr;
}
function wr(e, r) {
  const o = { ...r };
  for (const n in r) {
    const l = e[n], c = r[n];
    /^on[A-Z]/.test(n) ? l && c ? o[n] = (...d) => {
      const s = c(...d);
      return l(...d), s;
    } : l && (o[n] = l) : n === "style" ? o[n] = { ...l, ...c } : n === "className" && (o[n] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function kr(e) {
  var n, l;
  let r = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, o = r && "isReactWarning" in r && r.isReactWarning;
  return o ? e.ref : (r = (l = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : l.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
function qt(e) {
  var r, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (r = 0; r < l; r++) e[r] && (o = qt(e[r])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Kt() {
  for (var e, r, o = 0, n = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = qt(e)) && (n && (n += " "), n += r);
  return n;
}
const Dt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ft = Kt, Rr = (e, r) => (o) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null) return Ft(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: l, defaultVariants: c } = r, f = Object.keys(l).map((g) => {
    const i = o == null ? void 0 : o[g], p = c == null ? void 0 : c[g];
    if (i === null) return null;
    const R = Dt(i) || Dt(p);
    return l[g][R];
  }), d = o && Object.entries(o).reduce((g, i) => {
    let [p, R] = i;
    return R === void 0 || (g[p] = R), g;
  }, {}), s = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((g, i) => {
    let { class: p, className: R, ..._ } = i;
    return Object.entries(_).every((A) => {
      let [T, W] = A;
      return Array.isArray(W) ? W.includes({
        ...c,
        ...d
      }[T]) : {
        ...c,
        ...d
      }[T] === W;
    }) ? [
      ...g,
      p,
      R
    ] : g;
  }, []);
  return Ft(e, f, s, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Ot = "-", Cr = (e) => {
  const r = Sr(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Ot);
      return d[0] === "" && d.length !== 1 && d.shift(), Jt(d, r) || Er(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const s = o[f] || [];
      return d && n[f] ? [...s, ...n[f]] : s;
    }
  };
}, Jt = (e, r) => {
  var f;
  if (e.length === 0)
    return r.classGroupId;
  const o = e[0], n = r.nextPart.get(o), l = n ? Jt(e.slice(1), n) : void 0;
  if (l)
    return l;
  if (r.validators.length === 0)
    return;
  const c = e.join(Ot);
  return (f = r.validators.find(({
    validator: d
  }) => d(c))) == null ? void 0 : f.classGroupId;
}, Ht = /^\[(.+)\]$/, Er = (e) => {
  if (Ht.test(e)) {
    const r = Ht.exec(e)[1], o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Sr = (e) => {
  const {
    theme: r,
    classGroups: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const l in o)
    Pt(o[l], n, l, r);
  return n;
}, Pt = (e, r, o, n) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const c = l === "" ? r : Vt(r, l);
      c.classGroupId = o;
      return;
    }
    if (typeof l == "function") {
      if (jr(l)) {
        Pt(l(n), r, o, n);
        return;
      }
      r.validators.push({
        validator: l,
        classGroupId: o
      });
      return;
    }
    Object.entries(l).forEach(([c, f]) => {
      Pt(f, Vt(r, c), o, n);
    });
  });
}, Vt = (e, r) => {
  let o = e;
  return r.split(Ot).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, jr = (e) => e.isThemeGetter, _r = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const l = (c, f) => {
    o.set(c, f), r++, r > e && (r = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let f = o.get(c);
      if (f !== void 0)
        return f;
      if ((f = n.get(c)) !== void 0)
        return l(c, f), f;
    },
    set(c, f) {
      o.has(c) ? o.set(c, f) : l(c, f);
    }
  };
}, At = "!", Nt = ":", Tr = Nt.length, Pr = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = e;
  let n = (l) => {
    const c = [];
    let f = 0, d = 0, s = 0, g;
    for (let A = 0; A < l.length; A++) {
      let T = l[A];
      if (f === 0 && d === 0) {
        if (T === Nt) {
          c.push(l.slice(s, A)), s = A + Tr;
          continue;
        }
        if (T === "/") {
          g = A;
          continue;
        }
      }
      T === "[" ? f++ : T === "]" ? f-- : T === "(" ? d++ : T === ")" && d--;
    }
    const i = c.length === 0 ? l : l.substring(s), p = Ar(i), R = p !== i, _ = g && g > s ? g - s : void 0;
    return {
      modifiers: c,
      hasImportantModifier: R,
      baseClassName: p,
      maybePostfixModifierPosition: _
    };
  };
  if (r) {
    const l = r + Nt, c = n;
    n = (f) => f.startsWith(l) ? c(f.substring(l.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const l = n;
    n = (c) => o({
      className: c,
      parseClassName: l
    });
  }
  return n;
}, Ar = (e) => e.endsWith(At) ? e.substring(0, e.length - 1) : e.startsWith(At) ? e.substring(1) : e, Nr = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const l = [];
    let c = [];
    return n.forEach((f) => {
      f[0] === "[" || r[f] ? (l.push(...c.sort(), f), c = []) : c.push(f);
    }), l.push(...c.sort()), l;
  };
}, Ir = (e) => ({
  cache: _r(e.cacheSize),
  parseClassName: Pr(e),
  sortModifiers: Nr(e),
  ...Cr(e)
}), zr = /\s+/, Or = (e, r) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = r, f = [], d = e.trim().split(zr);
  let s = "";
  for (let g = d.length - 1; g >= 0; g -= 1) {
    const i = d[g], {
      isExternal: p,
      modifiers: R,
      hasImportantModifier: _,
      baseClassName: A,
      maybePostfixModifierPosition: T
    } = o(i);
    if (p) {
      s = i + (s.length > 0 ? " " + s : s);
      continue;
    }
    let W = !!T, z = n(W ? A.substring(0, T) : A);
    if (!z) {
      if (!W) {
        s = i + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (z = n(A), !z) {
        s = i + (s.length > 0 ? " " + s : s);
        continue;
      }
      W = !1;
    }
    const M = c(R).join(":"), fe = _ ? M + At : M, J = fe + z;
    if (f.includes(J))
      continue;
    f.push(J);
    const H = l(z, W);
    for (let Z = 0; Z < H.length; ++Z) {
      const X = H[Z];
      f.push(fe + X);
    }
    s = i + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Wr() {
  let e = 0, r, o, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (o = Zt(r)) && (n && (n += " "), n += o);
  return n;
}
const Zt = (e) => {
  if (typeof e == "string")
    return e;
  let r, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = Zt(e[n])) && (o && (o += " "), o += r);
  return o;
};
function Mr(e, ...r) {
  let o, n, l, c = f;
  function f(s) {
    const g = r.reduce((i, p) => p(i), e());
    return o = Ir(g), n = o.cache.get, l = o.cache.set, c = d, d(s);
  }
  function d(s) {
    const g = n(s);
    if (g)
      return g;
    const i = Or(s, o);
    return l(s, i), i;
  }
  return function() {
    return c(Wr.apply(null, arguments));
  };
}
const U = (e) => {
  const r = (o) => o[e] || [];
  return r.isThemeGetter = !0, r;
}, Qt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, er = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Lr = /^\d+\/\d+$/, $r = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Hr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ye = (e) => Lr.test(e), C = (e) => !!e && !Number.isNaN(Number(e)), Ae = (e) => !!e && Number.isInteger(Number(e)), Et = (e) => e.endsWith("%") && C(e.slice(0, -1)), Se = (e) => $r.test(e), Gr = () => !0, Br = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Dr.test(e) && !Fr.test(e)
), tr = () => !1, Ur = (e) => Hr.test(e), Yr = (e) => Vr.test(e), Xr = (e) => !b(e) && !v(e), qr = (e) => qe(e, nr, tr), b = (e) => Qt.test(e), Le = (e) => qe(e, ir, Br), St = (e) => qe(e, eo, C), Gt = (e) => qe(e, rr, tr), Kr = (e) => qe(e, or, Yr), mt = (e) => qe(e, sr, Ur), v = (e) => er.test(e), nt = (e) => Ke(e, ir), Jr = (e) => Ke(e, to), Bt = (e) => Ke(e, rr), Zr = (e) => Ke(e, nr), Qr = (e) => Ke(e, or), gt = (e) => Ke(e, sr, !0), qe = (e, r, o) => {
  const n = Qt.exec(e);
  return n ? n[1] ? r(n[1]) : o(n[2]) : !1;
}, Ke = (e, r, o = !1) => {
  const n = er.exec(e);
  return n ? n[1] ? r(n[1]) : o : !1;
}, rr = (e) => e === "position" || e === "percentage", or = (e) => e === "image" || e === "url", nr = (e) => e === "length" || e === "size" || e === "bg-size", ir = (e) => e === "length", eo = (e) => e === "number", to = (e) => e === "family-name", sr = (e) => e === "shadow", ro = () => {
  const e = U("color"), r = U("font"), o = U("text"), n = U("font-weight"), l = U("tracking"), c = U("leading"), f = U("breakpoint"), d = U("container"), s = U("spacing"), g = U("radius"), i = U("shadow"), p = U("inset-shadow"), R = U("text-shadow"), _ = U("drop-shadow"), A = U("blur"), T = U("perspective"), W = U("aspect"), z = U("ease"), M = U("animate"), fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], H = () => [...J(), v, b], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], X = () => ["auto", "contain", "none"], w = () => [v, b, s], K = () => [Ye, "full", "auto", ...w()], $e = () => [Ae, "none", "subgrid", v, b], Ze = () => ["auto", {
    span: ["full", Ae, v, b]
  }, Ae, v, b], xe = () => [Ae, "auto", v, b], le = () => ["auto", "min", "max", "fr", v, b], se = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], re = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], oe = () => ["auto", ...w()], ne = () => [Ye, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], x = () => [e, v, b], _e = () => [...J(), Bt, Gt, {
    position: [v, b]
  }], ye = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], we = () => ["auto", "cover", "contain", Zr, qr, {
    size: [v, b]
  }], Y = () => [Et, nt, Le], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    v,
    b
  ], q = () => ["", C, nt, Le], Q = () => ["solid", "dashed", "dotted", "double"], he = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [C, Et, Bt, Gt], ke = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    v,
    b
  ], ge = () => ["none", C, v, b], pe = () => ["none", C, v, b], k = () => [C, v, b], Re = () => [Ye, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Se],
      breakpoint: [Se],
      color: [Gr],
      container: [Se],
      "drop-shadow": [Se],
      ease: ["in", "out", "in-out"],
      font: [Xr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Se],
      shadow: [Se],
      spacing: ["px", C],
      text: [Se],
      "text-shadow": [Se],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ye, b, v, W]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [C, b, v, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: H()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: K()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": K()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": K()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: K()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: K()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: K()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: K()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: K()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: K()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ae, "auto", v, b]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ye, "full", "auto", d, ...w()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [C, Ye, "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", C, v, b]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", C, v, b]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ae, "first", "last", "none", v, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $e()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Ze()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": xe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": xe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": $e()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Ze()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": xe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": xe()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": le()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": le()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...se(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...re(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...re()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...se()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...re(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...re(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": se()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...re(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...re()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: oe()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: oe()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: oe()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: oe()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: oe()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: oe()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: oe()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: oe()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: oe()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": w()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ne()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...ne()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ne()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...ne()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ne()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ne()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ne()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, nt, Le]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, v, St]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Et, b]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jr, b, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, v, b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [C, "none", v, St]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", v, b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: x()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: x()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [C, "from-font", "auto", v, Le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: x()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [C, "auto", v, b]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", v, b]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: _e()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ye()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: we()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ae, v, b],
          radial: ["", v, b],
          conic: [Ae, v, b]
        }, Qr, Kr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: x()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: x()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: q()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": q()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": q()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": q()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": q()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": q()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: x()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": x()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": x()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": x()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": x()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": x()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": x()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": x()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": x()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: x()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [C, v, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", C, nt, Le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: x()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          i,
          gt,
          mt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: x()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, gt, mt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": x()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: q()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: x()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [C, Le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": x()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": x()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", R, gt, mt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": x()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C, v, b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...he(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": he()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [C]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": O()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": x()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": x()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": x()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": x()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": x()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": x()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": x()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": x()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": x()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": x()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": x()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": x()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": x()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": x()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, b]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": x()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": x()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": J()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [C]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": O()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": x()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": x()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: _e()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ye()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: we()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", v, b]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          b
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ke()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [C, v, b]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [C, v, b]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          gt,
          mt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": x()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", C, v, b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [C, v, b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", C, v, b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C, v, b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", C, v, b]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          b
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ke()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [C, v, b]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [C, v, b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", C, v, b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [C, v, b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", C, v, b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C, v, b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C, v, b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", C, v, b]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, b]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [C, "initial", v, b]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, v, b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [C, v, b]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", M, v, b]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [T, v, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": H()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ge()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ge()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ge()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ge()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: pe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": pe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": pe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": pe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: k()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": k()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": k()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: H()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: x()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: x()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, b]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", v, b]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...x()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [C, nt, Le, St]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...x()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, oo = /* @__PURE__ */ Mr(ro);
function Ne(...e) {
  return oo(Kt(e));
}
const no = Rr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), st = $.forwardRef(
  ({ className: e, variant: r, size: o, asChild: n = !1, ...l }, c) => {
    const f = n ? br : "button";
    return /* @__PURE__ */ u.jsx(
      f,
      {
        "data-slot": "button",
        className: Ne(no({ variant: r, size: o, className: e })),
        ref: c,
        ...l
      }
    );
  }
);
st.displayName = "Button";
const ar = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: o,
    "data-slot": "card",
    className: Ne(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
      e
    ),
    ...r
  }
));
ar.displayName = "Card";
const io = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: o,
    "data-slot": "card-header",
    className: Ne(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      e
    ),
    ...r
  }
));
io.displayName = "CardHeader";
const so = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "h4",
  {
    ref: o,
    "data-slot": "card-title",
    className: Ne("leading-none", e),
    ...r
  }
));
so.displayName = "CardTitle";
const ao = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: o,
    "data-slot": "card-description",
    className: Ne("text-muted-foreground", e),
    ...r
  }
));
ao.displayName = "CardDescription";
const lo = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: o,
    "data-slot": "card-action",
    className: Ne(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      e
    ),
    ...r
  }
));
lo.displayName = "CardAction";
const co = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: o,
    "data-slot": "card-content",
    className: Ne("px-6 [&:last-child]:pb-6", e),
    ...r
  }
));
co.displayName = "CardContent";
const uo = $.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: o,
    "data-slot": "card-footer",
    className: Ne("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
    ...r
  }
));
uo.displayName = "CardFooter";
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ho = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Ut = (e) => {
  const r = ho(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, lr = (...e) => e.filter((r, o, n) => !!r && r.trim() !== "" && n.indexOf(r) === o).join(" ").trim(), po = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = zt(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: l = "",
    children: c,
    iconNode: f,
    ...d
  }, s) => _t(
    "svg",
    {
      ref: s,
      ...mo,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(r) : o,
      className: lr("lucide", l),
      ...!c && !po(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...f.map(([g, i]) => _t(g, i)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = (e, r) => {
  const o = zt(
    ({ className: n, ...l }, c) => _t(go, {
      ref: c,
      iconNode: r,
      className: lr(
        `lucide-${fo(Ut(e))}`,
        `lucide-${e}`,
        n
      ),
      ...l
    })
  );
  return o.displayName = Ut(e), o;
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], vo = Je("chevron-left", bo);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], yo = Je("chevron-right", xo);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], ko = Je("monitor", wo);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], Co = Je("play", Ro);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], So = Je("smartphone", Eo);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], _o = Je("x", jo), To = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==", cr = zt(
  (e, r) => {
    const [o, n] = F(!1), l = () => {
      n(!0);
    };
    je(() => {
      n(!1);
    }, [e.src]);
    const { src: c, alt: f, style: d, className: s, ...g } = e;
    return !c || c.trim() === "" ? /* @__PURE__ */ u.jsx(
      "div",
      {
        className: `inline-block bg-gray-100 text-center align-middle ${s ?? ""}`,
        style: d,
        children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center w-full h-full min-h-[200px]", children: /* @__PURE__ */ u.jsx("div", { className: "text-gray-400 text-sm", children: "Зураг байхгүй" }) })
      }
    ) : o ? /* @__PURE__ */ u.jsx(
      "div",
      {
        className: `inline-block bg-gray-100 text-center align-middle ${s ?? ""}`,
        style: d,
        children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ u.jsx("img", { src: To, alt: "Error loading image", ...g, "data-original-url": c }) })
      }
    ) : /* @__PURE__ */ u.jsx(
      "img",
      {
        ref: r,
        src: c,
        alt: f,
        className: s,
        style: d,
        ...g,
        onError: l
      }
    );
  }
);
cr.displayName = "ImageWithFallback";
const jt = 768;
function Po() {
  const [e, r] = $.useState(
    void 0
  );
  return $.useEffect(() => {
    const o = window.matchMedia(`(max-width: ${jt - 1}px)`), n = () => {
      r(window.innerWidth < jt);
    };
    return o.addEventListener("change", n), r(window.innerWidth < jt), () => o.removeEventListener("change", n);
  }, []), !!e;
}
function Yt({ content: e, className: r = "" }) {
  const o = it(null), n = /<[^>]*>/.test(e), l = async (d) => {
    try {
      const s = document.createElement("textarea");
      s.value = d, s.style.position = "fixed", s.style.left = "-999999px", s.style.top = "-999999px", s.style.opacity = "0", s.style.pointerEvents = "none", s.setAttribute("readonly", ""), s.setAttribute("aria-hidden", "true"), s.setAttribute("tabindex", "-1"), document.body.appendChild(s), s.focus(), s.select(), s.setSelectionRange(0, s.value.length);
      const g = document.execCommand("copy");
      if (document.body.removeChild(s), g)
        return console.log("Clipboard: Legacy method successful"), !0;
    } catch (s) {
      console.warn("Legacy clipboard method failed:", s);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText)
        return await navigator.clipboard.writeText(d), console.log("Clipboard: Modern API successful"), !0;
    } catch (s) {
      console.warn("Modern clipboard API failed:", s);
    }
    try {
      if (window.getSelection && document.createRange) {
        const s = document.createRange(), g = window.getSelection(), i = document.createElement("div");
        i.textContent = d, i.style.position = "fixed", i.style.left = "-999999px", i.style.top = "-999999px", i.setAttribute("aria-hidden", "true"), document.body.appendChild(i), s.selectNodeContents(i), g == null || g.removeAllRanges(), g == null || g.addRange(s);
        const p = document.execCommand("copy");
        if (document.body.removeChild(i), g == null || g.removeAllRanges(), p)
          return console.log("Clipboard: Selection API successful"), !0;
      }
    } catch (s) {
      console.warn("Selection API clipboard method failed:", s);
    }
    return console.error("All clipboard methods failed"), !1;
  }, c = (d, s = !1, g = !1) => {
    const i = document.createElement("div");
    if (g ? i.innerHTML = `
        <div style="margin-bottom: 8px; font-weight: 600;">
          ${s ? "⚠️ Холбоос нээх боломжгүй" : "📋 Холбоос хуулагдлаа"}
        </div>
        <div style="font-size: 13px; word-break: break-all; background: rgba(255,255,255,0.1); padding: 6px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2);">
          ${d}
        </div>
        <div style="margin-top: 8px; font-size: 12px; opacity: 0.8;">
          ${s ? "Холбоосыг гараар хуулж ашиглана уу" : "Холбоос амжилттай хуулагдлаа"}
        </div>
      ` : i.textContent = d, i.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${s ? "#dc2626" : "#059669"};
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 50000;
      font-size: 14px;
      font-weight: 500;
      max-width: 350px;
      min-width: 280px;
      word-wrap: break-word;
      animation: slideInFromRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      user-select: text;
      line-height: 1.4;
    `, !document.querySelector("#rich-text-notification-styles")) {
      const R = document.createElement("style");
      R.id = "rich-text-notification-styles", R.textContent = `
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `, document.head.appendChild(R);
    }
    document.body.appendChild(i), i.addEventListener("click", () => {
      i.style.animation = "slideOutToRight 0.3s ease-out", setTimeout(() => {
        i.parentNode && i.parentNode.removeChild(i);
      }, 300);
    }), setTimeout(() => {
      i.parentNode && (i.style.animation = "slideOutToRight 0.3s ease-out", setTimeout(() => {
        i.parentNode && i.parentNode.removeChild(i);
      }, 300));
    }, g ? 8e3 : 5e3);
  }, f = (d) => !d.startsWith("http://") && !d.startsWith("https://") ? `https://${d}` : d;
  return je(() => {
    if (o.current && n) {
      const d = o.current, s = d.querySelectorAll("a");
      return d.querySelectorAll("img.rich-text-icon").forEach((i) => {
        i.classList.contains("rich-text-icon") || i.classList.add("rich-text-icon");
        const p = i;
        p.style.display = "inline", p.style.height = "2em", p.style.width = "auto", p.style.verticalAlign = "bottom", p.style.margin = "0 2px", p.style.maxWidth = "none", p.style.border = "none", p.style.outline = "none", p.style.objectFit = "contain", p.style.imageRendering = "auto", p.style.pointerEvents = "auto", p.alt || (p.alt = "icon");
      }), s.forEach((i) => {
        const p = i.getAttribute("href");
        if (!p) return;
        const R = f(p);
        i.hasAttribute("target") || i.setAttribute("target", "_blank"), i.hasAttribute("rel") || i.setAttribute("rel", "noopener noreferrer"), i.classList.contains("rich-text-link") || i.classList.add("rich-text-link"), i.hasAttribute("title") || i.setAttribute("title", `Шинэ табд нээх: ${R}`);
        const _ = async (H) => {
          H.preventDefault(), H.stopPropagation(), console.log("Link clicked:", R);
          let Z = !1;
          try {
            const X = window.open(R, "_blank", "noopener,noreferrer");
            X && !X.closed && typeof X.closed < "u" ? (X.focus(), Z = !0, console.log("Popup opened successfully")) : console.warn("Popup blocked for URL:", R);
          } catch (X) {
            console.error("Error opening popup:", X);
          }
          Z || (console.log("Attempting clipboard fallback..."), await l(R) ? c(R, !1, !0) : c(R, !0, !0));
        }, A = i._richTextClickHandler;
        A && i.removeEventListener("click", A), i.addEventListener("click", _), i._richTextClickHandler = _;
        const T = (H) => {
          H.stopPropagation(), i.style.transform = "scale(0.98)";
        }, W = (H) => {
          H.stopPropagation(), i.style.transform = "";
        }, z = i._richTextPointerDownHandler, M = i._richTextPointerUpHandler;
        z && i.removeEventListener("pointerdown", z), M && i.removeEventListener("pointerup", M), i.addEventListener("pointerdown", T), i.addEventListener("pointerup", W), i.addEventListener("pointerleave", W), i._richTextPointerDownHandler = T, i._richTextPointerUpHandler = W, i.style.cursor = "pointer", i.style.pointerEvents = "auto";
        const fe = (H) => {
          (H.key === "Enter" || H.key === " ") && (H.preventDefault(), H.stopPropagation(), _(H));
        }, J = i._richTextKeyHandler;
        J && i.removeEventListener("keydown", J), i.addEventListener("keydown", fe), i._richTextKeyHandler = fe, i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0");
      }), () => {
        d.querySelectorAll("a").forEach((p) => {
          const R = p._richTextClickHandler, _ = p._richTextPointerDownHandler, A = p._richTextPointerUpHandler, T = p._richTextKeyHandler;
          R && (p.removeEventListener("click", R), delete p._richTextClickHandler), _ && (p.removeEventListener("pointerdown", _), delete p._richTextPointerDownHandler), A && (p.removeEventListener("pointerup", A), p.removeEventListener("pointerleave", A), delete p._richTextPointerUpHandler), T && (p.removeEventListener("keydown", T), delete p._richTextKeyHandler);
        });
      };
    }
  }, [e, n]), e ? n ? /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: o,
      className: `rich-text-display ${r}`,
      dangerouslySetInnerHTML: { __html: e }
    }
  ) : /* @__PURE__ */ u.jsx("div", { className: `rich-text-display ${r}`, children: e.split(`
`).map((d, s) => /* @__PURE__ */ u.jsxs(It.Fragment, { children: [
    d,
    s < e.split(`
`).length - 1 && /* @__PURE__ */ u.jsx("br", {})
  ] }, s)) }) : null;
}
const Wt = fr(null), Xe = /* @__PURE__ */ new Map();
function Ao({ children: e }) {
  const [r, o] = F(!1), [n, l] = F(0), [c, f] = F([]), [d, s] = F(null), [g, i] = F(null), [p, R] = F(null), _ = (z) => {
    Array.isArray(z) ? (f(z), s(null), i(null), R(null)) : (f(z.steps), s(z.deviceInfo), i(z.name || null), R(z.description || null)), l(0), o(!0);
  }, A = () => {
    n < c.length - 1 ? l(n + 1) : W();
  }, T = () => {
    n > 0 && l(n - 1);
  }, W = () => {
    o(!1), l(0), f([]), s(null), i(null), R(null);
  };
  return /* @__PURE__ */ u.jsxs(
    Wt.Provider,
    {
      value: {
        isActive: r,
        currentStep: n,
        totalSteps: c.length,
        steps: c,
        deviceInfo: d,
        walkthroughName: g,
        walkthroughDescription: p,
        startWalkthrough: _,
        nextStep: A,
        prevStep: T,
        endWalkthrough: W
      },
      children: [
        e,
        r && /* @__PURE__ */ u.jsx(No, {})
      ]
    }
  );
}
function No() {
  const e = Xt(Wt), [r, o] = F(!1), [n, l] = F(0), [c, f] = F(1), [d, s] = F(!1), [g, i] = F(!1), [p, R] = F(0), [_, A] = F(null), [T, W] = F(!1), [z, M] = F({ width: 0, height: 0 }), [fe, J] = F(0), [H, Z] = F(0), [X, w] = F({}), [K, $e] = F(null), [Ze, xe] = F(/* @__PURE__ */ new Map()), [le, se] = F("unknown"), [re, oe] = F(!1), ne = it(null), x = it(null), _e = it(null), ye = it(null), we = Po();
  if (!e) return null;
  const { currentStep: Y, totalSteps: D, steps: q, deviceInfo: Q, walkthroughName: he, walkthroughDescription: O, nextStep: ke, prevStep: ge, endWalkthrough: pe } = e, k = q[n];
  je(() => {
    const y = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    oe(y);
  }, []);
  const Re = () => {
    var y;
    return he != null && he.trim() ? he : (y = Q == null ? void 0 : Q.deviceName) != null && y.trim() ? Q.deviceName : "Interactive Walkthrough";
  }, bt = () => {
    var y;
    return O != null && O.trim() ? O : (y = Q == null ? void 0 : Q.processTitle) != null && y.trim() ? Q.processTitle : null;
  };
  je(() => {
    const y = () => {
      if (M({
        width: window.innerWidth,
        height: window.innerHeight
      }), x.current && x.current.offsetWidth > 0) {
        const S = x.current.offsetWidth;
        J(S), r || Z(S);
      }
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, [r]);
  const at = () => {
    const y = ne.current;
    if (y) {
      const S = y.scrollHeight > y.clientHeight;
      s(S), S && !g ? (requestAnimationFrame(() => {
        y && y.scrollTop > 0 && (y.scrollTop = 0);
      }), i(!0)) : S || i(!1);
    }
  }, De = () => {
    const y = ne.current;
    if (y) {
      const { scrollTop: S, scrollHeight: N, clientHeight: L } = y, V = N - L, me = V > 0 ? S / V : 0;
      R(Math.min(Math.max(me, 0), 1));
    }
  }, Ie = (y) => new Promise((S, N) => {
    if (Xe.has(y)) {
      S(Xe.get(y));
      return;
    }
    const L = new Image();
    L.onload = () => {
      const V = L.naturalWidth / L.naturalHeight, me = V > 1 ? "horizontal" : "vertical", ce = {
        width: L.naturalWidth,
        height: L.naturalHeight,
        aspectRatio: V,
        orientation: me
      };
      Xe.set(y, ce), S(ce);
    }, L.onerror = N, L.src = y;
  }), lt = (y) => {
    const S = Array.from(y.values()).filter((V) => V !== "unknown");
    if (S.length === 0)
      return "unknown";
    const N = S.includes("vertical"), L = S.includes("horizontal");
    return N && L ? "mixed" : N ? "all-vertical" : L ? "all-horizontal" : "unknown";
  }, ct = (y) => {
    const S = y.target, N = S.naturalWidth / S.naturalHeight, L = N > 1 ? "horizontal" : "vertical", V = {
      width: S.naturalWidth,
      height: S.naturalHeight,
      aspectRatio: N,
      orientation: L
    };
    k && Xe.set(k.screenshot, V), A(V), W(!0);
    const me = N > 1.2 ? "horizontal" : (N < 0.8, "vertical");
    xe((ce) => {
      const Ce = new Map(ce);
      Ce.set(Y, me);
      const Fe = lt(Ce);
      return se(Fe), Ce;
    }), setTimeout(() => {
      if (S.offsetWidth > 0) {
        const ce = S.offsetWidth;
        J(ce), setTimeout(() => {
          r || Z(ce);
        }, 100);
      }
    }, 100);
  };
  je(() => {
    if (k && k.screenshot)
      if (W(!1), A(null), J(0), Xe.has(k.screenshot)) {
        const y = Xe.get(k.screenshot);
        A(y), W(!0);
      } else
        Ie(k.screenshot).then((y) => {
          A(y), W(!0);
        }).catch((y) => {
          console.error("Failed to preload image dimensions:", y), W(!0);
        });
  }, [k]), je(() => {
    if (Y !== n) {
      o(!0), f(0), i(!1), R(0);
      const y = setTimeout(() => {
        l(Y), setTimeout(() => {
          f(1), o(!1), setTimeout(at, 100);
        }, 150);
      }, 300);
      return () => clearTimeout(y);
    }
  }, [Y, n]), je(() => {
    k && !r && (i(!1), R(0), setTimeout(at, 100));
  }, [k, r, c]);
  const Te = () => {
    if (!x.current || !_e.current || !ye.current || !k)
      return;
    const y = x.current, S = ye.current, N = y.getBoundingClientRect(), L = k.highlightArea.x / 100 * N.width, V = k.highlightArea.y / 100 * N.height, me = k.highlightArea.width / 100 * N.width, ce = k.highlightArea.height / 100 * N.height, Ce = L + me, Fe = V + ce, ut = L + me / 2, He = V + ce / 2, be = 20, ze = we || _ && _.orientation === "vertical", Ve = (_ == null ? void 0 : _.orientation) || "vertical", ft = we && _ && _.orientation === "horizontal", Pe = K !== null && K !== Ve;
    $e(Ve);
    let Oe, We;
    ze ? (Oe = N.width * 0.9, We = 120) : (Oe = N.width * 0.2, We = 120);
    const et = S.getBoundingClientRect(), wt = et.height > 0 ? et.height : We, ve = Oe, Ee = wt, Ge = V, Be = N.height - Fe, ht = L, tt = N.width - Ce;
    let ee = k.tooltipPosition || "auto";
    if (ee === "auto") {
      const P = Ee + be + 10, I = ve + be + 10;
      if (Be >= P)
        ee = "bottom";
      else if (Ge >= P)
        ee = "top";
      else if (tt >= I)
        ee = "right";
      else if (ht >= I)
        ee = "left";
      else {
        const E = Math.max(Ge, Be, ht, tt);
        E === Be ? ee = "bottom" : E === Ge ? ee = "top" : E === tt ? ee = "right" : ee = "left";
      }
    }
    let de = 0, ae = 0;
    switch (ee) {
      case "top":
        de = ut - ve / 2, ae = V - Ee - be;
        break;
      case "bottom":
        de = ut - ve / 2, ae = Fe + be;
        break;
      case "left":
        ze ? (de = Math.max(10, L - ve - be), ae = He - Ee / 2) : (de = L - ve - be, ae = He - Ee / 2);
        break;
      case "right":
        ze ? (de = Math.min(N.width - ve - 10, Ce + be), ae = He - Ee / 2) : (de = Ce + be, ae = He - Ee / 2);
        break;
    }
    const kt = 10, Rt = N.width - ve - 10, pt = 10, t = N.height - Ee - 10;
    !ze && (ee === "left" || ee === "right") || (de = Math.max(kt, Math.min(Rt, de))), ae = Math.max(pt, Math.min(t, ae));
    const a = de / N.width * 100, h = ae / N.height * 100, m = {
      position: "absolute",
      // Only transition position and opacity, NOT width
      transition: Pe ? "none" : "top 0.6s cubic-bezier(0.4, 0, 0.2, 1), left 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 1e3,
      // Very high z-index to ensure tooltip is above everything
      transform: "none",
      // CRITICAL: Ensure pointer events work for tooltip content
      pointerEvents: "auto"
    };
    ft ? (m.position = "fixed", m.bottom = "100px", m.left = "5%", m.width = "90%", m.right = "auto", m.top = "auto", m.maxWidth = "none", m.zIndex = 1001) : ze ? (m.width = "90%", m.left = "5%", m.top = `${h}%`, m.right = "auto", m.maxWidth = "none") : (m.width = "20%", m.left = `${a}%`, m.top = `${h}%`, m.right = "auto", m.maxWidth = "none"), w(m);
  };
  je(() => {
    if (T && !r && k) {
      const y = (S = 1) => {
        setTimeout(() => {
          Te(), S === 1 && K !== null && setTimeout(Te, 50), S < 3 && y(S + 1);
        }, S === 1 ? 10 : 50 * S);
      };
      y();
    }
  }, [T, r, k, n, _, we]), je(() => {
    if (T && !r) {
      const y = () => {
        setTimeout(() => {
          Te();
        }, 100);
      };
      return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
    }
  }, [T, r]);
  const vt = () => {
    if (!_ || !T)
      return {
        maxWidth: "90vw",
        maxHeight: "75vh",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        visibility: "hidden"
        // Hide until dimensions are determined
      };
    const y = {
      visibility: "visible",
      objectFit: "contain"
      // Always maintain aspect ratio
    }, S = z.width * 0.9, N = z.height * 0.75, L = S / _.aspectRatio;
    let V;
    return L <= N ? V = {
      ...y,
      width: `${S}px`,
      height: "auto",
      maxWidth: "90vw",
      maxHeight: "75vh"
    } : V = {
      ...y,
      width: "auto",
      height: `${N}px`,
      maxWidth: "90vw",
      maxHeight: "75vh"
    }, V;
  }, xt = (y) => {
    y.stopPropagation();
  };
  if (!k) return null;
  const Qe = Re(), dt = bt(), yt = () => ({
    left: `calc(${k.highlightArea.x}% - 2px)`,
    top: `calc(${k.highlightArea.y}% - 2px)`,
    width: `calc(${k.highlightArea.width}% + ${2 * 2}px)`,
    height: `calc(${k.highlightArea.height}% + ${2 * 2}px)`
  });
  return /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-10000 bg-black/90 flex flex-col", children: [
    /* @__PURE__ */ u.jsx("div", { className: "w-full p-4 flex-shrink-0 bg-black text-white", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center gap-2", children: (_ == null ? void 0 : _.orientation) === "horizontal" ? /* @__PURE__ */ u.jsx(ko, { className: "h-5 w-5 text-white flex-shrink-0" }) : /* @__PURE__ */ u.jsx(So, { className: "h-5 w-5 text-white flex-shrink-0" }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ u.jsx("div", { className: "truncate", children: /* @__PURE__ */ u.jsx("span", { className: "font-medium text-white", children: Qe }) }),
          dt && /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-300 truncate", children: /* @__PURE__ */ u.jsx(Yt, { content: dt }) })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "flex items-center gap-2 flex-shrink-0", children: /* @__PURE__ */ u.jsx(
        st,
        {
          variant: "ghost",
          size: "default",
          onClick: pe,
          title: "End walkthrough",
          className: "text-white hover:text-white hover:bg-gray-800",
          children: /* @__PURE__ */ u.jsx(_o, { className: "h-6 w-6" })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: _e,
        className: "flex-1 flex items-center justify-center relative overflow-hidden mx-4",
        children: /* @__PURE__ */ u.jsxs("div", { className: "relative overflow-hidden rounded-lg border-2 border-white", children: [
          /* @__PURE__ */ u.jsx(
            cr,
            {
              ref: x,
              src: k.screenshot,
              alt: `Step ${Y + 1}: ${k.title}`,
              className: "rounded-lg shadow-2xl transition-opacity duration-300",
              style: {
                ...vt(),
                opacity: T ? 1 : 0
              },
              onLoad: ct
            }
          ),
          T && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10",
                style: {
                  left: "0%",
                  top: "0%",
                  width: "100%",
                  height: `${k.highlightArea.y}%`
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10",
                style: {
                  left: "0%",
                  top: `${k.highlightArea.y + k.highlightArea.height}%`,
                  width: "100%",
                  height: `${100 - (k.highlightArea.y + k.highlightArea.height)}%`
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10",
                style: {
                  left: "0%",
                  top: `${k.highlightArea.y}%`,
                  width: `${k.highlightArea.x}%`,
                  height: `${k.highlightArea.height}%`
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "absolute bg-black/70 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-10",
                style: {
                  left: `${k.highlightArea.x + k.highlightArea.width}%`,
                  top: `${k.highlightArea.y}%`,
                  width: `${100 - (k.highlightArea.x + k.highlightArea.width)}%`,
                  height: `${k.highlightArea.height}%`
                }
              }
            )
          ] }),
          T && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "absolute border-2 pointer-events-none transition-all duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1) z-20",
              style: {
                ...yt(),
                borderColor: "#ED0C73",
                // Pink color for the highlight area stroke
                borderRadius: "6px",
                // 6px border radius for rounded corners
                boxShadow: "0 0 20px rgba(237, 12, 115, 0.3)"
                // Pink glow effect
              }
            }
          ),
          T && /* @__PURE__ */ u.jsx(
            ar,
            {
              ref: ye,
              className: "absolute bg-white border border-border shadow-xl tooltip-interactive",
              style: X,
              onClick: xt,
              children: /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "p-4",
                  style: { pointerEvents: "auto" },
                  children: [
                    /* @__PURE__ */ u.jsx("div", { className: "mb-3", children: /* @__PURE__ */ u.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      "Алхам ",
                      Y + 1,
                      "/",
                      D
                    ] }) }),
                    /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ u.jsx(
                        "div",
                        {
                          ref: ne,
                          className: "max-h-24 text-sm leading-relaxed text-foreground tooltip-scrollbar tooltip-content",
                          style: {
                            opacity: c,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: "auto"
                            // Ensure text content allows interactions
                          },
                          onScroll: De,
                          "data-firefox-scrollbar": re ? "true" : void 0,
                          children: /* @__PURE__ */ u.jsx(Yt, { content: k.description })
                        }
                      ),
                      d && /* @__PURE__ */ u.jsx(
                        "div",
                        {
                          className: "tooltip-gradient-overlay",
                          style: { pointerEvents: "none" }
                        }
                      )
                    ] }),
                    d && /* @__PURE__ */ u.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ u.jsx("div", { className: "flex-1 h-1 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ u.jsx(
                        "div",
                        {
                          className: "h-full bg-primary transition-all duration-200 ease-out rounded-full",
                          style: { width: `${p * 100}%` }
                        }
                      ) }),
                      /* @__PURE__ */ u.jsxs("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: [
                        Math.round(p * 100),
                        "%"
                      ] })
                    ] })
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "flex-shrink-0 flex items-center justify-center gap-4 p-4 bg-black", children: [
      /* @__PURE__ */ u.jsxs(
        st,
        {
          variant: "secondary",
          onClick: ge,
          disabled: Y === 0,
          className: "bg-white border-black text-black hover:bg-black hover:text-white disabled:bg-white disabled:text-black disabled:opacity-50",
          children: [
            /* @__PURE__ */ u.jsx(vo, { className: "h-4 w-4 mr-1" }),
            "Өмнөх"
          ]
        }
      ),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-lg shadow-sm text-sm font-medium text-black", children: [
        Y + 1,
        " / ",
        D
      ] }),
      /* @__PURE__ */ u.jsxs(
        st,
        {
          variant: "secondary",
          onClick: ke,
          className: Y === 0 ? "first-step-glow" : "bg-white border-black text-black hover:bg-black hover:text-white",
          children: [
            Y === D - 1 ? "Дуусгах" : "Дараах",
            Y !== D - 1 && /* @__PURE__ */ u.jsx(yo, { className: "h-4 w-4 ml-1" })
          ]
        }
      )
    ] })
  ] });
}
function Io() {
  const e = Xt(Wt);
  if (!e)
    throw new Error("useMobileWalkthrough must be used within a MobileWalkthroughProvider");
  return e;
}
function zo({ demoData: e }) {
  const { startWalkthrough: r } = Io(), o = () => {
    e && r(e);
  };
  return /* @__PURE__ */ u.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ u.jsx("div", { className: "text-center", children: /* @__PURE__ */ u.jsxs(
    st,
    {
      size: "lg",
      onClick: o,
      className: "px-8 py-3",
      children: [
        /* @__PURE__ */ u.jsx(Co, { className: "mr-2 h-5 w-5" }),
        "Start Interactive Walkthrough"
      ]
    }
  ) }) });
}
const Wo = ({
  demoData: e,
  className: r
}) => /* @__PURE__ */ u.jsx("div", { className: r, children: /* @__PURE__ */ u.jsx(Ao, { children: /* @__PURE__ */ u.jsx(zo, { demoData: e }) }) });
export {
  Wo as InteractiveWalkthrough
};
//# sourceMappingURL=index.es.js.map
