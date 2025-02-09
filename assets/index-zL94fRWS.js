;(function () {
  const M = document.createElement('link').relList
  if (M && M.supports && M.supports('modulepreload')) return
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) le(O)
  new MutationObserver((O) => {
    for (const U of O)
      if (U.type === 'childList')
        for (const ee of U.addedNodes)
          ee.tagName === 'LINK' && ee.rel === 'modulepreload' && le(ee)
  }).observe(document, { childList: !0, subtree: !0 })
  function h(O) {
    const U = {}
    return (
      O.integrity && (U.integrity = O.integrity),
      O.referrerPolicy && (U.referrerPolicy = O.referrerPolicy),
      O.crossOrigin === 'use-credentials'
        ? (U.credentials = 'include')
        : O.crossOrigin === 'anonymous'
        ? (U.credentials = 'omit')
        : (U.credentials = 'same-origin'),
      U
    )
  }
  function le(O) {
    if (O.ep) return
    O.ep = !0
    const U = h(O)
    fetch(O.href, U)
  }
})()
var Ei = { exports: {} },
  gr = {},
  Ni = { exports: {} },
  F = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na
function Tf() {
  if (Na) return F
  Na = 1
  var _ = Symbol.for('react.element'),
    M = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    le = Symbol.for('react.strict_mode'),
    O = Symbol.for('react.profiler'),
    U = Symbol.for('react.provider'),
    ee = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    ne = Symbol.for('react.memo'),
    fe = Symbol.for('react.lazy'),
    Z = Symbol.iterator
  function X(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (Z && f[Z]) || f['@@iterator']),
        typeof f == 'function' ? f : null)
  }
  var Le = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    xe = Object.assign,
    J = {}
  function Q(f, y, I) {
    ;(this.props = f),
      (this.context = y),
      (this.refs = J),
      (this.updater = I || Le)
  }
  ;(Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (f, y) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, f, y, 'setState')
    }),
    (Q.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate')
    })
  function Be() {}
  Be.prototype = Q.prototype
  function Ze(f, y, I) {
    ;(this.props = f),
      (this.context = y),
      (this.refs = J),
      (this.updater = I || Le)
  }
  var We = (Ze.prototype = new Be())
  ;(We.constructor = Ze), xe(We, Q.prototype), (We.isPureReactComponent = !0)
  var ge = Array.isArray,
    He = Object.prototype.hasOwnProperty,
    A = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Te(f, y, I) {
    var D,
      B = {},
      W = null,
      q = null
    if (y != null)
      for (D in (y.ref !== void 0 && (q = y.ref),
      y.key !== void 0 && (W = '' + y.key),
      y))
        He.call(y, D) && !de.hasOwnProperty(D) && (B[D] = y[D])
    var K = arguments.length - 2
    if (K === 1) B.children = I
    else if (1 < K) {
      for (var ue = Array(K), Qe = 0; Qe < K; Qe++) ue[Qe] = arguments[Qe + 2]
      B.children = ue
    }
    if (f && f.defaultProps)
      for (D in ((K = f.defaultProps), K)) B[D] === void 0 && (B[D] = K[D])
    return { $$typeof: _, type: f, key: W, ref: q, props: B, _owner: A.current }
  }
  function rn(f, y) {
    return {
      $$typeof: _,
      type: f.type,
      key: y,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    }
  }
  function Sn(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === _
  }
  function Xn(f) {
    var y = { '=': '=0', ':': '=2' }
    return (
      '$' +
      f.replace(/[=:]/g, function (I) {
        return y[I]
      })
    )
  }
  var pn = /\/+/g
  function $e(f, y) {
    return typeof f == 'object' && f !== null && f.key != null
      ? Xn('' + f.key)
      : y.toString(36)
  }
  function ln(f, y, I, D, B) {
    var W = typeof f
    ;(W === 'undefined' || W === 'boolean') && (f = null)
    var q = !1
    if (f === null) q = !0
    else
      switch (W) {
        case 'string':
        case 'number':
          q = !0
          break
        case 'object':
          switch (f.$$typeof) {
            case _:
            case M:
              q = !0
          }
      }
    if (q)
      return (
        (q = f),
        (B = B(q)),
        (f = D === '' ? '.' + $e(q, 0) : D),
        ge(B)
          ? ((I = ''),
            f != null && (I = f.replace(pn, '$&/') + '/'),
            ln(B, y, I, '', function (Qe) {
              return Qe
            }))
          : B != null &&
            (Sn(B) &&
              (B = rn(
                B,
                I +
                  (!B.key || (q && q.key === B.key)
                    ? ''
                    : ('' + B.key).replace(pn, '$&/') + '/') +
                  f
              )),
            y.push(B)),
        1
      )
    if (((q = 0), (D = D === '' ? '.' : D + ':'), ge(f)))
      for (var K = 0; K < f.length; K++) {
        W = f[K]
        var ue = D + $e(W, K)
        q += ln(W, y, I, ue, B)
      }
    else if (((ue = X(f)), typeof ue == 'function'))
      for (f = ue.call(f), K = 0; !(W = f.next()).done; )
        (W = W.value), (ue = D + $e(W, K++)), (q += ln(W, y, I, ue, B))
    else if (W === 'object')
      throw (
        ((y = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (y === '[object Object]'
              ? 'object with keys {' + Object.keys(f).join(', ') + '}'
              : y) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    return q
  }
  function mn(f, y, I) {
    if (f == null) return f
    var D = [],
      B = 0
    return (
      ln(f, D, '', '', function (W) {
        return y.call(I, W, B++)
      }),
      D
    )
  }
  function Oe(f) {
    if (f._status === -1) {
      var y = f._result
      ;(y = y()),
        y.then(
          function (I) {
            ;(f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = I))
          },
          function (I) {
            ;(f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = I))
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = y))
    }
    if (f._status === 1) return f._result.default
    throw f._result
  }
  var ae = { current: null },
    k = { transition: null },
    T = {
      ReactCurrentDispatcher: ae,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: A,
    }
  function N() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (F.Children = {
      map: mn,
      forEach: function (f, y, I) {
        mn(
          f,
          function () {
            y.apply(this, arguments)
          },
          I
        )
      },
      count: function (f) {
        var y = 0
        return (
          mn(f, function () {
            y++
          }),
          y
        )
      },
      toArray: function (f) {
        return (
          mn(f, function (y) {
            return y
          }) || []
        )
      },
      only: function (f) {
        if (!Sn(f))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return f
      },
    }),
    (F.Component = Q),
    (F.Fragment = h),
    (F.Profiler = O),
    (F.PureComponent = Ze),
    (F.StrictMode = le),
    (F.Suspense = $),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (F.act = N),
    (F.cloneElement = function (f, y, I) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            f +
            '.'
        )
      var D = xe({}, f.props),
        B = f.key,
        W = f.ref,
        q = f._owner
      if (y != null) {
        if (
          (y.ref !== void 0 && ((W = y.ref), (q = A.current)),
          y.key !== void 0 && (B = '' + y.key),
          f.type && f.type.defaultProps)
        )
          var K = f.type.defaultProps
        for (ue in y)
          He.call(y, ue) &&
            !de.hasOwnProperty(ue) &&
            (D[ue] = y[ue] === void 0 && K !== void 0 ? K[ue] : y[ue])
      }
      var ue = arguments.length - 2
      if (ue === 1) D.children = I
      else if (1 < ue) {
        K = Array(ue)
        for (var Qe = 0; Qe < ue; Qe++) K[Qe] = arguments[Qe + 2]
        D.children = K
      }
      return { $$typeof: _, type: f.type, key: B, ref: W, props: D, _owner: q }
    }),
    (F.createContext = function (f) {
      return (
        (f = {
          $$typeof: ee,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: U, _context: f }),
        (f.Consumer = f)
      )
    }),
    (F.createElement = Te),
    (F.createFactory = function (f) {
      var y = Te.bind(null, f)
      return (y.type = f), y
    }),
    (F.createRef = function () {
      return { current: null }
    }),
    (F.forwardRef = function (f) {
      return { $$typeof: G, render: f }
    }),
    (F.isValidElement = Sn),
    (F.lazy = function (f) {
      return { $$typeof: fe, _payload: { _status: -1, _result: f }, _init: Oe }
    }),
    (F.memo = function (f, y) {
      return { $$typeof: ne, type: f, compare: y === void 0 ? null : y }
    }),
    (F.startTransition = function (f) {
      var y = k.transition
      k.transition = {}
      try {
        f()
      } finally {
        k.transition = y
      }
    }),
    (F.unstable_act = N),
    (F.useCallback = function (f, y) {
      return ae.current.useCallback(f, y)
    }),
    (F.useContext = function (f) {
      return ae.current.useContext(f)
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (f) {
      return ae.current.useDeferredValue(f)
    }),
    (F.useEffect = function (f, y) {
      return ae.current.useEffect(f, y)
    }),
    (F.useId = function () {
      return ae.current.useId()
    }),
    (F.useImperativeHandle = function (f, y, I) {
      return ae.current.useImperativeHandle(f, y, I)
    }),
    (F.useInsertionEffect = function (f, y) {
      return ae.current.useInsertionEffect(f, y)
    }),
    (F.useLayoutEffect = function (f, y) {
      return ae.current.useLayoutEffect(f, y)
    }),
    (F.useMemo = function (f, y) {
      return ae.current.useMemo(f, y)
    }),
    (F.useReducer = function (f, y, I) {
      return ae.current.useReducer(f, y, I)
    }),
    (F.useRef = function (f) {
      return ae.current.useRef(f)
    }),
    (F.useState = function (f) {
      return ae.current.useState(f)
    }),
    (F.useSyncExternalStore = function (f, y, I) {
      return ae.current.useSyncExternalStore(f, y, I)
    }),
    (F.useTransition = function () {
      return ae.current.useTransition()
    }),
    (F.version = '18.3.1'),
    F
  )
}
var Ca
function Pi() {
  return Ca || ((Ca = 1), (Ni.exports = Tf())), Ni.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a
function Rf() {
  if (_a) return gr
  _a = 1
  var _ = Pi(),
    M = Symbol.for('react.element'),
    h = Symbol.for('react.fragment'),
    le = Object.prototype.hasOwnProperty,
    O = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 }
  function ee(G, $, ne) {
    var fe,
      Z = {},
      X = null,
      Le = null
    ne !== void 0 && (X = '' + ne),
      $.key !== void 0 && (X = '' + $.key),
      $.ref !== void 0 && (Le = $.ref)
    for (fe in $) le.call($, fe) && !U.hasOwnProperty(fe) && (Z[fe] = $[fe])
    if (G && G.defaultProps)
      for (fe in (($ = G.defaultProps), $)) Z[fe] === void 0 && (Z[fe] = $[fe])
    return {
      $$typeof: M,
      type: G,
      key: X,
      ref: Le,
      props: Z,
      _owner: O.current,
    }
  }
  return (gr.Fragment = h), (gr.jsx = ee), (gr.jsxs = ee), gr
}
var ja
function Mf() {
  return ja || ((ja = 1), (Ei.exports = Rf())), Ei.exports
}
var c = Mf(),
  Ce = Pi(),
  zl = {},
  Ci = { exports: {} },
  Ae = {},
  _i = { exports: {} },
  ji = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa
