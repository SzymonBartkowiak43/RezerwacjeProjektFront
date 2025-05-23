function Rd(e, t) {
  return (
    t.forEach(function (n) {
      n &&
        typeof n != "string" &&
        !Array.isArray(n) &&
        Object.keys(n).forEach(function (r) {
          if (r !== "default" && !(r in e)) {
            var o = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(
              e,
              r,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
  );
}
const Dd = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
};
Dd();
var k = { exports: {} },
  U = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var qi = Object.getOwnPropertySymbols,
  _d = Object.prototype.hasOwnProperty,
  Ld = Object.prototype.propertyIsEnumerable;
function Md(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function bd() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (l) {
      return t[l];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (l) {
        o[l] = l;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Wu = bd()
  ? Object.assign
  : function (e, t) {
      for (var n, r = Md(e), o, l = 1; l < arguments.length; l++) {
        n = Object(arguments[l]);
        for (var a in n) _d.call(n, a) && (r[a] = n[a]);
        if (qi) {
          o = qi(n);
          for (var i = 0; i < o.length; i++)
            Ld.call(n, o[i]) && (r[o[i]] = n[o[i]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wa = Wu,
  hn = 60103,
  Hu = 60106;
U.Fragment = 60107;
U.StrictMode = 60108;
U.Profiler = 60114;
var Vu = 60109,
  Yu = 60110,
  qu = 60112;
U.Suspense = 60113;
var Qu = 60115,
  Xu = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var Re = Symbol.for;
  (hn = Re("react.element")),
    (Hu = Re("react.portal")),
    (U.Fragment = Re("react.fragment")),
    (U.StrictMode = Re("react.strict_mode")),
    (U.Profiler = Re("react.profiler")),
    (Vu = Re("react.provider")),
    (Yu = Re("react.context")),
    (qu = Re("react.forward_ref")),
    (U.Suspense = Re("react.suspense")),
    (Qu = Re("react.memo")),
    (Xu = Re("react.lazy"));
}
var Qi = typeof Symbol == "function" && Symbol.iterator;
function Fd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qi && e[Qi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function xr(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gu = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Ku);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(xr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = gn.prototype;
function Ha(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Ku);
}
var Va = (Ha.prototype = new Ju());
Va.constructor = Ha;
Wa(Va, gn.prototype);
Va.isPureReactComponent = !0;
var Ya = { current: null },
  Zu = Object.prototype.hasOwnProperty,
  ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function tc(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Zu.call(t, r) && !ec.hasOwnProperty(r) && (o[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
  return {
    $$typeof: hn,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Ya.current,
  };
}
function Id(e, t) {
  return {
    $$typeof: hn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hn;
}
function jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xi = /\/+/g;
function pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jd("" + e.key)
    : t.toString(36);
}
function qr(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hn:
          case Hu:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + pl(a, 0) : r),
      Array.isArray(o)
        ? ((n = ""),
          e != null && (n = e.replace(Xi, "$&/") + "/"),
          qr(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (qa(o) &&
            (o = Id(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Xi, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var s = r + pl(l, i);
      a += qr(l, t, n, s, o);
    }
  else if (((s = Fd(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + pl(l, i++)), (a += qr(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = "" + e),
      Error(
        xr(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return a;
}
function Mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    qr(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Ud(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var nc = { current: null };
function Ke() {
  var e = nc.current;
  if (e === null) throw Error(xr(321));
  return e;
}
var Ad = {
  ReactCurrentDispatcher: nc,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Ya,
  IsSomeRendererActing: { current: !1 },
  assign: Wa,
};
U.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qa(e)) throw Error(xr(143));
    return e;
  },
};
U.Component = gn;
U.PureComponent = Ha;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
U.cloneElement = function (e, t, n) {
  if (e == null) throw Error(xr(267, e));
  var r = Wa({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = Ya.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in t)
      Zu.call(t, s) &&
        !ec.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
    r.children = i;
  }
  return { $$typeof: hn, type: e.type, key: o, ref: l, props: r, _owner: a };
};
U.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Yu,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: Vu, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = tc;
U.createFactory = function (e) {
  var t = tc.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: qu, render: e };
};
U.isValidElement = qa;
U.lazy = function (e) {
  return { $$typeof: Xu, _payload: { _status: -1, _result: e }, _init: Ud };
};
U.memo = function (e, t) {
  return { $$typeof: Qu, type: e, compare: t === void 0 ? null : t };
};
U.useCallback = function (e, t) {
  return Ke().useCallback(e, t);
};
U.useContext = function (e, t) {
  return Ke().useContext(e, t);
};
U.useDebugValue = function () {};
U.useEffect = function (e, t) {
  return Ke().useEffect(e, t);
};
U.useImperativeHandle = function (e, t, n) {
  return Ke().useImperativeHandle(e, t, n);
};
U.useLayoutEffect = function (e, t) {
  return Ke().useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Ke().useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Ke().useReducer(e, t, n);
};
U.useRef = function (e) {
  return Ke().useRef(e);
};
U.useState = function (e) {
  return Ke().useState(e);
};
U.version = "17.0.2";
k.exports = U;
var c = k.exports,
  Yl = Rd({ __proto__: null, default: c }, [k.exports]),
  rc = { exports: {} },
  Te = {},
  oc = { exports: {} },
  lc = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      i = a.now();
    e.unstable_now = function () {
      return a.now() - i;
    };
  }
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var s = null,
      u = null,
      f = function () {
        if (s !== null)
          try {
            var D = e.unstable_now();
            s(!0, D), (s = null);
          } catch (M) {
            throw (setTimeout(f, 0), M);
          }
      };
    (t = function (D) {
      s !== null ? setTimeout(t, 0, D) : ((s = D), setTimeout(f, 0));
    }),
      (n = function (D, M) {
        u = setTimeout(D, M);
      }),
      (r = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var g = window.setTimeout,
      p = window.clearTimeout;
    if (typeof console != "undefined") {
      var w = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof w != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var y = !1,
      E = null,
      d = -1,
      m = 5,
      h = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= h;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (D) {
        0 > D || 125 < D
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (m = 0 < D ? Math.floor(1e3 / D) : 5);
      });
    var v = new MessageChannel(),
      S = v.port2;
    (v.port1.onmessage = function () {
      if (E !== null) {
        var D = e.unstable_now();
        h = D + m;
        try {
          E(!0, D) ? S.postMessage(null) : ((y = !1), (E = null));
        } catch (M) {
          throw (S.postMessage(null), M);
        }
      } else y = !1;
    }),
      (t = function (D) {
        (E = D), y || ((y = !0), S.postMessage(null));
      }),
      (n = function (D, M) {
        d = g(function () {
          D(e.unstable_now());
        }, M);
      }),
      (r = function () {
        p(d), (d = -1);
      });
  }
  function O(D, M) {
    var I = D.length;
    D.push(M);
    e: for (;;) {
      var q = (I - 1) >>> 1,
        ne = D[q];
      if (ne !== void 0 && 0 < R(ne, M)) (D[q] = M), (D[I] = ne), (I = q);
      else break e;
    }
  }
  function N(D) {
    return (D = D[0]), D === void 0 ? null : D;
  }
  function C(D) {
    var M = D[0];
    if (M !== void 0) {
      var I = D.pop();
      if (I !== M) {
        D[0] = I;
        e: for (var q = 0, ne = D.length; q < ne; ) {
          var St = 2 * (q + 1) - 1,
            xt = D[St],
            On = St + 1,
            Bt = D[On];
          if (xt !== void 0 && 0 > R(xt, I))
            Bt !== void 0 && 0 > R(Bt, xt)
              ? ((D[q] = Bt), (D[On] = I), (q = On))
              : ((D[q] = xt), (D[St] = I), (q = St));
          else if (Bt !== void 0 && 0 > R(Bt, I))
            (D[q] = Bt), (D[On] = I), (q = On);
          else break e;
        }
      }
      return M;
    }
    return null;
  }
  function R(D, M) {
    var I = D.sortIndex - M.sortIndex;
    return I !== 0 ? I : D.id - M.id;
  }
  var T = [],
    F = [],
    Se = 1,
    z = null,
    j = 3,
    be = !1,
    xe = !1,
    Nn = !1;
  function fl(D) {
    for (var M = N(F); M !== null; ) {
      if (M.callback === null) C(F);
      else if (M.startTime <= D)
        C(F), (M.sortIndex = M.expirationTime), O(T, M);
      else break;
      M = N(F);
    }
  }
  function dl(D) {
    if (((Nn = !1), fl(D), !xe))
      if (N(T) !== null) (xe = !0), t(ml);
      else {
        var M = N(F);
        M !== null && n(dl, M.startTime - D);
      }
  }
  function ml(D, M) {
    (xe = !1), Nn && ((Nn = !1), r()), (be = !0);
    var I = j;
    try {
      for (
        fl(M), z = N(T);
        z !== null &&
        (!(z.expirationTime > M) || (D && !e.unstable_shouldYield()));

      ) {
        var q = z.callback;
        if (typeof q == "function") {
          (z.callback = null), (j = z.priorityLevel);
          var ne = q(z.expirationTime <= M);
          (M = e.unstable_now()),
            typeof ne == "function" ? (z.callback = ne) : z === N(T) && C(T),
            fl(M);
        } else C(T);
        z = N(T);
      }
      if (z !== null) var St = !0;
      else {
        var xt = N(F);
        xt !== null && n(dl, xt.startTime - M), (St = !1);
      }
      return St;
    } finally {
      (z = null), (j = I), (be = !1);
    }
  }
  var Td = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      xe || be || ((xe = !0), t(ml));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return j;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return N(T);
    }),
    (e.unstable_next = function (D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = j;
      }
      var I = j;
      j = M;
      try {
        return D();
      } finally {
        j = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = Td),
    (e.unstable_runWithPriority = function (D, M) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var I = j;
      j = D;
      try {
        return M();
      } finally {
        j = I;
      }
    }),
    (e.unstable_scheduleCallback = function (D, M, I) {
      var q = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? q + I : q))
          : (I = q),
        D)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = I + ne),
        (D = {
          id: Se++,
          callback: M,
          priorityLevel: D,
          startTime: I,
          expirationTime: ne,
          sortIndex: -1,
        }),
        I > q
          ? ((D.sortIndex = I),
            O(F, D),
            N(T) === null && D === N(F) && (Nn ? r() : (Nn = !0), n(dl, I - q)))
          : ((D.sortIndex = ne), O(T, D), xe || be || ((xe = !0), t(ml))),
        D
      );
    }),
    (e.unstable_wrapCallback = function (D) {
      var M = j;
      return function () {
        var I = j;
        j = M;
        try {
          return D.apply(this, arguments);
        } finally {
          j = I;
        }
      };
    });
})(lc);
oc.exports = lc;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o = k.exports,
  H = Wu,
  te = oc.exports;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!$o) throw Error(P(227));
var ac = new Set(),
  ar = {};
function It(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (ar[e] = t, e = 0; e < t.length; e++) ac.add(t[e]);
}
var Xe = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  zd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ki = Object.prototype.hasOwnProperty,
  Gi = {},
  Ji = {};
function $d(e) {
  return Ki.call(Ji, e)
    ? !0
    : Ki.call(Gi, e)
    ? !1
    : zd.test(e)
    ? (Ji[e] = !0)
    : ((Gi[e] = !0), !1);
}
function Bd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wd(e, t, n, r) {
  if (t === null || typeof t == "undefined" || Bd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qa = /[\-:]([a-z])/g;
function Xa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qa, Xa);
    le[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qa, Xa);
    le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qa, Xa);
  le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ka(e, t, n, r) {
  var o = le.hasOwnProperty(t) ? le[t] : null,
    l =
      o !== null
        ? o.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  l ||
    (Wd(t, n, o, r) && (n = null),
    r || o === null
      ? $d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = $o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wn = 60103,
  Nt = 60106,
  Ze = 60107,
  Ga = 60108,
  Qn = 60114,
  Ja = 60109,
  Za = 60110,
  Bo = 60112,
  Xn = 60113,
  so = 60120,
  Wo = 60115,
  ei = 60116,
  ti = 60121,
  ni = 60128,
  ic = 60129,
  ri = 60130,
  ql = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ee = Symbol.for;
  (Wn = ee("react.element")),
    (Nt = ee("react.portal")),
    (Ze = ee("react.fragment")),
    (Ga = ee("react.strict_mode")),
    (Qn = ee("react.profiler")),
    (Ja = ee("react.provider")),
    (Za = ee("react.context")),
    (Bo = ee("react.forward_ref")),
    (Xn = ee("react.suspense")),
    (so = ee("react.suspense_list")),
    (Wo = ee("react.memo")),
    (ei = ee("react.lazy")),
    (ti = ee("react.block")),
    ee("react.scope"),
    (ni = ee("react.opaque.id")),
    (ic = ee("react.debug_trace_mode")),
    (ri = ee("react.offscreen")),
    (ql = ee("react.legacy_hidden"));
}
var Zi = typeof Symbol == "function" && Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zi && e[Zi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hl;
function Hn(e) {
  if (hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hl = (t && t[1]) || "";
    }
  return (
    `
` +
    hl +
    e
  );
}
var gl = !1;
function br(e, t) {
  if (!e || gl) return "";
  gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          l = r.stack.split(`
`),
          a = o.length - 1,
          i = l.length - 1;
        1 <= a && 0 <= i && o[a] !== l[i];

      )
        i--;
      for (; 1 <= a && 0 <= i; a--, i--)
        if (o[a] !== l[i]) {
          if (a !== 1 || i !== 1)
            do
              if ((a--, i--, 0 > i || o[a] !== l[i]))
                return (
                  `
` + o[a].replace(" at new ", " at ")
                );
            while (1 <= a && 0 <= i);
          break;
        }
    }
  } finally {
    (gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function Hd(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = br(e.type, !1)), e;
    case 11:
      return (e = br(e.type.render, !1)), e;
    case 22:
      return (e = br(e.type._render, !1)), e;
    case 1:
      return (e = br(e.type, !0)), e;
    default:
      return "";
  }
}
function Zt(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ze:
      return "Fragment";
    case Nt:
      return "Portal";
    case Qn:
      return "Profiler";
    case Ga:
      return "StrictMode";
    case Xn:
      return "Suspense";
    case so:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Za:
        return (e.displayName || "Context") + ".Consumer";
      case Ja:
        return (e._context.displayName || "Context") + ".Provider";
      case Bo:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Wo:
        return Zt(e.type);
      case ti:
        return Zt(e._render);
      case ei:
        (t = e._payload), (e = e._init);
        try {
          return Zt(e(t));
        } catch {}
    }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function sc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vd(e) {
  var t = sc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fr(e) {
  e._valueTracker || (e._valueTracker = Vd(e));
}
function uc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function uo(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ql(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function es(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cc(e, t) {
  (t = t.checked), t != null && Ka(e, "checked", t, !1);
}
function Xl(e, t) {
  cc(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kl(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ts(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Kl(e, t, n) {
  (t !== "number" || uo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Yd(e) {
  var t = "";
  return (
    $o.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Gl(e, t) {
  return (
    (e = H({ children: void 0 }, t)),
    (t = Yd(t.children)) && (e.children = t),
    e
  );
}
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ns(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function fc(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function rs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Zl = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ea(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ir,
  mc = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Zl.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Ir = Ir || document.createElement("div"),
          Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kn = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function (e) {
  qd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
  });
});
function pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = pc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Qd = H(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function ta(e, t) {
  if (t) {
    if (Qd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function na(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
function oi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ra = null,
  tn = null,
  nn = null;
function os(e) {
  if ((e = Cr(e))) {
    if (typeof ra != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Xo(t)), ra(e.stateNode, e.type, t));
  }
}
function gc(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function yc() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), os(e), t)) for (e = 0; e < t.length; e++) os(t[e]);
  }
}
function li(e, t) {
  return e(t);
}
function vc(e, t, n, r, o) {
  return e(t, n, r, o);
}
function ai() {}
var wc = li,
  Ot = !1,
  yl = !1;
function ii() {
  (tn !== null || nn !== null) && (ai(), yc());
}
function Xd(e, t, n) {
  if (yl) return e(t, n);
  yl = !0;
  try {
    return wc(e, t, n);
  } finally {
    (yl = !1), ii();
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xo(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var oa = !1;
if (Xe)
  try {
    var Tn = {};
    Object.defineProperty(Tn, "passive", {
      get: function () {
        oa = !0;
      },
    }),
      window.addEventListener("test", Tn, Tn),
      window.removeEventListener("test", Tn, Tn);
  } catch {
    oa = !1;
  }
function Kd(e, t, n, r, o, l, a, i, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Gn = !1,
  co = null,
  fo = !1,
  la = null,
  Gd = {
    onError: function (e) {
      (Gn = !0), (co = e);
    },
  };
function Jd(e, t, n, r, o, l, a, i, s) {
  (Gn = !1), (co = null), Kd.apply(Gd, arguments);
}
function Zd(e, t, n, r, o, l, a, i, s) {
  if ((Jd.apply(this, arguments), Gn)) {
    if (Gn) {
      var u = co;
      (Gn = !1), (co = null);
    } else throw Error(P(198));
    fo || ((fo = !0), (la = u));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ec(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ls(e) {
  if (Ut(e) !== e) throw Error(P(188));
}
function em(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return ls(o), e;
        if (l === r) return ls(o), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var a = !1, i = o.child; i; ) {
        if (i === n) {
          (a = !0), (n = o), (r = l);
          break;
        }
        if (i === r) {
          (a = !0), (r = o), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!a) {
        for (i = l.child; i; ) {
          if (i === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (i === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!a) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Sc(e) {
  if (((e = em(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function as(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var xc,
  si,
  kc,
  Cc,
  aa = !1,
  je = [],
  ot = null,
  lt = null,
  at = null,
  ur = new Map(),
  cr = new Map(),
  Rn = [],
  is =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ia(e, t, n, r, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: o,
    targetContainers: [r],
  };
}
function ss(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = ia(t, n, r, o, l)),
      t !== null && ((t = Cr(t)), t !== null && si(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function tm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ot = Dn(ot, e, t, n, r, o)), !0;
    case "dragenter":
      return (lt = Dn(lt, e, t, n, r, o)), !0;
    case "mouseover":
      return (at = Dn(at, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ur.set(l, Dn(ur.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), cr.set(l, Dn(cr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function nm(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ec(n)), t !== null)) {
          (e.blockedOn = t),
            Cc(e.lanePriority, function () {
              te.unstable_runWithPriority(e.priority, function () {
                kc(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Cr(n)), t !== null && si(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function us(e, t, n) {
  Qr(e) && n.delete(t);
}
function rm() {
  for (aa = !1; 0 < je.length; ) {
    var e = je[0];
    if (e.blockedOn !== null) {
      (e = Cr(e.blockedOn)), e !== null && xc(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && je.shift();
  }
  ot !== null && Qr(ot) && (ot = null),
    lt !== null && Qr(lt) && (lt = null),
    at !== null && Qr(at) && (at = null),
    ur.forEach(us),
    cr.forEach(us);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    aa ||
      ((aa = !0),
      te.unstable_scheduleCallback(te.unstable_NormalPriority, rm)));
}
function Nc(e) {
  function t(o) {
    return _n(o, e);
  }
  if (0 < je.length) {
    _n(je[0], e);
    for (var n = 1; n < je.length; n++) {
      var r = je[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && _n(ot, e),
      lt !== null && _n(lt, e),
      at !== null && _n(at, e),
      ur.forEach(t),
      cr.forEach(t),
      n = 0;
    n < Rn.length;
    n++
  )
    (r = Rn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rn.length && ((n = Rn[0]), n.blockedOn === null); )
    nm(n), n.blockedOn === null && Rn.shift();
}
function jr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qt = {
    animationend: jr("Animation", "AnimationEnd"),
    animationiteration: jr("Animation", "AnimationIteration"),
    animationstart: jr("Animation", "AnimationStart"),
    transitionend: jr("Transition", "TransitionEnd"),
  },
  vl = {},
  Oc = {};
Xe &&
  ((Oc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qt.animationend.animation,
    delete qt.animationiteration.animation,
    delete qt.animationstart.animation),
  "TransitionEvent" in window || delete qt.transitionend.transition);
function Ho(e) {
  if (vl[e]) return vl[e];
  if (!qt[e]) return e;
  var t = qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oc) return (vl[e] = t[n]);
  return e;
}
var Pc = Ho("animationend"),
  Tc = Ho("animationiteration"),
  Rc = Ho("animationstart"),
  Dc = Ho("transitionend"),
  _c = new Map(),
  ui = new Map(),
  om = [
    "abort",
    "abort",
    Pc,
    "animationEnd",
    Tc,
    "animationIteration",
    Rc,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Dc,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function ci(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      o = e[n + 1];
    (o = "on" + (o[0].toUpperCase() + o.slice(1))),
      ui.set(r, t),
      _c.set(r, o),
      It(o, [r]);
  }
}
var lm = te.unstable_now;
lm();
var $ = 8;
function Vt(e) {
  if ((1 & e) !== 0) return ($ = 15), 1;
  if ((2 & e) !== 0) return ($ = 14), 2;
  if ((4 & e) !== 0) return ($ = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? (($ = 12), t)
    : (e & 32) !== 0
    ? (($ = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? (($ = 10), t)
        : (e & 256) !== 0
        ? (($ = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? (($ = 8), t)
            : (e & 4096) !== 0
            ? (($ = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? (($ = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? (($ = 5), t)
                    : e & 67108864
                    ? (($ = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? (($ = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? (($ = 2), t)
                        : (1073741824 & e) !== 0
                        ? (($ = 1), 1073741824)
                        : (($ = 8), e))))));
}
function am(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function im(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(P(358, e));
  }
}
function fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return ($ = 0);
  var r = 0,
    o = 0,
    l = e.expiredLanes,
    a = e.suspendedLanes,
    i = e.pingedLanes;
  if (l !== 0) (r = l), (o = $ = 15);
  else if (((l = n & 134217727), l !== 0)) {
    var s = l & ~a;
    s !== 0
      ? ((r = Vt(s)), (o = $))
      : ((i &= l), i !== 0 && ((r = Vt(i)), (o = $)));
  } else
    (l = n & ~a),
      l !== 0 ? ((r = Vt(l)), (o = $)) : i !== 0 && ((r = Vt(i)), (o = $));
  if (r === 0) return 0;
  if (
    ((r = 31 - pt(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & a) === 0)
  ) {
    if ((Vt(t), o <= $)) return t;
    $ = o;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Lc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mo(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Yt(24 & ~t)), e === 0 ? mo(10, t) : e;
    case 10:
      return (e = Yt(192 & ~t)), e === 0 ? mo(8, t) : e;
    case 8:
      return (
        (e = Yt(3584 & ~t)),
        e === 0 && ((e = Yt(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = Yt(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(P(358, e));
}
function Yt(e) {
  return e & -e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vo(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
var pt = Math.clz32 ? Math.clz32 : cm,
  sm = Math.log,
  um = Math.LN2;
function cm(e) {
  return e === 0 ? 32 : (31 - ((sm(e) / um) | 0)) | 0;
}
var fm = te.unstable_UserBlockingPriority,
  dm = te.unstable_runWithPriority,
  Xr = !0;
function mm(e, t, n, r) {
  Ot || ai();
  var o = fi,
    l = Ot;
  Ot = !0;
  try {
    vc(o, e, t, n, r);
  } finally {
    (Ot = l) || ii();
  }
}
function pm(e, t, n, r) {
  dm(fm, fi.bind(null, e, t, n, r));
}
function fi(e, t, n, r) {
  if (Xr) {
    var o;
    if ((o = (t & 4) === 0) && 0 < je.length && -1 < is.indexOf(e))
      (e = ia(null, e, t, n, r)), je.push(e);
    else {
      var l = di(e, t, n, r);
      if (l === null) o && ss(e, r);
      else {
        if (o) {
          if (-1 < is.indexOf(e)) {
            (e = ia(l, e, t, n, r)), je.push(e);
            return;
          }
          if (tm(l, e, t, n, r)) return;
          ss(e, r);
        }
        Vc(e, t, r, null, n);
      }
    }
  }
}
function di(e, t, n, r) {
  var o = oi(r);
  if (((o = Pt(o)), o !== null)) {
    var l = Ut(o);
    if (l === null) o = null;
    else {
      var a = l.tag;
      if (a === 13) {
        if (((o = Ec(l)), o !== null)) return o;
        o = null;
      } else if (a === 3) {
        if (l.stateNode.hydrate)
          return l.tag === 3 ? l.stateNode.containerInfo : null;
        o = null;
      } else l !== o && (o = null);
    }
  }
  return Vc(e, t, r, o, n), null;
}
var et = null,
  mi = null,
  Kr = null;
function Mc() {
  if (Kr) return Kr;
  var e,
    t = mi,
    n = t.length,
    r,
    o = "value" in et ? et.value : et.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
  return (Kr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ur() {
  return !0;
}
function cs() {
  return !1;
}
function Ee(e) {
  function t(n, r, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ur
        : cs),
      (this.isPropagationStopped = cs),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ur));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ur));
      },
      persist: function () {},
      isPersistent: Ur,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pi = Ee(yn),
  kr = H({}, yn, { view: 0, detail: 0 }),
  hm = Ee(kr),
  El,
  Sl,
  Ln,
  Yo = H({}, kr, {
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
    getModifierState: hi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((El = e.screenX - Ln.screenX), (Sl = e.screenY - Ln.screenY))
              : (Sl = El = 0),
            (Ln = e)),
          El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  fs = Ee(Yo),
  gm = H({}, Yo, { dataTransfer: 0 }),
  ym = Ee(gm),
  vm = H({}, kr, { relatedTarget: 0 }),
  xl = Ee(vm),
  wm = H({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = Ee(wm),
  Sm = H({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xm = Ee(Sm),
  km = H({}, yn, { data: 0 }),
  ds = Ee(km),
  Cm = {
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
    MozPrintableKey: "Unidentified",
  },
  Nm = {
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
    224: "Meta",
  },
  Om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Om[e]) ? !!t[e] : !1;
}
function hi() {
  return Pm;
}
var Tm = H({}, kr, {
    key: function (e) {
      if (e.key) {
        var t = Cm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hi,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rm = Ee(Tm),
  Dm = H({}, Yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ms = Ee(Dm),
  _m = H({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hi,
  }),
  Lm = Ee(_m),
  Mm = H({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bm = Ee(Mm),
  Fm = H({}, Yo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Im = Ee(Fm),
  jm = [9, 13, 27, 32],
  gi = Xe && "CompositionEvent" in window,
  Jn = null;
Xe && "documentMode" in document && (Jn = document.documentMode);
var Um = Xe && "TextEvent" in window && !Jn,
  bc = Xe && (!gi || (Jn && 8 < Jn && 11 >= Jn)),
  ps = String.fromCharCode(32),
  hs = !1;
function Fc(e, t) {
  switch (e) {
    case "keyup":
      return jm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function Am(e, t) {
  switch (e) {
    case "compositionend":
      return Ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((hs = !0), ps);
    case "textInput":
      return (e = t.data), e === ps && hs ? null : e;
    default:
      return null;
  }
}
function zm(e, t) {
  if (Qt)
    return e === "compositionend" || (!gi && Fc(e, t))
      ? ((e = Mc()), (Kr = mi = et = null), (Qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $m = {
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
  week: !0,
};
function gs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$m[e.type] : t === "textarea";
}
function jc(e, t, n, r) {
  gc(r),
    (t = po(t, "onChange")),
    0 < t.length &&
      ((n = new pi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zn = null,
  dr = null;
function Bm(e) {
  Bc(e, 0);
}
function qo(e) {
  var t = Kt(e);
  if (uc(t)) return e;
}
function Wm(e, t) {
  if (e === "change") return t;
}
var Uc = !1;
if (Xe) {
  var kl;
  if (Xe) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var ys = document.createElement("div");
      ys.setAttribute("oninput", "return;"),
        (Cl = typeof ys.oninput == "function");
    }
    kl = Cl;
  } else kl = !1;
  Uc = kl && (!document.documentMode || 9 < document.documentMode);
}
function vs() {
  Zn && (Zn.detachEvent("onpropertychange", Ac), (dr = Zn = null));
}
function Ac(e) {
  if (e.propertyName === "value" && qo(dr)) {
    var t = [];
    if ((jc(t, dr, e, oi(e)), (e = Bm), Ot)) e(t);
    else {
      Ot = !0;
      try {
        li(e, t);
      } finally {
        (Ot = !1), ii();
      }
    }
  }
}
function Hm(e, t, n) {
  e === "focusin"
    ? (vs(), (Zn = t), (dr = n), Zn.attachEvent("onpropertychange", Ac))
    : e === "focusout" && vs();
}
function Vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qo(dr);
}
function Ym(e, t) {
  if (e === "click") return qo(t);
}
function qm(e, t) {
  if (e === "input" || e === "change") return qo(t);
}
function Qm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ke = typeof Object.is == "function" ? Object.is : Qm,
  Xm = Object.prototype.hasOwnProperty;
function mr(e, t) {
  if (ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Xm.call(t, n[r]) || !ke(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Es(e, t) {
  var n = ws(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ws(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ss() {
  for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = uo(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var Km = Xe && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  ua = null,
  er = null,
  ca = !1;
function xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ca ||
    Xt == null ||
    Xt !== uo(r) ||
    ((r = Xt),
    "selectionStart" in r && sa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (er && mr(er, r)) ||
      ((er = r),
      (r = po(ua, "onSelect")),
      0 < r.length &&
        ((t = new pi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
ci(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
ci(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
ci(om, 2);
for (
  var ks =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    Nl = 0;
  Nl < ks.length;
  Nl++
)
  ui.set(ks[Nl], 0);
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $c = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function Cs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zd(r, t, void 0, e), (e.currentTarget = null);
}
function Bc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var i = r[a],
            s = i.instance,
            u = i.currentTarget;
          if (((i = i.listener), s !== l && o.isPropagationStopped())) break e;
          Cs(o, i, u), (l = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((i = r[a]),
            (s = i.instance),
            (u = i.currentTarget),
            (i = i.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          Cs(o, i, u), (l = s);
        }
    }
  }
  if (fo) throw ((e = la), (fo = !1), (la = null), e);
}
function B(e, t) {
  var n = qc(t),
    r = e + "__bubble";
  n.has(r) || (Hc(t, e, 2, !1), n.add(r));
}
var Ns = "_reactListening" + Math.random().toString(36).slice(2);
function Wc(e) {
  e[Ns] ||
    ((e[Ns] = !0),
    ac.forEach(function (t) {
      $c.has(t) || Os(t, !1, e, null), Os(t, !0, e, null);
    }));
}
function Os(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    l = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (l = n.ownerDocument),
    r !== null && !t && $c.has(e))
  ) {
    if (e !== "scroll") return;
    (o |= 2), (l = r);
  }
  var a = qc(l),
    i = e + "__" + (t ? "capture" : "bubble");
  a.has(i) || (t && (o |= 4), Hc(l, e, o, t), a.add(i));
}
function Hc(e, t, n, r) {
  var o = ui.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = mm;
      break;
    case 1:
      o = pm;
      break;
    default:
      o = fi;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !oa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vc(e, t, n, r, o) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var i = r.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; i !== null; ) {
          if (((a = Pt(i)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Xd(function () {
    var u = l,
      f = oi(n),
      g = [];
    e: {
      var p = _c.get(e);
      if (p !== void 0) {
        var w = pi,
          y = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Rm;
            break;
          case "focusin":
            (y = "focus"), (w = xl);
            break;
          case "focusout":
            (y = "blur"), (w = xl);
            break;
          case "beforeblur":
          case "afterblur":
            w = xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ym;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Lm;
            break;
          case Pc:
          case Tc:
          case Rc:
            w = Em;
            break;
          case Dc:
            w = bm;
            break;
          case "scroll":
            w = hm;
            break;
          case "wheel":
            w = Im;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = xm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ms;
        }
        var E = (t & 4) !== 0,
          d = !E && e === "scroll",
          m = E ? (p !== null ? p + "Capture" : null) : p;
        E = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = sr(h, m)), S != null && E.push(pr(h, S, v)))),
            d)
          )
            break;
          h = h.return;
        }
        0 < E.length &&
          ((p = new w(p, y, null, n, f)), g.push({ event: p, listeners: E }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            (t & 16) === 0 &&
            (y = n.relatedTarget || n.fromElement) &&
            (Pt(y) || y[vn]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = u),
              (y = y ? Pt(y) : null),
              y !== null &&
                ((d = Ut(y)), y !== d || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = u)),
          w !== y)
        ) {
          if (
            ((E = fs),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ms),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (d = w == null ? p : Kt(w)),
            (v = y == null ? p : Kt(y)),
            (p = new E(S, h + "leave", w, n, f)),
            (p.target = d),
            (p.relatedTarget = v),
            (S = null),
            Pt(f) === u &&
              ((E = new E(m, h + "enter", y, n, f)),
              (E.target = v),
              (E.relatedTarget = d),
              (S = E)),
            (d = S),
            w && y)
          )
            t: {
              for (E = w, m = y, h = 0, v = E; v; v = Wt(v)) h++;
              for (v = 0, S = m; S; S = Wt(S)) v++;
              for (; 0 < h - v; ) (E = Wt(E)), h--;
              for (; 0 < v - h; ) (m = Wt(m)), v--;
              for (; h--; ) {
                if (E === m || (m !== null && E === m.alternate)) break t;
                (E = Wt(E)), (m = Wt(m));
              }
              E = null;
            }
          else E = null;
          w !== null && Ps(g, p, w, E, !1),
            y !== null && d !== null && Ps(g, d, y, E, !0);
        }
      }
      e: {
        if (
          ((p = u ? Kt(u) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var O = Wm;
        else if (gs(p))
          if (Uc) O = qm;
          else {
            O = Vm;
            var N = Hm;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (O = Ym);
        if (O && (O = O(e, u))) {
          jc(g, O, n, f);
          break e;
        }
        N && N(e, p, u),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            Kl(p, "number", p.value);
      }
      switch (((N = u ? Kt(u) : window), e)) {
        case "focusin":
          (gs(N) || N.contentEditable === "true") &&
            ((Xt = N), (ua = u), (er = null));
          break;
        case "focusout":
          er = ua = Xt = null;
          break;
        case "mousedown":
          ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ca = !1), xs(g, n, f);
          break;
        case "selectionchange":
          if (Km) break;
        case "keydown":
        case "keyup":
          xs(g, n, f);
      }
      var C;
      if (gi)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Qt
          ? Fc(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (bc &&
          n.locale !== "ko" &&
          (Qt || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Qt && (C = Mc())
            : ((et = f),
              (mi = "value" in et ? et.value : et.textContent),
              (Qt = !0))),
        (N = po(u, R)),
        0 < N.length &&
          ((R = new ds(R, e, null, n, f)),
          g.push({ event: R, listeners: N }),
          C ? (R.data = C) : ((C = Ic(n)), C !== null && (R.data = C)))),
        (C = Um ? Am(e, n) : zm(e, n)) &&
          ((u = po(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new ds("onBeforeInput", "beforeinput", null, n, f)),
            g.push({ event: f, listeners: u }),
            (f.data = C)));
    }
    Bc(g, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function po(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = sr(e, n)),
      l != null && r.unshift(pr(e, l, o)),
      (l = sr(e, t)),
      l != null && r.push(pr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ps(e, t, n, r, o) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var i = n,
      s = i.alternate,
      u = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      u !== null &&
      ((i = u),
      o
        ? ((s = sr(n, l)), s != null && a.unshift(pr(n, s, i)))
        : o || ((s = sr(n, l)), s != null && a.push(pr(n, s, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
function ho() {}
var Ol = null,
  Pl = null;
function Yc(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function fa(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ts = typeof setTimeout == "function" ? setTimeout : void 0,
  Gm = typeof clearTimeout == "function" ? clearTimeout : void 0;
function yi(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Rs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tl = 0;
function Jm(e) {
  return { $$typeof: ni, toString: e, valueOf: e };
}
var Qo = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + Qo,
  go = "__reactProps$" + Qo,
  vn = "__reactContainer$" + Qo,
  Ds = "__reactEvents$" + Qo;
function Pt(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vn] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Rs(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = Rs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cr(e) {
  return (
    (e = e[tt] || e[vn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Xo(e) {
  return e[go] || null;
}
function qc(e) {
  var t = e[Ds];
  return t === void 0 && (t = e[Ds] = new Set()), t;
}
var da = [],
  Gt = -1;
function vt(e) {
  return { current: e };
}
function W(e) {
  0 > Gt || ((e.current = da[Gt]), (da[Gt] = null), Gt--);
}
function Y(e, t) {
  Gt++, (da[Gt] = e.current), (e.current = t);
}
var ht = {},
  ce = vt(ht),
  he = vt(!1),
  Lt = ht;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function yo() {
  W(he), W(ce);
}
function _s(e, t, n) {
  if (ce.current !== ht) throw Error(P(168));
  Y(ce, t), Y(he, n);
}
function Qc(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(P(108, Zt(t) || "Unknown", o));
  return H({}, n, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (Lt = ce.current),
    Y(ce, e),
    Y(he, he.current),
    !0
  );
}
function Ls(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Qc(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(he),
      W(ce),
      Y(ce, e))
    : W(he),
    Y(he, n);
}
var vi = null,
  _t = null,
  Zm = te.unstable_runWithPriority,
  wi = te.unstable_scheduleCallback,
  ma = te.unstable_cancelCallback,
  ep = te.unstable_shouldYield,
  Ms = te.unstable_requestPaint,
  pa = te.unstable_now,
  tp = te.unstable_getCurrentPriorityLevel,
  Ko = te.unstable_ImmediatePriority,
  Xc = te.unstable_UserBlockingPriority,
  Kc = te.unstable_NormalPriority,
  Gc = te.unstable_LowPriority,
  Jc = te.unstable_IdlePriority,
  Rl = {},
  np = Ms !== void 0 ? Ms : function () {},
  He = null,
  Zr = null,
  Dl = !1,
  bs = pa(),
  se =
    1e4 > bs
      ? pa
      : function () {
          return pa() - bs;
        };
function dn() {
  switch (tp()) {
    case Ko:
      return 99;
    case Xc:
      return 98;
    case Kc:
      return 97;
    case Gc:
      return 96;
    case Jc:
      return 95;
    default:
      throw Error(P(332));
  }
}
function Zc(e) {
  switch (e) {
    case 99:
      return Ko;
    case 98:
      return Xc;
    case 97:
      return Kc;
    case 96:
      return Gc;
    case 95:
      return Jc;
    default:
      throw Error(P(332));
  }
}
function Mt(e, t) {
  return (e = Zc(e)), Zm(e, t);
}
function hr(e, t, n) {
  return (e = Zc(e)), wi(e, t, n);
}
function Be() {
  if (Zr !== null) {
    var e = Zr;
    (Zr = null), ma(e);
  }
  ef();
}
function ef() {
  if (!Dl && He !== null) {
    Dl = !0;
    var e = 0;
    try {
      var t = He;
      Mt(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (He = null);
    } catch (n) {
      throw (He !== null && (He = He.slice(e + 1)), wi(Ko, Be), n);
    } finally {
      Dl = !1;
    }
  }
}
var rp = jt.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vo = vt(null),
  wo = null,
  Jt = null,
  Eo = null;
function Ei() {
  Eo = Jt = wo = null;
}
function Si(e) {
  var t = vo.current;
  W(vo), (e.type._context._currentValue = t);
}
function tf(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function on(e, t) {
  (wo = e),
    (Eo = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (_e = !0), (e.firstContext = null));
}
function Oe(e, t) {
  if (Eo !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Eo = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Jt === null)
    ) {
      if (wo === null) throw Error(P(308));
      (Jt = t),
        (wo.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Jt = Jt.next = t;
  return e._currentValue;
}
var Je = !1;
function xi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function nf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function Fs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gr(e, t, n, r) {
  var o = e.updateQueue;
  Je = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var s = i,
      u = s.next;
    (s.next = null), a === null ? (l = u) : (a.next = u), (a = s);
    var f = e.alternate;
    if (f !== null) {
      f = f.updateQueue;
      var g = f.lastBaseUpdate;
      g !== a &&
        (g === null ? (f.firstBaseUpdate = u) : (g.next = u),
        (f.lastBaseUpdate = s));
    }
  }
  if (l !== null) {
    (g = o.baseState), (a = 0), (f = u = s = null);
    do {
      i = l.lane;
      var p = l.eventTime;
      if ((r & i) === i) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            y = l;
          switch (((i = t), (p = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                g = w.call(p, g, i);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -4097) | 64;
            case 0:
              if (
                ((w = y.payload),
                (i = typeof w == "function" ? w.call(p, g, i) : w),
                i == null)
              )
                break e;
              g = H({}, g, i);
              break e;
            case 2:
              Je = !0;
          }
        }
        l.callback !== null &&
          ((e.flags |= 32),
          (i = o.effects),
          i === null ? (o.effects = [l]) : i.push(l));
      } else
        (p = {
          eventTime: p,
          lane: i,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = p), (s = g)) : (f = f.next = p),
          (a |= i);
      if (((l = l.next), l === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (l = i.next),
          (i.next = null),
          (o.lastBaseUpdate = i),
          (o.shared.pending = null);
      }
    } while (1);
    f === null && (s = g),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (Or |= a),
      (e.lanes = a),
      (e.memoizedState = g);
  }
}
function Is(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var rf = new $o.Component().refs;
function So(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Go = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = ut(e),
      l = it(r, o);
    (l.payload = t), n != null && (l.callback = n), st(e, l), ct(e, o, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = ut(e),
      l = it(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      st(e, l),
      ct(e, o, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = ut(e),
      o = it(n, r);
    (o.tag = 2), t != null && (o.callback = t), st(e, o), ct(e, r, n);
  },
};
function js(e, t, n, r, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mr(n, r) || !mr(o, l)
      : !0
  );
}
function of(e, t, n) {
  var r = !1,
    o = ht,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Oe(l))
      : ((o = ge(t) ? Lt : ce.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? fn(e, o) : ht)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Go),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Us(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Go.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = rf), xi(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Oe(l))
    : ((l = ge(t) ? Lt : ce.current), (o.context = fn(e, l))),
    gr(e, n, o, r),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (So(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Go.enqueueReplaceState(o, o.state, null),
      gr(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var Ar = Array.isArray;
function Mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = r.refs;
            a === rf && (a = r.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function zr(e, t) {
  if (e.type !== "textarea")
    throw Error(
      P(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function lf(e) {
  function t(d, m) {
    if (e) {
      var h = d.lastEffect;
      h !== null
        ? ((h.nextEffect = m), (d.lastEffect = m))
        : (d.firstEffect = d.lastEffect = m),
        (m.nextEffect = null),
        (m.flags = 8);
    }
  }
  function n(d, m) {
    if (!e) return null;
    for (; m !== null; ) t(d, m), (m = m.sibling);
    return null;
  }
  function r(d, m) {
    for (d = new Map(); m !== null; )
      m.key !== null ? d.set(m.key, m) : d.set(m.index, m), (m = m.sibling);
    return d;
  }
  function o(d, m) {
    return (d = yt(d, m)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, m, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((d.flags = 2), m) : h)
            : ((d.flags = 2), m))
        : m
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function i(d, m, h, v) {
    return m === null || m.tag !== 6
      ? ((m = Fl(h, d.mode, v)), (m.return = d), m)
      : ((m = o(m, h)), (m.return = d), m);
  }
  function s(d, m, h, v) {
    return m !== null && m.elementType === h.type
      ? ((v = o(m, h.props)), (v.ref = Mn(d, m, h)), (v.return = d), v)
      : ((v = ro(h.type, h.key, h.props, null, d.mode, v)),
        (v.ref = Mn(d, m, h)),
        (v.return = d),
        v);
  }
  function u(d, m, h, v) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = Il(h, d.mode, v)), (m.return = d), m)
      : ((m = o(m, h.children || [])), (m.return = d), m);
  }
  function f(d, m, h, v, S) {
    return m === null || m.tag !== 7
      ? ((m = un(h, d.mode, v, S)), (m.return = d), m)
      : ((m = o(m, h)), (m.return = d), m);
  }
  function g(d, m, h) {
    if (typeof m == "string" || typeof m == "number")
      return (m = Fl("" + m, d.mode, h)), (m.return = d), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wn:
          return (
            (h = ro(m.type, m.key, m.props, null, d.mode, h)),
            (h.ref = Mn(d, null, m)),
            (h.return = d),
            h
          );
        case Nt:
          return (m = Il(m, d.mode, h)), (m.return = d), m;
      }
      if (Ar(m) || Pn(m))
        return (m = un(m, d.mode, h, null)), (m.return = d), m;
      zr(d, m);
    }
    return null;
  }
  function p(d, m, h, v) {
    var S = m !== null ? m.key : null;
    if (typeof h == "string" || typeof h == "number")
      return S !== null ? null : i(d, m, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Wn:
          return h.key === S
            ? h.type === Ze
              ? f(d, m, h.props.children, v, S)
              : s(d, m, h, v)
            : null;
        case Nt:
          return h.key === S ? u(d, m, h, v) : null;
      }
      if (Ar(h) || Pn(h)) return S !== null ? null : f(d, m, h, v, null);
      zr(d, h);
    }
    return null;
  }
  function w(d, m, h, v, S) {
    if (typeof v == "string" || typeof v == "number")
      return (d = d.get(h) || null), i(m, d, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Wn:
          return (
            (d = d.get(v.key === null ? h : v.key) || null),
            v.type === Ze ? f(m, d, v.props.children, S, v.key) : s(m, d, v, S)
          );
        case Nt:
          return (d = d.get(v.key === null ? h : v.key) || null), u(m, d, v, S);
      }
      if (Ar(v) || Pn(v)) return (d = d.get(h) || null), f(m, d, v, S, null);
      zr(m, v);
    }
    return null;
  }
  function y(d, m, h, v) {
    for (
      var S = null, O = null, N = m, C = (m = 0), R = null;
      N !== null && C < h.length;
      C++
    ) {
      N.index > C ? ((R = N), (N = null)) : (R = N.sibling);
      var T = p(d, N, h[C], v);
      if (T === null) {
        N === null && (N = R);
        break;
      }
      e && N && T.alternate === null && t(d, N),
        (m = l(T, m, C)),
        O === null ? (S = T) : (O.sibling = T),
        (O = T),
        (N = R);
    }
    if (C === h.length) return n(d, N), S;
    if (N === null) {
      for (; C < h.length; C++)
        (N = g(d, h[C], v)),
          N !== null &&
            ((m = l(N, m, C)), O === null ? (S = N) : (O.sibling = N), (O = N));
      return S;
    }
    for (N = r(d, N); C < h.length; C++)
      (R = w(N, d, C, h[C], v)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? C : R.key),
          (m = l(R, m, C)),
          O === null ? (S = R) : (O.sibling = R),
          (O = R));
    return (
      e &&
        N.forEach(function (F) {
          return t(d, F);
        }),
      S
    );
  }
  function E(d, m, h, v) {
    var S = Pn(h);
    if (typeof S != "function") throw Error(P(150));
    if (((h = S.call(h)), h == null)) throw Error(P(151));
    for (
      var O = (S = null), N = m, C = (m = 0), R = null, T = h.next();
      N !== null && !T.done;
      C++, T = h.next()
    ) {
      N.index > C ? ((R = N), (N = null)) : (R = N.sibling);
      var F = p(d, N, T.value, v);
      if (F === null) {
        N === null && (N = R);
        break;
      }
      e && N && F.alternate === null && t(d, N),
        (m = l(F, m, C)),
        O === null ? (S = F) : (O.sibling = F),
        (O = F),
        (N = R);
    }
    if (T.done) return n(d, N), S;
    if (N === null) {
      for (; !T.done; C++, T = h.next())
        (T = g(d, T.value, v)),
          T !== null &&
            ((m = l(T, m, C)), O === null ? (S = T) : (O.sibling = T), (O = T));
      return S;
    }
    for (N = r(d, N); !T.done; C++, T = h.next())
      (T = w(N, d, C, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? C : T.key),
          (m = l(T, m, C)),
          O === null ? (S = T) : (O.sibling = T),
          (O = T));
    return (
      e &&
        N.forEach(function (Se) {
          return t(d, Se);
        }),
      S
    );
  }
  return function (d, m, h, v) {
    var S =
      typeof h == "object" && h !== null && h.type === Ze && h.key === null;
    S && (h = h.props.children);
    var O = typeof h == "object" && h !== null;
    if (O)
      switch (h.$$typeof) {
        case Wn:
          e: {
            for (O = h.key, S = m; S !== null; ) {
              if (S.key === O) {
                switch (S.tag) {
                  case 7:
                    if (h.type === Ze) {
                      n(d, S.sibling),
                        (m = o(S, h.props.children)),
                        (m.return = d),
                        (d = m);
                      break e;
                    }
                    break;
                  default:
                    if (S.elementType === h.type) {
                      n(d, S.sibling),
                        (m = o(S, h.props)),
                        (m.ref = Mn(d, S, h)),
                        (m.return = d),
                        (d = m);
                      break e;
                    }
                }
                n(d, S);
                break;
              } else t(d, S);
              S = S.sibling;
            }
            h.type === Ze
              ? ((m = un(h.props.children, d.mode, v, h.key)),
                (m.return = d),
                (d = m))
              : ((v = ro(h.type, h.key, h.props, null, d.mode, v)),
                (v.ref = Mn(d, m, h)),
                (v.return = d),
                (d = v));
          }
          return a(d);
        case Nt:
          e: {
            for (S = h.key; m !== null; ) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  n(d, m.sibling),
                    (m = o(m, h.children || [])),
                    (m.return = d),
                    (d = m);
                  break e;
                } else {
                  n(d, m);
                  break;
                }
              else t(d, m);
              m = m.sibling;
            }
            (m = Il(h, d.mode, v)), (m.return = d), (d = m);
          }
          return a(d);
      }
    if (typeof h == "string" || typeof h == "number")
      return (
        (h = "" + h),
        m !== null && m.tag === 6
          ? (n(d, m.sibling), (m = o(m, h)), (m.return = d), (d = m))
          : (n(d, m), (m = Fl(h, d.mode, v)), (m.return = d), (d = m)),
        a(d)
      );
    if (Ar(h)) return y(d, m, h, v);
    if (Pn(h)) return E(d, m, h, v);
    if ((O && zr(d, h), typeof h == "undefined" && !S))
      switch (d.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(P(152, Zt(d.type) || "Component"));
      }
    return n(d, m);
  };
}
var xo = lf(!0),
  af = lf(!1),
  Nr = {},
  ze = vt(Nr),
  yr = vt(Nr),
  vr = vt(Nr);
function Tt(e) {
  if (e === Nr) throw Error(P(174));
  return e;
}
function ga(e, t) {
  switch ((Y(vr, t), Y(yr, e), Y(ze, Nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ea(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ea(t, e));
  }
  W(ze), Y(ze, t);
}
function mn() {
  W(ze), W(yr), W(vr);
}
function As(e) {
  Tt(vr.current);
  var t = Tt(ze.current),
    n = ea(t, e.type);
  t !== n && (Y(yr, e), Y(ze, n));
}
function ki(e) {
  yr.current === e && (W(ze), W(yr));
}
var V = vt(0);
function ko(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ye = null,
  nt = null,
  $e = !1;
function sf(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function ya(e) {
  if ($e) {
    var t = nt;
    if (t) {
      var n = t;
      if (!zs(e, t)) {
        if (((t = rn(n.nextSibling)), !t || !zs(e, t))) {
          (e.flags = (e.flags & -1025) | 2), ($e = !1), (Ye = e);
          return;
        }
        sf(Ye, n);
      }
      (Ye = e), (nt = rn(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), ($e = !1), (Ye = e);
  }
}
function $s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function $r(e) {
  if (e !== Ye) return !1;
  if (!$e) return $s(e), ($e = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !fa(t, e.memoizedProps)))
    for (t = nt; t; ) sf(e, t), (t = rn(t.nextSibling));
  if (($s(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = Ye ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function _l() {
  (nt = Ye = null), ($e = !1);
}
var ln = [];
function Ci() {
  for (var e = 0; e < ln.length; e++)
    ln[e]._workInProgressVersionPrimary = null;
  ln.length = 0;
}
var tr = jt.ReactCurrentDispatcher,
  Ne = jt.ReactCurrentBatchConfig,
  wr = 0,
  Q = null,
  ae = null,
  re = null,
  Co = !1,
  nr = !1;
function me() {
  throw Error(P(321));
}
function Ni(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ke(e[n], t[n])) return !1;
  return !0;
}
function Oi(e, t, n, r, o, l) {
  if (
    ((wr = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tr.current = e === null || e.memoizedState === null ? lp : ap),
    (e = n(r, o)),
    nr)
  ) {
    l = 0;
    do {
      if (((nr = !1), !(25 > l))) throw Error(P(301));
      (l += 1),
        (re = ae = null),
        (t.updateQueue = null),
        (tr.current = ip),
        (e = n(r, o));
    } while (nr);
  }
  if (
    ((tr.current = To),
    (t = ae !== null && ae.next !== null),
    (wr = 0),
    (re = ae = Q = null),
    (Co = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Q.memoizedState = re = e) : (re = re.next = e), re;
}
function At() {
  if (ae === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = re === null ? Q.memoizedState : re.next;
  if (t !== null) (re = t), (ae = e);
  else {
    if (e === null) throw Error(P(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      re === null ? (Q.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Ue(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bn(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (o = o.next), (r = r.baseState);
    var i = (a = l = null),
      s = o;
    do {
      var u = s.lane;
      if ((wr & u) === u)
        i !== null &&
          (i = i.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var f = {
          lane: u,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        i === null ? ((a = i = f), (l = r)) : (i = i.next = f),
          (Q.lanes |= u),
          (Or |= u);
      }
      s = s.next;
    } while (s !== null && s !== o);
    i === null ? (l = r) : (i.next = a),
      ke(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = i),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function Fn(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    ke(l, t.memoizedState) || (_e = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Bs(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (o !== null
      ? (e = o === r)
      : ((e = e.mutableReadLanes),
        (e = (wr & e) === e) &&
          ((t._workInProgressVersionPrimary = r), ln.push(t))),
    e)
  )
    return n(t._source);
  throw (ln.push(t), Error(P(350)));
}
function uf(e, t, n, r) {
  var o = fe;
  if (o === null) throw Error(P(349));
  var l = t._getVersion,
    a = l(t._source),
    i = tr.current,
    s = i.useState(function () {
      return Bs(o, t, n);
    }),
    u = s[1],
    f = s[0];
  s = re;
  var g = e.memoizedState,
    p = g.refs,
    w = p.getSnapshot,
    y = g.source;
  g = g.subscribe;
  var E = Q;
  return (
    (e.memoizedState = { refs: p, source: t, subscribe: r }),
    i.useEffect(
      function () {
        (p.getSnapshot = n), (p.setSnapshot = u);
        var d = l(t._source);
        if (!ke(a, d)) {
          (d = n(t._source)),
            ke(f, d) ||
              (u(d), (d = ut(E)), (o.mutableReadLanes |= d & o.pendingLanes)),
            (d = o.mutableReadLanes),
            (o.entangledLanes |= d);
          for (var m = o.entanglements, h = d; 0 < h; ) {
            var v = 31 - pt(h),
              S = 1 << v;
            (m[v] |= d), (h &= ~S);
          }
        }
      },
      [n, t, r]
    ),
    i.useEffect(
      function () {
        return r(t._source, function () {
          var d = p.getSnapshot,
            m = p.setSnapshot;
          try {
            m(d(t._source));
            var h = ut(E);
            o.mutableReadLanes |= h & o.pendingLanes;
          } catch (v) {
            m(function () {
              throw v;
            });
          }
        });
      },
      [t, r]
    ),
    (ke(w, n) && ke(y, t) && ke(g, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ue,
        lastRenderedState: f,
      }),
      (e.dispatch = u = Ri.bind(null, Q, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (f = Bs(o, t, n)),
      (s.memoizedState = s.baseState = f)),
    f
  );
}
function cf(e, t, n) {
  var r = At();
  return uf(r, e, t, n);
}
function In(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Ue,
        lastRenderedState: e,
      }),
    (e = e.dispatch = Ri.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function No(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ws(e) {
  var t = Rt();
  return (e = { current: e }), (t.memoizedState = e);
}
function Oo() {
  return At().memoizedState;
}
function va(e, t, n, r) {
  var o = Rt();
  (Q.flags |= e),
    (o.memoizedState = No(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
  var o = At();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ae !== null) {
    var a = ae.memoizedState;
    if (((l = a.destroy), r !== null && Ni(r, a.deps))) {
      No(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = No(1 | t, n, l, r));
}
function Hs(e, t) {
  return va(516, 4, e, t);
}
function Po(e, t) {
  return Pi(516, 4, e, t);
}
function ff(e, t) {
  return Pi(4, 2, e, t);
}
function df(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pi(4, 2, df.bind(null, t, e), n)
  );
}
function Ti() {}
function pf(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ni(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hf(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ni(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function op(e, t) {
  var n = dn();
  Mt(98 > n ? 98 : n, function () {
    e(!0);
  }),
    Mt(97 < n ? 97 : n, function () {
      var r = Ne.transition;
      Ne.transition = 1;
      try {
        e(!1), t();
      } finally {
        Ne.transition = r;
      }
    });
}
function Ri(e, t, n) {
  var r = ve(),
    o = ut(e),
    l = {
      lane: o,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    a = t.pending;
  if (
    (a === null ? (l.next = l) : ((l.next = a.next), (a.next = l)),
    (t.pending = l),
    (a = e.alternate),
    e === Q || (a !== null && a === Q))
  )
    nr = Co = !0;
  else {
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = a(i, n);
        if (((l.eagerReducer = a), (l.eagerState = s), ke(s, i))) return;
      } catch {
      } finally {
      }
    ct(e, o, r);
  }
}
var To = {
    readContext: Oe,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useOpaqueIdentifier: me,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: Hs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), va(4, 2, df.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return va(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = Ri.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: Ws,
    useState: In,
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var t = In(e),
        n = t[0],
        r = t[1];
      return (
        Hs(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = In(!1),
        t = e[0];
      return (e = op.bind(null, e[1])), Ws(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = Rt();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        uf(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if ($e) {
        var e = !1,
          t = Jm(function () {
            throw (
              (e || ((e = !0), n("r:" + (Tl++).toString(36))), Error(P(355)))
            );
          }),
          n = In(t)[1];
        return (
          (Q.mode & 2) === 0 &&
            ((Q.flags |= 516),
            No(
              5,
              function () {
                n("r:" + (Tl++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (Tl++).toString(36)), In(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  ap = {
    readContext: Oe,
    useCallback: pf,
    useContext: Oe,
    useEffect: Po,
    useImperativeHandle: mf,
    useLayoutEffect: ff,
    useMemo: hf,
    useReducer: bn,
    useRef: Oo,
    useState: function () {
      return bn(Ue);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var t = bn(Ue),
        n = t[0],
        r = t[1];
      return (
        Po(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = bn(Ue)[0];
      return [Oo().current, e];
    },
    useMutableSource: cf,
    useOpaqueIdentifier: function () {
      return bn(Ue)[0];
    },
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Oe,
    useCallback: pf,
    useContext: Oe,
    useEffect: Po,
    useImperativeHandle: mf,
    useLayoutEffect: ff,
    useMemo: hf,
    useReducer: Fn,
    useRef: Oo,
    useState: function () {
      return Fn(Ue);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var t = Fn(Ue),
        n = t[0],
        r = t[1];
      return (
        Po(
          function () {
            var o = Ne.transition;
            Ne.transition = 1;
            try {
              r(e);
            } finally {
              Ne.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = Fn(Ue)[0];
      return [Oo().current, e];
    },
    useMutableSource: cf,
    useOpaqueIdentifier: function () {
      return Fn(Ue)[0];
    },
    unstable_isNewReconciler: !1,
  },
  sp = jt.ReactCurrentOwner,
  _e = !1;
function pe(e, t, n, r) {
  t.child = e === null ? af(t, null, n, r) : xo(t, e.child, n, r);
}
function Vs(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    on(t, o),
    (r = Oi(e, t, n, r, l, o)),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        qe(e, t, o))
      : ((t.flags |= 1), pe(e, t, r, o), t.child)
  );
}
function Ys(e, t, n, r, o, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Fi(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), gf(e, t, a, r, o, l))
      : ((e = ro(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (a = e.child),
    (o & l) === 0 &&
    ((o = a.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : mr),
    n(o, r) && e.ref === t.ref)
      ? qe(e, t, l)
      : ((t.flags |= 1),
        (e = yt(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function gf(e, t, n, r, o, l) {
  if (e !== null && mr(e.memoizedProps, r) && e.ref === t.ref)
    if (((_e = !1), (l & o) !== 0)) (e.flags & 16384) !== 0 && (_e = !0);
    else return (t.lanes = e.lanes), qe(e, t, l);
  return wa(e, t, n, r, l);
}
function Ll(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), Wr(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), Wr(t, l !== null ? l.baseLanes : n);
    else
      return (
        (e = l !== null ? l.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        Wr(t, e),
        null
      );
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Wr(t, r);
  return pe(e, t, o, n), t.child;
}
function yf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function wa(e, t, n, r, o) {
  var l = ge(n) ? Lt : ce.current;
  return (
    (l = fn(t, l)),
    on(t, o),
    (n = Oi(e, t, n, r, l, o)),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        qe(e, t, o))
      : ((t.flags |= 1), pe(e, t, n, o), t.child)
  );
}
function qs(e, t, n, r, o) {
  if (ge(n)) {
    var l = !0;
    Jr(t);
  } else l = !1;
  if ((on(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      of(t, n, r),
      ha(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Oe(u))
      : ((u = ge(n) ? Lt : ce.current), (u = fn(t, u)));
    var f = n.getDerivedStateFromProps,
      g =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== r || s !== u) && Us(t, a, r, u)),
      (Je = !1);
    var p = t.memoizedState;
    (a.state = p),
      gr(t, r, a, o),
      (s = t.memoizedState),
      i !== r || p !== s || he.current || Je
        ? (typeof f == "function" && (So(t, n, f, r), (s = t.memoizedState)),
          (i = Je || js(t, n, i, r, p, s, u))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4),
          (r = !1));
  } else {
    (a = t.stateNode),
      nf(e, t),
      (i = t.memoizedProps),
      (u = t.type === t.elementType ? i : De(t.type, i)),
      (a.props = u),
      (g = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Oe(s))
        : ((s = ge(n) ? Lt : ce.current), (s = fn(t, s)));
    var w = n.getDerivedStateFromProps;
    (f =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== g || p !== s) && Us(t, a, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (a.state = p),
      gr(t, r, a, o);
    var y = t.memoizedState;
    i !== g || p !== y || he.current || Je
      ? (typeof w == "function" && (So(t, n, w, r), (y = t.memoizedState)),
        (u = Je || js(t, n, u, r, p, y, s))
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return Ea(e, t, n, r, l, o);
}
function Ea(e, t, n, r, o, l) {
  yf(e, t);
  var a = (t.flags & 64) !== 0;
  if (!r && !a) return o && Ls(t, n, !1), qe(e, t, l);
  (r = t.stateNode), (sp.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = xo(t, e.child, null, l)), (t.child = xo(t, null, i, l)))
      : pe(e, t, i, l),
    (t.memoizedState = r.state),
    o && Ls(t, n, !0),
    t.child
  );
}
function Qs(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _s(e, t.context, !1),
    ga(e, t.containerInfo);
}
var Br = { dehydrated: null, retryLane: 0 };
function Xs(e, t, n) {
  var r = t.pendingProps,
    o = V.current,
    l = !1,
    a;
  return (
    (a = (t.flags & 64) !== 0) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    Y(V, o & 1),
    e === null
      ? (r.fallback !== void 0 && ya(t),
        (e = r.children),
        (o = r.fallback),
        l
          ? ((e = Ks(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Br),
            e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = Ks(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Br),
            (t.lanes = 33554432),
            e)
          : ((n = Ii({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? l
        ? ((r = Js(e, t, r.children, r.fallback, n)),
          (l = t.child),
          (o = e.child.memoizedState),
          (l.memoizedState =
            o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = Br),
          r)
        : ((n = Gs(e, t, r.children, n)), (t.memoizedState = null), n)
      : l
      ? ((r = Js(e, t, r.children, r.fallback, n)),
        (l = t.child),
        (o = e.child.memoizedState),
        (l.memoizedState =
          o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Br),
        r)
      : ((n = Gs(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function Ks(e, t, n, r) {
  var o = e.mode,
    l = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (o & 2) === 0 && l !== null
      ? ((l.childLanes = 0), (l.pendingProps = t))
      : (l = Ii(t, o, 0, null)),
    (n = un(n, o, r, null)),
    (l.return = e),
    (n.return = e),
    (l.sibling = n),
    (e.child = l),
    n
  );
}
function Gs(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = yt(o, { mode: "visible", children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Js(e, t, n, r, o) {
  var l = t.mode,
    a = e.child;
  e = a.sibling;
  var i = { mode: "hidden", children: n };
  return (
    (l & 2) === 0 && t.child !== a
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = i),
        (a = n.lastEffect),
        a !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = a),
            (a.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = yt(a, i)),
    e !== null ? (r = yt(e, r)) : ((r = un(r, l, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Zs(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), tf(e.return, t);
}
function Ml(e, t, n, r, o, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o),
      (a.lastEffect = l));
}
function eu(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = V.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, n);
        else if (e.tag === 19) Zs(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(V, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ko(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ml(t, !1, o, n, l, t.lastEffect);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ko(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ml(t, !0, n, null, l, t.lastEffect);
        break;
      case "together":
        Ml(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
      for (
        e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = yt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var vf, Sa, wf, Ef;
vf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sa = function () {};
wf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Tt(ze.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ql(e, o)), (r = Ql(e, r)), (l = []);
        break;
      case "option":
        (o = Gl(e, o)), (r = Gl(e, r)), (l = []);
        break;
      case "select":
        (o = H({}, o, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Jl(e, o)), (r = Jl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ho);
    }
    ta(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var i = o[u];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ar.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((i = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== i && (s != null || i != null))
      )
        if (u === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                i[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ar.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && B("scroll", e),
                  l || i === s || (l = []))
                : typeof s == "object" && s !== null && s.$$typeof === ni
                ? s.toString()
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ef = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!$e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function up(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
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
      return null;
    case 1:
      return ge(t.type) && yo(), null;
    case 3:
      return (
        mn(),
        W(he),
        W(ce),
        Ci(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($r(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        Sa(t),
        null
      );
    case 5:
      ki(t);
      var o = Tt(vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return null;
        }
        if (((e = Tt(ze.current)), $r(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[tt] = t), (r[go] = l), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Vn.length; e++) B(Vn[e], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              es(r, l), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              ns(r, l), B("invalid", r);
          }
          ta(n, l), (e = null);
          for (var a in l)
            l.hasOwnProperty(a) &&
              ((o = l[a]),
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o && (e = ["children", o])
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (e = ["children", "" + o])
                : ar.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  B("scroll", r));
          switch (n) {
            case "input":
              Fr(r), ts(r, l, !0);
              break;
            case "textarea":
              Fr(r), rs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ho);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((a = o.nodeType === 9 ? o : o.ownerDocument),
            e === Zl.html && (e = dc(n)),
            e === Zl.html
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[tt] = t),
            (e[go] = r),
            vf(e, t, !1, !1),
            (t.stateNode = e),
            (a = na(n, r)),
            n)
          ) {
            case "dialog":
              B("cancel", e), B("close", e), (o = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", e), (o = r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vn.length; o++) B(Vn[o], e);
              o = r;
              break;
            case "source":
              B("error", e), (o = r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", e), B("load", e), (o = r);
              break;
            case "details":
              B("toggle", e), (o = r);
              break;
            case "input":
              es(e, r), (o = Ql(e, r)), B("invalid", e);
              break;
            case "option":
              o = Gl(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (o = H({}, r, { value: void 0 })),
                B("invalid", e);
              break;
            case "textarea":
              ns(e, r), (o = Jl(e, r)), B("invalid", e);
              break;
            default:
              o = r;
          }
          ta(n, o);
          var i = o;
          for (l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "style"
                ? hc(e, s)
                : l === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && mc(e, s))
                : l === "children"
                ? typeof s == "string"
                  ? (n !== "textarea" || s !== "") && ir(e, s)
                  : typeof s == "number" && ir(e, "" + s)
                : l !== "suppressContentEditableWarning" &&
                  l !== "suppressHydrationWarning" &&
                  l !== "autoFocus" &&
                  (ar.hasOwnProperty(l)
                    ? s != null && l === "onScroll" && B("scroll", e)
                    : s != null && Ka(e, l, s, a));
            }
          switch (n) {
            case "input":
              Fr(e), ts(e, r, !1);
              break;
            case "textarea":
              Fr(e), rs(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + mt(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? en(e, !!r.multiple, l, !1)
                  : r.defaultValue != null &&
                    en(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = ho);
          }
          Yc(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Ef(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        (n = Tt(vr.current)),
          Tt(ze.current),
          $r(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[tt] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[tt] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        W(V),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && $r(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (V.current & 1) !== 0
                ? oe === 0 && (oe = 3)
                : ((oe === 0 || oe === 3) && (oe = 4),
                  fe === null ||
                    ((Or & 134217727) === 0 && (En & 134217727) === 0) ||
                    an(fe, ue))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return mn(), Sa(t), e === null && Wc(t.stateNode.containerInfo), null;
    case 10:
      return Si(t), null;
    case 17:
      return ge(t.type) && yo(), null;
    case 19:
      if ((W(V), (r = t.memoizedState), r === null)) return null;
      if (((l = (t.flags & 64) !== 0), (a = r.rendering), a === null))
        if (l) jn(r, !1);
        else {
          if (oe !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = ko(e)), a !== null)) {
                for (
                  t.flags |= 64,
                    jn(r, !1),
                    l = a.updateQueue,
                    l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 2),
                    (l.nextEffect = null),
                    (l.firstEffect = null),
                    (l.lastEffect = null),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            se() > Pa &&
            ((t.flags |= 64), (l = !0), jn(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!l)
          if (((e = ko(a)), e !== null)) {
            if (
              ((t.flags |= 64),
              (l = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(r, !0),
              r.tail === null && r.tailMode === "hidden" && !a.alternate && !$e)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * se() - r.renderingStartTime > Pa &&
              n !== 1073741824 &&
              ((t.flags |= 64), (l = !0), jn(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = r.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (r.last = a));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = se()),
          (n.sibling = null),
          (t = V.current),
          Y(V, l ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        bi(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(P(156, t.tag));
}
function cp(e) {
  switch (e.tag) {
    case 1:
      ge(e.type) && yo();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((mn(), W(he), W(ce), Ci(), (t = e.flags), (t & 64) !== 0))
        throw Error(P(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return ki(e), null;
    case 13:
      return (
        W(V), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return W(V), null;
    case 4:
      return mn(), null;
    case 10:
      return Si(e), null;
    case 23:
    case 24:
      return bi(), null;
    default:
      return null;
  }
}
function Di(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fp = typeof WeakMap == "function" ? WeakMap : Map;
function Sf(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Do || ((Do = !0), (Ta = r)), xa(e, t);
    }),
    n
  );
}
function xf(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function () {
      return xa(e, t), r(o);
    };
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (Ae === null ? (Ae = new Set([this])) : Ae.add(this), xa(e, t));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
var dp = typeof WeakSet == "function" ? WeakSet : Set;
function tu(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        ft(e, n);
      }
    else t.current = null;
}
function mp(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : De(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && yi(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(P(163));
}
function pp(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var o = e;
          (r = o.next),
            (o = o.tag),
            (o & 4) !== 0 && (o & 1) !== 0 && (_f(n, e), xp(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : De(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && Is(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Is(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Yc(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Nc(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(P(163));
}
function nu(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == "function"
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        (o = o != null && o.hasOwnProperty("display") ? o.display : null),
          (r.style.display = pc("display", o));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function ru(e, t) {
  if (_t && typeof _t.onCommitFiberUnmount == "function")
    try {
      _t.onCommitFiberUnmount(vi, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            o = r.destroy;
          if (((r = r.tag), o !== void 0))
            if ((r & 4) !== 0) _f(t, n);
            else {
              r = t;
              try {
                o();
              } catch (l) {
                ft(r, l);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (tu(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (l) {
          ft(t, l);
        }
      break;
    case 5:
      tu(t);
      break;
    case 4:
      kf(e, t);
  }
}
function ou(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function lu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function au(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (lu(t)) break e;
      t = t.return;
    }
    throw Error(P(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(P(161));
  }
  n.flags & 16 && (ir(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || lu(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? ka(e, n, t) : Ca(e, n, t);
}
function ka(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ho));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
function Ca(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
function kf(e, t) {
  for (var n = t, r = !1, o, l; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(P(160));
        switch (((o = r.stateNode), r.tag)) {
          case 5:
            l = !1;
            break e;
          case 3:
            (o = o.containerInfo), (l = !0);
            break e;
          case 4:
            (o = o.containerInfo), (l = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var a = e, i = n, s = i; ; )
        if ((ru(a, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === i) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === i) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      l
        ? ((a = o),
          (i = n.stateNode),
          a.nodeType === 8 ? a.parentNode.removeChild(i) : a.removeChild(i))
        : o.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (o = n.stateNode.containerInfo),
          (l = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((ru(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function bl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : r;
        e = t.type;
        var l = t.updateQueue;
        if (((t.updateQueue = null), l !== null)) {
          for (
            n[go] = r,
              e === "input" && r.type === "radio" && r.name != null && cc(n, r),
              na(e, o),
              t = na(e, r),
              o = 0;
            o < l.length;
            o += 2
          ) {
            var a = l[o],
              i = l[o + 1];
            a === "style"
              ? hc(n, i)
              : a === "dangerouslySetInnerHTML"
              ? mc(n, i)
              : a === "children"
              ? ir(n, i)
              : Ka(n, a, i, t);
          }
          switch (e) {
            case "input":
              Xl(n, r);
              break;
            case "textarea":
              fc(n, r);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? en(n, !!r.multiple, l, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? en(n, !!r.multiple, r.defaultValue, !0)
                      : en(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(P(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Nc(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((Mi = se()), nu(t.child, !0)), iu(t);
      return;
    case 19:
      iu(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      nu(t, t.memoizedState !== null);
      return;
  }
  throw Error(P(163));
}
function iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var o = Np.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function hp(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var gp = Math.ceil,
  Ro = jt.ReactCurrentDispatcher,
  _i = jt.ReactCurrentOwner,
  L = 0,
  fe = null,
  G = null,
  ue = 0,
  bt = 0,
  Na = vt(0),
  oe = 0,
  Jo = null,
  wn = 0,
  Or = 0,
  En = 0,
  Li = 0,
  Oa = null,
  Mi = 0,
  Pa = 1 / 0;
function Sn() {
  Pa = se() + 500;
}
var _ = null,
  Do = !1,
  Ta = null,
  Ae = null,
  gt = !1,
  rr = null,
  Yn = 90,
  Ra = [],
  Da = [],
  Qe = null,
  or = 0,
  _a = null,
  eo = -1,
  Ve = 0,
  to = 0,
  lr = null,
  no = !1;
function ve() {
  return (L & 48) !== 0 ? se() : eo !== -1 ? eo : (eo = se());
}
function ut(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return dn() === 99 ? 1 : 2;
  if ((Ve === 0 && (Ve = wn), rp.transition !== 0)) {
    to !== 0 && (to = Oa !== null ? Oa.pendingLanes : 0), (e = Ve);
    var t = 4186112 & ~to;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = dn()),
    (L & 4) !== 0 && e === 98
      ? (e = mo(12, Ve))
      : ((e = am(e)), (e = mo(e, Ve))),
    e
  );
}
function ct(e, t, n) {
  if (50 < or) throw ((or = 0), (_a = null), Error(P(185)));
  if (((e = Zo(e, t)), e === null)) return null;
  Vo(e, t, n), e === fe && ((En |= t), oe === 4 && an(e, ue));
  var r = dn();
  t === 1
    ? (L & 8) !== 0 && (L & 48) === 0
      ? La(e)
      : (Pe(e, n), L === 0 && (Sn(), Be()))
    : ((L & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (Qe === null ? (Qe = new Set([e])) : Qe.add(e)),
      Pe(e, n)),
    (Oa = e);
}
function Zo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Pe(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      o = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - pt(a),
      s = 1 << i,
      u = l[i];
    if (u === -1) {
      if ((s & r) === 0 || (s & o) !== 0) {
        (u = t), Vt(s);
        var f = $;
        l[i] = 10 <= f ? u + 250 : 6 <= f ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= s);
    a &= ~s;
  }
  if (((r = fr(e, e === fe ? ue : 0)), (t = $), r === 0))
    n !== null &&
      (n !== Rl && ma(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== Rl && ma(n);
    }
    t === 15
      ? ((n = La.bind(null, e)),
        He === null ? ((He = [n]), (Zr = wi(Ko, ef))) : He.push(n),
        (n = Rl))
      : t === 14
      ? (n = hr(99, La.bind(null, e)))
      : ((n = im(t)), (n = hr(n, Cf.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Cf(e) {
  if (((eo = -1), (to = Ve = 0), (L & 48) !== 0)) throw Error(P(327));
  var t = e.callbackNode;
  if (wt() && e.callbackNode !== t) return null;
  var n = fr(e, e === fe ? ue : 0);
  if (n === 0) return null;
  var r = n,
    o = L;
  L |= 16;
  var l = Tf();
  (fe !== e || ue !== r) && (Sn(), sn(e, r));
  do
    try {
      wp();
      break;
    } catch (i) {
      Pf(e, i);
    }
  while (1);
  if (
    (Ei(),
    (Ro.current = l),
    (L = o),
    G !== null ? (r = 0) : ((fe = null), (ue = 0), (r = oe)),
    (wn & En) !== 0)
  )
    sn(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((L |= 64),
        e.hydrate && ((e.hydrate = !1), yi(e.containerInfo)),
        (n = Lc(e)),
        n !== 0 && (r = qn(e, n))),
      r === 1)
    )
      throw ((t = Jo), sn(e, 0), an(e, n), Pe(e, se()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(P(345));
      case 2:
        kt(e);
        break;
      case 3:
        if (
          (an(e, n), (n & 62914560) === n && ((r = Mi + 500 - se()), 10 < r))
        ) {
          if (fr(e, 0) !== 0) break;
          if (((o = e.suspendedLanes), (o & n) !== n)) {
            ve(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = Ts(kt.bind(null, e), r);
          break;
        }
        kt(e);
        break;
      case 4:
        if ((an(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var a = 31 - pt(n);
          (l = 1 << a), (a = r[a]), a > o && (o = a), (n &= ~l);
        }
        if (
          ((n = o),
          (n = se() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * gp(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Ts(kt.bind(null, e), n);
          break;
        }
        kt(e);
        break;
      case 5:
        kt(e);
        break;
      default:
        throw Error(P(329));
    }
  }
  return Pe(e, se()), e.callbackNode === t ? Cf.bind(null, e) : null;
}
function an(e, t) {
  for (
    t &= ~Li,
      t &= ~En,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function La(e) {
  if ((L & 48) !== 0) throw Error(P(327));
  if ((wt(), e === fe && (e.expiredLanes & ue) !== 0)) {
    var t = ue,
      n = qn(e, t);
    (wn & En) !== 0 && ((t = fr(e, t)), (n = qn(e, t)));
  } else (t = fr(e, 0)), (n = qn(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((L |= 64),
      e.hydrate && ((e.hydrate = !1), yi(e.containerInfo)),
      (t = Lc(e)),
      t !== 0 && (n = qn(e, t))),
    n === 1)
  )
    throw ((n = Jo), sn(e, 0), an(e, t), Pe(e, se()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e),
    Pe(e, se()),
    null
  );
}
function yp() {
  if (Qe !== null) {
    var e = Qe;
    (Qe = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Pe(t, se());
      });
  }
  Be();
}
function Nf(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && (Sn(), Be());
  }
}
function Of(e, t) {
  var n = L;
  (L &= -2), (L |= 8);
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && (Sn(), Be());
  }
}
function Wr(e, t) {
  Y(Na, bt), (bt |= t), (wn |= t);
}
function bi() {
  (bt = Na.current), W(Na);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gm(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && yo();
          break;
        case 3:
          mn(), W(he), W(ce), Ci();
          break;
        case 5:
          ki(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          W(V);
          break;
        case 19:
          W(V);
          break;
        case 10:
          Si(r);
          break;
        case 23:
        case 24:
          bi();
      }
      n = n.return;
    }
  (fe = e),
    (G = yt(e.current, null)),
    (ue = bt = wn = t),
    (oe = 0),
    (Jo = null),
    (Li = En = Or = 0);
}
function Pf(e, t) {
  do {
    var n = G;
    try {
      if ((Ei(), (tr.current = To), Co)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Co = !1;
      }
      if (
        ((wr = 0),
        (re = ae = Q = null),
        (nr = !1),
        (_i.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Jo = t), (G = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          s = t;
        if (
          ((t = ue),
          (i.flags |= 2048),
          (i.firstEffect = i.lastEffect = null),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s;
          if ((i.mode & 2) === 0) {
            var f = i.alternate;
            f
              ? ((i.updateQueue = f.updateQueue),
                (i.memoizedState = f.memoizedState),
                (i.lanes = f.lanes))
              : ((i.updateQueue = null), (i.memoizedState = null));
          }
          var g = (V.current & 1) !== 0,
            p = a;
          do {
            var w;
            if ((w = p.tag === 13)) {
              var y = p.memoizedState;
              if (y !== null) w = y.dehydrated !== null;
              else {
                var E = p.memoizedProps;
                w =
                  E.fallback === void 0
                    ? !1
                    : E.unstable_avoidThisFallback !== !0
                    ? !0
                    : !g;
              }
            }
            if (w) {
              var d = p.updateQueue;
              if (d === null) {
                var m = new Set();
                m.add(u), (p.updateQueue = m);
              } else d.add(u);
              if ((p.mode & 2) === 0) {
                if (
                  ((p.flags |= 64),
                  (i.flags |= 16384),
                  (i.flags &= -2981),
                  i.tag === 1)
                )
                  if (i.alternate === null) i.tag = 17;
                  else {
                    var h = it(-1, 1);
                    (h.tag = 2), st(i, h);
                  }
                i.lanes |= 1;
                break e;
              }
              (s = void 0), (i = t);
              var v = l.pingCache;
              if (
                (v === null
                  ? ((v = l.pingCache = new fp()), (s = new Set()), v.set(u, s))
                  : ((s = v.get(u)),
                    s === void 0 && ((s = new Set()), v.set(u, s))),
                !s.has(i))
              ) {
                s.add(i);
                var S = Cp.bind(null, l, u, i);
                u.then(S, S);
              }
              (p.flags |= 4096), (p.lanes = t);
              break e;
            }
            p = p.return;
          } while (p !== null);
          s = Error(
            (Zt(i.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        oe !== 5 && (oe = 2), (s = Di(s, i)), (p = a);
        do {
          switch (p.tag) {
            case 3:
              (l = s), (p.flags |= 4096), (t &= -t), (p.lanes |= t);
              var O = Sf(p, l, t);
              Fs(p, O);
              break e;
            case 1:
              l = s;
              var N = p.type,
                C = p.stateNode;
              if (
                (p.flags & 64) === 0 &&
                (typeof N.getDerivedStateFromError == "function" ||
                  (C !== null &&
                    typeof C.componentDidCatch == "function" &&
                    (Ae === null || !Ae.has(C))))
              ) {
                (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                var R = xf(p, l, t);
                Fs(p, R);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Df(n);
    } catch (T) {
      (t = T), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Tf() {
  var e = Ro.current;
  return (Ro.current = To), e === null ? To : e;
}
function qn(e, t) {
  var n = L;
  L |= 16;
  var r = Tf();
  (fe === e && ue === t) || sn(e, t);
  do
    try {
      vp();
      break;
    } catch (o) {
      Pf(e, o);
    }
  while (1);
  if ((Ei(), (L = n), (Ro.current = r), G !== null)) throw Error(P(261));
  return (fe = null), (ue = 0), oe;
}
function vp() {
  for (; G !== null; ) Rf(G);
}
function wp() {
  for (; G !== null && !ep(); ) Rf(G);
}
function Rf(e) {
  var t = Lf(e.alternate, e, bt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Df(e) : (G = t),
    (_i.current = null);
}
function Df(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = up(n, t, bt)), n !== null)) {
        G = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (bt & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, o = n.child; o !== null; )
          (r |= o.lanes | o.childLanes), (o = o.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = cp(t)), n !== null)) {
        (n.flags &= 2047), (G = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function kt(e) {
  var t = dn();
  return Mt(99, Ep.bind(null, e, t)), null;
}
function Ep(e, t) {
  do wt();
  while (rr !== null);
  if ((L & 48) !== 0) throw Error(P(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    o = r,
    l = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var a = e.eventTimes, i = e.expirationTimes; 0 < l; ) {
    var s = 31 - pt(l),
      u = 1 << s;
    (o[s] = 0), (a[s] = -1), (i[s] = -1), (l &= ~u);
  }
  if (
    (Qe !== null && (r & 24) === 0 && Qe.has(e) && Qe.delete(e),
    e === fe && ((G = fe = null), (ue = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((o = L), (L |= 32), (_i.current = null), (Ol = Xr), (a = Ss()), sa(a))
    ) {
      if ("selectionStart" in a)
        i = { start: a.selectionStart, end: a.selectionEnd };
      else
        e: if (
          ((i = ((i = a.ownerDocument) && i.defaultView) || window),
          (u = i.getSelection && i.getSelection()) && u.rangeCount !== 0)
        ) {
          (i = u.anchorNode),
            (l = u.anchorOffset),
            (s = u.focusNode),
            (u = u.focusOffset);
          try {
            i.nodeType, s.nodeType;
          } catch {
            i = null;
            break e;
          }
          var f = 0,
            g = -1,
            p = -1,
            w = 0,
            y = 0,
            E = a,
            d = null;
          t: for (;;) {
            for (
              var m;
              E !== i || (l !== 0 && E.nodeType !== 3) || (g = f + l),
                E !== s || (u !== 0 && E.nodeType !== 3) || (p = f + u),
                E.nodeType === 3 && (f += E.nodeValue.length),
                (m = E.firstChild) !== null;

            )
              (d = E), (E = m);
            for (;;) {
              if (E === a) break t;
              if (
                (d === i && ++w === l && (g = f),
                d === s && ++y === u && (p = f),
                (m = E.nextSibling) !== null)
              )
                break;
              (E = d), (d = E.parentNode);
            }
            E = m;
          }
          i = g === -1 || p === -1 ? null : { start: g, end: p };
        } else i = null;
      i = i || { start: 0, end: 0 };
    } else i = null;
    (Pl = { focusedElem: a, selectionRange: i }),
      (Xr = !1),
      (lr = null),
      (no = !1),
      (_ = r);
    do
      try {
        Sp();
      } catch (T) {
        if (_ === null) throw Error(P(330));
        ft(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    (lr = null), (_ = r);
    do
      try {
        for (a = e; _ !== null; ) {
          var h = _.flags;
          if ((h & 16 && ir(_.stateNode, ""), h & 128)) {
            var v = _.alternate;
            if (v !== null) {
              var S = v.ref;
              S !== null &&
                (typeof S == "function" ? S(null) : (S.current = null));
            }
          }
          switch (h & 1038) {
            case 2:
              au(_), (_.flags &= -3);
              break;
            case 6:
              au(_), (_.flags &= -3), bl(_.alternate, _);
              break;
            case 1024:
              _.flags &= -1025;
              break;
            case 1028:
              (_.flags &= -1025), bl(_.alternate, _);
              break;
            case 4:
              bl(_.alternate, _);
              break;
            case 8:
              (i = _), kf(a, i);
              var O = i.alternate;
              ou(i), O !== null && ou(O);
          }
          _ = _.nextEffect;
        }
      } catch (T) {
        if (_ === null) throw Error(P(330));
        ft(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    if (
      ((S = Pl),
      (v = Ss()),
      (h = S.focusedElem),
      (a = S.selectionRange),
      v !== h && h && h.ownerDocument && zc(h.ownerDocument.documentElement, h))
    ) {
      for (
        a !== null &&
          sa(h) &&
          ((v = a.start),
          (S = a.end),
          S === void 0 && (S = v),
          ("selectionStart" in h)
            ? ((h.selectionStart = v),
              (h.selectionEnd = Math.min(S, h.value.length)))
            : ((S =
                ((v = h.ownerDocument || document) && v.defaultView) || window),
              S.getSelection &&
                ((S = S.getSelection()),
                (i = h.textContent.length),
                (O = Math.min(a.start, i)),
                (a = a.end === void 0 ? O : Math.min(a.end, i)),
                !S.extend && O > a && ((i = a), (a = O), (O = i)),
                (i = Es(h, O)),
                (l = Es(h, a)),
                i &&
                  l &&
                  (S.rangeCount !== 1 ||
                    S.anchorNode !== i.node ||
                    S.anchorOffset !== i.offset ||
                    S.focusNode !== l.node ||
                    S.focusOffset !== l.offset) &&
                  ((v = v.createRange()),
                  v.setStart(i.node, i.offset),
                  S.removeAllRanges(),
                  O > a
                    ? (S.addRange(v), S.extend(l.node, l.offset))
                    : (v.setEnd(l.node, l.offset), S.addRange(v)))))),
          v = [],
          S = h;
        (S = S.parentNode);

      )
        S.nodeType === 1 &&
          v.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
      for (typeof h.focus == "function" && h.focus(), h = 0; h < v.length; h++)
        (S = v[h]),
          (S.element.scrollLeft = S.left),
          (S.element.scrollTop = S.top);
    }
    (Xr = !!Ol), (Pl = Ol = null), (e.current = n), (_ = r);
    do
      try {
        for (h = e; _ !== null; ) {
          var N = _.flags;
          if ((N & 36 && pp(h, _.alternate, _), N & 128)) {
            v = void 0;
            var C = _.ref;
            if (C !== null) {
              var R = _.stateNode;
              switch (_.tag) {
                case 5:
                  v = R;
                  break;
                default:
                  v = R;
              }
              typeof C == "function" ? C(v) : (C.current = v);
            }
          }
          _ = _.nextEffect;
        }
      } catch (T) {
        if (_ === null) throw Error(P(330));
        ft(_, T), (_ = _.nextEffect);
      }
    while (_ !== null);
    (_ = null), np(), (L = o);
  } else e.current = n;
  if (gt) (gt = !1), (rr = e), (Yn = t);
  else
    for (_ = r; _ !== null; )
      (t = _.nextEffect),
        (_.nextEffect = null),
        _.flags & 8 && ((N = _), (N.sibling = null), (N.stateNode = null)),
        (_ = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Ae = null),
    r === 1 ? (e === _a ? or++ : ((or = 0), (_a = e))) : (or = 0),
    (n = n.stateNode),
    _t && typeof _t.onCommitFiberRoot == "function")
  )
    try {
      _t.onCommitFiberRoot(vi, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((Pe(e, se()), Do)) throw ((Do = !1), (e = Ta), (Ta = null), e);
  return (L & 8) !== 0 || Be(), null;
}
function Sp() {
  for (; _ !== null; ) {
    var e = _.alternate;
    no ||
      lr === null ||
      ((_.flags & 8) !== 0
        ? as(_, lr) && (no = !0)
        : _.tag === 13 && hp(e, _) && as(_, lr) && (no = !0));
    var t = _.flags;
    (t & 256) !== 0 && mp(e, _),
      (t & 512) === 0 ||
        gt ||
        ((gt = !0),
        hr(97, function () {
          return wt(), null;
        })),
      (_ = _.nextEffect);
  }
}
function wt() {
  if (Yn !== 90) {
    var e = 97 < Yn ? 97 : Yn;
    return (Yn = 90), Mt(e, kp);
  }
  return !1;
}
function xp(e, t) {
  Ra.push(t, e),
    gt ||
      ((gt = !0),
      hr(97, function () {
        return wt(), null;
      }));
}
function _f(e, t) {
  Da.push(t, e),
    gt ||
      ((gt = !0),
      hr(97, function () {
        return wt(), null;
      }));
}
function kp() {
  if (rr === null) return !1;
  var e = rr;
  if (((rr = null), (L & 48) !== 0)) throw Error(P(331));
  var t = L;
  L |= 32;
  var n = Da;
  Da = [];
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r],
      l = n[r + 1],
      a = o.destroy;
    if (((o.destroy = void 0), typeof a == "function"))
      try {
        a();
      } catch (s) {
        if (l === null) throw Error(P(330));
        ft(l, s);
      }
  }
  for (n = Ra, Ra = [], r = 0; r < n.length; r += 2) {
    (o = n[r]), (l = n[r + 1]);
    try {
      var i = o.create;
      o.destroy = i();
    } catch (s) {
      if (l === null) throw Error(P(330));
      ft(l, s);
    }
  }
  for (i = e.current.firstEffect; i !== null; )
    (e = i.nextEffect),
      (i.nextEffect = null),
      i.flags & 8 && ((i.sibling = null), (i.stateNode = null)),
      (i = e);
  return (L = t), Be(), !0;
}
function su(e, t, n) {
  (t = Di(n, t)),
    (t = Sf(e, t, 1)),
    st(e, t),
    (t = ve()),
    (e = Zo(e, 1)),
    e !== null && (Vo(e, 1, t), Pe(e, t));
}
function ft(e, t) {
  if (e.tag === 3) su(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        su(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ae === null || !Ae.has(r)))
        ) {
          e = Di(t, e);
          var o = xf(n, e, 1);
          if ((st(n, o), (o = ve()), (n = Zo(n, 1)), n !== null))
            Vo(n, 1, o), Pe(n, o);
          else if (
            typeof r.componentDidCatch == "function" &&
            (Ae === null || !Ae.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function Cp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ue & n) === n &&
      (oe === 4 || (oe === 3 && (ue & 62914560) === ue && 500 > se() - Mi)
        ? sn(e, 0)
        : (Li |= n)),
    Pe(e, t);
}
function Np(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = dn() === 99 ? 1 : 2)
        : (Ve === 0 && (Ve = wn),
          (t = Yt(62914560 & ~Ve)),
          t === 0 && (t = 4194304))),
    (n = ve()),
    (e = Zo(e, t)),
    e !== null && (Vo(e, t, n), Pe(e, n));
}
var Lf;
Lf = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) _e = !0;
    else if ((n & r) !== 0) _e = (e.flags & 16384) !== 0;
    else {
      switch (((_e = !1), t.tag)) {
        case 3:
          Qs(t), _l();
          break;
        case 5:
          As(t);
          break;
        case 1:
          ge(t.type) && Jr(t);
          break;
        case 4:
          ga(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var o = t.type._context;
          Y(vo, o._currentValue), (o._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? Xs(e, t, n)
              : (Y(V, V.current & 1),
                (t = qe(e, t, n)),
                t !== null ? t.sibling : null);
          Y(V, V.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return eu(e, t, n);
            t.flags |= 64;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            Y(V, V.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), Ll(e, t, n);
      }
      return qe(e, t, n);
    }
  else _e = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = fn(t, ce.current)),
        on(t, n),
        (o = Oi(null, t, r, e, o, n)),
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ge(r))
        ) {
          var l = !0;
          Jr(t);
        } else l = !1;
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
          xi(t);
        var a = r.getDerivedStateFromProps;
        typeof a == "function" && So(t, r, a, e),
          (o.updater = Go),
          (t.stateNode = o),
          (o._reactInternals = t),
          ha(t, r, e, n),
          (t = Ea(null, t, r, !0, l, n));
      } else (t.tag = 0), pe(null, t, o, n), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (l = o._init),
          (o = l(o._payload)),
          (t.type = o),
          (l = t.tag = Pp(o)),
          (e = De(o, e)),
          l)
        ) {
          case 0:
            t = wa(null, t, o, e, n);
            break e;
          case 1:
            t = qs(null, t, o, e, n);
            break e;
          case 11:
            t = Vs(null, t, o, e, n);
            break e;
          case 14:
            t = Ys(null, t, o, De(o.type, e), r, n);
            break e;
        }
        throw Error(P(306, o, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        wa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        qs(e, t, r, o, n)
      );
    case 3:
      if ((Qs(t), (r = t.updateQueue), e === null || r === null))
        throw Error(P(282));
      if (
        ((r = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        nf(e, t),
        gr(t, r, null, n),
        (r = t.memoizedState.element),
        r === o)
      )
        _l(), (t = qe(e, t, n));
      else {
        if (
          ((o = t.stateNode),
          (l = o.hydrate) &&
            ((nt = rn(t.stateNode.containerInfo.firstChild)),
            (Ye = t),
            (l = $e = !0)),
          l)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (l = e[o]),
                (l._workInProgressVersionPrimary = e[o + 1]),
                ln.push(l);
          for (n = af(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else pe(e, t, r, n), _l();
        t = t.child;
      }
      return t;
    case 5:
      return (
        As(t),
        e === null && ya(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        fa(r, o) ? (a = null) : l !== null && fa(r, l) && (t.flags |= 16),
        yf(e, t),
        pe(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Xs(e, t, n);
    case 4:
      return (
        ga(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xo(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        Vs(e, t, r, o, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (l = o.value);
        var i = t.type._context;
        if ((Y(vo, i._currentValue), (i._currentValue = l), a !== null))
          if (
            ((i = a.value),
            (l = ke(i, l)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(i, l)
                  : 1073741823) | 0),
            l === 0)
          ) {
            if (a.children === o.children && !he.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r && (u.observedBits & l) !== 0) {
                    i.tag === 1 &&
                      ((u = it(-1, n & -n)), (u.tag = 2), st(i, u)),
                      (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      tf(i.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else a = i.tag === 10 && i.type === t.type ? null : i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        pe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (l = t.pendingProps),
        (r = l.children),
        on(t, n),
        (o = Oe(o, l.unstable_observedBits)),
        (r = r(o)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (l = De(o, t.pendingProps)),
        (l = De(o.type, l)),
        Ys(e, t, o, l, r, n)
      );
    case 15:
      return gf(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : De(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ge(r) ? ((e = !0), Jr(t)) : (e = !1),
        on(t, n),
        of(t, r, o),
        ha(t, r, o, n),
        Ea(null, t, r, !0, e, n)
      );
    case 19:
      return eu(e, t, n);
    case 23:
      return Ll(e, t, n);
    case 24:
      return Ll(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Op(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new Op(e, t, n, r);
}
function Fi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pp(e) {
  if (typeof e == "function") return Fi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bo)) return 11;
    if (e === Wo) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ro(e, t, n, r, o, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) Fi(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ze:
        return un(n.children, o, l, t);
      case ic:
        (a = 8), (o |= 16);
        break;
      case Ga:
        (a = 8), (o |= 1);
        break;
      case Qn:
        return (
          (e = Ce(12, n, t, o | 8)),
          (e.elementType = Qn),
          (e.type = Qn),
          (e.lanes = l),
          e
        );
      case Xn:
        return (
          (e = Ce(13, n, t, o)),
          (e.type = Xn),
          (e.elementType = Xn),
          (e.lanes = l),
          e
        );
      case so:
        return (e = Ce(19, n, t, o)), (e.elementType = so), (e.lanes = l), e;
      case ri:
        return Ii(n, o, l, t);
      case ql:
        return (e = Ce(24, n, t, o)), (e.elementType = ql), (e.lanes = l), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ja:
              a = 10;
              break e;
            case Za:
              a = 9;
              break e;
            case Bo:
              a = 11;
              break e;
            case Wo:
              a = 14;
              break e;
            case ei:
              (a = 16), (r = null);
              break e;
            case ti:
              a = 22;
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function un(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Ii(e, t, n, r) {
  return (e = Ce(23, e, r, t)), (e.elementType = ri), (e.lanes = n), e;
}
function Fl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Il(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tp(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Rp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _o(e, t, n, r) {
  var o = t.current,
    l = ve(),
    a = ut(o);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Ut(n) !== n || n.tag !== 1) throw Error(P(170));
      var i = n;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break t;
          case 1:
            if (ge(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(P(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ge(s)) {
        n = Qc(n, s, i);
        break e;
      }
    }
    n = i;
  } else n = ht;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    st(o, t),
    ct(o, a, l),
    a
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ji(e, t) {
  uu(e, t), (e = e.alternate) && uu(e, t);
}
function Dp() {
  return null;
}
function Ui(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new Tp(e, t, n != null && n.hydrate === !0)),
    (t = Ce(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    xi(t),
    (e[vn] = n.current),
    Wc(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var o = t._getVersion;
      (o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = n;
}
Ui.prototype.render = function (e) {
  _o(e, this._internalRoot, null, null);
};
Ui.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  _o(null, e, null, function () {
    t[vn] = null;
  });
};
function Pr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _p(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new Ui(e, 0, t ? { hydrate: !0 } : void 0);
}
function el(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l._internalRoot;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var u = jl(a);
        i.call(u);
      };
    }
    _o(t, a, e, o);
  } else {
    if (
      ((l = n._reactRootContainer = _p(n, r)),
      (a = l._internalRoot),
      typeof o == "function")
    ) {
      var s = o;
      o = function () {
        var u = jl(a);
        s.call(u);
      };
    }
    Of(function () {
      _o(t, a, e, o);
    });
  }
  return jl(a);
}
xc = function (e) {
  if (e.tag === 13) {
    var t = ve();
    ct(e, 4, t), ji(e, 4);
  }
};
si = function (e) {
  if (e.tag === 13) {
    var t = ve();
    ct(e, 67108864, t), ji(e, 67108864);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = ve(),
      n = ut(e);
    ct(e, n, t), ji(e, n);
  }
};
Cc = function (e, t) {
  return t();
};
ra = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xo(r);
            if (!o) throw Error(P(90));
            uc(r), Xl(r, o);
          }
        }
      }
      break;
    case "textarea":
      fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
li = Nf;
vc = function (e, t, n, r, o) {
  var l = L;
  L |= 4;
  try {
    return Mt(98, e.bind(null, t, n, r, o));
  } finally {
    (L = l), L === 0 && (Sn(), Be());
  }
};
ai = function () {
  (L & 49) === 0 && (yp(), wt());
};
wc = function (e, t) {
  var n = L;
  L |= 2;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && (Sn(), Be());
  }
};
function Mf(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pr(t)) throw Error(P(200));
  return Rp(e, t, null, n);
}
var Lp = { Events: [Cr, Kt, Xo, gc, yc, wt, { current: !1 }] },
  Un = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  Mp = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || Dp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      (vi = Hr.inject(Mp)), (_t = Hr);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
Te.createPortal = Mf;
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : Error(P(268, Object.keys(e)));
  return (e = Sc(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e, t) {
  var n = L;
  if ((n & 48) !== 0) return e(t);
  L |= 1;
  try {
    if (e) return Mt(99, e.bind(null, t));
  } finally {
    (L = n), Be();
  }
};
Te.hydrate = function (e, t, n) {
  if (!Pr(t)) throw Error(P(200));
  return el(null, e, t, !0, n);
};
Te.render = function (e, t, n) {
  if (!Pr(t)) throw Error(P(200));
  return el(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!Pr(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Of(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vn] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Nf;
Te.unstable_createPortal = function (e, t) {
  return Mf(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pr(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return el(e, t, n, !1, r);
};
Te.version = "17.0.2";
function bf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bf);
    } catch (e) {
      console.error(e);
    }
}
bf(), (rc.exports = Te);
var bp = rc.exports;
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Lo() {
  return (
    (Lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lo.apply(this, arguments)
  );
}
var rt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rt || (rt = {}));
const cu = "popstate";
function Fp(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: a, hash: i } = r.location;
    return Ma(
      "",
      { pathname: l, search: a, hash: i },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Er(o);
  }
  return Up(t, n, null, e);
}
function J(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function Ip() {
  return Math.random().toString(36).substr(2, 8);
}
function fu(e) {
  return { usr: e.state, key: e.key };
}
function Ma(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Lo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xn(t) : t,
      { state: n, key: (t && t.key) || r || Ip() }
    )
  );
}
function Er(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jp(e) {
  let t =
      typeof window != "undefined" &&
      typeof window.location != "undefined" &&
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href,
    n = typeof e == "string" ? e : Er(e);
  return (
    J(
      t,
      "No window.location.(origin|href) available to create URL for href: " + n
    ),
    new URL(n, t)
  );
}
function Up(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    a = o.history,
    i = rt.Pop,
    s = null;
  function u() {
    (i = rt.Pop), s && s({ action: i, location: p.location });
  }
  function f(w, y) {
    i = rt.Push;
    let E = Ma(p.location, w, y);
    n && n(E, w);
    let d = fu(E),
      m = p.createHref(E);
    try {
      a.pushState(d, "", m);
    } catch {
      o.location.assign(m);
    }
    l && s && s({ action: i, location: p.location });
  }
  function g(w, y) {
    i = rt.Replace;
    let E = Ma(p.location, w, y);
    n && n(E, w);
    let d = fu(E),
      m = p.createHref(E);
    a.replaceState(d, "", m), l && s && s({ action: i, location: p.location });
  }
  let p = {
    get action() {
      return i;
    },
    get location() {
      return e(o, a);
    },
    listen(w) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(cu, u),
        (s = w),
        () => {
          o.removeEventListener(cu, u), (s = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    encodeLocation(w) {
      let y = jp(typeof w == "string" ? w : Er(w));
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: g,
    go(w) {
      return a.go(w);
    },
  };
  return p;
}
var du;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(du || (du = {}));
function Ap(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xn(t) : t,
    o = jf(r.pathname || "/", n);
  if (o == null) return null;
  let l = Ff(e);
  zp(l);
  let a = null;
  for (let i = 0; a == null && i < l.length; ++i) a = Xp(l[i], Jp(o));
  return a;
}
function Ff(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, a, i) => {
    let s = {
      relativePath: i === void 0 ? l.path || "" : i,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: a,
      route: l,
    };
    s.relativePath.startsWith("/") &&
      (J(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = dt([r, s.relativePath]),
      f = n.concat(s);
    l.children &&
      l.children.length > 0 &&
      (J(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Ff(l.children, t, f, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: qp(u, l.index), routesMeta: f });
  };
  return (
    e.forEach((l, a) => {
      var i;
      if (l.path === "" || !((i = l.path) != null && i.includes("?"))) o(l, a);
      else for (let s of If(l.path)) o(l, a, s);
    }),
    t
  );
}
function If(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let a = If(r.join("/")),
    i = [];
  return (
    i.push(...a.map((s) => (s === "" ? l : [l, s].join("/")))),
    o && i.push(...a),
    i.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function zp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Qp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const $p = /^:\w+$/,
  Bp = 3,
  Wp = 2,
  Hp = 1,
  Vp = 10,
  Yp = -2,
  mu = (e) => e === "*";
function qp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(mu) && (r += Yp),
    t && (r += Wp),
    n
      .filter((o) => !mu(o))
      .reduce((o, l) => o + ($p.test(l) ? Bp : l === "" ? Hp : Vp), r)
  );
}
function Qp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Xp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let a = 0; a < n.length; ++a) {
    let i = n[a],
      s = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = Kp(
        { path: i.relativePath, caseSensitive: i.caseSensitive, end: s },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let g = i.route;
    l.push({
      params: r,
      pathname: dt([o, f.pathname]),
      pathnameBase: nh(dt([o, f.pathnameBase])),
      route: g,
    }),
      f.pathnameBase !== "/" && (o = dt([o, f.pathnameBase]));
  }
  return l;
}
function Kp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gp(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    a = l.replace(/(.)\/+$/, "$1"),
    i = o.slice(1);
  return {
    params: r.reduce((u, f, g) => {
      if (f === "*") {
        let p = i[g] || "";
        a = l.slice(0, l.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (u[f] = Zp(i[g] || "", f)), u;
    }, {}),
    pathname: l,
    pathnameBase: a,
    pattern: e,
  };
}
function Gp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ai(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, i) => (r.push(i), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Jp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ai(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Zp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ai(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function jf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ai(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function eh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? xn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : th(n, t)) : t,
    search: rh(r),
    hash: oh(o),
  };
}
function th(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ul(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Uf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Af(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = xn(e))
    : ((o = Lo({}, e)),
      J(
        !o.pathname || !o.pathname.includes("?"),
        Ul("?", "pathname", "search", o)
      ),
      J(
        !o.pathname || !o.pathname.includes("#"),
        Ul("#", "pathname", "hash", o)
      ),
      J(!o.search || !o.search.includes("#"), Ul("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    a = l ? "/" : o.pathname,
    i;
  if (r || a == null) i = n;
  else {
    let g = t.length - 1;
    if (a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (g -= 1);
      o.pathname = p.join("/");
    }
    i = g >= 0 ? t[g] : "/";
  }
  let s = eh(o, i),
    u = a && a !== "/" && a.endsWith("/"),
    f = (l || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const dt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  nh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  oh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class lh {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function ah(e) {
  return e instanceof lh;
}
const ih = ["post", "put", "patch", "delete"];
[...ih];
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ba() {
  return (
    (ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ba.apply(this, arguments)
  );
}
function sh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const uh = typeof Object.is == "function" ? Object.is : sh,
  { useState: ch, useEffect: fh, useLayoutEffect: dh, useDebugValue: mh } = Yl;
function ph(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = ch({ inst: { value: r, getSnapshot: t } });
  return (
    dh(() => {
      (o.value = r), (o.getSnapshot = t), Al(o) && l({ inst: o });
    }, [e, r, t]),
    fh(
      () => (
        Al(o) && l({ inst: o }),
        e(() => {
          Al(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    mh(r),
    r
  );
}
function Al(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !uh(n, r);
  } catch {
    return !0;
  }
}
function hh(e, t, n) {
  return t();
}
const gh =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  yh = !gh,
  vh = yh ? hh : ph;
"useSyncExternalStore" in Yl && ((e) => e.useSyncExternalStore)(Yl);
const zf = k.exports.createContext(null),
  $f = k.exports.createContext(null),
  tl = k.exports.createContext(null),
  nl = k.exports.createContext(null),
  zt = k.exports.createContext({ outlet: null, matches: [] }),
  Bf = k.exports.createContext(null);
function wh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Tr() || J(!1);
  let { basename: r, navigator: o } = k.exports.useContext(tl),
    { hash: l, pathname: a, search: i } = Wf(e, { relative: n }),
    s = a;
  return (
    r !== "/" && (s = a === "/" ? r : dt([r, a])),
    o.createHref({ pathname: s, search: i, hash: l })
  );
}
function Tr() {
  return k.exports.useContext(nl) != null;
}
function Rr() {
  return Tr() || J(!1), k.exports.useContext(nl).location;
}
function $t() {
  Tr() || J(!1);
  let { basename: e, navigator: t } = k.exports.useContext(tl),
    { matches: n } = k.exports.useContext(zt),
    { pathname: r } = Rr(),
    o = JSON.stringify(Uf(n).map((i) => i.pathnameBase)),
    l = k.exports.useRef(!1);
  return (
    k.exports.useEffect(() => {
      l.current = !0;
    }),
    k.exports.useCallback(
      function (i, s) {
        if ((s === void 0 && (s = {}), !l.current)) return;
        if (typeof i == "number") {
          t.go(i);
          return;
        }
        let u = Af(i, JSON.parse(o), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : dt([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, r]
    )
  );
}
function zi() {
  let { matches: e } = k.exports.useContext(zt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Wf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.exports.useContext(zt),
    { pathname: o } = Rr(),
    l = JSON.stringify(Uf(r).map((a) => a.pathnameBase));
  return k.exports.useMemo(
    () => Af(e, JSON.parse(l), o, n === "path"),
    [e, l, o, n]
  );
}
function Eh(e, t) {
  Tr() || J(!1);
  let { navigator: n } = k.exports.useContext(tl),
    r = k.exports.useContext($f),
    { matches: o } = k.exports.useContext(zt),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let i = l ? l.pathnameBase : "/";
  l && l.route;
  let s = Rr(),
    u;
  if (t) {
    var f;
    let E = typeof t == "string" ? xn(t) : t;
    i === "/" || ((f = E.pathname) == null ? void 0 : f.startsWith(i)) || J(!1),
      (u = E);
  } else u = s;
  let g = u.pathname || "/",
    p = i === "/" ? g : g.slice(i.length) || "/",
    w = Ap(e, { pathname: p }),
    y = Ch(
      w &&
        w.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: dt([
              i,
              n.encodeLocation
                ? n.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? i
                : dt([
                    i,
                    n.encodeLocation
                      ? n.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && y
    ? k.exports.createElement(
        nl.Provider,
        {
          value: {
            location: ba(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: rt.Pop,
          },
        },
        y
      )
    : y;
}
function Sh() {
  let e = Th(),
    t = ah(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    l = { padding: "2px 4px", backgroundColor: r };
  return k.exports.createElement(
    k.exports.Fragment,
    null,
    k.exports.createElement("h2", null, "Unhandled Thrown Error!"),
    k.exports.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.exports.createElement("pre", { style: o }, n) : null,
    k.exports.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"),
    k.exports.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
      k.exports.createElement("code", { style: l }, "errorElement"),
      " props on\xA0",
      k.exports.createElement("code", { style: l }, "<Route>")
    )
  );
}
class xh extends k.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.exports.createElement(
          zt.Provider,
          { value: this.props.routeContext },
          k.exports.createElement(Bf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function kh(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.exports.useContext(zf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      n.route.errorElement &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.exports.createElement(zt.Provider, { value: t }, r)
  );
}
function Ch(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let l = r.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    l >= 0 || J(!1), (r = r.slice(0, Math.min(r.length, l + 1)));
  }
  return r.reduceRight((l, a, i) => {
    let s = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = n ? a.route.errorElement || k.exports.createElement(Sh, null) : null,
      f = t.concat(r.slice(0, i + 1)),
      g = () =>
        k.exports.createElement(
          kh,
          { match: a, routeContext: { outlet: l, matches: f } },
          s ? u : a.route.element !== void 0 ? a.route.element : l
        );
    return n && (a.route.errorElement || i === 0)
      ? k.exports.createElement(xh, {
          location: n.location,
          component: u,
          error: s,
          children: g(),
          routeContext: { outlet: null, matches: f },
        })
      : g();
  }, null);
}
var pu;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(pu || (pu = {}));
var Mo;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Mo || (Mo = {}));
function Nh(e) {
  let t = k.exports.useContext($f);
  return t || J(!1), t;
}
function Oh(e) {
  let t = k.exports.useContext(zt);
  return t || J(!1), t;
}
function Ph(e) {
  let t = Oh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || J(!1), n.route.id;
}
function Th() {
  var e;
  let t = k.exports.useContext(Bf),
    n = Nh(Mo.UseRouteError),
    r = Ph(Mo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ie(e) {
  J(!1);
}
function Rh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = rt.Pop,
    navigator: l,
    static: a = !1,
  } = e;
  Tr() && J(!1);
  let i = t.replace(/^\/*/, "/"),
    s = k.exports.useMemo(
      () => ({ basename: i, navigator: l, static: a }),
      [i, l, a]
    );
  typeof r == "string" && (r = xn(r));
  let {
      pathname: u = "/",
      search: f = "",
      hash: g = "",
      state: p = null,
      key: w = "default",
    } = r,
    y = k.exports.useMemo(() => {
      let E = jf(u, i);
      return E == null
        ? null
        : { pathname: E, search: f, hash: g, state: p, key: w };
    }, [i, u, f, g, p, w]);
  return y == null
    ? null
    : k.exports.createElement(
        tl.Provider,
        { value: s },
        k.exports.createElement(nl.Provider, {
          children: n,
          value: { location: y, navigationType: o },
        })
      );
}
function Dh(e) {
  let { children: t, location: n } = e,
    r = k.exports.useContext(zf),
    o = r && !t ? r.router.routes : Fa(t);
  return Eh(o, n);
}
var hu;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(hu || (hu = {}));
new Promise(() => {});
function Fa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.exports.Children.forEach(e, (r, o) => {
      if (!k.exports.isValidElement(r)) return;
      if (r.type === k.exports.Fragment) {
        n.push.apply(n, Fa(r.props.children, t));
        return;
      }
      r.type !== Ie && J(!1), !r.props.index || !r.props.children || J(!1);
      let l = [...t, o],
        a = {
          id: r.props.id || l.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = Fa(r.props.children, l)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ia.apply(this, arguments)
  );
}
function _h(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Lh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Lh(e);
}
const bh = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Fh(e) {
  let { basename: t, children: n, window: r } = e,
    o = k.exports.useRef();
  o.current == null && (o.current = Fp({ window: r, v5Compat: !0 }));
  let l = o.current,
    [a, i] = k.exports.useState({ action: l.action, location: l.location });
  return (
    k.exports.useLayoutEffect(() => l.listen(i), [l]),
    k.exports.createElement(Rh, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
    })
  );
}
const Ih = k.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: o,
      reloadDocument: l,
      replace: a,
      state: i,
      target: s,
      to: u,
      preventScrollReset: f,
    } = t,
    g = _h(t, bh),
    p = wh(u, { relative: o }),
    w = jh(u, {
      replace: a,
      state: i,
      target: s,
      preventScrollReset: f,
      relative: o,
    });
  function y(E) {
    r && r(E), E.defaultPrevented || w(E);
  }
  return k.exports.createElement(
    "a",
    Ia({}, g, { href: p, onClick: l ? r : y, ref: n, target: s })
  );
});
var gu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(gu || (gu = {}));
var yu;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(yu || (yu = {}));
function jh(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: a,
    } = t === void 0 ? {} : t,
    i = $t(),
    s = Rr(),
    u = Wf(e, { relative: a });
  return k.exports.useCallback(
    (f) => {
      if (Mh(f, n)) {
        f.preventDefault();
        let g = r !== void 0 ? r : Er(s) === Er(u);
        i(e, { replace: g, state: o, preventScrollReset: l, relative: a });
      }
    },
    [s, i, u, r, o, n, e, l, a]
  );
}
function Hf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Uh } = Object.prototype,
  { getPrototypeOf: $i } = Object,
  rl = ((e) => (t) => {
    const n = Uh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Me = (e) => ((e = e.toLowerCase()), (t) => rl(t) === e),
  ol = (e) => (t) => typeof t === e,
  { isArray: kn } = Array,
  Sr = ol("undefined");
function Ah(e) {
  return (
    e !== null &&
    !Sr(e) &&
    e.constructor !== null &&
    !Sr(e.constructor) &&
    we(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Vf = Me("ArrayBuffer");
function zh(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Vf(e.buffer)),
    t
  );
}
const $h = ol("string"),
  we = ol("function"),
  Yf = ol("number"),
  ll = (e) => e !== null && typeof e == "object",
  Bh = (e) => e === !0 || e === !1,
  oo = (e) => {
    if (rl(e) !== "object") return !1;
    const t = $i(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Wh = Me("Date"),
  Hh = Me("File"),
  Vh = Me("Blob"),
  Yh = Me("FileList"),
  qh = (e) => ll(e) && we(e.pipe),
  Qh = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (we(e.append) &&
          ((t = rl(e)) === "formdata" ||
            (t === "object" &&
              we(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Xh = Me("URLSearchParams"),
  [Kh, Gh, Jh, Zh] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Me
  ),
  eg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), kn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = l.length;
    let i;
    for (r = 0; r < a; r++) (i = l[r]), t.call(null, e[i], i, e);
  }
}
function qf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Dt = (() =>
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : global)(),
  Qf = (e) => !Sr(e) && e !== Dt;
function ja() {
  const { caseless: e } = (Qf(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && qf(t, o)) || o;
      oo(t[l]) && oo(r)
        ? (t[l] = ja(t[l], r))
        : oo(r)
        ? (t[l] = ja({}, r))
        : kn(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Dr(arguments[r], n);
  return t;
}
const tg = (e, t, n, { allOwnKeys: r } = {}) => (
    Dr(
      t,
      (o, l) => {
        n && we(o) ? (e[l] = Hf(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ng = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  rg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  og = (e, t, n, r) => {
    let o, l, a;
    const i = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (a = o[l]), (!r || r(a, e, t)) && !i[a] && ((t[a] = e[a]), (i[a] = !0));
      e = n !== !1 && $i(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  lg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  ag = (e) => {
    if (!e) return null;
    if (kn(e)) return e;
    let t = e.length;
    if (!Yf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ig = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && $i(Uint8Array)),
  sg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  ug = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  cg = Me("HTMLFormElement"),
  fg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  vu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  dg = Me("RegExp"),
  Xf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Dr(n, (o, l) => {
      let a;
      (a = t(o, l, e)) !== !1 && (r[l] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  mg = (e) => {
    Xf(e, (t, n) => {
      if (we(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (!!we(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  pg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return kn(e) ? r(e) : r(String(e).split(t)), n;
  },
  hg = () => {},
  gg = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  zl = "abcdefghijklmnopqrstuvwxyz",
  wu = "0123456789",
  Kf = { DIGIT: wu, ALPHA: zl, ALPHA_DIGIT: zl + zl.toUpperCase() + wu },
  yg = (e = 16, t = Kf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function vg(e) {
  return !!(
    e &&
    we(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ll(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = kn(r) ? [] : {};
            return (
              Dr(r, (a, i) => {
                const s = n(a, o + 1);
                !Sr(s) && (l[i] = s);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Eg = Me("AsyncFunction"),
  Sg = (e) => e && (ll(e) || we(e)) && we(e.then) && we(e.catch),
  Gf = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Dt.addEventListener(
            "message",
            ({ source: o, data: l }) => {
              o === Dt && l === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), Dt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    we(Dt.postMessage)
  ),
  xg =
    typeof queueMicrotask != "undefined"
      ? queueMicrotask.bind(Dt)
      : (typeof process != "undefined" && process.nextTick) || Gf;
var x = {
  isArray: kn,
  isArrayBuffer: Vf,
  isBuffer: Ah,
  isFormData: Qh,
  isArrayBufferView: zh,
  isString: $h,
  isNumber: Yf,
  isBoolean: Bh,
  isObject: ll,
  isPlainObject: oo,
  isReadableStream: Kh,
  isRequest: Gh,
  isResponse: Jh,
  isHeaders: Zh,
  isUndefined: Sr,
  isDate: Wh,
  isFile: Hh,
  isBlob: Vh,
  isRegExp: dg,
  isFunction: we,
  isStream: qh,
  isURLSearchParams: Xh,
  isTypedArray: ig,
  isFileList: Yh,
  forEach: Dr,
  merge: ja,
  extend: tg,
  trim: eg,
  stripBOM: ng,
  inherits: rg,
  toFlatObject: og,
  kindOf: rl,
  kindOfTest: Me,
  endsWith: lg,
  toArray: ag,
  forEachEntry: sg,
  matchAll: ug,
  isHTMLForm: cg,
  hasOwnProperty: vu,
  hasOwnProp: vu,
  reduceDescriptors: Xf,
  freezeMethods: mg,
  toObjectSet: pg,
  toCamelCase: fg,
  noop: hg,
  toFiniteNumber: gg,
  findKey: qf,
  global: Dt,
  isContextDefined: Qf,
  ALPHABET: Kf,
  generateString: yg,
  isSpecCompliantForm: vg,
  toJSONObject: wg,
  isAsyncFn: Eg,
  isThenable: Sg,
  setImmediate: Gf,
  asap: xg,
};
function b(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
x.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Jf = b.prototype,
  Zf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Zf[e] = { value: e };
});
Object.defineProperties(b, Zf);
Object.defineProperty(Jf, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, o, l) => {
  const a = Object.create(Jf);
  return (
    x.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (i) => i !== "isAxiosError"
    ),
    b.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    l && Object.assign(a, l),
    a
  );
};
var kg = null;
function Ua(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function ed(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Eu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = ed(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Cg(e) {
  return x.isArray(e) && !e.some(Ua);
}
const Ng = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function al(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, d) {
        return !x.isUndefined(d[E]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    l = n.dots,
    a = n.indexes,
    s =
      (n.Blob || (typeof Blob != "undefined" && Blob)) &&
      x.isSpecCompliantForm(t);
  if (!x.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (x.isDate(y)) return y.toISOString();
    if (!s && x.isBlob(y))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y)
      ? s && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, E, d) {
    let m = y;
    if (y && !d && typeof y == "object") {
      if (x.endsWith(E, "{}"))
        (E = r ? E : E.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (x.isArray(y) && Cg(y)) ||
        ((x.isFileList(y) || x.endsWith(E, "[]")) && (m = x.toArray(y)))
      )
        return (
          (E = ed(E)),
          m.forEach(function (v, S) {
            !(x.isUndefined(v) || v === null) &&
              t.append(
                a === !0 ? Eu([E], S, l) : a === null ? E : E + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return Ua(y) ? !0 : (t.append(Eu(d, E, l), u(y)), !1);
  }
  const g = [],
    p = Object.assign(Ng, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: Ua,
    });
  function w(y, E) {
    if (!x.isUndefined(y)) {
      if (g.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      g.push(y),
        x.forEach(y, function (m, h) {
          (!(x.isUndefined(m) || m === null) &&
            o.call(t, m, x.isString(h) ? h.trim() : h, E, p)) === !0 &&
            w(m, E ? E.concat(h) : [h]);
        }),
        g.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Su(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Bi(e, t) {
  (this._pairs = []), e && al(e, this, t);
}
const td = Bi.prototype;
td.append = function (t, n) {
  this._pairs.push([t, n]);
};
td.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Su);
      }
    : Su;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Og(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function nd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Og;
  x.isFunction(n) && (n = { serialize: n });
  const o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = x.isURLSearchParams(t) ? t.toString() : new Bi(t, n).toString(r)),
    l)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class Pg {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
var xu = Pg,
  rd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Tg = typeof URLSearchParams != "undefined" ? URLSearchParams : Bi,
  Rg = typeof FormData != "undefined" ? FormData : null,
  Dg = typeof Blob != "undefined" ? Blob : null,
  _g = {
    isBrowser: !0,
    classes: { URLSearchParams: Tg, FormData: Rg, Blob: Dg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
const Wi = typeof window != "undefined" && typeof document != "undefined",
  Aa = (typeof navigator == "object" && navigator) || void 0,
  Lg =
    Wi &&
    (!Aa || ["ReactNative", "NativeScript", "NS"].indexOf(Aa.product) < 0),
  Mg = (() =>
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  bg = (Wi && window.location.href) || "http://localhost";
var Fg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Wi,
        hasStandardBrowserWebWorkerEnv: Mg,
        hasStandardBrowserEnv: Lg,
        navigator: Aa,
        origin: bg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ie = { ...Fg, ..._g };
function Ig(e, t) {
  return al(
    e,
    new ie.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return ie.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function jg(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Ug(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function od(e) {
  function t(n, r, o, l) {
    let a = n[l++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a),
      s = l >= n.length;
    return (
      (a = !a && x.isArray(o) ? o.length : a),
      s
        ? (x.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !i)
        : ((!o[a] || !x.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], l) && x.isArray(o[a]) && (o[a] = Ug(o[a])),
          !i)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, o) => {
        t(jg(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Ag(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Hi = {
  transitional: rd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = x.isObject(t);
      if ((l && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return o ? JSON.stringify(od(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t) ||
        x.isReadableStream(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let i;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ig(t, this.formSerializer).toString();
        if ((i = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return al(
            i ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), Ag(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hi.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (x.isResponse(t) || x.isReadableStream(t)) return t;
      if (t && x.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError"
              ? b.from(i, b.ERR_BAD_RESPONSE, this, null, this.response)
              : i;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ie.classes.FormData, Blob: ie.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hi.headers[e] = {};
});
var Vi = Hi;
const zg = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
var $g = (e) => {
  const t = {};
  let n, r, o;
  return (
    e &&
      e
        .split(
          `
`
        )
        .forEach(function (a) {
          (o = a.indexOf(":")),
            (n = a.substring(0, o).trim().toLowerCase()),
            (r = a.substring(o + 1).trim()),
            !(!n || (t[n] && zg[n])) &&
              (n === "set-cookie"
                ? t[n]
                  ? t[n].push(r)
                  : (t[n] = [r])
                : (t[n] = t[n] ? t[n] + ", " + r : r));
        }),
    t
  );
};
const ku = Symbol("internals");
function An(e) {
  return e && String(e).trim().toLowerCase();
}
function lo(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(lo) : String(e);
}
function Bg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Wg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $l(e, t, n, r, o) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function Hg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Vg(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, a) {
        return this[r].call(this, t, o, l, a);
      },
      configurable: !0,
    });
  });
}
class il {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(i, s, u) {
      const f = An(s);
      if (!f) throw new Error("header name must be a non-empty string");
      const g = x.findKey(o, f);
      (!g || o[g] === void 0 || u === !0 || (u === void 0 && o[g] !== !1)) &&
        (o[g || s] = lo(i));
    }
    const a = (i, s) => x.forEach(i, (u, f) => l(u, f, s));
    if (x.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (x.isString(t) && (t = t.trim()) && !Wg(t)) a($g(t), n);
    else if (x.isHeaders(t)) for (const [i, s] of t.entries()) l(s, i, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = An(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Bg(o);
        if (x.isFunction(n)) return n.call(this, o, r);
        if (x.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = An(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $l(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(a) {
      if (((a = An(a)), a)) {
        const i = x.findKey(r, a);
        i && (!n || $l(r, r[i], i, n)) && (delete r[i], (o = !0));
      }
    }
    return x.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || $l(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (o, l) => {
        const a = x.findKey(r, l);
        if (a) {
          (n[a] = lo(o)), delete n[l];
          return;
        }
        const i = t ? Hg(l) : String(l).trim();
        i !== l && delete n[l], (n[i] = lo(o)), (r[i] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ku] = this[ku] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(a) {
      const i = An(a);
      r[i] || (Vg(o, a), (r[i] = !0));
    }
    return x.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
il.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(il.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(il);
var Le = il;
function Bl(e, t) {
  const n = this || Vi,
    r = t || n,
    o = Le.from(r.headers);
  let l = r.data;
  return (
    x.forEach(e, function (i) {
      l = i.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function ld(e) {
  return !!(e && e.__CANCEL__);
}
function Cn(e, t, n) {
  b.call(this, e == null ? "canceled" : e, b.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(Cn, b, { __CANCEL__: !0 });
function ad(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new b(
          "Request failed with status code " + n.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Yg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function qg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        f = r[l];
      a || (a = u), (n[o] = s), (r[o] = u);
      let g = l,
        p = 0;
      for (; g !== o; ) (p += n[g++]), (g = g % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), u - a < t)) return;
      const w = f && u - f;
      return w ? Math.round((p * 1e3) / w) : void 0;
    }
  );
}
function Qg(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    l;
  const a = (u, f = Date.now()) => {
    (n = f), (o = null), l && (clearTimeout(l), (l = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const f = Date.now(),
        g = f - n;
      g >= r
        ? a(u, f)
        : ((o = u),
          l ||
            (l = setTimeout(() => {
              (l = null), a(o);
            }, r - g)));
    },
    () => o && a(o),
  ];
}
const bo = (e, t, n = 3) => {
    let r = 0;
    const o = qg(50, 250);
    return Qg((l) => {
      const a = l.loaded,
        i = l.lengthComputable ? l.total : void 0,
        s = a - r,
        u = o(s),
        f = a <= i;
      r = a;
      const g = {
        loaded: a,
        total: i,
        progress: i ? a / i : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && i && f ? (i - a) / u : void 0,
        event: l,
        lengthComputable: i != null,
        [t ? "download" : "upload"]: !0,
      };
      e(g);
    }, n);
  },
  Cu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Nu =
    (e) =>
    (...t) =>
      x.asap(() => e(...t));
var Xg = ie.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ie.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ie.origin),
        ie.navigator && /(msie|trident)/i.test(ie.navigator.userAgent)
      )
    : () => !0,
  Kg = ie.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l) {
          const a = [e + "=" + encodeURIComponent(t)];
          x.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            x.isString(r) && a.push("path=" + r),
            x.isString(o) && a.push("domain=" + o),
            l === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Gg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function id(e, t) {
  return e && !Gg(t) ? Jg(e, t) : t;
}
const Ou = (e) => (e instanceof Le ? { ...e } : e);
function Ft(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, g, p) {
    return x.isPlainObject(u) && x.isPlainObject(f)
      ? x.merge.call({ caseless: p }, u, f)
      : x.isPlainObject(f)
      ? x.merge({}, f)
      : x.isArray(f)
      ? f.slice()
      : f;
  }
  function o(u, f, g, p) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(u)) return r(void 0, u, g, p);
    } else return r(u, f, g, p);
  }
  function l(u, f) {
    if (!x.isUndefined(f)) return r(void 0, f);
  }
  function a(u, f) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function i(u, f, g) {
    if (g in t) return r(u, f);
    if (g in e) return r(void 0, u);
  }
  const s = {
    url: l,
    method: l,
    data: l,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (u, f, g) => o(Ou(u), Ou(f), g, !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const g = s[f] || o,
        p = g(e[f], t[f], f);
      (x.isUndefined(p) && g !== i) || (n[f] = p);
    }),
    n
  );
}
var sd = (e) => {
  const t = Ft({}, e);
  let {
    data: n,
    withXSRFToken: r,
    xsrfHeaderName: o,
    xsrfCookieName: l,
    headers: a,
    auth: i,
  } = t;
  (t.headers = a = Le.from(a)),
    (t.url = nd(id(t.baseURL, t.url), e.params, e.paramsSerializer)),
    i &&
      a.set(
        "Authorization",
        "Basic " +
          btoa(
            (i.username || "") +
              ":" +
              (i.password ? unescape(encodeURIComponent(i.password)) : "")
          )
      );
  let s;
  if (x.isFormData(n)) {
    if (ie.hasStandardBrowserEnv || ie.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((s = a.getContentType()) !== !1) {
      const [u, ...f] = s
        ? s
            .split(";")
            .map((g) => g.trim())
            .filter(Boolean)
        : [];
      a.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (
    ie.hasStandardBrowserEnv &&
    (r && x.isFunction(r) && (r = r(t)), r || (r !== !1 && Xg(t.url)))
  ) {
    const u = o && l && Kg.read(l);
    u && a.set(o, u);
  }
  return t;
};
const Zg = typeof XMLHttpRequest != "undefined";
var e0 =
  Zg &&
  function (e) {
    return new Promise(function (n, r) {
      const o = sd(e);
      let l = o.data;
      const a = Le.from(o.headers).normalize();
      let { responseType: i, onUploadProgress: s, onDownloadProgress: u } = o,
        f,
        g,
        p,
        w,
        y;
      function E() {
        w && w(),
          y && y(),
          o.cancelToken && o.cancelToken.unsubscribe(f),
          o.signal && o.signal.removeEventListener("abort", f);
      }
      let d = new XMLHttpRequest();
      d.open(o.method.toUpperCase(), o.url, !0), (d.timeout = o.timeout);
      function m() {
        if (!d) return;
        const v = Le.from(
            "getAllResponseHeaders" in d && d.getAllResponseHeaders()
          ),
          O = {
            data:
              !i || i === "text" || i === "json" ? d.responseText : d.response,
            status: d.status,
            statusText: d.statusText,
            headers: v,
            config: e,
            request: d,
          };
        ad(
          function (C) {
            n(C), E();
          },
          function (C) {
            r(C), E();
          },
          O
        ),
          (d = null);
      }
      "onloadend" in d
        ? (d.onloadend = m)
        : (d.onreadystatechange = function () {
            !d ||
              d.readyState !== 4 ||
              (d.status === 0 &&
                !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
              setTimeout(m);
          }),
        (d.onabort = function () {
          !d || (r(new b("Request aborted", b.ECONNABORTED, e, d)), (d = null));
        }),
        (d.onerror = function () {
          r(new b("Network Error", b.ERR_NETWORK, e, d)), (d = null);
        }),
        (d.ontimeout = function () {
          let S = o.timeout
            ? "timeout of " + o.timeout + "ms exceeded"
            : "timeout exceeded";
          const O = o.transitional || rd;
          o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
            r(
              new b(
                S,
                O.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                e,
                d
              )
            ),
            (d = null);
        }),
        l === void 0 && a.setContentType(null),
        "setRequestHeader" in d &&
          x.forEach(a.toJSON(), function (S, O) {
            d.setRequestHeader(O, S);
          }),
        x.isUndefined(o.withCredentials) ||
          (d.withCredentials = !!o.withCredentials),
        i && i !== "json" && (d.responseType = o.responseType),
        u && (([p, y] = bo(u, !0)), d.addEventListener("progress", p)),
        s &&
          d.upload &&
          (([g, w] = bo(s)),
          d.upload.addEventListener("progress", g),
          d.upload.addEventListener("loadend", w)),
        (o.cancelToken || o.signal) &&
          ((f = (v) => {
            !d ||
              (r(!v || v.type ? new Cn(null, e, d) : v), d.abort(), (d = null));
          }),
          o.cancelToken && o.cancelToken.subscribe(f),
          o.signal &&
            (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
      const h = Yg(o.url);
      if (h && ie.protocols.indexOf(h) === -1) {
        r(new b("Unsupported protocol " + h + ":", b.ERR_BAD_REQUEST, e));
        return;
      }
      d.send(l || null);
    });
  };
const t0 = (e, t) => {
  const { length: n } = (e = e ? e.filter(Boolean) : []);
  if (t || n) {
    let r = new AbortController(),
      o;
    const l = function (u) {
      if (!o) {
        (o = !0), i();
        const f = u instanceof Error ? u : this.reason;
        r.abort(
          f instanceof b ? f : new Cn(f instanceof Error ? f.message : f)
        );
      }
    };
    let a =
      t &&
      setTimeout(() => {
        (a = null), l(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
      }, t);
    const i = () => {
      e &&
        (a && clearTimeout(a),
        (a = null),
        e.forEach((u) => {
          u.unsubscribe ? u.unsubscribe(l) : u.removeEventListener("abort", l);
        }),
        (e = null));
    };
    e.forEach((u) => u.addEventListener("abort", l));
    const { signal: s } = r;
    return (s.unsubscribe = () => x.asap(i)), s;
  }
};
var n0 = t0;
const r0 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  o0 = async function* (e, t) {
    for await (const n of l0(e)) yield* r0(n, t);
  },
  l0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Pu = (e, t, n, r) => {
    const o = o0(e, t);
    let l = 0,
      a,
      i = (s) => {
        a || ((a = !0), r && r(s));
      };
    return new ReadableStream(
      {
        async pull(s) {
          try {
            const { done: u, value: f } = await o.next();
            if (u) {
              i(), s.close();
              return;
            }
            let g = f.byteLength;
            if (n) {
              let p = (l += g);
              n(p);
            }
            s.enqueue(new Uint8Array(f));
          } catch (u) {
            throw (i(u), u);
          }
        },
        cancel(s) {
          return i(s), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  sl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ud = sl && typeof ReadableStream == "function",
  a0 =
    sl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  cd = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  i0 =
    ud &&
    cd(() => {
      let e = !1;
      const t = new Request(ie.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Tu = 64 * 1024,
  za = ud && cd(() => x.isReadableStream(new Response("").body)),
  Fo = { stream: za && ((e) => e.body) };
sl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Fo[t] &&
        (Fo[t] = x.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new b(
                `Response type '${t}' is not supported`,
                b.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const s0 = async (e) => {
    if (e == null) return 0;
    if (x.isBlob(e)) return e.size;
    if (x.isSpecCompliantForm(e))
      return (
        await new Request(ie.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (x.isArrayBufferView(e) || x.isArrayBuffer(e)) return e.byteLength;
    if ((x.isURLSearchParams(e) && (e = e + ""), x.isString(e)))
      return (await a0(e)).byteLength;
  },
  u0 = async (e, t) => {
    const n = x.toFiniteNumber(e.getContentLength());
    return n == null ? s0(t) : n;
  };
var c0 =
  sl &&
  (async (e) => {
    let {
      url: t,
      method: n,
      data: r,
      signal: o,
      cancelToken: l,
      timeout: a,
      onDownloadProgress: i,
      onUploadProgress: s,
      responseType: u,
      headers: f,
      withCredentials: g = "same-origin",
      fetchOptions: p,
    } = sd(e);
    u = u ? (u + "").toLowerCase() : "text";
    let w = n0([o, l && l.toAbortSignal()], a),
      y;
    const E =
      w &&
      w.unsubscribe &&
      (() => {
        w.unsubscribe();
      });
    let d;
    try {
      if (
        s &&
        i0 &&
        n !== "get" &&
        n !== "head" &&
        (d = await u0(f, r)) !== 0
      ) {
        let O = new Request(t, { method: "POST", body: r, duplex: "half" }),
          N;
        if (
          (x.isFormData(r) &&
            (N = O.headers.get("content-type")) &&
            f.setContentType(N),
          O.body)
        ) {
          const [C, R] = Cu(d, bo(Nu(s)));
          r = Pu(O.body, Tu, C, R);
        }
      }
      x.isString(g) || (g = g ? "include" : "omit");
      const m = "credentials" in Request.prototype;
      y = new Request(t, {
        ...p,
        signal: w,
        method: n.toUpperCase(),
        headers: f.normalize().toJSON(),
        body: r,
        duplex: "half",
        credentials: m ? g : void 0,
      });
      let h = await fetch(y);
      const v = za && (u === "stream" || u === "response");
      if (za && (i || (v && E))) {
        const O = {};
        ["status", "statusText", "headers"].forEach((T) => {
          O[T] = h[T];
        });
        const N = x.toFiniteNumber(h.headers.get("content-length")),
          [C, R] = (i && Cu(N, bo(Nu(i), !0))) || [];
        h = new Response(
          Pu(h.body, Tu, C, () => {
            R && R(), E && E();
          }),
          O
        );
      }
      u = u || "text";
      let S = await Fo[x.findKey(Fo, u) || "text"](h, e);
      return (
        !v && E && E(),
        await new Promise((O, N) => {
          ad(O, N, {
            data: S,
            headers: Le.from(h.headers),
            status: h.status,
            statusText: h.statusText,
            config: e,
            request: y,
          });
        })
      );
    } catch (m) {
      throw (
        (E && E(),
        m && m.name === "TypeError" && /fetch/i.test(m.message)
          ? Object.assign(new b("Network Error", b.ERR_NETWORK, e, y), {
              cause: m.cause || m,
            })
          : b.from(m, m && m.code, e, y))
      );
    }
  });
const $a = { http: kg, xhr: e0, fetch: c0 };
x.forEach($a, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ru = (e) => `- ${e}`,
  f0 = (e) => x.isFunction(e) || e === null || e === !1;
var fd = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let l = 0; l < t; l++) {
      n = e[l];
      let a;
      if (
        ((r = n),
        !f0(n) && ((r = $a[(a = String(n)).toLowerCase()]), r === void 0))
      )
        throw new b(`Unknown adapter '${a}'`);
      if (r) break;
      o[a || "#" + l] = r;
    }
    if (!r) {
      const l = Object.entries(o).map(
        ([i, s]) =>
          `adapter ${i} ` +
          (s === !1
            ? "is not supported by the environment"
            : "is not available in the build")
      );
      let a = t
        ? l.length > 1
          ? `since :
` +
            l.map(Ru).join(`
`)
          : " " + Ru(l[0])
        : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: $a,
};
function Wl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Cn(null, e);
}
function Du(e) {
  return (
    Wl(e),
    (e.headers = Le.from(e.headers)),
    (e.data = Bl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    fd
      .getAdapter(e.adapter || Vi.adapter)(e)
      .then(
        function (r) {
          return (
            Wl(e),
            (r.data = Bl.call(e, e.transformResponse, r)),
            (r.headers = Le.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ld(r) ||
              (Wl(e),
              r &&
                r.response &&
                ((r.response.data = Bl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Le.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const dd = "1.7.9",
  ul = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ul[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const _u = {};
ul.transitional = function (t, n, r) {
  function o(l, a) {
    return (
      "[Axios v" +
      dd +
      "] Transitional option '" +
      l +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (l, a, i) => {
    if (t === !1)
      throw new b(
        o(a, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return (
      n &&
        !_u[a] &&
        ((_u[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, a, i) : !0
    );
  };
};
ul.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function d0(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      a = t[l];
    if (a) {
      const i = e[l],
        s = i === void 0 || a(i, l, e);
      if (s !== !0)
        throw new b("option " + l + " must be " + s, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new b("Unknown option " + l, b.ERR_BAD_OPTION);
  }
}
var ao = { assertOptions: d0, validators: ul };
const Fe = ao.validators;
class Io {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new xu(), response: new xu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ft(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      ao.assertOptions(
        r,
        {
          silentJSONParsing: Fe.transitional(Fe.boolean),
          forcedJSONParsing: Fe.transitional(Fe.boolean),
          clarifyTimeoutError: Fe.transitional(Fe.boolean),
        },
        !1
      ),
      o != null &&
        (x.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ao.assertOptions(
              o,
              { encode: Fe.function, serialize: Fe.function },
              !0
            )),
      ao.assertOptions(
        n,
        {
          baseUrl: Fe.spelling("baseURL"),
          withXsrfToken: Fe.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = l && x.merge(l.common, l[n.method]);
    l &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete l[y];
        }
      ),
      (n.headers = Le.concat(a, l));
    const i = [];
    let s = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(n) === !1) ||
        ((s = s && E.synchronous), i.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (E) {
      u.push(E.fulfilled, E.rejected);
    });
    let f,
      g = 0,
      p;
    if (!s) {
      const y = [Du.bind(this), void 0];
      for (
        y.unshift.apply(y, i),
          y.push.apply(y, u),
          p = y.length,
          f = Promise.resolve(n);
        g < p;

      )
        f = f.then(y[g++], y[g++]);
      return f;
    }
    p = i.length;
    let w = n;
    for (g = 0; g < p; ) {
      const y = i[g++],
        E = i[g++];
      try {
        w = y(w);
      } catch (d) {
        E.call(this, d);
        break;
      }
    }
    try {
      f = Du.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (g = 0, p = u.length; g < p; ) f = f.then(u[g++], u[g++]);
    return f;
  }
  getUri(t) {
    t = Ft(this.defaults, t);
    const n = id(t.baseURL, t.url);
    return nd(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (t) {
  Io.prototype[t] = function (n, r) {
    return this.request(
      Ft(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, a, i) {
      return this.request(
        Ft(i || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: a,
        })
      );
    };
  }
  (Io.prototype[t] = n()), (Io.prototype[t + "Form"] = n(!0));
});
var io = Io;
class Yi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const a = new Promise((i) => {
          r.subscribe(i), (l = i);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(l);
          }),
          a
        );
      }),
      t(function (l, a, i) {
        r.reason || ((r.reason = new Cn(l, a, i)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Yi(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
var m0 = Yi;
function p0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function h0(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const Ba = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ba).forEach(([e, t]) => {
  Ba[t] = e;
});
var g0 = Ba;
function md(e) {
  const t = new io(e),
    n = Hf(io.prototype.request, t);
  return (
    x.extend(n, io.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return md(Ft(e, o));
    }),
    n
  );
}
const K = md(Vi);
K.Axios = io;
K.CanceledError = Cn;
K.CancelToken = m0;
K.isCancel = ld;
K.VERSION = dd;
K.toFormData = al;
K.AxiosError = b;
K.Cancel = K.CanceledError;
K.all = function (t) {
  return Promise.all(t);
};
K.spread = p0;
K.isAxiosError = h0;
K.mergeConfig = Ft;
K.AxiosHeaders = Le;
K.formToJSON = (e) => od(x.isHTMLForm(e) ? new FormData(e) : e);
K.getAdapter = fd.getAdapter;
K.HttpStatusCode = g0;
K.default = K;
var X = K;
const pd = "http://localhost:8080",
  hd = (e) => X.get(`${pd}/salons/image/${e}`),
  y0 = () => X.get(`${pd}/salons`);
const We = (e, t) => (n) => {
    const r = $t(),
      [o, l] = k.exports.useState(!1),
      [a, i] = k.exports.useState(null);
    k.exports.useEffect(() => {
      const E = localStorage.getItem("token"),
        d = localStorage.getItem("email");
      l(!!E), i(d);
    }, []);
    const s = () => r("/register"),
      u = () => r("/login"),
      f = () => {
        localStorage.removeItem("token"),
          localStorage.removeItem("email"),
          l(!1),
          i(null),
          r("/");
      },
      g = () => r("/reservations"),
      p = () => r("/"),
      w = () => r("/owner/salons"),
      y = () => r("/create-salon");
    return c.createElement(
      "div",
      null,
      c.createElement(
        "header",
        { className: "header" },
        c.createElement(
          "div",
          { className: "header-left" },
          c.createElement("h1", { className: "header-title", onClick: p }, t)
        ),
        c.createElement(
          "div",
          { className: "header-right" },
          o
            ? c.createElement(
                c.Fragment,
                null,
                a &&
                  c.createElement(
                    "div",
                    { className: "user-info" },
                    c.createElement("span", { className: "user-email" }, a)
                  ),
                c.createElement(
                  "button",
                  { className: "header-button", onClick: y },
                  "\u{1F3DB}\uFE0F Create Salon"
                ),
                c.createElement(
                  "button",
                  { className: "header-button", onClick: g },
                  "\u{1F4C5} Reservations"
                ),
                c.createElement(
                  "button",
                  { className: "header-button", onClick: w },
                  "\u{1F488} My Salons"
                ),
                c.createElement(
                  "button",
                  { className: "header-button logout-button", onClick: f },
                  "\u{1F6AA} Logout"
                )
              )
            : c.createElement(
                c.Fragment,
                null,
                c.createElement(
                  "button",
                  { className: "header-button login-button", onClick: u },
                  "\u{1F511} Login"
                ),
                c.createElement(
                  "button",
                  { className: "header-button login-button", onClick: s },
                  "\u{1F4DD} Register"
                )
              )
        )
      ),
      c.createElement(e, { ...n, email: a })
    );
  },
  v0 = () => {
    const [e, t] = k.exports.useState([]),
      [n, r] = k.exports.useState(!0),
      [o, l] = k.exports.useState(null);
    k.exports.useEffect(() => {
      (async () => {
        try {
          const f = (await y0()).data.map(async (p) => {
              var w;
              try {
                const y = await hd(p.id);
                return {
                  ...p,
                  imageUrl:
                    ((w = y.data[0]) == null ? void 0 : w.imageUrl) || null,
                };
              } catch (y) {
                return (
                  console.error(`Error fetching images for salon ${p.id}:`, y),
                  { ...p, imageUrl: null }
                );
              }
            }),
            g = await Promise.all(f);
          t(g);
        } catch (s) {
          console.error("Error fetching salons:", s);
        } finally {
          r(!1);
        }
      })();
    }, []);
    const a = (i) => {
      l(i);
      const s = [...e].sort((u, f) =>
        i === "name"
          ? u.salonName.localeCompare(f.salonName)
          : u.city.localeCompare(f.city)
      );
      t(s);
    };
    return n
      ? c.createElement("div", null, "Loading...")
      : c.createElement(
          "div",
          { className: "salon-list" },
          c.createElement(
            "div",
            { className: "sort-buttons" },
            c.createElement(
              "button",
              { className: "sort1", onClick: () => a("name") },
              "Sort by Name"
            ),
            c.createElement(
              "button",
              { className: "sort1", onClick: () => a("city") },
              "Sort by City"
            )
          ),
          e.length === 0
            ? c.createElement("p", null, "No salons available.")
            : e.map((i) =>
                c.createElement(
                  "div",
                  { key: i.id, className: "salon-card" },
                  c.createElement("h3", { className: "h3-color" }, i.salonName),
                  c.createElement(
                    "p",
                    { className: "salon-city" },
                    i.city,
                    ", ",
                    i.street,
                    " ",
                    i.number
                  ),
                  i.imageUrl
                    ? c.createElement("img", {
                        src: i.imageUrl,
                        alt: `${i.salonName} thumbnail`,
                        className: "salon-image",
                      })
                    : c.createElement("p", null, "No image available"),
                  c.createElement(
                    Ih,
                    { className: "salon-link", to: `/salons/${i.id}` },
                    "See Details"
                  )
                )
              )
        );
  };
var w0 = We(v0, "Rezerwacje");
const E0 = ({ offers: e, selectedOfferId: t, onOfferSelect: n }) =>
    c.createElement(
      "div",
      null,
      c.createElement("h3", null, "Select a Service"),
      c.createElement(
        "select",
        {
          value: t != null ? t : "",
          onChange: (r) => n(Number(r.target.value)),
        },
        c.createElement("option", { value: "" }, "Select an offer"),
        e.map((r) =>
          c.createElement(
            "option",
            { key: r.id, value: r.id },
            r.name,
            " - ",
            r.price,
            " PLN"
          )
        )
      )
    ),
  S0 = ({ employees: e, selectedEmployeeId: t, onEmployeeSelect: n }) =>
    c.createElement(
      "div",
      null,
      c.createElement("h3", null, "Select an Employee"),
      c.createElement(
        "select",
        {
          value: t != null ? t : "",
          onChange: (r) => n(Number(r.target.value)),
        },
        c.createElement("option", { value: "" }, "Select an employee"),
        e.map((r) =>
          c.createElement("option", { key: r.id, value: r.employeeId }, r.name)
        )
      )
    );
const x0 = ({ terms: e, onTermSelect: t }) =>
  e.length === 0
    ? c.createElement("p", null, "No available terms for this selection.")
    : c.createElement(
        "div",
        { className: "term-list" },
        c.createElement("h3", null, "Available Terms"),
        e.length === 0
          ? c.createElement(
              "p",
              { className: "no-terms" },
              "No available terms for this selection."
            )
          : c.createElement(
              "ul",
              null,
              e.map((n, r) =>
                c.createElement(
                  "li",
                  { key: r },
                  c.createElement(
                    "span",
                    null,
                    n.startServices.slice(0, 5),
                    " - ",
                    n.endServices.slice(0, 5)
                  ),
                  c.createElement(
                    "button",
                    { className: "small-button", onClick: () => t(n) },
                    "Book"
                  )
                )
              )
            )
      );
const k0 = ({
  term: e,
  salonId: t,
  offerId: n,
  employeeId: r,
  date: o,
  onClose: l,
  onConfirm: a,
}) => {
  const [i, s] = k.exports.useState(""),
    [u, f] = k.exports.useState(!1),
    [g, p] = k.exports.useState(!1);
  k.exports.useEffect(() => {
    const y = localStorage.getItem("token"),
      E = localStorage.getItem("email");
    y && E && (s(E), f(!0));
  }, []);
  const w = () => {
    if (!i) {
      alert("Please enter your email.");
      return;
    }
    const y = `${o}T${e.startServices}`;
    a({
      salonId: t,
      offerId: n,
      employeeId: r,
      reservationDateTime: y,
      userEmail: i,
    }),
      p(!0);
  };
  return c.createElement(
    c.Fragment,
    null,
    c.createElement("div", { className: "popup-overlay", onClick: l }),
    c.createElement(
      "div",
      { className: "popup" },
      g
        ? c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "h3",
              null,
              "Thanks for your reservation, ",
              i,
              "!"
            ),
            c.createElement("button", { onClick: l }, "Close")
          )
        : c.createElement(
            c.Fragment,
            null,
            c.createElement("h3", null, "Confirm Reservation"),
            c.createElement(
              "p",
              null,
              c.createElement("strong", null, "Term:"),
              " ",
              e.startServices,
              " - ",
              e.endServices
            ),
            !u &&
              c.createElement("input", {
                type: "email",
                value: i,
                onChange: (y) => s(y.target.value),
                placeholder: "Enter your email",
              }),
            c.createElement(
              "div",
              { className: "popup-buttons" },
              c.createElement("button", { onClick: w }, "Confirm"),
              c.createElement("button", { onClick: l }, "Cancel")
            )
          )
    )
  );
};
const C0 = ({ salonId: e }) => {
    const [t, n] = k.exports.useState([]),
      [r, o] = k.exports.useState(0),
      [l, a] = k.exports.useState(!0);
    k.exports.useEffect(() => {
      (async () => {
        try {
          const f = await hd(e);
          f.status === 200 && f.data.length > 0 ? n(f.data) : n([]);
        } catch (f) {
          console.error("Error fetching images:", f);
        } finally {
          a(!1);
        }
      })();
    }, [e]);
    const i = () => {
        o((u) => (u === 0 ? t.length - 1 : u - 1));
      },
      s = () => {
        o((u) => (u === t.length - 1 ? 0 : u + 1));
      };
    return l
      ? c.createElement("div", null, "Loading images...")
      : t.length === 0
      ? c.createElement("div", null, "No images available")
      : c.createElement(
          "div",
          { className: "image-gallery" },
          c.createElement(
            "button",
            { className: "gallery-btn prev-btn", onClick: i },
            "<"
          ),
          c.createElement("img", {
            src: t[r].imageUrl,
            alt: `${t[r].name} - ${r + 1}`,
            className: "gallery-image",
          }),
          c.createElement(
            "button",
            { className: "gallery-btn next-btn", onClick: s },
            ">"
          )
        );
  },
  N0 = "http://localhost:8080",
  O0 = (e) => X.get(`${N0}/offers/${e}`),
  gd = "http://localhost:8080",
  P0 = (e, t, n) =>
    X.get(`${gd}/employee/available-dates`, {
      params: { date: t, employeeId: e, offerId: n },
    }),
  T0 = (e) => X.get(`${gd}/employee-to-offer/${e}`),
  _r = "http://localhost:8080",
  R0 = async (e, t) =>
    (
      await X.get(`${_r}/reservations`, {
        params: { email: e },
        headers: { Authorization: `Bearer ${t}` },
      })
    ).data,
  D0 = (e) => X.post(`${_r}/reservation`, e),
  _0 = (e, t, n) =>
    X.delete(`${_r}/reservation`, {
      data: { reservationId: e, userEmail: t },
      headers: { Authorization: `Bearer ${n}` },
    }),
  L0 = (e) => X.patch(`${_r}/reservation`, e),
  M0 = async (e) => (await X.get(`${_r}/reservation/${e}/nearest`)).data,
  yd = 6048e5,
  b0 = 864e5,
  vd = 6e4,
  wd = 36e5,
  Lu = Symbol.for("constructDateFrom");
function ye(e, t) {
  return typeof e == "function"
    ? e(t)
    : e && typeof e == "object" && Lu in e
    ? e[Lu](t)
    : e instanceof Date
    ? new e.constructor(t)
    : new Date(t);
}
function Z(e, t) {
  return ye(t || e, e);
}
function Ed(e, t, n) {
  const r = Z(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return ye((n == null ? void 0 : n.in) || e, NaN);
  if (!t) return r;
  const o = r.getDate(),
    l = ye((n == null ? void 0 : n.in) || e, r.getTime());
  l.setMonth(r.getMonth() + t + 1, 0);
  const a = l.getDate();
  return o >= a ? l : (r.setFullYear(l.getFullYear(), l.getMonth(), o), r);
}
let F0 = {};
function Lr() {
  return F0;
}
function pn(e, t) {
  var i, s, u, f, g, p, w, y;
  const n = Lr(),
    r =
      (y =
        (w =
          (f =
            (u = t == null ? void 0 : t.weekStartsOn) != null
              ? u
              : (s =
                  (i = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : i.options) == null
              ? void 0
              : s.weekStartsOn) != null
            ? f
            : n.weekStartsOn) != null
          ? w
          : (p = (g = n.locale) == null ? void 0 : g.options) == null
          ? void 0
          : p.weekStartsOn) != null
        ? y
        : 0,
    o = Z(e, t == null ? void 0 : t.in),
    l = o.getDay(),
    a = (l < r ? 7 : 0) + l - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function jo(e, t) {
  return pn(e, { ...t, weekStartsOn: 1 });
}
function Sd(e, t) {
  const n = Z(e, t == null ? void 0 : t.in),
    r = n.getFullYear(),
    o = ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const l = jo(o),
    a = ye(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = jo(a);
  return n.getTime() >= l.getTime()
    ? r + 1
    : n.getTime() >= i.getTime()
    ? r
    : r - 1;
}
function Mu(e) {
  const t = Z(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function cl(e, ...t) {
  const n = ye.bind(null, e || t.find((r) => typeof r == "object"));
  return t.map(n);
}
function Uo(e, t) {
  const n = Z(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function I0(e, t, n) {
  const [r, o] = cl(n == null ? void 0 : n.in, e, t),
    l = Uo(r),
    a = Uo(o),
    i = +l - Mu(l),
    s = +a - Mu(a);
  return Math.round((i - s) / b0);
}
function j0(e, t) {
  const n = Sd(e, t),
    r = ye((t == null ? void 0 : t.in) || e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), jo(r);
}
function U0(e) {
  return ye(e, Date.now());
}
function xd(e, t, n) {
  const [r, o] = cl(n == null ? void 0 : n.in, e, t);
  return +Uo(r) == +Uo(o);
}
function A0(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function z0(e) {
  return !((!A0(e) && typeof e != "number") || isNaN(+Z(e)));
}
function $0(e, t) {
  const n = Z(e, t == null ? void 0 : t.in),
    r = n.getMonth();
  return (
    n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n
  );
}
function B0(e, t) {
  const [n, r] = cl(e, t.start, t.end);
  return { start: n, end: r };
}
function W0(e, t) {
  var u;
  const { start: n, end: r } = B0(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const l = o ? +n : +r,
    a = o ? r : n;
  a.setHours(0, 0, 0, 0);
  let i = (u = t == null ? void 0 : t.step) != null ? u : 1;
  if (!i) return [];
  i < 0 && ((i = -i), (o = !o));
  const s = [];
  for (; +a <= l; )
    s.push(ye(n, a)), a.setDate(a.getDate() + i), a.setHours(0, 0, 0, 0);
  return o ? s.reverse() : s;
}
function H0(e, t) {
  const n = Z(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function V0(e, t) {
  const n = Z(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Y0(e, t) {
  var i, s, u, f, g, p, w, y;
  const n = Lr(),
    r =
      (y =
        (w =
          (f =
            (u = t == null ? void 0 : t.weekStartsOn) != null
              ? u
              : (s =
                  (i = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : i.options) == null
              ? void 0
              : s.weekStartsOn) != null
            ? f
            : n.weekStartsOn) != null
          ? w
          : (p = (g = n.locale) == null ? void 0 : g.options) == null
          ? void 0
          : p.weekStartsOn) != null
        ? y
        : 0,
    o = Z(e, t == null ? void 0 : t.in),
    l = o.getDay(),
    a = (l < r ? -7 : 0) + 6 - (l - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
const q0 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  Q0 = (e, t, n) => {
    let r;
    const o = q0[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
        ? (r = o.one)
        : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Hl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const X0 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  K0 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  G0 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  J0 = {
    date: Hl({ formats: X0, defaultWidth: "full" }),
    time: Hl({ formats: K0, defaultWidth: "full" }),
    dateTime: Hl({ formats: G0, defaultWidth: "full" }),
  },
  Z0 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  ey = (e, t, n, r) => Z0[e];
function zn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        i = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[a];
    }
    const l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
const ty = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  ny = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  ry = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  oy = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  ly = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  ay = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  iy = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  sy = {
    ordinalNumber: iy,
    era: zn({ values: ty, defaultWidth: "wide" }),
    quarter: zn({
      values: ny,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: zn({ values: ry, defaultWidth: "wide" }),
    day: zn({ values: oy, defaultWidth: "wide" }),
    dayPeriod: zn({
      values: ly,
      defaultWidth: "wide",
      formattingValues: ay,
      defaultFormattingWidth: "wide",
    }),
  };
function $n(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      l = t.match(o);
    if (!l) return null;
    const a = l[0],
      i = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(i) ? cy(i, (g) => g.test(a)) : uy(i, (g) => g.test(a));
    let u;
    (u = e.valueCallback ? e.valueCallback(s) : s),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const f = t.slice(a.length);
    return { value: u, rest: f };
  };
}
function uy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function cy(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function fy(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      l = t.match(e.parsePattern);
    if (!l) return null;
    let a = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = t.slice(o.length);
    return { value: a, rest: i };
  };
}
const dy = /^(\d+)(th|st|nd|rd)?/i,
  my = /\d+/i,
  py = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  hy = { any: [/^b/i, /^(a|c)/i] },
  gy = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  yy = { any: [/1/i, /2/i, /3/i, /4/i] },
  vy = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  wy = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Ey = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Sy = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  xy = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  ky = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Cy = {
    ordinalNumber: fy({
      matchPattern: dy,
      parsePattern: my,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: $n({
      matchPatterns: py,
      defaultMatchWidth: "wide",
      parsePatterns: hy,
      defaultParseWidth: "any",
    }),
    quarter: $n({
      matchPatterns: gy,
      defaultMatchWidth: "wide",
      parsePatterns: yy,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: $n({
      matchPatterns: vy,
      defaultMatchWidth: "wide",
      parsePatterns: wy,
      defaultParseWidth: "any",
    }),
    day: $n({
      matchPatterns: Ey,
      defaultMatchWidth: "wide",
      parsePatterns: Sy,
      defaultParseWidth: "any",
    }),
    dayPeriod: $n({
      matchPatterns: xy,
      defaultMatchWidth: "any",
      parsePatterns: ky,
      defaultParseWidth: "any",
    }),
  },
  Ny = {
    code: "en-US",
    formatDistance: Q0,
    formatLong: J0,
    formatRelative: ey,
    localize: sy,
    match: Cy,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Oy(e, t) {
  const n = Z(e, t == null ? void 0 : t.in);
  return I0(n, V0(n)) + 1;
}
function Py(e, t) {
  const n = Z(e, t == null ? void 0 : t.in),
    r = +jo(n) - +j0(n);
  return Math.round(r / yd) + 1;
}
function kd(e, t) {
  var f, g, p, w, y, E, d, m;
  const n = Z(e, t == null ? void 0 : t.in),
    r = n.getFullYear(),
    o = Lr(),
    l =
      (m =
        (d =
          (w =
            (p = t == null ? void 0 : t.firstWeekContainsDate) != null
              ? p
              : (g =
                  (f = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : f.options) == null
              ? void 0
              : g.firstWeekContainsDate) != null
            ? w
            : o.firstWeekContainsDate) != null
          ? d
          : (E = (y = o.locale) == null ? void 0 : y.options) == null
          ? void 0
          : E.firstWeekContainsDate) != null
        ? m
        : 1,
    a = ye((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, l), a.setHours(0, 0, 0, 0);
  const i = pn(a, t),
    s = ye((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r, 0, l), s.setHours(0, 0, 0, 0);
  const u = pn(s, t);
  return +n >= +i ? r + 1 : +n >= +u ? r : r - 1;
}
function Ty(e, t) {
  var i, s, u, f, g, p, w, y;
  const n = Lr(),
    r =
      (y =
        (w =
          (f =
            (u = t == null ? void 0 : t.firstWeekContainsDate) != null
              ? u
              : (s =
                  (i = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : i.options) == null
              ? void 0
              : s.firstWeekContainsDate) != null
            ? f
            : n.firstWeekContainsDate) != null
          ? w
          : (p = (g = n.locale) == null ? void 0 : g.options) == null
          ? void 0
          : p.firstWeekContainsDate) != null
        ? y
        : 1,
    o = kd(e, t),
    l = ye((t == null ? void 0 : t.in) || e, 0);
  return l.setFullYear(o, 0, r), l.setHours(0, 0, 0, 0), pn(l, t);
}
function Ry(e, t) {
  const n = Z(e, t == null ? void 0 : t.in),
    r = +pn(n, t) - +Ty(n, t);
  return Math.round(r / yd) + 1;
}
function A(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ge = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return A(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : A(n + 1, 2);
    },
    d(e, t) {
      return A(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return A(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return A(e.getHours(), t.length);
    },
    m(e, t) {
      return A(e.getMinutes(), t.length);
    },
    s(e, t) {
      return A(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return A(o, t.length);
    },
  },
  Ht = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  bu = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return Ge.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = kd(e, r),
        l = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const a = l % 100;
        return A(a, 2);
      }
      return t === "Yo" ? n.ordinalNumber(l, { unit: "year" }) : A(l, t.length);
    },
    R: function (e, t) {
      const n = Sd(e);
      return A(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return A(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return A(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return A(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return Ge.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return A(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const o = Ry(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : A(o, t.length);
    },
    I: function (e, t, n) {
      const r = Py(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : A(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Ge.d(e, t);
    },
    D: function (e, t, n) {
      const r = Oy(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : A(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const o = e.getDay(),
        l = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(l);
        case "ee":
          return A(l, 2);
        case "eo":
          return n.ordinalNumber(l, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        l = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(l);
        case "cc":
          return A(l, t.length);
        case "co":
          return n.ordinalNumber(l, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return A(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = Ht.noon)
          : r === 0
          ? (o = Ht.midnight)
          : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = Ht.evening)
          : r >= 12
          ? (o = Ht.afternoon)
          : r >= 4
          ? (o = Ht.morning)
          : (o = Ht.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return Ge.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Ge.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : A(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : A(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Ge.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Ge.s(e, t);
    },
    S: function (e, t) {
      return Ge.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Iu(r);
        case "XXXX":
        case "XX":
          return Ct(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ct(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Iu(r);
        case "xxxx":
        case "xx":
          return Ct(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ct(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Fu(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ct(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Fu(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ct(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(+e / 1e3);
      return A(r, t.length);
    },
    T: function (e, t, n) {
      return A(+e, t.length);
    },
  };
function Fu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    l = r % 60;
  return l === 0 ? n + String(o) : n + String(o) + t + A(l, 2);
}
function Iu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + A(Math.abs(e) / 60, 2) : Ct(e, t);
}
function Ct(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = A(Math.trunc(r / 60), 2),
    l = A(r % 60, 2);
  return n + o + t + l;
}
const ju = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Cd = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  Dy = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return ju(e, t);
    let l;
    switch (r) {
      case "P":
        l = t.dateTime({ width: "short" });
        break;
      case "PP":
        l = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        l = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        l = t.dateTime({ width: "full" });
        break;
    }
    return l.replace("{{date}}", ju(r, t)).replace("{{time}}", Cd(o, t));
  },
  _y = { p: Cd, P: Dy },
  Ly = /^D+$/,
  My = /^Y+$/,
  by = ["D", "DD", "YY", "YYYY"];
function Fy(e) {
  return Ly.test(e);
}
function Iy(e) {
  return My.test(e);
}
function jy(e, t, n) {
  const r = Uy(e, t, n);
  if ((console.warn(r), by.includes(e))) throw new RangeError(r);
}
function Uy(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ay = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  zy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  $y = /^'([^]*?)'?$/,
  By = /''/g,
  Wy = /[a-zA-Z]/;
function Vr(e, t, n) {
  var f, g, p, w, y, E, d, m, h, v, S, O, N, C, R, T, F, Se;
  const r = Lr(),
    o =
      (g = (f = n == null ? void 0 : n.locale) != null ? f : r.locale) != null
        ? g
        : Ny,
    l =
      (v =
        (h =
          (E =
            (y = n == null ? void 0 : n.firstWeekContainsDate) != null
              ? y
              : (w =
                  (p = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : p.options) == null
              ? void 0
              : w.firstWeekContainsDate) != null
            ? E
            : r.firstWeekContainsDate) != null
          ? h
          : (m = (d = r.locale) == null ? void 0 : d.options) == null
          ? void 0
          : m.firstWeekContainsDate) != null
        ? v
        : 1,
    a =
      (Se =
        (F =
          (C =
            (N = n == null ? void 0 : n.weekStartsOn) != null
              ? N
              : (O =
                  (S = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : S.options) == null
              ? void 0
              : O.weekStartsOn) != null
            ? C
            : r.weekStartsOn) != null
          ? F
          : (T = (R = r.locale) == null ? void 0 : R.options) == null
          ? void 0
          : T.weekStartsOn) != null
        ? Se
        : 0,
    i = Z(e, n == null ? void 0 : n.in);
  if (!z0(i)) throw new RangeError("Invalid time value");
  let s = t
    .match(zy)
    .map((z) => {
      const j = z[0];
      if (j === "p" || j === "P") {
        const be = _y[j];
        return be(z, o.formatLong);
      }
      return z;
    })
    .join("")
    .match(Ay)
    .map((z) => {
      if (z === "''") return { isToken: !1, value: "'" };
      const j = z[0];
      if (j === "'") return { isToken: !1, value: Hy(z) };
      if (bu[j]) return { isToken: !0, value: z };
      if (j.match(Wy))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            j +
            "`"
        );
      return { isToken: !1, value: z };
    });
  o.localize.preprocessor && (s = o.localize.preprocessor(i, s));
  const u = { firstWeekContainsDate: l, weekStartsOn: a, locale: o };
  return s
    .map((z) => {
      if (!z.isToken) return z.value;
      const j = z.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && Iy(j)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && Fy(j))) &&
        jy(j, t, String(e));
      const be = bu[j[0]];
      return be(i, j, o.localize, u);
    })
    .join("");
}
function Hy(e) {
  const t = e.match($y);
  return t ? t[1].replace(By, "'") : e;
}
function Vy(e, t) {
  return +Z(e) < +Z(t);
}
function Uu(e, t, n) {
  const [r, o] = cl(n == null ? void 0 : n.in, e, t);
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Yy(e, t) {
  return xd(
    ye((t == null ? void 0 : t.in) || e, e),
    U0((t == null ? void 0 : t.in) || e)
  );
}
function Au(e, t) {
  var u;
  const n = () => ye(t == null ? void 0 : t.in, NaN),
    r = (u = t == null ? void 0 : t.additionalDigits) != null ? u : 2,
    o = Ky(e);
  let l;
  if (o.date) {
    const f = Gy(o.date, r);
    l = Jy(f.restDateString, f.year);
  }
  if (!l || isNaN(+l)) return n();
  const a = +l;
  let i = 0,
    s;
  if (o.time && ((i = Zy(o.time)), isNaN(i))) return n();
  if (o.timezone) {
    if (((s = ev(o.timezone)), isNaN(s))) return n();
  } else {
    const f = new Date(a + i),
      g = Z(0, t == null ? void 0 : t.in);
    return (
      g.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()),
      g.setHours(
        f.getUTCHours(),
        f.getUTCMinutes(),
        f.getUTCSeconds(),
        f.getUTCMilliseconds()
      ),
      g
    );
  }
  return Z(a + i + s, t == null ? void 0 : t.in);
}
const Yr = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  qy = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Qy =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Xy = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Ky(e) {
  const t = {},
    n = e.split(Yr.dateTimeDelimiter);
  let r;
  if (n.length > 2) return t;
  if (
    (/:/.test(n[0])
      ? (r = n[0])
      : ((t.date = n[0]),
        (r = n[1]),
        Yr.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(Yr.timeZoneDelimiter)[0]),
          (r = e.substr(t.date.length, e.length)))),
    r)
  ) {
    const o = Yr.timezone.exec(r);
    o ? ((t.time = r.replace(o[1], "")), (t.timezone = o[1])) : (t.time = r);
  }
  return t;
}
function Gy(e, t) {
  const n = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  const o = r[1] ? parseInt(r[1]) : null,
    l = r[2] ? parseInt(r[2]) : null;
  return {
    year: l === null ? o : l * 100,
    restDateString: e.slice((r[1] || r[2]).length),
  };
}
function Jy(e, t) {
  if (t === null) return new Date(NaN);
  const n = e.match(qy);
  if (!n) return new Date(NaN);
  const r = !!n[4],
    o = Bn(n[1]),
    l = Bn(n[2]) - 1,
    a = Bn(n[3]),
    i = Bn(n[4]),
    s = Bn(n[5]) - 1;
  if (r) return lv(t, i, s) ? tv(t, i, s) : new Date(NaN);
  {
    const u = new Date(0);
    return !rv(t, l, a) || !ov(t, o)
      ? new Date(NaN)
      : (u.setUTCFullYear(t, l, Math.max(o, a)), u);
  }
}
function Bn(e) {
  return e ? parseInt(e) : 1;
}
function Zy(e) {
  const t = e.match(Qy);
  if (!t) return NaN;
  const n = Vl(t[1]),
    r = Vl(t[2]),
    o = Vl(t[3]);
  return av(n, r, o) ? n * wd + r * vd + o * 1e3 : NaN;
}
function Vl(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function ev(e) {
  if (e === "Z") return 0;
  const t = e.match(Xy);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1,
    r = parseInt(t[2]),
    o = (t[3] && parseInt(t[3])) || 0;
  return iv(r, o) ? n * (r * wd + o * vd) : NaN;
}
function tv(e, t, n) {
  const r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7,
    l = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + l), r;
}
const nv = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Nd(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function rv(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (nv[t] || (Nd(e) ? 29 : 28));
}
function ov(e, t) {
  return t >= 1 && t <= (Nd(e) ? 366 : 365);
}
function lv(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function av(e, t, n) {
  return e === 24
    ? t === 0 && n === 0
    : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function iv(e, t) {
  return t >= 0 && t <= 59;
}
function sv(e, t, n) {
  return Ed(e, -t, n);
}
const uv = ({ selectedDate: e, onDateChange: t, minDate: n }) => {
    const [r, o] = k.exports.useState(new Date()),
      l = Au(e),
      a = n ? Au(n) : null,
      i = () => o(sv(r, 1)),
      s = () => o(Ed(r, 1)),
      u = H0(r),
      f = $0(r),
      g = pn(u),
      p = Y0(f),
      w = W0({ start: g, end: p }),
      y = (d) => {
        t(Vr(d, "yyyy-MM-dd"));
      },
      E = (d) => {
        const m = a && Vy(d, a);
        return !Uu(d, r) || !!m;
      };
    return c.createElement(
      "div",
      null,
      c.createElement("h3", null, "Select a Date"),
      c.createElement(
        "div",
        { className: "calendar-container" },
        c.createElement(
          "div",
          { className: "calendar-header" },
          c.createElement(
            "button",
            { onClick: i, "aria-label": "Previous month" },
            "<"
          ),
          c.createElement("h2", null, Vr(r, "MMMM yyyy")),
          c.createElement(
            "button",
            { onClick: s, "aria-label": "Next month" },
            ">"
          )
        ),
        c.createElement(
          "div",
          { className: "calendar-grid" },
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) =>
            c.createElement(
              "div",
              { key: d, className: "calendar-day-header" },
              d
            )
          ),
          w.map((d) => {
            const m = Uu(d, r),
              h = e && xd(d, l),
              v = Yy(d),
              S = E(d);
            return c.createElement(
              "button",
              {
                key: d.toString(),
                className: `calendar-day 
                ${h ? "selected" : ""}
                ${m ? "" : "other-month"}
                ${v ? "today" : ""}
                ${S ? "disabled" : ""}`,
                onClick: () => y(d),
                disabled: S,
                "aria-label": `Choose ${Vr(d, "MMMM do, yyyy")}`,
              },
              c.createElement("span", null, Vr(d, "d")),
              v && c.createElement("div", { className: "today-indicator" })
            );
          })
        )
      )
    );
  },
  cv = () => {
    const { id: e } = zi(),
      [t, n] = k.exports.useState([]),
      [r, o] = k.exports.useState([]),
      [l, a] = k.exports.useState([]),
      [i, s] = k.exports.useState(null),
      [u, f] = k.exports.useState(null),
      [g, p] = k.exports.useState(""),
      [w, y] = k.exports.useState(!0),
      [E, d] = k.exports.useState(!1),
      [m, h] = k.exports.useState(!1),
      [v, S] = k.exports.useState(null),
      [O, N] = k.exports.useState(!1);
    new Date().toISOString().split("T")[0],
      k.exports.useEffect(() => {
        y(!0),
          O0(e)
            .then((F) => {
              n(F.data), y(!1);
            })
            .catch((F) => {
              console.error("Error fetching offers:", F), y(!1);
            });
      }, [e]);
    const C = (F) => {
        d(!0),
          T0(F)
            .then((Se) => {
              o(Se.data), d(!1);
            })
            .catch((Se) => {
              console.error("Error fetching employees:", Se), d(!1);
            });
      },
      R = () => {
        if (!i || !u || !g) {
          alert("Please select an offer, an employee, and a date.");
          return;
        }
        h(!0),
          P0(u, g, i)
            .then((F) => {
              a(F.data), h(!1);
            })
            .catch((F) => {
              console.error("Error fetching available terms:", F), h(!1);
            });
      },
      T = (F) => {
        D0(F)
          .then(() => {
            s(null),
              f(null),
              p(""),
              alert("Reservation successful!"),
              N(!1),
              S(null),
              window.location.reload();
          })
          .catch(() => {
            alert("Failed to create reservation.");
          });
      };
    return c.createElement(
      "div",
      { className: "salon-details" },
      c.createElement(C0, { salonId: Number(e) }),
      c.createElement("h2", null, "Salon Details - Offers and Reservations"),
      w
        ? c.createElement("div", null, "Loading offers...")
        : c.createElement(E0, {
            offers: t,
            selectedOfferId: i,
            onOfferSelect: (F) => {
              s(F), C(F);
            },
          }),
      i &&
        c.createElement(S0, {
          employees: r,
          selectedEmployeeId: u,
          loading: E,
          onEmployeeSelect: (F) => f(F),
        }),
      c.createElement(uv, { selectedDate: g, onDateChange: p }),
      c.createElement(
        "button",
        { onClick: R, disabled: m },
        m ? "Fetching terms..." : "Fetch Available Terms"
      ),
      c.createElement(x0, {
        terms: l,
        onTermSelect: (F) => {
          S(F), N(!0);
        },
      }),
      O &&
        v &&
        i &&
        u &&
        c.createElement(k0, {
          term: v,
          salonId: Number(e),
          offerId: i,
          employeeId: u,
          date: g,
          onClose: () => N(!1),
          onConfirm: T,
        })
    );
  };
var fv = We(cv, "Rezerwacje");
const dv = async (e) => {
    try {
      return (
        await X.post("http://localhost:8080/register", e, {
          headers: { "Content-Type": "application/json" },
        })
      ).data;
    } catch (t) {
      throw (console.error("Error registering user:", t), t);
    }
  },
  mv = async (e, t) => {
    try {
      return (
        await X.post(
          "http://localhost:8080/token",
          { email: e, password: t },
          { headers: { "Content-Type": "application/json" } }
        )
      ).data;
    } catch (n) {
      throw (console.error("Error logging in:", n), n);
    }
  };
var Od = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  zu = c.createContext && c.createContext(Od),
  pv = ["attr", "size", "title"];
function hv(e, t) {
  if (e == null) return {};
  var n = gv(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      (r = l[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function gv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
function $u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $u(Object(n), !0).forEach(function (r) {
          yv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $u(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yv(e, t, n) {
  return (
    (t = vv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vv(e) {
  var t = wv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pd(e) {
  return (
    e &&
    e.map((t, n) => c.createElement(t.tag, zo({ key: n }, t.attr), Pd(t.child)))
  );
}
function Et(e) {
  return (t) =>
    c.createElement(Ev, Ao({ attr: zo({}, e.attr) }, t), Pd(e.child));
}
function Ev(e) {
  var t = (n) => {
    var { attr: r, size: o, title: l } = e,
      a = hv(e, pv),
      i = o || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      c.createElement(
        "svg",
        Ao(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: s,
            style: zo(zo({ color: e.color || n.color }, n.style), e.style),
            height: i,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && c.createElement("title", null, l),
        e.children
      )
    );
  };
  return zu !== void 0
    ? c.createElement(zu.Consumer, null, (n) => t(n))
    : t(Od);
}
function Sv(e) {
  return Et({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" },
        child: [],
      },
      { tag: "path", attr: { d: "M7 11V7a5 5 0 0 1 10 0v4" }, child: [] },
    ],
  })(e);
}
function xv(e) {
  return Et({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        },
        child: [],
      },
      { tag: "polyline", attr: { points: "22,6 12,13 2,6" }, child: [] },
    ],
  })(e);
}
function kv(e) {
  return Et({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
        child: [],
      },
      { tag: "circle", attr: { cx: "12", cy: "7", r: "4" }, child: [] },
    ],
  })(e);
}
const Cv = () => {
  const [e, t] = k.exports.useState(""),
    [n, r] = k.exports.useState(""),
    [o, l] = k.exports.useState(""),
    a = $t(),
    i = async (s) => {
      s.preventDefault();
      try {
        await dv({ email: e, name: n, password: o }),
          alert("Success registration!"),
          a("/login/");
      } catch (u) {
        console.error("Error registering user:", u),
          alert("Error registering user");
      }
    };
  return c.createElement(
    "div",
    { className: "register-container" },
    c.createElement(
      "div",
      { className: "register-card" },
      c.createElement("h2", { className: "register-title" }, "Create Account"),
      c.createElement(
        "form",
        { onSubmit: i, className: "register-form" },
        c.createElement(
          "div",
          { className: "input-group" },
          c.createElement(xv, { className: "input-icon" }),
          c.createElement("input", {
            type: "email",
            placeholder: "Email",
            value: e,
            onChange: (s) => t(s.target.value),
            required: !0,
          })
        ),
        c.createElement(
          "div",
          { className: "input-group" },
          c.createElement(kv, { className: "input-icon" }),
          c.createElement("input", {
            type: "text",
            placeholder: "Full Name",
            value: n,
            onChange: (s) => r(s.target.value),
            required: !0,
          })
        ),
        c.createElement(
          "div",
          { className: "input-group" },
          c.createElement(Sv, { className: "input-icon" }),
          c.createElement("input", {
            type: "password",
            placeholder: "Password",
            value: o,
            onChange: (s) => l(s.target.value),
            minLength: 5,
            maxLength: 20,
            required: !0,
          })
        ),
        c.createElement(
          "button",
          { type: "submit", className: "register-button" },
          "Sign Up"
        )
      ),
      c.createElement(
        "p",
        { className: "login-link" },
        "Already have an account? ",
        c.createElement("a", { href: "/login" }, "Log in")
      )
    )
  );
};
var Nv = We(Cv, "Rezerwacje");
const Ov = () => {
  const [e, t] = k.exports.useState(""),
    [n, r] = k.exports.useState(""),
    o = $t(),
    l = async (a) => {
      a.preventDefault();
      try {
        const i = await mv(e, n);
        console.log("Login successful, token:", i.token),
          localStorage.setItem("token", i.token),
          localStorage.setItem("email", e),
          o("/");
      } catch (i) {
        console.error("Error logging in:", i), alert("Error logging in");
      }
    };
  return c.createElement(
    "div",
    { className: "login-container" },
    c.createElement("h2", null, "Login"),
    c.createElement(
      "form",
      { onSubmit: l },
      c.createElement(
        "div",
        null,
        c.createElement("label", null, "Email:"),
        c.createElement("input", {
          type: "email",
          value: e,
          onChange: (a) => t(a.target.value),
          required: !0,
        })
      ),
      c.createElement(
        "div",
        null,
        c.createElement("label", null, "Password:"),
        c.createElement("input", {
          type: "password",
          value: n,
          onChange: (a) => r(a.target.value),
          required: !0,
        })
      ),
      c.createElement("button", { type: "submit" }, "Login")
    )
  );
};
var Pv = We(Ov, "Rezerwacje");
const Tv = () => {
  const [e, t] = k.exports.useState([]),
    [n, r] = k.exports.useState(null),
    [o, l] = k.exports.useState([]),
    a = localStorage.getItem("email"),
    i = localStorage.getItem("token");
  k.exports.useEffect(() => {
    a && i && s();
  }, [a, i]);
  const s = () => {
      R0(a, i)
        .then((p) => t(p))
        .catch((p) => console.error("Error fetching reservations:", p));
    },
    u = (p) => {
      i &&
        a &&
        _0(p, a, i)
          .then(() => {
            alert("Reservation deleted successfully."), s(), r(null);
          })
          .catch((w) => console.error("Error deleting reservation:", w));
    },
    f = (p) => {
      if (!n) return;
      const w = { reservationId: n.reservationId, newReservationDate: p };
      L0(w)
        .then(() => {
          alert("Reservation updated successfully."), s(), r(null), l([]);
        })
        .catch((y) => console.error("Error updating reservation:", y));
    },
    g = () => {
      n &&
        M0(n.reservationId)
          .then((p) => l(p))
          .catch((p) => console.error("Error fetching nearest dates:", p));
    };
  return c.createElement(
    "div",
    { className: "user-reservations" },
    c.createElement("h2", null, "Your Reservations"),
    e.length > 0
      ? c.createElement(
          "ul",
          { className: "reservations-list" },
          e.map((p) =>
            c.createElement(
              "li",
              { key: p.reservationId },
              c.createElement(
                "p",
                null,
                c.createElement("strong", null, "Salon:"),
                " ",
                p.salonName
              ),
              c.createElement(
                "p",
                null,
                c.createElement("strong", null, "Employee:"),
                " ",
                p.employeeName
              ),
              c.createElement(
                "p",
                null,
                c.createElement("strong", null, "Service:"),
                " ",
                p.offerName
              ),
              c.createElement(
                "p",
                null,
                c.createElement("strong", null, "Date and Time:"),
                " ",
                new Date(p.reservationDateTime).toLocaleString()
              ),
              c.createElement("button", { onClick: () => r(p) }, "Select")
            )
          )
        )
      : c.createElement("p", null, "No reservations found."),
    n &&
      c.createElement(
        "div",
        { className: "selected-reservation" },
        c.createElement("h3", null, "Selected Reservation"),
        c.createElement(
          "p",
          null,
          c.createElement("strong", null, "Salon:"),
          " ",
          n.salonName
        ),
        c.createElement(
          "p",
          null,
          c.createElement("strong", null, "Employee:"),
          " ",
          n.employeeName
        ),
        c.createElement(
          "p",
          null,
          c.createElement("strong", null, "Service:"),
          " ",
          n.offerName
        ),
        c.createElement(
          "p",
          null,
          c.createElement("strong", null, "Date and Time:"),
          " ",
          new Date(n.reservationDateTime).toLocaleString()
        ),
        c.createElement(
          "div",
          { className: "button-group" },
          c.createElement(
            "button",
            { className: "change-button", onClick: g },
            "Change Date"
          ),
          c.createElement(
            "button",
            { className: "cancel-button", onClick: () => u(n.reservationId) },
            "Cancel Reservation"
          )
        ),
        o.length > 0 &&
          c.createElement(
            "div",
            { className: "available-dates" },
            c.createElement("h4", null, "Available Dates:"),
            c.createElement(
              "ul",
              null,
              o.map((p, w) =>
                c.createElement(
                  "li",
                  { key: w },
                  c.createElement(
                    "span",
                    null,
                    p.date,
                    " - ",
                    p.startServices,
                    " to ",
                    p.endServices
                  ),
                  c.createElement(
                    "button",
                    { onClick: () => f(`${p.date}T${p.startServices}`) },
                    "Select"
                  )
                )
              )
            )
          )
      )
  );
};
var Rv = We(Tv, "Rezerwacje");
function Dv(e) {
  return Et({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z",
        },
        child: [],
      },
    ],
  })(e);
}
function _v(e) {
  return Et({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bu(e) {
  return Et({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",
        },
        child: [],
      },
    ],
  })(e);
}
function Lv(e) {
  return Et({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function Mv(e) {
  return Et({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
const bv = () => {
  const [e, t] = k.exports.useState([]),
    [n, r] = k.exports.useState(!0),
    o = localStorage.getItem("email") || "",
    l = $t();
  k.exports.useEffect(() => {
    fetch(
      `http://164.90.190.165:8080/owner/salons?email=${encodeURIComponent(o)}`
    )
      .then((s) => {
        if (!s.ok) throw new Error("Network response was not ok");
        return s.json();
      })
      .then((s) => {
        t(s), r(!1);
      })
      .catch((s) => {
        console.error("Error fetching salons:", s), r(!1);
      });
  }, [o]);
  const a = (s) => {
      l(`/owner/salon/${s}?email=${encodeURIComponent(o)}`);
    },
    i = () => {
      l("/create-salon");
    };
  return c.createElement(
    "div",
    { className: "my-salons-container" },
    c.createElement(
      "div",
      { className: "header-section" },
      c.createElement(
        "h1",
        { className: "title" },
        c.createElement(Dv, { className: "title-icon" }),
        " My salons"
      ),
      c.createElement(
        "button",
        { className: "create-button", onClick: i },
        c.createElement(Bu, null),
        " New Salon"
      )
    ),
    n
      ? c.createElement(
          "div",
          { className: "loading-container" },
          c.createElement("div", { className: "loading-spinner" }),
          c.createElement("p", null, "Salon loading...")
        )
      : e.length > 0
      ? c.createElement(
          "div",
          { className: "salon-grid" },
          e.map((s) =>
            c.createElement(
              "div",
              { key: s.id, className: "salon-card", onClick: () => a(s.id) },
              c.createElement(
                "div",
                { className: "card-header" },
                c.createElement("h2", { className: "salon-name" }, s.salonName),
                c.createElement(
                  "span",
                  { className: "salon-category" },
                  c.createElement(Mv, null),
                  " ",
                  s.category
                )
              ),
              c.createElement(
                "div",
                { className: "card-body" },
                c.createElement(
                  "p",
                  { className: "salon-address" },
                  c.createElement(_v, null),
                  c.createElement(
                    "span",
                    { className: "salon-name-span" },
                    s.street,
                    " ",
                    s.number
                  ),
                  c.createElement("span", null, s.zipCode, " ", s.city)
                )
              ),
              c.createElement("div", { className: "card-hover-effect" })
            )
          )
        )
      : c.createElement(
          "div",
          { className: "no-salons" },
          c.createElement(Lv, { className: "sad-icon" }),
          c.createElement("p", null, "No salons found"),
          c.createElement(
            "button",
            { className: "create-button", onClick: i },
            c.createElement(Bu, null),
            " Create your first salon"
          )
        )
  );
};
var Fv = We(bv, "Rezerwacje");
const Iv = [
    { dayOfWeek: "MONDAY", startTime: "", endTime: "" },
    { dayOfWeek: "TUESDAY", startTime: "", endTime: "" },
    { dayOfWeek: "WEDNESDAY", startTime: "", endTime: "" },
    { dayOfWeek: "THURSDAY", startTime: "", endTime: "" },
    { dayOfWeek: "FRIDAY", startTime: "", endTime: "" },
    { dayOfWeek: "SATURDAY", startTime: "", endTime: "" },
    { dayOfWeek: "SUNDAY", startTime: "", endTime: "" },
  ],
  jv = ({ salonId: e }) => {
    const [t, n] = k.exports.useState(""),
      [r, o] = k.exports.useState(""),
      [l, a] = k.exports.useState(Iv),
      i = (u, f, g) => {
        const p = [...l];
        (p[u][f] = g), a(p);
      },
      s = async (u) => {
        u.preventDefault();
        const f = { salonId: e, name: t, email: r, availability: l };
        try {
          (await X.post(`http://164.90.190.165:8080/salon/${e}/employee`, f))
            .status === 200
            ? (alert("Employee added successfully!"), window.location.reload())
            : alert("Error adding employee.");
        } catch (g) {
          console.error(g),
            alert("An error occurred while adding the employee.");
        }
      };
    return c.createElement(
      "form",
      { onSubmit: s, className: "add-employee-form" },
      c.createElement(
        "div",
        null,
        c.createElement("label", null, "Employee Name"),
        c.createElement("input", {
          type: "text",
          value: t,
          onChange: (u) => n(u.target.value),
          required: !0,
        })
      ),
      c.createElement(
        "div",
        null,
        c.createElement("label", null, "Employee Email"),
        c.createElement("input", {
          type: "email",
          value: r,
          onChange: (u) => o(u.target.value),
          required: !0,
        })
      ),
      c.createElement(
        "div",
        null,
        c.createElement("h3", null, "Availability"),
        l.map((u, f) =>
          c.createElement(
            "div",
            { key: f, className: "time-input-group" },
            c.createElement("label", null, u.dayOfWeek),
            c.createElement("input", {
              type: "time",
              step: "3600",
              value: u.startTime,
              onChange: (g) => i(f, "startTime", g.target.value),
              required: !0,
            }),
            c.createElement("span", null, "to"),
            c.createElement("input", {
              type: "time",
              step: "3600",
              value: u.endTime,
              onChange: (g) => i(f, "endTime", g.target.value),
              required: !0,
            })
          )
        )
      ),
      c.createElement("button", { type: "submit" }, "Add Employee")
    );
  };
var Uv = We(jv, "Rezerwacje");
const Av = ({ employeeId: e, availableOffers: t, onSuccess: n }) => {
    const [r, o] = k.exports.useState(""),
      [l, a] = k.exports.useState(!1),
      [i, s] = k.exports.useState(""),
      u = async (f) => {
        if ((f.preventDefault(), r === "")) {
          s("Please chose an offer");
          return;
        }
        a(!0), s("");
        try {
          (
            await X.patch("http://164.90.190.165:8080/employees/add-offer", {
              offerId: r,
              employeeId: e,
            })
          ).status === 200
            ? (n(), o(""))
            : s("There was a problem when assigning an offer");
        } catch (g) {
          console.error("Error when assigning an offer:", g),
            s("This employee is already assigned to this offer!");
        } finally {
          a(!1);
        }
      };
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(
        "style",
        null,
        `
        /* AssignOfferForm.css */
:root {
    --accent-color: #e76f51;
    --background-dark: #3d3c3c;
    --text-light: #f8f9fa;
    --text-muted: #a0aec0;
    --error-color: #ff4444;
}

.assign-offer-form {
    max-width: 500px;
    margin: 1rem 0;
    padding: 1.5rem;
    background: #4a4a4a;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-light);
    font-weight: 500;
}

.form-select {
    width: 100%;
    padding: 0.8rem;
    background: #3d3c3c;
    border: 2px solid #5a5a5a;
    border-radius: 8px;
    color: var(--text-light);
    font-size: 1rem;
    transition: all 0.3s ease;
    appearance: none;
}

.form-select:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.2);
}

.submit-button {
    width: 100%;
    padding: 1rem;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.submit-button:hover:not(:disabled) {
    background: #d45d3f;
    transform: translateY(-2px);
}

.submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.loading-text {
    display: inline-block;
    padding-left: 1.5rem;
    position: relative;
}

.loading-text::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.error-message {
    margin-top: 1rem;
    padding: 0.8rem;
    background: rgba(255, 68, 68, 0.1);
    border: 1px solid var(--error-color);
    border-radius: 6px;
    color: var(--error-color);
    font-size: 0.9rem;
}

@keyframes spin {
    to {
        transform: translateY(-50%) rotate(360deg);
    }
}

@media (max-width: 768px) {
    .assign-offer-form {
        padding: 1rem;
    }

    .form-select {
        font-size: 0.9rem;
    }

    .submit-button {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
}
      `
      ),
      c.createElement(
        "form",
        { onSubmit: u, className: "assign-offer-form" },
        c.createElement(
          "div",
          { className: "form-group" },
          c.createElement(
            "label",
            { className: "form-label" },
            "Select offer:"
          ),
          c.createElement(
            "select",
            {
              className: "form-select",
              value: r,
              onChange: (f) => o(Number(f.target.value)),
              disabled: l,
            },
            c.createElement(
              "option",
              { value: "" },
              "-- Select from the list --"
            ),
            t.map((f) =>
              c.createElement("option", { key: f.id, value: f.id }, f.name)
            )
          )
        ),
        c.createElement(
          "button",
          { type: "submit", className: "submit-button", disabled: l },
          l
            ? c.createElement(
                "span",
                { className: "loading-text" },
                "Assignment..."
              )
            : "Assign offer"
        ),
        i && c.createElement("div", { className: "error-message" }, i)
      )
    );
  },
  zv = () => {
    const { salonId: e } = zi(),
      t = Rr(),
      n = new URLSearchParams(t.search).get("email") || "",
      [r, o] = k.exports.useState(null),
      [l, a] = k.exports.useState(""),
      [i, s] = k.exports.useState(""),
      [u, f] = k.exports.useState(""),
      [g, p] = k.exports.useState(""),
      [w, y] = k.exports.useState(""),
      E = r ? r.offerDto : [],
      [d, m] = k.exports.useState(null),
      [h, v] = k.exports.useState("");
    if (
      (k.exports.useEffect(() => {
        fetch(
          `http://164.90.190.165:8080/owner/salon/${e}?email=${encodeURIComponent(
            n
          )}`
        )
          .then((C) => {
            if (!C.ok) throw new Error("Failed to fetch salon data");
            return C.json();
          })
          .then((C) => o(C))
          .catch((C) => console.error("Error fetching salon details:", C));
      }, [e, n]),
      !r)
    )
      return c.createElement("p", null, "Loading...");
    const S = async (C) => {
        C.preventDefault();
        const R = parseInt(g, 10),
          T = Math.floor(R / 60)
            .toString()
            .padStart(2, "0"),
          F = (R % 60).toString().padStart(2, "0"),
          Se = `${T}:${F}`,
          z = {
            name: l,
            description: i,
            price: parseFloat(u),
            duration: Se,
            salonId: Number(e),
          };
        try {
          const j = await X.post("http://164.90.190.165:8080/offer", z);
          console.log("New offer created:", j.data);
          const be = j.data;
          o((xe) => xe && { ...xe, offerDto: [...xe.offerDto, be] }),
            a(""),
            s(""),
            f(""),
            p("");
        } catch (j) {
          console.error("Error creating new offer:", j);
        }
      },
      O = (C) => {
        C.target.files && C.target.files[0] && m(C.target.files[0]);
      },
      N = async (C) => {
        if ((C.preventDefault(), !d)) {
          v("No file selected!");
          return;
        }
        const R = new FormData();
        R.append("multipartFile", d);
        try {
          const T = await X.post(
            `http://164.90.190.165:8080/salons/image/${e}`,
            R,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Image upload response:", T.data),
            v("Uploading successful");
        } catch (T) {
          console.error("Error uploading image:", T),
            v("Error uploading image");
        }
      };
    return c.createElement(
      "div",
      { className: "salon-container" },
      c.createElement("h1", { className: "salon-title" }, r.salonName),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "\u{1F4C5} Reservations"),
        Object.entries(r.reservationDto).length > 0
          ? Object.entries(r.reservationDto).map(([C, R]) =>
              c.createElement(
                "div",
                { key: C, className: "reservation-day" },
                c.createElement("h3", null, C),
                R.map((T) =>
                  c.createElement(
                    "div",
                    { key: T.reservationId, className: "reservation-card" },
                    c.createElement(
                      "p",
                      null,
                      c.createElement("strong", null, T.offerName),
                      " by ",
                      T.employeeName
                    ),
                    c.createElement(
                      "p",
                      null,
                      new Date(T.reservationDateTimeStart).toLocaleTimeString(),
                      " -",
                      " ",
                      new Date(T.reservationDateTimeEnd).toLocaleTimeString()
                    ),
                    c.createElement("p", null, "\u{1F4B0} ", T.price, " PLN")
                  )
                )
              )
            )
          : c.createElement("p", null, "No reservations found.")
      ),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "\u{1F468}\u200D\u{1F4BC} Employees"),
        r.employeeDto.map((C) =>
          c.createElement(
            "div",
            { key: C.employeeId, className: "employee-card" },
            c.createElement("h3", null, C.name),
            c.createElement("p", null, "Email: ", C.email),
            c.createElement("h4", null, "Availability:"),
            c.createElement(
              "ul",
              null,
              C.availability.map((R, T) =>
                c.createElement(
                  "li",
                  { key: T },
                  R.dayOfWeek,
                  ": ",
                  R.startTime ? `${R.startTime} - ${R.endTime}` : "Unavailable"
                )
              )
            ),
            c.createElement("h4", null, "Services Offered:"),
            c.createElement(
              "ul",
              null,
              C.offerList.map((R) =>
                c.createElement(
                  "li",
                  { key: R.id },
                  R.name,
                  " - ",
                  R.price,
                  " PLN (",
                  R.duration,
                  ")"
                )
              )
            )
          )
        )
      ),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "\u2795 Add New Employee"),
        c.createElement(Uv, { salonId: Number(e) })
      ),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "\u{1F487}\u200D\u2642\uFE0F Services"),
        c.createElement(
          "ul",
          { className: "offer-list" },
          r.offerDto.map((C) =>
            c.createElement(
              "li",
              { key: C.id, className: "offer-item" },
              c.createElement("strong", null, C.name),
              ": ",
              C.description,
              " - ",
              C.price,
              " PLN (",
              C.duration,
              ")"
            )
          )
        ),
        c.createElement(
          "div",
          { className: "offer-form-container" },
          c.createElement("h3", null, "Add New Offer"),
          c.createElement(
            "form",
            { onSubmit: S, className: "offer-form" },
            c.createElement("input", {
              type: "text",
              placeholder: "Offer Name",
              value: l,
              onChange: (C) => a(C.target.value),
              required: !0,
            }),
            c.createElement("textarea", {
              placeholder: "Description",
              value: i,
              onChange: (C) => s(C.target.value),
              required: !0,
            }),
            c.createElement("input", {
              type: "number",
              placeholder: "Price",
              value: u,
              onChange: (C) => f(C.target.value),
              required: !0,
              step: "0.01",
            }),
            c.createElement("input", {
              type: "number",
              placeholder: "Duration (minutes)",
              value: g,
              onChange: (C) => p(C.target.value),
              required: !0,
              min: "1",
            }),
            c.createElement("button", { type: "submit" }, "Add Offer")
          )
        )
      ),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "Assign Offer to Employee"),
        c.createElement(
          "div",
          null,
          c.createElement(
            "label",
            { htmlFor: "employee-select" },
            "Select an employee:"
          ),
          c.createElement(
            "select",
            {
              id: "employee-select",
              value: w,
              onChange: (C) => y(Number(C.target.value)),
            },
            c.createElement("option", { value: "" }, "-- Choose --"),
            r.employeeDto.map((C) =>
              c.createElement(
                "option",
                { key: C.employeeId, value: C.employeeId },
                C.name
              )
            )
          )
        ),
        w !== "" &&
          c.createElement(Av, {
            employeeId: Number(w),
            availableOffers: E,
            onSuccess: () => {
              alert("Offer assigned successfully!");
            },
          })
      ),
      c.createElement(
        "section",
        { className: "section" },
        c.createElement("h2", null, "Upload Image"),
        c.createElement(
          "form",
          { onSubmit: N, className: "image-upload-form" },
          c.createElement("input", {
            type: "file",
            accept: "image/*",
            onChange: O,
            required: !0,
          }),
          c.createElement("button", { type: "submit" }, "Upload Image")
        ),
        h && c.createElement("p", null, h)
      )
    );
  };
var $v = We(zv, "Rezerwacje");
function Bv({ email: e }) {
  const [t, n] = k.exports.useState(""),
    [r, o] = k.exports.useState(""),
    [l, a] = k.exports.useState(""),
    [i, s] = k.exports.useState(""),
    [u, f] = k.exports.useState(""),
    [g, p] = k.exports.useState(""),
    [w, y] = k.exports.useState(""),
    [E, d] = k.exports.useState(""),
    m = $t(),
    h = async () => {
      try {
        const O = await X.post(
          "http://164.90.190.165:8080/reservation-service/code/generateCode"
        );
        y(O.data.code);
      } catch (O) {
        console.error("Error during code generation:", O);
      }
    },
    v = async () => {
      try {
        const O = await X.get(
          "http://164.90.190.165:8060/reservation-service/code/get-link-to-code"
        );
        window.open(O.data, "_blank");
      } catch (O) {
        console.error("Error while downloading the link:", O),
          alert("Error fetching code link");
      }
    },
    S = async (O) => {
      if ((O.preventDefault(), !E)) {
        alert("Please enter the code!");
        return;
      }
      const N = {
        salonName: t,
        category: r,
        city: l,
        zipCode: i,
        street: u,
        number: g,
        email: e,
        code: E,
      };
      try {
        const C = await X.post("http://164.90.190.165:8080/salon", N);
        console.log("Salon Created:", C.data);
        const R = C.data.salonId;
        m(`/add-opening-hours/${R}`);
      } catch (C) {
        console.error("Error when creating a salon:", C);
      }
    };
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      "style",
      null,
      `
                /* CreateSalon.css */
:root {
  --primary-color: #2c3e50;
  --accent-color: #e76f51;
  --background-dark: #3d3c3c;
  --input-background: #4a4a4a;
  --text-light: #f8f9fa;
  --text-muted: #a0aec0;
}

.create-salon {
  max-width: 800px;
  margin: 100px auto 2rem;
  padding: 2rem;
  background: var(--background-dark);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: var(--text-light);
  font-family: 'Poppins', sans-serif;
}

.create-salon h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.create-salon h1 span {
  color: var(--accent-color);
}

.code-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #4a4a4a;
  border-radius: 10px;
  border: 1px solid #5a5a5a;
}

.code-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.generate-button,
.bought-code-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.generate-button {
  background: var(--accent-color);
  color: white;
}

.bought-code-button {
  background: var(--accent-color);
  color: white;
}

.generate-button:hover,
.bought-code-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.generated-code-info {
  padding: 1rem;
  background: rgba(231, 111, 81, 0.1);
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  text-align: center;
}

.generated-code-info strong {
  color: var(--accent-color);
  font-size: 1.2rem;
}

.create-salon form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.create-salon input {
  width: 100%;
  padding: 0.8rem;
  background: var(--input-background);
  border: 2px solid #5a5a5a;
  border-radius: 8px;
  color: var(--text-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.create-salon input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.2);
}

.create-salon button[type="submit"] {
  grid-column: span 2;
  background: var(--accent-color);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.create-salon button[type="submit"]:hover {
  background: #d45d3f;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .create-salon {
    margin: 80px 1rem 2rem;
    padding: 1.5rem;
  }

  .create-salon form {
    grid-template-columns: 1fr;
  }

  .code-buttons {
    flex-direction: column;
  }

  .create-salon button[type="submit"] {
    grid-column: span 1;
  }
}
            `
    ),
    c.createElement(
      "div",
      { className: "create-salon" },
      c.createElement("h1", null, "Create Salon"),
      c.createElement(
        "div",
        { className: "code-section" },
        c.createElement(
          "div",
          { className: "code-buttons" },
          c.createElement(
            "button",
            { type: "button", onClick: h, className: "generate-button" },
            "Generate Free Code"
          ),
          c.createElement(
            "button",
            { type: "button", onClick: v, className: "bought-code-button" },
            "Bought Code"
          )
        ),
        w &&
          c.createElement(
            "div",
            { className: "generated-code-info" },
            c.createElement(
              "p",
              null,
              "Free code: ",
              c.createElement("strong", null, w)
            ),
            c.createElement("small", null, "Copy and paste the code below")
          )
      ),
      c.createElement(
        "form",
        { className: "create-salon-form", onSubmit: S },
        c.createElement("input", {
          type: "text",
          placeholder: "Salon Name",
          value: t,
          onChange: (O) => n(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "Category",
          value: r,
          onChange: (O) => o(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "City",
          value: l,
          onChange: (O) => a(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "Zip Code",
          value: i,
          onChange: (O) => s(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "Street",
          value: u,
          onChange: (O) => f(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "Street Number",
          value: g,
          onChange: (O) => p(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "text",
          placeholder: "Paste Code Here",
          value: E,
          onChange: (O) => d(O.target.value),
          required: !0,
        }),
        c.createElement("input", {
          type: "email",
          value: e || "",
          placeholder: "Email (auto-filled)",
          disabled: !0,
          style: { display: "none" },
        }),
        c.createElement("button", { type: "submit" }, "Create Salon")
      )
    )
  );
}
var Wv = We(Bv, "Rezerwacje");
const Hv = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
function Vv() {
  const { salonId: e } = zi(),
    t = $t(),
    [n, r] = k.exports.useState(
      Hv.map((i) => ({ dayOfWeek: i, openingTime: "", closingTime: "" }))
    ),
    o = () =>
      Array.from(
        { length: 24 },
        (i, s) => `${s.toString().padStart(2, "0")}:00`
      ),
    l = (i, s, u) => {
      const f = [...n];
      (f[i] = { ...f[i], [s]: u }), r(f);
    },
    a = async (i) => {
      if (
        (i.preventDefault(),
        n.some((f) => {
          const g = parseInt(f.openingTime.split(":")[0]);
          return parseInt(f.closingTime.split(":")[0]) <= g;
        }))
      ) {
        alert("The closing time must be later than the opening time!");
        return;
      }
      const u = n.map((f) => ({
        salonId: Number(e),
        dayOfWeek: f.dayOfWeek,
        openingTime: f.openingTime,
        closingTime: f.closingTime,
      }));
      try {
        await X.patch("http://164.90.190.165:8080/salon/add-opening-hours", u),
          t(`/owner/salon/${e}`);
      } catch (f) {
        console.error("Error when adding opening hours:", f);
      }
    };
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      "style",
      null,
      `
        .add-opening-hours {
            max-width: 1200px;
            margin: 100px auto 2rem;
            padding: 2rem;
            background: #3d3c3c;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            color: #f8f9fa;
            font-family: 'Poppins', sans-serif;
        }
        
        .add-opening-hours h2 {
            text-align: center;
            color: var(--accent-color);
            font-size: 2rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
        
        .hours-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .day-card {
            background: #4a4a4a;
            padding: 1.5rem;
            border-radius: 10px;
            border: 1px solid #5a5a5a;
        }
        
        .day-card h3 {
            margin: 0 0 1rem;
            color: var(--accent-color);
            font-size: 1.1rem;
            text-align: center;
        }
        
        .time-selectors {
            display: grid;
            gap: 1rem;
        }
        
        .time-group {
            display: grid;
            gap: 0.5rem;
        }
        
        .time-group label {
            font-size: 0.9rem;
            color: #a0aec0;
        }
        
        .time-group select {
            width: 100%;
            padding: 0.8rem;
            background: #5a5a5a;
            border: 2px solid #6a6a6a;
            border-radius: 8px;
            color: #f8f9fa;
            font-size: 1rem;
            appearance: none;
            transition: all 0.3s ease;
        }
        
        .time-group select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.2);
        }
        
        .submit-button {
            background-color: var(--accent-color);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            width: fit-content;
            margin: 0 auto;
        }
        
        .submit-button:hover {
            background-color: #d45d3f;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
            .add-opening-hours {
                margin: 80px 1rem 2rem;
                padding: 1.5rem;
            }
        
            .hours-grid {
                grid-template-columns: 1fr;
            }
        }
      `
    ),
    c.createElement(
      "div",
      { className: "add-opening-hours" },
      c.createElement("h2", null, "Set your salon opening hours"),
      c.createElement(
        "form",
        { onSubmit: a },
        c.createElement(
          "div",
          { className: "hours-grid" },
          n.map((i, s) =>
            c.createElement(
              "div",
              { key: i.dayOfWeek, className: "day-card" },
              c.createElement("h3", null, i.dayOfWeek),
              c.createElement(
                "div",
                { className: "time-selectors" },
                c.createElement(
                  "div",
                  { className: "time-group" },
                  c.createElement("label", null, "Opening:"),
                  c.createElement(
                    "select",
                    {
                      value: i.openingTime,
                      onChange: (u) => l(s, "openingTime", u.target.value),
                      required: !0,
                    },
                    c.createElement("option", { value: "" }, "-- Choose  --"),
                    o().map((u) =>
                      c.createElement("option", { key: u, value: u }, u)
                    )
                  )
                ),
                c.createElement(
                  "div",
                  { className: "time-group" },
                  c.createElement("label", null, "Close:"),
                  c.createElement(
                    "select",
                    {
                      value: i.closingTime,
                      onChange: (u) => l(s, "closingTime", u.target.value),
                      required: !0,
                    },
                    c.createElement("option", { value: "" }, "-- Choose --"),
                    o().map((u) =>
                      c.createElement("option", { key: u, value: u }, u)
                    )
                  )
                )
              )
            )
          )
        ),
        c.createElement(
          "button",
          { type: "submit", className: "submit-button" },
          "Save the hours"
        )
      )
    )
  );
}
var Yv = We(Vv, "Rezerwacje");
function qv() {
  return c.createElement(
    Fh,
    null,
    c.createElement(
      "div",
      { className: "app-content" },
      c.createElement(
        Dh,
        null,
        c.createElement(Ie, { path: "/", element: c.createElement(w0, null) }),
        c.createElement(Ie, {
          path: "/salons/:id",
          element: c.createElement(fv, null),
        }),
        c.createElement(Ie, {
          path: "/register",
          element: c.createElement(Nv, null),
        }),
        c.createElement(Ie, {
          path: "/login",
          element: c.createElement(Pv, null),
        }),
        c.createElement(Ie, {
          path: "/reservations",
          element: c.createElement(Rv, null),
        }),
        c.createElement(Ie, {
          path: "/owner/salons",
          element: c.createElement(Fv, null),
        }),
        c.createElement(Ie, {
          path: "/owner/salon/:salonId",
          element: c.createElement($v, null),
        }),
        c.createElement(Ie, {
          path: "/create-salon",
          element: c.createElement(Wv, null),
        }),
        c.createElement(Ie, {
          path: "/add-opening-hours/:salonId",
          element: c.createElement(Yv, null),
        })
      )
    )
  );
}
bp.render(
  c.createElement(c.StrictMode, null, c.createElement(qv, null)),
  document.getElementById("root")
);
