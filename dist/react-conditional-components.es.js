import P from "react";
var p = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  if (D) return b;
  D = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function c(l, n, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      u = {};
      for (var R in n)
        R !== "key" && (u[R] = n[R]);
    } else u = n;
    return n = u.ref, {
      $$typeof: a,
      type: l,
      key: d,
      ref: n !== void 0 ? n : null,
      props: u
    };
  }
  return b.Fragment = f, b.jsx = c, b.jsxs = c, b;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ne() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case q:
          return "Profiler";
        case V:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function c(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), f(e);
      }
    }
    function l(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (h.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = a(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, o, m, i, A, S) {
      return t = i.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: i,
        _owner: m
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, r, t, o, m, i, A, S) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (ee(s)) {
            for (o = 0; o < s.length; o++)
              x(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(s);
      if (h.call(r, "key")) {
        s = a(e);
        var E = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        o = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", F[s + o] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          E,
          s
        ), F[s + o] = !0);
      }
      if (s = null, t !== void 0 && (c(t), s = "" + t), d(r) && (c(r.key), s = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return s && R(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        s,
        i,
        m,
        n(),
        t,
        A,
        S
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var v = P, g = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), k = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, ee = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v["react-stack-bottom-frame"].bind(
      v,
      u
    )(), I = O(l(u)), F = {};
    _.Fragment = T, _.jsx = function(e, r, t, o, m) {
      var i = 1e4 > k.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !1,
        o,
        m,
        i ? Error("react-stack-top-frame") : Y,
        i ? O(l(e)) : I
      );
    }, _.jsxs = function(e, r, t, o, m) {
      var i = 1e4 > k.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !0,
        o,
        m,
        i ? Error("react-stack-top-frame") : Y,
        i ? O(l(e)) : I
      );
    };
  }()), _;
}
var L;
function ae() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? p.exports = te() : p.exports = ne()), p.exports;
}
var M = ae();
const le = ({
  condition: a,
  then: f,
  else: c,
  render: l,
  fallback: n,
  children: u
}) => typeof a > "u" ? n || null : a ? f || (l ? l() : /* @__PURE__ */ M.jsx(M.Fragment, { children: u })) : c || null, oe = ({ children: a }) => a, se = ({ children: a }) => a, ce = ({ value: a, children: f }) => {
  let c = null, l = null;
  return P.Children.forEach(f, (n) => {
    P.isValidElement(n) && (n.type === se ? l = n : n.type === oe && n.props.when === a && (c = n));
  }), c || l || null;
};
export {
  oe as Case,
  se as Default,
  le as If,
  ce as Switch
};