function Of() {
  return (
    Pa ||
      ((Pa = 1),
      (function (_) {
        function M(k, T) {
          var N = k.length
          k.push(T)
          e: for (; 0 < N; ) {
            var f = (N - 1) >>> 1,
              y = k[f]
            if (0 < O(y, T)) (k[f] = T), (k[N] = y), (N = f)
            else break e
          }
        }
        function h(k) {
          return k.length === 0 ? null : k[0]
        }
        function le(k) {
          if (k.length === 0) return null
          var T = k[0],
            N = k.pop()
          if (N !== T) {
            k[0] = N
            e: for (var f = 0, y = k.length, I = y >>> 1; f < I; ) {
              var D = 2 * (f + 1) - 1,
                B = k[D],
                W = D + 1,
                q = k[W]
              if (0 > O(B, N))
                W < y && 0 > O(q, B)
                  ? ((k[f] = q), (k[W] = N), (f = W))
                  : ((k[f] = B), (k[D] = N), (f = D))
              else if (W < y && 0 > O(q, N)) (k[f] = q), (k[W] = N), (f = W)
              else break e
            }
          }
          return T
        }
        function O(k, T) {
          var N = k.sortIndex - T.sortIndex
          return N !== 0 ? N : k.id - T.id
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var U = performance
          _.unstable_now = function () {
            return U.now()
          }
        } else {
          var ee = Date,
            G = ee.now()
          _.unstable_now = function () {
            return ee.now() - G
          }
        }
        var $ = [],
          ne = [],
          fe = 1,
          Z = null,
          X = 3,
          Le = !1,
          xe = !1,
          J = !1,
          Q = typeof setTimeout == 'function' ? setTimeout : null,
          Be = typeof clearTimeout == 'function' ? clearTimeout : null,
          Ze = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function We(k) {
          for (var T = h(ne); T !== null; ) {
            if (T.callback === null) le(ne)
            else if (T.startTime <= k)
              le(ne), (T.sortIndex = T.expirationTime), M($, T)
            else break
            T = h(ne)
          }
        }
        function ge(k) {
          if (((J = !1), We(k), !xe))
            if (h($) !== null) (xe = !0), Oe(He)
            else {
              var T = h(ne)
              T !== null && ae(ge, T.startTime - k)
            }
        }
        function He(k, T) {
          ;(xe = !1), J && ((J = !1), Be(Te), (Te = -1)), (Le = !0)
          var N = X
          try {
            for (
              We(T), Z = h($);
              Z !== null && (!(Z.expirationTime > T) || (k && !Xn()));

            ) {
              var f = Z.callback
              if (typeof f == 'function') {
                ;(Z.callback = null), (X = Z.priorityLevel)
                var y = f(Z.expirationTime <= T)
                ;(T = _.unstable_now()),
                  typeof y == 'function'
                    ? (Z.callback = y)
                    : Z === h($) && le($),
                  We(T)
              } else le($)
              Z = h($)
            }
            if (Z !== null) var I = !0
            else {
              var D = h(ne)
              D !== null && ae(ge, D.startTime - T), (I = !1)
            }
            return I
          } finally {
            ;(Z = null), (X = N), (Le = !1)
          }
        }
        var A = !1,
          de = null,
          Te = -1,
          rn = 5,
          Sn = -1
        function Xn() {
          return !(_.unstable_now() - Sn < rn)
        }
        function pn() {
          if (de !== null) {
            var k = _.unstable_now()
            Sn = k
            var T = !0
            try {
              T = de(!0, k)
            } finally {
              T ? $e() : ((A = !1), (de = null))
            }
          } else A = !1
        }
        var $e
        if (typeof Ze == 'function')
          $e = function () {
            Ze(pn)
          }
        else if (typeof MessageChannel < 'u') {
          var ln = new MessageChannel(),
            mn = ln.port2
          ;(ln.port1.onmessage = pn),
            ($e = function () {
              mn.postMessage(null)
            })
        } else
          $e = function () {
            Q(pn, 0)
          }
        function Oe(k) {
          ;(de = k), A || ((A = !0), $e())
        }
        function ae(k, T) {
          Te = Q(function () {
            k(_.unstable_now())
          }, T)
        }
        ;(_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (k) {
            k.callback = null
          }),
          (_.unstable_continueExecution = function () {
            xe || Le || ((xe = !0), Oe(He))
          }),
          (_.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (rn = 0 < k ? Math.floor(1e3 / k) : 5)
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return X
          }),
          (_.unstable_getFirstCallbackNode = function () {
            return h($)
          }),
          (_.unstable_next = function (k) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var T = 3
                break
              default:
                T = X
            }
            var N = X
            X = T
            try {
              return k()
            } finally {
              X = N
            }
          }),
          (_.unstable_pauseExecution = function () {}),
          (_.unstable_requestPaint = function () {}),
          (_.unstable_runWithPriority = function (k, T) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                k = 3
            }
            var N = X
            X = k
            try {
              return T()
            } finally {
              X = N
            }
          }),
          (_.unstable_scheduleCallback = function (k, T, N) {
            var f = _.unstable_now()
            switch (
              (typeof N == 'object' && N !== null
                ? ((N = N.delay),
                  (N = typeof N == 'number' && 0 < N ? f + N : f))
                : (N = f),
              k)
            ) {
              case 1:
                var y = -1
                break
              case 2:
                y = 250
                break
              case 5:
                y = 1073741823
                break
              case 4:
                y = 1e4
                break
              default:
                y = 5e3
            }
            return (
              (y = N + y),
              (k = {
                id: fe++,
                callback: T,
                priorityLevel: k,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > f
                ? ((k.sortIndex = N),
                  M(ne, k),
                  h($) === null &&
                    k === h(ne) &&
                    (J ? (Be(Te), (Te = -1)) : (J = !0), ae(ge, N - f)))
                : ((k.sortIndex = y), M($, k), xe || Le || ((xe = !0), Oe(He))),
              k
            )
          }),
          (_.unstable_shouldYield = Xn),
          (_.unstable_wrapCallback = function (k) {
            var T = X
            return function () {
              var N = X
              X = T
              try {
                return k.apply(this, arguments)
              } finally {
                X = N
              }
            }
          })
      })(ji)),
    ji
  )
}
var za
function If() {
  return za || ((za = 1), (_i.exports = Of())), _i.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La
function Ff() {
  if (La) return Ae
  La = 1
  var _ = Pi(),
    M = If()
  function h(e) {
    for (
      var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += '&args[]=' + encodeURIComponent(arguments[t])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var le = new Set(),
    O = {}
  function U(e, n) {
    ee(e, n), ee(e + 'Capture', n)
  }
  function ee(e, n) {
    for (O[e] = n, e = 0; e < n.length; e++) le.add(n[e])
  }
  var G = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    $ = Object.prototype.hasOwnProperty,
    ne =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    fe = {},
    Z = {}
  function X(e) {
    return $.call(Z, e)
      ? !0
      : $.call(fe, e)
      ? !1
      : ne.test(e)
      ? (Z[e] = !0)
      : ((fe[e] = !0), !1)
  }
  function Le(e, n, t, r) {
    if (t !== null && t.type === 0) return !1
    switch (typeof n) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function xe(e, n, t, r) {
    if (n === null || typeof n > 'u' || Le(e, n, t, r)) return !0
    if (r) return !1
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n
        case 4:
          return n === !1
        case 5:
          return isNaN(n)
        case 6:
          return isNaN(n) || 1 > n
      }
    return !1
  }
  function J(e, n, t, r, l, u, i) {
    ;(this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i)
  }
  var Q = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Q[e] = new J(e, 0, !1, e, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var n = e[0]
      Q[n] = new J(n, 1, !1, e[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      Q[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Q[e] = new J(e, 2, !1, e, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        Q[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Q[e] = new J(e, 3, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      Q[e] = new J(e, 4, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Q[e] = new J(e, 6, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Q[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var Be = /[\-:]([a-z])/g
  function Ze(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var n = e.replace(Be, Ze)
      Q[n] = new J(n, 1, !1, e, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var n = e.replace(Be, Ze)
        Q[n] = new J(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var n = e.replace(Be, Ze)
      Q[n] = new J(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Q[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (Q.xlinkHref = new J(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Q[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function We(e, n, t, r) {
    var l = Q.hasOwnProperty(n) ? Q[n] : null
    ;(l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
      (xe(n, t, l, r) && (t = null),
      r || l === null
        ? X(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
  }
  var ge = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    He = Symbol.for('react.element'),
    A = Symbol.for('react.portal'),
    de = Symbol.for('react.fragment'),
    Te = Symbol.for('react.strict_mode'),
    rn = Symbol.for('react.profiler'),
    Sn = Symbol.for('react.provider'),
    Xn = Symbol.for('react.context'),
    pn = Symbol.for('react.forward_ref'),
    $e = Symbol.for('react.suspense'),
    ln = Symbol.for('react.suspense_list'),
    mn = Symbol.for('react.memo'),
    Oe = Symbol.for('react.lazy'),
    ae = Symbol.for('react.offscreen'),
    k = Symbol.iterator
  function T(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (k && e[k]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var N = Object.assign,
    f
  function y(e) {
    if (f === void 0)
      try {
        throw Error()
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/)
        f = (n && n[1]) || ''
      }
    return (
      `
` +
      f +
      e
    )
  }
  var I = !1
  function D(e, n) {
    if (!e || I) return ''
    I = !0
    var t = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (n)
        if (
          ((n = function () {
            throw Error()
          }),
          Object.defineProperty(n.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, [])
          } catch (m) {
            var r = m
          }
          Reflect.construct(e, [], n)
        } else {
          try {
            n.call()
          } catch (m) {
            r = m
          }
          e.call(n.prototype)
        }
      else {
        try {
          throw Error()
        } catch (m) {
          r = m
        }
        e()
      }
    } catch (m) {
      if (m && r && typeof m.stack == 'string') {
        for (
          var l = m.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  )
                }
              while (1 <= i && 0 <= o)
            break
          }
      }
    } finally {
      ;(I = !1), (Error.prepareStackTrace = t)
    }
    return (e = e ? e.displayName || e.name : '') ? y(e) : ''
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return y(e.type)
      case 16:
        return y('Lazy')
      case 13:
        return y('Suspense')
      case 19:
        return y('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = D(e.type, !1)), e
      case 11:
        return (e = D(e.type.render, !1)), e
      case 1:
        return (e = D(e.type, !0)), e
      default:
        return ''
    }
  }
  function W(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case de:
        return 'Fragment'
      case A:
        return 'Portal'
      case rn:
        return 'Profiler'
      case Te:
        return 'StrictMode'
      case $e:
        return 'Suspense'
      case ln:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Xn:
          return (e.displayName || 'Context') + '.Consumer'
        case Sn:
          return (e._context.displayName || 'Context') + '.Provider'
        case pn:
          var n = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case mn:
          return (
            (n = e.displayName || null), n !== null ? n : W(e.type) || 'Memo'
          )
        case Oe:
          ;(n = e._payload), (e = e._init)
          try {
            return W(e(n))
          } catch {}
      }
    return null
  }
  function q(e) {
    var n = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (n.displayName || 'Context') + '.Consumer'
      case 10:
        return (n._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ''),
          n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return n
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return W(n)
      case 8:
        return n === Te ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == 'function') return n.displayName || n.name || null
        if (typeof n == 'string') return n
    }
    return null
  }
  function K(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function ue(e) {
    var n = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    )
  }
  function Qe(e) {
    var n = ue(e) ? 'checked' : 'value',
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = '' + e[n]
    if (
      !e.hasOwnProperty(n) &&
      typeof t < 'u' &&
      typeof t.get == 'function' &&
      typeof t.set == 'function'
    ) {
      var l = t.get,
        u = t.set
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this)
          },
          set: function (i) {
            ;(r = '' + i), u.call(this, i)
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (i) {
            r = '' + i
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[n]
          },
        }
      )
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Qe(e))
  }
  function zi(e) {
    if (!e) return !1
    var n = e._valueTracker
    if (!n) return !0
    var t = n.getValue(),
      r = ''
    return (
      e && (r = ue(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    )
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function Ll(e, n) {
    var t = n.checked
    return N({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    })
  }
  function Li(e, n) {
    var t = n.defaultValue == null ? '' : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked
    ;(t = K(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === 'checkbox' || n.type === 'radio'
            ? n.checked != null
            : n.value != null,
      })
  }
  function Ti(e, n) {
    ;(n = n.checked), n != null && We(e, 'checked', n, !1)
  }
  function Tl(e, n) {
    Ti(e, n)
    var t = K(n.value),
      r = n.type
    if (t != null)
      r === 'number'
        ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
        : e.value !== '' + t && (e.value = '' + t)
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value')
      return
    }
    n.hasOwnProperty('value')
      ? Rl(e, n.type, t)
      : n.hasOwnProperty('defaultValue') && Rl(e, n.type, K(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked)
  }
  function Ri(e, n, t) {
    if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
      var r = n.type
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return
      ;(n = '' + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n)
    }
    ;(t = e.name),
      t !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== '' && (e.name = t)
  }
  function Rl(e, n, t) {
    ;(n !== 'number' || Sr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + t && (e.defaultValue = '' + t))
  }
  var Mt = Array.isArray
  function st(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {}
      for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty('$' + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0)
    } else {
      for (t = '' + K(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
          return
        }
        n !== null || e[l].disabled || (n = e[l])
      }
      n !== null && (n.selected = !0)
    }
  }
  function Ml(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(h(91))
    return N({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function Mi(e, n) {
    var t = n.value
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(h(92))
        if (Mt(t)) {
          if (1 < t.length) throw Error(h(93))
          t = t[0]
        }
        n = t
      }
      n == null && (n = ''), (t = n)
    }
    e._wrapperState = { initialValue: K(t) }
  }
  function Oi(e, n) {
    var t = K(n.value),
      r = K(n.defaultValue)
    t != null &&
      ((t = '' + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = '' + r)
  }
  function Ii(e) {
    var n = e.textContent
    n === e._wrapperState.initialValue &&
      n !== '' &&
      n !== null &&
      (e.value = n)
  }
  function Fi(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function Ol(e, n) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Fi(n)
      : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  var kr,
    Di = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l)
            })
          }
        : e
    })(function (e, n) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = n
      else {
        for (
          kr = kr || document.createElement('div'),
            kr.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; n.firstChild; ) e.appendChild(n.firstChild)
      }
    })
  function Ot(e, n) {
    if (n) {
      var t = e.firstChild
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n
        return
      }
    }
    e.textContent = n
  }
  var It = {
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
      strokeWidth: !0,
    },
    Oa = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(It).forEach(function (e) {
    Oa.forEach(function (n) {
      ;(n = n + e.charAt(0).toUpperCase() + e.substring(1)), (It[n] = It[e])
    })
  })
  function Ui(e, n, t) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : t || typeof n != 'number' || n === 0 || (It.hasOwnProperty(e) && It[e])
      ? ('' + n).trim()
      : n + 'px'
  }
  function Vi(e, n) {
    e = e.style
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf('--') === 0,
          l = Ui(t, n[t], r)
        t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l)
      }
  }
  var Ia = N(
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
  )
  function Il(e, n) {
    if (n) {
      if (Ia[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(h(137, e))
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(h(60))
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(h(61))
      }
      if (n.style != null && typeof n.style != 'object') throw Error(h(62))
    }
  }
  function Fl(e, n) {
    if (e.indexOf('-') === -1) return typeof n.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Dl = null
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Vl = null,
    at = null,
    ct = null
  function Ai(e) {
    if ((e = rr(e))) {
      if (typeof Vl != 'function') throw Error(h(280))
      var n = e.stateNode
      n && ((n = $r(n)), Vl(e.stateNode, e.type, n))
    }
  }
  function Bi(e) {
    at ? (ct ? ct.push(e) : (ct = [e])) : (at = e)
  }
  function Wi() {
    if (at) {
      var e = at,
        n = ct
      if (((ct = at = null), Ai(e), n)) for (e = 0; e < n.length; e++) Ai(n[e])
    }
  }
  function Hi(e, n) {
    return e(n)
  }
  function $i() {}
  var Al = !1
  function Qi(e, n, t) {
    if (Al) return e(n, t)
    Al = !0
    try {
      return Hi(e, n, t)
    } finally {
      ;(Al = !1), (at !== null || ct !== null) && ($i(), Wi())
    }
  }
  function Ft(e, n) {
    var t = e.stateNode
    if (t === null) return null
    var r = $r(t)
    if (r === null) return null
    t = r[n]
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (t && typeof t != 'function') throw Error(h(231, n, typeof t))
    return t
  }
  var Bl = !1
  if (G)
    try {
      var Dt = {}
      Object.defineProperty(Dt, 'passive', {
        get: function () {
          Bl = !0
        },
      }),
        window.addEventListener('test', Dt, Dt),
        window.removeEventListener('test', Dt, Dt)
    } catch {
      Bl = !1
    }
  function Fa(e, n, t, r, l, u, i, o, s) {
    var m = Array.prototype.slice.call(arguments, 3)
    try {
      n.apply(t, m)
    } catch (g) {
      this.onError(g)
    }
  }
  var Ut = !1,
    xr = null,
    Er = !1,
    Wl = null,
    Da = {
      onError: function (e) {
        ;(Ut = !0), (xr = e)
      },
    }
  function Ua(e, n, t, r, l, u, i, o, s) {
    ;(Ut = !1), (xr = null), Fa.apply(Da, arguments)
  }
  function Va(e, n, t, r, l, u, i, o, s) {
    if ((Ua.apply(this, arguments), Ut)) {
      if (Ut) {
        var m = xr
        ;(Ut = !1), (xr = null)
      } else throw Error(h(198))
      Er || ((Er = !0), (Wl = m))
    }
  }
  function Gn(e) {
    var n = e,
      t = e
    if (e.alternate) for (; n.return; ) n = n.return
    else {
      e = n
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return)
      while (e)
    }
    return n.tag === 3 ? t : null
  }
  function Ki(e) {
    if (e.tag === 13) {
      var n = e.memoizedState
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated
    }
    return null
  }
  function Yi(e) {
    if (Gn(e) !== e) throw Error(h(188))
  }
  function Aa(e) {
    var n = e.alternate
    if (!n) {
      if (((n = Gn(e)), n === null)) throw Error(h(188))
      return n !== e ? null : e
    }
    for (var t = e, r = n; ; ) {
      var l = t.return
      if (l === null) break
      var u = l.alternate
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r
          continue
        }
        break
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Yi(l), e
          if (u === r) return Yi(l), n
          u = u.sibling
        }
        throw Error(h(188))
      }
      if (t.return !== r.return) (t = l), (r = u)
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            ;(i = !0), (t = l), (r = u)
            break
          }
          if (o === r) {
            ;(i = !0), (r = l), (t = u)
            break
          }
          o = o.sibling
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              ;(i = !0), (t = u), (r = l)
              break
            }
            if (o === r) {
              ;(i = !0), (r = u), (t = l)
              break
            }
            o = o.sibling
          }
          if (!i) throw Error(h(189))
        }
      }
      if (t.alternate !== r) throw Error(h(190))
    }
    if (t.tag !== 3) throw Error(h(188))
    return t.stateNode.current === t ? e : n
  }
  function Xi(e) {
    return (e = Aa(e)), e !== null ? Gi(e) : null
  }
  function Gi(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var n = Gi(e)
      if (n !== null) return n
      e = e.sibling
    }
    return null
  }
  var Zi = M.unstable_scheduleCallback,
    Ji = M.unstable_cancelCallback,
    Ba = M.unstable_shouldYield,
    Wa = M.unstable_requestPaint,
    pe = M.unstable_now,
    Ha = M.unstable_getCurrentPriorityLevel,
    Hl = M.unstable_ImmediatePriority,
    qi = M.unstable_UserBlockingPriority,
    Nr = M.unstable_NormalPriority,
    $a = M.unstable_LowPriority,
    bi = M.unstable_IdlePriority,
    Cr = null,
    hn = null
  function Qa(e) {
    if (hn && typeof hn.onCommitFiberRoot == 'function')
      try {
        hn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var un = Math.clz32 ? Math.clz32 : Xa,
    Ka = Math.log,
    Ya = Math.LN2
  function Xa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ka(e) / Ya) | 0)) | 0
  }
  var _r = 64,
    jr = 4194304
  function Vt(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
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
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Pr(e, n) {
    var t = e.pendingLanes
    if (t === 0) return 0
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455
    if (i !== 0) {
      var o = i & ~l
      o !== 0 ? (r = Vt(o)) : ((u &= i), u !== 0 && (r = Vt(u)))
    } else (i = t & ~l), i !== 0 ? (r = Vt(i)) : u !== 0 && (r = Vt(u))
    if (r === 0) return 0
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - un(n)), (l = 1 << t), (r |= e[t]), (n &= ~l)
    return r
  }
  function Ga(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250
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
        return n + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Za(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - un(u),
        o = 1 << i,
        s = l[i]
      s === -1
        ? (!(o & t) || o & r) && (l[i] = Ga(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o)
    }
  }
  function $l(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function eo() {
    var e = _r
    return (_r <<= 1), !(_r & 4194240) && (_r = 64), e
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e)
    return n
  }
  function At(e, n, t) {
    ;(e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - un(n)),
      (e[n] = t)
  }
  function Ja(e, n) {
    var t = e.pendingLanes & ~n
    ;(e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - un(t),
        u = 1 << l
      ;(n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u)
    }
  }
  function Kl(e, n) {
    var t = (e.entangledLanes |= n)
    for (e = e.entanglements; t; ) {
      var r = 31 - un(t),
        l = 1 << r
      ;(l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l)
    }
  }
  var Y = 0
  function no(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var to,
    Yl,
    ro,
    lo,
    uo,
    Xl = !1,
    zr = [],
    zn = null,
    Ln = null,
    Tn = null,
    Bt = new Map(),
    Wt = new Map(),
    Rn = [],
    qa =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function io(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        zn = null
        break
      case 'dragenter':
      case 'dragleave':
        Ln = null
        break
      case 'mouseover':
      case 'mouseout':
        Tn = null
        break
      case 'pointerover':
      case 'pointerout':
        Bt.delete(n.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Wt.delete(n.pointerId)
    }
  }
  function Ht(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = rr(n)), n !== null && Yl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e)
  }
  function ba(e, n, t, r, l) {
    switch (n) {
      case 'focusin':
        return (zn = Ht(zn, e, n, t, r, l)), !0
      case 'dragenter':
        return (Ln = Ht(Ln, e, n, t, r, l)), !0
      case 'mouseover':
        return (Tn = Ht(Tn, e, n, t, r, l)), !0
      case 'pointerover':
        var u = l.pointerId
        return Bt.set(u, Ht(Bt.get(u) || null, e, n, t, r, l)), !0
      case 'gotpointercapture':
        return (
          (u = l.pointerId), Wt.set(u, Ht(Wt.get(u) || null, e, n, t, r, l)), !0
        )
    }
    return !1
  }
  function oo(e) {
    var n = Zn(e.target)
    if (n !== null) {
      var t = Gn(n)
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Ki(t)), n !== null)) {
            ;(e.blockedOn = n),
              uo(e.priority, function () {
                ro(t)
              })
            return
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent)
      if (t === null) {
        t = e.nativeEvent
        var r = new t.constructor(t.type, t)
        ;(Dl = r), t.target.dispatchEvent(r), (Dl = null)
      } else return (n = rr(t)), n !== null && Yl(n), (e.blockedOn = t), !1
      n.shift()
    }
    return !0
  }
  function so(e, n, t) {
    Lr(e) && t.delete(n)
  }
  function ec() {
    ;(Xl = !1),
      zn !== null && Lr(zn) && (zn = null),
      Ln !== null && Lr(Ln) && (Ln = null),
      Tn !== null && Lr(Tn) && (Tn = null),
      Bt.forEach(so),
      Wt.forEach(so)
  }
  function $t(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0), M.unstable_scheduleCallback(M.unstable_NormalPriority, ec)))
  }
  function Qt(e) {
    function n(l) {
      return $t(l, e)
    }
    if (0 < zr.length) {
      $t(zr[0], e)
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      zn !== null && $t(zn, e),
        Ln !== null && $t(Ln, e),
        Tn !== null && $t(Tn, e),
        Bt.forEach(n),
        Wt.forEach(n),
        t = 0;
      t < Rn.length;
      t++
    )
      (r = Rn[t]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
      oo(t), t.blockedOn === null && Rn.shift()
  }
  var ft = ge.ReactCurrentBatchConfig,
    Tr = !0
  function nc(e, n, t, r) {
    var l = Y,
      u = ft.transition
    ft.transition = null
    try {
      ;(Y = 1), Gl(e, n, t, r)
    } finally {
      ;(Y = l), (ft.transition = u)
    }
  }
  function tc(e, n, t, r) {
    var l = Y,
      u = ft.transition
    ft.transition = null
    try {
      ;(Y = 4), Gl(e, n, t, r)
    } finally {
      ;(Y = l), (ft.transition = u)
    }
  }
  function Gl(e, n, t, r) {
    if (Tr) {
      var l = Zl(e, n, t, r)
      if (l === null) pu(e, n, r, Rr, t), io(e, r)
      else if (ba(l, e, n, t, r)) r.stopPropagation()
      else if ((io(e, r), n & 4 && -1 < qa.indexOf(e))) {
        for (; l !== null; ) {
          var u = rr(l)
          if (
            (u !== null && to(u),
            (u = Zl(e, n, t, r)),
            u === null && pu(e, n, r, Rr, t),
            u === l)
          )
            break
          l = u
        }
        l !== null && r.stopPropagation()
      } else pu(e, n, r, null, t)
    }
  }
  var Rr = null
  function Zl(e, n, t, r) {
    if (((Rr = null), (e = Ul(r)), (e = Zn(e)), e !== null))
      if (((n = Gn(e)), n === null)) e = null
      else if (((t = n.tag), t === 13)) {
        if (((e = Ki(n)), e !== null)) return e
        e = null
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null
        e = null
      } else n !== e && (e = null)
    return (Rr = e), null
  }
  function ao(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (Ha()) {
          case Hl:
            return 1
          case qi:
            return 4
          case Nr:
          case $a:
            return 16
          case bi:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var Mn = null,
    Jl = null,
    Mr = null
  function co() {
    if (Mr) return Mr
    var e,
      n = Jl,
      t = n.length,
      r,
      l = 'value' in Mn ? Mn.value : Mn.textContent,
      u = l.length
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Or(e) {
    var n = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Ir() {
    return !0
  }
  function fo() {
    return !1
  }
  function Ke(e) {
    function n(t, r, l, u, i) {
      ;(this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null)
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ir
          : fo),
        (this.isPropagationStopped = fo),
        this
      )
    }
    return (
      N(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var t = this.nativeEvent
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
            (this.isDefaultPrevented = Ir))
        },
        stopPropagation: function () {
          var t = this.nativeEvent
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
            (this.isPropagationStopped = Ir))
        },
        persist: function () {},
        isPersistent: Ir,
      }),
      n
    )
  }
  var dt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ke(dt),
    Kt = N({}, dt, { view: 0, detail: 0 }),
    rc = Ke(Kt),
    bl,
    eu,
    Yt,
    Fr = N({}, Kt, {
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
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Yt &&
              (Yt && e.type === 'mousemove'
                ? ((bl = e.screenX - Yt.screenX), (eu = e.screenY - Yt.screenY))
                : (eu = bl = 0),
              (Yt = e)),
            bl)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : eu
      },
    }),
    po = Ke(Fr),
    lc = N({}, Fr, { dataTransfer: 0 }),
    uc = Ke(lc),
    ic = N({}, Kt, { relatedTarget: 0 }),
    nu = Ke(ic),
    oc = N({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sc = Ke(oc),
    ac = N({}, dt, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    cc = Ke(ac),
    fc = N({}, dt, { data: 0 }),
    mo = Ke(fc),
    dc = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    pc = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    mc = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function hc(e) {
    var n = this.nativeEvent
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = mc[e])
      ? !!n[e]
      : !1
  }
  function tu() {
    return hc
  }
  var vc = N({}, Kt, {
      key: function (e) {
        if (e.key) {
          var n = dc[e.key] || e.key
          if (n !== 'Unidentified') return n
        }
        return e.type === 'keypress'
          ? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? pc[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (e) {
        return e.type === 'keypress' ? Or(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Or(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    yc = Ke(vc),
    gc = N({}, Fr, {
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
    ho = Ke(gc),
    wc = N({}, Kt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    Sc = Ke(wc),
    kc = N({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xc = Ke(kc),
    Ec = N({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nc = Ke(Ec),
    Cc = [9, 13, 27, 32],
    ru = G && 'CompositionEvent' in window,
    Xt = null
  G && 'documentMode' in document && (Xt = document.documentMode)
  var _c = G && 'TextEvent' in window && !Xt,
    vo = G && (!ru || (Xt && 8 < Xt && 11 >= Xt)),
    yo = ' ',
    go = !1
  function wo(e, n) {
    switch (e) {
      case 'keyup':
        return Cc.indexOf(n.keyCode) !== -1
      case 'keydown':
        return n.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function So(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var pt = !1
  function jc(e, n) {
    switch (e) {
      case 'compositionend':
        return So(n)
      case 'keypress':
        return n.which !== 32 ? null : ((go = !0), yo)
      case 'textInput':
        return (e = n.data), e === yo && go ? null : e
      default:
        return null
    }
  }
  function Pc(e, n) {
    if (pt)
      return e === 'compositionend' || (!ru && wo(e, n))
        ? ((e = co()), (Mr = Jl = Mn = null), (pt = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char
          if (n.which) return String.fromCharCode(n.which)
        }
        return null
      case 'compositionend':
        return vo && n.locale !== 'ko' ? null : n.data
      default:
        return null
    }
  }
  var zc = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  }
  function ko(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase()
    return n === 'input' ? !!zc[e.type] : n === 'textarea'
  }
  function xo(e, n, t, r) {
    Bi(r),
      (n = Br(n, 'onChange')),
      0 < n.length &&
        ((t = new ql('onChange', 'change', null, t, r)),
        e.push({ event: t, listeners: n }))
  }
  var Gt = null,
    Zt = null
  function Lc(e) {
    Ao(e, 0)
  }
  function Dr(e) {
    var n = gt(e)
    if (zi(n)) return e
  }
  function Tc(e, n) {
    if (e === 'change') return n
  }
  var Eo = !1
  if (G) {
    var lu
    if (G) {
      var uu = 'oninput' in document
      if (!uu) {
        var No = document.createElement('div')
        No.setAttribute('oninput', 'return;'),
          (uu = typeof No.oninput == 'function')
      }
      lu = uu
    } else lu = !1
    Eo = lu && (!document.documentMode || 9 < document.documentMode)
  }
  function Co() {
    Gt && (Gt.detachEvent('onpropertychange', _o), (Zt = Gt = null))
  }
  function _o(e) {
    if (e.propertyName === 'value' && Dr(Zt)) {
      var n = []
      xo(n, Zt, e, Ul(e)), Qi(Lc, n)
    }
  }
  function Rc(e, n, t) {
    e === 'focusin'
      ? (Co(), (Gt = n), (Zt = t), Gt.attachEvent('onpropertychange', _o))
      : e === 'focusout' && Co()
  }
  function Mc(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Dr(Zt)
  }
  function Oc(e, n) {
    if (e === 'click') return Dr(n)
  }
  function Ic(e, n) {
    if (e === 'input' || e === 'change') return Dr(n)
  }
  function Fc(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n)
  }
  var on = typeof Object.is == 'function' ? Object.is : Fc
  function Jt(e, n) {
    if (on(e, n)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1
    var t = Object.keys(e),
      r = Object.keys(n)
    if (t.length !== r.length) return !1
    for (r = 0; r < t.length; r++) {
      var l = t[r]
      if (!$.call(n, l) || !on(e[l], n[l])) return !1
    }
    return !0
  }
  function jo(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Po(e, n) {
    var t = jo(e)
    e = 0
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e }
        e = r
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling
            break e
          }
          t = t.parentNode
        }
        t = void 0
      }
      t = jo(t)
    }
  }
  function zo(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? zo(e, n.parentNode)
        : 'contains' in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1
  }
  function Lo() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == 'string'
      } catch {
        t = !1
      }
      if (t) e = n.contentWindow
      else break
      n = Sr(e.document)
    }
    return n
  }
  function iu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function Dc(e) {
    var n = Lo(),
      t = e.focusedElem,
      r = e.selectionRange
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      zo(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && iu(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          'selectionStart' in t)
        )
          (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length))
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var l = t.textContent.length,
            u = Math.min(r.start, l)
          ;(r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Po(t, u))
          var i = Po(t, r)
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)))
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top)
    }
  }
  var Uc = G && 'documentMode' in document && 11 >= document.documentMode,
    mt = null,
    ou = null,
    qt = null,
    su = !1
  function To(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument
    su ||
      mt == null ||
      mt !== Sr(r) ||
      ((r = mt),
      'selectionStart' in r && iu(r)
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
      (qt && Jt(qt, r)) ||
        ((qt = r),
        (r = Br(ou, 'onSelect')),
        0 < r.length &&
          ((n = new ql('onSelect', 'select', null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = mt))))
  }
  function Ur(e, n) {
    var t = {}
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t['Webkit' + e] = 'webkit' + n),
      (t['Moz' + e] = 'moz' + n),
      t
    )
  }
  var ht = {
      animationend: Ur('Animation', 'AnimationEnd'),
      animationiteration: Ur('Animation', 'AnimationIteration'),
      animationstart: Ur('Animation', 'AnimationStart'),
      transitionend: Ur('Transition', 'TransitionEnd'),
    },
    au = {},
    Ro = {}
  G &&
    ((Ro = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ht.animationend.animation,
      delete ht.animationiteration.animation,
      delete ht.animationstart.animation),
    'TransitionEvent' in window || delete ht.transitionend.transition)
  function Vr(e) {
    if (au[e]) return au[e]
    if (!ht[e]) return e
    var n = ht[e],
      t
    for (t in n) if (n.hasOwnProperty(t) && t in Ro) return (au[e] = n[t])
    return e
  }
  var Mo = Vr('animationend'),
    Oo = Vr('animationiteration'),
    Io = Vr('animationstart'),
    Fo = Vr('transitionend'),
    Do = new Map(),
    Uo =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function On(e, n) {
    Do.set(e, n), U(n, [e])
  }
  for (var cu = 0; cu < Uo.length; cu++) {
    var fu = Uo[cu],
      Vc = fu.toLowerCase(),
      Ac = fu[0].toUpperCase() + fu.slice(1)
    On(Vc, 'on' + Ac)
  }
  On(Mo, 'onAnimationEnd'),
    On(Oo, 'onAnimationIteration'),
    On(Io, 'onAnimationStart'),
    On('dblclick', 'onDoubleClick'),
    On('focusin', 'onFocus'),
    On('focusout', 'onBlur'),
    On(Fo, 'onTransitionEnd'),
    ee('onMouseEnter', ['mouseout', 'mouseover']),
    ee('onMouseLeave', ['mouseout', 'mouseover']),
    ee('onPointerEnter', ['pointerout', 'pointerover']),
    ee('onPointerLeave', ['pointerout', 'pointerover']),
    U(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    U(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    U('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    U(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    U(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    U(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var bt =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Bc = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(bt)
    )
  function Vo(e, n, t) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = t), Va(r, n, void 0, e), (e.currentTarget = null)
  }
  function Ao(e, n) {
    n = (n & 4) !== 0
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event
      r = r.listeners
      e: {
        var u = void 0
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              m = o.currentTarget
            if (((o = o.listener), s !== u && l.isPropagationStopped())) break e
            Vo(l, o, m), (u = s)
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (m = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e
            Vo(l, o, m), (u = s)
          }
      }
    }
    if (Er) throw ((e = Wl), (Er = !1), (Wl = null), e)
  }
  function te(e, n) {
    var t = n[wu]
    t === void 0 && (t = n[wu] = new Set())
    var r = e + '__bubble'
    t.has(r) || (Bo(n, e, 2, !1), t.add(r))
  }
  function du(e, n, t) {
    var r = 0
    n && (r |= 4), Bo(t, e, r, n)
  }
  var Ar = '_reactListening' + Math.random().toString(36).slice(2)
  function er(e) {
    if (!e[Ar]) {
      ;(e[Ar] = !0),
        le.forEach(function (t) {
          t !== 'selectionchange' && (Bc.has(t) || du(t, !1, e), du(t, !0, e))
        })
      var n = e.nodeType === 9 ? e : e.ownerDocument
      n === null || n[Ar] || ((n[Ar] = !0), du('selectionchange', !1, n))
    }
  }
  function Bo(e, n, t, r) {
    switch (ao(n)) {
      case 1:
        var l = nc
        break
      case 4:
        l = tc
        break
      default:
        l = Gl
    }
    ;(t = l.bind(null, n, t, e)),
      (l = void 0),
      !Bl ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1)
  }
  function pu(e, n, t, r, l) {
    var u = r
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return
        var i = r.tag
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return
              i = i.return
            }
          for (; o !== null; ) {
            if (((i = Zn(o)), i === null)) return
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i
              continue e
            }
            o = o.parentNode
          }
        }
        r = r.return
      }
    Qi(function () {
      var m = u,
        g = Ul(t),
        w = []
      e: {
        var v = Do.get(e)
        if (v !== void 0) {
          var x = ql,
            C = e
          switch (e) {
            case 'keypress':
              if (Or(t) === 0) break e
            case 'keydown':
            case 'keyup':
              x = yc
              break
            case 'focusin':
              ;(C = 'focus'), (x = nu)
              break
            case 'focusout':
              ;(C = 'blur'), (x = nu)
              break
            case 'beforeblur':
            case 'afterblur':
              x = nu
              break
            case 'click':
              if (t.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              x = po
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              x = uc
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              x = Sc
              break
            case Mo:
            case Oo:
            case Io:
              x = sc
              break
            case Fo:
              x = xc
              break
            case 'scroll':
              x = rc
              break
            case 'wheel':
              x = Nc
              break
            case 'copy':
            case 'cut':
            case 'paste':
              x = cc
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              x = ho
          }
          var j = (n & 4) !== 0,
            me = !j && e === 'scroll',
            d = j ? (v !== null ? v + 'Capture' : null) : v
          j = []
          for (var a = m, p; a !== null; ) {
            p = a
            var S = p.stateNode
            if (
              (p.tag === 5 &&
                S !== null &&
                ((p = S),
                d !== null &&
                  ((S = Ft(a, d)), S != null && j.push(nr(a, S, p)))),
              me)
            )
              break
            a = a.return
          }
          0 < j.length &&
            ((v = new x(v, C, null, t, g)), w.push({ event: v, listeners: j }))
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((v = e === 'mouseover' || e === 'pointerover'),
            (x = e === 'mouseout' || e === 'pointerout'),
            v &&
              t !== Dl &&
              (C = t.relatedTarget || t.fromElement) &&
              (Zn(C) || C[kn]))
          )
            break e
          if (
            (x || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            x
              ? ((C = t.relatedTarget || t.toElement),
                (x = m),
                (C = C ? Zn(C) : null),
                C !== null &&
                  ((me = Gn(C)), C !== me || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((x = null), (C = m)),
            x !== C)
          ) {
            if (
              ((j = po),
              (S = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((j = ho),
                (S = 'onPointerLeave'),
                (d = 'onPointerEnter'),
                (a = 'pointer')),
              (me = x == null ? v : gt(x)),
              (p = C == null ? v : gt(C)),
              (v = new j(S, a + 'leave', x, t, g)),
              (v.target = me),
              (v.relatedTarget = p),
              (S = null),
              Zn(g) === m &&
                ((j = new j(d, a + 'enter', C, t, g)),
                (j.target = p),
                (j.relatedTarget = me),
                (S = j)),
              (me = S),
              x && C)
            )
              n: {
                for (j = x, d = C, a = 0, p = j; p; p = vt(p)) a++
                for (p = 0, S = d; S; S = vt(S)) p++
                for (; 0 < a - p; ) (j = vt(j)), a--
                for (; 0 < p - a; ) (d = vt(d)), p--
                for (; a--; ) {
                  if (j === d || (d !== null && j === d.alternate)) break n
                  ;(j = vt(j)), (d = vt(d))
                }
                j = null
              }
            else j = null
            x !== null && Wo(w, v, x, j, !1),
              C !== null && me !== null && Wo(w, me, C, j, !0)
          }
        }
        e: {
          if (
            ((v = m ? gt(m) : window),
            (x = v.nodeName && v.nodeName.toLowerCase()),
            x === 'select' || (x === 'input' && v.type === 'file'))
          )
            var P = Tc
          else if (ko(v))
            if (Eo) P = Ic
            else {
              P = Mc
              var z = Rc
            }
          else
            (x = v.nodeName) &&
              x.toLowerCase() === 'input' &&
              (v.type === 'checkbox' || v.type === 'radio') &&
              (P = Oc)
          if (P && (P = P(e, m))) {
            xo(w, P, t, g)
            break e
          }
          z && z(e, v, m),
            e === 'focusout' &&
              (z = v._wrapperState) &&
              z.controlled &&
              v.type === 'number' &&
              Rl(v, 'number', v.value)
        }
        switch (((z = m ? gt(m) : window), e)) {
          case 'focusin':
            ;(ko(z) || z.contentEditable === 'true') &&
              ((mt = z), (ou = m), (qt = null))
            break
          case 'focusout':
            qt = ou = mt = null
            break
          case 'mousedown':
            su = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(su = !1), To(w, t, g)
            break
          case 'selectionchange':
            if (Uc) break
          case 'keydown':
          case 'keyup':
            To(w, t, g)
        }
        var L
        if (ru)
          e: {
            switch (e) {
              case 'compositionstart':
                var R = 'onCompositionStart'
                break e
              case 'compositionend':
                R = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                R = 'onCompositionUpdate'
                break e
            }
            R = void 0
          }
        else
          pt
            ? wo(e, t) && (R = 'onCompositionEnd')
            : e === 'keydown' && t.keyCode === 229 && (R = 'onCompositionStart')
        R &&
          (vo &&
            t.locale !== 'ko' &&
            (pt || R !== 'onCompositionStart'
              ? R === 'onCompositionEnd' && pt && (L = co())
              : ((Mn = g),
                (Jl = 'value' in Mn ? Mn.value : Mn.textContent),
                (pt = !0))),
          (z = Br(m, R)),
          0 < z.length &&
            ((R = new mo(R, e, null, t, g)),
            w.push({ event: R, listeners: z }),
            L ? (R.data = L) : ((L = So(t)), L !== null && (R.data = L)))),
          (L = _c ? jc(e, t) : Pc(e, t)) &&
            ((m = Br(m, 'onBeforeInput')),
            0 < m.length &&
              ((g = new mo('onBeforeInput', 'beforeinput', null, t, g)),
              w.push({ event: g, listeners: m }),
              (g.data = L)))
      }
      Ao(w, n)
    })
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t }
  }
  function Br(e, n) {
    for (var t = n + 'Capture', r = []; e !== null; ) {
      var l = e,
        u = l.stateNode
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Ft(e, t)),
        u != null && r.unshift(nr(e, u, l)),
        (u = Ft(e, n)),
        u != null && r.push(nr(e, u, l))),
        (e = e.return)
    }
    return r
  }
  function vt(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Wo(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        m = o.stateNode
      if (s !== null && s === r) break
      o.tag === 5 &&
        m !== null &&
        ((o = m),
        l
          ? ((s = Ft(t, u)), s != null && i.unshift(nr(t, s, o)))
          : l || ((s = Ft(t, u)), s != null && i.push(nr(t, s, o)))),
        (t = t.return)
    }
    i.length !== 0 && e.push({ event: n, listeners: i })
  }
  var Wc = /\r\n?/g,
    Hc = /\u0000|\uFFFD/g
  function Ho(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Wc,
        `
`
      )
      .replace(Hc, '')
  }
  function Wr(e, n, t) {
    if (((n = Ho(n)), Ho(e) !== n && t)) throw Error(h(425))
  }
  function Hr() {}
  var mu = null,
    hu = null
  function vu(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    )
  }
  var yu = typeof setTimeout == 'function' ? setTimeout : void 0,
    $c = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $o = typeof Promise == 'function' ? Promise : void 0,
    Qc =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $o < 'u'
        ? function (e) {
            return $o.resolve(null).then(e).catch(Kc)
          }
        : yu
  function Kc(e) {
    setTimeout(function () {
      throw e
    })
  }
  function gu(e, n) {
    var t = n,
      r = 0
    do {
      var l = t.nextSibling
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === '/$')) {
          if (r === 0) {
            e.removeChild(l), Qt(n)
            return
          }
          r--
        } else (t !== '$' && t !== '$?' && t !== '$!') || r++
      t = l
    } while (t)
    Qt(n)
  }
  function In(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType
      if (n === 1 || n === 3) break
      if (n === 8) {
        if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break
        if (n === '/$') return null
      }
    }
    return e
  }
  function Qo(e) {
    e = e.previousSibling
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data
        if (t === '$' || t === '$!' || t === '$?') {
          if (n === 0) return e
          n--
        } else t === '/$' && n++
      }
      e = e.previousSibling
    }
    return null
  }
  var yt = Math.random().toString(36).slice(2),
    vn = '__reactFiber$' + yt,
    tr = '__reactProps$' + yt,
    kn = '__reactContainer$' + yt,
    wu = '__reactEvents$' + yt,
    Yc = '__reactListeners$' + yt,
    Xc = '__reactHandles$' + yt
  function Zn(e) {
    var n = e[vn]
    if (n) return n
    for (var t = e.parentNode; t; ) {
      if ((n = t[kn] || t[vn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Qo(e); e !== null; ) {
            if ((t = e[vn])) return t
            e = Qo(e)
          }
        return n
      }
      ;(e = t), (t = e.parentNode)
    }
    return null
  }
  function rr(e) {
    return (
      (e = e[vn] || e[kn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(h(33))
  }
  function $r(e) {
    return e[tr] || null
  }
  var Su = [],
    wt = -1
  function Fn(e) {
    return { current: e }
  }
  function re(e) {
    0 > wt || ((e.current = Su[wt]), (Su[wt] = null), wt--)
  }
  function b(e, n) {
    wt++, (Su[wt] = e.current), (e.current = n)
  }
  var Dn = {},
    _e = Fn(Dn),
    Ie = Fn(!1),
    Jn = Dn
  function St(e, n) {
    var t = e.type.contextTypes
    if (!t) return Dn
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext
    var l = {},
      u
    for (u in t) l[u] = n[u]
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    )
  }
  function Fe(e) {
    return (e = e.childContextTypes), e != null
  }
  function Qr() {
    re(Ie), re(_e)
  }
  function Ko(e, n, t) {
    if (_e.current !== Dn) throw Error(h(168))
    b(_e, n), b(Ie, t)
  }
  function Yo(e, n, t) {
    var r = e.stateNode
    if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
      return t
    r = r.getChildContext()
    for (var l in r) if (!(l in n)) throw Error(h(108, q(e) || 'Unknown', l))
    return N({}, t, r)
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dn),
      (Jn = _e.current),
      b(_e, e),
      b(Ie, Ie.current),
      !0
    )
  }
  function Xo(e, n, t) {
    var r = e.stateNode
    if (!r) throw Error(h(169))
    t
      ? ((e = Yo(e, n, Jn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        re(Ie),
        re(_e),
        b(_e, e))
      : re(Ie),
      b(Ie, t)
  }
  var xn = null,
    Yr = !1,
    ku = !1
  function Go(e) {
    xn === null ? (xn = [e]) : xn.push(e)
  }
  function Gc(e) {
    ;(Yr = !0), Go(e)
  }
  function Un() {
    if (!ku && xn !== null) {
      ku = !0
      var e = 0,
        n = Y
      try {
        var t = xn
        for (Y = 1; e < t.length; e++) {
          var r = t[e]
          do r = r(!0)
          while (r !== null)
        }
        ;(xn = null), (Yr = !1)
      } catch (l) {
        throw (xn !== null && (xn = xn.slice(e + 1)), Zi(Hl, Un), l)
      } finally {
        ;(Y = n), (ku = !1)
      }
    }
    return null
  }
  var kt = [],
    xt = 0,
    Xr = null,
    Gr = 0,
    Je = [],
    qe = 0,
    qn = null,
    En = 1,
    Nn = ''
  function bn(e, n) {
    ;(kt[xt++] = Gr), (kt[xt++] = Xr), (Xr = e), (Gr = n)
  }
  function Zo(e, n, t) {
    ;(Je[qe++] = En), (Je[qe++] = Nn), (Je[qe++] = qn), (qn = e)
    var r = En
    e = Nn
    var l = 32 - un(r) - 1
    ;(r &= ~(1 << l)), (t += 1)
    var u = 32 - un(n) + l
    if (30 < u) {
      var i = l - (l % 5)
      ;(u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (En = (1 << (32 - un(n) + l)) | (t << l) | r),
        (Nn = u + e)
    } else (En = (1 << u) | (t << l) | r), (Nn = e)
  }
  function xu(e) {
    e.return !== null && (bn(e, 1), Zo(e, 1, 0))
  }
  function Eu(e) {
    for (; e === Xr; )
      (Xr = kt[--xt]), (kt[xt] = null), (Gr = kt[--xt]), (kt[xt] = null)
    for (; e === qn; )
      (qn = Je[--qe]),
        (Je[qe] = null),
        (Nn = Je[--qe]),
        (Je[qe] = null),
        (En = Je[--qe]),
        (Je[qe] = null)
  }
  var Ye = null,
    Xe = null,
    ie = !1,
    sn = null
  function Jo(e, n) {
    var t = tn(5, null, null, 0)
    ;(t.elementType = 'DELETED'),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)
  }
  function qo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ye = e), (Xe = In(n.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ye = e), (Xe = null), !0) : !1
        )
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = qn !== null ? { id: En, overflow: Nn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = tn(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ye = e),
              (Xe = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function Cu(e) {
    if (ie) {
      var n = Xe
      if (n) {
        var t = n
        if (!qo(e, n)) {
          if (Nu(e)) throw Error(h(418))
          n = In(t.nextSibling)
          var r = Ye
          n && qo(e, n)
            ? Jo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e))
        }
      } else {
        if (Nu(e)) throw Error(h(418))
        ;(e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e)
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return
    Ye = e
  }
  function Zr(e) {
    if (e !== Ye) return !1
    if (!ie) return bo(e), (ie = !0), !1
    var n
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== 'head' && n !== 'body' && !vu(e.type, e.memoizedProps))),
      n && (n = Xe))
    ) {
      if (Nu(e)) throw (es(), Error(h(418)))
      for (; n; ) Jo(e, n), (n = In(n.nextSibling))
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317))
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data
            if (t === '/$') {
              if (n === 0) {
                Xe = In(e.nextSibling)
                break e
              }
              n--
            } else (t !== '$' && t !== '$!' && t !== '$?') || n++
          }
          e = e.nextSibling
        }
        Xe = null
      }
    } else Xe = Ye ? In(e.stateNode.nextSibling) : null
    return !0
  }
  function es() {
    for (var e = Xe; e; ) e = In(e.nextSibling)
  }
  function Et() {
    ;(Xe = Ye = null), (ie = !1)
  }
  function _u(e) {
    sn === null ? (sn = [e]) : sn.push(e)
  }
  var Zc = ge.ReactCurrentBatchConfig
  function lr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(h(309))
          var r = t.stateNode
        }
        if (!r) throw Error(h(147, e))
        var l = r,
          u = '' + e
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == 'function' &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs
              i === null ? delete o[u] : (o[u] = i)
            }),
            (n._stringRef = u),
            n)
      }
      if (typeof e != 'string') throw Error(h(284))
      if (!t._owner) throw Error(h(290, e))
    }
    return e
  }
  function Jr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        h(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(n).join(', ') + '}'
            : e
        )
      ))
    )
  }
  function ns(e) {
    var n = e._init
    return n(e._payload)
  }
  function ts(e) {
    function n(d, a) {
      if (e) {
        var p = d.deletions
        p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a)
      }
    }
    function t(d, a) {
      if (!e) return null
      for (; a !== null; ) n(d, a), (a = a.sibling)
      return null
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling)
      return d
    }
    function l(d, a) {
      return (d = Kn(d, a)), (d.index = 0), (d.sibling = null), d
    }
    function u(d, a, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
              : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      )
    }
    function i(d) {
      return e && d.alternate === null && (d.flags |= 2), d
    }
    function o(d, a, p, S) {
      return a === null || a.tag !== 6
        ? ((a = yi(p, d.mode, S)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a)
    }
    function s(d, a, p, S) {
      var P = p.type
      return P === de
        ? g(d, a, p.props.children, S, p.key)
        : a !== null &&
          (a.elementType === P ||
            (typeof P == 'object' &&
              P !== null &&
              P.$$typeof === Oe &&
              ns(P) === a.type))
        ? ((S = l(a, p.props)), (S.ref = lr(d, a, p)), (S.return = d), S)
        : ((S = kl(p.type, p.key, p.props, null, d.mode, S)),
          (S.ref = lr(d, a, p)),
          (S.return = d),
          S)
    }
    function m(d, a, p, S) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = gi(p, d.mode, S)), (a.return = d), a)
        : ((a = l(a, p.children || [])), (a.return = d), a)
    }
    function g(d, a, p, S, P) {
      return a === null || a.tag !== 7
        ? ((a = ot(p, d.mode, S, P)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a)
    }
    function w(d, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = yi('' + a, d.mode, p)), (a.return = d), a
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case He:
            return (
              (p = kl(a.type, a.key, a.props, null, d.mode, p)),
              (p.ref = lr(d, null, a)),
              (p.return = d),
              p
            )
          case A:
            return (a = gi(a, d.mode, p)), (a.return = d), a
          case Oe:
            var S = a._init
            return w(d, S(a._payload), p)
        }
        if (Mt(a) || T(a))
          return (a = ot(a, d.mode, p, null)), (a.return = d), a
        Jr(d, a)
      }
      return null
    }
    function v(d, a, p, S) {
      var P = a !== null ? a.key : null
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return P !== null ? null : o(d, a, '' + p, S)
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case He:
            return p.key === P ? s(d, a, p, S) : null
          case A:
            return p.key === P ? m(d, a, p, S) : null
          case Oe:
            return (P = p._init), v(d, a, P(p._payload), S)
        }
        if (Mt(p) || T(p)) return P !== null ? null : g(d, a, p, S, null)
        Jr(d, p)
      }
      return null
    }
    function x(d, a, p, S, P) {
      if ((typeof S == 'string' && S !== '') || typeof S == 'number')
        return (d = d.get(p) || null), o(a, d, '' + S, P)
      if (typeof S == 'object' && S !== null) {
        switch (S.$$typeof) {
          case He:
            return (
              (d = d.get(S.key === null ? p : S.key) || null), s(a, d, S, P)
            )
          case A:
            return (
              (d = d.get(S.key === null ? p : S.key) || null), m(a, d, S, P)
            )
          case Oe:
            var z = S._init
            return x(d, a, p, z(S._payload), P)
        }
        if (Mt(S) || T(S)) return (d = d.get(p) || null), g(a, d, S, P, null)
        Jr(a, S)
      }
      return null
    }
    function C(d, a, p, S) {
      for (
        var P = null, z = null, L = a, R = (a = 0), ke = null;
        L !== null && R < p.length;
        R++
      ) {
        L.index > R ? ((ke = L), (L = null)) : (ke = L.sibling)
        var H = v(d, L, p[R], S)
        if (H === null) {
          L === null && (L = ke)
          break
        }
        e && L && H.alternate === null && n(d, L),
          (a = u(H, a, R)),
          z === null ? (P = H) : (z.sibling = H),
          (z = H),
          (L = ke)
      }
      if (R === p.length) return t(d, L), ie && bn(d, R), P
      if (L === null) {
        for (; R < p.length; R++)
          (L = w(d, p[R], S)),
            L !== null &&
              ((a = u(L, a, R)),
              z === null ? (P = L) : (z.sibling = L),
              (z = L))
        return ie && bn(d, R), P
      }
      for (L = r(d, L); R < p.length; R++)
        (ke = x(L, d, R, p[R], S)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              L.delete(ke.key === null ? R : ke.key),
            (a = u(ke, a, R)),
            z === null ? (P = ke) : (z.sibling = ke),
            (z = ke))
      return (
        e &&
          L.forEach(function (Yn) {
            return n(d, Yn)
          }),
        ie && bn(d, R),
        P
      )
    }
    function j(d, a, p, S) {
      var P = T(p)
      if (typeof P != 'function') throw Error(h(150))
      if (((p = P.call(p)), p == null)) throw Error(h(151))
      for (
        var z = (P = null), L = a, R = (a = 0), ke = null, H = p.next();
        L !== null && !H.done;
        R++, H = p.next()
      ) {
        L.index > R ? ((ke = L), (L = null)) : (ke = L.sibling)
        var Yn = v(d, L, H.value, S)
        if (Yn === null) {
          L === null && (L = ke)
          break
        }
        e && L && Yn.alternate === null && n(d, L),
          (a = u(Yn, a, R)),
          z === null ? (P = Yn) : (z.sibling = Yn),
          (z = Yn),
          (L = ke)
      }
      if (H.done) return t(d, L), ie && bn(d, R), P
      if (L === null) {
        for (; !H.done; R++, H = p.next())
          (H = w(d, H.value, S)),
            H !== null &&
              ((a = u(H, a, R)),
              z === null ? (P = H) : (z.sibling = H),
              (z = H))
        return ie && bn(d, R), P
      }
      for (L = r(d, L); !H.done; R++, H = p.next())
        (H = x(L, d, R, H.value, S)),
          H !== null &&
            (e && H.alternate !== null && L.delete(H.key === null ? R : H.key),
            (a = u(H, a, R)),
            z === null ? (P = H) : (z.sibling = H),
            (z = H))
      return (
        e &&
          L.forEach(function (Lf) {
            return n(d, Lf)
          }),
        ie && bn(d, R),
        P
      )
    }
    function me(d, a, p, S) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === de &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case He:
            e: {
              for (var P = p.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (((P = p.type), P === de)) {
                    if (z.tag === 7) {
                      t(d, z.sibling),
                        (a = l(z, p.props.children)),
                        (a.return = d),
                        (d = a)
                      break e
                    }
                  } else if (
                    z.elementType === P ||
                    (typeof P == 'object' &&
                      P !== null &&
                      P.$$typeof === Oe &&
                      ns(P) === z.type)
                  ) {
                    t(d, z.sibling),
                      (a = l(z, p.props)),
                      (a.ref = lr(d, z, p)),
                      (a.return = d),
                      (d = a)
                    break e
                  }
                  t(d, z)
                  break
                } else n(d, z)
                z = z.sibling
              }
              p.type === de
                ? ((a = ot(p.props.children, d.mode, S, p.key)),
                  (a.return = d),
                  (d = a))
                : ((S = kl(p.type, p.key, p.props, null, d.mode, S)),
                  (S.ref = lr(d, a, p)),
                  (S.return = d),
                  (d = S))
            }
            return i(d)
          case A:
            e: {
              for (z = p.key; a !== null; ) {
                if (a.key === z)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    t(d, a.sibling),
                      (a = l(a, p.children || [])),
                      (a.return = d),
                      (d = a)
                    break e
                  } else {
                    t(d, a)
                    break
                  }
                else n(d, a)
                a = a.sibling
              }
              ;(a = gi(p, d.mode, S)), (a.return = d), (d = a)
            }
            return i(d)
          case Oe:
            return (z = p._init), me(d, a, z(p._payload), S)
        }
        if (Mt(p)) return C(d, a, p, S)
        if (T(p)) return j(d, a, p, S)
        Jr(d, p)
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (t(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
            : (t(d, a), (a = yi(p, d.mode, S)), (a.return = d), (d = a)),
          i(d))
        : t(d, a)
    }
    return me
  }
  var Nt = ts(!0),
    rs = ts(!1),
    qr = Fn(null),
    br = null,
    Ct = null,
    ju = null
  function Pu() {
    ju = Ct = br = null
  }
  function zu(e) {
    var n = qr.current
    re(qr), (e._currentValue = n)
  }
  function Lu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break
      e = e.return
    }
  }
  function _t(e, n) {
    ;(br = e),
      (ju = Ct = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (De = !0), (e.firstContext = null))
  }
  function be(e) {
    var n = e._currentValue
    if (ju !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ct === null)) {
        if (br === null) throw Error(h(308))
        ;(Ct = e), (br.dependencies = { lanes: 0, firstContext: e })
      } else Ct = Ct.next = e
    return n
  }
  var et = null
  function Tu(e) {
    et === null ? (et = [e]) : et.push(e)
  }
  function ls(e, n, t, r) {
    var l = n.interleaved
    return (
      l === null ? ((t.next = t), Tu(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      Cn(e, r)
    )
  }
  function Cn(e, n) {
    e.lanes |= n
    var t = e.alternate
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return)
    return t.tag === 3 ? t.stateNode : null
  }
  var Vn = !1
  function Ru(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function us(e, n) {
    ;(e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function _n(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function An(e, n, t) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), V & 2)) {
      var l = r.pending
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        Cn(e, t)
      )
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Tu(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      Cn(e, t)
    )
  }
  function el(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes
      ;(r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t)
    }
  }
  function is(e, n) {
    var t = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          }
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next)
        } while (t !== null)
        u === null ? (l = u = n) : (u = u.next = n)
      } else l = u = n
      ;(t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t)
      return
    }
    ;(e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n)
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue
    Vn = !1
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending
    if (o !== null) {
      l.shared.pending = null
      var s = o,
        m = s.next
      ;(s.next = null), i === null ? (u = m) : (i.next = m), (i = s)
      var g = e.alternate
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== i &&
          (o === null ? (g.firstBaseUpdate = m) : (o.next = m),
          (g.lastBaseUpdate = s)))
    }
    if (u !== null) {
      var w = l.baseState
      ;(i = 0), (g = m = s = null), (o = u)
      do {
        var v = o.lane,
          x = o.eventTime
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: x,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              })
          e: {
            var C = e,
              j = o
            switch (((v = n), (x = t), j.tag)) {
              case 1:
                if (((C = j.payload), typeof C == 'function')) {
                  w = C.call(x, w, v)
                  break e
                }
                w = C
                break e
              case 3:
                C.flags = (C.flags & -65537) | 128
              case 0:
                if (
                  ((C = j.payload),
                  (v = typeof C == 'function' ? C.call(x, w, v) : C),
                  v == null)
                )
                  break e
                w = N({}, w, v)
                break e
              case 2:
                Vn = !0
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [o]) : v.push(o))
        } else
          (x = {
            eventTime: x,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((m = g = x), (s = w)) : (g = g.next = x),
            (i |= v)
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break
          ;(v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null)
        }
      } while (!0)
      if (
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = g),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n
        do (i |= l.lane), (l = l.next)
        while (l !== n)
      } else u === null && (l.shared.lanes = 0)
      ;(rt |= i), (e.lanes = i), (e.memoizedState = w)
    }
  }
  function os(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != 'function'))
            throw Error(h(191, l))
          l.call(r)
        }
      }
  }
  var ur = {},
    yn = Fn(ur),
    ir = Fn(ur),
    or = Fn(ur)
  function nt(e) {
    if (e === ur) throw Error(h(174))
    return e
  }
  function Mu(e, n) {
    switch ((b(or, n), b(ir, e), b(yn, ur), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ol(null, '')
        break
      default:
        ;(e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ol(n, e))
    }
    re(yn), b(yn, n)
  }
  function jt() {
    re(yn), re(ir), re(or)
  }
  function ss(e) {
    nt(or.current)
    var n = nt(yn.current),
      t = Ol(n, e.type)
    n !== t && (b(ir, e), b(yn, t))
  }
  function Ou(e) {
    ir.current === e && (re(yn), re(ir))
  }
  var oe = Fn(0)
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
        )
          return n
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n
      } else if (n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === e) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
    return null
  }
  var Iu = []
  function Fu() {
    for (var e = 0; e < Iu.length; e++)
      Iu[e]._workInProgressVersionPrimary = null
    Iu.length = 0
  }
  var rl = ge.ReactCurrentDispatcher,
    Du = ge.ReactCurrentBatchConfig,
    tt = 0,
    se = null,
    ve = null,
    we = null,
    ll = !1,
    sr = !1,
    ar = 0,
    Jc = 0
  function je() {
    throw Error(h(321))
  }
  function Uu(e, n) {
    if (n === null) return !1
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!on(e[t], n[t])) return !1
    return !0
  }
  function Vu(e, n, t, r, l, u) {
    if (
      ((tt = u),
      (se = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? nf : tf),
      (e = t(r, l)),
      sr)
    ) {
      u = 0
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(h(301))
        ;(u += 1),
          (we = ve = null),
          (n.updateQueue = null),
          (rl.current = rf),
          (e = t(r, l))
      } while (sr)
    }
    if (
      ((rl.current = ol),
      (n = ve !== null && ve.next !== null),
      (tt = 0),
      (we = ve = se = null),
      (ll = !1),
      n)
    )
      throw Error(h(300))
    return e
  }
  function Au() {
    var e = ar !== 0
    return (ar = 0), e
  }
  function gn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return we === null ? (se.memoizedState = we = e) : (we = we.next = e), we
  }
  function en() {
    if (ve === null) {
      var e = se.alternate
      e = e !== null ? e.memoizedState : null
    } else e = ve.next
    var n = we === null ? se.memoizedState : we.next
    if (n !== null) (we = n), (ve = e)
    else {
      if (e === null) throw Error(h(310))
      ;(ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        we === null ? (se.memoizedState = we = e) : (we = we.next = e)
    }
    return we
  }
  function cr(e, n) {
    return typeof n == 'function' ? n(e) : n
  }
  function Bu(e) {
    var n = en(),
      t = n.queue
    if (t === null) throw Error(h(311))
    t.lastRenderedReducer = e
    var r = ve,
      l = r.baseQueue,
      u = t.pending
    if (u !== null) {
      if (l !== null) {
        var i = l.next
        ;(l.next = u.next), (u.next = i)
      }
      ;(r.baseQueue = l = u), (t.pending = null)
    }
    if (l !== null) {
      ;(u = l.next), (r = r.baseState)
      var o = (i = null),
        s = null,
        m = u
      do {
        var g = m.lane
        if ((tt & g) === g)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action))
        else {
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }
          s === null ? ((o = s = w), (i = r)) : (s = s.next = w),
            (se.lanes |= g),
            (rt |= g)
        }
        m = m.next
      } while (m !== null && m !== u)
      s === null ? (i = r) : (s.next = o),
        on(r, n.memoizedState) || (De = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r)
    }
    if (((e = t.interleaved), e !== null)) {
      l = e
      do (u = l.lane), (se.lanes |= u), (rt |= u), (l = l.next)
      while (l !== e)
    } else l === null && (t.lanes = 0)
    return [n.memoizedState, t.dispatch]
  }
  function Wu(e) {
    var n = en(),
      t = n.queue
    if (t === null) throw Error(h(311))
    t.lastRenderedReducer = e
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState
    if (l !== null) {
      t.pending = null
      var i = (l = l.next)
      do (u = e(u, i.action)), (i = i.next)
      while (i !== l)
      on(u, n.memoizedState) || (De = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u)
    }
    return [u, r]
  }
  function as() {}
  function cs(e, n) {
    var t = se,
      r = en(),
      l = n(),
      u = !on(r.memoizedState, l)
    if (
      (u && ((r.memoizedState = l), (De = !0)),
      (r = r.queue),
      Hu(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (we !== null && we.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        fr(9, ds.bind(null, t, r, l, n), void 0, null),
        Se === null)
      )
        throw Error(h(349))
      tt & 30 || fs(t, n, l)
    }
    return l
  }
  function fs(e, n, t) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = se.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (se.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e))
  }
  function ds(e, n, t, r) {
    ;(n.value = t), (n.getSnapshot = r), ms(n) && hs(e)
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && hs(e)
    })
  }
  function ms(e) {
    var n = e.getSnapshot
    e = e.value
    try {
      var t = n()
      return !on(e, t)
    } catch {
      return !0
    }
  }
  function hs(e) {
    var n = Cn(e, 1)
    n !== null && dn(n, e, 1, -1)
  }
  function vs(e) {
    var n = gn()
    return (
      typeof e == 'function' && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = ef.bind(null, se, e)),
      [n.memoizedState, e]
    )
  }
  function fr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = se.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (se.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    )
  }
  function ys() {
    return en().memoizedState
  }
  function ul(e, n, t, r) {
    var l = gn()
    ;(se.flags |= e),
      (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r))
  }
  function il(e, n, t, r) {
    var l = en()
    r = r === void 0 ? null : r
    var u = void 0
    if (ve !== null) {
      var i = ve.memoizedState
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = fr(n, t, u, r)
        return
      }
    }
    ;(se.flags |= e), (l.memoizedState = fr(1 | n, t, u, r))
  }
  function gs(e, n) {
    return ul(8390656, 8, e, n)
  }
  function Hu(e, n) {
    return il(2048, 8, e, n)
  }
  function ws(e, n) {
    return il(4, 2, e, n)
  }
  function Ss(e, n) {
    return il(4, 4, e, n)
  }
  function ks(e, n) {
    if (typeof n == 'function')
      return (
        (e = e()),
        n(e),
        function () {
          n(null)
        }
      )
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null
        }
      )
  }
  function xs(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), il(4, 4, ks.bind(null, n, e), t)
    )
  }
  function $u() {}
  function Es(e, n) {
    var t = en()
    n = n === void 0 ? null : n
    var r = t.memoizedState
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e)
  }
  function Ns(e, n) {
    var t = en()
    n = n === void 0 ? null : n
    var r = t.memoizedState
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e)
  }
  function Cs(e, n, t) {
    return tt & 21
      ? (on(t, n) ||
          ((t = eo()), (se.lanes |= t), (rt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = t))
  }
  function qc(e, n) {
    var t = Y
    ;(Y = t !== 0 && 4 > t ? t : 4), e(!0)
    var r = Du.transition
    Du.transition = {}
    try {
      e(!1), n()
    } finally {
      ;(Y = t), (Du.transition = r)
    }
  }
  function _s() {
    return en().memoizedState
  }
  function bc(e, n, t) {
    var r = $n(e)
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      js(e))
    )
      Ps(n, t)
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = Me()
      dn(t, e, r, l), zs(t, n, r)
    }
  }
  function ef(e, n, t) {
    var r = $n(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (js(e)) Ps(n, l)
    else {
      var u = e.alternate
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t)
          if (((l.hasEagerState = !0), (l.eagerState = o), on(o, i))) {
            var s = n.interleaved
            s === null
              ? ((l.next = l), Tu(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l)
            return
          }
        } catch {
        } finally {
        }
      ;(t = ls(e, n, l, r)),
        t !== null && ((l = Me()), dn(t, e, r, l), zs(t, n, r))
    }
  }
  function js(e) {
    var n = e.alternate
    return e === se || (n !== null && n === se)
  }
  function Ps(e, n) {
    sr = ll = !0
    var t = e.pending
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n)
  }
  function zs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes
      ;(r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t)
    }
  }
  var ol = {
      readContext: be,
      useCallback: je,
      useContext: je,
      useEffect: je,
      useImperativeHandle: je,
      useInsertionEffect: je,
      useLayoutEffect: je,
      useMemo: je,
      useReducer: je,
      useRef: je,
      useState: je,
      useDebugValue: je,
      useDeferredValue: je,
      useTransition: je,
      useMutableSource: je,
      useSyncExternalStore: je,
      useId: je,
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: be,
      useCallback: function (e, n) {
        return (gn().memoizedState = [e, n === void 0 ? null : n]), e
      },
      useContext: be,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ul(4194308, 4, ks.bind(null, n, e), t)
        )
      },
      useLayoutEffect: function (e, n) {
        return ul(4194308, 4, e, n)
      },
      useInsertionEffect: function (e, n) {
        return ul(4, 2, e, n)
      },
      useMemo: function (e, n) {
        var t = gn()
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        )
      },
      useReducer: function (e, n, t) {
        var r = gn()
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = bc.bind(null, se, e)),
          [r.memoizedState, e]
        )
      },
      useRef: function (e) {
        var n = gn()
        return (e = { current: e }), (n.memoizedState = e)
      },
      useState: vs,
      useDebugValue: $u,
      useDeferredValue: function (e) {
        return (gn().memoizedState = e)
      },
      useTransition: function () {
        var e = vs(!1),
          n = e[0]
        return (e = qc.bind(null, e[1])), (gn().memoizedState = e), [n, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = se,
          l = gn()
        if (ie) {
          if (t === void 0) throw Error(h(407))
          t = t()
        } else {
          if (((t = n()), Se === null)) throw Error(h(349))
          tt & 30 || fs(r, n, t)
        }
        l.memoizedState = t
        var u = { value: t, getSnapshot: n }
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ds.bind(null, r, u, t, n), void 0, null),
          t
        )
      },
      useId: function () {
        var e = gn(),
          n = Se.identifierPrefix
        if (ie) {
          var t = Nn,
            r = En
          ;(t = (r & ~(1 << (32 - un(r) - 1))).toString(32) + t),
            (n = ':' + n + 'R' + t),
            (t = ar++),
            0 < t && (n += 'H' + t.toString(32)),
            (n += ':')
        } else (t = Jc++), (n = ':' + n + 'r' + t.toString(32) + ':')
        return (e.memoizedState = n)
      },
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: be,
      useCallback: Es,
      useContext: be,
      useEffect: Hu,
      useImperativeHandle: xs,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: Ns,
      useReducer: Bu,
      useRef: ys,
      useState: function () {
        return Bu(cr)
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var n = en()
        return Cs(n, ve.memoizedState, e)
      },
      useTransition: function () {
        var e = Bu(cr)[0],
          n = en().memoizedState
        return [e, n]
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: _s,
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: be,
      useCallback: Es,
      useContext: be,
      useEffect: Hu,
      useImperativeHandle: xs,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: Ns,
      useReducer: Wu,
      useRef: ys,
      useState: function () {
        return Wu(cr)
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var n = en()
        return ve === null ? (n.memoizedState = e) : Cs(n, ve.memoizedState, e)
      },
      useTransition: function () {
        var e = Wu(cr)[0],
          n = en().memoizedState
        return [e, n]
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: _s,
      unstable_isNewReconciler: !1,
    }
  function an(e, n) {
    if (e && e.defaultProps) {
      ;(n = N({}, n)), (e = e.defaultProps)
      for (var t in e) n[t] === void 0 && (n[t] = e[t])
      return n
    }
    return n
  }
  function Qu(e, n, t, r) {
    ;(n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : N({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t)
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals
      var r = Me(),
        l = $n(e),
        u = _n(r, l)
      ;(u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (dn(n, e, l, r), el(n, e, l))
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals
      var r = Me(),
        l = $n(e),
        u = _n(r, l)
      ;(u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (dn(n, e, l, r), el(n, e, l))
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals
      var t = Me(),
        r = $n(e),
        l = _n(t, r)
      ;(l.tag = 2),
        n != null && (l.callback = n),
        (n = An(e, l, r)),
        n !== null && (dn(n, e, r, t), el(n, e, r))
    },
  }
  function Ls(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Jt(t, r) || !Jt(l, u)
        : !0
    )
  }
  function Ts(e, n, t) {
    var r = !1,
      l = Dn,
      u = n.contextType
    return (
      typeof u == 'object' && u !== null
        ? (u = be(u))
        : ((l = Fe(n) ? Jn : _e.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? St(e, l) : Dn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    )
  }
  function Rs(e, n, t, r) {
    ;(e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && sl.enqueueReplaceState(n, n.state, null)
  }
  function Ku(e, n, t, r) {
    var l = e.stateNode
    ;(l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ru(e)
    var u = n.contextType
    typeof u == 'object' && u !== null
      ? (l.context = be(u))
      : ((u = Fe(n) ? Jn : _e.current), (l.context = St(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == 'function' && (Qu(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((n = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && sl.enqueueReplaceState(l, l.state, null),
        nl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function Pt(e, n) {
    try {
      var t = '',
        r = n
      do (t += B(r)), (r = r.return)
      while (r)
      var l = t
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
    }
    return { value: e, source: n, stack: l, digest: null }
  }
  function Yu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null }
  }
  function Xu(e, n) {
    try {
      console.error(n.value)
    } catch (t) {
      setTimeout(function () {
        throw t
      })
    }
  }
  var lf = typeof WeakMap == 'function' ? WeakMap : Map
  function Ms(e, n, t) {
    ;(t = _n(-1, t)), (t.tag = 3), (t.payload = { element: null })
    var r = n.value
    return (
      (t.callback = function () {
        hl || ((hl = !0), (ai = r)), Xu(e, n)
      }),
      t
    )
  }
  function Os(e, n, t) {
    ;(t = _n(-1, t)), (t.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
      var l = n.value
      ;(t.payload = function () {
        return r(l)
      }),
        (t.callback = function () {
          Xu(e, n)
        })
    }
    var u = e.stateNode
    return (
      u !== null &&
        typeof u.componentDidCatch == 'function' &&
        (t.callback = function () {
          Xu(e, n),
            typeof r != 'function' &&
              (Wn === null ? (Wn = new Set([this])) : Wn.add(this))
          var i = n.stack
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : '',
          })
        }),
      t
    )
  }
  function Is(e, n, t) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new lf()
      var l = new Set()
      r.set(n, l)
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l))
    l.has(t) || (l.add(t), (e = wf.bind(null, e, n, t)), n.then(e, e))
  }
  function Fs(e) {
    do {
      var n
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Ds(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = _n(-1, 1)), (n.tag = 2), An(t, n, 1))),
            (t.lanes |= 1)),
        e)
  }
  var uf = ge.ReactCurrentOwner,
    De = !1
  function Re(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : Nt(n, e.child, t, r)
  }
  function Us(e, n, t, r, l) {
    t = t.render
    var u = n.ref
    return (
      _t(n, l),
      (r = Vu(e, n, t, r, u, l)),
      (t = Au()),
      e !== null && !De
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          jn(e, n, l))
        : (ie && t && xu(n), (n.flags |= 1), Re(e, n, r, l), n.child)
    )
  }
  function Vs(e, n, t, r, l) {
    if (e === null) {
      var u = t.type
      return typeof u == 'function' &&
        !vi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), As(e, n, u, r, l))
        : ((e = kl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e))
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps
      if (
        ((t = t.compare), (t = t !== null ? t : Jt), t(i, r) && e.ref === n.ref)
      )
        return jn(e, n, l)
    }
    return (
      (n.flags |= 1),
      (e = Kn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    )
  }
  function As(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps
      if (Jt(u, r) && e.ref === n.ref)
        if (((De = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (De = !0)
        else return (n.lanes = e.lanes), jn(e, n, l)
    }
    return Gu(e, n, t, r, l)
  }
  function Bs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          b(Lt, Ge),
          (Ge |= t)
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            b(Lt, Ge),
            (Ge |= e),
            null
          )
        ;(n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          b(Lt, Ge),
          (Ge |= r)
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        b(Lt, Ge),
        (Ge |= r)
    return Re(e, n, l, t), n.child
  }
  function Ws(e, n) {
    var t = n.ref
    ;((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152))
  }
  function Gu(e, n, t, r, l) {
    var u = Fe(t) ? Jn : _e.current
    return (
      (u = St(n, u)),
      _t(n, l),
      (t = Vu(e, n, t, r, u, l)),
      (r = Au()),
      e !== null && !De
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          jn(e, n, l))
        : (ie && r && xu(n), (n.flags |= 1), Re(e, n, t, l), n.child)
    )
  }
  function Hs(e, n, t, r, l) {
    if (Fe(t)) {
      var u = !0
      Kr(n)
    } else u = !1
    if ((_t(n, l), n.stateNode === null))
      cl(e, n), Ts(n, t, r), Ku(n, t, r, l), (r = !0)
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps
      i.props = o
      var s = i.context,
        m = t.contextType
      typeof m == 'object' && m !== null
        ? (m = be(m))
        : ((m = Fe(t) ? Jn : _e.current), (m = St(n, m)))
      var g = t.getDerivedStateFromProps,
        w =
          typeof g == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function'
      w ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== r || s !== m) && Rs(n, i, r, m)),
        (Vn = !1)
      var v = n.memoizedState
      ;(i.state = v),
        nl(n, r, i, l),
        (s = n.memoizedState),
        o !== r || v !== s || Ie.current || Vn
          ? (typeof g == 'function' && (Qu(n, t, g, r), (s = n.memoizedState)),
            (o = Vn || Ls(n, t, o, r, v, s, m))
              ? (w ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = m),
            (r = o))
          : (typeof i.componentDidMount == 'function' && (n.flags |= 4194308),
            (r = !1))
    } else {
      ;(i = n.stateNode),
        us(e, n),
        (o = n.memoizedProps),
        (m = n.type === n.elementType ? o : an(n.type, o)),
        (i.props = m),
        (w = n.pendingProps),
        (v = i.context),
        (s = t.contextType),
        typeof s == 'object' && s !== null
          ? (s = be(s))
          : ((s = Fe(t) ? Jn : _e.current), (s = St(n, s)))
      var x = t.getDerivedStateFromProps
      ;(g =
        typeof x == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== w || v !== s) && Rs(n, i, r, s)),
        (Vn = !1),
        (v = n.memoizedState),
        (i.state = v),
        nl(n, r, i, l)
      var C = n.memoizedState
      o !== w || v !== C || Ie.current || Vn
        ? (typeof x == 'function' && (Qu(n, t, x, r), (C = n.memoizedState)),
          (m = Vn || Ls(n, t, m, r, v, C, s) || !1)
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' &&
                  i.componentWillUpdate(r, C, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, C, s)),
              typeof i.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = C)),
          (i.props = r),
          (i.state = C),
          (i.context = s),
          (r = m))
        : (typeof i.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1))
    }
    return Zu(e, n, t, r, u, l)
  }
  function Zu(e, n, t, r, l, u) {
    Ws(e, n)
    var i = (n.flags & 128) !== 0
    if (!r && !i) return l && Xo(n, t, !1), jn(e, n, u)
    ;(r = n.stateNode), (uf.current = n)
    var o =
      i && typeof t.getDerivedStateFromError != 'function' ? null : r.render()
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = Nt(n, e.child, null, u)), (n.child = Nt(n, null, o, u)))
        : Re(e, n, o, u),
      (n.memoizedState = r.state),
      l && Xo(n, t, !0),
      n.child
    )
  }
  function $s(e) {
    var n = e.stateNode
    n.pendingContext
      ? Ko(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ko(e, n.context, !1),
      Mu(e, n.containerInfo)
  }
  function Qs(e, n, t, r, l) {
    return Et(), _u(l), (n.flags |= 256), Re(e, n, t, r), n.child
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 }
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Ks(e, n, t) {
    var r = n.pendingProps,
      l = oe.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      b(oe, l & 1),
      e === null)
    )
      return (
        Cu(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: 'hidden', children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = xl(i, r, 0, null)),
                (e = ot(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = qu(t)),
                (n.memoizedState = Ju),
                e)
              : bu(n, i))
      )
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return of(e, n, i, r, o, l, t)
    if (u) {
      ;(u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling)
      var s = { mode: 'hidden', children: r.children }
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Kn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Kn(o, u)) : ((u = ot(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? qu(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ju),
        r
      )
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Kn(u, { mode: 'visible', children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    )
  }
  function bu(e, n) {
    return (
      (n = xl({ mode: 'visible', children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    )
  }
  function al(e, n, t, r) {
    return (
      r !== null && _u(r),
      Nt(n, e.child, null, t),
      (e = bu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    )
  }
  function of(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Yu(Error(h(422)))), al(e, n, i, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((u = r.fallback),
          (l = n.mode),
          (r = xl({ mode: 'visible', children: r.children }, l, 0, null)),
          (u = ot(u, l, i, null)),
          (u.flags |= 2),
          (r.return = n),
          (u.return = n),
          (r.sibling = u),
          (n.child = r),
          n.mode & 1 && Nt(n, e.child, null, i),
          (n.child.memoizedState = qu(i)),
          (n.memoizedState = Ju),
          u)
    if (!(n.mode & 1)) return al(e, n, i, null)
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst
      return (
        (r = o), (u = Error(h(419))), (r = Yu(u, r, void 0)), al(e, n, i, r)
      )
    }
    if (((o = (i & e.childLanes) !== 0), De || o)) {
      if (((r = Se), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2
            break
          case 16:
            l = 8
            break
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
            l = 32
            break
          case 536870912:
            l = 268435456
            break
          default:
            l = 0
        }
        ;(l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), Cn(e, l), dn(r, e, l, -1))
      }
      return hi(), (r = Yu(Error(h(421)))), al(e, n, i, r)
    }
    return l.data === '$?'
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = Sf.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Xe = In(l.nextSibling)),
        (Ye = n),
        (ie = !0),
        (sn = null),
        e !== null &&
          ((Je[qe++] = En),
          (Je[qe++] = Nn),
          (Je[qe++] = qn),
          (En = e.id),
          (Nn = e.overflow),
          (qn = n)),
        (n = bu(n, r.children)),
        (n.flags |= 4096),
        n)
  }
  function Ys(e, n, t) {
    e.lanes |= n
    var r = e.alternate
    r !== null && (r.lanes |= n), Lu(e.return, n, t)
  }
  function ei(e, n, t, r, l) {
    var u = e.memoizedState
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l))
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail
    if ((Re(e, n, r.children, t), (r = oe.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, t, n)
          else if (e.tag === 19) Ys(e, t, n)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === n) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      r &= 1
    }
    if ((b(oe, r), !(n.mode & 1))) n.memoizedState = null
    else
      switch (l) {
        case 'forwards':
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && tl(e) === null && (l = t),
              (t = t.sibling)
          ;(t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ei(n, !1, l, t, u)
          break
        case 'backwards':
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              n.child = l
              break
            }
            ;(e = l.sibling), (l.sibling = t), (t = l), (l = e)
          }
          ei(n, !0, t, null, u)
          break
        case 'together':
          ei(n, !1, null, null, void 0)
          break
        default:
          n.memoizedState = null
      }
    return n.child
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2))
  }
  function jn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (rt |= n.lanes),
      !(t & n.childLanes))
    )
      return null
    if (e !== null && n.child !== e.child) throw Error(h(153))
    if (n.child !== null) {
      for (
        e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling), (t = t.sibling = Kn(e, e.pendingProps)), (t.return = n)
      t.sibling = null
    }
    return n.child
  }
  function sf(e, n, t) {
    switch (n.tag) {
      case 3:
        $s(n), Et()
        break
      case 5:
        ss(n)
        break
      case 1:
        Fe(n.type) && Kr(n)
        break
      case 4:
        Mu(n, n.stateNode.containerInfo)
        break
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value
        b(qr, r._currentValue), (r._currentValue = l)
        break
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (b(oe, oe.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Ks(e, n, t)
            : (b(oe, oe.current & 1),
              (e = jn(e, n, t)),
              e !== null ? e.sibling : null)
        b(oe, oe.current & 1)
        break
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, n, t)
          n.flags |= 128
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          b(oe, oe.current),
          r)
        )
          break
        return null
      case 22:
      case 23:
        return (n.lanes = 0), Bs(e, n, t)
    }
    return jn(e, n, t)
  }
  var Gs, ni, Zs, Js
  ;(Gs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode)
      else if (t.tag !== 4 && t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === n) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }),
    (ni = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps
      if (l !== r) {
        ;(e = n.stateNode), nt(yn.current)
        var u = null
        switch (t) {
          case 'input':
            ;(l = Ll(e, l)), (r = Ll(e, r)), (u = [])
            break
          case 'select':
            ;(l = N({}, l, { value: void 0 })),
              (r = N({}, r, { value: void 0 })),
              (u = [])
            break
          case 'textarea':
            ;(l = Ml(e, l)), (r = Ml(e, r)), (u = [])
            break
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = Hr)
        }
        Il(t, r)
        var i
        t = null
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === 'style') {
              var o = l[m]
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ''))
            } else
              m !== 'dangerouslySetInnerHTML' &&
                m !== 'children' &&
                m !== 'suppressContentEditableWarning' &&
                m !== 'suppressHydrationWarning' &&
                m !== 'autoFocus' &&
                (O.hasOwnProperty(m)
                  ? u || (u = [])
                  : (u = u || []).push(m, null))
        for (m in r) {
          var s = r[m]
          if (
            ((o = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== o && (s != null || o != null))
          )
            if (m === 'style')
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ''))
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]))
              } else t || (u || (u = []), u.push(m, t)), (t = s)
            else
              m === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(m, s))
                : m === 'children'
                ? (typeof s != 'string' && typeof s != 'number') ||
                  (u = u || []).push(m, '' + s)
                : m !== 'suppressContentEditableWarning' &&
                  m !== 'suppressHydrationWarning' &&
                  (O.hasOwnProperty(m)
                    ? (s != null && m === 'onScroll' && te('scroll', e),
                      u || o === s || (u = []))
                    : (u = u || []).push(m, s))
        }
        t && (u = u || []).push('style', t)
        var m = u
        ;(n.updateQueue = m) && (n.flags |= 4)
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4)
    })
  function dr(e, n) {
    if (!ie)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling)
          t === null ? (e.tail = null) : (t.sibling = null)
          break
        case 'collapsed':
          t = e.tail
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling)
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function Pe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling)
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = t), n
  }
  function af(e, n, t) {
    var r = n.pendingProps
    switch ((Eu(n), n.tag)) {
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
        return Pe(n), null
      case 1:
        return Fe(n.type) && Qr(), Pe(n), null
      case 3:
        return (
          (r = n.stateNode),
          jt(),
          re(Ie),
          re(_e),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), sn !== null && (di(sn), (sn = null)))),
          ni(e, n),
          Pe(n),
          null
        )
      case 5:
        Ou(n)
        var l = nt(or.current)
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152))
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(h(166))
            return Pe(n), null
          }
          if (((e = nt(yn.current)), Zr(n))) {
            ;(r = n.stateNode), (t = n.type)
            var u = n.memoizedProps
            switch (((r[vn] = n), (r[tr] = u), (e = (n.mode & 1) !== 0), t)) {
              case 'dialog':
                te('cancel', r), te('close', r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                te('load', r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < bt.length; l++) te(bt[l], r)
                break
              case 'source':
                te('error', r)
                break
              case 'img':
              case 'image':
              case 'link':
                te('error', r), te('load', r)
                break
              case 'details':
                te('toggle', r)
                break
              case 'input':
                Li(r, u), te('invalid', r)
                break
              case 'select':
                ;(r._wrapperState = { wasMultiple: !!u.multiple }),
                  te('invalid', r)
                break
              case 'textarea':
                Mi(r, u), te('invalid', r)
            }
            Il(t, u), (l = null)
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i]
                i === 'children'
                  ? typeof o == 'string'
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, o, e),
                      (l = ['children', o]))
                    : typeof o == 'number' &&
                      r.textContent !== '' + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, o, e),
                      (l = ['children', '' + o]))
                  : O.hasOwnProperty(i) &&
                    o != null &&
                    i === 'onScroll' &&
                    te('scroll', r)
              }
            switch (t) {
              case 'input':
                wr(r), Ri(r, u, !0)
                break
              case 'textarea':
                wr(r), Ii(r)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof u.onClick == 'function' && (r.onclick = Hr)
            }
            ;(r = l), (n.updateQueue = r), r !== null && (n.flags |= 4)
          } else {
            ;(i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Fi(t)),
              e === 'http://www.w3.org/1999/xhtml'
                ? t === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[vn] = n),
              (e[tr] = r),
              Gs(e, n, !1, !1),
              (n.stateNode = e)
            e: {
              switch (((i = Fl(t, r)), t)) {
                case 'dialog':
                  te('cancel', e), te('close', e), (l = r)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  te('load', e), (l = r)
                  break
                case 'video':
                case 'audio':
                  for (l = 0; l < bt.length; l++) te(bt[l], e)
                  l = r
                  break
                case 'source':
                  te('error', e), (l = r)
                  break
                case 'img':
                case 'image':
                case 'link':
                  te('error', e), te('load', e), (l = r)
                  break
                case 'details':
                  te('toggle', e), (l = r)
                  break
                case 'input':
                  Li(e, r), (l = Ll(e, r)), te('invalid', e)
                  break
                case 'option':
                  l = r
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    te('invalid', e)
                  break
                case 'textarea':
                  Mi(e, r), (l = Ml(e, r)), te('invalid', e)
                  break
                default:
                  l = r
              }
              Il(t, l), (o = l)
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u]
                  u === 'style'
                    ? Vi(e, s)
                    : u === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Di(e, s))
                    : u === 'children'
                    ? typeof s == 'string'
                      ? (t !== 'textarea' || s !== '') && Ot(e, s)
                      : typeof s == 'number' && Ot(e, '' + s)
                    : u !== 'suppressContentEditableWarning' &&
                      u !== 'suppressHydrationWarning' &&
                      u !== 'autoFocus' &&
                      (O.hasOwnProperty(u)
                        ? s != null && u === 'onScroll' && te('scroll', e)
                        : s != null && We(e, u, s, i))
                }
              switch (t) {
                case 'input':
                  wr(e), Ri(e, r, !1)
                  break
                case 'textarea':
                  wr(e), Ii(e)
                  break
                case 'option':
                  r.value != null && e.setAttribute('value', '' + K(r.value))
                  break
                case 'select':
                  ;(e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? st(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        st(e, !!r.multiple, r.defaultValue, !0)
                  break
                default:
                  typeof l.onClick == 'function' && (e.onclick = Hr)
              }
              switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus
                  break e
                case 'img':
                  r = !0
                  break e
                default:
                  r = !1
              }
            }
            r && (n.flags |= 4)
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152))
        }
        return Pe(n), null
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r)
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(h(166))
          if (((t = nt(or.current)), nt(yn.current), Zr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[vn] = n),
              (u = r.nodeValue !== t) && ((e = Ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, t, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, t, (e.mode & 1) !== 0)
              }
            u && (n.flags |= 4)
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[vn] = n),
              (n.stateNode = r)
        }
        return Pe(n), null
      case 13:
        if (
          (re(oe),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && Xe !== null && n.mode & 1 && !(n.flags & 128))
            es(), Et(), (n.flags |= 98560), (u = !1)
          else if (((u = Zr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(h(318))
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(h(317))
              u[vn] = n
            } else
              Et(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4)
            Pe(n), (u = !1)
          } else sn !== null && (di(sn), (sn = null)), (u = !0)
          if (!u) return n.flags & 65536 ? n : null
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : hi())),
            n.updateQueue !== null && (n.flags |= 4),
            Pe(n),
            null)
      case 4:
        return (
          jt(),
          ni(e, n),
          e === null && er(n.stateNode.containerInfo),
          Pe(n),
          null
        )
      case 10:
        return zu(n.type._context), Pe(n), null
      case 17:
        return Fe(n.type) && Qr(), Pe(n), null
      case 19:
        if ((re(oe), (u = n.memoizedState), u === null)) return Pe(n), null
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1)
          else {
            if (ye !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = tl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      dr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling)
                  return b(oe, (oe.current & 1) | 2), n.child
                }
                e = e.sibling
              }
            u.tail !== null &&
              pe() > Tt &&
              ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304))
          }
        else {
          if (!r)
            if (((e = tl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                dr(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !i.alternate &&
                  !ie)
              )
                return Pe(n), null
            } else
              2 * pe() - u.renderingStartTime > Tt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304))
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i))
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = pe()),
            (n.sibling = null),
            (t = oe.current),
            b(oe, r ? (t & 1) | 2 : t & 1),
            n)
          : (Pe(n), null)
      case 22:
      case 23:
        return (
          mi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? Ge & 1073741824 &&
              (Pe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Pe(n),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(h(156, n.tag))
  }
  function cf(e, n) {
    switch ((Eu(n), n.tag)) {
      case 1:
        return (
          Fe(n.type) && Qr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        )
      case 3:
        return (
          jt(),
          re(Ie),
          re(_e),
          Fu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        )
      case 5:
        return Ou(n), null
      case 13:
        if (
          (re(oe), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(h(340))
          Et()
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        )
      case 19:
        return re(oe), null
      case 4:
        return jt(), null
      case 10:
        return zu(n.type._context), null
      case 22:
      case 23:
        return mi(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var fl = !1,
    ze = !1,
    ff = typeof WeakSet == 'function' ? WeakSet : Set,
    E = null
  function zt(e, n) {
    var t = e.ref
    if (t !== null)
      if (typeof t == 'function')
        try {
          t(null)
        } catch (r) {
          ce(e, n, r)
        }
      else t.current = null
  }
  function ti(e, n, t) {
    try {
      t()
    } catch (r) {
      ce(e, n, r)
    }
  }
  var qs = !1
  function df(e, n) {
    if (((mu = Tr), (e = Lo()), iu(e))) {
      if ('selectionStart' in e)
        var t = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window
          var r = t.getSelection && t.getSelection()
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode
            var l = r.anchorOffset,
              u = r.focusNode
            r = r.focusOffset
            try {
              t.nodeType, u.nodeType
            } catch {
              t = null
              break e
            }
            var i = 0,
              o = -1,
              s = -1,
              m = 0,
              g = 0,
              w = e,
              v = null
            n: for (;;) {
              for (
                var x;
                w !== t || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (x = w.firstChild) !== null;

              )
                (v = w), (w = x)
              for (;;) {
                if (w === e) break n
                if (
                  (v === t && ++m === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (x = w.nextSibling) !== null)
                )
                  break
                ;(w = v), (v = w.parentNode)
              }
              w = x
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s }
          } else t = null
        }
      t = t || { start: 0, end: 0 }
    } else t = null
    for (
      hu = { focusedElem: e, selectionRange: t }, Tr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e)
      else
        for (; E !== null; ) {
          n = E
          try {
            var C = n.alternate
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (C !== null) {
                    var j = C.memoizedProps,
                      me = C.memoizedState,
                      d = n.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? j : an(n.type, j),
                        me
                      )
                    d.__reactInternalSnapshotBeforeUpdate = a
                  }
                  break
                case 3:
                  var p = n.stateNode.containerInfo
                  p.nodeType === 1
                    ? (p.textContent = '')
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(h(163))
              }
          } catch (S) {
            ce(n, n.return, S)
          }
          if (((e = n.sibling), e !== null)) {
            ;(e.return = n.return), (E = e)
            break
          }
          E = n.return
        }
    return (C = qs), (qs = !1), C
  }
  function pr(e, n, t) {
    var r = n.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next)
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy
          ;(l.destroy = void 0), u !== void 0 && ti(n, t, u)
        }
        l = l.next
      } while (l !== r)
    }
  }
  function dl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next)
      do {
        if ((t.tag & e) === e) {
          var r = t.create
          t.destroy = r()
        }
        t = t.next
      } while (t !== n)
    }
  }
  function ri(e) {
    var n = e.ref
    if (n !== null) {
      var t = e.stateNode
      switch (e.tag) {
        case 5:
          e = t
          break
        default:
          e = t
      }
      typeof n == 'function' ? n(e) : (n.current = e)
    }
  }
  function bs(e) {
    var n = e.alternate
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[vn],
          delete n[tr],
          delete n[wu],
          delete n[Yc],
          delete n[Xc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function li(e, n, t) {
    var r = e.tag
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Hr))
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, n, t), e = e.sibling; e !== null; )
        li(e, n, t), (e = e.sibling)
  }
  function ui(e, n, t) {
    var r = e.tag
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), (e = e.sibling)
  }
  var Ee = null,
    cn = !1
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling)
  }
  function ta(e, n, t) {
    if (hn && typeof hn.onCommitFiberUnmount == 'function')
      try {
        hn.onCommitFiberUnmount(Cr, t)
      } catch {}
    switch (t.tag) {
      case 5:
        ze || zt(t, n)
      case 6:
        var r = Ee,
          l = cn
        ;(Ee = null),
          Bn(e, n, t),
          (Ee = r),
          (cn = l),
          Ee !== null &&
            (cn
              ? ((e = Ee),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : Ee.removeChild(t.stateNode))
        break
      case 18:
        Ee !== null &&
          (cn
            ? ((e = Ee),
              (t = t.stateNode),
              e.nodeType === 8
                ? gu(e.parentNode, t)
                : e.nodeType === 1 && gu(e, t),
              Qt(e))
            : gu(Ee, t.stateNode))
        break
      case 4:
        ;(r = Ee),
          (l = cn),
          (Ee = t.stateNode.containerInfo),
          (cn = !0),
          Bn(e, n, t),
          (Ee = r),
          (cn = l)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ze &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next
          do {
            var u = l,
              i = u.destroy
            ;(u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && ti(t, n, i),
              (l = l.next)
          } while (l !== r)
        }
        Bn(e, n, t)
        break
      case 1:
        if (
          !ze &&
          (zt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            ;(r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount()
          } catch (o) {
            ce(t, n, o)
          }
        Bn(e, n, t)
        break
      case 21:
        Bn(e, n, t)
        break
      case 22:
        t.mode & 1
          ? ((ze = (r = ze) || t.memoizedState !== null), Bn(e, n, t), (ze = r))
          : Bn(e, n, t)
        break
      default:
        Bn(e, n, t)
    }
  }
  function ra(e) {
    var n = e.updateQueue
    if (n !== null) {
      e.updateQueue = null
      var t = e.stateNode
      t === null && (t = e.stateNode = new ff()),
        n.forEach(function (r) {
          var l = kf.bind(null, e, r)
          t.has(r) || (t.add(r), r.then(l, l))
        })
    }
  }
  function fn(e, n) {
    var t = n.deletions
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r]
        try {
          var u = e,
            i = n,
            o = i
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                ;(Ee = o.stateNode), (cn = !1)
                break e
              case 3:
                ;(Ee = o.stateNode.containerInfo), (cn = !0)
                break e
              case 4:
                ;(Ee = o.stateNode.containerInfo), (cn = !0)
                break e
            }
            o = o.return
          }
          if (Ee === null) throw Error(h(160))
          ta(u, i, l), (Ee = null), (cn = !1)
          var s = l.alternate
          s !== null && (s.return = null), (l.return = null)
        } catch (m) {
          ce(l, n, m)
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling)
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fn(n, e), wn(e), r & 4)) {
          try {
            pr(3, e, e.return), dl(3, e)
          } catch (j) {
            ce(e, e.return, j)
          }
          try {
            pr(5, e, e.return)
          } catch (j) {
            ce(e, e.return, j)
          }
        }
        break
      case 1:
        fn(n, e), wn(e), r & 512 && t !== null && zt(t, t.return)
        break
      case 5:
        if (
          (fn(n, e),
          wn(e),
          r & 512 && t !== null && zt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode
          try {
            Ot(l, '')
          } catch (j) {
            ce(e, e.return, j)
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue
          if (((e.updateQueue = null), s !== null))
            try {
              o === 'input' && u.type === 'radio' && u.name != null && Ti(l, u),
                Fl(o, i)
              var m = Fl(o, u)
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  w = s[i + 1]
                g === 'style'
                  ? Vi(l, w)
                  : g === 'dangerouslySetInnerHTML'
                  ? Di(l, w)
                  : g === 'children'
                  ? Ot(l, w)
                  : We(l, g, w, m)
              }
              switch (o) {
                case 'input':
                  Tl(l, u)
                  break
                case 'textarea':
                  Oi(l, u)
                  break
                case 'select':
                  var v = l._wrapperState.wasMultiple
                  l._wrapperState.wasMultiple = !!u.multiple
                  var x = u.value
                  x != null
                    ? st(l, !!u.multiple, x, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? st(l, !!u.multiple, u.defaultValue, !0)
                        : st(l, !!u.multiple, u.multiple ? [] : '', !1))
              }
              l[tr] = u
            } catch (j) {
              ce(e, e.return, j)
            }
        }
        break
      case 6:
        if ((fn(n, e), wn(e), r & 4)) {
          if (e.stateNode === null) throw Error(h(162))
          ;(l = e.stateNode), (u = e.memoizedProps)
          try {
            l.nodeValue = u
          } catch (j) {
            ce(e, e.return, j)
          }
        }
        break
      case 3:
        if (
          (fn(n, e), wn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Qt(n.containerInfo)
          } catch (j) {
            ce(e, e.return, j)
          }
        break
      case 4:
        fn(n, e), wn(e)
        break
      case 13:
        fn(n, e),
          wn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (si = pe())),
          r & 4 && ra(e)
        break
      case 22:
        if (
          ((g = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((ze = (m = ze) || g), fn(n, e), (ze = m)) : fn(n, e),
          wn(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !g && e.mode & 1)
          )
            for (E = e, g = e.child; g !== null; ) {
              for (w = E = g; E !== null; ) {
                switch (((v = E), (x = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, v, v.return)
                    break
                  case 1:
                    zt(v, v.return)
                    var C = v.stateNode
                    if (typeof C.componentWillUnmount == 'function') {
                      ;(r = v), (t = v.return)
                      try {
                        ;(n = r),
                          (C.props = n.memoizedProps),
                          (C.state = n.memoizedState),
                          C.componentWillUnmount()
                      } catch (j) {
                        ce(r, t, j)
                      }
                    }
                    break
                  case 5:
                    zt(v, v.return)
                    break
                  case 22:
                    if (v.memoizedState !== null) {
                      oa(w)
                      continue
                    }
                }
                x !== null ? ((x.return = v), (E = x)) : oa(w)
              }
              g = g.sibling
            }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w
                try {
                  ;(l = w.stateNode),
                    m
                      ? ((u = l.style),
                        typeof u.setProperty == 'function'
                          ? u.setProperty('display', 'none', 'important')
                          : (u.display = 'none'))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (o.style.display = Ui('display', i)))
                } catch (j) {
                  ce(e, e.return, j)
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = m ? '' : w.memoizedProps
                } catch (j) {
                  ce(e, e.return, j)
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ;(w.child.return = w), (w = w.child)
              continue
            }
            if (w === e) break e
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e
              g === w && (g = null), (w = w.return)
            }
            g === w && (g = null),
              (w.sibling.return = w.return),
              (w = w.sibling)
          }
        }
        break
      case 19:
        fn(n, e), wn(e), r & 4 && ra(e)
        break
      case 21:
        break
      default:
        fn(n, e), wn(e)
    }
  }
  function wn(e) {
    var n = e.flags
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t
              break e
            }
            t = t.return
          }
          throw Error(h(160))
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode
            r.flags & 32 && (Ot(l, ''), (r.flags &= -33))
            var u = na(e)
            ui(e, u, l)
            break
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e)
            li(e, o, i)
            break
          default:
            throw Error(h(161))
        }
      } catch (s) {
        ce(e, e.return, s)
      }
      e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
  }
  function pf(e, n, t) {
    ;(E = e), ua(e)
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || ze
          o = fl
          var m = ze
          if (((fl = i), (ze = s) && !m))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                  ? ((s.return = i), (E = s))
                  : sa(l)
          for (; u !== null; ) (E = u), ua(u), (u = u.sibling)
          ;(E = l), (fl = o), (ze = m)
        }
        ia(e)
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : ia(e)
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E
      if (n.flags & 8772) {
        var t = n.alternate
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ze || dl(5, n)
                break
              case 1:
                var r = n.stateNode
                if (n.flags & 4 && !ze)
                  if (t === null) r.componentDidMount()
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : an(n.type, t.memoizedProps)
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var u = n.updateQueue
                u !== null && os(n, u, r)
                break
              case 3:
                var i = n.updateQueue
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode
                        break
                      case 1:
                        t = n.child.stateNode
                    }
                  os(n, i, t)
                }
                break
              case 5:
                var o = n.stateNode
                if (t === null && n.flags & 4) {
                  t = o
                  var s = n.memoizedProps
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && t.focus()
                      break
                    case 'img':
                      s.src && (t.src = s.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (n.memoizedState === null) {
                  var m = n.alternate
                  if (m !== null) {
                    var g = m.memoizedState
                    if (g !== null) {
                      var w = g.dehydrated
                      w !== null && Qt(w)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(h(163))
            }
          ze || (n.flags & 512 && ri(n))
        } catch (v) {
          ce(n, n.return, v)
        }
      }
      if (n === e) {
        E = null
        break
      }
      if (((t = n.sibling), t !== null)) {
        ;(t.return = n.return), (E = t)
        break
      }
      E = n.return
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E
      if (n === e) {
        E = null
        break
      }
      var t = n.sibling
      if (t !== null) {
        ;(t.return = n.return), (E = t)
        break
      }
      E = n.return
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return
            try {
              dl(4, n)
            } catch (s) {
              ce(n, t, s)
            }
            break
          case 1:
            var r = n.stateNode
            if (typeof r.componentDidMount == 'function') {
              var l = n.return
              try {
                r.componentDidMount()
              } catch (s) {
                ce(n, l, s)
              }
            }
            var u = n.return
            try {
              ri(n)
            } catch (s) {
              ce(n, u, s)
            }
            break
          case 5:
            var i = n.return
            try {
              ri(n)
            } catch (s) {
              ce(n, i, s)
            }
        }
      } catch (s) {
        ce(n, n.return, s)
      }
      if (n === e) {
        E = null
        break
      }
      var o = n.sibling
      if (o !== null) {
        ;(o.return = n.return), (E = o)
        break
      }
      E = n.return
    }
  }
  var mf = Math.ceil,
    pl = ge.ReactCurrentDispatcher,
    ii = ge.ReactCurrentOwner,
    nn = ge.ReactCurrentBatchConfig,
    V = 0,
    Se = null,
    he = null,
    Ne = 0,
    Ge = 0,
    Lt = Fn(0),
    ye = 0,
    mr = null,
    rt = 0,
    ml = 0,
    oi = 0,
    hr = null,
    Ue = null,
    si = 0,
    Tt = 1 / 0,
    Pn = null,
    hl = !1,
    ai = null,
    Wn = null,
    vl = !1,
    Hn = null,
    yl = 0,
    vr = 0,
    ci = null,
    gl = -1,
    wl = 0
  function Me() {
    return V & 6 ? pe() : gl !== -1 ? gl : (gl = pe())
  }
  function $n(e) {
    return e.mode & 1
      ? V & 2 && Ne !== 0
        ? Ne & -Ne
        : Zc.transition !== null
        ? (wl === 0 && (wl = eo()), wl)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))),
          e)
      : 1
  }
  function dn(e, n, t, r) {
    if (50 < vr) throw ((vr = 0), (ci = null), Error(h(185)))
    At(e, t, r),
      (!(V & 2) || e !== Se) &&
        (e === Se && (!(V & 2) && (ml |= t), ye === 4 && Qn(e, Ne)),
        Ve(e, r),
        t === 1 && V === 0 && !(n.mode & 1) && ((Tt = pe() + 500), Yr && Un()))
  }
  function Ve(e, n) {
    var t = e.callbackNode
    Za(e, n)
    var r = Pr(e, e === Se ? Ne : 0)
    if (r === 0)
      t !== null && Ji(t), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && Ji(t), n === 1))
        e.tag === 0 ? Gc(ca.bind(null, e)) : Go(ca.bind(null, e)),
          Qc(function () {
            !(V & 6) && Un()
          }),
          (t = null)
      else {
        switch (no(r)) {
          case 1:
            t = Hl
            break
          case 4:
            t = qi
            break
          case 16:
            t = Nr
            break
          case 536870912:
            t = bi
            break
          default:
            t = Nr
        }
        t = ga(t, aa.bind(null, e))
      }
      ;(e.callbackPriority = n), (e.callbackNode = t)
    }
  }
  function aa(e, n) {
    if (((gl = -1), (wl = 0), V & 6)) throw Error(h(327))
    var t = e.callbackNode
    if (Rt() && e.callbackNode !== t) return null
    var r = Pr(e, e === Se ? Ne : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r)
    else {
      n = r
      var l = V
      V |= 2
      var u = da()
      ;(Se !== e || Ne !== n) && ((Pn = null), (Tt = pe() + 500), ut(e, n))
      do
        try {
          yf()
          break
        } catch (o) {
          fa(e, o)
        }
      while (!0)
      Pu(),
        (pl.current = u),
        (V = l),
        he !== null ? (n = 0) : ((Se = null), (Ne = 0), (n = ye))
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = $l(e)), l !== 0 && ((r = l), (n = fi(e, l)))),
        n === 1)
      )
        throw ((t = mr), ut(e, 0), Qn(e, r), Ve(e, pe()), t)
      if (n === 6) Qn(e, r)
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !hf(l) &&
            ((n = Sl(e, r)),
            n === 2 && ((u = $l(e)), u !== 0 && ((r = u), (n = fi(e, u)))),
            n === 1))
        )
          throw ((t = mr), ut(e, 0), Qn(e, r), Ve(e, pe()), t)
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(h(345))
          case 2:
            it(e, Ue, Pn)
            break
          case 3:
            if (
              (Qn(e, r),
              (r & 130023424) === r && ((n = si + 500 - pe()), 10 < n))
            ) {
              if (Pr(e, 0) !== 0) break
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Me(), (e.pingedLanes |= e.suspendedLanes & l)
                break
              }
              e.timeoutHandle = yu(it.bind(null, e, Ue, Pn), n)
              break
            }
            it(e, Ue, Pn)
            break
          case 4:
            if ((Qn(e, r), (r & 4194240) === r)) break
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - un(r)
              ;(u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u)
            }
            if (
              ((r = l),
              (r = pe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(it.bind(null, e, Ue, Pn), r)
              break
            }
            it(e, Ue, Pn)
            break
          case 5:
            it(e, Ue, Pn)
            break
          default:
            throw Error(h(329))
        }
      }
    }
    return Ve(e, pe()), e.callbackNode === t ? aa.bind(null, e) : null
  }
  function fi(e, n) {
    var t = hr
    return (
      e.current.memoizedState.isDehydrated && (ut(e, n).flags |= 256),
      (e = Sl(e, n)),
      e !== 2 && ((n = Ue), (Ue = t), n !== null && di(n)),
      e
    )
  }
  function di(e) {
    Ue === null ? (Ue = e) : Ue.push.apply(Ue, e)
  }
  function hf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot
            l = l.value
            try {
              if (!on(u(), l)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t)
      else {
        if (n === e) break
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0
          n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
      }
    }
    return !0
  }
  function Qn(e, n) {
    for (
      n &= ~oi,
        n &= ~ml,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - un(n),
        r = 1 << t
      ;(e[t] = -1), (n &= ~r)
    }
  }
  function ca(e) {
    if (V & 6) throw Error(h(327))
    Rt()
    var n = Pr(e, 0)
    if (!(n & 1)) return Ve(e, pe()), null
    var t = Sl(e, n)
    if (e.tag !== 0 && t === 2) {
      var r = $l(e)
      r !== 0 && ((n = r), (t = fi(e, r)))
    }
    if (t === 1) throw ((t = mr), ut(e, 0), Qn(e, n), Ve(e, pe()), t)
    if (t === 6) throw Error(h(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      it(e, Ue, Pn),
      Ve(e, pe()),
      null
    )
  }
  function pi(e, n) {
    var t = V
    V |= 1
    try {
      return e(n)
    } finally {
      ;(V = t), V === 0 && ((Tt = pe() + 500), Yr && Un())
    }
  }
  function lt(e) {
    Hn !== null && Hn.tag === 0 && !(V & 6) && Rt()
    var n = V
    V |= 1
    var t = nn.transition,
      r = Y
    try {
      if (((nn.transition = null), (Y = 1), e)) return e()
    } finally {
      ;(Y = r), (nn.transition = t), (V = n), !(V & 6) && Un()
    }
  }
  function mi() {
    ;(Ge = Lt.current), re(Lt)
  }
  function ut(e, n) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var t = e.timeoutHandle
    if ((t !== -1 && ((e.timeoutHandle = -1), $c(t)), he !== null))
      for (t = he.return; t !== null; ) {
        var r = t
        switch ((Eu(r), r.tag)) {
          case 1:
            ;(r = r.type.childContextTypes), r != null && Qr()
            break
          case 3:
            jt(), re(Ie), re(_e), Fu()
            break
          case 5:
            Ou(r)
            break
          case 4:
            jt()
            break
          case 13:
            re(oe)
            break
          case 19:
            re(oe)
            break
          case 10:
            zu(r.type._context)
            break
          case 22:
          case 23:
            mi()
        }
        t = t.return
      }
    if (
      ((Se = e),
      (he = e = Kn(e.current, null)),
      (Ne = Ge = n),
      (ye = 0),
      (mr = null),
      (oi = ml = rt = 0),
      (Ue = hr = null),
      et !== null)
    ) {
      for (n = 0; n < et.length; n++)
        if (((t = et[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null
          var l = r.next,
            u = t.pending
          if (u !== null) {
            var i = u.next
            ;(u.next = l), (r.next = i)
          }
          t.pending = r
        }
      et = null
    }
    return e
  }
  function fa(e, n) {
    do {
      var t = he
      try {
        if ((Pu(), (rl.current = ol), ll)) {
          for (var r = se.memoizedState; r !== null; ) {
            var l = r.queue
            l !== null && (l.pending = null), (r = r.next)
          }
          ll = !1
        }
        if (
          ((tt = 0),
          (we = ve = se = null),
          (sr = !1),
          (ar = 0),
          (ii.current = null),
          t === null || t.return === null)
        ) {
          ;(ye = 1), (mr = n), (he = null)
          break
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n
          if (
            ((n = Ne),
            (o.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var m = s,
              g = o,
              w = g.tag
            if (!(g.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null))
            }
            var x = Fs(i)
            if (x !== null) {
              ;(x.flags &= -257),
                Ds(x, i, o, u, n),
                x.mode & 1 && Is(u, m, n),
                (n = x),
                (s = m)
              var C = n.updateQueue
              if (C === null) {
                var j = new Set()
                j.add(s), (n.updateQueue = j)
              } else C.add(s)
              break e
            } else {
              if (!(n & 1)) {
                Is(u, m, n), hi()
                break e
              }
              s = Error(h(426))
            }
          } else if (ie && o.mode & 1) {
            var me = Fs(i)
            if (me !== null) {
              !(me.flags & 65536) && (me.flags |= 256),
                Ds(me, i, o, u, n),
                _u(Pt(s, o))
              break e
            }
          }
          ;(u = s = Pt(s, o)),
            ye !== 4 && (ye = 2),
            hr === null ? (hr = [u]) : hr.push(u),
            (u = i)
          do {
            switch (u.tag) {
              case 3:
                ;(u.flags |= 65536), (n &= -n), (u.lanes |= n)
                var d = Ms(u, s, n)
                is(u, d)
                break e
              case 1:
                o = s
                var a = u.type,
                  p = u.stateNode
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Wn === null || !Wn.has(p))))
                ) {
                  ;(u.flags |= 65536), (n &= -n), (u.lanes |= n)
                  var S = Os(u, o, n)
                  is(u, S)
                  break e
                }
            }
            u = u.return
          } while (u !== null)
        }
        ma(t)
      } catch (P) {
        ;(n = P), he === t && t !== null && (he = t = t.return)
        continue
      }
      break
    } while (!0)
  }
  function da() {
    var e = pl.current
    return (pl.current = ol), e === null ? ol : e
  }
  function hi() {
    ;(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
      Se === null || (!(rt & 268435455) && !(ml & 268435455)) || Qn(Se, Ne)
  }
  function Sl(e, n) {
    var t = V
    V |= 2
    var r = da()
    ;(Se !== e || Ne !== n) && ((Pn = null), ut(e, n))
    do
      try {
        vf()
        break
      } catch (l) {
        fa(e, l)
      }
    while (!0)
    if ((Pu(), (V = t), (pl.current = r), he !== null)) throw Error(h(261))
    return (Se = null), (Ne = 0), ye
  }
  function vf() {
    for (; he !== null; ) pa(he)
  }
  function yf() {
    for (; he !== null && !Ba(); ) pa(he)
  }
  function pa(e) {
    var n = ya(e.alternate, e, Ge)
    ;(e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (he = n),
      (ii.current = null)
  }
  function ma(e) {
    var n = e
    do {
      var t = n.alternate
      if (((e = n.return), n.flags & 32768)) {
        if (((t = cf(t, n)), t !== null)) {
          ;(t.flags &= 32767), (he = t)
          return
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(ye = 6), (he = null)
          return
        }
      } else if (((t = af(t, n, Ge)), t !== null)) {
        he = t
        return
      }
      if (((n = n.sibling), n !== null)) {
        he = n
        return
      }
      he = n = e
    } while (n !== null)
    ye === 0 && (ye = 5)
  }
  function it(e, n, t) {
    var r = Y,
      l = nn.transition
    try {
      ;(nn.transition = null), (Y = 1), gf(e, n, t, r)
    } finally {
      ;(nn.transition = l), (Y = r)
    }
    return null
  }
  function gf(e, n, t, r) {
    do Rt()
    while (Hn !== null)
    if (V & 6) throw Error(h(327))
    t = e.finishedWork
    var l = e.finishedLanes
    if (t === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(h(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var u = t.lanes | t.childLanes
    if (
      (Ja(e, u),
      e === Se && ((he = Se = null), (Ne = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        vl ||
        ((vl = !0),
        ga(Nr, function () {
          return Rt(), null
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      ;(u = nn.transition), (nn.transition = null)
      var i = Y
      Y = 1
      var o = V
      ;(V |= 4),
        (ii.current = null),
        df(e, t),
        la(t, e),
        Dc(hu),
        (Tr = !!mu),
        (hu = mu = null),
        (e.current = t),
        pf(t),
        Wa(),
        (V = o),
        (Y = i),
        (nn.transition = u)
    } else e.current = t
    if (
      (vl && ((vl = !1), (Hn = e), (yl = l)),
      (u = e.pendingLanes),
      u === 0 && (Wn = null),
      Qa(t.stateNode),
      Ve(e, pe()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest })
    if (hl) throw ((hl = !1), (e = ai), (ai = null), e)
    return (
      yl & 1 && e.tag !== 0 && Rt(),
      (u = e.pendingLanes),
      u & 1 ? (e === ci ? vr++ : ((vr = 0), (ci = e))) : (vr = 0),
      Un(),
      null
    )
  }
  function Rt() {
    if (Hn !== null) {
      var e = no(yl),
        n = nn.transition,
        t = Y
      try {
        if (((nn.transition = null), (Y = 16 > e ? 16 : e), Hn === null))
          var r = !1
        else {
          if (((e = Hn), (Hn = null), (yl = 0), V & 6)) throw Error(h(331))
          var l = V
          for (V |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child
            if (E.flags & 16) {
              var o = u.deletions
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s]
                  for (E = m; E !== null; ) {
                    var g = E
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, g, u)
                    }
                    var w = g.child
                    if (w !== null) (w.return = g), (E = w)
                    else
                      for (; E !== null; ) {
                        g = E
                        var v = g.sibling,
                          x = g.return
                        if ((bs(g), g === m)) {
                          E = null
                          break
                        }
                        if (v !== null) {
                          ;(v.return = x), (E = v)
                          break
                        }
                        E = x
                      }
                  }
                }
                var C = u.alternate
                if (C !== null) {
                  var j = C.child
                  if (j !== null) {
                    C.child = null
                    do {
                      var me = j.sibling
                      ;(j.sibling = null), (j = me)
                    } while (j !== null)
                  }
                }
                E = u
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (E = i)
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, u, u.return)
                  }
                var d = u.sibling
                if (d !== null) {
                  ;(d.return = u.return), (E = d)
                  break e
                }
                E = u.return
              }
          }
          var a = e.current
          for (E = a; E !== null; ) {
            i = E
            var p = i.child
            if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (E = p)
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, o)
                    }
                  } catch (P) {
                    ce(o, o.return, P)
                  }
                if (o === i) {
                  E = null
                  break e
                }
                var S = o.sibling
                if (S !== null) {
                  ;(S.return = o.return), (E = S)
                  break e
                }
                E = o.return
              }
          }
          if (
            ((V = l), Un(), hn && typeof hn.onPostCommitFiberRoot == 'function')
          )
            try {
              hn.onPostCommitFiberRoot(Cr, e)
            } catch {}
          r = !0
        }
        return r
      } finally {
        ;(Y = t), (nn.transition = n)
      }
    }
    return !1
  }
  function ha(e, n, t) {
    ;(n = Pt(t, n)),
      (n = Ms(e, n, 1)),
      (e = An(e, n, 1)),
      (n = Me()),
      e !== null && (At(e, 1, n), Ve(e, n))
  }
  function ce(e, n, t) {
    if (e.tag === 3) ha(e, e, t)
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t)
          break
        } else if (n.tag === 1) {
          var r = n.stateNode
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Wn === null || !Wn.has(r)))
          ) {
            ;(e = Pt(t, e)),
              (e = Os(n, e, 1)),
              (n = An(n, e, 1)),
              (e = Me()),
              n !== null && (At(n, 1, e), Ve(n, e))
            break
          }
        }
        n = n.return
      }
  }
  function wf(e, n, t) {
    var r = e.pingCache
    r !== null && r.delete(n),
      (n = Me()),
      (e.pingedLanes |= e.suspendedLanes & t),
      Se === e &&
        (Ne & t) === t &&
        (ye === 4 || (ye === 3 && (Ne & 130023424) === Ne && 500 > pe() - si)
          ? ut(e, 0)
          : (oi |= t)),
      Ve(e, n)
  }
  function va(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
        : (n = 1))
    var t = Me()
    ;(e = Cn(e, n)), e !== null && (At(e, n, t), Ve(e, t))
  }
  function Sf(e) {
    var n = e.memoizedState,
      t = 0
    n !== null && (t = n.retryLane), va(e, t)
  }
  function kf(e, n) {
    var t = 0
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState
        l !== null && (t = l.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      default:
        throw Error(h(314))
    }
    r !== null && r.delete(n), va(e, t)
  }
  var ya
  ya = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Ie.current) De = !0
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (De = !1), sf(e, n, t)
        De = !!(e.flags & 131072)
      }
    else (De = !1), ie && n.flags & 1048576 && Zo(n, Gr, n.index)
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type
        cl(e, n), (e = n.pendingProps)
        var l = St(n, _e.current)
        _t(n, t), (l = Vu(null, n, r, e, l, t))
        var u = Au()
        return (
          (n.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Fe(r) ? ((u = !0), Kr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ru(n),
              (l.updater = sl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Ku(n, r, e, t),
              (n = Zu(null, n, r, !0, u, t)))
            : ((n.tag = 0), ie && u && xu(n), Re(null, n, l, t), (n = n.child)),
          n
        )
      case 16:
        r = n.elementType
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Ef(r)),
            (e = an(r, e)),
            l)
          ) {
            case 0:
              n = Gu(null, n, r, e, t)
              break e
            case 1:
              n = Hs(null, n, r, e, t)
              break e
            case 11:
              n = Us(null, n, r, e, t)
              break e
            case 14:
              n = Vs(null, n, r, an(r.type, e), t)
              break e
          }
          throw Error(h(306, r, ''))
        }
        return n
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : an(r, l)),
          Gu(e, n, r, l, t)
        )
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : an(r, l)),
          Hs(e, n, r, l, t)
        )
      case 3:
        e: {
          if (($s(n), e === null)) throw Error(h(387))
          ;(r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            us(e, n),
            nl(n, r, null, t)
          var i = n.memoizedState
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              ;(l = Pt(Error(h(423)), n)), (n = Qs(e, n, r, t, l))
              break e
            } else if (r !== l) {
              ;(l = Pt(Error(h(424)), n)), (n = Qs(e, n, r, t, l))
              break e
            } else
              for (
                Xe = In(n.stateNode.containerInfo.firstChild),
                  Ye = n,
                  ie = !0,
                  sn = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling)
          else {
            if ((Et(), r === l)) {
              n = jn(e, n, t)
              break e
            }
            Re(e, n, r, t)
          }
          n = n.child
        }
        return n
      case 5:
        return (
          ss(n),
          e === null && Cu(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          vu(r, l) ? (i = null) : u !== null && vu(r, u) && (n.flags |= 32),
          Ws(e, n),
          Re(e, n, i, t),
          n.child
        )
      case 6:
        return e === null && Cu(n), null
      case 13:
        return Ks(e, n, t)
      case 4:
        return (
          Mu(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Nt(n, null, r, t)) : Re(e, n, r, t),
          n.child
        )
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : an(r, l)),
          Us(e, n, r, l, t)
        )
      case 7:
        return Re(e, n, n.pendingProps, t), n.child
      case 8:
        return Re(e, n, n.pendingProps.children, t), n.child
      case 12:
        return Re(e, n, n.pendingProps.children, t), n.child
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            b(qr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (on(u.value, i)) {
              if (u.children === l.children && !Ie.current) {
                n = jn(e, n, t)
                break e
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies
                if (o !== null) {
                  i = u.child
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        ;(s = _n(-1, t & -t)), (s.tag = 2)
                        var m = u.updateQueue
                        if (m !== null) {
                          m = m.shared
                          var g = m.pending
                          g === null
                            ? (s.next = s)
                            : ((s.next = g.next), (g.next = s)),
                            (m.pending = s)
                        }
                      }
                      ;(u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Lu(u.return, t, n),
                        (o.lanes |= t)
                      break
                    }
                    s = s.next
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(h(341))
                  ;(i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    Lu(i, t, n),
                    (i = u.sibling)
                } else i = u.child
                if (i !== null) i.return = u
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null
                      break
                    }
                    if (((u = i.sibling), u !== null)) {
                      ;(u.return = i.return), (i = u)
                      break
                    }
                    i = i.return
                  }
                u = i
              }
          Re(e, n, l.children, t), (n = n.child)
        }
        return n
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          _t(n, t),
          (l = be(l)),
          (r = r(l)),
          (n.flags |= 1),
          Re(e, n, r, t),
          n.child
        )
      case 14:
        return (
          (r = n.type),
          (l = an(r, n.pendingProps)),
          (l = an(r.type, l)),
          Vs(e, n, r, l, t)
        )
      case 15:
        return As(e, n, n.type, n.pendingProps, t)
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : an(r, l)),
          cl(e, n),
          (n.tag = 1),
          Fe(r) ? ((e = !0), Kr(n)) : (e = !1),
          _t(n, t),
          Ts(n, r, l),
          Ku(n, r, l, t),
          Zu(null, n, r, !0, e, t)
        )
      case 19:
        return Xs(e, n, t)
      case 22:
        return Bs(e, n, t)
    }
    throw Error(h(156, n.tag))
  }
  function ga(e, n) {
    return Zi(e, n)
  }
  function xf(e, n, t, r) {
    ;(this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function tn(e, n, t, r) {
    return new xf(e, n, t, r)
  }
  function vi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Ef(e) {
    if (typeof e == 'function') return vi(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === pn)) return 11
      if (e === mn) return 14
    }
    return 2
  }
  function Kn(e, n) {
    var t = e.alternate
    return (
      t === null
        ? ((t = tn(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    )
  }
  function kl(e, n, t, r, l, u) {
    var i = 2
    if (((r = e), typeof e == 'function')) vi(e) && (i = 1)
    else if (typeof e == 'string') i = 5
    else
      e: switch (e) {
        case de:
          return ot(t.children, l, u, n)
        case Te:
          ;(i = 8), (l |= 8)
          break
        case rn:
          return (
            (e = tn(12, t, n, l | 2)), (e.elementType = rn), (e.lanes = u), e
          )
        case $e:
          return (e = tn(13, t, n, l)), (e.elementType = $e), (e.lanes = u), e
        case ln:
          return (e = tn(19, t, n, l)), (e.elementType = ln), (e.lanes = u), e
        case ae:
          return xl(t, l, u, n)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Sn:
                i = 10
                break e
              case Xn:
                i = 9
                break e
              case pn:
                i = 11
                break e
              case mn:
                i = 14
                break e
              case Oe:
                ;(i = 16), (r = null)
                break e
            }
          throw Error(h(130, e == null ? e : typeof e, ''))
      }
    return (
      (n = tn(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    )
  }
  function ot(e, n, t, r) {
    return (e = tn(7, e, r, n)), (e.lanes = t), e
  }
  function xl(e, n, t, r) {
    return (
      (e = tn(22, e, r, n)),
      (e.elementType = ae),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function yi(e, n, t) {
    return (e = tn(6, e, null, n)), (e.lanes = t), e
  }
  function gi(e, n, t) {
    return (
      (n = tn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    )
  }
  function Nf(e, n, t, r, l) {
    ;(this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null)
  }
  function wi(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new Nf(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = tn(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ru(u),
      e
    )
  }
  function Cf(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: A,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: n,
      implementation: t,
    }
  }
  function wa(e) {
    if (!e) return Dn
    e = e._reactInternals
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(h(170))
      var n = e
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context
            break e
          case 1:
            if (Fe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        n = n.return
      } while (n !== null)
      throw Error(h(171))
    }
    if (e.tag === 1) {
      var t = e.type
      if (Fe(t)) return Yo(e, t, n)
    }
    return n
  }
  function Sa(e, n, t, r, l, u, i, o, s) {
    return (
      (e = wi(t, r, !0, e, l, u, i, o, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = Me()),
      (l = $n(t)),
      (u = _n(r, l)),
      (u.callback = n ?? null),
      An(t, u, l),
      (e.current.lanes = l),
      At(e, l, r),
      Ve(e, r),
      e
    )
  }
  function El(e, n, t, r) {
    var l = n.current,
      u = Me(),
      i = $n(l)
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = _n(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = An(l, n, i)),
      e !== null && (dn(e, l, i, u), el(e, l, i)),
      i
    )
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function ka(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane
      e.retryLane = t !== 0 && t < n ? t : n
    }
  }
  function Si(e, n) {
    ka(e, n), (e = e.alternate) && ka(e, n)
  }
  function _f() {
    return null
  }
  var xa =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function ki(e) {
    this._internalRoot = e
  }
  ;(Cl.prototype.render = ki.prototype.render =
    function (e) {
      var n = this._internalRoot
      if (n === null) throw Error(h(409))
      El(e, n, null, null)
    }),
    (Cl.prototype.unmount = ki.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var n = e.containerInfo
          lt(function () {
            El(null, e, null, null)
          }),
            (n[kn] = null)
        }
      })
  function Cl(e) {
    this._internalRoot = e
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = lo()
      e = { blockedOn: null, target: e, priority: n }
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
      Rn.splice(t, 0, e), t === 0 && oo(e)
    }
  }
  function xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function _l(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function Ea() {}
  function jf(e, n, t, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var u = r
        r = function () {
          var m = Nl(i)
          u.call(m)
        }
      }
      var i = Sa(n, r, e, 0, null, !1, !1, '', Ea)
      return (
        (e._reactRootContainer = i),
        (e[kn] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        lt(),
        i
      )
    }
    for (; (l = e.lastChild); ) e.removeChild(l)
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var m = Nl(s)
        o.call(m)
      }
    }
    var s = wi(e, 0, !1, null, null, !1, !1, '', Ea)
    return (
      (e._reactRootContainer = s),
      (e[kn] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      lt(function () {
        El(n, s, t, r)
      }),
      s
    )
  }
  function jl(e, n, t, r, l) {
    var u = t._reactRootContainer
    if (u) {
      var i = u
      if (typeof l == 'function') {
        var o = l
        l = function () {
          var s = Nl(i)
          o.call(s)
        }
      }
      El(n, i, e, l)
    } else i = jf(t, n, e, l, r)
    return Nl(i)
  }
  ;(to = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode
        if (n.current.memoizedState.isDehydrated) {
          var t = Vt(n.pendingLanes)
          t !== 0 &&
            (Kl(n, t | 1), Ve(n, pe()), !(V & 6) && ((Tt = pe() + 500), Un()))
        }
        break
      case 13:
        lt(function () {
          var r = Cn(e, 1)
          if (r !== null) {
            var l = Me()
            dn(r, e, 1, l)
          }
        }),
          Si(e, 1)
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var n = Cn(e, 134217728)
        if (n !== null) {
          var t = Me()
          dn(n, e, 134217728, t)
        }
        Si(e, 134217728)
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          t = Cn(e, n)
        if (t !== null) {
          var r = Me()
          dn(t, e, n, r)
        }
        Si(e, n)
      }
    }),
    (lo = function () {
      return Y
    }),
    (uo = function (e, n) {
      var t = Y
      try {
        return (Y = e), n()
      } finally {
        Y = t
      }
    }),
    (Vl = function (e, n, t) {
      switch (n) {
        case 'input':
          if ((Tl(e, t), (n = t.name), t.type === 'radio' && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode
            for (
              t = t.querySelectorAll(
                'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n]
              if (r !== e && r.form === e.form) {
                var l = $r(r)
                if (!l) throw Error(h(90))
                zi(r), Tl(r, l)
              }
            }
          }
          break
        case 'textarea':
          Oi(e, t)
          break
        case 'select':
          ;(n = t.value), n != null && st(e, !!t.multiple, n, !1)
      }
    }),
    (Hi = pi),
    ($i = lt)
  var Pf = { usingClientEntryPoint: !1, Events: [rr, gt, $r, Bi, Wi, pi] },
    yr = {
      findFiberByHostInstance: Zn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    zf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ge.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xi(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || _f,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        ;(Cr = Pl.inject(zf)), (hn = Pl)
      } catch {}
  }
  return (
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf),
    (Ae.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!xi(n)) throw Error(h(200))
      return Cf(e, n, null, t)
    }),
    (Ae.createRoot = function (e, n) {
      if (!xi(e)) throw Error(h(299))
      var t = !1,
        r = '',
        l = xa
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = wi(e, 1, !1, null, null, t, !1, r, l)),
        (e[kn] = n.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new ki(n)
      )
    }),
    (Ae.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var n = e._reactInternals
      if (n === void 0)
        throw typeof e.render == 'function'
          ? Error(h(188))
          : ((e = Object.keys(e).join(',')), Error(h(268, e)))
      return (e = Xi(n)), (e = e === null ? null : e.stateNode), e
    }),
    (Ae.flushSync = function (e) {
      return lt(e)
    }),
    (Ae.hydrate = function (e, n, t) {
      if (!_l(n)) throw Error(h(200))
      return jl(null, e, n, !0, t)
    }),
    (Ae.hydrateRoot = function (e, n, t) {
      if (!xi(e)) throw Error(h(405))
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = '',
        i = xa
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = Sa(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[kn] = n.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l)
      return new Cl(n)
    }),
    (Ae.render = function (e, n, t) {
      if (!_l(n)) throw Error(h(200))
      return jl(null, e, n, !1, t)
    }),
    (Ae.unmountComponentAtNode = function (e) {
      if (!_l(e)) throw Error(h(40))
      return e._reactRootContainer
        ? (lt(function () {
            jl(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[kn] = null)
            })
          }),
          !0)
        : !1
    }),
    (Ae.unstable_batchedUpdates = pi),
    (Ae.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!_l(t)) throw Error(h(200))
      if (e == null || e._reactInternals === void 0) throw Error(h(38))
      return jl(e, n, t, !1, r)
    }),
    (Ae.version = '18.3.1-next-f1338f8080-20240426'),
    Ae
  )
}
var Ta
function Df() {
  if (Ta) return Ci.exports
  Ta = 1
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)
      } catch (M) {
        console.error(M)
      }
  }
  return _(), (Ci.exports = Ff()), Ci.exports
}
var Ra
function Uf() {
  if (Ra) return zl
  Ra = 1
  var _ = Df()
  return (zl.createRoot = _.createRoot), (zl.hydrateRoot = _.hydrateRoot), zl
}
var Vf = Uf()
const Af = ({ onOpenForm: _ }) => {
    const [M, h] = Ce.useState(!1),
      [le, O] = Ce.useState(!1),
      U = () => {
        h(!0)
      },
      ee = () => {
        h(!1)
      },
      G = () => {
        O(!le)
      }
    return c.jsx('header', {
      className: 'header',
      children: c.jsxs('div', {
        className: 'wrapper-of-header',
        children: [
          c.jsxs('div', {
            className: 'header-left-side-content',
            children: [
              c.jsx('div', { className: 'logo-section' }),
              c.jsxs('nav', {
                className: `navigation ${le ? 'mobile-menu-open' : ''}`,
                children: [
                  c.jsx('a', {
                    href: '#',
                    className: 'nav-item',
                    onMouseEnter: U,
                    onMouseLeave: ee,
                    children: 'Товары',
                  }),
                  M &&
                    c.jsx('div', {
                      className: 'dropdown-menu',
                      onMouseEnter: U,
                      onMouseLeave: ee,
                      children: c.jsxs('ul', {
                        children: [
                          c.jsx('li', {
                            children: c.jsx('a', {
                              href: '#',
                              children: 'Флотомашины и чаны',
                            }),
                          }),
                          c.jsx('li', {
                            children: c.jsx('a', {
                              href: '#',
                              children: 'Автоматизация',
                            }),
                          }),
                          c.jsx('li', {
                            children: c.jsx('a', { href: '#', children: 'SN' }),
                          }),
                        ],
                      }),
                    }),
                  c.jsx('a', {
                    href: '#',
                    className: 'nav-item',
                    children: 'Услуги',
                  }),
                  c.jsx('a', {
                    href: '#',
                    className: 'nav-item',
                    children: 'Компания',
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'header-right-side-content',
            children: [
              c.jsx('button', {
                className: 'request-button-header',
                onClick: _,
                children: 'Оставить заявку',
              }),
              c.jsx('a', {
                href: '#',
                className: 'contacts-link',
                children: 'Контакты',
              }),
              c.jsx('div', {
                className: 'search-icon',
                children: c.jsxs('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: [
                    c.jsx('circle', { cx: '11', cy: '11', r: '8' }),
                    c.jsx('line', {
                      x1: '21',
                      y1: '21',
                      x2: '16.65',
                      y2: '16.65',
                    }),
                  ],
                }),
              }),
              c.jsxs('select', {
                className: 'language-select',
                defaultValue: 'EN',
                children: [
                  c.jsx('option', { value: 'EN', children: 'EN' }),
                  c.jsx('option', { value: 'RU', children: 'RU' }),
                ],
              }),
              c.jsxs('div', {
                className: 'burger-menu',
                onClick: G,
                children: [
                  c.jsx('div', { className: 'burger-line' }),
                  c.jsx('div', { className: 'burger-line' }),
                  c.jsx('div', { className: 'burger-line' }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  Ma = ({ mediaSrc: _, isVideo: M, altText: h, onOpenForm: le }) => {
    const [O, U] = Ce.useState(window.innerWidth),
      [ee, G] = Ce.useState(_),
      [$, ne] = Ce.useState(
        'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
      )
    return (
      Ce.useEffect(() => {
        const fe = () => {
          U(window.innerWidth)
        }
        return (
          window.addEventListener('resize', fe),
          () => {
            window.removeEventListener('resize', fe)
          }
        )
      }, []),
      Ce.useEffect(() => {
        O <= 530 && M ? G('./stock-video-mobile.mp4') : O > 530 && M && G(_),
          O <= 530
            ? ne(
                'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
              )
            : O <= 1024
            ? ne(
                'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. '
              )
            : ne(
                'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
              )
      }, [O, M, _]),
      c.jsx('div', {
        className: 'wrapper-for-banner',
        children: c.jsxs('div', {
          className: 'video-banner',
          children: [
            M
              ? c.jsxs('video', {
                  className: 'video',
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  children: [
                    c.jsx('source', { src: ee, type: 'video/mp4' }),
                    'Ваш браузер не поддерживает видео.',
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    c.jsx('img', { className: 'video', src: _, alt: h }),
                    c.jsxs('div', {
                      className: 'image-caption',
                      children: [
                        c.jsx('h3', { children: 'SN' }),
                        c.jsx('p', { children: $ }),
                      ],
                    }),
                  ],
                }),
            c.jsxs('div', {
              className: 'contact-block',
              children: [
                c.jsx('div', {
                  className: 'red-strip',
                  children: c.jsxs('button', {
                    className: 'contact-button',
                    onClick: le,
                    children: [
                      'Связаться с нами',
                      ' ',
                      c.jsx('img', {
                        className: 'contact-button-vector',
                        src: './Vector.svg',
                        alt: '',
                      }),
                    ],
                  }),
                }),
                c.jsx('div', { className: 'white-strip' }),
              ],
            }),
          ],
        }),
      })
    )
  },
  Bf = ({ onOpenForm: _ }) =>
    c.jsxs('div', {
      className: 'lorem-section-main',
      children: [
        c.jsx('div', {
          className: 'heading-section',
          children: c.jsxs('h1', {
            children: [
              c.jsx('span', { children: 'LOREM IPSUM,' }),
              c.jsx('br', {}),
              ' ',
              c.jsx('span', { children: 'LOREM IPSUM LOREM IPSUM' }),
            ],
          }),
        }),
        c.jsx('div', {
          className: 'main-text-section',
          children: c.jsx('p', {
            children:
              'Lorem Ipsum компании разработано с учётом анализа передовых технологий, использованием лучших решений и их качественной модернизации под потребности конкретного заказчика. Успешная реализация проектов на ведущих предприятиях горно-обогатительной промышленности базируется на многолетнем опыте и высоких компетенциях наших сотрудников.',
          }),
        }),
        c.jsxs('div', {
          className: 'full-screen-section',
          children: [
            c.jsx('div', {
              className: 'bigger-sub-section sub-section',
              children: c.jsxs('div', {
                className: 'contact-block',
                children: [
                  c.jsx('div', {
                    className: 'red-strip',
                    children: c.jsxs('button', {
                      className: 'contact-button',
                      onClick: _,
                      children: [
                        'Связаться с нами',
                        ' ',
                        c.jsx('img', {
                          className: 'contact-button-vector',
                          src: './Vector.svg',
                          alt: '',
                        }),
                      ],
                    }),
                  }),
                  c.jsx('div', { className: 'white-strip' }),
                ],
              }),
            }),
            c.jsx('div', {
              className: 'smaller-sub-section sub-section special',
              children: c.jsxs('div', {
                className: 'sub-section-inner-text',
                children: [
                  c.jsx('h2', { children: 'Lorem Ipsum' }),
                  c.jsx('p', {
                    children:
                      'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.',
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsxs('div', {
          className: 'full-screen-section',
          children: [
            c.jsx('div', {
              className: 'smaller-sub-section sub-section',
              children: c.jsxs('div', {
                className: 'sub-section-inner-text',
                children: [
                  c.jsx('h2', { children: 'Lorem Ipsum' }),
                  c.jsx('p', {
                    children:
                      'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.',
                  }),
                ],
              }),
            }),
            c.jsxs('div', {
              className: 'bigger-sub-section sub-section',
              children: [
                ' ',
                c.jsxs('div', {
                  className: 'contact-block contact-block-special',
                  children: [
                    c.jsx('div', {
                      className: 'red-strip',
                      children: c.jsxs('button', {
                        className: 'contact-button',
                        onClick: _,
                        children: [
                          'Связаться с нами',
                          ' ',
                          c.jsx('img', {
                            className: 'contact-button-vector',
                            src: './Vector.svg',
                            alt: '',
                          }),
                        ],
                      }),
                    }),
                    c.jsx('div', { className: 'white-strip' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Wf = ({ onOpenForm: _ }) =>
    c.jsx('div', {
      className: 'wrapper-realization',
      children: c.jsx('div', {
        className: 'main-realization-banner',
        children: c.jsxs('div', {
          className: 'realization-inner-content',
          children: [
            c.jsxs('h2', {
              children: [
                'Мы реализуем под ключ',
                c.jsx('br', {}),
                ' проекты любой сложности',
              ],
            }),
            c.jsx('button', { onClick: _, children: 'Оставить заявку' }),
          ],
        }),
      }),
    }),
  Hf = ({ onOpenForm: _ }) =>
    c.jsxs('footer', {
      className: 'footer',
      children: [
        c.jsxs('div', {
          className: 'left-block',
          children: [
            c.jsxs('div', {
              className: 'column',
              children: [
                c.jsx('h3', { children: 'Товары' }),
                c.jsxs('div', {
                  className: 'section',
                  children: [
                    c.jsx('h4', { children: 'Флотомашины и чаны' }),
                    c.jsxs('ul', {
                      children: [
                        c.jsx('li', { children: 'МП' }),
                        c.jsx('li', { children: 'ЧП' }),
                        c.jsx('li', { children: 'ЧКЭ' }),
                        c.jsx('li', { children: 'Нестандартное Lorem Ipsum' }),
                      ],
                    }),
                  ],
                }),
                c.jsxs('div', {
                  className: 'section',
                  children: [
                    c.jsx('h4', { children: 'Автоматизация' }),
                    c.jsxs('div', {
                      className: 'subsection',
                      children: [
                        c.jsx('h5', { children: 'Локальные АСУ' }),
                        c.jsxs('ul', {
                          children: [
                            c.jsx('li', { children: 'РУВ' }),
                            c.jsx('li', { children: 'SD' }),
                            c.jsx('li', { children: 'SC' }),
                            c.jsx('li', { children: 'SK' }),
                            c.jsx('li', { children: 'SP' }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx('div', {
                      className: 'subsection',
                      children: c.jsx('h5', { children: 'АСУТП' }),
                    }),
                    c.jsxs('div', {
                      className: 'subsection',
                      children: [
                        c.jsx('h5', { children: 'Интеллектуальные системы' }),
                        c.jsxs('ul', {
                          children: [
                            c.jsx('li', { children: 'SN' }),
                            c.jsx('li', { children: 'SV' }),
                            c.jsx('li', { children: 'SP' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs('div', {
              className: 'column',
              children: [
                c.jsx('h3', { children: 'Услуги' }),
                c.jsx('div', {
                  className: 'section',
                  children: c.jsxs('ul', {
                    children: [
                      c.jsx('li', {
                        children: 'Технологические исследования и аудит',
                      }),
                      c.jsx('li', { children: 'Проектирование' }),
                      c.jsx('li', { children: 'Строительно-монтажные работы' }),
                    ],
                  }),
                }),
                c.jsxs('div', {
                  className: 'section',
                  children: [
                    c.jsx('h4', { children: 'Сервисное сопровождение' }),
                    c.jsxs('ul', {
                      children: [
                        c.jsx('li', { children: 'Сервис' }),
                        c.jsx('li', { children: 'Технологическая поддержка' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs('div', {
              className: 'column',
              children: [
                c.jsx('h3', { children: 'Компания' }),
                c.jsx('div', {
                  className: 'section',
                  children: c.jsxs('ul', {
                    className: 'section-special',
                    children: [
                      c.jsx('li', { children: 'Новости и события' }),
                      c.jsx('li', { children: 'Проекты' }),
                      c.jsx('li', { children: 'Карьера' }),
                      c.jsx('li', { children: 'Отзывы заказчиков' }),
                      c.jsx('li', { children: 'Документы' }),
                    ],
                  }),
                }),
                c.jsx('div', {
                  className: 'section',
                  children: c.jsx('h4', { children: 'Контакты' }),
                }),
              ],
            }),
          ],
        }),
        c.jsxs('div', {
          className: 'right-block',
          children: [
            c.jsx('div', {
              className: 'map',
              children: c.jsx('iframe', {
                title: 'Yandex Map',
                src: 'https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&source=constructor',
                width: '100%',
                height: '100%',
                frameBorder: '0',
              }),
            }),
            c.jsxs('div', {
              className: 'contact-info',
              children: [
                c.jsx('div', {
                  className: 'phone',
                  children: '+7 (---) 5-5-05-11',
                }),
                c.jsx('div', { className: 'email', children: 'info@info.ru' }),
              ],
            }),
            c.jsx('button', {
              className: 'request-button',
              onClick: _,
              children: 'Оставить заявку',
            }),
          ],
        }),
      ],
    }),
  $f = ({ onClose: _ }) => {
    const [M, h] = Ce.useState(''),
      [le, O] = Ce.useState(''),
      [U, ee] = Ce.useState(''),
      [G, $] = Ce.useState(''),
      [ne, fe] = Ce.useState([]),
      [Z, X] = Ce.useState(''),
      [Le, xe] = Ce.useState(''),
      [J, Q] = Ce.useState(!1),
      Be = (A) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A),
      Ze = (A) => {
        const de = A.target.value
        O(de), Be(de) ? X('') : X('Некорректный email')
      },
      We = (A) => {
        const de = Array.from(A.target.files)
        if (de.length > 3) {
          xe('Максимум 3 файла')
          return
        }
        const Te = de.filter((rn) =>
          rn.size > 5 * 1024 * 1024
            ? (xe('Слишком большой объем файла (>5MB)'), !1)
            : ['image/jpeg', 'image/png'].includes(rn.type)
            ? !0
            : (xe('Неправильный формат файла'), !1)
        )
        Te.length > 0 && (fe(Te), xe(''))
      },
      ge = (A) => {
        A.preventDefault(),
          Be(le) && ne.length <= 3
            ? (console.log('Форма отправлена:', {
                name: M,
                email: le,
                phone: U,
                description: G,
                files: ne,
              }),
              Q(!0),
              setTimeout(() => {
                Q(!1), _()
              }, 2e3))
            : console.log('Ошибка валидации')
      },
      He = (A) => {
        A.target === A.currentTarget && _()
      }
    return c.jsx('div', {
      className: 'request-form-overlay',
      onClick: He,
      children: c.jsxs('div', {
        className: 'request-form',
        children: [
          c.jsx('button', {
            className: 'close-button',
            onClick: _,
            children: c.jsx('svg', {
              width: '12',
              height: '12',
              viewBox: '0 0 12 12',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: c.jsx('path', {
                d: 'M1 1L11 11M11 1L1 11',
                stroke: 'white',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }),
            }),
          }),
          J
            ? c.jsx('div', {
                className: 'success-message',
                children: c.jsx('p', {
                  children: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
                }),
              })
            : c.jsxs('form', {
                onSubmit: ge,
                children: [
                  c.jsx('p', {
                    className: 'form-text',
                    children:
                      'Успех начинается с правильных решений. Оставьте здесь свои контакты, и мы свяжемся с вами, чтобы предложить оптимальную технологию по увеличению процента извлекаемости полезного в конечный продукт на вашем предприятии.',
                  }),
                  c.jsx('input', {
                    type: 'text',
                    placeholder: 'Имя*',
                    value: M,
                    onChange: (A) => h(A.target.value),
                    required: !0,
                  }),
                  c.jsx('input', {
                    type: 'email',
                    placeholder: 'E-Mail*',
                    value: le,
                    onChange: Ze,
                    required: !0,
                  }),
                  Z &&
                    c.jsx('span', { className: 'error-message', children: Z }),
                  c.jsx('input', {
                    type: 'tel',
                    placeholder: 'Телефон*',
                    value: U,
                    onChange: (A) => ee(A.target.value),
                    required: !0,
                  }),
                  c.jsx('textarea', {
                    placeholder: 'Описание проекта*',
                    value: G,
                    onChange: (A) => $(A.target.value),
                    required: !0,
                    style: { height: '39px', minHeight: '39px' },
                  }),
                  c.jsxs('div', {
                    className: 'file-input-container',
                    children: [
                      c.jsx('input', {
                        type: 'file',
                        id: 'file-input',
                        onChange: We,
                        multiple: !0,
                        accept: '.jpg, .png',
                        style: { display: 'none' },
                      }),
                      c.jsxs('label', {
                        htmlFor: 'file-input',
                        className: 'file-input-label',
                        children: [
                          ne.length > 0
                            ? `Загружено ${ne.length} файл(ов)`
                            : 'Приложить файлы (До Трех Файлов)',
                          c.jsx('span', {
                            className: 'paperclip-icon',
                            children: '📎',
                          }),
                        ],
                      }),
                      Le &&
                        c.jsx('span', {
                          className: 'error-message',
                          children: Le,
                        }),
                    ],
                  }),
                  c.jsxs('p', {
                    className: 'privacy-policy',
                    children: [
                      'Отправляя эту форму, я принимаю',
                      ' ',
                      c.jsx('a', {
                        href: '/privacy-policy',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: 'политику конфиденциальности',
                      }),
                      ' ',
                      'этого сайта.',
                    ],
                  }),
                  c.jsx('button', {
                    type: 'submit',
                    className: 'submit-button',
                    disabled: !Be(le) || ne.length > 3,
                    children: 'Отправить',
                  }),
                ],
              }),
        ],
      }),
    })
  },
  Qf = () => {
    const [_, M] = Ce.useState(!1)
    return c.jsx(Ce.StrictMode, {
      children: c.jsxs(c.Fragment, {
        children: [
          c.jsx(Af, { onOpenForm: () => M(!0) }),
          c.jsx(Ma, {
            mediaSrc: '',
            isVideo: !0,
            onOpenForm: () => M(!0),
          }),
          c.jsx(Bf, { onOpenForm: () => M(!0) }),
          c.jsx(Ma, {
            mediaSrc: './picture01.webp',
            isVideo: !1,
            altText: 'Описание изображения',
            onOpenForm: () => M(!0),
          }),
          c.jsx(Wf, { onOpenForm: () => M(!0) }),
          c.jsx(Hf, { onOpenForm: () => M(!0) }),
          _ && c.jsx($f, { onClose: () => M(!1) }),
        ],
      }),
    })
  }
Vf.createRoot(document.getElementById('root')).render(c.jsx(Qf, {}))
