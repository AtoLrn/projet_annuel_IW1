<<<<<<< HEAD
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.6.0",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function j(e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function Me(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function xt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = qt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
var statusUser = {
  user: "Utilisateur",
  admin: "Adminnistrateur",
  chief: "Cuisinier"
};

var deleteUserById = function deleteUserById(id) {
  fetch("http://localhost/delete-user?id=".concat(id), {
    method: 'DELETE'
  }).then(function (r) {
    tab = $('#list-table').DataTable();
    getList(tab);
  });
};

var getUsers = function getUsers(tab) {
  fetch('http://localhost/get-users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    setTableUser(data, tab);
  })["catch"](function (error) {
    console.log('Erreur : ' + error);
  });
};

var getUserById = function getUserById(userId) {
  var form = Object.assign({}, {
    id: userId
  });
  fetch('http://localhost/get-user', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(form)
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    data = data[0];
    setAsideUserInfo(data);
  })["catch"](function (error) {
    console.log('Erreur : ' + error);
  });
};

var setTableUser = function setTableUser(data, tab) {
  tab.clear();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    var _loop = function _loop() {
      var row = _step.value;
      var cols = [];

      for (var col in row) {
        if (col != 'user_id') {
          cols.push(row[col]);
        }
      }

      var rowNode = tab.row.add(cols).draw().node();
      $(rowNode).click(function () {
        getUserById(row['user_id']);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var setAsideUserInfo = function setAsideUserInfo(data) {
  $('.aside-info').removeClass("show");
  var info = $('#infos');
  info.html("");
  info.append("<p>".concat(data.user_lastname, "</p>"));
  info.append("<p>".concat(data.user_firstname, "</p>"));
  info.append("<p>".concat(data.user_email, "</p>"));
  info.append("<p>".concat(statusUser[data.user_status], "</p>"));
  var btns = $('#btns');
  btns.html("");
  btns.append("<button class='btn btn-pink little'> Changer status </button>");
  btns.append("<button class='btn btn-danger little' onclick='displayPopUp(".concat(data.user_id, ")'> Supprimer </button>"));
  $('.aside-info').addClass("show");
};

$(document).ready(function () {
  $('.burger-menu').click(function () {
    $('.navbar').toggleClass('open');
  });

  if ($('#list-table')[0]) {
    //init datatables
    tab = $('#list-table').DataTable({
      responsive: true,
      autoWidth: false,
      lengthChange: false,
      bInfo: false,
      language: {
        'paginate': {
          'previous': '<img src="assets/img/logo/arrow-list.svg">',
          'next': '<img src="assets/img/logo/arrow-list.svg">'
        },
        "lengthMenu": "Display -- records per page",
        "zeroRecords": "Aucun éléments trouvés",
        "infoEmpty": "No records available"
      }
    }); // search custom input

    $('#search').keyup(function () {
      tab.search(this.value).draw();
    });
    getList(tab);
  }
});

var closeMenu = function closeMenu() {
  $('.aside-info').removeClass("show");
};

var getList = function getList(tab) {
  for (var _i2 = 0, _arr = ['user', 'article', 'comment', 'certification']; _i2 < _arr.length; _i2++) {
    var i = _arr[_i2];

    if ($('#list-table').hasClass(i)) {
      window["get" + i[0].toUpperCase() + i.substring(1) + "s"](tab);
    }
  }
};

var displayPopUp = function displayPopUp(id) {
  $('#pop-up').addClass('show');
  $('#delete').click(function () {
    closePopUp();
    deleteUserById(id);
  });
  $('#cancel').click(closePopUp);
};

var closePopUp = function closePopUp() {
  $('#pop-up').removeClass('show');
};

$(document).ready(function () {
  var registerButton = $('#registerButton');
  var registerForm = $('#registerForm');
  var loginButton = $('#loginButton');
  var loginForm = $('#loginForm');
  var params = new URL(document.location).searchParams;
  var formType = params.get('formType');

  if (formType === 'register') {
    registerButton.addClass('selected');
    loginForm.addClass('hidden');
    registerForm.addClass('smooth-div');
  } else {
    loginButton.addClass('selected');
    registerForm.addClass('hidden');
    loginForm.addClass('smooth-div');
  }

  registerButton.click(function () {
    displayForm(registerButton, registerForm, loginButton, loginForm);
  });
  loginButton.click(function () {
    displayForm(registerButton, registerForm, loginButton, loginForm);
  });
});

var displayForm = function displayForm(registerButton, registerForm, loginButton, loginForm) {
  loginForm.toggleClass('hidden');
  loginButton.toggleClass('selected');
  registerForm.toggleClass('hidden');
  registerButton.toggleClass('selected');
  loginForm.toggleClass('smooth-div');
  registerForm.toggleClass('smooth-div');
};

$(document).ready(function () {
  $('#left').click(function () {
    moveToLeft();
  });
  $('#right').click(function () {
    moveToRight();
  });
});

var getValue = function getValue() {
  var container = $('#recette-container');
  return parseInt(container.attr("data-index"));
};

var moveToLeft = function moveToLeft() {
  var container = $('#recette-container');
  container.attr("data-index", getValue() - 1 > 0 ? getValue() - 1 : 0);
  hideImage();
};

var moveToRight = function moveToRight() {
  var container = $('#recette-container');
  container.attr("data-index", getValue() + 1 > getAllImg().length - 1 ? getAllImg().length - 1 : getValue() + 1);
  hideImage();
};

var getAllImg = function getAllImg() {
  return $(".recette-img");
};

var hideImage = function hideImage() {
  var img = getAllImg();
  var selected = getValue();
  img.each(function (i, t) {
    if (i < selected) {
      $(t).addClass('hidden-recipe');
      $(t).css({
        transform: "translateX(-".concat(100 * (selected - 1), "% + -").concat((selected - 1) * 5, "em) translateY(10%)")
      });
    } else {
      $(t).removeClass('hidden-recipe');
      $(t).css({
        transform: "translateX(calc(-".concat(100 * selected, "% + -").concat(selected * 5, "em))")
      });
    }
  });
};

$(document).ready(function () {
  $('.burger-menu').click(function () {
    $('.navbar').toggleClass('open');
    $('.navbar-front').toggleClass('open');
  });
});
=======
function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e6){throw _e6;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e7){didErr=true;err=_e7;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */!function(e,t){"use strict";"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e);}:t(e);}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e);}:function(e){return t.concat.apply([],e);},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function m(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item;},x=function x(e){return null!=e&&e===e.window;},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c){(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);}n.head.appendChild(o).parentNode.removeChild(o);}function w(e){return null==e?e+"":"object"==_typeof(e)||"function"==typeof e?n[o.call(e)]||"object":_typeof(e);}var f="3.6.0",S=function S(e,t){return new S.fn.init(e,t);};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e);}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function toArray(){return s.call(this);},get:function get(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e];},pushStack:function pushStack(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t;},each:function each(e){return S.each(this,e);},map:function map(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e);}));},slice:function slice(){return this.pushStack(s.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},even:function even(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2;}));},odd:function odd(){return this.pushStack(S.grep(this,function(e,t){return t%2;}));},eq:function eq(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[]);},end:function end(){return this.prevObject||this.constructor();},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==_typeof(a)||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++){if(null!=(e=arguments[s]))for(t in e){r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));}}return a;},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(e){throw new Error(e);},noop:function noop(){},isPlainObject:function isPlainObject(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l);},isEmptyObject:function isEmptyObject(e){var t;for(t in e){return!1;}return!0;},globalEval:function globalEval(e,t,n){b(e,{nonce:t&&t.nonce},n);},each:function each(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++){if(!1===t.call(e[r],r,e[r]))break;}}else for(r in e){if(!1===t.call(e[r],r,e[r]))break;}return e;},makeArray:function makeArray(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n;},inArray:function inArray(e,t,n){return null==t?-1:i.call(t,e,n);},merge:function merge(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++){e[i++]=t[r];}return e.length=i,e;},grep:function grep(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++){!t(e[i],i)!==a&&r.push(e[i]);}return r;},map:function map(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++){null!=(i=t(e[o],o,n))&&a.push(i);}else for(o in e){null!=(i=t(e[o],o,n))&&a.push(i);}return g(a);},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase();});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date(),p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function j(e,t){return e===t&&(l=!0),0;},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function P(e,t){for(var n=0,r=e.length;n<r;n++){if(e[n]===t)return n;}return-1;},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function ne(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320));},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function ie(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;},oe=function oe(){T();},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase();},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType;}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t));}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]){;}e.length=n-1;}};}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n;}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n;}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n;}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--){l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);}c=l.join(",");}try{return H.apply(n,f.querySelectorAll(c)),n;}catch(e){N(t,!0);}finally{s===S&&e.removeAttribute("id");}}}return g(t.replace($,"$1"),e,n,r);}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n;};}function le(e){return e[S]=!0,e;}function ce(e){var t=C.createElement("fieldset");try{return!!e(t);}catch(e){return!1;}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--){b.attrHandle[n[r]]=t;}}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling){if(n===t)return-1;}return e?1:-1;}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t;};}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n;};}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t;};}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--){e[n=r[i]]&&(e[n]=!(t[n]=e[n]));}});});}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e;}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML");},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length;}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className");}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length;}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length;}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t;};},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[];}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n;};},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++]){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];}}return[];}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0;}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n);}return r;}return o;},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e);},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]");}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:");})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F);}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));}:function(e,t){if(t)while(t=t.parentNode){if(t===e)return!0;}return!1;},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1);}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode){a.unshift(n);}n=t;while(n=n.parentNode){s.unshift(n);}while(a[r]===s[r]){r++;}return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0;}),C;},se.matches=function(e,t){return se(e,null,null,t);},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n;}catch(e){N(t,!0);}return 0<se(t,C,null,[e]).length;},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t);},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null;},se.escape=function(e){return(e+"").replace(re,ie);},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++]){t===e[i]&&(r=n.push(i));}while(r--){e.splice(n[r],1);}}return u=null,e;},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling){n+=o(e);}}else if(3===i||4===i)return e.nodeValue;}else while(t=e[r++]){n+=o(t);}return n;},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4);},CHILD:function CHILD(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e;},PSEUDO:function PSEUDO(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));}},filter:{TAG:function TAG(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0;}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;};},CLASS:function CLASS(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"");});},ATTR:function ATTR(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"));};},CHILD:function CHILD(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode;}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l]){if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;}u=l="only"===h&&!u&&"nextSibling";}return!0;}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop()){if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break;}}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop()){if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;}return(d-=v)===g||d%g==0&&0<=d/g;}};},PSEUDO:function PSEUDO(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--){e[n=P(e,r[i])]=!(t[n]=r[i]);}}):function(e){return a(e,0,t);}):a;}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--){(i=o[a])&&(e[a]=!(t[a]=i));}}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop();};}),has:le(function(t){return function(e){return 0<se(t,e).length;};}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t);};}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-");}while((e=e.parentNode)&&1===e.nodeType);return!1;};}),target:function target(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id;},root:function root(e){return e===a;},focus:function focus(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex);},enabled:ge(!1),disabled:ge(!0),checked:function checked(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected;},selected:function selected(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected;},empty:function empty(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6)return!1;}return!0;},parent:function parent(e){return!b.pseudos.empty(e);},header:function header(e){return J.test(e.nodeName);},input:function input(e){return Q.test(e.nodeName);},button:function button(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t;},text:function text(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());},first:ve(function(){return[0];}),last:ve(function(e,t){return[t-1];}),eq:ve(function(e,t,n){return[n<0?n+t:n];}),even:ve(function(e,t){for(var n=0;n<t;n+=2){e.push(n);}return e;}),odd:ve(function(e,t){for(var n=1;n<t;n+=2){e.push(n);}return e;}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;){e.push(r);}return e;}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;){e.push(r);}return e;})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){b.pseudos[e]=de(e);}for(e in{submit:!0,reset:!0}){b.pseudos[e]=he(e);}function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++){r+=e[t].value;}return r;}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u]){if(1===e.nodeType||f)return s(e,t,n);}return!1;}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u]){if((1===e.nodeType||f)&&s(e,t,n))return!0;}}else while(e=e[u]){if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0;}}return!1;};}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--){if(!i[r](e,t,n))return!1;}return!0;}:i[0];}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++){(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));}return a;}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++){se(e,t[r],n);}return n;}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--){(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));}}if(e){if(y||d){if(y){i=[],o=p.length;while(o--){(a=p[o])&&i.push(f[o]=a);}y(null,p=[],i,r);}o=p.length;while(o--){(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a));}}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p);});}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i;},a,!0),l=be(function(e){return-1<P(i,e);},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r;}];s<r;s++){if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++){if(b.relative[e[n].type])break;}return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e));}c.push(t);}}return we(c);}return me.prototype=b.filters=b.pseudos,b.setFilters=new me(),h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter){!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));}if(!n)break;}return t?a.length:a?se.error(e):x(e,s).slice(0);},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--){(a=Ee(t[n]))[S]?i.push(a):o.push(a);}(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function r(e,t,n,_r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++]){if(s(o,t||C,n)){_r.push(o);break;}}i&&(k=h);}m&&((o=!s&&o)&&u--,e&&c.push(o));}if(u+=l,m&&l!==u){a=0;while(s=y[a++]){s(c,f,t,n);}if(e){if(0<u)while(l--){c[l]||f[l]||(f[l]=q.call(_r));}f=Te(f);}H.apply(_r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(_r);}return i&&(k=h,w=p),c;},m?le(r):r))).selector=e;}return a;},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length);}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break;}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n;},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"));}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href");})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2);}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value");})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;}),ce(function(e){return null==e.getAttribute("disabled");})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null;}),se;}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function h(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType){if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e);}}return r;},T=function T(e,t){for(var n=[];e;e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e);}return n;},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r;}):n.nodeType?S.grep(e,function(e){return e===n!==r;}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r;}):S.filter(n,e,r);}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType;}));},S.fn.extend({find:function find(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++){if(S.contains(i[t],this))return!0;}}));for(n=this.pushStack([]),t=0;t<r;t++){S.find(e,i[t],n);}return 1<r?S.uniqueSort(n):n;},filter:function filter(e){return this.pushStack(j(this,e||[],!1));},not:function not(e){return this.pushStack(j(this,e||[],!0));},is:function is(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length;}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t){m(this[r])?this[r](t[r]):this.attr(r,t[r]);}return this;}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this;}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this);}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType){;}return e;}S.fn.extend({has:function has(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++){if(S.contains(this,t[e]))return!0;}});},closest:function closest(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++){for(n=this[r];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break;}}}return this.pushStack(1<o.length?S.uniqueSort(o):o);},index:function index(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function add(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))));},addBack:function addBack(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));}}),S.each({parent:function parent(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null;},parents:function parents(e){return h(e,"parentNode");},parentsUntil:function parentsUntil(e,t,n){return h(e,"parentNode",n);},next:function next(e){return O(e,"nextSibling");},prev:function prev(e){return O(e,"previousSibling");},nextAll:function nextAll(e){return h(e,"nextSibling");},prevAll:function prevAll(e){return h(e,"previousSibling");},nextUntil:function nextUntil(e,t,n){return h(e,"nextSibling",n);},prevUntil:function prevUntil(e,t,n){return h(e,"previousSibling",n);},siblings:function siblings(e){return T((e.parentNode||{}).firstChild,e);},children:function children(e){return T(e.firstChild);},contents:function contents(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes));}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n);};});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e;}function M(e){throw e;}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r));}catch(e){n.apply(void 0,[e]);}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0;}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function c(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length){!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1);}}r.memory||(t=!1),i=!1,a&&(s=t?[]:"");},f={add:function add(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t);});}(arguments),t&&!i&&c()),this;},remove:function remove(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n))){s.splice(n,1),n<=l&&l--;}}),this;},has:function has(e){return e?-1<S.inArray(e,s):0<s.length;},empty:function empty(){return s&&(s=[]),this;},disable:function disable(){return a=u=[],s=t="",this;},disabled:function disabled(){return!s;},lock:function lock(){return a=u=[],t||i||(s=t=""),this;},locked:function locked(){return!!a;},fireWith:function fireWith(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this;},fire:function fire(){return f.fireWith(this,arguments),this;},fired:function fired(){return!!o;}};return f;},S.extend({Deferred:function Deferred(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function state(){return i;},always:function always(){return s.done(arguments).fail(arguments),this;},"catch":function _catch(e){return a.then(null,e);},pipe:function pipe(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments);});}),i=null;}).promise();},then:function then(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function e(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==_typeof(e)||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r));}},t=s?e:function(){try{e();}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r));}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t));};}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M));}).promise();},promise:function promise(e){return null!=e?S.extend(e,a):a;}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r;},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this;},s[t[0]+"With"]=n.fireWith;}),a.promise(s),e&&e.call(s,s),s;},when:function when(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function a(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i);};};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--){I(i[t],a(t),o.reject);}return o.promise();}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t);},S.readyException=function(e){C.setTimeout(function(){throw e;});};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready();}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e);}),this;},S.extend({isReady:!1,readyWait:1,ready:function ready(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S]);}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function $(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n){$(e,t,s,n[s],!0,o,a);}else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function t(e,_t2,n){return l.call(S(e),n);})),t))for(;s<u;s++){t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));}return i?e:l?t.call(e):u?t(e[0],n):o;},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase();}function X(e){return e.replace(_,"ms-").replace(z,U);}var V=function V(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType;};function G(){this.expando=S.expando+G.uid++;}G.uid=1,G.prototype={cache:function cache(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t;},set:function set(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t){i[X(r)]=t[r];}return i;},get:function get(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)];},access:function access(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t);},remove:function remove(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--){delete r[t[n]];}}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function hasData(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t);}};var Y=new G(),Q=new G(),J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i);}catch(e){}Q.set(e,t,n);}else n=void 0;return n;}S.extend({hasData:function hasData(e){return Q.hasData(e)||Y.hasData(e);},data:function data(e,t,n){return Q.access(e,t,n);},removeData:function removeData(e,t){Q.remove(e,t);},_data:function _data(e,t,n){return Y.access(e,t,n);},_removeData:function _removeData(e,t){Y.remove(e,t);}}),S.fn.extend({data:function data(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--){a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));}Y.set(o,"hasDataAttrs",!0);}return i;}return"object"==_typeof(n)?this.each(function(){Q.set(this,n);}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e);});},null,e,1<arguments.length,null,!0);},removeData:function removeData(e){return this.each(function(){Q.remove(this,e);});}}),S.extend({queue:function queue(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[];},dequeue:function dequeue(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t);},o)),!r&&o&&o.empty.fire();},_queueHooks:function _queueHooks(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n]);})});}}),S.fn.extend({queue:function queue(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t);});},dequeue:function dequeue(e){return this.each(function(){S.dequeue(this,e);});},clearQueue:function clearQueue(e){return this.queue(e||"fx",[]);},promise:function promise(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function s(){--r||i.resolveWith(o,[o]);};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--){(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));}return s(),i.promise(t);}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function ie(e){return S.contains(e.ownerDocument,e);},oe={composed:!0};re.getRootNode&&(ie=function ie(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument;});var ae=function ae(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display");};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur();}:function(){return S.css(e,t,"");},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--){S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;}c*=2,S.style(e,t,c+l),n=n||[];}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i;}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++){(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));}for(c=0;c<f;c++){null!=l[c]&&(e[c].style.display=l[c]);}return e;}S.fn.extend({show:function show(){return le(this,!0);},hide:function hide(){return le(this);},toggle:function toggle(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide();});}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n;}function ye(e,t){for(var n=0,r=e.length;n<r;n++){Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"));}}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++){if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--){a=a.lastChild;}S.merge(p,a.childNodes),(a=f.firstChild).textContent="";}else p.push(t.createTextNode(o));}f.textContent="",d=0;while(o=p[d++]){if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++]){he.test(o.type||"")&&n.push(o);}}}return f;}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0;}function Te(){return!1;}function Ce(e,t){return e===function(){try{return E.activeElement;}catch(e){}}()==("focus"===t);}function Ee(e,t,n,r,i,o){var a,s;if("object"==_typeof(t)){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t){Ee(e,s,n,r,t[s],o);}return e;}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function i(e){return S().off(e),a.apply(this,arguments);}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n);});}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function handler(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value;}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation());}})):void 0===Y.get(e,i)&&S.event.add(e,i,we);}S.event={global:{},add:function add(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0;}),l=(e=(e||"").match(P)||[""]).length;while(l--){d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0);}}},remove:function remove(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--){if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--){c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));}a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d]);}else for(d in u){S.event.remove(e,d+t[l],n,r,!0);}}S.isEmptyObject(u)&&Y.remove(e,"handle events");}},dispatch:function dispatch(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++){s[t]=arguments[t];}if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped()){u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));}}return c.postDispatch&&c.postDispatch.call(this,u),u.result;}},handlers:function handlers(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this){if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++){void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);}o.length&&s.push({elem:l,handlers:o});}}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s;},addProp:function addProp(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent);}:function(){if(this.originalEvent)return this.originalEvent[t];},set:function set(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e});}});},fix:function fix(e){return e[S.expando]?e:new S.Event(e);},special:{load:{noBubble:!0},click:{setup:function setup(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1;},trigger:function trigger(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0;},_default:function _default(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a");}},beforeunload:{postDispatch:function postDispatch(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0;},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault();},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation();},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation();}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function setup(){return Se(this,e,Ce),!1;},trigger:function trigger(){return Se(this,e),!0;},_default:function _default(){return!0;},delegateType:t};}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function handle(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t;}};}),S.fn.extend({on:function on(e,t,n,r){return Ee(this,e,t,n,r);},one:function one(e,t,n,r){return Ee(this,e,t,n,r,1);},off:function off(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==_typeof(e)){for(i in e){this.off(i,t,e[i]);}return this;}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t);});}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e;}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e;}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e;}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s){for(n=0,r=s[i].length;n<r;n++){S.event.add(t,i,s[i][n]);}}Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a));}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o);});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++){u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);}if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++){u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l));}}return n;}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++){n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));}return e;}S.extend({htmlPrefilter:function htmlPrefilter(e){return e;},clone:function clone(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++){s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);}if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++){Le(o[r],a[r]);}else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c;},cleanData:function cleanData(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++){if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events){i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);}n[Y.expando]=void 0;}n[Q.expando]&&(n[Q.expando]=void 0);}}}}),S.fn.extend({detach:function detach(e){return Oe(this,e,!0);},remove:function remove(e){return Oe(this,e);},text:function text(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);});},null,e,arguments.length);},append:function append(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e);});},prepend:function prepend(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild);}});},before:function before(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);});},after:function after(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);});},empty:function empty(){for(var e,t=0;null!=(e=this[t]);t++){1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");}return this;},clone:function clone(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t);});},html:function html(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++){1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);}t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length);},replaceWith:function replaceWith(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this));},n);}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++){t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());}return this.pushStack(n);};});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function Re(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e);},Me=function Me(e,t,n){var r,i,o={};for(i in t){o[i]=e.style[i],e.style[i]=t[i];}for(i in r=n.call(e),t){e.style[i]=o[i];}return r;},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a;}function Fe(e,t){return{get:function get(){if(!e())return(this.get=t).apply(this,arguments);delete this.get;}};}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null;}}function t(e){return Math.round(parseFloat(e));}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function boxSizingReliable(){return e(),r;},pixelBoxStyles:function pixelBoxStyles(){return e(),o;},pixelPosition:function pixelPosition(){return e(),n;},reliableMarginLeft:function reliableMarginLeft(){return e(),s;},scrollboxSize:function scrollboxSize(){return e(),i;},reliableTrDimensions:function reliableTrDimensions(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a;}}));}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--){if((e=Be[n]+t)in $e)return e;}}(e)||e);}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t;}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2){"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));}return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u;}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto";}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px";}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i);}S.extend({cssHooks:{opacity:{get:function get(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function style(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=_typeof(n))&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n));}},css:function css(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i;}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function get(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n);});},set:function set(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s);}};}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left;}))+"px";}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function expand(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++){n[i+ne[t]+o]=r[t]||r[t-2]||r[0];}return n;}},"margin"!==i&&(S.cssHooks[i+o].set=Ye);}),S.fn.extend({css:function css(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++){o[t[a]]=S.css(e,t[a],!1,r);}return o;}return void 0!==n?S.style(e,t,n):S.css(e,t);},e,t,1<arguments.length);}}),((S.Tween=Ke).prototype={constructor:Ke,init:function init(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px");},cur:function cur(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this);},run:function run(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this;}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function get(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0;},set:function set(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit);}}}).scrollTop=Ke.propHooks.scrollLeft={set:function set(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},S.easing={linear:function linear(e){return e;},swing:function swing(e){return .5-Math.cos(e*Math.PI)/2;},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick());}function at(){return C.setTimeout(function(){Ze=void 0;}),Ze=Date.now();}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t){i["margin"+(n=ne[r])]=i["padding"+n]=e;}return t&&(i.opacity=i.width=e),i;}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++){if(r=i[o].call(n,t,e))return r;}}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem;}),u=function u(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++){l.tweens[r].run(n);}return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1);},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function createTween(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n;},stop:function stop(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++){l.tweens[t].run(1);}return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this;}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e){if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&("expand"in a))for(n in o=a.expand(o),delete e[r],o){(n in e)||(e[n]=o[n],t[n]=i);}else t[r]=i;}}(c,l.opts.specialEasing);r<i;r++){if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;}return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l;}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n;}]},tweener:function tweener(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++){n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t);}},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s();}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire();});})),t){if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0;}d[r]=v&&v[r]||S.style(e,r);}}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l;}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2];})),u=!1,d){u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d){S.style(e,r,d[r]);}})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0));}}],prefilter:function prefilter(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e);}}),S.speed=function(e,t,n){var r=e&&"object"==_typeof(e)?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue);},r;},S.fn.extend({fadeTo:function fadeTo(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r);},animate:function animate(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function a(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0);};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a);},stop:function stop(i,e,o){var a=function a(e){var t=e.stop;delete e.stop,t(o);};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r){r[t]&&r[t].stop&&it.test(t)&&a(r[t]);}for(t=n.length;t--;){n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));}!e&&o||S.dequeue(this,i);});},finish:function finish(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;){i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));}for(e=0;e<o;e++){n[e]&&n[e].finish&&n[e].finish.call(this);}delete t.finish;});}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n);};}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n);};}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++){(e=n[t])()||n[t]!==e||n.splice(t--,1);}n.length||S.fx.stop(),Ze=void 0;},S.fx.timer=function(e){S.timers.push(e),S.fx.start();},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot());},S.fx.stop=function(){et=null;},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n);};});},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function attr(e,t){return $(this,S.attr,e,t,1<arguments.length);},removeAttr:function removeAttr(e){return this.each(function(){S.removeAttr(this,e);});}}),S.extend({attr:function attr(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r);},attrHooks:{type:{set:function set(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t;}}}},removeAttr:function removeAttr(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++]){e.removeAttribute(n);}}}),ct={set:function set(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n;}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r;};});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ");}function gt(e){return e.getAttribute&&e.getAttribute("class")||"";}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[];}S.fn.extend({prop:function prop(e,t){return $(this,S.prop,e,t,1<arguments.length);},removeProp:function removeProp(e){return this.each(function(){delete this[S.propFix[e]||e];});}}),S.extend({prop:function prop(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t];},propHooks:{tabIndex:{get:function get(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function get(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null;},set:function set(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this;}),S.fn.extend({addClass:function addClass(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)));});if((e=vt(t)).length)while(n=this[u++]){if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++]){r.indexOf(" "+o+" ")<0&&(r+=o+" ");}i!==(s=ht(r))&&n.setAttribute("class",s);}}return this;},removeClass:function removeClass(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)));});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++]){if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++]){while(-1<r.indexOf(" "+o+" ")){r=r.replace(" "+o+" "," ");}}i!==(s=ht(r))&&n.setAttribute("class",s);}}return this;},toggleClass:function toggleClass(i,t){var o=_typeof(i),a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t);}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++]){n.hasClass(e)?n.removeClass(e):n.addClass(e);}}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""));});},hasClass:function hasClass(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++]){if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;}return!1;}});var yt=/\r/g;S.fn.extend({val:function val(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+"";})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t));})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0;}}),S.extend({valHooks:{option:{get:function get(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e));}},select:{get:function get(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++){if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t);}}return s;},set:function set(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--){((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);}return n||(e.selectedIndex=-1),o;}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function set(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t);}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value;});}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function xt(e){e.stopPropagation();};S.extend(S.event,{trigger:function trigger(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==_typeof(e)&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode){p.push(o),a=o;}a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C);}i=0;while((o=p[i++])&&!e.isPropagationStopped()){f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());}return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result;}},simulate:function simulate(e,t,n){var r=S.extend(new S.Event(),n,{type:e,isSimulated:!0});S.event.trigger(r,null,t);}}),S.fn.extend({trigger:function trigger(e,t){return this.each(function(){S.event.trigger(e,t,this);});},triggerHandler:function triggerHandler(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0);}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function i(e){S.event.simulate(r,e.target,S.event.fix(e));};S.event.special[r]={setup:function setup(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1);},teardown:function teardown(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r));}};});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=new C.DOMParser().parseFromString(e,"text/xml");}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent;}).join("\n"):e)),t;};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==_typeof(t)&&null!=t?e:"")+"]",t,r,i);});else if(r||"object"!==w(e))i(n,e);else for(t in e){At(n+"["+t+"]",e[t],r,i);}}S.param=function(e,t){var n,r=[],i=function i(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value);});else for(n in e){At(n,e[n],t,i);}return r.join("&");},S.fn.extend({serialize:function serialize(){return S.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this;}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e));}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")};}):{name:t.name,value:n.replace(Et,"\r\n")};}).get();}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++]){"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t);}};}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1);}),r;}return l(i.dataTypes[0])||!s["*"]&&l("*");}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t){void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);}return r&&S.extend(!0,e,r),e;}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e);},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function ajax(e,t){"object"==_typeof(e)&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function getResponseHeader(e){var t;if(h){if(!n){n={};while(t=qt.exec(p)){n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);}}t=n[e.toLowerCase()+" "];}return null==t?null:t.join(", ");},getAllResponseHeaders:function getAllResponseHeaders(){return h?p:null;},setRequestHeader:function setRequestHeader(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this;},overrideMimeType:function overrideMimeType(e){return null==h&&(v.mimeType=e),this;},statusCode:function statusCode(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e){w[t]=[w[t],e[t]];}return this;},abort:function abort(e){var t=e||u;return c&&c.abort(t),l(0,t),this;}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host;}catch(e){v.crossDomain=!0;}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid++ +o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers){T.setRequestHeader(i,v.headers[i]);}if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout");},v.timeout));try{h=!1,c.send(a,l);}catch(e){if(h)throw e;l(-1,e);}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0]){u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));}if(r)for(i in s){if(s[i]&&s[i].test(r)){u.unshift(i);break;}}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break;}a||(a=i);}o=o||a;}if(o)return o!==u[0]&&u.unshift(o),n[o];}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters){l[a.toLowerCase()]=e.converters[a];}o=c.shift();while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l){if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break;}}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t);}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o};}}}return{state:"success",data:t};}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")));}return T;},getJSON:function getJSON(e,t,n){return S.get(e,t,n,"json");},getScript:function getScript(e,t){return S.get(e,void 0,t,"script");}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e));};}),S.ajaxPrefilter(function(e){var t;for(t in e.headers){"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"");}}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function textScript(){}},dataFilter:function dataFilter(e){S.globalEval(e,t,n);}});},S.fn.extend({wrapAll:function wrapAll(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild){e=e.firstElementChild;}return e;}).append(this)),this;},wrapInner:function wrapInner(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e));}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n);});},wrap:function wrap(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t);});},unwrap:function unwrap(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes);}),this;}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e);},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest();}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var _o,a;if(y.cors||$t&&!i.crossDomain)return{send:function send(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields){r[n]=i.xhrFields[n];}for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e){r.setRequestHeader(n,e[n]);}_o=function o(e){return function(){_o&&(_o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()));};},r.onload=_o(),a=r.onerror=r.ontimeout=_o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){_o&&a();});},_o=_o("abort");try{r.send(i.hasContent&&i.data||null);}catch(e){if(_o)throw e;}},abort:function abort(){_o&&_o();}};}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(e){return S.globalEval(e),e;}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),S.ajaxTransport("script",function(n){var r,_i;if(n.crossDomain||n.scriptAttrs)return{send:function send(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",_i=function i(e){r.remove(),_i=null,e&&t("error"===e.type?404:200,e.type);}),E.head.appendChild(r[0]);},abort:function abort(){_i&&_i();}};});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e;}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0];},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments;},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0;}),"script";}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o;},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==_typeof(t)&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e);}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e]);});}),this;},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem;}).length;},S.offset={setOffset:function setOffset(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f);}},S.fn.extend({offset:function offset(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e);});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0;},position:function position(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position")){e=e.parentNode;}e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0));}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)};}},offsetParent:function offsetParent(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position")){e=e.offsetParent;}return e||re;});}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n;},t,e,arguments.length);};}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t;});}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i);},s,n?e:void 0,n);};});}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e);};}),S.fn.extend({bind:function bind(e,t,n){return this.on(e,null,t,n);},unbind:function unbind(e,t){return this.off(e,null,t);},delegate:function delegate(e,t,n,r){return this.on(t,e,n,r);},undelegate:function undelegate(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);},hover:function hover(e,t){return this.mouseenter(e).mouseleave(t||e);}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n);};});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function i(){return e.apply(t||this,r.concat(s.call(arguments)));}).guid=e.guid=e.guid||S.guid++,i;},S.holdReady=function(e){e?S.readyWait++:S.ready(!0);},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e));},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"");},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S;});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S;},"undefined"==typeof e&&(C.jQuery=C.$=S),S;});/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/editorjs@2.23.2/dist/editor.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */ /*! For license information please see editor.js.LICENSE.txt */!function(t,e){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.EditorJS=e():t.EditorJS=e();}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t){n.d(o,r,function(e){return t[e];}.bind(null,r));}return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=186);}([function(t,e,n){var o=n(10),r=n(17),i=n(27),a=n(21),s=n(31),l=function l(t,e,n){var c,u,f,d,p=t&l.F,h=t&l.G,v=t&l.S,g=t&l.P,y=t&l.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,k=h?r:r[e]||(r[e]={}),m=k.prototype||(k.prototype={});for(c in h&&(n=e),n){f=((u=!p&&b&&void 0!==b[c])?b:n)[c],d=y&&u?s(f,o):g&&"function"==typeof f?s(Function.call,f):f,b&&a(b,c,f,t&l.U),k[c]!=f&&i(k,c,d),g&&m[c]!=f&&(m[c]=f);}};o.core=r,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l;},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{"default":t};};},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");};},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o);}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t;};},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);},n(e);}t.exports=n;},function(t,e,n){var o=n(110);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e);};},function(t,e,n){var o=n(80),r=n(151);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e;};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(370),n(24),n(400),n(15)],void 0===(i="function"==typeof(o=function o(t,e,_o2,r,i,a){"use strict";var s,l=n(1);function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var i=["info","log","warn","error"].includes(n),a=[];switch(c.logLevel){case s.ERROR:if("error"!==n)return;break;case s.WARN:if(!["error","warn"].includes(n))return;break;case s.INFO:if(!i||t)return;}o&&a.push(o);var l="Editor.js ".concat("2.23.2"),u="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";t&&(i?(a.unshift(u,r),e="%c".concat(l,"%c ").concat(e)):e="( ".concat(l," )").concat(e));try{if(i){if(o){var f;(f=console)[n].apply(f,["".concat(e," %o")].concat(a));}else{var d;(d=console)[n].apply(d,[e].concat(a));}}else console[n](e);}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){c.logLevel=t;},t.typeOf=d,t.isFunction=p,t.isObject=h,t.isString=function(t){return"string"===d(t);},t.isBoolean=function(t){return"boolean"===d(t);},t.isNumber=function(t){return"number"===d(t);},t.isUndefined=v,t.isClass=function(t){return p(t)&&/^\s*class\s+/.test(t.toString());},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object;},t.isPromise=function(t){return Promise.resolve(t)===t;},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||229===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223;},t.sequence=function(t){return g.apply(this,arguments);},t.array=function(t){return Array.prototype.slice.call(t);},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout(function(){return t.apply(n,o);},e);};},t.getFileExtension=function(t){return t.name.split(".").pop();},t.isValidMimeType=function(t){return /^[-\w]+\/([-+\w]+|\*)$/.test(t);},t.debounce=function(t,e,n){var o,r=this;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++){a[s]=arguments[s];}var l=r,c=function c(){o=null,n||t.apply(l,a);},u=n&&!o;window.clearTimeout(o),o=window.setTimeout(c,e),u&&t.apply(l,a);};},t.throttle=function(t,e){var n,o,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=null,s=0;i||(i={});var l=function l(){s=!1===i.leading?0:Date.now(),a=null,r=t.apply(n,o),a||(n=o=null);};return function(){var c=Date.now();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,o=arguments,u<=0||u>e?(a&&(clearTimeout(a),a=null),s=c,r=t.apply(n,o),a||(n=o=null)):a||!1===i.trailing||(a=setTimeout(l,u)),r;};},t.copyTextToClipboard=function(t){var e=a["default"].make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e);},t.getUserOS=y,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1);},t.deepMerge=function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++){r[i-1]=arguments[i];}if(!r.length)return e;var a=r.shift();if(h(e)&&h(a))for(var s in a){h(a[s])?(e[s]||Object.assign(e,(0,_o2["default"])({},s,{})),t(e[s],a[s])):Object.assign(e,(0,_o2["default"])({},s,a[s]));}return t.apply(void 0,[e].concat(r));},t.beautifyShortcut=function(t){var e=y();return t=t.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN");},t.getValidUrl=function(t){try{return new URL(t).href;}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t;},t.generateBlockId=function(){return(0,i.nanoid)(10);},t.openTab=function(t){window.open(t,"_blank");},t.generateId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t).concat(Math.floor(1e8*Math.random()).toString(16));},t.deprecationAssert=function(t,e,n){var o="«".concat(e,"» is deprecated and will be removed in the next major release. Please use the «").concat(n,"» instead.");t&&f(o,"warn");},t.cacheable=function(t,e,n){var o=n.value?"value":"get",r=n[o],i="#".concat(e,"Cache");if(n[o]=function(){if(void 0===this[i]){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++){e[n]=arguments[n];}this[i]=r.apply.apply(r,[this].concat(e));}return this[i];},"get"===o&&n.set){var a=n.set;n.set=function(e){delete t[i],a.apply(this,e);};}return n;},t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=l(e),_o2=l(_o2),r=l(r),a=l(a),t.LogLevels=s,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR";}(s||(t.LogLevels=s={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},c.logLevel=s.VERBOSE;var u=c.bind(window,!1);t.log=u;var f=c.bind(window,!0);function d(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}function p(t){return"function"===d(t)||"asyncfunction"===d(t);}function h(t){return"object"===d(t);}function v(t){return"undefined"===d(t);}function g(){return(g=(0,r["default"])(e["default"].mark(function t(n){var o,i,a,_s,l=arguments;return e["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return _s=function s(){return(_s=(0,r["default"])(e["default"].mark(function t(n,o,r){return e["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["function"](n.data);case 3:return t.next=5,o(v(n.data)?{}:n.data);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),r(v(n.data)?{}:n.data);case 10:case"end":return t.stop();}}},t,null,[[0,7]]);}))).apply(this,arguments);},a=function a(t,e,n){return _s.apply(this,arguments);},o=l.length>1&&void 0!==l[1]?l[1]:function(){},i=l.length>2&&void 0!==l[2]?l[2]:function(){},t.abrupt("return",n.reduce(function(){var t=(0,r["default"])(e["default"].mark(function t(n,r){return e["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.abrupt("return",a(r,o,i));case 3:case"end":return t.stop();}}},t);}));return function(e,n){return t.apply(this,arguments);};}(),Promise.resolve()));case 5:case"end":return t.stop();}}},t);}))).apply(this,arguments);}function y(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find(function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t);});return e?(t[e]=!0,t):t;}t.logLabeled=f;var b=("ontouchstart"in document.documentElement);t.isTouchSupported=b;})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(80);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap();return r=function r(){return t;},t;}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{"default":t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t){if(Object.prototype.hasOwnProperty.call(t,a)){var s=i?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a];}}return n["default"]=t,e&&e.set(t,n),n;};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(375)],void 0===(i="function"==typeof(o=function o(_o3,r,i,a){"use strict";var s=n(1);function l(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0;}}(t))){var e=0,n=function n(){};return{s:n,n:function n(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]};},e:function e(t){throw t;},f:n};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,r,i=!0,a=!1;return{s:function s(){o=t[Symbol.iterator]();},n:function n(){var t=o.next();return i=t.done,t;},e:function e(t){a=!0,r=t;},f:function f(){try{i||null==o["return"]||o["return"]();}finally{if(a)throw r;}}};}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++){o[n]=t[n];}return o;}Object.defineProperty(_o3,"__esModule",{value:!0}),_o3["default"]=void 0,r=s(r),i=s(i),a=s(a);var u=function(){function t(e){var n=this,o=e.config,i=e.eventsDispatcher;if((0,r["default"])(this,t),this.nodes={},this.listeners=new a["default"](),this.readOnlyMutableListeners={on:function on(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n.mutableListenerIds.push(n.listeners.on(t,e,o,r));},clearAll:function clearAll(){var t,e=l(n.mutableListenerIds);try{for(e.s();!(t=e.n()).done;){var o=t.value;n.listeners.offById(o);}}catch(t){e.e(t);}finally{e.f();}n.mutableListenerIds=[];}},this.mutableListenerIds=[],(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=o,this.eventsDispatcher=i;}return(0,i["default"])(t,[{key:"removeAllNodes",value:function value(){for(var t in this.nodes){var e=this.nodes[t];e instanceof HTMLElement&&e.remove();}}},{key:"state",set:function set(t){this.Editor=t;}},{key:"isRtl",get:function get(){return"rtl"===this.config.i18n.direction;}}]),t;}();_o3["default"]=u,u.displayName="Module",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e){t.exports=function(t){try{return!!t();}catch(t){return!0;}};},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t;};},function(t,e){t.exports=function(t){return"object"==_typeof(t)?null!==t:"function"==typeof t;};},function(t,e,n){var o=n(68)("wks"),r=n(44),i=n(10).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t));}).store=o;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function o(_o4,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(_o4,"__esModule",{value:!0}),_o4["default"]=void 0,r=c(r),i=c(i),a=c(a),s=l(s);var u=function(){function t(){(0,i["default"])(this,t);}return(0,a["default"])(t,null,[{key:"isSingleTag",value:function value(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName);}},{key:"isLineBreakTag",value:function value(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName);}},{key:"make",value:function value(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);for(var a in Array.isArray(n)?(e=i.classList).add.apply(e,(0,r["default"])(n)):n&&i.classList.add(n),o){Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a]);}return i;}},{key:"text",value:function value(t){return document.createTextNode(t);}},{key:"svg",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o;}},{key:"append",value:function value(t,e){Array.isArray(e)?e.forEach(function(e){return t.appendChild(e);}):t.appendChild(e);}},{key:"prepend",value:function value(t,e){Array.isArray(e)?(e=e.reverse()).forEach(function(e){return t.prepend(e);}):t.prepend(e);}},{key:"swap",value:function value(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n);}},{key:"find",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e);}},{key:"get",value:function value(t){return document.getElementById(t);}},{key:"findAll",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e);}},{key:"findAllInputs",value:function value(e){return s.array(e.querySelectorAll(t.allInputsSelector)).reduce(function(e,n){return t.isNativeInput(n)||t.containsOnlyInlineElements(n)?[].concat((0,r["default"])(e),[n]):[].concat((0,r["default"])(e),(0,r["default"])(t.getDeepestBlockElements(n)));},[]);}},{key:"getDeepestNode",value:function value(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",r=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var i=e[o];if(t.isSingleTag(i)&&!t.isNativeInput(i)&&!t.isLineBreakTag(i))if(i[r])i=i[r];else{if(!i.parentNode[r])return i.parentNode;i=i.parentNode[r];}return this.getDeepestNode(i,n);}return e;}},{key:"isElement",value:function value(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE;}},{key:"isFragment",value:function value(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE;}},{key:"isContentEditable",value:function value(t){return"true"===t.contentEditable;}},{key:"isNativeInput",value:function value(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName);}},{key:"canSetCaret",value:function value(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1;}else n=t.isContentEditable(e);return n;}},{key:"isNodeEmpty",value:function value(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("​","")).trim().length;}},{key:"isLeaf",value:function value(t){return!!t&&0===t.childNodes.length;}},{key:"isEmpty",value:function value(t){t.normalize();for(var e=[t];e.length>0;){if(t=e.shift()){if(this.isLeaf(t)&&!this.isNodeEmpty(t))return!1;t.childNodes&&e.push.apply(e,(0,r["default"])(Array.from(t.childNodes)));}}return!0;}},{key:"isHTMLString",value:function value(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0;}},{key:"getContentLength",value:function value(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length;}},{key:"containsOnlyInlineElements",value:function value(e){var n;return s.isString(e)?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every(function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e);});}},{key:"getDeepestBlockElements",value:function value(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce(function(e,n){return[].concat((0,r["default"])(e),(0,r["default"])(t.getDeepestBlockElements(n)));},[]);}},{key:"getHolder",value:function value(t){return s.isString(t)?document.getElementById(t):t;}},{key:"isExtensionNode",value:function value(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName);}},{key:"isAnchor",value:function value(t){return"a"===t.tagName.toLowerCase();}},{key:"offset",value:function value(t){var e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop,r=e.top+o,i=e.left+n;return{top:r,left:i,bottom:r+e.height,right:i+e.width};}},{key:"allInputsSelector",get:function get(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map(function(t){return'input[type="'.concat(t,'"]');}).join(", ");}},{key:"blockElements",get:function get(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"];}}]),t;}();_o4["default"]=u,u.displayName="Dom",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(33),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0;};},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n);},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function get(){return 7;}}).a;});},function(t,e,n){var o=n(12),r=n(115),i=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n);}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t;};},function(t,e,n){var o=n(38);t.exports=function(t){return Object(o(t));};},function(t,e,n){var o=n(10),r=n(27),i=n(26),a=n(44)("src"),s=n(191),l=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t);},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(i(n,a)||r(n,a,t[e]?""+t[e]:l.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)));})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this);});},function(t,e,n){var o=n(0),r=n(11),i=n(38),a=/"/g,s=function s(t,e,n,o){var r=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">";};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3;}),"String",n);};},function(t,e,n){t.exports=n(146);},function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value;}catch(t){return void n(t);}s.done?e(l):Promise.resolve(l).then(o,r);}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise(function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,l,"next",t);}function l(t){n(a,r,i,s,l,"throw",t);}s(void 0);});};};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7),n(15)],void 0===(i="function"==typeof(o=function o(_o5,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(_o5,"__esModule",{value:!0}),_o5["default"]=void 0,r=c(r),i=c(i),a=l(a),s=c(s);var u=function(){function t(){(0,r["default"])(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat";}return(0,i["default"])(t,[{key:"removeFakeBackground",value:function value(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat));}},{key:"setFakeBackground",value:function value(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0;}},{key:"save",value:function value(){this.savedSelectionRange=t.range;}},{key:"restore",value:function value(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange);}}},{key:"clearSaved",value:function value(){this.savedSelectionRange=null;}},{key:"collapseToEnd",value:function value(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e);}},{key:"findParentTag",value:function value(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),r=null;if(!o||!o.anchorNode||!o.focusNode)return null;var i=[o.anchorNode,o.focusNode];return i.forEach(function(o){for(var i=n;i>0&&o.parentNode&&(o.tagName!==t||(r=o,e&&o.classList&&!o.classList.contains(e)&&(r=null),!r));){o=o.parentNode,i--;}}),r;}},{key:"expandToTag",value:function value(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n);}}],[{key:"isSelectionAtEditor",value:function value(e){if(!e)return!1;var n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&n instanceof Element&&(o=n.closest(".".concat(t.CSS.editorZone))),!!o&&o.nodeType===Node.ELEMENT_NODE;}},{key:"isRangeAtEditor",value:function value(e){if(e){var n=e.startContainer;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&n instanceof Element&&(o=n.closest(".".concat(t.CSS.editorZone))),!!o&&o.nodeType===Node.ELEMENT_NODE;}}},{key:"getRangeFromSelection",value:function value(t){return t&&t.rangeCount?t.getRangeAt(0):null;}},{key:"get",value:function value(){return window.getSelection();}},{key:"setCursor",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=window.getSelection();if(s["default"].isNativeInput(t)){if(!s["default"].canSetCaret(t))return;return t.focus(),t.selectionStart=t.selectionEnd=e,t.getBoundingClientRect();}return n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect();}},{key:"addFakeCursor",value:function value(e){var n=t.range,o=s["default"].make("span","codex-editor__fake-cursor");o.dataset.mutationFree="true",!n||e&&!e.contains(n.startContainer)||(n.collapse(),n.insertNode(o));}},{key:"removeFakeCursor",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,e=s["default"].find(t,".codex-editor__fake-cursor");e&&e.remove();}},{key:"CSS",get:function get(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"};}},{key:"anchorNode",get:function get(){var t=window.getSelection();return t?t.anchorNode:null;}},{key:"anchorElement",get:function get(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s["default"].isElement(e)?e:e.parentElement:null;}},{key:"anchorOffset",get:function get(){var t=window.getSelection();return t?t.anchorOffset:null;}},{key:"isCollapsed",get:function get(){var t=window.getSelection();return t?t.isCollapsed:null;}},{key:"isAtEditor",get:function get(){return this.isSelectionAtEditor(t.get());}},{key:"isSelectionExists",get:function get(){return!!t.get().anchorNode;}},{key:"range",get:function get(){return this.getRangeFromSelection(this.get());}},{key:"rect",get:function get(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),t.insertNode(o),n=o.getBoundingClientRect();var r=o.parentNode;r.removeChild(o),r.normalize();}}return n;}},{key:"text",get:function get(){return window.getSelection?window.getSelection().toString():"";}}]),t;}();_o5["default"]=u,u.displayName="SelectionUtils",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e);};},function(t,e,n){var o=n(19),r=n(43);t.exports=n(18)?function(t,e,n){return o.f(t,e,r(1,n));}:function(t,e,n){return t[e]=n,t;};},function(t,e,n){var o=n(61),r=n(38);t.exports=function(t){return o(r(t));};},function(t,e,n){"use strict";var o=n(11);t.exports=function(t,e){return!!t&&o(function(){e?t.call(null,function(){},1):t.call(null);});};},function(t,e,n){var o=n(360),r=n(361),i=n(147),a=n(362);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a();};},function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n);};case 2:return function(n,o){return t.call(e,n,o);};case 3:return function(n,o,r){return t.call(e,n,o,r);};}return function(){return t.apply(e,arguments);};};},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t;};},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t);};},function(t,e,n){var o=n(62),r=n(43),i=n(28),a=n(40),s=n(26),l=n(115),c=Object.getOwnPropertyDescriptor;e.f=n(18)?c:function(t,e){if(t=i(t),e=a(e,!0),l)try{return c(t,e);}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e]);};},function(t,e,n){var o=n(0),r=n(17),i=n(11);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i(function(){n(1);}),"Object",a);};},function(t,e,n){var o=n(31),r=n(61),i=n(20),a=n(16),s=n(131);t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,g,y=i(e),b=r(y),k=o(s,h,3),m=a(b.length),x=0,w=n?p(e,m):l?p(e,0):void 0;m>x;x++){if((d||x in b)&&(g=k(v=b[x],x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v);}else if(u)return!1;}return f?-1:c||u?u:w;};};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1);};},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t;};},function(t,e,n){"use strict";if(n(18)){var o=n(45),r=n(10),i=n(11),a=n(0),s=n(79),l=n(109),c=n(31),u=n(57),f=n(43),d=n(27),p=n(58),h=n(33),v=n(16),g=n(142),y=n(47),b=n(40),k=n(26),m=n(63),x=n(13),w=n(20),S=n(101),T=n(48),E=n(50),B=n(49).f,C=n(103),_=n(44),I=n(14),O=n(36),M=n(69),R=n(64),A=n(105),N=n(55),P=n(72),L=n(56),D=n(104),j=n(133),F=n(19),U=n(34),H=F.f,z=U.f,W=r.RangeError,Y=r.TypeError,X=r.Uint8Array,V=Array.prototype,G=l.ArrayBuffer,K=l.DataView,Z=O(0),q=O(2),J=O(3),$=O(4),Q=O(5),tt=O(6),et=M(!0),nt=M(!1),ot=A.values,rt=A.keys,it=A.entries,at=V.lastIndexOf,st=V.reduce,lt=V.reduceRight,ct=V.join,ut=V.sort,ft=V.slice,dt=V.toString,pt=V.toLocaleString,ht=I("iterator"),vt=I("toStringTag"),gt=_("typed_constructor"),yt=_("def_constructor"),bt=s.CONSTR,kt=s.TYPED,mt=s.VIEW,xt=O(1,function(t,e){return Bt(R(t,t[yt]),e);}),wt=i(function(){return 1===new X(new Uint16Array([1]).buffer)[0];}),St=!!X&&!!X.prototype.set&&i(function(){new X(1).set({});}),Tt=function Tt(t,e){var n=h(t);if(n<0||n%e)throw W("Wrong offset!");return n;},Et=function Et(t){if(x(t)&&kt in t)return t;throw Y(t+" is not a typed array!");},Bt=function Bt(t,e){if(!x(t)||!(gt in t))throw Y("It is not a typed array constructor!");return new t(e);},Ct=function Ct(t,e){return _t(R(t,t[yt]),e);},_t=function _t(t,e){for(var n=0,o=e.length,r=Bt(t,o);o>n;){r[n]=e[n++];}return r;},It=function It(t,e,n){H(t,e,{get:function get(){return this._d[n];}});},Ot=function Ot(t){var e,n,o,r,i,a,s=w(t),l=arguments.length,u=l>1?arguments[1]:void 0,f=void 0!==u,d=C(s);if(null!=d&&!S(d)){for(a=d.call(s),o=[],e=0;!(i=a.next()).done;e++){o.push(i.value);}s=o;}for(f&&l>2&&(u=c(u,arguments[2],2)),e=0,n=v(s.length),r=Bt(this,n);n>e;e++){r[e]=f?u(s[e],e):s[e];}return r;},Mt=function Mt(){for(var t=0,e=arguments.length,n=Bt(this,e);e>t;){n[t]=arguments[t++];}return n;},Rt=!!X&&i(function(){pt.call(new X(1));}),At=function At(){return pt.apply(Rt?ft.call(Et(this)):Et(this),arguments);},Nt={copyWithin:function copyWithin(t,e){return j.call(Et(this),t,e,arguments.length>2?arguments[2]:void 0);},every:function every(t){return $(Et(this),t,arguments.length>1?arguments[1]:void 0);},fill:function fill(t){return D.apply(Et(this),arguments);},filter:function filter(t){return Ct(this,q(Et(this),t,arguments.length>1?arguments[1]:void 0));},find:function find(t){return Q(Et(this),t,arguments.length>1?arguments[1]:void 0);},findIndex:function findIndex(t){return tt(Et(this),t,arguments.length>1?arguments[1]:void 0);},forEach:function forEach(t){Z(Et(this),t,arguments.length>1?arguments[1]:void 0);},indexOf:function indexOf(t){return nt(Et(this),t,arguments.length>1?arguments[1]:void 0);},includes:function includes(t){return et(Et(this),t,arguments.length>1?arguments[1]:void 0);},join:function join(t){return ct.apply(Et(this),arguments);},lastIndexOf:function lastIndexOf(t){return at.apply(Et(this),arguments);},map:function map(t){return xt(Et(this),t,arguments.length>1?arguments[1]:void 0);},reduce:function reduce(t){return st.apply(Et(this),arguments);},reduceRight:function reduceRight(t){return lt.apply(Et(this),arguments);},reverse:function reverse(){for(var t,e=Et(this).length,n=Math.floor(e/2),o=0;o<n;){t=this[o],this[o++]=this[--e],this[e]=t;}return this;},some:function some(t){return J(Et(this),t,arguments.length>1?arguments[1]:void 0);},sort:function sort(t){return ut.call(Et(this),t);},subarray:function subarray(t,e){var n=Et(this),o=n.length,r=y(t,o);return new(R(n,n[yt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,v((void 0===e?o:y(e,o))-r));}},Pt=function Pt(t,e){return Ct(this,ft.call(Et(this),t,e));},Lt=function Lt(t){Et(this);var e=Tt(arguments[1],1),n=this.length,o=w(t),r=v(o.length),i=0;if(r+e>n)throw W("Wrong length!");for(;i<r;){this[e+i]=o[i++];}},Dt={entries:function entries(){return it.call(Et(this));},keys:function keys(){return rt.call(Et(this));},values:function values(){return ot.call(Et(this));}},jt=function jt(t,e){return x(t)&&t[kt]&&"symbol"!=_typeof(e)&&e in t&&String(+e)==String(e);},Ft=function Ft(t,e){return jt(t,e=b(e,!0))?f(2,t[e]):z(t,e);},Ut=function Ut(t,e,n){return!(jt(t,e=b(e,!0))&&x(n)&&k(n,"value"))||k(n,"get")||k(n,"set")||n.configurable||k(n,"writable")&&!n.writable||k(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t);};bt||(U.f=Ft,F.f=Ut),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Ut}),i(function(){dt.call({});})&&(dt=pt=function pt(){return ct.call(this);});var Ht=p({},Nt);p(Ht,Dt),d(Ht,ht,Dt.values),p(Ht,{slice:Pt,set:Lt,constructor:function constructor(){},toString:dt,toLocaleString:At}),It(Ht,"buffer","b"),It(Ht,"byteOffset","o"),It(Ht,"byteLength","l"),It(Ht,"length","e"),H(Ht,vt,{get:function get(){return this[kt];}}),t.exports=function(t,e,n,l){var c=t+((l=!!l)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=r[c],y=h||{},b=h&&E(h),k=!h||!s.ABV,w={},S=h&&h.prototype,C=function C(t,n){H(t,n,{get:function get(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,wt);}(this,n);},set:function set(t){return function(t,n,o){var r=t._d;l&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,wt);}(this,n,t);},enumerable:!0});};k?(h=n(function(t,n,o,r){u(t,h,c,"_d");var i,a,s,l,f=0,p=0;if(x(n)){if(!(n instanceof G||"ArrayBuffer"==(l=m(n))||"SharedArrayBuffer"==l))return kt in n?_t(h,n):Ot.call(h,n);i=n,p=Tt(o,e);var y=n.byteLength;if(void 0===r){if(y%e)throw W("Wrong length!");if((a=y-p)<0)throw W("Wrong length!");}else if((a=v(r)*e)+p>y)throw W("Wrong length!");s=a/e;}else s=g(n),i=new G(a=s*e);for(d(t,"_d",{b:i,o:p,l:a,e:s,v:new K(i)});f<s;){C(t,f++);}}),S=h.prototype=T(Ht),d(S,"constructor",h)):i(function(){h(1);})&&i(function(){new h(-1);})&&P(function(t){new h(),new h(null),new h(1.5),new h(t);},!0)||(h=n(function(t,n,o,r){var i;return u(t,h,c),x(n)?n instanceof G||"ArrayBuffer"==(i=m(n))||"SharedArrayBuffer"==i?void 0!==r?new y(n,Tt(o,e),r):void 0!==o?new y(n,Tt(o,e)):new y(n):kt in n?_t(h,n):Ot.call(h,n):new y(g(n));}),Z(b!==Function.prototype?B(y).concat(B(b)):B(y),function(t){t in h||d(h,t,y[t]);}),h.prototype=S,o||(S.constructor=h));var _=S[ht],I=!!_&&("values"==_.name||null==_.name),O=Dt.values;d(h,gt,!0),d(S,kt,c),d(S,mt,!0),d(S,yt,h),(l?new h(1)[vt]==c:vt in S)||H(S,vt,{get:function get(){return c;}}),w[c]=h,a(a.G+a.W+a.F*(h!=y),w),a(a.S,c,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i(function(){y.of.call(h,1);}),c,{from:Ot,of:Mt}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",e),a(a.P,c,Nt),L(c),a(a.P+a.F*St,c,{set:Lt}),a(a.P+a.F*!I,c,Dt),o||S.toString==dt||(S.toString=dt),a(a.P+a.F*i(function(){new h(1).slice();}),c,{slice:Pt}),a(a.P+a.F*(i(function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString();})||!i(function(){S.toLocaleString.call([1,2]);})),c,{toLocaleString:At}),N[c]=I?_:O,o||I||d(S,ht,O);};}else t.exports=function(){};},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value");};},function(t,e,n){var o=n(44)("meta"),r=n(13),i=n(26),a=n(19).f,s=0,l=Object.isExtensible||function(){return!0;},c=!n(11)(function(){return l(Object.preventExtensions({}));}),u=function u(t){a(t,o,{value:{i:"O"+ ++s,w:{}}});},f=t.exports={KEY:o,NEED:!1,fastKey:function fastKey(t,e){if(!r(t))return"symbol"==_typeof(t)?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!l(t))return"F";if(!e)return"E";u(t);}return t[o].i;},getWeak:function getWeak(t,e){if(!i(t,o)){if(!l(t))return!0;if(!e)return!1;u(t);}return t[o].w;},onFreeze:function onFreeze(t){return c&&f.NEED&&l(t)&&!i(t,o)&&u(t),t;}};},function(t,e,n){var o=n(367),r=n(368),i=n(147),a=n(369);t.exports=function(t){return o(t)||r(t)||i(t)||a();};},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e};};},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36));};},function(t,e){t.exports=!1;},function(t,e,n){var o=n(117),r=n(88);t.exports=Object.keys||function(t){return o(t,r);};},function(t,e,n){var o=n(33),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e);};},function(t,e,n){var o=n(12),r=n(118),i=n(88),a=n(87)("IE_PROTO"),s=function s(){},_l=function l(){var t,e=n(85)("iframe"),o=i.length;for(e.style.display="none",n(89).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),_l=t.F;o--;){delete _l.prototype[i[o]];}return _l();};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s(),s.prototype=null,n[a]=t):n=_l(),void 0===e?n:r(n,e);};},function(t,e,n){var o=n(117),r=n(88).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r);};},function(t,e,n){var o=n(26),r=n(20),i=n(87)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null;};},function(t,e,n){var o=n(14)("unscopables"),r=Array.prototype;null==r[o]&&n(27)(r,o,{}),t.exports=function(t){r[o][t]=!0;};},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t;};},function(t,e,n){var o=n(19).f,r=n(26),i=n(14)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e});};},function(t,e,n){var o=n(0),r=n(38),i=n(11),a=n(91),s="["+a+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function u(t,e,n){var r={},s=i(function(){return!!a[t]()||"​"!="​"[t]();}),l=r[t]=s?e(f):a[t];n&&(r[n]=l),o(o.P+o.F*s,"String",r);},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t;};t.exports=u;},function(t,e){t.exports={};},function(t,e,n){"use strict";var o=n(10),r=n(19),i=n(18),a=n(14)("species");t.exports=function(t){var e=o[t];i&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function get(){return this;}});};},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t;};},function(t,e,n){var o=n(21);t.exports=function(t,e,n){for(var r in e){o(t,r,e[r],n);}return t;};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(149)],void 0===(i="function"==typeof(o=function o(_o6,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o6,"__esModule",{value:!0}),_o6["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r["default"])(this,t);}return(0,i["default"])(t,null,[{key:"ui",value:function value(e,n){return t._t(e,n);}},{key:"t",value:function value(e,n){return t._t(e,n);}},{key:"setDictionary",value:function value(e){t.currentDictionary=e;}},{key:"_t",value:function value(e,n){var o=t.getNamespace(e);return o&&o[n]?o[n]:n;}},{key:"getNamespace",value:function value(e){return e.split(".").reduce(function(t,e){return t&&Object.keys(t).length?t[e]:{};},t.currentDictionary);}}]),t;}();_o6["default"]=l,l.displayName="I18n",l.currentDictionary=a["default"],t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(380),n(7)],void 0===(i="function"==typeof(o=function o(_o7,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(_o7,"__esModule",{value:!0}),_o7["default"]=void 0,r=c(r),i=c(i),a=c(a),s=l(s);var u=function(){function t(e){var n=this;(0,r["default"])(this,t),this.iterator=null,this.activated=!1,this.allowArrows=!0,this.onKeyDown=function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e);}},this.allowArrows=!s.isBoolean(e.allowArrows)||e.allowArrows,this.iterator=new a["default"](e.items,e.focusedItemClass),this.activateCallback=e.activateCallback;}return(0,i["default"])(t,[{key:"activate",value:function value(t){this.activated=!0,t&&this.iterator.setItems(t),document.addEventListener("keydown",this.onKeyDown);}},{key:"deactivate",value:function value(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown);}},{key:"focusFirst",value:function value(){this.dropCursor(),this.flipRight();}},{key:"flipLeft",value:function value(){this.iterator.previous();}},{key:"flipRight",value:function value(){this.iterator.next();}},{key:"dropCursor",value:function value(){this.iterator.dropCursor();}},{key:"isEventReadyForHandling",value:function value(t){var e=[s.keyCodes.TAB,s.keyCodes.ENTER],n=this.iterator.currentItem==document.activeElement;return this.allowArrows&&!n&&e.push(s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.UP,s.keyCodes.DOWN),this.activated&&-1!==e.indexOf(t.keyCode);}},{key:"handleTabPress",value:function value(t){switch(t.shiftKey?a["default"].directions.LEFT:a["default"].directions.RIGHT){case a["default"].directions.RIGHT:this.flipRight();break;case a["default"].directions.LEFT:this.flipLeft();}}},{key:"handleEnterPress",value:function value(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),s.isFunction(this.activateCallback)&&this.activateCallback(this.iterator.currentItem),t.preventDefault(),t.stopPropagation());}},{key:"currentItem",get:function get(){return this.iterator.currentItem;}}],[{key:"usedKeys",get:function get(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN];}}]),t;}();_o7["default"]=u,u.displayName="Flipper",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t);};},function(t,e){e.f={}.propertyIsEnumerable;},function(t,e,n){var o=n(37),r=n(14)("toStringTag"),i="Arguments"==o(function(){return arguments;}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e];}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a;};},function(t,e,n){var o=n(12),r=n(32),i=n(14)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n);};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(7),n(378)],void 0===(i="function"==typeof(o=function o(t,e,_o8){"use strict";var r=n(1),i=n(8);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},r=new _o8["default"](n);return r.clean(t);}function s(t,n){return Array.isArray(t)?(i=n,t.map(function(t){return s(t,i);})):e.isObject(t)?function(t,n){var o,r={};for(var i in t){if(Object.prototype.hasOwnProperty.call(t,i)){var a=t[i],l=(o=n[i],e.isObject(o)||e.isBoolean(o)||e.isFunction(o)?n[i]:n);r[i]=s(a,l);}}return r;}(t,n):e.isString(t)?(o=t,r=n,e.isObject(r)?a(o,r):!1===r?a(o,{}):o):t;var o,r,i;}Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeBlocks=function(t,n){return t.map(function(t){var o=e.isFunction(n)?n(t.tool):n;return e.isEmpty(o)||(t.data=s(t.data,o)),t;});},t.clean=a,e=i(e),_o8=r(_o8);})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(23),n(24),n(42),n(2),n(3),n(151),n(113),n(5),n(6),n(4),n(15),n(7),n(112),n(25),n(111)],void 0===(i="function"==typeof(o=function o(t,e,_o9,r,i,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b,k=n(8),m=n(1);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.BlockToolAPI=void 0,e=m(e),_o9=m(_o9),r=m(r),i=m(i),a=m(a),s=m(s),l=m(l),c=m(c),u=m(u),f=m(f),d=m(d),p=m(p),h=k(h),v=m(v),g=m(g),y=m(y),t.BlockToolAPI=b,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste";}(b||(t.BlockToolAPI=b={}));var w=function(t){(0,u["default"])(S,t);var n,y,k,m,w=(n=S,function(){var t,e=(0,d["default"])(n);if(x()){var o=(0,d["default"])(this).constructor;t=Reflect.construct(e,arguments,o);}else t=e.apply(this,arguments);return(0,f["default"])(this,t);});function S(t){var e,n=t.id,o=void 0===n?h.generateBlockId():n,r=t.data,s=t.tool,c=t.api,u=t.readOnly,f=t.tunesData;return(0,a["default"])(this,S),(e=w.call(this)).cachedInputs=[],e.tunesInstances=new Map(),e.defaultTunesInstances=new Map(),e.unavailableTunesData={},e.inputIndex=0,e.modificationDebounceTimer=450,e.didMutated=h.debounce(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=t instanceof InputEvent||!t.some(function(t){var e=t.addedNodes,n=void 0===e?[]:e,o=t.removedNodes;return[].concat((0,i["default"])(Array.from(n)),(0,i["default"])(Array.from(o))).some(function(t){return p["default"].isElement(t)&&"true"===t.dataset.mutationFree;});});n&&(e.cachedInputs=[],e.updateCurrentInput(),e.call(b.UPDATED),e.emit("didMutated",(0,l["default"])(e)));},e.modificationDebounceTimer),e.handleFocus=function(){e.cachedInputs=[],e.updateCurrentInput();},e.name=s.name,e.id=o,e.settings=s.settings,e.config=s.settings.config||{},e.api=c,e.blockAPI=new v["default"]((0,l["default"])(e)),e.mutationObserver=new MutationObserver(e.didMutated),e.tool=s,e.toolInstance=s.create(r,e.blockAPI,u),e.tunes=s.tunes,e.composeTunes(f),e.holder=e.compose(),e;}return(0,s["default"])(S,[{key:"call",value:function value(t,e){if(h.isFunction(this.toolInstance[t])){t===b.APPEND_CALLBACK&&h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.toolInstance[t].call(this.toolInstance,e);}catch(e){h.log("Error during '".concat(t,"' call: ").concat(e.message),"error");}}}},{key:"mergeWith",value:(m=(0,r["default"])(_o9["default"].mark(function t(e){return _o9["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.merge(e);case 2:case"end":return t.stop();}}},t,this);})),function(t){return m.apply(this,arguments);})},{key:"save",value:(k=(0,r["default"])(_o9["default"].mark(function t(){var n,r,a,s,l=this;return _o9["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.save(this.pluginsContent);case 2:return n=t.sent,r=this.unavailableTunesData,[].concat((0,i["default"])(this.tunesInstances.entries()),(0,i["default"])(this.defaultTunesInstances.entries())).forEach(function(t){var n=(0,e["default"])(t,2),o=n[0],i=n[1];if(h.isFunction(i.save))try{r[o]=i.save();}catch(t){h.log("Tune ".concat(i.constructor.name," save method throws an Error %o"),"warn",t);}}),a=window.performance.now(),t.abrupt("return",Promise.resolve(n).then(function(t){return s=window.performance.now(),{id:l.id,tool:l.name,data:t,tunes:r,time:s-a};})["catch"](function(t){h.log("Saving proccess for ".concat(l.name," tool failed due to the ").concat(t),"log","red");}));case 7:case"end":return t.stop();}}},t,this);})),function(){return k.apply(this,arguments);})},{key:"validate",value:(y=(0,r["default"])(_o9["default"].mark(function t(e){var n;return _o9["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=!0,!(this.toolInstance.validate instanceof Function)){t.next=5;break;}return t.next=4,this.toolInstance.validate(e);case 4:n=t.sent;case 5:return t.abrupt("return",n);case 6:case"end":return t.stop();}}},t,this);})),function(t){return y.apply(this,arguments);})},{key:"renderTunes",value:function value(){var t=document.createDocumentFragment(),e=document.createDocumentFragment();return this.tunesInstances.forEach(function(e){p["default"].append(t,e.render());}),this.defaultTunesInstances.forEach(function(t){p["default"].append(e,t.render());}),[t,e];}},{key:"updateCurrentInput",value:function value(){this.currentInput=p["default"].isNativeInput(document.activeElement)||!g["default"].anchorNode?document.activeElement:g["default"].anchorNode;}},{key:"willSelect",value:function value(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addInputEvents();}},{key:"willUnselect",value:function value(){this.mutationObserver.disconnect(),this.removeInputEvents();}},{key:"dispatchChange",value:function value(){this.didMutated();}},{key:"destroy",value:function value(){(0,c["default"])((0,d["default"])(S.prototype),"destroy",this).call(this),h.isFunction(this.toolInstance.destroy)&&this.toolInstance.destroy();}},{key:"renderSettings",value:function value(){if(h.isFunction(this.toolInstance.renderSettings))return this.toolInstance.renderSettings();}},{key:"compose",value:function value(){var t=p["default"].make("div",S.CSS.wrapper),e=p["default"].make("div",S.CSS.content),n=this.toolInstance.render();e.appendChild(n);var o=e;return[].concat((0,i["default"])(this.tunesInstances.values()),(0,i["default"])(this.defaultTunesInstances.values())).forEach(function(t){if(h.isFunction(t.wrap))try{o=t.wrap(o);}catch(e){h.log("Tune ".concat(t.constructor.name," wrap method throws an Error %o"),"warn",e);}}),t.appendChild(o),t;}},{key:"composeTunes",value:function value(t){var n=this;Array.from(this.tunes.values()).forEach(function(e){(e.isInternal?n.defaultTunesInstances:n.tunesInstances).set(e.name,e.create(t[e.name],n.blockAPI));}),Object.entries(t).forEach(function(t){var o=(0,e["default"])(t,2),r=o[0],i=o[1];n.tunesInstances.has(r)||(n.unavailableTunesData[r]=i);});}},{key:"addInputEvents",value:function value(){var t=this;this.inputs.forEach(function(e){e.addEventListener("focus",t.handleFocus),p["default"].isNativeInput(e)&&e.addEventListener("input",t.didMutated);});}},{key:"removeInputEvents",value:function value(){var t=this;this.inputs.forEach(function(e){e.removeEventListener("focus",t.handleFocus),p["default"].isNativeInput(e)&&e.removeEventListener("input",t.didMutated);});}},{key:"inputs",get:function get(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=p["default"].findAllInputs(this.holder);return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),this.cachedInputs=t,t;}},{key:"currentInput",get:function get(){return this.inputs[this.inputIndex];},set:function set(t){var e=this.inputs.findIndex(function(e){return e===t||e.contains(t);});-1!==e&&(this.inputIndex=e);}},{key:"firstInput",get:function get(){return this.inputs[0];}},{key:"lastInput",get:function get(){var t=this.inputs;return t[t.length-1];}},{key:"nextInput",get:function get(){return this.inputs[this.inputIndex+1];}},{key:"previousInput",get:function get(){return this.inputs[this.inputIndex-1];}},{key:"data",get:function get(){return this.save().then(function(t){return t&&!h.isEmpty(t.data)?t.data:{};});}},{key:"sanitize",get:function get(){return this.tool.sanitizeConfig;}},{key:"mergeable",get:function get(){return h.isFunction(this.toolInstance.merge);}},{key:"isEmpty",get:function get(){var t=p["default"].isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e;}},{key:"hasMedia",get:function get(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","));}},{key:"focused",set:function set(t){this.holder.classList.toggle(S.CSS.focused,t);},get:function get(){return this.holder.classList.contains(S.CSS.focused);}},{key:"selected",set:function set(t){t?(this.holder.classList.add(S.CSS.selected),g["default"].addFakeCursor(this.holder)):(this.holder.classList.remove(S.CSS.selected),g["default"].removeFakeCursor(this.holder));},get:function get(){return this.holder.classList.contains(S.CSS.selected);}},{key:"stretched",set:function set(t){this.holder.classList.toggle(S.CSS.wrapperStretched,t);},get:function get(){return this.holder.classList.contains(S.CSS.wrapperStretched);}},{key:"dropTarget",set:function set(t){this.holder.classList.toggle(S.CSS.dropTarget,t);}},{key:"pluginsContent",get:function get(){var t=this.holder.querySelector(".".concat(S.CSS.content));if(t&&t.childNodes.length)for(var e=t.childNodes.length-1;e>=0;e--){var n=t.childNodes[e];if(!p["default"].isExtensionNode(n))return n;}return null;}}],[{key:"CSS",get:function get(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"};}}]),S;}(y["default"]);t["default"]=w,w.displayName="Block";})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function o(t,e,_o10,r){"use strict";var i,a,s,l,c,u,f=n(8),d=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.InternalTuneSettings=t.InternalInlineToolSettings=t.InternalBlockToolSettings=t.CommonInternalSettings=t.UserSettings=t.ToolType=void 0,e=d(e),_o10=d(_o10),r=f(r),t.ToolType=i,function(t){t[t.Block=0]="Block",t[t.Inline=1]="Inline",t[t.Tune=2]="Tune";}(i||(t.ToolType=i={})),t.UserSettings=a,function(t){t.Shortcut="shortcut",t.Toolbox="toolbox",t.EnabledInlineTools="inlineToolbar",t.EnabledBlockTunes="tunes",t.Config="config";}(a||(t.UserSettings=a={})),t.CommonInternalSettings=s,function(t){t.Shortcut="shortcut",t.SanitizeConfig="sanitize";}(s||(t.CommonInternalSettings=s={})),t.InternalBlockToolSettings=l,function(t){t.IsEnabledLineBreaks="enableLineBreaks",t.Toolbox="toolbox",t.ConversionConfig="conversionConfig",t.IsReadOnlySupported="isReadOnlySupported",t.PasteConfig="pasteConfig";}(l||(t.InternalBlockToolSettings=l={})),t.InternalInlineToolSettings=c,function(t){t.IsInline="isInline",t.Title="title";}(c||(t.InternalInlineToolSettings=c={})),t.InternalTuneSettings=u,function(t){t.IsTune="isTune";}(u||(t.InternalTuneSettings=u={}));var p=function(){function t(n){var o=n.name,r=n.constructable,i=n.config,a=n.api,s=n.isDefault,l=n.isInternal,c=void 0!==l&&l,u=n.defaultPlaceholder;(0,e["default"])(this,t),this.api=a,this.name=o,this.constructable=r,this.config=i,this.isDefault=s,this.isInternal=c,this.defaultPlaceholder=u;}return(0,_o10["default"])(t,[{key:"reset",value:function value(){if(r.isFunction(this.constructable.reset))return this.constructable.reset();}},{key:"prepare",value:function value(){if(r.isFunction(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings});}},{key:"isInline",value:function value(){return this.type===i.Inline;}},{key:"isBlock",value:function value(){return this.type===i.Block;}},{key:"isTune",value:function value(){return this.type===i.Tune;}},{key:"settings",get:function get(){var t=this.config[a.Config]||{};return this.isDefault&&!("placeholder"in t)&&this.defaultPlaceholder&&(t.placeholder=this.defaultPlaceholder),t;}},{key:"shortcut",get:function get(){var t=this.constructable[s.Shortcut];return this.config[a.Shortcut]||t;}},{key:"sanitizeConfig",get:function get(){return this.constructable[s.SanitizeConfig]||{};}}]),t;}();t["default"]=p,p.displayName="BaseTool";})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(17),r=n(10),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{});})("versions",[]).push({version:o.version,mode:n(45)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});},function(t,e,n){var o=n(28),r=n(16),i=n(47);t.exports=function(t){return function(e,n,a){var s,l=o(e),c=r(l.length),u=i(a,c);if(t&&n!=n){for(;c>u;){if((s=l[u++])!=s)return!0;}}else for(;c>u;u++){if((t||u in l)&&l[u]===n)return t||u||0;}return!t&&-1;};};},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,n){var o=n(37);t.exports=Array.isArray||function(t){return"Array"==o(t);};},function(t,e,n){var o=n(14)("iterator"),r=!1;try{var i=[7][o]();i["return"]=function(){r=!0;},Array.from(i,function(){throw 2;});}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0};},i[o]=function(){return a;},t(i);}catch(t){}return n;};},function(t,e,n){"use strict";var o=n(12);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e;};},function(t,e,n){"use strict";var o=n(63),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=_typeof(i))throw new TypeError("RegExp exec method returned something other than an Object or null");return i;}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e);};},function(t,e,n){"use strict";n(135);var o=n(21),r=n(27),i=n(11),a=n(38),s=n(14),l=n(106),c=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t;},"7"!=="".replace(t,"$<a>");}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments);};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1];}();t.exports=function(t,e,n){var d=s(t),p=!i(function(){var e={};return e[d]=function(){return 7;},7!=""[t](e);}),h=p?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null;},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n;}),n[d](""),!e;}):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],g=n(a,d,""[t],function(t,e,n,o,r){return e.exec===l?p&&!r?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1};}),y=g[0],b=g[1];o(String.prototype,t,y),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e);}:function(t){return b.call(t,this);});}};},function(t,e,n){var o=n(31),r=n(130),i=n(101),a=n(12),s=n(16),l=n(103),c={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,g,y=d?function(){return t;}:l(t),b=o(n,f,e?2:1),k=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=s(t.length);p>k;k++){if((g=e?b(a(h=t[k])[0],h[1]):b(t[k]))===c||g===u)return g;}}else for(v=y.call(t);!(h=v.next()).done;){if((g=r(v,b,h.value,e))===c||g===u)return g;}}).BREAK=c,e.RETURN=u;},function(t,e,n){var o=n(10).navigator;t.exports=o&&o.userAgent||"";},function(t,e,n){"use strict";var o=n(10),r=n(0),i=n(21),a=n(58),s=n(41),l=n(76),c=n(57),u=n(13),f=n(11),d=n(72),p=n(53),h=n(92);t.exports=function(t,e,n,v,g,y){var b=o[t],k=b,m=g?"set":"add",x=k&&k.prototype,w={},S=function S(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t);}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t);}:"add"==t?function(t){return e.call(this,0===t?0:t),this;}:function(t,n){return e.call(this,0===t?0:t,n),this;});};if("function"==typeof k&&(y||x.forEach&&!f(function(){new k().entries().next();}))){var T=new k(),E=T[m](y?{}:-0,1)!=T,B=f(function(){T.has(1);}),C=d(function(t){new k(t);}),_=!y&&f(function(){for(var t=new k(),e=5;e--;){t[m](e,e);}return!t.has(-0);});C||((k=e(function(e,n){c(e,k,t);var o=h(new b(),e,k);return null!=n&&l(n,g,o[m],o),o;})).prototype=x,x.constructor=k),(B||_)&&(S("delete"),S("has"),g&&S("get")),(_||E)&&S(m),y&&x.clear&&delete x.clear;}else k=v.getConstructor(e,t,g,m),a(k.prototype,n),s.NEED=!0;return p(k,t),w[t]=k,r(r.G+r.W+r.F*(k!=b),w),y||v.setStrong(k,t,g),k;};},function(t,e,n){for(var o,r=n(10),i=n(27),a=n(44),s=a("typed_array"),l=a("view"),c=!(!r.ArrayBuffer||!r.DataView),u=c,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;){(o=r[d[f++]])?(i(o.prototype,s,!0),i(o.prototype,l,!0)):u=!1;}t.exports={ABV:c,CONSTR:u,TYPED:s,VIEW:l};},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?t.exports=n=function n(t){return _typeof(t);}:t.exports=n=function n(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t);},n(e);}t.exports=n;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o11,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o11,"__esModule",{value:!0}),_o11["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"getMethodsForTool",value:function value(t){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(t)});}},{key:"methods",get:function get(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods,ui:this.Editor.UiAPI.methods};}}]),o;}((c=u(c))["default"]);_o11["default"]=d,d.displayName="API",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(379)],void 0===(i="function"==typeof(o=function o(_o12,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o12,"__esModule",{value:!0}),_o12["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r["default"])(this,t),this.lib=new a["default"]();}return(0,i["default"])(t,[{key:"destroy",value:function value(){this.lib.destroy();}},{key:"show",value:function value(t,e,n){this.lib.show(t,e,n);}},{key:"hide",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.lib.hide(t);}},{key:"onHover",value:function value(t,e,n){this.lib.onHover(t,e,n);}}]),t;}();_o12["default"]=l,l.displayName="Tooltip",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(7),n(59),n(84),n(82),n(385)],void 0===(i="function"==typeof(o=function o(_o13,r,i,a,s,l,c,u,f,d,p,h,v){"use strict";var g=n(8),y=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o13,"__esModule",{value:!0}),_o13["default"]=void 0,r=y(r),i=y(i),a=y(a),s=y(s),l=y(l),c=y(c),u=y(u),f=g(f),d=y(d),h=y(h),v=g(v);var k=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(b()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r["default"])(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).tooltip=new h["default"](),e;}return(0,i["default"])(o,[{key:"toggleReadOnly",value:function value(t){t?(this.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):(this.drawUI(),this.enableModuleBindings());}},{key:"moveAndOpen",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Editor.BlockManager.currentBlock;if(this.toolboxInstance.close(),this.Editor.BlockSettings.close(),t){this.hoveredBlock=t;var e,n=t.holder,o=this.Editor.UI.isMobile,r=t.pluginsContent,i=window.getComputedStyle(r),a=parseInt(i.paddingTop,10),s=n.offsetHeight;e=o?n.offsetTop+s:n.offsetTop+a,this.nodes.wrapper.style.transform="translate3D(0, ".concat(Math.floor(e),"px, 0)"),t.tool.isDefault&&t.isEmpty?this.plusButton.show():this.plusButton.hide(),this.open();}}},{key:"close",value:function value(){this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.toolboxInstance.close(),this.Editor.BlockSettings.close());}},{key:"open",value:function value(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!(arguments.length>1&&void 0!==arguments[1])||arguments[1],f.delay(function(){t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide();},50)();}},{key:"make",value:function value(){var t=this;this.nodes.wrapper=u["default"].make("div",this.CSS.toolbar),["content","actions"].forEach(function(e){t.nodes[e]=u["default"].make("div",t.CSS[e]);}),u["default"].append(this.nodes.wrapper,this.nodes.content),u["default"].append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u["default"].make("div",this.CSS.plusButton),u["default"].append(this.nodes.plusButton,u["default"].svg("plus",16,16)),u["default"].append(this.nodes.actions,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",function(){t.tooltip.hide(!0),t.plusButtonClicked();},!1);var e=u["default"].make("div");e.appendChild(document.createTextNode(d["default"].ui(p.I18nInternalNS.ui.toolbar.toolbox,"Add"))),e.appendChild(u["default"].make("div",this.CSS.plusButtonShortcut,{textContent:"⇥ Tab"})),this.tooltip.onHover(this.nodes.plusButton,e,{hidingDelay:400}),this.nodes.blockActionsButtons=u["default"].make("div",this.CSS.blockActionsButtons),this.nodes.settingsToggler=u["default"].make("span",this.CSS.settingsToggler);var n=u["default"].svg("dots",16,16);u["default"].append(this.nodes.settingsToggler,n),u["default"].append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),u["default"].append(this.nodes.actions,this.nodes.blockActionsButtons),this.tooltip.onHover(this.nodes.settingsToggler,d["default"].ui(p.I18nInternalNS.ui.blockTunes.toggler,"Click to tune"),{hidingDelay:400}),u["default"].append(this.nodes.content,this.makeToolbox()),u["default"].append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u["default"].append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper);}},{key:"makeToolbox",value:function value(){var t=this;return this.toolboxInstance=new v["default"]({api:this.Editor.API.methods,tools:this.Editor.Tools.blockTools}),this.toolboxInstance.on(v.ToolboxEvent.Opened,function(){t.Editor.UI.nodes.wrapper.classList.add(t.CSS.openedToolboxHolderModifier);}),this.toolboxInstance.on(v.ToolboxEvent.Closed,function(){t.Editor.UI.nodes.wrapper.classList.remove(t.CSS.openedToolboxHolderModifier);}),this.toolboxInstance.on(v.ToolboxEvent.BlockAdded,function(e){var n=e.block,o=t.Editor,r=o.BlockManager,i=o.Caret,a=r.getBlockById(n.id);0===a.inputs.length&&(a===r.lastBlock?(r.insertAtEnd(),i.setToBlock(r.lastBlock)):i.setToBlock(r.nextBlock));}),this.toolboxInstance.make();}},{key:"plusButtonClicked",value:function value(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.toolboxInstance.toggle();}},{key:"enableModuleBindings",value:function value(){var t=this;this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"mousedown",function(e){e.stopPropagation(),t.settingsTogglerClicked(),t.toolboxInstance.close(),t.tooltip.hide(!0);},!0),this.eventsDispatcher.on(this.Editor.UI.events.blockHovered,function(e){t.Editor.BlockSettings.opened||t.toolboxInstance.opened||t.moveAndOpen(e.block);});}},{key:"disableModuleBindings",value:function value(){this.readOnlyMutableListeners.clearAll();}},{key:"settingsTogglerClicked",value:function value(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open(this.hoveredBlock);}},{key:"drawUI",value:function value(){this.Editor.BlockSettings.make(),this.make();}},{key:"destroy",value:function value(){this.removeAllNodes(),this.toolboxInstance&&this.toolboxInstance.destroy(),this.tooltip.destroy();}},{key:"CSS",get:function get(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",openedToolboxHolderModifier:"codex-editor--toolbox-opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"};}},{key:"opened",get:function get(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);}},{key:"plusButton",get:function get(){var t=this;return{hide:function hide(){return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden);},show:function show(){t.toolboxInstance.isEmpty||t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden);}};}},{key:"toolbox",get:function get(){var t=this;return{opened:this.toolboxInstance.opened,close:function close(){return t.toolboxInstance.close();},open:function open(){t.Editor.BlockManager.currentBlock=t.hoveredBlock,t.toolboxInstance.open();},toggle:function toggle(){return t.toolboxInstance.toggle();},flipperHasFocus:this.toolboxInstance.flipperHasFocus};}},{key:"blockActions",get:function get(){var t=this;return{hide:function hide(){t.nodes.actions.classList.remove(t.CSS.actionsOpened);},show:function show(){t.nodes.actions.classList.add(t.CSS.actionsOpened);}};}}]),o;}(c["default"]);_o13["default"]=k,k.displayName="Toolbar",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(149),n(7)],void 0===(i="function"==typeof(o=function o(t,e,_o14,r){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nInternalNS=void 0,e=i(e);var a=function t(n,o){var i={};return Object.entries(n).forEach(function(n){var a=(0,e["default"])(n,2),s=a[0],l=a[1];if((0,r.isObject)(l)){var c=o?"".concat(o,".").concat(s):s,u=Object.values(l).every(function(t){return(0,r.isString)(t);});i[s]=u?c:t(l,c);}else i[s]=l;}),i;}((_o14=i(_o14))["default"]);t.I18nInternalNS=a;})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(13),r=n(10).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{};};},function(t,e,n){e.f=n(14);},function(t,e,n){var o=n(68)("keys"),r=n(44);t.exports=function(t){return o[t]||(o[t]=r(t));};},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(t,e,n){var o=n(10).document;t.exports=o&&o.documentElement;},function(t,e,n){var o=n(13),r=n(12),i=function i(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!");};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(31)(Function.call,n(34).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array);}catch(t){e=!0;}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t;};}({},!1):void 0),check:i};},function(t,e){t.exports="\t\n\x0B\f\r  \u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";},function(t,e,n){var o=n(13),r=n(90).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t;};},function(t,e,n){"use strict";var o=n(33),r=n(38);t.exports=function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e)){1&i&&(n+=e);}return n;};},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1;};},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1;}:n;},function(t,e,n){var o=n(33),r=n(38);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),l=o(n),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):i:t?s.slice(l,l+2):a-56320+(i-55296<<10)+65536;};};},function(t,e,n){"use strict";var o=n(45),r=n(0),i=n(21),a=n(27),s=n(55),l=n(129),c=n(53),u=n(50),f=n(14)("iterator"),d=!([].keys&&"next"in[].keys()),p=function p(){return this;};t.exports=function(t,e,n,h,v,g,y){l(n,e,h);var b,k,m,x=function x(t){if(!d&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t);};}return function(){return new n(this,t);};},w=e+" Iterator",S="values"==v,T=!1,E=t.prototype,B=E[f]||E["@@iterator"]||v&&E[v],C=B||x(v),_=v?S?x("entries"):C:void 0,I="Array"==e&&E.entries||B;if(I&&(m=u(I.call(new t())))!==Object.prototype&&m.next&&(c(m,w,!0),o||"function"==typeof m[f]||a(m,f,p)),S&&B&&"values"!==B.name&&(T=!0,C=function C(){return B.call(this);}),o&&!y||!d&&!T&&E[f]||a(E,f,C),s[e]=C,s[w]=p,v)if(b={values:S?C:x("values"),keys:g?C:x("keys"),entries:_},y)for(k in b){k in E||i(E,k,b[k]);}else r(r.P+r.F*(d||T),e,b);return b;};},function(t,e,n){var o=n(99),r=n(38);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t));};},function(t,e,n){var o=n(13),r=n(37),i=n(14)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t));};},function(t,e,n){var o=n(14)("match");t.exports=function(t){var e=/./;try{"/./"[t](e);}catch(n){try{return e[o]=!1,!"/./"[t](e);}catch(t){}}return!0;};},function(t,e,n){var o=n(55),r=n(14)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t);};},function(t,e,n){"use strict";var o=n(19),r=n(43);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n;};},function(t,e,n){var o=n(63),r=n(14)("iterator"),i=n(55);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)];};},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,c=void 0===l?n:r(l,n);c>s;){e[s++]=t;}return e;};},function(t,e,n){"use strict";var o=n(51),r=n(134),i=n(55),a=n(28);t.exports=n(97)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e;},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]]);},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries");},function(t,e,n){"use strict";var o,r,i=n(73),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,c=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function l(t){var e,n,o,r,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),c&&(e=l.lastIndex),o=a.call(l,t),c&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,function(){for(r=1;r<arguments.length-2;r++){void 0===arguments[r]&&(o[r]=void 0);}}),o;}),t.exports=l;},function(t,e,n){"use strict";var o=n(96)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1);};},function(t,e,n){var o,r,i,a=n(31),s=n(123),l=n(89),c=n(85),u=n(10),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,g=0,y={},b=function b(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e();}},k=function k(t){b.call(t.data);};d&&p||(d=function d(t){for(var e=[],n=1;arguments.length>n;){e.push(arguments[n++]);}return y[++g]=function(){s("function"==typeof t?t:Function(t),e);},o(g),g;},p=function p(t){delete y[t];},"process"==n(37)(f)?o=function o(t){f.nextTick(a(b,t,1));}:v&&v.now?o=function o(t){v.now(a(b,t,1));}:h?(i=(r=new h()).port2,r.port1.onmessage=k,o=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function o(t){u.postMessage(t+"","*");},u.addEventListener("message",k,!1)):o="onreadystatechange"in c("script")?function(t){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),b.call(t);};}:function(t){setTimeout(a(b,t,1),0);}),t.exports={set:d,clear:p};},function(t,e,n){"use strict";var o=n(10),r=n(18),i=n(45),a=n(79),s=n(27),l=n(58),c=n(11),u=n(57),f=n(33),d=n(16),p=n(142),h=n(49).f,v=n(19).f,g=n(104),y=n(53),_b2=o.ArrayBuffer,_k=o.DataView,m=o.Math,x=o.RangeError,w=o.Infinity,S=_b2,T=m.abs,E=m.pow,B=m.floor,C=m.log,_=m.LN2,I=r?"_b":"buffer",O=r?"_l":"byteLength",M=r?"_o":"byteOffset";function R(t,e,n){var o,r,i,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,c=l>>1,u=23===e?E(2,-24)-E(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=T(t))!=t||t===w?(r=t!=t?1:0,o=l):(o=B(C(t)/_),t*(i=E(2,-o))<1&&(o--,i*=2),(t+=o+c>=1?u/i:u*E(2,1-c))*i>=2&&(o++,i/=2),o+c>=l?(r=0,o=l):o+c>=1?(r=(t*i-1)*E(2,e),o+=c):(r=t*E(2,c-1)*E(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8){;}for(o=o<<e|r,s+=e;s>0;a[f++]=255&o,o/=256,s-=8){;}return a[--f]|=128*d,a;}function A(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,s=r-7,l=n-1,c=t[l--],u=127&c;for(c>>=7;s>0;u=256*u+t[l],l--,s-=8){;}for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[l],l--,s-=8){;}if(0===u)u=1-a;else{if(u===i)return o?NaN:c?-w:w;o+=E(2,e),u-=a;}return(c?-1:1)*o*E(2,u-e);}function N(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0];}function P(t){return[255&t];}function L(t){return[255&t,t>>8&255];}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255];}function j(t){return R(t,52,8);}function F(t){return R(t,23,4);}function U(t,e,n){v(t.prototype,e,{get:function get(){return this[n];}});}function H(t,e,n,o){var r=p(+n);if(r+e>t[O])throw x("Wrong index!");var i=t[I]._b,a=r+t[M],s=i.slice(a,a+e);return o?s:s.reverse();}function z(t,e,n,o,r,i){var a=p(+n);if(a+e>t[O])throw x("Wrong index!");for(var s=t[I]._b,l=a+t[M],c=o(+r),u=0;u<e;u++){s[l+u]=c[i?u:e-u-1];}}if(a.ABV){if(!c(function(){_b2(1);})||!c(function(){new _b2(-1);})||c(function(){return new _b2(),new _b2(1.5),new _b2(NaN),"ArrayBuffer"!=_b2.name;})){for(var W,Y=(_b2=function b(t){return u(this,_b2),new S(p(t));}).prototype=S.prototype,X=h(S),V=0;X.length>V;){(W=X[V++])in _b2||s(_b2,W,S[W]);}i||(Y.constructor=_b2);}var G=new _k(new _b2(2)),K=_k.prototype.setInt8;G.setInt8(0,2147483648),G.setInt8(1,2147483649),!G.getInt8(0)&&G.getInt8(1)||l(_k.prototype,{setInt8:function setInt8(t,e){K.call(this,t,e<<24>>24);},setUint8:function setUint8(t,e){K.call(this,t,e<<24>>24);}},!0);}else _b2=function _b(t){u(this,_b2,"ArrayBuffer");var e=p(t);this._b=g.call(new Array(e),0),this[O]=e;},_k=function k(t,e,n){u(this,_k,"DataView"),u(t,_b2,"DataView");var o=t[O],r=f(e);if(r<0||r>o)throw x("Wrong offset!");if(r+(n=void 0===n?o-r:d(n))>o)throw x("Wrong length!");this[I]=t,this[M]=r,this[O]=n;},r&&(U(_b2,"byteLength","_l"),U(_k,"buffer","_b"),U(_k,"byteLength","_l"),U(_k,"byteOffset","_o")),l(_k.prototype,{getInt8:function getInt8(t){return H(this,1,t)[0]<<24>>24;},getUint8:function getUint8(t){return H(this,1,t)[0];},getInt16:function getInt16(t){var e=H(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16;},getUint16:function getUint16(t){var e=H(this,2,t,arguments[1]);return e[1]<<8|e[0];},getInt32:function getInt32(t){return N(H(this,4,t,arguments[1]));},getUint32:function getUint32(t){return N(H(this,4,t,arguments[1]))>>>0;},getFloat32:function getFloat32(t){return A(H(this,4,t,arguments[1]),23,4);},getFloat64:function getFloat64(t){return A(H(this,8,t,arguments[1]),52,8);},setInt8:function setInt8(t,e){z(this,1,t,P,e);},setUint8:function setUint8(t,e){z(this,1,t,P,e);},setInt16:function setInt16(t,e){z(this,2,t,L,e,arguments[2]);},setUint16:function setUint16(t,e){z(this,2,t,L,e,arguments[2]);},setInt32:function setInt32(t,e){z(this,4,t,D,e,arguments[2]);},setUint32:function setUint32(t,e){z(this,4,t,D,e,arguments[2]);},setFloat32:function setFloat32(t,e){z(this,4,t,F,e,arguments[2]);},setFloat64:function setFloat64(t,e){z(this,8,t,j,e,arguments[2]);}});y(_b2,"ArrayBuffer"),y(_k,"DataView"),s(_k.prototype,a.VIEW,!0),e.ArrayBuffer=_b2,e.DataView=_k;},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;},n(e,o);}t.exports=n;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function o(_o15,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o15,"__esModule",{value:!0}),_o15["default"]=void 0,r=s(r),i=s(i);var l=function(){function t(){(0,r["default"])(this,t),this.subscribers={};}return(0,i["default"])(t,[{key:"on",value:function value(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e);}},{key:"once",value:function value(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(function o(r){var i=e(r),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),i;});}},{key:"emit",value:function value(t,e){!(0,a.isEmpty)(this.subscribers)&&this.subscribers[t]&&this.subscribers[t].reduce(function(t,e){return e(t)||t;},e);}},{key:"off",value:function value(t,e){for(var n=0;n<this.subscribers[t].length;n++){if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break;}}}},{key:"destroy",value:function value(){this.subscribers=null;}}]),t;}();_o15["default"]=l,l.displayName="EventsDispatcher",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function o(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var o=function o(t){var e={get id(){return t.id;},get name(){return t.name;},get config(){return t.config;},get holder(){return t.holder;},get isEmpty(){return t.isEmpty;},get selected(){return t.selected;},set stretched(e){t.stretched=e;},get stretched(){return t.stretched;},call:function call(e,n){return t.call(e,n);},save:function save(){return t.save();},validate:function validate(e){return t.validate(e);},dispatchChange:function dispatchChange(){t.dispatchChange();}};Object.setPrototypeOf(this,e);};n["default"]=o,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(381);function r(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function r(t,e,n){var r=o(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value;}},r(e,n,i||e);}t.exports=r;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(384)],void 0===(i="function"==typeof(o=function o(_o16,r,i,a,s){"use strict";var l=n(1);Object.defineProperty(_o16,"__esModule",{value:!0}),_o16["default"]=void 0,r=l(r),i=l(i),a=l(a),s=l(s);var c=function(){function t(){(0,i["default"])(this,t),this.registeredShortcuts=new Map();}return(0,a["default"])(t,[{key:"add",value:function value(t){if(this.findShortcut(t.on,t.name))throw Error("Shortcut ".concat(t.name," is already registered for ").concat(t.on,". Please remove it before add a new handler."));var e=new s["default"]({name:t.name,on:t.on,callback:t.handler}),n=this.registeredShortcuts.get(t.on)||[];this.registeredShortcuts.set(t.on,[].concat((0,r["default"])(n),[e]));}},{key:"remove",value:function value(t,e){var n=this.findShortcut(t,e);if(n){n.remove();var o=this.registeredShortcuts.get(t);this.registeredShortcuts.set(t,o.filter(function(t){return t!==n;}));}}},{key:"findShortcut",value:function value(t,e){return(this.registeredShortcuts.get(t)||[]).find(function(t){return t.name===e;});}}]),t;}();c.displayName="Shortcuts";var u=new c();_o16["default"]=u,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){t.exports=!n(18)&&!n(11)(function(){return 7!=Object.defineProperty(n(85)("div"),"a",{get:function get(){return 7;}}).a;});},function(t,e,n){var o=n(10),r=n(17),i=n(45),a=n(86),s=n(19).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)});};},function(t,e,n){var o=n(26),r=n(28),i=n(69)(!1),a=n(87)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,c=[];for(n in s){n!=a&&o(s,n)&&c.push(n);}for(;e.length>l;){o(s,n=e[l++])&&(~i(c,n)||c.push(n));}return c;};},function(t,e,n){var o=n(19),r=n(12),i=n(46);t.exports=n(18)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,l=0;s>l;){o.f(t,n=a[l++],e[n]);}return t;};},function(t,e,n){var o=n(28),r=n(49).f,i={}.toString,a="object"==(typeof window==="undefined"?"undefined":_typeof(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t);}catch(t){return a.slice();}}(t):r(o(t));};},function(t,e,n){"use strict";var o=n(18),r=n(46),i=n(70),a=n(62),s=n(20),l=n(61),c=Object.assign;t.exports=!c||n(11)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t;}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o;})?function(t,e){for(var n=s(t),c=arguments.length,u=1,f=i.f,d=a.f;c>u;){for(var p,h=l(arguments[u++]),v=f?r(h).concat(f(h)):r(h),g=v.length,y=0;g>y;){p=v[y++],o&&!d.call(h,p)||(n[p]=h[p]);}}return n;}:c;},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e;};},function(t,e,n){"use strict";var o=n(32),r=n(13),i=n(123),a=[].slice,s={},l=function l(t,e,n){if(!(e in s)){for(var o=[],r=0;r<e;r++){o[r]="a["+r+"]";}s[e]=Function("F,a","return new F("+o.join(",")+")");}return s[e](t,n);};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function s(){var o=n.concat(a.call(arguments));return this instanceof s?l(e,o.length,o):i(e,o,t);};return r(e.prototype)&&(s.prototype=e.prototype),s;};},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3]);}return t.apply(n,e);};},function(t,e,n){var o=n(10).parseInt,r=n(54).trim,i=n(91),a=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=r(String(t),3);return o(n,e>>>0||(a.test(n)?16:10));}:o;},function(t,e,n){var o=n(10).parseFloat,r=n(54).trim;t.exports=1/o(n(91)+"-0")!=-1/0?function(t){var e=r(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n;}:o;},function(t,e,n){var o=n(37);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t;};},function(t,e,n){var o=n(13),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t;};},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t);};},function(t,e,n){"use strict";var o=n(48),r=n(43),i=n(53),a={};n(27)(a,n(14)("iterator"),function(){return this;}),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator");};},function(t,e,n){var o=n(12);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n);}catch(e){var i=t["return"];throw void 0!==i&&o(i.call(t)),e;}};},function(t,e,n){var o=n(281);t.exports=function(t,e){return new(o(t))(e);};},function(t,e,n){var o=n(32),r=n(20),i=n(61),a=n(16);t.exports=function(t,e,n,s,l){o(e);var c=r(t),u=i(c),f=a(c.length),d=l?f-1:0,p=l?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break;}if(d+=p,l?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value");}for(;l?d>=0:f>d;d+=p){d in u&&(s=e(s,u[d],d,c));}return s;};},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),s=r(t,a),l=r(e,a),c=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===c?a:r(c,a))-l,a-s),f=1;for(l<s&&s<l+u&&(f=-1,l+=u-1,s+=u-1);u-->0;){l in n?n[s]=n[l]:delete n[s],s+=f,l+=f;}return n;};},function(t,e){t.exports=function(t,e){return{value:e,done:!!t};};},function(t,e,n){"use strict";var o=n(106);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o});},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)});},function(t,e,n){"use strict";var o,r,i,a,s=n(45),l=n(10),c=n(31),u=n(63),f=n(0),d=n(13),p=n(32),h=n(57),v=n(76),g=n(64),y=n(108).set,b=n(301)(),k=n(138),m=n(302),x=n(77),w=n(139),S=l.TypeError,T=l.process,E=T&&T.versions,B=E&&E.v8||"",_C=l.Promise,_="process"==u(T),I=function I(){},O=r=k.f,M=!!function(){try{var t=_C.resolve(1),e=(t.constructor={})[n(14)("species")]=function(t){t(I,I);};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof e&&0!==B.indexOf("6.6")&&-1===x.indexOf("Chrome/66");}catch(t){}}(),R=function R(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e;},A=function A(t,e){if(!t._n){t._n=!0;var n=t._c;b(function(){for(var o=t._v,r=1==t._s,i=0,a=function a(e){var n,i,a,s=r?e.ok:e.fail,l=e.resolve,c=e.reject,u=e.domain;try{s?(r||(2==t._h&&L(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?c(S("Promise-chain cycle")):(i=R(n))?i.call(n,l,c):l(n)):c(o);}catch(t){u&&!a&&u.exit(),c(t);}};n.length>i;){a(n[i++]);}t._c=[],t._n=!1,e&&!t._h&&N(t);});}},N=function N(t){y.call(l,function(){var e,n,o,r=t._v,i=P(t);if(i&&(e=m(function(){_?T.emit("unhandledRejection",r,t):(n=l.onunhandledrejection)?n({promise:t,reason:r}):(o=l.console)&&o.error&&o.error("Unhandled promise rejection",r);}),t._h=_||P(t)?2:1),t._a=void 0,i&&e.e)throw e.v;});},P=function P(t){return 1!==t._h&&0===(t._a||t._c).length;},L=function L(t){y.call(l,function(){var e;_?T.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v});});},D=function D(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0));},j=function j(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=R(t))?b(function(){var o={_w:n,_d:!1};try{e.call(t,c(j,o,1),c(D,o,1));}catch(t){D.call(o,t);}}):(n._v=t,n._s=1,A(n,!1));}catch(t){D.call({_w:n,_d:!1},t);}}};M||(_C=function C(t){h(this,_C,"Promise","_h"),p(t),o.call(this);try{t(c(j,this,1),c(D,this,1));}catch(t){D.call(this,t);}},(o=function o(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1;}).prototype=n(58)(_C.prototype,{then:function then(t,e){var n=O(g(this,_C));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise;},"catch":function _catch(t){return this.then(void 0,t);}}),i=function i(){var t=new o();this.promise=t,this.resolve=c(j,t,1),this.reject=c(D,t,1);},k.f=O=function O(t){return t===_C||t===a?new i(t):r(t);}),f(f.G+f.W+f.F*!M,{Promise:_C}),n(53)(_C,"Promise"),n(56)("Promise"),a=n(17).Promise,f(f.S+f.F*!M,"Promise",{reject:function reject(t){var e=O(this);return(0,e.reject)(t),e.promise;}}),f(f.S+f.F*(s||!M),"Promise",{resolve:function resolve(t){return w(s&&this===a?_C:this,t);}}),f(f.S+f.F*!(M&&n(72)(function(t){_C.all(t)["catch"](I);})),"Promise",{all:function all(t){var e=this,n=O(e),o=n.resolve,r=n.reject,i=m(function(){var n=[],i=0,a=1;v(t,!1,function(t){var s=i++,l=!1;n.push(void 0),a++,e.resolve(t).then(function(t){l||(l=!0,n[s]=t,--a||o(n));},r);}),--a||o(n);});return i.e&&r(i.v),n.promise;},race:function race(t){var e=this,n=O(e),o=n.reject,r=m(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,o);});});return r.e&&o(r.v),n.promise;}});},function(t,e,n){"use strict";var o=n(32);function r(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o;}),this.resolve=o(e),this.reject=o(n);}t.exports.f=function(t){return new r(t);};},function(t,e,n){var o=n(12),r=n(13),i=n(138);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise;};},function(t,e,n){"use strict";var o=n(19).f,r=n(48),i=n(58),a=n(31),s=n(57),l=n(76),c=n(97),u=n(134),f=n(56),d=n(18),p=n(41).fastKey,h=n(52),v=d?"_s":"size",g=function g(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n){if(n.k==e)return n;}};t.exports={getConstructor:function getConstructor(t,e,n,c){var u=t(function(t,o){s(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&l(o,n,t[c],t);});return i(u.prototype,{clear:function clear(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n){o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];}t._f=t._l=void 0,t[v]=0;},"delete":function _delete(t){var n=h(this,e),o=g(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[v]--;}return!!o;},forEach:function forEach(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;){for(o(n.v,n.k,this);n&&n.r;){n=n.p;}}},has:function has(t){return!!g(h(this,e),t);}}),d&&o(u.prototype,"size",{get:function get(){return h(this,e)[v];}}),u;},def:function def(t,e,n){var o,r,i=g(t,e);return i?i.v=n:(t._l=i={i:r=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t;},getEntry:g,setStrong:function setStrong(t,e,n){c(t,e,function(t,n){this._t=h(t,e),this._k=n,this._l=void 0;},function(){for(var t=this._k,e=this._l;e&&e.r;){e=e.p;}return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1));},n?"entries":"values",!n,!0),f(e);}};},function(t,e,n){"use strict";var o=n(58),r=n(41).getWeak,i=n(12),a=n(13),s=n(57),l=n(76),c=n(36),u=n(26),f=n(52),d=c(5),p=c(6),h=0,v=function v(t){return t._l||(t._l=new g());},g=function g(){this.a=[];},y=function y(t,e){return d(t.a,function(t){return t[0]===e;});};g.prototype={get:function get(t){var e=y(this,t);if(e)return e[1];},has:function has(t){return!!y(this,t);},set:function set(t,e){var n=y(this,t);n?n[1]=e:this.a.push([t,e]);},"delete":function _delete(t){var e=p(this.a,function(e){return e[0]===t;});return~e&&this.a.splice(e,1),!!~e;}},t.exports={getConstructor:function getConstructor(t,e,n,i){var c=t(function(t,o){s(t,c,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&l(o,n,t[i],t);});return o(c.prototype,{"delete":function _delete(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e))["delete"](t):n&&u(n,this._i)&&delete n[this._i];},has:function has(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i);}}),c;},def:function def(t,e,n){var o=r(i(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t;},ufstore:v};},function(t,e,n){var o=n(33),r=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n;};},function(t,e,n){var o=n(49),r=n(70),i=n(12),a=n(10).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e;};},function(t,e,n){var o=n(16),r=n(93),i=n(38);t.exports=function(t,e,n,a){var s=String(i(t)),l=s.length,c=void 0===n?" ":String(n),u=o(e);if(u<=l||""==c)return s;var f=u-l,d=r.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d;};},function(t,e,n){var o=n(18),r=n(46),i=n(28),a=n(62).f;t.exports=function(t){return function(e){for(var n,s=i(e),l=r(s),c=l.length,u=0,f=[];c>u;){n=l[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);}return f;};};},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,o){var r=e&&e.prototype instanceof u?e:u,i=Object.create(r.prototype),a=new w(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return T();}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===c)continue;return s;}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg);}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=l(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:n.done};}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg);}};}(t,n,a),i;}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)};}catch(t){return{type:"throw",arg:t};}}t.wrap=s;var c={};function u(){}function f(){}function d(){}var p={};p[r]=function(){return this;};var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==e&&n.call(v,r)&&(p=v);var g=d.prototype=u.prototype=Object.create(p);function y(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t);};});}function b(t,e){var o;this._invoke=function(r,i){function a(){return new e(function(o,a){!function o(r,i,a,s){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==_typeof(f)&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){o("next",t,a,s);},function(t){o("throw",t,a,s);}):e.resolve(f).then(function(t){u.value=t,a(u);},function(t){return o("throw",t,a,s);});}s(c.arg);}(r,i,o,a);});}return o=o?o.then(a,a):a();};}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");}return c;}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,c;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c);}function m(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(m,this),this.reset(!0);}function S(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;){if(n.call(t,o))return e.value=t[o],e.done=!1,e;}return e.value=void 0,e.done=!0,e;};return i.next=i;}}return{next:T};}function T(){return{value:void 0,done:!0};}return f.prototype=g.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name));},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t;},t.awrap=function(t){return{__await:t};},y(b.prototype),b.prototype[i]=function(){return this;},t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next();});},y(g),g[a]="Generator",g[r]=function(){return this;},g.toString=function(){return"[object Generator]";},t.keys=function(t){var e=[];for(var n in t){e.push(n);}return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n;}return n.done=!0,n;};},t.values=S,w.prototype={constructor:w,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this){"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0);}},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval;},dispatchException:function dispatchException(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o;}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc);}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc);}}}},abrupt:function abrupt(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break;}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a);},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c;},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),c;}},"catch":function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n);}return r;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c;}},t;}(t.exports);try{regeneratorRuntime=o;}catch(t){Function("r","regeneratorRuntime = r")(o);}},function(t,e,n){var o=n(148);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0;}};},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++){o[n]=t[n];}return o;};},function(t){t.exports=JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(5),n(6),n(4),n(152)],void 0===(i="function"==typeof(o=function o(t,e,_o17,r,i,a){"use strict";var s=n(1);function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(t,"__esModule",{value:!0}),t.CriticalError=void 0,e=s(e),_o17=s(_o17),r=s(r),i=s(i);var c=function(t){(0,_o17["default"])(s,t);var n,a=(n=s,function(){var t,e=(0,i["default"])(n);if(l()){var o=(0,i["default"])(this).constructor;t=Reflect.construct(e,arguments,o);}else t=e.apply(this,arguments);return(0,r["default"])(this,t);});function s(){return(0,e["default"])(this,s),a.apply(this,arguments);}return s;}((0,(a=s(a))["default"])(Error));t.CriticalError=c,c.displayName="CriticalError";})?o.apply(e,r):o)||(t.exports=i);},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;};},function(t,e,n){var o=n(4),r=n(110),i=n(371),a=n(372);function s(e){var n="function"==typeof Map?new Map():void 0;return t.exports=s=function s(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e);}function e(){return a(t,arguments,o(this).constructor);}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t);},s(e);}t.exports=s;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(112),n(9)],void 0===(i="function"==typeof(o=function o(_o18,r,i,a,s,l,c,u,f){"use strict";var d=n(8),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o18,"__esModule",{value:!0}),_o18["default"]=void 0,r=p(r),i=p(i),a=p(a),s=p(s),l=p(l),c=d(c),u=p(u);var v=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(h()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.defaultBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3?arguments[3]:void 0),r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=t.Editor.BlockManager.insert({tool:e,data:n,index:o,needToFocus:r,replace:i});return new u["default"](a);},t.update=function(e,n){var o=t.Editor.BlockManager,r=o.getBlockById(e);if(r){var i=o.getBlockIndex(r);o.insert({id:r.id,tool:r.name,data:n,index:i,replace:!0,tunes:r.tunes});}else c.log("blocks.update(): Block with passed id was not found","warn");},t;}return(0,i["default"])(o,[{key:"getBlocksCount",value:function value(){return this.Editor.BlockManager.blocks.length;}},{key:"getCurrentBlockIndex",value:function value(){return this.Editor.BlockManager.currentBlockIndex;}},{key:"getBlockIndex",value:function value(t){var e=this.Editor.BlockManager.getBlockById(t);if(e)return this.Editor.BlockManager.getBlockIndex(e);c.logLabeled("There is no block with id `"+t+"`","warn");}},{key:"getBlockByIndex",value:function value(t){var e=this.Editor.BlockManager.getBlockByIndex(t);if(void 0!==e)return new u["default"](e);c.logLabeled("There is no block at index `"+t+"`","warn");}},{key:"getById",value:function value(t){var e=this.Editor.BlockManager.getBlockById(t);return void 0===e?(c.logLabeled("There is no block with id `"+t+"`","warn"),null):new u["default"](e);}},{key:"swap",value:function value(t,e){c.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(t,e);}},{key:"move",value:function value(t,e){this.Editor.BlockManager.move(t,e);}},{key:"delete",value:function value(t){try{this.Editor.BlockManager.removeBlock(t);}catch(t){return void c.logLabeled(t,"warn");}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close();}},{key:"clear",value:function value(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close();}},{key:"render",value:function value(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks);}},{key:"renderFromHTML",value:function value(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0);}},{key:"stretchBlock",value:function value(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];c.deprecationAssert(!0,"blocks.stretchBlock()","BlockAPI");var n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e);}},{key:"insertNewBlock",value:function value(){c.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert();}},{key:"methods",get:function get(){var t=this;return{clear:function clear(){return t.clear();},render:function render(e){return t.render(e);},renderFromHTML:function renderFromHTML(e){return t.renderFromHTML(e);},"delete":function _delete(e){return t["delete"](e);},swap:function swap(e,n){return t.swap(e,n);},move:function move(e,n){return t.move(e,n);},getBlockByIndex:function getBlockByIndex(e){return t.getBlockByIndex(e);},getById:function getById(e){return t.getById(e);},getCurrentBlockIndex:function getCurrentBlockIndex(){return t.getCurrentBlockIndex();},getBlockIndex:function getBlockIndex(e){return t.getBlockIndex(e);},getBlocksCount:function getBlocksCount(){return t.getBlocksCount();},stretchBlock:function stretchBlock(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n);},insertNewBlock:function insertNewBlock(){return t.insertNewBlock();},insert:this.insert,update:this.update};}}]),o;}((f=p(f))["default"]);_o18["default"]=v,v.displayName="BlocksAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o19,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o19,"__esModule",{value:!0}),_o19["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0);},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0);},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0);},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0);},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0);},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START);},t;}return(0,i["default"])(o,[{key:"methods",get:function get(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus};}}]),o;}((c=u(c))["default"]);_o19["default"]=d,d.displayName="CaretAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o20,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o20,"__esModule",{value:!0}),_o20["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"on",value:function value(t,e){this.eventsDispatcher.on(t,e);}},{key:"emit",value:function value(t,e){this.eventsDispatcher.emit(t,e);}},{key:"off",value:function value(t,e){this.eventsDispatcher.off(t,e);}},{key:"methods",get:function get(){var t=this;return{emit:function emit(e,n){return t.emit(e,n);},off:function off(e,n){return t.off(e,n);},on:function on(e,n){return t.on(e,n);}};}}]),o;}((c=u(c))["default"]);_o20["default"]=d,d.displayName="EventsAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(59),n(7),n(9)],void 0===(i="function"==typeof(o=function o(_o21,r,i,a,s,l,c,u,f){"use strict";var d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o21,"__esModule",{value:!0}),_o21["default"]=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c);var h=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(p()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"getMethodsForTool",value:function value(_t3){return Object.assign(this.methods,{t:function t(e){return c["default"].t(o.getNamespace(_t3),e);}});}},{key:"methods",get:function get(){return{t:function t(){(0,u.logLabeled)("I18n.t() method can be accessed only from Tools","warn");}};}}],[{key:"getNamespace",value:function value(t){return t.isTune()?"blockTunes.".concat(t.name):"tools.".concat(t.name);}}]),o;}((f=d(f))["default"]);_o21["default"]=h,h.displayName="I18nAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o22,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o22,"__esModule",{value:!0}),_o22["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"open",value:function value(){this.Editor.InlineToolbar.tryToShow();}},{key:"close",value:function value(){this.Editor.InlineToolbar.close();}},{key:"methods",get:function get(){var t=this;return{close:function close(){return t.close();},open:function open(){return t.open();}};}}]),o;}((c=u(c))["default"]);_o22["default"]=d,d.displayName="InlineToolbarAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o23,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o23,"__esModule",{value:!0}),_o23["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"on",value:function value(t,e,n,o){return this.listeners.on(t,e,n,o);}},{key:"off",value:function value(t,e,n,o){this.listeners.off(t,e,n,o);}},{key:"offById",value:function value(t){this.listeners.offById(t);}},{key:"methods",get:function get(){var t=this;return{on:function on(e,n,o,r){return t.on(e,n,o,r);},off:function off(e,n,o,r){return t.off(e,n,o,r);},offById:function offById(e){return t.offById(e);}};}}]),o;}((c=u(c))["default"]);_o23["default"]=d,d.displayName="ListenersAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(376),n(9)],void 0===(i="function"==typeof(o=function o(_o24,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o24,"__esModule",{value:!0}),_o24["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r["default"])(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).notifier=new c["default"](),e;}return(0,i["default"])(o,[{key:"show",value:function value(t){return this.notifier.show(t);}},{key:"methods",get:function get(){var t=this;return{show:function show(e){return t.show(e);}};}}]),o;}((u=f(u))["default"]);_o24["default"]=p,p.displayName="NotifierAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o25,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o25,"__esModule",{value:!0}),_o25["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"toggle",value:function value(t){return this.Editor.ReadOnly.toggle(t);}},{key:"methods",get:function get(){var t=this;return{toggle:function toggle(e){return t.toggle(e);},isEnabled:this.isEnabled};}},{key:"isEnabled",get:function get(){return this.Editor.ReadOnly.isEnabled;}}]),o;}((c=u(c))["default"]);_o25["default"]=d,d.displayName="ReadOnlyAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(65)],void 0===(i="function"==typeof(o=function o(_o26,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o26,"__esModule",{value:!0}),_o26["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"clean",value:function value(t,e){return(0,u.clean)(t,e);}},{key:"methods",get:function get(){var t=this;return{clean:function clean(e,n){return t.clean(e,n);}};}}]),o;}((c=f(c))["default"]);_o26["default"]=p,p.displayName="SanitizerAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(9)],void 0===(i="function"==typeof(o=function o(_o27,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o27,"__esModule",{value:!0}),_o27["default"]=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=f(c);var h=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(p()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"save",value:function value(){var t="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(c.logLabeled(t,"warn"),Promise.reject(new Error(t))):this.Editor.Saver.save();}},{key:"methods",get:function get(){var t=this;return{save:function save(){return t.save();}};}}]),o;}((u=d(u))["default"]);_o27["default"]=h,h.displayName="SaverAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(9)],void 0===(i="function"==typeof(o=function o(_o28,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o28,"__esModule",{value:!0}),_o28["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"findParentTag",value:function value(t,e){return new c["default"]().findParentTag(t,e);}},{key:"expandToTag",value:function value(t){new c["default"]().expandToTag(t);}},{key:"methods",get:function get(){var t=this;return{findParentTag:function findParentTag(e,n){return t.findParentTag(e,n);},expandToTag:function expandToTag(e){return t.expandToTag(e);}};}}]),o;}((u=f(u))["default"]);_o28["default"]=p,p.displayName="SelectionAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o29,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o29,"__esModule",{value:!0}),_o29["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"classes",get:function get(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"};}}]),o;}((c=u(c))["default"]);_o29["default"]=d,d.displayName="StylesAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function o(_o30,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o30,"__esModule",{value:!0}),_o30["default"]=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c),u=f(u);var h=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(p()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"open",value:function value(){this.Editor.Toolbar.moveAndOpen();}},{key:"close",value:function value(){this.Editor.Toolbar.close();}},{key:"toggleBlockSettings",value:function value(t){-1!==this.Editor.BlockManager.currentBlockIndex?(null!=t?t:!this.Editor.BlockSettings.opened)?(this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close():u.logLabeled("Could't toggle the Toolbar because there is no block selected ","warn");}},{key:"methods",get:function get(){var t=this;return{close:function close(){return t.close();},open:function open(){return t.open();},toggleBlockSettings:function toggleBlockSettings(e){return t.toggleBlockSettings(e);}};}}]),o;}(c["default"]);_o30["default"]=h,h.displayName="ToolbarAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(82)],void 0===(i="function"==typeof(o=function o(_o31,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o31,"__esModule",{value:!0}),_o31["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c),u=f(u);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r["default"])(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).tooltip=new u["default"](),e;}return(0,i["default"])(o,[{key:"destroy",value:function value(){this.tooltip.destroy();}},{key:"show",value:function value(t,e,n){this.tooltip.show(t,e,n);}},{key:"hide",value:function value(){this.tooltip.hide();}},{key:"onHover",value:function value(t,e,n){this.tooltip.onHover(t,e,n);}},{key:"methods",get:function get(){var t=this;return{show:function show(e,n,o){return t.show(e,n,o);},hide:function hide(){return t.hide();},onHover:function onHover(e,n,o){return t.onHover(e,n,o);}};}}]),o;}(c["default"]);_o31["default"]=p,p.displayName="TooltipAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function o(_o32,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o32,"__esModule",{value:!0}),_o32["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(f()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"methods",get:function get(){return{nodes:this.editorNodes};}},{key:"editorNodes",get:function get(){return{wrapper:this.Editor.UI.nodes.wrapper,redactor:this.Editor.UI.nodes.redactor};}}]),o;}((c=u(c))["default"]);_o32["default"]=d,d.displayName="UiAPI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(25),n(60)],void 0===(i="function"==typeof(o=function o(_o33,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o33,"__esModule",{value:!0}),_o33["default"]=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=p(u),f=h(f),d=h(d);var g=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(v()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"keydown",value:function value(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case u.keyCodes.BACKSPACE:this.backspace(t);break;case u.keyCodes.ENTER:this.enter(t);break;case u.keyCodes.DOWN:case u.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case u.keyCodes.UP:case u.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case u.keyCodes.TAB:this.tabPressed(t);}}},{key:"beforeKeydownProcessing",value:function value(t){this.needToolbarClosing(t)&&u.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)));}},{key:"keyup",value:function value(t){t.shiftKey||this.Editor.UI.checkEmptiness();}},{key:"tabPressed",value:function value(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.InlineToolbar,r=e.ConversionToolbar,i=n.currentBlock;if(i){var a=i.isEmpty,s=i.tool.isDefault&&a,l=!a&&r.opened,c=!a&&!f["default"].isCollapsed&&o.opened;s?this.activateToolbox():l||c||this.activateBlockSettings();}}},{key:"dragOver",value:function value(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0;}},{key:"dragLeave",value:function value(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1;}},{key:"handleCommandC",value:function value(t){var e=this.Editor.BlockSelection;e.anyBlockSelected&&e.copySelectedBlocks(t);}},{key:"handleCommandX",value:function value(t){var e=this.Editor,n=e.BlockSelection,o=e.BlockManager,r=e.Caret;n.anyBlockSelected&&n.copySelectedBlocks(t).then(function(){var e=o.removeSelectedBlocks(),i=o.insertDefaultBlockAtIndex(e,!0);r.setToBlock(i,r.positions.START),n.clearSelection(t);});}},{key:"enter",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.UI;if(!n.currentBlock.tool.isLineBreaksEnabled&&!(o.someToolbarOpened&&o.someFlipperButtonFocused||t.shiftKey)){var r=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):r=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(r),this.Editor.Toolbar.moveAndOpen(r),t.preventDefault();}}},{key:"backspace",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.currentBlock,a=i.tool;if(i.selected||i.isEmpty&&i.currentInput===i.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),r.setToBlock(n.currentBlock,s?r.positions.END:r.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t);}if(!a.isLineBreaksEnabled||r.isAtStart){var l=0===n.currentBlockIndex;r.isAtStart&&f["default"].isCollapsed&&i.currentInput===i.firstInput&&!l&&(t.preventDefault(),this.mergeBlocks());}}},{key:"mergeBlocks",value:function value(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,r=e.previousBlock,i=e.currentBlock;if(i.name!==r.name||!r.mergeable)return 0===r.inputs.length||r.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(r.pluginsContent),e.mergeBlocks(r,i).then(function(){n.restoreCaret(r.pluginsContent),r.pluginsContent.normalize(),o.close();});}},{key:"arrowRightAndDown",value:function value(t){var e=this,n=d["default"].usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():((t.keyCode===u.keyCodes.DOWN||t.keyCode===u.keyCodes.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?t.preventDefault():u.delay(function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput();},20)(),this.Editor.BlockSelection.clearSelection(t));}}},{key:"arrowLeftAndUp",value:function value(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(d["default"].usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars();}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):((t.keyCode===u.keyCodes.UP||t.keyCode===u.keyCodes.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?t.preventDefault():u.delay(function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput();},20)(),this.Editor.BlockSelection.clearSelection(t));}},{key:"needToolbarClosing",value:function value(t){var e=t.keyCode===u.keyCodes.ENTER&&this.Editor.Toolbar.toolbox.opened,n=t.keyCode===u.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===u.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,r=t.keyCode===u.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,i=t.keyCode===u.keyCodes.TAB;return!(t.shiftKey||i||e||n||o||r);}},{key:"activateToolbox",value:function value(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open();}},{key:"activateBlockSettings",value:function value(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.moveAndOpen()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open();}}]),o;}(c["default"]);_o33["default"]=g,g.displayName="BlockEvents",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(66),n(9),n(15),n(7),n(382),n(112),n(383)],void 0===(i="function"==typeof(o=function o(_o34,r,i,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b=n(8),k=n(1);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o34,"__esModule",{value:!0}),_o34["default"]=void 0,r=k(r),i=k(i),a=k(a),s=k(s),l=k(l),c=k(c),u=k(u),f=b(f),d=k(d),p=k(p),h=b(h),v=k(v),g=k(g);var x=function(t){(0,l["default"])(b,t);var e,n,o,d=(e=b,function(){var t,n=(0,u["default"])(e);if(m()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function b(){var t;return(0,a["default"])(this,b),(t=d.apply(this,arguments))._currentBlockIndex=-1,t._blocks=null,t;}return(0,s["default"])(b,[{key:"prepare",value:function value(){var t=this,e=new v["default"](this.Editor.UI.nodes.redactor);this._blocks=new Proxy(e,{set:v["default"].set,get:v["default"].get}),this.listeners.on(document,"copy",function(e){return t.Editor.BlockEvents.handleCommandC(e);});}},{key:"toggleReadOnly",value:function value(t){t?this.disableModuleBindings():this.enableModuleBindings();}},{key:"composeBlock",value:function value(t){var e=t.tool,n=t.data,o=void 0===n?{}:n,r=t.id,i=void 0===r?void 0:r,a=t.tunes,s=void 0===a?{}:a,l=this.Editor.ReadOnly.isEnabled,c=this.Editor.Tools.blockTools.get(e),u=new f["default"]({id:i,data:o,tool:c,api:this.Editor.API,readOnly:l,tunesData:s});return l||this.bindBlockEvents(u),u;}},{key:"insert",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=void 0===e?void 0:e,o=t.tool,r=void 0===o?this.config.defaultBlock:o,i=t.data,a=void 0===i?{}:i,s=t.index,l=t.needToFocus,c=void 0===l||l,u=t.replace,f=void 0!==u&&u,d=t.tunes,p=void 0===d?{}:d,h=s;void 0===h&&(h=this.currentBlockIndex+(f?0:1));var v=this.composeBlock({id:n,tool:r,data:a,tunes:p});return f&&this.blockDidMutated(y.BlockMutationType.Removed,this.getBlockByIndex(h),{index:h}),this._blocks.insert(h,v,f),this.blockDidMutated(y.BlockMutationType.Added,v,{index:h}),c?this.currentBlockIndex=h:h<=this.currentBlockIndex&&this.currentBlockIndex++,v;}},{key:"replace",value:function value(t){var e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o;return this.insert({tool:n,data:r,index:this.currentBlockIndex,replace:!0});}},{key:"paste",value:function value(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.insert({tool:t,replace:n});try{o.call(f.BlockToolAPI.ON_PASTE,e);}catch(e){h.log("".concat(t,": onPaste callback call is failed"),"error",e);}return o;}},{key:"insertDefaultBlockAtIndex",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[t]=n,this.blockDidMutated(y.BlockMutationType.Added,n,{index:t}),e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n;}},{key:"insertAtEnd",value:function value(){return this.currentBlockIndex=this.blocks.length-1,this.insert();}},{key:"mergeBlocks",value:(o=(0,i["default"])(r["default"].mark(function t(e,n){var o,i;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(o=this._blocks.indexOf(n),!n.isEmpty){t.next=3;break;}return t.abrupt("return");case 3:return t.next=5,n.data;case 5:if(i=t.sent,h.isEmpty(i)){t.next=9;break;}return t.next=9,e.mergeWith(i);case 9:this.removeBlock(o),this.currentBlockIndex=this._blocks.indexOf(e);case 11:case"end":return t.stop();}}},t,this);})),function(t,e){return o.apply(this,arguments);})},{key:"removeBlock",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentBlockIndex;if(!this.validateIndex(t))throw new Error("Can't find a Block to remove");var e=this._blocks[t];e.destroy(),this._blocks.remove(t),this.blockDidMutated(y.BlockMutationType.Removed,e,{index:t}),this.currentBlockIndex>=t&&this.currentBlockIndex--,this.blocks.length?0===t&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,this.insert());}},{key:"removeSelectedBlocks",value:function value(){for(var t,e=this.blocks.length-1;e>=0;e--){this.blocks[e].selected&&(this.removeBlock(e),t=e);}return t;}},{key:"removeAllBlocks",value:function value(){for(var t=this.blocks.length-1;t>=0;t--){this._blocks.remove(t);}this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus();}},{key:"split",value:function value(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=p["default"].make("div");e.appendChild(t);var n={text:p["default"].isEmpty(e)?"":e.innerHTML};return this.insert({data:n});}},{key:"getBlockByIndex",value:function value(t){return-1===t&&(t=this._blocks.length-1),this._blocks[t];}},{key:"getBlockIndex",value:function value(t){return this._blocks.indexOf(t);}},{key:"getBlockById",value:function value(t){return this._blocks.array.find(function(e){return e.id===t;});}},{key:"getBlock",value:function value(t){p["default"].isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(f["default"].CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o];}},{key:"highlightCurrentNode",value:function value(){this.clearFocused(),this.currentBlock.focused=!0;}},{key:"clearFocused",value:function value(){this.blocks.forEach(function(t){t.focused=!1;});}},{key:"setCurrentBlockByChildNode",value:function value(t){p["default"].isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f["default"].CSS.wrapper));if(e){var n=e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));if(null==n?void 0:n.isEqualNode(this.Editor.UI.nodes.wrapper))return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock.updateCurrentInput(),this.currentBlock;}}},{key:"getBlockByChildNode",value:function value(t){p["default"].isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f["default"].CSS.wrapper));return this.blocks.find(function(t){return t.holder===e;});}},{key:"swap",value:function value(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e;}},{key:"move",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?h.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t,this.blockDidMutated(y.BlockMutationType.Moved,this.currentBlock,{fromIndex:e,toIndex:t})):h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn");}},{key:"dropPointer",value:function value(){this.currentBlockIndex=-1,this.clearFocused();}},{key:"clear",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(),this.Editor.UI.checkEmptiness();}},{key:"destroy",value:(n=(0,i["default"])(r["default"].mark(function t(){return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.blocks.map(function(t){return t.destroy();}));case 2:case"end":return t.stop();}}},t,this);})),function(){return n.apply(this,arguments);})},{key:"bindBlockEvents",value:function value(t){var e=this,n=this.Editor.BlockEvents;this.readOnlyMutableListeners.on(t.holder,"keydown",function(t){n.keydown(t);}),this.readOnlyMutableListeners.on(t.holder,"keyup",function(t){n.keyup(t);}),this.readOnlyMutableListeners.on(t.holder,"dragover",function(t){n.dragOver(t);}),this.readOnlyMutableListeners.on(t.holder,"dragleave",function(t){n.dragLeave(t);}),t.on("didMutated",function(t){return e.blockDidMutated(y.BlockMutationType.Changed,t,{index:e.getBlockIndex(t)});});}},{key:"disableModuleBindings",value:function value(){this.readOnlyMutableListeners.clearAll();}},{key:"enableModuleBindings",value:function value(){var t=this;this.readOnlyMutableListeners.on(document,"cut",function(e){return t.Editor.BlockEvents.handleCommandX(e);}),this.blocks.forEach(function(e){t.bindBlockEvents(e);});}},{key:"validateIndex",value:function value(t){return!(t<0||t>=this._blocks.length);}},{key:"blockDidMutated",value:function value(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new CustomEvent(t,{detail:Object.assign({target:new g["default"](e)},n)});return this.Editor.ModificationsObserver.onChange(o),e;}},{key:"currentBlockIndex",get:function get(){return this._currentBlockIndex;},set:function set(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t;}},{key:"firstBlock",get:function get(){return this._blocks[0];}},{key:"lastBlock",get:function get(){return this._blocks[this._blocks.length-1];}},{key:"currentBlock",get:function get(){return this._blocks[this.currentBlockIndex];},set:function set(t){this.currentBlockIndex=this.getBlockIndex(t);}},{key:"nextBlock",get:function get(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1];}},{key:"nextContentfulBlock",get:function get(){return this.blocks.slice(this.currentBlockIndex+1).find(function(t){return!!t.inputs.length;});}},{key:"previousContentfulBlock",get:function get(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find(function(t){return!!t.inputs.length;});}},{key:"previousBlock",get:function get(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1];}},{key:"blocks",get:function get(){return this._blocks.array;}},{key:"isEditorEmpty",get:function get(){return this.blocks.every(function(t){return t.isEmpty;});}}]),b;}(d["default"]);_o34["default"]=x,x.displayName="BlockManager",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(15),n(114),n(25),n(65)],void 0===(i="function"==typeof(o=function o(_o35,r,i,a,s,l,c,u,f,d,p,h){"use strict";var v=n(8),g=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o35,"__esModule",{value:!0}),_o35["default"]=void 0,r=g(r),i=g(i),a=g(a),s=g(s),l=g(l),c=g(c),u=v(u),f=g(f),d=g(d),p=g(p);var b=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(y()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).anyBlockSelectedCache=null,t.needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t;}return(0,i["default"])(o,[{key:"prepare",value:function value(){var t=this;this.selection=new p["default"](),d["default"].add({name:"CMD+A",handler:function handler(e){var n=t.Editor,o=n.BlockManager;if(n.ReadOnly.isEnabled)return e.preventDefault(),void t.selectAllBlocks();o.currentBlock&&t.handleCommandA(e);},on:this.Editor.UI.nodes.redactor});}},{key:"toggleReadOnly",value:function value(t){p["default"].get().removeAllRanges(),this.allBlocksSelected=!1;}},{key:"unSelectBlockByIndex",value:function value(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1,this.clearCache();}},{key:"clearSelection",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.RectangleSelection;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;var a=t&&t instanceof KeyboardEvent,s=a&&u.isPrintableKey(t.keyCode);if(this.anyBlockSelected&&a&&s&&!p["default"].isSelectionExists){var l=o.removeSelectedBlocks();o.insertDefaultBlockAtIndex(l,!0),r.setToBlock(o.currentBlock),u.delay(function(){var e=t.key;r.insertContentAtCaretPosition(e.length>1?"":e);},20)();}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!i.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection();}},{key:"copySelectedBlocks",value:function value(t){var e=this;t.preventDefault();var n=f["default"].make("div");this.selectedBlocks.forEach(function(t){var o=(0,h.clean)(t.holder.innerHTML,e.sanitizerConfig),r=f["default"].make("p");r.innerHTML=o,n.appendChild(r);});var o=Array.from(n.childNodes).map(function(t){return t.textContent;}).join("\n\n"),r=n.innerHTML;return t.clipboardData.setData("text/plain",o),t.clipboardData.setData("text/html",r),Promise.all(this.selectedBlocks.map(function(t){return t.save();})).then(function(n){try{t.clipboardData.setData(e.Editor.Paste.MIME_TYPE,JSON.stringify(n));}catch(t){}});}},{key:"selectBlockByIndex",value:function value(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),p["default"].get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close();}},{key:"clearCache",value:function value(){this.anyBlockSelectedCache=null;}},{key:"destroy",value:function value(){d["default"].remove(this.Editor.UI.nodes.redactor,"CMD+A");}},{key:"handleCommandA",value:function value(t){if(this.Editor.RectangleSelection.clearSelection(),!f["default"].isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0;}else this.readyToBlockSelection=!0;}},{key:"selectAllBlocks",value:function value(){this.selection.save(),p["default"].get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close();}},{key:"sanitizerConfig",get:function get(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}};}},{key:"allBlocksSelected",get:function get(){return this.Editor.BlockManager.blocks.every(function(t){return!0===t.selected;});},set:function set(t){this.Editor.BlockManager.blocks.forEach(function(e){e.selected=t;}),this.clearCache();}},{key:"anyBlockSelected",get:function get(){var t=this.Editor.BlockManager;return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=t.blocks.some(function(t){return!0===t.selected;})),this.anyBlockSelectedCache;}},{key:"selectedBlocks",get:function get(){return this.Editor.BlockManager.blocks.filter(function(t){return t.selected;});}}]),o;}(c["default"]);_o35["default"]=b,b.displayName="BlockSelection",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(9),n(15),n(7)],void 0===(i="function"==typeof(o=function o(_o36,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o36,"__esModule",{value:!0}),_o36["default"]=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var g=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(v()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){return(0,r["default"])(this,o),n.apply(this,arguments);}return(0,i["default"])(o,[{key:"setToBlock",value:function value(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput;}if(e){var a=f["default"].getDeepestNode(e,o===this.positions.END),s=f["default"].getContentLength(a);switch(!0){case o===this.positions.START:r=0;break;case o===this.positions.END:case r>s:r=s;}d.delay(function(){n.set(a,r);},20)(),i.setCurrentBlockByChildNode(t.holder),i.currentBlock.currentInput=e;}}},{key:"setToInput",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,r=f["default"].getDeepestNode(t);switch(e){case this.positions.START:this.set(r,0);break;case this.positions.END:this.set(r,f["default"].getContentLength(r));break;default:n&&this.set(r,n);}o.currentInput=t;}},{key:"set",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=c["default"].setCursor(t,e),o=n.top,r=n.bottom,i=window,a=i.innerHeight;o<0&&window.scrollBy(0,o),r>a&&window.scrollBy(0,r-a);}},{key:"setToTheLastBlock",value:function value(){var t=this.Editor.BlockManager.lastBlock;if(t)if(t.tool.isDefault&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e);}}},{key:"extractFragmentFromCaretPosition",value:function value(){var t=c["default"].get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){if(f["default"].isNativeInput(n)){var o=n,r=document.createDocumentFragment(),i=o.value.substring(0,o.selectionStart),a=o.value.substring(o.selectionStart);return r.textContent=a,o.value=i,r;}var s=e.cloneRange();return s.selectNodeContents(n),s.setStart(e.endContainer,e.endOffset),s.extractContents();}}}},{key:"navigateNext",value:function value(){var t=this.Editor.BlockManager,e=t.currentBlock,n=t.nextContentfulBlock,o=e.nextInput,r=this.isAtEnd,i=n;if(!i&&!o){if(e.tool.isDefault||!r)return!1;i=t.insertAtEnd();}return!!r&&(o?this.setToInput(o,this.positions.START):this.setToBlock(i,this.positions.START),!0);}},{key:"navigatePrevious",value:function value(){var t=this.Editor.BlockManager,e=t.currentBlock,n=t.previousContentfulBlock;if(!e)return!1;var o=e.previousInput;return!(!n&&!o||!this.isAtStart||(o?this.setToInput(o,this.positions.END):this.setToBlock(n,this.positions.END),0));}},{key:"createShadow",value:function value(t){var e=document.createElement("span");e.classList.add(o.CSS.shadowCaret),t.insertAdjacentElement("beforeend",e);}},{key:"restoreCaret",value:function value(t){var e=t.querySelector(".".concat(o.CSS.shadowCaret));e&&(new c["default"]().expandToTag(e),setTimeout(function(){var t=document.createRange();t.selectNode(e),t.extractContents();},50));}},{key:"insertContentAtCaretPosition",value:function value(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=c["default"].get(),r=c["default"].range;n.innerHTML=t,Array.from(n.childNodes).forEach(function(t){return e.appendChild(t);}),0===e.childNodes.length&&e.appendChild(new Text());var i=e.lastChild;r.deleteContents(),r.insertNode(e);var a=document.createRange();a.setStart(i,i.textContent.length),o.removeAllRanges(),o.addRange(a);}},{key:"getHigherLevelSiblings",value:function value(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;){n=n.parentNode;}for(var r="left"===e?"previousSibling":"nextSibling";n[r];){n=n[r],o.push(n);}return o;}},{key:"positions",get:function get(){return{START:"start",END:"end",DEFAULT:"default"};}},{key:"isAtStart",get:function get(){var t=c["default"].get(),e=f["default"].getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f["default"].isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var r=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[r]?(n=n.childNodes[r],r=0):r=(n=n.childNodes[r-1]).textContent.length),!(!f["default"].isLineBreakTag(e)&&!f["default"].isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every(function(t){var e=f["default"].isLineBreakTag(t),n=1===t.children.length&&f["default"].isLineBreakTag(t.children[0]),o=e||n;return f["default"].isEmpty(t)&&!o;})||r!==o)||null===e||n===e&&r<=o;}},{key:"isAtEnd",get:function get(){var t=c["default"].get(),e=t.focusNode,n=f["default"].getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f["default"].isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f["default"].isLineBreakTag(n)||f["default"].isEmpty(n)){var r=this.getHigherLevelSiblings(e,"right");if(r.every(function(t,e){return e===r.length-1&&f["default"].isLineBreakTag(t)||f["default"].isEmpty(t)&&!f["default"].isLineBreakTag(t);})&&o===e.textContent.length)return!0;}var i=n.textContent.replace(/\s+$/,"");return e===n&&o>=i.length;}}],[{key:"CSS",get:function get(){return{shadowCaret:"cdx-shadow-caret"};}}]),o;}(u["default"]);_o36["default"]=g,g.displayName="Caret",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(25),n(7)],void 0===(i="function"==typeof(o=function o(_o37,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o37,"__esModule",{value:!0}),_o37["default"]=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=v(d),p=h(p);var y=function(t){(0,l["default"])(f,t);var e,n,o=(e=f,function(){var t,n=(0,u["default"])(e);if(g()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function f(){var t;return(0,a["default"])(this,f),(t=o.apply(this,arguments)).onMouseUp=function(){t.listeners.off(document,"mouseover",t.onMouseOver),t.listeners.off(document,"mouseup",t.onMouseUp);},t.onMouseOver=function(e){var n=t.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,a=o.getBlockByChildNode(e.target);if(i&&a&&a!==i){if(i===t.firstSelectedBlock)return d["default"].get().removeAllRanges(),i.selected=!0,a.selected=!0,void r.clearCache();if(a===t.firstSelectedBlock)return i.selected=!1,a.selected=!1,void r.clearCache();t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(i,a),t.lastSelectedBlock=a;}},t;}return(0,s["default"])(f,[{key:"prepare",value:(n=(0,i["default"])(r["default"].mark(function t(){var e=this;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:this.listeners.on(document,"mousedown",function(t){e.enableCrossBlockSelection(t);});case 1:case"end":return t.stop();}}},t,this);})),function(){return n.apply(this,arguments);})},{key:"watchSelection",value:function value(t){if(t.button===p.mouseButtons.LEFT){var e=this.Editor.BlockManager;this.firstSelectedBlock=e.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp);}}},{key:"toggleBlockSelectedState",value:function value(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor,n=e.BlockManager,o=e.BlockSelection;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=n.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,o.clearCache(),d["default"].get().removeAllRanges());var r=n.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),i=n.blocks[r];i&&(this.lastSelectedBlock.selected!==i.selected?(i.selected=!0,o.clearCache()):(this.lastSelectedBlock.selected=!1,o.clearCache()),this.lastSelectedBlock=i,this.Editor.InlineToolbar.close(),i.holder.scrollIntoView({block:"nearest"}));}},{key:"clear",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&i>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case p.keyCodes.DOWN:case p.keyCodes.RIGHT:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);break;case p.keyCodes.UP:case p.keyCodes.LEFT:r.setToBlock(n.blocks[Math.min(i,a)],r.positions.START);break;default:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);}else r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null;}},{key:"enableCrossBlockSelection",value:function value(t){var e=this.Editor.UI;d["default"].isCollapsed||this.Editor.BlockSelection.clearSelection(t),e.nodes.redactor.contains(t.target)?this.watchSelection(t):this.Editor.BlockSelection.clearSelection(t);}},{key:"toggleBlocksSelectedState",value:function value(t,e){for(var n=this.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.blocks.indexOf(t),a=o.blocks.indexOf(e),s=t.selected!==e.selected,l=Math.min(i,a);l<=Math.max(i,a);l++){var c=o.blocks[l];c!==this.firstSelectedBlock&&c!==(s?t:e)&&(o.blocks[l].selected=!o.blocks[l].selected,r.clearCache());}}},{key:"isCrossBlockSelectionStarted",get:function get(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock;}}]),f;}(f["default"]);_o37["default"]=y,y.displayName="CrossBlockSelection",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(25),n(9)],void 0===(i="function"==typeof(o=function o(_o38,r,i,a,s,l,c,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o38,"__esModule",{value:!0}),_o38["default"]=void 0,r=p(r),i=p(i),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=p(f);var v=function(t){(0,l["default"])(d,t);var e,n,o=(e=d,function(){var t,n=(0,u["default"])(e);if(h()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function d(){var t;return(0,a["default"])(this,d),(t=o.apply(this,arguments)).isStartedAtEditor=!1,t;}return(0,s["default"])(d,[{key:"toggleReadOnly",value:function value(t){t?this.disableModuleBindings():this.enableModuleBindings();}},{key:"enableModuleBindings",value:function value(){var t=this,e=this.Editor.UI;this.readOnlyMutableListeners.on(e.nodes.holder,"drop",function(){var e=(0,i["default"])(r["default"].mark(function e(n){return r["default"].wrap(function(e){for(;;){switch(e.prev=e.next){case 0:return e.next=2,t.processDrop(n);case 2:case"end":return e.stop();}}},e);}));return function(t){return e.apply(this,arguments);};}(),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",function(){t.processDragStart();}),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",function(e){t.processDragOver(e);},!0);}},{key:"disableModuleBindings",value:function value(){this.readOnlyMutableListeners.clearAll();}},{key:"processDrop",value:(n=(0,i["default"])(r["default"].mark(function t(e){var n,o,i,a,s,l;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach(function(t){t.dropTarget=!1;}),f["default"].isAtEditor&&!f["default"].isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1,(s=o.setCurrentBlockByChildNode(e.target))?this.Editor.Caret.setToBlock(s,i.positions.END):(l=o.setCurrentBlockByChildNode(o.lastBlock.holder),this.Editor.Caret.setToBlock(l,i.positions.END)),t.next=9,a.processDataTransfer(e.dataTransfer,!0);case 9:case"end":return t.stop();}}},t,this);})),function(t){return n.apply(this,arguments);})},{key:"processDragStart",value:function value(){f["default"].isAtEditor&&!f["default"].isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close();}},{key:"processDragOver",value:function value(t){t.preventDefault();}}]),d;}((d=p(d))["default"]);_o38["default"]=v,v.displayName="DragNDrop",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function o(_o39,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o39,"__esModule",{value:!0}),_o39["default"]=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c),u=f(u);var h=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(p()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).disabled=!1,t;}return(0,i["default"])(o,[{key:"enable",value:function value(){this.disabled=!1;}},{key:"disable",value:function value(){this.disabled=!0;}},{key:"onChange",value:function value(t){!this.disabled&&u.isFunction(this.config.onChange)&&this.config.onChange(this.Editor.API.methods,t);}}]),o;}(c["default"]);_o39["default"]=h,h.displayName="ModificationsObserver",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(7),n(65)],void 0===(i="function"==typeof(o=function o(_o40,r,i,a,s,l,c,u,f,d,p,h,v,g){"use strict";var y=n(8),b=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o40,"__esModule",{value:!0}),_o40["default"]=void 0,r=b(r),i=b(i),a=b(a),s=b(s),l=b(l),c=b(c),u=b(u),f=b(f),d=b(d),p=b(p),h=b(h),v=y(v);var m=function(t){(0,u["default"])(T,t);var e,n,o,p,y,b,m,x,w,S=(e=T,function(){var t,n=(0,d["default"])(e);if(k()){var o=(0,d["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,f["default"])(this,t);});function T(){var t;return(0,l["default"])(this,T),(t=S.apply(this,arguments)).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){try{var n=e.create({},{},!1);if(!1===e.pasteConfig)return void t.exceptionList.push(e.name);if(!v.isFunction(n.onPaste))return;t.getTagsConfig(e),t.getFilesConfig(e),t.getPatternsConfig(e);}catch(t){v.log("Paste handling for «".concat(e.name,"» Tool hasn't been set up because of the error"),"warn",t);}},t.handlePasteEvent=function(){var e=(0,s["default"])(a["default"].mark(function e(n){var o,r,i;return a["default"].wrap(function(e){for(;;){switch(e.prev=e.next){case 0:if(o=t.Editor,r=o.BlockManager,i=o.Toolbar,r.currentBlock&&(!t.isNativeBehaviour(n.target)||n.clipboardData.types.includes("Files"))){e.next=3;break;}return e.abrupt("return");case 3:if(!r.currentBlock||!t.exceptionList.includes(r.currentBlock.name)){e.next=5;break;}return e.abrupt("return");case 5:n.preventDefault(),t.processDataTransfer(n.clipboardData),r.clearFocused(),i.close();case 9:case"end":return e.stop();}}},e);}));return function(t){return e.apply(this,arguments);};}(),t;}return(0,c["default"])(T,[{key:"prepare",value:(w=(0,s["default"])(a["default"].mark(function t(){return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:this.processTools();case 1:case"end":return t.stop();}}},t,this);})),function(){return w.apply(this,arguments);})},{key:"toggleReadOnly",value:function value(t){t?this.unsetCallback():this.setCallback();}},{key:"processDataTransfer",value:(x=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,i,s,l,c,u,f,d=arguments;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor.Tools,!((r=e.types).includes?r.includes("Files"):r.contains("Files"))){t.next=8;break;}return t.next=7,this.processFiles(e.files);case 7:return t.abrupt("return");case 8:if(i=e.getData(this.MIME_TYPE),s=e.getData("text/plain"),l=e.getData("text/html"),!i){t.next=19;break;}return t.prev=12,this.insertEditorJSData(JSON.parse(i)),t.abrupt("return");case 17:t.prev=17,t.t0=t["catch"](12);case 19:if(n&&s.trim()&&l.trim()&&(l="<p>"+(l.trim()?l:s)+"</p>"),c=Object.keys(this.toolsTags).reduce(function(t,e){return t[e.toLowerCase()]=!0,t;},{}),u=Object.assign({},c,o.getAllInlineToolsSanitizeConfig(),{br:{}}),(f=(0,g.clean)(l,u)).trim()&&f.trim()!==s&&h["default"].isHTMLString(f)){t.next=28;break;}return t.next=26,this.processText(s);case 26:t.next=30;break;case 28:return t.next=30,this.processText(f,!0);case 30:case"end":return t.stop();}}},t,this,[[12,17]]);})),function(t){return x.apply(this,arguments);})},{key:"processText",value:(m=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,i,l,c,u,f=this,d=arguments;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor,r=o.Caret,i=o.BlockManager,(l=n?this.processHTML(e):this.processPlain(e)).length){t.next=5;break;}return t.abrupt("return");case 5:if(1!==l.length){t.next=8;break;}return l[0].isBlock?this.processSingleBlock(l.pop()):this.processInlinePaste(l.pop()),t.abrupt("return");case 8:c=i.currentBlock&&i.currentBlock.tool.isDefault,u=c&&i.currentBlock.isEmpty,l.map(function(){var t=(0,s["default"])(a["default"].mark(function t(e,n){return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.abrupt("return",f.insertBlock(e,0===n&&u));case 1:case"end":return t.stop();}}},t);}));return function(e,n){return t.apply(this,arguments);};}()),i.currentBlock&&r.setToBlock(i.currentBlock,r.positions.END);case 12:case"end":return t.stop();}}},t,this);})),function(t){return m.apply(this,arguments);})},{key:"setCallback",value:function value(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent);}},{key:"unsetCallback",value:function value(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent);}},{key:"processTools",value:function value(){var t=this.Editor.Tools.blockTools;Array.from(t.values()).forEach(this.processTool);}},{key:"getTagsConfig",value:function value(t){var e=this,n=t.pasteConfig.tags||[];n.forEach(function(n){Object.prototype.hasOwnProperty.call(e.toolsTags,n)?v.log("Paste handler for «".concat(t.name,"» Tool on «").concat(n,"» tag is skipped ")+"because it is already used by «".concat(e.toolsTags[n].tool.name,"» Tool."),"warn"):e.toolsTags[n.toUpperCase()]={tool:t};}),this.tagsByTool[t.name]=n.map(function(t){return t.toUpperCase();});}},{key:"getFilesConfig",value:function value(t){var e=t.pasteConfig.files,n=void 0===e?{}:e,o=n.extensions,r=n.mimeTypes;(o||r)&&(o&&!Array.isArray(o)&&(v.log("«extensions» property of the onDrop config for «".concat(t.name,"» Tool should be an array")),o=[]),r&&!Array.isArray(r)&&(v.log("«mimeTypes» property of the onDrop config for «".concat(t.name,"» Tool should be an array")),r=[]),r&&(r=r.filter(function(e){return!!v.isValidMimeType(e)||(v.log("MIME type value «".concat(e,"» for the «").concat(t.name,"» Tool is not a valid MIME type"),"warn"),!1);})),this.toolsFiles[t.name]={extensions:o||[],mimeTypes:r||[]});}},{key:"getPatternsConfig",value:function value(t){var e=this;t.pasteConfig.patterns&&!v.isEmpty(t.pasteConfig.patterns)&&Object.entries(t.pasteConfig.patterns).forEach(function(n){var o=(0,i["default"])(n,2),r=o[0],a=o[1];a instanceof RegExp||v.log("Pattern ".concat(a," for «").concat(t.name,"» Tool is skipped because it should be a Regexp instance."),"warn"),e.toolsPatterns.push({key:r,pattern:a,tool:t});});}},{key:"isNativeBehaviour",value:function value(t){return h["default"].isNativeInput(t);}},{key:"processFiles",value:(b=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,i,s=this;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager,t.next=3,Promise.all(Array.from(e).map(function(t){return s.processFile(t);}));case 3:o=(o=t.sent).filter(function(t){return!!t;}),r=n.currentBlock.tool.isDefault,i=r&&n.currentBlock.isEmpty,o.forEach(function(t,e){n.paste(t.type,t.event,0===e&&i);});case 8:case"end":return t.stop();}}},t,this);})),function(t){return b.apply(this,arguments);})},{key:"processFile",value:(y=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,s,l;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=v.getFileExtension(e),o=Object.entries(this.toolsFiles).find(function(t){var o=(0,i["default"])(t,2),r=(o[0],o[1]),a=r.mimeTypes,s=r.extensions,l=e.type.split("/"),c=(0,i["default"])(l,2),u=c[0],f=c[1],d=s.find(function(t){return t.toLowerCase()===n.toLowerCase();}),p=a.find(function(t){var e=t.split("/"),n=(0,i["default"])(e,2),o=n[0],r=n[1];return o===u&&(r===f||"*"===r);});return!!d||!!p;})){t.next=4;break;}return t.abrupt("return");case 4:return r=(0,i["default"])(o,1),s=r[0],l=this.composePasteEvent("file",{file:e}),t.abrupt("return",{event:l,type:s});case 7:case"end":return t.stop();}}},t,this);})),function(t){return y.apply(this,arguments);})},{key:"processHTML",value:function value(t){var e=this,n=this.Editor.Tools,o=h["default"].make("DIV");return o.innerHTML=t,this.getNodes(o).map(function(t){var o,r=n.defaultTool,i=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(o=h["default"].make("div")).appendChild(t);break;case Node.ELEMENT_NODE:o=t,i=!0,e.toolsTags[o.tagName]&&(r=e.toolsTags[o.tagName].tool);}var a=r.pasteConfig.tags.reduce(function(t,e){return t[e.toLowerCase()]={},t;},{}),s=Object.assign({},a,r.baseSanitizeConfig);o.innerHTML=(0,g.clean)(o.innerHTML,s);var l=e.composePasteEvent("tag",{data:o});return{content:o,isBlock:i,tool:r.name,event:l};}).filter(function(t){return!h["default"].isNodeEmpty(t.content)||h["default"].isSingleTag(t.content);});}},{key:"processPlain",value:function value(t){var e=this,n=this.config.defaultBlock;if(!t)return[];var o=n;return t.split(/\r?\n/).filter(function(t){return t.trim();}).map(function(t){var n=h["default"].make("div");n.textContent=t;var r=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:r};});}},{key:"processSingleBlock",value:(p=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,i;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Caret,r=n.BlockManager,(i=r.currentBlock)&&e.tool===i.name&&h["default"].containsOnlyInlineElements(e.content.innerHTML)){t.next=5;break;}return this.insertBlock(e,(null==i?void 0:i.tool.isDefault)&&i.isEmpty),t.abrupt("return");case 5:o.insertContentAtCaretPosition(e.content.innerHTML);case 6:case"end":return t.stop();}}},t,this);})),function(t){return p.apply(this,arguments);})},{key:"processInlinePaste",value:(o=(0,s["default"])(a["default"].mark(function t(e){var n,o,r,i,s,l,c,u;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockManager,r=n.Caret,i=e.content,!(o.currentBlock&&o.currentBlock.tool.isDefault&&i.textContent.length<T.PATTERN_PROCESSING_MAX_LENGTH)){t.next=12;break;}return t.next=6,this.processPattern(i.textContent);case 6:if(!(s=t.sent)){t.next=12;break;}return l=o.currentBlock&&o.currentBlock.tool.isDefault&&o.currentBlock.isEmpty,c=o.paste(s.tool,s.event,l),r.setToBlock(c,r.positions.END),t.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(u=o.currentBlock.tool.sanitizeConfig,document.execCommand("insertHTML",!1,(0,g.clean)(i.innerHTML,u))):this.insertBlock(e);case 13:case"end":return t.stop();}}},t,this);})),function(t){return o.apply(this,arguments);})},{key:"processPattern",value:(n=(0,s["default"])(a["default"].mark(function t(e){var n,o;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=this.toolsPatterns.find(function(t){var n=t.pattern.exec(e);return!!n&&e===n.shift();})){t.next=3;break;}return t.abrupt("return");case 3:return o=this.composePasteEvent("pattern",{key:n.key,data:e}),t.abrupt("return",{event:o,tool:n.tool.name});case 5:case"end":return t.stop();}}},t,this);})),function(t){return n.apply(this,arguments);})},{key:"insertBlock",value:function value(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,r=o.BlockManager,i=o.Caret,a=r.currentBlock;if(n&&a&&a.isEmpty)return e=r.paste(t.tool,t.event,!0),void i.setToBlock(e,i.positions.END);e=r.paste(t.tool,t.event),i.setToBlock(e,i.positions.END);}},{key:"insertEditorJSData",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.Caret,r=e.Tools;(0,g.sanitizeBlocks)(t,function(t){return r.blockTools.get(t).sanitizeConfig;}).forEach(function(t,e){var r=t.tool,i=t.data,a=!1;0===e&&(a=n.currentBlock&&n.currentBlock.tool.isDefault&&n.currentBlock.isEmpty);var s=n.insert({tool:r,data:i,replace:a});o.setToBlock(s,o.positions.END);});}},{key:"processElementNode",value:function value(t,e,n){var o=Object.keys(this.toolsTags),i=t,a=(this.toolsTags[i.tagName]||{}).tool,s=this.tagsByTool[null==a?void 0:a.name]||[],l=o.includes(i.tagName),c=h["default"].blockElements.includes(i.tagName.toLowerCase()),u=Array.from(i.children).some(function(t){var e=t.tagName;return o.includes(e)&&!s.includes(e);}),f=Array.from(i.children).some(function(t){var e=t.tagName;return h["default"].blockElements.includes(e.toLowerCase());});return c||l||u?l&&!u||c&&!f&&!u?[].concat((0,r["default"])(e),[n,i]):void 0:(n.appendChild(i),[].concat((0,r["default"])(e),[n]));}},{key:"getNodes",value:function value(t){var e,n=this;return Array.from(t.childNodes).reduce(function t(o,i){if(h["default"].isEmpty(i)&&!h["default"].isSingleTag(i))return o;var a=o[o.length-1],s=new DocumentFragment();switch(a&&h["default"].isFragment(a)&&(s=o.pop()),i.nodeType){case Node.ELEMENT_NODE:if(e=n.processElementNode(i,o,s))return e;break;case Node.TEXT_NODE:return s.appendChild(i),[].concat((0,r["default"])(o),[s]);default:return[].concat((0,r["default"])(o),[s]);}return[].concat((0,r["default"])(o),(0,r["default"])(Array.from(i.childNodes).reduce(t,[])));},[]);}},{key:"composePasteEvent",value:function value(t,e){return new CustomEvent(t,{detail:e});}}]),T;}(p["default"]);_o40["default"]=m,m.displayName="Paste",m.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(30),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(150)],void 0===(i="function"==typeof(o=function o(_o41,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o41,"__esModule",{value:!0}),_o41["default"]=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f);var g=function(t){(0,c["default"])(h,t);var e,n,o,d=(e=h,function(){var t,n=(0,f["default"])(e);if(v()){var o=(0,f["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,u["default"])(this,t);});function h(){var t;return(0,s["default"])(this,h),(t=d.apply(this,arguments)).toolsDontSupportReadOnly=[],t.readOnlyEnabled=!1,t;}return(0,l["default"])(h,[{key:"prepare",value:(o=(0,a["default"])(r["default"].mark(function t(){var e,n,o;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:e=this.Editor.Tools,n=e.blockTools,o=[],Array.from(n.entries()).forEach(function(t){var e=(0,i["default"])(t,2),n=e[0];e[1].isReadOnlySupported||o.push(n);}),this.toolsDontSupportReadOnly=o,this.config.readOnly&&o.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly);case 7:case"end":return t.stop();}}},t,this);})),function(){return o.apply(this,arguments);})},{key:"toggle",value:(n=(0,a["default"])(r["default"].mark(function t(){var e,n,o,i,a=arguments;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:(e=a.length>0&&void 0!==a[0]?a[0]:!this.readOnlyEnabled)&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError(),n=this.readOnlyEnabled,this.readOnlyEnabled=e,t.t0=r["default"].keys(this.Editor);case 5:if((t.t1=t.t0()).done){t.next=12;break;}if(o=t.t1.value,this.Editor[o].toggleReadOnly){t.next=9;break;}return t.abrupt("continue",5);case 9:this.Editor[o].toggleReadOnly(e),t.next=5;break;case 12:if(n!==e){t.next=14;break;}return t.abrupt("return",this.readOnlyEnabled);case 14:return t.next=16,this.Editor.Saver.save();case 16:return i=t.sent,t.next=19,this.Editor.BlockManager.clear();case 19:return t.next=21,this.Editor.Renderer.render(i.blocks);case 21:return t.abrupt("return",this.readOnlyEnabled);case 22:case"end":return t.stop();}}},t,this);})),function(){return n.apply(this,arguments);})},{key:"throwCriticalError",value:function value(){throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", ")," don't support read-only mode."));}},{key:"isEnabled",get:function get(){return this.readOnlyEnabled;}}]),h;}((d=h(d))["default"]);_o41["default"]=g,g.displayName="ReadOnly",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(25),n(66),n(7)],void 0===(i="function"==typeof(o=function o(_o42,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0;}}(t))){var e=0,n=function n(){};return{s:n,n:function n(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]};},e:function e(t){throw t;},f:n};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,r,i=!0,a=!1;return{s:function s(){o=t[Symbol.iterator]();},n:function n(){var t=o.next();return i=t.done,t;},e:function e(t){a=!0,r=t;},f:function f(){try{i||null==o["return"]||o["return"]();}finally{if(a)throw r;}}};}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++){o[n]=t[n];}return o;}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o42,"__esModule",{value:!0}),_o42["default"]=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=v(d),p=h(p);var k=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(b()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t.listenerIds=[],t;}return(0,i["default"])(o,[{key:"prepare",value:function value(){this.enableModuleBindings();}},{key:"startSelection",value:function value(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d["default"].CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],r=n.closest("."+this.Editor.UI.CSS.editorWrapper),i=o.some(function(t){return!!n.closest(t);});r&&!i&&(this.mousedown=!0,this.startX=t,this.startY=e);}},{key:"endSelection",value:function value(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none";}},{key:"isRectActivated",value:function value(){return this.isRectSelectionActivated;}},{key:"clearSelection",value:function value(){this.isRectSelectionActivated=!1;}},{key:"enableModuleBindings",value:function value(){var t=this,e=this.genHTML().container;this.listeners.on(e,"mousedown",function(e){t.processMouseDown(e);},!1),this.listeners.on(document.body,"mousemove",p.throttle(function(e){t.processMouseMove(e);},10),{passive:!0}),this.listeners.on(document.body,"mouseleave",function(){t.processMouseLeave();}),this.listeners.on(window,"scroll",p.throttle(function(e){t.processScroll(e);},10),{passive:!0}),this.listeners.on(document.body,"mouseup",function(){t.processMouseUp();},!1);}},{key:"processMouseDown",value:function value(t){t.button===this.MAIN_MOUSE_BUTTON&&(null!==t.target.closest(u["default"].allInputsSelector)||this.startSelection(t.pageX,t.pageY));}},{key:"processMouseMove",value:function value(t){this.changingRectangle(t),this.scrollByZones(t.clientY);}},{key:"processMouseLeave",value:function value(){this.clearSelection(),this.endSelection();}},{key:"processScroll",value:function value(t){this.changingRectangle(t);}},{key:"processMouseUp",value:function value(){this.clearSelection(),this.endSelection();}},{key:"scrollByZones",value:function value(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1;}},{key:"genHTML",value:function value(){var t=this.Editor.UI,e=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),n=u["default"].make("div",o.CSS.overlay,{}),r=u["default"].make("div",o.CSS.overlayContainer,{}),i=u["default"].make("div",o.CSS.rect,{});return r.appendChild(i),n.appendChild(r),e.appendChild(n),this.overlayRectangle=i,{container:e,overlay:n};}},{key:"scrollVertical",value:function value(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout(function(){e.scrollVertical(t);},0);}}},{key:"changingRectangle",value:function value(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,r=e.index,i=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(i||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),this.Editor.Toolbar.close(),void 0!==r&&(this.trySelectNextBlock(r),this.inverseSelection(),f["default"].get().removeAllRanges());}}},{key:"shrinkRectangleToPoint",value:function value(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px");}},{key:"inverseSelection",value:function value(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e,n=g(this.stackOfSelected);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.Editor.BlockSelection.selectBlockByIndex(o);}}catch(t){n.e(t);}finally{n.f();}}if(!this.rectCrossesBlocks&&t){var r,i=g(this.stackOfSelected);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.Editor.BlockSelection.unSelectBlockByIndex(a);}}catch(t){i.e(t);}finally{i.f();}}}},{key:"updateRectangleSize",value:function value(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"));}},{key:"genInfoForMouseSelection",value:function value(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),r=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==r&&(t=this.Editor.BlockManager.blocks.findIndex(function(t){return t.holder===r.holder;}));var i=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d["default"].CSS.content),a=Number.parseInt(window.getComputedStyle(i).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a};}},{key:"addBlockInSelection",value:function value(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t);}},{key:"trySelectNextBlock",value:function value(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var r=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,i=0;o>1&&(i=r?1:-1);var a=t>this.stackOfSelected[o-1]&&1===i,s=t<this.stackOfSelected[o-1]&&-1===i,l=!(a||s||0===i);if(l||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!l&&t<this.stackOfSelected[o-1])for(var c=this.stackOfSelected[o-1]-1;c>=t;c--){this.addBlockInSelection(c);}else if(l){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f];}:function(){return t<e.stackOfSelected[f];};u();){this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--;}}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++){this.addBlockInSelection(d);}}}}],[{key:"CSS",get:function get(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"};}}]),o;}(c["default"]);_o42["default"]=k,k.displayName="RectangleSelection",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function o(_o43,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o43,"__esModule",{value:!0}),_o43["default"]=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var g=function(t){(0,l["default"])(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u["default"])(e);if(v()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function p(){return(0,a["default"])(this,p),f.apply(this,arguments);}return(0,s["default"])(p,[{key:"render",value:(o=(0,i["default"])(r["default"].mark(function t(e){var n,o,i=this;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return n=e.map(function(t){return{"function":function _function(){return i.insertBlock(t);}};}),this.Editor.ModificationsObserver.disable(),t.next=4,d.sequence(n);case 4:return o=t.sent,this.Editor.ModificationsObserver.enable(),this.Editor.UI.checkEmptiness(),t.abrupt("return",o);case 8:case"end":return t.stop();}}},t,this);})),function(t){return o.apply(this,arguments);})},{key:"insertBlock",value:(n=(0,i["default"])(r["default"].mark(function t(e){var n,o,i,a,s,l,c,u,f;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Tools,i=n.BlockManager,a=e.type,s=e.data,l=e.tunes,c=e.id,!o.available.has(a)){t.next=13;break;}t.prev=3,i.insert({id:c,tool:a,data:s,tunes:l}),t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](3),d.log("Block «".concat(a,"» skipped because of plugins error"),"warn",s),Error(t.t0);case 11:t.next=18;break;case 13:u={savedData:{id:c,type:a,data:s},title:a},o.unavailable.has(a)&&(f=o.unavailable.get(a).toolbox,u.title=(null==f?void 0:f.title)||u.title),i.insert({id:c,tool:o.stubTool,data:u}).stretched=!0,d.log("Tool «".concat(a,"» is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 18:case"end":return t.stop();}}},t,this,[[3,7]]);})),function(t){return n.apply(this,arguments);})}]),p;}(f["default"]);_o43["default"]=g,g.displayName="Renderer",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(65)],void 0===(i="function"==typeof(o=function o(_o44,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o44,"__esModule",{value:!0}),_o44["default"]=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=h(d);var y=function(t){(0,l["default"])(h,t);var e,n,o,f=(e=h,function(){var t,n=(0,u["default"])(e);if(g()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function h(){return(0,a["default"])(this,h),f.apply(this,arguments);}return(0,s["default"])(h,[{key:"save",value:(o=(0,i["default"])(r["default"].mark(function t(){var e,n,o,i,a,s,l,c,u=this;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Tools,i=e.ModificationsObserver,a=n.blocks,s=[],t.prev=2,i.disable(),a.forEach(function(t){s.push(u.getSavedData(t));}),t.next=7,Promise.all(s);case 7:return l=t.sent,t.next=10,(0,p.sanitizeBlocks)(l,function(t){return o.blockTools.get(t).sanitizeConfig;});case 10:return c=t.sent,t.abrupt("return",this.makeOutput(c));case 14:t.prev=14,t.t0=t["catch"](2),d.logLabeled("Saving failed due to the Error %o","error",t.t0);case 17:return t.prev=17,i.enable(),t.finish(17);case 20:case"end":return t.stop();}}},t,this,[[2,14,17,20]]);})),function(){return o.apply(this,arguments);})},{key:"getSavedData",value:(n=(0,i["default"])(r["default"].mark(function t(e){var n,o;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break;}return t.next=7,e.validate(n.data);case 7:t.t0=t.sent;case 8:return o=t.t0,t.abrupt("return",Object.assign(Object.assign({},n),{isValid:o}));case 10:case"end":return t.stop();}}},t);})),function(t){return n.apply(this,arguments);})},{key:"makeOutput",value:function value(t){var e=this,n=0,o=[];return d.log("[Editor.js saving]:","groupCollapsed"),t.forEach(function(t){var r=t.id,i=t.tool,a=t.data,s=t.tunes,l=t.time,c=t.isValid;if(n+=l,d.log("".concat(i.charAt(0).toUpperCase()+i.slice(1)),"group"),!c)return d.log("Block «".concat(i,"» skipped because saved data is invalid")),void d.log(void 0,"groupEnd");if(d.log(a),d.log(void 0,"groupEnd"),i!==e.Editor.Tools.stubTool){var u=Object.assign({id:r,type:i,data:a},!d.isEmpty(s)&&{tunes:s});o.push(u);}else o.push(a);}),d.log("Total","log",n),d.log(void 0,"groupEnd"),{time:+new Date(),blocks:o,version:"2.23.2"};}}]),h;}(f["default"]);_o44["default"]=y,y.displayName="Saver",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(60),n(7),n(25)],void 0===(i="function"==typeof(o=function o(_o45,r,i,a,s,l,c,u,f,d,p,h){"use strict";var v=n(8),g=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o45,"__esModule",{value:!0}),_o45["default"]=void 0,r=g(r),i=g(i),a=g(a),s=g(s),l=g(l),c=g(c),u=g(u),f=g(f),d=g(d),p=v(p),h=g(h);var b=function(t){(0,s["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,c["default"])(e);if(y()){var o=(0,c["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,l["default"])(this,t);});function o(){var t;return(0,i["default"])(this,o),(t=n.apply(this,arguments)).buttons=[],t.flipper=null,t.selection=new h["default"](),t;}return(0,a["default"])(o,[{key:"make",value:function value(){this.nodes.wrapper=f["default"].make("div",this.CSS.wrapper),this.nodes.toolSettings=f["default"].make("div",this.CSS.toolSettings),this.nodes.defaultSettings=f["default"].make("div",this.CSS.defaultSettings),f["default"].append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper();}},{key:"destroy",value:function value(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes();}},{key:"open",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Editor.BlockManager.currentBlock;this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.selection.save(),t.selected=!0,this.Editor.BlockSelection.clearCache(),this.addToolSettings(t),this.addTunes(t),this.eventsDispatcher.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons);}},{key:"close",value:function value(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),h["default"].isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&(this.Editor.BlockManager.currentBlock.selected=!1),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.eventsDispatcher.emit(this.events.closed),this.buttons=[],this.flipper.deactivate();}},{key:"addToolSettings",value:function value(t){var e=t.renderSettings();e&&f["default"].append(this.nodes.toolSettings,e);}},{key:"addTunes",value:function value(t){var e=t.renderTunes(),n=(0,r["default"])(e,2),o=n[0],i=n[1];f["default"].append(this.nodes.toolSettings,o),f["default"].append(this.nodes.defaultSettings,i);}},{key:"enableFlipper",value:function value(){var t=this;this.flipper=new d["default"]({focusedItemClass:this.CSS.focusedButton,activateCallback:function activateCallback(e){e&&f["default"].canSetCaret(e)?t.close():p.delay(function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);},50)();}});}},{key:"events",get:function get(){return{opened:"block-settings-opened",closed:"block-settings-closed"};}},{key:"CSS",get:function get(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"};}},{key:"opened",get:function get(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);}},{key:"blockTunesButtons",get:function get(){var t=this,e=this.Editor.StylesAPI;if(0!==this.buttons.length)return this.buttons;var n=this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton,", ").concat(f["default"].allInputsSelector)),o=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return n.forEach(function(e){t.buttons.push(e);}),o.forEach(function(e){t.buttons.push(e);}),this.buttons;}}]),o;}(u["default"]);_o45["default"]=b,b.displayName="BlockSettings",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(23),n(24),n(42),n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(7),n(60),n(59),n(84),n(65)],void 0===(i="function"==typeof(o=function o(_o46,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,k){"use strict";var m=n(8),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o46,"__esModule",{value:!0}),_o46["default"]=void 0,r=x(r),i=x(i),a=x(a),s=x(s),l=x(l),c=x(c),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=m(v),g=x(g),y=x(y);var S=function(t){(0,u["default"])(p,t);var e,n,o=(e=p,function(){var t,n=(0,d["default"])(e);if(w()){var o=(0,d["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,f["default"])(this,t);});function p(){var t;return(0,l["default"])(this,p),(t=o.apply(this,arguments)).opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t;}return(0,c["default"])(p,[{key:"make",value:function value(){this.nodes.wrapper=h["default"].make("div",[p.CSS.conversionToolbarWrapper].concat((0,s["default"])(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.tools=h["default"].make("div",p.CSS.conversionToolbarTools);var t=h["default"].make("div",p.CSS.conversionToolbarLabel,{textContent:y["default"].ui(b.I18nInternalNS.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),h["default"].append(this.nodes.wrapper,t),h["default"].append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper;}},{key:"destroy",value:function value(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes();}},{key:"toggle",value:function value(t){this.opened?this.close():this.open(),v.isFunction(t)&&(this.togglingCallback=t);}},{key:"open",value:function value(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(p.CSS.conversionToolbarShowed),setTimeout(function(){t.flipper.activate(Object.values(t.tools).filter(function(t){return!t.classList.contains(p.CSS.conversionToolHidden);})),t.flipper.focusFirst(),v.isFunction(t.togglingCallback)&&t.togglingCallback(!0);},50);}},{key:"close",value:function value(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(p.CSS.conversionToolbarShowed),v.isFunction(this.togglingCallback)&&this.togglingCallback(!1);}},{key:"hasTools",value:function value(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.defaultBlock);}},{key:"replaceWithBlock",value:(n=(0,a["default"])(i["default"].mark(function t(e){var n,o,r,a,s,l,c,u,f,d,p=this;return i["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager.currentBlock.tool,o=this.Editor.BlockManager.currentBlock.name,t.next=4,this.Editor.BlockManager.currentBlock.save();case 4:if(r=t.sent,a=r.data,o===e&&(e=this.config.defaultBlock),s=this.Editor.Tools.blockTools.get(e),l="",c=n.conversionConfig["export"],!v.isFunction(c)){t.next=14;break;}l=c(a),t.next=20;break;case 14:if(!v.isString(c)){t.next=18;break;}l=a[c],t.next=20;break;case 18:return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),t.abrupt("return");case 20:if(u=(0,k.clean)(l,s.sanitizeConfig),f={},d=s.conversionConfig["import"],!v.isFunction(d)){t.next=27;break;}f=d(u),t.next=33;break;case 27:if(!v.isString(d)){t.next=31;break;}f[d]=u,t.next=33;break;case 31:return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),t.abrupt("return");case 33:this.Editor.BlockManager.replace({tool:e,data:f}),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),v.delay(function(){p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock);},10)();case 38:case"end":return t.stop();}}},t,this);})),function(t){return n.apply(this,arguments);})},{key:"addTools",value:function value(){var t=this,e=this.Editor.Tools.blockTools;Array.from(e.entries()).forEach(function(e){var n=(0,r["default"])(e,2),o=n[0],i=n[1],a=i.toolbox,s=i.conversionConfig;!v.isEmpty(a)&&a.icon&&s&&s["import"]&&t.addTool(o,a.icon,a.title);});}},{key:"addTool",value:function value(t,e,n){var o=this,r=h["default"].make("div",[p.CSS.conversionTool]),s=h["default"].make("div",[p.CSS.conversionToolIcon]);r.dataset.tool=t,s.innerHTML=e,h["default"].append(r,s),h["default"].append(r,h["default"].text(y["default"].t(b.I18nInternalNS.toolNames,n||v.capitalize(t)))),h["default"].append(this.nodes.tools,r),this.tools[t]=r,this.listeners.on(r,"click",(0,a["default"])(i["default"].mark(function e(){return i["default"].wrap(function(e){for(;;){switch(e.prev=e.next){case 0:return e.next=2,o.replaceWithBlock(t);case 2:case"end":return e.stop();}}},e);})));}},{key:"filterTools",value:function value(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach(function(e){var n=(0,r["default"])(e,2),o=n[0],i=n[1];i.hidden=!1,i.classList.toggle(p.CSS.conversionToolHidden,o===t.name);});}},{key:"enableFlipper",value:function value(){this.flipper=new g["default"]({focusedItemClass:p.CSS.conversionToolFocused});}}],[{key:"CSS",get:function get(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"};}}]),p;}(p["default"]);_o46["default"]=S,S.displayName="ConversionToolbar",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(2),n(3),n(5),n(6),n(4),n(9),n(15),n(25),n(7),n(60),n(59),n(84),n(114),n(82),n(67)],void 0===(i="function"==typeof(o=function o(_o47,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,k,m){"use strict";var x=n(8),w=n(1);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o47,"__esModule",{value:!0}),_o47["default"]=void 0,r=w(r),i=w(i),a=w(a),s=w(s),l=w(l),c=w(c),u=w(u),f=w(f),d=w(d),p=w(p),h=x(h),v=w(v),g=w(g),b=w(b),k=w(k);var T=function(t){(0,l["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,u["default"])(e);if(S()){var o=(0,u["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,c["default"])(this,t);});function o(t){var e,r=t.config,i=t.eventsDispatcher;return(0,a["default"])(this,o),(e=n.call(this,{config:r,eventsDispatcher:i})).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},e.opened=!1,e.toolbarVerticalMargin=5,e.buttonsList=null,e.width=0,e.flipper=null,e.tooltip=new k["default"](),e;}return(0,s["default"])(o,[{key:"toggleReadOnly",value:function value(t){t?(this.destroy(),this.Editor.ConversionToolbar.destroy()):this.make();}},{key:"tryToShow",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.allowedToShow()?(this.move(),this.open(e),this.Editor.Toolbar.close()):t&&this.close();}},{key:"move",value:function value(){var t=p["default"].rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,r=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,r>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px";}},{key:"close",value:function value(){var t=this;this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),Array.from(this.toolsInstances.entries()).forEach(function(e){var n=(0,i["default"])(e,2),o=n[0],r=n[1],a=t.getToolShortcut(o);a&&b["default"].remove(t.Editor.UI.nodes.redactor,a),h.isFunction(r.clear)&&r.clear();}),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()));}},{key:"open",value:function value(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.opened){this.addToolsFiltered(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,t&&this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var e=Array.from(this.buttonsList);e.unshift(this.nodes.conversionToggler),e=e.filter(function(t){return!t.hidden;}),this.flipper.activate(e);}}},{key:"containsNode",value:function value(t){return this.nodes.wrapper.contains(t);}},{key:"destroy",value:function value(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes(),this.tooltip.destroy();}},{key:"make",value:function value(){var t=this;this.nodes.wrapper=d["default"].make("div",[this.CSS.inlineToolbar].concat((0,r["default"])(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.togglerAndButtonsWrapper=d["default"].make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=d["default"].make("div",this.CSS.buttonsWrapper),this.nodes.actions=d["default"].make("div",this.CSS.actionsWrapper),this.listeners.on(this.nodes.wrapper,"mousedown",function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault();}),d["default"].append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),d["default"].append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),d["default"].append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper();}},{key:"allowedToShow",value:function value(){var t=p["default"].get(),e=p["default"].text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=d["default"].isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);return!!o&&0!==o.tool.inlineTools.size;}},{key:"recalculateWidth",value:function value(){this.width=this.nodes.wrapper.offsetWidth;}},{key:"addConversionToggler",value:function value(){var t=this;this.nodes.conversionToggler=d["default"].make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=d["default"].make("div",this.CSS.conversionTogglerContent);var e=d["default"].svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.listeners.on(this.nodes.conversionToggler,"click",function(){t.Editor.ConversionToolbar.toggle(function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate();});}),this.tooltip.onHover(this.nodes.conversionToggler,g["default"].ui(y.I18nInternalNS.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100});}},{key:"setConversionTogglerContent",value:function value(){var t=this.Editor.BlockManager.currentBlock,e=t.name,n=t.tool.conversionConfig,o=n&&n["export"];this.nodes.conversionToggler.hidden=!o,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!o);var r=t.tool.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=r.icon||r.title||h.capitalize(e);}},{key:"prepareConversionToolbar",value:function value(){var t=this.Editor.ConversionToolbar.make();d["default"].append(this.nodes.wrapper,t);}},{key:"addToolsFiltered",value:function value(){var t=this,e=p["default"].get(),n=this.Editor.BlockManager.getBlock(e.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map(),Array.from(n.tool.inlineTools.values()).forEach(function(e){t.addTool(e);}),this.recalculateWidth();}},{key:"addTool",value:function value(t){var e=this,n=t.create(),o=n.render();if(o){if(o.dataset.tool=t.name,this.nodes.buttons.appendChild(o),this.toolsInstances.set(t.name,n),h.isFunction(n.renderActions)){var r=n.renderActions();this.nodes.actions.appendChild(r);}this.listeners.on(o,"click",function(t){e.toolClicked(n),t.preventDefault();});var i=this.getToolShortcut(t.name);if(i)try{this.enableShortcuts(n,i);}catch(t){}var a=d["default"].make("div"),s=g["default"].t(y.I18nInternalNS.toolNames,t.title||h.capitalize(t.name));a.appendChild(d["default"].text(s)),i&&a.appendChild(d["default"].make("div",this.CSS.inlineToolbarShortcut,{textContent:h.beautifyShortcut(i)})),this.tooltip.onHover(o,a,{placement:"top",hidingDelay:100}),n.checkState(p["default"].get());}else h.log("Render method must return an instance of Node","warn",t.name);}},{key:"getToolShortcut",value:function value(t){var e=this.Editor.Tools,n=e.inlineTools.get(t),o=e.internal.inlineTools;return Array.from(o.keys()).includes(t)?this.inlineTools[t][m.CommonInternalSettings.Shortcut]:n.shortcut;}},{key:"enableShortcuts",value:function value(t,e){var n=this;b["default"].add({name:e,handler:function handler(e){var o=n.Editor.BlockManager.currentBlock;o&&o.tool.enabledInlineTools&&(e.preventDefault(),n.toolClicked(t));},on:this.Editor.UI.nodes.redactor});}},{key:"toolClicked",value:function value(t){var e=p["default"].range;t.surround(e),this.checkToolsState();}},{key:"checkToolsState",value:function value(){this.toolsInstances.forEach(function(t){t.checkState(p["default"].get());});}},{key:"enableFlipper",value:function value(){this.flipper=new v["default"]({focusedItemClass:this.CSS.focusedButton,allowArrows:!1});}},{key:"inlineTools",get:function get(){var t={};return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e){var n=(0,i["default"])(e,2),o=n[0],r=n[1];t[o]=r.create();}),t;}}]),o;}(f["default"]);_o47["default"]=T,T.displayName="InlineToolbar",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(80),n(386),n(9),n(7),n(387),n(388),n(389),n(390),n(391),n(395),n(396),n(397),n(184)],void 0===(i="function"==typeof(o=function o(_o48,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,k,m,x,w,S,T,E){"use strict";var B=n(8),C=n(1);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o48,"__esModule",{value:!0}),_o48["default"]=void 0,r=C(r),i=C(i),a=C(a),s=C(s),l=C(l),c=C(c),u=C(u),f=C(f),d=C(d),p=C(p),h=C(h),v=C(v),g=B(g),y=C(y),b=C(b),k=C(k),m=C(m),x=C(x),w=C(w),S=C(S),T=C(T),E=C(E);var I=function I(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,p["default"])(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--){(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);}return i>3&&a&&Object.defineProperty(e,n,a),a;},O=function(t){(0,u["default"])(p,t);var e,n,o=(e=p,function(){var t,n=(0,d["default"])(e);if(_()){var o=(0,d["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,f["default"])(this,t);});function p(){var t;return(0,l["default"])(this,p),(t=o.apply(this,arguments)).stubTool="stub",t.toolsAvailable=new E["default"](),t.toolsUnavailable=new E["default"](),t;}return(0,c["default"])(p,[{key:"prepare",value:(n=(0,s["default"])(a["default"].mark(function t(){var e,n,o=this;return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(this.validateTools(),this.config.tools=g.deepMerge({},this.internalTools,this.config.tools),Object.prototype.hasOwnProperty.call(this.config,"tools")&&0!==Object.keys(this.config.tools).length){t.next=4;break;}throw Error("Can't start without tools");case 4:if(e=this.prepareConfig(),this.factory=new x["default"](e,this.config,this.Editor.API),0!==(n=this.getListOfPrepareFunctions(e)).length){t.next=9;break;}return t.abrupt("return",Promise.resolve());case 9:return t.next=11,g.sequence(n,function(t){o.toolPrepareMethodSuccess(t);},function(t){o.toolPrepareMethodFallback(t);});case 11:this.prepareBlockTools();case 12:case"end":return t.stop();}}},t,this);})),function(){return n.apply(this,arguments);})},{key:"getAllInlineToolsSanitizeConfig",value:function value(){var t={};return Array.from(this.inlineTools.values()).forEach(function(e){Object.assign(t,e.sanitizeConfig);}),t;}},{key:"destroy",value:function value(){Object.values(this.available).forEach(function(){var t=(0,s["default"])(a["default"].mark(function t(e){return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(!g.isFunction(e.reset)){t.next=3;break;}return t.next=3,e.reset();case 3:case"end":return t.stop();}}},t);}));return function(e){return t.apply(this,arguments);};}());}},{key:"toolPrepareMethodSuccess",value:function value(t){var e=this.factory.get(t.toolName);if(e.isInline()){var n=["render","surround","checkState"].filter(function(t){return!e.create()[t];});if(n.length)return g.log("Incorrect Inline Tool: ".concat(e.name,". Some of required methods is not implemented %o"),"warn",n),void this.toolsUnavailable.set(e.name,e);}this.toolsAvailable.set(e.name,e);}},{key:"toolPrepareMethodFallback",value:function value(t){this.toolsUnavailable.set(t.toolName,this.factory.get(t.toolName));}},{key:"getListOfPrepareFunctions",value:function value(t){var e=[];return Object.entries(t).forEach(function(t){var n=(0,i["default"])(t,2),o=n[0],r=n[1];e.push({"function":g.isFunction(r["class"].prepare)?r["class"].prepare:function(){},data:{toolName:o,config:r.config}});}),e;}},{key:"prepareBlockTools",value:function value(){var t=this;Array.from(this.blockTools.values()).forEach(function(e){t.assignInlineToolsToBlockTool(e),t.assignBlockTunesToBlockTool(e);});}},{key:"assignInlineToolsToBlockTool",value:function value(t){var e=this;!1!==this.config.inlineToolbar&&(!0!==t.enabledInlineTools?Array.isArray(t.enabledInlineTools)&&(t.inlineTools=new E["default"](t.enabledInlineTools.map(function(t){return[t,e.inlineTools.get(t)];}))):t.inlineTools=new E["default"](Array.isArray(this.config.inlineToolbar)?this.config.inlineToolbar.map(function(t){return[t,e.inlineTools.get(t)];}):Array.from(this.inlineTools.entries())));}},{key:"assignBlockTunesToBlockTool",value:function value(t){var e=this;if(!1!==t.enabledBlockTunes)if(Array.isArray(t.enabledBlockTunes)){var n=new E["default"](t.enabledBlockTunes.map(function(t){return[t,e.blockTunes.get(t)];}));t.tunes=new E["default"]([].concat((0,r["default"])(n),(0,r["default"])(this.blockTunes.internalTools)));}else if(Array.isArray(this.config.tunes)){var o=new E["default"](this.config.tunes.map(function(t){return[t,e.blockTunes.get(t)];}));t.tunes=new E["default"]([].concat((0,r["default"])(o),(0,r["default"])(this.blockTunes.internalTools)));}else t.tunes=this.blockTunes.internalTools;}},{key:"validateTools",value:function value(){for(var t in this.config.tools){if(Object.prototype.hasOwnProperty.call(this.config.tools,t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!g.isFunction(e)&&!g.isFunction(e["class"]))throw Error("Tool «".concat(t,"» must be a constructor function or an object with function in the «class» property"));}}}},{key:"prepareConfig",value:function value(){var t={};for(var e in this.config.tools){g.isObject(this.config.tools[e])?t[e]=this.config.tools[e]:t[e]={"class":this.config.tools[e]};}return t;}},{key:"available",get:function get(){return this.toolsAvailable;}},{key:"unavailable",get:function get(){return this.toolsUnavailable;}},{key:"inlineTools",get:function get(){return this.available.inlineTools;}},{key:"blockTools",get:function get(){return this.available.blockTools;}},{key:"blockTunes",get:function get(){return this.available.blockTunes;}},{key:"defaultTool",get:function get(){return this.blockTools.get(this.config.defaultBlock);}},{key:"internal",get:function get(){return this.available.internalTools;}},{key:"internalTools",get:function get(){return{bold:{"class":y["default"],isInternal:!0},italic:{"class":b["default"],isInternal:!0},link:{"class":k["default"],isInternal:!0},paragraph:{"class":h["default"],inlineToolbar:!0,isInternal:!0},stub:{"class":m["default"],isInternal:!0},moveUp:{"class":T["default"],isInternal:!0},"delete":{"class":S["default"],isInternal:!0},moveDown:{"class":w["default"],isInternal:!0}};}}]),p;}(v["default"]);_o48["default"]=O,O.displayName="Tools",I([g.cacheable],O.prototype,"getAllInlineToolsSanitizeConfig",null),t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(5),n(6),n(4),n(152)],void 0===(i="function"==typeof(o=function o(_o49,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o49,"__esModule",{value:!0}),_o49["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,s["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,c["default"])(e);if(d()){var o=(0,c["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,l["default"])(this,t);});function o(){return(0,i["default"])(this,o),n.apply(this,arguments);}return(0,a["default"])(o,[{key:"blockTools",get:function get(){return new o(Array.from(this.entries()).filter(function(t){return(0,r["default"])(t,2)[1].isBlock();}));}},{key:"inlineTools",get:function get(){return new o(Array.from(this.entries()).filter(function(t){return(0,r["default"])(t,2)[1].isInline();}));}},{key:"blockTunes",get:function get(){return new o(Array.from(this.entries()).filter(function(t){return(0,r["default"])(t,2)[1].isTune();}));}},{key:"internalTools",get:function get(){return new o(Array.from(this.entries()).filter(function(t){return(0,r["default"])(t,2)[1].isInternal;}));}},{key:"externalTools",get:function get(){return new o(Array.from(this.entries()).filter(function(t){return!(0,r["default"])(t,2)[1].isInternal;}));}}]),o;}((0,(u=f(u))["default"])(Map));_o49["default"]=p,p.displayName="ToolsCollection",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(42),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(398),n(9),n(15),n(7),n(25),n(66),n(60)],void 0===(i="function"==typeof(o=function o(_o50,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,k){"use strict";var m=n(8),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o50,"__esModule",{value:!0}),_o50["default"]=void 0,r=x(r),i=x(i),a=x(a),s=x(s),l=x(l),c=x(c),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=x(v),g=m(g),y=x(y),b=x(b),k=x(k);var S=function(t){(0,u["default"])(m,t);var e,o,h=(e=m,function(){var t,n=(0,d["default"])(e);if(w()){var o=(0,d["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,f["default"])(this,t);});function m(){var t;return(0,l["default"])(this,m),(t=h.apply(this,arguments)).isMobile=!1,t.contentRectCache=void 0,t.resizeDebouncer=g.debounce(function(){t.windowResize();},200),t;}return(0,c["default"])(m,[{key:"addLoader",value:function value(){this.nodes.loader=v["default"].make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);}},{key:"removeLoader",value:function value(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);}},{key:"prepare",value:(o=(0,s["default"])(a["default"].mark(function t(){return a["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:this.checkIsMobile(),this.make(),this.addLoader(),this.appendSVGSprite(),this.loadStyles();case 5:case"end":return t.stop();}}},t,this);})),function(){return o.apply(this,arguments);})},{key:"toggleReadOnly",value:function value(t){t?this.disableModuleBindings():this.enableModuleBindings();}},{key:"checkEmptiness",value:function value(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty);}},{key:"destroy",value:function value(){this.nodes.holder.innerHTML="";}},{key:"closeAllToolbars",value:function value(){var t=this.Editor,e=t.Toolbar,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;n.close(),o.close(),r.close(),e.toolbox.close();}},{key:"checkIsMobile",value:function value(){this.isMobile=window.innerWidth<650;}},{key:"make",value:function value(){this.nodes.holder=v["default"].getHolder(this.config.holder),this.nodes.wrapper=v["default"].make("div",[this.CSS.editorWrapper].concat((0,i["default"])(this.isRtl?[this.CSS.editorRtlFix]:[]))),this.nodes.redactor=v["default"].make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper);}},{key:"loadStyles",value:function value(){var t=n(399);if(!v["default"].get("editor-js-styles")){var e=v["default"].make("style",null,{id:"editor-js-styles",textContent:t.toString()});v["default"].prepend(document.head,e);}}},{key:"enableModuleBindings",value:function value(){var t=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"click",function(e){t.redactorClicked(e);},!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",function(e){t.documentTouched(e);},!0),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",function(e){t.documentTouched(e);},!0),this.readOnlyMutableListeners.on(document,"keydown",function(e){t.documentKeydown(e);},!0),this.readOnlyMutableListeners.on(document,"mousedown",function(e){t.documentClicked(e);},!0),this.readOnlyMutableListeners.on(document,"selectionchange",function(e){t.selectionChanged(e);},!0),this.readOnlyMutableListeners.on(window,"resize",function(){t.resizeDebouncer();},{passive:!0}),this.watchBlockHoveredEvents();}},{key:"watchBlockHoveredEvents",value:function value(){var t,e=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"mousemove",g.throttle(function(n){var o=n.target.closest(".ce-block");e.Editor.BlockSelection.anyBlockSelected||o&&t!==o&&(t=o,e.eventsDispatcher.emit(e.events.blockHovered,{block:e.Editor.BlockManager.getBlockByChildNode(o)}));},20),{passive:!0});}},{key:"disableModuleBindings",value:function value(){this.readOnlyMutableListeners.clearAll();}},{key:"windowResize",value:function value(){this.contentRectCache=null,this.checkIsMobile();}},{key:"documentKeydown",value:function value(t){switch(t.keyCode){case g.keyCodes.ENTER:this.enterPressed(t);break;case g.keyCodes.BACKSPACE:this.backspacePressed(t);break;case g.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultBehaviour(t);}}},{key:"defaultBehaviour",value:function value(t){var e=this.Editor.BlockManager.currentBlock,n=t.target.closest(".".concat(this.CSS.editorWrapper)),o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;void 0===e||null!==n?n||e&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(t);}},{key:"backspacePressed",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret;if(o.anyBlockSelected&&!y["default"].isSelectionExists){var i=n.removeSelectedBlocks();r.setToBlock(n.insertDefaultBlockAtIndex(i,!0),r.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();}}},{key:"escapePressed",value:function value(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbar.toolbox.opened?this.Editor.Toolbar.toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close();}},{key:"enterPressed",value:function value(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=n.currentBlockIndex>=0;if(o.anyBlockSelected&&!y["default"].isSelectionExists)return o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation();if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var i=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(i),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.moveAndOpen(i);}this.Editor.BlockSelection.clearSelection(t);}},{key:"documentClicked",value:function value(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||y["default"].isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close());var n=this.Editor.BlockSettings.nodes.wrapper.contains(e),o=this.Editor.Toolbar.nodes.settingsToggler.contains(e),r=n||o;if(this.Editor.BlockSettings.opened&&!r){this.Editor.BlockSettings.close();var i=this.Editor.BlockManager.getBlockByChildNode(e);this.Editor.Toolbar.moveAndOpen(i);}this.Editor.BlockSelection.clearSelection(t);}}},{key:"documentTouched",value:function value(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o);}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode();}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock();}this.Editor.Toolbar.moveAndOpen();}},{key:"redactorClicked",value:function value(t){var e=this.Editor.BlockSelection;if(y["default"].isCollapsed){var n=function n(){t.stopImmediatePropagation(),t.stopPropagation();},o=t.target,r=t.metaKey||t.ctrlKey;if(v["default"].isAnchor(o)&&r){n();var i=o.getAttribute("href"),a=g.getValidUrl(i);g.openTab(a);}else{var s=this.Editor.BlockManager.getBlockByIndex(-1),l=v["default"].offset(s.holder).bottom,c=t.pageY;if(t.target instanceof Element&&t.target.isEqualNode(this.nodes.redactor)&&!e.anyBlockSelected&&l<c){n();var u=this.Editor,f=u.BlockManager,d=u.Caret,p=u.Toolbar;f.lastBlock.tool.isDefault&&f.lastBlock.isEmpty||f.insertAtEnd(),d.setToTheLastBlock(),p.moveAndOpen(f.lastBlock);}}}}},{key:"selectionChanged",value:function value(t){var e=this.Editor,n=e.CrossBlockSelection,o=e.BlockSelection,r=y["default"].anchorElement;if(n.isCrossBlockSelectionStarted&&o.anyBlockSelected&&y["default"].get().removeAllRanges(),r){var i=null===r.closest(".".concat(b["default"].CSS.content));if(i&&(this.Editor.InlineToolbar.containsNode(r)||this.Editor.InlineToolbar.close(),"true"!==r.dataset.inlineToolbar))return;this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(r);var a=!0!==i;this.Editor.InlineToolbar.tryToShow(!0,a);}else y["default"].range||this.Editor.InlineToolbar.close();}},{key:"appendSVGSprite",value:function value(){var t=v["default"].make("div");t.hidden=!0,t.style.display="none",t.innerHTML=p["default"],v["default"].append(this.nodes.wrapper,t);}},{key:"events",get:function get(){return{blockHovered:"block-hovered"};}},{key:"CSS",get:function get(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"};}},{key:"contentRect",get:function get(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(b["default"].CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0};}},{key:"someToolbarOpened",get:function get(){var t=this.Editor,e=t.Toolbar,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;return n.opened||o.opened||r.opened||e.toolbox.opened;}},{key:"someFlipperButtonFocused",get:function get(){return!!this.Editor.Toolbar.toolbox.flipperHasFocus||Object.entries(this.Editor).filter(function(t){var e=(0,r["default"])(t,2);return e[0],e[1].flipper instanceof k["default"];}).some(function(t){var e=(0,r["default"])(t,2);return e[0],e[1].flipper.currentItem;});}}]),m;}(h["default"]);_o50["default"]=S,S.displayName="UI",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){n(187),t.exports=n(359);},function(t,e,n){n(188);},function(t,e,n){"use strict";n(189),n(332),n(334),n(337),n(339),n(341),n(343),n(345),n(347),n(349),n(351),n(353),n(355),n(146);},function(t,e,n){n(190),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(271),n(272),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(105),n(295),n(135),n(296),n(136),n(297),n(298),n(299),n(300),n(137),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),t.exports=n(17);},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(18),a=n(0),s=n(21),l=n(41).KEY,c=n(11),u=n(68),f=n(53),d=n(44),p=n(14),h=n(86),v=n(116),g=n(192),y=n(71),b=n(12),k=n(13),m=n(20),x=n(28),w=n(40),S=n(43),T=n(48),E=n(119),B=n(34),C=n(70),_=n(19),I=n(46),O=B.f,M=_.f,R=E.f,_A=o.Symbol,N=o.JSON,P=N&&N.stringify,L=p("_hidden"),D=p("toPrimitive"),j={}.propertyIsEnumerable,F=u("symbol-registry"),U=u("symbols"),H=u("op-symbols"),z=Object.prototype,W="function"==typeof _A&&!!C.f,Y=o.QObject,X=!Y||!Y.prototype||!Y.prototype.findChild,V=i&&c(function(){return 7!=T(M({},"a",{get:function get(){return M(this,"a",{value:7}).a;}})).a;})?function(t,e,n){var o=O(z,e);o&&delete z[e],M(t,e,n),o&&t!==z&&M(z,e,o);}:M,G=function G(t){var e=U[t]=T(_A.prototype);return e._k=t,e;},K=W&&"symbol"==_typeof(_A.iterator)?function(t){return"symbol"==_typeof(t);}:function(t){return t instanceof _A;},Z=function Z(t,e,n){return t===z&&Z(H,e,n),b(t),e=w(e,!0),b(n),r(U,e)?(n.enumerable?(r(t,L)&&t[L][e]&&(t[L][e]=!1),n=T(n,{enumerable:S(0,!1)})):(r(t,L)||M(t,L,S(1,{})),t[L][e]=!0),V(t,e,n)):M(t,e,n);},q=function q(t,e){b(t);for(var n,o=g(e=x(e)),r=0,i=o.length;i>r;){Z(t,n=o[r++],e[n]);}return t;},J=function J(t){var e=j.call(this,t=w(t,!0));return!(this===z&&r(U,t)&&!r(H,t))&&(!(e||!r(this,t)||!r(U,t)||r(this,L)&&this[L][t])||e);},$=function $(t,e){if(t=x(t),e=w(e,!0),t!==z||!r(U,e)||r(H,e)){var n=O(t,e);return!n||!r(U,e)||r(t,L)&&t[L][e]||(n.enumerable=!0),n;}},Q=function Q(t){for(var e,n=R(x(t)),o=[],i=0;n.length>i;){r(U,e=n[i++])||e==L||e==l||o.push(e);}return o;},tt=function tt(t){for(var e,n=t===z,o=R(n?H:x(t)),i=[],a=0;o.length>a;){!r(U,e=o[a++])||n&&!r(z,e)||i.push(U[e]);}return i;};W||(s((_A=function A(){if(this instanceof _A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function e(n){this===z&&e.call(H,n),r(this,L)&&r(this[L],t)&&(this[L][t]=!1),V(this,t,S(1,n));};return i&&X&&V(z,t,{configurable:!0,set:e}),G(t);}).prototype,"toString",function(){return this._k;}),B.f=$,_.f=Z,n(49).f=E.f=Q,n(62).f=J,C.f=tt,i&&!n(45)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return G(p(t));}),a(a.G+a.W+a.F*!W,{Symbol:_A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;){p(et[nt++]);}for(var ot=I(p.store),rt=0;ot.length>rt;){v(ot[rt++]);}a(a.S+a.F*!W,"Symbol",{"for":function _for(t){return r(F,t+="")?F[t]:F[t]=_A(t);},keyFor:function keyFor(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in F){if(F[e]===t)return e;}},useSetter:function useSetter(){X=!0;},useSimple:function useSimple(){X=!1;}}),a(a.S+a.F*!W,"Object",{create:function create(t,e){return void 0===e?T(t):q(T(t),e);},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var it=c(function(){C.f(1);});a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return C.f(m(t));}}),N&&a(a.S+a.F*(!W||c(function(){var t=_A();return"[null]"!=P([t])||"{}"!=P({a:t})||"{}"!=P(Object(t));})),"JSON",{stringify:function stringify(t){for(var e,n,o=[t],r=1;arguments.length>r;){o.push(arguments[r++]);}if(n=e=o[1],(k(e)||void 0!==t)&&!K(t))return y(e)||(e=function e(t,_e2){if("function"==typeof n&&(_e2=n.call(this,t,_e2)),!K(_e2))return _e2;}),o[1]=e,P.apply(N,o);}}),_A.prototype[D]||n(27)(_A.prototype,D,_A.prototype.valueOf),f(_A,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0);},function(t,e,n){t.exports=n(68)("native-function-to-string",Function.toString);},function(t,e,n){var o=n(46),r=n(70),i=n(62);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),l=i.f,c=0;s.length>c;){l.call(t,a=s[c++])&&e.push(a);}return e;};},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(48)});},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f});},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(118)});},function(t,e,n){var o=n(28),r=n(34).f;n(35)("getOwnPropertyDescriptor",function(){return function(t,e){return r(o(t),e);};});},function(t,e,n){var o=n(20),r=n(50);n(35)("getPrototypeOf",function(){return function(t){return r(o(t));};});},function(t,e,n){var o=n(20),r=n(46);n(35)("keys",function(){return function(t){return r(o(t));};});},function(t,e,n){n(35)("getOwnPropertyNames",function(){return n(119).f;});},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("freeze",function(t){return function(e){return t&&o(e)?t(r(e)):e;};});},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("seal",function(t){return function(e){return t&&o(e)?t(r(e)):e;};});},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("preventExtensions",function(t){return function(e){return t&&o(e)?t(r(e)):e;};});},function(t,e,n){var o=n(13);n(35)("isFrozen",function(t){return function(e){return!o(e)||!!t&&t(e);};});},function(t,e,n){var o=n(13);n(35)("isSealed",function(t){return function(e){return!o(e)||!!t&&t(e);};});},function(t,e,n){var o=n(13);n(35)("isExtensible",function(t){return function(e){return!!o(e)&&(!t||t(e));};});},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(120)});},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(121)});},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(90).set});},function(t,e,n){"use strict";var o=n(63),r={};r[n(14)("toStringTag")]="z",r+""!="[object z]"&&n(21)(Object.prototype,"toString",function(){return"[object "+o(this)+"]";},!0);},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(122)});},function(t,e,n){var o=n(19).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&o(r,"name",{configurable:!0,get:function get(){try{return(""+this).match(i)[1];}catch(t){return"";}}});},function(t,e,n){"use strict";var o=n(13),r=n(50),i=n(14)("hasInstance"),a=Function.prototype;i in a||n(19).f(a,i,{value:function value(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r(t);){if(this.prototype===t)return!0;}return!1;}});},function(t,e,n){var o=n(0),r=n(124);o(o.G+o.F*(parseInt!=r),{parseInt:r});},function(t,e,n){var o=n(0),r=n(125);o(o.G+o.F*(parseFloat!=r),{parseFloat:r});},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(37),a=n(92),s=n(40),l=n(11),c=n(49).f,u=n(34).f,f=n(19).f,d=n(54).trim,_p=o.Number,h=_p,v=_p.prototype,g="Number"==i(n(48)(v)),y=("trim"in String.prototype),b=function b(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN;}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e;}for(var a,l=e.slice(2),c=0,u=l.length;c<u;c++){if((a=l.charCodeAt(c))<48||a>r)return NaN;}return parseInt(l,o);}}return+e;};if(!_p(" 0o1")||!_p("0b1")||_p("+0x1")){_p=function p(t){var e=arguments.length<1?0:t,n=this;return n instanceof _p&&(g?l(function(){v.valueOf.call(n);}):"Number"!=i(n))?a(new h(b(e)),n,_p):b(e);};for(var k,m=n(18)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;m.length>x;x++){r(h,k=m[x])&&!r(_p,k)&&f(_p,k,u(h,k));}_p.prototype=v,v.constructor=_p,n(21)(o,"Number",_p);}},function(t,e,n){"use strict";var o=n(0),r=n(33),i=n(126),a=n(93),s=1..toFixed,l=Math.floor,c=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function f(t,e){for(var n=-1,o=e;++n<6;){o+=t*c[n],c[n]=o%1e7,o=l(o/1e7);}},d=function d(t){for(var e=6,n=0;--e>=0;){n+=c[e],c[e]=l(n/t),n=n%t*1e7;}},p=function p(){for(var t=6,e="";--t>=0;){if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+a.call("0",7-n.length)+n;}}return e;},h=function h(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n);};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0))||!n(11)(function(){s.call({});})),"Number",{toFixed:function toFixed(t){var e,n,o,s,l=i(this,u),c=r(t),v="",g="0";if(c<0||c>20)throw RangeError(u);if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;){e+=12,n/=4096;}for(;n>=2;){e+=1,n/=2;}return e;}(l*h(2,69,1))-69)<0?l*h(2,-e,1):l/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=c;o>=7;){f(1e7,0),o-=7;}for(f(h(10,o,1),0),o=e-1;o>=23;){d(1<<23),o-=23;}d(1<<o),f(1,1),d(2),g=p();}else f(0,n),f(1<<-e,0),g=p()+a.call("0",c);return g=c>0?v+((s=g.length)<=c?"0."+a.call("0",c-s)+g:g.slice(0,s-c)+"."+g.slice(s-c)):v+g;}});},function(t,e,n){"use strict";var o=n(0),r=n(11),i=n(126),a=1..toPrecision;o(o.P+o.F*(r(function(){return"1"!==a.call(1,void 0);})||!r(function(){a.call({});})),"Number",{toPrecision:function toPrecision(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t);}});},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)});},function(t,e,n){var o=n(0),r=n(10).isFinite;o(o.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&r(t);}});},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(127)});},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function isNaN(t){return t!=t;}});},function(t,e,n){var o=n(0),r=n(127),i=Math.abs;o(o.S,"Number",{isSafeInteger:function isSafeInteger(t){return r(t)&&i(t)<=9007199254740991;}});},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991});},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991});},function(t,e,n){var o=n(0),r=n(125);o(o.S+o.F*(Number.parseFloat!=r),"Number",{parseFloat:r});},function(t,e,n){var o=n(0),r=n(124);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r});},function(t,e,n){var o=n(0),r=n(128),i=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+i(t-1)*i(t+1));}});},function(t,e,n){var o=n(0),r=Math.asinh;o(o.S+o.F*!(r&&1/r(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e;}});},function(t,e,n){var o=n(0),r=Math.atanh;o(o.S+o.F*!(r&&1/r(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2;}});},function(t,e,n){var o=n(0),r=n(94);o(o.S,"Math",{cbrt:function cbrt(t){return r(t=+t)*Math.pow(Math.abs(t),1/3);}});},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32;}});},function(t,e,n){var o=n(0),r=Math.exp;o(o.S,"Math",{cosh:function cosh(t){return(r(t=+t)+r(-t))/2;}});},function(t,e,n){var o=n(0),r=n(95);o(o.S+o.F*(r!=Math.expm1),"Math",{expm1:r});},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(235)});},function(t,e,n){var o=n(94),r=Math.pow,i=r(2,-52),a=r(2,-23),s=r(2,127)*(2-a),l=r(2,-126);t.exports=Math.fround||function(t){var e,n,r=Math.abs(t),c=o(t);return r<l?c*(r/l/a+1/i-1/i)*l*a:(n=(e=(1+a/i)*r)-(e-r))>s||n!=n?c*(1/0):c*n;};},function(t,e,n){var o=n(0),r=Math.abs;o(o.S,"Math",{hypot:function hypot(t,e){for(var n,o,i=0,a=0,s=arguments.length,l=0;a<s;){l<(n=r(arguments[a++]))?(i=i*(o=l/n)*o+1,l=n):i+=n>0?(o=n/l)*o:n;}return l===1/0?1/0:l*Math.sqrt(i);}});},function(t,e,n){var o=n(0),r=Math.imul;o(o.S+o.F*n(11)(function(){return-5!=r(4294967295,5)||2!=r.length;}),"Math",{imul:function imul(t,e){var n=+t,o=+e,r=65535&n,i=65535&o;return 0|r*i+((65535&n>>>16)*i+r*(65535&o>>>16)<<16>>>0);}});},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E;}});},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(128)});},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2;}});},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(94)});},function(t,e,n){var o=n(0),r=n(95),i=Math.exp;o(o.S+o.F*n(11)(function(){return-2e-17!=!Math.sinh(-2e-17);}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2);}});},function(t,e,n){var o=n(0),r=n(95),i=Math.exp;o(o.S,"Math",{tanh:function tanh(t){var e=r(t=+t),n=r(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t));}});},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t);}});},function(t,e,n){var o=n(0),r=n(47),i=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function fromCodePoint(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320));}return n.join("");}});},function(t,e,n){var o=n(0),r=n(28),i=n(16);o(o.S,"String",{raw:function raw(t){for(var e=r(t.raw),n=i(e.length),o=arguments.length,a=[],s=0;n>s;){a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));}return a.join("");}});},function(t,e,n){"use strict";n(54)("trim",function(t){return function(){return t(this,3);};});},function(t,e,n){"use strict";var o=n(96)(!0);n(97)(String,"String",function(t){this._t=String(t),this._i=0;},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1});});},function(t,e,n){"use strict";var o=n(0),r=n(96)(!1);o(o.P,"String",{codePointAt:function codePointAt(t){return r(this,t);}});},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(98),a="".endsWith;o(o.P+o.F*n(100)("endsWith"),"String",{endsWith:function endsWith(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),s=void 0===n?o:Math.min(r(n),o),l=String(t);return a?a.call(e,l,s):e.slice(s-l.length,s)===l;}});},function(t,e,n){"use strict";var o=n(0),r=n(98);o(o.P+o.F*n(100)("includes"),"String",{includes:function includes(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0);}});},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(93)});},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(98),a="".startsWith;o(o.P+o.F*n(100)("startsWith"),"String",{startsWith:function startsWith(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o;}});},function(t,e,n){"use strict";n(22)("anchor",function(t){return function(e){return t(this,"a","name",e);};});},function(t,e,n){"use strict";n(22)("big",function(t){return function(){return t(this,"big","","");};});},function(t,e,n){"use strict";n(22)("blink",function(t){return function(){return t(this,"blink","","");};});},function(t,e,n){"use strict";n(22)("bold",function(t){return function(){return t(this,"b","","");};});},function(t,e,n){"use strict";n(22)("fixed",function(t){return function(){return t(this,"tt","","");};});},function(t,e,n){"use strict";n(22)("fontcolor",function(t){return function(e){return t(this,"font","color",e);};});},function(t,e,n){"use strict";n(22)("fontsize",function(t){return function(e){return t(this,"font","size",e);};});},function(t,e,n){"use strict";n(22)("italics",function(t){return function(){return t(this,"i","","");};});},function(t,e,n){"use strict";n(22)("link",function(t){return function(e){return t(this,"a","href",e);};});},function(t,e,n){"use strict";n(22)("small",function(t){return function(){return t(this,"small","","");};});},function(t,e,n){"use strict";n(22)("strike",function(t){return function(){return t(this,"strike","","");};});},function(t,e,n){"use strict";n(22)("sub",function(t){return function(){return t(this,"sub","","");};});},function(t,e,n){"use strict";n(22)("sup",function(t){return function(){return t(this,"sup","","");};});},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function now(){return new Date().getTime();}});},function(t,e,n){"use strict";var o=n(0),r=n(20),i=n(40);o(o.P+o.F*n(11)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function toISOString(){return 1;}});}),"Date",{toJSON:function toJSON(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null;}});},function(t,e,n){var o=n(0),r=n(270);o(o.P+o.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r});},function(t,e,n){"use strict";var o=n(11),r=Date.prototype.getTime,i=Date.prototype.toISOString,a=function a(t){return t>9?t:"0"+t;};t.exports=o(function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001));})||!o(function(){i.call(new Date(NaN));})?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z";}:i;},function(t,e,n){var o=Date.prototype,r=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(21)(o,"toString",function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date";});},function(t,e,n){var o=n(14)("toPrimitive"),r=Date.prototype;o in r||n(27)(r,o,n(273));},function(t,e,n){"use strict";var o=n(12),r=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(o(this),"number"!=t);};},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(71)});},function(t,e,n){"use strict";var o=n(31),r=n(0),i=n(20),a=n(130),s=n(101),l=n(16),c=n(102),u=n(103);r(r.S+r.F*!n(72)(function(t){Array.from(t);}),"Array",{from:function from(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=0,b=u(d);if(g&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=l(d.length));e>y;y++){c(n,y,g?v(d[y],y):d[y]);}else for(f=b.call(d),n=new p();!(r=f.next()).done;y++){c(n,y,g?a(f,v,[r.value,y],!0):r.value);}return n.length=y,n;}});},function(t,e,n){"use strict";var o=n(0),r=n(102);o(o.S+o.F*n(11)(function(){function t(){}return!(Array.of.call(t)instanceof t);}),"Array",{of:function of(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;){r(n,t,arguments[t++]);}return n.length=e,n;}});},function(t,e,n){"use strict";var o=n(0),r=n(28),i=[].join;o(o.P+o.F*(n(61)!=Object||!n(29)(i)),"Array",{join:function join(t){return i.call(r(this),void 0===t?",":t);}});},function(t,e,n){"use strict";var o=n(0),r=n(89),i=n(37),a=n(47),s=n(16),l=[].slice;o(o.P+o.F*n(11)(function(){r&&l.call(r);}),"Array",{slice:function slice(t,e){var n=s(this.length),o=i(this);if(e=void 0===e?n:e,"Array"==o)return l.call(this,t,e);for(var r=a(t,n),c=a(e,n),u=s(c-r),f=new Array(u),d=0;d<u;d++){f[d]="String"==o?this.charAt(r+d):this[r+d];}return f;}});},function(t,e,n){"use strict";var o=n(0),r=n(32),i=n(20),a=n(11),s=[].sort,l=[1,2,3];o(o.P+o.F*(a(function(){l.sort(void 0);})||!a(function(){l.sort(null);})||!n(29)(s)),"Array",{sort:function sort(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t));}});},function(t,e,n){"use strict";var o=n(0),r=n(36)(0),i=n(29)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function forEach(t){return r(this,t,arguments[1]);}});},function(t,e,n){var o=n(13),r=n(71),i=n(14)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e;};},function(t,e,n){"use strict";var o=n(0),r=n(36)(1);o(o.P+o.F*!n(29)([].map,!0),"Array",{map:function map(t){return r(this,t,arguments[1]);}});},function(t,e,n){"use strict";var o=n(0),r=n(36)(2);o(o.P+o.F*!n(29)([].filter,!0),"Array",{filter:function filter(t){return r(this,t,arguments[1]);}});},function(t,e,n){"use strict";var o=n(0),r=n(36)(3);o(o.P+o.F*!n(29)([].some,!0),"Array",{some:function some(t){return r(this,t,arguments[1]);}});},function(t,e,n){"use strict";var o=n(0),r=n(36)(4);o(o.P+o.F*!n(29)([].every,!0),"Array",{every:function every(t){return r(this,t,arguments[1]);}});},function(t,e,n){"use strict";var o=n(0),r=n(132);o(o.P+o.F*!n(29)([].reduce,!0),"Array",{reduce:function reduce(t){return r(this,t,arguments.length,arguments[1],!1);}});},function(t,e,n){"use strict";var o=n(0),r=n(132);o(o.P+o.F*!n(29)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return r(this,t,arguments.length,arguments[1],!0);}});},function(t,e,n){"use strict";var o=n(0),r=n(69)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(29)(i)),"Array",{indexOf:function indexOf(t){return a?i.apply(this,arguments)||0:r(this,t,arguments[1]);}});},function(t,e,n){"use strict";var o=n(0),r=n(28),i=n(33),a=n(16),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(l||!n(29)(s)),"Array",{lastIndexOf:function lastIndexOf(t){if(l)return s.apply(this,arguments)||0;var e=r(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--){if(o in e&&e[o]===t)return o||0;}return-1;}});},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(133)}),n(51)("copyWithin");},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(104)}),n(51)("fill");},function(t,e,n){"use strict";var o=n(0),r=n(36)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1;}),o(o.P+o.F*i,"Array",{find:function find(t){return r(this,t,arguments.length>1?arguments[1]:void 0);}}),n(51)("find");},function(t,e,n){"use strict";var o=n(0),r=n(36)(6),i="findIndex",a=!0;i in[]&&Array(1)[i](function(){a=!1;}),o(o.P+o.F*a,"Array",{findIndex:function findIndex(t){return r(this,t,arguments.length>1?arguments[1]:void 0);}}),n(51)(i);},function(t,e,n){n(56)("Array");},function(t,e,n){var o=n(10),r=n(92),i=n(19).f,a=n(49).f,s=n(99),l=n(73),_c=o.RegExp,u=_c,f=_c.prototype,d=/a/g,p=/a/g,h=new _c(d)!==d;if(n(18)&&(!h||n(11)(function(){return p[n(14)("match")]=!1,_c(d)!=d||_c(p)==p||"/a/i"!=_c(d,"i");}))){_c=function c(t,e){var n=this instanceof _c,o=s(t),i=void 0===e;return!n&&o&&t.constructor===_c&&i?t:r(h?new u(o&&!i?t.source:t,e):u((o=t instanceof _c)?t.source:t,o&&i?l.call(t):e),n?this:f,_c);};for(var v=function v(t){(t in _c)||i(_c,t,{configurable:!0,get:function get(){return u[t];},set:function set(e){u[t]=e;}});},g=a(u),y=0;g.length>y;){v(g[y++]);}f.constructor=_c,_c.prototype=f,n(21)(o,"RegExp",_c);}n(56)("RegExp");},function(t,e,n){"use strict";n(136);var o=n(12),r=n(73),i=n(18),a=/./.toString,s=function s(t){n(21)(RegExp.prototype,"toString",t,!0);};n(11)(function(){return"/a/b"!=a.call({source:"a",flags:"b"});})?s(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0);}):"toString"!=a.name&&s(function(){return a.call(this);});},function(t,e,n){"use strict";var o=n(12),r=n(16),i=n(107),a=n(74);n(75)("match",1,function(t,e,n,s){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o));},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=o(t),c=String(this);if(!l.global)return a(l,c);var u=l.unicode;l.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(l,c));){var h=String(f[0]);d[p]=h,""===h&&(l.lastIndex=i(c,r(l.lastIndex),u)),p++;}return 0===p?null:d;}];});},function(t,e,n){"use strict";var o=n(12),r=n(20),i=n(16),a=n(33),s=n(107),l=n(74),c=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(75)("replace",2,function(t,e,n,h){return[function(o,r){var i=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r);},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var y=f.unicode;f.lastIndex=0;}for(var b=[];;){var k=l(f,d);if(null===k)break;if(b.push(k),!g)break;""===String(k[0])&&(f.lastIndex=s(d,i(f.lastIndex),y));}for(var m,x="",w=0,S=0;S<b.length;S++){k=b[S];for(var T=String(k[0]),E=c(u(a(k.index),d.length),0),B=[],C=1;C<k.length;C++){B.push(void 0===(m=k[C])?m:String(m));}var _=k.groups;if(p){var I=[T].concat(B,E,d);void 0!==_&&I.push(_);var O=String(e.apply(void 0,I));}else O=v(T,d,E,B,_,e);E>=w&&(x+=d.slice(w,E)+O,w=E+T.length);}return x+d.slice(w);}];function v(t,e,o,i,a,s){var l=o+t.length,c=i.length,u=p;return void 0!==a&&(a=r(a),u=d),n.call(s,u,function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(l);case"<":s=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>c){var d=f(u/10);return 0===d?n:d<=c?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n;}s=i[u-1];}return void 0===s?"":s;});}});},function(t,e,n){"use strict";var o=n(12),r=n(121),i=n(74);n(75)("search",1,function(t,e,n,a){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o));},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var u=i(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index;}];});},function(t,e,n){"use strict";var o=n(99),r=n(12),i=n(64),a=n(107),s=n(16),l=n(74),c=n(106),u=n(11),f=Math.min,d=[].push,p="length",h=!u(function(){RegExp(4294967295,"y");});n(75)("split",2,function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);for(var i,a,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(i=c.call(v,r))&&!((a=v.lastIndex)>f&&(l.push(r.slice(f,i.index)),i[p]>1&&i.index<r[p]&&d.apply(l,i.slice(1)),s=i[0][p],f=a,l[p]>=h));){v.lastIndex===i.index&&v.lastIndex++;}return f===r[p]?!s&&v.test("")||l.push(""):l.push(r.slice(f)),l[p]>h?l.slice(0,h):l;}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e);}:n,[function(n,o){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):v.call(String(r),n,o);},function(t,e){var o=u(v,t,this,e,v!==n);if(o.done)return o.value;var c=r(t),d=String(this),p=i(c,RegExp),g=c.unicode,y=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),b=new p(h?c:"^(?:"+c.source+")",y),k=void 0===e?4294967295:e>>>0;if(0===k)return[];if(0===d.length)return null===l(b,d)?[d]:[];for(var m=0,x=0,w=[];x<d.length;){b.lastIndex=h?x:0;var S,T=l(b,h?d:d.slice(x));if(null===T||(S=f(s(b.lastIndex+(h?0:x)),d.length))===m)x=a(d,x,g);else{if(w.push(d.slice(m,x)),w.length===k)return w;for(var E=1;E<=T.length-1;E++){if(w.push(T[E]),w.length===k)return w;}x=m=S;}}return w.push(d.slice(m)),w;}];});},function(t,e,n){var o=n(10),r=n(108).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,l="process"==n(37)(a);t.exports=function(){var t,e,n,c=function c(){var o,r;for(l&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r();}catch(o){throw t?n():e=void 0,o;}}e=void 0,o&&o.enter();};if(l)n=function n(){a.nextTick(c);};else if(!i||o.navigator&&o.navigator.standalone){if(s&&s.resolve){var u=s.resolve(void 0);n=function n(){u.then(c);};}else n=function n(){r.call(o,c);};}else{var f=!0,d=document.createTextNode("");new i(c).observe(d,{characterData:!0}),n=function n(){d.data=f=!f;};}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r;};};},function(t,e){t.exports=function(t){try{return{e:!1,v:t()};}catch(t){return{e:!0,v:t};}};},function(t,e,n){"use strict";var o=n(140),r=n(52);t.exports=n(78)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0);};},{get:function get(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v;},set:function set(t,e){return o.def(r(this,"Map"),0===t?0:t,e);}},o,!0);},function(t,e,n){"use strict";var o=n(140),r=n(52);t.exports=n(78)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0);};},{add:function add(t){return o.def(r(this,"Set"),t=0===t?0:t,t);}},o);},function(t,e,n){"use strict";var o,r=n(10),i=n(36)(0),a=n(21),s=n(41),l=n(120),c=n(141),u=n(13),f=n(52),d=n(52),p=!r.ActiveXObject&&"ActiveXObject"in r,h=s.getWeak,v=Object.isExtensible,g=c.ufstore,y=function y(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0);};},b={get:function get(t){if(u(t)){var e=h(t);return!0===e?g(f(this,"WeakMap")).get(t):e?e[this._i]:void 0;}},set:function set(t,e){return c.def(f(this,"WeakMap"),t,e);}},k=t.exports=n(78)("WeakMap",y,b,c,!0,!0);d&&p&&(l((o=c.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],function(t){var e=k.prototype,n=e[t];a(e,t,function(e,r){if(u(e)&&!v(e)){this._f||(this._f=new o());var i=this._f[t](e,r);return"set"==t?this:i;}return n.call(this,e,r);});}));},function(t,e,n){"use strict";var o=n(141),r=n(52);n(78)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0);};},{add:function add(t){return o.def(r(this,"WeakSet"),t,!0);}},o,!1,!0);},function(t,e,n){"use strict";var o=n(0),r=n(79),i=n(109),a=n(12),s=n(47),l=n(16),c=n(13),u=n(10).ArrayBuffer,f=n(64),d=i.ArrayBuffer,p=i.DataView,h=r.ABV&&u.isView,v=d.prototype.slice,g=r.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!r.CONSTR,"ArrayBuffer",{isView:function isView(t){return h&&h(t)||c(t)&&g in t;}}),o(o.P+o.U+o.F*n(11)(function(){return!new d(2).slice(1,void 0).byteLength;}),"ArrayBuffer",{slice:function slice(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),r=s(void 0===e?n:e,n),i=new(f(this,d))(l(r-o)),c=new p(this),u=new p(i),h=0;o<r;){u.setUint8(h++,c.getUint8(o++));}return i;}}),n(56)("ArrayBuffer");},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(79).ABV,{DataView:n(109).DataView});},function(t,e,n){n(39)("Int8",1,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Uint8",1,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Uint8",1,function(t){return function(e,n,o){return t(this,e,n,o);};},!0);},function(t,e,n){n(39)("Int16",2,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Uint16",2,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Int32",4,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Uint32",4,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Float32",4,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){n(39)("Float64",8,function(t){return function(e,n,o){return t(this,e,n,o);};});},function(t,e,n){var o=n(0),r=n(32),i=n(12),a=(n(10).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(11)(function(){a(function(){});}),"Reflect",{apply:function apply(t,e,n){var o=r(t),l=i(n);return a?a(o,e,l):s.call(o,e,l);}});},function(t,e,n){var o=n(0),r=n(48),i=n(32),a=n(12),s=n(13),l=n(11),c=n(122),u=(n(10).Reflect||{}).construct,f=l(function(){function t(){}return!(u(function(){},[],t)instanceof t);}),d=!l(function(){u(function(){});});o(o.S+o.F*(f||d),"Reflect",{construct:function construct(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t();case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);}var o=[null];return o.push.apply(o,e),new(c.apply(t,o))();}var l=n.prototype,p=r(s(l)?l:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p;}});},function(t,e,n){var o=n(19),r=n(0),i=n(12),a=n(40);r(r.S+r.F*n(11)(function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2});}),"Reflect",{defineProperty:function defineProperty(t,e,n){i(t),e=a(e,!0),i(n);try{return o.f(t,e,n),!0;}catch(t){return!1;}}});},function(t,e,n){var o=n(0),r=n(34).f,i=n(12);o(o.S,"Reflect",{deleteProperty:function deleteProperty(t,e){var n=r(i(t),e);return!(n&&!n.configurable)&&delete t[e];}});},function(t,e,n){"use strict";var o=n(0),r=n(12),i=function i(t){this._t=r(t),this._i=0;var e,n=this._k=[];for(e in t){n.push(e);}};n(129)(i,"Object",function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0};}while(!((t=e[this._i++])in this._t));return{value:t,done:!1};}),o(o.S,"Reflect",{enumerate:function enumerate(t){return new i(t);}});},function(t,e,n){var o=n(34),r=n(50),i=n(26),a=n(0),s=n(13),l=n(12);a(a.S,"Reflect",{get:function t(e,n){var a,c,u=arguments.length<3?e:arguments[2];return l(e)===u?e[n]:(a=o.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(c=r(e))?t(c,n,u):void 0;}});},function(t,e,n){var o=n(34),r=n(0),i=n(12);r(r.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,e){return o.f(i(t),e);}});},function(t,e,n){var o=n(0),r=n(50),i=n(12);o(o.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return r(i(t));}});},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function has(t,e){return e in t;}});},function(t,e,n){var o=n(0),r=n(12),i=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function isExtensible(t){return r(t),!i||i(t);}});},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(143)});},function(t,e,n){var o=n(0),r=n(12),i=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function preventExtensions(t){r(t);try{return i&&i(t),!0;}catch(t){return!1;}}});},function(t,e,n){var o=n(19),r=n(34),i=n(50),a=n(26),s=n(0),l=n(43),c=n(12),u=n(13);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=r.f(c(e),n);if(!h){if(u(d=i(e)))return t(d,n,s,p);h=l(0);}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=r.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f);}else o.f(p,n,l(0,s));return!0;}return void 0!==h.set&&(h.set.call(p,s),!0);}});},function(t,e,n){var o=n(0),r=n(90);r&&o(o.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,e){r.check(t,e);try{return r.set(t,e),!0;}catch(t){return!1;}}});},function(t,e,n){n(333),t.exports=n(17).Array.includes;},function(t,e,n){"use strict";var o=n(0),r=n(69)(!0);o(o.P,"Array",{includes:function includes(t){return r(this,t,arguments.length>1?arguments[1]:void 0);}}),n(51)("includes");},function(t,e,n){n(335),t.exports=n(17).Array.flatMap;},function(t,e,n){"use strict";var o=n(0),r=n(336),i=n(20),a=n(16),s=n(32),l=n(131);o(o.P,"Array",{flatMap:function flatMap(t){var e,n,o=i(this);return s(t),e=a(o.length),n=l(o,0),r(n,o,o,e,0,1,t,arguments[1]),n;}}),n(51)("flatMap");},function(t,e,n){"use strict";var o=n(71),r=n(13),i=n(16),a=n(31),s=n(14)("isConcatSpreadable");t.exports=function t(e,n,l,c,u,f,d,p){for(var h,v,g=u,y=0,b=!!d&&a(d,p,3);y<c;){if(y in l){if(h=b?b(l[y],y,n):l[y],v=!1,r(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)g=t(e,n,h,i(h.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();e[g]=h;}g++;}y++;}return g;};},function(t,e,n){n(338),t.exports=n(17).String.padStart;},function(t,e,n){"use strict";var o=n(0),r=n(144),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padStart:function padStart(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0);}});},function(t,e,n){n(340),t.exports=n(17).String.padEnd;},function(t,e,n){"use strict";var o=n(0),r=n(144),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padEnd:function padEnd(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1);}});},function(t,e,n){n(342),t.exports=n(17).String.trimLeft;},function(t,e,n){"use strict";n(54)("trimLeft",function(t){return function(){return t(this,1);};},"trimStart");},function(t,e,n){n(344),t.exports=n(17).String.trimRight;},function(t,e,n){"use strict";n(54)("trimRight",function(t){return function(){return t(this,2);};},"trimEnd");},function(t,e,n){n(346),t.exports=n(86).f("asyncIterator");},function(t,e,n){n(116)("asyncIterator");},function(t,e,n){n(348),t.exports=n(17).Object.getOwnPropertyDescriptors;},function(t,e,n){var o=n(0),r=n(143),i=n(28),a=n(34),s=n(102);o(o.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var e,n,o=i(t),l=a.f,c=r(o),u={},f=0;c.length>f;){void 0!==(n=l(o,e=c[f++]))&&s(u,e,n);}return u;}});},function(t,e,n){n(350),t.exports=n(17).Object.values;},function(t,e,n){var o=n(0),r=n(145)(!1);o(o.S,"Object",{values:function values(t){return r(t);}});},function(t,e,n){n(352),t.exports=n(17).Object.entries;},function(t,e,n){var o=n(0),r=n(145)(!0);o(o.S,"Object",{entries:function entries(t){return r(t);}});},function(t,e,n){"use strict";n(137),n(354),t.exports=n(17).Promise["finally"];},function(t,e,n){"use strict";var o=n(0),r=n(17),i=n(10),a=n(64),s=n(139);o(o.P+o.R,"Promise",{"finally":function _finally(t){var e=a(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n;});}:t,n?function(n){return s(e,t()).then(function(){throw n;});}:t);}});},function(t,e,n){n(356),n(357),n(358),t.exports=n(17);},function(t,e,n){var o=n(10),r=n(0),i=n(77),a=[].slice,s=/MSIE .\./.test(i),l=function l(t){return function(e,n){var o=arguments.length>2,r=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r);}:e,n);};};r(r.G+r.B+r.F*s,{setTimeout:l(o.setTimeout),setInterval:l(o.setInterval)});},function(t,e,n){var o=n(0),r=n(108);o(o.G+o.B,{setImmediate:r.set,clearImmediate:r.clear});},function(t,e,n){for(var o=n(105),r=n(46),i=n(21),a=n(10),s=n(27),l=n(55),c=n(14),u=c("iterator"),f=c("toStringTag"),d=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(p),v=0;v<h.length;v++){var g,y=h[v],b=p[y],k=a[y],m=k&&k.prototype;if(m&&(m[u]||s(m,u,d),m[f]||s(m,f,y),l[y]=d,b))for(g in o){m[g]||i(m,g,o[g],!0);}}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(363),n(365),n(366),n(7)],void 0===(i="function"==typeof(o=function o(_o51,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);Object.defineProperty(_o51,"__esModule",{value:!0}),_o51["default"]=void 0,r=d(r),i=d(i),a=d(a),c=d(c),u=f(u);var p=function(){function t(e){var n=this;(0,i["default"])(this,t);var o=function o(){};u.isObject(e)&&u.isFunction(e.onReady)&&(o=e.onReady);var r=new c["default"](e);this.isReady=r.isReady.then(function(){n.exportAPI(r),o();});}return(0,a["default"])(t,[{key:"exportAPI",value:function value(t){var e=this;["configuration"].forEach(function(n){e[n]=t[n];}),this.destroy=function(){for(var n in Object.values(t.moduleInstances).forEach(function(t){u.isFunction(t.destroy)&&t.destroy(),t.listeners.removeAll();}),t=null,e){Object.prototype.hasOwnProperty.call(e,n)&&delete e[n];}Object.setPrototypeOf(e,null);},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach(function(n){var o=(0,r["default"])(n,2),i=o[0],a=o[1];Object.entries(a).forEach(function(n){var o=(0,r["default"])(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[i][a];});});}}],[{key:"version",get:function get(){return"2.23.2";}}]),t;}();_o51["default"]=p,p.displayName="EditorJS",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e){t.exports=function(t){if(Array.isArray(t))return t;};},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0){;}}catch(t){r=!0,i=t;}finally{try{o||null==s["return"]||s["return"]();}finally{if(r)throw i;}}return n;}};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");};},function(t,e,n){(e=t.exports=function(){return r.apply(void 0,arguments);}).__esModule=!0;var o=n(364),r=o["default"];Object.assign(e,o);},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){},e.revert=function(){};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[],void 0===(i="function"==typeof(o=function o(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;){;}return n>-1;}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode;}while(null!==e);return null;}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach(function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(t));}),this.insertBefore(e,this.firstChild);});})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(15),n(7),n(59),n(150),n(111)],void 0===(i="function"==typeof(o=function o(_o52,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);Object.defineProperty(_o52,"__esModule",{value:!0}),_o52["default"]=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=p(c),u=h(u),d=h(d);var v=n(374),g=[];v.keys().forEach(function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&g.push(v(t));});var y=function(){function t(e){var n,o,s=this;(0,a["default"])(this,t),this.moduleInstances={},this.eventsDispatcher=new d["default"](),this.isReady=new Promise(function(t,e){n=t,o=e;}),Promise.resolve().then((0,i["default"])(r["default"].mark(function t(){return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return s.configuration=e,t.next=3,s.validate();case 3:return t.next=5,s.init();case 5:return t.next=7,s.start();case 7:c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","log","","color: #E24A75"),setTimeout((0,i["default"])(r["default"].mark(function t(){var e,o,i;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.next=2,s.render();case 2:s.configuration.autofocus&&(e=s.moduleInstances,o=e.BlockManager,(i=e.Caret).setToBlock(o.blocks[0],i.positions.START),o.highlightCurrentNode()),s.moduleInstances.UI.removeLoader(),n();case 5:case"end":return t.stop();}}},t);})),500);case 9:case"end":return t.stop();}}},t);})))["catch"](function(t){c.log("Editor.js is not ready because of ".concat(t),"error"),o(t);});}var e,n;return(0,s["default"])(t,[{key:"validate",value:(n=(0,i["default"])(r["default"].mark(function t(){var e,n,o;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:if(e=this.config,n=e.holderId,o=e.holder,!n||!o){t.next=3;break;}throw Error("«holderId» and «holder» param can't assign at the same time.");case 3:if(!c.isString(o)||l["default"].get(o)){t.next=5;break;}throw Error("element with ID «".concat(o,"» is missing. Pass correct holder's ID."));case 5:if(!o||!c.isObject(o)||l["default"].isElement(o)){t.next=7;break;}throw Error("«holder» value must be an Element node");case 7:case"end":return t.stop();}}},t,this);})),function(){return n.apply(this,arguments);})},{key:"init",value:function value(){this.constructModules(),this.configureModules();}},{key:"start",value:(e=(0,i["default"])(r["default"].mark(function t(){var e,n=this;return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return e=["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"],t.next=3,e.reduce(function(t,e){return t.then((0,i["default"])(r["default"].mark(function t(){return r["default"].wrap(function(t){for(;;){switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.moduleInstances[e].prepare();case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t["catch"](0),!(t.t0 instanceof f.CriticalError)){t.next=9;break;}throw new Error(t.t0.message);case 9:c.log("Module ".concat(e," was skipped because of %o"),"warn",t.t0);case 10:case"end":return t.stop();}}},t,null,[[0,5]]);})));},Promise.resolve());case 3:case"end":return t.stop();}}},t);})),function(){return e.apply(this,arguments);})},{key:"render",value:function value(){return this.moduleInstances.Renderer.render(this.config.data.blocks);}},{key:"constructModules",value:function value(){var t=this;g.forEach(function(e){var n=c.isFunction(e)?e:e["default"];try{t.moduleInstances[n.displayName]=new n({config:t.configuration,eventsDispatcher:t.eventsDispatcher});}catch(t){c.log("Module ".concat(n.displayName," skipped because"),"error",t);}});}},{key:"configureModules",value:function value(){for(var t in this.moduleInstances){Object.prototype.hasOwnProperty.call(this.moduleInstances,t)&&(this.moduleInstances[t].state=this.getModulesDiff(t));}}},{key:"getModulesDiff",value:function value(t){var e={};for(var n in this.moduleInstances){n!==t&&(e[n]=this.moduleInstances[n]);}return e;}},{key:"configuration",set:function set(t){var e,n;c.isObject(t)?this.config=Object.assign({},t):this.config={holder:t},c.deprecationAssert(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=c.LogLevels.VERBOSE),c.setLogLevel(this.config.logLevel),c.deprecationAssert(Boolean(this.config.initialBlock),"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var o={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,!c.isEmpty(this.config.data)&&this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data={blocks:[o]}),this.config.readOnly=this.config.readOnly||!1,(null===(e=this.config.i18n)||void 0===e?void 0:e.messages)&&u["default"].setDictionary(this.config.i18n.messages),this.config.i18n.direction=(null===(n=this.config.i18n)||void 0===n?void 0:n.direction)||"ltr";},get:function get(){return this.config;}}]),t;}();_o52["default"]=y,y.displayName="Core",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(148);t.exports=function(t){if(Array.isArray(t))return o(t);};},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t);};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");};},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;};},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]");};},function(t,e,n){var o=n(110),r=n(373);function i(e,n,a){return r()?t.exports=i=Reflect.construct:t.exports=i=function i(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r))();return n&&o(i,n.prototype),i;},i.apply(null,arguments);}t.exports=i;},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}};},function(t,e,n){var o={"./api":81,"./api/":81,"./api/blocks":153,"./api/blocks.ts":153,"./api/caret":154,"./api/caret.ts":154,"./api/events":155,"./api/events.ts":155,"./api/i18n":156,"./api/i18n.ts":156,"./api/index":81,"./api/index.ts":81,"./api/inlineToolbar":157,"./api/inlineToolbar.ts":157,"./api/listeners":158,"./api/listeners.ts":158,"./api/notifier":159,"./api/notifier.ts":159,"./api/readonly":160,"./api/readonly.ts":160,"./api/sanitizer":161,"./api/sanitizer.ts":161,"./api/saver":162,"./api/saver.ts":162,"./api/selection":163,"./api/selection.ts":163,"./api/styles":164,"./api/styles.ts":164,"./api/toolbar":165,"./api/toolbar.ts":165,"./api/tooltip":166,"./api/tooltip.ts":166,"./api/ui":167,"./api/ui.ts":167,"./blockEvents":168,"./blockEvents.ts":168,"./blockManager":169,"./blockManager.ts":169,"./blockSelection":170,"./blockSelection.ts":170,"./caret":171,"./caret.ts":171,"./crossBlockSelection":172,"./crossBlockSelection.ts":172,"./dragNDrop":173,"./dragNDrop.ts":173,"./modificationsObserver":174,"./modificationsObserver.ts":174,"./paste":175,"./paste.ts":175,"./readonly":176,"./readonly.ts":176,"./rectangleSelection":177,"./rectangleSelection.ts":177,"./renderer":178,"./renderer.ts":178,"./saver":179,"./saver.ts":179,"./toolbar":83,"./toolbar/":83,"./toolbar/blockSettings":180,"./toolbar/blockSettings.ts":180,"./toolbar/conversion":181,"./toolbar/conversion.ts":181,"./toolbar/index":83,"./toolbar/index.ts":83,"./toolbar/inline":182,"./toolbar/inline.ts":182,"./tools":183,"./tools.ts":183,"./ui":185,"./ui.ts":185};function r(t){var e=i(t);return n(e);}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e;}return o[t];}r.keys=function(){return Object.keys(o);},r.resolve=i,t.exports=r,r.id=374;},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function o(_o53,r,i,a){"use strict";var s=n(8),l=n(1);Object.defineProperty(_o53,"__esModule",{value:!0}),_o53["default"]=void 0,r=l(r),i=l(i),a=s(a);var c=function(){function t(){(0,r["default"])(this,t),this.allListeners=[];}return(0,i["default"])(t,[{key:"on",value:function value(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=a.generateId("l"),i={id:r,element:t,eventType:e,handler:n,options:o},s=this.findOne(t,e,n);if(!s)return this.allListeners.push(i),t.addEventListener(e,n,o),r;}},{key:"off",value:function value(t,e,n,o){var r=this,i=this.findAll(t,e,n);i.forEach(function(t,e){var n=r.allListeners.indexOf(i[e]);n>-1&&(r.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options));});}},{key:"offById",value:function value(t){var e=this.findById(t);e&&e.element.removeEventListener(e.eventType,e.handler,e.options);}},{key:"findOne",value:function value(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null;}},{key:"findAll",value:function value(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter(function(t){return t.eventType===e&&t.handler===n;}):t&&e?o.filter(function(t){return t.eventType===e;}):o;}},{key:"removeAll",value:function value(){this.allListeners.map(function(t){t.element.removeEventListener(t.eventType,t.handler,t.options);}),this.allListeners=[];}},{key:"destroy",value:function value(){this.removeAll();}},{key:"findByEventTarget",value:function value(t){return this.allListeners.filter(function(e){if(e.element===t)return e;});}},{key:"findByType",value:function value(t){return this.allListeners.filter(function(e){if(e.eventType===t)return e;});}},{key:"findByHandler",value:function value(t){return this.allListeners.filter(function(e){if(e.handler===t)return e;});}},{key:"findById",value:function value(t){return this.allListeners.find(function(e){return e.id===t;});}}]),t;}();_o53["default"]=c,c.displayName="Listeners",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(377)],void 0===(i="function"==typeof(o=function o(_o54,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o54,"__esModule",{value:!0}),_o54["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r["default"])(this,t);}return(0,i["default"])(t,[{key:"show",value:function value(t){a["default"].show(t);}}]),t;}();_o54["default"]=l,l.displayName="Notifier",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t){n.d(o,r,function(e){return t[e];}.bind(null,r));}return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="/",n(n.s=0);}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function show(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e);}();var o=null,r=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout(function(){o.remove();},r);}e.appendChild(o),o.classList.add("cdx-notify--bounce-in");}}};}();},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals);},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""]);},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n,o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */";});return[o].concat(a).concat([i]).join("\n");}return[o].join("\n");}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n;}).join("");},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0);}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a));}},e;};},function(t,e,n){var o,r,i={},a=(o=function o(){return window&&document&&document.all&&!window.atob;},function(){return void 0===r&&(r=o.apply(this,arguments)),r;}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t);}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(t){n=null;}e[t]=n;}return e[t];};}(),l=null,c=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++){r.parts[a](o.parts[a]);}for(;a<o.parts.length;a++){r.parts.push(b(o.parts[a],e));}}else{var s=[];for(a=0;a<o.parts.length;a++){s.push(b(o.parts[a],e));}i[o.id]={id:o.id,refs:1,parts:s};}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]});}return n;}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=_typeof(t.insertAt)||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r);}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1);}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e;}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n]);});}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i;}if(e.singleton){var a=c++;n=l||(l=g(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0);}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e;}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s);}.bind(null,n,e),r=function r(){v(n),n.href&&URL.revokeObjectURL(n.href);}):(n=g(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;){t.removeChild(t.firstChild);}t.appendChild(document.createTextNode(n));}}.bind(null,n),r=function r(){v(n);});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e);}else r();};}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=(typeof document==="undefined"?"undefined":_typeof(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==_typeof(e.attrs)?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s);}for(t&&d(p(t,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++){s.parts[l]();}delete i[s.id];}}};};var k,m=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n");});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i);}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e;}).replace(/^'(.*)'$/,function(t,e){return e;});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")");});};},function(t,e,n){"use strict";var o,r,i,a,s,l;t.exports=(o="cdx-notify",r="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:l=function l(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),i=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=i,n.classList.add(r),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e;},confirm:function confirm(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",c.innerHTML=t.cancelText||"Cancel",o.classList.add(a),c.classList.add(a),o.classList.add(i),c.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(c.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),c.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(c),e.appendChild(n),e;},prompt:function prompt(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("input"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(i),c.classList.add("cdx-notify__input"),t.placeholder&&c.setAttribute("placeholder",t.placeholder),t["default"]&&(c.value=t["default"]),t.inputType&&(c.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",function(){d(c.value);}),o.addEventListener("click",e.remove.bind(e)),n.appendChild(c),n.appendChild(o),e.appendChild(n),e;},getWrapper:function getWrapper(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t;}});}]);},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function o(){function t(t){var e=t.tags;if(!Object.keys(e).map(function(t){return _typeof(e[t]);}).every(function(t){return"object"===t||"boolean"===t||"function"===t;}))throw new Error("The configuration was invalid");this.config=t;}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName);}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(t){return-1!==o.indexOf(t.nodeName);}function i(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e];}function a(t,e){return void 0===e||"boolean"==typeof e&&!e;}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value);}return t.prototype.clean=function(t){var e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML;},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1);}(t,e),l=o.firstChild();if(l)do{if(l.nodeType!==Node.TEXT_NODE){if(l.nodeType===Node.COMMENT_NODE){e.removeChild(l),this._sanitize(t,e);break;}var c,u=r(l);u&&(c=Array.prototype.some.call(l.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(l)&&f,p=l.nodeName.toLowerCase(),h=i(this.config,p,l);if(u&&c||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName)for(;l.childNodes.length>0;){e.insertBefore(l.childNodes[0],l);}e.removeChild(l),this._sanitize(t,e);break;}for(var v=0;v<l.attributes.length;v+=1){var g=l.attributes[v];s(g,h,l)&&(l.removeAttribute(g.name),v-=1);}this._sanitize(t,l);}else if(""===l.data.trim()&&(l.previousElementSibling&&n(l.previousElementSibling)||l.nextElementSibling&&n(l.nextElementSibling))){e.removeChild(l),this._sanitize(t,e);break;}}while(l=o.nextSibling());},t;})?o.call(e,n,e,t):o)||(t.exports=r);},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t){n.d(o,r,function(e){return t[e];}.bind(null,r));}return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=0);}([function(t,e,n){t.exports=n(1);},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o;});var o=/*#__PURE__*/function(){function o(){var _this=this;_classCallCheck(this,o);this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.handleWindowScroll=function(){_this.showed&&_this.hide(!0);},this.loadStyles(),this.prepare(),window.addEventListener("scroll",this.handleWindowScroll,{passive:!0});}_createClass(o,[{key:"CSS",get:function get(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}};}},{key:"show",value:function show(t,e,n){var _this$nodes$wrapper$c,_this2=this;this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);var _o55=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(_o55.hidingDelay&&(this.hidingDelay=_o55.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+_typeof(e)+" given.");this.nodes.content.appendChild(e);}switch((_this$nodes$wrapper$c=this.nodes.wrapper.classList).remove.apply(_this$nodes$wrapper$c,_toConsumableArray(Object.values(this.CSS.placement))),_o55.placement){case"top":this.placeTop(t,_o55);break;case"left":this.placeLeft(t,_o55);break;case"right":this.placeRight(t,_o55);break;case"bottom":default:this.placeBottom(t,_o55);}_o55&&_o55.delay?this.showingTimeout=setTimeout(function(){_this2.nodes.wrapper.classList.add(_this2.CSS.tooltipShown),_this2.showed=!0;},_o55.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0);}},{key:"hide",value:function hide(){var _this3=this;var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(function(){_this3.hide(!0);},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout);}},{key:"onHover",value:function onHover(t,e,n){var _this4=this;t.addEventListener("mouseenter",function(){_this4.show(t,e,n);}),t.addEventListener("mouseleave",function(){_this4.hide();});}},{key:"destroy",value:function destroy(){this.nodes.wrapper.remove(),window.removeEventListener("scroll",this.handleWindowScroll);}},{key:"prepare",value:function prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper);}},{key:"loadStyles",value:function loadStyles(){var t="codex-tooltips-style";if(document.getElementById(t))return;var e=n(2),_o56=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,_o56);}},{key:"placeBottom",value:function placeBottom(t,e){var n=t.getBoundingClientRect(),_o57=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",_o57,r);}},{key:"placeTop",value:function placeTop(t,e){var n=t.getBoundingClientRect(),_o58=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",_o58,r);}},{key:"placeLeft",value:function placeLeft(t,e){var n=t.getBoundingClientRect(),_o59=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",_o59,r);}},{key:"placeRight",value:function placeRight(t,e){var n=t.getBoundingClientRect(),_o60=n.right+this.offsetRight+e.marginRight,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",_o60,r);}},{key:"applyPlacement",value:function applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=e+"px",this.nodes.wrapper.style.top=n+"px";}},{key:"make",value:function make(t){var _o61$classList;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _o61=document.createElement(t);Array.isArray(e)?(_o61$classList=_o61.classList).add.apply(_o61$classList,_toConsumableArray(e)):e&&_o61.classList.add(e);for(var _t4 in n){n.hasOwnProperty(_t4)&&(_o61[_t4]=n[_t4]);}return _o61;}},{key:"append",value:function append(t,e){Array.isArray(e)?e.forEach(function(e){return t.appendChild(e);}):t.appendChild(e);}},{key:"prepend",value:function prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(function(e){return t.prepend(e);}):t.prepend(e);}}]);return o;}();},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';}])["default"];},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15),n(7),n(25)],void 0===(i="function"==typeof(o=function o(_o62,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(_o62,"__esModule",{value:!0}),_o62["default"]=void 0,r=u(r),i=u(i),a=u(a),s=c(s),l=u(l);var f=function(){function t(e,n){(0,r["default"])(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n;}return(0,i["default"])(t,[{key:"setItems",value:function value(t){this.items=t;}},{key:"next",value:function value(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT);}},{key:"previous",value:function value(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT);}},{key:"dropCursor",value:function value(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1);}},{key:"leafNodesAndReturnIndex",value:function value(e){var n=this;if(0===this.items.length)return this.cursor;var o=this.cursor;return-1===o?o=e===t.directions.RIGHT?-1:0:this.items[o].classList.remove(this.focusedCssClass),o=e===t.directions.RIGHT?(o+1)%this.items.length:(this.items.length+o-1)%this.items.length,a["default"].canSetCaret(this.items[o])&&s.delay(function(){return l["default"].setCursor(n.items[o]);},50)(),this.items[o].classList.add(this.focusedCssClass),o;}},{key:"currentItem",get:function get(){return-1===this.cursor?null:this.items[this.cursor];}}]),t;}();_o62["default"]=f,f.displayName="DomIterator",f.directions={RIGHT:"right",LEFT:"left"},t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o=n(4);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t));){;}return t;};},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7),n(15),n(66)],void 0===(i="function"==typeof(o=function o(_o63,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(_o63,"__esModule",{value:!0}),_o63["default"]=void 0,r=u(r),i=u(i),a=c(a),s=u(s);var f=function(){function t(e){(0,r["default"])(this,t),this.blocks=[],this.workingArea=e;}return(0,i["default"])(t,[{key:"push",value:function value(t){this.blocks.push(t),this.insertToDOM(t);}},{key:"swap",value:function value(t,e){var n=this.blocks[e];s["default"].swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n;}},{key:"move",value:function value(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,r=Math.max(0,o),i=this.blocks[r];t>0?this.insertToDOM(n,"afterend",i):this.insertToDOM(n,"beforebegin",i),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(l.BlockToolAPI.MOVED,a);}},{key:"insert",value:function value(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var r=this.blocks[t-1];this.insertToDOM(e,"afterend",r);}else{var i=this.blocks[t+1];i?this.insertToDOM(e,"beforebegin",i):this.insertToDOM(e);}}else this.push(e);}},{key:"remove",value:function value(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED),this.blocks.splice(t,1);}},{key:"removeAll",value:function value(){this.workingArea.innerHTML="",this.blocks.forEach(function(t){return t.call(l.BlockToolAPI.REMOVED);}),this.blocks.length=0;}},{key:"insertAfter",value:function value(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e);}},{key:"get",value:function value(t){return this.blocks[t];}},{key:"indexOf",value:function value(t){return this.blocks.indexOf(t);}},{key:"insertToDOM",value:function value(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(l.BlockToolAPI.RENDERED);}},{key:"composeBlockEvent",value:function value(t,e){return new CustomEvent(t,{detail:e});}},{key:"length",get:function get(){return this.blocks.length;}},{key:"array",get:function get(){return this.blocks;}},{key:"nodes",get:function get(){return a.array(this.workingArea.children);}}],[{key:"set",value:function value(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0);}},{key:"get",value:function value(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e);}}]),t;}();_o63["default"]=f,f.displayName="Blocks",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function o(t){"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.BlockMutationType=void 0,t.BlockMutationType=e,function(t){t.Added="block-added",t.Removed="block-removed",t.Moved="block-moved",t.Changed="block-changed";}(e||(t.BlockMutationType=e={}));})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t){n.d(o,r,function(e){return t[e];}.bind(null,r));}return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=0);}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o);}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t;}n.r(e);var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t);},this.element.addEventListener("keydown",this.executeShortcut,!1);}return r(t,null,[{key:"supportedCommands",get:function get(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]};}},{key:"keyCodes",get:function get(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46};}}]),r(t,[{key:"parseShortcutName",value:function value(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var r in t.supportedCommands){if(t.supportedCommands[r].includes(e[n])){o=this.commands[r]=!0;break;}}o||(this.keys[e[n]]=!0);}for(var i in t.supportedCommands){this.commands[i]||(this.commands[i]=!1);}}},{key:"execute",value:function value(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},r=!0;for(n in this.commands){this.commands[n]!==o[n]&&(r=!1);}var i,a=!0;for(i in this.keys){a=a&&e.keyCode===t.keyCodes[i];}r&&a&&this.callback(e);}},{key:"remove",value:function value(){this.element.removeEventListener("keydown",this.executeShortcut);}}]),t;}();e["default"]=i;}])["default"];},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(113),n(5),n(6),n(4),n(15),n(7),n(60),n(66),n(59),n(84),n(114),n(82),n(111)],void 0===(i="function"==typeof(o=function o(t,e,_o64,r,i,a,s,l,c,u,f,d,p,h,v,g){"use strict";var y,b=n(8),k=n(1);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.ToolboxEvent=void 0,e=k(e),_o64=k(_o64),r=k(r),i=k(i),a=k(a),s=k(s),l=k(l),c=b(c),u=k(u),d=k(d),h=k(h),v=k(v),g=k(g),t.ToolboxEvent=y,function(t){t.Opened="toolbox-opened",t.Closed="toolbox-closed",t.BlockAdded="toolbox-block-added";}(y||(t.ToolboxEvent=y={}));var x=function(t){(0,i["default"])(b,t);var n,g=(n=b,function(){var t,e=(0,s["default"])(n);if(m()){var o=(0,s["default"])(this).constructor;t=Reflect.construct(e,arguments,o);}else t=e.apply(this,arguments);return(0,a["default"])(this,t);});function b(t){var n,o=t.api,r=t.tools;return(0,e["default"])(this,b),(n=g.call(this)).opened=!1,n.nodes={toolbox:null,buttons:[]},n.displayedToolsCount=0,n.flipper=null,n.clickListenerId=null,n.api=o,n.tools=r,n.tooltip=new v["default"](),n;}return(0,_o64["default"])(b,[{key:"make",value:function value(){return this.nodes.toolbox=l["default"].make("div",b.CSS.toolbox),this.addTools(),this.enableFlipper(),this.nodes.toolbox;}},{key:"destroy",value:function value(){(0,r["default"])((0,s["default"])(b.prototype),"destroy",this).call(this),this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.nodes&&this.nodes.toolbox&&(this.nodes.toolbox.remove(),this.nodes.toolbox=null,this.nodes.buttons=[]),this.api.listeners.offById(this.clickListenerId),this.removeAllShortcuts(),this.tooltip.destroy();}},{key:"toolButtonActivate",value:function value(t,e){this.insertNewBlock(e);}},{key:"open",value:function value(){this.isEmpty||(this.emit(y.Opened),this.nodes.toolbox.classList.add(b.CSS.toolboxOpened),this.opened=!0,this.flipper.activate());}},{key:"close",value:function value(){this.emit(y.Closed),this.nodes.toolbox.classList.remove(b.CSS.toolboxOpened),this.opened=!1,this.flipper.deactivate();}},{key:"toggle",value:function value(){this.opened?this.close():this.open();}},{key:"addTools",value:function value(){var t=this;Array.from(this.tools.values()).forEach(function(e){return t.addTool(e);});}},{key:"addTool",value:function value(t){var e=this,n=t.toolbox;if(n)if(!n||n.icon){var o=l["default"].make("li",[b.CSS.toolboxButton]);o.dataset.tool=t.name,o.innerHTML=n.icon,l["default"].append(this.nodes.toolbox,o),this.nodes.toolbox.appendChild(o),this.nodes.buttons.push(o),this.clickListenerId=this.api.listeners.on(o,"click",function(n){e.toolButtonActivate(n,t.name);});var r=this.drawTooltip(t);this.tooltip.onHover(o,r,{placement:"bottom",hidingDelay:200});var i=t.shortcut;i&&this.enableShortcut(t.name,i),this.displayedToolsCount++;}else c.log("Toolbar icon is missed. Tool %o skipped","warn",t.name);}},{key:"drawTooltip",value:function value(t){var e=t.toolbox||{},n=d["default"].t(p.I18nInternalNS.toolNames,e.title||t.name),o=t.shortcut,r=l["default"].make("div",b.CSS.buttonTooltip),i=document.createTextNode(c.capitalize(n));return r.appendChild(i),o&&(o=c.beautifyShortcut(o),r.appendChild(l["default"].make("div",b.CSS.buttonShortcut,{textContent:o}))),r;}},{key:"enableShortcut",value:function value(t,e){var n=this;h["default"].add({name:e,on:this.api.ui.nodes.redactor,handler:function handler(e){e.preventDefault(),n.insertNewBlock(t);}});}},{key:"removeAllShortcuts",value:function value(){var t=this;Array.from(this.tools.values()).forEach(function(e){var n=e.shortcut;n&&h["default"].remove(t.api.ui.nodes.redactor,n);});}},{key:"enableFlipper",value:function value(){var t=Array.from(this.nodes.toolbox.childNodes);this.flipper=new u["default"]({items:t,focusedItemClass:b.CSS.toolboxButtonActive});}},{key:"insertNewBlock",value:function value(t){var e=this.api.blocks.getCurrentBlockIndex(),n=this.api.blocks.getBlockByIndex(e);if(n){var o=n.isEmpty?e:e+1,r=this.api.blocks.insert(t,void 0,void 0,o,void 0,n.isEmpty);r.call(f.BlockToolAPI.APPEND_CALLBACK),this.api.caret.setToBlock(o),this.emit(y.BlockAdded,{block:r}),this.api.toolbar.close();}}},{key:"isEmpty",get:function get(){return 0===this.displayedToolsCount;}},{key:"flipperHasFocus",get:function get(){return this.flipper&&null!==this.flipper.currentItem;}}],[{key:"CSS",get:function get(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened",buttonTooltip:"ce-toolbox-button-tooltip",buttonShortcut:"ce-toolbox-button-tooltip__shortcut"};}}]),b;}(g["default"]);t["default"]=x,x.displayName="Toolbox";})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t){n.d(o,r,function(e){return t[e];}.bind(null,r));}return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="/",n(n.s=0);}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o);}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t;}n(1).toString();var i=function(){function t(e){var n=e.data,o=e.config,r=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),this.api=r,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==o.preserveBlank&&o.preserveBlank,this.data=n;}return r(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function get(){return"";}}]),r(t,[{key:"onKeyUp",value:function value(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="");}},{key:"drawView",value:function value(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t;}},{key:"render",value:function value(){return this._element;}},{key:"merge",value:function value(t){var e={text:this.data.text+t.text};this.data=e;}},{key:"validate",value:function value(t){return!(""===t.text.trim()&&!this._preserveBlank);}},{key:"save",value:function value(t){return{text:t.innerHTML};}},{key:"onPaste",value:function value(t){var e={text:t.detail.data.innerHTML};this.data=e;}},{key:"data",get:function get(){var t=this._element.innerHTML;return this._data.text=t,this._data;},set:function set(t){this._data=t||{},this._element.innerHTML=this._data.text||"";}}],[{key:"conversionConfig",get:function get(){return{"export":"text","import":"text"};}},{key:"sanitize",get:function get(){return{text:{br:!0}};}},{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"pasteConfig",get:function get(){return{tags:["P"]};}},{key:"toolbox",get:function get(){return{icon:n(5)["default"],title:"Text"};}}]),t;}();t.exports=i;},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r["default"]:r)&&(r=[[t.i,r,""]]),o(r,{insert:"head",singleton:!1}),t.exports=r.locals||{};},function(t,e,n){"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(t){n=null;}t[e]=n;}return t[e];};}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++){if(i[n].identifier===t){e=n;break;}}return e;}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],l=e.base?s[0]+e.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,e),references:1}),o.push(u);}return o;}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i);}if(Object.keys(o).forEach(function(t){e.setAttribute(t,o[t]);}),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e);}return e;}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n");});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i);}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;){t.removeChild(t.firstChild);}t.appendChild(document.createTextNode(o));}}var p=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=p||(p=l(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0);}else n=l(e),o=d.bind(null,n,e),r=function r(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);}(n);};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e);}else r();};}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--;}for(var l=s(t,e),c=0;c<n.length;c++){var u=a(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1));}n=l;}};};},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),t.exports=e;},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n,o,r,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var s=(n=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),l=a.sources.map(function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */");});return[i].concat(l).concat([s]).join("\n");}return[i].join("\n");}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n;}).join("");},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0);}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l));}},e;};},function(t,e,n){"use strict";n.r(e),e["default"]='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';}]);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o65,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o65,"__esModule",{value:!0}),_o65["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r["default"])(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0};}return(0,i["default"])(t,[{key:"render",value:function value(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a["default"].svg("bold",12,14)),this.nodes.button;}},{key:"surround",value:function value(t){document.execCommand(this.commandName);}},{key:"checkState",value:function value(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e;}},{key:"shortcut",get:function get(){return"CMD+B";}}],[{key:"sanitize",get:function get(){return{b:{}};}}]),t;}();_o65["default"]=l,l.displayName="BoldInlineTool",l.isInline=!0,l.title="Bold",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o66,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o66,"__esModule",{value:!0}),_o66["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r["default"])(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null};}return(0,i["default"])(t,[{key:"render",value:function value(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a["default"].svg("italic",4,11)),this.nodes.button;}},{key:"surround",value:function value(t){document.execCommand(this.commandName);}},{key:"checkState",value:function value(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e;}},{key:"shortcut",get:function get(){return"CMD+I";}}],[{key:"sanitize",get:function get(){return{i:{}};}}]),t;}();_o66["default"]=l,l.displayName="ItalicInlineTool",l.isInline=!0,l.title="Italic",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(25),n(15),n(7)],void 0===(i="function"==typeof(o=function o(_o67,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(_o67,"__esModule",{value:!0}),_o67["default"]=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=c(l);var f=function(){function t(e){var n=e.api;(0,r["default"])(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new a["default"]();}return(0,i["default"])(t,[{key:"render",value:function value(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s["default"].svg("link",14,10)),this.nodes.button.appendChild(s["default"].svg("unlink",15,11)),this.nodes.button;}},{key:"renderActions",value:function value(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e);}),this.nodes.input;}},{key:"surround",value:function value(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close();}this.toggleActions();}},{key:"checkState",value:function value(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save();}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e;}},{key:"clear",value:function value(){this.closeActions();}},{key:"toggleActions",value:function value(){this.inputOpened?this.closeActions(!1):this.openActions(!0);}},{key:"openActions",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0;}},{key:"closeActions",value:function value(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a["default"]();e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore();}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1;}},{key:"enterPressed",value:function value(t){var e=this.nodes.input.value||"";return e.trim()?this.validateURL(e)?(e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),void this.inlineToolbar.close()):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void l.log("Incorrect Link pasted","warn",e)):(this.selection.restore(),this.unlink(),t.preventDefault(),void this.closeActions());}},{key:"validateURL",value:function value(t){return!/\s/.test(t);}},{key:"prepareLink",value:function value(t){return t=t.trim(),t=this.addProtocol(t);}},{key:"addProtocol",value:function value(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^/\s]/.test(t);return e||n||o||(t="http://"+t),t;}},{key:"insertLink",value:function value(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t);}},{key:"unlink",value:function value(){document.execCommand(this.commandUnlink);}},{key:"shortcut",get:function get(){return"CMD+K";}}],[{key:"sanitize",get:function get(){return{a:{href:!0,target:"_blank",rel:"nofollow"}};}}]),t;}();_o67["default"]=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o68,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o68,"__esModule",{value:!0}),_o68["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.data,o=e.api;(0,r["default"])(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=o,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make();}return(0,i["default"])(t,[{key:"render",value:function value(){return this.wrapper;}},{key:"save",value:function value(){return this.savedData;}},{key:"make",value:function value(){var t=a["default"].make("div",this.CSS.wrapper),e=a["default"].svg("sad-face",52,52),n=a["default"].make("div",this.CSS.info),o=a["default"].make("div",this.CSS.title,{textContent:this.title}),r=a["default"].make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(r),t.appendChild(n),t;}}]),t;}();_o68["default"]=l,l.displayName="Stub",l.isReadOnlySupported=!0,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(67),n(392),n(393),n(394)],void 0===(i="function"==typeof(o=function o(_o69,r,i,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(_o69,"__esModule",{value:!0}),_o69["default"]=void 0,r=u(r),i=u(i),s=u(s),l=u(l),c=u(c);var f=function f(t,e){var n={};for(var o in t){Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);}if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++){e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);}}return n;},d=function(){function t(e,n,o){(0,r["default"])(this,t),this.api=o,this.config=e,this.editorConfig=n;}return(0,i["default"])(t,[{key:"get",value:function value(t){var e=this.config[t],n=e["class"],o=e.isInternal,r=void 0!==o&&o,i=f(e,["class","isInternal"]);return new(this.getConstructor(n))({name:t,constructable:n,config:i,api:this.api,isDefault:t===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:r});}},{key:"getConstructor",value:function value(t){switch(!0){case t[a.InternalInlineToolSettings.IsInline]:return s["default"];case t[a.InternalTuneSettings.IsTune]:return l["default"];default:return c["default"];}}}]),t;}();_o69["default"]=d,d.displayName="ToolsFactory",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(67)],void 0===(i="function"==typeof(o=function o(_o70,r,i,a,s,l,c){"use strict";var u=n(8),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o70,"__esModule",{value:!0}),_o70["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).type=c.ToolType.Inline,t;}return(0,i["default"])(o,[{key:"create",value:function value(){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings});}},{key:"title",get:function get(){return this.constructable[c.InternalInlineToolSettings.Title];}}]),o;}((c=u(c))["default"]);_o70["default"]=p,p.displayName="InlineTool",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(67)],void 0===(i="function"==typeof(o=function o(_o71,r,i,a,s,l,c){"use strict";var u=n(8),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o71,"__esModule",{value:!0}),_o71["default"]=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,l["default"])(e);if(d()){var o=(0,l["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,s["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).type=c.ToolType.Tune,t;}return(0,i["default"])(o,[{key:"create",value:function value(t,e){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings,block:e,data:t});}}]),o;}((c=u(c))["default"]);_o71["default"]=p,p.displayName="BlockTune",t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(113),n(5),n(6),n(4),n(80),n(67),n(7),n(184)],void 0===(i="function"==typeof(o=function o(_o72,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0;}catch(t){return!1;}}Object.defineProperty(_o72,"__esModule",{value:!0}),_o72["default"]=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=h(f),d=h(d),p=v(p);var y=function y(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,u["default"])(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--){(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);}return i>3&&a&&Object.defineProperty(e,n,a),a;},b=function(t){(0,s["default"])(o,t);var e,n=(e=o,function(){var t,n=(0,c["default"])(e);if(g()){var o=(0,c["default"])(this).constructor;t=Reflect.construct(n,arguments,o);}else t=n.apply(this,arguments);return(0,l["default"])(this,t);});function o(){var t;return(0,r["default"])(this,o),(t=n.apply(this,arguments)).type=f.ToolType.Block,t.inlineTools=new p["default"](),t.tunes=new p["default"](),t;}return(0,i["default"])(o,[{key:"create",value:function value(t,e,n){return new this.constructable({data:t,block:e,readOnly:n,api:this.api.getMethodsForTool(this),config:this.settings});}},{key:"isReadOnlySupported",get:function get(){return!0===this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported];}},{key:"isLineBreaksEnabled",get:function get(){return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks];}},{key:"toolbox",get:function get(){var t=this.constructable[f.InternalBlockToolSettings.Toolbox],e=this.config[f.UserSettings.Toolbox];if(!d.isEmpty(t)&&!1!==(null!=e?e:t))return Object.assign({},t,e);}},{key:"conversionConfig",get:function get(){return this.constructable[f.InternalBlockToolSettings.ConversionConfig];}},{key:"enabledInlineTools",get:function get(){return this.config[f.UserSettings.EnabledInlineTools]||!1;}},{key:"enabledBlockTunes",get:function get(){return this.config[f.UserSettings.EnabledBlockTunes];}},{key:"pasteConfig",get:function get(){return this.constructable[f.InternalBlockToolSettings.PasteConfig]||{};}},{key:"sanitizeConfig",get:function get(){var t=(0,a["default"])((0,c["default"])(o.prototype),"sanitizeConfig",this),e=this.baseSanitizeConfig;if(d.isEmpty(t))return e;var n={};for(var r in t){if(Object.prototype.hasOwnProperty.call(t,r)){var i=t[r];d.isObject(i)?n[r]=Object.assign({},e,i):n[r]=i;}}return n;}},{key:"baseSanitizeConfig",get:function get(){var t={};return Array.from(this.inlineTools.values()).forEach(function(e){return Object.assign(t,e.sanitizeConfig);}),Array.from(this.tunes.values()).forEach(function(e){return Object.assign(t,e.sanitizeConfig);}),t;}}]),o;}(f["default"]);_o72["default"]=b,b.displayName="BlockTool",y([d.cacheable],b.prototype,"sanitizeConfig",null),y([d.cacheable],b.prototype,"baseSanitizeConfig",null),t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o73,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o73,"__esModule",{value:!0}),_o73["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.api;(0,r["default"])(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n;}return(0,i["default"])(t,[{key:"render",value:function value(){var t=this,e=a["default"].make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a["default"].svg("arrow-down",14,14)),this.api.listeners.on(e,"click",function(n){return t.handleClick(n,e);},!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move down"),{hidingDelay:300}),e;}},{key:"handleClick",value:function value(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o+1);if(!r)return e.classList.add(this.CSS.animation),void window.setTimeout(function(){e.classList.remove(n.CSS.animation);},500);var i=r.holder,a=i.getBoundingClientRect(),s=Math.abs(window.innerHeight-i.offsetHeight);a.top<window.innerHeight&&(s=window.scrollY+i.offsetHeight),window.scrollTo(0,s),this.api.blocks.move(o+1),this.api.toolbar.toggleBlockSettings(!0),this.api.tooltip.hide();}}]),t;}();_o73["default"]=l,l.displayName="MoveDownTune",l.isTune=!0,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o74,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o74,"__esModule",{value:!0}),_o74["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=this,o=e.api;(0,r["default"])(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1);};}return(0,i["default"])(t,[{key:"render",value:function value(){var t=this;return this.nodes.button=a["default"].make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a["default"].svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",function(e){return t.handleClick(e);},!1),this.api.tooltip.onHover(this.nodes.button,this.api.i18n.t("Delete"),{hidingDelay:300}),this.nodes.button;}},{key:"handleClick",value:function value(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks["delete"](),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation));}},{key:"setConfirmation",value:function value(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm);}}]),t;}();_o74["default"]=l,l.displayName="DeleteTune",l.isTune=!0,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function o(_o75,r,i,a){"use strict";var s=n(1);Object.defineProperty(_o75,"__esModule",{value:!0}),_o75["default"]=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.api;(0,r["default"])(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n;}return(0,i["default"])(t,[{key:"render",value:function value(){var t=this,e=a["default"].make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a["default"].svg("arrow-up",14,14)),this.api.listeners.on(e,"click",function(n){return t.handleClick(n,e);},!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move up"),{hidingDelay:300}),e;}},{key:"handleClick",value:function value(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o),i=this.api.blocks.getBlockByIndex(o-1);if(0===o||!r||!i)return e.classList.add(this.CSS.animation),void window.setTimeout(function(){e.classList.remove(n.CSS.animation);},500);var a,s=r.holder,l=i.holder,c=s.getBoundingClientRect(),u=l.getBoundingClientRect();a=u.top>0?Math.abs(c.top)-Math.abs(u.top):window.innerHeight-Math.abs(c.top)+Math.abs(u.top),window.scrollBy(0,-1*a),this.api.blocks.move(o-1),this.api.toolbar.toggleBlockSettings(!0),this.api.tooltip.hide();}}]),t;}();_o75["default"]=l,l.displayName="MoveUpTune",l.isTune=!0,t.exports=e["default"];})?o.apply(e,r):o)||(t.exports=i);},function(t,e,n){"use strict";n.r(e),e["default"]='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 16 16">\n  <g transform="translate(4 1.5)" fill-rule="evenodd">\n    <circle cx="1.3" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="6.5" r="1.3"/>\n    <circle cx="1.3" cy="6.5" r="1.3"/>\n    <circle cx="6.5" cy="11.7" r="1.3"/>\n    <circle cx="1.3" cy="11.7" r="1.3"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 16 16">\n  <g transform="translate(1 1.5)" fill-rule="evenodd">\n    <rect x="6" width="2" height="13" rx="1"/>\n    <rect x=".5" y="5.5" width="13" height="2" rx="1"/>\n  </g>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:100%}}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:3px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{background-color:#eff2f5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:3px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}.ce-toolbar__settings-btn{width:18px;margin:0 5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn--active,.ce-toolbar__settings-btn:hover{background-color:#eff2f5}.ce-toolbar__settings-btn--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.codex-editor--toolbox-opened .ce-toolbar__actions{display:none}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:3px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbox__button{width:36px;height:36px}}.ce-toolbox__button{-ms-flex-negative:0;flex-shrink:0;margin-left:5px}.ce-toolbox__button--active,.ce-toolbox__button:hover{background-color:#eff2f5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:auto;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}';},function(t,e,n){"use strict";n.r(e),n.d(e,"nanoid",function(){return s;}),n.d(e,"customAlphabet",function(){return a;}),n.d(e,"customRandom",function(){return i;}),n.d(e,"urlAlphabet",function(){return o;}),n.d(e,"random",function(){return r;});var o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var r=function r(t){return crypto.getRandomValues(new Uint8Array(t));},i=function i(t,e,n){var o=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*o*e/t.length);return function(){var i="";for(;;){var _a=n(r),_s2=r;for(;_s2--;){if(i+=t[_a[_s2]&o]||"",i.length===e)return i;}}};},a=function a(t,e){return i(t,e,r);},s=function s(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:21;var e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){var _o76=63&n[t];e+=_o76<36?_o76.toString(36):_o76<62?(_o76-26).toString(36).toUpperCase():_o76<63?"_":"-";}return e;};}]);});/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/header@2.6.2/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */!function(e,t){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.Header=t():e.Header=t();}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e){n.d(r,i,function(t){return e[t];}.bind(null,i));}return r;},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="/",n(n.s=0);}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}n(1).toString();/**
  * Header block for the Editor.js.
  *
  * @author CodeX (team@ifmo.su)
  * @copyright CodeX 2018
  * @license MIT
  * @version 2.0.0
  */var a=function(){function e(t){var n=t.data,r=t.config,i=t.api,a=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,e),this.api=i,this.readOnly=a,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=r,this._data=this.normalizeData(n),this.settingsButtons=[],this._element=this.getTag();}var t,a,o;return t=e,o=[{key:"conversionConfig",get:function get(){return{"export":"text","import":"text"};}},{key:"sanitize",get:function get(){return{level:!1,text:{}};}},{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"pasteConfig",get:function get(){return{tags:["H1","H2","H3","H4","H5","H6"]};}},{key:"toolbox",get:function get(){return{icon:n(6)["default"],title:"Heading"};}}],(a=[{key:"normalizeData",value:function value(e){var t={};return"object"!==r(e)&&(e={}),t.text=e.text||"",t.level=parseInt(e.level)||this.defaultLevel.number,t;}},{key:"render",value:function value(){return this._element;}},{key:"renderSettings",value:function value(){var e=this,t=document.createElement("DIV");return this.levels.length<=1||this.levels.forEach(function(n){var r=document.createElement("SPAN");r.classList.add(e._CSS.settingsButton),e.currentLevel.number===n.number&&r.classList.add(e._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",function(){e.setLevel(n.number);}),t.appendChild(r),e.settingsButtons.push(r);}),t;}},{key:"setLevel",value:function value(e){var t=this;this.data={level:e,text:this.data.text},this.settingsButtons.forEach(function(n){n.classList.toggle(t._CSS.settingsButtonActive,parseInt(n.dataset.level)===e);});}},{key:"merge",value:function value(e){var t={text:this.data.text+e.text,level:this.data.level};this.data=t;}},{key:"validate",value:function value(e){return""!==e.text.trim();}},{key:"save",value:function value(e){return{text:e.innerHTML,level:this.currentLevel.number};}},{key:"getTag",value:function value(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e;}},{key:"onPaste",value:function value(e){var t=e.detail.data,n=this.defaultLevel.number;switch(t.tagName){case"H1":n=1;break;case"H2":n=2;break;case"H3":n=3;break;case"H4":n=4;break;case"H5":n=5;break;case"H6":n=6;}this._settings.levels&&(n=this._settings.levels.reduce(function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e;})),this.data={level:n,text:t.innerHTML};}},{key:"data",get:function get(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data;},set:function set(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){var t=this.getTag();t.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(t,this._element),this._element=t;}void 0!==e.text&&(this._element.innerHTML=this._data.text||"");}},{key:"currentLevel",get:function get(){var e=this,t=this.levels.find(function(t){return t.number===e._data.level;});return t||(t=this.defaultLevel),t;}},{key:"defaultLevel",get:function get(){var e=this;if(this._settings.defaultLevel){var t=this.levels.find(function(t){return t.number===e._settings.defaultLevel;});if(t)return t;console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");}return this.levels[1];}},{key:"levels",get:function get(){var e=this,t=[{number:1,tag:"H1",svg:'<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'},{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'},{number:5,tag:"H5",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'},{number:6,tag:"H6",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'}];return this._settings.levels?t.filter(function(t){return e._settings.levels.includes(t.number);}):t;}}])&&i(t.prototype,a),o&&i(t,o),e;}();e.exports=a;},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals);},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/**\n * Plugin styles\n */\n.ce-header {\n  padding: 0.6em 0 3px;\n  margin: 0;\n  line-height: 1.25em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",""]);},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */";});return[n].concat(a).concat([i]).join("\n");}var o;return[n].join("\n");}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n;}).join("");},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0);}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o));}},t;};},function(e,t,n){var r,i,a={},o=(r=function r(){return window&&document&&document.all&&!window.atob;},function(){return void 0===i&&(i=r.apply(this,arguments)),i;}),s=function s(e){return document.querySelector(e);},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(e){n=null;}t[e]=n;}return t[e];};}(),l=null,u=0,f=[],d=n(5);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++){i.parts[o](r.parts[o]);}for(;o<r.parts.length;o++){i.parts.push(y(r.parts[o],t));}}else{var s=[];for(o=0;o<r.parts.length;o++){s.push(y(r.parts[o],t));}a[r.id]={id:r.id,refs:1,parts:s};}}}function v(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]});}return n;}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=_typeof(e.insertAt)||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i);}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1);}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),p(e,t),t;}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n]);});}function y(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a;}if(t.singleton){var o=u++;n=l||(l=m(t)),r=L.bind(null,n,o,!1),i=L.bind(null,n,o,!0);}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t;}(t),r=_.bind(null,n,t),i=function i(){g(n),n.href&&URL.revokeObjectURL(n.href);}):(n=m(t),r=H.bind(null,n),i=function i(){g(n);});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t);}else i();};}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=(typeof document==="undefined"?"undefined":_typeof(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==_typeof(t.attrs)?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s);}e&&h(v(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++){s.parts[c]();}delete a[s.id];}}};};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n");});function L(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a);}}function H(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;){e.removeChild(e.firstChild);}e.appendChild(document.createTextNode(n));}}function _(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s);}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t;}).replace(/^'(.*)'$/,function(e,t){return t;});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")");});};},function(e,t,n){"use strict";n.r(t),t["default"]='<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n';}]);});/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */!function(t,e){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.SimpleImage=e():t.SimpleImage=e();}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t){n.d(r,i,function(e){return t[e];}.bind(null,i));}return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="/",n(n.s=0);}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++){n[e]=t[e];}return n;}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t);}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance");}();}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}n(1).toString();var o=function(){function t(e){var n=e.data,r=(e.config,e.api),i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),this.api=r,this.readOnly=i,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null},this.data={url:n.url||"",caption:n.caption||"",withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}];}var e,n,o;return e=t,o=[{key:"sanitize",get:function get(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0}};}},{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"pasteConfig",get:function get(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i},tags:["img"],files:{mimeTypes:["image/*"]}};}}],(n=[{key:"render",value:function value(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),r=this._make("div",this.CSS.imageHolder),i=this._make("img"),o=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""});return o.dataset.placeholder="Enter a caption",e.appendChild(n),this.data.url&&(i.src=this.data.url),i.onload=function(){e.classList.remove(t.CSS.loading),r.appendChild(i),e.appendChild(r),e.appendChild(o),n.remove(),t._acceptTuneView();},i.onerror=function(t){console.log("Failed to load an image",t);},this.nodes.imageHolder=r,this.nodes.wrapper=e,this.nodes.image=i,this.nodes.caption=o,e;}},{key:"save",value:function value(t){var e=t.querySelector("img"),n=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML}):this.data;}},{key:"onDropHandler",value:function value(t){var e=new FileReader();return e.readAsDataURL(t),new Promise(function(n){e.onload=function(e){n({url:e.target.result,caption:t.name});};});}},{key:"onPaste",value:function value(t){var e=this;switch(t.type){case"tag":var n=t.detail.data;this.data={url:n.src};break;case"pattern":var r=t.detail.data;this.data={url:r};break;case"file":var i=t.detail.file;this.onDropHandler(i).then(function(t){e.data=t;});}}},{key:"renderSettings",value:function value(){var t=this,e=document.createElement("div");return this.settings.forEach(function(n){var r=document.createElement("div");r.classList.add(t.CSS.settingsButton),r.innerHTML=n.icon,r.addEventListener("click",function(){t._toggleTune(n.name),r.classList.toggle(t.CSS.settingsButtonActive);}),r.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(r);}),e;}},{key:"_make",value:function value(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);Array.isArray(n)?(e=o.classList).add.apply(e,r(n)):n&&o.classList.add(n);for(var a in i){o[a]=i[a];}return o;}},{key:"_toggleTune",value:function value(t){this.data[t]=!this.data[t],this._acceptTuneView();}},{key:"_acceptTuneView",value:function value(){var t=this;this.settings.forEach(function(e){t.nodes.imageHolder.classList.toggle(t.CSS.imageHolder+"--"+e.name.replace(/([A-Z])/g,function(t){return"-".concat(t[0].toLowerCase());}),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.blockIndex,!!t.data.stretched);});}},{key:"data",get:function get(){return this._data;},set:function set(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption);}}])&&i(e.prototype,n),o&&i(e,o),t;}();t.exports=o;},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals);},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-image {}\n\n.cdx-simple-image .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-simple-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}\n",""]);},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */";});return[n].concat(o).concat([i]).join("\n");}var a;return[n].join("\n");}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n;}).join("");},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0);}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a));}},e;};},function(t,e,n){var r,i,o={},a=(r=function r(){return window&&document&&document.all&&!window.atob;},function(){return void 0===i&&(i=r.apply(this,arguments)),i;}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t);}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(t){n=null;}e[t]=n;}return e[t];};}(),c=null,l=0,u=[],d=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++){i.parts[a](r.parts[a]);}for(;a<r.parts.length;a++){i.parts.push(y(r.parts[a],e));}}else{var s=[];for(a=0;a<r.parts.length;a++){s.push(y(r.parts[a],e));}o[r.id]={id:r.id,refs:1,parts:s};}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]});}return n;}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=_typeof(t.insertAt)||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i);}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1);}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),h(t,e),e;}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n]);});}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o;}if(e.singleton){var a=l++;n=c||(c=v(e)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0);}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e;}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s);}.bind(null,n,e),i=function i(){m(n),n.href&&URL.revokeObjectURL(n.href);}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;){t.removeChild(t.firstChild);}t.appendChild(document.createTextNode(n));}}.bind(null,n),i=function i(){m(n);});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e);}else i();};}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=(typeof document==="undefined"?"undefined":_typeof(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==_typeof(e.attrs)?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s);}t&&p(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++){s.parts[c]();}delete o[s.id];}}};};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n");});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o);}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e;}).replace(/^'(.*)'$/,function(t,e){return e;});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")");});};}]);});/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */!function(t,e){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.Quote=e():t.Quote=e();}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t){n.d(r,o,function(e){return t[e];}.bind(null,o));}return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"];}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="/",n(n.s=0);}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++){n[e]=t[e];}return n;}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t);}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance");}();}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t;}n(1).toString();var a=function(){function t(e){var n=e.data,r=e.config,o=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t);var a=t.ALIGNMENTS,s=t.DEFAULT_ALIGNMENT;this.api=o,this.readOnly=i,this.quotePlaceholder=r.quotePlaceholder||t.DEFAULT_QUOTE_PLACEHOLDER,this.captionPlaceholder=r.captionPlaceholder||t.DEFAULT_CAPTION_PLACEHOLDER,this.data={text:n.text||"",caption:n.caption||"",alignment:Object.values(a).includes(n.alignment)&&n.alignment||r.defaultAlignment||s};}return i(t,[{key:"CSS",get:function get(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption",settingsWrapper:"cdx-quote-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive};}},{key:"settings",get:function get(){return[{name:"left",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'},{name:"center",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'}];}}],[{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"toolbox",get:function get(){return{icon:'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',title:"Quote"};}},{key:"contentless",get:function get(){return!0;}},{key:"enableLineBreaks",get:function get(){return!0;}},{key:"DEFAULT_QUOTE_PLACEHOLDER",get:function get(){return"Enter a quote";}},{key:"DEFAULT_CAPTION_PLACEHOLDER",get:function get(){return"Enter a caption";}},{key:"ALIGNMENTS",get:function get(){return{left:"left",center:"center"};}},{key:"DEFAULT_ALIGNMENT",get:function get(){return t.ALIGNMENTS.left;}},{key:"conversionConfig",get:function get(){return{"import":"text","export":function _export(t){return t.caption?"".concat(t.text," — ").concat(t.caption):t.text;}};}}]),i(t,[{key:"render",value:function value(){var t=this._make("blockquote",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.text],{contentEditable:!this.readOnly,innerHTML:this.data.text}),n=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption});return e.dataset.placeholder=this.quotePlaceholder,n.dataset.placeholder=this.captionPlaceholder,t.appendChild(e),t.appendChild(n),t;}},{key:"save",value:function value(t){var e=t.querySelector(".".concat(this.CSS.text)),n=t.querySelector(".".concat(this.CSS.caption));return Object.assign(this.data,{text:e.innerHTML,caption:n.innerHTML});}},{key:"renderSettings",value:function value(){var t=this,e=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.map(function(n){var r,o=t._make("div",t.CSS.settingsButton,{innerHTML:n.icon,title:"".concat((r=n.name,r[0].toUpperCase()+r.substr(1))," alignment")});return o.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(o),o;}).forEach(function(e,n,r){e.addEventListener("click",function(){t._toggleTune(t.settings[n].name),r.forEach(function(e,n){var r=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,r===t.data.alignment);});});}),e;}},{key:"_toggleTune",value:function value(t){this.data.alignment=t;}},{key:"_make",value:function value(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,r(n)):n&&i.classList.add(n);for(var a in o){i[a]=o[a];}return i;}}],[{key:"sanitize",get:function get(){return{text:{br:!0},caption:{br:!0},alignment:{}};}}]),t;}();t.exports=a;},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals);},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",""]);},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */";});return[n].concat(i).concat([o]).join("\n");}var a;return[n].join("\n");}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n;}).join("");},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0);}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a));}},e;};},function(t,e,n){var r,o,i={},a=(r=function r(){return window&&document&&document.all&&!window.atob;},function(){return void 0===o&&(o=r.apply(this,arguments)),o;}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t);}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(t){n=null;}e[t]=n;}return e[t];};}(),c=null,u=0,l=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++){o.parts[a](r.parts[a]);}for(;a<r.parts.length;a++){o.parts.push(m(r.parts[a],e));}}else{var s=[];for(a=0;a<r.parts.length;a++){s.push(m(r.parts[a],e));}i[r.id]={id:r.id,refs:1,parts:s};}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]});}return n;}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=_typeof(t.insertAt)||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o);}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1);}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e;}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n]);});}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i;}if(e.singleton){var a=u++;n=c||(c=v(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0);}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e;}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s);}.bind(null,n,e),o=function o(){g(n),n.href&&URL.revokeObjectURL(n.href);}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;){t.removeChild(t.firstChild);}t.appendChild(document.createTextNode(n));}}.bind(null,n),o=function o(){g(n);});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e);}else o();};}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=(typeof document==="undefined"?"undefined":_typeof(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==_typeof(e.attrs)?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s);}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++){s.parts[c]();}delete i[s.id];}}};};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n");});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i);}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e;}).replace(/^'(.*)'$/,function(t,e){return e;});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")");});};}]);});/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */!function(e,t){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.Delimiter=t():e.Delimiter=t();}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e){n.d(r,o,function(t){return e[t];}.bind(null,o));}return r;},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="/",n(n.s=0);}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e;}n(1).toString();/**
  * Delimiter Block for the Editor.js.
  *
  * @author CodeX (team@ifmo.su)
  * @copyright CodeX 2018
  * @license The MIT License (MIT)
  * @version 2.0.0
  */var i=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,e),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=n;}return o(e,null,[{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"contentless",get:function get(){return!0;}}]),o(e,[{key:"drawView",value:function value(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e;}},{key:"render",value:function value(){return this._element;}},{key:"save",value:function value(e){return{};}}],[{key:"toolbox",get:function get(){return{icon:'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',title:"Delimiter"};}}]),e;}();e.exports=i;},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals);},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.ce-delimiter {\n    line-height: 1.6em;\n    width: 100%;\n    text-align: center;\n}\n\n.ce-delimiter:before {\n    display: inline-block;\n    content: "***";\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: 0.2em;\n}',""]);},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */";});return[n].concat(i).concat([o]).join("\n");}var a;return[n].join("\n");}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n;}).join("");},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0);}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a));}},t;};},function(e,t,n){var r,o,i={},a=(r=function r(){return window&&document&&document.all&&!window.atob;},function(){return void 0===o&&(o=r.apply(this,arguments)),o;}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e);}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(e){n=null;}t[e]=n;}return t[e];};}(),u=null,c=0,f=[],l=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++){o.parts[a](r.parts[a]);}for(;a<r.parts.length;a++){o.parts.push(m(r.parts[a],t));}}else{var s=[];for(a=0;a<r.parts.length;a++){s.push(m(r.parts[a],t));}i[r.id]={id:r.id,refs:1,parts:s};}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]});}return n;}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=_typeof(e.insertAt)||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o);}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1);}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t;}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n]);});}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i;}if(t.singleton){var a=c++;n=u||(u=b(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0);}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t;}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s);}.bind(null,n,t),o=function o(){v(n),n.href&&URL.revokeObjectURL(n.href);}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;){e.removeChild(e.firstChild);}e.appendChild(document.createTextNode(n));}}.bind(null,n),o=function o(){v(n);});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t);}else o();};}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=(typeof document==="undefined"?"undefined":_typeof(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==_typeof(t.attrs)?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s);}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++){s.parts[u]();}delete i[s.id];}}};};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n");});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i);}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t;}).replace(/^'(.*)'$/,function(e,t){return t;});return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")");});};}]);});/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */!function(e,t){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.NestedList=t():e.NestedList=t();}(self,function(){return function(){"use strict";var e={384:function _(e,t,n){n.d(t,{Z:function Z(){return s;}});var r=n(645),i=n.n(r)()(function(e){return e[1];});i.push([e.id,'.cdx-nested-list {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  counter-reset: item;\n  list-style: none;\n}\n\n  .cdx-nested-list__item {\n    line-height: 1.6em;\n    display: flex;\n    margin: 2px 0;\n  }\n\n  .cdx-nested-list__item [contenteditable]{\n      outline: none;\n    }\n\n  .cdx-nested-list__item-body {\n      flex-grow: 2;\n    }\n\n  .cdx-nested-list__item-content,\n    .cdx-nested-list__item-children {\n      flex-basis: 100%;\n    }\n\n  .cdx-nested-list__item-content {\n      word-break: break-word;\n      white-space: pre-wrap;\n    }\n\n  .cdx-nested-list__item-children {}\n\n  .cdx-nested-list__item::before {\n      counter-increment: item;\n      margin-right: 5px;\n      white-space: nowrap;\n    }\n\n  .cdx-nested-list--ordered > .cdx-nested-list__item::before {\n    content: counters(item, ".") ". ";\n  }\n\n  .cdx-nested-list--unordered > .cdx-nested-list__item::before {\n    content: "•";\n  }\n\n  .cdx-nested-list__settings {\n    display: flex;\n  }\n\n  .cdx-nested-list__settings .cdx-settings-button {\n      width: 50%;\n    }\n',""]);var s=i;},645:function _(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n;}).join("");},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0);}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d));}},t;};},379:function _(e,t,n){var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head;}catch(e){n=null;}e[t]=n;}return e[t];};}(),s=[];function o(e){for(var t=-1,n=0;n<s.length;n++){if(s[n].identifier===e){t=n;break;}}return t;}function a(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],d=t.base?a[0]+t.base:a[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var h=o(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(s[h].references++,s[h].updater(u)):s.push({identifier:l,updater:f(u,t),references:1}),r.push(l);}return r;}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s);}if(Object.keys(r).forEach(function(e){t.setAttribute(e,r[e]);}),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t);}return t;}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n");});function h(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s);}}function u(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;){e.removeChild(e.firstChild);}e.appendChild(document.createTextNode(r));}}var p=null,m=0;function f(e,t){var n,r,i;if(t.singleton){var s=m++;n=p||(p=d(t)),r=h.bind(null,n,s,!1),i=h.bind(null,n,s,!0);}else n=d(t),r=u.bind(null,n,t),i=function i(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);}(n);};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t);}else i();};}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);s[i].references--;}for(var d=a(e,t),c=0;c<n.length;c++){var l=o(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1));}n=d;}};};}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports;}n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,{a:t}),t;},n.d=function(e,t){for(var r in t){n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);};var r={};return function(){function e(e){var _r$classList;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var r=document.createElement(e);Array.isArray(t)?(_r$classList=r.classList).add.apply(_r$classList,_toConsumableArray(t)):t&&r.classList.add(t);for(var _e3 in n){r[_e3]=n[_e3];}return r;}function t(t){var n=e("div");return n.appendChild(t),n.innerHTML;}function i(e){var t;return e.nodeType!==Node.ELEMENT_NODE?t=e.textContent:(t=e.innerHTML,t=t.replaceAll("<br>","")),0===t.trim().length;}n.d(r,{"default":function _default(){return c;}});var s=/*#__PURE__*/function(){function s(){_classCallCheck(this,s);this.savedFakeCaret=void 0;}_createClass(s,[{key:"save",value:function save(){var t=s.range,n=e("span");n.hidden=!0,t.insertNode(n),this.savedFakeCaret=n;}},{key:"restore",value:function restore(){var _this5=this;if(!this.savedFakeCaret)return;var e=window.getSelection(),t=new Range();t.setStartAfter(this.savedFakeCaret),t.setEndAfter(this.savedFakeCaret),e.removeAllRanges(),e.addRange(t),setTimeout(function(){_this5.savedFakeCaret.remove();},150);}}],[{key:"range",get:function get(){var e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null;}},{key:"extractFragmentFromCaretPositionTillTheEnd",value:function extractFragmentFromCaretPositionTillTheEnd(){var e=window.getSelection();if(!e.rangeCount)return;var t=e.getRangeAt(0);var n=t.startContainer;n.nodeType!==Node.ELEMENT_NODE&&(n=n.parentNode);var r=n.closest("[contenteditable]");t.deleteContents();var i=t.cloneRange();return i.selectNodeContents(r),i.setStart(t.endContainer,t.endOffset),i.extractContents();}},{key:"focus",value:function focus(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var n=document.createRange(),r=window.getSelection();n.selectNodeContents(e),n.collapse(t),r.removeAllRanges(),r.addRange(n);}},{key:"isAtStart",value:function isAtStart(){var e=window.getSelection();if(e.focusOffset>0)return!1;var t=e.focusNode;return s.getHigherLevelSiblings(t,"left").every(function(e){return i(e);});}},{key:"getHigherLevelSiblings",value:function getHigherLevelSiblings(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"left";var n=e;var r=[];for(;n.parentNode&&"true"!==n.parentNode.contentEditable;){n=n.parentNode;}var i="left"===t?"previousSibling":"nextSibling";for(;n[i];){n=n[i],r.push(n);}return r;}}]);return s;}();var o=n(379),a=n.n(o),d=n(384);a()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var c=/*#__PURE__*/function(){function c(_ref){var e=_ref.data,t=_ref.config,n=_ref.api,r=_ref.readOnly;_classCallCheck(this,c);this.nodes={wrapper:null},this.api=n,this.readOnly=r,this.config=t,this.settings=[{name:"unordered",title:this.api.i18n.t("Unordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',"default":!1},{name:"ordered",title:this.api.i18n.t("Ordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',"default":!0}],this.defaultListStyle="ordered";var i={style:this.defaultListStyle,items:[]};this.data=e&&Object.keys(e).length?e:i,this.caret=new s();}_createClass(c,[{key:"render",value:function render(){var _this6=this;return this.nodes.wrapper=this.makeListWrapper(this.data.style,[this.CSS.baseBlock]),this.data.items.length?this.appendItems(this.data.items,this.nodes.wrapper):this.appendItems([{content:"",items:[]}],this.nodes.wrapper),this.readOnly||this.nodes.wrapper.addEventListener("keydown",function(e){switch(e.key){case"Enter":_this6.enterPressed(e);break;case"Backspace":_this6.backspace(e);break;case"Tab":e.shiftKey?_this6.shiftTab(e):_this6.addTab(e);}},!1),this.nodes.wrapper;}},{key:"renderSettings",value:function renderSettings(){var _this7=this;var t=e("div",[this.CSS.settingsWrapper],{});return this.settings.forEach(function(n){var r=e("div",_this7.CSS.settingsButton,{innerHTML:n.icon});r.addEventListener("click",function(){_this7.listStyle=n.name;var e=r.parentNode.querySelectorAll("."+_this7.CSS.settingsButton);Array.from(e).forEach(function(e){return e.classList.remove(_this7.CSS.settingsButtonActive);}),r.classList.toggle(_this7.CSS.settingsButtonActive);}),_this7.api.tooltip.onHover(r,n.title,{placement:"top",hidingDelay:500}),_this7.data.style===n.name&&r.classList.add(_this7.CSS.settingsButtonActive),t.appendChild(r);}),t;}},{key:"appendItems",value:function appendItems(e,t){var _this8=this;e.forEach(function(e){var n=_this8.createItem(e.content,e.items);t.appendChild(n);});}},{key:"createItem",value:function createItem(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var r=e("li",this.CSS.item),i=e("div",this.CSS.itemBody),s=e("div",this.CSS.itemContent,{innerHTML:t,contentEditable:!this.readOnly});return i.appendChild(s),r.appendChild(i),n&&n.length>0&&this.addChildrenList(r,n),r;}},{key:"save",value:function save(){var _this9=this;var e=function e(t){return Array.from(t.querySelectorAll(":scope > .".concat(_this9.CSS.item))).map(function(t){var n=t.querySelector(".".concat(_this9.CSS.itemChildren));return{content:_this9.getItemContent(t),items:n?e(n):[]};});};return{style:this.data.style,items:e(this.nodes.wrapper)};}},{key:"addChildrenList",value:function addChildrenList(e,t){var n=e.querySelector(".".concat(this.CSS.itemBody)),r=this.makeListWrapper(void 0,[this.CSS.itemChildren]);this.appendItems(t,r),n.appendChild(r);}},{key:"makeListWrapper",value:function makeListWrapper(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.listStyle;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var r="ordered"===t?"ol":"ul",i="ordered"===t?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered;return n.push(i),e(r,[this.CSS.wrapper].concat(_toConsumableArray(n)));}},{key:"CSS",get:function get(){return{baseBlock:this.api.styles.block,wrapper:"cdx-nested-list",wrapperOrdered:"cdx-nested-list--ordered",wrapperUnordered:"cdx-nested-list--unordered",item:"cdx-nested-list__item",itemBody:"cdx-nested-list__item-body",itemContent:"cdx-nested-list__item-content",itemChildren:"cdx-nested-list__item-children",settingsWrapper:"cdx-nested-list__settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive};}},{key:"listStyle",get:function get(){return this.data.style||this.defaultListStyle;},set:function set(e){var _this10=this;var t=Array.from(this.nodes.wrapper.querySelectorAll(".".concat(this.CSS.wrapper)));t.push(this.nodes.wrapper),t.forEach(function(t){t.classList.toggle(_this10.CSS.wrapperUnordered,"unordered"===e),t.classList.toggle(_this10.CSS.wrapperOrdered,"ordered"===e);}),this.data.style=e;}},{key:"currentItem",get:function get(){var e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(".".concat(this.CSS.item));}},{key:"enterPressed",value:function enterPressed(e){var n=this.currentItem;e.stopPropagation(),e.preventDefault();var r=0===this.getItemContent(n).trim().length,i=n.parentNode===this.nodes.wrapper,o=null===n.nextElementSibling;if(i&&o&&r)return void this.getOutOfList();if(o&&r)return void this.unshiftItem();var a=t(s.extractFragmentFromCaretPositionTillTheEnd()),d=n.querySelector(".".concat(this.CSS.itemChildren)),_c2=this.createItem(a,void 0);d&&Array.from(d.querySelectorAll(".".concat(this.CSS.item))).length>0?d.prepend(_c2):n.after(_c2),this.focusItem(_c2);}},{key:"unshiftItem",value:function unshiftItem(){var e=this.currentItem,t=e.parentNode.closest(".".concat(this.CSS.item));if(!t)return;this.caret.save(),t.after(e),this.caret.restore();var n=t.querySelector(".".concat(this.CSS.itemChildren));0===n.children.length&&n.remove();}},{key:"getItemContent",value:function getItemContent(e){var t=e.querySelector(".".concat(this.CSS.itemContent));return i(t)?"":t.innerHTML;}},{key:"focusItem",value:function focusItem(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;var n=e.querySelector(".".concat(this.CSS.itemContent));s.focus(n,t);}},{key:"getOutOfList",value:function getOutOfList(){this.currentItem.remove(),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());}},{key:"backspace",value:function backspace(e){var _this11=this;if(!s.isAtStart())return;e.preventDefault();var n=this.currentItem,r=n.previousSibling,i=n.parentNode.closest(".".concat(this.CSS.item));if(!r&&!i)return;var o;if(e.stopPropagation(),r){var _e4=r.querySelectorAll(".".concat(this.CSS.item));o=Array.from(_e4).pop()||r;}else o=i;var a=t(s.extractFragmentFromCaretPositionTillTheEnd()),d=o.querySelector(".".concat(this.CSS.itemContent));s.focus(d,!1),this.caret.save(),d.insertAdjacentHTML("beforeend",a);var _c3=n.querySelectorAll(".".concat(this.CSS.itemChildren," > .").concat(this.CSS.item));_c3=Array.from(_c3),_c3=_c3.filter(function(e){return e.parentNode.closest(".".concat(_this11.CSS.item))===n;}),_c3.reverse().forEach(function(e){r?o.after(e):n.after(e);}),n.remove(),this.caret.restore();}},{key:"addTab",value:function addTab(e){e.stopPropagation(),e.preventDefault();var t=this.currentItem,n=t.previousSibling;if(!n)return;var r=n.querySelector(".".concat(this.CSS.itemChildren));if(this.caret.save(),r)r.appendChild(t);else{var _e5=this.makeListWrapper(void 0,[this.CSS.itemChildren]),_r2=n.querySelector(".".concat(this.CSS.itemBody));_e5.appendChild(t),_r2.appendChild(_e5);}this.caret.restore();}},{key:"shiftTab",value:function shiftTab(e){e.stopPropagation(),e.preventDefault(),this.unshiftItem();}}],[{key:"isReadOnlySupported",get:function get(){return!0;}},{key:"enableLineBreaks",get:function get(){return!0;}},{key:"toolbox",get:function get(){return{icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',title:"List"};}},{key:"joinRecursive",value:function joinRecursive(e){return e.items.map(function(e){return"".concat(e.content," ").concat(c.joinRecursive(e));}).join("");}},{key:"conversionConfig",get:function get(){return{"export":function _export(e){return c.joinRecursive(e);},"import":function _import(e){return{items:[{content:e,items:[]}],style:"unordered"};}};}}]);return c;}();}(),r["default"];}();});var statusUser={user:"Utilisateur",admin:"Adminnistrateur",chief:"Cuisinier"};var getUsers=function getUsers(tab){console.log("nice");fetch('http://localhost/get-users',{headers:{'Accept':'application/json','Content-Type':'application/json'},method:'GET'}).then(function(r){return r.json();}).then(function(data){console.log(data);setTableUser(data,tab);})["catch"](function(error){console.log('Erreur : '+error);});};var getUserById=function getUserById(userId){console.log(userId);var form=Object.assign({},{id:userId});fetch('http://localhost/get-user',{headers:{'Accept':'application/json','Content-Type':'application/json'},method:'POST',body:JSON.stringify(form)}).then(function(r){return r.json();}).then(function(data){data=data[0];setAsideInfo(data);})["catch"](function(error){console.log('Erreur : '+error);});};var setTableUser=function setTableUser(data,tab){var rowNode=tab.row.add(['Fiona White',32,'Edinburgh','bonjour']).draw().node();tab.clear();var _iterator=_createForOfIteratorHelper(data),_step;try{var _loop=function _loop(){var row=_step.value;var cols=[];for(var col in row){if(col!='user_id'){cols.push(row[col]);}}var rowNode=tab.row.add(cols).draw().node();$(rowNode).click(function(){getUserById(row['user_id']);});};for(_iterator.s();!(_step=_iterator.n()).done;){_loop();}}catch(err){_iterator.e(err);}finally{_iterator.f();}};/*const setTableUser = (data, tab) => {
var statusCertification = {
  inDemand: "En cours de traitement",
  approved: "Approuvé",
  refused: "Refusé"
};

    var rowNode = tab
        .row.add( [ 'Fiona White', 32, 'Edinburgh', 'bonjour' ] )
        .draw()
        .node();
    
    tab.html("");
    for(const row of data) {
        let tr = $("<tr></tr>")
        tr.addClass("bd-t-1 bd-light-gray");
        tr.click(function() {
            getUserById(row['user_id'])
        });
        content.append(tr);
        let i = 0
        for(const col in row) {
            
            if(col != 'user_id') {
                let td = $('<td></td>')
                td.addClass("bd-t-1 bd-light-gray")

                if(i > 2)td.addClass("desktop")
                if(col == 'user_status') {
                    td.html(statusUser[row[col]])
                }else {
                    td.html(row[col]);
                }
                tr.append(td);
            }
            i++;
        }

        

    }
}*/var btns=function btns(){return["<button class='btn btn-pink'> Supprimer </button>","<button class='btn btn-pink'> Changer status </button>"];};var setAsideInfo=function setAsideInfo(data){$('.aside-info').removeClass("show");var info=$('#infos');info.html("");info.append("<p>".concat(data.user_lastname,"</p>"));info.append("<p>".concat(data.user_firstname,"</p>"));info.append("<p>".concat(data.user_email,"</p>"));info.append("<p>".concat(statusUser[data.user_status],"</p>"));var btns=$('#btns');btns.html("");btns.append("<button class='btn btn-pink little'> Changer status </button>");btns.append("<button class='btn btn-danger little' onclick='displayPopUp(".concat(data.user_id,")'> Supprimer </button>"));$('.aside-info').addClass("show");};$(document).ready(function(){if($('#list-table')[0]){//init datatables
tab=$('#list-table').DataTable({responsive:true,autoWidth:false,lengthChange:false,bInfo:false,language:{'paginate':{'previous':'<img src="assets/img/logo/arrow-list.svg">','next':'<img src="assets/img/logo/arrow-list.svg">'}}});// search custom input
$('#search').keyup(function(){console.log("ok");tab.search(this.value).draw();});getList(tab);}});var closeMenu=function closeMenu(){$('.aside-info').removeClass("show");};var getList=function getList(tab){for(var _i2=0,_arr=['user','article','comment'];_i2<_arr.length;_i2++){var i=_arr[_i2];if($('#list-table').hasClass(i)){window["get"+i[0].toUpperCase()+i.substring(1)+"s"](tab);}}};var displayPopUp=function displayPopUp(id){console.log(id);$('#pop-up').addClass('show');$('#cancel').click(closePopUp);$('#delete').click(closePopUp);};var closePopUp=function closePopUp(){$('#pop-up').removeClass('show');};$(document).ready(function(){var registerButton=$('#registerButton');var registerForm=$('#registerForm');var loginButton=$('#loginButton');var loginForm=$('#loginForm');var params=new URL(document.location).searchParams;var formType=params.get('formType');if(formType==='register'){registerButton.addClass('selected');loginForm.addClass('hidden');registerForm.addClass('smooth-div');}else{loginButton.addClass('selected');registerForm.addClass('hidden');loginForm.addClass('smooth-div');}console.log('gggg');registerButton.click(function(){displayForm(registerButton,registerForm,loginButton,loginForm);});loginButton.click(function(){displayForm(registerButton,registerForm,loginButton,loginForm);});});var displayForm=function displayForm(registerButton,registerForm,loginButton,loginForm){loginForm.toggleClass('hidden');loginButton.toggleClass('selected');registerForm.toggleClass('hidden');registerButton.toggleClass('selected');loginForm.toggleClass('smooth-div');registerForm.toggleClass('smooth-div');};$(document).ready(function(){$('#left').click(function(){moveToLeft();});$('#right').click(function(){moveToRight();});});var getValue=function getValue(){var container=$('#recette-container');return parseInt(container.attr("data-index"));};var moveToLeft=function moveToLeft(){var container=$('#recette-container');container.attr("data-index",getValue()-1>0?getValue()-1:0);hideImage();};var moveToRight=function moveToRight(){var container=$('#recette-container');container.attr("data-index",getValue()+1>getAllImg().length-1?getAllImg().length-1:getValue()+1);hideImage();};var getAllImg=function getAllImg(){return $(".recette-img");};var hideImage=function hideImage(){var img=getAllImg();var selected=getValue();img.each(function(i,t){if(i<selected){$(t).addClass('hidden-recipe');$(t).css({transform:"translateX(-".concat(100*(selected-1),"% + -").concat((selected-1)*5,"em) translateY(10%)")});}else{$(t).removeClass('hidden-recipe');$(t).css({transform:"translateX(calc(-".concat(100*selected,"% + -").concat(selected*5,"em))")});}});};$(document).ready(function(){$('.burger-menu').click(function(){$('.navbar').toggleClass('open');$('.navbar-front').toggleClass('open');});});
>>>>>>> enh(editorjs): add editorjs partial

var getCertifications = function getCertifications(tab) {
  fetch('http://localhost/get-certifications', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    setTableCertification(data, tab);
  })["catch"](function (error) {
    console.log('Erreur : ' + error);
  });
};

var setTableCertification = function setTableCertification(data, tab) {
  tab.clear();

  var _iterator2 = _createForOfIteratorHelper(data),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var row = _step2.value;
      var cols = [];

      for (var col in row) {
        if (col != 'certification_id') {
          cols.push(row[col]);
        }
      }

      var rowNode = tab.row.add(cols).draw().node();
      $(rowNode).click(function () {
        getCertificationById(row['certification_id']);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

var getCertificationById = function getCertificationById(certificationId) {
  var form = Object.assign({}, {
    id: certificationId
  });
  fetch('http://localhost/get-certification', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(form)
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    data = data[0];
    setAsideCertificationInfo(data);
  })["catch"](function (error) {
    console.log('Erreur : ' + error);
  });
};

var setAsideCertificationInfo = function setAsideCertificationInfo(data) {
  $('.aside-info').removeClass("show");
  var info = $('#infos');
  info.html("");
  info.append("<p>".concat(data.user_lastname, "</p>"));
  info.append("<p>".concat(data.user_firstname, "</p>"));
  info.append("<p>".concat(data.user_email, "</p>"));
  info.append("<p>".concat(statusCertification[data.certification_status], "</p>"));
  var btns = $('#btns');
  btns.html("");

  if (data.certification_status === 'inDemand') {
    btns.append("<button class='btn btn-pink little' onclick='modifyCertificationStatus(".concat(data.certification_id, ", \"approved\", ").concat(data.user_id, ")'> Aprouver </button>"));
    btns.append("<button class='btn btn-danger little' onclick='modifyCertificationStatus(".concat(data.certification_id, ", \"refused\", ").concat(data.user_id, ")'> Refuser </button>"));
  }

  $('.aside-info').addClass("show");
};

var modifyCertificationStatus = function modifyCertificationStatus(certificationId, certificationStatus, userId) {
  var form = Object.assign({}, {
    certification_id: certificationId,
    certification_status: certificationStatus,
    user_id: userId
  });
  console.log(form);
  fetch("http://localhost/modify-certification-status", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(form)
  }).then(function (r) {
    tab = $('#list-table').DataTable();
    getList(tab);
    getCertificationById(certificationId);
  })["catch"](function (error) {
    console.log('Erreur : ' + error);
  });
};
